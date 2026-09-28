// Ported calculators. Pure functions: take numbers in, give numbers out.
// Each one notes the spreadsheet it came from so the math can be checked.
(function (OM) {
  const n = (v, d) => (typeof v === 'number' && isFinite(v)) ? v : (d === undefined ? 0 : d);
  const clamp01 = c => Math.min(1, Math.max(0, c));
  // AVG_MULT(chance%, mult) = expected multiplier when it fires chance% of the time.
  const avgMult = (chancePct, mult) => 1 + clamp01(chancePct / 100) * (mult - 1);

  OM.calc = {};

  // ---------- Contracts (Contract & Damage Calc 2.0) ----------
  // Expected points per contract and its standard deviation.
  OM.calc.contractPoints = function (p) {
    const base = n(p.points, 1);
    const tiers = [[p.x2, 2], [p.x3, 3], [p.x5, 5], [p.x10, 10]];
    let mean = 1, second = 1;
    tiers.forEach(([c, m]) => { const q = clamp01(n(c) / 100); mean *= 1 + q * (m - 1); second *= 1 + q * (m * m - 1); });
    const variance = base * base * second - (base * mean) * (base * mean);
    return { mean: base * mean, sd: Math.sqrt(Math.max(variance, 0)), multiplier: mean };
  };
  // Standard normal CDF (Abramowitz-Stegun), used for the prestige percentile.
  OM.calc.normCdf = function (z) {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  };
  // Cost (points) of one level of one contract.
  OM.calc.contractLevelCost = function (c, level) {
    if (level < 1) return 0;
    if (c.table) { const t = OM.data.contracts.pointsTable; return level <= t.length ? t[level - 1] : t[t.length - 1] * Math.pow(1.3, level - t.length); }
    return Math.ceil(c.base * Math.pow(1.3, level - 1));
  };
  // Total to go from level a to level b, after the player's cost multiplier.
  OM.calc.contractCost = function (c, from, to, costMult) {
    let s = 0;
    for (let l = from + 1; l <= to; l++) s += OM.calc.contractLevelCost(c, l);
    return Math.ceil(s * n(costMult, 1));
  };
  // Build the contract table for a snapshot: current, max, cost to max, per-level.
  OM.calc.contractTable = function (stats, opts) {
    opts = opts || {};
    const levels = stats.contracts_array || [];
    const cap = n(stats.contract_cap_increase);
    const costMult = n(opts.costMult, n(stats.contract_upgrade_cost_reduction, 1));
    return OM.data.contracts.contracts.map((c, i) => {
      const cur = n(levels[i], 0);
      const max = c.maxBase + cap;
      const toMax = OM.calc.contractCost(c, cur, max, costMult);
      const next = cur < max ? OM.calc.contractCost(c, cur, cur + 1, costMult) : 0;
      return { index: i, world: c.world, name: c.name, tag: c.tag, cur, max, next, toMax, spent: OM.calc.contractCost(c, 0, cur, costMult) };
    });
  };
  // Pickaxe damage decomposition. Levels: pdPerContract (idx 0), pickaxeDamage (idx 6), pbDamage (idx 23).
  OM.calc.contractDamage = function (p) {
    const N = n(p.contractsComplete), cap = n(p.cap);
    const L0 = n(p.pdPerContract), L6 = n(p.pickaxeDamage), L23 = n(p.pbDamage);
    const base = n(p.currentDamage) / (1 + L0 * N * 0.01 + L6 * 0.15) / (1 + L23 * 0.08);
    const potential = (base + base * ((cap + 1) * N * 0.01 + (cap + 3) * 0.15)) * (p.world3Statue ? (1 + (cap + 5) * 0.08) : 1);
    const after = more => (base + base * ((cap + 1) * (N + more) * 0.01 + (cap + 3) * 0.15)) * (p.world3Statue ? (1 + (cap + 5) * 0.08) : 1);
    return { base, potential, after };
  };

  // ---------- Transmuter vs Bomb of Plenty (Trans_vs_Bop_effectiveness) ----------
  OM.calc.transVsBop = function (p) {
    const freeMult = 100 / (100 - Math.min(n(p.free), 99.9));
    const tiers = [[p.x2, 2], [p.x3, 3], [p.x5, 5], [p.x10, 10], [p.x20, 20], [p.x100, 100]];
    let craftMult = freeMult;
    const parts = tiers.map(([c, m]) => { const v = avgMult(n(c), m); craftMult *= v; return { mult: m, chance: n(c), avg: v }; });
    const barsPerOre = craftMult / Math.max(n(p.barCost, 1), 1e-9);
    const bopBars = barsPerOre * n(p.bopMult, 1);
    const avgTransBop = avgMult(n(p.transBopChance), n(p.bopMult, 1));
    const transBars = barsPerOre * avgTransBop + n(p.transMult) * avgTransBop;
    const breakEvenCost = craftMult * (n(p.bopMult, 1) - avgTransBop) / (n(p.transMult, 1) * avgTransBop);
    return { freeMult, craftMult, parts, barsPerOre, bopBars, transBars, avgTransBop, breakEvenCost, transWins: transBars > bopBars };
  };

  // ---------- Vein income (vein_income.xlsx) ----------
  OM.calc.veinRarities = [['Stone', 15], ['Magma', 20], ['VR', 25], ['Space', 30], ['Sky', 35], ['Atomic', 40], ['World 2', 50], ['World 3', 70], ['World 4', 100]];
  OM.calc.veinIncome = function (p) {
    const ores = n(p.oresPerFloor, 10), rate = n(p.spawnRate), research = p.research ? 2 : 1;
    // Average yield multiplier from golden (with rainbow nested inside golden) and gleaming.
    const goldenMult = n(p.goldMult, 1) * avgMult(n(p.rainbowChance), n(p.rainbowMult, 1));
    const avg = avgMult(n(p.goldChance), goldenMult) * avgMult(n(p.gleamChance), n(p.gleamMult, 1));
    // Vein bomb: chance to turn all veins golden, so golden chance rises to gc + (1-gc)*bomb.
    const goldWithBomb = Math.min(100, n(p.goldChance) + (1 - clamp01(n(p.goldChance) / 100)) * n(p.bombChance));
    const avgBomb = avgMult(goldWithBomb, goldenMult) * avgMult(n(p.gleamChance), n(p.gleamMult, 1));
    const clearsPerHour = n(p.clearsPerMin, 48) * 60;
    const rows = OM.calc.veinRarities.map(([name, rarity]) => {
      const veins = Math.min(rate / rarity * research, ores);
      const veinsBomb = veins + (1 - veins / ores) * (n(p.bombChance) / 100) * ores; // bomb morphs ores into veins
      const yieldBase = veins * avg, yieldBomb = veinsBomb * avgBomb;
      return { name, rarity, veins, veinsBomb, yieldBase, yieldBomb, perHour: yieldBase * clearsPerHour, perHourBomb: yieldBomb * clearsPerHour,
        gain: (yieldBomb - yieldBase) * clearsPerHour, gainPct: yieldBase > 0 ? (yieldBomb / yieldBase - 1) * 100 : 0 };
    });
    return { avg, avgBomb, rows };
  };

  // ---------- Frogger gem rate (Frogger_Gem_Rate_Calculator) ----------
  // Fuel costs 5 gems. Frogger fires 5..(grade+5) bombs (min capped at 10) chosen from 13 types.
  OM.calc.frogger = function (p) {
    const fuelDur = n(p.fuelDurationMult, 1), saveInc = 1 / (1 - clamp01(n(p.fuelSaveChance)));
    const freeMult = 1 / (1 - clamp01(n(p.freeBombChance)));
    const a = (2 / 13) * freeMult;                         // battery refill rate per bomb
    const b = (n(p.d20Charges, 20) * freeMult) / (20 * 13); // d20 refill rate
    const ch = (1 + 2 * clamp01(n(p.cherryTriple))) * freeMult; // cherry charges per cherry
    const d = n(p.gemChance) * freeMult;                    // gems per gem bomb
    const denomA = 1 - a * b - a * ch - a * b * ch, denomB = 1 - a * b;
    const A = { battery: (a * d + a * b * d) / denomA, d20: (b * d + a * b * d) / denomA, cherry: (a * ch * d + a * b * ch * d) / denomA, gem: d };
    const B = { battery: (a * d + a * b * d + a * ch * d + a * b * ch * d) / denomB, d20: (b * d + a * b * d + b * ch * d + a * b * ch * d) / denomB, cherry: ch * d, gem: d };
    const strat = p.cherryOnBattery ? A : B;
    const perBombGems = strat.battery + strat.d20 + strat.cherry + strat.gem;
    const timeBetweenFires = Math.max((30 - n(p.level) * 1.5), 0.5) / Math.max(n(p.gameSpeed, 1), 1e-9);
    const rows = [];
    const maxGrade = Math.max(n(p.maxGrade, 45), 10);
    for (let g = 0; g <= maxGrade; g++) {
      const minB = Math.min(g + 5, 10), maxB = g + 5, avgB = (minB + maxB) / 2;
      const perType = avgB / 13;
      const gemsPerFire = perType * perBombGems;
      const fuelDuration = (180 + g * 9) * fuelDur * saveInc; // seconds of game time per fuel
      const consume = 5 / fuelDuration;                     // gems per game-second
      const produce = gemsPerFire / (timeBetweenFires * n(p.gameSpeed, 1));
      const net = produce - consume;
      rows.push({ grade: g, avgBombs: avgB, gemsPerFire, firesPerFuel: 5 / gemsPerFire, fuelDuration, netPerHour: net * 3600 * n(p.gameSpeed, 1), grossPerHour: produce * 3600 * n(p.gameSpeed, 1), costPerHour: consume * 3600 * n(p.gameSpeed, 1) });
    }
    return { rows, timeBetweenFires, perBombGems };
  };

  // ---------- Lootfrog rewards (Public_Frogspawn_Calculator) ----------
  OM.calc.lootfrogRewards = [
    { name: 'Gems', base: 75, weight: 70, gem: true }, { name: 'Relics', base: 15, weight: 50 }, { name: 'Fuel', base: 22.5, weight: 40 },
    { name: 'T2 items', base: 6, weight: 8 }, { name: 'Sushi', base: 4, weight: 8 }, { name: 'Blue cow', base: 7, weight: 6 },
    { name: 'Gems', base: 225, weight: 4, gem: true }, { name: 'Gems', base: 2000, weight: 2, gem: true }, { name: 'Relics', base: 125, weight: 2 },
    { name: 'Skill points', base: 2, weight: 2 }, { name: 'Sushi', base: 22.5, weight: 2 },
    { name: 'Lanterns', base: 0.5, weight: 1, caps: [3, 3, 6, 6, 9, 9] }, { name: 'Frogspawn', base: 0.5, weight: 1, caps: [3, 3, 3, 3, 6, 6] }, { name: 'Frogurt', base: 0.5, weight: 1, caps: [3, 3, 3, 3, 3, 3] }
  ];
  OM.calc.lootfrogs = function (p) {
    const loot = n(p.lootMulti, 1), gold = n(p.goldMulti, 1), big = n(p.bigMulti, 1), massive = n(p.massiveMulti, 1), gemM = n(p.gemMulti, 1);
    const gc = clamp01(n(p.goldChance) / 100), bc = clamp01(n(p.bigChance) / 100), mc = clamp01(n(p.massiveChance) / 100);
    // Six frog kinds: basic, golden basic, big, golden big, huge, golden huge
    const kinds = [
      { mult: loot, chance: (1 - gc) * (1 - bc) }, { mult: loot * gold, chance: gc * (1 - bc) },
      { mult: loot * big, chance: (1 - gc) * bc * (1 - mc) }, { mult: loot * gold * big, chance: gc * bc * (1 - mc) },
      { mult: loot * big * massive, chance: (1 - gc) * bc * mc }, { mult: loot * gold * big * massive, chance: gc * bc * mc }
    ];
    const totalW = OM.calc.lootfrogRewards.reduce((s, r) => s + r.weight, 0);
    const spawnMult = (1 + 2 * clamp01(n(p.tripleSpawn) / 100)) * (1 + 9 * clamp01(n(p.tenxSpawn) / 100));
    const cap = n(p.capacity, 1);
    const byName = {};
    OM.calc.lootfrogRewards.forEach(r => {
      const base = r.base * (r.gem ? gemM : 1);
      let avg = 0;
      kinds.forEach((k, i) => { let v = base * k.mult; if (r.caps) v = Math.min(v, r.caps[i]); avg += v * k.chance; });
      const perFrog = avg * r.weight / totalW;
      byName[r.name] = (byName[r.name] || 0) + perFrog;
    });
    return Object.keys(byName).map(name => ({ name, perFrog: byName[name], perSpawn: byName[name] * spawnMult, perFullSpawn: byName[name] * spawnMult * cap }));
  };

  // ---------- Card shard time (Misc_Card_Calc) ----------
  OM.calc.cardShards = function (s, p) {
    const clears = n(p.clearsPerMin, 48), ores = n(p.oresPerFloor, n(s.ores_per_floor, 10)), gs = n(s.game_speed_multi, 1);
    const clearsPerHour = gs * clears * 60;
    // Super stars
    const ssSpawnPerFc = n(s.star_spawn_rate) / 50 * n(s.super_star_spawn_multi) / 100;
    const ssPerSpawn = (1 + 0.02 * n(s.super_star_triple_chance)) * (1 + 0.09 * n(s.super_star_10x_chance));
    const nova = n(s.super_star_supernova_chance) / 100, giant = n(s.super_star_supergiant_chance) / 100;
    const all = n(s.all_star_multi, 1);
    const novaGiantMult = all * (1 - nova) * (1 - giant) + n(s.super_star_supernova_multi, 1) * all * nova * (1 - giant)
      + n(s.super_star_supergiant_multi, 1) * all * (1 - nova) * giant + n(s.super_star_supernova_multi, 1) * n(s.super_star_supergiant_multi, 1) * all * nova * giant;
    const radiant = 1 + (n(s.super_star_radiant_multi, 1) - 1) * n(s.super_star_radiant_chance);
    const ssPerHour = ssSpawnPerFc * ssPerSpawn * novaGiantMult * radiant * clearsPerHour;
    // Novagiant combos (regular stars + super stars)
    const starSpawnPerFc = n(s.star_spawn_rate) / 50;
    const starsPerSpawn = (1 + n(s.star_double_spawn_chance) * 0.01) * (1 + 0.02 * n(s.star_triple_spawn_chance));
    const ngStar = starsPerSpawn * n(s.star_supernova_chance) * n(s.star_supergiant_chance) * starSpawnPerFc * 1e-4;
    const ngSS = ssSpawnPerFc * ssPerSpawn * nova * giant;
    const ngPerHour = (ngStar + ngSS) * clearsPerHour;
    // Lootbugs
    const lbSpawns = 3 * gs * n(s.lootbug_spawn_rate);
    const lbPerHour = lbSpawns * (1 + 0.02 * n(s.lootbug_triple_chance));
    const glbPerHour = lbPerHour * n(s.lootbug_golden_chance) * 0.01;
    // Freebies and stonks
    const freebies = (3600 / Math.max(n(s.freebie_cooldown_seconds, 300), 1) * gs) / (1 - clamp01(n(s.freebie_refresh_chance) * 0.01));
    const stonks = freebies * (1 - Math.pow(1 - clamp01(n(s.stonks_chance) * 0.01), 3));
    const sStonks = stonks * n(s.super_stonks_chance) * 0.01, uStonks = sStonks * n(s.ultra_stonks_chance) * 0.01;
    // Ores, portals, veins
    const oresPerHour = ores * clearsPerHour;
    const portals = n(s.void_portal_chance) * oresPerHour * 0.01, gPortals = portals * n(s.golden_void_portal_chance) * 0.01, rPortals = gPortals * n(s.rainbow_void_portal_chance) * 0.01;
    const gOres = oresPerHour * n(s.golden_ore_chance) * 0.01;
    const bombVein = 0.1 + 0.001 * n(s.bomb_workshop_cap_increase);
    const stoneRate = 1 - (1 - n(s.vein_spawn_rate_multi) * 2 / (15 * ores)) * (1 - bombVein);
    const goldRate = 1 - (1 - stoneRate * n(s.golden_vein_chance) * 0.01) * (1 - bombVein);
    const veins = stoneRate * oresPerHour, gVeins = veins * goldRate, rVeins = gVeins * n(s.rainbow_vein_chance) * 0.01, glVeins = veins * n(s.gleaming_vein_chance) * 0.01;
    const cards = [
      ['Super star', 5e9, ssPerHour], ['Novagiant combo', 1.5e6, ngPerHour], ['Lootbug', 1e4, lbPerHour], ['Golden lootbug', 5e4, glbPerHour],
      ['Freebie', 1e4, freebies], ['Stonks', 2500, stonks], ['Super stonks', 100, sStonks], ['Ultra stonks', 3, uStonks],
      ['Void portal', 5e6, portals], ['Gold void portal', 2e6, gPortals], ['Rainbow void portal', 1e6, rPortals],
      ['World 1', 1.5e6, clearsPerHour], ['World 2', 3e6, clearsPerHour], ['World 3', 4.5e6, clearsPerHour], ['World 4', 4.5e6, clearsPerHour],
      ['Golden ore', 1.5e7, gOres], ['Golden vein', 5e6, gVeins], ['Rainbow vein', 5e6, rVeins], ['Gleaming vein', 5e6, glVeins]
    ];
    return cards.map(([name, need, perHour]) => ({ name, need, perHour, hours: perHour > 0 ? need / perHour : Infinity }));
  };
})(window.OM);
