/* Session-02 prototype shared JS — Foodbridge Module Settlement (discovery).
   Plain <script>, no modules, no build step (R5). Loaded by every screen.
   A localStorage-backed store stands in for the backend, so edits on one screen persist
   and show up on the dashboard / sessions list / settlement queue.
   resetStore() wipes back to the original seed. Distinct STORE_KEY from v1 so the two
   prototypes never clobber each other's demo state in the same browser. */

const STORE_KEY = 'fbms_s2_store_v1';

function loadStore() {
  const cached = localStorage.getItem(STORE_KEY);
  if (cached) {
    try { return Promise.resolve(JSON.parse(cached)); } catch (e) { /* reseed */ }
  }
  // Seed comes from seed.js (window.SEED_DATA) so the prototype works over file:// too.
  const seed = JSON.parse(JSON.stringify(window.SEED_DATA));
  localStorage.setItem(STORE_KEY, JSON.stringify(seed));
  return Promise.resolve(seed);
}
function saveStore(data) { localStorage.setItem(STORE_KEY, JSON.stringify(data)); }
function resetStore() { localStorage.removeItem(STORE_KEY); }

function qp(name, fallback) {
  const v = new URLSearchParams(location.search).get(name);
  return v === null ? fallback : v;
}
function byId(list, id) { return (list || []).find((x) => x.id === id); }
function userName(s, id) { const u = byId(s.users, id); return u ? u.name : (id || '—'); }
function warehouseName(s, id) { const w = byId(s.warehouses, id); return w ? w.name : (id || '—'); }
function entityName(s, id) { const e = byId(s.entities, id); return e ? e.name : (id || '—'); }

function nowIso() { return new Date().toISOString(); }
function fmtDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ', ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}
// 3-decimal, thousands-separated quantity, matching the mockups ("12,458.000").
function fmtQty(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return '—';
  return Number(n).toLocaleString('en-IN', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
}
function fmtPct(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return '';
  return (n >= 0 ? '+' : '') + n.toFixed(2) + '%';
}
function labelize(s) { return String(s || '').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()); }
function statusBadge(status) { return `<span class="badge st-${status}">${labelize(status)}</span>`; }
function entityChip(e) { return `<span class="chip ent-${e}">${e}</span>`; }

/* ---------- The counting model (v1-aligned) ----------------------------------
   The auditor records per product: verifiedOk (good), verifiedExpired, verifiedWaste,
   and extra (surplus found beyond expected). Derived:
     actual   = verifiedOk + verifiedExpired + verifiedWaste + extra
     missing  = max(expected − actual, 0)        // shortfall not located in any state
     variance = expected − actual                // POSITIVE = shortfall, NEGATIVE = surplus
   Status:
     not_counted        — verifiedOk is null (never entered)
     counted            — entered AND missing === 0 (fully reconciled / surplus)
     partially_counted  — entered AND missing > 0 (shortfall still open)
   This matches the ratified v1 discovery convention (Expected − Actual, positive = shortfall)
   and the session-02 feedback-iteration-01 per-product count drawer. */
function num(v) { return (v === null || v === undefined || v === '') ? 0 : Number(v) || 0; }
function rowActual(p) { return num(p.verifiedOk) + num(p.verifiedExpired) + num(p.verifiedWaste) + num(p.extra); }
function computeRow(p) {
  if (p.verifiedOk === null || p.verifiedOk === undefined) {
    return { counted: false, actual: null, missing: null, variance: null, status: 'not_counted', valid: true };
  }
  const actual = rowActual(p);
  const missing = Math.max(p.expected - actual, 0);
  const variance = p.expected - actual;
  const valid = actual >= 0 && num(p.verifiedOk) >= 0 && num(p.verifiedExpired) >= 0 && num(p.verifiedWaste) >= 0 && num(p.extra) >= 0;
  const status = missing === 0 ? 'counted' : 'partially_counted';
  return { counted: true, actual, missing, variance, status, valid };
}
function auditTotals(audit) {
  const rows = audit.products || [];
  let expected = 0, actual = 0, variance = 0, missing = 0, extra = 0, counted = 0;
  rows.forEach((p) => {
    expected += p.expected;
    const c = computeRow(p);
    if (c.counted) { counted += 1; actual += c.actual; variance += c.variance; missing += c.missing; extra += num(p.extra); }
  });
  const total = rows.length;
  return { expected, actual, variance, missing, extra, counted, total,
    pct: total ? Math.round((counted / total) * 100) : 0 };
}
// Audit variance display: POSITIVE = shortfall (red), NEGATIVE = surplus (green).
function varianceCell(v) {
  if (v === null || v === undefined) return '<span class="notice">—</span>';
  if (v === 0) return '<span class="zero">0.000</span>';
  const cls = v > 0 ? 'neg' : 'pos';
  const sign = v > 0 ? '+' : '';
  return `<span class="${cls}">${sign}${fmtQty(v)}</span>`;
}

/* ---------- Shell (sidebar + topbar) rendering -------------------------------
   Rendered from JS so all three screens share one nav definition. Nav items that
   aren't part of this prototype iteration are honestly stubbed (toast on click),
   never dead links that look real. */
const NAV = [
  { key: 'dashboard', label: 'Dashboard', href: 'dashboard.html', icon: 'grid' },
  { key: 'audit-sessions', label: 'Audit Sessions', href: 'audit-sessions.html', icon: 'clipboard' },
  { key: 'settlement-queue', label: 'Settlement Queue', href: 'settlement.html', icon: 'list' },
  { key: 'action-tickets', label: 'Action Tickets', href: 'tickets.html', icon: 'ticket' },
];
const ICONS = {
  logo: '<path fill="currentColor" d="M12 2c-4 3-7 5-7 10a7 7 0 0 0 14 0c0-5-3-7-7-10Zm0 4c2 1.6 4 3 4 6a4 4 0 0 1-8 0c0-3 2-4.4 4-6Z"/>',
  grid: '<path fill="currentColor" d="M3 3h8v8H3V3Zm10 0h8v5h-8V3ZM3 13h8v8H3v-8Zm10 3h8v5h-8v-5Z"/>',
  clipboard: '<path fill="currentColor" d="M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1Zm0 3h6V4H9v1Z"/>',
  list: '<path fill="currentColor" d="M8 5h13v2H8V5Zm0 6h13v2H8v-2Zm0 6h13v2H8v-2ZM3 5h2v2H3V5Zm0 6h2v2H3v-2Zm0 6h2v2H3v-2Z"/>',
  ticket: '<path fill="currentColor" d="M4 6h16a1 1 0 0 1 1 1v3a2 2 0 0 0 0 4v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 0 0 0-4V7a1 1 0 0 1 1-1Z"/>',
  box: '<path fill="currentColor" d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3L18.5 8 12 11.7 5.5 8 12 4.3Z"/>',
  chart: '<path fill="currentColor" d="M4 20V4h2v14h14v2H4Zm4-3 4-5 3 3 4-6 1.6 1.2L16 18l-3-3-4 5-1-3Z"/>',
  gear: '<path fill="currentColor" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9 4-2 1 1 2-2 2-2-1-1 2h-2l-1-2-2 1-2-2 1-2-2-1v-2l2-1-1-2 2-2 2 1 1-2h2l1 2 2-1 2 2-1 2 2 1v2Z"/>',
  db: '<path fill="currentColor" d="M12 2c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm8 6.5C20 10.2 16.4 11.5 12 11.5S4 10.2 4 8.5V12c0 1.7 3.6 3 8 3s8-1.3 8-3V8.5ZM4 15.5V19c0 1.7 3.6 3 8 3s8-1.3 8-3v-3.5c0 1.7-3.6 3-8 3s-8-1.3-8-3Z"/>',
  bell: '<path fill="currentColor" d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2Z"/>',
  help: '<path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.9 15h-1.8v-1.8h1.8V17Zm1.3-6.2c-.5.5-.9.9-1.1 1.5-.1.3-.1.6-.1 1.1h-1.8c0-.6 0-1.1.2-1.6.3-.6.8-1 1.2-1.4.5-.5.8-.8.8-1.4 0-.7-.6-1.2-1.4-1.2-.8 0-1.4.5-1.5 1.4H8.4C8.5 7.3 10 6 12 6c2 0 3.5 1.1 3.5 3 0 1-.5 1.7-1.3 2.8Z"/>',
  search: '<path fill="currentColor" d="m21 20-4.35-4.35a7.5 7.5 0 1 0-1.4 1.4L20 21l1-1ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"/>',
  plus: '<path fill="currentColor" d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z"/>',
  refresh: '<path fill="currentColor" d="M12 6V3L8 7l4 4V8a4 4 0 1 1-4 4H6a6 6 0 1 0 6-6Z"/>',
};
function svg(name, cls) { return `<svg class="${cls || ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`; }

function renderShell(activeKey, opts) {
  opts = opts || {};
  const user = opts.user || { name: 'Amit Singh', role: 'Approver', initials: 'AS' };
  const navHtml = NAV.map((n) => {
    const active = n.key === activeKey ? ' active' : '';
    return `<a class="nav-item${active}" href="${n.href}"${n.stub ? ' data-stub="1"' : ''}>${svg(n.icon, 'nav-icon')}<span>${n.label}</span></a>`;
  }).join('');
  const crumbs = opts.crumbs
    ? opts.crumbs.map((c, i, a) => i === a.length - 1
        ? `<span class="here">${c.label}</span>`
        : `<a href="${c.href}">${c.label}</a><span class="sep">›</span>`).join('')
    : '';
  const sidebar = `
    <aside class="sidebar">
      <div class="brand">${svg('logo', 'logo')}<span>Foodbridge</span></div>
      <nav class="nav">${navHtml}</nav>
      <button class="collapse" type="button" id="resetDemoBtn" title="Clears every edit made in this preview and restores the original seed data.">↺ Reset demo data</button>
    </aside>`;
  const topbar = `
    <header class="topbar">
      <div class="crumbs">${crumbs || '<span class="here">' + (opts.crumbTitle || '') + '</span>'}</div>
      <div class="topbar-right">
        <button class="icon-btn" type="button" title="Notifications">${svg('bell')}<span class="dot-badge">3</span></button>
        <button class="icon-btn" type="button" title="Help">${svg('help')}</button>
        <div class="user-chip" title="${user.name} — ${user.role}">
          <div class="avatar">${user.initials}</div>
          <div class="user-meta"><div class="name">${user.name}</div><div class="role">${user.role}</div></div>
        </div>
      </div>
    </header>`;

  document.body.classList.add('app-shell');
  const contentInner = document.getElementById('content').innerHTML;
  document.body.innerHTML = sidebar +
    `<div class="content">${topbar}<main class="page" id="page">${contentInner}</main></div>`;

  // Reset control
  document.getElementById('resetDemoBtn').addEventListener('click', () => {
    resetStore();
    location.href = 'dashboard.html';
  });
  // Honest stubs — nav items outside this prototype iteration
  document.querySelectorAll('.nav-item[data-stub]').forEach((el) => {
    el.addEventListener('click', (e) => { e.preventDefault(); toast('That screen isn’t part of the session-02 prototype yet.'); });
  });
}

let _toastTimer = null;
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

// Keyboard access for clickable table rows (accessibility floor).
function wireClickableRows(root) {
  (root || document).querySelectorAll('tr.clickable').forEach((row) => {
    row.setAttribute('tabindex', '0');
    row.setAttribute('role', 'button');
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
    });
  });
}

/* ---------- Lifecycle helpers (audit lane) -----------------------------------
   Edit-locking is a PROTOTYPE DEFAULT, not ratified (human held it open):
     draft        — everything editable (header + products)
     in_progress  — add products + edit product counts; header locked
     everything else (submitted / under_review / approved / closed / cancelled) — read-only */
function auditEditable(audit) {
  const s = audit.status;
  return {
    header: s === 'draft',                                  // warehouse / entity / auditor / date
    addProducts: s === 'draft' || s === 'in_progress',
    counts: s === 'draft' || s === 'in_progress',
    readonly: !(s === 'draft' || s === 'in_progress'),
  };
}
function initials(name) { return String(name || '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase(); }
function userChipFor(s, id) { const u = byId(s.users, id) || {}; return { name: u.name || '—', role: u.role || '', initials: initials(u.name) }; }
function priorityBadge(p) { return `<span class="badge pri-${p}">${labelize(p)}</span>`; }

// Classification of a settlement line: prefer the seeded classification, else derive.
function classify(p) {
  if (p.classification) return p.classification;
  const c = computeRow(p);
  if (num(p.extra) > 0 && (c.missing || 0) === 0) return 'EXTRA';
  if (num(p.verifiedExpired) >= num(p.verifiedWaste) && num(p.verifiedExpired) > 0) return 'EXPIRED';
  if (num(p.verifiedWaste) > 0) return 'WASTE';
  return 'MISSING';
}
function resolutionOptionsFor(s, classification) { return (s.resolutionOptions && s.resolutionOptions[classification]) || []; }
function resolutionOption(s, classification, id) { return resolutionOptionsFor(s, classification).find((o) => o.id === id); }

// A settlement line "needs resolution" when it has a non-zero variance.
function needsResolution(p) { const c = computeRow(p); return c.counted && c.variance !== 0; }

function nextSeqId(list, prefix) {
  const re = new RegExp('^' + prefix.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '(\\d+)$');
  const max = list.reduce((m, x) => { const mm = re.exec(String(x.id)); return mm ? Math.max(m, Number(mm[1])) : m; }, 0);
  return prefix + String(max + 1).padStart(3, '0');
}
function evidenceSummary(ev) {
  if (!ev) return '<span class="notice">No evidence</span>';
  const ph = (ev.photos || []).length, dc = (ev.documents || []).length;
  if (!ph && !dc) return '<span class="notice">No evidence</span>';
  const bits = [];
  if (ph) bits.push('📷 ' + ph + ' photo' + (ph > 1 ? 's' : ''));
  if (dc) bits.push('📄 ' + dc + ' doc' + (dc > 1 ? 's' : ''));
  return bits.join(' · ');
}

/* ---------- Modal ---------- */
function openModal(title, bodyHtml, footerHtml) {
  closeModal();
  const wrap = document.createElement('div');
  wrap.className = 'modal-scrim';
  wrap.id = 'modalScrim';
  wrap.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${title}">
    <div class="modal-head"><h2>${title}</h2><button class="modal-close" type="button" aria-label="Close">×</button></div>
    <div class="modal-body">${bodyHtml}</div>
    ${footerHtml ? `<div class="modal-foot">${footerHtml}</div>` : ''}</div>`;
  document.body.appendChild(wrap);
  wrap.querySelector('.modal-close').addEventListener('click', closeModal);
  wrap.addEventListener('click', (e) => { if (e.target === wrap) closeModal(); });
  document.addEventListener('keydown', escClose);
  return wrap;
}
function escClose(e) { if (e.key === 'Escape') closeModal(); }
function closeModal() {
  const m = document.getElementById('modalScrim');
  if (m) m.remove();
  document.removeEventListener('keydown', escClose);
}

/* ---------- L2 drawer (right slide-in, with tabs) --------------------------
   opts: { title, subtitle, tabs:[{key,label}], active, render(key, bodyEl, footEl), onClose }
   Returns a handle: { scrim, bodyEl, footEl, showTab(key), refresh() }. */
function openDrawer(opts) {
  closeDrawer();
  const scrim = document.createElement('div');
  scrim.className = 'drawer-scrim'; scrim.id = 'drawerScrim';
  const tabsHtml = (opts.tabs || []).map((t) => `<button class="drawer-tab" data-key="${t.key}">${t.label}</button>`).join('');
  scrim.innerHTML = `<div class="drawer" role="dialog" aria-modal="true" aria-label="${opts.title || ''}">
    <div class="drawer-header"><div><h2>${opts.title || ''}</h2>${opts.subtitle ? `<div class="sub">${opts.subtitle}</div>` : ''}</div>
      <button class="drawer-close" aria-label="Close">×</button></div>
    ${(opts.tabs && opts.tabs.length) ? `<div class="drawer-tabs">${tabsHtml}</div>` : ''}
    <div class="drawer-body" id="drawerBody"></div>
    <div class="drawer-foot" id="drawerFoot"></div></div>`;
  document.body.appendChild(scrim);
  const raf = (typeof window !== 'undefined' && window.requestAnimationFrame) ? window.requestAnimationFrame : (fn) => setTimeout(fn, 0);
  raf(() => scrim.classList.add('open'));
  const bodyEl = scrim.querySelector('#drawerBody');
  const footEl = scrim.querySelector('#drawerFoot');
  let active = opts.active || (opts.tabs && opts.tabs[0] && opts.tabs[0].key);
  function showTab(key) {
    active = key;
    scrim.querySelectorAll('.drawer-tab').forEach((b) => b.classList.toggle('active', b.dataset.key === key));
    if (opts.render) opts.render(key, bodyEl, footEl);
  }
  scrim.querySelectorAll('.drawer-tab').forEach((b) => b.addEventListener('click', () => showTab(b.dataset.key)));
  scrim.querySelector('.drawer-close').addEventListener('click', closeDrawer);
  scrim.addEventListener('click', (e) => { if (e.target === scrim) closeDrawer(); });
  document.addEventListener('keydown', drawerEsc);
  const handle = { scrim, bodyEl, footEl, showTab, refresh: () => showTab(active), get active() { return active; } };
  window._drawerOnClose = opts.onClose || null;
  // NB: caller must invoke handle.refresh() to run the first render — deferring it here
  // avoids a temporal-dead-zone on `const h = openDrawer({...})` when a render callback uses `h`.
  return handle;
}
function drawerEsc(e) { if (e.key === 'Escape') closeDrawer(); }
function closeDrawer() {
  const d = document.getElementById('drawerScrim');
  if (d) d.remove();
  document.removeEventListener('keydown', drawerEsc);
  const cb = window._drawerOnClose; window._drawerOnClose = null;
  if (cb) cb();
}

/* Inline confirmation (replaces confirm dialogs). Renders into a target element
   (typically the drawer footer). onCancel should restore the prior footer. */
function inlineConfirm(targetEl, o) {
  targetEl.innerHTML = `<div class="inline-confirm"><span>⚠ ${o.message}</span>
    <span class="ic-actions"><button class="btn sm" id="icCancel">Cancel</button>
    <button class="btn sm ${o.danger ? 'danger' : 'primary'}" id="icOk">${o.confirmLabel || 'Confirm'}</button></span></div>`;
  targetEl.querySelector('#icCancel').addEventListener('click', () => { if (o.onCancel) o.onCancel(); });
  targetEl.querySelector('#icOk').addEventListener('click', () => o.onConfirm());
}

// Auto-open a drawer from ?open=<id> on list pages.
function openParam() { return qp('open', ''); }
