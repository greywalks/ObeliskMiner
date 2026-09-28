// Each view renders into its section element from the current snapshot.
(function (OM) {
  const el = OM.el, fmt = OM.fmt, pct = OM.pct, dur = OM.dur;
  OM.views = {};

  // ---------- Import ----------
  OM.views.import = function (root) {
    root.innerHTML = '';
    const has = OM.store.all().length > 0;
    root.appendChild(el('h1', {}, has ? 'Add a snapshot' : 'Paste your first export'));
    root.appendChild(el('p', { class: 'muted' },
      'In the game, use the EXPORTSTATS code to copy your stats, then paste the JSON below. Each paste is stored as a snapshot in this browser so growth can be measured over time.'));

    const ta = el('textarea', { placeholder: '{ "version": "v2.2.25", "time": ..., "stats": { ... } }', 'aria-label': 'Export JSON' });
    const drop = el('div', { class: 'drop' }, 'Or drop an exported .json / .txt file here');
    const when = el('input', { type: 'datetime-local', value: OM.inputDT(Date.now()) });
    const note = el('input', { type: 'text', placeholder: 'e.g. before prestige, after event', style: 'width:18rem' });
    const status = el('p', { class: 'small muted' });

    drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('hover'); });
    drop.addEventListener('dragleave', () => drop.classList.remove('hover'));
    drop.addEventListener('drop', e => {
      e.preventDefault(); drop.classList.remove('hover');
      const f = e.dataTransfer.files[0]; if (!f) return;
      f.text().then(t => { ta.value = t; preview(); });
    });
    ta.addEventListener('input', preview);

    function preview() {
      try {
        const p = OM.parseExport(ta.value);
        const n = Object.keys(p.stats).length;
        status.className = 'small ok';
        status.textContent = `Looks good: version ${p.version}, ${n} stats, obelisk ${fmt(p.stats.obelisk_level)}, floor ${fmt(p.stats.current_floor)}.`;
      } catch (e) {
        status.className = 'small ' + (ta.value.trim() ? 'bad' : 'muted');
        status.textContent = ta.value.trim() ? e.message : '';
      }
    }

    const save = el('button', { class: 'primary', onclick: () => {
      let p;
      try { p = OM.parseExport(ta.value); } catch (e) { OM.toast(e.message); return; }
      const at = when.value ? new Date(when.value).getTime() : Date.now();
      const snap = OM.store.add({ at, version: p.version, gameTime: p.gameTime, stats: p.stats, note: note.value.trim() });
      OM.setCurrent(snap.id);
      OM.toast('Snapshot saved');
      location.hash = '#overview';
    } }, 'Save snapshot');

    root.appendChild(el('div', { class: 'panel accent' }, [
      drop, ta, status,
      el('div', { class: 'row', style: 'margin-top:.75rem' }, [
        el('label', {}, ['Taken at', when]),
        el('label', {}, ['Note (optional)', note]),
        save
      ])
    ]));

    // Snapshot management
    const snaps = OM.store.all();
    const panel = el('div', { class: 'panel' }, el('h2', {}, `Saved snapshots (${snaps.length})`));
    if (!snaps.length) {
      panel.appendChild(el('div', { class: 'empty' }, 'No snapshots yet. Paste an export above to start.'));
    } else {
      panel.appendChild(OM.table(['Taken', 'Version', 'Obelisk', 'Floor', 'Pickaxe dmg', 'Note', ''],
        snaps.map(s => [
          OM.localDT(s.at), s.version, fmt(s.stats.obelisk_level), fmt(s.stats.current_floor), fmt(s.stats.pickaxe_damage), s.note || '',
          el('span', {}, [
            el('button', { class: 'small', onclick: () => { OM.setCurrent(s.id); location.hash = '#overview'; } }, 'Open'), ' ',
            el('button', { class: 'small danger', onclick: () => { if (confirm('Delete this snapshot?')) { OM.store.remove(s.id); OM.render(); } } }, 'Delete')
          ])
        ]), { num: [2, 3, 4] }));
    }
    const file = el('input', { type: 'file', accept: '.json,application/json', style: 'display:none' });
    file.addEventListener('change', () => {
      const f = file.files[0]; if (!f) return;
      f.text().then(t => { try { const n = OM.store.importJSON(t); OM.toast(`Imported ${n} snapshot(s)`); OM.render(); } catch (e) { OM.toast(e.message); } });
    });
    panel.appendChild(el('div', { class: 'actions' }, [
      el('button', { onclick: () => OM.download('obelisk-snapshots.json', OM.store.exportJSON()) }, 'Back up all snapshots'),
      el('button', { onclick: () => file.click() }, 'Restore from backup'),
      el('button', { class: 'danger', onclick: () => { if (confirm('Delete every snapshot in this browser?')) { OM.store.clear(); OM.setCurrent(null); OM.render(); } } }, 'Delete all'),
      file
    ]));
    root.appendChild(panel);
  };

  // ---------- Overview ----------
  OM.views.overview = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats, a = OM.analyze(s);
    root.appendChild(el('h1', {}, 'Overview'));
    root.appendChild(el('p', { class: 'muted small' }, `Snapshot from ${OM.localDT(snap.at)}, game version ${snap.version}${snap.note ? ', ' + snap.note : ''}.`));

    const tiles = [
      ['Obelisk level', fmt(s.obelisk_level)], ['Current floor', fmt(s.current_floor)], ['Worlds unlocked', fmt(s.worlds_unlocked)],
      ['Pickaxe damage', fmt(s.pickaxe_damage)], ['Bomb damage', fmt(s.bomb_damage)], ['Game speed', fmt(s.game_speed_multi) + 'x'],
      ['Pickaxe crit multiplier', fmt(a.pickaxe.expected, 0) + 'x'], ['Bomb crit multiplier', fmt(a.bomb.expected, 0) + 'x'],
      ['Bomb recharge speed', fmt(s.bomb_recharge_speed) + 'x'], ['Bomb capacity', fmt(s.bomb_capacity)],
      ['Ore sell price multi', fmt(s.ore_sell_price_multi)], ['Prestige point multi', fmt(s.prestige_point_multi)]
    ];
    root.appendChild(el('div', { class: 'tiles' }, tiles.map(t => el('div', { class: 'tile' }, [el('div', { class: 'v' }, t[1]), el('div', { class: 'k' }, t[0])]))));

    const grid = el('div', { class: 'grid2' });

    // Crit chains
    ['pickaxe', 'bomb'].forEach(p => {
      const c = a[p];
      const panel = el('div', { class: 'panel' }, el('h2', {}, (p === 'pickaxe' ? 'Pickaxe' : 'Bomb') + ' crit chain'));
      panel.appendChild(OM.table(['Tier', 'Chance', 'Damage', 'Status'], c.tiers.map(t => [
        t.tier, pct(t.chance), fmt(t.dmg) + 'x',
        t.chance >= 100 ? el('span', { class: t.chance > 100 ? 'warn' : 'ok' }, t.chance > 100 ? `guaranteed, ${pct(t.chance - 100)} likely wasted` : 'guaranteed') : el('span', {}, 'rolls')
      ]), { num: [1, 2] }));
      panel.appendChild(el('p', { class: 'small muted', style: 'margin-top:.6rem' },
        `Expected multiplier per hit: ${fmt(c.expected, 0)}x. ` + (c.guaranteed ? 'Every hit is an omega crit; crit damage upgrades are where the value is now.' : `Chance a hit reaches omega: ${pct(c.reachOmega * 100)}.`)));
      grid.appendChild(panel);
    });

    // Overflow / near cap
    const ov = el('div', { class: 'panel' }, el('h2', {}, 'Chances over 100%'));
    if (a.overflow.length) {
      ov.appendChild(el('p', { class: 'small muted' }, 'Unless the game converts overflow, points above 100% do nothing. Check before buying more.'));
      ov.appendChild(OM.table(['Stat', 'Value', 'Over by'], a.overflow.map(o => [OM.label(o.key), pct(o.value), pct(o.wasted)]), { num: [1, 2] }));
    } else ov.appendChild(el('p', { class: 'small muted' }, 'None.'));
    if (a.nearCap.length) {
      ov.appendChild(el('h3', { style: 'margin-top:.8rem' }, 'Close to 100%'));
      ov.appendChild(OM.table(['Stat', 'Value'], a.nearCap.map(o => [OM.label(o.key), pct(o.value)]), { num: [1] }));
    }
    grid.appendChild(ov);

    // Buff timers
    const bf = el('div', { class: 'panel' }, el('h2', {}, 'Buff time remaining'));
    bf.appendChild(el('p', { class: 'small muted' }, 'Banked buff time in seconds, lowest first. The export does not name each slot, so match the index in game.'));
    bf.appendChild(OM.table(['Source', 'Slot', 'Remaining'], a.buffs.slice(0, 12).map(b => ({
      cells: [b.arr === 'item_uptime_array' ? 'Items' : 'Lootbug / elixir', '#' + b.i, el('span', { class: b.seconds < 86400 ? 'bad' : b.seconds < 7 * 86400 ? 'warn' : '' }, dur(b.seconds))],
      hl: b.seconds < 86400
    })), { num: [1] }));
    grid.appendChild(bf);

    // Drones
    const dr = el('div', { class: 'panel' }, el('h2', {}, 'Drones by fuel grade'));
    dr.appendChild(OM.table(['Drone', 'Fuel grade', 'Equipped', 'Fueled'], a.drones.map(d => ({
      cells: [d.name.charAt(0).toUpperCase() + d.name.slice(1), fmt(d.grade), d.equipped ? el('span', { class: 'ok' }, 'yes') : el('span', { class: 'muted' }, 'no'), d.fueled ? 'yes' : el('span', { class: 'muted' }, 'no')],
      hl: !d.equipped && d.grade !== null && a.drones.filter(x => x.equipped).some(x => x.grade < d.grade)
    })), { num: [1] }));
    dr.appendChild(el('p', { class: 'small muted', style: 'margin-top:.6rem' }, 'Highlighted: not equipped but a higher grade than something you are running.'));
    grid.appendChild(dr);

    root.appendChild(grid);
  };

  // ---------- Bombs ----------
  OM.views.bombs = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Bomb recharge'));
    root.appendChild(el('p', { class: 'muted' }, `Base cooldown divided by your recharge speed (${fmt(s.bomb_recharge_speed)}x). Game speed (${fmt(s.game_speed_multi)}x) and an extra multiplier can be layered on to match what you observe in game.`));

    const useGS = el('input', { type: 'checkbox' });
    const extra = el('input', { type: 'number', value: '1', step: '0.1', min: '0.01' });
    const tableHost = el('div');
    const bombSel = el('select');
    (OM.data.bombs || []).forEach(b => bombSel.appendChild(el('option', { value: b.key, selected: b.key === 'cherry' ? '' : null }, b.name)));
    const cur = el('input', { type: 'number', value: '0', min: '0' });
    const target = el('input', { type: 'number', value: String(Math.round(s.bomb_capacity || 0)), min: '0' });
    const perRefresh = el('input', { type: 'number', value: '1', min: '1', step: '1' });
    const observed = el('input', { type: 'number', placeholder: 'optional', step: '0.001', min: '0' });
    const fillOut = el('div', { class: 'panel accent' });

    function render() {
      const rows = OM.bombTable(s, { useGameSpeed: useGS.checked, extraMulti: Number(extra.value) || 1 });
      tableHost.innerHTML = '';
      tableHost.appendChild(OM.table(['Bomb', 'Base (s)', 'Seconds per charge', 'Per second', 'Per minute', 'Effect'],
        rows.map(r => ({ cells: [r.name, r.base, r.seconds < 1 ? r.seconds.toFixed(3) : r.seconds.toFixed(2), fmt(r.perSec), fmt(r.perMin), el('span', { class: 'small muted' }, r.effect)], hl: r.key === bombSel.value })),
        { num: [1, 2, 3, 4] }));

      const b = rows.find(r => r.key === bombSel.value);
      const refresh = Number(observed.value) > 0 ? Number(observed.value) : b.seconds;
      const rate = (Number(perRefresh.value) || 1) / refresh;
      const need = Math.max(0, (Number(target.value) || 0) - (Number(cur.value) || 0));
      const secs = rate > 0 ? need / rate : Infinity;
      const free = Number(s.bomb_free_chance) || 0;
      fillOut.innerHTML = '';
      fillOut.appendChild(el('h2', {}, `${b.name}: ${dur(secs)} to fill`));
      fillOut.appendChild(el('p', {}, `${fmt(need, 0)} charges needed at ${fmt(rate)} per second (${refresh.toFixed(3)} s per refresh × ${perRefresh.value} per refresh). Done at about ${OM.localDT(Date.now() + secs * 1000)} if you start now.`));
      if (free > 0) fillOut.appendChild(el('p', { class: 'small muted' }, `Your ${pct(free, 0)} free-bomb chance stretches spending by about ${(100 / (100 - Math.min(free, 99))).toFixed(2)}x, so those charges are worth roughly ${fmt(need * 100 / (100 - Math.min(free, 99)), 0)} uses.`));
    }
    [useGS, extra, bombSel, cur, target, perRefresh, observed].forEach(i => i.addEventListener('input', render));

    root.appendChild(el('div', { class: 'panel' }, [
      el('div', { class: 'row' }, [
        el('label', {}, [el('span', {}, [useGS, ' Apply game speed']), el('span', { class: 'small' }, 'Test in game: if Cherry is near the game-speed number, keep this on.')]),
        el('label', {}, ['Extra multiplier (workshop, buffs)', extra])
      ]),
      el('div', { style: 'margin-top:.8rem' }, tableHost)
    ]));
    root.appendChild(el('h2', {}, 'Time to fill'));
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [
      el('label', {}, ['Bomb', bombSel]), el('label', {}, ['Current charges', cur]), el('label', {}, ['Target charges', target]),
      el('label', {}, ['Charges per refresh', perRefresh]), el('label', {}, ['Observed refresh (s)', observed])
    ])));
    root.appendChild(fillOut);
    render();
  };

  // ---------- Growth ----------
  OM.views.growth = function (root) {
    root.innerHTML = '';
    const snaps = OM.store.all();
    root.appendChild(el('h1', {}, 'Growth between snapshots'));
    if (snaps.length < 2) {
      root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'empty' }, 'Save at least two snapshots taken at different times, then come back here to see real growth rates and projections.')));
      return;
    }
    const selA = el('select'), selB = el('select');
    snaps.forEach((s, i) => {
      selA.appendChild(el('option', { value: s.id, selected: i === 0 ? '' : null }, OM.localDT(s.at) + (s.note ? ' – ' + s.note : '')));
      selB.appendChild(el('option', { value: s.id, selected: i === snaps.length - 1 ? '' : null }, OM.localDT(s.at) + (s.note ? ' – ' + s.note : '')));
    });
    const search = el('input', { class: 'search', type: 'search', placeholder: 'Filter stats' });
    const statSel = el('select'); const targetIn = el('input', { type: 'number', placeholder: 'target value', step: 'any' });
    const proj = el('div', { class: 'panel accent' });
    const host = el('div');

    function render() {
      const a = OM.store.get(selA.value), b = OM.store.get(selB.value);
      host.innerHTML = '';
      if (!a || !b || a.at >= b.at) { host.appendChild(el('p', { class: 'bad' }, 'Pick an earlier snapshot on the left and a later one on the right.')); return; }
      const g = OM.growth(a, b);
      const q = search.value.trim().toLowerCase();
      const rows = g.rows.filter(r => !q || r.key.includes(q) || OM.label(r.key).includes(q));
      host.appendChild(el('p', { class: 'muted small' }, `${g.dtDays.toFixed(2)} days apart. ${g.rows.length} stats changed. Sorted by largest relative change.`));
      host.appendChild(OM.table(['Stat', 'From', 'To', 'Change', 'Per day', 'Daily growth'],
        rows.slice(0, 200).map(r => [OM.label(r.key), fmt(r.from), fmt(r.to), (r.delta > 0 ? '+' : '') + fmt(r.delta), fmt(r.perDay), r.dailyMult ? ((r.dailyMult - 1) * 100).toFixed(2) + '%' : '–']),
        { num: [1, 2, 3, 4, 5] }));
      // projection selector
      const prev = statSel.value;
      statSel.innerHTML = '';
      g.rows.forEach(r => statSel.appendChild(el('option', { value: r.key }, OM.label(r.key))));
      if (prev && g.rows.some(r => r.key === prev)) statSel.value = prev;
      project();
    }
    function project() {
      const a = OM.store.get(selA.value), b = OM.store.get(selB.value);
      proj.innerHTML = '';
      if (!a || !b || a.at >= b.at) return;
      const k = statSel.value; if (!k) return;
      const from = a.stats[k], to = b.stats[k], dtDays = (b.at - a.at) / 86400000;
      const target = Number(targetIn.value);
      proj.appendChild(el('h2', {}, `Projection: ${OM.label(k)}`));
      if (!target) { proj.appendChild(el('p', { class: 'muted' }, `Went from ${fmt(from)} to ${fmt(to)} in ${dtDays.toFixed(2)} days. Enter a target to estimate when you reach it.`)); return; }
      const t = OM.timeToTarget(from, to, target, dtDays);
      if (t.days === 0) { proj.appendChild(el('p', { class: 'ok' }, 'Already there.')); return; }
      const line = (label, d) => d === null || !isFinite(d) || d < 0 ? el('p', {}, `${label}: not reachable on this trend.`) : el('p', {}, `${label}: about ${dur(d * 86400)} (around ${OM.localDT(b.at + d * 86400000)}).`);
      proj.appendChild(line('If growth stays linear', t.linear));
      proj.appendChild(line('If growth stays exponential', t.exponential));
      proj.appendChild(el('p', { class: 'small muted' }, 'Idle games are usually between the two: exponential in bursts, linear while you wait on a wall. Treat these as a range.'));
    }
    [selA, selB, search].forEach(i => i.addEventListener('input', render));
    [statSel, targetIn].forEach(i => i.addEventListener('input', project));
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [el('label', {}, ['Earlier', selA]), el('label', {}, ['Later', selB]), el('label', {}, ['Filter', search])])));
    root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'row' }, [el('label', {}, ['Stat', statSel]), el('label', {}, ['Target', targetIn])])));
    root.appendChild(proj);
    root.appendChild(el('div', { class: 'panel' }, host));
    render();
  };

  // ---------- Stats explorer ----------
  OM.views.stats = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(needSnap()); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'All stats'));
    const search = el('input', { class: 'search', type: 'search', placeholder: 'Search by name, e.g. fishing, crit, golden' });
    const host = el('div');
    function render() {
      const q = search.value.trim().toLowerCase();
      const groups = {};
      Object.keys(s).sort().forEach(k => {
        if (q && !k.includes(q) && !OM.groupOf(k).toLowerCase().includes(q)) return;
        (groups[OM.groupOf(k)] = groups[OM.groupOf(k)] || []).push(k);
      });
      host.innerHTML = '';
      Object.keys(groups).sort().forEach(gname => {
        const panel = el('div', { class: 'panel' }, el('h2', {}, gname));
        panel.appendChild(OM.table(['Stat', 'Kind', 'Value'], groups[gname].map(k => {
          const v = s[k], kind = OM.kindOf(k, v);
          let disp;
          if (kind === 'array') {
            disp = el('div', { class: 'small' }, [el('span', { class: 'pill' }, v.length + ' entries'), ' ', v.map((x, i) => `${i}:${typeof x === 'number' ? fmt(x) : x}`).join('  ')]);
          } else if (kind === 'chance') disp = el('span', { class: v > 100 ? 'warn' : '' }, pct(v));
          else if (kind === 'multi') disp = fmt(v) + 'x';
          else if (kind === 'percent') disp = pct(v, 0);
          else disp = fmt(v);
          return [el('span', { title: k }, OM.label(k)), el('span', { class: 'pill' }, kind), disp];
        })));
        host.appendChild(panel);
      });
      if (!Object.keys(groups).length) host.appendChild(el('div', { class: 'empty' }, 'Nothing matches.'));
    }
    search.addEventListener('input', render);
    root.appendChild(el('div', { class: 'panel' }, search));
    root.appendChild(host);
    render();
  };

  // ---------- About ----------
  OM.views.about = function (root) {
    root.innerHTML = '';
    root.appendChild(el('h1', {}, 'About'));
    root.appendChild(el('div', { class: 'panel' }, [
      el('p', {}, 'A planning tool for Idle Obelisk Miner. Paste your EXPORTSTATS JSON to see where your stats stand, how fast they are growing, and how long things will take.'),
      el('p', {}, 'Everything stays in your browser. There is no server and no account. Use "Back up all snapshots" on the Import page to keep a copy.'),
      el('h3', {}, 'Formula sources'),
      el('p', {}, 'Bomb base cooldowns and the recharge formula come from the community Obelisk Total Resources Calculator. The full extracted formula reference for all community calculators lives in the repository under docs/formulas.'),
      el('h3', {}, 'Known assumptions'),
      el('p', {}, 'Crit tiers are modelled as nested rolls (only a crit can super crit, and so on). Chances above 100% are flagged as wasted unless the game is known to convert overflow. Buff timer arrays are shown by index because the export does not name the slots.'),
      el('p', { class: 'small muted' }, 'Idle Obelisk Miner is made by Checkbox Entertainment. This tool is a fan project and is not affiliated with them.')
    ]));
  };

  function needSnap() {
    return el('div', { class: 'panel' }, el('div', { class: 'empty' }, [
      'No snapshot selected. ', el('a', { href: '#import' }, 'Paste an export'), ' to get started.'
    ]));
  }
})(window.OM);
