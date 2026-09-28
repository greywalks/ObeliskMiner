// Snapshot store. Each snapshot = { id, at (ms), version, gameTime, stats, note }.
// Kept in localStorage under one key. Nothing leaves the browser.
(function (OM) {
  const KEY = 'om.snapshots.v1';
  let cache = null;

  function load() {
    if (cache) return cache;
    try {
      const raw = localStorage.getItem(KEY);
      cache = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(cache)) cache = [];
    } catch (e) { cache = []; }
    cache.sort((a, b) => a.at - b.at);
    return cache;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(cache)); return true; }
    catch (e) { OM.toast('Could not save: browser storage is full or blocked.'); return false; }
  }

  OM.store = {
    all() { return load().slice(); },
    get(id) { return load().find(s => s.id === id) || null; },
    latest() { const a = load(); return a.length ? a[a.length - 1] : null; },
    add(snap) {
      load();
      snap.id = snap.id || ('s' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6));
      cache.push(snap); cache.sort((a, b) => a.at - b.at);
      save(); return snap;
    },
    update(id, patch) {
      const s = OM.store.get(id); if (!s) return null;
      Object.assign(s, patch); cache.sort((a, b) => a.at - b.at); save(); return s;
    },
    remove(id) { load(); cache = cache.filter(s => s.id !== id); save(); },
    clear() { cache = []; save(); },
    exportJSON() { return JSON.stringify({ app: 'ObeliskMiner', exported: Date.now(), snapshots: load() }, null, 2); },
    importJSON(text) {
      const data = JSON.parse(text);
      const list = Array.isArray(data) ? data : data.snapshots;
      if (!Array.isArray(list)) throw new Error('No snapshots array found in that file.');
      load();
      let added = 0;
      for (const s of list) {
        if (!s || !s.stats || !s.at) continue;
        if (cache.some(x => x.id === s.id || (x.at === s.at && x.version === s.version))) continue;
        cache.push(s); added++;
      }
      cache.sort((a, b) => a.at - b.at); save();
      return added;
    }
  };
})(window.OM);
