// Stat model on top of the engine: fill inputs from a snapshot, compare with the
// export, break stats down by source, and rank next-level upgrades by effect.
(function (OM) {
  const n = v => (typeof v === 'number' && isFinite(v)) ? v : 0;

  OM.model = {};

  // Overrides for the engine from an export's stats object.
  OM.model.overridesFor = function (stats) {
    const map = OM.data.modelMap, o = {};
    const fillArr = (key, cells) => { const a = stats[key] || []; cells.forEach((c, i) => { o[c.cell] = n(a[i]); }); };
    ['regular_upgrades_array', 'contracts_array', 'workshop_array', 'challenge_upgrades_array', 'stars_star_level_array', 'pet_array', 'pet_quest_array', 'idols_array'].forEach(k => fillArr(k, map[k] || []));
    (map.skill_tree_nodes_array || []).forEach((node, i) => { const lvl = n((stats.skill_tree_nodes_array || [])[i]); node.rows.forEach((cell, j) => { o[cell] = j < lvl; }); });
    (map.obelisk_level || []).forEach((cell, i) => { o[cell] = i < n(stats.obelisk_level); });
    ['fishing_regular_card_array', 'fishing_legendary_card_levels_array'].forEach(k => (map[k] || []).forEach((card, i) => { const lvl = n((stats[k] || [])[i]); card.levels.forEach((cell, j) => { o[cell] = j < lvl; }); }));
    (map.world_4_quest_progress || []).forEach((cell, i) => { o[cell] = i < n(stats.world_4_quest_progress); });
    return o;
  };

  // Manual inputs (cells the export cannot fill) persist in the browser.
  const MANUAL = 'om.model.manual';
  OM.model.manual = {
    load() { try { return JSON.parse(localStorage.getItem(MANUAL) || '{}'); } catch (e) { return {}; } },
    save(obj) { try { localStorage.setItem(MANUAL, JSON.stringify(obj)); } catch (e) { /* ignore */ } },
    set(cell, value) { const m = OM.model.manual.load(); if (value === null || value === undefined || value === '') delete m[cell]; else m[cell] = value; OM.model.manual.save(m); }
  };
  OM.model.build = function (stats) {
    const eng = new OM.Engine(OM.data.model);
    eng.setMany(OM.model.overridesFor(stats));
    eng.setMany(OM.model.manual.load());
    return eng;
  };

  // Guess the export key for a model stat name, so the model can be checked against reality.
  const ALIAS = {
    'pickaxe attack speed': 'pickaxe_attack_speed_per_second', 'pickaxe radius': 'pickaxe_radius_percent', 'bomb recharge rate': 'bomb_recharge_speed',
    'free bomb chance': 'bomb_free_chance', 'additional bomb multiplier': 'bomb_additional_multiplier', 'triple cherry charge chance': 'bomb_cherry3x_chance',
    'bomb cap from battery bomb': 'bomb_battery_cap_increases', 'bomb cap multiplier': 'bomb_cap_multiplier', 'workshop upgrade cap increase': 'bomb_workshop_cap_increase',
    'number of drones': 'drone_count', 'drone damage (pickaxe%)': 'drone_damage_percent', 'drone radius': 'drone_radius_percent', 'drone movespeed': 'drone_movespeed_percent',
    'drone attack speed': 'drone_attack_speed_percent', 'drone suit upgrade cap': 'drone_suit_cap', 'coal generation time': 'coal_generation_seconds',
    'drone fuel duration multiplier': 'coal_fuel_duration_multi', 'coal capacity multiplier': 'coal_capacity_multi', 'fuel save chance': 'coal_fuel_save_chance',
    'drone exp gain multiplier': 'coal_drone_exp_multi', 'all void portal multiplier': 'all_void_portal_multi', 'chance for bigger rock spawn': 'multi_rock_chance',
    'ore sell price multiplier': 'ore_sell_price_multi', 'ore income multiplier': 'ore_income_multi', 'all floor multis': 'all_floor_multipliers',
    'bar cost reduction': 'bar_upgrade_cost_reduction', 'bar craft cost': 'bar_craft_cost_multi', 'bonus obelisk fight length': 'obelisk_timer_add', 'obelisk cooldown': 'obelisk_cooldown_multi',
    'prestige point gain multiplier': 'prestige_point_multi', 'experience gain multiplier': 'experience_multi', 'floor clear requirement': 'floor_clear_requirement_multi',
    'artifact upgrade cap increase': 'artifact_cap_increase', 'artifact t4 upgrade cap increase': 'artifact_tier4_cap_increase', 'lootbug spawn rate multiplier': 'lootbug_spawn_rate',
    'triple lootbug chance': 'lootbug_triple_chance', 'golden lootbug chance': 'lootbug_golden_chance', 'banked lootbug cap': 'lootbug_bank_cap', 'lootbug loot multiplier': 'lootbug_loot_multi',
    'banked lootfrog cap': 'lootfrog_capacity', 'lootfrog loot multiplier': 'lootfrog_loot_multi', 'golden lootfrog chance': 'lootfrog_golden_chance', 'golden lootfrog multiplier': 'lootfrog_golden_multi',
    'triple lootfrog chance': 'lootfrog_triple_spawn_chance', '10x lootfrog chance': 'lootfrog_10x_spawn_chance', 'big lootfrog chance': 'lootfrog_big_chance', 'big lootfrog multiplier': 'lootfrog_big_multi',
    'massive lootfrog chance': 'lootfrog_massive_chance', 'massive lootfrog multiplier': 'lootfrog_massive_multi', '2x chest chance': 'chest_double_chance', 'chest meter gain multiplier': 'chest_meter_multi',
    'items contained in chests': 'chest_items_bonus', 'freebie gems': 'freebie_gems_bonus', 'freebie jackpot chance': 'freebie_5x_chance', 'freebie instant refresh chance': 'freebie_refresh_chance',
    'banked freebie cap': 'freebie_bank_cap', 'freebie cooldown': 'freebie_cooldown_seconds', 'stonks freebie multiplier': 'stonks_multi', 'super stonks multiplier': 'super_stonks_multi', 'ultra stonks multiplier': 'ultra_stonks_multi',
    'double contract point chance': 'contract_double_points_chance', 'triple contract point chance': 'contract_triple_points_chance', '5x contract point chance': 'contract_5x_points_chance', '10x contract point chance': 'contract_10x_points_chance',
    'contract upgrade cap increase': 'contract_cap_increase', 'vein spawn rate multiplier': 'vein_spawn_rate_multi', 'vein income multiplier': 'vein_income_multi',
    'star spawn rate multiplier': 'star_spawn_rate', 'star auto-catch chance': 'star_auto_catch_chance', 'double star chance': 'star_double_spawn_chance', 'triple star chance': 'star_triple_spawn_chance',
    'super star spawn rate multiplier': 'super_star_spawn_multi', 'all star multiplier': 'all_star_multi', 'novagiant combo multiplier': 'novagiant_combo_multi',
    'fishing drone  base power': 'fishing_drone_power', 'fishing drone power multiplier': 'fishing_drone_multiplier', 'tier 2 dock power': 'fishing_tier2_dock_multi', 'fish income multiplier': 'fishing_income_multi',
    'fishing tick reduction': 'fishing_tick_reduction_seconds', 'double tick chance': 'fishing_double_tick_chance', 'triple tick chance': 'fishing_triple_tick_chance', '5x tick chance': 'fishing_5x_tick_chance',
    'fish token gain multiplier': 'fishing_token_multi', 'notice fish requirement': 'fishing_notice_requirement', 'tiny notice chance': 'fishing_tiny_notice_chance', 'shiny fish chance': 'fishing_shiny_chance',
    'shiny fish multiplier': 'fishing_shiny_multi', 'super shiny fish chance': 'fishing_super_shiny_chance', 'super shiny fish multiplier': 'fishing_super_shiny_multi',
    'game speed multiplier': 'game_speed_multi', 'item duration multiplier': 'item_duration_multi', 'pet level up chance': 'pet_levelup_chance_multi', 'infernal card bonus': 'infernal_card_multi',
    'elixir crit multi': 'elixir_crit_multi', 'golden void portal chance': 'golden_void_portal_chance', 'void portal base multiplier': 'void_portal_base_multi', 'pizzas eaten': 'pizzas_eaten', 'gold steak eaten': 'steak_eaten', 'contract points rewarded': 'contract_points_rewarded'
  };
  OM.model.exportKey = function (name, stats) {
    const key = name.trim().toLowerCase();
    if (ALIAS[key] && ALIAS[key] in stats) return ALIAS[key];
    const cands = [key.replace(/ /g, '_'), key.replace(/ multiplier$/, ' multi').replace(/ /g, '_'), key.replace(/ chance$/, '_chance').replace(/ /g, '_')];
    for (const c of cands) if (c in stats) return c;
    return null;
  };

  // Compare every model stat with the export. Chances in the sheet are fractions; the export uses percent.
  OM.model.validate = function (eng, stats) {
    return OM.data.model.stats.map(s => {
      const key = OM.model.exportKey(s.name, stats);
      let model = eng.stat(s.name);
      const isChance = /chance/i.test(s.name) || /_percent$/.test(key || '');
      if (isChance && model !== null) model *= 100;
      const actual = key ? stats[key] : null;
      const ratio = (typeof actual === 'number' && actual !== 0 && model) ? model / actual : null;
      return { name: s.name, key, model, actual, ratio, ok: ratio !== null && Math.abs(ratio - 1) < 0.02 };
    });
  };

  // Breakdown of a stat by source (the Statmath row).
  OM.model.breakdown = function (eng, name) {
    const s = OM.data.model.stats.find(x => x.name === name); if (!s) return [];
    return Object.keys(s.parts).map(src => ({ source: src, value: eng.get(s.parts[src]) })).filter(p => typeof p.value === 'number');
  };

  // Every levelled input the export fills, with a label, current level and cell.
  OM.model.levelInputs = function (stats) {
    const map = OM.data.modelMap, out = [];
    const push = (group, key, cells) => { const a = stats[key] || []; cells.forEach((c, i) => out.push({ group, cell: c.cell, level: n(a[i]), label: c.label || `${group} #${i + 1}`, max: typeof c.max === 'number' ? c.max : null })); };
    push('Upgrades', 'regular_upgrades_array', map.regular_upgrades_array || []);
    push('Contracts', 'contracts_array', map.contracts_array || []);
    push('Workshop', 'workshop_array', map.workshop_array || []);
    push('Challenges', 'challenge_upgrades_array', map.challenge_upgrades_array || []);
    push('Stars', 'stars_star_level_array', map.stars_star_level_array || []);
    push('Pets', 'pet_array', map.pet_array || []);
    push('Pet quests', 'pet_quest_array', map.pet_quest_array || []);
    push('Idols', 'idols_array', map.idols_array || []);
    (map.skill_tree_nodes_array || []).forEach((node, i) => out.push({ group: 'Skill tree', cell: node.rows, level: n((stats.skill_tree_nodes_array || [])[i]), label: node.name, max: node.rows.length, skill: true }));
    return out;
  };

  // Effect on one target stat of raising each input by one level (or one node).
  OM.model.advise = function (eng, stats, target, inputs) {
    const base = eng.stat(target);
    const rows = [];
    for (const inp of inputs) {
      if (inp.max !== undefined && inp.max !== null && typeof inp.max === 'number' && inp.level >= inp.max) continue;
      const saved = {};
      if (inp.skill) {
        const cell = inp.cell[inp.level]; if (!cell) continue;
        saved[cell] = eng.overrides[cell]; eng.set(cell, true);
      } else { saved[inp.cell] = eng.overrides[inp.cell]; eng.set(inp.cell, inp.level + 1); }
      const after = eng.stat(target);
      Object.keys(saved).forEach(c => eng.set(c, saved[c]));
      if (after !== base && base) rows.push({ ...inp, gain: after / base - 1, after });
    }
    rows.sort((a, b) => b.gain - a.gain);
    return { base, rows };
  };
})(window.OM);
