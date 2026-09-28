// Shared helpers. Everything hangs off window.OM so the app runs with plain
// <script> tags (no build step, works on GitHub Pages and as a single file).
window.OM = window.OM || {};

(function (OM) {
  const SUFFIX = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];

  // Format a number the way the game roughly does: 1.23M, 4.56Oc, then 1.23e45.
  OM.fmt = function (n, digits) {
    if (n === null || n === undefined || Number.isNaN(n)) return '–';
    if (typeof n === 'boolean') return n ? 'yes' : 'no';
    if (typeof n !== 'number') return String(n);
    const d = digits === undefined ? 2 : digits;
    const abs = Math.abs(n);
    if (abs === 0) return '0';
    if (abs < 1000) {
      if (Number.isInteger(n)) return String(n);
      return abs < 0.01 ? n.toExponential(2) : n.toFixed(d);
    }
    const tier = Math.floor(Math.log10(abs) / 3);
    if (tier < SUFFIX.length) {
      return (n / Math.pow(10, tier * 3)).toFixed(d) + SUFFIX[tier];
    }
    return n.toExponential(d);
  };

  OM.pct = function (n, d) { return typeof n === 'number' ? n.toFixed(d === undefined ? 1 : d) + '%' : '–'; };

  // Seconds -> "2d 3h 12m" style.
  OM.dur = function (s) {
    if (s === null || s === undefined || !isFinite(s)) return '–';
    if (s < 0) return 'inactive';
    if (s < 1) return (s * 1000).toFixed(0) + ' ms';
    if (s < 60) return s.toFixed(1) + ' s';
    const units = [['y', 31536000], ['d', 86400], ['h', 3600], ['m', 60]];
    const parts = [];
    let rem = s;
    for (const [u, len] of units) {
      const q = Math.floor(rem / len);
      if (q > 0 || (parts.length && u !== 'y')) { parts.push(q + u); rem -= q * len; }
      if (parts.length >= 3) break;
    }
    if (parts.length < 3 && rem >= 1 && parts.length) parts.push(Math.round(rem) + 's');
    return parts.join(' ');
  };

  OM.el = function (tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== undefined && attrs[k] !== null) e.setAttribute(k, attrs[k]);
    }
    if (children !== undefined) {
      (Array.isArray(children) ? children : [children]).forEach(c => {
        if (c === null || c === undefined) return;
        e.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
      });
    }
    return e;
  };

  OM.esc = function (s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); };

  OM.table = function (headers, rows, opts) {
    opts = opts || {};
    const t = OM.el('table');
    const thead = OM.el('thead');
    const tr = OM.el('tr');
    headers.forEach((h, i) => tr.appendChild(OM.el('th', { class: (opts.num || []).includes(i) ? 'num' : '' }, h)));
    thead.appendChild(tr); t.appendChild(thead);
    const tb = OM.el('tbody');
    rows.forEach(r => {
      const cells = Array.isArray(r) ? r : r.cells;
      const row = OM.el('tr', { class: (!Array.isArray(r) && r.hl) ? 'hl' : '' });
      cells.forEach((c, i) => row.appendChild(OM.el('td', { class: (opts.num || []).includes(i) ? 'num' : '' }, c)));
      tb.appendChild(row);
    });
    t.appendChild(tb);
    const wrap = OM.el('div', { class: 'tablewrap' }, t);
    return wrap;
  };

  let toastTimer;
  OM.toast = function (msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  };

  OM.download = function (name, text, type) {
    const blob = new Blob([text], { type: type || 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  OM.localDT = function (ms) {
    const d = new Date(ms);
    const p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
  };
  // For <input type="datetime-local">
  OM.inputDT = function (ms) { return OM.localDT(ms).replace(' ', 'T'); };
})(window.OM);
