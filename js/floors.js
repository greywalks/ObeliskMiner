// Best floor to farm (ores and veins). Ported from IOM Best Floor To Farm V3.3.4.
// Data (ore floors, vein zones, speed and cap tables) lives in data/floors.json.
(function (OM) {
  const n = (v, d) => (typeof v === 'number' && isFinite(v)) ? v : (d === undefined ? 0 : d);
  const c01 = c => Math.min(1, Math.max(0, c));
  const FLOORS = 132, FLOORS_PER_HOUR = 2880; // 48 clears a minute at 1x game speed
  const inRange = (f, r) => f >= r[0] && f <= r[1];

  OM.calc.floors = {};

  // World-4 speed modifier from quests done (Best Ore Q63).
  OM.calc.floors.w4Speed = function (quests) {
    for (const [q, v] of OM.data.floors.w4SpeedByQuests) if (quests >= q) return v;
    return 0.8;
  };

  // Per-floor game-speed factor relative to base speed.
  OM.calc.floors.speedFactor = function (f, p) {
    const S = OM.data.floors.speedFloors;
    let m = 1;
    for (const r of S.ranges) if (inRange(f, r)) m *= r[2];
    if (inRange(f, S.world3) && !p.w3Fix) m *= S.world3[2];
    if (f >= S.world4Start) m *= (1 - n(p.w4Speed, 0));
    return m;
  };

  // The export reports game speed as seen on the current floor; undo that floor's modifier.
  OM.calc.floors.baseSpeed = function (stats, p) {
    const gs = n(stats.game_speed_multi, 1), cur = n(stats.current_floor, 1);
    const S = OM.data.floors.speedFloors;
    if (inRange(cur, S.world3) && !p.w3Fix) return gs / S.world3[2];
    if (cur >= S.world4Start) return gs / Math.max(1 - n(p.w4Speed, 0), 0.05);
    return gs;
  };

  // Inputs shared by both models, prefilled from a snapshot.
  OM.calc.floors.inputs = function (s) {
    const notices = s.fishing_notices_array || [];
    const quests = n(s.world_4_quest_progress);
    return {
      oresPerScreen: n(s.ores_per_screen, 10), oreIncome: n(s.ore_income_multi, 1),
      gFloorC: c01(n(s.golden_floor_chance) / 100), gFloorM: n(s.golden_floor_multi, 1),
      rFloorC: c01(n(s.rainbow_floor_chance) / 100), rFloorM: n(s.rainbow_floor_multi, 1),
      gaFloorC: c01(n(s.galactic_floor_chance) / 100), gaFloorM: n(s.galactic_floor_multi, 1),
      pFloorC: c01(n(s.prismatic_floor_chance) / 100), pFloorM: n(s.prismatic_floor_multi, 1),
      gOreC: c01(n(s.golden_ore_chance) / 100), gOreM: n(s.golden_ore_multi, 1),
      rOreC: c01(n(s.rainbow_ore_chance) / 100), rOreM: n(s.rainbow_ore_multi, 1),
      voidC: c01(n(s.void_portal_chance) / 100), voidM: n(s.void_portal_multi, 0), voidBase: n(s.void_portal_base_multi, 1),
      gVoidC: c01(n(s.golden_void_portal_chance) / 100), gVoidM: n(s.golden_void_portal_multi, 1),
      rVoidC: c01(n(s.rainbow_void_portal_chance) / 100), rVoidM: n(s.rainbow_void_portal_multi, 1),
      gaVoidC: c01(n(s.galactic_void_portal_chance) / 100), gaVoidM: n(s.galactic_void_portal_multi, 1),
      w3Fix: notices[14] === 1, w4Speed: OM.calc.floors.w4Speed(quests), gameSpeed: 1,
      veinSpawn: n(s.vein_spawn_rate_multi), veinIncome: n(s.vein_income_multi, 1),
      gVeinC: c01(n(s.golden_vein_chance) / 100), gVeinM: n(s.golden_vein_multi, 1),
      rVeinC: c01(n(s.rainbow_vein_chance) / 100), rVeinM: n(s.rainbow_vein_multi, 1),
      glVeinC: c01(n(s.gleaming_vein_chance) / 100), glVeinM: n(s.gleaming_vein_multi, 1),
      research: true, morphChance: 0, morphGold: 0
    };
  };

  // Expected floor-tier multiplier on a floor (Best Ore X/Z/AB/AD/AF/AH/AJ columns).
  function floorMult(f, p) {
    const G = OM.data.floors.goldenFloorCaps;
    let g = p.gFloorC, r = p.rFloorC, ga = p.gaFloorC, pr = p.pFloorC, tierScale = 1, oreScale = 1;
    for (const c of G.caps) if (inRange(f, c)) g = Math.min(g, c[2]);
    for (const c of G.rainbowTierScale) if (inRange(f, c)) tierScale = c[2];
    for (const c of G.prismaticMinus) if (inRange(f, c)) pr = Math.max(pr - c[2], 0);
    for (const c of G.halfGoldenOre) if (inRange(f, c)) oreScale = 0.5;
    const W4 = p.oreIncome, W5 = p.gFloorM * W4, W6 = W5 * p.rFloorM, W7 = W6 * p.gaFloorM, W8 = W7 * p.pFloorM;
    const W9 = p.rFloorM * W4, W10 = W9 * p.gaFloorM, W11 = W10 * p.pFloorM;
    const tiers = [
      [(1 - g) * (1 - r), W4], [g * (1 - r), W5],
      [g * r * (1 - ga), W6], [g * r * ga * (1 - pr), W7], [g * r * ga * pr, W8],
      [(1 - g) * r * (1 - ga), W9], [(1 - g) * r * ga * (1 - pr), W10], [(1 - g) * r * ga * pr, W11]
    ];
    let sum = 0;
    tiers.forEach((t, i) => { sum += t[0] * t[1] * (i >= 2 ? tierScale : 1); });
    // Expected golden/rainbow ore multiplier (W27/W28, halved on some floors).
    const gm = p.gOreM * oreScale;
    const oreMult = Math.max((1 - p.gOreC) + p.gOreC * gm, (1 - p.gOreC) + p.gOreC * gm * ((1 - p.rOreC) + p.rOreC * p.rOreM));
    return sum * oreMult;
  }

  // Void portal outcome table: chance and multiplier per portal kind, scaled for reduced floors.
  function voidTable(f, p) {
    const V = OM.data.floors.speedFloors.voidReduced;
    let c = p.voidC; if (V.some(r => inRange(f, r))) c *= 0.4;
    const m1 = p.voidM * p.voidBase, m2 = m1 * p.gVoidM, m3 = m2 * p.rVoidM, m4 = m3 * p.gaVoidM;
    const g = p.gVoidC, r = p.rVoidC, ga = p.gaVoidC;
    return { none: 1 - c, kinds: [[c * (1 - g), m1], [c * g * (1 - r), m2], [c * g * r * (1 - ga), m3], [c * g * r * ga, m4]], chance: c,
      avgMult: c > 0 ? (c * (1 - g) * m1 + c * g * (1 - r) * m2 + c * g * r * (1 - ga) * m3 + c * g * r * ga * m4) / c : 0 };
  }

  // Ores per hour of one ore on every floor, with and without void portals.
  OM.calc.floors.ore = function (oreName, p) {
    const ores = OM.data.floors.ores;
    const idx = ores.findIndex(o => o.name === oreName);
    if (idx < 0) return null;
    const ore = ores[idx];
    const rows = [];
    let perfect = 0;
    for (let f = 1; f <= FLOORS; f++) {
      const fm = floorMult(f, p) * FLOORS_PER_HOUR * p.gameSpeed * OM.calc.floors.speedFactor(f, p) * p.oresPerScreen;
      const frac = ore.floors[f] || 0;
      const vt = voidTable(f, p);
      const portalValue = vt.kinds.reduce((a, k) => a + k[0] * k[1], 0);
      // Portals from any ore Y on this floor give a uniform pick of ores 1..Y, so X gets 1/Y of Y's portals when X <= Y.
      let voidShare = frac * vt.none;
      ores.forEach((y, j) => { const fy = y.floors[f]; if (fy && j >= idx) voidShare += fy * portalValue / (j + 1); });
      rows.push({ floor: f, base: frac * fm, void: voidShare * fm, present: frac > 0 });
      perfect = Math.max(perfect, floorMult(f, p) * FLOORS_PER_HOUR * p.gameSpeed * p.oresPerScreen);
    }
    const bestBase = rows.slice().sort((a, b) => b.base - a.base);
    const bestVoid = rows.slice().sort((a, b) => b.void - a.void);
    return { ore, rows, perfect, bestBase, bestVoid, useVoid: bestVoid[0].void > bestBase[0].base };
  };

  // Veins per hour for one vein type on every floor (Best Veins Y..AF columns).
  OM.calc.floors.vein = function (veinName, p) {
    const D = OM.data.floors, ores = D.ores;
    const v = D.veins.find(x => x.name === veinName);
    if (!v) return null;
    const veinsPerScreen = p.morphChance * p.oresPerScreen + (1 - p.morphChance) * Math.min(p.oresPerScreen, p.veinSpawn * (p.research ? 2 : 1) / v.rarity);
    const g = p.gVeinC, r = p.rVeinC, gl = p.glVeinC;
    const variant = (p.morphGold * p.gVeinM * (1 + g * r * (p.rVeinM - 1)) + (1 - p.morphGold) * ((1 - g) + g * (1 - r) * p.gVeinM + g * r * p.gVeinM * p.rVeinM)) * ((1 - gl) + gl * p.glVeinM);
    // Portal weight per ore: portals from ore i (1-based) give ores 1..i uniformly; count how many fall in the vein's ore range.
    const weight = i => i < v.firstOre ? 0 : (Math.min(i, v.lastOre) - v.firstOre + 1) / i;
    const rows = [];
    for (let f = 1; f <= FLOORS; f++) {
      const screens = FLOORS_PER_HOUR * p.gameSpeed * OM.calc.floors.speedFactor(f, p);
      const inZone = f >= v.firstFloor && f <= v.lastFloor ? 1 : 0;
      let share = 0; ores.forEach((o, i) => { const fr = o.floors[f]; if (fr) share += fr * weight(i + 1); });
      const vt = voidTable(f, p);
      const node = (1 - vt.chance) * inZone + vt.chance * share * vt.avgMult;
      const nodeNoVoid = inZone;
      rows.push({ floor: f, void: veinsPerScreen * node * screens * p.veinIncome * variant, base: veinsPerScreen * nodeNoVoid * screens * p.veinIncome * variant, present: inZone === 1 });
    }
    const perfectBase = veinsPerScreen * FLOORS_PER_HOUR * p.gameSpeed * p.veinIncome * variant;
    const bestBase = rows.slice().sort((a, b) => b.base - a.base), bestVoid = rows.slice().sort((a, b) => b.void - a.void);
    return { vein: v, rows, veinsPerScreen, variant, perfect: perfectBase, bestBase, bestVoid, useVoid: bestVoid[0].void >= bestBase[0].base };
  };
})(window.OM);
