// Parse the game's EXPORTSTATS JSON and derive analysis from it.
(function (OM) {
  // Parse the pasted text. Tolerates surrounding whitespace and a bare stats object.
  OM.parseExport = function (text) {
    let data;
    try { data = JSON.parse(text.trim()); }
    catch (e) { throw new Error('That is not valid JSON. Copy the whole export, including the outer braces.'); }
    if (data && data.stats && typeof data.stats === 'object') {
      return { version: String(data.version || '?'), gameTime: Number(data.time) || null, stats: data.stats };
    }
    if (data && typeof data === 'object' && 'pickaxe_damage' in data) {
      return { version: '?', gameTime: null, stats: data };
    }
    throw new Error('JSON parsed, but it does not look like an Idle Obelisk Miner export (no "stats" object).');
  };

  // Classify a stat key by its name. Good enough for grouping and formatting.
  OM.kindOf = function (key, value) {
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'boolean' || key.startsWith('is_')) return 'flag';
    if (/_chance$/.test(key) || /_chance_/.test(key)) return 'chance';
    if (/_multi(plier)?$/.test(key) || /_multi_/.test(key)) return 'multi';
    if (/_percent$/.test(key)) return 'percent';
    if (/(_level|_grade|_count|_cap|_floor|_caps?_increase|_unlocked|_eaten|_caught|_used|_progress|_rewarded|_reduction)$/.test(key)) return 'level';
    if (/_seconds$/.test(key) || /_timer_add$/.test(key)) return 'seconds';
    return 'value';
  };

  OM.groupOf = function (key) {
    const first = key.split('_')[0];
    const map = {
      pickaxe: 'Pickaxe', bomb: 'Bombs', drone: 'Drones', drones: 'Drones', is: 'Drones',
      fishing: 'Fishing', star: 'Stars', stars: 'Stars', super: 'Stars', lootfrog: 'Lootfrogs', lootfrogs: 'Lootfrogs',
      lootbug: 'Lootbugs', contract: 'Contracts', contracts: 'Contracts', craft: 'Crafting', bar: 'Crafting',
      vein: 'Veins', veinseeker: 'Drones', ore: 'Ores', ores: 'Ores', golden: 'Floor modifiers', rainbow: 'Floor modifiers',
      galactic: 'Floor modifiers', prismatic: 'Floor modifiers', gleaming: 'Floor modifiers', all: 'Global multipliers',
      void: 'Void portals', coal: 'Coal', elixir: 'Drones', gem: 'Gems', obelisk: 'Obelisk', freebie: 'Freebies',
      stonks: 'Stonks', ultra: 'Stonks', pet: 'Pets', statue: 'Statues', relics: 'Relics', idols: 'Archaeology',
      skill: 'Skill tree', challenge: 'Challenges', workshop: 'Workshop', regular: 'Upgrades', item: 'Items',
      chest: 'Fishing', midas: 'Drones', chain: 'Drones', bear: 'Drones', minotaur: 'Drones', prism: 'Drones',
      angler: 'Drones', frogger: 'Drones', starburst: 'Drones', infernal: 'Cards', experience: 'Experience',
      xp: 'Experience', prestige: 'Prestige', artifact: 'Prestige', game: 'Global multipliers', multi: 'Ores',
      novagiant: 'Stars', floor: 'Floors', current: 'Floors', worlds: 'Floors', world: 'Floors', black: 'Black hole',
      free: 'Crafting', double: 'Crafting', triple: 'Crafting', candy: 'Items', steak: 'Items', pizzas: 'Items',
      stickers: 'Stickers'
    };
    if (key === 'lootbug_and_elixir_uptime_array') return 'Items';
    return map[first] || 'Other';
  };

  OM.label = function (key) {
    return key.replace(/_array$/, '').replace(/^is_/, '').replace(/_/g, ' ')
      .replace(/\bmulti\b/g, 'multiplier').replace(/\bpercent\b/g, '%');
  };

  // Chance stats where values above 100 are known to still do something
  // (e.g. one guaranteed extra rock plus a chance of another).
  const OVERFLOW_OK = new Set(['multi_rock_chance']);
  // Stats that are not really chances even though named so (spawn rates, etc).
  const NOT_CHANCE = new Set(['lootbug_triple_chance']);

  const CRIT_TIERS = ['crit', 'super_crit', 'ultra_crit', 'omega_crit'];

  function critChain(stats, prefix) {
    const tiers = CRIT_TIERS.map(t => ({
      tier: t.replace('_', ' '),
      chance: Number(stats[`${prefix}_${t}_chance`]) || 0,
      dmg: Number(stats[`${prefix}_${t}_damage`]) || 1
    }));
    // Model: a hit rolls crit; only a crit can roll super crit; only a super crit
    // can roll ultra; only an ultra can roll omega. Damage multipliers stack.
    // Expected multiplier is computed from the last tier backwards.
    let expected = 1, p = 1, total = 1;
    for (let i = tiers.length - 1; i >= 0; i--) {
      const c = Math.min(tiers[i].chance, 100) / 100;
      expected = (1 - c) + c * tiers[i].dmg * expected;
    }
    tiers.forEach(t => { p *= Math.min(t.chance, 100) / 100; total *= t.dmg; });
    return { tiers, expected, allTiersMulti: total, guaranteed: tiers.every(t => t.chance >= 100), reachOmega: p };
  }

  // Derive everything the overview shows from a snapshot's stats.
  OM.analyze = function (stats) {
    const out = {};
    out.pickaxe = critChain(stats, 'pickaxe');
    out.bomb = critChain(stats, 'bomb');

    // Overflow / near-cap chances
    out.overflow = []; out.nearCap = [];
    for (const k in stats) {
      const v = stats[k];
      if (typeof v !== 'number') continue;
      if (OM.kindOf(k, v) !== 'chance' || NOT_CHANCE.has(k)) continue;
      if (v > 100 && !OVERFLOW_OK.has(k)) out.overflow.push({ key: k, value: v, wasted: v - 100 });
      else if (v >= 85 && v <= 100) out.nearCap.push({ key: k, value: v });
    }
    out.overflow.sort((a, b) => b.wasted - a.wasted);
    out.nearCap.sort((a, b) => b.value - a.value);

    // Buff timers (seconds remaining). Index -> name mapping is unknown; shown by index.
    out.buffs = [];
    ['item_uptime_array', 'lootbug_and_elixir_uptime_array'].forEach(arr => {
      (stats[arr] || []).forEach((s, i) => {
        if (typeof s === 'number' && s > 0) out.buffs.push({ arr, i, seconds: s });
      });
    });
    out.buffs.sort((a, b) => a.seconds - b.seconds);

    // Drones: equipped vs fuel grade
    const droneNames = ['bear', 'chain', 'midas', 'frogger', 'veinseeker', 'starburst', 'elixir', 'void', 'angler', 'prism', 'minotaur', 'basic'];
    out.drones = droneNames.map(n => ({
      name: n,
      equipped: !!stats[`is_drone_${n}_equipped`],
      fueled: !!stats[`is_drone_${n}_equipped_and_fueled`],
      grade: typeof stats[`${n}_fuel_grade`] === 'number' ? stats[`${n}_fuel_grade`] : null
    })).filter(d => d.grade !== null || d.equipped);
    out.drones.sort((a, b) => (b.grade || 0) - (a.grade || 0));

    // Bomb recharge table
    out.bombs = OM.bombTable(stats);
    return out;
  };

  OM.bombTable = function (stats, opts) {
    opts = opts || {};
    const speed = Number(stats.bomb_recharge_speed) || 1;
    const gs = opts.useGameSpeed ? (Number(stats.game_speed_multi) || 1) : 1;
    const extra = Number(opts.extraMulti) || 1;
    const list = (OM.data && OM.data.bombs) ? OM.data.bombs : [];
    return list.map(b => {
      const t = b.base / speed / gs / extra;
      return { key: b.key, name: b.name, base: b.base, effect: b.effect, seconds: t, perSec: 1 / t, perMin: 60 / t };
    });
  };

  // Growth between two snapshots. Returns rows for every numeric scalar stat.
  OM.growth = function (a, b) {
    const dtDays = Math.max((b.at - a.at) / 86400000, 1e-9);
    const rows = [];
    const keys = new Set([...Object.keys(a.stats), ...Object.keys(b.stats)]);
    keys.forEach(k => {
      const va = a.stats[k], vb = b.stats[k];
      if (typeof va !== 'number' || typeof vb !== 'number') return;
      if (va === vb) return;
      const delta = vb - va;
      const ratio = va > 0 && vb > 0 ? vb / va : null;
      // Daily geometric growth (multiplicative stats) and daily linear growth
      const dailyMult = ratio ? Math.pow(ratio, 1 / dtDays) : null;
      rows.push({ key: k, from: va, to: vb, delta, perDay: delta / dtDays, ratio, dailyMult });
    });
    rows.sort((x, y) => Math.abs((y.ratio || 1) - 1) - Math.abs((x.ratio || 1) - 1));
    return { dtDays, rows };
  };

  // Time (days) to reach target under linear or exponential growth. Returns null when unreachable.
  OM.timeToTarget = function (from, to, target, dtDays) {
    if (target <= to) return { days: 0 };
    const lin = to > from ? (target - to) / ((to - from) / dtDays) : null;
    const exp = (from > 0 && to > from) ? Math.log(target / to) / (Math.log(to / from) / dtDays) : null;
    return { linear: lin, exponential: exp };
  };
})(window.OM);
