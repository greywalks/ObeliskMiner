// Views for the ported calculators. Inputs are prefilled from the snapshot and editable.
(function (OM) {
  const el = OM.el, fmt = OM.fmt, pct = OM.pct, dur = OM.dur;

  // Small helper: a labelled numeric input bound to a state object.
  function num(state, key, label, opts) {
    opts = opts || {};
    const i = el('input', { type: 'number', value: state[key], step: opts.step || 'any', min: opts.min });
    i.addEventListener('input', () => { state[key] = Number(i.value); opts.on && opts.on(); });
    return el('label', {}, [label, i]);
  }
  function chk(state, key, label, on) {
    const i = el('input', { type: 'checkbox' }); i.checked = !!state[key];
    i.addEventListener('change', () => { state[key] = i.checked; on && on(); });
    return el('label', {}, el('span', {}, [i, ' ' + label]));
  }
  function needSnap() {
    return el('div', { class: 'panel' }, el('div', { class: 'empty' }, ['No snapshot selected. ', el('a', { href: '#import' }, 'Paste an export'), ' first.']));
  }
  const g = (s, k, d) => (typeof s[k] === 'number' ? s[k] : d);

  // ---------- Contracts ----------
  OM.views.contracts = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Contracts'));
    root.appendChild(el('p', { class: 'muted' }, 'Expected points per contract, how many contracts each upgrade still needs, and what your pickaxe damage looks like with more contracts. Ported from the Contract & Damage Calc 2.0.'));

    const st = { points: g(s, 'contract_points_rewarded', 1), x2: g(s, 'contract_double_points_chance', 0), x3: g(s, 'contract_triple_points_chance', 0),
      x5: g(s, 'contract_5x_points_chance', 0), x10: g(s, 'contract_10x_points_chance', 0), costMult: g(s, 'contract_upgrade_cost_reduction', 1),
      done: 0, earned: 0, currentDamage: g(s, 'pickaxe_damage', 0), world3: true, world: 0 };
    const out1 = el('div', { class: 'panel accent' }), out2 = el('div'), out3 = el('div', { class: 'panel' });

    function render() {
      const pts = OM.calc.contractPoints(st);
      out1.innerHTML = '';
      out1.appendChild(el('h2', {}, `${fmt(pts.mean)} points per contract on average`));
      out1.appendChild(el('p', {}, `Base ${fmt(st.points)} × ${fmt(pts.multiplier)} from the multiplier chances. Standard deviation ${fmt(pts.sd)} per contract.`));
      if (st.done > 0 && st.earned > 0) {
        const expected = pts.mean * st.done, z = (st.earned - expected) / (Math.sqrt(st.done) * pts.sd);
        const pc = OM.calc.normCdf(z);
        out1.appendChild(el('p', {}, `Over ${fmt(st.done, 0)} contracts you'd expect about ${fmt(expected, 0)} points; you earned ${fmt(st.earned, 0)}, which is the ${(pc * 100).toFixed(0)}th percentile. ` + (pc > 0.5 ? 'You ran above average, so a prestige now is fine.' : 'You ran below average; more contracts before prestige would likely pull you toward the mean.')));
      }

      const rows = OM.calc.contractTable(s, { costMult: st.costMult }).filter(r => !st.world || r.world === st.world);
      const totalToMax = rows.reduce((a, r) => a + r.toMax, 0);
      out2.innerHTML = '';
      out2.appendChild(el('div', { class: 'panel' }, [
        el('h2', {}, `${fmt(totalToMax, 0)} points to max ${st.world ? 'world ' + st.world : 'everything'} (about ${fmt(totalToMax / pts.mean, 0)} contracts)`),
        OM.table(['World', 'Contract', 'Type', 'Level', 'Max', 'Next level', 'To max', 'Contracts to max'],
          rows.map(r => ({ cells: [r.world, r.name, OM.data.contracts.tags[r.tag], r.cur, r.max, r.next ? fmt(r.next, 0) : '–', r.toMax ? fmt(r.toMax, 0) : el('span', { class: 'ok' }, 'maxed'), r.toMax ? fmt(r.toMax / pts.mean, 0) : ''], hl: r.cur < r.max && r.next > 0 && r.next === Math.min(...rows.filter(x => x.next > 0).map(x => x.next)) })),
          { num: [0, 3, 4, 5, 6, 7] }),
        el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Highlighted: the cheapest next level. Costs use your contract cost multiplier; adjust it above if the game shows different numbers. The export lists 34 contracts but the source sheet documents 33, so the last one is not shown.')
      ]));

      const lv = s.contracts_array || [];
      const dmg = OM.calc.contractDamage({ contractsComplete: st.done, cap: g(s, 'contract_cap_increase', 0), pdPerContract: lv[0], pickaxeDamage: lv[6], pbDamage: lv[23], currentDamage: st.currentDamage, world3Statue: st.world3 });
      out3.innerHTML = '';
      out3.appendChild(el('h2', {}, 'Pickaxe damage from contracts'));
      if (!st.done) out3.appendChild(el('p', { class: 'muted' }, 'Enter your completed contract count above to see this.'));
      else {
        out3.appendChild(el('p', {}, `Without any contract bonuses your damage would be about ${fmt(dmg.base)}. With every contract-related upgrade maxed at your current count it would be about ${fmt(dmg.potential)}.`));
        out3.appendChild(OM.table(['More contracts', 'Pickaxe damage', 'Gain'], [10, 100, 250, 500, 1000, 5000, 12000].map(m => [fmt(m, 0), fmt(dmg.after(m)), '+' + ((dmg.after(m) / dmg.potential - 1) * 100).toFixed(1) + '%']), { num: [0, 1, 2] }));
        out3.appendChild(el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Assumes the damage-related contracts are maxed (the source sheet models the potential, not the current levels).'));
      }
    }
    const worldSel = el('select'); [[0, 'All worlds'], [1, 'World 1'], [2, 'World 2'], [3, 'World 3'], [4, 'World 4']].forEach(([v, t]) => worldSel.appendChild(el('option', { value: v }, t)));
    worldSel.addEventListener('change', () => { st.world = Number(worldSel.value); render(); });
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [
      num(st, 'points', 'Points per contract', { on: render }), num(st, 'x2', '2x chance %', { on: render }), num(st, 'x3', '3x chance %', { on: render }),
      num(st, 'x5', '5x chance %', { on: render }), num(st, 'x10', '10x chance %', { on: render }), num(st, 'costMult', 'Cost multiplier', { on: render, step: '0.0001' }),
      num(st, 'done', 'Contracts completed', { on: render, step: '1' }), num(st, 'earned', 'Points earned this run', { on: render, step: '1' }),
      num(st, 'currentDamage', 'Current pickaxe damage', { on: render }), chk(st, 'world3', 'World 3 statue built', render), el('label', {}, ['Show', worldSel])
    ])));
    root.appendChild(out1); root.appendChild(out2); root.appendChild(out3);
    render();
  };

  // ---------- Crafting: Transmuter vs Bomb of Plenty ----------
  OM.views.crafting = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Transmuter vs Bomb of Plenty'));
    root.appendChild(el('p', { class: 'muted' }, 'Bars per ore from each bomb, using your craft multiplier chances. Ported from Trans_vs_Bop_effectiveness.'));
    const st = { free: g(s, 'free_craft_chance', 0), x2: g(s, 'double_craft_chance', 0), x3: g(s, 'triple_craft_chance', 0), x5: g(s, 'craft_5x_chance', 0), x10: g(s, 'craft_10x_chance', 0),
      x20: g(s, 'craft_20x_chance', 0), x100: g(s, 'craft_100x_chance', 0), barCost: 67, bopMult: g(s, 'bomb_of_plenty_multi', 1), transMult: g(s, 'bomb_transmuter_multi', 0), transBopChance: g(s, 'bomb_trans_apply_bop_chance', 0) };
    const out = el('div', { class: 'panel accent' });
    function render() {
      const r = OM.calc.transVsBop(st);
      out.innerHTML = '';
      out.appendChild(el('h2', {}, r.transWins ? `Transmuter wins: ${fmt(r.transBars)} vs ${fmt(r.bopBars)} bars per ore` : `Bomb of Plenty wins: ${fmt(r.bopBars)} vs ${fmt(r.transBars)} bars per ore`));
      out.appendChild(el('p', {}, `Average craft multiplier ${fmt(r.craftMult)} (free craft ${fmt(r.freeMult)}x × ` + r.parts.map(p => `${fmt(p.avg)}x from ${p.mult}x`).join(' × ') + `). Plain crafting yields ${fmt(r.barsPerOre)} bars per ore at ${st.barCost} ore per bar.`));
      out.appendChild(el('p', {}, `Transmuter applies a Bomb of Plenty stack ${pct(st.transBopChance, 0)} of the time, worth ${fmt(r.avgTransBop)}x on average. Transmuter is the better choice whenever a bar costs more than about ${fmt(r.breakEvenCost)} ore.`));
    }
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [
      num(st, 'free', 'Free craft %', { on: render }), num(st, 'x2', '2x %', { on: render }), num(st, 'x3', '3x %', { on: render }), num(st, 'x5', '5x %', { on: render }),
      num(st, 'x10', '10x %', { on: render }), num(st, 'x20', '20x %', { on: render }), num(st, 'x100', '100x %', { on: render }),
      num(st, 'barCost', 'Ore per bar (this ore)', { on: render }), num(st, 'bopMult', 'Bomb of Plenty multiplier', { on: render }), num(st, 'transMult', 'Transmuter multiplier', { on: render }), num(st, 'transBopChance', 'Transmuter applies BoP %', { on: render })
    ])));
    root.appendChild(out);
    render();
  };

  // ---------- Veins ----------
  OM.views.veins = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Vein income'));
    root.appendChild(el('p', { class: 'muted' }, 'Veins per floor and per hour by vein rarity, with and without the Veinmorpher bomb. Ported from vein_income.'));
    const st = { oresPerFloor: g(s, 'ores_per_floor', 10), spawnRate: g(s, 'vein_spawn_rate_multi', 0), research: true, goldChance: g(s, 'golden_vein_chance', 0), goldMult: g(s, 'golden_vein_multi', 1),
      rainbowChance: g(s, 'rainbow_vein_chance', 0), rainbowMult: g(s, 'rainbow_vein_multi', 1), gleamChance: g(s, 'gleaming_vein_chance', 0), gleamMult: g(s, 'gleaming_vein_multi', 1), bombChance: 10, clearsPerMin: 48 };
    const out = el('div');
    function render() {
      const r = OM.calc.veinIncome(st);
      out.innerHTML = '';
      out.appendChild(el('div', { class: 'panel accent' }, [
        el('h2', {}, `Average vein worth ${fmt(r.avg)}x a plain vein, ${fmt(r.avgBomb)}x with Veinmorpher`),
        OM.table(['Vein', 'Rarity', 'Veins / floor', 'With bomb', 'Yield / floor', 'With bomb', 'Veins / hour', 'With bomb', 'Bomb gain'],
          r.rows.map(v => [v.name, v.rarity, fmt(v.veins), fmt(v.veinsBomb), fmt(v.yieldBase), fmt(v.yieldBomb), fmt(v.perHour), fmt(v.perHourBomb), '+' + v.gainPct.toFixed(0) + '%']), { num: [1, 2, 3, 4, 5, 6, 7, 8] }),
        el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Veins per floor is capped at ores per floor. Yield counts golden, rainbow and gleaming veins as multiples of a plain vein. Per hour assumes your clears-per-minute rate.')
      ]));
    }
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [
      num(st, 'oresPerFloor', 'Ores per floor', { on: render }), num(st, 'spawnRate', 'Vein spawn rate', { on: render }), chk(st, 'research', '2x vein research', render),
      num(st, 'goldChance', 'Golden vein %', { on: render }), num(st, 'goldMult', 'Golden multiplier', { on: render }), num(st, 'rainbowChance', 'Rainbow vein %', { on: render }), num(st, 'rainbowMult', 'Rainbow multiplier', { on: render }),
      num(st, 'gleamChance', 'Gleaming vein %', { on: render }), num(st, 'gleamMult', 'Gleaming multiplier', { on: render }), num(st, 'bombChance', 'Veinmorpher effect %', { on: render }), num(st, 'clearsPerMin', 'Floor clears / min', { on: render })
    ])));
    root.appendChild(out);
    render();
  };

  // ---------- Frogger ----------
  OM.views.frogger = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Frogger gem rate'));
    root.appendChild(el('p', { class: 'muted' }, 'Net gems per hour from a fuelled Frogger suit at each grade, after paying 5 gems per fuel. Ported from the Frogger Gem Rate Calculator.'));
    const myGrade = g(s, 'frogger_fuel_grade', 0);
    const st = { fuelDurationMult: g(s, 'coal_fuel_duration_multi', 1), fuelSaveChance: g(s, 'coal_fuel_save_chance', 0) / 100, freeBombChance: g(s, 'bomb_free_chance', 0) / 100, d20Charges: 20,
      cherryTriple: g(s, 'bomb_cherry3x_chance', 0) / 100, gemChance: 0.03, cherryOnBattery: true, level: 15, gameSpeed: g(s, 'game_speed_multi', 1), maxGrade: Math.max(45, myGrade + 10) };
    const out = el('div');
    function render() {
      const r = OM.calc.frogger(st);
      const mine = r.rows[Math.min(myGrade, r.rows.length - 1)];
      const breakEven = r.rows.find(x => x.netPerHour > 0);
      out.innerHTML = '';
      out.appendChild(el('div', { class: 'panel accent' }, [
        el('h2', {}, mine ? `At grade ${myGrade}: ${mine.netPerHour >= 0 ? '+' : ''}${fmt(mine.netPerHour)} gems per hour net` : 'Frogger grade not in export'),
        el('p', {}, `Frogger fires every ${r.timeBetweenFires.toFixed(2)} s. ` + (breakEven ? `Frogger pays for its own fuel from grade ${breakEven.grade} up.` : 'Frogger never pays for its fuel with these inputs.')),
        OM.table(['Grade', 'Avg bombs / fire', 'Gems / fire', 'Fires per fuel', 'Fuel lasts', 'Gems / hour', 'Fuel cost / hour', 'Net / hour'],
          r.rows.filter(x => x.grade % 5 === 0 || x.grade === myGrade || Math.abs(x.grade - myGrade) <= 2).map(x => ({ cells: [x.grade, fmt(x.avgBombs), fmt(x.gemsPerFire, 3), fmt(x.firesPerFuel), dur(x.fuelDuration), fmt(x.grossPerHour), fmt(x.costPerHour), el('span', { class: x.netPerHour >= 0 ? 'ok' : 'bad' }, fmt(x.netPerHour))], hl: x.grade === myGrade })), { num: [0, 1, 2, 3, 4, 5, 6, 7] })
      ]));
    }
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [
      num(st, 'fuelDurationMult', 'Fuel duration multiplier', { on: render }), num(st, 'fuelSaveChance', 'Fuel save chance (0-1)', { on: render }), num(st, 'freeBombChance', 'Free bomb chance (0-1)', { on: render }),
      num(st, 'd20Charges', 'D20 charges refilled', { on: render }), num(st, 'cherryTriple', 'Cherry triple chance (0-1)', { on: render }), num(st, 'gemChance', 'Gem bomb gem chance (0-1)', { on: render, step: '0.001' }),
      num(st, 'level', 'Frogger level', { on: render, step: '1' }), num(st, 'gameSpeed', 'Game speed', { on: render }), chk(st, 'cherryOnBattery', 'Spend cherry charges on battery bombs', render)
    ])));
    root.appendChild(out);
    render();
  };

  // ---------- Lootfrogs ----------
  OM.views.lootfrogs = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Lootfrog rewards'));
    root.appendChild(el('p', { class: 'muted' }, 'Average loot per frog, per spawn, and per full-capacity spawn. Ported from the Public Frogspawn Calculator.'));
    const st = { lootMulti: g(s, 'lootfrog_loot_multi', 1), gemMulti: 1, goldChance: g(s, 'lootfrog_golden_chance', 0), goldMulti: g(s, 'lootfrog_golden_multi', 1), bigChance: g(s, 'lootfrog_big_chance', 0), bigMulti: g(s, 'lootfrog_big_multi', 1),
      massiveChance: g(s, 'lootfrog_massive_chance', 0), massiveMulti: g(s, 'lootfrog_massive_multi', 1), tripleSpawn: g(s, 'lootfrog_triple_spawn_chance', 0), tenxSpawn: g(s, 'lootfrog_10x_spawn_chance', 0), capacity: g(s, 'lootfrog_capacity', 1) };
    const out = el('div');
    function render() {
      const rows = OM.calc.lootfrogs(st);
      out.innerHTML = '';
      out.appendChild(el('div', { class: 'panel accent' }, [
        el('h2', {}, `${fmt(rows.find(r => r.name === 'Gems').perFullSpawn)} gems per full spawn on average`),
        OM.table(['Reward', 'Per frog', 'Per spawn', 'Per full spawn'], rows.map(r => [r.name, fmt(r.perFrog, 3), fmt(r.perSpawn, 3), fmt(r.perFullSpawn, 2)]), { num: [1, 2, 3] }),
        el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Lanterns, frogspawn and frogurt are capped per frog kind, as in the source sheet. Set the gem multiplier if you have a lootfrog gem bonus the export does not show.')
      ]));
    }
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [
      num(st, 'lootMulti', 'Loot multiplier', { on: render }), num(st, 'gemMulti', 'Gem multiplier', { on: render }), num(st, 'goldChance', 'Golden %', { on: render }), num(st, 'goldMulti', 'Golden multiplier', { on: render }),
      num(st, 'bigChance', 'Big %', { on: render }), num(st, 'bigMulti', 'Big multiplier', { on: render }), num(st, 'massiveChance', 'Massive %', { on: render }), num(st, 'massiveMulti', 'Massive multiplier', { on: render }),
      num(st, 'tripleSpawn', 'Triple spawn %', { on: render }), num(st, 'tenxSpawn', '10x spawn %', { on: render }), num(st, 'capacity', 'Capacity', { on: render })
    ])));
    root.appendChild(out);
    render();
  };

  // ---------- Card shards ----------
  OM.views.cards = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Card shard time'));
    root.appendChild(el('p', { class: 'muted' }, 'How long each misc card takes to earn one shard at your current rates. Ported from the Misc Card Calc.'));
    const st = { clearsPerMin: 48, oresPerFloor: g(s, 'ores_per_floor', 10) };
    const out = el('div');
    function render() {
      const rows = OM.calc.cardShards(s, st).sort((a, b) => a.hours - b.hours);
      out.innerHTML = '';
      out.appendChild(el('div', { class: 'panel accent' }, [
        OM.table(['Card', 'Needed per shard', 'Your rate / hour', 'Time per shard'], rows.map(r => [r.name, fmt(r.need, 0), fmt(r.perHour), isFinite(r.hours) ? dur(r.hours * 3600) : el('span', { class: 'muted' }, 'never')]), { num: [1, 2, 3] }),
        el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Rates use the stats in your export as they are, including whatever drones were equipped when you exported.')
      ]));
    }
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [num(st, 'clearsPerMin', 'Floor clears / min', { on: render }), num(st, 'oresPerFloor', 'Ores per floor', { on: render })])));
    root.appendChild(out);
    render();
  };
})(window.OM);
