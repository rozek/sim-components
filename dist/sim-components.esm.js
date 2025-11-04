import { ValidatorForClassifier as _e, acceptNil as Ue, rejectNil as je, ValueIsStringMatching as Ne, ValueIsFiniteNumber as no, ValueIsPlainObject as Re, expectText as ei, expectBoolean as ti, quoted as it, ValueIsOneOf as ze, ValueIsListSatisfying as ue, ValueIsOrdinal as dt, expectPlainObject as Kt, ValueIsFunction as Ke, expectFunction as Zt, allowTextline as oo, ValueIsBoolean as Xt, ValueIsNumber as ht, ValueIsNumberInRange as Yt, ValueIsInteger as io, ValueIsIntegerInRange as ao, ValueIsCardinal as ro, ValueIsString as so, ValueIsText as kn, ValueIsTextline as ce, ValueIsColor as Ft, ValueIsEMailAddress as Ht, ValueIsURL as Ut, allowPlainObject as An, expectValue as lo, allowFunction as Oe, allowOrdinal as mn, expectTextline as ni } from "javascript-interface-library";
import { h as oi, options as ii, toChildArray as In } from "preact";
import ai from "htm";
import { Marked as ri } from "marked";
import { Marked as Ul } from "marked";
import si from "marked-katex-extension";
import { markedHighlight as li } from "marked-highlight";
var w = ai.bind(oi), at, le, gn, Pn, bt = 0, co = [], pe = ii, Bn = pe.__b, Vn = pe.__r, zn = pe.diffed, Fn = pe.__c, Hn = pe.unmount, Un = pe.__;
function Jt(e, t) {
  pe.__h && pe.__h(le, e, bt || t), bt = 0;
  var n = le.__H || (le.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function pt(e) {
  return bt = 1, ci(po, e);
}
function ci(e, t, n) {
  var o = Jt(at++, 2);
  if (o.t = e, !o.__c && (o.__ = [po(void 0, t), function(s) {
    var l = o.__N ? o.__N[0] : o.__[0], c = o.t(l, s);
    l !== c && (o.__N = [c, o.__[1]], o.__c.setState({}));
  }], o.__c = le, !le.__f)) {
    var i = function(s, l, c) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (u.every(function(p) {
        return !p.__N;
      })) return !r || r.call(this, s, l, c);
      var d = o.__c.props !== s;
      return u.forEach(function(p) {
        if (p.__N) {
          var m = p.__[0];
          p.__ = p.__N, p.__N = void 0, m !== p.__[0] && (d = !0);
        }
      }), r && r.call(this, s, l, c) || d;
    };
    le.__f = !0;
    var r = le.shouldComponentUpdate, a = le.componentWillUpdate;
    le.componentWillUpdate = function(s, l, c) {
      if (this.__e) {
        var u = r;
        r = void 0, i(s, l, c), r = u;
      }
      a && a.call(this, s, l, c);
    }, le.shouldComponentUpdate = i;
  }
  return o.__N || o.__;
}
function rt(e, t) {
  var n = Jt(at++, 3);
  !pe.__s && uo(n.__H, t) && (n.__ = e, n.u = t, le.__H.__h.push(n));
}
function W(e) {
  return bt = 5, kt(function() {
    return { current: e };
  }, []);
}
function kt(e, t) {
  var n = Jt(at++, 7);
  return uo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function X(e, t) {
  return bt = 8, kt(function() {
    return e;
  }, t);
}
function Ee() {
  var e = Jt(at++, 11);
  if (!e.__) {
    for (var t = le.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ui() {
  for (var e; e = co.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Vt), e.__H.__h.forEach(xn), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], pe.__e(t, e.__v);
  }
}
pe.__b = function(e) {
  le = null, Bn && Bn(e);
}, pe.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Un && Un(e, t);
}, pe.__r = function(e) {
  Vn && Vn(e), at = 0;
  var t = (le = e.__c).__H;
  t && (gn === le ? (t.__h = [], le.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (t.__h.forEach(Vt), t.__h.forEach(xn), t.__h = [], at = 0)), gn = le;
}, pe.diffed = function(e) {
  zn && zn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (co.push(t) !== 1 && Pn === pe.requestAnimationFrame || ((Pn = pe.requestAnimationFrame) || di)(ui)), t.__H.__.forEach(function(n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), gn = le = null;
}, pe.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Vt), n.__h = n.__h.filter(function(o) {
        return !o.__ || xn(o);
      });
    } catch (o) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], pe.__e(o, n.__v);
    }
  }), Fn && Fn(e, t);
}, pe.unmount = function(e) {
  Hn && Hn(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(o) {
    try {
      Vt(o);
    } catch (i) {
      t = i;
    }
  }), n.__H = void 0, t && pe.__e(t, n.__v));
};
var jn = typeof requestAnimationFrame == "function";
function di(e) {
  var t, n = function() {
    clearTimeout(o), jn && cancelAnimationFrame(t), setTimeout(e);
  }, o = setTimeout(n, 35);
  jn && (t = requestAnimationFrame(n));
}
function Vt(e) {
  var t = le, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), le = t;
}
function xn(e) {
  var t = le;
  e.__c = e.__(), le = t;
}
function uo(e, t) {
  return !e || e.length !== t.length || t.some(function(n, o) {
    return n !== e[o];
  });
}
function po(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const vn = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakSet();
let $e, $n = 0, En = 0;
const Be = "__aa_tgt", xt = "__aa_del", jt = "__aa_new", fo = (e) => {
  const t = gi(e);
  t && t.forEach((n) => hi(n));
}, pi = (e) => {
  e.forEach((t) => {
    t.target === $e && fi(), ye.has(t.target) && Xe(t.target);
  });
};
function mo(e) {
  const t = e.getBoundingClientRect(), n = $e?.clientWidth || 0, o = $e?.clientHeight || 0;
  return t.bottom < 0 || t.top > o || t.right < 0 || t.left > n;
}
function Sn(e) {
  const t = wt.get(e);
  t?.disconnect();
  let n = ye.get(e), o = 0;
  const i = 5;
  n || (n = st(e), ye.set(e, n));
  const { offsetWidth: r, offsetHeight: a } = $e, l = [
    n.top - i,
    r - (n.left + i + n.width),
    a - (n.top + i + n.height),
    n.left - i
  ].map((u) => `${-1 * Math.floor(u)}px`).join(" "), c = new IntersectionObserver(() => {
    ++o > 1 && Xe(e);
  }, {
    root: $e,
    threshold: 1,
    rootMargin: l
  });
  c.observe(e), wt.set(e, c);
}
function Xe(e, t = !0) {
  clearTimeout(Fe.get(e));
  const n = Qt(e), o = t ? vt(n) ? 500 : n.duration : 0;
  Fe.set(e, setTimeout(async () => {
    const i = Se.get(e);
    try {
      await i?.finished, ye.set(e, st(e)), Sn(e);
    } catch {
    }
  }, o));
}
function fi() {
  clearTimeout(Fe.get($e)), Fe.set($e, setTimeout(() => {
    vn.forEach((e) => zt(e, (t) => go(() => Xe(t))));
  }, 100));
}
function mi(e) {
  setTimeout(() => {
    gt.set(e, setInterval(() => go(Xe.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function go(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let Pe;
const ho = typeof window < "u" && "ResizeObserver" in window;
ho && ($e = document.documentElement, new MutationObserver(fo), Pe = new ResizeObserver(pi), window.addEventListener("scroll", () => {
  En = window.scrollY, $n = window.scrollX;
}), Pe.observe($e));
function gi(e) {
  return e.reduce((o, i) => [
    ...o,
    ...Array.from(i.addedNodes),
    ...Array.from(i.removedNodes)
  ], []).every((o) => o.nodeName === "#comment") ? !1 : e.reduce((o, i) => {
    if (o === !1)
      return !1;
    if (i.target instanceof Element) {
      if (bn(i.target), !o.has(i.target)) {
        o.add(i.target);
        for (let r = 0; r < i.target.children.length; r++) {
          const a = i.target.children.item(r);
          if (a) {
            if (xt in a)
              return !1;
            bn(i.target, a), o.add(a);
          }
        }
      }
      if (i.removedNodes.length)
        for (let r = 0; r < i.removedNodes.length; r++) {
          const a = i.removedNodes[r];
          if (xt in a)
            return !1;
          a instanceof Element && (o.add(a), bn(i.target, a), Ze.set(a, [
            i.previousSibling,
            i.nextSibling
          ]));
        }
    }
    return o;
  }, /* @__PURE__ */ new Set());
}
function bn(e, t) {
  !t && !(Be in e) ? Object.defineProperty(e, Be, { value: e }) : t && !(Be in t) && Object.defineProperty(t, Be, { value: e });
}
function hi(e) {
  var t, n;
  const o = e.isConnected, i = ye.has(e);
  o && Ze.has(e) && Ze.delete(e), ((t = Se.get(e)) === null || t === void 0 ? void 0 : t.playState) !== "finished" && ((n = Se.get(e)) === null || n === void 0 || n.cancel()), jt in e ? Gn(e) : i && o ? wi(e) : i && !o ? xi(e) : Gn(e);
}
function Ce(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function bi(e) {
  let t = e.parentElement;
  for (; t; ) {
    if (t.scrollLeft || t.scrollTop)
      return { x: t.scrollLeft, y: t.scrollTop };
    t = t.parentElement;
  }
  return { x: 0, y: 0 };
}
function st(e) {
  const t = e.getBoundingClientRect(), { x: n, y: o } = bi(e);
  return {
    top: t.top + o,
    left: t.left + n,
    width: t.width,
    height: t.height
  };
}
function bo(e, t, n) {
  let o = t.width, i = t.height, r = n.width, a = n.height;
  const s = getComputedStyle(e);
  if (s.getPropertyValue("box-sizing") === "content-box") {
    const c = Ce(s.paddingTop) + Ce(s.paddingBottom) + Ce(s.borderTopWidth) + Ce(s.borderBottomWidth), u = Ce(s.paddingLeft) + Ce(s.paddingRight) + Ce(s.borderRightWidth) + Ce(s.borderLeftWidth);
    o -= u, r -= u, i -= c, a -= c;
  }
  return [o, r, i, a].map(Math.round);
}
function Qt(e) {
  return Be in e && qe.has(e[Be]) ? qe.get(e[Be]) : { duration: 250, easing: "ease-in-out" };
}
function wo(e) {
  if (Be in e)
    return e[Be];
}
function Tn(e) {
  const t = wo(e);
  return t ? et.has(t) : !1;
}
function zt(e, ...t) {
  t.forEach((n) => n(e, qe.has(e)));
  for (let n = 0; n < e.children.length; n++) {
    const o = e.children.item(n);
    o && t.forEach((i) => i(o, qe.has(o)));
  }
}
function Mn(e) {
  return Array.isArray(e) ? e : [e];
}
function vt(e) {
  return typeof e == "function";
}
function wi(e) {
  const t = ye.get(e), n = st(e);
  if (!Tn(e))
    return ye.set(e, n);
  if (mo(e)) {
    ye.set(e, n), Sn(e);
    return;
  }
  let o;
  if (!t)
    return;
  const i = Qt(e);
  if (typeof i != "function") {
    let r = t.left - n.left, a = t.top - n.top;
    const s = t.left + t.width - (n.left + n.width);
    t.top + t.height - (n.top + n.height) == 0 && (a = 0), s == 0 && (r = 0);
    const [c, u, d, p] = bo(e, t, n), m = {
      transform: `translate(${r}px, ${a}px)`
    }, g = {
      transform: "translate(0, 0)"
    };
    c !== u && (m.width = `${c}px`, g.width = `${u}px`), d !== p && (m.height = `${d}px`, g.height = `${p}px`), o = e.animate([m, g], {
      duration: i.duration,
      easing: i.easing
    });
  } else {
    const [r] = Mn(i(e, "remain", t, n));
    o = new Animation(r), o.play();
  }
  Se.set(e, o), ye.set(e, n), o.addEventListener("finish", Xe.bind(null, e, !1), {
    once: !0
  });
}
function Gn(e) {
  jt in e && delete e[jt];
  const t = st(e);
  ye.set(e, t);
  const n = Qt(e);
  if (!Tn(e))
    return;
  if (mo(e)) {
    Sn(e);
    return;
  }
  let o;
  if (typeof n != "function")
    o = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: n.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [i] = Mn(n(e, "add", t));
    o = new Animation(i), o.play();
  }
  Se.set(e, o), o.addEventListener("finish", Xe.bind(null, e, !1), {
    once: !0
  });
}
function qn(e, t) {
  var n;
  e.remove(), ye.delete(e), Ze.delete(e), Se.delete(e), (n = wt.get(e)) === null || n === void 0 || n.disconnect(), setTimeout(() => {
    if (xt in e && delete e[xt], Object.defineProperty(e, jt, { value: !0, configurable: !0 }), t && e instanceof HTMLElement)
      for (const o in t)
        e.style[o] = "";
  }, 0);
}
function xi(e) {
  var t;
  if (!Ze.has(e) || !ye.has(e))
    return;
  const [n, o] = Ze.get(e);
  Object.defineProperty(e, xt, { value: !0, configurable: !0 });
  const i = window.scrollX, r = window.scrollY;
  if (o && o.parentNode && o.parentNode instanceof Element ? o.parentNode.insertBefore(e, o) : n && n.parentNode ? n.parentNode.appendChild(e) : (t = wo(e)) === null || t === void 0 || t.appendChild(e), !Tn(e))
    return qn(e);
  const [a, s, l, c] = yi(e), u = Qt(e), d = ye.get(e);
  (i !== $n || r !== En) && vi(e, i, r, u);
  let p, m = {
    position: "absolute",
    top: `${a}px`,
    left: `${s}px`,
    width: `${l}px`,
    height: `${c}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!vt(u))
    Object.assign(e.style, m), p = e.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], {
      duration: u.duration,
      easing: "ease-out"
    });
  else {
    const [g, f] = Mn(u(e, "remove", d));
    f?.styleReset !== !1 && (m = f?.styleReset || m, Object.assign(e.style, m)), p = new Animation(g), p.play();
  }
  Se.set(e, p), p.addEventListener("finish", () => qn(e, m), {
    once: !0
  });
}
function vi(e, t, n, o) {
  const i = $n - t, r = En - n, a = document.documentElement.style.scrollBehavior;
  if (getComputedStyle($e).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + i, window.scrollY + r), !e.parentElement)
    return;
  const l = e.parentElement;
  let c = l.clientHeight, u = l.clientWidth;
  const d = performance.now();
  function p() {
    requestAnimationFrame(() => {
      if (!vt(o)) {
        const m = c - l.clientHeight, g = u - l.clientWidth;
        d + o.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - g,
          top: window.scrollY - m
        }), c = l.clientHeight, u = l.clientWidth, p()) : document.documentElement.style.scrollBehavior = a;
      }
    });
  }
  p();
}
function yi(e) {
  var t;
  const n = ye.get(e), [o, , i] = bo(e, n, st(e));
  let r = e.parentElement;
  for (; r && (getComputedStyle(r).position === "static" || r instanceof HTMLBodyElement); )
    r = r.parentElement;
  r || (r = document.body);
  const a = getComputedStyle(r), s = !Se.has(e) || ((t = Se.get(e)) === null || t === void 0 ? void 0 : t.playState) === "finished" ? st(r) : ye.get(r), l = Math.round(n.top - s.top) - Ce(a.borderTopWidth), c = Math.round(n.left - s.left) - Ce(a.borderLeftWidth);
  return [l, c, o, i];
}
function _i(e, t = {}) {
  if (ho && Pe && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !vt(t) && !t.disrespectUserMotionPreference)) {
    et.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), zt(e, Xe, mi, (a) => Pe?.observe(a)), vt(t) ? qe.set(e, t) : qe.set(e, {
      duration: 250,
      easing: "ease-in-out",
      ...t
    });
    const r = new MutationObserver(fo);
    r.observe(e, { childList: !0 }), hn.set(e, r), vn.add(e);
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      et.add(e);
    },
    disable: () => {
      et.delete(e), zt(e, (o) => {
        const i = Se.get(o);
        try {
          i?.cancel();
        } catch {
        }
        Se.delete(o);
        const r = Fe.get(o);
        r && clearTimeout(r), Fe.delete(o);
        const a = gt.get(o);
        a && clearInterval(a), gt.delete(o);
      });
    },
    isEnabled: () => et.has(e),
    destroy: () => {
      et.delete(e), vn.delete(e), qe.delete(e);
      const o = hn.get(e);
      o?.disconnect(), hn.delete(e), zt(e, (i) => {
        Pe?.unobserve(i);
        const r = Se.get(i);
        try {
          r?.cancel();
        } catch {
        }
        Se.delete(i);
        const a = wt.get(i);
        a?.disconnect(), wt.delete(i);
        const s = gt.get(i);
        s && clearInterval(s), gt.delete(i);
        const l = Fe.get(i);
        l && clearTimeout(l), Fe.delete(i), ye.delete(i), Ze.delete(i);
      });
    }
  });
}
function en(e) {
  const t = W(null), [n, o] = pt(), i = (r) => {
    n && (r ? n.enable() : n.disable());
  };
  return rt(() => {
    t.current instanceof HTMLElement && o(_i(t.current, {}));
  }, []), rt(() => () => {
    var r;
    (r = n?.destroy) === null || r === void 0 || r.call(n);
  }, [n]), [t, i];
}
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xo(e) {
  return e instanceof Map ? e.clear = e.delete = e.set = function() {
    throw new Error("map is read-only");
  } : e instanceof Set && (e.add = e.clear = e.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
    const n = e[t], o = typeof n;
    (o === "object" || o === "function") && !Object.isFrozen(n) && xo(n);
  }), e;
}
class Wn {
  /**
   * @param {CompiledMode} mode
   */
  constructor(t) {
    t.data === void 0 && (t.data = {}), this.data = t.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function vo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function He(e, ...t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const o in e)
    n[o] = e[o];
  return t.forEach(function(o) {
    for (const i in o)
      n[i] = o[i];
  }), /** @type {T} */
  n;
}
const Ii = "</span>", Kn = (e) => !!e.scope, $i = (e, { prefix: t }) => {
  if (e.startsWith("language:"))
    return e.replace("language:", "language-");
  if (e.includes(".")) {
    const n = e.split(".");
    return [
      `${t}${n.shift()}`,
      ...n.map((o, i) => `${o}${"_".repeat(i + 1)}`)
    ].join(" ");
  }
  return `${t}${e}`;
};
class Ei {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(t, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, t.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(t) {
    this.buffer += vo(t);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(t) {
    if (!Kn(t)) return;
    const n = $i(
      t.scope,
      { prefix: this.classPrefix }
    );
    this.span(n);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(t) {
    Kn(t) && (this.buffer += Ii);
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
  span(t) {
    this.buffer += `<span class="${t}">`;
  }
}
const Zn = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class Ln {
  constructor() {
    this.rootNode = Zn(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(t) {
    this.top.children.push(t);
  }
  /** @param {string} scope */
  openNode(t) {
    const n = Zn({ scope: t });
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); ) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(t) {
    return this.constructor._walk(t, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(t, n) {
    return typeof n == "string" ? t.addText(n) : n.children && (t.openNode(n), n.children.forEach((o) => this._walk(t, o)), t.closeNode(n)), t;
  }
  /**
   * @param {Node} node
   */
  static _collapse(t) {
    typeof t != "string" && t.children && (t.children.every((n) => typeof n == "string") ? t.children = [t.children.join("")] : t.children.forEach((n) => {
      Ln._collapse(n);
    }));
  }
}
class Si extends Ln {
  /**
   * @param {*} options
   */
  constructor(t) {
    super(), this.options = t;
  }
  /**
   * @param {string} text
   */
  addText(t) {
    t !== "" && this.add(t);
  }
  /** @param {string} scope */
  startScope(t) {
    this.openNode(t);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(t, n) {
    const o = t.root;
    n && (o.scope = `language:${n}`), this.add(o);
  }
  toHTML() {
    return new Ei(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function yt(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function yo(e) {
  return Ye("(?=", e, ")");
}
function Ti(e) {
  return Ye("(?:", e, ")*");
}
function Mi(e) {
  return Ye("(?:", e, ")?");
}
function Ye(...e) {
  return e.map((n) => yt(n)).join("");
}
function Li(e) {
  const t = e[e.length - 1];
  return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Dn(...e) {
  return "(" + (Li(e).capture ? "" : "?:") + e.map((o) => yt(o)).join("|") + ")";
}
function _o(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
function Di(e, t) {
  const n = e && e.exec(t);
  return n && n.index === 0;
}
const Ni = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Nn(e, { joinWith: t }) {
  let n = 0;
  return e.map((o) => {
    n += 1;
    const i = n;
    let r = yt(o), a = "";
    for (; r.length > 0; ) {
      const s = Ni.exec(r);
      if (!s) {
        a += r;
        break;
      }
      a += r.substring(0, s.index), r = r.substring(s.index + s[0].length), s[0][0] === "\\" && s[1] ? a += "\\" + String(Number(s[1]) + i) : (a += s[0], s[0] === "(" && n++);
    }
    return a;
  }).map((o) => `(${o})`).join(t);
}
const Ci = /\b\B/, ko = "[a-zA-Z]\\w*", Cn = "[a-zA-Z_]\\w*", Io = "\\b\\d+(\\.\\d+)?", $o = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Eo = "\\b(0b[01]+)", Oi = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Ri = (e = {}) => {
  const t = /^#![ ]*\//;
  return e.binary && (e.begin = Ye(
    t,
    /.*\b/,
    e.binary,
    /\b.*/
  )), He({
    scope: "meta",
    begin: t,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (n, o) => {
      n.index !== 0 && o.ignoreMatch();
    }
  }, e);
}, _t = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, Ai = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [_t]
}, Pi = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [_t]
}, Bi = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, tn = function(e, t, n = {}) {
  const o = He(
    {
      scope: "comment",
      begin: e,
      end: t,
      contains: []
    },
    n
  );
  o.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const i = Dn(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  return o.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: Ye(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        i,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), o;
}, Vi = tn("//", "$"), zi = tn("/\\*", "\\*/"), Fi = tn("#", "$"), Hi = {
  scope: "number",
  begin: Io,
  relevance: 0
}, Ui = {
  scope: "number",
  begin: $o,
  relevance: 0
}, ji = {
  scope: "number",
  begin: Eo,
  relevance: 0
}, Gi = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    _t,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [_t]
    }
  ]
}, qi = {
  scope: "title",
  begin: ko,
  relevance: 0
}, Wi = {
  scope: "title",
  begin: Cn,
  relevance: 0
}, Ki = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Cn,
  relevance: 0
}, Zi = function(e) {
  return Object.assign(
    e,
    {
      /** @type {ModeCallback} */
      "on:begin": (t, n) => {
        n.data._beginMatch = t[1];
      },
      /** @type {ModeCallback} */
      "on:end": (t, n) => {
        n.data._beginMatch !== t[1] && n.ignoreMatch();
      }
    }
  );
};
var Dt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Ai,
  BACKSLASH_ESCAPE: _t,
  BINARY_NUMBER_MODE: ji,
  BINARY_NUMBER_RE: Eo,
  COMMENT: tn,
  C_BLOCK_COMMENT_MODE: zi,
  C_LINE_COMMENT_MODE: Vi,
  C_NUMBER_MODE: Ui,
  C_NUMBER_RE: $o,
  END_SAME_AS_BEGIN: Zi,
  HASH_COMMENT_MODE: Fi,
  IDENT_RE: ko,
  MATCH_NOTHING_RE: Ci,
  METHOD_GUARD: Ki,
  NUMBER_MODE: Hi,
  NUMBER_RE: Io,
  PHRASAL_WORDS_MODE: Bi,
  QUOTE_STRING_MODE: Pi,
  REGEXP_MODE: Gi,
  RE_STARTERS_RE: Oi,
  SHEBANG: Ri,
  TITLE_MODE: qi,
  UNDERSCORE_IDENT_RE: Cn,
  UNDERSCORE_TITLE_MODE: Wi
});
function Xi(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function Yi(e, t) {
  e.className !== void 0 && (e.scope = e.className, delete e.className);
}
function Ji(e, t) {
  t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = Xi, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
}
function Qi(e, t) {
  Array.isArray(e.illegal) && (e.illegal = Dn(...e.illegal));
}
function ea(e, t) {
  if (e.match) {
    if (e.begin || e.end) throw new Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
}
function ta(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const na = (e, t) => {
  if (!e.beforeMatch) return;
  if (e.starts) throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, e);
  Object.keys(e).forEach((o) => {
    delete e[o];
  }), e.keywords = n.keywords, e.begin = Ye(n.beforeMatch, yo(n.begin)), e.starts = {
    relevance: 0,
    contains: [
      Object.assign(n, { endsParent: !0 })
    ]
  }, e.relevance = 0, delete n.beforeMatch;
}, oa = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
], ia = "keyword";
function So(e, t, n = ia) {
  const o = /* @__PURE__ */ Object.create(null);
  return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach(function(r) {
    Object.assign(
      o,
      So(e[r], t, r)
    );
  }), o;
  function i(r, a) {
    t && (a = a.map((s) => s.toLowerCase())), a.forEach(function(s) {
      const l = s.split("|");
      o[l[0]] = [r, aa(l[0], l[1])];
    });
  }
}
function aa(e, t) {
  return t ? Number(t) : ra(e) ? 0 : 1;
}
function ra(e) {
  return oa.includes(e.toLowerCase());
}
const Xn = {}, We = (e) => {
  console.error(e);
}, Yn = (e, ...t) => {
  console.log(`WARN: ${e}`, ...t);
}, Qe = (e, t) => {
  Xn[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), Xn[`${e}/${t}`] = !0);
}, Gt = new Error();
function To(e, t, { key: n }) {
  let o = 0;
  const i = e[n], r = {}, a = {};
  for (let s = 1; s <= t.length; s++)
    a[s + o] = i[s], r[s + o] = !0, o += _o(t[s - 1]);
  e[n] = a, e[n]._emit = r, e[n]._multi = !0;
}
function sa(e) {
  if (Array.isArray(e.begin)) {
    if (e.skip || e.excludeBegin || e.returnBegin)
      throw We("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Gt;
    if (typeof e.beginScope != "object" || e.beginScope === null)
      throw We("beginScope must be object"), Gt;
    To(e, e.begin, { key: "beginScope" }), e.begin = Nn(e.begin, { joinWith: "" });
  }
}
function la(e) {
  if (Array.isArray(e.end)) {
    if (e.skip || e.excludeEnd || e.returnEnd)
      throw We("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Gt;
    if (typeof e.endScope != "object" || e.endScope === null)
      throw We("endScope must be object"), Gt;
    To(e, e.end, { key: "endScope" }), e.end = Nn(e.end, { joinWith: "" });
  }
}
function ca(e) {
  e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
}
function ua(e) {
  ca(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), sa(e), la(e);
}
function da(e) {
  function t(a, s) {
    return new RegExp(
      yt(a),
      "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (s ? "g" : "")
    );
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(s, l) {
      l.position = this.position++, this.matchIndexes[this.matchAt] = l, this.regexes.push([l, s]), this.matchAt += _o(s) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const s = this.regexes.map((l) => l[1]);
      this.matcherRe = t(Nn(s, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const l = this.matcherRe.exec(s);
      if (!l)
        return null;
      const c = l.findIndex((d, p) => p > 0 && d !== void 0), u = this.matchIndexes[c];
      return l.splice(0, c), Object.assign(l, u);
    }
  }
  class o {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(s) {
      if (this.multiRegexes[s]) return this.multiRegexes[s];
      const l = new n();
      return this.rules.slice(s).forEach(([c, u]) => l.addRule(c, u)), l.compile(), this.multiRegexes[s] = l, l;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(s, l) {
      this.rules.push([s, l]), l.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(s) {
      const l = this.getMatcher(this.regexIndex);
      l.lastIndex = this.lastIndex;
      let c = l.exec(s);
      if (this.resumingScanAtSamePosition() && !(c && c.index === this.lastIndex)) {
        const u = this.getMatcher(0);
        u.lastIndex = this.lastIndex + 1, c = u.exec(s);
      }
      return c && (this.regexIndex += c.position + 1, this.regexIndex === this.count && this.considerAll()), c;
    }
  }
  function i(a) {
    const s = new o();
    return a.contains.forEach((l) => s.addRule(l.begin, { rule: l, type: "begin" })), a.terminatorEnd && s.addRule(a.terminatorEnd, { type: "end" }), a.illegal && s.addRule(a.illegal, { type: "illegal" }), s;
  }
  function r(a, s) {
    const l = (
      /** @type CompiledMode */
      a
    );
    if (a.isCompiled) return l;
    [
      Yi,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      ea,
      ua,
      na
    ].forEach((u) => u(a, s)), e.compilerExtensions.forEach((u) => u(a, s)), a.__beforeBegin = null, [
      Ji,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      Qi,
      // default to 1 relevance if not specified
      ta
    ].forEach((u) => u(a, s)), a.isCompiled = !0;
    let c = null;
    return typeof a.keywords == "object" && a.keywords.$pattern && (a.keywords = Object.assign({}, a.keywords), c = a.keywords.$pattern, delete a.keywords.$pattern), c = c || /\w+/, a.keywords && (a.keywords = So(a.keywords, e.case_insensitive)), l.keywordPatternRe = t(c, !0), s && (a.begin || (a.begin = /\B|\b/), l.beginRe = t(l.begin), !a.end && !a.endsWithParent && (a.end = /\B|\b/), a.end && (l.endRe = t(l.end)), l.terminatorEnd = yt(l.end) || "", a.endsWithParent && s.terminatorEnd && (l.terminatorEnd += (a.end ? "|" : "") + s.terminatorEnd)), a.illegal && (l.illegalRe = t(
      /** @type {RegExp | string} */
      a.illegal
    )), a.contains || (a.contains = []), a.contains = [].concat(...a.contains.map(function(u) {
      return pa(u === "self" ? a : u);
    })), a.contains.forEach(function(u) {
      r(
        /** @type Mode */
        u,
        l
      );
    }), a.starts && r(a.starts, s), l.matcher = i(l), l;
  }
  if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return e.classNameAliases = He(e.classNameAliases || {}), r(
    /** @type Mode */
    e
  );
}
function Mo(e) {
  return e ? e.endsWithParent || Mo(e.starts) : !1;
}
function pa(e) {
  return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
    return He(e, { variants: null }, t);
  })), e.cachedVariants ? e.cachedVariants : Mo(e) ? He(e, { starts: e.starts ? He(e.starts) : null }) : Object.isFrozen(e) ? He(e) : e;
}
var fa = "11.11.1";
class ma extends Error {
  constructor(t, n) {
    super(t), this.name = "HTMLInjectionError", this.html = n;
  }
}
const wn = vo, Jn = He, Qn = Symbol("nomatch"), ga = 7, Lo = function(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), o = [];
  let i = !0;
  const r = "Could not find the language '{}', did you forget to load/include a language module?", a = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let s = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: Si
  };
  function l(y) {
    return s.noHighlightRe.test(y);
  }
  function c(y) {
    let A = y.className + " ";
    A += y.parentNode ? y.parentNode.className : "";
    const P = s.languageDetectRe.exec(A);
    if (P) {
      const q = _(P[1]);
      return q || (Yn(r.replace("{}", P[1])), Yn("Falling back to no-highlight mode for this block.", y)), q ? P[1] : "no-highlight";
    }
    return A.split(/\s+/).find((q) => l(q) || _(q));
  }
  function u(y, A, P) {
    let q = "", te = "";
    typeof A == "object" ? (q = y, P = A.ignoreIllegals, te = A.language) : (Qe("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Qe("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), te = y, q = A), P === void 0 && (P = !0);
    const ie = {
      code: q,
      language: te
    };
    ne("before:highlight", ie);
    const he = ie.result ? ie.result : d(ie.language, ie.code, P);
    return he.code = ie.code, ne("after:highlight", he), he;
  }
  function d(y, A, P, q) {
    const te = /* @__PURE__ */ Object.create(null);
    function ie(L, F) {
      return L.keywords[F];
    }
    function he() {
      if (!I.keywords) {
        be.addText(ae);
        return;
      }
      let L = 0;
      I.keywordPatternRe.lastIndex = 0;
      let F = I.keywordPatternRe.exec(ae), J = "";
      for (; F; ) {
        J += ae.substring(L, F.index);
        const oe = Y.case_insensitive ? F[0].toLowerCase() : F[0], ve = ie(I, oe);
        if (ve) {
          const [Ae, Jo] = ve;
          if (be.addText(J), J = "", te[oe] = (te[oe] || 0) + 1, te[oe] <= ga && (Lt += Jo), Ae.startsWith("_"))
            J += F[0];
          else {
            const Qo = Y.classNameAliases[Ae] || Ae;
            Me(F[0], Qo);
          }
        } else
          J += F[0];
        L = I.keywordPatternRe.lastIndex, F = I.keywordPatternRe.exec(ae);
      }
      J += ae.substring(L), be.addText(J);
    }
    function Te() {
      if (ae === "") return;
      let L = null;
      if (typeof I.subLanguage == "string") {
        if (!t[I.subLanguage]) {
          be.addText(ae);
          return;
        }
        L = d(I.subLanguage, ae, !0, de[I.subLanguage]), de[I.subLanguage] = /** @type {CompiledMode} */
        L._top;
      } else
        L = m(ae, I.subLanguage.length ? I.subLanguage : null);
      I.relevance > 0 && (Lt += L.relevance), be.__addSublanguage(L._emitter, L.language);
    }
    function xe() {
      I.subLanguage != null ? Te() : he(), ae = "";
    }
    function Me(L, F) {
      L !== "" && (be.startScope(F), be.addText(L), be.endScope());
    }
    function ft(L, F) {
      let J = 1;
      const oe = F.length - 1;
      for (; J <= oe; ) {
        if (!L._emit[J]) {
          J++;
          continue;
        }
        const ve = Y.classNameAliases[L[J]] || L[J], Ae = F[J];
        ve ? Me(Ae, ve) : (ae = Ae, he(), ae = ""), J++;
      }
    }
    function Et(L, F) {
      return L.scope && typeof L.scope == "string" && be.openNode(Y.classNameAliases[L.scope] || L.scope), L.beginScope && (L.beginScope._wrap ? (Me(ae, Y.classNameAliases[L.beginScope._wrap] || L.beginScope._wrap), ae = "") : L.beginScope._multi && (ft(L.beginScope, F), ae = "")), I = Object.create(L, { parent: { value: I } }), I;
    }
    function St(L, F, J) {
      let oe = Di(L.endRe, J);
      if (oe) {
        if (L["on:end"]) {
          const ve = new Wn(L);
          L["on:end"](F, ve), ve.isMatchIgnored && (oe = !1);
        }
        if (oe) {
          for (; L.endsParent && L.parent; )
            L = L.parent;
          return L;
        }
      }
      if (L.endsWithParent)
        return St(L.parent, F, J);
    }
    function Tt(L) {
      return I.matcher.regexIndex === 0 ? (ae += L[0], 1) : (fn = !0, 0);
    }
    function Mt(L) {
      const F = L[0], J = L.rule, oe = new Wn(J), ve = [J.__beforeBegin, J["on:begin"]];
      for (const Ae of ve)
        if (Ae && (Ae(L, oe), oe.isMatchIgnored))
          return Tt(F);
      return J.skip ? ae += F : (J.excludeBegin && (ae += F), xe(), !J.returnBegin && !J.excludeBegin && (ae = F)), Et(J, L), J.returnBegin ? 0 : F.length;
    }
    function un(L) {
      const F = L[0], J = A.substring(L.index), oe = St(I, L, J);
      if (!oe)
        return Qn;
      const ve = I;
      I.endScope && I.endScope._wrap ? (xe(), Me(F, I.endScope._wrap)) : I.endScope && I.endScope._multi ? (xe(), ft(I.endScope, L)) : ve.skip ? ae += F : (ve.returnEnd || ve.excludeEnd || (ae += F), xe(), ve.excludeEnd && (ae = F));
      do
        I.scope && be.closeNode(), !I.skip && !I.subLanguage && (Lt += I.relevance), I = I.parent;
      while (I !== oe.parent);
      return oe.starts && Et(oe.starts, L), ve.returnEnd ? 0 : F.length;
    }
    function dn() {
      const L = [];
      for (let F = I; F !== Y; F = F.parent)
        F.scope && L.unshift(F.scope);
      L.forEach((F) => be.openNode(F));
    }
    let Je = {};
    function De(L, F) {
      const J = F && F[0];
      if (ae += L, J == null)
        return xe(), 0;
      if (Je.type === "begin" && F.type === "end" && Je.index === F.index && J === "") {
        if (ae += A.slice(F.index, F.index + 1), !i) {
          const oe = new Error(`0 width match regex (${y})`);
          throw oe.languageName = y, oe.badRule = Je.rule, oe;
        }
        return 1;
      }
      if (Je = F, F.type === "begin")
        return Mt(F);
      if (F.type === "illegal" && !P) {
        const oe = new Error('Illegal lexeme "' + J + '" for mode "' + (I.scope || "<unnamed>") + '"');
        throw oe.mode = I, oe;
      } else if (F.type === "end") {
        const oe = un(F);
        if (oe !== Qn)
          return oe;
      }
      if (F.type === "illegal" && J === "")
        return ae += `
`, 1;
      if (pn > 1e5 && pn > F.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return ae += J, J.length;
    }
    const Y = _(y);
    if (!Y)
      throw We(r.replace("{}", y)), new Error('Unknown language: "' + y + '"');
    const S = da(Y);
    let z = "", I = q || S;
    const de = {}, be = new s.__emitter(s);
    dn();
    let ae = "", Lt = 0, Ge = 0, pn = 0, fn = !1;
    try {
      if (Y.__emitTokens)
        Y.__emitTokens(A, be);
      else {
        for (I.matcher.considerAll(); ; ) {
          pn++, fn ? fn = !1 : I.matcher.considerAll(), I.matcher.lastIndex = Ge;
          const L = I.matcher.exec(A);
          if (!L) break;
          const F = A.substring(Ge, L.index), J = De(F, L);
          Ge = L.index + J;
        }
        De(A.substring(Ge));
      }
      return be.finalize(), z = be.toHTML(), {
        language: y,
        value: z,
        relevance: Lt,
        illegal: !1,
        _emitter: be,
        _top: I
      };
    } catch (L) {
      if (L.message && L.message.includes("Illegal"))
        return {
          language: y,
          value: wn(A),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: L.message,
            index: Ge,
            context: A.slice(Ge - 100, Ge + 100),
            mode: L.mode,
            resultSoFar: z
          },
          _emitter: be
        };
      if (i)
        return {
          language: y,
          value: wn(A),
          illegal: !1,
          relevance: 0,
          errorRaised: L,
          _emitter: be,
          _top: I
        };
      throw L;
    }
  }
  function p(y) {
    const A = {
      value: wn(y),
      illegal: !1,
      relevance: 0,
      _top: a,
      _emitter: new s.__emitter(s)
    };
    return A._emitter.addText(y), A;
  }
  function m(y, A) {
    A = A || s.languages || Object.keys(t);
    const P = p(y), q = A.filter(_).filter(v).map(
      (xe) => d(xe, y, !1)
    );
    q.unshift(P);
    const te = q.sort((xe, Me) => {
      if (xe.relevance !== Me.relevance) return Me.relevance - xe.relevance;
      if (xe.language && Me.language) {
        if (_(xe.language).supersetOf === Me.language)
          return 1;
        if (_(Me.language).supersetOf === xe.language)
          return -1;
      }
      return 0;
    }), [ie, he] = te, Te = ie;
    return Te.secondBest = he, Te;
  }
  function g(y, A, P) {
    const q = A && n[A] || P;
    y.classList.add("hljs"), y.classList.add(`language-${q}`);
  }
  function f(y) {
    let A = null;
    const P = c(y);
    if (l(P)) return;
    if (ne(
      "before:highlightElement",
      { el: y, language: P }
    ), y.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", y);
      return;
    }
    if (y.children.length > 0 && (s.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(y)), s.throwUnescapedHTML))
      throw new ma(
        "One of your code blocks includes unescaped HTML.",
        y.innerHTML
      );
    A = y;
    const q = A.textContent, te = P ? u(q, { language: P, ignoreIllegals: !0 }) : m(q);
    y.innerHTML = te.value, y.dataset.highlighted = "yes", g(y, P, te.language), y.result = {
      language: te.language,
      // TODO: remove with version 11.0
      re: te.relevance,
      relevance: te.relevance
    }, te.secondBest && (y.secondBest = {
      language: te.secondBest.language,
      relevance: te.secondBest.relevance
    }), ne("after:highlightElement", { el: y, result: te, text: q });
  }
  function b(y) {
    s = Jn(s, y);
  }
  const x = () => {
    O(), Qe("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function T() {
    O(), Qe("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let $ = !1;
  function O() {
    function y() {
      O();
    }
    if (document.readyState === "loading") {
      $ || window.addEventListener("DOMContentLoaded", y, !1), $ = !0;
      return;
    }
    document.querySelectorAll(s.cssSelector).forEach(f);
  }
  function B(y, A) {
    let P = null;
    try {
      P = A(e);
    } catch (q) {
      if (We("Language definition for '{}' could not be registered.".replace("{}", y)), i)
        We(q);
      else
        throw q;
      P = a;
    }
    P.name || (P.name = y), t[y] = P, P.rawDefinition = A.bind(null, e), P.aliases && C(P.aliases, { languageName: y });
  }
  function N(y) {
    delete t[y];
    for (const A of Object.keys(n))
      n[A] === y && delete n[A];
  }
  function k() {
    return Object.keys(t);
  }
  function _(y) {
    return y = (y || "").toLowerCase(), t[y] || t[n[y]];
  }
  function C(y, { languageName: A }) {
    typeof y == "string" && (y = [y]), y.forEach((P) => {
      n[P.toLowerCase()] = A;
    });
  }
  function v(y) {
    const A = _(y);
    return A && !A.disableAutodetect;
  }
  function h(y) {
    y["before:highlightBlock"] && !y["before:highlightElement"] && (y["before:highlightElement"] = (A) => {
      y["before:highlightBlock"](
        Object.assign({ block: A.el }, A)
      );
    }), y["after:highlightBlock"] && !y["after:highlightElement"] && (y["after:highlightElement"] = (A) => {
      y["after:highlightBlock"](
        Object.assign({ block: A.el }, A)
      );
    });
  }
  function E(y) {
    h(y), o.push(y);
  }
  function K(y) {
    const A = o.indexOf(y);
    A !== -1 && o.splice(A, 1);
  }
  function ne(y, A) {
    const P = y;
    o.forEach(function(q) {
      q[P] && q[P](A);
    });
  }
  function ee(y) {
    return Qe("10.7.0", "highlightBlock will be removed entirely in v12.0"), Qe("10.7.0", "Please use highlightElement now."), f(y);
  }
  Object.assign(e, {
    highlight: u,
    highlightAuto: m,
    highlightAll: O,
    highlightElement: f,
    // TODO: Remove with v12 API
    highlightBlock: ee,
    configure: b,
    initHighlighting: x,
    initHighlightingOnLoad: T,
    registerLanguage: B,
    unregisterLanguage: N,
    listLanguages: k,
    getLanguage: _,
    registerAliases: C,
    autoDetection: v,
    inherit: Jn,
    addPlugin: E,
    removePlugin: K
  }), e.debugMode = function() {
    i = !1;
  }, e.safeMode = function() {
    i = !0;
  }, e.versionString = fa, e.regex = {
    concat: Ye,
    lookahead: yo,
    either: Dn,
    optional: Mi,
    anyNumberOfTimes: Ti
  };
  for (const y in Dt)
    typeof Dt[y] == "object" && xo(Dt[y]);
  return Object.assign(e, Dt), e;
}, lt = Lo({});
lt.newInstance = () => Lo({});
var ha = lt;
lt.HighlightJS = lt;
lt.default = lt;
const Ve = /* @__PURE__ */ ki(ha), ba = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), wa = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], xa = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], va = [
  ...wa,
  ...xa
], ya = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), _a = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), ka = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Ia = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function $a(e) {
  const t = e.regex, n = ba(e), o = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", r = /@-?\w[\w]*(-\w+)*/, a = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      o,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + a,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + _a.join("|") + ")" },
          { begin: ":(:)?(" + ka.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Ia.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...s,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: r
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: ya.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + va.join("|") + ")\\b"
      }
    ]
  };
}
const eo = "[A-Za-z$_][0-9A-Za-z$_]*", Ea = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Sa = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Do = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], No = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Co = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Ta = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Ma = [].concat(
  Co,
  Do,
  No
);
function La(e) {
  const t = e.regex, n = (P, { after: q }) => {
    const te = "</" + P[0].slice(1);
    return P.input.indexOf(te, q) !== -1;
  }, o = eo, i = {
    begin: "<>",
    end: "</>"
  }, r = /<[A-Za-z0-9\\._:-]+\s*\/>/, a = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (P, q) => {
      const te = P[0].length + P.index, ie = P.input[te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ie === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ie === ","
      ) {
        q.ignoreMatch();
        return;
      }
      ie === ">" && (n(P, { after: te }) || q.ignoreMatch());
      let he;
      const Te = P.input.substring(te);
      if (he = Te.match(/^\s*=/)) {
        q.ignoreMatch();
        return;
      }
      if ((he = Te.match(/^\s+extends\s+/)) && he.index === 0) {
        q.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: eo,
    keyword: Ea,
    literal: Sa,
    built_in: Ma,
    "variable.language": Ta
  }, l = "[0-9](_?[0-9])*", c = `\\.(${l})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, m = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, f = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, b = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, T = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: o + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, $ = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    m,
    g,
    f,
    b,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = $.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat($)
  });
  const O = [].concat(T, p.contains), B = O.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(O)
    }
  ]), N = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: B
  }, k = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          o,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(o, "(", t.concat(/\./, o), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          o
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, _ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Do,
        ...No
      ]
    }
  }, C = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, v = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          o,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [N],
    illegal: /%/
  }, h = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function E(P) {
    return t.concat("(?!", P.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      E([
        ...Co,
        "super",
        "import"
      ].map((P) => `${P}\\s*\\(`)),
      o,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ne = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(o, /(?![0-9A-Za-z$_(])/)
    )),
    end: o,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ee = {
    match: [
      /get|set/,
      /\s+/,
      o,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      N
    ]
  }, y = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", A = {
    match: [
      /const|var|let/,
      /\s+/,
      o,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(y)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      N
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: B, CLASS_REFERENCE: _ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      C,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      m,
      g,
      f,
      b,
      T,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      _,
      {
        scope: "attr",
        match: o + t.lookahead(":"),
        relevance: 0
      },
      A,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          T,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: y,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: B
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: r },
              {
                begin: a.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": a.isTrulyOpeningTag,
                end: a.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: a.begin,
                end: a.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      v,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          N,
          e.inherit(e.TITLE_MODE, { begin: o, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ne,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + o,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [N]
      },
      K,
      h,
      k,
      ee,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var tt = "[0-9](_*[0-9])*", Nt = `\\.(${tt})`, Ct = "[0-9a-fA-F](_*[0-9a-fA-F])*", to = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${tt})((${Nt})|\\.)?|(${Nt}))[eE][+-]?(${tt})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${tt})((${Nt})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Nt})[fFdD]?\\b` },
    { begin: `\\b(${tt})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Ct})\\.?|(${Ct})?\\.(${Ct}))[pP][+-]?(${tt})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Ct})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Oo(e, t, n) {
  return n === -1 ? "" : e.replace(t, (o) => Oo(e, t, n - 1));
}
function Da(e) {
  const t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", o = n + Oo("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), l = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits",
      "goto",
      "when"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, c = {
    className: "meta",
    begin: "@" + n,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, u = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: l,
    relevance: 0,
    contains: [e.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: l,
    illegal: /<\/|#/,
    contains: [
      e.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [e.BACKSLASH_ESCAPE]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          t.concat(/(?!else)/, n),
          /\s+/,
          n,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          n
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          u,
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + o + "\\s+)",
          e.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: l,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: l,
            relevance: 0,
            contains: [
              c,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              to,
              e.C_BLOCK_COMMENT_MODE
            ]
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE
        ]
      },
      to,
      c
    ]
  };
}
function Na(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, o = [
    "true",
    "false",
    "null"
  ], i = {
    scope: "literal",
    beginKeywords: o.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: o
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      i,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const qt = "[A-Za-z$_][0-9A-Za-z$_]*", Ro = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Ao = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Po = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Bo = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Vo = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], zo = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Fo = [].concat(
  Vo,
  Po,
  Bo
);
function Ca(e) {
  const t = e.regex, n = (P, { after: q }) => {
    const te = "</" + P[0].slice(1);
    return P.input.indexOf(te, q) !== -1;
  }, o = qt, i = {
    begin: "<>",
    end: "</>"
  }, r = /<[A-Za-z0-9\\._:-]+\s*\/>/, a = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (P, q) => {
      const te = P[0].length + P.index, ie = P.input[te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ie === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ie === ","
      ) {
        q.ignoreMatch();
        return;
      }
      ie === ">" && (n(P, { after: te }) || q.ignoreMatch());
      let he;
      const Te = P.input.substring(te);
      if (he = Te.match(/^\s*=/)) {
        q.ignoreMatch();
        return;
      }
      if ((he = Te.match(/^\s+extends\s+/)) && he.index === 0) {
        q.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: qt,
    keyword: Ro,
    literal: Ao,
    built_in: Fo,
    "variable.language": zo
  }, l = "[0-9](_?[0-9])*", c = `\\.(${l})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, m = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, f = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, b = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, T = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: o + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, $ = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    m,
    g,
    f,
    b,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    d
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = $.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat($)
  });
  const O = [].concat(T, p.contains), B = O.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(O)
    }
  ]), N = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: B
  }, k = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          o,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(o, "(", t.concat(/\./, o), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          o
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, _ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Po,
        ...Bo
      ]
    }
  }, C = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, v = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          o,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [N],
    illegal: /%/
  }, h = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function E(P) {
    return t.concat("(?!", P.join("|"), ")");
  }
  const K = {
    match: t.concat(
      /\b/,
      E([
        ...Vo,
        "super",
        "import"
      ].map((P) => `${P}\\s*\\(`)),
      o,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ne = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(o, /(?![0-9A-Za-z$_(])/)
    )),
    end: o,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, ee = {
    match: [
      /get|set/,
      /\s+/,
      o,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      N
    ]
  }, y = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", A = {
    match: [
      /const|var|let/,
      /\s+/,
      o,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(y)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      N
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: B, CLASS_REFERENCE: _ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      C,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      m,
      g,
      f,
      b,
      T,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      d,
      _,
      {
        scope: "attr",
        match: o + t.lookahead(":"),
        relevance: 0
      },
      A,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          T,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: y,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: B
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: r },
              {
                begin: a.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": a.isTrulyOpeningTag,
                end: a.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: a.begin,
                end: a.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      v,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          N,
          e.inherit(e.TITLE_MODE, { begin: o, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ne,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + o,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [N]
      },
      K,
      h,
      k,
      ee,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Oa(e) {
  const t = e.regex, n = Ca(e), o = qt, i = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], r = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, a = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: i
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, s = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, l = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], c = {
    $pattern: qt,
    keyword: Ro.concat(l),
    literal: Ao,
    built_in: Fo.concat(i),
    "variable.language": zo
  }, u = {
    className: "meta",
    begin: "@" + o
  }, d = (f, b, x) => {
    const T = f.contains.findIndex(($) => $.label === b);
    if (T === -1)
      throw new Error("can not find mode to replace");
    f.contains.splice(T, 1, x);
  };
  Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(u);
  const p = n.contains.find((f) => f.scope === "attr"), m = Object.assign(
    {},
    p,
    { match: t.concat(o, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    p,
    // highlight the params key
    m
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    u,
    r,
    a,
    m
    // Added for optional property assignment highlighting
  ]), d(n, "shebang", e.SHEBANG()), d(n, "use_strict", s);
  const g = n.contains.find((f) => f.label === "func.def");
  return g.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
function Ho(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), o = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, r = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, a = e.inherit(r, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: o,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          r,
          l,
          s,
          a,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  r,
                  a,
                  l,
                  s
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: c
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const Wt = ce;
Ve.registerLanguage("css", $a);
Ve.registerLanguage("javascript", La);
Ve.registerLanguage("java", Da);
Ve.registerLanguage("json", Na);
Ve.registerLanguage("typescript", Oa);
Ve.registerLanguage("html", Ho);
Ve.registerLanguage("xml", Ho);
const Ra = "/", yn = Ra + "icons/", Q = { Placeholder: "(empty)", disabled: !1 }, Aa = { Placeholder: "(no Selection)", disabled: !0 }, Pa = { Placeholder: "(multiple Values)", disabled: !1 };
function Z(e) {
  return e === Q || e === Aa || e === Pa;
}
function Ie(e) {
  debugger;
  let t = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(e);
  if (t == null)
    throw new Error(e);
  {
    let n = new Error(t[2]);
    throw n.name = t[1], n;
  }
}
function Nr(e) {
  Ie(
    "ReadOnlyProperty: property " + it(e) + " must not be set"
  );
}
const Ba = /^[-._\p{L}\d](?:[-._ \p{L}\d]*[-._\p{L}\d])?$/u;
function nn(e) {
  return Ne(e, Ba);
}
const Va = _e(
  nn,
  Ue,
  "SIM name"
), Cr = Va, Uo = _e(
  nn,
  je,
  "SIM name"
), Or = Uo, za = /^[-._\p{L}](?:[-._ \p{L}]*[-._\p{L}])?(?:\/[-._\p{L}](?:[-._ \p{L}]*[-._\p{L}])?)*$/u;
function on(e) {
  return Ne(e, za);
}
const Fa = _e(
  on,
  Ue,
  "SIM name path"
), Rr = Fa, an = _e(
  on,
  je,
  "SIM name path"
), Ar = an;
function ct(e) {
  return no(e);
}
const Ha = _e(
  ct,
  Ue,
  "SIM coordinate"
), Pr = Ha, Ua = _e(
  ct,
  je,
  "SIM coordinate"
), Br = Ua;
function ut(e) {
  return no(e) && e >= 0;
}
const ja = _e(
  ut,
  Ue,
  "SIM dimension"
), Vr = ja, Ga = _e(
  ut,
  je,
  "SIM dimension"
), zr = Ga;
function jo(e) {
  return Re(e) && ct(e.x) && ct(e.y);
}
const qa = _e(
  jo,
  Ue,
  "SIM position"
), Fr = qa, Wa = _e(
  jo,
  je,
  "SIM position"
), Hr = Wa;
function Go(e) {
  return Re(e) && ut(e.Width) && ut(e.Height);
}
const Ka = _e(
  Go,
  Ue,
  "SIM size"
), Ur = Ka, Za = _e(
  Go,
  je,
  "SIM size"
), jr = Za;
function qo(e) {
  return Re(e) && ct(e.x) && ut(e.Width) && ct(e.y) && ut(e.Height);
}
const Xa = _e(
  qo,
  Ue,
  "SIM geometry"
), Gr = Xa, Ya = _e(
  qo,
  je,
  "SIM geometry"
), qr = Ya, Ja = /^[a-z0-9]+([._+-][a-z0-9]+)*\/[a-z0-9]+([._+-][a-z0-9]+)*(\s*;\s*[a-z0-9-]+=[a-z0-9.+-]+)*$/i;
function Wr(e) {
  return Ne(e, Ja);
}
const Qa = [
  "application/javascript",
  "application/typescript",
  "application/json",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function Kr(e) {
  return ze(e, Qa);
}
const er = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function Zr(e) {
  return ze(e, er);
}
const tr = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/markdown",
  "text/plain"
];
function Xr(e) {
  return ze(e, tr);
}
const nr = [
  "image/apng",
  "image/avif",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
function Yr(e) {
  return ze(e, nr);
}
const or = /^[a-z$_][a-z$_0-9]*$/i;
function Wo(e) {
  return Ne(e, or);
}
const ir = _e(
  Wo,
  Ue,
  "SIM identifier"
), Jr = ir, ar = _e(
  Wo,
  je,
  "SIM identifier"
), Qr = ar;
function es(e) {
  return ue(e, dt);
}
function j(e, ...t) {
  Kt("PropSet", e), t.forEach((r, a) => {
    Ke(r) || Ie(
      `InvalidArgument: PropSet parser argument #${a + 1} is not a function`
    );
  });
  const n = [], o = {};
  Array.from(Object.keys(e)).forEach((r) => {
    let a = r.replace(/[-_]/g, "").trim().toLowerCase();
    o[a] = e[r];
  });
  const i = o.children;
  return delete o.children, delete o["aim:rendercount"], t.forEach(
    (r) => n.push(r(o))
  ), n.push(o, i), n;
}
function ts(e, t) {
  Kt("PropSet", e), Zt("PropSet parser", t);
  const n = {};
  return Array.from(Object.keys(e)).forEach((o) => {
    let i = o.replace(/[-_]/g, "").trim().toLowerCase();
    n[i] = e[o];
  }), delete n.children, t(n);
}
function me(e, t, n, o) {
  Kt("PropSet", e), Zt("validator function", n), oo("PropSet name", o);
  const i = e[t];
  if (i != null) {
    if (n(i) == !0)
      return delete e[t], i;
    Ie(
      (o == null ? "" : o + " ") + "attribute " + it(t) + " is invalid"
    );
  }
}
function ge(e, t, n, o) {
  Kt("PropSet", e), Zt("validator function", n), oo("PropSet name", o);
  const i = e[t];
  if (i == null && Ie(
    "attribute " + it(t) + " is missing"
  ), n(i) == !0)
    return delete e[t], i;
  Ie(
    (o == null ? "" : o + " ") + "attribute " + it(t) + " is invalid"
  );
}
function H(e, t) {
  return (n) => me(n, e, t);
}
function rn(e, t) {
  return (n) => ge(n, e, t);
}
function V(e) {
  return (t) => me(t, e, Xt);
}
function ns(e) {
  return (t) => ge(t, e, Xt);
}
function Le(e) {
  return (t) => me(t, e, ht);
}
function os(e) {
  return (t) => ge(t, e, ht);
}
function is(e, t, n, o, i) {
  return (r) => me(
    r,
    e,
    (a) => Yt(a, t, n, o, i)
  );
}
function as(e, t, n, o, i) {
  return (r) => ge(
    r,
    e,
    (a) => Yt(a, t, n, o, i)
  );
}
function rs(e) {
  return (t) => me(t, e, io);
}
function ss(e) {
  return (t) => ge(t, e, io);
}
function ls(e, t, n) {
  return (o) => me(
    o,
    e,
    (i) => ao(i, t, n)
  );
}
function cs(e, t, n) {
  return (o) => ge(
    o,
    e,
    (i) => ao(i, t, n)
  );
}
function re(e) {
  return (t) => me(t, e, dt);
}
function us(e) {
  return (t) => ge(t, e, dt);
}
function rr(e) {
  return (t) => me(t, e, ro);
}
function ds(e) {
  return (t) => ge(t, e, ro);
}
function ps(e) {
  return (t) => me(t, e, so);
}
function fs(e) {
  return (t) => ge(t, e, so);
}
function ms(e, t) {
  return (n) => me(
    n,
    e,
    (o) => Ne(o, t)
  );
}
function gs(e, t) {
  return (n) => ge(
    n,
    e,
    (o) => Ne(o, t)
  );
}
function fe(e) {
  return (t) => me(t, e, kn);
}
function hs(e) {
  return (t) => ge(t, e, kn);
}
function D(e) {
  return (t) => me(t, e, ce);
}
function sr(e) {
  return (t) => ge(t, e, ce);
}
function M(e) {
  return (t) => me(t, e, Ke);
}
function bs(e) {
  return (t) => ge(t, e, Ke);
}
function sn(e) {
  return (t) => me(t, e, Ft);
}
function ws(e) {
  return (t) => ge(t, e, Ft);
}
function xs(e) {
  return (t) => me(t, e, Ht);
}
function vs(e) {
  return (t) => ge(t, e, Ht);
}
function ys(e) {
  return (t) => me(t, e, Wt);
}
function _s(e) {
  return (t) => ge(t, e, Wt);
}
function ln(e) {
  return (t) => me(t, e, Ut);
}
function Ko(e) {
  return (t) => ge(t, e, Ut);
}
function ks(e) {
  return (t) => me(
    t,
    e,
    (n) => on(n)
  );
}
function Is(e) {
  return (t) => ge(
    t,
    e,
    (n) => on(n)
  );
}
function $s(e) {
  return (t) => me(
    t,
    e,
    (n) => nn(n) || dt(n)
  );
}
function Es(e) {
  return (t) => ge(
    t,
    e,
    (n) => nn(n) || dt(n)
  );
}
function Ss() {
  const [e, t] = pt(navigator.onLine);
  return rt(() => {
    const n = () => t(!0), o = () => t(!1);
    return window.addEventListener("online", n), window.addEventListener("offline", o), () => {
      window.removeEventListener("online", n), window.removeEventListener("offline", o);
    };
  }, []), e;
}
function Ts() {
  const [e, t] = pt({
    Width: window.innerWidth,
    Height: window.innerHeight
  });
  return rt(() => {
    const n = () => t({
      Width: window.innerWidth,
      Height: window.innerHeight
    });
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
}
function ke() {
  const [e, t] = pt({});
  function n() {
    t({});
  }
  return n;
}
function Ms(e = {}) {
  An("initial configuration", e);
  const t = W();
  t.current == null && (t.current = _n(e));
  const n = X((o) => {
    if (An("configuration change set", o), o != null)
      for (const [i, r] of Object.entries(o))
        r === void 0 ? delete o[i] : Re(r) ? Re(t.current[i]) ? Object.assign(t.current[i], r) : t.current[i] = { ...r } : Ie(
          "InvalidArgument: configuration[" + it(i) + "] is no plain JavaScript onject"
        );
  }, [e]);
  return [t.current, n];
}
function Ls({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  onDragStart: i,
  onDragContinuation: r,
  onDragFinish: a,
  onDragCancellation: s
}) {
  lo("preact component reference", e), t != null && !ce(t) && !(t instanceof HTMLElement) && !Ke(t) && Ie(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  ), n != null && !ce(n) && !(n instanceof HTMLElement) && Ie(
    'InvalidArgument: "onlyFrom" is neither a CSS selector nor an HTML element'
  ), o != null && !ce(o) && !(o instanceof HTMLElement) && Ie(
    'InvalidArgument: "neverFrom" is neither a CSS selector nor an HTML element'
  ), Oe('"onDragStart" callback', i), Oe('"onDragContinuation" callback', r), Oe('"onDragFinish" callback', a), Oe('"onDragCancellation" callback', s);
  const l = i != null && r != null && a != null && s != null;
  let c;
  const u = W(), d = W(!1), p = ($) => {
    if (e.current == null || !($.target instanceof HTMLElement) || $.pointerType === "mouse" && $.buttons !== 1 || $.pointerType === "touch" && !$.isPrimary || $.pointerType === "pen" && $.buttons !== 1 || !l)
      return;
    switch (!0) {
      case t == null:
        c = e.current.parentElement;
        break;
      case ce(t):
        c = e.current.parentElement.closest(t);
        break;
      case Ke(t):
        c = t(), c instanceof HTMLElement || (c = void 0);
        break;
      default:
        c = t;
    }
    if (c == null || n != null && !T($.target, n) || o != null && T($.target, o))
      return;
    window.addEventListener("pointermove", m), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", b), e.current.setPointerCapture?.($.pointerId);
    const O = c.getBoundingClientRect(), B = $.clientX - O.left + c.scrollLeft, N = $.clientY - O.top + c.scrollTop;
    u.current = { x: B, y: N }, d.current = !0, i?.(0, 0, B, N, $);
  }, m = ($) => {
    d.current !== !1 && c != null && r?.apply(null, x(c, $));
  }, g = ($, O) => {
    if (d.current !== !1) {
      if (d.current = !1, window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", b), O) {
        r?.(0, 0, u.current.x, u.current.y, $);
        return;
      }
      c != null && l && a?.apply(null, x(c, $));
    }
  }, f = ($) => {
    g($, !1);
  }, b = ($) => {
    g($, !0);
  }, x = ($, O) => {
    const B = $.getBoundingClientRect(), N = O.clientX - B.left + $.scrollLeft, k = O.clientY - B.top + $.scrollTop, _ = N - u.current.x, C = k - u.current.y;
    return [_, C, N, k, O];
  };
  function T($, O) {
    switch (!0) {
      case O == null:
        return !0;
      case typeof O == "string":
        return $.matches(O);
      default:
        return $ === O;
    }
  }
  return p;
}
function Ds({
  ViewRef: e,
  Container: t,
  onlyFrom: n,
  neverFrom: o,
  ClickRadius: i,
  MultiClickLimit: r,
  MultiClickTimeSpan: a,
  onClick: s,
  onDragStart: l,
  onDragContinuation: c,
  onDragFinish: u,
  onDragCancellation: d
}) {
  lo("preact component reference", e), t != null && !ce(t) && !(t instanceof HTMLElement) && !Ke(t) && Ie(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  ), n != null && !ce(n) && !(n instanceof HTMLElement) && Ie(
    'InvalidArgument: "onlyFrom" is neither a CSS selector nor an HTML element'
  ), o != null && !ce(o) && !(o instanceof HTMLElement) && Ie(
    'InvalidArgument: "neverFrom" is neither a CSS selector nor an HTML element'
  ), mn("click radius", i), mn("multi-click limit", r), mn("multi-click timespan", a), Oe('"onClick" callback', s), Oe('"onDragStart" callback', l), Oe('"onDragContinuation" callback', c), Oe('"onDragFinish" callback', u), Oe('"onDragCancellation" callback', d), i == null && (i = 4), a == null && (a = 300), r == null && (r = s == null ? 0 : 1);
  const p = r > 0 && s != null, m = l != null && c != null && u != null;
  let g;
  const f = W(), b = W(!1), x = W({ Count: 0, Time: 0 }), T = (C) => {
    if (e.current == null || !(C.target instanceof HTMLElement) || !p && !m)
      return;
    switch (!0) {
      case t == null:
        g = e.current.parentElement;
        break;
      case ce(t):
        g = e.current.parentElement.closest(t);
        break;
      case Ke(t):
        g = t(), g instanceof HTMLElement || (g = void 0);
        break;
      default:
        g = t;
    }
    if (g == null || n != null && !_(C.target, n) || o != null && _(C.target, o))
      return;
    window.addEventListener("pointermove", $), window.addEventListener("pointerup", B), window.addEventListener("pointercancel", N), e.current.setPointerCapture?.(C.pointerId);
    const v = g.getBoundingClientRect(), h = C.clientX - v.left + g.scrollLeft, E = C.clientY - v.top + g.scrollTop;
    f.current = { x: h, y: E }, p ? b.current = !1 : (b.current = m, m && i === 0 && l?.(0, 0, h, E, C));
  }, $ = (C) => {
    if (!m || g == null)
      return;
    const [v, h, E, K] = k(g, C);
    if (b.current === !1) {
      if (v * v + h * h < i * i)
        return;
      b.current = !0, l?.(v, h, E, K, C);
    }
    c?.apply(null, [v, h, E, K, C]);
  }, O = (C, v) => {
    if (window.removeEventListener("pointermove", $), window.removeEventListener("pointerup", B), window.removeEventListener("pointercancel", N), b.current) {
      if (b.current = !1, m && v) {
        c?.(0, 0, f.current.x, f.current.y, C);
        return;
      }
      g != null && m && u?.apply(null, k(g, C));
    }
  }, B = (C) => {
    if (b.current === !1 && p) {
      let { ClickCount: v, Time: h } = x.current;
      const E = Date.now();
      if (v = E - h > a ? 1 : Math.min(v + 1, r), x.current = { ClickCount: v, Time: E }, g != null) {
        const [K, ne, ee, y] = k(g, C);
        s?.apply(null, [v, K, ne, ee, y, C]);
      }
    }
    O(C, !1);
  }, N = (C) => {
    b.current === !0 && O(C, !0);
  }, k = (C, v) => {
    const h = C.getBoundingClientRect(), E = v.clientX - h.left + C.scrollLeft, K = v.clientY - h.top + C.scrollTop, ne = E - f.current.x, ee = K - f.current.y;
    return [ne, ee, E, K, v];
  };
  function _(C, v) {
    switch (!0) {
      case v == null:
        return !0;
      case typeof v == "string":
        return C.matches(v);
      default:
        return C === v;
    }
  }
  return T;
}
function Ns(e) {
  let t = Math.round(Math.random() * 1e4).toString();
  return t += "0000".slice(t.length), e = (e || "This operation can not be undone.") + `

Please, enter the following number if you want to proceed:

   ` + t + `

Otherwise, the operation will be cancelled`, window.prompt(e, "") === t ? !0 : (window.alert("Operation will be cancelled"), !1);
}
function Cs(e) {
  return Uo("name", e), On(e);
}
function On(e) {
  return e.trim().replace(/\s+/g, " ").replace(/[.]+/g, ".").replace(/[-]+/g, "-").replace(/[_]+/g, "_").toLowerCase();
}
function Os(e) {
  return an("path", e), lr(e);
}
function lr(e) {
  return e.trim().replace(/\s*(\/+\s*)+/g, "/").replace(/\s+/g, " ").replace(/[.]+/g, ".").replace(/[-]+/g, "-").replace(/[_]+/g, "_").toLowerCase();
}
let mt = document.getElementById("SIM-Components-Stylesheet");
mt == null && (mt = document.createElement("style"), mt.id = "SIM-Components-Stylesheet", mt.textContent = `
/*******************************************************************************
*                                                                              *
*              Components for the Smart Information Manager (SIM)              *
*                                                                              *
*******************************************************************************/

  :not(:defined) { visibility:hidden }

/**** some basic settings ****/

  .sim-component {
    display:block; position:relative;
    box-sizing:border-box;
  }



/**** some common settings ****/

  .disabled, [disabled] { opacity:0.4 }
  .readonly             { background:none }
  .pointer-unaware      { pointer-events:none }


    `.trim(), document.head.prepend(mt));
function U(e, t, n = !1) {
  an("stylesheet name", e), ei("stylesheet", t), ti("mode flag", n);
  const o = "Stylesheet-for-" + On(e);
  let i = document.head.querySelector('style[id="' + o + '"]');
  i == null ? (i = document.createElement("style"), i.id = o, i.textContent = t, document.head.append(i)) : n ? i.textContent = t : console.warn('multiple definitions for stylesheet "' + e + '"');
}
function Rs(e) {
  an("stylesheet name", e);
  const t = "Stylesheet-for-" + On(e);
  let n = document.head.querySelector('style[id="' + t + '"]');
  n?.remove();
}
function cr(e) {
  return G(() => {
    let [t] = j(
      e,
      H("error", (o) => o instanceof Error)
    );
    return w`<div class="sim-error-indicator" onClick=${() => {
      console.warn(t), window.alert(ur(t));
    }}/>`;
  });
}
U("sim-error-indicator", `
    .sim-error-indicator {
      display:inline-block; position:relative;
      width:24px; height:24px;
    }

    .sim-error-indicator::after {
      content:'';
      display:block; position:absolute; overflow:hidden;
      left:0px; top:0px; width:24px; height:24px;
      background:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E");
      pointer-events:auto;
    }
  `);
function ur(e) {
  let t = e.name ?? "", n = e.message, o = e.stack ?? "";
  const i = t.replace(/([a-z])([A-Z])/g, "$1 $2"), r = n[0].toUpperCase() + n.slice(1);
  return o === "" ? `${i}

${r}` : `${i}

${r}

${o}`;
}
function G(e) {
  Zt("rendering function", e);
  try {
    return e();
  } catch (t) {
    const n = e.name ?? "";
    return n.trim() === "" ? console.warn("error while rendering a preact component: " + t) : console.warn(
      "error while rendering component " + it(n) + ": " + t
    ), w`<${cr} error=${t}/>`;
  }
}
function As(e) {
  return G(() => {
    let [t, n, o] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component fullsized ${t ?? ""}" ...${n}>
        ${o}
      </>`;
  });
}
U("sim-component.fullsized", `
    .sim-component.fullsized > * {
      display:block; position:relative;
      left:0px; top:0px; width:100% !important; height:100% !important;
    }
  `);
function Ps(e) {
  return G(() => {
    let [t, n, o] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component centered ${t ?? ""}" ...${n}>
        ${o}
      </>`;
  });
}
U("sim-component.centered", `
    .sim-component.centered {
      display:flex ! important; flex-flow:column nowrap; align-items:center; justify-content:center;
      left:0px; top:0px; width:100% !important; height:100% !important;
    }
    .sim-component.centered > * {
      position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Bs(e) {
  return G(() => {
    let [t, n, o, i, r] = j(
      e,
      D("class"),
      fe("style"),
      re("gap")
    );
    return o = o ?? 0, w`<div class="sim-component horizontal ${t ?? ""}"
        style="gap:${o}px; ${n ?? ""}" ...${i}
      >${r}</>`;
  });
}
U("sim-component.horizontal", `
    .sim-component.horizontal {
      display:flex ! important; flex-flow:row nowrap; align-items:center;
      position:relative; left:0px; top:0px; width:100% !important; height:auto;
    }
    .sim-component.horizontal > * {
      position:relative; flex:0 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Vs(e) {
  return G(() => {
    let [t, n, o, i, r] = j(
      e,
      D("class"),
      fe("style"),
      re("gap")
    );
    return o = o ?? 0, w`<div class="sim-component vertical ${t ?? ""}"
        style="gap:${o}px; ${n ?? ""}" ...${i}
      >${r}</>`;
  });
}
U("sim-component.vertical", `
    .sim-component.vertical {
      display:flex ! important; flex-flow:column nowrap; align-items:start;
      position:relative; left:0px; top:0px; width:auto; height:100% !important;
    }
    .sim-component.vertical > * {
      position:relative; flex:0 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function zs(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l
    ] = j(
      e,
      D("class"),
      fe("style"),
      rr("columns"),
      re("rowgap"),
      re("colgap"),
      D("columnclasses")
      // space-separated
    );
    o = o ?? 2, i = i ?? 0, r = r ?? 0, a = a ?? "";
    function c(f) {
      if (typeof f == "string")
        return 1;
      {
        let b = f.props.colspan;
        return dt(b) ? b : 1;
      }
    }
    l = In(l).filter(
      (f) => f.type != null || f.trim() !== ""
    );
    const u = l.length, d = [[]];
    let p = 0, m = 0;
    l.forEach((f, b) => {
      d[p].push(f), m += c(f), m >= o && b < u - 1 && (d.push([]), p++, m = 0);
    });
    const g = a.trim() === "" ? "" : w`<colgroup>${a.split(" ").map((f) => w`<col class="${f}"/>`)}</>`;
    return w`<table class="sim-component tabular ${t ?? ""}" style="
        ${n ?? ""};
        border-spacing:${r}px ${i}px;
        margin:-${i}px -${r}px -${i}px -${r}px
      " ...${s}
      >${g}<tbody>
        ${u > 0 && d.map((f, b) => w`<tr>
          ${f.map(
      (x) => w`<td colspan=${c(x)}>${x}</>`
    )}
        </tr>`)}
      </tbody></table>`;
  });
}
U("sim-component.tabular", `
    .sim-component.tabular {
      border:none;
      border-collapse:separate;
      border-spacing:0px;
    }
    .sim-component.tabular > tbody {
      position:relative;
      vertical-align:top;
    }
    .sim-component.tabular > tbody > tr > td {
      display:table-cell;
      margin:0px; padding:0px;
    }

    .sim-component.tabular > colgroup > col.expanding { width:100% }
    .sim-component.tabular > colgroup > col.shrinking { width:1px }
  `);
function Fs(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i
    ] = j(
      e,
      D("class"),
      re("activeindex")
    );
    i = In(i).filter(
      (a) => typeof a != "string" || a.trim() !== ""
    );
    const r = i.length;
    return n = r === 0 ? 0 : Math.max(0, Math.min(n ?? 0, r - 1)), w`<div class="sim-component selective ${t ?? ""}"
        ...${o}>${i[n]}</>`;
  });
}
U("sim-component.selective", `
    .sim-component.selective {
      display:block; position:relative;
      left:0px; top:0px; width:100% ! important; height:100% ! important;
    }

    .sim-component.selective > * {
      display:block; position:absolute;
      left:0px; top:0px; width:100% ! important; height:100% ! important;
    }
  `);
function Hs(e) {
  return G(() => {
    let [t, n, o] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component stacked ${t ?? ""}" ...${n}>
        ${o}
      </>`;
  });
}
U("sim-component.stacked", `
    .sim-component.stacked {
      display:inline-block; position:relative;
    }
    .sim-component.stacked > *:first-child {
      position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
    .sim-component.stacked > *:not(:first-child) {
      position:absolute;
    }
  `);
function Us(e) {
  return G(() => {
    let [t, n, o, i] = j(
      e,
      D("class"),
      fe("value"),
      V("visiblepattern")
    );
    return w`<div
        class="sim-component dummy ${o ? "visible-pattern" : ""} ${t ?? ""}"
        ...${i} dangerouslySetInnerHTML=${{ __html: n ?? "" }}
      />`;
  });
}
U("sim-component.dummy", `
    .sim-component.dummy.visible-pattern {
      background-image:repeating-linear-gradient(-45deg,
        rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
        rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
      ); background-size:11.31px 11.31px;
    }
  `);
function js(e) {
  return G(() => {
    let [t, n] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component outline ${t ?? ""}" ...${n}/>`;
  });
}
U("sim-component.outline", `
    .sim-component.outline {
      outline:dotted 1px blue;
      outline-offset:2px;
    }
  `);
function Gs(e) {
  return G(() => {
    let [t, n] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component spacer ${t ?? ""}" ...${n}/>`;
  });
}
function qs(e) {
  return G(() => {
    let [t, n] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component expanding-spacer ${t ?? ""}" ...${n}/>`;
  });
}
U("sim-component.expanding-spacer", `
    .sim-component.expanding-spacer {
      flex:1 0 auto ! important;
    }
  `);
function Ws(e) {
  return G(() => {
    let [t, n] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component horizontal-separator ${t ?? ""}" ...${n}/>`;
  });
}
U("sim-component.horizontal-separator", `
    .sim-component.horizontal-separator {
      width:100%; min-width:1px; min-height:1px;
    }
    .sim-component.horizontal-separator::before {
      content: "";
      position:absolute; left:0px; right:0px; width:100%; height:1px;
      top:50%; transform:translateY(-50%);
      background:gray;
    }
  `);
function Ks(e) {
  return G(() => {
    let [t, n] = j(
      e,
      D("class")
    );
    return w`<div class="sim-component vertical-separator ${t ?? ""}" ...${n}/>`;
  });
}
U("sim-component.vertical-separator", `
    .sim-component.vertical-separator {
      height:100%; min-width:1px; min-height:1px;
    }
    .sim-component.vertical-separator::before {
      content: "";
      position:absolute; top:0px; bottom:0px; width:1px; height:100%;
      left:50%; transform:translateX(-50%);
      background:gray;
    }
  `);
function It(e) {
  return G(() => {
    let [t, n, o, i] = j(
      e,
      D("class"),
      fe("value")
    );
    return w`<div class=${t ?? ""} ...${o}>
        ${n ?? i}
      </>`;
  });
}
function Zs(e) {
  return e = { ...e, class: `sim-component title ${e.class ?? ""}` }, It(e);
}
U("sim-component.title", `
    .sim-component.title {
      font-size:22px; font-weight:bold; line-height:32px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Xs(e) {
  return e = { ...e, class: `sim-component subtitle ${e.class ?? ""}` }, It(e);
}
U("sim-component.subtitle", `
    .sim-component.subtitle {
      font-size:18px; font-weight:bold; line-height:27px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Ys(e) {
  return e = { ...e, class: `sim-component label ${e.class ?? ""}` }, It(e);
}
U("sim-component.label", `
    .sim-component.label {
      height:30px;
      font-size:14px; font-weight:bold; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Js(e) {
  return e = { ...e, class: `sim-component description ${e.class ?? ""}` }, It(e);
}
U("sim-component.description", `
    .sim-component.description {
      font-size:14px; font-weight:normal; line-height:21px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Qs(e) {
  return e = { ...e, class: `sim-component fineprint ${e.class ?? ""}` }, It(e);
}
U("sim-component.fineprint", `
    .sim-component.fineprint {
      font-size:12px; font-weight:normal; line-height:18px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function el(e) {
  return G(() => {
    let [t, n, o] = j(
      e,
      D("class"),
      fe("value")
    );
    return w`<div class="sim-component textview ${t ?? ""}" ...${o}>${n ?? ""}</>`;
  });
}
U("sim-component.textview", `
    .sim-component.textview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
function tl(e) {
  return G(() => {
    let [t, n, o] = j(
      e,
      D("class"),
      fe("value")
    );
    return w`<div class="sim-component htmlview ${t ?? ""}" ...${o}
        dangerouslySetInnerHTML=${{ __html: n ?? "" }}
      />`;
  });
}
U("sim-component.htmlview", `
    .sim-component.htmlview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
const cn = new ri();
cn.setOptions({
  gfm: !0,
  breaks: !0,
  pedantic: !1,
  smartypants: !1
});
cn.use(si({
  throwOnError: !1
  /*nonStandard:true,*/
}));
cn.use(li({
  emptyLangClass: "hljs",
  langPrefix: "hljs language-",
  // CSS class prefix
  highlight(e, t, n) {
    return t = Ve.getLanguage(t) ? t : "plaintext", Ve.highlight(e, { language: t }).value;
  }
}));
function nl(e) {
  return G(() => {
    let [t, n, o] = j(
      e,
      D("class"),
      fe("value")
    );
    const i = kt(
      () => cn.paime(n ?? ""),
      [n]
    );
    return w`<div class="sim-component markdownview ${t ?? ""}" ...${o}
        dangerouslySetInnerHTML=${{ __html: i }}
      />`;
  });
}
U("sim-component.markdownview", `
    .sim-component.markdownview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }

    .sim-component.markdownview > h1 { font-size:22px; font-weight:bold; line-height:1.5; margin:0px }
    .sim-component.markdownview > h2 { font-size:20px; font-weight:bold; line-height:1.5; margin:0px }
    .sim-component.markdownview > h3 { font-size:18px; font-weight:bold; line-height:1.5; margin:0px }
    .sim-component.markdownview > h4 { font-size:16px; font-weight:bold; line-height:1.5; margin:0px }
    .sim-component.markdownview > h5 { font-size:15px; font-weight:bold; line-height:1.5; margin:0px }
    .sim-component.markdownview > h6 { font-size:14px; font-weight:bold; line-height:1.5; margin:0px }

    .sim-component.markdownview > h1:not(:first-child) { margin-top:11px }
    .sim-component.markdownview > h2:not(:first-child) { margin-top:10px }
    .sim-component.markdownview > h3:not(:first-child) { margin-top:9px }
    .sim-component.markdownview > h4:not(:first-child) { margin-top:8px }
    .sim-component.markdownview > h5:not(:first-child) { margin-top:8px }
    .sim-component.markdownview > h6:not(:first-child) { margin-top:7px }

    .sim-component.markdownview > p { font-size:14px; font-weight:normal; line-height:1.5; margin:0px }
    .sim-component.markdownview > p:not(:first-child) { margin-top:7px }

    .sim-component.markdownview > ul { font-size:14px; font-weight:normal; line-height:1.5; margin:0px }
    .sim-component.markdownview > ul:not(:first-child) { margin-top:7px }

    .sim-component.markdownview > ol { font-size:14px; font-weight:normal; line-height:1.5; margin:0px }
    .sim-component.markdownview > ol:not(:first-child) { margin-top:7px }

    .sim-component.markdownview > li { margin-left:20px }
    .sim-component.markdownview > ul, .sim-markdownview > .sim-content ol { padding-left:0px }

    .sim-component.markdownview > blockquote {
      margin:7px 0px 0px 10px;
      padding:0px 0px 0px 6px;
      border:none; border-left:solid 4px lightgray;
    }

    .sim-component.markdownview > code {
      font-family:Menlo,Courier,monospace;
      font-size:13px; font-weight:normal; line-height:1.5; margin:0px;
      padding:2px; background-color:#EEEEEE;
    }

    .sim-component.markdownview > pre { background-color:#EEEEEE; padding:2px 0px 2px 6px }
    .sim-component.markdownview > pre:not(:first-child) { margin-top:7px }
    .sim-component.markdownview > pre > code { padding:0px }

  /**** Syntax Highlighing ****/

    .hljs {
      display:block;
      overflow-x:auto;
      padding:0.5em;
      background:#f0f0f0;
      color:#444444;
    }

    .hljs-comment, .hljs-quote                     { font-style:italic;  color:#999988 }
    .hljs-keyword, .hljs-selector-tag, .hljs-subst { font-weight:bold;   color:#333333 }
    .hljs-string,  .hljs-doctag                    { color:#dd1144 }
    .hljs-number                                   { color:#009999 }
    .hljs-title, .hljs-section, .hljs-selector-id  { font-weight:bold;   color:#990000 }
    .hljs-class .hljs-title, .hljs-type            { font-weight:bold;   color:#445588 }
    .hljs-variable, .hljs-template-variable        { color:#336699 }
    .hljs-attr                                     { color:#007700 }
    .hljs-tag, .hljs-name                          { font-weight:normal; color:#000080}
    .hljs-regexp                                   { color:#009926 }
    .hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-pseudo { color:#990073 }
    .hljs-built_in, .hljs-builtin-name             { color:#0086b3 }
    .hljs-deletion                                 { background:#ffdddd }
    .hljs-addition                                 { background:#ddffdd }
    .hljs-emphasis                                 { font-style:italic }
    .hljs-strong                                   { font-weight:bold }
    .hljs.language-html, .hljs.language-xml        { color:#333333 }
    .hljs.language-css .hljs-selector-class,
    .hljs.language-css .hljs-selector-tag,
    .hljs.language-css .hljs-attribute             { color:#1e347b }
    .hljs.language-javascript .hljs-keyword        { color:#0000aa }
    .hljs.language-typescript .hljs-keyword        { color:#0000aa }
    .hljs.language-java .hljs-keyword              { color:#bb9966 }
    .hljs.language-json .hljs-attribute            { color:#0000aa }
  `);
const dr = ["none", "stretch", "cover", "contain"], pr = [
  "left top",
  "center top",
  "right top",
  "left center",
  "center center",
  "right center",
  "left bottom",
  "center bottom",
  "right bottom"
];
function Zo(e) {
  return ze(e, dr);
}
function Xo(e) {
  return ze(e, pr);
}
function ol(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a
    ] = j(
      e,
      D("class"),
      fe("style"),
      ln("value"),
      H("scaling", Zo),
      H("alignment", Xo)
    );
    return w`<img class="sim-component imageview ${t ?? ""}" src=${o ?? ""} style="
        object-fit:${i ?? "contain"};
        object-position:${r ?? "center center"}; ${n}
      " ...${a}/>`;
  });
}
U("sim-component.imageview", `
    .sim-component.imageview {
      object-fit:contain; object-position:center;
    }
  `);
function il(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a
    ] = j(
      e,
      D("class"),
      fe("style"),
      ln("value"),
      H("scaling", Zo),
      H("alignment", Xo)
    );
    const s = kt(() => "image/svg+xml;base64," + btoa(o ?? ""));
    return w`<img class="sim-component svgview ${t ?? ""}" src=${s} style="
        object-fit:${i ?? "contain"};
        object-position:${r ?? "center center"}; ${n}
      " ...${a}/>`;
  });
}
U("sim-component.svgview", `
    .sim-component.svgview {
      object-fit:contain; object-position:center;
    }
  `);
const al = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts", fr = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "origin-when-cross-origin",
  "same-origin",
  "strict-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
];
function mr(e) {
  return ze(e, fr);
}
function rl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s
    ] = j(
      e,
      D("class"),
      ln("value"),
      D("allow"),
      V("allowfullscreen"),
      D("sandbox"),
      H("referrerpolicy", mr)
    );
    return w`<iframe class="sim-component webview ${t ?? ""}" src=${n ?? ""}
        allow=${o} allowfullscreen=${i}
        sandbox=${r} referrerpolicy=${a}
        ...${s}
      />`;
  });
}
U("sim-component.webview", `
    .sim-component.webview {
      overflow:auto;
    }
  `);
function sl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l
    ] = j(
      e,
      D("class"),
      ln("value"),
      sn("color"),
      V("active"),
      V("disabled"),
      M("onclick")
    );
    n = n ?? `${yn}/circle-information.png`, o = o ?? "black";
    const c = X((d) => {
      if (r)
        return Rn(d);
      R('Icon callback "onClick"', a, d);
    }, [r, a]), u = r ? "not-allowed" : a == null ? "auto" : "pointer";
    return w`<div
        class="sim-component icon ${r ? "disabled" : ""} ${i ? "active" : ""} ${t ?? ""}"
        onClick=${c} ...${s}
      >
        <div style="
          -webkit-mask-image:url(${n}); mask-image:url(${n});
          background-color:${o};
          cursor:${u};
        "/>
      </>`;
  });
}
U("sim-component.icon", `
    .sim-component.icon {
      width:24px ! important; height:24px ! important;
    }

    .sim-component.icon > div {
      width:24px; height:24px;
      overflow:hidden; pointer-events:auto;
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
    }

    .sim-component.icon.active {
      background:#e8f0ff;
      outline:solid 2px lightgray; border-radius:4px;
    }
  `);
const gr = [
  // modified version from https://gist.github.com/zwinnie/3ed8e7970240962bc29227533c3ae047
  "fa-500px",
  "fa-address-book",
  "fa-address-book-o",
  "fa-address-card",
  "fa-address-card-o",
  "fa-adjust",
  "fa-adn",
  "fa-align-center",
  "fa-align-justify",
  "fa-align-left",
  "fa-align-right",
  "fa-amazon",
  "fa-ambulance",
  "fa-american-sign-language-interpreting",
  "fa-anchor",
  "fa-android",
  "fa-angellist",
  "fa-angle-double-down",
  "fa-angle-double-left",
  "fa-angle-double-right",
  "fa-angle-double-up",
  "fa-angle-down",
  "fa-angle-left",
  "fa-angle-right",
  "fa-angle-up",
  "fa-apple",
  "fa-archive",
  "fa-area-chart",
  "fa-arrow-circle-down",
  "fa-arrow-circle-left",
  "fa-arrow-circle-o-down",
  "fa-arrow-circle-o-left",
  "fa-arrow-circle-o-right",
  "fa-arrow-circle-o-up",
  "fa-arrow-circle-right",
  "fa-arrow-circle-up",
  "fa-arrow-down",
  "fa-arrow-left",
  "fa-arrow-right",
  "fa-arrow-up",
  "fa-arrows",
  "fa-arrows-alt",
  "fa-arrows-h",
  "fa-arrows-v",
  "fa-asl-interpreting",
  "fa-assistive-listening-systems",
  "fa-asterisk",
  "fa-at",
  "fa-audio-description",
  "fa-automobile",
  "fa-backward",
  "fa-balance-scale",
  "fa-ban",
  "fa-bandcamp",
  "fa-bank",
  "fa-bar-chart",
  "fa-bar-chart-o",
  "fa-barcode",
  "fa-bars",
  "fa-bath",
  "fa-bathtub",
  "fa-battery",
  "fa-battery-0",
  "fa-battery-1",
  "fa-battery-2",
  "fa-battery-3",
  "fa-battery-4",
  "fa-battery-empty",
  "fa-battery-full",
  "fa-battery-half",
  "fa-battery-quarter",
  "fa-battery-three-quarters",
  "fa-bed",
  "fa-beer",
  "fa-behance",
  "fa-behance-square",
  "fa-bell",
  "fa-bell-o",
  "fa-bell-slash",
  "fa-bell-slash-o",
  "fa-bicycle",
  "fa-binoculars",
  "fa-birthday-cake",
  "fa-bitbucket",
  "fa-bitbucket-square",
  "fa-bitcoin",
  "fa-black-tie",
  "fa-blind",
  "fa-bluetooth",
  "fa-bluetooth-b",
  "fa-bold",
  "fa-bolt",
  "fa-bomb",
  "fa-book",
  "fa-bookmark",
  "fa-bookmark-o",
  "fa-braille",
  "fa-briefcase",
  "fa-btc",
  "fa-bug",
  "fa-building",
  "fa-building-o",
  "fa-bullhorn",
  "fa-bullseye",
  "fa-bus",
  "fa-buysellads",
  "fa-cab",
  "fa-calculator",
  "fa-calendar",
  "fa-calendar-check-o",
  "fa-calendar-minus-o",
  "fa-calendar-o",
  "fa-calendar-plus-o",
  "fa-calendar-times-o",
  "fa-camera",
  "fa-camera-retro",
  "fa-car",
  "fa-caret-down",
  "fa-caret-left",
  "fa-caret-right",
  "fa-caret-square-o-down",
  "fa-caret-square-o-left",
  "fa-caret-square-o-right",
  "fa-caret-square-o-up",
  "fa-caret-up",
  "fa-cart-arrow-down",
  "fa-cart-plus",
  "fa-cc",
  "fa-cc-amex",
  "fa-cc-diners-club",
  "fa-cc-discover",
  "fa-cc-jcb",
  "fa-cc-mastercard",
  "fa-cc-paypal",
  "fa-cc-stripe",
  "fa-cc-visa",
  "fa-certificate",
  "fa-chain",
  "fa-chain-broken",
  "fa-check",
  "fa-check-circle",
  "fa-check-circle-o",
  "fa-check-square",
  "fa-check-square-o",
  "fa-chevron-circle-down",
  "fa-chevron-circle-left",
  "fa-chevron-circle-right",
  "fa-chevron-circle-up",
  "fa-chevron-down",
  "fa-chevron-left",
  "fa-chevron-right",
  "fa-chevron-up",
  "fa-child",
  "fa-chrome",
  "fa-circle",
  "fa-circle-o",
  "fa-circle-o-notch",
  "fa-circle-thin",
  "fa-clipboard",
  "fa-clock-o",
  "fa-clone",
  "fa-close",
  "fa-cloud",
  "fa-cloud-download",
  "fa-cloud-upload",
  "fa-cny",
  "fa-code",
  "fa-code-fork",
  "fa-codepen",
  "fa-codiepie",
  "fa-coffee",
  "fa-cog",
  "fa-cogs",
  "fa-columns",
  "fa-comment",
  "fa-comment-o",
  "fa-commenting",
  "fa-commenting-o",
  "fa-comments",
  "fa-comments-o",
  "fa-compass",
  "fa-compress",
  "fa-connectdevelop",
  "fa-contao",
  "fa-copy",
  "fa-copyright",
  "fa-creative-commons",
  "fa-credit-card",
  "fa-credit-card-alt",
  "fa-crop",
  "fa-crosshairs",
  "fa-css3",
  "fa-cube",
  "fa-cubes",
  "fa-cut",
  "fa-cutlery",
  "fa-dashboard",
  "fa-dashcube",
  "fa-database",
  "fa-deaf",
  "fa-deafness",
  "fa-dedent",
  "fa-delicious",
  "fa-desktop",
  "fa-deviantart",
  "fa-diamond",
  "fa-digg",
  "fa-dollar",
  "fa-dot-circle-o",
  "fa-download",
  "fa-dribbble",
  "fa-drivers-license",
  "fa-drivers-license-o",
  "fa-dropbox",
  "fa-drupal",
  "fa-edge",
  "fa-edit",
  "fa-eercast",
  "fa-eject",
  "fa-ellipsis-h",
  "fa-ellipsis-v",
  "fa-empire",
  "fa-envelope",
  "fa-envelope-o",
  "fa-envelope-open",
  "fa-envelope-open-o",
  "fa-envelope-square",
  "fa-envira",
  "fa-eraser",
  "fa-etsy",
  "fa-eur",
  "fa-euro",
  "fa-exchange",
  "fa-exclamation",
  "fa-exclamation-circle",
  "fa-exclamation-triangle",
  "fa-expand",
  "fa-expeditedssl",
  "fa-external-link",
  "fa-external-link-square",
  "fa-eye",
  "fa-eye-slash",
  "fa-eyedropper",
  "fa-fa",
  "fa-facebook",
  "fa-facebook-f",
  "fa-facebook-official",
  "fa-facebook-square",
  "fa-fast-backward",
  "fa-fast-forward",
  "fa-fax",
  "fa-feed",
  "fa-female",
  "fa-fighter-jet",
  "fa-file",
  "fa-file-archive-o",
  "fa-file-audio-o",
  "fa-file-code-o",
  "fa-file-excel-o",
  "fa-file-image-o",
  "fa-file-movie-o",
  "fa-file-o",
  "fa-file-pdf-o",
  "fa-file-photo-o",
  "fa-file-picture-o",
  "fa-file-powerpoint-o",
  "fa-file-sound-o",
  "fa-file-text",
  "fa-file-text-o",
  "fa-file-video-o",
  "fa-file-word-o",
  "fa-file-zip-o",
  "fa-files-o",
  "fa-film",
  "fa-filter",
  "fa-fire",
  "fa-fire-extinguisher",
  "fa-firefox",
  "fa-first-order",
  "fa-flag",
  "fa-flag-checkered",
  "fa-flag-o",
  "fa-flash",
  "fa-flask",
  "fa-flickr",
  "fa-floppy-o",
  "fa-folder",
  "fa-folder-o",
  "fa-folder-open",
  "fa-folder-open-o",
  "fa-font",
  "fa-font-awesome",
  "fa-fonticons",
  "fa-fort-awesome",
  "fa-forumbee",
  "fa-forward",
  "fa-foursquare",
  "fa-free-code-camp",
  "fa-frown-o",
  "fa-futbol-o",
  "fa-gamepad",
  "fa-gavel",
  "fa-gbp",
  "fa-ge",
  "fa-gear",
  "fa-gears",
  "fa-genderless",
  "fa-get-pocket",
  "fa-gg",
  "fa-gg-circle",
  "fa-gift",
  "fa-git",
  "fa-git-square",
  "fa-github",
  "fa-github-alt",
  "fa-github-square",
  "fa-gitlab",
  "fa-gittip",
  "fa-glass",
  "fa-glide",
  "fa-glide-g",
  "fa-globe",
  "fa-google",
  "fa-google-plus",
  "fa-google-plus-circle",
  "fa-google-plus-official",
  "fa-google-plus-square",
  "fa-google-wallet",
  "fa-graduation-cap",
  "fa-gratipay",
  "fa-grav",
  "fa-group",
  "fa-h-square",
  "fa-hacker-news",
  "fa-hand-grab-o",
  "fa-hand-lizard-o",
  "fa-hand-o-down",
  "fa-hand-o-left",
  "fa-hand-o-right",
  "fa-hand-o-up",
  "fa-hand-paper-o",
  "fa-hand-peace-o",
  "fa-hand-pointer-o",
  "fa-hand-rock-o",
  "fa-hand-scissors-o",
  "fa-hand-spock-o",
  "fa-hand-stop-o",
  "fa-handshake-o",
  "fa-hard-of-hearing",
  "fa-hashtag",
  "fa-hdd-o",
  "fa-header",
  "fa-headphones",
  "fa-heart",
  "fa-heart-o",
  "fa-heartbeat",
  "fa-history",
  "fa-home",
  "fa-hospital-o",
  "fa-hotel",
  "fa-hourglass",
  "fa-hourglass-1",
  "fa-hourglass-2",
  "fa-hourglass-3",
  "fa-hourglass-end",
  "fa-hourglass-half",
  "fa-hourglass-o",
  "fa-hourglass-start",
  "fa-houzz",
  "fa-html5",
  "fa-i-cursor",
  "fa-id-badge",
  "fa-id-card",
  "fa-id-card-o",
  "fa-ils",
  "fa-image",
  "fa-imdb",
  "fa-inbox",
  "fa-indent",
  "fa-industry",
  "fa-info",
  "fa-info-circle",
  "fa-inr",
  "fa-instagram",
  "fa-institution",
  "fa-internet-explorer",
  "fa-intersex",
  "fa-ioxhost",
  "fa-italic",
  "fa-joomla",
  "fa-jpy",
  "fa-jsfiddle",
  "fa-key",
  "fa-keyboard-o",
  "fa-krw",
  "fa-language",
  "fa-laptop",
  "fa-lastfm",
  "fa-lastfm-square",
  "fa-leaf",
  "fa-leanpub",
  "fa-legal",
  "fa-lemon-o",
  "fa-level-down",
  "fa-level-up",
  "fa-life-bouy",
  "fa-life-buoy",
  "fa-life-ring",
  "fa-life-saver",
  "fa-lightbulb-o",
  "fa-line-chart",
  "fa-link",
  "fa-linkedin",
  "fa-linkedin-square",
  "fa-linode",
  "fa-linux",
  "fa-list",
  "fa-list-alt",
  "fa-list-ol",
  "fa-list-ul",
  "fa-location-arrow",
  "fa-lock",
  "fa-long-arrow-down",
  "fa-long-arrow-left",
  "fa-long-arrow-right",
  "fa-long-arrow-up",
  "fa-low-vision",
  "fa-magic",
  "fa-magnet",
  "fa-mail-forward",
  "fa-mail-reply",
  "fa-mail-reply-all",
  "fa-male",
  "fa-map",
  "fa-map-marker",
  "fa-map-o",
  "fa-map-pin",
  "fa-map-signs",
  "fa-mars",
  "fa-mars-double",
  "fa-mars-stroke",
  "fa-mars-stroke-h",
  "fa-mars-stroke-v",
  "fa-maxcdn",
  "fa-meanpath",
  "fa-medium",
  "fa-medkit",
  "fa-meetup",
  "fa-meh-o",
  "fa-mercury",
  "fa-microchip",
  "fa-microphone",
  "fa-microphone-slash",
  "fa-minus",
  "fa-minus-circle",
  "fa-minus-square",
  "fa-minus-square-o",
  "fa-mixcloud",
  "fa-mobile",
  "fa-mobile-phone",
  "fa-modx",
  "fa-money",
  "fa-moon-o",
  "fa-mortar-board",
  "fa-motorcycle",
  "fa-mouse-pointer",
  "fa-music",
  "fa-navicon",
  "fa-neuter",
  "fa-newspaper-o",
  "fa-object-group",
  "fa-object-ungroup",
  "fa-odnoklassniki",
  "fa-odnoklassniki-square",
  "fa-opencart",
  "fa-openid",
  "fa-opera",
  "fa-optin-monster",
  "fa-outdent",
  "fa-pagelines",
  "fa-paint-brush",
  "fa-paper-plane",
  "fa-paper-plane-o",
  "fa-paperclip",
  "fa-paragraph",
  "fa-paste",
  "fa-pause",
  "fa-pause-circle",
  "fa-pause-circle-o",
  "fa-paw",
  "fa-paypal",
  "fa-pencil",
  "fa-pencil-square",
  "fa-pencil-square-o",
  "fa-percent",
  "fa-phone",
  "fa-phone-square",
  "fa-photo",
  "fa-picture-o",
  "fa-pie-chart",
  "fa-pied-piper",
  "fa-pied-piper-alt",
  "fa-pied-piper-pp",
  "fa-pinterest",
  "fa-pinterest-p",
  "fa-pinterest-square",
  "fa-plane",
  "fa-play",
  "fa-play-circle",
  "fa-play-circle-o",
  "fa-plug",
  "fa-plus",
  "fa-plus-circle",
  "fa-plus-square",
  "fa-plus-square-o",
  "fa-podcast",
  "fa-power-off",
  "fa-print",
  "fa-product-hunt",
  "fa-puzzle-piece",
  "fa-qq",
  "fa-qrcode",
  "fa-question",
  "fa-question-circle",
  "fa-question-circle-o",
  "fa-quora",
  "fa-quote-left",
  "fa-quote-right",
  "fa-ra",
  "fa-random",
  "fa-ravelry",
  "fa-rebel",
  "fa-recycle",
  "fa-reddit",
  "fa-reddit-alien",
  "fa-reddit-square",
  "fa-refresh",
  "fa-registered",
  "fa-remove",
  "fa-renren",
  "fa-reorder",
  "fa-repeat",
  "fa-reply",
  "fa-reply-all",
  "fa-resistance",
  "fa-retweet",
  "fa-rmb",
  "fa-road",
  "fa-rocket",
  "fa-rotate-left",
  "fa-rotate-right",
  "fa-rouble",
  "fa-rss",
  "fa-rss-square",
  "fa-rub",
  "fa-ruble",
  "fa-rupee",
  "fa-s15",
  "fa-safari",
  "fa-save",
  "fa-scissors",
  "fa-scribd",
  "fa-search",
  "fa-search-minus",
  "fa-search-plus",
  "fa-sellsy",
  "fa-send",
  "fa-send-o",
  "fa-server",
  "fa-share",
  "fa-share-alt",
  "fa-share-alt-square",
  "fa-share-square",
  "fa-share-square-o",
  "fa-shekel",
  "fa-sheqel",
  "fa-shield",
  "fa-ship",
  "fa-shirtsinbulk",
  "fa-shopping-bag",
  "fa-shopping-basket",
  "fa-shopping-cart",
  "fa-shower",
  "fa-sign-in",
  "fa-sign-language",
  "fa-sign-out",
  "fa-signal",
  "fa-signing",
  "fa-simplybuilt",
  "fa-sitemap",
  "fa-skyatlas",
  "fa-skype",
  "fa-slack",
  "fa-sliders",
  "fa-slideshare",
  "fa-smile-o",
  "fa-snapchat",
  "fa-snapchat-ghost",
  "fa-snapchat-square",
  "fa-snowflake-o",
  "fa-soccer-ball-o",
  "fa-sort",
  "fa-sort-alpha-asc",
  "fa-sort-alpha-desc",
  "fa-sort-amount-asc",
  "fa-sort-amount-desc",
  "fa-sort-asc",
  "fa-sort-desc",
  "fa-sort-down",
  "fa-sort-numeric-asc",
  "fa-sort-numeric-desc",
  "fa-sort-up",
  "fa-soundcloud",
  "fa-space-shuttle",
  "fa-spinner",
  "fa-spoon",
  "fa-spotify",
  "fa-square",
  "fa-square-o",
  "fa-stack-exchange",
  "fa-stack-overflow",
  "fa-star",
  "fa-star-half",
  "fa-star-half-empty",
  "fa-star-half-full",
  "fa-star-half-o",
  "fa-star-o",
  "fa-steam",
  "fa-steam-square",
  "fa-step-backward",
  "fa-step-forward",
  "fa-stethoscope",
  "fa-sticky-note",
  "fa-sticky-note-o",
  "fa-stop",
  "fa-stop-circle",
  "fa-stop-circle-o",
  "fa-street-view",
  "fa-strikethrough",
  "fa-stumbleupon",
  "fa-stumbleupon-circle",
  "fa-subscript",
  "fa-subway",
  "fa-suitcase",
  "fa-sun-o",
  "fa-superpowers",
  "fa-superscript",
  "fa-support",
  "fa-table",
  "fa-tablet",
  "fa-tachometer",
  "fa-tag",
  "fa-tags",
  "fa-tasks",
  "fa-taxi",
  "fa-telegram",
  "fa-television",
  "fa-tencent-weibo",
  "fa-terminal",
  "fa-text-height",
  "fa-text-width",
  "fa-th",
  "fa-th-large",
  "fa-th-list",
  "fa-themeisle",
  "fa-thermometer",
  "fa-thermometer-0",
  "fa-thermometer-1",
  "fa-thermometer-2",
  "fa-thermometer-3",
  "fa-thermometer-4",
  "fa-thermometer-empty",
  "fa-thermometer-full",
  "fa-thermometer-half",
  "fa-thermometer-quarter",
  "fa-thermometer-three-quarters",
  "fa-thumb-tack",
  "fa-thumbs-down",
  "fa-thumbs-o-down",
  "fa-thumbs-o-up",
  "fa-thumbs-up",
  "fa-ticket",
  "fa-times",
  "fa-times-circle",
  "fa-times-circle-o",
  "fa-times-rectangle",
  "fa-times-rectangle-o",
  "fa-tint",
  "fa-toggle-down",
  "fa-toggle-left",
  "fa-toggle-off",
  "fa-toggle-on",
  "fa-toggle-right",
  "fa-toggle-up",
  "fa-trademark",
  "fa-train",
  "fa-transgender",
  "fa-transgender-alt",
  "fa-trash",
  "fa-trash-o",
  "fa-tree",
  "fa-trello",
  "fa-tripadvisor",
  "fa-trophy",
  "fa-truck",
  "fa-try",
  "fa-tty",
  "fa-tumblr",
  "fa-tumblr-square",
  "fa-turkish-lira",
  "fa-tv",
  "fa-twitch",
  "fa-twitter",
  "fa-twitter-square",
  "fa-umbrella",
  "fa-underline",
  "fa-undo",
  "fa-universal-access",
  "fa-university",
  "fa-unlink",
  "fa-unlock",
  "fa-unlock-alt",
  "fa-unsorted",
  "fa-upload",
  "fa-usb",
  "fa-usd",
  "fa-user",
  "fa-user-circle",
  "fa-user-circle-o",
  "fa-user-md",
  "fa-user-o",
  "fa-user-plus",
  "fa-user-secret",
  "fa-user-times",
  "fa-users",
  "fa-vcard",
  "fa-vcard-o",
  "fa-venus",
  "fa-venus-double",
  "fa-venus-mars",
  "fa-viacoin",
  "fa-video",
  "fa-video-square",
  "fa-video-camera",
  "fa-vimeo",
  "fa-vimeo-square",
  "fa-vine",
  "fa-vk",
  "fa-volume-control-phone",
  "fa-volume-down",
  "fa-volume-off",
  "fa-volume-up",
  "fa-warning",
  "fa-wechat",
  "fa-weibo",
  "fa-weixin",
  "fa-whatsapp",
  "fa-wheelchair",
  "fa-wheelchair-alt",
  "fa-wifi",
  "fa-wikipedia-w",
  "fa-window-close",
  "fa-window-close-o",
  "fa-window-maximize",
  "fa-window-minimize",
  "fa-window-restore",
  "fa-windows",
  "fa-won",
  "fa-wordpress",
  "fa-wpbeginner",
  "fa-wpexplorer",
  "fa-wpforms",
  "fa-wrench",
  "fa-xing",
  "fa-xing-square",
  "fa-y-combinator",
  "fa-y-combinator-square",
  "fa-yahoo",
  "fa-yc",
  "fa-yc-square",
  "fa-yelp",
  "fa-yen",
  "fa-yoast",
  "fa-youtube",
  "fa-youtube-play",
  "fa-youtube-square"
];
function ll(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l
    ] = j(
      e,
      D("class"),
      H("value", (d) => ze(d, gr)),
      sn("color"),
      V("active"),
      V("disabled"),
      M("onclick")
    );
    n = n ?? "fa-question-circle-o", o = o ?? "black";
    const c = X((d) => {
      if (r)
        return Rn(d);
      R('Icon callback "onClick"', a, d);
    }, [r, a]), u = r ? "not-allowed" : a == null ? "auto" : "pointer";
    return w`<div class="sim-component fa-icon fa ${n} ${r ? "disabled" : ""} ${i ? "active" : ""} ${t ?? ""}" style="
        color:${o};
        cursor:${u};
      " onClick=${c} ...${s}/>`;
  });
}
U("sim-component.fa-icon", `
    .sim-component.fa-icon {
      width:24px ! important; height:24px ! important;
      font-size:24px; line-height:24px; text-align:center;
      pointer-events:auto;
    }

    .sim-component.fa-icon.active {
      background:#e8f0ff;
      outline:solid 2px lightgray; border-radius:4px;
    }
  `);
function cl(e) {
  return G(() => {
    let [t, n, o, i] = j(
      e,
      D("class"),
      fe("value")
    );
    return n == null ? w`<button class="sim-component button ${t ?? ""}" ...${o}>
          ${i}
        </>` : w`<button class="sim-component button ${t ?? ""}" ...${o}
          dangerouslySetInnerHTML=${{ __html: n }}
        />`;
  });
}
U("sim-component.button", `
    .sim-component.button {
      height:30px;
      border:solid 1px black; border-radius:4px;
      background:white;
      font-weight:bold; color:black;
      cursor:pointer; pointer-events:auto;
    }
    .sim-component.button:disabled {
      cursor:not-allowed;
    }
  `);
function ul(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s
    ] = j(
      e,
      D("class"),
      fe("style"),
      H("value", (m) => Xt(m) || Z(m)),
      V("disabled"),
      M("onvalueinput"),
      M("onclick")
    );
    const [l, c] = Z(o) ? [void 0, i || o.disabled] : [o, i], u = l == !0, d = l == null, p = X((m) => {
      if (se(m, c), c == !0)
        return;
      R('Checkbox callback "onClick"', a, m);
      const g = m.target.checked;
      R(
        'Checkbox callback "onValueInput"',
        r,
        g,
        m
      );
    }, [c, a, r]);
    return w`<div class="sim-component checkbox ${c ? "disabled" : ""} ${t ?? ""}"
        style=${n}
      >
        <input type="checkbox"
          checked=${u} indeterminate=${d}
          onClick=${p} ...${s}
        />
      </>`;
  });
}
U("sim-component.checkbox", `
    .sim-component.checkbox {
      height:30px;
      min-width:20px; min-height:20px;
    }
    .sim-component.checkbox > input {
      position:absolute;
      left:50%; top:50%; width:100%; height:100%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .sim-component.checkbox > input:disabled {
      cursor:not-allowed;
    }
  `);
function dl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s
    ] = j(
      e,
      D("class"),
      fe("style"),
      H("value", (p) => Xt(p) || Z(p)),
      V("disabled"),
      M("onvalueinput"),
      M("onclick")
    );
    o = o ?? Q;
    const [l, c] = Z(o) ? [void 0, i || o.disabled] : [o, i], u = l == !0, d = X((p) => {
      if (se(p, c), c == !0)
        return;
      R('Radiobutton callback "onClick"', a, p);
      const m = p.target.checked;
      R(
        'Checkbox callback "onValueInput"',
        r,
        m,
        p
      );
    }, [c, a, r]);
    return w`<div class="sim-component radiobutton ${c ? "disabled" : ""} ${t ?? ""}"
        style=${n}
      >
        <input type="radio" checked=${u} onClick=${d} ...${s}/>
      </>`;
  });
}
U("sim-component.radiobutton", `
    .sim-component.radiobutton {
      height:30px;
      min-width:20px; min-height:20px;
    }
    .sim-component.radiobutton > input {
      position:absolute;
      left:50%; top:50%; width:100%; height:100%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .sim-component.radiobutton > input:disabled {
      cursor:not-allowed;
    }
  `);
function pl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c
    ] = j(
      e,
      D("class"),
      fe("style"),
      Le("value"),
      Le("min"),
      Le("low"),
      Le("opt"),
      Le("high"),
      Le("max")
    );
    return w`<div class="sim-component gauge ${t ?? ""}" style=${n}>
        <meter
          value=${o} min=${i} low=${r} opt=${a}
          high=${s} max=${l} ...${c}
        />
      </>`;
  });
}
U("sim-component.gauge", `
    .sim-component.gauge {
      height:30px;
      min-width:40px; min-height:20px;
    }
    .sim-component.gauge > meter {
      position:absolute;
      left:50%; top:50%; width:100%; height:16px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
  `);
function fl(e) {
  return G(() => {
    let [t, n, o, i, r] = j(
      e,
      D("class"),
      fe("style"),
      Le("value"),
      Le("max")
    );
    return w`<div class="sim-component progressbar ${t ?? ""}" style=${n}>
        <progress value=${o} max=${i} ...${r}/>
      </>`;
  });
}
U("sim-component.progressbar", `
    .sim-component.progressbar {
      height:30px;
      min-width:40px; min-height:20px;
    }
    .sim-component.progressbar > progress {
      position:absolute;
      left:50%; top:50%; width:100%; height:16px;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .sim-component.progressbar > progress::-webkit-progress-bar {
      background-color:#EEEEEE;
      border:solid 1px #E0E0E0; border-radius:2px;
    }
    .sim-component.progressbar > progress::-webkit-progress-value,
    .sim-component.progressbar > progress::-moz-progress-bar {
      background-color:dodgerblue;
      border:none; border-radius:2px;
    }
  `);
function ml(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p
    ] = j(
      e,
      D("class"),
      fe("style"),
      H("value", (_) => ht(_) || Z(_)),
      Le("min"),
      H("step", (_) => Yt(_, 0, 1 / 0, !1, !1)),
      Le("max"),
      H("hashmarks", (_) => ue(_, ce)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    l = l ?? !1;
    const m = W(), g = W();
    let f = o == null || isNaN(o) ? Q : o;
    m.current != null && document.activeElement === m.current ? f = g.current : g.current = f;
    const [b, x] = Z(f) ? [void 0, l || f.disabled] : [f, l], T = X((_) => {
      if (se(_), x == !0)
        return;
      R('Slider callback "onInput"', u, _);
      let C = g.current = parseFloat(_.target.value);
      R(
        'Slider callback "onValueInput"',
        c,
        C,
        _
      );
    }, [x, u, c]), $ = X((_) => {
      B(), R('slider callback "onBlur"', d, _);
    }, [d]), O = Ee(), B = ke();
    let N = "", k;
    return s != null && s.length > 0 && (k = O + "-Hashmarks", N = w`\n<datalist id=${k}>
          ${s.map((_) => {
      const C = _.replace(/:.*$/, "").trim(), v = _.replace(/^[^:]+:/, "").trim();
      return w`<option value=${C}>${v}</option>`;
    })}
        </datalist>`), w`<div class="sim-component slider ${t ?? ""}" style=${n}>
        <input type="range" ref=${m} disabled=${x}
          value=${b} min=${i} max=${a} step=${r}
          list=${k}
          onInput=${T} onBlur=${$} ...${p}
        />${N}
      </>`;
  });
}
U("sim-component.slider", `
    .sim-component.slider {
      height:30px;
      min-width:40px; min-height:20px;
    }
    .sim-component.slider > input {
      position:absolute;
      left:50%; top:50%; width:100%;
      transform:translate(-50%,-50%);
      margin:0px; padding:0px;
    }
    .sim-component.slider > input:disabled {
      cursor:not-allowed;
    }
  `);
function gl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g,
      f
    ] = j(
      e,
      D("class"),
      H("value", (E) => ce(E) || Z(E)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      D("pattern"),
      V("spellcheck"),
      H("suggestions", (E) => ue(E, ce)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    d = d ?? !1;
    const b = W(), x = W();
    let T = n ?? Q;
    b.current != null && document.activeElement === b.current ? T = x.current : x.current = T;
    const [$, O, B] = Z(T) ? [void 0, T === Q ? i ?? T.Placeholder : T.Placeholder, d || T.disabled] : [T, i, d], N = X((E) => {
      if (se(E), B == !0)
        return;
      R('TextlineInput callback "onInput"', m, E);
      const K = E.target.value;
      x.current = K === "" ? Q : K, R(
        'TextlineInput callback "onValueInput"',
        p,
        K,
        E
      );
    }, [B, m, p]), k = X((E) => {
      C(), R('TextlineInput callback "onBlur"', g, E);
    }, [g]), _ = Ee(), C = ke();
    let v = "", h;
    return u != null && u.length > 0 && (h = _ + "-Suggestions", v = w`<datalist id=${h}>
          ${u.map((E) => w`<option value=${E}></option>`)}
        </datalist>`), w`<input type="text" class="sim-component textline-input ${t ?? ""}" ref=${b}
        value=${$} minlength=${a} maxlength=${s}
        readOnly=${r} placeholder=${O}
        pattern=${l} spellcheck=${c}
        disabled=${B} list=${h}
        onInput=${N} onBlur=${k} ...${f}
      />${v}`;
  });
}
U("sim-component.textline-input", `
    .sim-component.textline-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.textline-input:invalid, .sim-component.sim-textline-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.textline-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.textline-input:disabled {
      cursor:not-allowed;
    }
  `);
function hl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m
    ] = j(
      e,
      D("class"),
      H("value", (k) => ce(k) || Z(k)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      D("pattern"),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    c = c ?? !1;
    const g = W(), f = W();
    let b = n ?? Q;
    g.current != null && document.activeElement === g.current ? b = f.current : f.current = b;
    const [x, T, $] = Z(b) ? [void 0, b === Q ? i ?? b.Placeholder : b.Placeholder, c || b.disabled] : [b, i, c], O = X((k) => {
      if (se(k), $ == !0)
        return;
      R('PasswordInput callback "onInput"', d, k);
      const _ = k.target.value;
      f.current = _ === "" ? Q : _, R(
        'PasswordInput callback "onValueInput"',
        u,
        _,
        k
      );
    }, [$, d, u]), B = X((k) => {
      N(), R('PasswordInput callback "onBlur"', p, k);
    }, [p]), N = ke();
    return w`<input type="password" class="sim-component password-input ${t ?? ""}" ref=${g}
        value=${x} minlength=${a} maxlength=${s}
        readOnly=${r} placeholder=${T}
        pattern=${l} disabled=${$}
        onInput=${O} onBlur=${B} ...${m}
      />`;
  });
}
U("sim-component.password-input", `
    .sim-component.password-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.password-input:invalid, .sim-component.sim-password-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.password-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.password-input:disabled {
      cursor:not-allowed;
    }
  `);
function bl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g
    ] = j(
      e,
      D("class"),
      H("value", (h) => ht(h) || Z(h)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      Le("min"),
      H("step", (h) => Yt(h, 0, 1 / 0, !1, !1)),
      Le("max"),
      H("suggestions", (h) => ue(h, ht)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    u = u ?? !1;
    const f = W(), b = W();
    let x = Z(n) || n != null && !isNaN(n) ? n : Q;
    f.current != null && document.activeElement === f.current ? x = b.current : b.current = x;
    const [T, $, O] = Z(x) ? [void 0, x === Q ? i ?? x.Placeholder : x.Placeholder, u || x.disabled] : [x, i, u], B = X((h) => {
      if (se(h), O == !0)
        return;
      R('NumberInput callback "onInput"', p, h);
      const E = parseFloat(h.target.value);
      b.current = isNaN(E) ? void 0 : E, R(
        'NumberInput callback "onValueInput"',
        d,
        b.current,
        h
      );
    }, [O, p, d]), N = X((h) => {
      _(), R('NumberInput callback "onBlur"', m, h);
    }, [m]), k = Ee(), _ = ke();
    let C = "", v;
    return c != null && c.length > 0 && (v = k + "-Suggestions", C = w`<datalist id=${v}>
          ${c.map((h) => w`<option value=${h}></option>`)}
        </datalist>`), w`<input type="number" ref=${f}
        class="sim-component number-input ${t ?? ""} ${o ? "invalid" : ""}"
        value=${T} min=${a} max=${l} step=${s}
        readOnly=${r} placeholder=${$}
        disabled=${O} list=${v}
        onInput=${B} onBlur=${N} ...${g}
      />${C}`;
  });
}
U("sim-component.number-input", `
    .sim-component.number-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.number-input:invalid, .sim-component.sim-number-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.number-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.number-input:disabled {
      cursor:not-allowed;
    }
  `);
function wl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g,
      f
    ] = j(
      e,
      D("class"),
      H("value", (E) => Ht(E) || Z(E)),
      V("multiple"),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      D("pattern"),
      H("suggestions", (E) => ue(E, Ht)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    d = d ?? !1;
    const b = W(), x = W();
    let T = n ?? Q;
    b.current != null && document.activeElement === b.current ? T = x.current : x.current = T;
    const [$, O, B] = Z(T) ? [void 0, T === Q ? r ?? T.Placeholder : T.Placeholder, d || T.disabled] : [T, r, d], N = X((E) => {
      if (se(E), B == !0)
        return;
      R('EMailAddressInput callback "onInput"', m, E);
      const K = E.target.value;
      x.current = K === "" ? Q : K, R(
        'EMailAddressInput callback "onValueInput"',
        p,
        K,
        E
      );
    }, [B, m, p]), k = X((E) => {
      C(), R('EMailAddressInput callback "onBlur"', g, E);
    }, [g]), _ = Ee(), C = ke();
    let v = "", h;
    return u != null && u.length > 0 && (h = _ + "-Suggestions", v = w`<datalist id=${h}>
          ${u.map((E) => w`<option value=${E}></option>`)}
        </datalist>`), w`<input type="email" class="sim-component emailaddress-input ${t ?? ""}" ref=${b}
        value=${$} minlength=${s} maxlength=${l}
        multiple=${o} readOnly=${a} placeholder=${O}
        pattern=${c} disabled=${B} list=${h}
        onInput=${N} onBlur=${k} ...${f}
      />${v}`;
  });
}
U("sim-component.emailaddress-input", `
    .sim-component.emailaddress-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.emailaddress-input:invalid, .sim-component.sim-emailaddress-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.emailaddress-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.emailaddress-input:disabled {
      cursor:not-allowed;
    }
  `);
function xl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g
    ] = j(
      e,
      D("class"),
      H("value", (h) => Wt(h) || Z(h)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      D("pattern"),
      H("suggestions", (h) => ue(h, Wt)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    u = u ?? !1;
    const f = W(), b = W();
    let x = n ?? Q;
    f.current != null && document.activeElement === f.current ? x = b.current : b.current = x;
    const [T, $, O] = Z(x) ? [void 0, x === Q ? i ?? x.Placeholder : x.Placeholder, u || x.disabled] : [x, i, u], B = X((h) => {
      if (se(h), O == !0)
        return;
      R('PhoneNumberInput callback "onInput"', p, h);
      const E = h.target.value;
      b.current = E === "" ? Q : E, R(
        'PhoneNumberInput callback "onValueInput"',
        d,
        E,
        h
      );
    }, [O, p, d]), N = X((h) => {
      _(), R('PhoneNumberInput callback "onBlur"', m, h);
    }, [m]), k = Ee(), _ = ke();
    let C = "", v;
    return c != null && c.length > 0 && (v = k + "-Suggestions", C = w`<datalist id=${v}>
          ${c.map((h) => w`<option value=${h}></option>`)}
        </datalist>`), w`<input type="tel" class="sim-component phonenumber-input ${t ?? ""}" ref=${f}
        value=${T} minlength=${a} maxlength=${s}
        readOnly=${r} placeholder=${$} pattern=${l}
        disabled=${O} list=${v}
        onInput=${B} onBlur=${N} ...${g}
      />${C}`;
  });
}
U("sim-component.phonenumber-input", `
    .sim-component.phonenumber-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.phonenumber-input:invalid, .sim-component.sim-phonenumber-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.phonenumber-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.phonenumber-input:disabled {
      cursor:not-allowed;
    }
  `);
function vl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g
    ] = j(
      e,
      D("class"),
      H("value", (h) => Ut(h) || Z(h)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      D("pattern"),
      H("suggestions", (h) => ue(h, Ut)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    u = u ?? !1;
    const f = W(), b = W();
    let x = n ?? Q;
    f.current != null && document.activeElement === f.current ? x = b.current : b.current = x;
    const [T, $, O] = Z(x) ? [void 0, x === Q ? i ?? x.Placeholder : x.Placeholder, u || x.disabled] : [x, i, u], B = X((h) => {
      if (se(h), O == !0)
        return;
      R('URLInput callback "onInput"', p, h);
      const E = h.target.value;
      b.current = E === "" ? Q : E, R(
        'URLInput callback "onValueInput"',
        d,
        E,
        h
      );
    }, [O, p, d]), N = X((h) => {
      _(), R('URLInput callback "onBlur"', m, h);
    }, [m]), k = Ee(), _ = ke();
    let C = "", v;
    return c != null && c.length > 0 && (v = k + "-Suggestions", C = w`<datalist id=${v}>
          ${c.map((h) => w`<option value=${h}></option>`)}
        </datalist>`), w`<input type="url" class="sim-component url-input ${t ?? ""}" ref=${f}
        value=${T} minlength=${a} maxlength=${s}
        readOnly=${r} placeholder=${$} pattern=${l}
        disabled=${O} list=${v}
        onInput=${B} onBlur=${N} ...${g}
      />${C}`;
  });
}
U("sim-component.url-input", `
    .sim-component.url-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.url-input:invalid, .sim-component.sim-url-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.url-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.url-input:disabled {
      cursor:not-allowed;
    }
  `);
const $t = "\\d{2}:\\d{2}", hr = /\d{2}:\d{2}/;
function Ot(e) {
  return Ne(e, hr);
}
function yl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p
    ] = j(
      e,
      D("class"),
      H("value", (_) => Ot(_) || Z(_)),
      V("readonly"),
      V("withseconds"),
      H("min", Ot),
      H("max", Ot),
      H("suggestions", (_) => ue(_, Ot)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    l = l ?? !1;
    const m = W(), g = W();
    let f = n ?? Q;
    m.current != null && document.activeElement === m.current ? f = g.current : g.current = f;
    const [b, x] = Z(f) ? [void 0, l || f.disabled] : [f, l], T = X((_) => {
      if (se(_), x == !0)
        return;
      R('TimeInput callback "onInput"', u, _);
      const C = _.target.value;
      g.current = C === "" ? Q : C, R(
        'TimeInput callback "onValueInput"',
        c,
        C,
        _
      );
    }, [x, u, c]), $ = X((_) => {
      B(), R('TimeInput callback "onBlur"', d, _);
    }, [d]), O = Ee(), B = ke();
    let N = "", k;
    return s != null && s.length > 0 && (k = O + "-Suggestions", N = w`<datalist id=${k}>
          ${s.map((_) => w`<option value=${_}></option>`)}
        </datalist>`), w`<input type="time" class="sim-component time-input ${t ?? ""}" ref=${m}
        value=${b} min=${r} max=${a} step=${i ? 1 : 60}
        readOnly=${o} pattern=${$t}
        disabled=${x}
        onInput=${T} onBlur=${$} ...${p}
      />${N}`;
  });
}
U("sim-component.time-input", `
    .sim-component.time-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.time-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.time-input:disabled {
      cursor:not-allowed;
    }
  `);
const _l = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", br = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function Rt(e) {
  return Ne(e, br);
}
function kl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p
    ] = j(
      e,
      D("class"),
      H("value", (_) => Rt(_) || Z(_)),
      V("readonly"),
      V("withseconds"),
      H("min", Rt),
      H("max", Rt),
      H("suggestions", (_) => ue(_, Rt)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    l = l ?? !1;
    const m = W(), g = W();
    let f = n ?? Q;
    m.current != null && document.activeElement === m.current ? f = g.current : g.current = f;
    const [b, x] = Z(f) ? [void 0, l || f.disabled] : [f, l], T = X((_) => {
      if (se(_), x == !0)
        return;
      R('DateTimeInput callback "onInput"', u, _);
      const C = _.target.value;
      g.current = C === "" ? Q : C, R(
        'DateTimeInput callback "onValueInput"',
        c,
        C,
        _
      );
    }, [x, u, c]), $ = X((_) => {
      B(), R('DateTimeInput callback "onBlur"', d, _);
    }, [d]), O = Ee(), B = ke();
    let N = "", k;
    return s != null && s.length > 0 && (k = O + "-Suggestions", N = w`<datalist id=${k}>
          ${s.map((_) => w`<option value=${_}></option>`)}
        </datalist>`), w`<input type="datetime-local" class="sim-component datetime-input ${t ?? ""}" ref=${m}
        value=${b} min=${r} max=${a} step=${i ? 1 : 60}
        readOnly=${o} pattern=${$t}
        disabled=${x}
        onInput=${T} onBlur=${$} ...${p}
      />${N}`;
  });
}
U("sim-component.datetime-input", `
    .sim-component.datetime-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.datetime-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.datetime-input:disabled {
      cursor:not-allowed;
    }
  `);
const Il = "\\d{4}-\\d{2}-\\d{2}", wr = /\d{4}-\d{2}-\d{2}/;
function At(e) {
  return Ne(e, wr);
}
function $l(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d
    ] = j(
      e,
      D("class"),
      H("value", (k) => At(k) || Z(k)),
      V("readonly"),
      H("min", At),
      H("max", At),
      H("suggestions", (k) => ue(k, At)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    s = s ?? !1;
    const p = W(), m = W();
    let g = n ?? Q;
    p.current != null && document.activeElement === p.current ? g = m.current : m.current = g;
    const [f, b] = Z(g) ? [void 0, s || g.disabled] : [g, s], x = X((k) => {
      if (se(k), b == !0)
        return;
      R('DateInput callback "onInput"', c, k);
      const _ = k.target.value;
      m.current = _ === "" ? Q : _, R(
        'DateInput callback "onValueInput"',
        l,
        _,
        k
      );
    }, [b, c, l]), T = X((k) => {
      O(), R('DateInput callback "onBlur"', u, k);
    }, [u]), $ = Ee(), O = ke();
    let B = "", N;
    return a != null && a.length > 0 && (N = $ + "-Suggestions", B = w`<datalist id=${N}>
          ${a.map((k) => w`<option value=${k}></option>`)}
        </datalist>`), w`<input type="date" class="sim-component date-input ${t ?? ""}" ref=${p}
        value=${f} min=${i} max=${r}
        readOnly=${o} pattern=${$t}
        disabled=${b}
        onInput=${x} onBlur=${T} ...${d}
      />${B}`;
  });
}
U("sim-component.date-input", `
    .sim-component.date-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.date-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.date-input:disabled {
      cursor:not-allowed;
    }
  `);
const El = "\\d{4}-W\\d{2}", xr = /\d{4}-W\d{2}/;
function Pt(e) {
  return Ne(e, xr);
}
function Sl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d
    ] = j(
      e,
      D("class"),
      H("value", (k) => Pt(k) || Z(k)),
      V("readonly"),
      H("min", Pt),
      H("max", Pt),
      H("suggestions", (k) => ue(k, Pt)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    s = s ?? !1;
    const p = W(), m = W();
    let g = n ?? Q;
    p.current != null && document.activeElement === p.current ? g = m.current : m.current = g;
    const [f, b] = Z(g) ? [void 0, s || g.disabled] : [g, s], x = X((k) => {
      if (se(k), b == !0)
        return;
      R('WeekInput callback "onInput"', c, k);
      const _ = k.target.value;
      m.current = _ === "" ? Q : _, R(
        'WeekInput callback "onValueInput"',
        l,
        _,
        k
      );
    }, [b, c, l]), T = X((k) => {
      O(), R('WeekInput callback "onBlur"', u, k);
    }, [u]), $ = Ee(), O = ke();
    let B = "", N;
    return a != null && a.length > 0 && (N = $ + "-Suggestions", B = w`<datalist id=${N}>
          ${a.map((k) => w`<option value=${k}></option>`)}
        </datalist>`), w`<input type="week" class="sim-component week-input ${t ?? ""}" ref=${p}
        value=${f} min=${i} max=${r}
        readOnly=${o} pattern=${$t}
        disabled=${b}
        onInput=${x} onBlur=${T} ...${d}
      />${B}`;
  });
}
U("sim-component.week-input", `
    .sim-component.week-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.week-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.week-input:disabled {
      cursor:not-allowed;
    }
  `);
const Tl = "\\d{4}-\\d{2}", vr = /\d{4}-\d{2}/;
function Bt(e) {
  return Ne(e, vr);
}
function Ml(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d
    ] = j(
      e,
      D("class"),
      H("value", (k) => Bt(k) || Z(k)),
      V("readonly"),
      H("min", Bt),
      H("max", Bt),
      H("suggestions", (k) => ue(k, Bt)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    s = s ?? !1;
    const p = W(), m = W();
    let g = n ?? Q;
    p.current != null && document.activeElement === p.current ? g = m.current : m.current = g;
    const [f, b] = Z(g) ? [void 0, s || g.disabled] : [g, s], x = X((k) => {
      if (se(k), b == !0)
        return;
      R('MonthInput callback "onInput"', c, k);
      const _ = k.target.value;
      m.current = _ === "" ? Q : _, R(
        'MonthInput callback "onValueInput"',
        l,
        _,
        k
      );
    }, [b, c, l]), T = X((k) => {
      O(), R('MonthInput callback "onBlur"', u, k);
    }, [u]), $ = Ee(), O = ke();
    let B = "", N;
    return a != null && a.length > 0 && (N = $ + "-Suggestions", B = w`<datalist id=${N}>
          ${a.map((k) => w`<option value=${k}></option>`)}
        </datalist>`), w`<input type="month" class="sim-component month-input ${t ?? ""}" ref=${p}
        value=${f} min=${i} max=${r}
        readOnly=${o} pattern=${$t}
        disabled=${b}
        onInput=${x} onBlur=${T} ...${d}
      />${B}`;
  });
}
U("sim-component.month-input", `
    .sim-component.month-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.month-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.month-input:disabled {
      cursor:not-allowed;
    }
  `);
function Ll(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g,
      f
    ] = j(
      e,
      D("class"),
      H("value", (E) => ce(E) || Z(E)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      D("pattern"),
      V("spellcheck"),
      H("suggestions", (E) => ue(E, ce)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    d = d ?? !1;
    const b = W(), x = W();
    let T = n ?? Q;
    b.current != null && document.activeElement === b.current ? T = x.current : x.current = T;
    const [$, O, B] = Z(T) ? [void 0, T === Q ? i ?? T.Placeholder : T.Placeholder, d || T.disabled] : [T, i, d], N = X((E) => {
      if (se(E), B == !0)
        return;
      R('SearchInput callback "onInput"', m, E);
      const K = E.target.value;
      x.current = K === "" ? Q : K, R(
        'SearchInput callback "onValueInput"',
        p,
        K,
        E
      );
    }, [B, m, p]), k = X((E) => {
      C(), R('SearchInput callback "onBlur"', g, E);
    }, [g]), _ = Ee(), C = ke();
    let v = "", h;
    return u != null && u.length > 0 && (h = _ + "-Suggestions", v = w`<datalist id=${h}>
          ${u.map((E) => w`<option value=${E}></option>`)}
        </datalist>`), w`<input type="search" class="sim-component search-input ${t ?? ""}" ref=${b}
        value=${$} minlength=${a} maxlength=${s}
        readOnly=${r} placeholder=${O}
        pattern=${l} spellcheck=${c}
        disabled=${B} list=${h}
        onInput=${N} onBlur=${k} ...${f}
      />${v}`;
  });
}
U("sim-component.search-input", `
    .sim-component.search-input {
      height:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.search-input:invalid, .sim-component.sim-search-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.search-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.search-input:disabled {
      cursor:not-allowed;
    }
  `);
function Dl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c
    ] = j(
      e,
      D("class"),
      H("value", (f) => ce(f) || Z(f)),
      D("placeholder"),
      V("multiple"),
      D("accept"),
      V("disabled"),
      M("onvalueinput"),
      M("oninput")
    );
    a = a ?? !1;
    let u = n ?? Q;
    const [d, p, m] = Z(u) ? [void 0, u === Q ? o ?? u.Placeholder : u.Placeholder, a || u.disabled] : [u, o, a], g = X((f) => {
      if (se(f), m == !0)
        return;
      R('FileInput callback "onInput"', l, f);
      let b = Array.from(f.target.files);
      R(
        'FileInput callback "onValueInput"',
        s,
        b,
        f
      ), f.target.value = "";
    }, [m, l, s]);
    return w`<label class="sim-component file-input ${t ?? ""}">
        ${d == null ? w`<span>${p ?? ""}</span>` : w`<span>${d}</span>`}
        <input type="file" style="display:none"
          multiple=${i} accept=${r}
          disabled=${m} onInput=${g} ...${c}
        />
      </label>`;
  });
}
U("sim-component.file-input", `
    .sim-component.file-input {
      height:30px;
        min-width:60px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }
    .sim-component.file-input > * {
      width:100%;
    }

    .sim-component.file-input > input:disabled {
      cursor:not-allowed;
    }
  `);
function Nl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u
    ] = j(
      e,
      D("class"),
      fe("style"),
      Ko("icon"),
      sn("color"),
      V("multiple"),
      D("accept"),
      V("disabled"),
      M("onvalueinput"),
      M("oninput")
    );
    s = s ?? !1;
    const d = X((p) => {
      if (se(p), s == !0)
        return;
      R('PseudoFileInput callback "onInput"', c, p);
      let m = Array.from(p.target.files);
      R(
        'PseudoFileInput callback "onValueInput"',
        l,
        m,
        p
      ), p.target.value = "";
    }, [s, c, l]);
    return w`<label
        class="sim-component pseudo-file-input ${s ? "disabled" : ""} ${t ?? ""}"
      >
        <div style="${n ?? ""};
          -webkit-mask-image:url(${o}); mask-image:url(${o});
          background-color:${i ?? "black"};
        "/>
        <input type="file" style="display:none"
          multiple=${r} accept=${a}
          disabled=${s} onInput=${d} ...${u}
        />
      </label>`;
  });
}
U("sim-component.pseudo-file-input", `
    .sim-component.pseudo-file-input {
      display:flex ! important; justify-content:center; align-items:center;
      overflow:hidden;
    }
    .sim-component.pseudo-file-input > div {
      display:block; position:relative;
      width:24px; height:24px;
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
    }

    .sim-component.pseudo-file-input > div.disabled {
      cursor:not-allowed;
    }
  `);
function Cl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c
    ] = j(
      e,
      D("class"),
      fe("style"),
      H("value", (x) => Ft(x) || Z(x)),
      V("readonly"),
      H("suggestions", (x) => ue(x, Ft)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput")
    );
    a = a ?? !1;
    const [u, d] = Z(o) ? [void 0, a || o.disabled] : [o, a], p = X((x) => {
      if (se(x), d == !0)
        return;
      R('ColorInput callback "onInput"', l, x);
      const T = x.target.value;
      R(
        'ColorInput callback "onValueInput"',
        s,
        T,
        x
      );
    }, [d, l, s]);
    let m = 40;
    const g = Ee();
    let f = "", b;
    return r != null && r.length > 0 && (b = g + "-Suggestions", m += 20, f = w`<datalist id=${b}>
          ${r.map((x) => w`<option value=${x}></option>`)}
        </datalist>`), w`<input type="color" class="sim-component color-input ${t ?? ""}"
        style="min-width:${m}px; ${n}"
        value=${u} readOnly=${o} list=${b}
        disabled=${d} onInput=${p} ...${c}
      />${f}`;
  });
}
U("sim-component.color-input", `
    .sim-component.color-input {
      height:30px;
        min-width:40px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
    }

    .sim-component.color-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.color-input:disabled {
      cursor:not-allowed;
    }
  `);
function Ol(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s
    ] = j(
      e,
      D("class"),
      H("value", (d) => ce(d) || Z(d)),
      rn("options", (d) => ue(d, ce)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput")
    );
    i = i ?? !1, o = o ?? [];
    const [l, c] = Z(n) ? [void 0, i || n.disabled] : [n, i], u = X((d) => {
      if (se(d), c == !0)
        return;
      R('DropDown callback "onInput"', a, d);
      let p = d.target.value;
      R(
        'DropDown callback "onValueInput"',
        r,
        p,
        d
      );
    }, [c, a, r]);
    return w`<select class="sim-component dropdown ${t ?? ""}"
        disabled=${c} onInput=${u} ...${s}
      >${o.map(
      (d) => {
        let p = d.replace(/:.*$/, "").trim(), m = d.replace(/^[^:]*:/, "").trim();
        const g = m[0] === "-";
        return /^[-]+$/.test(m) ? w`<hr/>` : (p === d && (p = p.replace(/^-/, "")), g && (m = m.replace(/^-/, "")), w`<option value=${p}
              selected=${p === l} disabled=${g}
            >${m}</option>`);
      }
    )}</select>`;
  });
}
U("sim-component.dropdown", `
    .sim-component.dropdown {
      height:30px;
        min-width:30px;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:0px 2px 0px 2px;
      line-height:28px;
    }

    .sim-component.dropdown:disabled {
      cursor:not-allowed;
    }
  `);
function Rl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u
    ] = j(
      e,
      D("class"),
      fe("style"),
      H("value", (g) => ce(g) || Z(g)),
      Ko("icon"),
      sn("color"),
      rn("options", (g) => ue(g, ce)),
      V("disabled"),
      M("onvalueinput"),
      M("oninput")
    );
    s = s ?? !1;
    const [d, p] = Z(o) ? [void 0, s || o.disabled] : [o, s], m = X((g) => {
      if (se(g), p == !0)
        return;
      R('PseudoDropDown callback "onInput"', c, g);
      let f = g.target.value;
      R(
        'PseudoDropDown callback "onValueInput"',
        l,
        f,
        g
      );
    }, [p, c, l]);
    return w`<label
        class="sim-component pseudo-dropdown ${s ? "disabled" : ""} ${t ?? ""}"
      >
        <div style="${n ?? ""};
          -webkit-mask-image:url(${i}); mask-image:url(${i});
          background-color:${r ?? "black"};
        "/>
        <select
          disabled=${p} onInput=${m} ...${u}
        >${a.map(
      (g) => {
        let f = g.replace(/:.*$/, "").trim(), b = g.replace(/^[^:]*:/, "").trim();
        const x = b[0] === "-";
        return /^[-]+$/.test(b) ? w`<hr/>` : (f === g && (f = f.replace(/^-/, "")), x && (b = b.replace(/^-/, "")), w`<option value=${f}
                selected=${f === d} disabled=${x}
              >${b}</option>`);
      }
    )}</select>
      </label>`;
  });
}
U("sim-component.pseudo-dropdown", `
    .sim-component.pseudo-dropdown {
      display:flex ! important; justify-content:center; align-items:center;
      overflow:hidden;
    }
    .sim-component.pseudo-dropdown > div {
      display:block; position:relative;
      width:24px; height:24px;
      -webkit-mask-size:contain;           mask-size:contain;
      -webkit-mask-position:center center; mask-position:center center;
    }
    .sim-component.pseudo-dropdown > select {
      display:block; position:absolute;
      left:0px; top:0px; right:0px; bottom:0px;
      opacity:0.01;
    }

    .sim-component.pseudo-dropdown > select:disabled {
      cursor:not-allowed;
    }
  `);
function Al(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g,
      f,
      b
    ] = j(
      e,
      D("class"),
      fe("style"),
      H("value", (h) => kn(h) || Z(h)),
      V("invalid"),
      D("placeholder"),
      V("readonly"),
      re("minlength"),
      re("maxlength"),
      V("wrap"),
      H("resizability", (h) => ze(h, ["none", "horizontal", "vertical", "both"])),
      V("spellcheck"),
      V("disabled"),
      M("onvalueinput"),
      M("oninput"),
      M("onblur")
    );
    p = p ?? !1;
    const x = W(), T = W();
    let $ = o ?? Q;
    x.current != null && document.activeElement === x.current ? $ = T.current : T.current = $;
    const [O, B, N] = Z($) ? [void 0, $ === Q ? r ?? $.Placeholder : $.Placeholder, p || $.disabled] : [$, r, p], k = X((h) => {
      if (se(h), N == !0)
        return;
      R('TextInput callback "onInput"', g, h);
      const E = h.target.value;
      T.current = E === "" ? Q : E, R(
        'TextInput callback "onValueInput"',
        m,
        E,
        h
      );
    }, [N, g, m]), _ = X((h) => {
      C(), R('TextInput callback "onBlur"', f, h);
    }, [f]), C = ke(), v = Ee();
    return w`<textarea class="sim-component text-input ${t ?? ""}"
        key=${v} ref=${x}
        style="${c == !0 ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${u ?? "none"}; ${n}"
        value=${O} minlength=${s} maxlength=${l}
        readOnly=${a} placeholder=${B}
        spellcheck=${d} disabled=${N}
        onInput=${k} onBlur=${_} ...${b}
      />`;
  });
}
U("sim-component.text-input", `
    .sim-component.text-input {
      resize:none;
      border:solid 1px #888888; border-radius:2px;
      background:#e8f0ff;
      padding:4px 2px 0px 2px;
    }

    .sim-component.text-input:invalid, .sim-component.sim-text-input.invalid {
      text-decoration:underline wavy red 1px;
    }

    .sim-component.text-input:read-only {
      border:solid 1px #DDDDDD; border-radius:2px;
      background:#F0F0F0;
    }

    .sim-component.text-input:disabled {
      cursor:not-allowed;
    }
  `);
function Pl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s
    ] = j(
      e,
      D("class"),
      re("activeindex"),
      re("gapindex"),
      V("disabled"),
      M("onactivationchange")
    );
    const l = W(n ?? 0), c = W(n ?? 0);
    n != null && n !== l.current ? c.current = n : n = c.current;
    const u = X((m, g) => {
      if (i)
        return Rn(g);
      c.current = n = m, d(), R('TabStrip callback "onActivationChange"', r, m);
    }, [i, r]), d = ke(), p = In(s).filter(
      (m) => m.type != null || m.trim() !== ""
    );
    return w`<div class="sim-component tabstrip ${t ?? ""}" ...${a}>
        ${p.map((m, g) => {
      const f = g === o ? w`<div class="gap"/>` : "";
      return g === n ? w`${f}<div class="active tab">${m}</>` : w`${f}<div class="${i ? "disabled" : ""} tab"
            onClick=${(b) => u(g, b)}>${m}</>`;
    })}
      </>`;
  });
}
U("sim-component.tabstrip", `
    .sim-component.tabstrip {
      display:flex ! important; flex-flow:row nowrap; align-items:center;
      font-size:14px; font-weight:bold;
    }

    .sim-component.tabstrip > .gap {
      flex:1 0 auto;
    }

    .sim-component.tabstrip > .tab {
      display:inline-block; position:relative;
      margin:4px 0px 4px 0px;
      border:none; border-bottom:solid 2px transparent;
      cursor:pointer; pointer-events:auto;
    }
    .sim-component.tabstrip > .tab:not(:first-child) {
      margin-left:20px;
    }
    .sim-component.tabstrip > .active.tab {
      border-bottom:solid 2px gray;
    }
    .sim-component.tabstrip > .disabled.tab {
      pointer-events:none;
    }
  `);
function Bl(e) {
  return G(() => {
    let [
      t,
      n,
      o,
      i,
      r,
      a,
      s
    ] = j(
      e,
      D("class"),
      sr("header"),
      V("expanded"),
      V("disabled"),
      M("onexpansionchange")
    );
    i = i ?? !1;
    const l = W(o ?? !1), c = W(o ?? !1);
    o != null && o !== l.current ? c.current = o : o = c.current;
    const u = X((p) => {
      se(p), i != !0 && (c.current = o = !o, d(), R('Fold callback "onExpansionChange"', r, o));
    }, [i, r]), d = ke();
    return w`<div class="sim-component accordion-fold ${t ?? ""}">
        <div class="header">
          <div class="expander ${o ? "expanded" : "collapsed"}" onClick=${u}/>
          <div class="title">${n}</>
        </>${o ? w`<div class="content">${s}</>` : ""}
      </>`;
  });
}
U("sim-component.accordion-fold", `
    .sim-component.accordion-fold {
      display:inline-block; position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:100%; height:auto;
    }

    .sim-component.accordion-fold > .header {
      display:flex; flex-flow:row nowrap; align-items:center;
      position:relative; left:0px; top:0px; width:100%; height:30px;
      border:none; background:#EEEEEE;
      border-top:   solid 1px #FFFFFF;
      border-bottom:solid 1px #AAAAAA;
      pointer-events:none;
    }
    .sim-component.accordion-fold > .header > .expander {
      display:inline-block;
      position:relative; width:24px; height:24px;
      margin:3px 4px 3px 2px;
      border:none;
      cursor:pointer;
      user-select:none; pointer-events:auto;
    }
    .sim-component.accordion-fold > .header > .expander.expanded {
      background:url(${yn}/caret-down.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .sim-component.accordion-fold > .header > .expander.collapsed {
      background:url(${yn}/caret-right.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .sim-component.accordion-fold > .header > .title {
      display:inline-block;
      position:relative; width:auto; height:24px;
      margin:3px 4px 3px 4px;
      font-size:14px; font-weight:bold; color:black; line-height:24px;
    }

    .sim-component.accordion-fold > .content {
      display:inline-block;
      position:relative; width:100%; height:auto;
    }
  `);
let nt = 0;
const ot = /* @__PURE__ */ new WeakMap();
function yr(e, t, n) {
  return ot.has(e) ? "" + ot.get(e) : (nt++, ot.set(e, nt), "" + nt);
}
function _r(e, t, n, o = !1, i = "") {
  return typeof e.toHTML == "function" ? w`<div class="default" dangerouslySetInnerHTML=${{ __html: e.toHTML() }}/>` : w`<div class="default">${"" + e}</>`;
}
function Vl(e) {
  return G(() => {
    const [t] = en();
    let [
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p
    ] = j(
      e,
      D("class"),
      rn("list", (v) => ue(v, Re)),
      D("placeholder"),
      M("keyoflistitem"),
      M("listitemrenderer"),
      M("onlistitemclick"),
      H("selecteditems", (v) => ue(v, Re)),
      re("selectionlimit"),
      M("onselectionchange"),
      M("onlistitemmove")
    );
    const m = u != null, g = m && d != null, f = /* @__PURE__ */ new Set();
    o.forEach((v) => {
      f.has(v) && Ie(
        'InvalidArguments: the given "List" contains double entries'
      ), f.add(v);
    }), r = r ?? yr, a = a ?? _r;
    const b = /* @__PURE__ */ new Set();
    m && (l == null ? l = [] : l = l.filter((v) => b.has(v) ? !1 : (b.add(v), !0)), l.length > c && (l.slice(c).forEach(
      (v) => b.delete(v)
    ), l.length = c));
    const [x, T] = pt({
      dragging: !1,
      DropTargetIndex: void 0,
      DropMode: void 0
    });
    function $(v) {
      T((h) => ({ ...h, ...v }));
    }
    const O = (v) => {
      v.stopImmediatePropagation();
      const h = v.target.Item, E = v.target.Index;
      if (R(
        'FlatListView callback "onListItemClick"',
        s,
        h,
        o,
        E,
        v
      ), m) {
        const K = v.pointerType !== "mouse" || v.ctrlKey || v.metaKey;
        B(h, o, E, K);
      }
    }, B = (v, h, E, K) => {
      if (c === 0)
        return;
      let ne = l;
      if (K)
        if (b.has(v))
          ne = l.filter(
            (ee) => ee !== v
          );
        else {
          if (l.length === c)
            return;
          ne = [...l, v];
        }
      else
        ne = [v];
      R(
        'FlatListView callback "onSelectionChange"',
        u,
        ne,
        h
      );
    }, N = X((v) => {
      const h = v.target.Item, E = v.target.Index;
      if (!b.has(h)) {
        const K = (
          /* (Event.pointerType !== 'mouse') ||*/
          v.ctrlKey || v.metaKey
        );
        B(h, o, E, K);
      }
      v.dataTransfer.effectAllowed = "move", $({ dragging: !0 });
    }, [o, b, B]), k = (v) => {
      const h = v.target.Item, E = v.target.Index, K = v.target, ne = K.getBoundingClientRect().top + K.offsetHeight / 2, ee = v.clientY < ne ? "before" : "after";
      b.has(h) ? x.DropTargetItem != null && $({ DropTargetItem: void 0, DropMode: void 0 }) : (v.preventDefault(), (x.DropTargetItem !== h || x.DropMode !== ee) && $({ DropTargetItem: h, DropMode: ee }));
    }, _ = (v) => {
      $({ dragging: !1, DropTargetItem: void 0 });
    }, C = (v) => {
      let { DropTargetItem: h, DropMode: E } = x;
      if (h != null) {
        const K = l.length, ne = o.filter(
          // in original order!
          (A) => b.has(A)
        ), ee = o.filter(
          (A) => !b.has(A)
        ), y = ee.indexOf(h) + (E === "before" ? 0 : 1);
        ee.splice(y, 0, ...ne), o = ee, R(
          'FlatListView callback "onListItemMove"',
          d,
          o,
          ne,
          h,
          E
        );
      }
    };
    if (o.length === 0)
      return w`<div class="sim-component flatlistview placeholder ${n ?? ""}" ...${p}>
          <div dangerouslySetInnerHTML=${{ __html: i ?? "(empty)" }}/>
        </>`;
    {
      const { dragging: v, DropTargetItem: h, DropMode: E } = x;
      return w`<div class="sim-component flatlistview ${v ? "dragging" : ""} ${n ?? ""}"
              onClick=${O}
          onDragStart=${g && N}
           onDragOver=${g && k}
            onDragEnd=${g && _}
               onDrop=${g && C}
          ref=${t} ...${p}
        >
          ${o.map((K, ne) => {
        const ee = W();
        rt(() => {
          ee.current.Item = K, ee.current.Index = ne;
        }, []);
        const y = we(
          'FlatListView callback "KeyOfListItem"',
          r,
          K,
          o,
          ne
        ), A = b.has(K), P = K === h ? E : "";
        return w`<div class=${"itemview" + (A ? " selected" : "") + (K === h ? ` DropTarget ${E}` : "")} key=${y} ref=${ee} draggable=${g}>
              ${we(
          'FlatListView callback "ListItemRenderer"',
          a,
          K,
          o,
          ne,
          A,
          P
        )}
            </>`;
      })}
        </>`;
    }
  });
}
U("sim-component.flatlistview", `
    .sim-component.flatlistview {
      display:flex ! important; flex-flow:column nowrap; align-items:stretch;
      overflow-x:auto; overflow-y:scroll;
      border:solid 1px #888888; border-radius:2px;
      background:#DDDDDD; padding:0px;
    }

    .sim-component.flatlistview > .itemview {
      display:block; position:relative; overflow:hidden; flex:0 0 auto;
      left:0px; top:0px; width:100%; height:auto; line-height:22px;
      background:white; color:black;
      border:none; border-bottom:solid 1px lightgray;
      padding:2px 4px 2px 4px;
      white-space:nowrap; text-overflow:ellipsis;
      user-select:none; pointer-events:auto;
    }
    .sim-component.flatlistview > .itemview:last-child {
      border:none; border-bottom:solid 1px transparent;
    }

    .sim-component.flatlistview > .itemview > .default {
      height:30px; line-height:29px; overflow:hidden; text-overflow:ellipsis;
      padding-left:4px; padding-right:4px;
    }

    .sim-component.flatlistview > .itemview * {
      pointer-events:none;
    }

    .sim-component.flatlistview > .itemview.selected {
      background:dodgerblue; color:white;
    }
    .sim-component.flatlistview.dragging > .itemview.selected {
      opacity:0.3;
    }

    .sim-component.flatlistview > .itemview.before {
      border-top:solid 20px #DDDDDD;
    }
    .sim-component.flatlistview > .itemview.after {
      border-bottom:solid 21px #DDDDDD;
    }

    .sim-component.flatlistview.placeholder {
      display:flex; flex-flow:column nowrap; align-items:center; justify-content:center;
      flex:1 0 auto; overflow:hidden;
      background-color:#EEEEEE;
    }
    .sim-component.flatlistview.placeholder > * {
      display:inline-block; position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function kr(e) {
  return ot.has(e) ? "" + ot.get(e) : (nt++, ot.set(e, nt), "" + nt);
}
function Ir(e, t = !1, n = !1, o = !1, i = "") {
  return typeof e.toHTML == "function" ? w`<div class="default" dangerouslySetInnerHTML=${{ __html: e.toHTML() }}/>` : w`<div class="default">${"" + e}</>`;
}
function zl(e) {
  return G(() => {
    const [t] = en();
    let [
      n,
      o,
      i,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      m,
      g,
      f,
      b,
      x,
      T,
      $
    ] = j(
      e,
      D("class"),
      rn("list", (S) => ue(S, Re)),
      D("placeholder"),
      M("keyoflistitem"),
      M("listitemrenderer"),
      M("contentoflistitem"),
      M("containeroflistitem"),
      M("onlistitemclick"),
      M("itemmaybeselected"),
      H("selecteditems", (S) => ue(S, Re)),
      re("selectionlimit"),
      M("onselectionchange"),
      M("itemmaybeexpanded"),
      H("expandeditems", (S) => ue(S, Re)),
      M("onexpansionchange"),
      M("listitemmayaccept"),
      M("onlistitemmove")
    );
    const O = m != null, B = O && T != null, N = /* @__PURE__ */ new Set();
    function k(S) {
      S.forEach((z) => {
        N.has(z) && Ie(
          'InvalidArguments: the given "List" contains double entries'
        ), N.add(z);
        const I = we(
          'NestedListView callback "ContentOfListItem"',
          s,
          z
        );
        I != null && k(I);
      });
    }
    k(o);
    const _ = W([]), C = W(() => !0);
    r = r ?? kr, a = a ?? Ir, u = u ?? C.current, g = g ?? C.current, f = f ?? _.current, x = x ?? C.current;
    function v(S, z) {
      let I = we(
        'NestedListView callback "ContainerOfListItem"',
        l,
        z
      );
      switch (I) {
        case null:
        case void 0:
          return !1;
        case S:
          return !0;
        default:
          return v(S, I);
      }
    }
    const h = /* @__PURE__ */ new Set();
    if (O) {
      if (d == null)
        d = [];
      else {
        d = d.filter((S) => h.has(S) ? !1 : (h.add(S), !0));
        for (let S = d.length - 1; S >= 0; S--) {
          const z = d[S];
          d.some((I, de) => de !== S && v(I, z)) && (d.splice(S, 1), h.delete(z));
        }
      }
      d.length > p && (d.slice(p).forEach(
        (S) => h.delete(S)
      ), d.length = p);
    }
    function E(S) {
      return d.some(
        (z) => v(z, S)
      );
    }
    function K(S) {
      for (let z = d.length - 1; z >= 0; z--) {
        const I = d[z];
        v(S, I) && (d.splice(z, 1), h.delete(I));
      }
    }
    function ne(S, z) {
      if (p === 0)
        return;
      let I = d;
      if (z)
        if (h.has(S))
          I = d.filter(
            (de) => de !== S
          );
        else {
          if (d.length === p)
            return;
          I = [...d.filter(
            (de) => !v(S, de)
          ), S];
        }
      else
        I = [S];
      R(
        'NestedListView callback "onSelectionChange"',
        m,
        I
      );
    }
    const ee = kt(() => {
      const S = /* @__PURE__ */ new Map();
      return f == null ? f = [] : f = f.filter((z) => S.has(z) ? !1 : (S.set(z, "explicit"), !0)), S;
    }, [f]);
    function y(S) {
      ee.has(S) ? P(S) : A(S);
    }
    function A(S) {
      ee.set(S, "explicit");
      let z = [...f, S], I = we(
        'NestedListView callback "ContainerOfListItem"',
        l,
        S
      );
      for (; I != null; )
        ee.has(I) || (ee.set(I, "explicit"), z.push(I)), I = we(
          'NestedListView callback "ContainerOfListItem"',
          l,
          I
        );
      R(
        'NestedListView callback "onExpansionChange"',
        b,
        z
      );
    }
    function P(S) {
      ee.delete(S);
      const z = f.filter(
        (I) => I !== S
      );
      R(
        'NestedListView callback "onExpansionChange"',
        b,
        z
      );
    }
    function q(S) {
      ee.has(S) || ee.set(S, "automatic");
      let z = we(
        'NestedListView callback "ContainerOfListItem"',
        l,
        S
      );
      for (; z != null; )
        ee.has(z) || ee.set(z, "automatic"), z = we(
          'NestedListView callback "ContainerOfListItem"',
          l,
          z
        );
    }
    function te(S) {
      ee.get(S) === "automatic" && ee.delete(S);
      let z = we(
        'NestedListView callback "ContainerOfListItem"',
        l,
        S
      );
      for (; z != null; )
        ee.get(z) === "automatic" && ee.delete(z), z = we(
          'NestedListView callback "ContainerOfListItem"',
          l,
          z
        );
    }
    const ie = W(new Object(null)), he = W({
      dragging: !1,
      DropTargetItem: void 0,
      DropMode: void 0,
      DropTargetTimer: void 0
    });
    function Te(S) {
      const z = S.target.getAttribute("data-key"), I = ie.current[z];
      I != null && (h.has(I) || ne(I, S.shiftKey || S.metaKey), S.dataTransfer.effectAllowed = "move", Y.State.dragging = !0, Y.State.DropTargetItem = void 0, Y.State.DropTargetTimer = void 0, De());
    }
    function xe(S) {
      const z = S.target.getAttribute("data-key"), I = ie.current[z], { DropTargetItem: de } = Y.State;
      if (de === I)
        S.preventDefault(), Tt(S, I);
      else {
        if (de != null && Mt(S), I == null)
          return;
        if (!h.has(I) && !E(I)) {
          if (we(
            'NestedListView callback "ListItemMayAccept"',
            Y.ListItemMayAccept,
            I,
            d
          ) != !0)
            return;
          S.preventDefault(), St(S, I);
        }
      }
    }
    const Me = xe;
    function ft(S) {
      const z = S.target.getAttribute("data-key"), I = ie.current[z], { DropTargetItem: de } = Y.State;
      (de === I || I == null) && Mt(S);
    }
    function Et(S) {
      ft(S), Y.State.dragging = !1, Y.State.DropMode = void 0, De();
    }
    function St(S, z) {
      const { DropTargetTimer: I } = Y.State;
      I != null && (clearTimeout(I), Y.State.DropTargetTimer = void 0), Y.State.DropTargetItem = z, Y.State.DropTargetTimer = setTimeout(() => {
        Y.State.DropTargetTimer = void 0, Y.State.DropMode === "after" && (q(z), De());
      }, 2e3);
      let de = we(
        'NestedListView callback "ContainerOfListItem"',
        l,
        z
      );
      de != null && (q(de), De()), Tt(S, z);
    }
    function Tt(S, z) {
      const I = S.target.getBoundingClientRect().top + S.target.offsetHeight / 2, de = S.clientY < I ? "before" : "after";
      Y.State.DropMode !== de && (de === "after" && Y.State.DropTargetTimer == null && (Y.State.DropTargetTimer = setTimeout(() => {
        Y.State.DropTargetTimer = void 0, Y.State.DropMode === "after" && (q(z), De());
      }, 2e3)), Y.State.DropMode = de, De());
    }
    function Mt(S) {
      const { DropTargetItem: z, DropTargetTimer: I } = Y.State;
      I != null && (clearTimeout(I), Y.State.DropTargetTimer = void 0), z != null && (te(z), Y.State.DropTargetItem = void 0), setTimeout(De, 500);
    }
    function un(S) {
      let { DropTargetItem: z, DropMode: I } = Y.State;
      z != null && (R(
        'NestedListView callback "onListItemMove"',
        T,
        d,
        z,
        I
      ), Y.State.dragging = !1, Y.State.DropTargetItem = void 0, Y.State.DropMode = void 0);
    }
    const [dn, Je] = pt({ Rendering: 0 });
    function De() {
      Je((S) => ({ Rendering: S.Rendering + 1 }));
    }
    const Y = {
      List: o,
      ListIsSortable: B,
      KeyOfListItem: r,
      ListItemRenderer: a,
      ContentOfListItem: s,
      ListIsSelectable: O,
      ListItemMayBeSelected: u,
      onListItemClick: c,
      SelectionSet: h,
      anyOuterItemIsSelected: E,
      changeSelection: ne,
      ExpansionMap: ee,
      ListItemMayBeExpanded: g,
      toggleExpansionOf: y,
      ListItemWithKey: ie.current,
      ListItemMayAccept: x,
      State: he.current,
      rerender: De
    };
    if (o.length === 0)
      return w`<div class="sim-component nestedlistview placeholder ${n ?? ""}" ...${$}>
          <div dangerouslySetInnerHTML=${{ __html: i ?? "(empty)" }}/>
        </>`;
    {
      const { dragging: S } = Y.State;
      return w`<div class="sim-component nestedlistview ${S ? "dragging" : ""}"
          onDragStart=${Te} onDragEnter=${xe} onDragOver=${Me}
          onDragLeave=${ft} onDragEnd=${Et} onDrop=${un}
          ref=${t} ...${$}
        >
          <${Yo} List=${o}
            ListContext=${Y} Rendering=${dn.Rendering}
          />
        </>`;
    }
  });
}
U("sim-component.nestedlistview", `
    .sim-component.nestedlistview {
      overflow-x:auto; overflow-y:scroll;
      border:solid 1px #888888; border-radius:2px;
      background:#DDDDDD; padding:0px;
    }

  /**** actual ListView ****/

    .sim-component.nestedlistview .listview {
      display:flex; position:relative; flex-flow:column nowrap; align-items:stretch;
      overflow:visible;
      margin:0px; margin-left:10px;
    }
    .sim-component.nestedlistview > .listview {
      margin-left:0px;
    }

  /**** full ListItemView ****/

    .sim-component.nestedlistview .listitemview {
      display:block; position:relative; overflow:hidden; flex:0 0 auto;
      left:0px; top:0px; width:100%; height:auto; line-height:0px;
      background:white; color:black;
      border:none;
      white-space:nowrap; text-overflow:ellipsis;
      user-select:none; pointer-events:auto;
    }

  /**** LabelLine in ListItemView ****/

    .sim-component.nestedlistview .listitemview > .labelline {
      display:block; position:relative;
      width:100%;
      border:none;
      pointer-events:none;
    }
    .sim-component.nestedlistview .listitemview:not(:last-child) > .labelline {
      border-bottom:solid 1px lightgray;
    }

    .sim-component.nestedlistview .listitemview.before > .labelline {
      border-top:solid 20px #DDDDDD;
    }
    .sim-component.nestedlistview .listitemview.after > .labelline {
      border-bottom:solid 21px #DDDDDD;
    }

  /**** LabelLine ExpansionMarker ****/

    .sim-component.nestedlistview .listitemview > .labelline > .expansion-marker {
      display:inline-block; position:absolute;
      left:0px; top:0px; width:20px; height:30px; text-align:center;
      background:none !important;
      font-family:FontAwesome; font-size:22px; line-height:29px;
      pointer-events:auto;
    }
    .sim-component.nestedlistview .listitemview > .labelline > .expansion-marker.plain::after     { content:"\\f10c"; font-size:14px; position:relative; top:-3px }
    .sim-component.nestedlistview .listitemview > .labelline > .expansion-marker.collapsed::after { content:"\\f0da" }
    .sim-component.nestedlistview .listitemview > .labelline > .expansion-marker.expanded::after  { content:"\\f0d7" }

  /**** LabelLine LabelView ****/

    .sim-component.nestedlistview .listitemview > .labelline > .labelview {
      display:inline-block; position:relative;
      left:20px; top:0px; right:0px; bottom:0px;
      padding:0px; padding-left:4px; padding-right:4px;
      overflow:hidden; text-overflow:ellipsis;
      white-space:nowrap; line-height:30px;
    }
    .sim-component.nestedlistview .listitemview.selected > .labelline {
      background-color:dodgerblue; color:white;
    }
    .sim-component.nestedlistview .listitemview.selected > .listview .labelline {
      background-color:rgba(30,144,255, 0.3); color:black;
    }

  /**** Default LabelView ****/

    .sim-component.nestedlistview .listitemview > .labelline > .labelview > .default {
      height:30px; line-height:29px; overflow:hidden; text-overflow:ellipsis;
      padding-left:4px; padding-right:4px;
    }

  /**** Placeholder ****/

    .sim-component.nestedlistview.placeholder {
      display:flex; flex-flow:column nowrap; align-items:center; justify-content:center;
      flex:1 0 auto; overflow:hidden;
      background-color:#EEEEEE;
    }
    .sim-component.nestedlistview.placeholder > * {
      display:inline-block; position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Yo(e) {
  const [t] = en(), { List: n, ListContext: o, Rendering: i } = e;
  if (n == null)
    debugger;
  return w`<div class="listview" ref=${t}>${n.map((r) => w`<${$r}
        ListItem=${r} ListContext=${o} Rendering=${i}
      />`)}</>`;
}
function $r(e) {
  const [t] = en(), { ListItem: n, ListContext: o, Rendering: i } = e, { KeyOfListItem: r, ContentOfListItem: a } = o, s = we(
    'NestedListView callback "ContentOfListItem"',
    o.ContentOfListItem,
    n
  ), l = s == null, c = o.ExpansionMap.has(n), u = o.SelectionSet.has(n), d = we(
    'NestedListView callback "KeyOfListItem"',
    r,
    n
  );
  rt(() => {
    o.ListItemWithKey[d] = n;
  }, []);
  const p = (N) => {
    if (N.stopPropagation(), R(
      'NestedListView callback "onListItemClick"',
      o.onListItemClick,
      n,
      N
    ), !o.anyOuterItemIsSelected(n) && o.ListIsSelectable) {
      if (we(
        'NestedListView callback "ListItemMayBeSelected"',
        o.ListItemMayBeSelected,
        n
      ) != !0)
        return;
      const k = N.pointerType !== "mouse" || N.ctrlKey || N.metaKey;
      o.changeSelection(n, k);
    }
  }, m = (N) => {
    N.stopPropagation(), we(
      'NestedListView callback "ContentOfListItem"',
      a,
      n
    ) != null && (o.toggleExpansionOf(n), o.rerender());
  };
  let g = l ? "plain" : c ? "expanded" : "collapsed", f = we(
    'NestedListView callback "ListItemMayBeExpanded"',
    o.ListItemMayBeExpanded,
    n
  );
  const b = w`<div
      class="expansion-marker ${g} ${f ? "" : "disabled"}"
      onClick=${f && m}
    />`, x = !l && c && !(o.State.dragging && u) ? w`<${Yo} List=${s}
          ListContext=${o} Rendering=${i}
        />` : "", { DropTargetItem: T, DropMode: $ } = o.State, O = n === T, B = o.ListIsSortable;
  return w`<div class=${"listitemview" + (u ? " selected" : "") + (O ? ` DropTarget ${$}` : "")} ref=${t} key=${d} data-key=${d}
        draggable=${B} onClick=${p}
    > <div class="labelline">
        ${b}
        <div class="labelview">${o.ListItemRenderer(
    n,
    u,
    l,
    c,
    O ? $ : ""
  )}</>
      </>
      ${x}
    </>`;
}
function se(e, t = !1) {
  e.stopPropagation(), t == !0 && e.preventDefault();
}
const Rn = se;
function R(e, t, ...n) {
  if (ni("callback description", e), Oe("callback", t), t != null)
    try {
      return t(...n);
    } catch (o) {
      Ie(`CallbackFailure: ${e} failed with ${"" + o}`);
    }
}
const we = R;
function _n(e) {
  if (e === null || typeof e != "object")
    return e;
  if (Array.isArray(e))
    return e.map(_n);
  const t = {};
  for (const n in e)
    e.hasOwnProperty(n) && (t[n] = _n(e[n]));
  return t;
}
export {
  Bl as AccordionFold,
  cl as Button,
  ul as Checkbox,
  Cl as ColorInput,
  $l as DateInput,
  kl as DateTimeInput,
  Js as Description,
  Ol as DropDown,
  Us as Dummy,
  wl as EMailAddressInput,
  ll as FAIcon,
  Dl as FileInput,
  Qs as Fineprint,
  Vl as FlatListView,
  pl as Gauge,
  tl as HTMLView,
  sl as Icon,
  ol as ImageView,
  Ys as Label,
  cn as MarkdownRenderer,
  nl as MarkdownView,
  Ul as Marked,
  Ml as MonthInput,
  zl as NestedListView,
  bl as NumberInput,
  Ns as OperationWasConfirmed,
  js as Outline,
  hl as PasswordInput,
  xl as PhoneNumberInput,
  fl as Progressbar,
  Rl as PseudoDropDown,
  Nl as PseudoFileInput,
  dl as Radiobutton,
  Il as SIM_DatePattern,
  wr as SIM_DateRegExp,
  _l as SIM_DateTimePattern,
  br as SIM_DateTimeRegExp,
  al as SIM_DefaultSandboxPermissions,
  cr as SIM_ErrorIndicator,
  gr as SIM_FAIconNames,
  pr as SIM_ImageAlignments,
  dr as SIM_ImageScalings,
  Tl as SIM_MonthPattern,
  vr as SIM_MonthRegExp,
  fr as SIM_ReferrerPolicies,
  $t as SIM_TimePattern,
  hr as SIM_TimeRegExp,
  El as SIM_WeekPattern,
  xr as SIM_WeekRegExp,
  Q as SIM_empty,
  Pa as SIM_multipleValues,
  Aa as SIM_noSelection,
  er as SIM_supportedHTMLFormats,
  nr as SIM_supportedImageFormats,
  tr as SIM_supportedMarkdownFormats,
  Qa as SIM_supportedTextFormats,
  il as SVGView,
  Ll as SearchInput,
  ml as Slider,
  Gs as Spacer,
  Xs as Subtitle,
  Pl as TabStrip,
  Al as TextInput,
  el as TextView,
  gl as TextlineInput,
  yl as TimeInput,
  Zs as Title,
  vl as URLInput,
  At as ValueIsDate,
  Rt as ValueIsDateTime,
  ut as ValueIsDimension,
  qo as ValueIsGeometry,
  Zr as ValueIsHTMLFormat,
  Wo as ValueIsIdentifier,
  Yr as ValueIsImageFormat,
  es as ValueIsIndexPath,
  ct as ValueIsLocation,
  Wr as ValueIsMIMEType,
  Xr as ValueIsMarkdownFormat,
  Bt as ValueIsMonth,
  nn as ValueIsName,
  on as ValueIsPath,
  jo as ValueIsPosition,
  Go as ValueIsSize,
  Z as ValueIsSpecial,
  Kr as ValueIsTextFormat,
  Ot as ValueIsTime,
  Pt as ValueIsWeek,
  rl as WebView,
  Sl as WeekInput,
  On as _normalizedName,
  lr as _normalizedPath,
  ja as allowDimension,
  Xa as allowGeometry,
  ir as allowIdentifier,
  Ha as allowLocation,
  Va as allowName,
  Fa as allowPath,
  qa as allowPosition,
  Ka as allowSize,
  Vr as allowedDimension,
  Gr as allowedGeometry,
  Jr as allowedIdentifier,
  Pr as allowedLocation,
  Cr as allowedName,
  Rr as allowedPath,
  Fr as allowedPosition,
  Ur as allowedSize,
  Ps as centered,
  se as consumeEvent,
  Rn as consumingEvent,
  _n as deepCopyOf,
  R as executeCallback,
  we as executedCallback,
  qs as expandingSpacer,
  Ga as expectDimension,
  Ya as expectGeometry,
  ar as expectIdentifier,
  Ua as expectLocation,
  Uo as expectName,
  an as expectPath,
  Wa as expectPosition,
  Za as expectSize,
  zr as expectedDimension,
  qr as expectedGeometry,
  Qr as expectedIdentifier,
  Br as expectedLocation,
  Or as expectedName,
  Ar as expectedPath,
  Hr as expectedPosition,
  jr as expectedSize,
  As as fullsized,
  Bs as horizontal,
  Ws as horizontalSeparator,
  U as installStylesheetFor,
  ge as mandatoryAttribute,
  ns as mandatoryBoolean,
  ds as mandatoryCardinal,
  ws as mandatoryColor,
  vs as mandatoryEMailAddress,
  bs as mandatoryFunction,
  ss as mandatoryInteger,
  cs as mandatoryIntegerInRange,
  Es as mandatoryNameOrIndex,
  os as mandatoryNumber,
  as as mandatoryNumberInRange,
  us as mandatoryOrdinal,
  Is as mandatoryPath,
  _s as mandatoryPhoneNumber,
  fs as mandatoryString,
  gs as mandatoryStringMatching,
  hs as mandatoryText,
  sr as mandatoryTextline,
  Ko as mandatoryURL,
  rn as mandatoryValue,
  Cs as normalizedName,
  Os as normalizedPath,
  me as optionalAttribute,
  V as optionalBoolean,
  rr as optionalCardinal,
  sn as optionalColor,
  xs as optionalEMailAddress,
  M as optionalFunction,
  rs as optionalInteger,
  ls as optionalIntegerInRange,
  $s as optionalNameOrIndex,
  Le as optionalNumber,
  is as optionalNumberInRange,
  re as optionalOrdinal,
  ks as optionalPath,
  ys as optionalPhoneNumber,
  ps as optionalString,
  ms as optionalStringMatching,
  fe as optionalText,
  D as optionalTextline,
  ln as optionalURL,
  H as optionalValue,
  ts as parsedProp,
  j as parsedPropSet,
  G as safelyRendered,
  Fs as selective,
  Hs as stacked,
  zs as tabular,
  Ie as throwError,
  Nr as throwReadOnlyError,
  Rs as uninstallStylesheetFor,
  Ds as useClickDragging,
  Ms as useConfiguration,
  Ls as useDragging,
  Ss as useOnlineStatus,
  ke as useRerenderer,
  Ts as useWindowSize,
  Vs as vertical,
  Ks as verticalSeparator
};
