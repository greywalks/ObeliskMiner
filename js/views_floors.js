// Best floor to farm view (ores and veins).
(function (OM) {
  const el = OM.el, fmt = OM.fmt, pct = OM.pct;
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

  OM.views.floors = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'empty' }, ['No snapshot selected. ', el('a', { href: '#import' }, 'Paste an export'), ' first.']))); return; }
    const s = snap.stats, D = OM.data.floors;
    root.appendChild(el('h1', {}, 'Best floor to farm'));
    root.appendChild(el('p', { class: 'muted' }, 'Expected ores or veins per hour on every floor, with and without void portals. Ported from IOM Best Floor To Farm 3.3.4.'));

    const p = OM.calc.floors.inputs(s);
    p.gameSpeed = OM.calc.floors.baseSpeed(s, p);
    const cur = Number(s.current_floor) || 1;
    const defaultOre = (D.ores.filter(o => o.floors[cur]).sort((a, b) => (b.floors[cur] || 0) - (a.floors[cur] || 0))[0] || D.ores[0]).name;
    const defaultVein = (D.veins.find(v => cur >= v.firstFloor && cur <= v.lastFloor) || D.veins[0]).name;
    const st = { mode: 'ore', ore: defaultOre, vein: defaultVein, voidC: p.voidC * 100, voidM: p.voidM, w4Quests: Number(s.world_4_quest_progress) || 0 };

    const modeSel = el('select'); [['ore', 'Ores'], ['vein', 'Veins']].forEach(([v, t]) => modeSel.appendChild(el('option', { value: v }, t)));
    const oreSel = el('select'); D.ores.forEach(o => oreSel.appendChild(el('option', { value: o.name, selected: o.name === st.ore ? '' : null }, `W${o.world} ${o.name} (floor ${o.firstFloor})`)));
    const veinSel = el('select'); D.veins.forEach(v => veinSel.appendChild(el('option', { value: v.name, selected: v.name === st.vein ? '' : null }, `${v.name} (floors ${v.firstFloor}-${v.lastFloor})`)));
    modeSel.addEventListener('change', () => { st.mode = modeSel.value; render(); });
    oreSel.addEventListener('change', () => { st.ore = oreSel.value; render(); });
    veinSel.addEventListener('change', () => { st.vein = veinSel.value; render(); });
    const out = el('div');
    const voidHint = p.voidC === 0 && Number(s.void_fuel_grade) > 0
      ? 'Your export shows 0% void portal chance (Void drone not equipped). Enter the chance and multiplier from Stats → Drones with the Void drone equipped and fueled to see the void option.'
      : 'Void portal chance and multiplier come from your export.';

    function render() {
      p.voidC = Math.min(1, st.voidC / 100); p.voidM = st.voidM; p.w4Speed = OM.calc.floors.w4Speed(st.w4Quests);
      out.innerHTML = '';
      const r = st.mode === 'ore' ? OM.calc.floors.ore(st.ore, p) : OM.calc.floors.vein(st.vein, p);
      if (!r) return;
      const unit = st.mode === 'ore' ? 'ores' : 'veins';
      const best = r.useVoid ? r.bestVoid : r.bestBase, key = r.useVoid ? 'void' : 'base';
      const top = best.slice(0, 5).filter(x => x[key] > 0);
      out.appendChild(el('div', { class: 'panel accent' }, [
        el('h2', {}, `Farm floor ${top[0].floor}${r.useVoid ? ' with the Void drone' : ' without the Void drone'}: about ${fmt(top[0][key])} ${unit} per hour`),
        el('p', {}, `That is ${pct(top[0][key] / r.perfect * 100, 0)} of a perfect floor. ` + (p.voidC > 0 ? `Best without void: floor ${r.bestBase[0].floor} at ${fmt(r.bestBase[0].base)}/h. Best with void: floor ${r.bestVoid[0].floor} at ${fmt(r.bestVoid[0].void)}/h.` : 'Void portals are at 0%, so only the base option is ranked.')),
        OM.table(['Rank', 'Floor', unit + ' / hour', 'vs. perfect', 'vs. next'], top.map((x, i) => [i + 1, x.floor, fmt(x[key]), pct(x[key] / r.perfect * 100, 0), i + 1 < top.length && top[i + 1][key] > 0 ? '+' + pct((x[key] / top[i + 1][key] - 1) * 100, 0) : '']), { num: [0, 1, 2, 3, 4] })
      ]));
      // Detail table around the item's own floors
      const own = r.rows.filter(x => x.present).map(x => x.floor);
      const lo = Math.max(1, Math.min(...own) - 2), hi = Math.min(132, Math.max(...own) + 6);
      const detail = r.rows.filter(x => (x.floor >= lo && x.floor <= hi) || x.floor === cur || best.slice(0, 5).some(b => b.floor === x.floor)).sort((a, b) => a.floor - b.floor);
      out.appendChild(el('div', { class: 'panel' }, [
        el('h2', {}, 'Floor detail'),
        OM.table(['Floor', 'Spawns here', unit + '/h no void', unit + '/h with void', 'Speed factor'], detail.map(x => ({ cells: [x.floor, x.present ? 'yes' : el('span', { class: 'muted' }, 'portals only'), fmt(x.base), fmt(x.void), OM.calc.floors.speedFactor(x.floor, p).toFixed(2) + 'x'], hl: x.floor === cur })), { num: [0, 2, 3, 4] }),
        el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Highlighted: your current floor. Floors outside this range only matter through portals and are included when they rank in the top five.')
      ]));
    }
    root.appendChild(el('div', { class: 'panel' }, [
      el('div', { class: 'row' }, [el('label', {}, ['Farm for', modeSel]), el('label', {}, ['Ore', oreSel]), el('label', {}, ['Vein', veinSel])]),
      el('div', { class: 'row', style: 'margin-top:.6rem' }, [
        num(st, 'voidC', 'Void portal chance %', { on: render }), num(st, 'voidM', 'Void portal multiplier', { on: render }),
        num(p, 'gameSpeed', 'Base game speed', { on: render }), num(st, 'w4Quests', 'World 4 quests done', { on: render, step: '1' }), chk(p, 'w3Fix', 'World 3 speed fix bought', render),
        num(p, 'oresPerScreen', 'Ores per screen', { on: render }), chk(p, 'research', '2x vein research', render), num(p, 'morphChance', 'Veinmorpher morph chance (0-1)', { on: render }), num(p, 'morphGold', 'Veinmorpher golden chance (0-1)', { on: render })
      ]),
      el('p', { class: 'small muted', style: 'margin-top:.5rem' }, voidHint + ' Base game speed is your exported speed with the current floor\'s slowdown removed.')
    ]));
    root.appendChild(out);
    render();
  };
})(window.OM);
