var ku = Object.defineProperty;
var Su = (r, e, t) => e in r ? ku(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Pe = (r, e, t) => Su(r, typeof e != "symbol" ? e + "" : e, t);
var Iu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var G0 = { exports: {} };
(function(r, e) {
  (function(t, n) {
    n(e);
  })(Iu, function(t) {
    var n = Function("return this")();
    function a(g, S) {
      return g == null || "hasOwnProperty" in g && typeof g.hasOwnProperty == "function" ? g.hasOwnProperty(S) : Object.prototype.hasOwnProperty.call(g, S);
    }
    function i(g, S) {
      return g == null || "isPrototypeOf" in g && typeof g.isPrototypeOf == "function" ? g.isPrototypeOf(S) : Object.prototype.isPrototypeOf.call(g, S);
    }
    function s(g) {
      var S = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(g);
      if (S == null) throw new Error(g);
      var V = new Error(S[2]);
      throw V.name = S[1], V;
    }
    function o(g) {
      return typeof g == "boolean" || g instanceof Boolean;
    }
    function c(g) {
      return typeof g == "number" || g instanceof Number;
    }
    function d(g) {
      return (typeof g == "number" || g instanceof Number) && isFinite(g.valueOf());
    }
    function p(g) {
      return (typeof g == "number" || g instanceof Number) && isNaN(g.valueOf());
    }
    function f(g) {
      return (typeof g == "number" || g instanceof Number) && (g = g.valueOf(), isFinite(g) && Math.round(g) === g);
    }
    function b(g) {
      return (typeof g == "number" || g instanceof Number) && (g = g.valueOf(), isFinite(g) && Math.round(g) === g && g >= 0);
    }
    function v(g) {
      return (typeof g == "number" || g instanceof Number) && (g = g.valueOf(), isFinite(g) && Math.round(g) === g && g >= 1);
    }
    function w(g) {
      return typeof g == "string" || g instanceof String;
    }
    var k = /^\s*$/;
    function T(g) {
      return (typeof g == "string" || g instanceof String) && !k.test(g.valueOf());
    }
    function A(g, S) {
      return (typeof g == "string" || g instanceof String) && S.test(g.valueOf());
    }
    var C = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
    function $(g) {
      return A(g, C);
    }
    var B = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
    function P(g) {
      return A(g, B);
    }
    function L(g) {
      return typeof g == "function";
    }
    function z(g) {
      return typeof g == "function" && (g.name == null || g.name === "");
    }
    function _(g) {
      return typeof g == "function" && g.name != null && g.name !== "";
    }
    function q(g) {
      return typeof g == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(g.toString());
    }
    function D(g) {
      return typeof g == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(g.toString());
    }
    function N(g) {
      return g != null && typeof g == "object";
    }
    function R(g) {
      return g != null && typeof g == "object" && Object.getPrototypeOf(g) === Object.prototype;
    }
    function ce(g) {
      return g != null && typeof g == "object" && !(g instanceof Object);
    }
    var ve = Array.isArray;
    function he(g, S, V) {
      if (ve(g)) {
        for (var X = 0, de = g.length; X < de; X++) if (g[X] === void 0) return !1;
        return !(S != null && g.length < S) && !(V != null && g.length > V);
      }
      return !1;
    }
    function O(g, S, V, X) {
      if (ve(g)) try {
        for (var de = 0, Ce = g.length; de < Ce; de++) if (S(g[de]) == 0) return !1;
        return !(V != null && g.length < V) && !(X != null && g.length > X);
      } catch {
      }
      return !1;
    }
    function K(g) {
      return g instanceof Date;
    }
    function Y(g) {
      return g instanceof Error;
    }
    function pe(g) {
      return g != null && typeof g.then == "function";
    }
    function we(g) {
      return g instanceof RegExp;
    }
    function $e(g, S) {
      return S.indexOf(g) >= 0;
    }
    function Ne(g) {
      return w(g) && ($r.hasOwnProperty(g) || /^#[a-fA-F0-9]{6}$/.test(g) || /^#[a-fA-F0-9]{8}$/.test(g) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(g) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(g));
    }
    var tt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    function je(g) {
      return A(g, tt);
    }
    var Je = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
    function Et(g) {
      if (!A(g, Je) || g === "") return !1;
      try {
        return new URL(g, "file://"), !0;
      } catch {
        return !1;
      }
    }
    var Ae = !1, Ee = !0;
    function $t(g, S, V, X, de) {
      if (S == null) {
        if (X) return S;
        s("MissingArgument: no ".concat(Le(g), " given"));
      } else if (V(S)) switch (!0) {
        case S instanceof Boolean:
        case S instanceof Number:
        case S instanceof String:
          return S.valueOf();
        default:
          return S;
      }
      else s("InvalidArgument: the given ".concat(Le(g), " is no valid ").concat(Le(de)));
    }
    function ie(g, S, V) {
      var X = function(Ce, Zt) {
        return $t(Ce, Zt, g, S, V);
      }, de = g.name;
      return de != null && /^ValueIs/.test(de) ? sr(X, de.replace(/^ValueIs/, S ? "allow" : "expect")) : X;
    }
    function sr(g, S) {
      if (g == null && s("MissingArgument: no function given"), typeof g != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), S == null && s("MissingArgument: no desired name given"), typeof S == "string" || S instanceof String || s("InvalidArgument: the given desired name is not a string"), g.name === S) return g;
      try {
        if (Object.defineProperty(g, "name", { value: S }), g.name === S) return g;
      } catch {
      }
      return new Function("originalFunction", "return function " + S + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(g);
    }
    function or(g, S) {
      if (S != null) return S.valueOf();
      s("MissingArgument: no ".concat(Le(g), " given"));
    }
    var Bt = or, ct = ie(o, Ee, "boolean value"), ye = ct, W = ie(o, Ae, "boolean value"), ae = W, j = ie(c, Ee, "numeric value"), Fe = j, Qe = ie(c, Ae, "numeric value"), Be = Qe, br = ie(d, Ee, "finite numeric value"), Wt = br, Er = ie(d, Ae, "finite numeric value"), Wr = Er, J = ie(p, Ee, "NaN value"), oe = J, Se = ie(p, Ae, "NaN value"), Oe = Se;
    function it(g, S, V, X, de, Ce) {
      return S == null ? S : xn(g, S, V, X, de, Ce);
    }
    var Dt = it;
    function vn(g, S, V, X, de, Ce) {
      if (Qe(g, S), isNaN(S) && s("InvalidArgument: the given ".concat(Le(g), " is not-a-number")), de == null && (de = !0), Ce == null && (Ce = !0), V != null && isFinite(V)) {
        if (X != null && isFinite(X)) {
          if (S < V || !de && S === V || S > X || !Ce && S === X) throw new RangeError("the given ".concat(Le(g), " (").concat(S, ") is outside ") + "the allowed range (".concat(V, "...").concat(X, ")"));
        } else if (S < V || !de && S === V) throw new RangeError("the given ".concat(Le(g), " is below the allowed ") + "minimum (".concat(S, " ").concat(de ? "<" : "<=", " ").concat(V, ")"));
      } else if (X != null && isFinite(X) && (S > X || !Ce && S === X)) throw new RangeError("the given ".concat(Le(g), " exceeds the allowed ") + "maximum (".concat(S, " ").concat(Ce ? ">" : ">=", " ").concat(X, ")"));
      return S.valueOf();
    }
    var xn = vn, Xa = ie(f, Ee, "integral numeric value"), Sc = Xa, I0 = ie(f, Ae, "integral numeric value"), Ic = I0;
    function Ka(g, S, V, X) {
      return S == null ? S : Ja(g, S, V, X);
    }
    var Mc = Ka;
    function Ya(g, S, V, X) {
      if (I0(g, S), isNaN(S) && s("InvalidArgument: the given ".concat(Le(g), " is not-a-number")), V != null && isFinite(V)) {
        if (X != null && isFinite(X)) {
          if (S < V || S > X) throw new RangeError("the given ".concat(Le(g), " (").concat(S, ") is outside ") + "the allowed range (".concat(V, "...").concat(X, ")"));
        } else if (S < V) throw new RangeError("the given ".concat(Le(g), " is below the allowed ") + "minimum (".concat(S, " < ").concat(V, ")"));
      } else if (X != null && isFinite(X) && S > X) throw new RangeError("the given ".concat(Le(g), " exceeds the allowed ") + "maximum (".concat(S, " > ").concat(X, ")"));
      return S.valueOf();
    }
    var Ja = Ya, Qa = ie(b, Ee, "ordinal number"), Tc = Qa, ei = ie(b, Ae, "ordinal number"), Ac = ei, ti = ie(v, Ee, "cardinal number"), Ec = ti, ri = ie(v, Ae, "cardinal number"), $c = ri, ni = ie(w, Ee, "literal string"), zc = ni, M0 = ie(w, Ae, "literal string"), Nc = M0, ai = ie(T, Ee, "non-empty literal string"), Cc = ai, ii = ie(T, Ae, "non-empty literal string"), _c = ii;
    function si(g, S, V) {
      return S == null ? S : li(g, S, V);
    }
    var Dc = si;
    function oi(g, S, V) {
      if (M0(g, S), V.test(S)) return S.valueOf();
      s("InvalidArgument: the given ".concat(Le(g), " does not match the specified pattern"));
    }
    var li = oi, ci = ie($, Ee, "literal text"), Rc = ci, ui = ie($, Ae, "literal text"), Oc = ui, di = ie(P, Ee, "single line of text"), Lc = di, hi = ie(P, Ae, "single line of text"), Bc = hi, pi = ie(L, Ee, "JavaScript function"), Pc = pi, fi = ie(L, Ae, "JavaScript function"), Vc = fi, mi = ie(z, Ee, "anonymous JavaScript function"), Fc = mi, gi = ie(z, Ae, "anonymous JavaScript function"), qc = gi, bi = ie(_, Ee, "named JavaScript function"), Hc = bi, vi = ie(_, Ae, "named JavaScript function"), jc = vi, xi = ie(q, Ee, "native JavaScript function"), Uc = xi, wi = ie(q, Ae, "native JavaScript function"), Gc = wi, yi = ie(D, Ee, "scripted JavaScript function"), Wc = yi, ki = ie(D, Ae, "scripted JavaScript function"), Zc = ki, Si = ie(N, Ee, "JavaScript object"), Xc = Si, T0 = ie(N, Ae, "JavaScript object"), Kc = T0, Ii = ie(R, Ee, '"plain" JavaScript object'), Yc = Ii, Mi = ie(R, Ae, '"plain" JavaScript object'), Jc = Mi, Ti = ie(ce, Ee, '"vanilla" JavaScript object'), Qc = Ti, Ai = ie(ce, Ae, '"vanilla" JavaScript object'), eu = Ai;
    function Ei(g, S) {
      return S == null ? S : zi(g, S);
    }
    var tu = Ei;
    function $i(g, S) {
      if (S == null && s("MissingArgument: no ".concat(Le(g), " given")), ve(S)) return S;
      s("InvalidArgument: the given ".concat(Le(g), " is no JavaScript array"));
    }
    var zi = $i;
    function Ni(g, S, V, X, de) {
      return S == null ? S : _i(g, S, V, X, de);
    }
    var ru = Ni;
    function Ci(g, S, V, X, de) {
      if (S == null && s("MissingArgument: no ".concat(Le(g), " given")), he(S, X, de)) return S;
      s("InvalidArgument: the given ".concat(Le(g), " is ") + (V == null ? "either not a list or contains an invalid number of elements" : "no " + Le(V)));
    }
    var _i = Ci;
    function Di(g, S, V, X, de, Ce) {
      return S == null ? S : Oi(g, S, V, X, de, Ce);
    }
    var nu = Di;
    function Ri(g, S, V, X, de, Ce) {
      if (S == null && s("MissingArgument: no ".concat(Le(g), " given")), O(S, V, de, Ce)) return S;
      s("InvalidArgument: the given ".concat(Le(g), " is ") + (X == null ? "either not a list or contains invalid elements" : "no " + Le(X)));
    }
    var Oi = Ri;
    function Li(g, S, V, X) {
      return S == null ? S : Pi(g, S, V, X);
    }
    var au = Li;
    function Bi(g, S, V, X) {
      return S == null && s("MissingArgument: no ".concat(Le(g), " given")), S instanceof V || s("InvalidArgument: the given ".concat(Le(g), " is no ").concat(Le(X))), S;
    }
    var Pi = Bi;
    function Vi(g, S, V, X) {
      return S == null ? S : qi(g, S, V, X);
    }
    var iu = Vi;
    function Fi(g, S, V, X) {
      if (S == null && s("MissingArgument: no ".concat(Le(g), " given")), V.isPrototypeOf(S)) return S;
      s("InvalidArgument: the given ".concat(Le(g), " is no ").concat(Le(X)));
    }
    var qi = Fi, Hi = ie(K, Ee, "JavaScript Date object"), su = Hi, ji = ie(K, Ae, "JavaScript Date object"), ou = ji, Ui = ie(Y, Ee, "JavaScript Error object"), lu = Ui, Gi = ie(Y, Ae, "JavaScript Error object"), cu = Gi, Wi = ie(pe, Ee, 'JavaScript Promise (or "Thenable") object'), uu = Wi, Zi = ie(pe, Ae, 'JavaScript Promise (or "Thenable") object'), du = Zi, Xi = ie(we, Ee, "JavaScript RegExp object"), hu = Xi, Ki = ie(we, Ae, "JavaScript RegExp object"), pu = Ki;
    function Yi(g, S, V) {
      return S == null ? S : Qi(g, S, V);
    }
    var fu = Yi;
    function Ji(g, S, V) {
      if (S == null && s("MissingArgument: no ".concat(Le(g), " given")), $e(S, V)) return S == null || typeof S.valueOf != "function" ? S : S.valueOf();
      s("InvalidArgument: the given ".concat(Le(g), " is not among the supported values"));
    }
    var Qi = Ji, es = ie(Ne, Ee, "CSS color specification"), mu = es, ts = ie(Ne, Ae, "CSS color specification"), gu = ts, rs = ie(je, Ee, "EMail address"), bu = rs, ns = ie(je, Ae, "EMail address"), vu = ns, as = ie(Et, Ee, "URL"), xu = as, is = ie(Et, Ae, "URL"), wu = is;
    function Le(g) {
      return g.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, function(S) {
        return S === "\\" ? "\\\\" : S;
      }).replace(/[\x00-\x1f\x7f-\x9f]/g, function(S) {
        switch (S) {
          case "\0":
            return "\\0";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case `
`:
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
          default:
            var V = S.charCodeAt(0).toString(16);
            return "\\x" + "00".slice(V.length) + V;
        }
      });
    }
    function ss(g, S) {
      return S === void 0 && (S = '"'), g.replace(S === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, function(V) {
        switch (V) {
          case "'":
            return "\\'";
          case '"':
            return '\\"';
          case "\\":
            return "\\\\";
          default:
            return V;
        }
      }).replace(/[\x00-\x1f\x7f-\x9f]/g, function(V) {
        switch (V) {
          case "\0":
            return "\\0";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case `
`:
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
          default:
            var X = V.charCodeAt(0).toString(16);
            return "\\x" + "00".slice(X.length) + X;
        }
      });
    }
    function os(g, S) {
      return S = (S || "").trim() || "<br/>", g.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, function(V) {
        switch (V) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case '"':
            return "&quot;";
          case "'":
            return "&apos;";
          case "\b":
            return "&#92;b";
          case "\f":
            return "&#92;f";
          case `
`:
            return S;
          case "\r":
            return "&#92;r";
          case "	":
            return "&#92;t";
          case "\v":
            return "&#92;v";
          case "\\":
            return "&#92;";
          default:
            var X = V.charCodeAt(0).toString(16);
            return "&#x0000".substring(3, 7 - X.length) + X + ";";
        }
      });
    }
    function wn(g, S, V) {
      if (g === S) return !1;
      var X = typeof g;
      if (X !== typeof S) return !0;
      switch (X) {
        case "undefined":
        case "boolean":
        case "string":
        case "function":
        default:
          return !0;
        case "number":
          return isNaN(g) !== isNaN(S) || Math.abs(g - S) > Number.EPSILON;
        case "object":
          return g == null || S == null || (V === "by-value" && (g instanceof Boolean || g instanceof Number || g instanceof String) ? g.valueOf() !== S.valueOf() : Array.isArray(g) ? function(de, Ce, Zt) {
            if (!Array.isArray(Ce) || de.length !== Ce.length) return !0;
            for (var St = 0, yu = de.length; St < yu; St++) if (wn(de[St], Ce[St], Zt)) return !0;
            return !1;
          }(g, S, V) : V === "by-reference" || function(de, Ce, Zt) {
            if (Object.getPrototypeOf(de) !== Object.getPrototypeOf(Ce)) return !0;
            for (var St in de) if (!(St in Ce)) return !0;
            for (var St in Ce)
              if (!(St in de) || wn(de[St], Ce[St], Zt)) return !0;
            return !1;
          }(g, S, V));
      }
      return !0;
    }
    function ls(g) {
      for (var S in T0("candidate", g), g) if (a(g, S)) return !1;
      return !0;
    }
    function cs(g) {
      return /^\s*$/.test(g);
    }
    var $r = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
    function us(g) {
      var S = g.toLowerCase();
      if ($r.hasOwnProperty(S) && (g = $r[S]), /^#[a-fA-F0-9]{6}$/.test(g)) return g + "FF";
      if (/^#[a-fA-F0-9]{8}$/.test(g)) return g;
      var V = "0123456789ABCDEF";
      function X(Ce) {
        return Ce > 255 && (Ce = 255), V[Math.trunc(Ce / 16)] + V[Ce % 16];
      }
      var de = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(g);
      if (de != null) return "#" + X(parseInt(de[1], 10)) + X(parseInt(de[2], 10)) + X(parseInt(de[3], 10)) + "FF";
      if ((de = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(g)) != null) return "#" + X(parseInt(de[1], 10)) + X(parseInt(de[2], 10)) + X(parseInt(de[3], 10)) + X(255 * parseFloat(de[4]));
      s("InvalidArgument: the given Value is not a valid CSS Color specification");
    }
    t.ColorSet = $r, t.FunctionWithName = sr, t.HTMLsafe = os, t.HexColor = us, t.MarkDownSafe = function(g, S) {
      return os(g, S).replace(/:/g, "&#58;");
    }, t.ObjectIsEmpty = ls, t.ObjectIsNotEmpty = function(g) {
      return !ls(g);
    }, t.ObjectMergedWith = function(g) {
      for (var S = [], V = 1; V < arguments.length; V++) S[V - 1] = arguments[V];
      for (var X = 0, de = S.length; X < de; X++) {
        var Ce = S[X];
        if (Ce != null) if (typeof Ce == "object") for (var Zt in Ce) {
          var St = Object.getOwnPropertyDescriptor(Ce, Zt);
          St != null && Object.defineProperty(g, Zt, St);
        }
        else s("InvalidArgument: argument #" + (X + 1) + " is not an object");
      }
      return g;
    }, t.Object_hasOwnProperty = a, t.Object_isPrototypeOf = i, t.Object_propertyIsEnumerable = function(g, S) {
      return g == null || "propertyIsEnumerable" in g && typeof g.propertyIsEnumerable == "function" ? g.propertyIsEnumerable(S) : Object.prototype.propertyIsEnumerable.call(g, S);
    }, t.Object_toLocaleString = function(g) {
      return g == null || "toLocaleString" in g && typeof g.toLocaleString == "function" ? g.toLocaleString() : Object.prototype.toString.call(g);
    }, t.Object_toString = function(g) {
      return g == null || "toString" in g && typeof g.toString == "function" ? g.toString() : Object.prototype.toString.call(g);
    }, t.Object_valueOf = function(g) {
      return g == null || "valueOf" in g && typeof g.valueOf == "function" ? g.valueOf() : Object.prototype.valueOf.call(g);
    }, t.RGBAColor = function(g) {
      var S = g.toLowerCase();
      if ($r.hasOwnProperty(S)) return $r[S];
      if (/^#[a-fA-F0-9]{6}$/.test(g)) return "rgba(" + parseInt(g.slice(1, 3), 16) + "," + parseInt(g.slice(3, 5), 16) + "," + parseInt(g.slice(5, 7), 16) + ", 1)";
      if (/^#[a-fA-F0-9]{8}$/.test(g)) return "rgba(" + parseInt(g.slice(1, 3), 16) + "," + parseInt(g.slice(3, 5), 16) + "," + parseInt(g.slice(5, 7), 16) + "," + parseInt(g.slice(7), 16) / 255 + ")";
      var V = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(g);
      if (V != null) return g.slice(0, g.length - 1) + ",1)";
      if ((V = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(g)) != null) return g;
      s("InvalidArgument: the given Value is not a valid CSS Color specification");
    }, t.StringIsEmpty = cs, t.StringIsNotEmpty = function(g) {
      return !cs(g);
    }, t.ValidatorForClassifier = ie, t.ValueExists = function(g) {
      return g != null;
    }, t.ValueInheritsFrom = function(g, S) {
      return i(S, g);
    }, t.ValueIsAnonymousFunction = z, t.ValueIsArray = ve, t.ValueIsBoolean = o, t.ValueIsCardinal = v, t.ValueIsColor = Ne, t.ValueIsDate = K, t.ValueIsEMailAddress = je, t.ValueIsEmptyString = function(g) {
      return (typeof g == "string" || g instanceof String) && k.test(g.valueOf());
    }, t.ValueIsError = Y, t.ValueIsFiniteNumber = d, t.ValueIsFunction = L, t.ValueIsInstanceOf = function(g, S) {
      return g instanceof S;
    }, t.ValueIsInteger = f, t.ValueIsIntegerInRange = function(g, S, V) {
      if (!f(g) || isNaN(g)) return !1;
      if (d(S)) {
        if (d(V)) {
          if (g < S || g > V) return !1;
        } else if (g < S) return !1;
      } else if (d(V) && g > V) return !1;
      return !0;
    }, t.ValueIsList = he, t.ValueIsListSatisfying = O, t.ValueIsMissing = function(g) {
      return g == null;
    }, t.ValueIsNaN = p, t.ValueIsNamedFunction = _, t.ValueIsNativeFunction = q, t.ValueIsNonEmptyString = T, t.ValueIsNumber = c, t.ValueIsNumberInRange = function(g, S, V, X, de) {
      if (X === void 0 && (X = !0), de === void 0 && (de = !0), !c(g) || isNaN(g)) return !1;
      if (d(S)) {
        if (d(V)) {
          if (g < S || !X && g === S || g > V || !de && g === V) return !1;
        } else if (g < S || !X && g === S) return !1;
      } else if (d(V) && (g > V || !de && g === V)) return !1;
      return !0;
    }, t.ValueIsObject = N, t.ValueIsOneOf = $e, t.ValueIsOrdinal = b, t.ValueIsPlainObject = R, t.ValueIsPromise = pe, t.ValueIsRegExp = we, t.ValueIsScriptedFunction = D, t.ValueIsString = w, t.ValueIsStringMatching = A, t.ValueIsText = $, t.ValueIsTextline = P, t.ValueIsURL = Et, t.ValueIsVanillaObject = ce, t.ValuesAreEqual = function(g, S, V) {
      return !wn(g, S, V);
    }, t.ValuesDiffer = wn, t.acceptNil = Ee, t.allowAnonymousFunction = mi, t.allowArray = Ei, t.allowBoolean = ct, t.allowCardinal = ti, t.allowColor = es, t.allowDate = Hi, t.allowEMailAddress = rs, t.allowError = Ui, t.allowFiniteNumber = br, t.allowFunction = pi, t.allowInstanceOf = Li, t.allowInteger = Xa, t.allowIntegerInRange = Ka, t.allowList = Ni, t.allowListSatisfying = Di, t.allowNaN = J, t.allowNamedFunction = bi, t.allowNativeFunction = xi, t.allowNonEmptyString = ai, t.allowNumber = j, t.allowNumberInRange = it, t.allowObject = Si, t.allowOneOf = Yi, t.allowOrdinal = Qa, t.allowPlainObject = Ii, t.allowPromise = Wi, t.allowRegExp = Xi, t.allowScriptedFunction = yi, t.allowString = ni, t.allowStringMatching = si, t.allowText = ci, t.allowTextline = di, t.allowURL = as, t.allowValueInheritingFrom = Vi, t.allowVanillaObject = Ti, t.allowedAnonymousFunction = Fc, t.allowedArray = tu, t.allowedBoolean = ye, t.allowedCardinal = Ec, t.allowedColor = mu, t.allowedDate = su, t.allowedEMailAddress = bu, t.allowedError = lu, t.allowedFiniteNumber = Wt, t.allowedFunction = Pc, t.allowedInstanceOf = au, t.allowedInteger = Sc, t.allowedIntegerInRange = Mc, t.allowedList = ru, t.allowedListSatisfying = nu, t.allowedNaN = oe, t.allowedNamedFunction = Hc, t.allowedNativeFunction = Uc, t.allowedNonEmptyString = Cc, t.allowedNumber = Fe, t.allowedNumberInRange = Dt, t.allowedObject = Xc, t.allowedOneOf = fu, t.allowedOrdinal = Tc, t.allowedPlainObject = Yc, t.allowedPromise = uu, t.allowedRegExp = hu, t.allowedScriptedFunction = Wc, t.allowedString = zc, t.allowedStringMatching = Dc, t.allowedText = Rc, t.allowedTextline = Lc, t.allowedURL = xu, t.allowedValueInheritingFrom = iu, t.allowedVanillaObject = Qc, t.constrained = function(g, S, V) {
      return S === void 0 && (S = -1 / 0), V === void 0 && (V = 1 / 0), Math.max(S, Math.min(g, V));
    }, t.escaped = Le, t.expectAnonymousFunction = gi, t.expectArray = $i, t.expectBoolean = W, t.expectCardinal = ri, t.expectColor = ts, t.expectDate = ji, t.expectEMailAddress = ns, t.expectError = Gi, t.expectFiniteNumber = Er, t.expectFunction = fi, t.expectInstanceOf = Bi, t.expectInteger = I0, t.expectIntegerInRange = Ya, t.expectList = Ci, t.expectListSatisfying = Ri, t.expectNaN = Se, t.expectNamedFunction = vi, t.expectNativeFunction = wi, t.expectNonEmptyString = ii, t.expectNumber = Qe, t.expectNumberInRange = vn, t.expectObject = T0, t.expectOneOf = Ji, t.expectOrdinal = ei, t.expectPlainObject = Mi, t.expectPromise = Zi, t.expectRegExp = Ki, t.expectScriptedFunction = ki, t.expectString = M0, t.expectStringMatching = oi, t.expectText = ui, t.expectTextline = hi, t.expectURL = is, t.expectValue = or, t.expectValueInheritingFrom = Fi, t.expectVanillaObject = Ai, t.expectedAnonymousFunction = qc, t.expectedArray = zi, t.expectedBoolean = ae, t.expectedCardinal = $c, t.expectedColor = gu, t.expectedDate = ou, t.expectedEMailAddress = vu, t.expectedError = cu, t.expectedFiniteNumber = Wr, t.expectedFunction = Vc, t.expectedInstanceOf = Pi, t.expectedInteger = Ic, t.expectedIntegerInRange = Ja, t.expectedList = _i, t.expectedListSatisfying = Oi, t.expectedNaN = Oe, t.expectedNamedFunction = jc, t.expectedNativeFunction = Gc, t.expectedNonEmptyString = _c, t.expectedNumber = Be, t.expectedNumberInRange = xn, t.expectedObject = Kc, t.expectedOneOf = Qi, t.expectedOrdinal = Ac, t.expectedPlainObject = Jc, t.expectedPromise = du, t.expectedRegExp = pu, t.expectedScriptedFunction = Zc, t.expectedString = Nc, t.expectedStringMatching = li, t.expectedText = Oc, t.expectedTextline = Bc, t.expectedURL = wu, t.expectedValue = Bt, t.expectedValueInheritingFrom = qi, t.expectedVanillaObject = eu, t.global = n, t.quotable = ss, t.quoted = function(g, S) {
      return S === void 0 && (S = '"'), S + ss(g, S) + S;
    }, t.rejectNil = Ae, t.shortHexColor = function(g) {
      return us(g).slice(0, 7);
    }, t.throwError = s, t.unescaped = function(g) {
      return g.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g, function(S) {
        switch (S) {
          case "\\0":
            return "\0";
          case "\\b":
            return "\b";
          case "\\f":
            return "\f";
          case "\\n":
            return `
`;
          case "\\r":
            return "\r";
          case "\\t":
            return "	";
          case "\\v":
            return "\v";
          case "\\'":
            return "'";
          case '\\"':
            return '"';
          case "\\\\":
            return "\\";
          default:
            var V = parseInt(S.slice(2), 16);
            return String.fromCharCode(V);
        }
      });
    }, t.validatedArgument = $t, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(G0, G0.exports);
var M = G0.exports, So, jn, Io, Tu = [], Au = Array.isArray;
function Eu(r, e, t) {
  var n, a, i, s = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? So.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (i in r.defaultProps) s[i] === void 0 && (s[i] = r.defaultProps[i]);
  return $u(r, s, n, a, null);
}
function $u(r, e, t, n, a) {
  var i = { type: r, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Io, __i: -1, __u: 0 };
  return jn.vnode != null && jn.vnode(i), i;
}
function n0(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (Au(r) ? r.some(function(t) {
    n0(t, e);
  }) : e.push(r)), e;
}
So = Tu.slice, jn = { __e: function(r, e, t, n) {
  for (var a, i, s; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(r)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(r, n || {}), s = a.__d), s) return a.__E = a;
  } catch (o) {
    r = o;
  }
  throw r;
} }, Io = 0, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Mo = function(r, e, t, n) {
  var a;
  e[0] = 0;
  for (var i = 1; i < e.length; i++) {
    var s = e[i++], o = e[i] ? (e[0] |= s ? 1 : 2, t[e[i++]]) : e[++i];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++i]] = o : s === 6 ? n[1][e[++i]] += o + "" : s ? (a = r.apply(o, Mo(r, o, t, ["", null])), n.push(a), o[0] ? e[0] |= 2 : (e[i - 2] = 0, e[i] = a)) : n.push(o);
  }
  return n;
}, ds = /* @__PURE__ */ new Map();
function zu(r) {
  var e = ds.get(this);
  return e || (e = /* @__PURE__ */ new Map(), ds.set(this, e)), (e = Mo(this, e.get(r) || (e.set(r, e = function(t) {
    for (var n, a, i = 1, s = "", o = "", c = [0], d = function(b) {
      i === 1 && (b || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, b, s) : i === 3 && (b || s) ? (c.push(3, b, s), i = 2) : i === 2 && s === "..." && b ? c.push(4, b, 0) : i === 2 && s && !b ? c.push(5, 0, !0, s) : i >= 5 && ((s || !b && i === 5) && (c.push(i, 0, s, a), i = 6), b && (c.push(i, b, 0, a), i = 6)), s = "";
    }, p = 0; p < t.length; p++) {
      p && (i === 1 && d(), d(p));
      for (var f = 0; f < t[p].length; f++) n = t[p][f], i === 1 ? n === "<" ? (d(), c = [c], i = 3) : s += n : i === 4 ? s === "--" && n === ">" ? (i = 1, s = "") : s = n + s[0] : o ? n === o ? o = "" : s += n : n === '"' || n === "'" ? o = n : n === ">" ? (d(), i = 1) : i && (n === "=" ? (i = 5, a = s, s = "") : n === "/" && (i < 5 || t[p][f + 1] === ">") ? (d(), i === 3 && (c = c[0]), i = c, (c = c[0]).push(2, 0, i), i = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (d(), i = 2) : s += n), i === 3 && s === "!--" && (i = 4, c = c[0]);
    }
    return d(), c;
  }(r)), e), arguments, [])).length > 1 ? e : e[0];
}
var F = zu.bind(Eu), Lr, Ye, A0, hs, rn = 0, To = [], rt = jn, ps = rt.__b, fs = rt.__r, ms = rt.diffed, gs = rt.__c, bs = rt.unmount, vs = rt.__;
function a0(r, e) {
  rt.__h && rt.__h(Ye, r, rn || e), rn = 0;
  var t = Ye.__H || (Ye.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function jr(r) {
  return rn = 1, Nu(Eo, r);
}
function Nu(r, e, t) {
  var n = a0(Lr++, 2);
  if (n.t = r, !n.__c && (n.__ = [Eo(void 0, e), function(o) {
    var c = n.__N ? n.__N[0] : n.__[0], d = n.t(c, o);
    c !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = Ye, !Ye.__f)) {
    var a = function(o, c, d) {
      if (!n.__c.__H) return !0;
      var p = n.__c.__H.__.filter(function(b) {
        return !!b.__c;
      });
      if (p.every(function(b) {
        return !b.__N;
      })) return !i || i.call(this, o, c, d);
      var f = n.__c.props !== o;
      return p.forEach(function(b) {
        if (b.__N) {
          var v = b.__[0];
          b.__ = b.__N, b.__N = void 0, v !== b.__[0] && (f = !0);
        }
      }), i && i.call(this, o, c, d) || f;
    };
    Ye.__f = !0;
    var i = Ye.shouldComponentUpdate, s = Ye.componentWillUpdate;
    Ye.componentWillUpdate = function(o, c, d) {
      if (this.__e) {
        var p = i;
        i = void 0, a(o, c, d), i = p;
      }
      s && s.call(this, o, c, d);
    }, Ye.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function Br(r, e) {
  var t = a0(Lr++, 3);
  !rt.__s && Ao(t.__H, e) && (t.__ = r, t.u = e, Ye.__H.__h.push(t));
}
function ke(r) {
  return rn = 5, dn(function() {
    return { current: r };
  }, []);
}
function dn(r, e) {
  var t = a0(Lr++, 7);
  return Ao(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function Te(r, e) {
  return rn = 8, dn(function() {
    return r;
  }, e);
}
function yt() {
  var r = a0(Lr++, 11);
  if (!r.__) {
    for (var e = Ye.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function Cu() {
  for (var r; r = To.shift(); ) if (r.__P && r.__H) try {
    r.__H.__h.forEach(Vn), r.__H.__h.forEach(W0), r.__H.__h = [];
  } catch (e) {
    r.__H.__h = [], rt.__e(e, r.__v);
  }
}
rt.__b = function(r) {
  Ye = null, ps && ps(r);
}, rt.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), vs && vs(r, e);
}, rt.__r = function(r) {
  fs && fs(r), Lr = 0;
  var e = (Ye = r.__c).__H;
  e && (A0 === Ye ? (e.__h = [], Ye.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.forEach(Vn), e.__h.forEach(W0), e.__h = [], Lr = 0)), A0 = Ye;
}, rt.diffed = function(r) {
  ms && ms(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (To.push(e) !== 1 && hs === rt.requestAnimationFrame || ((hs = rt.requestAnimationFrame) || _u)(Cu)), e.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), A0 = Ye = null;
}, rt.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(Vn), t.__h = t.__h.filter(function(n) {
        return !n.__ || W0(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], rt.__e(n, t.__v);
    }
  }), gs && gs(r, e);
}, rt.unmount = function(r) {
  bs && bs(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      Vn(n);
    } catch (a) {
      e = a;
    }
  }), t.__H = void 0, e && rt.__e(e, t.__v));
};
var xs = typeof requestAnimationFrame == "function";
function _u(r) {
  var e, t = function() {
    clearTimeout(n), xs && cancelAnimationFrame(e), setTimeout(r);
  }, n = setTimeout(t, 35);
  xs && (e = requestAnimationFrame(t));
}
function Vn(r) {
  var e = Ye, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), Ye = e;
}
function W0(r) {
  var e = Ye;
  r.__c = r.__(), Ye = e;
}
function Ao(r, e) {
  return !r || r.length !== e.length || e.some(function(t, n) {
    return t !== r[n];
  });
}
function Eo(r, e) {
  return typeof e == "function" ? e(r) : e;
}
const Z0 = /* @__PURE__ */ new Set(), dt = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), E0 = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakSet();
let wt, ca = 0, ua = 0;
const Jt = "__aa_tgt", an = "__aa_del", Un = "__aa_new", $o = (r) => {
  const e = Lu(r);
  e && e.forEach((t) => Bu(t));
}, Du = (r) => {
  r.forEach((e) => {
    e.target === wt && Ru(), dt.has(e.target) && Ir(e.target);
  });
};
function zo(r) {
  const e = r.getBoundingClientRect(), t = wt?.clientWidth || 0, n = wt?.clientHeight || 0;
  return e.bottom < 0 || e.top > n || e.right < 0 || e.left > t;
}
function da(r) {
  const e = nn.get(r);
  e?.disconnect();
  let t = dt.get(r), n = 0;
  const a = 5;
  t || (t = Pr(r), dt.set(r, t));
  const { offsetWidth: i, offsetHeight: s } = wt, c = [
    t.top - a,
    i - (t.left + a + t.width),
    s - (t.top + a + t.height),
    t.left - a
  ].map((p) => `${-1 * Math.floor(p)}px`).join(" "), d = new IntersectionObserver(() => {
    ++n > 1 && Ir(r);
  }, {
    root: wt,
    threshold: 1,
    rootMargin: c
  });
  d.observe(r), nn.set(r, d);
}
function Ir(r, e = !0) {
  clearTimeout(ur.get(r));
  const t = i0(r), n = e ? sn(t) ? 500 : t.duration : 0;
  ur.set(r, setTimeout(async () => {
    const a = Mt.get(r);
    try {
      await a?.finished, dt.set(r, Pr(r)), da(r);
    } catch {
    }
  }, n));
}
function Ru() {
  clearTimeout(ur.get(wt)), ur.set(wt, setTimeout(() => {
    Z0.forEach((r) => Fn(r, (e) => No(() => Ir(e))));
  }, 100));
}
function Ou(r) {
  setTimeout(() => {
    Yr.set(r, setInterval(() => No(Ir.bind(null, r)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function No(r) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => r()) : requestAnimationFrame(() => r());
}
let Kt;
const Co = typeof window < "u" && "ResizeObserver" in window;
Co && (wt = document.documentElement, new MutationObserver($o), Kt = new ResizeObserver(Du), window.addEventListener("scroll", () => {
  ua = window.scrollY, ca = window.scrollX;
}), Kt.observe(wt));
function Lu(r) {
  return r.reduce((n, a) => [
    ...n,
    ...Array.from(a.addedNodes),
    ...Array.from(a.removedNodes)
  ], []).every((n) => n.nodeName === "#comment") ? !1 : r.reduce((n, a) => {
    if (n === !1)
      return !1;
    if (a.target instanceof Element) {
      if ($0(a.target), !n.has(a.target)) {
        n.add(a.target);
        for (let i = 0; i < a.target.children.length; i++) {
          const s = a.target.children.item(i);
          if (s) {
            if (an in s)
              return !1;
            $0(a.target, s), n.add(s);
          }
        }
      }
      if (a.removedNodes.length)
        for (let i = 0; i < a.removedNodes.length; i++) {
          const s = a.removedNodes[i];
          if (an in s)
            return !1;
          s instanceof Element && (n.add(s), $0(a.target, s), kr.set(s, [
            a.previousSibling,
            a.nextSibling
          ]));
        }
    }
    return n;
  }, /* @__PURE__ */ new Set());
}
function $0(r, e) {
  !e && !(Jt in r) ? Object.defineProperty(r, Jt, { value: r }) : e && !(Jt in e) && Object.defineProperty(e, Jt, { value: r });
}
function Bu(r) {
  var e, t;
  const n = r.isConnected, a = dt.has(r);
  n && kr.has(r) && kr.delete(r), ((e = Mt.get(r)) === null || e === void 0 ? void 0 : e.playState) !== "finished" && ((t = Mt.get(r)) === null || t === void 0 || t.cancel()), Un in r ? ws(r) : a && n ? Vu(r) : a && !n ? Fu(r) : ws(r);
}
function Vt(r) {
  return Number(r.replace(/[^0-9.\-]/g, ""));
}
function Pu(r) {
  let e = r.parentElement;
  for (; e; ) {
    if (e.scrollLeft || e.scrollTop)
      return { x: e.scrollLeft, y: e.scrollTop };
    e = e.parentElement;
  }
  return { x: 0, y: 0 };
}
function Pr(r) {
  const e = r.getBoundingClientRect(), { x: t, y: n } = Pu(r);
  return {
    top: e.top + n,
    left: e.left + t,
    width: e.width,
    height: e.height
  };
}
function _o(r, e, t) {
  let n = e.width, a = e.height, i = t.width, s = t.height;
  const o = getComputedStyle(r);
  if (o.getPropertyValue("box-sizing") === "content-box") {
    const d = Vt(o.paddingTop) + Vt(o.paddingBottom) + Vt(o.borderTopWidth) + Vt(o.borderBottomWidth), p = Vt(o.paddingLeft) + Vt(o.paddingRight) + Vt(o.borderRightWidth) + Vt(o.borderLeftWidth);
    n -= p, i -= p, a -= d, s -= d;
  }
  return [n, i, a, s].map(Math.round);
}
function i0(r) {
  return Jt in r && wr.has(r[Jt]) ? wr.get(r[Jt]) : { duration: 250, easing: "ease-in-out" };
}
function Do(r) {
  if (Jt in r)
    return r[Jt];
}
function ha(r) {
  const e = Do(r);
  return e ? Cr.has(e) : !1;
}
function Fn(r, ...e) {
  e.forEach((t) => t(r, wr.has(r)));
  for (let t = 0; t < r.children.length; t++) {
    const n = r.children.item(t);
    n && e.forEach((a) => a(n, wr.has(n)));
  }
}
function pa(r) {
  return Array.isArray(r) ? r : [r];
}
function sn(r) {
  return typeof r == "function";
}
function Vu(r) {
  const e = dt.get(r), t = Pr(r);
  if (!ha(r))
    return dt.set(r, t);
  if (zo(r)) {
    dt.set(r, t), da(r);
    return;
  }
  let n;
  if (!e)
    return;
  const a = i0(r);
  if (typeof a != "function") {
    let i = e.left - t.left, s = e.top - t.top;
    const o = e.left + e.width - (t.left + t.width);
    e.top + e.height - (t.top + t.height) == 0 && (s = 0), o == 0 && (i = 0);
    const [d, p, f, b] = _o(r, e, t), v = {
      transform: `translate(${i}px, ${s}px)`
    }, w = {
      transform: "translate(0, 0)"
    };
    d !== p && (v.width = `${d}px`, w.width = `${p}px`), f !== b && (v.height = `${f}px`, w.height = `${b}px`), n = r.animate([v, w], {
      duration: a.duration,
      easing: a.easing
    });
  } else {
    const [i] = pa(a(r, "remain", e, t));
    n = new Animation(i), n.play();
  }
  Mt.set(r, n), dt.set(r, t), n.addEventListener("finish", Ir.bind(null, r, !1), {
    once: !0
  });
}
function ws(r) {
  Un in r && delete r[Un];
  const e = Pr(r);
  dt.set(r, e);
  const t = i0(r);
  if (!ha(r))
    return;
  if (zo(r)) {
    da(r);
    return;
  }
  let n;
  if (typeof t != "function")
    n = r.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: t.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [a] = pa(t(r, "add", e));
    n = new Animation(a), n.play();
  }
  Mt.set(r, n), n.addEventListener("finish", Ir.bind(null, r, !1), {
    once: !0
  });
}
function ys(r, e) {
  var t;
  r.remove(), dt.delete(r), kr.delete(r), Mt.delete(r), (t = nn.get(r)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (an in r && delete r[an], Object.defineProperty(r, Un, { value: !0, configurable: !0 }), e && r instanceof HTMLElement)
      for (const n in e)
        r.style[n] = "";
  }, 0);
}
function Fu(r) {
  var e;
  if (!kr.has(r) || !dt.has(r))
    return;
  const [t, n] = kr.get(r);
  Object.defineProperty(r, an, { value: !0, configurable: !0 });
  const a = window.scrollX, i = window.scrollY;
  if (n && n.parentNode && n.parentNode instanceof Element ? n.parentNode.insertBefore(r, n) : t && t.parentNode ? t.parentNode.appendChild(r) : (e = Do(r)) === null || e === void 0 || e.appendChild(r), !ha(r))
    return ys(r);
  const [s, o, c, d] = Hu(r), p = i0(r), f = dt.get(r);
  (a !== ca || i !== ua) && qu(r, a, i, p);
  let b, v = {
    position: "absolute",
    top: `${s}px`,
    left: `${o}px`,
    width: `${c}px`,
    height: `${d}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!sn(p))
    Object.assign(r.style, v), b = r.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], {
      duration: p.duration,
      easing: "ease-out"
    });
  else {
    const [w, k] = pa(p(r, "remove", f));
    k?.styleReset !== !1 && (v = k?.styleReset || v, Object.assign(r.style, v)), b = new Animation(w), b.play();
  }
  Mt.set(r, b), b.addEventListener("finish", () => ys(r, v), {
    once: !0
  });
}
function qu(r, e, t, n) {
  const a = ca - e, i = ua - t, s = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(wt).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + a, window.scrollY + i), !r.parentElement)
    return;
  const c = r.parentElement;
  let d = c.clientHeight, p = c.clientWidth;
  const f = performance.now();
  function b() {
    requestAnimationFrame(() => {
      if (!sn(n)) {
        const v = d - c.clientHeight, w = p - c.clientWidth;
        f + n.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - w,
          top: window.scrollY - v
        }), d = c.clientHeight, p = c.clientWidth, b()) : document.documentElement.style.scrollBehavior = s;
      }
    });
  }
  b();
}
function Hu(r) {
  var e;
  const t = dt.get(r), [n, , a] = _o(r, t, Pr(r));
  let i = r.parentElement;
  for (; i && (getComputedStyle(i).position === "static" || i instanceof HTMLBodyElement); )
    i = i.parentElement;
  i || (i = document.body);
  const s = getComputedStyle(i), o = !Mt.has(r) || ((e = Mt.get(r)) === null || e === void 0 ? void 0 : e.playState) === "finished" ? Pr(i) : dt.get(i), c = Math.round(t.top - o.top) - Vt(s.borderTopWidth), d = Math.round(t.left - o.left) - Vt(s.borderLeftWidth);
  return [c, d, n, a];
}
function ju(r, e = {}) {
  if (Co && Kt && !(window.matchMedia("(prefers-reduced-motion: reduce)").matches && !sn(e) && !e.disrespectUserMotionPreference)) {
    Cr.add(r), getComputedStyle(r).position === "static" && Object.assign(r.style, { position: "relative" }), Fn(r, Ir, Ou, (s) => Kt?.observe(s)), sn(e) ? wr.set(r, e) : wr.set(r, {
      duration: 250,
      easing: "ease-in-out",
      ...e
    });
    const i = new MutationObserver($o);
    i.observe(r, { childList: !0 }), E0.set(r, i), Z0.add(r);
  }
  return Object.freeze({
    parent: r,
    enable: () => {
      Cr.add(r);
    },
    disable: () => {
      Cr.delete(r), Fn(r, (n) => {
        const a = Mt.get(n);
        try {
          a?.cancel();
        } catch {
        }
        Mt.delete(n);
        const i = ur.get(n);
        i && clearTimeout(i), ur.delete(n);
        const s = Yr.get(n);
        s && clearInterval(s), Yr.delete(n);
      });
    },
    isEnabled: () => Cr.has(r),
    destroy: () => {
      Cr.delete(r), Z0.delete(r), wr.delete(r);
      const n = E0.get(r);
      n?.disconnect(), E0.delete(r), Fn(r, (a) => {
        Kt?.unobserve(a);
        const i = Mt.get(a);
        try {
          i?.cancel();
        } catch {
        }
        Mt.delete(a);
        const s = nn.get(a);
        s?.disconnect(), nn.delete(a);
        const o = Yr.get(a);
        o && clearInterval(o), Yr.delete(a);
        const c = ur.get(a);
        c && clearTimeout(c), ur.delete(a), dt.delete(a), kr.delete(a);
      });
    }
  });
}
function s0(r) {
  const e = ke(null), [t, n] = jr(), a = (i) => {
    t && (i ? t.enable() : t.disable());
  };
  return Br(() => {
    e.current instanceof HTMLElement && n(ju(e.current, {}));
  }, []), Br(() => () => {
    var i;
    (i = t?.destroy) === null || i === void 0 || i.call(t);
  }, [t]), [e, a];
}
function fa() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Mr = fa();
function Ro(r) {
  Mr = r;
}
var en = { exec: () => null };
function Re(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (a, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(ft.caret, "$1"), t = t.replace(a, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var ft = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i") }, Uu = /^(?:[ \t]*(?:\n|$))+/, Gu = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Wu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ma = /(?:[*+-]|\d{1,9}[.)])/, Oo = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Lo = Re(Oo).replace(/bull/g, ma).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Xu = Re(Oo).replace(/bull/g, ma).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ga = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Ku = /^[^\n]+/, ba = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Yu = Re(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ba).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ju = Re(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ma).getRegex(), o0 = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", va = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Qu = Re("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", va).replace("tag", o0).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Bo = Re(ga).replace("hr", hn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", o0).getRegex(), e1 = Re(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Bo).getRegex(), xa = { blockquote: e1, code: Gu, def: Yu, fences: Wu, heading: Zu, hr: hn, html: Qu, lheading: Lo, list: Ju, newline: Uu, paragraph: Bo, table: en, text: Ku }, ks = Re("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", o0).getRegex(), t1 = { ...xa, lheading: Xu, table: ks, paragraph: Re(ga).replace("hr", hn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ks).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", o0).getRegex() }, r1 = { ...xa, html: Re(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", va).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: en, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Re(ga).replace("hr", hn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Lo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, n1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, a1 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Po = /^( {2,}|\\)\n(?!\s*$)/, i1 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, l0 = /[\p{P}\p{S}]/u, wa = /[\s\p{P}\p{S}]/u, Vo = /[^\s\p{P}\p{S}]/u, s1 = Re(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, wa).getRegex(), Fo = /(?!~)[\p{P}\p{S}]/u, o1 = /(?!~)[\s\p{P}\p{S}]/u, l1 = /(?:[^\s\p{P}\p{S}]|~)/u, c1 = Re(/link|code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<!`)(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("code", /(?<!`)(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), qo = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, u1 = Re(qo, "u").replace(/punct/g, l0).getRegex(), d1 = Re(qo, "u").replace(/punct/g, Fo).getRegex(), Ho = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", h1 = Re(Ho, "gu").replace(/notPunctSpace/g, Vo).replace(/punctSpace/g, wa).replace(/punct/g, l0).getRegex(), p1 = Re(Ho, "gu").replace(/notPunctSpace/g, l1).replace(/punctSpace/g, o1).replace(/punct/g, Fo).getRegex(), f1 = Re("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Vo).replace(/punctSpace/g, wa).replace(/punct/g, l0).getRegex(), m1 = Re(/\\(punct)/, "gu").replace(/punct/g, l0).getRegex(), g1 = Re(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), b1 = Re(va).replace("(?:-->|$)", "-->").getRegex(), v1 = Re("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", b1).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Gn = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, x1 = Re(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Gn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), jo = Re(/^!?\[(label)\]\[(ref)\]/).replace("label", Gn).replace("ref", ba).getRegex(), Uo = Re(/^!?\[(ref)\](?:\[\])?/).replace("ref", ba).getRegex(), w1 = Re("reflink|nolink(?!\\()", "g").replace("reflink", jo).replace("nolink", Uo).getRegex(), Ss = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, ya = { _backpedal: en, anyPunctuation: m1, autolink: g1, blockSkip: c1, br: Po, code: a1, del: en, emStrongLDelim: u1, emStrongRDelimAst: h1, emStrongRDelimUnd: f1, escape: n1, link: x1, nolink: Uo, punctuation: s1, reflink: jo, reflinkSearch: w1, tag: v1, text: i1, url: en }, y1 = { ...ya, link: Re(/^!?\[(label)\]\((.*?)\)/).replace("label", Gn).getRegex(), reflink: Re(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Gn).getRegex() }, X0 = { ...ya, emStrongRDelimAst: p1, emStrongLDelim: d1, url: Re(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Ss).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Re(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Ss).getRegex() }, k1 = { ...X0, br: Re(Po).replace("{2,}", "*").getRegex(), text: Re(X0.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, yn = { normal: xa, gfm: t1, pedantic: r1 }, Zr = { normal: ya, gfm: X0, breaks: k1, pedantic: y1 }, S1 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Is = (r) => S1[r];
function Pt(r, e) {
  if (e) {
    if (ft.escapeTest.test(r)) return r.replace(ft.escapeReplace, Is);
  } else if (ft.escapeTestNoEncode.test(r)) return r.replace(ft.escapeReplaceNoEncode, Is);
  return r;
}
function Ms(r) {
  try {
    r = encodeURI(r).replace(ft.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function Ts(r, e) {
  let t = r.replace(ft.findPipe, (i, s, o) => {
    let c = !1, d = s;
    for (; --d >= 0 && o[d] === "\\"; ) c = !c;
    return c ? "|" : " |";
  }), n = t.split(ft.splitPipe), a = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; a < n.length; a++) n[a] = n[a].trim().replace(ft.slashPipe, "|");
  return n;
}
function Xr(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let a = 0;
  for (; a < n && r.charAt(n - a - 1) === e; )
    a++;
  return r.slice(0, n - a);
}
function I1(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function As(r, e, t, n, a) {
  let i = e.href, s = e.title || null, o = r[1].replace(a.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let c = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, c;
}
function M1(r, e, t) {
  let n = r.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let a = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [o] = s;
    return o.length >= a.length ? i.slice(a.length) : i;
  }).join(`
`);
}
var Wn = class {
  constructor(r) {
    Pe(this, "options");
    Pe(this, "rules");
    Pe(this, "lexer");
    this.options = r || Mr;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : Xr(t, `
`) };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = M1(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = Xr(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: Xr(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = Xr(e[0], `
`).split(`
`), n = "", a = "", i = [];
      for (; t.length > 0; ) {
        let s = !1, o = [], c;
        for (c = 0; c < t.length; c++) if (this.rules.other.blockquoteStart.test(t[c])) o.push(t[c]), s = !0;
        else if (!s) o.push(t[c]);
        else break;
        t = t.slice(c);
        let d = o.join(`
`), p = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${d}` : d, a = a ? `${a}
${p}` : p;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(p, i, !0), this.lexer.state.top = f, t.length === 0) break;
        let b = i.at(-1);
        if (b?.type === "code") break;
        if (b?.type === "blockquote") {
          let v = b, w = v.raw + `
` + t.join(`
`), k = this.blockquote(w);
          i[i.length - 1] = k, n = n.substring(0, n.length - v.raw.length) + k.raw, a = a.substring(0, a.length - v.text.length) + k.text;
          break;
        } else if (b?.type === "list") {
          let v = b, w = v.raw + `
` + t.join(`
`), k = this.list(w);
          i[i.length - 1] = k, n = n.substring(0, n.length - b.raw.length) + k.raw, a = a.substring(0, a.length - v.raw.length) + k.raw, t = w.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: i, text: a };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), n = t.length > 1, a = { type: "list", raw: "", ordered: n, start: n ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = n ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = n ? t : "[*+-]");
      let i = this.rules.other.listItemRegex(t), s = !1;
      for (; r; ) {
        let c = !1, d = "", p = "";
        if (!(e = i.exec(r)) || this.rules.block.hr.test(r)) break;
        d = e[0], r = r.substring(d.length);
        let f = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (A) => " ".repeat(3 * A.length)), b = r.split(`
`, 1)[0], v = !f.trim(), w = 0;
        if (this.options.pedantic ? (w = 2, p = f.trimStart()) : v ? w = e[1].length + 1 : (w = e[2].search(this.rules.other.nonSpaceChar), w = w > 4 ? 1 : w, p = f.slice(w), w += e[1].length), v && this.rules.other.blankLine.test(b) && (d += b + `
`, r = r.substring(b.length + 1), c = !0), !c) {
          let A = this.rules.other.nextBulletRegex(w), C = this.rules.other.hrRegex(w), $ = this.rules.other.fencesBeginRegex(w), B = this.rules.other.headingBeginRegex(w), P = this.rules.other.htmlBeginRegex(w);
          for (; r; ) {
            let L = r.split(`
`, 1)[0], z;
            if (b = L, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), z = b) : z = b.replace(this.rules.other.tabCharGlobal, "    "), $.test(b) || B.test(b) || P.test(b) || A.test(b) || C.test(b)) break;
            if (z.search(this.rules.other.nonSpaceChar) >= w || !b.trim()) p += `
` + z.slice(w);
            else {
              if (v || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || $.test(f) || B.test(f) || C.test(f)) break;
              p += `
` + b;
            }
            !v && !b.trim() && (v = !0), d += L + `
`, r = r.substring(L.length + 1), f = z.slice(w);
          }
        }
        a.loose || (s ? a.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (s = !0));
        let k = null, T;
        this.options.gfm && (k = this.rules.other.listIsTask.exec(p), k && (T = k[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), a.items.push({ type: "list_item", raw: d, task: !!k, checked: T, loose: !1, text: p, tokens: [] }), a.raw += d;
      }
      let o = a.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let c = 0; c < a.items.length; c++) if (this.lexer.state.top = !1, a.items[c].tokens = this.lexer.blockTokens(a.items[c].text, []), !a.loose) {
        let d = a.items[c].tokens.filter((f) => f.type === "space"), p = d.length > 0 && d.some((f) => this.rules.other.anyLine.test(f.raw));
        a.loose = p;
      }
      if (a.loose) for (let c = 0; c < a.items.length; c++) a.items[c].loose = !0;
      return a;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: n, title: a };
    }
  }
  table(r) {
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Ts(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let s of n) this.rules.other.tableAlignRight.test(s) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? i.align.push("left") : i.align.push(null);
      for (let s = 0; s < t.length; s++) i.header.push({ text: t[s], tokens: this.lexer.inline(t[s]), header: !0, align: i.align[s] });
      for (let s of a) i.rows.push(Ts(s, i.header.length).map((o, c) => ({ text: o, tokens: this.lexer.inline(o), header: !1, align: i.align[c] })));
      return i;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(r) {
    let e = this.rules.block.paragraph.exec(r);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(r) {
    let e = this.rules.block.text.exec(r);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(r) {
    let e = this.rules.inline.escape.exec(r);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(r) {
    let e = this.rules.inline.tag.exec(r);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(r) {
    let e = this.rules.inline.link.exec(r);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let i = Xr(t.slice(0, -1), "\\");
        if ((t.length - i.length) % 2 === 0) return;
      } else {
        let i = I1(e[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let s = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
          e[2] = e[2].substring(0, i), e[0] = e[0].substring(0, s).trim(), e[3] = "";
        }
      }
      let n = e[2], a = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(n);
        i && (n = i[1], a = i[3]);
      } else a = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), As(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let n = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = e[n.toLowerCase()];
      if (!a) {
        let i = t[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return As(t, a, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let n = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!n || n[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let a = [...n[0]].length - 1, i, s, o = a, c = 0, d = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * r.length + a); (n = d.exec(e)) != null; ) {
        if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i) continue;
        if (s = [...i].length, n[3] || n[4]) {
          o += s;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + s) % 3)) {
          c += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o + c);
        let p = [...n[0]][0].length, f = r.slice(0, a + n.index + p + s);
        if (Math.min(a, s) % 2) {
          let v = f.slice(1, -1);
          return { type: "em", raw: f, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        let b = f.slice(2, -2);
        return { type: "strong", raw: f, text: b, tokens: this.lexer.inlineTokens(b) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(t), a = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return n && a && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r) {
    let e = this.rules.inline.del.exec(r);
    if (e) return { type: "del", raw: e[0], text: e[2], tokens: this.lexer.inlineTokens(e[2]) };
  }
  autolink(r) {
    let e = this.rules.inline.autolink.exec(r);
    if (e) {
      let t, n;
      return e[2] === "@" ? (t = e[1], n = "mailto:" + t) : (t = e[1], n = t), { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let t, n;
      if (e[2] === "@") t = e[0], n = "mailto:" + t;
      else {
        let a;
        do
          a = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (a !== e[0]);
        t = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, Ot = class K0 {
  constructor(e) {
    Pe(this, "tokens");
    Pe(this, "options");
    Pe(this, "state");
    Pe(this, "tokenizer");
    Pe(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Mr, this.options.tokenizer = this.options.tokenizer || new Wn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: ft, block: yn.normal, inline: Zr.normal };
    this.options.pedantic ? (t.block = yn.pedantic, t.inline = Zr.pedantic) : this.options.gfm && (t.block = yn.gfm, this.options.breaks ? t.inline = Zr.breaks : t.inline = Zr.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: yn, inline: Zr };
  }
  static lex(e, t) {
    return new K0(t).lex(e);
  }
  static lexInline(e, t) {
    return new K0(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(ft.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    for (this.options.pedantic && (e = e.replace(ft.tabCharGlobal, "    ").replace(ft.spaceLine, "")); e; ) {
      let a;
      if (this.options.extensions?.block?.some((s) => (a = s.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1)) continue;
      if (a = this.tokenizer.space(e)) {
        e = e.substring(a.raw.length);
        let s = t.at(-1);
        a.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(a);
        continue;
      }
      if (a = this.tokenizer.code(e)) {
        e = e.substring(a.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.text, this.inlineQueue.at(-1).src = s.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.fences(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.heading(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.hr(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.blockquote(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.list(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.html(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.def(e)) {
        e = e.substring(a.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = { href: a.href, title: a.title }, t.push(a));
        continue;
      }
      if (a = this.tokenizer.table(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.lheading(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, o = e.slice(1), c;
        this.options.extensions.startBlock.forEach((d) => {
          c = d.call({ lexer: this }, o), typeof c == "number" && c >= 0 && (s = Math.min(s, c));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (a = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(a), n = i.length !== e.length, e = e.substring(a.raw.length);
        continue;
      }
      if (a = this.tokenizer.text(e)) {
        e = e.substring(a.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + a.raw, s.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(a);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, a = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, a.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let i = !1, s = "";
    for (; e; ) {
      i || (s = ""), i = !1;
      let o;
      if (this.options.extensions?.inline?.some((d) => (o = d.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), !0) : !1)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let d = t.at(-1);
        o.type === "text" && d?.type === "text" ? (d.raw += o.raw, d.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, s)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let c = e;
      if (this.options.extensions?.startInline) {
        let d = 1 / 0, p = e.slice(1), f;
        this.options.extensions.startInline.forEach((b) => {
          f = b.call({ lexer: this }, p), typeof f == "number" && f >= 0 && (d = Math.min(d, f));
        }), d < 1 / 0 && d >= 0 && (c = e.substring(0, d + 1));
      }
      if (o = this.tokenizer.inlineText(c)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (s = o.raw.slice(-1)), i = !0;
        let d = t.at(-1);
        d?.type === "text" ? (d.raw += o.raw, d.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        let d = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else throw new Error(d);
      }
    }
    return t;
  }
}, Zn = class {
  constructor(r) {
    Pe(this, "options");
    Pe(this, "parser");
    this.options = r || Mr;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    let n = (e || "").match(ft.notSpaceStart)?.[0], a = r.replace(ft.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Pt(n) + '">' + (t ? a : Pt(a, !0)) + `</code></pre>
` : "<pre><code>" + (t ? a : Pt(a, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: r }) {
    return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
  }
  html({ text: r }) {
    return r;
  }
  def(r) {
    return "";
  }
  heading({ tokens: r, depth: e }) {
    return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
  }
  hr(r) {
    return `<hr>
`;
  }
  list(r) {
    let e = r.ordered, t = r.start, n = "";
    for (let s = 0; s < r.items.length; s++) {
      let o = r.items[s];
      n += this.listitem(o);
    }
    let a = e ? "ol" : "ul", i = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + a + i + `>
` + n + "</" + a + `>
`;
  }
  listitem(r) {
    let e = "";
    if (r.task) {
      let t = this.checkbox({ checked: !!r.checked });
      r.loose ? r.tokens[0]?.type === "paragraph" ? (r.tokens[0].text = t + " " + r.tokens[0].text, r.tokens[0].tokens && r.tokens[0].tokens.length > 0 && r.tokens[0].tokens[0].type === "text" && (r.tokens[0].tokens[0].text = t + " " + Pt(r.tokens[0].tokens[0].text), r.tokens[0].tokens[0].escaped = !0)) : r.tokens.unshift({ type: "text", raw: t + " ", text: t + " ", escaped: !0 }) : e += t + " ";
    }
    return e += this.parser.parse(r.tokens, !!r.loose), `<li>${e}</li>
`;
  }
  checkbox({ checked: r }) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: r }) {
    return `<p>${this.parser.parseInline(r)}</p>
`;
  }
  table(r) {
    let e = "", t = "";
    for (let a = 0; a < r.header.length; a++) t += this.tablecell(r.header[a]);
    e += this.tablerow({ text: t });
    let n = "";
    for (let a = 0; a < r.rows.length; a++) {
      let i = r.rows[a];
      t = "";
      for (let s = 0; s < i.length; s++) t += this.tablecell(i[s]);
      n += this.tablerow({ text: t });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: r }) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r) {
    let e = this.parser.parseInline(r.tokens), t = r.header ? "th" : "td";
    return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: r }) {
    return `<strong>${this.parser.parseInline(r)}</strong>`;
  }
  em({ tokens: r }) {
    return `<em>${this.parser.parseInline(r)}</em>`;
  }
  codespan({ text: r }) {
    return `<code>${Pt(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), a = Ms(r);
    if (a === null) return n;
    r = a;
    let i = '<a href="' + r + '"';
    return e && (i += ' title="' + Pt(e) + '"'), i += ">" + n + "</a>", i;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let a = Ms(r);
    if (a === null) return Pt(t);
    r = a;
    let i = `<img src="${r}" alt="${t}"`;
    return e && (i += ` title="${Pt(e)}"`), i += ">", i;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Pt(r.text);
  }
}, ka = class {
  strong({ text: r }) {
    return r;
  }
  em({ text: r }) {
    return r;
  }
  codespan({ text: r }) {
    return r;
  }
  del({ text: r }) {
    return r;
  }
  html({ text: r }) {
    return r;
  }
  text({ text: r }) {
    return r;
  }
  link({ text: r }) {
    return "" + r;
  }
  image({ text: r }) {
    return "" + r;
  }
  br() {
    return "";
  }
}, Lt = class Y0 {
  constructor(e) {
    Pe(this, "options");
    Pe(this, "renderer");
    Pe(this, "textRenderer");
    this.options = e || Mr, this.options.renderer = this.options.renderer || new Zn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ka();
  }
  static parse(e, t) {
    return new Y0(t).parse(e);
  }
  static parseInline(e, t) {
    return new Y0(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = "";
    for (let a = 0; a < e.length; a++) {
      let i = e[a];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = i, c = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          n += c || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(s);
          continue;
        }
        case "code": {
          n += this.renderer.code(s);
          continue;
        }
        case "table": {
          n += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          n += this.renderer.list(s);
          continue;
        }
        case "html": {
          n += this.renderer.html(s);
          continue;
        }
        case "def": {
          n += this.renderer.def(s);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let o = s, c = this.renderer.text(o);
          for (; a + 1 < e.length && e[a + 1].type === "text"; ) o = e[++a], c += `
` + this.renderer.text(o);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: c, text: c, tokens: [{ type: "text", raw: c, text: c, escaped: !0 }] }) : n += c;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let a = 0; a < e.length; a++) {
      let i = e[a];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += o || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
}, Pn, Jr = (Pn = class {
  constructor(e) {
    Pe(this, "options");
    Pe(this, "block");
    this.options = e || Mr;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? Ot.lex : Ot.lexInline;
  }
  provideParser() {
    return this.block ? Lt.parse : Lt.parseInline;
  }
}, Pe(Pn, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Pe(Pn, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Pn), Go = class {
  constructor(...r) {
    Pe(this, "defaults", fa());
    Pe(this, "options", this.setOptions);
    Pe(this, "parse", this.parseMarkdown(!0));
    Pe(this, "parseInline", this.parseMarkdown(!1));
    Pe(this, "Parser", Lt);
    Pe(this, "Renderer", Zn);
    Pe(this, "TextRenderer", ka);
    Pe(this, "Lexer", Ot);
    Pe(this, "Tokenizer", Wn);
    Pe(this, "Hooks", Jr);
    this.use(...r);
  }
  walkTokens(r, e) {
    let t = [];
    for (let n of r) switch (t = t.concat(e.call(this, n)), n.type) {
      case "table": {
        let a = n;
        for (let i of a.header) t = t.concat(this.walkTokens(i.tokens, e));
        for (let i of a.rows) for (let s of i) t = t.concat(this.walkTokens(s.tokens, e));
        break;
      }
      case "list": {
        let a = n;
        t = t.concat(this.walkTokens(a.items, e));
        break;
      }
      default: {
        let a = n;
        this.defaults.extensions?.childTokens?.[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((i) => {
          let s = a[i].flat(1 / 0);
          t = t.concat(this.walkTokens(s, e));
        }) : a.tokens && (t = t.concat(this.walkTokens(a.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let i = e.renderers[a.name];
          i ? e.renderers[a.name] = function(...s) {
            let o = a.renderer.apply(this, s);
            return o === !1 && (o = i.apply(this, s)), o;
          } : e.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = e[a.level];
          i ? i.unshift(a.tokenizer) : e[a.level] = [a.tokenizer], a.start && (a.level === "block" ? e.startBlock ? e.startBlock.push(a.start) : e.startBlock = [a.start] : a.level === "inline" && (e.startInline ? e.startInline.push(a.start) : e.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (e.childTokens[a.name] = a.childTokens);
      }), n.extensions = e), t.renderer) {
        let a = this.defaults.renderer || new Zn(this.defaults);
        for (let i in t.renderer) {
          if (!(i in a)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let s = i, o = t.renderer[s], c = a[s];
          a[s] = (...d) => {
            let p = o.apply(a, d);
            return p === !1 && (p = c.apply(a, d)), p || "";
          };
        }
        n.renderer = a;
      }
      if (t.tokenizer) {
        let a = this.defaults.tokenizer || new Wn(this.defaults);
        for (let i in t.tokenizer) {
          if (!(i in a)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let s = i, o = t.tokenizer[s], c = a[s];
          a[s] = (...d) => {
            let p = o.apply(a, d);
            return p === !1 && (p = c.apply(a, d)), p;
          };
        }
        n.tokenizer = a;
      }
      if (t.hooks) {
        let a = this.defaults.hooks || new Jr();
        for (let i in t.hooks) {
          if (!(i in a)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let s = i, o = t.hooks[s], c = a[s];
          Jr.passThroughHooks.has(i) ? a[s] = (d) => {
            if (this.defaults.async && Jr.passThroughHooksRespectAsync.has(i)) return (async () => {
              let f = await o.call(a, d);
              return c.call(a, f);
            })();
            let p = o.call(a, d);
            return c.call(a, p);
          } : a[s] = (...d) => {
            if (this.defaults.async) return (async () => {
              let f = await o.apply(a, d);
              return f === !1 && (f = await c.apply(a, d)), f;
            })();
            let p = o.apply(a, d);
            return p === !1 && (p = c.apply(a, d)), p;
          };
        }
        n.hooks = a;
      }
      if (t.walkTokens) {
        let a = this.defaults.walkTokens, i = t.walkTokens;
        n.walkTokens = function(s) {
          let o = [];
          return o.push(i.call(this, s)), a && (o = o.concat(a.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return Ot.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return Lt.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, a = { ...this.defaults, ...n }, i = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && n.async === !1) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = r), a.async) return (async () => {
        let s = a.hooks ? await a.hooks.preprocess(e) : e, o = await (a.hooks ? await a.hooks.provideLexer() : r ? Ot.lex : Ot.lexInline)(s, a), c = a.hooks ? await a.hooks.processAllTokens(o) : o;
        a.walkTokens && await Promise.all(this.walkTokens(c, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser() : r ? Lt.parse : Lt.parseInline)(c, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(i);
      try {
        a.hooks && (e = a.hooks.preprocess(e));
        let s = (a.hooks ? a.hooks.provideLexer() : r ? Ot.lex : Ot.lexInline)(e, a);
        a.hooks && (s = a.hooks.processAllTokens(s)), a.walkTokens && this.walkTokens(s, a.walkTokens);
        let o = (a.hooks ? a.hooks.provideParser() : r ? Lt.parse : Lt.parseInline)(s, a);
        return a.hooks && (o = a.hooks.postprocess(o)), o;
      } catch (s) {
        return i(s);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let n = "<p>An error occurred:</p><pre>" + Pt(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, Sr = new Go();
function Ve(r, e) {
  return Sr.parse(r, e);
}
Ve.options = Ve.setOptions = function(r) {
  return Sr.setOptions(r), Ve.defaults = Sr.defaults, Ro(Ve.defaults), Ve;
};
Ve.getDefaults = fa;
Ve.defaults = Mr;
Ve.use = function(...r) {
  return Sr.use(...r), Ve.defaults = Sr.defaults, Ro(Ve.defaults), Ve;
};
Ve.walkTokens = function(r, e) {
  return Sr.walkTokens(r, e);
};
Ve.parseInline = Sr.parseInline;
Ve.Parser = Lt;
Ve.parser = Lt.parse;
Ve.Renderer = Zn;
Ve.TextRenderer = ka;
Ve.Lexer = Ot;
Ve.lexer = Ot.lex;
Ve.Tokenizer = Wn;
Ve.Hooks = Jr;
Ve.parse = Ve;
Ve.options;
Ve.setOptions;
Ve.use;
Ve.walkTokens;
Ve.parseInline;
Lt.parse;
Ot.lex;
class xt {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new xt(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Tt {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Tt(t, xt.range(this, e));
  }
}
class G {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var n = "KaTeX parse error: " + e, a, i, s = t && t.loc;
    if (s && s.start <= s.end) {
      var o = s.lexer.input;
      a = s.start, i = s.end, a === o.length ? n += " at end of input: " : n += " at position " + (a + 1) + ": ";
      var c = o.slice(a, i).replace(/[^]/g, "$&̲"), d;
      a > 15 ? d = "…" + o.slice(a - 15, a) : d = o.slice(0, a);
      var p;
      i + 15 < o.length ? p = o.slice(i, i + 15) + "…" : p = o.slice(i), n += d + c + p;
    }
    var f = new Error(n);
    return f.name = "ParseError", f.__proto__ = G.prototype, f.position = a, a != null && i != null && (f.length = i - a), f.rawMessage = e, f;
  }
}
G.prototype.__proto__ = Error.prototype;
var T1 = function(e, t) {
  return e === void 0 ? t : e;
}, A1 = /([A-Z])/g, E1 = function(e) {
  return e.replace(A1, "-$1").toLowerCase();
}, $1 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, z1 = /[&><"']/g;
function N1(r) {
  return String(r).replace(z1, (e) => $1[e]);
}
var Wo = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, C1 = function(e) {
  var t = Wo(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, _1 = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, D1 = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, De = {
  deflt: T1,
  escape: N1,
  hyphenate: E1,
  getBaseElem: Wo,
  isCharacterBox: C1,
  protocolFromUrl: D1
}, qn = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (r) => "#" + r
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (r, e) => (e.push(r), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (r) => Math.max(0, r),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (r) => Math.max(0, r),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (r) => Math.max(0, r),
    cli: "-e, --max-expand <n>",
    cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function R1(r) {
  if (r.default)
    return r.default;
  var e = r.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Sa {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in qn)
      if (qn.hasOwnProperty(t)) {
        var n = qn[t];
        this[t] = e[t] !== void 0 ? n.processor ? n.processor(e[t]) : e[t] : R1(n);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, n) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, t, n)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new G("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, n) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, n);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = De.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class lr {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Ft[O1[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Ft[L1[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Ft[B1[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Ft[P1[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Ft[V1[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Ft[F1[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Ia = 0, Xn = 1, Dr = 2, Qt = 3, on = 4, Nt = 5, Vr = 6, mt = 7, Ft = [new lr(Ia, 0, !1), new lr(Xn, 0, !0), new lr(Dr, 1, !1), new lr(Qt, 1, !0), new lr(on, 2, !1), new lr(Nt, 2, !0), new lr(Vr, 3, !1), new lr(mt, 3, !0)], O1 = [on, Nt, on, Nt, Vr, mt, Vr, mt], L1 = [Nt, Nt, Nt, Nt, mt, mt, mt, mt], B1 = [Dr, Qt, on, Nt, Vr, mt, Vr, mt], P1 = [Qt, Qt, Nt, Nt, mt, mt, mt, mt], V1 = [Xn, Xn, Qt, Qt, Nt, Nt, mt, mt], F1 = [Ia, Xn, Dr, Qt, Dr, Qt, Dr, Qt], me = {
  DISPLAY: Ft[Ia],
  TEXT: Ft[Dr],
  SCRIPT: Ft[on],
  SCRIPTSCRIPT: Ft[Vr]
}, J0 = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function q1(r) {
  for (var e = 0; e < J0.length; e++)
    for (var t = J0[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var Hn = [];
J0.forEach((r) => r.blocks.forEach((e) => Hn.push(...e)));
function Zo(r) {
  for (var e = 0; e < Hn.length; e += 2)
    if (r >= Hn[e] && r <= Hn[e + 1])
      return !0;
  return !1;
}
var zr = 80, H1 = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, j1 = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, U1 = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, G1 = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, W1 = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Z1 = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, X1 = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, K1 = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = H1(t, zr);
      break;
    case "sqrtSize1":
      a = j1(t, zr);
      break;
    case "sqrtSize2":
      a = U1(t, zr);
      break;
    case "sqrtSize3":
      a = G1(t, zr);
      break;
    case "sqrtSize4":
      a = W1(t, zr);
      break;
    case "sqrtTall":
      a = X1(t, zr, n);
  }
  return a;
}, Y1 = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Es = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, J1 = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class pn {
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var qt = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, kn = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, $s = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function Q1(r, e) {
  qt[r] = e;
}
function Ma(r, e, t) {
  if (!qt[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = qt[e][n];
  if (!a && r[0] in $s && (n = $s[r[0]].charCodeAt(0), a = qt[e][n]), !a && t === "text" && Zo(n) && (a = qt[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var z0 = {};
function ed(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !z0[e]) {
    var t = z0[e] = {
      cssEmPerMu: kn.quad[e] / 18
    };
    for (var n in kn)
      kn.hasOwnProperty(n) && (t[n] = kn[n][e]);
  }
  return z0[e];
}
var td = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], zs = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], Ns = function(e, t) {
  return t.size < 2 ? e : td[e - 1][t.size - 1];
};
class Yt {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Yt.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = zs[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
    return new Yt(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Ns(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: zs[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Ns(Yt.BASESIZE, e);
    return this.size === t && this.textSize === Yt.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== Yt.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Yt.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = ed(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Yt.BASESIZE = 6;
var Q0 = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, rd = {
  ex: !0,
  em: !0,
  mu: !0
}, Xo = function(e) {
  return typeof e != "string" && (e = e.unit), e in Q0 || e in rd || e === "ex";
}, We = function(e, t) {
  var n;
  if (e.unit in Q0)
    n = Q0[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new G("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, Z = function(e) {
  return +e.toFixed(4) + "em";
}, pr = function(e) {
  return e.filter((t) => t).join(" ");
}, Ko = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Yo = function(e) {
  var t = document.createElement(e);
  t.className = pr(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, nd = /[\s"'>/=\x00-\x1f]/, Jo = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + De.escape(pr(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += De.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + De.escape(n) + '"');
  for (var i in this.attributes)
    if (this.attributes.hasOwnProperty(i)) {
      if (nd.test(i))
        throw new G("Invalid attribute name '" + i + "'");
      t += " " + i + '="' + De.escape(this.attributes[i]) + '"';
    }
  t += ">";
  for (var s = 0; s < this.children.length; s++)
    t += this.children[s].toMarkup();
  return t += "</" + e + ">", t;
};
class fn {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Ko.call(this, e, n, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Yo.call(this, "span");
  }
  toMarkup() {
    return Jo.call(this, "span");
  }
}
class Ta {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Ko.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Yo.call(this, "a");
  }
  toMarkup() {
    return Jo.call(this, "a");
  }
}
class ad {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + De.escape(this.src) + '"' + (' alt="' + De.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += De.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + De.escape(t) + '"'), e += "'/>", e;
  }
}
var id = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Ct {
  constructor(e, t, n, a, i, s, o, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = c || {}, this.maxFontSize = 0;
    var d = q1(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = id[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = Z(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = pr(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t = t || document.createElement("span"), t.style[n] = this.style[n]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += De.escape(pr(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += De.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + De.escape(n) + '"');
    var i = De.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class tr {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + De.escape(this.attributes[t]) + '"');
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class fr {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Es[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + De.escape(this.alternate) + '"/>' : '<path d="' + De.escape(Es[this.pathName]) + '"/>';
  }
}
class ea {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + De.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Cs(r) {
  if (r instanceof Ct)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function sd(r) {
  if (r instanceof fn)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var od = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, ld = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, He = {
  math: {},
  text: {}
};
function l(r, e, t, n, a, i) {
  He[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (He[r][n] = He[r][a]);
}
var u = "math", H = "text", h = "main", x = "ams", Ue = "accent-token", ne = "bin", bt = "close", Ur = "inner", fe = "mathord", nt = "op-token", At = "open", c0 = "punct", y = "rel", ir = "spacing", I = "textord";
l(u, h, y, "≡", "\\equiv", !0);
l(u, h, y, "≺", "\\prec", !0);
l(u, h, y, "≻", "\\succ", !0);
l(u, h, y, "∼", "\\sim", !0);
l(u, h, y, "⊥", "\\perp");
l(u, h, y, "⪯", "\\preceq", !0);
l(u, h, y, "⪰", "\\succeq", !0);
l(u, h, y, "≃", "\\simeq", !0);
l(u, h, y, "∣", "\\mid", !0);
l(u, h, y, "≪", "\\ll", !0);
l(u, h, y, "≫", "\\gg", !0);
l(u, h, y, "≍", "\\asymp", !0);
l(u, h, y, "∥", "\\parallel");
l(u, h, y, "⋈", "\\bowtie", !0);
l(u, h, y, "⌣", "\\smile", !0);
l(u, h, y, "⊑", "\\sqsubseteq", !0);
l(u, h, y, "⊒", "\\sqsupseteq", !0);
l(u, h, y, "≐", "\\doteq", !0);
l(u, h, y, "⌢", "\\frown", !0);
l(u, h, y, "∋", "\\ni", !0);
l(u, h, y, "∝", "\\propto", !0);
l(u, h, y, "⊢", "\\vdash", !0);
l(u, h, y, "⊣", "\\dashv", !0);
l(u, h, y, "∋", "\\owns");
l(u, h, c0, ".", "\\ldotp");
l(u, h, c0, "⋅", "\\cdotp");
l(u, h, I, "#", "\\#");
l(H, h, I, "#", "\\#");
l(u, h, I, "&", "\\&");
l(H, h, I, "&", "\\&");
l(u, h, I, "ℵ", "\\aleph", !0);
l(u, h, I, "∀", "\\forall", !0);
l(u, h, I, "ℏ", "\\hbar", !0);
l(u, h, I, "∃", "\\exists", !0);
l(u, h, I, "∇", "\\nabla", !0);
l(u, h, I, "♭", "\\flat", !0);
l(u, h, I, "ℓ", "\\ell", !0);
l(u, h, I, "♮", "\\natural", !0);
l(u, h, I, "♣", "\\clubsuit", !0);
l(u, h, I, "℘", "\\wp", !0);
l(u, h, I, "♯", "\\sharp", !0);
l(u, h, I, "♢", "\\diamondsuit", !0);
l(u, h, I, "ℜ", "\\Re", !0);
l(u, h, I, "♡", "\\heartsuit", !0);
l(u, h, I, "ℑ", "\\Im", !0);
l(u, h, I, "♠", "\\spadesuit", !0);
l(u, h, I, "§", "\\S", !0);
l(H, h, I, "§", "\\S");
l(u, h, I, "¶", "\\P", !0);
l(H, h, I, "¶", "\\P");
l(u, h, I, "†", "\\dag");
l(H, h, I, "†", "\\dag");
l(H, h, I, "†", "\\textdagger");
l(u, h, I, "‡", "\\ddag");
l(H, h, I, "‡", "\\ddag");
l(H, h, I, "‡", "\\textdaggerdbl");
l(u, h, bt, "⎱", "\\rmoustache", !0);
l(u, h, At, "⎰", "\\lmoustache", !0);
l(u, h, bt, "⟯", "\\rgroup", !0);
l(u, h, At, "⟮", "\\lgroup", !0);
l(u, h, ne, "∓", "\\mp", !0);
l(u, h, ne, "⊖", "\\ominus", !0);
l(u, h, ne, "⊎", "\\uplus", !0);
l(u, h, ne, "⊓", "\\sqcap", !0);
l(u, h, ne, "∗", "\\ast");
l(u, h, ne, "⊔", "\\sqcup", !0);
l(u, h, ne, "◯", "\\bigcirc", !0);
l(u, h, ne, "∙", "\\bullet", !0);
l(u, h, ne, "‡", "\\ddagger");
l(u, h, ne, "≀", "\\wr", !0);
l(u, h, ne, "⨿", "\\amalg");
l(u, h, ne, "&", "\\And");
l(u, h, y, "⟵", "\\longleftarrow", !0);
l(u, h, y, "⇐", "\\Leftarrow", !0);
l(u, h, y, "⟸", "\\Longleftarrow", !0);
l(u, h, y, "⟶", "\\longrightarrow", !0);
l(u, h, y, "⇒", "\\Rightarrow", !0);
l(u, h, y, "⟹", "\\Longrightarrow", !0);
l(u, h, y, "↔", "\\leftrightarrow", !0);
l(u, h, y, "⟷", "\\longleftrightarrow", !0);
l(u, h, y, "⇔", "\\Leftrightarrow", !0);
l(u, h, y, "⟺", "\\Longleftrightarrow", !0);
l(u, h, y, "↦", "\\mapsto", !0);
l(u, h, y, "⟼", "\\longmapsto", !0);
l(u, h, y, "↗", "\\nearrow", !0);
l(u, h, y, "↩", "\\hookleftarrow", !0);
l(u, h, y, "↪", "\\hookrightarrow", !0);
l(u, h, y, "↘", "\\searrow", !0);
l(u, h, y, "↼", "\\leftharpoonup", !0);
l(u, h, y, "⇀", "\\rightharpoonup", !0);
l(u, h, y, "↙", "\\swarrow", !0);
l(u, h, y, "↽", "\\leftharpoondown", !0);
l(u, h, y, "⇁", "\\rightharpoondown", !0);
l(u, h, y, "↖", "\\nwarrow", !0);
l(u, h, y, "⇌", "\\rightleftharpoons", !0);
l(u, x, y, "≮", "\\nless", !0);
l(u, x, y, "", "\\@nleqslant");
l(u, x, y, "", "\\@nleqq");
l(u, x, y, "⪇", "\\lneq", !0);
l(u, x, y, "≨", "\\lneqq", !0);
l(u, x, y, "", "\\@lvertneqq");
l(u, x, y, "⋦", "\\lnsim", !0);
l(u, x, y, "⪉", "\\lnapprox", !0);
l(u, x, y, "⊀", "\\nprec", !0);
l(u, x, y, "⋠", "\\npreceq", !0);
l(u, x, y, "⋨", "\\precnsim", !0);
l(u, x, y, "⪹", "\\precnapprox", !0);
l(u, x, y, "≁", "\\nsim", !0);
l(u, x, y, "", "\\@nshortmid");
l(u, x, y, "∤", "\\nmid", !0);
l(u, x, y, "⊬", "\\nvdash", !0);
l(u, x, y, "⊭", "\\nvDash", !0);
l(u, x, y, "⋪", "\\ntriangleleft");
l(u, x, y, "⋬", "\\ntrianglelefteq", !0);
l(u, x, y, "⊊", "\\subsetneq", !0);
l(u, x, y, "", "\\@varsubsetneq");
l(u, x, y, "⫋", "\\subsetneqq", !0);
l(u, x, y, "", "\\@varsubsetneqq");
l(u, x, y, "≯", "\\ngtr", !0);
l(u, x, y, "", "\\@ngeqslant");
l(u, x, y, "", "\\@ngeqq");
l(u, x, y, "⪈", "\\gneq", !0);
l(u, x, y, "≩", "\\gneqq", !0);
l(u, x, y, "", "\\@gvertneqq");
l(u, x, y, "⋧", "\\gnsim", !0);
l(u, x, y, "⪊", "\\gnapprox", !0);
l(u, x, y, "⊁", "\\nsucc", !0);
l(u, x, y, "⋡", "\\nsucceq", !0);
l(u, x, y, "⋩", "\\succnsim", !0);
l(u, x, y, "⪺", "\\succnapprox", !0);
l(u, x, y, "≆", "\\ncong", !0);
l(u, x, y, "", "\\@nshortparallel");
l(u, x, y, "∦", "\\nparallel", !0);
l(u, x, y, "⊯", "\\nVDash", !0);
l(u, x, y, "⋫", "\\ntriangleright");
l(u, x, y, "⋭", "\\ntrianglerighteq", !0);
l(u, x, y, "", "\\@nsupseteqq");
l(u, x, y, "⊋", "\\supsetneq", !0);
l(u, x, y, "", "\\@varsupsetneq");
l(u, x, y, "⫌", "\\supsetneqq", !0);
l(u, x, y, "", "\\@varsupsetneqq");
l(u, x, y, "⊮", "\\nVdash", !0);
l(u, x, y, "⪵", "\\precneqq", !0);
l(u, x, y, "⪶", "\\succneqq", !0);
l(u, x, y, "", "\\@nsubseteqq");
l(u, x, ne, "⊴", "\\unlhd");
l(u, x, ne, "⊵", "\\unrhd");
l(u, x, y, "↚", "\\nleftarrow", !0);
l(u, x, y, "↛", "\\nrightarrow", !0);
l(u, x, y, "⇍", "\\nLeftarrow", !0);
l(u, x, y, "⇏", "\\nRightarrow", !0);
l(u, x, y, "↮", "\\nleftrightarrow", !0);
l(u, x, y, "⇎", "\\nLeftrightarrow", !0);
l(u, x, y, "△", "\\vartriangle");
l(u, x, I, "ℏ", "\\hslash");
l(u, x, I, "▽", "\\triangledown");
l(u, x, I, "◊", "\\lozenge");
l(u, x, I, "Ⓢ", "\\circledS");
l(u, x, I, "®", "\\circledR");
l(H, x, I, "®", "\\circledR");
l(u, x, I, "∡", "\\measuredangle", !0);
l(u, x, I, "∄", "\\nexists");
l(u, x, I, "℧", "\\mho");
l(u, x, I, "Ⅎ", "\\Finv", !0);
l(u, x, I, "⅁", "\\Game", !0);
l(u, x, I, "‵", "\\backprime");
l(u, x, I, "▲", "\\blacktriangle");
l(u, x, I, "▼", "\\blacktriangledown");
l(u, x, I, "■", "\\blacksquare");
l(u, x, I, "⧫", "\\blacklozenge");
l(u, x, I, "★", "\\bigstar");
l(u, x, I, "∢", "\\sphericalangle", !0);
l(u, x, I, "∁", "\\complement", !0);
l(u, x, I, "ð", "\\eth", !0);
l(H, h, I, "ð", "ð");
l(u, x, I, "╱", "\\diagup");
l(u, x, I, "╲", "\\diagdown");
l(u, x, I, "□", "\\square");
l(u, x, I, "□", "\\Box");
l(u, x, I, "◊", "\\Diamond");
l(u, x, I, "¥", "\\yen", !0);
l(H, x, I, "¥", "\\yen", !0);
l(u, x, I, "✓", "\\checkmark", !0);
l(H, x, I, "✓", "\\checkmark");
l(u, x, I, "ℶ", "\\beth", !0);
l(u, x, I, "ℸ", "\\daleth", !0);
l(u, x, I, "ℷ", "\\gimel", !0);
l(u, x, I, "ϝ", "\\digamma", !0);
l(u, x, I, "ϰ", "\\varkappa");
l(u, x, At, "┌", "\\@ulcorner", !0);
l(u, x, bt, "┐", "\\@urcorner", !0);
l(u, x, At, "└", "\\@llcorner", !0);
l(u, x, bt, "┘", "\\@lrcorner", !0);
l(u, x, y, "≦", "\\leqq", !0);
l(u, x, y, "⩽", "\\leqslant", !0);
l(u, x, y, "⪕", "\\eqslantless", !0);
l(u, x, y, "≲", "\\lesssim", !0);
l(u, x, y, "⪅", "\\lessapprox", !0);
l(u, x, y, "≊", "\\approxeq", !0);
l(u, x, ne, "⋖", "\\lessdot");
l(u, x, y, "⋘", "\\lll", !0);
l(u, x, y, "≶", "\\lessgtr", !0);
l(u, x, y, "⋚", "\\lesseqgtr", !0);
l(u, x, y, "⪋", "\\lesseqqgtr", !0);
l(u, x, y, "≑", "\\doteqdot");
l(u, x, y, "≓", "\\risingdotseq", !0);
l(u, x, y, "≒", "\\fallingdotseq", !0);
l(u, x, y, "∽", "\\backsim", !0);
l(u, x, y, "⋍", "\\backsimeq", !0);
l(u, x, y, "⫅", "\\subseteqq", !0);
l(u, x, y, "⋐", "\\Subset", !0);
l(u, x, y, "⊏", "\\sqsubset", !0);
l(u, x, y, "≼", "\\preccurlyeq", !0);
l(u, x, y, "⋞", "\\curlyeqprec", !0);
l(u, x, y, "≾", "\\precsim", !0);
l(u, x, y, "⪷", "\\precapprox", !0);
l(u, x, y, "⊲", "\\vartriangleleft");
l(u, x, y, "⊴", "\\trianglelefteq");
l(u, x, y, "⊨", "\\vDash", !0);
l(u, x, y, "⊪", "\\Vvdash", !0);
l(u, x, y, "⌣", "\\smallsmile");
l(u, x, y, "⌢", "\\smallfrown");
l(u, x, y, "≏", "\\bumpeq", !0);
l(u, x, y, "≎", "\\Bumpeq", !0);
l(u, x, y, "≧", "\\geqq", !0);
l(u, x, y, "⩾", "\\geqslant", !0);
l(u, x, y, "⪖", "\\eqslantgtr", !0);
l(u, x, y, "≳", "\\gtrsim", !0);
l(u, x, y, "⪆", "\\gtrapprox", !0);
l(u, x, ne, "⋗", "\\gtrdot");
l(u, x, y, "⋙", "\\ggg", !0);
l(u, x, y, "≷", "\\gtrless", !0);
l(u, x, y, "⋛", "\\gtreqless", !0);
l(u, x, y, "⪌", "\\gtreqqless", !0);
l(u, x, y, "≖", "\\eqcirc", !0);
l(u, x, y, "≗", "\\circeq", !0);
l(u, x, y, "≜", "\\triangleq", !0);
l(u, x, y, "∼", "\\thicksim");
l(u, x, y, "≈", "\\thickapprox");
l(u, x, y, "⫆", "\\supseteqq", !0);
l(u, x, y, "⋑", "\\Supset", !0);
l(u, x, y, "⊐", "\\sqsupset", !0);
l(u, x, y, "≽", "\\succcurlyeq", !0);
l(u, x, y, "⋟", "\\curlyeqsucc", !0);
l(u, x, y, "≿", "\\succsim", !0);
l(u, x, y, "⪸", "\\succapprox", !0);
l(u, x, y, "⊳", "\\vartriangleright");
l(u, x, y, "⊵", "\\trianglerighteq");
l(u, x, y, "⊩", "\\Vdash", !0);
l(u, x, y, "∣", "\\shortmid");
l(u, x, y, "∥", "\\shortparallel");
l(u, x, y, "≬", "\\between", !0);
l(u, x, y, "⋔", "\\pitchfork", !0);
l(u, x, y, "∝", "\\varpropto");
l(u, x, y, "◀", "\\blacktriangleleft");
l(u, x, y, "∴", "\\therefore", !0);
l(u, x, y, "∍", "\\backepsilon");
l(u, x, y, "▶", "\\blacktriangleright");
l(u, x, y, "∵", "\\because", !0);
l(u, x, y, "⋘", "\\llless");
l(u, x, y, "⋙", "\\gggtr");
l(u, x, ne, "⊲", "\\lhd");
l(u, x, ne, "⊳", "\\rhd");
l(u, x, y, "≂", "\\eqsim", !0);
l(u, h, y, "⋈", "\\Join");
l(u, x, y, "≑", "\\Doteq", !0);
l(u, x, ne, "∔", "\\dotplus", !0);
l(u, x, ne, "∖", "\\smallsetminus");
l(u, x, ne, "⋒", "\\Cap", !0);
l(u, x, ne, "⋓", "\\Cup", !0);
l(u, x, ne, "⩞", "\\doublebarwedge", !0);
l(u, x, ne, "⊟", "\\boxminus", !0);
l(u, x, ne, "⊞", "\\boxplus", !0);
l(u, x, ne, "⋇", "\\divideontimes", !0);
l(u, x, ne, "⋉", "\\ltimes", !0);
l(u, x, ne, "⋊", "\\rtimes", !0);
l(u, x, ne, "⋋", "\\leftthreetimes", !0);
l(u, x, ne, "⋌", "\\rightthreetimes", !0);
l(u, x, ne, "⋏", "\\curlywedge", !0);
l(u, x, ne, "⋎", "\\curlyvee", !0);
l(u, x, ne, "⊝", "\\circleddash", !0);
l(u, x, ne, "⊛", "\\circledast", !0);
l(u, x, ne, "⋅", "\\centerdot");
l(u, x, ne, "⊺", "\\intercal", !0);
l(u, x, ne, "⋒", "\\doublecap");
l(u, x, ne, "⋓", "\\doublecup");
l(u, x, ne, "⊠", "\\boxtimes", !0);
l(u, x, y, "⇢", "\\dashrightarrow", !0);
l(u, x, y, "⇠", "\\dashleftarrow", !0);
l(u, x, y, "⇇", "\\leftleftarrows", !0);
l(u, x, y, "⇆", "\\leftrightarrows", !0);
l(u, x, y, "⇚", "\\Lleftarrow", !0);
l(u, x, y, "↞", "\\twoheadleftarrow", !0);
l(u, x, y, "↢", "\\leftarrowtail", !0);
l(u, x, y, "↫", "\\looparrowleft", !0);
l(u, x, y, "⇋", "\\leftrightharpoons", !0);
l(u, x, y, "↶", "\\curvearrowleft", !0);
l(u, x, y, "↺", "\\circlearrowleft", !0);
l(u, x, y, "↰", "\\Lsh", !0);
l(u, x, y, "⇈", "\\upuparrows", !0);
l(u, x, y, "↿", "\\upharpoonleft", !0);
l(u, x, y, "⇃", "\\downharpoonleft", !0);
l(u, h, y, "⊶", "\\origof", !0);
l(u, h, y, "⊷", "\\imageof", !0);
l(u, x, y, "⊸", "\\multimap", !0);
l(u, x, y, "↭", "\\leftrightsquigarrow", !0);
l(u, x, y, "⇉", "\\rightrightarrows", !0);
l(u, x, y, "⇄", "\\rightleftarrows", !0);
l(u, x, y, "↠", "\\twoheadrightarrow", !0);
l(u, x, y, "↣", "\\rightarrowtail", !0);
l(u, x, y, "↬", "\\looparrowright", !0);
l(u, x, y, "↷", "\\curvearrowright", !0);
l(u, x, y, "↻", "\\circlearrowright", !0);
l(u, x, y, "↱", "\\Rsh", !0);
l(u, x, y, "⇊", "\\downdownarrows", !0);
l(u, x, y, "↾", "\\upharpoonright", !0);
l(u, x, y, "⇂", "\\downharpoonright", !0);
l(u, x, y, "⇝", "\\rightsquigarrow", !0);
l(u, x, y, "⇝", "\\leadsto");
l(u, x, y, "⇛", "\\Rrightarrow", !0);
l(u, x, y, "↾", "\\restriction");
l(u, h, I, "‘", "`");
l(u, h, I, "$", "\\$");
l(H, h, I, "$", "\\$");
l(H, h, I, "$", "\\textdollar");
l(u, h, I, "%", "\\%");
l(H, h, I, "%", "\\%");
l(u, h, I, "_", "\\_");
l(H, h, I, "_", "\\_");
l(H, h, I, "_", "\\textunderscore");
l(u, h, I, "∠", "\\angle", !0);
l(u, h, I, "∞", "\\infty", !0);
l(u, h, I, "′", "\\prime");
l(u, h, I, "△", "\\triangle");
l(u, h, I, "Γ", "\\Gamma", !0);
l(u, h, I, "Δ", "\\Delta", !0);
l(u, h, I, "Θ", "\\Theta", !0);
l(u, h, I, "Λ", "\\Lambda", !0);
l(u, h, I, "Ξ", "\\Xi", !0);
l(u, h, I, "Π", "\\Pi", !0);
l(u, h, I, "Σ", "\\Sigma", !0);
l(u, h, I, "Υ", "\\Upsilon", !0);
l(u, h, I, "Φ", "\\Phi", !0);
l(u, h, I, "Ψ", "\\Psi", !0);
l(u, h, I, "Ω", "\\Omega", !0);
l(u, h, I, "A", "Α");
l(u, h, I, "B", "Β");
l(u, h, I, "E", "Ε");
l(u, h, I, "Z", "Ζ");
l(u, h, I, "H", "Η");
l(u, h, I, "I", "Ι");
l(u, h, I, "K", "Κ");
l(u, h, I, "M", "Μ");
l(u, h, I, "N", "Ν");
l(u, h, I, "O", "Ο");
l(u, h, I, "P", "Ρ");
l(u, h, I, "T", "Τ");
l(u, h, I, "X", "Χ");
l(u, h, I, "¬", "\\neg", !0);
l(u, h, I, "¬", "\\lnot");
l(u, h, I, "⊤", "\\top");
l(u, h, I, "⊥", "\\bot");
l(u, h, I, "∅", "\\emptyset");
l(u, x, I, "∅", "\\varnothing");
l(u, h, fe, "α", "\\alpha", !0);
l(u, h, fe, "β", "\\beta", !0);
l(u, h, fe, "γ", "\\gamma", !0);
l(u, h, fe, "δ", "\\delta", !0);
l(u, h, fe, "ϵ", "\\epsilon", !0);
l(u, h, fe, "ζ", "\\zeta", !0);
l(u, h, fe, "η", "\\eta", !0);
l(u, h, fe, "θ", "\\theta", !0);
l(u, h, fe, "ι", "\\iota", !0);
l(u, h, fe, "κ", "\\kappa", !0);
l(u, h, fe, "λ", "\\lambda", !0);
l(u, h, fe, "μ", "\\mu", !0);
l(u, h, fe, "ν", "\\nu", !0);
l(u, h, fe, "ξ", "\\xi", !0);
l(u, h, fe, "ο", "\\omicron", !0);
l(u, h, fe, "π", "\\pi", !0);
l(u, h, fe, "ρ", "\\rho", !0);
l(u, h, fe, "σ", "\\sigma", !0);
l(u, h, fe, "τ", "\\tau", !0);
l(u, h, fe, "υ", "\\upsilon", !0);
l(u, h, fe, "ϕ", "\\phi", !0);
l(u, h, fe, "χ", "\\chi", !0);
l(u, h, fe, "ψ", "\\psi", !0);
l(u, h, fe, "ω", "\\omega", !0);
l(u, h, fe, "ε", "\\varepsilon", !0);
l(u, h, fe, "ϑ", "\\vartheta", !0);
l(u, h, fe, "ϖ", "\\varpi", !0);
l(u, h, fe, "ϱ", "\\varrho", !0);
l(u, h, fe, "ς", "\\varsigma", !0);
l(u, h, fe, "φ", "\\varphi", !0);
l(u, h, ne, "∗", "*", !0);
l(u, h, ne, "+", "+");
l(u, h, ne, "−", "-", !0);
l(u, h, ne, "⋅", "\\cdot", !0);
l(u, h, ne, "∘", "\\circ", !0);
l(u, h, ne, "÷", "\\div", !0);
l(u, h, ne, "±", "\\pm", !0);
l(u, h, ne, "×", "\\times", !0);
l(u, h, ne, "∩", "\\cap", !0);
l(u, h, ne, "∪", "\\cup", !0);
l(u, h, ne, "∖", "\\setminus", !0);
l(u, h, ne, "∧", "\\land");
l(u, h, ne, "∨", "\\lor");
l(u, h, ne, "∧", "\\wedge", !0);
l(u, h, ne, "∨", "\\vee", !0);
l(u, h, I, "√", "\\surd");
l(u, h, At, "⟨", "\\langle", !0);
l(u, h, At, "∣", "\\lvert");
l(u, h, At, "∥", "\\lVert");
l(u, h, bt, "?", "?");
l(u, h, bt, "!", "!");
l(u, h, bt, "⟩", "\\rangle", !0);
l(u, h, bt, "∣", "\\rvert");
l(u, h, bt, "∥", "\\rVert");
l(u, h, y, "=", "=");
l(u, h, y, ":", ":");
l(u, h, y, "≈", "\\approx", !0);
l(u, h, y, "≅", "\\cong", !0);
l(u, h, y, "≥", "\\ge");
l(u, h, y, "≥", "\\geq", !0);
l(u, h, y, "←", "\\gets");
l(u, h, y, ">", "\\gt", !0);
l(u, h, y, "∈", "\\in", !0);
l(u, h, y, "", "\\@not");
l(u, h, y, "⊂", "\\subset", !0);
l(u, h, y, "⊃", "\\supset", !0);
l(u, h, y, "⊆", "\\subseteq", !0);
l(u, h, y, "⊇", "\\supseteq", !0);
l(u, x, y, "⊈", "\\nsubseteq", !0);
l(u, x, y, "⊉", "\\nsupseteq", !0);
l(u, h, y, "⊨", "\\models");
l(u, h, y, "←", "\\leftarrow", !0);
l(u, h, y, "≤", "\\le");
l(u, h, y, "≤", "\\leq", !0);
l(u, h, y, "<", "\\lt", !0);
l(u, h, y, "→", "\\rightarrow", !0);
l(u, h, y, "→", "\\to");
l(u, x, y, "≱", "\\ngeq", !0);
l(u, x, y, "≰", "\\nleq", !0);
l(u, h, ir, " ", "\\ ");
l(u, h, ir, " ", "\\space");
l(u, h, ir, " ", "\\nobreakspace");
l(H, h, ir, " ", "\\ ");
l(H, h, ir, " ", " ");
l(H, h, ir, " ", "\\space");
l(H, h, ir, " ", "\\nobreakspace");
l(u, h, ir, null, "\\nobreak");
l(u, h, ir, null, "\\allowbreak");
l(u, h, c0, ",", ",");
l(u, h, c0, ";", ";");
l(u, x, ne, "⊼", "\\barwedge", !0);
l(u, x, ne, "⊻", "\\veebar", !0);
l(u, h, ne, "⊙", "\\odot", !0);
l(u, h, ne, "⊕", "\\oplus", !0);
l(u, h, ne, "⊗", "\\otimes", !0);
l(u, h, I, "∂", "\\partial", !0);
l(u, h, ne, "⊘", "\\oslash", !0);
l(u, x, ne, "⊚", "\\circledcirc", !0);
l(u, x, ne, "⊡", "\\boxdot", !0);
l(u, h, ne, "△", "\\bigtriangleup");
l(u, h, ne, "▽", "\\bigtriangledown");
l(u, h, ne, "†", "\\dagger");
l(u, h, ne, "⋄", "\\diamond");
l(u, h, ne, "⋆", "\\star");
l(u, h, ne, "◃", "\\triangleleft");
l(u, h, ne, "▹", "\\triangleright");
l(u, h, At, "{", "\\{");
l(H, h, I, "{", "\\{");
l(H, h, I, "{", "\\textbraceleft");
l(u, h, bt, "}", "\\}");
l(H, h, I, "}", "\\}");
l(H, h, I, "}", "\\textbraceright");
l(u, h, At, "{", "\\lbrace");
l(u, h, bt, "}", "\\rbrace");
l(u, h, At, "[", "\\lbrack", !0);
l(H, h, I, "[", "\\lbrack", !0);
l(u, h, bt, "]", "\\rbrack", !0);
l(H, h, I, "]", "\\rbrack", !0);
l(u, h, At, "(", "\\lparen", !0);
l(u, h, bt, ")", "\\rparen", !0);
l(H, h, I, "<", "\\textless", !0);
l(H, h, I, ">", "\\textgreater", !0);
l(u, h, At, "⌊", "\\lfloor", !0);
l(u, h, bt, "⌋", "\\rfloor", !0);
l(u, h, At, "⌈", "\\lceil", !0);
l(u, h, bt, "⌉", "\\rceil", !0);
l(u, h, I, "\\", "\\backslash");
l(u, h, I, "∣", "|");
l(u, h, I, "∣", "\\vert");
l(H, h, I, "|", "\\textbar", !0);
l(u, h, I, "∥", "\\|");
l(u, h, I, "∥", "\\Vert");
l(H, h, I, "∥", "\\textbardbl");
l(H, h, I, "~", "\\textasciitilde");
l(H, h, I, "\\", "\\textbackslash");
l(H, h, I, "^", "\\textasciicircum");
l(u, h, y, "↑", "\\uparrow", !0);
l(u, h, y, "⇑", "\\Uparrow", !0);
l(u, h, y, "↓", "\\downarrow", !0);
l(u, h, y, "⇓", "\\Downarrow", !0);
l(u, h, y, "↕", "\\updownarrow", !0);
l(u, h, y, "⇕", "\\Updownarrow", !0);
l(u, h, nt, "∐", "\\coprod");
l(u, h, nt, "⋁", "\\bigvee");
l(u, h, nt, "⋀", "\\bigwedge");
l(u, h, nt, "⨄", "\\biguplus");
l(u, h, nt, "⋂", "\\bigcap");
l(u, h, nt, "⋃", "\\bigcup");
l(u, h, nt, "∫", "\\int");
l(u, h, nt, "∫", "\\intop");
l(u, h, nt, "∬", "\\iint");
l(u, h, nt, "∭", "\\iiint");
l(u, h, nt, "∏", "\\prod");
l(u, h, nt, "∑", "\\sum");
l(u, h, nt, "⨂", "\\bigotimes");
l(u, h, nt, "⨁", "\\bigoplus");
l(u, h, nt, "⨀", "\\bigodot");
l(u, h, nt, "∮", "\\oint");
l(u, h, nt, "∯", "\\oiint");
l(u, h, nt, "∰", "\\oiiint");
l(u, h, nt, "⨆", "\\bigsqcup");
l(u, h, nt, "∫", "\\smallint");
l(H, h, Ur, "…", "\\textellipsis");
l(u, h, Ur, "…", "\\mathellipsis");
l(H, h, Ur, "…", "\\ldots", !0);
l(u, h, Ur, "…", "\\ldots", !0);
l(u, h, Ur, "⋯", "\\@cdots", !0);
l(u, h, Ur, "⋱", "\\ddots", !0);
l(u, h, I, "⋮", "\\varvdots");
l(H, h, I, "⋮", "\\varvdots");
l(u, h, Ue, "ˊ", "\\acute");
l(u, h, Ue, "ˋ", "\\grave");
l(u, h, Ue, "¨", "\\ddot");
l(u, h, Ue, "~", "\\tilde");
l(u, h, Ue, "ˉ", "\\bar");
l(u, h, Ue, "˘", "\\breve");
l(u, h, Ue, "ˇ", "\\check");
l(u, h, Ue, "^", "\\hat");
l(u, h, Ue, "⃗", "\\vec");
l(u, h, Ue, "˙", "\\dot");
l(u, h, Ue, "˚", "\\mathring");
l(u, h, fe, "", "\\@imath");
l(u, h, fe, "", "\\@jmath");
l(u, h, I, "ı", "ı");
l(u, h, I, "ȷ", "ȷ");
l(H, h, I, "ı", "\\i", !0);
l(H, h, I, "ȷ", "\\j", !0);
l(H, h, I, "ß", "\\ss", !0);
l(H, h, I, "æ", "\\ae", !0);
l(H, h, I, "œ", "\\oe", !0);
l(H, h, I, "ø", "\\o", !0);
l(H, h, I, "Æ", "\\AE", !0);
l(H, h, I, "Œ", "\\OE", !0);
l(H, h, I, "Ø", "\\O", !0);
l(H, h, Ue, "ˊ", "\\'");
l(H, h, Ue, "ˋ", "\\`");
l(H, h, Ue, "ˆ", "\\^");
l(H, h, Ue, "˜", "\\~");
l(H, h, Ue, "ˉ", "\\=");
l(H, h, Ue, "˘", "\\u");
l(H, h, Ue, "˙", "\\.");
l(H, h, Ue, "¸", "\\c");
l(H, h, Ue, "˚", "\\r");
l(H, h, Ue, "ˇ", "\\v");
l(H, h, Ue, "¨", '\\"');
l(H, h, Ue, "˝", "\\H");
l(H, h, Ue, "◯", "\\textcircled");
var Qo = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
l(H, h, I, "–", "--", !0);
l(H, h, I, "–", "\\textendash");
l(H, h, I, "—", "---", !0);
l(H, h, I, "—", "\\textemdash");
l(H, h, I, "‘", "`", !0);
l(H, h, I, "‘", "\\textquoteleft");
l(H, h, I, "’", "'", !0);
l(H, h, I, "’", "\\textquoteright");
l(H, h, I, "“", "``", !0);
l(H, h, I, "“", "\\textquotedblleft");
l(H, h, I, "”", "''", !0);
l(H, h, I, "”", "\\textquotedblright");
l(u, h, I, "°", "\\degree", !0);
l(H, h, I, "°", "\\degree");
l(H, h, I, "°", "\\textdegree", !0);
l(u, h, I, "£", "\\pounds");
l(u, h, I, "£", "\\mathsterling", !0);
l(H, h, I, "£", "\\pounds");
l(H, h, I, "£", "\\textsterling", !0);
l(u, x, I, "✠", "\\maltese");
l(H, x, I, "✠", "\\maltese");
var _s = '0123456789/@."';
for (var N0 = 0; N0 < _s.length; N0++) {
  var Ds = _s.charAt(N0);
  l(u, h, I, Ds, Ds);
}
var Rs = '0123456789!@*()-=+";:?/.,';
for (var C0 = 0; C0 < Rs.length; C0++) {
  var Os = Rs.charAt(C0);
  l(H, h, I, Os, Os);
}
var Kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var _0 = 0; _0 < Kn.length; _0++) {
  var Sn = Kn.charAt(_0);
  l(u, h, fe, Sn, Sn), l(H, h, I, Sn, Sn);
}
l(u, x, I, "C", "ℂ");
l(H, x, I, "C", "ℂ");
l(u, x, I, "H", "ℍ");
l(H, x, I, "H", "ℍ");
l(u, x, I, "N", "ℕ");
l(H, x, I, "N", "ℕ");
l(u, x, I, "P", "ℙ");
l(H, x, I, "P", "ℙ");
l(u, x, I, "Q", "ℚ");
l(H, x, I, "Q", "ℚ");
l(u, x, I, "R", "ℝ");
l(H, x, I, "R", "ℝ");
l(u, x, I, "Z", "ℤ");
l(H, x, I, "Z", "ℤ");
l(u, h, fe, "h", "ℎ");
l(H, h, fe, "h", "ℎ");
var xe = "";
for (var pt = 0; pt < Kn.length; pt++) {
  var Ke = Kn.charAt(pt);
  xe = String.fromCharCode(55349, 56320 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56372 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56424 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56580 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56684 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56736 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56788 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56840 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56944 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), pt < 26 && (xe = String.fromCharCode(55349, 56632 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe), xe = String.fromCharCode(55349, 56476 + pt), l(u, h, fe, Ke, xe), l(H, h, I, Ke, xe));
}
xe = "𝕜";
l(u, h, fe, "k", xe);
l(H, h, I, "k", xe);
for (var vr = 0; vr < 10; vr++) {
  var cr = vr.toString();
  xe = String.fromCharCode(55349, 57294 + vr), l(u, h, fe, cr, xe), l(H, h, I, cr, xe), xe = String.fromCharCode(55349, 57314 + vr), l(u, h, fe, cr, xe), l(H, h, I, cr, xe), xe = String.fromCharCode(55349, 57324 + vr), l(u, h, fe, cr, xe), l(H, h, I, cr, xe), xe = String.fromCharCode(55349, 57334 + vr), l(u, h, fe, cr, xe), l(H, h, I, cr, xe);
}
var ta = "ÐÞþ";
for (var D0 = 0; D0 < ta.length; D0++) {
  var In = ta.charAt(D0);
  l(u, h, fe, In, In), l(H, h, I, In, In);
}
var Mn = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Ls = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], cd = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, s = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [Mn[o][2], Mn[o][s]];
  } else if (120782 <= i && i <= 120831) {
    var c = Math.floor((i - 120782) / 10);
    return [Ls[c][2], Ls[c][s]];
  } else {
    if (i === 120485 || i === 120486)
      return [Mn[0][2], Mn[0][s]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new G("Unsupported character: " + e);
  }
}, u0 = function(e, t, n) {
  return He[n][e] && He[n][e].replace && (e = He[n][e].replace), {
    value: e,
    metrics: Ma(e, t, n)
  };
}, Rt = function(e, t, n, a, i) {
  var s = u0(e, t, n), o = s.metrics;
  e = s.value;
  var c;
  if (o) {
    var d = o.italic;
    (n === "text" || a && a.font === "mathit") && (d = 0), c = new Ct(e, o.height, o.depth, d, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), c = new Ct(e, 0, 0, 0, 0, 0, i);
  if (a) {
    c.maxFontSize = a.sizeMultiplier, a.style.isTight() && c.classes.push("mtight");
    var p = a.getColor();
    p && (c.style.color = p);
  }
  return c;
}, ud = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && u0(e, "Main-Bold", t).metrics ? Rt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || He[t][e].font === "main" ? Rt(e, "Main-Regular", t, n, a) : Rt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, dd = function(e, t, n, a, i) {
  return i !== "textord" && u0(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, hd = function(e, t, n) {
  var a = e.mode, i = e.text, s = ["mord"], o = a === "math" || a === "text" && t.font, c = o ? t.font : t.fontFamily, d = "", p = "";
  if (i.charCodeAt(0) === 55349 && ([d, p] = cd(i, a)), d.length > 0)
    return Rt(i, d, a, t, s.concat(p));
  if (c) {
    var f, b;
    if (c === "boldsymbol") {
      var v = dd(i, a, t, s, n);
      f = v.fontName, b = [v.fontClass];
    } else o ? (f = rl[c].fontName, b = [c]) : (f = Tn(c, t.fontWeight, t.fontShape), b = [c, t.fontWeight, t.fontShape]);
    if (u0(i, f, a).metrics)
      return Rt(i, f, a, t, s.concat(b));
    if (Qo.hasOwnProperty(i) && f.slice(0, 10) === "Typewriter") {
      for (var w = [], k = 0; k < i.length; k++)
        w.push(Rt(i[k], f, a, t, s.concat(b)));
      return tl(w);
    }
  }
  if (n === "mathord")
    return Rt(i, "Math-Italic", a, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var T = He[a][i] && He[a][i].font;
    if (T === "ams") {
      var A = Tn("amsrm", t.fontWeight, t.fontShape);
      return Rt(i, A, a, t, s.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (T === "main" || !T) {
      var C = Tn("textrm", t.fontWeight, t.fontShape);
      return Rt(i, C, a, t, s.concat(t.fontWeight, t.fontShape));
    } else {
      var $ = Tn(T, t.fontWeight, t.fontShape);
      return Rt(i, $, a, t, s.concat($, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, pd = (r, e) => {
  if (pr(r.classes) !== pr(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var n in r.style)
    if (r.style.hasOwnProperty(n) && r.style[n] !== e.style[n])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
      return !1;
  return !0;
}, fd = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof Ct && n instanceof Ct && pd(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Aa = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, vt = function(e, t, n, a) {
  var i = new fn(e, t, n, a);
  return Aa(i), i;
}, el = (r, e, t, n) => new fn(r, e, t, n), md = function(e, t, n) {
  var a = vt([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = Z(a.height), a.maxFontSize = 1, a;
}, gd = function(e, t, n, a) {
  var i = new Ta(e, t, n, a);
  return Aa(i), i;
}, tl = function(e) {
  var t = new pn(e);
  return Aa(t), t;
}, bd = function(e, t) {
  return e instanceof pn ? vt([], [e], t) : e;
}, vd = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, s = 1; s < t.length; s++) {
      var o = -t[s].shift - i - t[s].elem.depth, c = o - (t[s - 1].elem.height + t[s - 1].elem.depth);
      i = i + o, n.push({
        type: "kern",
        size: c
      }), n.push(t[s]);
    }
    return {
      children: n,
      depth: a
    };
  }
  var d;
  if (e.positionType === "top") {
    for (var p = e.positionData, f = 0; f < e.children.length; f++) {
      var b = e.children[f];
      p -= b.type === "kern" ? b.size : b.elem.height + b.elem.depth;
    }
    d = p;
  } else if (e.positionType === "bottom")
    d = -e.positionData;
  else {
    var v = e.children[0];
    if (v.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      d = -v.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      d = -v.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: d
  };
}, xd = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = vd(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var c = o.elem;
      i = Math.max(i, c.maxFontSize, c.height);
    }
  }
  i += 2;
  var d = vt(["pstrut"], []);
  d.style.height = Z(i);
  for (var p = [], f = a, b = a, v = a, w = 0; w < n.length; w++) {
    var k = n[w];
    if (k.type === "kern")
      v += k.size;
    else {
      var T = k.elem, A = k.wrapperClasses || [], C = k.wrapperStyle || {}, $ = vt(A, [d, T], void 0, C);
      $.style.top = Z(-i - v - T.depth), k.marginLeft && ($.style.marginLeft = k.marginLeft), k.marginRight && ($.style.marginRight = k.marginRight), p.push($), v += T.height + T.depth;
    }
    f = Math.min(f, v), b = Math.max(b, v);
  }
  var B = vt(["vlist"], p);
  B.style.height = Z(b);
  var P;
  if (f < 0) {
    var L = vt([], []), z = vt(["vlist"], [L]);
    z.style.height = Z(-f);
    var _ = vt(["vlist-s"], [new Ct("​")]);
    P = [vt(["vlist-r"], [B, _]), vt(["vlist-r"], [z])];
  } else
    P = [vt(["vlist-r"], [B])];
  var q = vt(["vlist-t"], P);
  return P.length === 2 && q.classes.push("vlist-t2"), q.height = b, q.depth = -f, q;
}, wd = (r, e) => {
  var t = vt(["mspace"], [], e), n = We(r, e);
  return t.style.marginRight = Z(n), t;
}, Tn = function(e, t, n) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && n === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, rl = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, nl = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, yd = function(e, t) {
  var [n, a, i] = nl[e], s = new fr(n), o = new tr([s], {
    width: Z(a),
    height: Z(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), c = el(["overlay"], [o], t);
  return c.height = i, c.style.height = Z(i), c.style.width = Z(a), c;
}, E = {
  fontMap: rl,
  makeSymbol: Rt,
  mathsym: ud,
  makeSpan: vt,
  makeSvgSpan: el,
  makeLineSpan: md,
  makeAnchor: gd,
  makeFragment: tl,
  wrapFragment: bd,
  makeVList: xd,
  makeOrd: hd,
  makeGlue: wd,
  staticSvg: yd,
  svgData: nl,
  tryCombineChars: fd
}, Ge = {
  number: 3,
  unit: "mu"
}, xr = {
  number: 4,
  unit: "mu"
}, Xt = {
  number: 5,
  unit: "mu"
}, kd = {
  mord: {
    mop: Ge,
    mbin: xr,
    mrel: Xt,
    minner: Ge
  },
  mop: {
    mord: Ge,
    mop: Ge,
    mrel: Xt,
    minner: Ge
  },
  mbin: {
    mord: xr,
    mop: xr,
    mopen: xr,
    minner: xr
  },
  mrel: {
    mord: Xt,
    mop: Xt,
    mopen: Xt,
    minner: Xt
  },
  mopen: {},
  mclose: {
    mop: Ge,
    mbin: xr,
    mrel: Xt,
    minner: Ge
  },
  mpunct: {
    mord: Ge,
    mop: Ge,
    mrel: Xt,
    mopen: Ge,
    mclose: Ge,
    mpunct: Ge,
    minner: Ge
  },
  minner: {
    mord: Ge,
    mop: Ge,
    mbin: xr,
    mrel: Xt,
    mopen: Ge,
    mpunct: Ge,
    minner: Ge
  }
}, Sd = {
  mord: {
    mop: Ge
  },
  mop: {
    mord: Ge,
    mop: Ge
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Ge
  },
  mpunct: {},
  minner: {
    mop: Ge
  }
}, al = {}, Yn = {}, Jn = {};
function ee(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: s
  } = r, o = {
    type: e,
    numArgs: n.numArgs,
    argTypes: n.argTypes,
    allowedInArgument: !!n.allowedInArgument,
    allowedInText: !!n.allowedInText,
    allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
    numOptionalArgs: n.numOptionalArgs || 0,
    infix: !!n.infix,
    primitive: !!n.primitive,
    handler: a
  }, c = 0; c < t.length; ++c)
    al[t[c]] = o;
  e && (i && (Yn[e] = i), s && (Jn[e] = s));
}
function Tr(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  ee({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: n
  });
}
var Qn = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, et = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, rr = E.makeSpan, Id = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Md = ["rightmost", "mrel", "mclose", "mpunct"], Td = {
  display: me.DISPLAY,
  text: me.TEXT,
  script: me.SCRIPT,
  scriptscript: me.SCRIPTSCRIPT
}, Ad = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, st = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < e.length; s++) {
    var o = _e(e[s], t);
    if (o instanceof pn) {
      var c = o.children;
      i.push(...c);
    } else
      i.push(o);
  }
  if (E.tryCombineChars(i), !n)
    return i;
  var d = t;
  if (e.length === 1) {
    var p = e[0];
    p.type === "sizing" ? d = t.havingSize(p.size) : p.type === "styling" && (d = t.havingStyle(Td[p.style]));
  }
  var f = rr([a[0] || "leftmost"], [], t), b = rr([a[1] || "rightmost"], [], t), v = n === "root";
  return Bs(i, (w, k) => {
    var T = k.classes[0], A = w.classes[0];
    T === "mbin" && Md.includes(A) ? k.classes[0] = "mord" : A === "mbin" && Id.includes(T) && (w.classes[0] = "mord");
  }, {
    node: f
  }, b, v), Bs(i, (w, k) => {
    var T = ra(k), A = ra(w), C = T && A ? w.hasClass("mtight") ? Sd[T][A] : kd[T][A] : null;
    if (C)
      return E.makeGlue(C, d);
  }, {
    node: f
  }, b, v), i;
}, Bs = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], c = il(o);
    if (c) {
      r(c.children, t, n, null, i);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var p = t(o, n.node);
      p && (n.insertAfter ? n.insertAfter(p) : (e.unshift(p), s++));
    }
    d ? n.node = o : i && o.hasClass("newline") && (n.node = rr(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((f) => (b) => {
      e.splice(f + 1, 0, b), s++;
    })(s);
  }
  a && e.pop();
}, il = function(e) {
  return e instanceof pn || e instanceof Ta || e instanceof fn && e.hasClass("enclosing") ? e : null;
}, Ed = function r(e, t) {
  var n = il(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (t === "right")
        return r(a[a.length - 1], "right");
      if (t === "left")
        return r(a[0], "left");
    }
  }
  return e;
}, ra = function(e, t) {
  return e ? (t && (e = Ed(e, t)), Ad[e.classes[0]] || null) : null;
}, ln = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return rr(t.concat(n));
}, _e = function(e, t, n) {
  if (!e)
    return rr();
  if (Yn[e.type]) {
    var a = Yn[e.type](e, t);
    if (n && t.size !== n.size) {
      a = rr(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function An(r, e) {
  var t = rr(["base"], r, e), n = rr(["strut"]);
  return n.style.height = Z(t.height + t.depth), t.depth && (n.style.verticalAlign = Z(-t.depth)), t.children.unshift(n), t;
}
function na(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = st(r, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var c = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (c = !0);
      c || (i.push(An(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(An(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(An(s, e));
  var d;
  t ? (d = An(st(t, e, !0)), d.classes = ["tag"], i.push(d)) : a && i.push(a);
  var p = rr(["katex-html"], i);
  if (p.setAttribute("aria-hidden", "true"), d) {
    var f = d.children[0];
    f.style.height = Z(p.height + p.depth), p.depth && (f.style.verticalAlign = Z(-p.depth));
  }
  return p;
}
function sl(r) {
  return new pn(r);
}
class It {
  constructor(e, t, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = pr(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof Ht && this.children[n + 1] instanceof Ht) {
        for (var a = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof Ht; )
          a += this.children[++n].toText();
        e.appendChild(new Ht(a).toNode());
      } else
        e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += De.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + De.escape(pr(this.classes)) + '"'), e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Ht {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return De.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class $d {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", Z(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + Z(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var U = {
  MathNode: It,
  TextNode: Ht,
  SpaceNode: $d,
  newDocumentFragment: sl
}, _t = function(e, t, n) {
  return He[t][e] && He[t][e].replace && e.charCodeAt(0) !== 55349 && !(Qo.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = He[t][e].replace), new U.TextNode(e);
}, Ea = function(e) {
  return e.length === 1 ? e[0] : new U.MathNode("mrow", e);
}, $a = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var n = t.font;
  if (!n || n === "mathnormal")
    return null;
  var a = e.mode;
  if (n === "mathit")
    return "italic";
  if (n === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (n === "mathbf")
    return "bold";
  if (n === "mathbb")
    return "double-struck";
  if (n === "mathsfit")
    return "sans-serif-italic";
  if (n === "mathfrak")
    return "fraktur";
  if (n === "mathscr" || n === "mathcal")
    return "script";
  if (n === "mathsf")
    return "sans-serif";
  if (n === "mathtt")
    return "monospace";
  var i = e.text;
  if (["\\imath", "\\jmath"].includes(i))
    return null;
  He[a][i] && He[a][i].replace && (i = He[a][i].replace);
  var s = E.fontMap[n].fontName;
  return Ma(i, s, a) ? E.fontMap[n].variant : null;
};
function R0(r) {
  if (!r)
    return !1;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof Ht && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof Ht && t.text === ",";
  } else
    return !1;
}
var kt = function(e, t, n) {
  if (e.length === 1) {
    var a = qe(e[0], t);
    return n && a instanceof It && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, o = 0; o < e.length; o++) {
    var c = qe(e[o], t);
    if (c instanceof It && s instanceof It) {
      if (c.type === "mtext" && s.type === "mtext" && c.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && s.type === "mn") {
        s.children.push(...c.children);
        continue;
      } else if (R0(c) && s.type === "mn") {
        s.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && R0(s))
        c.children = [...s.children, ...c.children], i.pop();
      else if ((c.type === "msup" || c.type === "msub") && c.children.length >= 1 && (s.type === "mn" || R0(s))) {
        var d = c.children[0];
        d instanceof It && d.type === "mn" && (d.children = [...s.children, ...d.children], i.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var p = s.children[0];
        if (p instanceof Ht && p.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var f = c.children[0];
          f instanceof Ht && f.text.length > 0 && (f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1), i.pop());
        }
      }
    }
    i.push(c), s = c;
  }
  return i;
}, mr = function(e, t, n) {
  return Ea(kt(e, t, n));
}, qe = function(e, t) {
  if (!e)
    return new U.MathNode("mrow");
  if (Jn[e.type]) {
    var n = Jn[e.type](e, t);
    return n;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Ps(r, e, t, n, a) {
  var i = kt(r, t), s;
  i.length === 1 && i[0] instanceof It && ["mrow", "mtable"].includes(i[0].type) ? s = i[0] : s = new U.MathNode("mrow", i);
  var o = new U.MathNode("annotation", [new U.TextNode(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var c = new U.MathNode("semantics", [s, o]), d = new U.MathNode("math", [c]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var p = a ? "katex" : "katex-mathml";
  return E.makeSpan([p], [d]);
}
var ol = function(e) {
  return new Yt({
    style: e.displayMode ? me.DISPLAY : me.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, ll = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = E.makeSpan(n, [e]);
  }
  return e;
}, zd = function(e, t, n) {
  var a = ol(n), i;
  if (n.output === "mathml")
    return Ps(e, t, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = na(e, a);
    i = E.makeSpan(["katex"], [s]);
  } else {
    var o = Ps(e, t, a, n.displayMode, !1), c = na(e, a);
    i = E.makeSpan(["katex"], [o, c]);
  }
  return ll(i, n);
}, Nd = function(e, t, n) {
  var a = ol(n), i = na(e, a), s = E.makeSpan(["katex"], [i]);
  return ll(s, n);
}, Cd = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, _d = function(e) {
  var t = new U.MathNode("mo", [new U.TextNode(Cd[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Dd = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Rd = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Od = function(e, t) {
  function n() {
    var o = 4e5, c = e.label.slice(1);
    if (["widehat", "widecheck", "widetilde", "utilde"].includes(c)) {
      var d = e, p = Rd(d.base), f, b, v;
      if (p > 5)
        c === "widehat" || c === "widecheck" ? (f = 420, o = 2364, v = 0.42, b = c + "4") : (f = 312, o = 2340, v = 0.34, b = "tilde4");
      else {
        var w = [1, 1, 2, 2, 3, 3][p];
        c === "widehat" || c === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][w], f = [0, 239, 300, 360, 420][w], v = [0, 0.24, 0.3, 0.3, 0.36, 0.42][w], b = c + w) : (o = [0, 600, 1033, 2339, 2340][w], f = [0, 260, 286, 306, 312][w], v = [0, 0.26, 0.286, 0.3, 0.306, 0.34][w], b = "tilde" + w);
      }
      var k = new fr(b), T = new tr([k], {
        width: "100%",
        height: Z(v),
        viewBox: "0 0 " + o + " " + f,
        preserveAspectRatio: "none"
      });
      return {
        span: E.makeSvgSpan([], [T], t),
        minWidth: 0,
        height: v
      };
    } else {
      var A = [], C = Dd[c], [$, B, P] = C, L = P / 1e3, z = $.length, _, q;
      if (z === 1) {
        var D = C[3];
        _ = ["hide-tail"], q = [D];
      } else if (z === 2)
        _ = ["halfarrow-left", "halfarrow-right"], q = ["xMinYMin", "xMaxYMin"];
      else if (z === 3)
        _ = ["brace-left", "brace-center", "brace-right"], q = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + z + " children.");
      for (var N = 0; N < z; N++) {
        var R = new fr($[N]), ce = new tr([R], {
          width: "400em",
          height: Z(L),
          viewBox: "0 0 " + o + " " + P,
          preserveAspectRatio: q[N] + " slice"
        }), ve = E.makeSvgSpan([_[N]], [ce], t);
        if (z === 1)
          return {
            span: ve,
            minWidth: B,
            height: L
          };
        ve.style.height = Z(L), A.push(ve);
      }
      return {
        span: E.makeSpan(["stretchy"], A, t),
        minWidth: B,
        height: L
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = Z(s), i > 0 && (a.style.minWidth = Z(i)), a;
}, Ld = function(e, t, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (s = E.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var c = i.color && i.getColor();
      c && (s.style.borderColor = c);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new ea({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new ea({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var p = new tr(d, {
      width: "100%",
      height: Z(o)
    });
    s = E.makeSvgSpan([], [p], i);
  }
  return s.height = o, s.style.height = Z(o), s;
}, nr = {
  encloseSpan: Ld,
  mathMLnode: _d,
  svgSpan: Od
};
function Ie(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function za(r) {
  var e = d0(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function d0(r) {
  return r && (r.type === "atom" || ld.hasOwnProperty(r.type)) ? r : null;
}
var Na = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = Ie(r.base, "accent"), t = n.base, r.base = t, a = sd(_e(r, e)), r.base = n) : (n = Ie(r, "accent"), t = n.base);
  var i = _e(t, e.havingCrampedStyle()), s = n.isShifty && De.isCharacterBox(t), o = 0;
  if (s) {
    var c = De.getBaseElem(t), d = _e(c, e.havingCrampedStyle());
    o = Cs(d).skew;
  }
  var p = n.label === "\\c", f = p ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), b;
  if (n.isStretchy)
    b = nr.svgSpan(n, e), b = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: b,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + Z(2 * o) + ")",
          marginLeft: Z(2 * o)
        } : void 0
      }]
    }, e);
  else {
    var v, w;
    n.label === "\\vec" ? (v = E.staticSvg("vec", e), w = E.svgData.vec[1]) : (v = E.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), v = Cs(v), v.italic = 0, w = v.width, p && (f += v.depth)), b = E.makeSpan(["accent-body"], [v]);
    var k = n.label === "\\textcircled";
    k && (b.classes.push("accent-full"), f = i.height);
    var T = o;
    k || (T -= w / 2), b.style.left = Z(T), n.label === "\\textcircled" && (b.style.top = ".2em"), b = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -f
      }, {
        type: "elem",
        elem: b
      }]
    }, e);
  }
  var A = E.makeSpan(["mord", "accent"], [b], e);
  return a ? (a.children[0] = A, a.height = Math.max(A.height, a.height), a.classes[0] = "mord", a) : A;
}, cl = (r, e) => {
  var t = r.isStretchy ? nr.mathMLnode(r.label) : new U.MathNode("mo", [_t(r.label, r.mode)]), n = new U.MathNode("mover", [qe(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, Bd = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
ee({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = Qn(e[0]), n = !Bd.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Na,
  mathmlBuilder: cl
});
ee({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = e[0], n = r.parser.mode;
    return n === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Na,
  mathmlBuilder: cl
});
ee({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = _e(r.base, e), n = nr.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = E.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return E.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = nr.mathMLnode(r.label), n = new U.MathNode("munder", [qe(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var En = (r) => {
  var e = new U.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
ee({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r;
    return {
      type: "xArrow",
      mode: n.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(r, e) {
    var t = e.style, n = e.havingStyle(t.sup()), a = E.wrapFragment(_e(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = E.wrapFragment(_e(r.below, n, e), e), s.classes.push(i + "-arrow-pad"));
    var o = nr.svgSpan(r, e), c = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= a.depth);
    var p;
    if (s) {
      var f = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      p = E.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: c
        }, {
          type: "elem",
          elem: s,
          shift: f
        }]
      }, e);
    } else
      p = E.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: c
        }]
      }, e);
    return p.children[0].children[0].children[1].classes.push("svg-align"), E.makeSpan(["mrel", "x-arrow"], [p], e);
  },
  mathmlBuilder(r, e) {
    var t = nr.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = En(qe(r.body, e));
      if (r.below) {
        var i = En(qe(r.below, e));
        n = new U.MathNode("munderover", [t, i, a]);
      } else
        n = new U.MathNode("mover", [t, a]);
    } else if (r.below) {
      var s = En(qe(r.below, e));
      n = new U.MathNode("munder", [t, s]);
    } else
      n = En(), n = new U.MathNode("mover", [t, n]);
    return n;
  }
});
var Pd = E.makeSpan;
function ul(r, e) {
  var t = st(r.body, e, !0);
  return Pd([r.mclass], t, e);
}
function dl(r, e) {
  var t, n = kt(r.body, e);
  return r.mclass === "minner" ? t = new U.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new U.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new U.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
ee({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: et(a),
      isCharacterBox: De.isCharacterBox(a)
    };
  },
  htmlBuilder: ul,
  mathmlBuilder: dl
});
var h0 = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
ee({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: h0(e[0]),
      body: et(e[1]),
      isCharacterBox: De.isCharacterBox(e[1])
    };
  }
});
ee({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[1], i = e[0], s;
    n !== "\\stackrel" ? s = h0(a) : s = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: et(a)
    }, c = {
      type: "supsub",
      mode: i.mode,
      base: o,
      sup: n === "\\underset" ? null : i,
      sub: n === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: s,
      body: [c],
      isCharacterBox: De.isCharacterBox(c)
    };
  },
  htmlBuilder: ul,
  mathmlBuilder: dl
});
ee({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: h0(e[0]),
      body: et(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = st(r.body, e, !0), n = E.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = kt(r.body, e), n = new U.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var Vd = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Vs = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Fs = (r) => r.type === "textord" && r.text === "@", Fd = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function qd(r, e, t) {
  var n = Vd[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, s = t.callFunction("\\Big", [i], []), o = t.callFunction("\\\\cdright", [e[1]], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [a, s, o]
      };
      return t.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Hd(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new G("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var s = e[i], o = Vs(), c = 0; c < s.length; c++)
      if (!Fs(s[c]))
        o.body.push(s[c]);
      else {
        n.push(o), c += 1;
        var d = za(s[c]).text, p = new Array(2);
        if (p[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, p[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(d) > -1)) if ("<>AV".indexOf(d) > -1)
          for (var f = 0; f < 2; f++) {
            for (var b = !0, v = c + 1; v < s.length; v++) {
              if (Fd(s[v], d)) {
                b = !1, c = v;
                break;
              }
              if (Fs(s[v]))
                throw new G("Missing a " + d + " character to complete a CD arrow.", s[v]);
              p[f].body.push(s[v]);
            }
            if (b)
              throw new G("Missing a " + d + " character to complete a CD arrow.", s[c]);
          }
        else
          throw new G('Expected one of "<>AV=|." after @', s[c]);
        var w = qd(d, p, r), k = {
          type: "styling",
          body: [w],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(k), o = Vs();
      }
    i % 2 === 0 ? n.push(o) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var T = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: T,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
ee({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), n = E.wrapFragment(_e(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = Z(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mrow", [qe(r.label, e)]);
    return t = new U.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new U.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
ee({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = E.wrapFragment(_e(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new U.MathNode("mrow", [qe(r.fragment, e)]);
  }
});
ee({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = Ie(e[0], "ordgroup"), a = n.body, i = "", s = 0; s < a.length; s++) {
      var o = Ie(a[s], "textord");
      i += o.text;
    }
    var c = parseInt(i), d;
    if (isNaN(c))
      throw new G("\\@char has non-numeric argument " + i);
    if (c < 0 || c >= 1114111)
      throw new G("\\@char with invalid code point " + i);
    return c <= 65535 ? d = String.fromCharCode(c) : (c -= 65536, d = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var hl = (r, e) => {
  var t = st(r.body, e.withColor(r.color), !1);
  return E.makeFragment(t);
}, pl = (r, e) => {
  var t = kt(r.body, e.withColor(r.color)), n = new U.MathNode("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
ee({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = Ie(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: et(a)
    };
  },
  htmlBuilder: hl,
  mathmlBuilder: pl
});
ee({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, a = Ie(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: hl,
  mathmlBuilder: pl
});
ee({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && Ie(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = E.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = Z(We(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", Z(We(r.size, e)))), t;
  }
});
var aa = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, fl = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", r);
  return e;
}, jd = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, ml = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
};
ee({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var n = e.fetch();
    if (aa[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = aa[n.text]), Ie(e.parseFunction(), "internal");
    throw new G("Invalid token after macro prefix", n);
  }
});
ee({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new G("Expected a control sequence", n);
    for (var i = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new G('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new G('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new G("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: c
    } = e.gullet.consumeArg();
    return s && c.unshift(s), (t === "\\edef" || t === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(a, {
      tokens: c,
      numArgs: i,
      delimiters: o
    }, t === aa[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
ee({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = fl(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = jd(e);
    return ml(e, n, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
ee({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = fl(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return ml(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var Qr = function(e, t, n) {
  var a = He.math[e] && He.math[e].replace, i = Ma(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Ca = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), s = E.makeSpan(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, gl = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = Z(i), e.height -= i, e.depth += i;
}, Ud = function(e, t, n, a, i, s) {
  var o = E.makeSymbol(e, "Main-Regular", i, a), c = Ca(o, t, a, s);
  return n && gl(c, a, t), c;
}, Gd = function(e, t, n, a) {
  return E.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, bl = function(e, t, n, a, i, s) {
  var o = Gd(e, t, i, a), c = Ca(E.makeSpan(["delimsizing", "size" + t], [o], a), me.TEXT, a, s);
  return n && gl(c, a, me.TEXT), c;
}, O0 = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = E.makeSpan(["delimsizinginner", a], [E.makeSpan([], [E.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, L0 = function(e, t, n) {
  var a = qt["Size4-Regular"][e.charCodeAt(0)] ? qt["Size4-Regular"][e.charCodeAt(0)][4] : qt["Size1-Regular"][e.charCodeAt(0)][4], i = new fr("inner", Y1(e, Math.round(1e3 * t))), s = new tr([i], {
    width: Z(a),
    height: Z(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = E.makeSvgSpan([], [s], n);
  return o.height = t, o.style.height = Z(t), o.style.width = Z(a), {
    type: "elem",
    elem: o
  };
}, ia = 8e-3, $n = {
  type: "kern",
  size: -1 * ia
}, Wd = ["|", "\\lvert", "\\rvert", "\\vert"], Zd = ["\\|", "\\lVert", "\\rVert", "\\Vert"], vl = function(e, t, n, a, i, s) {
  var o, c, d, p, f = "", b = 0;
  o = d = p = e, c = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = p = "⏐" : e === "\\Uparrow" ? d = p = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", p = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", p = "\\Downarrow") : Wd.includes(e) ? (d = "∣", f = "vert", b = 333) : Zd.includes(e) ? (d = "∥", f = "doublevert", b = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", p = "⎣", v = "Size4-Regular", f = "lbrack", b = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", p = "⎦", v = "Size4-Regular", f = "rbrack", b = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", p = "⎣", v = "Size4-Regular", f = "lfloor", b = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = p = "⎢", v = "Size4-Regular", f = "lceil", b = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", p = "⎦", v = "Size4-Regular", f = "rfloor", b = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = p = "⎥", v = "Size4-Regular", f = "rceil", b = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", p = "⎝", v = "Size4-Regular", f = "lparen", b = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", p = "⎠", v = "Size4-Regular", f = "rparen", b = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", c = "⎨", p = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", c = "⎬", p = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", p = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", p = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", p = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", p = "⎩", d = "⎪", v = "Size4-Regular");
  var w = Qr(o, v, i), k = w.height + w.depth, T = Qr(d, v, i), A = T.height + T.depth, C = Qr(p, v, i), $ = C.height + C.depth, B = 0, P = 1;
  if (c !== null) {
    var L = Qr(c, v, i);
    B = L.height + L.depth, P = 2;
  }
  var z = k + $ + B, _ = Math.max(0, Math.ceil((t - z) / (P * A))), q = z + _ * P * A, D = a.fontMetrics().axisHeight;
  n && (D *= a.sizeMultiplier);
  var N = q / 2 - D, R = [];
  if (f.length > 0) {
    var ce = q - k - $, ve = Math.round(q * 1e3), he = J1(f, Math.round(ce * 1e3)), O = new fr(f, he), K = (b / 1e3).toFixed(3) + "em", Y = (ve / 1e3).toFixed(3) + "em", pe = new tr([O], {
      width: K,
      height: Y,
      viewBox: "0 0 " + b + " " + ve
    }), we = E.makeSvgSpan([], [pe], a);
    we.height = ve / 1e3, we.style.width = K, we.style.height = Y, R.push({
      type: "elem",
      elem: we
    });
  } else {
    if (R.push(O0(p, v, i)), R.push($n), c === null) {
      var $e = q - k - $ + 2 * ia;
      R.push(L0(d, $e, a));
    } else {
      var Ne = (q - k - $ - B) / 2 + 2 * ia;
      R.push(L0(d, Ne, a)), R.push($n), R.push(O0(c, v, i)), R.push($n), R.push(L0(d, Ne, a));
    }
    R.push($n), R.push(O0(o, v, i));
  }
  var tt = a.havingBaseStyle(me.TEXT), je = E.makeVList({
    positionType: "bottom",
    positionData: N,
    children: R
  }, tt);
  return Ca(E.makeSpan(["delimsizing", "mult"], [je], tt), me.TEXT, a, s);
}, B0 = 80, P0 = 0.08, V0 = function(e, t, n, a, i) {
  var s = K1(e, a, n), o = new fr(e, s), c = new tr([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: Z(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return E.makeSvgSpan(["hide-tail"], [c], i);
}, Xd = function(e, t) {
  var n = t.havingBaseSizing(), a = kl("\\surd", e * n.sizeMultiplier, yl, n), i = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, c = 0, d = 0, p = 0, f;
  return a.type === "small" ? (p = 1e3 + 1e3 * s + B0, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), c = (1 + s + P0) / i, d = (1 + s) / i, o = V0("sqrtMain", c, p, s, t), o.style.minWidth = "0.853em", f = 0.833 / i) : a.type === "large" ? (p = (1e3 + B0) * tn[a.size], d = (tn[a.size] + s) / i, c = (tn[a.size] + s + P0) / i, o = V0("sqrtSize" + a.size, c, p, s, t), o.style.minWidth = "1.02em", f = 1 / i) : (c = e + s + P0, d = e + s, p = Math.floor(1e3 * e + s) + B0, o = V0("sqrtTall", c, p, s, t), o.style.minWidth = "0.742em", f = 1.056), o.height = d, o.style.height = Z(c), {
    span: o,
    advanceWidth: f,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * i
  };
}, xl = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Kd = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], wl = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], tn = [0, 1.2, 1.8, 2.4, 3], Yd = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), xl.includes(e) || wl.includes(e))
    return bl(e, t, !1, n, a, i);
  if (Kd.includes(e))
    return vl(e, tn[t], !1, n, a, i);
  throw new G("Illegal delimiter: '" + e + "'");
}, Jd = [{
  type: "small",
  style: me.SCRIPTSCRIPT
}, {
  type: "small",
  style: me.SCRIPT
}, {
  type: "small",
  style: me.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], Qd = [{
  type: "small",
  style: me.SCRIPTSCRIPT
}, {
  type: "small",
  style: me.SCRIPT
}, {
  type: "small",
  style: me.TEXT
}, {
  type: "stack"
}], yl = [{
  type: "small",
  style: me.SCRIPTSCRIPT
}, {
  type: "small",
  style: me.SCRIPT
}, {
  type: "small",
  style: me.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], eh = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, kl = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length && n[s].type !== "stack"; s++) {
    var o = Qr(e, eh(n[s]), "math"), c = o.height + o.depth;
    if (n[s].type === "small") {
      var d = a.havingBaseStyle(n[s].style);
      c *= d.sizeMultiplier;
    }
    if (c > t)
      return n[s];
  }
  return n[n.length - 1];
}, Sl = function(e, t, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  wl.includes(e) ? o = Jd : xl.includes(e) ? o = yl : o = Qd;
  var c = kl(e, t, o, a);
  return c.type === "small" ? Ud(e, c.style, n, a, i, s) : c.type === "large" ? bl(e, c.size, n, a, i, s) : vl(e, t, n, a, i, s);
}, th = function(e, t, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, c = 901, d = 5 / a.fontMetrics().ptPerEm, p = Math.max(t - o, n + o), f = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    p / 500 * c,
    2 * p - d
  );
  return Sl(e, f, !0, a, i, s);
}, er = {
  sqrtImage: Xd,
  sizedDelim: Yd,
  sizeToMaxHeight: tn,
  customSizedDelim: Sl,
  leftRightDelim: th
}, qs = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, rh = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function p0(r, e) {
  var t = d0(r);
  if (t && rh.includes(t.text))
    return t;
  throw t ? new G("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new G("Invalid delimiter type '" + r.type + "'", r);
}
ee({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = p0(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: qs[r.funcName].size,
      mclass: qs[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? E.makeSpan([r.mclass]) : er.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(_t(r.delim, r.mode));
    var t = new U.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = Z(er.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Hs(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
ee({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new G("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: p0(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
ee({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = p0(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = Ie(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (r, e) => {
    Hs(r);
    for (var t = st(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < t.length; s++)
      t[s].isMiddle ? i = !0 : (n = Math.max(t[s].height, n), a = Math.max(t[s].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var o;
    if (r.left === "." ? o = ln(e, ["mopen"]) : o = er.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(o), i)
      for (var c = 1; c < t.length; c++) {
        var d = t[c], p = d.isMiddle;
        p && (t[c] = er.leftRightDelim(p.delim, n, a, p.options, r.mode, []));
      }
    var f;
    if (r.right === ".")
      f = ln(e, ["mclose"]);
    else {
      var b = r.rightColor ? e.withColor(r.rightColor) : e;
      f = er.leftRightDelim(r.right, n, a, b, r.mode, ["mclose"]);
    }
    return t.push(f), E.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Hs(r);
    var t = kt(r.body, e);
    if (r.left !== ".") {
      var n = new U.MathNode("mo", [_t(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new U.MathNode("mo", [_t(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Ea(t);
  }
});
ee({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = p0(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new G("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = ln(e, []);
    else {
      t = er.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? _t("|", "text") : _t(r.delim, r.mode), n = new U.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var _a = (r, e) => {
  var t = E.wrapFragment(_e(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, s = 0, o = De.isCharacterBox(r.body);
  if (n === "sout")
    i = E.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var c = We({
      number: 0.6,
      unit: "pt"
    }, e), d = We({
      number: 0.35,
      unit: "ex"
    }, e), p = e.havingBaseSizing();
    a = a / p.sizeMultiplier;
    var f = t.height + t.depth + c + d;
    t.style.paddingLeft = Z(f / 2 + c);
    var b = Math.floor(1e3 * f * a), v = Z1(b), w = new tr([new fr("phase", v)], {
      width: "400em",
      height: Z(b / 1e3),
      viewBox: "0 0 400000 " + b,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = E.makeSvgSpan(["hide-tail"], [w], e), i.style.height = Z(f), s = t.depth + c + d;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var k = 0, T = 0, A = 0;
    /box/.test(n) ? (A = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), k = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : A), T = k) : n === "angl" ? (A = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), k = 4 * A, T = Math.max(0, 0.25 - t.depth)) : (k = o ? 0.2 : 0, T = k), i = nr.encloseSpan(t, n, k, T, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = Z(A)) : n === "angl" && A !== 0.049 && (i.style.borderTopWidth = Z(A), i.style.borderRightWidth = Z(A)), s = t.depth + T, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var C;
  if (r.backgroundColor)
    C = E.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: s
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var $ = /cancel|phase/.test(n) ? ["svg-align"] : [];
    C = E.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: s,
          wrapperClasses: $
        }
      ]
    }, e);
  }
  return /cancel/.test(n) && (C.height = t.height, C.depth = t.depth), /cancel/.test(n) && !o ? E.makeSpan(["mord", "cancel-lap"], [C], e) : E.makeSpan(["mord"], [C], e);
}, Da = (r, e) => {
  var t = 0, n = new U.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [qe(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * t + "pt"), n.setAttribute("height", "+" + 2 * t + "pt"), n.setAttribute("lspace", t + "pt"), n.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        n.setAttribute("style", "border: " + a + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
ee({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = Ie(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: s
    };
  },
  htmlBuilder: _a,
  mathmlBuilder: Da
});
ee({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = Ie(e[0], "color-token").color, s = Ie(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: s,
      borderColor: i,
      body: o
    };
  },
  htmlBuilder: _a,
  mathmlBuilder: Da
});
ee({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
ee({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
    };
  },
  htmlBuilder: _a,
  mathmlBuilder: Da
});
ee({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Il = {};
function jt(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: s
  } = r, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, c = 0; c < t.length; ++c)
    Il[t[c]] = o;
  i && (Yn[e] = i), s && (Jn[e] = s);
}
var Ml = {};
function m(r, e) {
  Ml[r] = e;
}
function js(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var f0 = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new G("{" + r.envName + "} can be used only in display mode.");
};
function Ra(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function gr(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: s,
    colSeparationType: o,
    autoTag: c,
    singleRow: d,
    emptySingleRow: p,
    maxNumCols: f,
    leqno: b
  } = e;
  if (r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var v = r.gullet.expandMacroAsText("\\arraystretch");
    if (v == null)
      s = 1;
    else if (s = parseFloat(v), !s || s < 0)
      throw new G("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var w = [], k = [w], T = [], A = [], C = c != null ? [] : void 0;
  function $() {
    c && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function B() {
    C && (r.gullet.macros.get("\\df@tag") ? (C.push(r.subparse([new Tt("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : C.push(!!c && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for ($(), A.push(js(r)); ; ) {
    var P = r.parseExpression(!1, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), P = {
      type: "ordgroup",
      mode: r.mode,
      body: P
    }, t && (P = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [P]
    }), w.push(P);
    var L = r.fetch().text;
    if (L === "&") {
      if (f && w.length === f) {
        if (d || o)
          throw new G("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (L === "\\end") {
      B(), w.length === 1 && P.type === "styling" && P.body[0].body.length === 0 && (k.length > 1 || !p) && k.pop(), A.length < k.length + 1 && A.push([]);
      break;
    } else if (L === "\\\\") {
      r.consume();
      var z = void 0;
      r.gullet.future().text !== " " && (z = r.parseSizeGroup(!0)), T.push(z ? z.value : null), B(), A.push(js(r)), w = [], k.push(w), $();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: s,
    body: k,
    cols: i,
    rowGaps: T,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: A,
    colSeparationType: o,
    tags: C,
    leqno: b
  };
}
function Oa(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var Ut = function(e, t) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, c = new Array(i), d = [], p = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), f = 1 / t.fontMetrics().ptPerEm, b = 5 * f;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(me.SCRIPT).sizeMultiplier;
    b = 0.2778 * (v / t.sizeMultiplier);
  }
  var w = e.colSeparationType === "CD" ? We({
    number: 3,
    unit: "ex"
  }, t) : 12 * f, k = 3 * f, T = e.arraystretch * w, A = 0.7 * T, C = 0.3 * T, $ = 0;
  function B(j) {
    for (var Fe = 0; Fe < j.length; ++Fe)
      Fe > 0 && ($ += 0.25), d.push({
        pos: $,
        isDashed: j[Fe]
      });
  }
  for (B(s[0]), n = 0; n < e.body.length; ++n) {
    var P = e.body[n], L = A, z = C;
    o < P.length && (o = P.length);
    var _ = new Array(P.length);
    for (a = 0; a < P.length; ++a) {
      var q = _e(P[a], t);
      z < q.depth && (z = q.depth), L < q.height && (L = q.height), _[a] = q;
    }
    var D = e.rowGaps[n], N = 0;
    D && (N = We(D, t), N > 0 && (N += C, z < N && (z = N), N = 0)), e.addJot && (z += k), _.height = L, _.depth = z, $ += L, _.pos = $, $ += z + N, c[n] = _, B(s[n + 1]);
  }
  var R = $ / 2 + t.fontMetrics().axisHeight, ce = e.cols || [], ve = [], he, O, K = [];
  if (e.tags && e.tags.some((j) => j))
    for (n = 0; n < i; ++n) {
      var Y = c[n], pe = Y.pos - R, we = e.tags[n], $e = void 0;
      we === !0 ? $e = E.makeSpan(["eqn-num"], [], t) : we === !1 ? $e = E.makeSpan([], [], t) : $e = E.makeSpan([], st(we, t, !0), t), $e.depth = Y.depth, $e.height = Y.height, K.push({
        type: "elem",
        elem: $e,
        shift: pe
      });
    }
  for (
    a = 0, O = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || O < ce.length;
    ++a, ++O
  ) {
    for (var Ne = ce[O] || {}, tt = !0; Ne.type === "separator"; ) {
      if (tt || (he = E.makeSpan(["arraycolsep"], []), he.style.width = Z(t.fontMetrics().doubleRuleSep), ve.push(he)), Ne.separator === "|" || Ne.separator === ":") {
        var je = Ne.separator === "|" ? "solid" : "dashed", Je = E.makeSpan(["vertical-separator"], [], t);
        Je.style.height = Z($), Je.style.borderRightWidth = Z(p), Je.style.borderRightStyle = je, Je.style.margin = "0 " + Z(-p / 2);
        var Et = $ - R;
        Et && (Je.style.verticalAlign = Z(-Et)), ve.push(Je);
      } else
        throw new G("Invalid separator type: " + Ne.separator);
      O++, Ne = ce[O] || {}, tt = !1;
    }
    if (!(a >= o)) {
      var Ae = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Ae = De.deflt(Ne.pregap, b), Ae !== 0 && (he = E.makeSpan(["arraycolsep"], []), he.style.width = Z(Ae), ve.push(he)));
      var Ee = [];
      for (n = 0; n < i; ++n) {
        var $t = c[n], ie = $t[a];
        if (ie) {
          var sr = $t.pos - R;
          ie.depth = $t.depth, ie.height = $t.height, Ee.push({
            type: "elem",
            elem: ie,
            shift: sr
          });
        }
      }
      Ee = E.makeVList({
        positionType: "individualShift",
        children: Ee
      }, t), Ee = E.makeSpan(["col-align-" + (Ne.align || "c")], [Ee]), ve.push(Ee), (a < o - 1 || e.hskipBeforeAndAfter) && (Ae = De.deflt(Ne.postgap, b), Ae !== 0 && (he = E.makeSpan(["arraycolsep"], []), he.style.width = Z(Ae), ve.push(he)));
    }
  }
  if (c = E.makeSpan(["mtable"], ve), d.length > 0) {
    for (var or = E.makeLineSpan("hline", t, p), Bt = E.makeLineSpan("hdashline", t, p), ct = [{
      type: "elem",
      elem: c,
      shift: 0
    }]; d.length > 0; ) {
      var ye = d.pop(), W = ye.pos - R;
      ye.isDashed ? ct.push({
        type: "elem",
        elem: Bt,
        shift: W
      }) : ct.push({
        type: "elem",
        elem: or,
        shift: W
      });
    }
    c = E.makeVList({
      positionType: "individualShift",
      children: ct
    }, t);
  }
  if (K.length === 0)
    return E.makeSpan(["mord"], [c], t);
  var ae = E.makeVList({
    positionType: "individualShift",
    children: K
  }, t);
  return ae = E.makeSpan(["tag"], [ae], t), E.makeFragment([c, ae]);
}, nh = {
  c: "center ",
  l: "left ",
  r: "right "
}, Gt = function(e, t) {
  for (var n = [], a = new U.MathNode("mtd", [], ["mtr-glue"]), i = new U.MathNode("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], c = [], d = 0; d < o.length; d++)
      c.push(new U.MathNode("mtd", [qe(o[d], t)]));
    e.tags && e.tags[s] && (c.unshift(a), c.push(a), e.leqno ? c.unshift(i) : c.push(i)), n.push(new U.MathNode("mtr", c));
  }
  var p = new U.MathNode("mtable", n), f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  p.setAttribute("rowspacing", Z(f));
  var b = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var w = e.cols, k = "", T = !1, A = 0, C = w.length;
    w[0].type === "separator" && (b += "top ", A = 1), w[w.length - 1].type === "separator" && (b += "bottom ", C -= 1);
    for (var $ = A; $ < C; $++)
      w[$].type === "align" ? (v += nh[w[$].align], T && (k += "none "), T = !0) : w[$].type === "separator" && T && (k += w[$].separator === "|" ? "solid " : "dashed ", T = !1);
    p.setAttribute("columnalign", v.trim()), /[sd]/.test(k) && p.setAttribute("columnlines", k.trim());
  }
  if (e.colSeparationType === "align") {
    for (var B = e.cols || [], P = "", L = 1; L < B.length; L++)
      P += L % 2 ? "0em " : "1em ";
    p.setAttribute("columnspacing", P.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? p.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? p.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? p.setAttribute("columnspacing", "0.5em") : p.setAttribute("columnspacing", "1em");
  var z = "", _ = e.hLinesBeforeRow;
  b += _[0].length > 0 ? "left " : "", b += _[_.length - 1].length > 0 ? "right " : "";
  for (var q = 1; q < _.length - 1; q++)
    z += _[q].length === 0 ? "none " : _[q][0] ? "dashed " : "solid ";
  return /[sd]/.test(z) && p.setAttribute("rowlines", z.trim()), b !== "" && (p = new U.MathNode("menclose", [p]), p.setAttribute("notation", b.trim())), e.arraystretch && e.arraystretch < 1 && (p = new U.MathNode("mstyle", [p]), p.setAttribute("scriptlevel", "1")), p;
}, Tl = function(e, t) {
  e.envName.indexOf("ed") === -1 && f0(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", s = gr(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : Ra(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), o, c = 0, d = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var p = "", f = 0; f < t[0].body.length; f++) {
      var b = Ie(t[0].body[f], "textord");
      p += b.text;
    }
    o = Number(p), c = o * 2;
  }
  var v = !c;
  s.body.forEach(function(A) {
    for (var C = 1; C < A.length; C += 2) {
      var $ = Ie(A[C], "styling"), B = Ie($.body[0], "ordgroup");
      B.body.unshift(d);
    }
    if (v)
      c < A.length && (c = A.length);
    else {
      var P = A.length / 2;
      if (o < P)
        throw new G("Too many math in a row: " + ("expected " + o + ", but got " + P), A[0]);
    }
  });
  for (var w = 0; w < c; ++w) {
    var k = "r", T = 0;
    w % 2 === 1 ? k = "l" : w > 0 && v && (T = 1), n[w] = {
      type: "align",
      align: k,
      pregap: T,
      postgap: 0
    };
  }
  return s.colSeparationType = v ? "align" : "alignat", s;
};
jt({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = d0(e[0]), n = t ? [e[0]] : Ie(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = za(s), c = o.text;
      if ("lcr".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      if (c === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (c === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new G("Unknown column alignment: " + c, s);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return gr(r.parser, i, Oa(r.envName));
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var a = r.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new G("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = gr(r.parser, n, Oa(r.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
    return i.cols = new Array(s).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = gr(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = d0(e[0]), n = t ? [e[0]] : Ie(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = za(s), c = o.text;
      if ("lc".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      throw new G("Unknown column alignment: " + c, s);
    });
    if (a.length > 1)
      throw new G("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = gr(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new G("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = gr(r.parser, e, Oa(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Tl,
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    ["gather", "gather*"].includes(r.envName) && f0(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Ra(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return gr(r.parser, e, "display");
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Tl,
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    f0(r);
    var e = {
      autoTag: Ra(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return gr(r.parser, e, "display");
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
jt({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return f0(r), Hd(r.parser);
  },
  htmlBuilder: Ut,
  mathmlBuilder: Gt
});
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
ee({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new G(r.funcName + " valid only within array environment");
  }
});
var Us = Il;
ee({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    if (a.type !== "ordgroup")
      throw new G("Invalid environment name", a);
    for (var i = "", s = 0; s < a.body.length; ++s)
      i += Ie(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!Us.hasOwnProperty(i))
        throw new G("No such environment: " + i, a);
      var o = Us[i], {
        args: c,
        optArgs: d
      } = t.parseArguments("\\begin{" + i + "}", o), p = {
        mode: t.mode,
        envName: i,
        parser: t
      }, f = o.handler(p, c, d);
      t.expect("\\end", !1);
      var b = t.nextToken, v = Ie(t.parseFunction(), "environment");
      if (v.name !== i)
        throw new G("Mismatch: \\begin{" + i + "} matched by \\end{" + v.name + "}", b);
      return f;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var Al = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return _e(r.body, n);
}, El = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return qe(r.body, n);
}, Gs = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
ee({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = Qn(e[0]), i = n;
    return i in Gs && (i = Gs[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Al,
  mathmlBuilder: El
});
ee({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0], a = De.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: h0(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: a
    };
  }
});
ee({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      breakOnTokenText: a
    } = r, {
      mode: i
    } = t, s = t.parseExpression(!0, a), o = "math" + n.slice(1);
    return {
      type: "font",
      mode: i,
      font: o,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: s
      }
    };
  },
  htmlBuilder: Al,
  mathmlBuilder: El
});
var $l = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= me.SCRIPT.id ? t.text() : me.DISPLAY : r === "text" && t.size === me.DISPLAY.size ? t = me.TEXT : r === "script" ? t = me.SCRIPT : r === "scriptscript" && (t = me.SCRIPTSCRIPT), t;
}, La = (r, e) => {
  var t = $l(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var s = _e(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < c ? c : s.depth;
  }
  i = e.havingStyle(a);
  var d = _e(r.denom, i, e), p, f, b;
  r.hasBarLine ? (r.barSize ? (f = We(r.barSize, e), p = E.makeLineSpan("frac-line", e, f)) : p = E.makeLineSpan("frac-line", e), f = p.height, b = p.height) : (p = null, f = 0, b = e.fontMetrics().defaultRuleThickness);
  var v, w, k;
  t.size === me.DISPLAY.size || r.size === "display" ? (v = e.fontMetrics().num1, f > 0 ? w = 3 * b : w = 7 * b, k = e.fontMetrics().denom1) : (f > 0 ? (v = e.fontMetrics().num2, w = b) : (v = e.fontMetrics().num3, w = 3 * b), k = e.fontMetrics().denom2);
  var T;
  if (p) {
    var C = e.fontMetrics().axisHeight;
    v - s.depth - (C + 0.5 * f) < w && (v += w - (v - s.depth - (C + 0.5 * f))), C - 0.5 * f - (d.height - k) < w && (k += w - (C - 0.5 * f - (d.height - k)));
    var $ = -(C - 0.5 * f);
    T = E.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: k
      }, {
        type: "elem",
        elem: p,
        shift: $
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    }, e);
  } else {
    var A = v - s.depth - (d.height - k);
    A < w && (v += 0.5 * (w - A), k += 0.5 * (w - A)), T = E.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: k
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    }, e);
  }
  i = e.havingStyle(t), T.height *= i.sizeMultiplier / e.sizeMultiplier, T.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var B;
  t.size === me.DISPLAY.size ? B = e.fontMetrics().delim1 : t.size === me.SCRIPTSCRIPT.size ? B = e.havingStyle(me.SCRIPT).fontMetrics().delim2 : B = e.fontMetrics().delim2;
  var P, L;
  return r.leftDelim == null ? P = ln(e, ["mopen"]) : P = er.customSizedDelim(r.leftDelim, B, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? L = E.makeSpan([]) : r.rightDelim == null ? L = ln(e, ["mclose"]) : L = er.customSizedDelim(r.rightDelim, B, !0, e.havingStyle(t), r.mode, ["mclose"]), E.makeSpan(["mord"].concat(i.sizingClasses(e)), [P, E.makeSpan(["mfrac"], [T]), L], e);
}, Ba = (r, e) => {
  var t = new U.MathNode("mfrac", [qe(r.numer, e), qe(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = We(r.barSize, e);
    t.setAttribute("linethickness", Z(n));
  }
  var a = $l(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new U.MathNode("mstyle", [t]);
    var i = a.size === me.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var s = [];
    if (r.leftDelim != null) {
      var o = new U.MathNode("mo", [new U.TextNode(r.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), s.push(o);
    }
    if (s.push(t), r.rightDelim != null) {
      var c = new U.MathNode("mo", [new U.TextNode(r.rightDelim.replace("\\", ""))]);
      c.setAttribute("fence", "true"), s.push(c);
    }
    return Ea(s);
  }
  return t;
};
ee({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1], s, o = null, c = null, d = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        s = !0;
        break;
      case "\\\\atopfrac":
        s = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        s = !1, o = "(", c = ")";
        break;
      case "\\\\bracefrac":
        s = !1, o = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        s = !1, o = "[", c = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        d = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        d = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: s,
      leftDelim: o,
      rightDelim: c,
      size: d,
      barSize: null
    };
  },
  htmlBuilder: La,
  mathmlBuilder: Ba
});
ee({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
ee({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: n
    } = r, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: n
    };
  }
});
var Ws = ["display", "text", "script", "scriptscript"], Zs = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
ee({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], a = e[5], i = Qn(e[0]), s = i.type === "atom" && i.family === "open" ? Zs(i.text) : null, o = Qn(e[1]), c = o.type === "atom" && o.family === "close" ? Zs(o.text) : null, d = Ie(e[2], "size"), p, f = null;
    d.isBlank ? p = !0 : (f = d.value, p = f.number > 0);
    var b = "auto", v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var w = Ie(v.body[0], "textord");
        b = Ws[Number(w.text)];
      }
    } else
      v = Ie(v, "textord"), b = Ws[Number(v.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: p,
      barSize: f,
      leftDelim: s,
      rightDelim: c,
      size: b
    };
  },
  htmlBuilder: La,
  mathmlBuilder: Ba
});
ee({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: Ie(e[0], "size").value,
      token: a
    };
  }
});
ee({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = _1(Ie(e[1], "infix").size), s = e[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: s,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: La,
  mathmlBuilder: Ba
});
var zl = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? _e(r.sup, e.havingStyle(t.sup()), e) : _e(r.sub, e.havingStyle(t.sub()), e), a = Ie(r.base, "horizBrace")) : a = Ie(r, "horizBrace");
  var i = _e(a.base, e.havingBaseStyle(me.DISPLAY)), s = nr.svgSpan(a, e), o;
  if (a.isOver ? (o = E.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: s
    }]
  }, e), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = E.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + s.height,
    children: [{
      type: "elem",
      elem: s
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), o.children[0].children[0].children[0].classes.push("svg-align")), n) {
    var c = E.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
    a.isOver ? o = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }, e) : o = E.makeVList({
      positionType: "bottom",
      positionData: c.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: c
      }]
    }, e);
  }
  return E.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
}, ah = (r, e) => {
  var t = nr.mathMLnode(r.label);
  return new U.MathNode(r.isOver ? "mover" : "munder", [qe(r.base, e), t]);
};
ee({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: e[0]
    };
  },
  htmlBuilder: zl,
  mathmlBuilder: ah
});
ee({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], a = Ie(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: et(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = st(r.body, e, !1);
    return E.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = mr(r.body, e);
    return t instanceof It || (t = new It("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
ee({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = Ie(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < n.length; i++) {
      var s = n[i];
      s === "~" && (s = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: s
      });
    }
    var o = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: n,
      body: et(o)
    };
  }
});
ee({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: et(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = st(r.body, e, !1);
    return E.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new U.MathNode("mrow", kt(r.body, e));
  }
});
ee({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r, i = Ie(e[0], "raw").string, s = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, c = {};
    switch (n) {
      case "\\htmlClass":
        c.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        c.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        c.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var d = i.split(","), p = 0; p < d.length; p++) {
          var f = d[p].split("=");
          if (f.length !== 2)
            throw new G("Error parsing key-value for \\htmlData");
          c["data-" + f[0].trim()] = f[1].trim();
        }
        o = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(o) ? {
      type: "html",
      mode: t.mode,
      attributes: c,
      body: et(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = st(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = E.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => mr(r.body, e)
});
ee({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: et(e[0]),
      mathml: et(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = st(r.html, e, !1);
    return E.makeFragment(t);
  },
  mathmlBuilder: (r, e) => mr(r.mathml, e)
});
var F0 = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new G("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!Xo(n))
    throw new G("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
ee({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, s = {
      number: 0,
      unit: "em"
    }, o = "";
    if (t[0])
      for (var c = Ie(t[0], "raw").string, d = c.split(","), p = 0; p < d.length; p++) {
        var f = d[p].split("=");
        if (f.length === 2) {
          var b = f[1].trim();
          switch (f[0].trim()) {
            case "alt":
              o = b;
              break;
            case "width":
              a = F0(b);
              break;
            case "height":
              i = F0(b);
              break;
            case "totalheight":
              s = F0(b);
              break;
            default:
              throw new G("Invalid key: '" + f[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = Ie(e[0], "url").url;
    return o === "" && (o = v, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: v
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: a,
      height: i,
      totalheight: s,
      src: v
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = We(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = We(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = We(r.width, e));
    var i = {
      height: Z(t + n)
    };
    a > 0 && (i.width = Z(a)), n > 0 && (i.verticalAlign = Z(-n));
    var s = new ad(r.src, r.alt, i);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new U.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = We(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = We(r.totalheight, e) - n, t.setAttribute("valign", Z(-a))), t.setAttribute("height", Z(n + a)), r.width.number > 0) {
      var i = We(r.width, e);
      t.setAttribute("width", Z(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
ee({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = Ie(e[0], "size");
    if (t.settings.strict) {
      var i = n[1] === "m", s = a.value.unit === "mu";
      i ? (s || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : s && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(r, e) {
    return E.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = We(r.dimension, e);
    return new U.SpaceNode(t);
  }
});
ee({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: n.slice(5),
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = E.makeSpan([], [_e(r.body, e)]), t = E.makeSpan(["inner"], [t], e)) : t = E.makeSpan(["inner"], [_e(r.body, e)]);
    var n = E.makeSpan(["fix"], []), a = E.makeSpan([r.alignment], [t, n], e), i = E.makeSpan(["strut"]);
    return i.style.height = Z(a.height + a.depth), a.depth && (i.style.verticalAlign = Z(-a.depth)), a.children.unshift(i), a = E.makeSpan(["thinbox"], [a], e), E.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new U.MathNode("mpadded", [qe(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
ee({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    var {
      funcName: t,
      parser: n
    } = r, a = n.mode;
    n.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", s = n.parseExpression(!1, i);
    return n.expect(i), n.switchMode(a), {
      type: "styling",
      mode: n.mode,
      style: "text",
      body: s
    };
  }
});
ee({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new G("Mismatched " + r.funcName);
  }
});
var Xs = (r, e) => {
  switch (e.style.size) {
    case me.DISPLAY.size:
      return r.display;
    case me.TEXT.size:
      return r.text;
    case me.SCRIPT.size:
      return r.script;
    case me.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
ee({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: et(e[0]),
      text: et(e[1]),
      script: et(e[2]),
      scriptscript: et(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Xs(r, e), n = st(t, e, !1);
    return E.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Xs(r, e);
    return mr(t, e);
  }
});
var Nl = (r, e, t, n, a, i, s) => {
  r = E.makeSpan([], [r]);
  var o = t && De.isCharacterBox(t), c, d;
  if (e) {
    var p = _e(e, n.havingStyle(a.sup()), n);
    d = {
      elem: p,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - p.depth)
    };
  }
  if (t) {
    var f = _e(t, n.havingStyle(a.sub()), n);
    c = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height)
    };
  }
  var b;
  if (d && c) {
    var v = n.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r.depth + s;
    b = E.makeVList({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: Z(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: Z(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (c) {
    var w = r.height - s;
    b = E.makeVList({
      positionType: "top",
      positionData: w,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: Z(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, n);
  } else if (d) {
    var k = r.depth + s;
    b = E.makeVList({
      positionType: "bottom",
      positionData: k,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: Z(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return r;
  var T = [b];
  if (c && i !== 0 && !o) {
    var A = E.makeSpan(["mspace"], [], n);
    A.style.marginRight = Z(i), T.unshift(A);
  }
  return E.makeSpan(["mop", "op-limits"], T, n);
}, Cl = ["\\smallint"], Gr = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = Ie(r.base, "op"), a = !0) : i = Ie(r, "op");
  var s = e.style, o = !1;
  s.size === me.DISPLAY.size && i.symbol && !Cl.includes(i.name) && (o = !0);
  var c;
  if (i.symbol) {
    var d = o ? "Size2-Regular" : "Size1-Regular", p = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (p = i.name.slice(1), i.name = p === "oiint" ? "\\iint" : "\\iiint"), c = E.makeSymbol(i.name, d, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), p.length > 0) {
      var f = c.italic, b = E.staticSvg(p + "Size" + (o ? "2" : "1"), e);
      c = E.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: c,
          shift: 0
        }, {
          type: "elem",
          elem: b,
          shift: o ? 0.08 : 0
        }]
      }, e), i.name = "\\" + p, c.classes.unshift("mop"), c.italic = f;
    }
  } else if (i.body) {
    var v = st(i.body, e, !0);
    v.length === 1 && v[0] instanceof Ct ? (c = v[0], c.classes[0] = "mop") : c = E.makeSpan(["mop"], v, e);
  } else {
    for (var w = [], k = 1; k < i.name.length; k++)
      w.push(E.mathsym(i.name[k], i.mode, e));
    c = E.makeSpan(["mop"], w, e);
  }
  var T = 0, A = 0;
  return (c instanceof Ct || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (T = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, A = c.italic), a ? Nl(c, t, n, e, s, A, T) : (T && (c.style.position = "relative", c.style.top = Z(T)), c);
}, mn = (r, e) => {
  var t;
  if (r.symbol)
    t = new It("mo", [_t(r.name, r.mode)]), Cl.includes(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new It("mo", kt(r.body, e));
  else {
    t = new It("mi", [new Ht(r.name.slice(1))]);
    var n = new It("mo", [_t("⁡", "text")]);
    r.parentIsSupSub ? t = new It("mrow", [t, n]) : t = sl([t, n]);
  }
  return t;
}, ih = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
ee({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = n;
    return a.length === 1 && (a = ih[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: Gr,
  mathmlBuilder: mn
});
ee({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: et(n)
    };
  },
  htmlBuilder: Gr,
  mathmlBuilder: mn
});
var sh = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
ee({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Gr,
  mathmlBuilder: mn
});
ee({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Gr,
  mathmlBuilder: mn
});
ee({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = sh[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Gr,
  mathmlBuilder: mn
});
var _l = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = Ie(r.base, "operatorname"), a = !0) : i = Ie(r, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((f) => {
      var b = f.text;
      return typeof b == "string" ? {
        type: "textord",
        mode: f.mode,
        text: b
      } : f;
    }), c = st(o, e.withFont("mathrm"), !0), d = 0; d < c.length; d++) {
      var p = c[d];
      p instanceof Ct && (p.text = p.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = E.makeSpan(["mop"], c, e);
  } else
    s = E.makeSpan(["mop"], [], e);
  return a ? Nl(s, t, n, e, e.style, 0, 0) : s;
}, oh = (r, e) => {
  for (var t = kt(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof U.SpaceNode)) if (i instanceof U.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof U.TextNode ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = t.map((p) => p.toText()).join("");
    t = [new U.TextNode(o)];
  }
  var c = new U.MathNode("mi", t);
  c.setAttribute("mathvariant", "normal");
  var d = new U.MathNode("mo", [_t("⁡", "text")]);
  return r.parentIsSupSub ? new U.MathNode("mrow", [c, d]) : U.newDocumentFragment([c, d]);
};
ee({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: et(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: _l,
  mathmlBuilder: oh
});
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Tr({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? E.makeFragment(st(r.body, e, !1)) : E.makeSpan(["mord"], st(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return mr(r.body, e, !0);
  }
});
ee({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = _e(r.body, e.havingCrampedStyle()), n = E.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return E.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mo", [new U.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new U.MathNode("mover", [qe(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
ee({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: et(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = st(r.body, e.withPhantom(), !1);
    return E.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = kt(r.body, e);
    return new U.MathNode("mphantom", t);
  }
});
ee({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = E.makeSpan([], [_e(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0, t.children[n].depth = 0;
    return t = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), E.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = kt(et(r.body), e), n = new U.MathNode("mphantom", t), a = new U.MathNode("mpadded", [n]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
ee({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = E.makeSpan(["inner"], [_e(r.body, e.withPhantom())]), n = E.makeSpan(["fix"], []);
    return E.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = kt(et(r.body), e), n = new U.MathNode("mphantom", t), a = new U.MathNode("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
ee({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = Ie(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = _e(r.body, e), n = We(r.dy, e);
    return E.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mpadded", [qe(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
ee({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInArgument: !0
  },
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
ee({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"]
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = Ie(e[0], "size"), s = Ie(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && Ie(a, "size").value,
      width: i.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = E.makeSpan(["mord", "rule"], [], e), n = We(r.width, e), a = We(r.height, e), i = r.shift ? We(r.shift, e) : 0;
    return t.style.borderRightWidth = Z(n), t.style.borderTopWidth = Z(a), t.style.bottom = Z(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = We(r.width, e), n = We(r.height, e), a = r.shift ? We(r.shift, e) : 0, i = e.color && e.getColor() || "black", s = new U.MathNode("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", Z(t)), s.setAttribute("height", Z(n));
    var o = new U.MathNode("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", Z(a)) : (o.setAttribute("height", Z(a)), o.setAttribute("depth", Z(-a))), o.setAttribute("voffset", Z(a)), o;
  }
});
function Dl(r, e, t) {
  for (var n = st(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return E.makeFragment(n);
}
var Ks = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], lh = (r, e) => {
  var t = e.havingSize(r.size);
  return Dl(r.body, t, e);
};
ee({
  type: "sizing",
  names: Ks,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: Ks.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: lh,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = kt(r.body, t), a = new U.MathNode("mstyle", n);
    return a.setAttribute("mathsize", Z(t.sizeMultiplier)), a;
  }
});
ee({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = !1, i = !1, s = t[0] && Ie(t[0], "ordgroup");
    if (s)
      for (var o = "", c = 0; c < s.body.length; ++c) {
        var d = s.body[c];
        if (o = d.text, o === "t")
          a = !0;
        else if (o === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var p = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: p,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = E.makeSpan([], [_e(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return E.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new U.MathNode("mpadded", [qe(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
ee({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(r, e) {
    var t = _e(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = E.wrapFragment(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < me.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = t.height + t.depth + s + a, {
      span: c,
      ruleWidth: d,
      advanceWidth: p
    } = er.sqrtImage(o, e), f = c.height - d;
    f > t.height + t.depth + s && (s = (s + f - t.height - t.depth) / 2);
    var b = c.height - t.height - s - d;
    t.style.paddingLeft = Z(p);
    var v = E.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + b)
      }, {
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: d
      }]
    }, e);
    if (r.index) {
      var w = e.havingStyle(me.SCRIPTSCRIPT), k = _e(r.index, w, e), T = 0.6 * (v.height - v.depth), A = E.makeVList({
        positionType: "shift",
        positionData: -T,
        children: [{
          type: "elem",
          elem: k
        }]
      }, e), C = E.makeSpan(["root"], [A]);
      return E.makeSpan(["mord", "sqrt"], [C, v], e);
    } else
      return E.makeSpan(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new U.MathNode("mroot", [qe(t, e), qe(n, e)]) : new U.MathNode("msqrt", [qe(t, e)]);
  }
});
var Ys = {
  display: me.DISPLAY,
  text: me.TEXT,
  script: me.SCRIPT,
  scriptscript: me.SCRIPTSCRIPT
};
ee({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!0, t), s = n.slice(1, n.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: s,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = Ys[r.style], n = e.havingStyle(t).withFont("");
    return Dl(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = Ys[r.style], n = e.havingStyle(t), a = kt(r.body, n), i = new U.MathNode("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var ch = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === me.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? Gr : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === me.DISPLAY.size || n.limits);
      return i ? _l : null;
    } else {
      if (n.type === "accent")
        return De.isCharacterBox(n.base) ? Na : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? zl : null;
      } else
        return null;
    }
  else return null;
};
Tr({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = ch(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, s = _e(n, e), o, c, d = e.fontMetrics(), p = 0, f = 0, b = n && De.isCharacterBox(n);
    if (a) {
      var v = e.havingStyle(e.style.sup());
      o = _e(a, v, e), b || (p = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var w = e.havingStyle(e.style.sub());
      c = _e(i, w, e), b || (f = s.depth + w.fontMetrics().subDrop * w.sizeMultiplier / e.sizeMultiplier);
    }
    var k;
    e.style === me.DISPLAY ? k = d.sup1 : e.style.cramped ? k = d.sup3 : k = d.sup2;
    var T = e.sizeMultiplier, A = Z(0.5 / d.ptPerEm / T), C = null;
    if (c) {
      var $ = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (s instanceof Ct || $) && (C = Z(-s.italic));
    }
    var B;
    if (o && c) {
      p = Math.max(p, k, o.depth + 0.25 * d.xHeight), f = Math.max(f, d.sub2);
      var P = d.defaultRuleThickness, L = 4 * P;
      if (p - o.depth - (c.height - f) < L) {
        f = L - (p - o.depth) + c.height;
        var z = 0.8 * d.xHeight - (p - o.depth);
        z > 0 && (p += z, f -= z);
      }
      var _ = [{
        type: "elem",
        elem: c,
        shift: f,
        marginRight: A,
        marginLeft: C
      }, {
        type: "elem",
        elem: o,
        shift: -p,
        marginRight: A
      }];
      B = E.makeVList({
        positionType: "individualShift",
        children: _
      }, e);
    } else if (c) {
      f = Math.max(f, d.sub1, c.height - 0.8 * d.xHeight);
      var q = [{
        type: "elem",
        elem: c,
        marginLeft: C,
        marginRight: A
      }];
      B = E.makeVList({
        positionType: "shift",
        positionData: f,
        children: q
      }, e);
    } else if (o)
      p = Math.max(p, k, o.depth + 0.25 * d.xHeight), B = E.makeVList({
        positionType: "shift",
        positionData: -p,
        children: [{
          type: "elem",
          elem: o,
          marginRight: A
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var D = ra(s, "right") || "mord";
    return E.makeSpan([D], [s, E.makeSpan(["msupsub"], [B])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [qe(r.base, e)];
    r.sub && i.push(qe(r.sub, e)), r.sup && i.push(qe(r.sup, e));
    var s;
    if (t)
      s = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var d = r.base;
        d && d.type === "op" && d.limits && e.style === me.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === me.DISPLAY || d.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var c = r.base;
        c && c.type === "op" && c.limits && (e.style === me.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === me.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === me.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === me.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new U.MathNode(s, i);
  }
});
Tr({
  type: "atom",
  htmlBuilder(r, e) {
    return E.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mo", [_t(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = $a(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Rl = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Tr({
  type: "mathord",
  htmlBuilder(r, e) {
    return E.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mi", [_t(r.text, r.mode, e)]), n = $a(r, e) || "italic";
    return n !== Rl[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
Tr({
  type: "textord",
  htmlBuilder(r, e) {
    return E.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = _t(r.text, r.mode, e), n = $a(r, e) || "normal", a;
    return r.mode === "text" ? a = new U.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new U.MathNode("mn", [t]) : r.text === "\\prime" ? a = new U.MathNode("mo", [t]) : a = new U.MathNode("mi", [t]), n !== Rl[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var q0 = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, H0 = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
Tr({
  type: "spacing",
  htmlBuilder(r, e) {
    if (H0.hasOwnProperty(r.text)) {
      var t = H0[r.text].className || "";
      if (r.mode === "text") {
        var n = E.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return E.makeSpan(["mspace", t], [E.mathsym(r.text, r.mode, e)], e);
    } else {
      if (q0.hasOwnProperty(r.text))
        return E.makeSpan(["mspace", q0[r.text]], [], e);
      throw new G('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (H0.hasOwnProperty(r.text))
      t = new U.MathNode("mtext", [new U.TextNode(" ")]);
    else {
      if (q0.hasOwnProperty(r.text))
        return new U.MathNode("mspace");
      throw new G('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Js = () => {
  var r = new U.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
Tr({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mtable", [new U.MathNode("mtr", [Js(), new U.MathNode("mtd", [mr(r.body, e)]), Js(), new U.MathNode("mtd", [mr(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Qs = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, eo = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, uh = {
  "\\textit": "textit",
  "\\textup": "textup"
}, to = (r, e) => {
  var t = r.font;
  if (t) {
    if (Qs[t])
      return e.withTextFontFamily(Qs[t]);
    if (eo[t])
      return e.withTextFontWeight(eo[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(uh[t]);
};
ee({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: et(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = to(r, e), n = st(r.body, t, !0);
    return E.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = to(r, e);
    return mr(r.body, t);
  }
});
ee({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = _e(r.body, e), n = E.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = E.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return E.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new U.MathNode("mo", [new U.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new U.MathNode("munder", [qe(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
ee({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = _e(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return E.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new U.MathNode("mpadded", [qe(r.body, e)], ["vcenter"]);
  }
});
ee({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new G("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = ro(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var s = t[i];
      s === "~" && (s = "\\textasciitilde"), n.push(E.makeSymbol(s, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return E.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), E.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new U.TextNode(ro(r)), n = new U.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var ro = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), dr = al, Ol = `[ \r
	]`, dh = "\\\\[a-zA-Z@]+", hh = "\\\\[^\uD800-\uDFFF]", ph = "(" + dh + ")" + Ol + "*", fh = `\\\\(
|[ \r	]+
?)[ \r	]*`, sa = "[̀-ͯ]", mh = new RegExp(sa + "+$"), gh = "(" + Ol + "+)|" + // whitespace
(fh + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(sa + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(sa + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + ph) + // \macroName + spaces
("|" + hh + ")");
class no {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(gh, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new Tt("EOF", new xt(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new G("Unexpected character: '" + e[t] + "'", new Tt(e[t], new xt(this, t, t + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Tt(a, new xt(this, t, this.tokenRegex.lastIndex));
  }
}
class bh {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new G("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, n) {
    if (n === void 0 && (n = !1), n) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var vh = Ml;
m("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
m("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
m("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
m("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
m("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var ao = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
m("\\char", function(r) {
  var e = r.popToken(), t, n = "";
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new G("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = ao[e.text], n == null || n >= t)
      throw new G("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = ao[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Pa = (r, e, t, n) => {
  var a = r.consumeArg().tokens;
  if (a.length !== 1)
    throw new G("\\newcommand's first argument must be a macro name");
  var i = a[0].text, s = r.isDefined(i);
  if (s && !e)
    throw new G("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!s && !t)
    throw new G("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var o = 0;
  if (a = r.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var c = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      c += d.text, d = r.expandNextToken();
    if (!c.match(/^\s*[0-9]+\s*$/))
      throw new G("Invalid number of arguments: " + c);
    o = parseInt(c), a = r.consumeArg().tokens;
  }
  return s && n || r.macros.set(i, {
    tokens: a,
    numArgs: o
  }), "";
};
m("\\newcommand", (r) => Pa(r, !1, !0, !1));
m("\\renewcommand", (r) => Pa(r, !0, !1, !1));
m("\\providecommand", (r) => Pa(r, !0, !0, !0));
m("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
m("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
m("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), dr[t], He.math[t], He.text[t]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
m("ℬ", "\\mathscr{B}");
m("ℰ", "\\mathscr{E}");
m("ℱ", "\\mathscr{F}");
m("ℋ", "\\mathscr{H}");
m("ℐ", "\\mathscr{I}");
m("ℒ", "\\mathscr{L}");
m("ℳ", "\\mathscr{M}");
m("ℛ", "\\mathscr{R}");
m("ℭ", "\\mathfrak{C}");
m("ℌ", "\\mathfrak{H}");
m("ℨ", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("·", "\\cdotp");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
m("\\ne", "\\neq");
m("≠", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
m("∉", "\\notin");
m("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
m("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
m("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
m("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
m("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
m("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
m("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
m("⟂", "\\perp");
m("‼", "\\mathclose{!\\mkern-0.8mu!}");
m("∌", "\\notni");
m("⌜", "\\ulcorner");
m("⌝", "\\urcorner");
m("⌞", "\\llcorner");
m("⌟", "\\lrcorner");
m("©", "\\copyright");
m("®", "\\textregistered");
m("️", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("⋮", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var io = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
m("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in io ? e = io[t] : (t.slice(0, 4) === "\\not" || t in He.math && ["bin", "rel"].includes(He.math[t].group)) && (e = "\\dotsb"), e;
});
var Va = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
m("\\dotso", function(r) {
  var e = r.future().text;
  return e in Va ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Va && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(r) {
  var e = r.future().text;
  return e in Va ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new G("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Ll = Z(qt["Main-Regular"][84][1] - 0.7 * qt["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Ll + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Ll + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
m("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
m("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
m("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
m("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
m("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
m("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
m("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
m("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
m("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
m("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
m("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
m("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
m("∷", "\\dblcolon");
m("∹", "\\eqcolon");
m("≔", "\\coloneqq");
m("≕", "\\eqqcolon");
m("⩴", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
m("\\imath", "\\html@mathml{\\@imath}{ı}");
m("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
m("⟦", "\\llbracket");
m("⟧", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
m("⦃", "\\lBrace");
m("⦄", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
m("⦵", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var Bl = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (f) => (b) => {
    r && (b.macros.set("|", s), a.length && b.macros.set("\\|", o));
    var v = f;
    if (!f && a.length) {
      var w = b.future();
      w.text === "|" && (b.popToken(), v = !0);
    }
    return {
      tokens: v ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", c(!1)), a.length && e.macros.set("\\|", c(!0));
  var d = e.consumeArg().tokens, p = e.expandTokens([
    ...i,
    ...d,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: p.reverse(),
    numArgs: 0
  };
};
m("\\bra@ket", Bl(!1));
m("\\bra@set", Bl(!0));
m("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Pl = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class xh {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new bh(vh, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new no(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, n, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: a,
        end: n
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: t,
        end: n
      } = this.consumeArg());
    return this.pushToken(new Tt("EOF", n.loc)), this.pushTokens(a), new Tt("", xt.range(t, n));
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], n = e && e.length > 0;
    n || this.consumeSpaces();
    var a = this.future(), i, s = 0, o = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++s;
      else if (i.text === "}") {
        if (--s, s === -1)
          throw new G("Extra }", i);
      } else if (i.text === "EOF")
        throw new G("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", i);
      if (e && n)
        if ((s === 0 || s === 1 && e[o] === "{") && i.text === e[o]) {
          if (++o, o === e.length) {
            t.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (s !== 0 || n);
    return a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new G("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new G("Use of the macro doesn't match its definition", i);
      }
    }
    for (var s = [], o = 0; o < e; o++)
      s.push(this.consumeArg(t && t[o + 1]).tokens);
    return s;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new G("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), n = t.text, a = t.noexpand ? null : this._getExpansion(n);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && n[0] === "\\" && !this.isDefined(n))
        throw new G("Undefined control sequence: " + n);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, s = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o];
        if (c.text === "#") {
          if (o === 0)
            throw new G("Incomplete placeholder at end of macro body", c);
          if (c = i[--o], c.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(c.text))
            i.splice(o, 2, ...s[+c.text - 1]);
          else
            throw new G("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new Tt(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], n = this.stack.length;
    for (this.pushTokens(e); this.stack.length > n; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), t.push(a);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((n) => n.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var n = this.lexer.catcodes[e];
      if (n != null && n !== 13)
        return;
    }
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var s = a.replace(/##/g, ""); s.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var o = new no(a, this.settings), c = [], d = o.lex(); d.text !== "EOF"; )
        c.push(d), d = o.lex();
      c.reverse();
      var p = {
        tokens: c,
        numArgs: i
      };
      return p;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || dr.hasOwnProperty(e) || He.math.hasOwnProperty(e) || He.text.hasOwnProperty(e) || Pl.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : dr.hasOwnProperty(e) && !dr[e].primitive;
  }
}
var so = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, zn = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), j0 = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, oo = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class m0 {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new xh(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new G("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new Tt("}")), this.gullet.pushTokens(e);
    var n = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, n;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var n = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (m0.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && dr[a.text] && dr[a.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      n.push(i);
    }
    return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, n, a = 0; a < e.length; a++)
      if (e[a].type === "infix") {
        if (t !== -1)
          throw new G("only one infix operator per group", e[a].token);
        t = a, n = e[a].replaceWith;
      }
    if (t !== -1 && n) {
      var i, s, o = e.slice(0, t), c = e.slice(t + 1);
      o.length === 1 && o[0].type === "ordgroup" ? i = o[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: o
      }, c.length === 1 && c[0].type === "ordgroup" ? s = c[0] : s = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      };
      var d;
      return n === "\\\\abovefrac" ? d = this.callFunction(n, [i, e[t], s], []) : d = this.callFunction(n, [i, s], []), [d];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), n = t.text;
    this.consume(), this.consumeSpaces();
    var a;
    do {
      var i;
      a = this.parseGroup(e);
    } while (((i = a) == null ? void 0 : i.type) === "internal");
    if (!a)
      throw new G("Expected group after '" + n + "'", t);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], n = 0; n < e.length; n++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[n]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (t?.type === "internal" || this.mode === "text")
      return t;
    for (var n, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var s = i.text === "\\limits";
          t.limits = s, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new G("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n)
          throw new G("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new G("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n)
          throw new G("Double superscript", i);
        var o = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, c = [o];
        for (this.consume(); this.fetch().text === "'"; )
          c.push(o), this.consume();
        this.fetch().text === "^" && c.push(this.handleSupSubscript("superscript")), n = {
          type: "ordgroup",
          mode: this.mode,
          body: c
        };
      } else if (zn[i.text]) {
        var d = so.test(i.text), p = [];
        for (p.push(new Tt(zn[i.text])), this.consume(); ; ) {
          var f = this.fetch().text;
          if (!zn[f] || so.test(f) !== d)
            break;
          p.unshift(new Tt(zn[f])), this.consume();
        }
        var b = this.subparse(p);
        d ? a = {
          type: "ordgroup",
          mode: "math",
          body: b
        } : n = {
          type: "ordgroup",
          mode: "math",
          body: b
        };
      } else
        break;
    }
    return n || a ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: n,
      sub: a
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var n = this.fetch(), a = n.text, i = dr[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new G("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !i.allowedInText)
      throw new G("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new G("Can't use function '" + a + "' in math mode", n);
    var {
      args: s,
      optArgs: o
    } = this.parseArguments(a, i);
    return this.callFunction(a, s, o, n, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, n, a, i) {
    var s = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, o = dr[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new G("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var n = t.numArgs + t.numOptionalArgs;
    if (n === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var a = [], i = [], s = 0; s < n; s++) {
      var o = t.argTypes && t.argTypes[s], c = s < t.numOptionalArgs;
      (t.primitive && o == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && s === 1 && i[0] == null) && (o = "primitive");
      var d = this.parseGroupOfType("argument to '" + e + "'", o, c);
      if (c)
        i.push(d);
      else if (d != null)
        a.push(d);
      else
        throw new G("Null argument, please report this as a bug");
    }
    return {
      args: a,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, n) {
    switch (t) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, t);
      case "hbox": {
        var a = this.parseArgumentGroup(n, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", n);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (n)
          throw new G("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new G("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new G("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var n = this.gullet.scanArgument(t);
    if (n == null)
      return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      a += i.text, this.consume();
    return this.consume(), n.text = a, n;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var n = this.fetch(), a = n, i = "", s; (s = this.fetch()).text !== "EOF" && e.test(i + s.text); )
      a = s, i += a.text, this.consume();
    if (i === "")
      throw new G("Invalid " + t + ": '" + n.text + "'", n);
    return n.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!n)
      throw new G("Invalid color: '" + t.text + "'", t);
    var a = n[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, n = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", n = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a)
      throw new G("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!Xo(i))
      throw new G("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: n
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: n
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var n = this.gullet.scanArgument(e);
    if (n == null)
      return null;
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var s = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: i
    };
    return t && this.switchMode(a), s;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var n = this.fetch(), a = n.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var s = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, s), c = this.fetch();
      this.expect(s), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: xt.range(n, c),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !Pl.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new G("Undefined control sequence: " + a, n);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, n = 0; n < t; ++n) {
      var a = e[n], i = a.text;
      i === "-" && e[n + 1].text === "-" && (n + 1 < t && e[n + 2].text === "-" ? (e.splice(n, 3, {
        type: "textord",
        mode: "text",
        loc: xt.range(a, e[n + 2]),
        text: "---"
      }), t -= 2) : (e.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: xt.range(a, e[n + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[n + 1].text === i && (e.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: xt.range(a, e[n + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var n = t.slice(5), a = n.charAt(0) === "*";
      if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1))
        throw new G(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: a
      };
    }
    oo.hasOwnProperty(t[0]) && !He[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = oo[t[0]] + t.slice(1));
    var i = mh.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (He[this.mode][t]) {
      this.settings.strict && this.mode === "math" && ta.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = He[this.mode][t].group, c = xt.range(e), d;
      if (od.hasOwnProperty(o)) {
        var p = o;
        d = {
          type: "atom",
          mode: this.mode,
          family: p,
          loc: c,
          text: t
        };
      } else
        d = {
          type: o,
          mode: this.mode,
          loc: c,
          text: t
        };
      s = d;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (Zo(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: xt.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var f = 0; f < i[0].length; f++) {
        var b = i[0][f];
        if (!j0[b])
          throw new G("Unknown accent ' " + b + "'", e);
        var v = j0[b][this.mode] || j0[b].text;
        if (!v)
          throw new G("Accent " + b + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: xt.range(e),
          label: v,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: s
        };
      }
    return s;
  }
}
m0.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Fa = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new m0(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new G("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new Tt("\\df@tag")])
    }];
  }
  return a;
}, Vl = function(e, t, n) {
  t.textContent = "";
  var a = qa(e, n).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Vl = function() {
  throw new G("KaTeX doesn't work in quirks mode.");
});
var wh = function(e, t) {
  var n = qa(e, t).toMarkup();
  return n;
}, yh = function(e, t) {
  var n = new Sa(t);
  return Fa(e, n);
}, Fl = function(e, t, n) {
  if (n.throwOnError || !(e instanceof G))
    throw e;
  var a = E.makeSpan(["katex-error"], [new Ct(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, qa = function(e, t) {
  var n = new Sa(t);
  try {
    var a = Fa(e, n);
    return zd(a, e, n);
  } catch (i) {
    return Fl(i, e, n);
  }
}, kh = function(e, t) {
  var n = new Sa(t);
  try {
    var a = Fa(e, n);
    return Nd(a, e, n);
  } catch (i) {
    return Fl(i, e, n);
  }
}, Sh = "0.16.25", Ih = {
  Span: fn,
  Anchor: Ta,
  SymbolNode: Ct,
  SvgNode: tr,
  PathNode: fr,
  LineNode: ea
}, Mh = {
  /**
   * Current KaTeX version
   */
  version: Sh,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Vl,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: wh,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: G,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: qn,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: yh,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: qa,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: kh,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Q1,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: l,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: ee,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: m,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: Ih
};
const Th = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, Ah = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, Eh = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function $h(r = {}) {
  return {
    extensions: [
      zh(r, lo(r, !1)),
      Nh(r, lo(r, !0))
    ]
  };
}
function lo(r, e) {
  return (t) => Mh.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function zh(r, e) {
  const t = r && r.nonStandard, n = t ? Ah : Th;
  return {
    name: "inlineKatex",
    level: "inline",
    start(a) {
      let i, s = a;
      for (; s; ) {
        if (i = s.indexOf("$"), i === -1)
          return;
        if ((t ? i > -1 : i === 0 || s.charAt(i - 1) === " ") && s.substring(i).match(n))
          return i;
        s = s.substring(i + 1).replace(/^\$+/, "");
      }
    },
    tokenizer(a, i) {
      const s = a.match(n);
      if (s)
        return {
          type: "inlineKatex",
          raw: s[0],
          text: s[2].trim(),
          displayMode: s[1].length === 2
        };
    },
    renderer: e
  };
}
function Nh(r, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(t, n) {
      const a = t.match(Eh);
      if (a)
        return {
          type: "blockKatex",
          raw: a[0],
          text: a[2].trim(),
          displayMode: a[1].length === 2
        };
    },
    renderer: e
  };
}
function Ch(r) {
  if (typeof r == "function" && (r = {
    highlight: r
  }), !r || typeof r.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), {
    async: !!r.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = co(e.lang);
      if (r.async)
        return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then(uo(e));
      const n = r.highlight(e.text, t, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      uo(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, n) {
        typeof e == "object" && (n = e.escaped, t = e.lang, e = e.text);
        const a = co(t), i = a ? r.langPrefix + po(a) : r.emptyLangClass, s = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : po(e, !0)}
</code></pre>`;
      }
    }
  };
}
function co(r) {
  return (r || "").match(/\S*/)[0];
}
function uo(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = !0, r.text = e);
  };
}
const ql = /[&<>"']/, _h = new RegExp(ql.source, "g"), Hl = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Dh = new RegExp(Hl.source, "g"), Rh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ho = (r) => Rh[r];
function po(r, e) {
  if (e) {
    if (ql.test(r))
      return r.replace(_h, ho);
  } else if (Hl.test(r))
    return r.replace(Dh, ho);
  return r;
}
function jl(r) {
  return r instanceof Map ? r.clear = r.delete = r.set = function() {
    throw new Error("map is read-only");
  } : r instanceof Set && (r.add = r.clear = r.delete = function() {
    throw new Error("set is read-only");
  }), Object.freeze(r), Object.getOwnPropertyNames(r).forEach((e) => {
    const t = r[e], n = typeof t;
    (n === "object" || n === "function") && !Object.isFrozen(t) && jl(t);
  }), r;
}
class fo {
  /**
   * @param {CompiledMode} mode
   */
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function Ul(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function hr(r, ...e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n in r)
    t[n] = r[n];
  return e.forEach(function(n) {
    for (const a in n)
      t[a] = n[a];
  }), /** @type {T} */
  t;
}
const Oh = "</span>", mo = (r) => !!r.scope, Lh = (r, { prefix: e }) => {
  if (r.startsWith("language:"))
    return r.replace("language:", "language-");
  if (r.includes(".")) {
    const t = r.split(".");
    return [
      `${e}${t.shift()}`,
      ...t.map((n, a) => `${n}${"_".repeat(a + 1)}`)
    ].join(" ");
  }
  return `${e}${r}`;
};
class Bh {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(e, t) {
    this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(e) {
    this.buffer += Ul(e);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(e) {
    if (!mo(e)) return;
    const t = Lh(
      e.scope,
      { prefix: this.classPrefix }
    );
    this.span(t);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(e) {
    mo(e) && (this.buffer += Oh);
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
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const go = (r = {}) => {
  const e = { children: [] };
  return Object.assign(e, r), e;
};
class Ha {
  constructor() {
    this.rootNode = go(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(e) {
    this.top.children.push(e);
  }
  /** @param {string} scope */
  openNode(e) {
    const t = go({ scope: e });
    this.add(t), this.stack.push(t);
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
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(e, t) {
    return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((n) => this._walk(e, n)), e.closeNode(t)), e;
  }
  /**
   * @param {Node} node
   */
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((t) => typeof t == "string") ? e.children = [e.children.join("")] : e.children.forEach((t) => {
      Ha._collapse(t);
    }));
  }
}
class Ph extends Ha {
  /**
   * @param {*} options
   */
  constructor(e) {
    super(), this.options = e;
  }
  /**
   * @param {string} text
   */
  addText(e) {
    e !== "" && this.add(e);
  }
  /** @param {string} scope */
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(e, t) {
    const n = e.root;
    t && (n.scope = `language:${t}`), this.add(n);
  }
  toHTML() {
    return new Bh(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function cn(r) {
  return r ? typeof r == "string" ? r : r.source : null;
}
function Gl(r) {
  return Ar("(?=", r, ")");
}
function Vh(r) {
  return Ar("(?:", r, ")*");
}
function Fh(r) {
  return Ar("(?:", r, ")?");
}
function Ar(...r) {
  return r.map((t) => cn(t)).join("");
}
function qh(r) {
  const e = r[r.length - 1];
  return typeof e == "object" && e.constructor === Object ? (r.splice(r.length - 1, 1), e) : {};
}
function ja(...r) {
  return "(" + (qh(r).capture ? "" : "?:") + r.map((n) => cn(n)).join("|") + ")";
}
function Wl(r) {
  return new RegExp(r.toString() + "|").exec("").length - 1;
}
function Hh(r, e) {
  const t = r && r.exec(e);
  return t && t.index === 0;
}
const jh = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Ua(r, { joinWith: e }) {
  let t = 0;
  return r.map((n) => {
    t += 1;
    const a = t;
    let i = cn(n), s = "";
    for (; i.length > 0; ) {
      const o = jh.exec(i);
      if (!o) {
        s += i;
        break;
      }
      s += i.substring(0, o.index), i = i.substring(o.index + o[0].length), o[0][0] === "\\" && o[1] ? s += "\\" + String(Number(o[1]) + a) : (s += o[0], o[0] === "(" && t++);
    }
    return s;
  }).map((n) => `(${n})`).join(e);
}
const Uh = /\b\B/, Zl = "[a-zA-Z]\\w*", Ga = "[a-zA-Z_]\\w*", Xl = "\\b\\d+(\\.\\d+)?", Kl = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Yl = "\\b(0b[01]+)", Gh = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Wh = (r = {}) => {
  const e = /^#![ ]*\//;
  return r.binary && (r.begin = Ar(
    e,
    /.*\b/,
    r.binary,
    /\b.*/
  )), hr({
    scope: "meta",
    begin: e,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (t, n) => {
      t.index !== 0 && n.ignoreMatch();
    }
  }, r);
}, un = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
}, Zh = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [un]
}, Xh = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [un]
}, Kh = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
}, g0 = function(r, e, t = {}) {
  const n = hr(
    {
      scope: "comment",
      begin: r,
      end: e,
      contains: []
    },
    t
  );
  n.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: !0,
    relevance: 0
  });
  const a = ja(
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
  return n.contains.push(
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
      begin: Ar(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        a,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  ), n;
}, Yh = g0("//", "$"), Jh = g0("/\\*", "\\*/"), Qh = g0("#", "$"), ep = {
  scope: "number",
  begin: Xl,
  relevance: 0
}, tp = {
  scope: "number",
  begin: Kl,
  relevance: 0
}, rp = {
  scope: "number",
  begin: Yl,
  relevance: 0
}, np = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    un,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [un]
    }
  ]
}, ap = {
  scope: "title",
  begin: Zl,
  relevance: 0
}, ip = {
  scope: "title",
  begin: Ga,
  relevance: 0
}, sp = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + Ga,
  relevance: 0
}, op = function(r) {
  return Object.assign(
    r,
    {
      /** @type {ModeCallback} */
      "on:begin": (e, t) => {
        t.data._beginMatch = e[1];
      },
      /** @type {ModeCallback} */
      "on:end": (e, t) => {
        t.data._beginMatch !== e[1] && t.ignoreMatch();
      }
    }
  );
};
var Nn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Zh,
  BACKSLASH_ESCAPE: un,
  BINARY_NUMBER_MODE: rp,
  BINARY_NUMBER_RE: Yl,
  COMMENT: g0,
  C_BLOCK_COMMENT_MODE: Jh,
  C_LINE_COMMENT_MODE: Yh,
  C_NUMBER_MODE: tp,
  C_NUMBER_RE: Kl,
  END_SAME_AS_BEGIN: op,
  HASH_COMMENT_MODE: Qh,
  IDENT_RE: Zl,
  MATCH_NOTHING_RE: Uh,
  METHOD_GUARD: sp,
  NUMBER_MODE: ep,
  NUMBER_RE: Xl,
  PHRASAL_WORDS_MODE: Kh,
  QUOTE_STRING_MODE: Xh,
  REGEXP_MODE: np,
  RE_STARTERS_RE: Gh,
  SHEBANG: Wh,
  TITLE_MODE: ap,
  UNDERSCORE_IDENT_RE: Ga,
  UNDERSCORE_TITLE_MODE: ip
});
function lp(r, e) {
  r.input[r.index - 1] === "." && e.ignoreMatch();
}
function cp(r, e) {
  r.className !== void 0 && (r.scope = r.className, delete r.className);
}
function up(r, e) {
  e && r.beginKeywords && (r.begin = "\\b(" + r.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", r.__beforeBegin = lp, r.keywords = r.keywords || r.beginKeywords, delete r.beginKeywords, r.relevance === void 0 && (r.relevance = 0));
}
function dp(r, e) {
  Array.isArray(r.illegal) && (r.illegal = ja(...r.illegal));
}
function hp(r, e) {
  if (r.match) {
    if (r.begin || r.end) throw new Error("begin & end are not supported with match");
    r.begin = r.match, delete r.match;
  }
}
function pp(r, e) {
  r.relevance === void 0 && (r.relevance = 1);
}
const fp = (r, e) => {
  if (!r.beforeMatch) return;
  if (r.starts) throw new Error("beforeMatch cannot be used with starts");
  const t = Object.assign({}, r);
  Object.keys(r).forEach((n) => {
    delete r[n];
  }), r.keywords = t.keywords, r.begin = Ar(t.beforeMatch, Gl(t.begin)), r.starts = {
    relevance: 0,
    contains: [
      Object.assign(t, { endsParent: !0 })
    ]
  }, r.relevance = 0, delete t.beforeMatch;
}, mp = [
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
], gp = "keyword";
function Jl(r, e, t = gp) {
  const n = /* @__PURE__ */ Object.create(null);
  return typeof r == "string" ? a(t, r.split(" ")) : Array.isArray(r) ? a(t, r) : Object.keys(r).forEach(function(i) {
    Object.assign(
      n,
      Jl(r[i], e, i)
    );
  }), n;
  function a(i, s) {
    e && (s = s.map((o) => o.toLowerCase())), s.forEach(function(o) {
      const c = o.split("|");
      n[c[0]] = [i, bp(c[0], c[1])];
    });
  }
}
function bp(r, e) {
  return e ? Number(e) : vp(r) ? 0 : 1;
}
function vp(r) {
  return mp.includes(r.toLowerCase());
}
const bo = {}, yr = (r) => {
  console.error(r);
}, vo = (r, ...e) => {
  console.log(`WARN: ${r}`, ...e);
}, Nr = (r, e) => {
  bo[`${r}/${e}`] || (console.log(`Deprecated as of ${r}. ${e}`), bo[`${r}/${e}`] = !0);
}, e0 = new Error();
function Ql(r, e, { key: t }) {
  let n = 0;
  const a = r[t], i = {}, s = {};
  for (let o = 1; o <= e.length; o++)
    s[o + n] = a[o], i[o + n] = !0, n += Wl(e[o - 1]);
  r[t] = s, r[t]._emit = i, r[t]._multi = !0;
}
function xp(r) {
  if (Array.isArray(r.begin)) {
    if (r.skip || r.excludeBegin || r.returnBegin)
      throw yr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), e0;
    if (typeof r.beginScope != "object" || r.beginScope === null)
      throw yr("beginScope must be object"), e0;
    Ql(r, r.begin, { key: "beginScope" }), r.begin = Ua(r.begin, { joinWith: "" });
  }
}
function wp(r) {
  if (Array.isArray(r.end)) {
    if (r.skip || r.excludeEnd || r.returnEnd)
      throw yr("skip, excludeEnd, returnEnd not compatible with endScope: {}"), e0;
    if (typeof r.endScope != "object" || r.endScope === null)
      throw yr("endScope must be object"), e0;
    Ql(r, r.end, { key: "endScope" }), r.end = Ua(r.end, { joinWith: "" });
  }
}
function yp(r) {
  r.scope && typeof r.scope == "object" && r.scope !== null && (r.beginScope = r.scope, delete r.scope);
}
function kp(r) {
  yp(r), typeof r.beginScope == "string" && (r.beginScope = { _wrap: r.beginScope }), typeof r.endScope == "string" && (r.endScope = { _wrap: r.endScope }), xp(r), wp(r);
}
function Sp(r) {
  function e(s, o) {
    return new RegExp(
      cn(s),
      "m" + (r.case_insensitive ? "i" : "") + (r.unicodeRegex ? "u" : "") + (o ? "g" : "")
    );
  }
  class t {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    // @ts-ignore
    addRule(o, c) {
      c.position = this.position++, this.matchIndexes[this.matchAt] = c, this.regexes.push([c, o]), this.matchAt += Wl(o) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const o = this.regexes.map((c) => c[1]);
      this.matcherRe = e(Ua(o, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(o) {
      this.matcherRe.lastIndex = this.lastIndex;
      const c = this.matcherRe.exec(o);
      if (!c)
        return null;
      const d = c.findIndex((f, b) => b > 0 && f !== void 0), p = this.matchIndexes[d];
      return c.splice(0, d), Object.assign(c, p);
    }
  }
  class n {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(o) {
      if (this.multiRegexes[o]) return this.multiRegexes[o];
      const c = new t();
      return this.rules.slice(o).forEach(([d, p]) => c.addRule(d, p)), c.compile(), this.multiRegexes[o] = c, c;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(o, c) {
      this.rules.push([o, c]), c.type === "begin" && this.count++;
    }
    /** @param {string} s */
    exec(o) {
      const c = this.getMatcher(this.regexIndex);
      c.lastIndex = this.lastIndex;
      let d = c.exec(o);
      if (this.resumingScanAtSamePosition() && !(d && d.index === this.lastIndex)) {
        const p = this.getMatcher(0);
        p.lastIndex = this.lastIndex + 1, d = p.exec(o);
      }
      return d && (this.regexIndex += d.position + 1, this.regexIndex === this.count && this.considerAll()), d;
    }
  }
  function a(s) {
    const o = new n();
    return s.contains.forEach((c) => o.addRule(c.begin, { rule: c, type: "begin" })), s.terminatorEnd && o.addRule(s.terminatorEnd, { type: "end" }), s.illegal && o.addRule(s.illegal, { type: "illegal" }), o;
  }
  function i(s, o) {
    const c = (
      /** @type CompiledMode */
      s
    );
    if (s.isCompiled) return c;
    [
      cp,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      hp,
      kp,
      fp
    ].forEach((p) => p(s, o)), r.compilerExtensions.forEach((p) => p(s, o)), s.__beforeBegin = null, [
      up,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      dp,
      // default to 1 relevance if not specified
      pp
    ].forEach((p) => p(s, o)), s.isCompiled = !0;
    let d = null;
    return typeof s.keywords == "object" && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords), d = s.keywords.$pattern, delete s.keywords.$pattern), d = d || /\w+/, s.keywords && (s.keywords = Jl(s.keywords, r.case_insensitive)), c.keywordPatternRe = e(d, !0), o && (s.begin || (s.begin = /\B|\b/), c.beginRe = e(c.begin), !s.end && !s.endsWithParent && (s.end = /\B|\b/), s.end && (c.endRe = e(c.end)), c.terminatorEnd = cn(c.end) || "", s.endsWithParent && o.terminatorEnd && (c.terminatorEnd += (s.end ? "|" : "") + o.terminatorEnd)), s.illegal && (c.illegalRe = e(
      /** @type {RegExp | string} */
      s.illegal
    )), s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map(function(p) {
      return Ip(p === "self" ? s : p);
    })), s.contains.forEach(function(p) {
      i(
        /** @type Mode */
        p,
        c
      );
    }), s.starts && i(s.starts, o), c.matcher = a(c), c;
  }
  if (r.compilerExtensions || (r.compilerExtensions = []), r.contains && r.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return r.classNameAliases = hr(r.classNameAliases || {}), i(
    /** @type Mode */
    r
  );
}
function ec(r) {
  return r ? r.endsWithParent || ec(r.starts) : !1;
}
function Ip(r) {
  return r.variants && !r.cachedVariants && (r.cachedVariants = r.variants.map(function(e) {
    return hr(r, { variants: null }, e);
  })), r.cachedVariants ? r.cachedVariants : ec(r) ? hr(r, { starts: r.starts ? hr(r.starts) : null }) : Object.isFrozen(r) ? hr(r) : r;
}
var Mp = "11.11.1";
class Tp extends Error {
  constructor(e, t) {
    super(e), this.name = "HTMLInjectionError", this.html = t;
  }
}
const U0 = Ul, xo = hr, wo = Symbol("nomatch"), Ap = 7, tc = function(r) {
  const e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null), n = [];
  let a = !0;
  const i = "Could not find the language '{}', did you forget to load/include a language module?", s = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let o = {
    ignoreUnescapedHTML: !1,
    throwUnescapedHTML: !1,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: Ph
  };
  function c(O) {
    return o.noHighlightRe.test(O);
  }
  function d(O) {
    let K = O.className + " ";
    K += O.parentNode ? O.parentNode.className : "";
    const Y = o.languageDetectRe.exec(K);
    if (Y) {
      const pe = _(Y[1]);
      return pe || (vo(i.replace("{}", Y[1])), vo("Falling back to no-highlight mode for this block.", O)), pe ? Y[1] : "no-highlight";
    }
    return K.split(/\s+/).find((pe) => c(pe) || _(pe));
  }
  function p(O, K, Y) {
    let pe = "", we = "";
    typeof K == "object" ? (pe = O, Y = K.ignoreIllegals, we = K.language) : (Nr("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Nr("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), we = O, pe = K), Y === void 0 && (Y = !0);
    const $e = {
      code: pe,
      language: we
    };
    ve("before:highlight", $e);
    const Ne = $e.result ? $e.result : f($e.language, $e.code, Y);
    return Ne.code = $e.code, ve("after:highlight", Ne), Ne;
  }
  function f(O, K, Y, pe) {
    const we = /* @__PURE__ */ Object.create(null);
    function $e(J, oe) {
      return J.keywords[oe];
    }
    function Ne() {
      if (!j.keywords) {
        Qe.addText(Be);
        return;
      }
      let J = 0;
      j.keywordPatternRe.lastIndex = 0;
      let oe = j.keywordPatternRe.exec(Be), Se = "";
      for (; oe; ) {
        Se += Be.substring(J, oe.index);
        const Oe = ye.case_insensitive ? oe[0].toLowerCase() : oe[0], it = $e(j, Oe);
        if (it) {
          const [Dt, vn] = it;
          if (Qe.addText(Se), Se = "", we[Oe] = (we[Oe] || 0) + 1, we[Oe] <= Ap && (br += vn), Dt.startsWith("_"))
            Se += oe[0];
          else {
            const xn = ye.classNameAliases[Dt] || Dt;
            Je(oe[0], xn);
          }
        } else
          Se += oe[0];
        J = j.keywordPatternRe.lastIndex, oe = j.keywordPatternRe.exec(Be);
      }
      Se += Be.substring(J), Qe.addText(Se);
    }
    function tt() {
      if (Be === "") return;
      let J = null;
      if (typeof j.subLanguage == "string") {
        if (!e[j.subLanguage]) {
          Qe.addText(Be);
          return;
        }
        J = f(j.subLanguage, Be, !0, Fe[j.subLanguage]), Fe[j.subLanguage] = /** @type {CompiledMode} */
        J._top;
      } else
        J = v(Be, j.subLanguage.length ? j.subLanguage : null);
      j.relevance > 0 && (br += J.relevance), Qe.__addSublanguage(J._emitter, J.language);
    }
    function je() {
      j.subLanguage != null ? tt() : Ne(), Be = "";
    }
    function Je(J, oe) {
      J !== "" && (Qe.startScope(oe), Qe.addText(J), Qe.endScope());
    }
    function Et(J, oe) {
      let Se = 1;
      const Oe = oe.length - 1;
      for (; Se <= Oe; ) {
        if (!J._emit[Se]) {
          Se++;
          continue;
        }
        const it = ye.classNameAliases[J[Se]] || J[Se], Dt = oe[Se];
        it ? Je(Dt, it) : (Be = Dt, Ne(), Be = ""), Se++;
      }
    }
    function Ae(J, oe) {
      return J.scope && typeof J.scope == "string" && Qe.openNode(ye.classNameAliases[J.scope] || J.scope), J.beginScope && (J.beginScope._wrap ? (Je(Be, ye.classNameAliases[J.beginScope._wrap] || J.beginScope._wrap), Be = "") : J.beginScope._multi && (Et(J.beginScope, oe), Be = "")), j = Object.create(J, { parent: { value: j } }), j;
    }
    function Ee(J, oe, Se) {
      let Oe = Hh(J.endRe, Se);
      if (Oe) {
        if (J["on:end"]) {
          const it = new fo(J);
          J["on:end"](oe, it), it.isMatchIgnored && (Oe = !1);
        }
        if (Oe) {
          for (; J.endsParent && J.parent; )
            J = J.parent;
          return J;
        }
      }
      if (J.endsWithParent)
        return Ee(J.parent, oe, Se);
    }
    function $t(J) {
      return j.matcher.regexIndex === 0 ? (Be += J[0], 1) : (Wr = !0, 0);
    }
    function ie(J) {
      const oe = J[0], Se = J.rule, Oe = new fo(Se), it = [Se.__beforeBegin, Se["on:begin"]];
      for (const Dt of it)
        if (Dt && (Dt(J, Oe), Oe.isMatchIgnored))
          return $t(oe);
      return Se.skip ? Be += oe : (Se.excludeBegin && (Be += oe), je(), !Se.returnBegin && !Se.excludeBegin && (Be = oe)), Ae(Se, J), Se.returnBegin ? 0 : oe.length;
    }
    function sr(J) {
      const oe = J[0], Se = K.substring(J.index), Oe = Ee(j, J, Se);
      if (!Oe)
        return wo;
      const it = j;
      j.endScope && j.endScope._wrap ? (je(), Je(oe, j.endScope._wrap)) : j.endScope && j.endScope._multi ? (je(), Et(j.endScope, J)) : it.skip ? Be += oe : (it.returnEnd || it.excludeEnd || (Be += oe), je(), it.excludeEnd && (Be = oe));
      do
        j.scope && Qe.closeNode(), !j.skip && !j.subLanguage && (br += j.relevance), j = j.parent;
      while (j !== Oe.parent);
      return Oe.starts && Ae(Oe.starts, J), it.returnEnd ? 0 : oe.length;
    }
    function or() {
      const J = [];
      for (let oe = j; oe !== ye; oe = oe.parent)
        oe.scope && J.unshift(oe.scope);
      J.forEach((oe) => Qe.openNode(oe));
    }
    let Bt = {};
    function ct(J, oe) {
      const Se = oe && oe[0];
      if (Be += J, Se == null)
        return je(), 0;
      if (Bt.type === "begin" && oe.type === "end" && Bt.index === oe.index && Se === "") {
        if (Be += K.slice(oe.index, oe.index + 1), !a) {
          const Oe = new Error(`0 width match regex (${O})`);
          throw Oe.languageName = O, Oe.badRule = Bt.rule, Oe;
        }
        return 1;
      }
      if (Bt = oe, oe.type === "begin")
        return ie(oe);
      if (oe.type === "illegal" && !Y) {
        const Oe = new Error('Illegal lexeme "' + Se + '" for mode "' + (j.scope || "<unnamed>") + '"');
        throw Oe.mode = j, Oe;
      } else if (oe.type === "end") {
        const Oe = sr(oe);
        if (Oe !== wo)
          return Oe;
      }
      if (oe.type === "illegal" && Se === "")
        return Be += `
`, 1;
      if (Er > 1e5 && Er > oe.index * 3)
        throw new Error("potential infinite loop, way more iterations than matches");
      return Be += Se, Se.length;
    }
    const ye = _(O);
    if (!ye)
      throw yr(i.replace("{}", O)), new Error('Unknown language: "' + O + '"');
    const W = Sp(ye);
    let ae = "", j = pe || W;
    const Fe = {}, Qe = new o.__emitter(o);
    or();
    let Be = "", br = 0, Wt = 0, Er = 0, Wr = !1;
    try {
      if (ye.__emitTokens)
        ye.__emitTokens(K, Qe);
      else {
        for (j.matcher.considerAll(); ; ) {
          Er++, Wr ? Wr = !1 : j.matcher.considerAll(), j.matcher.lastIndex = Wt;
          const J = j.matcher.exec(K);
          if (!J) break;
          const oe = K.substring(Wt, J.index), Se = ct(oe, J);
          Wt = J.index + Se;
        }
        ct(K.substring(Wt));
      }
      return Qe.finalize(), ae = Qe.toHTML(), {
        language: O,
        value: ae,
        relevance: br,
        illegal: !1,
        _emitter: Qe,
        _top: j
      };
    } catch (J) {
      if (J.message && J.message.includes("Illegal"))
        return {
          language: O,
          value: U0(K),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: J.message,
            index: Wt,
            context: K.slice(Wt - 100, Wt + 100),
            mode: J.mode,
            resultSoFar: ae
          },
          _emitter: Qe
        };
      if (a)
        return {
          language: O,
          value: U0(K),
          illegal: !1,
          relevance: 0,
          errorRaised: J,
          _emitter: Qe,
          _top: j
        };
      throw J;
    }
  }
  function b(O) {
    const K = {
      value: U0(O),
      illegal: !1,
      relevance: 0,
      _top: s,
      _emitter: new o.__emitter(o)
    };
    return K._emitter.addText(O), K;
  }
  function v(O, K) {
    K = K || o.languages || Object.keys(e);
    const Y = b(O), pe = K.filter(_).filter(D).map(
      (je) => f(je, O, !1)
    );
    pe.unshift(Y);
    const we = pe.sort((je, Je) => {
      if (je.relevance !== Je.relevance) return Je.relevance - je.relevance;
      if (je.language && Je.language) {
        if (_(je.language).supersetOf === Je.language)
          return 1;
        if (_(Je.language).supersetOf === je.language)
          return -1;
      }
      return 0;
    }), [$e, Ne] = we, tt = $e;
    return tt.secondBest = Ne, tt;
  }
  function w(O, K, Y) {
    const pe = K && t[K] || Y;
    O.classList.add("hljs"), O.classList.add(`language-${pe}`);
  }
  function k(O) {
    let K = null;
    const Y = d(O);
    if (c(Y)) return;
    if (ve(
      "before:highlightElement",
      { el: O, language: Y }
    ), O.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", O);
      return;
    }
    if (O.children.length > 0 && (o.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(O)), o.throwUnescapedHTML))
      throw new Tp(
        "One of your code blocks includes unescaped HTML.",
        O.innerHTML
      );
    K = O;
    const pe = K.textContent, we = Y ? p(pe, { language: Y, ignoreIllegals: !0 }) : v(pe);
    O.innerHTML = we.value, O.dataset.highlighted = "yes", w(O, Y, we.language), O.result = {
      language: we.language,
      // TODO: remove with version 11.0
      re: we.relevance,
      relevance: we.relevance
    }, we.secondBest && (O.secondBest = {
      language: we.secondBest.language,
      relevance: we.secondBest.relevance
    }), ve("after:highlightElement", { el: O, result: we, text: pe });
  }
  function T(O) {
    o = xo(o, O);
  }
  const A = () => {
    B(), Nr("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function C() {
    B(), Nr("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let $ = !1;
  function B() {
    function O() {
      B();
    }
    if (document.readyState === "loading") {
      $ || window.addEventListener("DOMContentLoaded", O, !1), $ = !0;
      return;
    }
    document.querySelectorAll(o.cssSelector).forEach(k);
  }
  function P(O, K) {
    let Y = null;
    try {
      Y = K(r);
    } catch (pe) {
      if (yr("Language definition for '{}' could not be registered.".replace("{}", O)), a)
        yr(pe);
      else
        throw pe;
      Y = s;
    }
    Y.name || (Y.name = O), e[O] = Y, Y.rawDefinition = K.bind(null, r), Y.aliases && q(Y.aliases, { languageName: O });
  }
  function L(O) {
    delete e[O];
    for (const K of Object.keys(t))
      t[K] === O && delete t[K];
  }
  function z() {
    return Object.keys(e);
  }
  function _(O) {
    return O = (O || "").toLowerCase(), e[O] || e[t[O]];
  }
  function q(O, { languageName: K }) {
    typeof O == "string" && (O = [O]), O.forEach((Y) => {
      t[Y.toLowerCase()] = K;
    });
  }
  function D(O) {
    const K = _(O);
    return K && !K.disableAutodetect;
  }
  function N(O) {
    O["before:highlightBlock"] && !O["before:highlightElement"] && (O["before:highlightElement"] = (K) => {
      O["before:highlightBlock"](
        Object.assign({ block: K.el }, K)
      );
    }), O["after:highlightBlock"] && !O["after:highlightElement"] && (O["after:highlightElement"] = (K) => {
      O["after:highlightBlock"](
        Object.assign({ block: K.el }, K)
      );
    });
  }
  function R(O) {
    N(O), n.push(O);
  }
  function ce(O) {
    const K = n.indexOf(O);
    K !== -1 && n.splice(K, 1);
  }
  function ve(O, K) {
    const Y = O;
    n.forEach(function(pe) {
      pe[Y] && pe[Y](K);
    });
  }
  function he(O) {
    return Nr("10.7.0", "highlightBlock will be removed entirely in v12.0"), Nr("10.7.0", "Please use highlightElement now."), k(O);
  }
  Object.assign(r, {
    highlight: p,
    highlightAuto: v,
    highlightAll: B,
    highlightElement: k,
    // TODO: Remove with v12 API
    highlightBlock: he,
    configure: T,
    initHighlighting: A,
    initHighlightingOnLoad: C,
    registerLanguage: P,
    unregisterLanguage: L,
    listLanguages: z,
    getLanguage: _,
    registerAliases: q,
    autoDetection: D,
    inherit: xo,
    addPlugin: R,
    removePlugin: ce
  }), r.debugMode = function() {
    a = !1;
  }, r.safeMode = function() {
    a = !0;
  }, r.versionString = Mp, r.regex = {
    concat: Ar,
    lookahead: Gl,
    either: ja,
    optional: Fh,
    anyNumberOfTimes: Vh
  };
  for (const O in Nn)
    typeof Nn[O] == "object" && jl(Nn[O]);
  return Object.assign(r, Nn), r;
}, Fr = tc({});
Fr.newInstance = () => tc({});
var Ep = Fr;
Fr.HighlightJS = Fr;
Fr.default = Fr;
const ar = /* @__PURE__ */ Mu(Ep), $p = (r) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: r.C_BLOCK_COMMENT_MODE,
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
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: r.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), zp = [
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
], Np = [
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
], Cp = [
  ...zp,
  ...Np
], _p = [
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
].sort().reverse(), Dp = [
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
].sort().reverse(), Rp = [
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
].sort().reverse(), Op = [
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
function Lp(r) {
  const e = r.regex, t = $p(r), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, a = "and or not only", i = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE
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
      t.BLOCK_COMMENT,
      n,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      t.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + s,
        relevance: 0
      },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + Dp.join("|") + ")" },
          { begin: ":(:)?(" + Rp.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Op.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          t.BLOCK_COMMENT,
          t.HEXCOLOR,
          t.IMPORTANT,
          t.CSS_NUMBER_MODE,
          ...o,
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
              ...o,
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
          t.FUNCTION_DISPATCH
        ]
      },
      {
        begin: e.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: i
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: a,
              attribute: _p.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...o,
              t.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Cp.join("|") + ")\\b"
      }
    ]
  };
}
const yo = "[A-Za-z$_][0-9A-Za-z$_]*", Bp = [
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
], Pp = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], rc = [
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
], nc = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], ac = [
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
], Vp = [
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
], Fp = [].concat(
  ac,
  rc,
  nc
);
function qp(r) {
  const e = r.regex, t = (Y, { after: pe }) => {
    const we = "</" + Y[0].slice(1);
    return Y.input.indexOf(we, pe) !== -1;
  }, n = yo, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (Y, pe) => {
      const we = Y[0].length + Y.index, $e = Y.input[we];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        $e === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        $e === ","
      ) {
        pe.ignoreMatch();
        return;
      }
      $e === ">" && (t(Y, { after: we }) || pe.ignoreMatch());
      let Ne;
      const tt = Y.input.substring(we);
      if (Ne = tt.match(/^\s*=/)) {
        pe.ignoreMatch();
        return;
      }
      if ((Ne = tt.match(/^\s+extends\s+/)) && Ne.index === 0) {
        pe.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: yo,
    keyword: Bp,
    literal: Pp,
    built_in: Fp,
    "variable.language": Vp
  }, c = "[0-9](_?[0-9])*", d = `\\.(${c})`, p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${p})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${p})\\b((${d})\\b|\\.)?|(${d})\\b` },
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
  }, b = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, v = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "xml"
    }
  }, w = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "css"
    }
  }, k = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "graphql"
    }
  }, T = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      b
    ]
  }, C = {
    className: "comment",
    variants: [
      r.COMMENT(
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
                  begin: n + "(?=\\s*(-)|$)",
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
      r.C_BLOCK_COMMENT_MODE,
      r.C_LINE_COMMENT_MODE
    ]
  }, $ = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    w,
    k,
    T,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  b.contains = $.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat($)
  });
  const B = [].concat(C, b.contains), P = B.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(B)
    }
  ]), L = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: P
  }, z = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          e.concat(n, "(", e.concat(/\./, n), ")*")
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
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, _ = {
    relevance: 0,
    match: e.either(
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
        ...rc,
        ...nc
      ]
    }
  }, q = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
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
    contains: [L],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function R(Y) {
    return e.concat("(?!", Y.join("|"), ")");
  }
  const ce = {
    match: e.concat(
      /\b/,
      R([
        ...ac,
        "super",
        "import"
      ].map((Y) => `${Y}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ve = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, he = {
    match: [
      /get|set/,
      /\s+/,
      n,
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
      L
    ]
  }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", K = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(O)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      L
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: P, CLASS_REFERENCE: _ },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      q,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      w,
      k,
      T,
      C,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      _,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      K,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          C,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: O,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: r.UNDERSCORE_IDENT_RE,
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
                    keywords: o,
                    contains: P
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
              { begin: a.begin, end: a.end },
              { match: i },
              {
                begin: s.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          L,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ve,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [L]
      },
      ce,
      N,
      z,
      he,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var _r = "[0-9](_*[0-9])*", Cn = `\\.(${_r})`, _n = "[0-9a-fA-F](_*[0-9a-fA-F])*", ko = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${_r})((${Cn})|\\.)?|(${Cn}))[eE][+-]?(${_r})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${_r})((${Cn})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Cn})[fFdD]?\\b` },
    { begin: `\\b(${_r})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${_n})\\.?|(${_n})?\\.(${_n}))[pP][+-]?(${_r})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${_n})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function ic(r, e, t) {
  return t === -1 ? "" : r.replace(e, (n) => ic(r, e, t - 1));
}
function Hp(r) {
  const e = r.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = t + ic("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), c = {
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
  }, d = {
    className: "meta",
    begin: "@" + t,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, p = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: c,
    relevance: 0,
    contains: [r.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: c,
    illegal: /<\/|#/,
    contains: [
      r.COMMENT(
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
      r.C_LINE_COMMENT_MODE,
      r.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [r.BACKSLASH_ESCAPE]
      },
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          t
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
          e.concat(/(?!else)/, t),
          /\s+/,
          t,
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
          t
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          p,
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
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
          "(?:" + n + "\\s+)",
          r.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: c,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: c,
            relevance: 0,
            contains: [
              d,
              r.APOS_STRING_MODE,
              r.QUOTE_STRING_MODE,
              ko,
              r.C_BLOCK_COMMENT_MODE
            ]
          },
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      ko,
      d
    ]
  };
}
function jp(r) {
  const e = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, t = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, n = [
    "true",
    "false",
    "null"
  ], a = {
    scope: "literal",
    beginKeywords: n.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: n
    },
    contains: [
      e,
      t,
      r.QUOTE_STRING_MODE,
      a,
      r.C_NUMBER_MODE,
      r.C_LINE_COMMENT_MODE,
      r.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const t0 = "[A-Za-z$_][0-9A-Za-z$_]*", sc = [
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
], oc = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], lc = [
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
], cc = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], uc = [
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
], dc = [
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
], hc = [].concat(
  uc,
  lc,
  cc
);
function Up(r) {
  const e = r.regex, t = (Y, { after: pe }) => {
    const we = "</" + Y[0].slice(1);
    return Y.input.indexOf(we, pe) !== -1;
  }, n = t0, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (Y, pe) => {
      const we = Y[0].length + Y.index, $e = Y.input[we];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        $e === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        $e === ","
      ) {
        pe.ignoreMatch();
        return;
      }
      $e === ">" && (t(Y, { after: we }) || pe.ignoreMatch());
      let Ne;
      const tt = Y.input.substring(we);
      if (Ne = tt.match(/^\s*=/)) {
        pe.ignoreMatch();
        return;
      }
      if ((Ne = tt.match(/^\s+extends\s+/)) && Ne.index === 0) {
        pe.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: t0,
    keyword: sc,
    literal: oc,
    built_in: hc,
    "variable.language": dc
  }, c = "[0-9](_?[0-9])*", d = `\\.(${c})`, p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${p})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${p})\\b((${d})\\b|\\.)?|(${d})\\b` },
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
  }, b = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, v = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "xml"
    }
  }, w = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "css"
    }
  }, k = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "graphql"
    }
  }, T = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      b
    ]
  }, C = {
    className: "comment",
    variants: [
      r.COMMENT(
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
                  begin: n + "(?=\\s*(-)|$)",
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
      r.C_BLOCK_COMMENT_MODE,
      r.C_LINE_COMMENT_MODE
    ]
  }, $ = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    w,
    k,
    T,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  b.contains = $.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat($)
  });
  const B = [].concat(C, b.contains), P = B.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(B)
    }
  ]), L = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: P
  }, z = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          e.concat(n, "(", e.concat(/\./, n), ")*")
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
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, _ = {
    relevance: 0,
    match: e.either(
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
        ...lc,
        ...cc
      ]
    }
  }, q = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, D = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
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
    contains: [L],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function R(Y) {
    return e.concat("(?!", Y.join("|"), ")");
  }
  const ce = {
    match: e.concat(
      /\b/,
      R([
        ...uc,
        "super",
        "import"
      ].map((Y) => `${Y}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ve = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, he = {
    match: [
      /get|set/,
      /\s+/,
      n,
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
      L
    ]
  }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", K = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(O)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      L
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: P, CLASS_REFERENCE: _ },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      q,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      w,
      k,
      T,
      C,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      _,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      K,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          C,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: O,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: r.UNDERSCORE_IDENT_RE,
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
                    keywords: o,
                    contains: P
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
              { begin: a.begin, end: a.end },
              { match: i },
              {
                begin: s.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      D,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          L,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ve,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [L]
      },
      ce,
      N,
      z,
      he,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Gp(r) {
  const e = r.regex, t = Up(r), n = t0, a = [
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
  ], i = {
    begin: [
      /namespace/,
      /\s+/,
      r.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, s = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: a
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, o = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, c = [
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
  ], d = {
    $pattern: t0,
    keyword: sc.concat(c),
    literal: oc,
    built_in: hc.concat(a),
    "variable.language": dc
  }, p = {
    className: "meta",
    begin: "@" + n
  }, f = (k, T, A) => {
    const C = k.contains.findIndex(($) => $.label === T);
    if (C === -1)
      throw new Error("can not find mode to replace");
    k.contains.splice(C, 1, A);
  };
  Object.assign(t.keywords, d), t.exports.PARAMS_CONTAINS.push(p);
  const b = t.contains.find((k) => k.scope === "attr"), v = Object.assign(
    {},
    b,
    { match: e.concat(n, e.lookahead(/\s*\?:/)) }
  );
  t.exports.PARAMS_CONTAINS.push([
    t.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    b,
    // highlight the params key
    v
    // Added for optional property assignment highlighting
  ]), t.contains = t.contains.concat([
    p,
    i,
    s,
    v
    // Added for optional property assignment highlighting
  ]), f(t, "shebang", r.SHEBANG()), f(t, "use_strict", o);
  const w = t.contains.find((k) => k.label === "func.def");
  return w.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
function pc(r) {
  const e = r.regex, t = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, a = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, i = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, s = r.inherit(i, {
    begin: /\(/,
    end: /\)/
  }), o = r.inherit(r.APOS_STRING_MODE, { className: "string" }), c = r.inherit(r.QUOTE_STRING_MODE, { className: "string" }), d = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: n,
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
                contains: [a]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [a]
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
          i,
          c,
          o,
          s,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  i,
                  s,
                  c,
                  o
                ]
              }
            ]
          }
        ]
      },
      r.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      a,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              c
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
        contains: [d],
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
        contains: [d],
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
        begin: e.concat(
          /</,
          e.lookahead(e.concat(
            t,
            // <tag/>
            // <tag>
            // <tag ...
            e.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0,
            starts: d
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: e.concat(
          /<\//,
          e.lookahead(e.concat(
            t,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: t,
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
const r0 = M.ValueIsTextline;
ar.registerLanguage("css", Lp);
ar.registerLanguage("javascript", qp);
ar.registerLanguage("java", Hp);
ar.registerLanguage("json", jp);
ar.registerLanguage("typescript", Gp);
ar.registerLanguage("html", pc);
ar.registerLanguage("xml", pc);
const Wp = "/", oa = Wp + "icons/", ze = { Placeholder: "(empty)", disabled: !1 }, Zp = { Placeholder: "(no Selection)", disabled: !0 }, Xp = { Placeholder: "(multiple Values)", disabled: !1 };
function Me(r) {
  return r === ze || r === Zp || r === Xp;
}
function gt(r) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);
  if (e == null)
    throw new Error(r);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function Ff(r) {
  gt(
    "ReadOnlyProperty: property " + M.quoted(r) + " must not be set"
  );
}
const Kp = /^[-._\p{L}\d](?:[-._ \p{L}\d]*[-._\p{L}\d])?$/u;
function b0(r) {
  return M.ValueIsStringMatching(r, Kp);
}
const Yp = M.ValidatorForClassifier(
  b0,
  M.acceptNil,
  "SIM name"
), qf = Yp, fc = M.ValidatorForClassifier(
  b0,
  M.rejectNil,
  "SIM name"
), Hf = fc, Jp = /^[-._\p{L}](?:[-._ \p{L}]*[-._\p{L}])?(?:\/[-._\p{L}](?:[-._ \p{L}]*[-._\p{L}])?)*$/u;
function v0(r) {
  return M.ValueIsStringMatching(r, Jp);
}
const Qp = M.ValidatorForClassifier(
  v0,
  M.acceptNil,
  "SIM name path"
), jf = Qp, x0 = M.ValidatorForClassifier(
  v0,
  M.rejectNil,
  "SIM name path"
), Uf = x0;
function qr(r) {
  return M.ValueIsFiniteNumber(r);
}
const ef = M.ValidatorForClassifier(
  qr,
  M.acceptNil,
  "SIM coordinate"
), Gf = ef, tf = M.ValidatorForClassifier(
  qr,
  M.rejectNil,
  "SIM coordinate"
), Wf = tf;
function Hr(r) {
  return M.ValueIsFiniteNumber(r) && r >= 0;
}
const rf = M.ValidatorForClassifier(
  Hr,
  M.acceptNil,
  "SIM dimension"
), Zf = rf, nf = M.ValidatorForClassifier(
  Hr,
  M.rejectNil,
  "SIM dimension"
), Xf = nf;
function mc(r) {
  return M.ValueIsPlainObject(r) && qr(r.x) && qr(r.y);
}
const af = M.ValidatorForClassifier(
  mc,
  M.acceptNil,
  "SIM position"
), Kf = af, sf = M.ValidatorForClassifier(
  mc,
  M.rejectNil,
  "SIM position"
), Yf = sf;
function gc(r) {
  return M.ValueIsPlainObject(r) && Hr(r.Width) && Hr(r.Height);
}
const of = M.ValidatorForClassifier(
  gc,
  M.acceptNil,
  "SIM size"
), Jf = of, lf = M.ValidatorForClassifier(
  gc,
  M.rejectNil,
  "SIM size"
), Qf = lf;
function bc(r) {
  return M.ValueIsPlainObject(r) && qr(r.x) && Hr(r.Width) && qr(r.y) && Hr(r.Height);
}
const cf = M.ValidatorForClassifier(
  bc,
  M.acceptNil,
  "SIM geometry"
), em = cf, uf = M.ValidatorForClassifier(
  bc,
  M.rejectNil,
  "SIM geometry"
), tm = uf, df = /^[a-z0-9]+([._+-][a-z0-9]+)*\/[a-z0-9]+([._+-][a-z0-9]+)*(\s*;\s*[a-z0-9-]+=[a-z0-9.+-]+)*$/i;
function rm(r) {
  return M.ValueIsStringMatching(r, df);
}
const hf = [
  "application/javascript",
  "application/typescript",
  "application/json",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function nm(r) {
  return M.ValueIsOneOf(r, hf);
}
const pf = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function am(r) {
  return M.ValueIsOneOf(r, pf);
}
const ff = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/markdown",
  "text/plain"
];
function im(r) {
  return M.ValueIsOneOf(r, ff);
}
const mf = [
  "image/apng",
  "image/avif",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
function sm(r) {
  return M.ValueIsOneOf(r, mf);
}
const gf = /^[a-z$_][a-z$_0-9]*$/i;
function vc(r) {
  return M.ValueIsStringMatching(r, gf);
}
const bf = M.ValidatorForClassifier(
  vc,
  M.acceptNil,
  "SIM identifier"
), om = bf, vf = M.ValidatorForClassifier(
  vc,
  M.rejectNil,
  "SIM identifier"
), lm = vf;
function cm(r) {
  return M.ValueIsListSatisfying(r, M.ValueIsOrdinal);
}
function ge(r, ...e) {
  M.expectPlainObject("PropSet", r), e.forEach((i, s) => {
    M.ValueIsFunction(i) || gt(
      `InvalidArgument: PropSet parser argument #${s + 1} is not a function`
    );
  });
  const t = [], n = {};
  Array.from(Object.keys(r)).forEach((i) => {
    let s = i.replace(/[-_]/g, "").trim().toLowerCase();
    n[s] = r[i];
  });
  const a = n.children;
  return delete n.children, delete n["aim:rendercount"], e.forEach(
    (i) => t.push(i(n))
  ), t.push(n, a), t;
}
function um(r, e) {
  M.expectPlainObject("PropSet", r), M.expectFunction("PropSet parser", e);
  const t = {};
  return Array.from(Object.keys(r)).forEach((n) => {
    let a = n.replace(/[-_]/g, "").trim().toLowerCase();
    t[a] = r[n];
  }), delete t.children, e(t);
}
function ot(r, e, t, n) {
  M.expectPlainObject("PropSet", r), M.expectFunction("validator function", t), M.allowTextline("PropSet name", n);
  const a = r[e];
  if (a != null) {
    if (t(a) == !0)
      return delete r[e], a;
    gt(
      (n == null ? "" : n + " ") + "attribute " + M.quoted(e) + " is invalid"
    );
  }
}
function lt(r, e, t, n) {
  M.expectPlainObject("PropSet", r), M.expectFunction("validator function", t), M.allowTextline("PropSet name", n);
  const a = r[e];
  if (a == null && gt(
    "attribute " + M.quoted(e) + " is missing"
  ), t(a) == !0)
    return delete r[e], a;
  gt(
    (n == null ? "" : n + " ") + "attribute " + M.quoted(e) + " is invalid"
  );
}
function le(r, e) {
  return (t) => ot(t, r, e);
}
function w0(r, e) {
  return (t) => lt(t, r, e);
}
function se(r) {
  return (e) => ot(e, r, M.ValueIsBoolean);
}
function dm(r) {
  return (e) => lt(e, r, M.ValueIsBoolean);
}
function zt(r) {
  return (e) => ot(e, r, M.ValueIsNumber);
}
function hm(r) {
  return (e) => lt(e, r, M.ValueIsNumber);
}
function pm(r, e, t, n, a) {
  return (i) => ot(
    i,
    r,
    (s) => M.ValueIsNumberInRange(s, e, t, n, a)
  );
}
function fm(r, e, t, n, a) {
  return (i) => lt(
    i,
    r,
    (s) => M.ValueIsNumberInRange(s, e, t, n, a)
  );
}
function mm(r) {
  return (e) => ot(e, r, M.ValueIsInteger);
}
function gm(r) {
  return (e) => lt(e, r, M.ValueIsInteger);
}
function bm(r, e, t) {
  return (n) => ot(
    n,
    r,
    (a) => M.ValueIsIntegerInRange(a, e, t)
  );
}
function vm(r, e, t) {
  return (n) => lt(
    n,
    r,
    (a) => M.ValueIsIntegerInRange(a, e, t)
  );
}
function Ze(r) {
  return (e) => ot(e, r, M.ValueIsOrdinal);
}
function xm(r) {
  return (e) => lt(e, r, M.ValueIsOrdinal);
}
function xf(r) {
  return (e) => ot(e, r, M.ValueIsCardinal);
}
function wm(r) {
  return (e) => lt(e, r, M.ValueIsCardinal);
}
function ym(r) {
  return (e) => ot(e, r, M.ValueIsString);
}
function km(r) {
  return (e) => lt(e, r, M.ValueIsString);
}
function Sm(r, e) {
  return (t) => ot(
    t,
    r,
    (n) => M.ValueIsStringMatching(n, e)
  );
}
function Im(r, e) {
  return (t) => lt(
    t,
    r,
    (n) => M.ValueIsStringMatching(n, e)
  );
}
function at(r) {
  return (e) => ot(e, r, M.ValueIsText);
}
function Mm(r) {
  return (e) => lt(e, r, M.ValueIsText);
}
function te(r) {
  return (e) => ot(e, r, M.ValueIsTextline);
}
function wf(r) {
  return (e) => lt(e, r, M.ValueIsTextline);
}
function Q(r) {
  return (e) => ot(e, r, M.ValueIsFunction);
}
function Tm(r) {
  return (e) => lt(e, r, M.ValueIsFunction);
}
function y0(r) {
  return (e) => ot(e, r, M.ValueIsColor);
}
function Am(r) {
  return (e) => lt(e, r, M.ValueIsColor);
}
function Em(r) {
  return (e) => ot(e, r, M.ValueIsEMailAddress);
}
function $m(r) {
  return (e) => lt(e, r, M.ValueIsEMailAddress);
}
function zm(r) {
  return (e) => ot(e, r, r0);
}
function Nm(r) {
  return (e) => lt(e, r, r0);
}
function k0(r) {
  return (e) => ot(e, r, M.ValueIsURL);
}
function xc(r) {
  return (e) => lt(e, r, M.ValueIsURL);
}
function Cm(r) {
  return (e) => ot(
    e,
    r,
    (t) => v0(t)
  );
}
function _m(r) {
  return (e) => lt(
    e,
    r,
    (t) => v0(t)
  );
}
function Dm(r) {
  return (e) => ot(
    e,
    r,
    (t) => b0(t) || M.ValueIsOrdinal(t)
  );
}
function Rm(r) {
  return (e) => lt(
    e,
    r,
    (t) => b0(t) || M.ValueIsOrdinal(t)
  );
}
function Om() {
  const [r, e] = jr(navigator.onLine);
  return Br(() => {
    const t = () => e(!0), n = () => e(!1);
    return window.addEventListener("online", t), window.addEventListener("offline", n), () => {
      window.removeEventListener("online", t), window.removeEventListener("offline", n);
    };
  }, []), r;
}
function Lm() {
  const [r, e] = jr({
    Width: window.innerWidth,
    Height: window.innerHeight
  });
  return Br(() => {
    const t = () => e({
      Width: window.innerWidth,
      Height: window.innerHeight
    });
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), r;
}
function ht() {
  const [r, e] = jr({});
  function t() {
    e({});
  }
  return t;
}
function Bm(r = {}) {
  M.allowPlainObject("initial configuration", r);
  const e = ke();
  e.current == null && (e.current = la(r));
  const t = Te((n) => {
    if (M.allowPlainObject("configuration change set", n), n != null)
      for (const [a, i] of Object.entries(n))
        i === void 0 ? delete n[a] : M.ValueIsPlainObject(i) ? M.ValueIsPlainObject(e.current[a]) ? Object.assign(e.current[a], i) : e.current[a] = { ...i } : gt(
          "InvalidArgument: configuration[" + M.quoted(a) + "] is no plain JavaScript onject"
        );
  }, [r]);
  return [e.current, t];
}
function Pm({
  ViewRef: r,
  Container: e,
  onlyFrom: t,
  neverFrom: n,
  onDragStart: a,
  onDragContinuation: i,
  onDragFinish: s,
  onDragCancellation: o
}) {
  M.expectValue("preact component reference", r), e != null && !M.ValueIsTextline(e) && !(e instanceof HTMLElement) && !M.ValueIsFunction(e) && gt(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  ), t != null && !M.ValueIsTextline(t) && !(t instanceof HTMLElement) && gt(
    'InvalidArgument: "onlyFrom" is neither a CSS selector nor an HTML element'
  ), n != null && !M.ValueIsTextline(n) && !(n instanceof HTMLElement) && gt(
    'InvalidArgument: "neverFrom" is neither a CSS selector nor an HTML element'
  ), M.allowFunction('"onDragStart" callback', a), M.allowFunction('"onDragContinuation" callback', i), M.allowFunction('"onDragFinish" callback', s), M.allowFunction('"onDragCancellation" callback', o);
  const c = a != null && i != null && s != null && o != null;
  let d;
  const p = ke(), f = ke(!1), b = ($) => {
    if (r.current == null || !($.target instanceof HTMLElement) || $.pointerType === "mouse" && $.buttons !== 1 || $.pointerType === "touch" && !$.isPrimary || $.pointerType === "pen" && $.buttons !== 1 || !c)
      return;
    switch (!0) {
      case e == null:
        d = r.current.parentElement;
        break;
      case M.ValueIsTextline(e):
        d = r.current.parentElement.closest(e);
        break;
      case M.ValueIsFunction(e):
        d = e(), d instanceof HTMLElement || (d = void 0);
        break;
      default:
        d = e;
    }
    if (d == null || t != null && !C($.target, t) || n != null && C($.target, n))
      return;
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", k), window.addEventListener("pointercancel", T), r.current.setPointerCapture?.($.pointerId);
    const B = d.getBoundingClientRect(), P = $.clientX - B.left + d.scrollLeft, L = $.clientY - B.top + d.scrollTop;
    p.current = { x: P, y: L }, f.current = !0, a?.(0, 0, P, L, $);
  }, v = ($) => {
    f.current !== !1 && d != null && i?.apply(null, A(d, $));
  }, w = ($, B) => {
    if (f.current !== !1) {
      if (f.current = !1, window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", T), B) {
        i?.(0, 0, p.current.x, p.current.y, $);
        return;
      }
      d != null && c && s?.apply(null, A(d, $));
    }
  }, k = ($) => {
    w($, !1);
  }, T = ($) => {
    w($, !0);
  }, A = ($, B) => {
    const P = $.getBoundingClientRect(), L = B.clientX - P.left + $.scrollLeft, z = B.clientY - P.top + $.scrollTop, _ = L - p.current.x, q = z - p.current.y;
    return [_, q, L, z, B];
  };
  function C($, B) {
    switch (!0) {
      case B == null:
        return !0;
      case typeof B == "string":
        return $.matches(B);
      default:
        return $ === B;
    }
  }
  return b;
}
function Vm({
  ViewRef: r,
  Container: e,
  onlyFrom: t,
  neverFrom: n,
  ClickRadius: a,
  MultiClickLimit: i,
  MultiClickTimeSpan: s,
  onClick: o,
  onDragStart: c,
  onDragContinuation: d,
  onDragFinish: p,
  onDragCancellation: f
}) {
  M.expectValue("preact component reference", r), e != null && !M.ValueIsTextline(e) && !(e instanceof HTMLElement) && !M.ValueIsFunction(e) && gt(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  ), t != null && !M.ValueIsTextline(t) && !(t instanceof HTMLElement) && gt(
    'InvalidArgument: "onlyFrom" is neither a CSS selector nor an HTML element'
  ), n != null && !M.ValueIsTextline(n) && !(n instanceof HTMLElement) && gt(
    'InvalidArgument: "neverFrom" is neither a CSS selector nor an HTML element'
  ), M.allowOrdinal("click radius", a), M.allowOrdinal("multi-click limit", i), M.allowOrdinal("multi-click timespan", s), M.allowFunction('"onClick" callback', o), M.allowFunction('"onDragStart" callback', c), M.allowFunction('"onDragContinuation" callback', d), M.allowFunction('"onDragFinish" callback', p), M.allowFunction('"onDragCancellation" callback', f), a == null && (a = 4), s == null && (s = 300), i == null && (i = o == null ? 0 : 1);
  const b = i > 0 && o != null, v = c != null && d != null && p != null;
  let w;
  const k = ke(), T = ke(!1), A = ke({ Count: 0, Time: 0 }), C = (q) => {
    if (r.current == null || !(q.target instanceof HTMLElement) || !b && !v)
      return;
    switch (!0) {
      case e == null:
        w = r.current.parentElement;
        break;
      case M.ValueIsTextline(e):
        w = r.current.parentElement.closest(e);
        break;
      case M.ValueIsFunction(e):
        w = e(), w instanceof HTMLElement || (w = void 0);
        break;
      default:
        w = e;
    }
    if (w == null || t != null && !_(q.target, t) || n != null && _(q.target, n))
      return;
    window.addEventListener("pointermove", $), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", L), r.current.setPointerCapture?.(q.pointerId);
    const D = w.getBoundingClientRect(), N = q.clientX - D.left + w.scrollLeft, R = q.clientY - D.top + w.scrollTop;
    k.current = { x: N, y: R }, b ? T.current = !1 : (T.current = v, v && a === 0 && c?.(0, 0, N, R, q));
  }, $ = (q) => {
    if (!v || w == null)
      return;
    const [D, N, R, ce] = z(w, q);
    if (T.current === !1) {
      if (D * D + N * N < a * a)
        return;
      T.current = !0, c?.(D, N, R, ce, q);
    }
    d?.apply(null, [D, N, R, ce, q]);
  }, B = (q, D) => {
    if (window.removeEventListener("pointermove", $), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", L), T.current) {
      if (T.current = !1, v && D) {
        d?.(0, 0, k.current.x, k.current.y, q);
        return;
      }
      w != null && v && p?.apply(null, z(w, q));
    }
  }, P = (q) => {
    if (T.current === !1 && b) {
      let { ClickCount: D, Time: N } = A.current;
      const R = Date.now();
      if (D = R - N > s ? 1 : Math.min(D + 1, i), A.current = { ClickCount: D, Time: R }, w != null) {
        const [ce, ve, he, O] = z(w, q);
        o?.apply(null, [D, ce, ve, he, O, q]);
      }
    }
    B(q, !1);
  }, L = (q) => {
    T.current === !0 && B(q, !0);
  }, z = (q, D) => {
    const N = q.getBoundingClientRect(), R = D.clientX - N.left + q.scrollLeft, ce = D.clientY - N.top + q.scrollTop, ve = R - k.current.x, he = ce - k.current.y;
    return [ve, he, R, ce, D];
  };
  function _(q, D) {
    switch (!0) {
      case D == null:
        return !0;
      case typeof D == "string":
        return q.matches(D);
      default:
        return q === D;
    }
  }
  return C;
}
function Fm(r) {
  let e = Math.round(Math.random() * 1e4).toString();
  return e += "0000".slice(e.length), r = (r || "This operation can not be undone.") + `

Please, enter the following number if you want to proceed:

   ` + e + `

Otherwise, the operation will be cancelled`, window.prompt(r, "") === e ? !0 : (window.alert("Operation will be cancelled"), !1);
}
function qm(r) {
  return fc("name", r), Wa(r);
}
function Wa(r) {
  return r.trim().replace(/\s+/g, " ").replace(/[.]+/g, ".").replace(/[-]+/g, "-").replace(/[_]+/g, "_").toLowerCase();
}
function Hm(r) {
  return x0("path", r), yf(r);
}
function yf(r) {
  return r.trim().replace(/\s*(\/+\s*)+/g, "/").replace(/\s+/g, " ").replace(/[.]+/g, ".").replace(/[-]+/g, "-").replace(/[_]+/g, "_").toLowerCase();
}
let Kr = document.getElementById("SIM-Components-Stylesheet");
Kr == null && (Kr = document.createElement("style"), Kr.id = "SIM-Components-Stylesheet", Kr.textContent = `
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


    `.trim(), document.head.prepend(Kr));
function ue(r, e, t = !1) {
  x0("stylesheet name", r), M.expectText("stylesheet", e), M.expectBoolean("mode flag", t);
  const n = "Stylesheet-for-" + Wa(r);
  let a = document.head.querySelector('style[id="' + n + '"]');
  a == null ? (a = document.createElement("style"), a.id = n, a.textContent = e, document.head.append(a)) : t ? a.textContent = e : console.warn('multiple definitions for stylesheet "' + r + '"');
}
function jm(r) {
  x0("stylesheet name", r);
  const e = "Stylesheet-for-" + Wa(r);
  let t = document.head.querySelector('style[id="' + e + '"]');
  t?.remove();
}
function kf(r) {
  return be(() => {
    let [e] = ge(
      r,
      le("error", (n) => n instanceof Error)
    );
    return F`<div class="sim-error-indicator" onClick=${() => {
      console.warn(e), window.alert(Sf(e));
    }}/>`;
  });
}
ue("sim-error-indicator", `
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
function Sf(r) {
  let e = r.name ?? "", t = r.message, n = r.stack ?? "";
  const a = e.replace(/([a-z])([A-Z])/g, "$1 $2"), i = t[0].toUpperCase() + t.slice(1);
  return n === "" ? `${a}

${i}` : `${a}

${i}

${n}`;
}
function be(r) {
  M.expectFunction("rendering function", r);
  try {
    return r();
  } catch (e) {
    const t = r.name ?? "";
    return t.trim() === "" ? console.warn("error while rendering a preact component: " + e) : console.warn(
      "error while rendering component " + M.quoted(t) + ": " + e
    ), F`<${kf} error=${e}/>`;
  }
}
function Um(r) {
  return be(() => {
    let [e, t, n] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component fullsized ${e ?? ""}" ...${t}>
        ${n}
      </>`;
  });
}
ue("sim-component.fullsized", `
    .sim-component.fullsized > * {
      display:block; position:relative;
      left:0px; top:0px; width:100% !important; height:100% !important;
    }
  `);
function Gm(r) {
  return be(() => {
    let [e, t, n] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component centered ${e ?? ""}" ...${t}>
        ${n}
      </>`;
  });
}
ue("sim-component.centered", `
    .sim-component.centered {
      display:flex ! important; flex-flow:column nowrap; align-items:center; justify-content:center;
      left:0px; top:0px; width:100% !important; height:100% !important;
    }
    .sim-component.centered > * {
      position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Wm(r) {
  return be(() => {
    let [e, t, n, a, i] = ge(
      r,
      te("class"),
      at("style"),
      Ze("gap")
    );
    return n = n ?? 0, F`<div class="sim-component horizontal ${e ?? ""}"
        style="gap:${n}px; ${t ?? ""}" ...${a}
      >${i}</>`;
  });
}
ue("sim-component.horizontal", `
    .sim-component.horizontal {
      display:flex ! important; flex-flow:row nowrap; align-items:center;
      position:relative; left:0px; top:0px; width:100% !important; height:auto;
    }
    .sim-component.horizontal > * {
      position:relative; flex:0 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Zm(r) {
  return be(() => {
    let [e, t, n, a, i] = ge(
      r,
      te("class"),
      at("style"),
      Ze("gap")
    );
    return n = n ?? 0, F`<div class="sim-component vertical ${e ?? ""}"
        style="gap:${n}px; ${t ?? ""}" ...${a}
      >${i}</>`;
  });
}
ue("sim-component.vertical", `
    .sim-component.vertical {
      display:flex ! important; flex-flow:column nowrap; align-items:start;
      position:relative; left:0px; top:0px; width:auto; height:100% !important;
    }
    .sim-component.vertical > * {
      position:relative; flex:0 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function Xm(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c
    ] = ge(
      r,
      te("class"),
      at("style"),
      xf("columns"),
      Ze("rowgap"),
      Ze("colgap"),
      te("columnclasses")
      // space-separated
    );
    n = n ?? 2, a = a ?? 0, i = i ?? 0, s = s ?? "";
    function d(k) {
      if (typeof k == "string")
        return 1;
      {
        let T = k.props.colspan;
        return M.ValueIsOrdinal(T) ? T : 1;
      }
    }
    c = n0(c).filter(
      (k) => k.type != null || k.trim() !== ""
    );
    const p = c.length, f = [[]];
    let b = 0, v = 0;
    c.forEach((k, T) => {
      f[b].push(k), v += d(k), v >= n && T < p - 1 && (f.push([]), b++, v = 0);
    });
    const w = s.trim() === "" ? "" : F`<colgroup>${s.split(" ").map((k) => F`<col class="${k}"/>`)}</>`;
    return F`<table class="sim-component tabular ${e ?? ""}" style="
        ${t ?? ""};
        border-spacing:${i}px ${a}px;
        margin:-${a}px -${i}px -${a}px -${i}px
      " ...${o}
      >${w}<tbody>
        ${p > 0 && f.map((k, T) => F`<tr>
          ${k.map(
      (A) => F`<td colspan=${d(A)}>${A}</>`
    )}
        </tr>`)}
      </tbody></table>`;
  });
}
ue("sim-component.tabular", `
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
function Km(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a
    ] = ge(
      r,
      te("class"),
      Ze("activeindex")
    );
    a = n0(a).filter(
      (s) => typeof s != "string" || s.trim() !== ""
    );
    const i = a.length;
    return t = i === 0 ? 0 : Math.max(0, Math.min(t ?? 0, i - 1)), F`<div class="sim-component selective ${e ?? ""}"
        ...${n}>${a[t]}</>`;
  });
}
ue("sim-component.selective", `
    .sim-component.selective {
      display:block; position:relative;
      left:0px; top:0px; width:100% ! important; height:100% ! important;
    }

    .sim-component.selective > * {
      display:block; position:absolute;
      left:0px; top:0px; width:100% ! important; height:100% ! important;
    }
  `);
function Ym(r) {
  return be(() => {
    let [e, t, n] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component stacked ${e ?? ""}" ...${t}>
        ${n}
      </>`;
  });
}
ue("sim-component.stacked", `
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
function Jm(r) {
  return be(() => {
    let [e, t, n, a] = ge(
      r,
      te("class"),
      at("value"),
      se("visiblepattern")
    );
    return F`<div
        class="sim-component dummy ${n ? "visible-pattern" : ""} ${e ?? ""}"
        ...${a} dangerouslySetInnerHTML=${{ __html: t ?? "" }}
      />`;
  });
}
ue("sim-component.dummy", `
    .sim-component.dummy.visible-pattern {
      background-image:repeating-linear-gradient(-45deg,
        rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
        rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
      ); background-size:11.31px 11.31px;
    }
  `);
function Qm(r) {
  return be(() => {
    let [e, t] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component outline ${e ?? ""}" ...${t}/>`;
  });
}
ue("sim-component.outline", `
    .sim-component.outline {
      outline:dotted 1px blue;
      outline-offset:2px;
    }
  `);
function e4(r) {
  return be(() => {
    let [e, t] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component spacer ${e ?? ""}" ...${t}/>`;
  });
}
function t4(r) {
  return be(() => {
    let [e, t] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component expanding-spacer ${e ?? ""}" ...${t}/>`;
  });
}
ue("sim-component.expanding-spacer", `
    .sim-component.expanding-spacer {
      flex:1 0 auto ! important;
    }
  `);
function r4(r) {
  return be(() => {
    let [e, t] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component horizontal-separator ${e ?? ""}" ...${t}/>`;
  });
}
ue("sim-component.horizontal-separator", `
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
function n4(r) {
  return be(() => {
    let [e, t] = ge(
      r,
      te("class")
    );
    return F`<div class="sim-component vertical-separator ${e ?? ""}" ...${t}/>`;
  });
}
ue("sim-component.vertical-separator", `
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
function gn(r) {
  return be(() => {
    let [e, t, n, a] = ge(
      r,
      te("class"),
      at("value")
    );
    return F`<div class=${e ?? ""} ...${n}>
        ${t ?? a}
      </>`;
  });
}
function a4(r) {
  return r = { ...r, class: `sim-component title ${r.class ?? ""}` }, gn(r);
}
ue("sim-component.title", `
    .sim-component.title {
      font-size:22px; font-weight:bold; line-height:32px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function i4(r) {
  return r = { ...r, class: `sim-component subtitle ${r.class ?? ""}` }, gn(r);
}
ue("sim-component.subtitle", `
    .sim-component.subtitle {
      font-size:18px; font-weight:bold; line-height:27px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function s4(r) {
  return r = { ...r, class: `sim-component label ${r.class ?? ""}` }, gn(r);
}
ue("sim-component.label", `
    .sim-component.label {
      height:30px;
      font-size:14px; font-weight:bold; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function o4(r) {
  return r = { ...r, class: `sim-component description ${r.class ?? ""}` }, gn(r);
}
ue("sim-component.description", `
    .sim-component.description {
      font-size:14px; font-weight:normal; line-height:21px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function l4(r) {
  return r = { ...r, class: `sim-component fineprint ${r.class ?? ""}` }, gn(r);
}
ue("sim-component.fineprint", `
    .sim-component.fineprint {
      font-size:12px; font-weight:normal; line-height:18px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function c4(r) {
  return be(() => {
    let [e, t, n] = ge(
      r,
      te("class"),
      at("value")
    );
    return F`<div class="sim-component textview ${e ?? ""}" ...${n}>${t ?? ""}</>`;
  });
}
ue("sim-component.textview", `
    .sim-component.textview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
function u4(r) {
  return be(() => {
    let [e, t, n] = ge(
      r,
      te("class"),
      at("value")
    );
    return F`<div class="sim-component htmlview ${e ?? ""}" ...${n}
        dangerouslySetInnerHTML=${{ __html: t ?? "" }}
      />`;
  });
}
ue("sim-component.htmlview", `
    .sim-component.htmlview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
const S0 = new Go();
S0.setOptions({
  gfm: !0,
  breaks: !0,
  pedantic: !1,
  smartypants: !1
});
S0.use($h({
  throwOnError: !1
  /*nonStandard:true,*/
}));
S0.use(Ch({
  emptyLangClass: "hljs",
  langPrefix: "hljs language-",
  // CSS class prefix
  highlight(r, e, t) {
    return e = ar.getLanguage(e) ? e : "plaintext", ar.highlight(r, { language: e }).value;
  }
}));
function d4(r) {
  return be(() => {
    let [e, t, n] = ge(
      r,
      te("class"),
      at("value")
    );
    const a = dn(
      () => S0.paime(t ?? ""),
      [t]
    );
    return F`<div class="sim-component markdownview ${e ?? ""}" ...${n}
        dangerouslySetInnerHTML=${{ __html: a }}
      />`;
  });
}
ue("sim-component.markdownview", `
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
const If = ["none", "stretch", "cover", "contain"], Mf = [
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
function wc(r) {
  return M.ValueIsOneOf(r, If);
}
function yc(r) {
  return M.ValueIsOneOf(r, Mf);
}
function h4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s
    ] = ge(
      r,
      te("class"),
      at("style"),
      k0("value"),
      le("scaling", wc),
      le("alignment", yc)
    );
    return F`<img class="sim-component imageview ${e ?? ""}" src=${n ?? ""} style="
        object-fit:${a ?? "contain"};
        object-position:${i ?? "center center"}; ${t}
      " ...${s}/>`;
  });
}
ue("sim-component.imageview", `
    .sim-component.imageview {
      object-fit:contain; object-position:center;
    }
  `);
function p4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s
    ] = ge(
      r,
      te("class"),
      at("style"),
      k0("value"),
      le("scaling", wc),
      le("alignment", yc)
    );
    const o = dn(() => "image/svg+xml;base64," + btoa(n ?? ""));
    return F`<img class="sim-component svgview ${e ?? ""}" src=${o} style="
        object-fit:${a ?? "contain"};
        object-position:${i ?? "center center"}; ${t}
      " ...${s}/>`;
  });
}
ue("sim-component.svgview", `
    .sim-component.svgview {
      object-fit:contain; object-position:center;
    }
  `);
const f4 = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts", Tf = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "origin-when-cross-origin",
  "same-origin",
  "strict-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
];
function Af(r) {
  return M.ValueIsOneOf(r, Tf);
}
function m4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o
    ] = ge(
      r,
      te("class"),
      k0("value"),
      te("allow"),
      se("allowfullscreen"),
      te("sandbox"),
      le("referrerpolicy", Af)
    );
    return F`<iframe class="sim-component webview ${e ?? ""}" src=${t ?? ""}
        allow=${n} allowfullscreen=${a}
        sandbox=${i} referrerpolicy=${s}
        ...${o}
      />`;
  });
}
ue("sim-component.webview", `
    .sim-component.webview {
      overflow:auto;
    }
  `);
function g4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c
    ] = ge(
      r,
      te("class"),
      k0("value"),
      y0("color"),
      se("active"),
      se("disabled"),
      Q("onclick")
    );
    t = t ?? `${oa}/circle-information.png`, n = n ?? "black";
    const d = Te((f) => {
      if (i)
        return Za(f);
      re('Icon callback "onClick"', s, f);
    }, [i, s]), p = i ? "not-allowed" : s == null ? "auto" : "pointer";
    return F`<div
        class="sim-component icon ${i ? "disabled" : ""} ${a ? "active" : ""} ${e ?? ""}"
        onClick=${d} ...${o}
      >
        <div style="
          -webkit-mask-image:url(${t}); mask-image:url(${t});
          background-color:${n};
          cursor:${p};
        "/>
      </>`;
  });
}
ue("sim-component.icon", `
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
const Ef = [
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
function b4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c
    ] = ge(
      r,
      te("class"),
      le("value", (f) => M.ValueIsOneOf(f, Ef)),
      y0("color"),
      se("active"),
      se("disabled"),
      Q("onclick")
    );
    t = t ?? "fa-question-circle-o", n = n ?? "black";
    const d = Te((f) => {
      if (i)
        return Za(f);
      re('Icon callback "onClick"', s, f);
    }, [i, s]), p = i ? "not-allowed" : s == null ? "auto" : "pointer";
    return F`<div class="sim-component fa-icon fa ${t} ${i ? "disabled" : ""} ${a ? "active" : ""} ${e ?? ""}" style="
        color:${n};
        cursor:${p};
      " onClick=${d} ...${o}/>`;
  });
}
ue("sim-component.fa-icon", `
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
function v4(r) {
  return be(() => {
    let [e, t, n, a] = ge(
      r,
      te("class"),
      at("value")
    );
    return t == null ? F`<button class="sim-component button ${e ?? ""}" ...${n}>
          ${a}
        </>` : F`<button class="sim-component button ${e ?? ""}" ...${n}
          dangerouslySetInnerHTML=${{ __html: t }}
        />`;
  });
}
ue("sim-component.button", `
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
function x4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o
    ] = ge(
      r,
      te("class"),
      at("style"),
      le("value", (v) => M.ValueIsBoolean(v) || Me(v)),
      se("disabled"),
      Q("onvalueinput"),
      Q("onclick")
    );
    const [c, d] = Me(n) ? [void 0, a || n.disabled] : [n, a], p = c == !0, f = c == null, b = Te((v) => {
      if (Xe(v, d), d == !0)
        return;
      re('Checkbox callback "onClick"', s, v);
      const w = v.target.checked;
      re(
        'Checkbox callback "onValueInput"',
        i,
        w,
        v
      );
    }, [d, s, i]);
    return F`<div class="sim-component checkbox ${d ? "disabled" : ""} ${e ?? ""}"
        style=${t}
      >
        <input type="checkbox"
          checked=${p} indeterminate=${f}
          onClick=${b} ...${o}
        />
      </>`;
  });
}
ue("sim-component.checkbox", `
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
function w4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o
    ] = ge(
      r,
      te("class"),
      at("style"),
      le("value", (b) => M.ValueIsBoolean(b) || Me(b)),
      se("disabled"),
      Q("onvalueinput"),
      Q("onclick")
    );
    n = n ?? ze;
    const [c, d] = Me(n) ? [void 0, a || n.disabled] : [n, a], p = c == !0, f = Te((b) => {
      if (Xe(b, d), d == !0)
        return;
      re('Radiobutton callback "onClick"', s, b);
      const v = b.target.checked;
      re(
        'Checkbox callback "onValueInput"',
        i,
        v,
        b
      );
    }, [d, s, i]);
    return F`<div class="sim-component radiobutton ${d ? "disabled" : ""} ${e ?? ""}"
        style=${t}
      >
        <input type="radio" checked=${p} onClick=${f} ...${o}/>
      </>`;
  });
}
ue("sim-component.radiobutton", `
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
function y4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d
    ] = ge(
      r,
      te("class"),
      at("style"),
      zt("value"),
      zt("min"),
      zt("low"),
      zt("opt"),
      zt("high"),
      zt("max")
    );
    return F`<div class="sim-component gauge ${e ?? ""}" style=${t}>
        <meter
          value=${n} min=${a} low=${i} opt=${s}
          high=${o} max=${c} ...${d}
        />
      </>`;
  });
}
ue("sim-component.gauge", `
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
function k4(r) {
  return be(() => {
    let [e, t, n, a, i] = ge(
      r,
      te("class"),
      at("style"),
      zt("value"),
      zt("max")
    );
    return F`<div class="sim-component progressbar ${e ?? ""}" style=${t}>
        <progress value=${n} max=${a} ...${i}/>
      </>`;
  });
}
ue("sim-component.progressbar", `
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
function S4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b
    ] = ge(
      r,
      te("class"),
      at("style"),
      le("value", (_) => M.ValueIsNumber(_) || Me(_)),
      zt("min"),
      le("step", (_) => M.ValueIsNumberInRange(_, 0, 1 / 0, !1, !1)),
      zt("max"),
      le("hashmarks", (_) => M.ValueIsListSatisfying(_, M.ValueIsTextline)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    c = c ?? !1;
    const v = ke(), w = ke();
    let k = n == null || isNaN(n) ? ze : n;
    v.current != null && document.activeElement === v.current ? k = w.current : w.current = k;
    const [T, A] = Me(k) ? [void 0, c || k.disabled] : [k, c], C = Te((_) => {
      if (Xe(_), A == !0)
        return;
      re('Slider callback "onInput"', p, _);
      let q = w.current = parseFloat(_.target.value);
      re(
        'Slider callback "onValueInput"',
        d,
        q,
        _
      );
    }, [A, p, d]), $ = Te((_) => {
      P(), re('slider callback "onBlur"', f, _);
    }, [f]), B = yt(), P = ht();
    let L = "", z;
    return o != null && o.length > 0 && (z = B + "-Hashmarks", L = F`\n<datalist id=${z}>
          ${o.map((_) => {
      const q = _.replace(/:.*$/, "").trim(), D = _.replace(/^[^:]+:/, "").trim();
      return F`<option value=${q}>${D}</option>`;
    })}
        </datalist>`), F`<div class="sim-component slider ${e ?? ""}" style=${t}>
        <input type="range" ref=${v} disabled=${A}
          value=${T} min=${a} max=${s} step=${i}
          list=${z}
          onInput=${C} onBlur=${$} ...${b}
        />${L}
      </>`;
  });
}
ue("sim-component.slider", `
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
function I4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w,
      k
    ] = ge(
      r,
      te("class"),
      le("value", (R) => M.ValueIsTextline(R) || Me(R)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      te("pattern"),
      se("spellcheck"),
      le("suggestions", (R) => M.ValueIsListSatisfying(R, M.ValueIsTextline)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    f = f ?? !1;
    const T = ke(), A = ke();
    let C = t ?? ze;
    T.current != null && document.activeElement === T.current ? C = A.current : A.current = C;
    const [$, B, P] = Me(C) ? [void 0, C === ze ? a ?? C.Placeholder : C.Placeholder, f || C.disabled] : [C, a, f], L = Te((R) => {
      if (Xe(R), P == !0)
        return;
      re('TextlineInput callback "onInput"', v, R);
      const ce = R.target.value;
      A.current = ce === "" ? ze : ce, re(
        'TextlineInput callback "onValueInput"',
        b,
        ce,
        R
      );
    }, [P, v, b]), z = Te((R) => {
      q(), re('TextlineInput callback "onBlur"', w, R);
    }, [w]), _ = yt(), q = ht();
    let D = "", N;
    return p != null && p.length > 0 && (N = _ + "-Suggestions", D = F`<datalist id=${N}>
          ${p.map((R) => F`<option value=${R}></option>`)}
        </datalist>`), F`<input type="text" class="sim-component textline-input ${e ?? ""}" ref=${T}
        value=${$} minlength=${s} maxlength=${o}
        readOnly=${i} placeholder=${B}
        pattern=${c} spellcheck=${d}
        disabled=${P} list=${N}
        onInput=${L} onBlur=${z} ...${k}
      />${D}`;
  });
}
ue("sim-component.textline-input", `
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
function M4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v
    ] = ge(
      r,
      te("class"),
      le("value", (z) => M.ValueIsTextline(z) || Me(z)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      te("pattern"),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    d = d ?? !1;
    const w = ke(), k = ke();
    let T = t ?? ze;
    w.current != null && document.activeElement === w.current ? T = k.current : k.current = T;
    const [A, C, $] = Me(T) ? [void 0, T === ze ? a ?? T.Placeholder : T.Placeholder, d || T.disabled] : [T, a, d], B = Te((z) => {
      if (Xe(z), $ == !0)
        return;
      re('PasswordInput callback "onInput"', f, z);
      const _ = z.target.value;
      k.current = _ === "" ? ze : _, re(
        'PasswordInput callback "onValueInput"',
        p,
        _,
        z
      );
    }, [$, f, p]), P = Te((z) => {
      L(), re('PasswordInput callback "onBlur"', b, z);
    }, [b]), L = ht();
    return F`<input type="password" class="sim-component password-input ${e ?? ""}" ref=${w}
        value=${A} minlength=${s} maxlength=${o}
        readOnly=${i} placeholder=${C}
        pattern=${c} disabled=${$}
        onInput=${B} onBlur=${P} ...${v}
      />`;
  });
}
ue("sim-component.password-input", `
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
function T4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w
    ] = ge(
      r,
      te("class"),
      le("value", (N) => M.ValueIsNumber(N) || Me(N)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      zt("min"),
      le("step", (N) => M.ValueIsNumberInRange(N, 0, 1 / 0, !1, !1)),
      zt("max"),
      le("suggestions", (N) => M.ValueIsListSatisfying(N, M.ValueIsNumber)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    p = p ?? !1;
    const k = ke(), T = ke();
    let A = Me(t) || t != null && !isNaN(t) ? t : ze;
    k.current != null && document.activeElement === k.current ? A = T.current : T.current = A;
    const [C, $, B] = Me(A) ? [void 0, A === ze ? a ?? A.Placeholder : A.Placeholder, p || A.disabled] : [A, a, p], P = Te((N) => {
      if (Xe(N), B == !0)
        return;
      re('NumberInput callback "onInput"', b, N);
      const R = parseFloat(N.target.value);
      T.current = isNaN(R) ? void 0 : R, re(
        'NumberInput callback "onValueInput"',
        f,
        T.current,
        N
      );
    }, [B, b, f]), L = Te((N) => {
      _(), re('NumberInput callback "onBlur"', v, N);
    }, [v]), z = yt(), _ = ht();
    let q = "", D;
    return d != null && d.length > 0 && (D = z + "-Suggestions", q = F`<datalist id=${D}>
          ${d.map((N) => F`<option value=${N}></option>`)}
        </datalist>`), F`<input type="number" ref=${k}
        class="sim-component number-input ${e ?? ""} ${n ? "invalid" : ""}"
        value=${C} min=${s} max=${c} step=${o}
        readOnly=${i} placeholder=${$}
        disabled=${B} list=${D}
        onInput=${P} onBlur=${L} ...${w}
      />${q}`;
  });
}
ue("sim-component.number-input", `
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
function A4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w,
      k
    ] = ge(
      r,
      te("class"),
      le("value", (R) => M.ValueIsEMailAddress(R) || Me(R)),
      se("multiple"),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      te("pattern"),
      le("suggestions", (R) => M.ValueIsListSatisfying(R, M.ValueIsEMailAddress)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    f = f ?? !1;
    const T = ke(), A = ke();
    let C = t ?? ze;
    T.current != null && document.activeElement === T.current ? C = A.current : A.current = C;
    const [$, B, P] = Me(C) ? [void 0, C === ze ? i ?? C.Placeholder : C.Placeholder, f || C.disabled] : [C, i, f], L = Te((R) => {
      if (Xe(R), P == !0)
        return;
      re('EMailAddressInput callback "onInput"', v, R);
      const ce = R.target.value;
      A.current = ce === "" ? ze : ce, re(
        'EMailAddressInput callback "onValueInput"',
        b,
        ce,
        R
      );
    }, [P, v, b]), z = Te((R) => {
      q(), re('EMailAddressInput callback "onBlur"', w, R);
    }, [w]), _ = yt(), q = ht();
    let D = "", N;
    return p != null && p.length > 0 && (N = _ + "-Suggestions", D = F`<datalist id=${N}>
          ${p.map((R) => F`<option value=${R}></option>`)}
        </datalist>`), F`<input type="email" class="sim-component emailaddress-input ${e ?? ""}" ref=${T}
        value=${$} minlength=${o} maxlength=${c}
        multiple=${n} readOnly=${s} placeholder=${B}
        pattern=${d} disabled=${P} list=${N}
        onInput=${L} onBlur=${z} ...${k}
      />${D}`;
  });
}
ue("sim-component.emailaddress-input", `
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
function E4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w
    ] = ge(
      r,
      te("class"),
      le("value", (N) => r0(N) || Me(N)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      te("pattern"),
      le("suggestions", (N) => M.ValueIsListSatisfying(N, r0)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    p = p ?? !1;
    const k = ke(), T = ke();
    let A = t ?? ze;
    k.current != null && document.activeElement === k.current ? A = T.current : T.current = A;
    const [C, $, B] = Me(A) ? [void 0, A === ze ? a ?? A.Placeholder : A.Placeholder, p || A.disabled] : [A, a, p], P = Te((N) => {
      if (Xe(N), B == !0)
        return;
      re('PhoneNumberInput callback "onInput"', b, N);
      const R = N.target.value;
      T.current = R === "" ? ze : R, re(
        'PhoneNumberInput callback "onValueInput"',
        f,
        R,
        N
      );
    }, [B, b, f]), L = Te((N) => {
      _(), re('PhoneNumberInput callback "onBlur"', v, N);
    }, [v]), z = yt(), _ = ht();
    let q = "", D;
    return d != null && d.length > 0 && (D = z + "-Suggestions", q = F`<datalist id=${D}>
          ${d.map((N) => F`<option value=${N}></option>`)}
        </datalist>`), F`<input type="tel" class="sim-component phonenumber-input ${e ?? ""}" ref=${k}
        value=${C} minlength=${s} maxlength=${o}
        readOnly=${i} placeholder=${$} pattern=${c}
        disabled=${B} list=${D}
        onInput=${P} onBlur=${L} ...${w}
      />${q}`;
  });
}
ue("sim-component.phonenumber-input", `
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
function $4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w
    ] = ge(
      r,
      te("class"),
      le("value", (N) => M.ValueIsURL(N) || Me(N)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      te("pattern"),
      le("suggestions", (N) => M.ValueIsListSatisfying(N, M.ValueIsURL)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    p = p ?? !1;
    const k = ke(), T = ke();
    let A = t ?? ze;
    k.current != null && document.activeElement === k.current ? A = T.current : T.current = A;
    const [C, $, B] = Me(A) ? [void 0, A === ze ? a ?? A.Placeholder : A.Placeholder, p || A.disabled] : [A, a, p], P = Te((N) => {
      if (Xe(N), B == !0)
        return;
      re('URLInput callback "onInput"', b, N);
      const R = N.target.value;
      T.current = R === "" ? ze : R, re(
        'URLInput callback "onValueInput"',
        f,
        R,
        N
      );
    }, [B, b, f]), L = Te((N) => {
      _(), re('URLInput callback "onBlur"', v, N);
    }, [v]), z = yt(), _ = ht();
    let q = "", D;
    return d != null && d.length > 0 && (D = z + "-Suggestions", q = F`<datalist id=${D}>
          ${d.map((N) => F`<option value=${N}></option>`)}
        </datalist>`), F`<input type="url" class="sim-component url-input ${e ?? ""}" ref=${k}
        value=${C} minlength=${s} maxlength=${o}
        readOnly=${i} placeholder=${$} pattern=${c}
        disabled=${B} list=${D}
        onInput=${P} onBlur=${L} ...${w}
      />${q}`;
  });
}
ue("sim-component.url-input", `
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
const bn = "\\d{2}:\\d{2}", $f = /\d{2}:\d{2}/;
function Dn(r) {
  return M.ValueIsStringMatching(r, $f);
}
function z4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b
    ] = ge(
      r,
      te("class"),
      le("value", (_) => Dn(_) || Me(_)),
      se("readonly"),
      se("withseconds"),
      le("min", Dn),
      le("max", Dn),
      le("suggestions", (_) => M.ValueIsListSatisfying(_, Dn)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    c = c ?? !1;
    const v = ke(), w = ke();
    let k = t ?? ze;
    v.current != null && document.activeElement === v.current ? k = w.current : w.current = k;
    const [T, A] = Me(k) ? [void 0, c || k.disabled] : [k, c], C = Te((_) => {
      if (Xe(_), A == !0)
        return;
      re('TimeInput callback "onInput"', p, _);
      const q = _.target.value;
      w.current = q === "" ? ze : q, re(
        'TimeInput callback "onValueInput"',
        d,
        q,
        _
      );
    }, [A, p, d]), $ = Te((_) => {
      P(), re('TimeInput callback "onBlur"', f, _);
    }, [f]), B = yt(), P = ht();
    let L = "", z;
    return o != null && o.length > 0 && (z = B + "-Suggestions", L = F`<datalist id=${z}>
          ${o.map((_) => F`<option value=${_}></option>`)}
        </datalist>`), F`<input type="time" class="sim-component time-input ${e ?? ""}" ref=${v}
        value=${T} min=${i} max=${s} step=${a ? 1 : 60}
        readOnly=${n} pattern=${bn}
        disabled=${A}
        onInput=${C} onBlur=${$} ...${b}
      />${L}`;
  });
}
ue("sim-component.time-input", `
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
const N4 = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", zf = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function Rn(r) {
  return M.ValueIsStringMatching(r, zf);
}
function C4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b
    ] = ge(
      r,
      te("class"),
      le("value", (_) => Rn(_) || Me(_)),
      se("readonly"),
      se("withseconds"),
      le("min", Rn),
      le("max", Rn),
      le("suggestions", (_) => M.ValueIsListSatisfying(_, Rn)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    c = c ?? !1;
    const v = ke(), w = ke();
    let k = t ?? ze;
    v.current != null && document.activeElement === v.current ? k = w.current : w.current = k;
    const [T, A] = Me(k) ? [void 0, c || k.disabled] : [k, c], C = Te((_) => {
      if (Xe(_), A == !0)
        return;
      re('DateTimeInput callback "onInput"', p, _);
      const q = _.target.value;
      w.current = q === "" ? ze : q, re(
        'DateTimeInput callback "onValueInput"',
        d,
        q,
        _
      );
    }, [A, p, d]), $ = Te((_) => {
      P(), re('DateTimeInput callback "onBlur"', f, _);
    }, [f]), B = yt(), P = ht();
    let L = "", z;
    return o != null && o.length > 0 && (z = B + "-Suggestions", L = F`<datalist id=${z}>
          ${o.map((_) => F`<option value=${_}></option>`)}
        </datalist>`), F`<input type="datetime-local" class="sim-component datetime-input ${e ?? ""}" ref=${v}
        value=${T} min=${i} max=${s} step=${a ? 1 : 60}
        readOnly=${n} pattern=${bn}
        disabled=${A}
        onInput=${C} onBlur=${$} ...${b}
      />${L}`;
  });
}
ue("sim-component.datetime-input", `
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
const _4 = "\\d{4}-\\d{2}-\\d{2}", Nf = /\d{4}-\d{2}-\d{2}/;
function On(r) {
  return M.ValueIsStringMatching(r, Nf);
}
function D4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f
    ] = ge(
      r,
      te("class"),
      le("value", (z) => On(z) || Me(z)),
      se("readonly"),
      le("min", On),
      le("max", On),
      le("suggestions", (z) => M.ValueIsListSatisfying(z, On)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    o = o ?? !1;
    const b = ke(), v = ke();
    let w = t ?? ze;
    b.current != null && document.activeElement === b.current ? w = v.current : v.current = w;
    const [k, T] = Me(w) ? [void 0, o || w.disabled] : [w, o], A = Te((z) => {
      if (Xe(z), T == !0)
        return;
      re('DateInput callback "onInput"', d, z);
      const _ = z.target.value;
      v.current = _ === "" ? ze : _, re(
        'DateInput callback "onValueInput"',
        c,
        _,
        z
      );
    }, [T, d, c]), C = Te((z) => {
      B(), re('DateInput callback "onBlur"', p, z);
    }, [p]), $ = yt(), B = ht();
    let P = "", L;
    return s != null && s.length > 0 && (L = $ + "-Suggestions", P = F`<datalist id=${L}>
          ${s.map((z) => F`<option value=${z}></option>`)}
        </datalist>`), F`<input type="date" class="sim-component date-input ${e ?? ""}" ref=${b}
        value=${k} min=${a} max=${i}
        readOnly=${n} pattern=${bn}
        disabled=${T}
        onInput=${A} onBlur=${C} ...${f}
      />${P}`;
  });
}
ue("sim-component.date-input", `
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
const R4 = "\\d{4}-W\\d{2}", Cf = /\d{4}-W\d{2}/;
function Ln(r) {
  return M.ValueIsStringMatching(r, Cf);
}
function O4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f
    ] = ge(
      r,
      te("class"),
      le("value", (z) => Ln(z) || Me(z)),
      se("readonly"),
      le("min", Ln),
      le("max", Ln),
      le("suggestions", (z) => M.ValueIsListSatisfying(z, Ln)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    o = o ?? !1;
    const b = ke(), v = ke();
    let w = t ?? ze;
    b.current != null && document.activeElement === b.current ? w = v.current : v.current = w;
    const [k, T] = Me(w) ? [void 0, o || w.disabled] : [w, o], A = Te((z) => {
      if (Xe(z), T == !0)
        return;
      re('WeekInput callback "onInput"', d, z);
      const _ = z.target.value;
      v.current = _ === "" ? ze : _, re(
        'WeekInput callback "onValueInput"',
        c,
        _,
        z
      );
    }, [T, d, c]), C = Te((z) => {
      B(), re('WeekInput callback "onBlur"', p, z);
    }, [p]), $ = yt(), B = ht();
    let P = "", L;
    return s != null && s.length > 0 && (L = $ + "-Suggestions", P = F`<datalist id=${L}>
          ${s.map((z) => F`<option value=${z}></option>`)}
        </datalist>`), F`<input type="week" class="sim-component week-input ${e ?? ""}" ref=${b}
        value=${k} min=${a} max=${i}
        readOnly=${n} pattern=${bn}
        disabled=${T}
        onInput=${A} onBlur=${C} ...${f}
      />${P}`;
  });
}
ue("sim-component.week-input", `
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
const L4 = "\\d{4}-\\d{2}", _f = /\d{4}-\d{2}/;
function Bn(r) {
  return M.ValueIsStringMatching(r, _f);
}
function B4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f
    ] = ge(
      r,
      te("class"),
      le("value", (z) => Bn(z) || Me(z)),
      se("readonly"),
      le("min", Bn),
      le("max", Bn),
      le("suggestions", (z) => M.ValueIsListSatisfying(z, Bn)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    o = o ?? !1;
    const b = ke(), v = ke();
    let w = t ?? ze;
    b.current != null && document.activeElement === b.current ? w = v.current : v.current = w;
    const [k, T] = Me(w) ? [void 0, o || w.disabled] : [w, o], A = Te((z) => {
      if (Xe(z), T == !0)
        return;
      re('MonthInput callback "onInput"', d, z);
      const _ = z.target.value;
      v.current = _ === "" ? ze : _, re(
        'MonthInput callback "onValueInput"',
        c,
        _,
        z
      );
    }, [T, d, c]), C = Te((z) => {
      B(), re('MonthInput callback "onBlur"', p, z);
    }, [p]), $ = yt(), B = ht();
    let P = "", L;
    return s != null && s.length > 0 && (L = $ + "-Suggestions", P = F`<datalist id=${L}>
          ${s.map((z) => F`<option value=${z}></option>`)}
        </datalist>`), F`<input type="month" class="sim-component month-input ${e ?? ""}" ref=${b}
        value=${k} min=${a} max=${i}
        readOnly=${n} pattern=${bn}
        disabled=${T}
        onInput=${A} onBlur=${C} ...${f}
      />${P}`;
  });
}
ue("sim-component.month-input", `
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
function P4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w,
      k
    ] = ge(
      r,
      te("class"),
      le("value", (R) => M.ValueIsTextline(R) || Me(R)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      te("pattern"),
      se("spellcheck"),
      le("suggestions", (R) => M.ValueIsListSatisfying(R, M.ValueIsTextline)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    f = f ?? !1;
    const T = ke(), A = ke();
    let C = t ?? ze;
    T.current != null && document.activeElement === T.current ? C = A.current : A.current = C;
    const [$, B, P] = Me(C) ? [void 0, C === ze ? a ?? C.Placeholder : C.Placeholder, f || C.disabled] : [C, a, f], L = Te((R) => {
      if (Xe(R), P == !0)
        return;
      re('SearchInput callback "onInput"', v, R);
      const ce = R.target.value;
      A.current = ce === "" ? ze : ce, re(
        'SearchInput callback "onValueInput"',
        b,
        ce,
        R
      );
    }, [P, v, b]), z = Te((R) => {
      q(), re('SearchInput callback "onBlur"', w, R);
    }, [w]), _ = yt(), q = ht();
    let D = "", N;
    return p != null && p.length > 0 && (N = _ + "-Suggestions", D = F`<datalist id=${N}>
          ${p.map((R) => F`<option value=${R}></option>`)}
        </datalist>`), F`<input type="search" class="sim-component search-input ${e ?? ""}" ref=${T}
        value=${$} minlength=${s} maxlength=${o}
        readOnly=${i} placeholder=${B}
        pattern=${c} spellcheck=${d}
        disabled=${P} list=${N}
        onInput=${L} onBlur=${z} ...${k}
      />${D}`;
  });
}
ue("sim-component.search-input", `
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
function V4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d
    ] = ge(
      r,
      te("class"),
      le("value", (k) => M.ValueIsTextline(k) || Me(k)),
      te("placeholder"),
      se("multiple"),
      te("accept"),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput")
    );
    s = s ?? !1;
    let p = t ?? ze;
    const [f, b, v] = Me(p) ? [void 0, p === ze ? n ?? p.Placeholder : p.Placeholder, s || p.disabled] : [p, n, s], w = Te((k) => {
      if (Xe(k), v == !0)
        return;
      re('FileInput callback "onInput"', c, k);
      let T = Array.from(k.target.files);
      re(
        'FileInput callback "onValueInput"',
        o,
        T,
        k
      ), k.target.value = "";
    }, [v, c, o]);
    return F`<label class="sim-component file-input ${e ?? ""}">
        ${f == null ? F`<span>${b ?? ""}</span>` : F`<span>${f}</span>`}
        <input type="file" style="display:none"
          multiple=${a} accept=${i}
          disabled=${v} onInput=${w} ...${d}
        />
      </label>`;
  });
}
ue("sim-component.file-input", `
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
function F4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p
    ] = ge(
      r,
      te("class"),
      at("style"),
      xc("icon"),
      y0("color"),
      se("multiple"),
      te("accept"),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput")
    );
    o = o ?? !1;
    const f = Te((b) => {
      if (Xe(b), o == !0)
        return;
      re('PseudoFileInput callback "onInput"', d, b);
      let v = Array.from(b.target.files);
      re(
        'PseudoFileInput callback "onValueInput"',
        c,
        v,
        b
      ), b.target.value = "";
    }, [o, d, c]);
    return F`<label
        class="sim-component pseudo-file-input ${o ? "disabled" : ""} ${e ?? ""}"
      >
        <div style="${t ?? ""};
          -webkit-mask-image:url(${n}); mask-image:url(${n});
          background-color:${a ?? "black"};
        "/>
        <input type="file" style="display:none"
          multiple=${i} accept=${s}
          disabled=${o} onInput=${f} ...${p}
        />
      </label>`;
  });
}
ue("sim-component.pseudo-file-input", `
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
function q4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d
    ] = ge(
      r,
      te("class"),
      at("style"),
      le("value", (A) => M.ValueIsColor(A) || Me(A)),
      se("readonly"),
      le("suggestions", (A) => M.ValueIsListSatisfying(A, M.ValueIsColor)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput")
    );
    s = s ?? !1;
    const [p, f] = Me(n) ? [void 0, s || n.disabled] : [n, s], b = Te((A) => {
      if (Xe(A), f == !0)
        return;
      re('ColorInput callback "onInput"', c, A);
      const C = A.target.value;
      re(
        'ColorInput callback "onValueInput"',
        o,
        C,
        A
      );
    }, [f, c, o]);
    let v = 40;
    const w = yt();
    let k = "", T;
    return i != null && i.length > 0 && (T = w + "-Suggestions", v += 20, k = F`<datalist id=${T}>
          ${i.map((A) => F`<option value=${A}></option>`)}
        </datalist>`), F`<input type="color" class="sim-component color-input ${e ?? ""}"
        style="min-width:${v}px; ${t}"
        value=${p} readOnly=${n} list=${T}
        disabled=${f} onInput=${b} ...${d}
      />${k}`;
  });
}
ue("sim-component.color-input", `
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
function H4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o
    ] = ge(
      r,
      te("class"),
      le("value", (f) => M.ValueIsTextline(f) || Me(f)),
      w0("options", (f) => M.ValueIsListSatisfying(f, M.ValueIsTextline)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput")
    );
    a = a ?? !1, n = n ?? [];
    const [c, d] = Me(t) ? [void 0, a || t.disabled] : [t, a], p = Te((f) => {
      if (Xe(f), d == !0)
        return;
      re('DropDown callback "onInput"', s, f);
      let b = f.target.value;
      re(
        'DropDown callback "onValueInput"',
        i,
        b,
        f
      );
    }, [d, s, i]);
    return F`<select class="sim-component dropdown ${e ?? ""}"
        disabled=${d} onInput=${p} ...${o}
      >${n.map(
      (f) => {
        let b = f.replace(/:.*$/, "").trim(), v = f.replace(/^[^:]*:/, "").trim();
        const w = v[0] === "-";
        return /^[-]+$/.test(v) ? F`<hr/>` : (b === f && (b = b.replace(/^-/, "")), w && (v = v.replace(/^-/, "")), F`<option value=${b}
              selected=${b === c} disabled=${w}
            >${v}</option>`);
      }
    )}</select>`;
  });
}
ue("sim-component.dropdown", `
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
function j4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p
    ] = ge(
      r,
      te("class"),
      at("style"),
      le("value", (w) => M.ValueIsTextline(w) || Me(w)),
      xc("icon"),
      y0("color"),
      w0("options", (w) => M.ValueIsListSatisfying(w, M.ValueIsTextline)),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput")
    );
    o = o ?? !1;
    const [f, b] = Me(n) ? [void 0, o || n.disabled] : [n, o], v = Te((w) => {
      if (Xe(w), b == !0)
        return;
      re('PseudoDropDown callback "onInput"', d, w);
      let k = w.target.value;
      re(
        'PseudoDropDown callback "onValueInput"',
        c,
        k,
        w
      );
    }, [b, d, c]);
    return F`<label
        class="sim-component pseudo-dropdown ${o ? "disabled" : ""} ${e ?? ""}"
      >
        <div style="${t ?? ""};
          -webkit-mask-image:url(${a}); mask-image:url(${a});
          background-color:${i ?? "black"};
        "/>
        <select
          disabled=${b} onInput=${v} ...${p}
        >${s.map(
      (w) => {
        let k = w.replace(/:.*$/, "").trim(), T = w.replace(/^[^:]*:/, "").trim();
        const A = T[0] === "-";
        return /^[-]+$/.test(T) ? F`<hr/>` : (k === w && (k = k.replace(/^-/, "")), A && (T = T.replace(/^-/, "")), F`<option value=${k}
                selected=${k === f} disabled=${A}
              >${T}</option>`);
      }
    )}</select>
      </label>`;
  });
}
ue("sim-component.pseudo-dropdown", `
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
function U4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w,
      k,
      T
    ] = ge(
      r,
      te("class"),
      at("style"),
      le("value", (N) => M.ValueIsText(N) || Me(N)),
      se("invalid"),
      te("placeholder"),
      se("readonly"),
      Ze("minlength"),
      Ze("maxlength"),
      se("wrap"),
      le("resizability", (N) => M.ValueIsOneOf(N, ["none", "horizontal", "vertical", "both"])),
      se("spellcheck"),
      se("disabled"),
      Q("onvalueinput"),
      Q("oninput"),
      Q("onblur")
    );
    b = b ?? !1;
    const A = ke(), C = ke();
    let $ = n ?? ze;
    A.current != null && document.activeElement === A.current ? $ = C.current : C.current = $;
    const [B, P, L] = Me($) ? [void 0, $ === ze ? i ?? $.Placeholder : $.Placeholder, b || $.disabled] : [$, i, b], z = Te((N) => {
      if (Xe(N), L == !0)
        return;
      re('TextInput callback "onInput"', w, N);
      const R = N.target.value;
      C.current = R === "" ? ze : R, re(
        'TextInput callback "onValueInput"',
        v,
        R,
        N
      );
    }, [L, w, v]), _ = Te((N) => {
      q(), re('TextInput callback "onBlur"', k, N);
    }, [k]), q = ht(), D = yt();
    return F`<textarea class="sim-component text-input ${e ?? ""}"
        key=${D} ref=${A}
        style="${d == !0 ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${p ?? "none"}; ${t}"
        value=${B} minlength=${o} maxlength=${c}
        readOnly=${s} placeholder=${P}
        spellcheck=${f} disabled=${L}
        onInput=${z} onBlur=${_} ...${T}
      />`;
  });
}
ue("sim-component.text-input", `
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
function G4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o
    ] = ge(
      r,
      te("class"),
      Ze("activeindex"),
      Ze("gapindex"),
      se("disabled"),
      Q("onactivationchange")
    );
    const c = ke(t ?? 0), d = ke(t ?? 0);
    t != null && t !== c.current ? d.current = t : t = d.current;
    const p = Te((v, w) => {
      if (a)
        return Za(w);
      d.current = t = v, f(), re('TabStrip callback "onActivationChange"', i, v);
    }, [a, i]), f = ht(), b = n0(o).filter(
      (v) => v.type != null || v.trim() !== ""
    );
    return F`<div class="sim-component tabstrip ${e ?? ""}" ...${s}>
        ${b.map((v, w) => {
      const k = w === n ? F`<div class="gap"/>` : "";
      return w === t ? F`${k}<div class="active tab">${v}</>` : F`${k}<div class="${a ? "disabled" : ""} tab"
            onClick=${(T) => p(w, T)}>${v}</>`;
    })}
      </>`;
  });
}
ue("sim-component.tabstrip", `
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
function W4(r) {
  return be(() => {
    let [
      e,
      t,
      n,
      a,
      i,
      s,
      o
    ] = ge(
      r,
      te("class"),
      wf("header"),
      se("expanded"),
      se("disabled"),
      Q("onexpansionchange")
    );
    a = a ?? !1;
    const c = ke(n ?? !1), d = ke(n ?? !1);
    n != null && n !== c.current ? d.current = n : n = d.current;
    const p = Te((b) => {
      Xe(b), a != !0 && (d.current = n = !n, f(), re('Fold callback "onExpansionChange"', i, n));
    }, [a, i]), f = ht();
    return F`<div class="sim-component accordion-fold ${e ?? ""}">
        <div class="header">
          <div class="expander ${n ? "expanded" : "collapsed"}" onClick=${p}/>
          <div class="title">${t}</>
        </>${n ? F`<div class="content">${o}</>` : ""}
      </>`;
  });
}
ue("sim-component.accordion-fold", `
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
      background:url(${oa}/caret-down.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .sim-component.accordion-fold > .header > .expander.collapsed {
      background:url(${oa}/caret-right.png);
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
let Rr = 0;
const Or = /* @__PURE__ */ new WeakMap();
function Df(r, e, t) {
  return Or.has(r) ? "" + Or.get(r) : (Rr++, Or.set(r, Rr), "" + Rr);
}
function Rf(r, e, t, n = !1, a = "") {
  return typeof r.toHTML == "function" ? F`<div class="default" dangerouslySetInnerHTML=${{ __html: r.toHTML() }}/>` : F`<div class="default">${"" + r}</>`;
}
function Z4(r) {
  return be(() => {
    const [e] = s0();
    let [
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b
    ] = ge(
      r,
      te("class"),
      w0("list", (D) => M.ValueIsListSatisfying(D, M.ValueIsPlainObject)),
      te("placeholder"),
      Q("keyoflistitem"),
      Q("listitemrenderer"),
      Q("onlistitemclick"),
      le("selecteditems", (D) => M.ValueIsListSatisfying(D, M.ValueIsPlainObject)),
      Ze("selectionlimit"),
      Q("onselectionchange"),
      Q("onlistitemmove")
    );
    const v = p != null, w = v && f != null, k = /* @__PURE__ */ new Set();
    n.forEach((D) => {
      k.has(D) && gt(
        'InvalidArguments: the given "List" contains double entries'
      ), k.add(D);
    }), i = i ?? Df, s = s ?? Rf;
    const T = /* @__PURE__ */ new Set();
    v && (c == null ? c = [] : c = c.filter((D) => T.has(D) ? !1 : (T.add(D), !0)), c.length > d && (c.slice(d).forEach(
      (D) => T.delete(D)
    ), c.length = d));
    const [A, C] = jr({
      dragging: !1,
      DropTargetIndex: void 0,
      DropMode: void 0
    });
    function $(D) {
      C((N) => ({ ...N, ...D }));
    }
    const B = (D) => {
      D.stopImmediatePropagation();
      const N = D.target.Item, R = D.target.Index;
      if (re(
        'FlatListView callback "onListItemClick"',
        o,
        N,
        n,
        R,
        D
      ), v) {
        const ce = D.pointerType !== "mouse" || D.ctrlKey || D.metaKey;
        P(N, n, R, ce);
      }
    }, P = (D, N, R, ce) => {
      if (d === 0)
        return;
      let ve = c;
      if (ce)
        if (T.has(D))
          ve = c.filter(
            (he) => he !== D
          );
        else {
          if (c.length === d)
            return;
          ve = [...c, D];
        }
      else
        ve = [D];
      re(
        'FlatListView callback "onSelectionChange"',
        p,
        ve,
        N
      );
    }, L = Te((D) => {
      const N = D.target.Item, R = D.target.Index;
      if (!T.has(N)) {
        const ce = (
          /* (Event.pointerType !== 'mouse') ||*/
          D.ctrlKey || D.metaKey
        );
        P(N, n, R, ce);
      }
      D.dataTransfer.effectAllowed = "move", $({ dragging: !0 });
    }, [n, T, P]), z = (D) => {
      const N = D.target.Item, R = D.target.Index, ce = D.target, ve = ce.getBoundingClientRect().top + ce.offsetHeight / 2, he = D.clientY < ve ? "before" : "after";
      T.has(N) ? A.DropTargetItem != null && $({ DropTargetItem: void 0, DropMode: void 0 }) : (D.preventDefault(), (A.DropTargetItem !== N || A.DropMode !== he) && $({ DropTargetItem: N, DropMode: he }));
    }, _ = (D) => {
      $({ dragging: !1, DropTargetItem: void 0 });
    }, q = (D) => {
      let { DropTargetItem: N, DropMode: R } = A;
      if (N != null) {
        const ce = c.length, ve = n.filter(
          // in original order!
          (K) => T.has(K)
        ), he = n.filter(
          (K) => !T.has(K)
        ), O = he.indexOf(N) + (R === "before" ? 0 : 1);
        he.splice(O, 0, ...ve), n = he, re(
          'FlatListView callback "onListItemMove"',
          f,
          n,
          ve,
          N,
          R
        );
      }
    };
    if (n.length === 0)
      return F`<div class="sim-component flatlistview placeholder ${t ?? ""}" ...${b}>
          <div dangerouslySetInnerHTML=${{ __html: a ?? "(empty)" }}/>
        </>`;
    {
      const { dragging: D, DropTargetItem: N, DropMode: R } = A;
      return F`<div class="sim-component flatlistview ${D ? "dragging" : ""} ${t ?? ""}"
              onClick=${B}
          onDragStart=${w && L}
           onDragOver=${w && z}
            onDragEnd=${w && _}
               onDrop=${w && q}
          ref=${e} ...${b}
        >
          ${n.map((ce, ve) => {
        const he = ke();
        Br(() => {
          he.current.Item = ce, he.current.Index = ve;
        }, []);
        const O = ut(
          'FlatListView callback "KeyOfListItem"',
          i,
          ce,
          n,
          ve
        ), K = T.has(ce), Y = ce === N ? R : "";
        return F`<div class=${"itemview" + (K ? " selected" : "") + (ce === N ? ` DropTarget ${R}` : "")} key=${O} ref=${he} draggable=${w}>
              ${ut(
          'FlatListView callback "ListItemRenderer"',
          s,
          ce,
          n,
          ve,
          K,
          Y
        )}
            </>`;
      })}
        </>`;
    }
  });
}
ue("sim-component.flatlistview", `
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
function Of(r) {
  return Or.has(r) ? "" + Or.get(r) : (Rr++, Or.set(r, Rr), "" + Rr);
}
function Lf(r, e = !1, t = !1, n = !1, a = "") {
  return typeof r.toHTML == "function" ? F`<div class="default" dangerouslySetInnerHTML=${{ __html: r.toHTML() }}/>` : F`<div class="default">${"" + r}</>`;
}
function X4(r) {
  return be(() => {
    const [e] = s0();
    let [
      t,
      n,
      a,
      i,
      s,
      o,
      c,
      d,
      p,
      f,
      b,
      v,
      w,
      k,
      T,
      A,
      C,
      $
    ] = ge(
      r,
      te("class"),
      w0("list", (W) => M.ValueIsListSatisfying(W, M.ValueIsPlainObject)),
      te("placeholder"),
      Q("keyoflistitem"),
      Q("listitemrenderer"),
      Q("contentoflistitem"),
      Q("containeroflistitem"),
      Q("onlistitemclick"),
      Q("itemmaybeselected"),
      le("selecteditems", (W) => M.ValueIsListSatisfying(W, M.ValueIsPlainObject)),
      Ze("selectionlimit"),
      Q("onselectionchange"),
      Q("itemmaybeexpanded"),
      le("expandeditems", (W) => M.ValueIsListSatisfying(W, M.ValueIsPlainObject)),
      Q("onexpansionchange"),
      Q("listitemmayaccept"),
      Q("onlistitemmove")
    );
    const B = v != null, P = B && C != null, L = /* @__PURE__ */ new Set();
    function z(W) {
      W.forEach((ae) => {
        L.has(ae) && gt(
          'InvalidArguments: the given "List" contains double entries'
        ), L.add(ae);
        const j = ut(
          'NestedListView callback "ContentOfListItem"',
          o,
          ae
        );
        j != null && z(j);
      });
    }
    z(n);
    const _ = ke([]), q = ke(() => !0);
    i = i ?? Of, s = s ?? Lf, p = p ?? q.current, w = w ?? q.current, k = k ?? _.current, A = A ?? q.current;
    function D(W, ae) {
      let j = ut(
        'NestedListView callback "ContainerOfListItem"',
        c,
        ae
      );
      switch (j) {
        case null:
        case void 0:
          return !1;
        case W:
          return !0;
        default:
          return D(W, j);
      }
    }
    const N = /* @__PURE__ */ new Set();
    if (B) {
      if (f == null)
        f = [];
      else {
        f = f.filter((W) => N.has(W) ? !1 : (N.add(W), !0));
        for (let W = f.length - 1; W >= 0; W--) {
          const ae = f[W];
          f.some((j, Fe) => Fe !== W && D(j, ae)) && (f.splice(W, 1), N.delete(ae));
        }
      }
      f.length > b && (f.slice(b).forEach(
        (W) => N.delete(W)
      ), f.length = b);
    }
    function R(W) {
      return f.some(
        (ae) => D(ae, W)
      );
    }
    function ce(W) {
      for (let ae = f.length - 1; ae >= 0; ae--) {
        const j = f[ae];
        D(W, j) && (f.splice(ae, 1), N.delete(j));
      }
    }
    function ve(W, ae) {
      if (b === 0)
        return;
      let j = f;
      if (ae)
        if (N.has(W))
          j = f.filter(
            (Fe) => Fe !== W
          );
        else {
          if (f.length === b)
            return;
          j = [...f.filter(
            (Fe) => !D(W, Fe)
          ), W];
        }
      else
        j = [W];
      re(
        'NestedListView callback "onSelectionChange"',
        v,
        j
      );
    }
    const he = dn(() => {
      const W = /* @__PURE__ */ new Map();
      return k == null ? k = [] : k = k.filter((ae) => W.has(ae) ? !1 : (W.set(ae, "explicit"), !0)), W;
    }, [k]);
    function O(W) {
      he.has(W) ? Y(W) : K(W);
    }
    function K(W) {
      he.set(W, "explicit");
      let ae = [...k, W], j = ut(
        'NestedListView callback "ContainerOfListItem"',
        c,
        W
      );
      for (; j != null; )
        he.has(j) || (he.set(j, "explicit"), ae.push(j)), j = ut(
          'NestedListView callback "ContainerOfListItem"',
          c,
          j
        );
      re(
        'NestedListView callback "onExpansionChange"',
        T,
        ae
      );
    }
    function Y(W) {
      he.delete(W);
      const ae = k.filter(
        (j) => j !== W
      );
      re(
        'NestedListView callback "onExpansionChange"',
        T,
        ae
      );
    }
    function pe(W) {
      he.has(W) || he.set(W, "automatic");
      let ae = ut(
        'NestedListView callback "ContainerOfListItem"',
        c,
        W
      );
      for (; ae != null; )
        he.has(ae) || he.set(ae, "automatic"), ae = ut(
          'NestedListView callback "ContainerOfListItem"',
          c,
          ae
        );
    }
    function we(W) {
      he.get(W) === "automatic" && he.delete(W);
      let ae = ut(
        'NestedListView callback "ContainerOfListItem"',
        c,
        W
      );
      for (; ae != null; )
        he.get(ae) === "automatic" && he.delete(ae), ae = ut(
          'NestedListView callback "ContainerOfListItem"',
          c,
          ae
        );
    }
    const $e = ke(new Object(null)), Ne = ke({
      dragging: !1,
      DropTargetItem: void 0,
      DropMode: void 0,
      DropTargetTimer: void 0
    });
    function tt(W) {
      const ae = W.target.getAttribute("data-key"), j = $e.current[ae];
      j != null && (N.has(j) || ve(j, W.shiftKey || W.metaKey), W.dataTransfer.effectAllowed = "move", ye.State.dragging = !0, ye.State.DropTargetItem = void 0, ye.State.DropTargetTimer = void 0, ct());
    }
    function je(W) {
      const ae = W.target.getAttribute("data-key"), j = $e.current[ae], { DropTargetItem: Fe } = ye.State;
      if (Fe === j)
        W.preventDefault(), $t(W, j);
      else {
        if (Fe != null && ie(W), j == null)
          return;
        if (!N.has(j) && !R(j)) {
          if (ut(
            'NestedListView callback "ListItemMayAccept"',
            ye.ListItemMayAccept,
            j,
            f
          ) != !0)
            return;
          W.preventDefault(), Ee(W, j);
        }
      }
    }
    const Je = je;
    function Et(W) {
      const ae = W.target.getAttribute("data-key"), j = $e.current[ae], { DropTargetItem: Fe } = ye.State;
      (Fe === j || j == null) && ie(W);
    }
    function Ae(W) {
      Et(W), ye.State.dragging = !1, ye.State.DropMode = void 0, ct();
    }
    function Ee(W, ae) {
      const { DropTargetTimer: j } = ye.State;
      j != null && (clearTimeout(j), ye.State.DropTargetTimer = void 0), ye.State.DropTargetItem = ae, ye.State.DropTargetTimer = setTimeout(() => {
        ye.State.DropTargetTimer = void 0, ye.State.DropMode === "after" && (pe(ae), ct());
      }, 2e3);
      let Fe = ut(
        'NestedListView callback "ContainerOfListItem"',
        c,
        ae
      );
      Fe != null && (pe(Fe), ct()), $t(W, ae);
    }
    function $t(W, ae) {
      const j = W.target.getBoundingClientRect().top + W.target.offsetHeight / 2, Fe = W.clientY < j ? "before" : "after";
      ye.State.DropMode !== Fe && (Fe === "after" && ye.State.DropTargetTimer == null && (ye.State.DropTargetTimer = setTimeout(() => {
        ye.State.DropTargetTimer = void 0, ye.State.DropMode === "after" && (pe(ae), ct());
      }, 2e3)), ye.State.DropMode = Fe, ct());
    }
    function ie(W) {
      const { DropTargetItem: ae, DropTargetTimer: j } = ye.State;
      j != null && (clearTimeout(j), ye.State.DropTargetTimer = void 0), ae != null && (we(ae), ye.State.DropTargetItem = void 0), setTimeout(ct, 500);
    }
    function sr(W) {
      let { DropTargetItem: ae, DropMode: j } = ye.State;
      ae != null && (re(
        'NestedListView callback "onListItemMove"',
        C,
        f,
        ae,
        j
      ), ye.State.dragging = !1, ye.State.DropTargetItem = void 0, ye.State.DropMode = void 0);
    }
    const [or, Bt] = jr({ Rendering: 0 });
    function ct() {
      Bt((W) => ({ Rendering: W.Rendering + 1 }));
    }
    const ye = {
      List: n,
      ListIsSortable: P,
      KeyOfListItem: i,
      ListItemRenderer: s,
      ContentOfListItem: o,
      ListIsSelectable: B,
      ListItemMayBeSelected: p,
      onListItemClick: d,
      SelectionSet: N,
      anyOuterItemIsSelected: R,
      changeSelection: ve,
      ExpansionMap: he,
      ListItemMayBeExpanded: w,
      toggleExpansionOf: O,
      ListItemWithKey: $e.current,
      ListItemMayAccept: A,
      State: Ne.current,
      rerender: ct
    };
    if (n.length === 0)
      return F`<div class="sim-component nestedlistview placeholder ${t ?? ""}" ...${$}>
          <div dangerouslySetInnerHTML=${{ __html: a ?? "(empty)" }}/>
        </>`;
    {
      const { dragging: W } = ye.State;
      return F`<div class="sim-component nestedlistview ${W ? "dragging" : ""}"
          onDragStart=${tt} onDragEnter=${je} onDragOver=${Je}
          onDragLeave=${Et} onDragEnd=${Ae} onDrop=${sr}
          ref=${e} ...${$}
        >
          <${kc} List=${n}
            ListContext=${ye} Rendering=${or.Rendering}
          />
        </>`;
    }
  });
}
ue("sim-component.nestedlistview", `
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
function kc(r) {
  const [e] = s0(), { List: t, ListContext: n, Rendering: a } = r;
  if (t == null)
    debugger;
  return F`<div class="listview" ref=${e}>${t.map((i) => F`<${Bf}
        ListItem=${i} ListContext=${n} Rendering=${a}
      />`)}</>`;
}
function Bf(r) {
  const [e] = s0(), { ListItem: t, ListContext: n, Rendering: a } = r, { KeyOfListItem: i, ContentOfListItem: s } = n, o = ut(
    'NestedListView callback "ContentOfListItem"',
    n.ContentOfListItem,
    t
  ), c = o == null, d = n.ExpansionMap.has(t), p = n.SelectionSet.has(t), f = ut(
    'NestedListView callback "KeyOfListItem"',
    i,
    t
  );
  Br(() => {
    n.ListItemWithKey[f] = t;
  }, []);
  const b = (L) => {
    if (L.stopPropagation(), re(
      'NestedListView callback "onListItemClick"',
      n.onListItemClick,
      t,
      L
    ), !n.anyOuterItemIsSelected(t) && n.ListIsSelectable) {
      if (ut(
        'NestedListView callback "ListItemMayBeSelected"',
        n.ListItemMayBeSelected,
        t
      ) != !0)
        return;
      const z = L.pointerType !== "mouse" || L.ctrlKey || L.metaKey;
      n.changeSelection(t, z);
    }
  }, v = (L) => {
    L.stopPropagation(), ut(
      'NestedListView callback "ContentOfListItem"',
      s,
      t
    ) != null && (n.toggleExpansionOf(t), n.rerender());
  };
  let w = c ? "plain" : d ? "expanded" : "collapsed", k = ut(
    'NestedListView callback "ListItemMayBeExpanded"',
    n.ListItemMayBeExpanded,
    t
  );
  const T = F`<div
      class="expansion-marker ${w} ${k ? "" : "disabled"}"
      onClick=${k && v}
    />`, A = !c && d && !(n.State.dragging && p) ? F`<${kc} List=${o}
          ListContext=${n} Rendering=${a}
        />` : "", { DropTargetItem: C, DropMode: $ } = n.State, B = t === C, P = n.ListIsSortable;
  return F`<div class=${"listitemview" + (p ? " selected" : "") + (B ? ` DropTarget ${$}` : "")} ref=${e} key=${f} data-key=${f}
        draggable=${P} onClick=${b}
    > <div class="labelline">
        ${T}
        <div class="labelview">${n.ListItemRenderer(
    t,
    p,
    c,
    d,
    B ? $ : ""
  )}</>
      </>
      ${A}
    </>`;
}
function Xe(r, e = !1) {
  r.stopPropagation(), e == !0 && r.preventDefault();
}
const Za = Xe;
function re(r, e, ...t) {
  if (M.expectTextline("callback description", r), M.allowFunction("callback", e), e != null)
    try {
      return e(...t);
    } catch (n) {
      gt(`CallbackFailure: ${r} failed with ${"" + n}`);
    }
}
const ut = re;
function la(r) {
  if (r === null || typeof r != "object")
    return r;
  if (Array.isArray(r))
    return r.map(la);
  const e = {};
  for (const t in r)
    r.hasOwnProperty(t) && (e[t] = la(r[t]));
  return e;
}
export {
  W4 as AccordionFold,
  v4 as Button,
  x4 as Checkbox,
  q4 as ColorInput,
  D4 as DateInput,
  C4 as DateTimeInput,
  o4 as Description,
  H4 as DropDown,
  Jm as Dummy,
  A4 as EMailAddressInput,
  b4 as FAIcon,
  V4 as FileInput,
  l4 as Fineprint,
  Z4 as FlatListView,
  y4 as Gauge,
  u4 as HTMLView,
  g4 as Icon,
  h4 as ImageView,
  s4 as Label,
  S0 as MarkdownRenderer,
  d4 as MarkdownView,
  Go as Marked,
  B4 as MonthInput,
  X4 as NestedListView,
  T4 as NumberInput,
  Fm as OperationWasConfirmed,
  Qm as Outline,
  M4 as PasswordInput,
  E4 as PhoneNumberInput,
  k4 as Progressbar,
  j4 as PseudoDropDown,
  F4 as PseudoFileInput,
  w4 as Radiobutton,
  _4 as SIM_DatePattern,
  Nf as SIM_DateRegExp,
  N4 as SIM_DateTimePattern,
  zf as SIM_DateTimeRegExp,
  f4 as SIM_DefaultSandboxPermissions,
  kf as SIM_ErrorIndicator,
  Ef as SIM_FAIconNames,
  Mf as SIM_ImageAlignments,
  If as SIM_ImageScalings,
  L4 as SIM_MonthPattern,
  _f as SIM_MonthRegExp,
  Tf as SIM_ReferrerPolicies,
  bn as SIM_TimePattern,
  $f as SIM_TimeRegExp,
  R4 as SIM_WeekPattern,
  Cf as SIM_WeekRegExp,
  ze as SIM_empty,
  Xp as SIM_multipleValues,
  Zp as SIM_noSelection,
  pf as SIM_supportedHTMLFormats,
  mf as SIM_supportedImageFormats,
  ff as SIM_supportedMarkdownFormats,
  hf as SIM_supportedTextFormats,
  p4 as SVGView,
  P4 as SearchInput,
  S4 as Slider,
  e4 as Spacer,
  i4 as Subtitle,
  G4 as TabStrip,
  U4 as TextInput,
  c4 as TextView,
  I4 as TextlineInput,
  z4 as TimeInput,
  a4 as Title,
  $4 as URLInput,
  On as ValueIsDate,
  Rn as ValueIsDateTime,
  Hr as ValueIsDimension,
  bc as ValueIsGeometry,
  am as ValueIsHTMLFormat,
  vc as ValueIsIdentifier,
  sm as ValueIsImageFormat,
  cm as ValueIsIndexPath,
  qr as ValueIsLocation,
  rm as ValueIsMIMEType,
  im as ValueIsMarkdownFormat,
  Bn as ValueIsMonth,
  b0 as ValueIsName,
  v0 as ValueIsPath,
  mc as ValueIsPosition,
  gc as ValueIsSize,
  Me as ValueIsSpecial,
  nm as ValueIsTextFormat,
  Dn as ValueIsTime,
  Ln as ValueIsWeek,
  m4 as WebView,
  O4 as WeekInput,
  Wa as _normalizedName,
  yf as _normalizedPath,
  rf as allowDimension,
  cf as allowGeometry,
  bf as allowIdentifier,
  ef as allowLocation,
  Yp as allowName,
  Qp as allowPath,
  af as allowPosition,
  of as allowSize,
  Zf as allowedDimension,
  em as allowedGeometry,
  om as allowedIdentifier,
  Gf as allowedLocation,
  qf as allowedName,
  jf as allowedPath,
  Kf as allowedPosition,
  Jf as allowedSize,
  Gm as centered,
  Xe as consumeEvent,
  Za as consumingEvent,
  la as deepCopyOf,
  re as executeCallback,
  ut as executedCallback,
  t4 as expandingSpacer,
  nf as expectDimension,
  uf as expectGeometry,
  vf as expectIdentifier,
  tf as expectLocation,
  fc as expectName,
  x0 as expectPath,
  sf as expectPosition,
  lf as expectSize,
  Xf as expectedDimension,
  tm as expectedGeometry,
  lm as expectedIdentifier,
  Wf as expectedLocation,
  Hf as expectedName,
  Uf as expectedPath,
  Yf as expectedPosition,
  Qf as expectedSize,
  Um as fullsized,
  Wm as horizontal,
  r4 as horizontalSeparator,
  ue as installStylesheetFor,
  lt as mandatoryAttribute,
  dm as mandatoryBoolean,
  wm as mandatoryCardinal,
  Am as mandatoryColor,
  $m as mandatoryEMailAddress,
  Tm as mandatoryFunction,
  gm as mandatoryInteger,
  vm as mandatoryIntegerInRange,
  Rm as mandatoryNameOrIndex,
  hm as mandatoryNumber,
  fm as mandatoryNumberInRange,
  xm as mandatoryOrdinal,
  _m as mandatoryPath,
  Nm as mandatoryPhoneNumber,
  km as mandatoryString,
  Im as mandatoryStringMatching,
  Mm as mandatoryText,
  wf as mandatoryTextline,
  xc as mandatoryURL,
  w0 as mandatoryValue,
  qm as normalizedName,
  Hm as normalizedPath,
  ot as optionalAttribute,
  se as optionalBoolean,
  xf as optionalCardinal,
  y0 as optionalColor,
  Em as optionalEMailAddress,
  Q as optionalFunction,
  mm as optionalInteger,
  bm as optionalIntegerInRange,
  Dm as optionalNameOrIndex,
  zt as optionalNumber,
  pm as optionalNumberInRange,
  Ze as optionalOrdinal,
  Cm as optionalPath,
  zm as optionalPhoneNumber,
  ym as optionalString,
  Sm as optionalStringMatching,
  at as optionalText,
  te as optionalTextline,
  k0 as optionalURL,
  le as optionalValue,
  um as parsedProp,
  ge as parsedPropSet,
  be as safelyRendered,
  Km as selective,
  Ym as stacked,
  Xm as tabular,
  gt as throwError,
  Ff as throwReadOnlyError,
  jm as uninstallStylesheetFor,
  Vm as useClickDragging,
  Bm as useConfiguration,
  Pm as useDragging,
  Om as useOnlineStatus,
  ht as useRerenderer,
  Lm as useWindowSize,
  Zm as vertical,
  n4 as verticalSeparator
};
