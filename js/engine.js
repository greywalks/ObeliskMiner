// A very small spreadsheet engine: enough of the Sheets grammar to evaluate the
// stat model extracted from the Total Resources calculator (data/model.json).
// Cells are keyed "Sheet!A1". Formulas are stored without the leading "=".
(function (OM) {
  const EMPTY = { empty: true };
  const isEmpty = v => v === null || v === undefined || v === '' || (v && v.empty);
  const num = v => isEmpty(v) ? 0 : typeof v === 'boolean' ? (v ? 1 : 0) : typeof v === 'number' ? v : (parseFloat(v) || 0);
  const colNum = s => { let n = 0; for (const ch of s) n = n * 26 + (ch.charCodeAt(0) - 64); return n; };
  const colStr = n => { let s = ''; while (n > 0) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); } return s; };

  // ---------- tokenizer ----------
  function tokenize(src) {
    const toks = []; let i = 0;
    const isAlpha = c => /[A-Za-z_]/.test(c), isDigit = c => /[0-9]/.test(c);
    while (i < src.length) {
      const c = src[i];
      if (c === ' ' || c === '\n' || c === '\t' || c === '\r') { i++; continue; }
      if (c === '"') { let j = i + 1, s = ''; while (j < src.length) { if (src[j] === '"') { if (src[j + 1] === '"') { s += '"'; j += 2; continue; } break; } s += src[j++]; } toks.push({ t: 'str', v: s }); i = j + 1; continue; }
      if (c === "'") { let j = src.indexOf("'", i + 1); const sheet = src.slice(i + 1, j); i = j + 1; // expect !
        if (src[i] !== '!') throw new Error('bad sheet ref'); i++; const m = /^\$?([A-Z]{1,3})\$?(\d+)(?::\$?([A-Z]{1,3})\$?(\d+))?/.exec(src.slice(i)); i += m[0].length;
        toks.push({ t: 'ref', sheet, c1: m[1], r1: +m[2], c2: m[3], r2: m[4] ? +m[4] : undefined }); continue; }
      if (isDigit(c) || (c === '.' && isDigit(src[i + 1]))) { const m = /^\d*\.?\d+(?:[eE][+-]?\d+)?|^\d+\.?/.exec(src.slice(i)); toks.push({ t: 'num', v: parseFloat(m[0]) }); i += m[0].length; continue; }
      if (isAlpha(c) || c === '$') {
        // sheet!ref, ref, range, function, TRUE/FALSE
        const m = /^([A-Za-z_][A-Za-z0-9_ ]*?)!\$?([A-Z]{1,3})\$?(\d+)(?::\$?([A-Z]{1,3})\$?(\d+))?/.exec(src.slice(i));
        if (m) { toks.push({ t: 'ref', sheet: m[1].trim(), c1: m[2], r1: +m[3], c2: m[4], r2: m[5] ? +m[5] : undefined }); i += m[0].length; continue; }
        const r = /^\$?([A-Z]{1,3})\$?(\d+)(?::\$?([A-Z]{1,3})\$?(\d+))?(?![A-Za-z0-9_(])/.exec(src.slice(i));
        if (r) { toks.push({ t: 'ref', sheet: null, c1: r[1], r1: +r[2], c2: r[3], r2: r[4] ? +r[4] : undefined }); i += r[0].length; continue; }
        const w = /^[A-Za-z_][A-Za-z0-9_.]*/.exec(src.slice(i)); const word = w[0]; i += word.length;
        if (src[i] === '(') { toks.push({ t: 'fn', v: word.toUpperCase() }); continue; }
        const u = word.toUpperCase();
        if (u === 'TRUE') toks.push({ t: 'bool', v: true }); else if (u === 'FALSE') toks.push({ t: 'bool', v: false }); else toks.push({ t: 'name', v: word });
        continue;
      }
      const two = src.slice(i, i + 2);
      if (two === '<=' || two === '>=' || two === '<>') { toks.push({ t: 'op', v: two }); i += 2; continue; }
      if ('+-*/^&=<>(),;'.includes(c)) { toks.push({ t: 'op', v: c }); i++; continue; }
      throw new Error('unexpected char ' + c + ' at ' + i + ' in ' + src.slice(0, 60));
    }
    return toks;
  }

  // ---------- parser (precedence climbing) ----------
  function parse(src) {
    const toks = tokenize(src.replace(/^=+/, '')); let p = 0;
    const peek = () => toks[p], next = () => toks[p++];
    const isOp = v => peek() && peek().t === 'op' && peek().v === v;
    function primary() {
      const t = next();
      if (!t) throw new Error('unexpected end');
      if (t.t === 'num' || t.t === 'str' || t.t === 'bool') return { k: 'lit', v: t.v };
      if (t.t === 'ref') return { k: 'ref', ...t };
      if (t.t === 'name') return { k: 'name', v: t.v };
      if (t.t === 'fn') {
        next(); // (
        const args = [];
        if (isOp(')')) { next(); return { k: 'fn', name: t.v, args }; }
        for (;;) {
          if (isOp(',') || isOp(';')) { args.push({ k: 'lit', v: EMPTY }); next(); continue; }
          if (isOp(')')) { args.push({ k: 'lit', v: EMPTY }); next(); break; }
          args.push(expr());
          if (isOp(',') || isOp(';')) { next(); if (isOp(')')) { args.push({ k: 'lit', v: EMPTY }); next(); break; } continue; }
          if (isOp(')')) { next(); break; }
          throw new Error('expected , or ) in ' + t.v);
        }
        return { k: 'fn', name: t.v, args };
      }
      if (t.t === 'op' && t.v === '(') { const e = expr(); next(); return e; }
      if (t.t === 'op' && t.v === '-') return { k: 'neg', a: primary() };
      if (t.t === 'op' && t.v === '+') return primary();
      throw new Error('unexpected token ' + JSON.stringify(t));
    }
    const PREC = { '=': 1, '<>': 1, '<': 1, '>': 1, '<=': 1, '>=': 1, '&': 2, '+': 3, '-': 3, '*': 4, '/': 4, '^': 5 };
    function expr(minPrec) {
      minPrec = minPrec || 0;
      let left = primary();
      while (peek() && peek().t === 'op' && PREC[peek().v] !== undefined && PREC[peek().v] >= minPrec) {
        const op = next().v; const right = expr(PREC[op] + (op === '^' ? 0 : 1));
        left = { k: 'bin', op, a: left, b: right };
      }
      return left;
    }
    const e = expr();
    if (p !== toks.length) throw new Error('trailing tokens in ' + src.slice(0, 60));
    return e;
  }

  // ---------- evaluator ----------
  function Model(data) {
    this.cells = data.cells; this.stats = data.stats;
    this.ast = {}; this.cache = {}; this.overrides = {};
  }
  Model.prototype.set = function (key, value) { this.overrides[key] = value; this.cache = {}; };
  Model.prototype.setMany = function (obj) { Object.assign(this.overrides, obj); this.cache = {}; };
  Model.prototype.clear = function () { this.overrides = {}; this.cache = {}; };
  Model.prototype.get = function (key) {
    if (key in this.overrides) return this.overrides[key];
    if (key in this.cache) return this.cache[key];
    const c = this.cells[key];
    let v;
    if (!c) v = EMPTY;
    else if ('f' in c) {
      if (!this.ast[key]) { try { this.ast[key] = parse(c.f); } catch (e) { this.ast[key] = { k: 'lit', v: EMPTY }; this.errors = (this.errors || []); this.errors.push(key + ': ' + e.message); } }
      this.cache[key] = EMPTY; // cycle guard
      try { v = this.eval(this.ast[key], key.split('!')[0]); } catch (e) { v = EMPTY; (this.errors = this.errors || []).push(key + ': ' + e.message); }
    } else v = c.v === null ? EMPTY : c.v;
    this.cache[key] = v; return v;
  };
  Model.prototype.range = function (sheet, c1, r1, c2, r2) {
    const out = []; const a = colNum(c1), b = colNum(c2);
    for (let r = r1; r <= r2; r++) for (let c = a; c <= b; c++) out.push(this.get(sheet + '!' + colStr(c) + r));
    return out;
  };
  const flat = args => { const out = []; args.forEach(a => Array.isArray(a) ? out.push(...a) : out.push(a)); return out; };
  const numsOnly = args => flat(args).filter(v => typeof v === 'number');
  const crit = (v, spec) => {
    const m = /^(<=|>=|<>|=|<|>)?(.*)$/.exec(String(spec)); const op = m[1] || '=', rhs = m[2];
    const rhsBool = /^(true|false)$/i.test(rhs) ? rhs.toLowerCase() === 'true' : null;
    if (rhsBool !== null) { const lb = v === true || v === false ? v : null; return op === '=' ? lb === rhsBool : lb !== rhsBool; }
    const rn = parseFloat(rhs); const lv = typeof v === 'number' ? v : (typeof v === 'boolean' ? (v ? 1 : 0) : NaN);
    if (isNaN(rn)) return op === '=' ? String(v).toLowerCase() === rhs.toLowerCase() : String(v).toLowerCase() !== rhs.toLowerCase();
    if (isNaN(lv)) return false;
    switch (op) { case '=': return lv === rn; case '<>': return lv !== rn; case '<': return lv < rn; case '>': return lv > rn; case '<=': return lv <= rn; case '>=': return lv >= rn; }
  };
  Model.prototype.eval = function (n, sheet) {
    switch (n.k) {
      case 'lit': return n.v;
      case 'name': return EMPTY;
      case 'ref': {
        const sh = n.sheet || sheet;
        if (n.c2) return this.range(sh, n.c1, n.r1, n.c2, n.r2);
        return this.get(sh + '!' + n.c1 + n.r1);
      }
      case 'neg': return -num(this.eval(n.a, sheet));
      case 'bin': {
        const a = this.eval(n.a, sheet), b = this.eval(n.b, sheet);
        switch (n.op) {
          case '+': return num(a) + num(b); case '-': return num(a) - num(b); case '*': return num(a) * num(b);
          case '/': { const d = num(b); if (d === 0) throw new Error('#DIV/0'); return num(a) / d; }
          case '^': return Math.pow(num(a), num(b)); case '&': return String(isEmpty(a) ? '' : a) + String(isEmpty(b) ? '' : b);
          case '=': return cmpEq(a, b); case '<>': return !cmpEq(a, b);
          case '<': return num(a) < num(b); case '>': return num(a) > num(b); case '<=': return num(a) <= num(b); case '>=': return num(a) >= num(b);
        }
        break;
      }
      case 'fn': return this.call(n, sheet);
    }
    throw new Error('bad node');
  };
  function cmpEq(a, b) {
    if (typeof a === 'boolean' || typeof b === 'boolean') return num(a) === num(b) && !(isEmpty(a) !== isEmpty(b) && false);
    if (isEmpty(a) && isEmpty(b)) return true;
    if (typeof a === 'string' || typeof b === 'string') return String(isEmpty(a) ? '' : a).toLowerCase() === String(isEmpty(b) ? '' : b).toLowerCase();
    return num(a) === num(b);
  }
  const truthy = v => typeof v === 'boolean' ? v : !isEmpty(v) && num(v) !== 0;
  Model.prototype.call = function (n, sheet) {
    const ev = i => this.eval(n.args[i], sheet), all = () => n.args.map(a => this.eval(a, sheet));
    switch (n.name) {
      case 'IF': return truthy(ev(0)) ? (n.args.length > 1 ? ev(1) : true) : (n.args.length > 2 ? ev(2) : false);
      case 'IFS': for (let i = 0; i + 1 < n.args.length; i += 2) if (truthy(ev(i))) return ev(i + 1); throw new Error('IFS no match');
      case 'IFERROR': try { const v = ev(0); return v; } catch (e) { return ev(1); }
      case 'AND': return flat(all()).every(truthy); case 'OR': return flat(all()).some(truthy); case 'NOT': return !truthy(ev(0));
      case 'SUM': return numsOnly(all()).reduce((a, b) => a + b, 0);
      case 'PRODUCT': { const xs = numsOnly(all()); return xs.length ? xs.reduce((a, b) => a * b, 1) : 0; }
      case 'MIN': { const xs = numsOnly(all()); return xs.length ? Math.min(...xs) : 0; }
      case 'MAX': { const xs = numsOnly(all()); return xs.length ? Math.max(...xs) : 0; }
      case 'ABS': return Math.abs(num(ev(0))); case 'SIGN': return Math.sign(num(ev(0)));
      case 'ROUND': { const d = n.args.length > 1 ? num(ev(1)) : 0; const m = Math.pow(10, d); return Math.round(num(ev(0)) * m) / m; }
      case 'FLOOR': { const x = num(ev(0)), s = n.args.length > 1 && !isEmpty(ev(1)) ? num(ev(1)) : 1; return s === 0 ? 0 : Math.floor(x / s) * s; }
      case 'CEILING': { const x = num(ev(0)), s = n.args.length > 1 && !isEmpty(ev(1)) ? num(ev(1)) : 1; return s === 0 ? 0 : Math.ceil(x / s - 1e-12) * s; }
      case 'COUNTIF': { const r = ev(0), spec = ev(1); return flat([r]).filter(v => crit(v, spec)).length; }
      case 'INDEX': { const r = flat([ev(0)]); const i = Math.floor(num(ev(1))); return i >= 1 && i <= r.length ? r[i - 1] : EMPTY; }
      case 'GEOSUM': { const x = num(ev(0)), k = Math.floor(num(ev(1))); if (k <= 0) return 0; return x === 1 ? k : (Math.pow(x, k) - 1) / (x - 1); }
      case 'SQRT': return Math.sqrt(num(ev(0)));
      case 'COUNTA': return flat(all()).filter(v => !isEmpty(v)).length;
      case 'N': return num(ev(0));
    }
    throw new Error('unknown function ' + n.name);
  };
  Model.prototype.stat = function (name) { const s = this.stats.find(x => x.name === name); return s ? num(this.get(s.cell)) : null; };
  Model.parse = parse; Model.EMPTY = EMPTY; Model.isEmpty = isEmpty;
  OM.Engine = Model;
})(window.OM);
