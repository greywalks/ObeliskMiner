// Routing and state. Sections are keyed by hash: #import, #overview, #bombs, #growth, #stats, #about
(function (OM) {
  const CUR = 'om.current';
  OM.data = OM.data || {};

  OM.setCurrent = function (id) {
    try { id ? localStorage.setItem(CUR, id) : localStorage.removeItem(CUR); } catch (e) { /* ignore */ }
  };
  OM.current = function () {
    let id = null;
    try { id = localStorage.getItem(CUR); } catch (e) { /* ignore */ }
    return (id && OM.store.get(id)) || OM.store.latest();
  };

  const ROUTES = ['import', 'overview', 'growth', 'stats', 'bombs', 'floors', 'model', 'contracts', 'crafting', 'veins', 'frogger', 'lootfrogs', 'cards', 'about'];

  OM.render = function () {
    let route = (location.hash || '').replace('#', '');
    if (!ROUTES.includes(route)) route = OM.store.all().length ? 'overview' : 'import';
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + route));
    document.querySelectorAll('.main > section').forEach(sec => sec.classList.toggle('active', sec.id === 'view-' + route));
    const snap = OM.current();
    OM.views[route](document.getElementById('view-' + route), snap);

    // Sidebar snapshot picker
    const sel = document.getElementById('snapPick');
    sel.innerHTML = '';
    const all = OM.store.all();
    if (!all.length) sel.appendChild(OM.el('option', {}, 'none yet'));
    all.slice().reverse().forEach(s => sel.appendChild(OM.el('option', { value: s.id, selected: snap && s.id === snap.id ? '' : null }, OM.localDT(s.at) + (s.note ? ' – ' + s.note : ''))));
    sel.disabled = !all.length;
  };

  function loadData() {
    // bombs.json is inlined when built as a single file; otherwise fetch it.
    if (OM.data.bombs && OM.data.contracts && OM.data.floors && OM.data.model) return Promise.resolve();
    return Promise.all([
      fetch('data/bombs.json').then(r => r.json()).then(d => { OM.data.bombs = d.bombs; }),
      fetch('data/contracts.json').then(r => r.json()).then(d => { OM.data.contracts = d; }),
      fetch('data/floors.json').then(r => r.json()).then(d => { OM.data.floors = d; }),
      fetch('data/model.json').then(r => r.json()).then(d => { OM.data.model = d; }),
      fetch('data/model_map.json').then(r => r.json()).then(d => { OM.data.modelMap = d; })
    ]).catch(() => { OM.data.bombs = OM.data.bombs || []; OM.data.contracts = OM.data.contracts || { contracts: [], pointsTable: [], tags: {} }; OM.data.floors = OM.data.floors || { ores: [], veins: [], speedFloors: { ranges: [], world3: [73, 102, 0.7], world4Start: 103, voidReduced: [] }, goldenFloorCaps: { caps: [], rainbowTierScale: [], halfGoldenOre: [], prismaticMinus: [] }, w4SpeedByQuests: [[0, 0.8]] }; OM.toast('Could not load data files'); });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('snapPick').addEventListener('change', e => { OM.setCurrent(e.target.value); OM.render(); });
    window.addEventListener('hashchange', OM.render);
    loadData().then(OM.render);
  });
})(window.OM);
