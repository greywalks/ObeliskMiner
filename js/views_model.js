// Stat model view: check the model against the export, break stats down, rank next upgrades, edit inputs.
(function (OM) {
  const el = OM.el, fmt = OM.fmt;

  OM.views.model = function (root, snap) {
    root.innerHTML = '';
    if (!snap) { root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'empty' }, ['No snapshot selected. ', el('a', { href: '#import' }, 'Paste an export'), ' first.']))); return; }
    if (!OM.data.model || !OM.data.modelMap) { root.appendChild(el('div', { class: 'panel' }, el('div', { class: 'empty' }, 'Model data did not load.'))); return; }
    const s = snap.stats;
    root.appendChild(el('h1', {}, 'Stat model'));
    root.appendChild(el('p', { class: 'muted' }, 'A port of the community Total Resources calculator: every stat rebuilt from its sources (upgrades, contracts, prestige, cards and so on). Your export fills what it can; the rest is entered once below and remembered in this browser.'));

    let eng = OM.model.build(s);
    const check = el('div'), detail = el('div'), advisor = el('div'), inputsHost = el('div');

    function renderCheck() {
      const v = OM.model.validate(eng, s);
      const withActual = v.filter(r => typeof r.actual === 'number');
      const ok = withActual.filter(r => r.ok).length;
      check.innerHTML = '';
      const sel = el('select');
      v.forEach(r => sel.appendChild(el('option', { value: r.name }, r.name)));
      sel.addEventListener('change', () => renderDetail(sel.value));
      check.appendChild(el('div', { class: 'panel accent' }, [
        el('h2', {}, `${ok} of ${withActual.length} checkable stats match your export`),
        el('p', { class: 'small muted' }, 'A stat matches when the model is within 2% of the exported value. Mismatches usually mean an input the export does not contain (artifacts, ore cards, store bundles, statues) still needs to be set below.'),
        el('div', { class: 'row', style: 'margin:.5rem 0' }, el('label', {}, ['Show breakdown for', sel])),
        OM.table(['Stat', 'Model', 'Export', 'Model ÷ export', ''], v.map(r => ({
          cells: [r.name, fmt(r.model), typeof r.actual === 'number' ? fmt(r.actual) : el('span', { class: 'muted' }, 'not in export'), r.ratio !== null ? fmt(r.ratio, 3) + 'x' : '', r.ok ? el('span', { class: 'ok' }, 'match') : (typeof r.actual === 'number' ? el('span', { class: 'warn' }, 'off') : '')],
          hl: false
        })), { num: [1, 2, 3] })
      ]));
      renderDetail(sel.value);
    }
    function renderDetail(name) {
      const parts = OM.model.breakdown(eng, name);
      detail.innerHTML = '';
      detail.appendChild(el('div', { class: 'panel' }, [
        el('h2', {}, `${name}: ${fmt(eng.stat(name))}`),
        parts.length ? OM.table(['Source', 'Factor'], parts.map(p => [p.source, fmt(p.value, 4)]), { num: [1] }) : el('p', { class: 'muted' }, 'No breakdown for this stat.'),
        el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Multiplicative stats multiply these factors (with Base first); chance stats add them.')
      ]));
    }
    function renderAdvisor() {
      advisor.innerHTML = '';
      const sel = el('select');
      OM.data.model.stats.forEach(st => sel.appendChild(el('option', { value: st.name, selected: st.name === 'Pickaxe Damage' ? '' : null }, st.name)));
      const out = el('div');
      function run() {
        const inputs = OM.model.levelInputs(s);
        const a = OM.model.advise(eng, s, sel.value, inputs);
        out.innerHTML = '';
        if (!a.rows.length) { out.appendChild(el('p', { class: 'muted' }, 'Nothing you can level affects this stat, or everything that does is maxed.')); return; }
        out.appendChild(OM.table(['Source', 'Upgrade', 'Level', 'Gain per level'], a.rows.slice(0, 25).map(r => [r.group, r.label, `${r.level}${r.max ? ' / ' + r.max : ''}`, '+' + (r.gain * 100).toFixed(2) + '%']), { num: [2, 3] }));
        out.appendChild(el('p', { class: 'small muted', style: 'margin-top:.5rem' }, 'Gain is the change in the target stat from one more level, before cost. Costs differ by resource, so use this to shortlist, then compare prices in game.'));
      }
      sel.addEventListener('change', run);
      advisor.appendChild(el('div', { class: 'panel' }, [el('h2', {}, 'Next level advisor'), el('div', { class: 'row', style: 'margin-bottom:.6rem' }, el('label', {}, ['Target stat', sel])), out]));
      run();
    }
    function renderInputs() {
      inputsHost.innerHTML = '';
      const manual = OM.model.manual.load();
      const search = el('input', { class: 'search', type: 'search', placeholder: 'Filter inputs, e.g. artifact, card, bundle' });
      const onlyUnmapped = el('input', { type: 'checkbox' }); onlyUnmapped.checked = true;
      const host = el('div');
      function draw() {
        const q = search.value.trim().toLowerCase();
        const groups = {};
        OM.data.modelMap.inputs.forEach(i => {
          if (onlyUnmapped.checked && i.mapped) return;
          if (q && !i.label.toLowerCase().includes(q) && !i.sheet.toLowerCase().includes(q)) return;
          (groups[i.sheet] = groups[i.sheet] || []).push(i);
        });
        host.innerHTML = '';
        Object.keys(groups).sort().forEach(sheet => {
          const list = groups[sheet];
          const body = el('div', { class: 'row' });
          list.slice(0, 400).forEach(i => {
            const cur = i.cell in manual ? manual[i.cell] : (i.mapped ? eng.get(i.cell) : null);
            let ctl;
            if (i.type === 'bool') {
              ctl = el('input', { type: 'checkbox' }); ctl.checked = cur === true;
              ctl.addEventListener('change', () => { OM.model.manual.set(i.cell, ctl.checked ? true : null); refresh(); });
              body.appendChild(el('label', { title: i.cell }, el('span', {}, [ctl, ' ' + i.label])));
            } else {
              ctl = el('input', { type: 'number', value: typeof cur === 'number' ? cur : '', step: 'any', style: 'width:6rem' });
              ctl.addEventListener('change', () => { OM.model.manual.set(i.cell, ctl.value === '' ? null : Number(ctl.value)); refresh(); });
              body.appendChild(el('label', { title: i.cell }, [i.label + (i.mapped ? ' (from export)' : ''), ctl]));
            }
          });
          const det = el('details', {}, [el('summary', {}, `${sheet} (${list.length})`), body]);
          host.appendChild(el('div', { class: 'panel' }, det));
        });
        if (!Object.keys(groups).length) host.appendChild(el('div', { class: 'empty' }, 'Nothing matches.'));
      }
      search.addEventListener('input', draw); onlyUnmapped.addEventListener('change', draw);
      inputsHost.appendChild(el('div', { class: 'panel' }, [
        el('h2', {}, 'Inputs the export cannot fill'),
        el('p', { class: 'small muted' }, 'Tick or type what you own in game. Values are saved in this browser and applied to every snapshot. Cells are named after the source spreadsheet so you can cross-check.'),
        el('div', { class: 'row' }, [el('label', {}, ['Filter', search]), el('label', {}, el('span', {}, [onlyUnmapped, ' Only show inputs the export does not provide'])),
          el('button', { class: 'danger', onclick: () => { if (confirm('Clear all manually entered model inputs?')) { OM.model.manual.save({}); refresh(); } } }, 'Clear manual inputs')])
      ]));
      inputsHost.appendChild(host);
      draw();
    }
    function refresh() { eng = OM.model.build(s); renderCheck(); renderAdvisor(); }

    root.appendChild(check); root.appendChild(detail); root.appendChild(advisor); root.appendChild(inputsHost);
    renderCheck(); renderAdvisor(); renderInputs();
  };
})(window.OM);
