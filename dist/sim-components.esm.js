import { ValidatorForClassifier, acceptNil, rejectNil, ValueIsStringMatching, ValueIsFiniteNumber, ValueIsPlainObject, expectText, expectBoolean, quoted, ValueIsOneOf, ValueIsListSatisfying, ValueIsOrdinal, expectPlainObject, ValueIsFunction, expectFunction, allowTextline, ValueIsBoolean, ValueIsNumber, ValueIsNumberInRange, ValueIsInteger, ValueIsIntegerInRange, ValueIsCardinal, ValueIsString, ValueIsText, ValueIsTextline, ValueIsColor, ValueIsEMailAddress, ValueIsURL, allowPlainObject, expectValue, allowFunction, allowOrdinal, expectTextline } from "javascript-interface-library";
import { h as h$1, options, toChildArray } from "preact";
import e$1 from "htm";
import { useAutoAnimate } from "@formkit/auto-animate";
import { Marked } from "marked";
import { Marked as Marked2 } from "marked";
import markedKatex from "marked-katex-extension";
import { markedHighlight } from "marked-highlight";
var m$1 = e$1.bind(h$1);
var t, r, u, i, o = Object.is, f = 0, c = [], e = options, a = e.__b, v = e.__r, l = e.diffed, m = e.__c, p = e.unmount, s = e.__;
function d(n, t2) {
  e.__h && e.__h(r, n, f || t2), f = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n >= u2.__.length && u2.__.push({}), u2.__[n];
}
function y(n) {
  return f = 1, h(D, n);
}
function h(n, u2, i2) {
  var f2 = d(t++, 2);
  if (f2.t = n, !f2.__c && (f2.__ = [D(void 0, u2), function(n2) {
    var t2 = f2.__N ? f2.__N[0] : f2.__[0], r2 = f2.t(t2, n2);
    o(t2, r2) || (f2.__N = [r2, f2.__[1]], f2.__c.setState({}));
  }], f2.__c = r, !r.__f)) {
    var c2 = function(n2, t2, r2) {
      if (!f2.__c.__H) return true;
      var u3 = f2.__c.__H.__, i3 = f2.__c.props !== n2 || u3.every(function(n3) {
        return !n3.__N;
      });
      return u3.forEach(function(n3) {
        if (n3.__N) {
          var t3 = n3.__[0];
          n3.__ = n3.__N, n3.__N = void 0, o(t3, n3.__[0]) || (i3 = true);
        }
      }), e2 && e2.call(this, n2, t2, r2) || i3;
    };
    r.__f = true;
    var e2 = r.shouldComponentUpdate, a2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n2, t2, r2) {
      if (4 & this.__g) {
        var u3 = e2;
        e2 = void 0, c2(n2, t2, r2), e2 = u3;
      }
      a2 && a2.call(this, n2, t2, r2);
    }, r.shouldComponentUpdate = c2;
  }
  return f2.__;
}
function _(n, u2) {
  var i2 = d(t++, 3);
  !e.__s && C(i2.__H, u2) && (i2.__ = n, i2.u = u2, r.__H.__h.push(i2));
}
function F(n) {
  return f = 5, q(function() {
    return { current: n };
  }, []);
}
function q(n, r2) {
  var u2 = d(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n(), u2.__H = r2, u2.__h = n), u2.__;
}
function b(n, t2) {
  return f = 8, q(function() {
    return n;
  }, t2);
}
function P() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n.__;
}
function g() {
  for (var n; n = c.shift(); ) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t2) {
    n.__H.__h = [], e.__e(t2, n.__v);
  }
}
e.__b = function(n) {
  r = null, a && a(n);
}, e.__ = function(n, t2) {
  n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), s && s(n, t2);
}, e.__r = function(n) {
  v && v(n), t = 0;
  var i2 = (r = n.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n2) {
    n2.__N && (n2.__ = n2.__N), n2.u = n2.__N = void 0;
  })) : (i2.__h.forEach(z), i2.__h.forEach(B), i2.__h = [], t = 0)), u = r;
}, e.diffed = function(n) {
  l && l(n);
  var t2 = n.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== c.push(t2) && i === e.requestAnimationFrame || ((i = e.requestAnimationFrame) || w)(g)), t2.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.u = void 0;
  })), u = r = null;
}, e.__c = function(n, t2) {
  t2.some(function(n2) {
    try {
      n2.__h.forEach(z), n2.__h = n2.__h.filter(function(n3) {
        return !n3.__ || B(n3);
      });
    } catch (r2) {
      t2.some(function(n3) {
        n3.__h && (n3.__h = []);
      }), t2 = [], e.__e(r2, n2.__v);
    }
  }), m && m(n, t2);
}, e.unmount = function(n) {
  p && p(n);
  var t2, r2 = n.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      z(n2);
    } catch (n3) {
      t2 = n3;
    }
  }), r2.__H = void 0, t2 && e.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n);
  }, u2 = setTimeout(r2, 35);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n) {
  var t2 = r, u2 = n.__c;
  "function" == typeof u2 && (n.__c = void 0, u2()), r = t2;
}
function B(n) {
  var t2 = r;
  n.__c = n.__(), r = t2;
}
function C(n, t2) {
  return !n || n.length !== t2.length || t2.some(function(t3, r2) {
    return !o(t3, n[r2]);
  });
}
function D(n, t2) {
  return "function" == typeof t2 ? t2(n) : t2;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear = obj.delete = obj.set = function() {
      throw new Error("map is read-only");
    };
  } else if (obj instanceof Set) {
    obj.add = obj.clear = obj.delete = function() {
      throw new Error("set is read-only");
    };
  }
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;
    if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    if (mode.data === void 0) mode.data = {};
    this.data = mode.data;
    this.isMatchIgnored = false;
  }
  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}
function escapeHTML(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function inherit$1(original, ...objects) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return (
    /** @type {T} */
    result
  );
}
const SPAN_CLOSE = "</span>";
const emitsWrappingTags = (node) => {
  return !!node.scope;
};
const scopeToCSSClass = (name, { prefix }) => {
  if (name.startsWith("language:")) {
    return name.replace("language:", "language-");
  }
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...pieces.map((x, i2) => `${x}${"_".repeat(i2 + 1)}`)
    ].join(" ");
  }
  return `${prefix}${name}`;
};
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options2) {
    this.buffer = "";
    this.classPrefix = options2.classPrefix;
    parseTree.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;
    const className = scopeToCSSClass(
      node.scope,
      { prefix: this.classPrefix }
    );
    this.span(className);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;
    this.buffer += SPAN_CLOSE;
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
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}
const newNode = (opts = {}) => {
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};
class TokenTree {
  constructor() {
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }
  /** @param {string} scope */
  openNode(scope) {
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }
  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    return void 0;
  }
  closeAllNodes() {
    while (this.closeNode()) ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    return this.constructor._walk(builder, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }
  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;
    if (node.children.every((el) => typeof el === "string")) {
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options2) {
    super();
    this.options = options2;
  }
  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") {
      return;
    }
    this.add(text);
  }
  /** @param {string} scope */
  startScope(scope) {
    this.openNode(scope);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(emitter, name) {
    const node = emitter.root;
    if (name) node.scope = `language:${name}`;
    this.add(node);
  }
  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }
  finalize() {
    this.closeAllNodes();
    return true;
  }
}
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;
  return re.source;
}
function lookahead(re) {
  return concat("(?=", re, ")");
}
function anyNumberOfTimes(re) {
  return concat("(?:", re, ")*");
}
function optional(re) {
  return concat("(?:", re, ")?");
}
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];
  if (typeof opts === "object" && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}
function either(...args) {
  const opts = stripOptionsFromArgs(args);
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
  return joined;
}
function countMatchGroups(re) {
  return new RegExp(re.toString() + "|").exec("").length - 1;
}
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;
  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = "";
    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === "\\" && match[1]) {
        out += "\\" + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === "(") {
          numCaptures++;
        }
      }
    }
    return out;
  }).map((re) => `(${re})`).join(joinWith);
}
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE$2 = "[a-zA-Z]\\w*";
const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
const BINARY_NUMBER_RE = "\\b(0b[01]+)";
const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/
    );
  }
  return inherit$1({
    scope: "meta",
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m2, resp) => {
      if (m2.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};
const BACKSLASH_ESCAPE = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
};
const APOS_STRING_MODE = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: "comment",
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: "doctag",
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
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
  mode.contains.push(
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
      begin: concat(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT("//", "$");
const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
const HASH_COMMENT_MODE = COMMENT("#", "$");
const NUMBER_MODE = {
  scope: "number",
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: "number",
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: "number",
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [BACKSLASH_ESCAPE]
    }
  ]
};
const TITLE_MODE = {
  scope: "title",
  begin: IDENT_RE$2,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: "title",
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
  relevance: 0
};
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(
    mode,
    {
      /** @type {ModeCallback} */
      "on:begin": (m2, resp) => {
        resp.data._beginMatch = m2[1];
      },
      /** @type {ModeCallback} */
      "on:end": (m2, resp) => {
        if (resp.data._beginMatch !== m2[1]) resp.ignoreMatch();
      }
    }
  );
};
var MODES$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE,
  BACKSLASH_ESCAPE,
  BINARY_NUMBER_MODE,
  BINARY_NUMBER_RE,
  COMMENT,
  C_BLOCK_COMMENT_MODE,
  C_LINE_COMMENT_MODE,
  C_NUMBER_MODE,
  C_NUMBER_RE,
  END_SAME_AS_BEGIN,
  HASH_COMMENT_MODE,
  IDENT_RE: IDENT_RE$2,
  MATCH_NOTHING_RE,
  METHOD_GUARD,
  NUMBER_MODE,
  NUMBER_RE,
  PHRASAL_WORDS_MODE,
  QUOTE_STRING_MODE,
  REGEXP_MODE,
  RE_STARTERS_RE,
  SHEBANG,
  TITLE_MODE,
  UNDERSCORE_IDENT_RE,
  UNDERSCORE_TITLE_MODE
});
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}
function scopeClassName(mode, _parent) {
  if (mode.className !== void 0) {
    mode.scope = mode.className;
    delete mode.className;
  }
}
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;
  mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;
  if (mode.relevance === void 0) mode.relevance = 0;
}
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;
  mode.illegal = either(...mode.illegal);
}
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
  mode.begin = mode.match;
  delete mode.match;
}
function compileRelevance(mode, _parent) {
  if (mode.relevance === void 0) mode.relevance = 1;
}
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return;
  if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => {
    delete mode[key];
  });
  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;
  delete originalMode.beforeMatch;
};
const COMMON_KEYWORDS = [
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
];
const DEFAULT_KEYWORD_SCOPE = "keyword";
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  const compiledKeywords = /* @__PURE__ */ Object.create(null);
  if (typeof rawKeywords === "string") {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName2) {
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
      );
    });
  }
  return compiledKeywords;
  function compileList(scopeName2, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map((x) => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split("|");
      compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
    });
  }
}
function scoreForKeyword(keyword, providedScore) {
  if (providedScore) {
    return Number(providedScore);
  }
  return commonKeyword(keyword) ? 0 : 1;
}
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}
const seenDeprecations = {};
const error = (message) => {
  console.error(message);
};
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};
const deprecated = (version2, message) => {
  if (seenDeprecations[`${version2}/${message}`]) return;
  console.log(`Deprecated as of ${version2}. ${message}`);
  seenDeprecations[`${version2}/${message}`] = true;
};
const MultiClassError = new Error();
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  const emit = {};
  const positions = {};
  for (let i2 = 1; i2 <= regexes.length; i2++) {
    positions[i2 + offset] = scopeNames[i2];
    emit[i2 + offset] = true;
    offset += countMatchGroups(regexes[i2 - 1]);
  }
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return;
  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}
function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return;
  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}
function MultiClass(mode) {
  scopeSugar(mode);
  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }
  beginMultiClass(mode);
  endMultiClass(mode);
}
function compileLanguage(language) {
  function langRe(value, global) {
    return new RegExp(
      source(value),
      "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
    );
  }
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }
    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }
    compile() {
      if (this.regexes.length === 0) {
        this.exec = () => null;
      }
      const terminators = this.regexes.map((el) => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
      this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s2) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s2);
      if (!match) {
        return null;
      }
      const i2 = match.findIndex((el, i3) => i3 > 0 && el !== void 0);
      const matchData = this.matchIndexes[i2];
      match.splice(0, i2);
      return Object.assign(match, matchData);
    }
  }
  class ResumableMultiRegex {
    constructor() {
      this.rules = [];
      this.multiRegexes = [];
      this.count = 0;
      this.lastIndex = 0;
      this.regexIndex = 0;
    }
    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];
      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }
    /** @param {string} s */
    exec(s2) {
      const m2 = this.getMatcher(this.regexIndex);
      m2.lastIndex = this.lastIndex;
      let result = m2.exec(s2);
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ;
        else {
          const m22 = this.getMatcher(0);
          m22.lastIndex = this.lastIndex + 1;
          result = m22.exec(s2);
        }
      }
      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          this.considerAll();
        }
      }
      return result;
    }
  }
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();
    mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }
    return mm;
  }
  function compileMode(mode, parent) {
    const cmode = (
      /** @type CompiledMode */
      mode
    );
    if (mode.isCompiled) return cmode;
    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach((ext) => ext(mode, parent));
    language.compilerExtensions.forEach((ext) => ext(mode, parent));
    mode.__beforeBegin = null;
    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach((ext) => ext(mode, parent));
    mode.isCompiled = true;
    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;
    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }
    cmode.keywordPatternRe = langRe(keywordPattern, true);
    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || "";
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(
      /** @type {RegExp | string} */
      mode.illegal
    );
    if (!mode.contains) mode.contains = [];
    mode.contains = [].concat(...mode.contains.map(function(c2) {
      return expandOrCloneMode(c2 === "self" ? mode : c2);
    }));
    mode.contains.forEach(function(c2) {
      compileMode(
        /** @type Mode */
        c2,
        cmode
      );
    });
    if (mode.starts) {
      compileMode(mode.starts, parent);
    }
    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }
  if (!language.compilerExtensions) language.compilerExtensions = [];
  if (language.contains && language.contains.includes("self")) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }
  language.classNameAliases = inherit$1(language.classNameAliases || {});
  return compileMode(
    /** @type Mode */
    language
  );
}
function dependencyOnParent(mode) {
  if (!mode) return false;
  return mode.endsWithParent || dependencyOnParent(mode.starts);
}
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }
  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }
  return mode;
}
var version = "11.11.1";
class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}
const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;
const HLJS = function(hljs) {
  const languages = /* @__PURE__ */ Object.create(null);
  const aliases = /* @__PURE__ */ Object.create(null);
  const plugins = [];
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
  let options2 = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };
  function shouldNotHighlight(languageName) {
    return options2.noHighlightRe.test(languageName);
  }
  function blockLanguage(block) {
    let classes = block.className + " ";
    classes += block.parentNode ? block.parentNode.className : "";
    const match = options2.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : "no-highlight";
    }
    return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }
  function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }
    if (ignoreIllegals === void 0) {
      ignoreIllegals = true;
    }
    const context = {
      code,
      language: languageName
    };
    fire("before:highlight", context);
    const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
    result.code = context.code;
    fire("after:highlight", result);
    return result;
  }
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = /* @__PURE__ */ Object.create(null);
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }
    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }
      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";
      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";
          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }
    function processSubLanguage() {
      if (modeBuffer === "") return;
      let result2 = null;
      if (typeof top.subLanguage === "string") {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */
        result2._top;
      } else {
        result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }
      if (top.relevance > 0) {
        relevance += result2.relevance;
      }
      emitter.__addSublanguage(result2._emitter, result2.language);
    }
    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = "";
    }
    function emitKeyword(keyword, scope) {
      if (keyword === "") return;
      emitter.startScope(scope);
      emitter.addText(keyword);
      emitter.endScope();
    }
    function emitMultiClass(scope, match) {
      let i2 = 1;
      const max = match.length - 1;
      while (i2 <= max) {
        if (!scope._emit[i2]) {
          i2++;
          continue;
        }
        const klass = language.classNameAliases[scope[i2]] || scope[i2];
        const text = match[i2];
        if (klass) {
          emitKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i2++;
      }
    }
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        if (mode.beginScope._wrap) {
          emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);
      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }
        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        modeBuffer += lexeme[0];
        return 1;
      } else {
        resumeScanAtSamePosition = true;
        return 0;
      }
    }
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;
      const resp = new Response(newMode);
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }
      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);
      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) {
        return NO_MATCH;
      }
      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }
    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach((item) => emitter.openNode(item));
    }
    let lastMatch = {};
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];
      modeBuffer += textBeforeMatch;
      if (lexeme == null) {
        processBuffer();
        return 0;
      }
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;
      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }
      if (match.type === "illegal" && lexeme === "") {
        modeBuffer += "\n";
        return 1;
      }
      if (iterations > 1e5 && iterations > match.index * 3) {
        const err = new Error("potential infinite loop, way more iterations than matches");
        throw err;
      }
      modeBuffer += lexeme;
      return lexeme.length;
    }
    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }
    const md = compileLanguage(language);
    let result = "";
    let top = continuation || md;
    const continuations = {};
    const emitter = new options2.__emitter(options2);
    processContinuations();
    let modeBuffer = "";
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;
    try {
      if (!language.__emitTokens) {
        top.matcher.considerAll();
        for (; ; ) {
          iterations++;
          if (resumeScanAtSamePosition) {
            resumeScanAtSamePosition = false;
          } else {
            top.matcher.considerAll();
          }
          top.matcher.lastIndex = index;
          const match = top.matcher.exec(codeToHighlight);
          if (!match) break;
          const beforeMatch = codeToHighlight.substring(index, match.index);
          const processedCount = processLexeme(beforeMatch, match);
          index = match.index + processedCount;
        }
        processLexeme(codeToHighlight.substring(index));
      } else {
        language.__emitTokens(codeToHighlight, emitter);
      }
      emitter.finalize();
      result = emitter.toHTML();
      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes("Illegal")) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options2.__emitter(options2)
    };
    result._emitter.addText(code);
    return result;
  }
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options2.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);
    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
      (name) => _highlight(name, code, false)
    );
    results.unshift(plaintext);
    const sorted = results.sort((a2, b2) => {
      if (a2.relevance !== b2.relevance) return b2.relevance - a2.relevance;
      if (a2.language && b2.language) {
        if (getLanguage(a2.language).supersetOf === b2.language) {
          return 1;
        } else if (getLanguage(b2.language).supersetOf === a2.language) {
          return -1;
        }
      }
      return 0;
    });
    const [best, secondBest] = sorted;
    const result = best;
    result.secondBest = secondBest;
    return result;
  }
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang && aliases[currentLang] || resultLang;
    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }
  function highlightElement(element) {
    let node = null;
    const language = blockLanguage(element);
    if (shouldNotHighlight(language)) return;
    fire(
      "before:highlightElement",
      { el: element, language }
    );
    if (element.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
      return;
    }
    if (element.children.length > 0) {
      if (!options2.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options2.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }
    node = element;
    const text = node.textContent;
    const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
    element.innerHTML = result.value;
    element.dataset.highlighted = "yes";
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }
    fire("after:highlightElement", { el: element, result, text });
  }
  function configure(userOptions) {
    options2 = inherit(options2, userOptions);
  }
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let wantsHighlight = false;
  function highlightAll() {
    function boot() {
      highlightAll();
    }
    if (document.readyState === "loading") {
      if (!wantsHighlight) {
        window.addEventListener("DOMContentLoaded", boot, false);
      }
      wantsHighlight = true;
      return;
    }
    const blocks = document.querySelectorAll(options2.cssSelector);
    blocks.forEach(highlightElement);
  }
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      if (!SAFE_MODE) {
        throw error$1;
      } else {
        error(error$1);
      }
      lang = PLAINTEXT_LANGUAGE;
    }
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);
    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }
  function listLanguages() {
    return Object.keys(languages);
  }
  function getLanguage(name) {
    name = (name || "").toLowerCase();
    return languages[name] || languages[aliases[name]];
  }
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === "string") {
      aliasList = [aliasList];
    }
    aliasList.forEach((alias) => {
      aliases[alias.toLowerCase()] = languageName;
    });
  }
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }
  function upgradePluginAPI(plugin) {
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }
  function removePlugin(plugin) {
    const index = plugins.indexOf(plugin);
    if (index !== -1) {
      plugins.splice(index, 1);
    }
  }
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");
    return highlightElement(el);
  }
  Object.assign(hljs, {
    highlight: highlight2,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin,
    removePlugin
  });
  hljs.debugMode = function() {
    SAFE_MODE = false;
  };
  hljs.safeMode = function() {
    SAFE_MODE = true;
  };
  hljs.versionString = version;
  hljs.regex = {
    concat,
    lookahead,
    either,
    optional,
    anyNumberOfTimes
  };
  for (const key in MODES$1) {
    if (typeof MODES$1[key] === "object") {
      deepFreeze(MODES$1[key]);
    }
  }
  Object.assign(hljs, MODES$1);
  return hljs;
};
const highlight = HLJS({});
highlight.newInstance = () => HLJS({});
var core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(core);
const MODES = (hljs) => {
  return {
    IMPORTANT: {
      scope: "meta",
      begin: "!important"
    },
    BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
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
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    },
    CSS_NUMBER_MODE: {
      scope: "number",
      begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    CSS_VARIABLE: {
      className: "attr",
      begin: /--[A-Za-z_][A-Za-z0-9_-]*/
    }
  };
};
const HTML_TAGS = [
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
];
const SVG_TAGS = [
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
];
const TAGS = [
  ...HTML_TAGS,
  ...SVG_TAGS
];
const MEDIA_FEATURES = [
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
].sort().reverse();
const PSEUDO_CLASSES = [
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
].sort().reverse();
const PSEUDO_ELEMENTS = [
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
].sort().reverse();
const ATTRIBUTES = [
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
function css(hljs) {
  const regex = hljs.regex;
  const modes = MODES(hljs);
  const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/;
  const IDENT_RE2 = "[a-zA-Z-][a-zA-Z0-9_-]*";
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      modes.BLOCK_COMMENT,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      modes.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + IDENT_RE2,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
          { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      modes.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          modes.BLOCK_COMMENT,
          modes.HEXCOLOR,
          modes.IMPORTANT,
          modes.CSS_NUMBER_MODE,
          ...STRINGS,
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
              ...STRINGS,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          modes.FUNCTION_DISPATCH
        ]
      },
      {
        begin: regex.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              modes.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + TAGS.join("|") + ")\\b"
      }
    ]
  };
}
const IDENT_RE$1 = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS$1 = [
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
];
const LITERALS$1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES$1 = [
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
];
const ERROR_TYPES$1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS$1 = [
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
];
const BUILT_IN_VARIABLES$1 = [
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
];
const BUILT_INS$1 = [].concat(
  BUILT_IN_GLOBALS$1,
  TYPES$1,
  ERROR_TYPES$1
);
function javascript$1(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$1$1 = IDENT_RE$1;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m2;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m2 = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m2 = afterMatch.match(/^\s+extends\s+/)) {
        if (m2.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1$1 = {
    $pattern: IDENT_RE$1,
    keyword: KEYWORDS$1,
    literal: LITERALS$1,
    built_in: BUILT_INS$1,
    "variable.language": BUILT_IN_VARIABLES$1
  };
  const decimalDigits2 = "[0-9](_?[0-9])*";
  const frac2 = `\\.(${decimalDigits2})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac2})|\\.)?|(${frac2}))[eE][+-]?(${decimalDigits2})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac2})\\b|\\.)?|(${frac2})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1$1,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
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
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$1$1 + "(?=\\s*(-)|$)",
              endsParent: true,
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
  );
  const COMMENT2 = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$1$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1$1, "(", regex.concat(/\./, IDENT_RE$1$1), ")*")
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
          IDENT_RE$1$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
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
        ...TYPES$1,
        ...ERROR_TYPES$1
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1$1,
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
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS$1,
        "super",
        "import"
      ].map((x) => `${x}\\s*\\(`)),
      IDENT_RE$1$1,
      regex.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1$1,
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
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT2,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        scope: "attr",
        match: IDENT_RE$1$1 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT2,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1$1,
                    contains: PARAMS_CONTAINS
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
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$1$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var decimalDigits = "[0-9](_*[0-9])*";
var frac = `\\.(${decimalDigits})`;
var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
var NUMERIC = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${frac})[fFdD]?\\b` },
    { begin: `\\b(${decimalDigits})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function recurRegex(re, substitution, depth) {
  if (depth === -1) return "";
  return re.replace(substitution, (_2) => {
    return recurRegex(re, substitution, depth - 1);
  });
}
function java(hljs) {
  const regex = hljs.regex;
  const JAVA_IDENT_RE = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*";
  const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
  const MAIN_KEYWORDS = [
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
  ];
  const BUILT_INS2 = [
    "super",
    "this"
  ];
  const LITERALS2 = [
    "false",
    "true",
    "null"
  ];
  const TYPES2 = [
    "char",
    "boolean",
    "long",
    "float",
    "int",
    "byte",
    "short",
    "double"
  ];
  const KEYWORDS2 = {
    keyword: MAIN_KEYWORDS,
    literal: LITERALS2,
    type: TYPES2,
    built_in: BUILT_INS2
  };
  const ANNOTATION = {
    className: "meta",
    begin: "@" + JAVA_IDENT_RE,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  };
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: KEYWORDS2,
    relevance: 0,
    contains: [hljs.C_BLOCK_COMMENT_MODE],
    endsParent: true
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: KEYWORDS2,
    illegal: /<\/|#/,
    contains: [
      hljs.COMMENT(
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
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          JAVA_IDENT_RE
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
          regex.concat(/(?!else)/, JAVA_IDENT_RE),
          /\s+/,
          JAVA_IDENT_RE,
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
          JAVA_IDENT_RE
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          PARAMS,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
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
          "(?:" + GENERIC_IDENT_RE + "\\s+)",
          hljs.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: KEYWORDS2,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS2,
            relevance: 0,
            contains: [
              ANNOTATION,
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              NUMERIC,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      NUMERIC,
      ANNOTATION
    ]
  };
}
function json(hljs) {
  const ATTRIBUTE = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  };
  const PUNCTUATION = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  };
  const LITERALS2 = [
    "true",
    "false",
    "null"
  ];
  const LITERALS_MODE = {
    scope: "literal",
    beginKeywords: LITERALS2.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: LITERALS2
    },
    contains: [
      ATTRIBUTE,
      PUNCTUATION,
      hljs.QUOTE_STRING_MODE,
      LITERALS_MODE,
      hljs.C_NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
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
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES = [
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
];
const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS = [
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
];
const BUILT_IN_VARIABLES = [
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
];
const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);
function javascript(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$12 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m2;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m2 = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m2 = afterMatch.match(/^\s+extends\s+/)) {
        if (m2.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits2 = "[0-9](_?[0-9])*";
  const frac2 = `\\.(${decimalDigits2})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac2})|\\.)?|(${frac2}))[eE][+-]?(${decimalDigits2})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac2})\\b|\\.)?|(${frac2})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$12,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
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
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$12 + "(?=\\s*(-)|$)",
              endsParent: true,
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
  );
  const COMMENT2 = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$12,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$12,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$12,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$12, "(", regex.concat(/\./, IDENT_RE$12), ")*")
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
          IDENT_RE$12
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
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
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$12,
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
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ].map((x) => `${x}\\s*\\(`)),
      IDENT_RE$12,
      regex.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$12, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$12,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$12,
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
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$12,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$12,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT2,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        scope: "attr",
        match: IDENT_RE$12 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT2,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$12,
                    contains: PARAMS_CONTAINS
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
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$12,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function typescript(hljs) {
  const regex = hljs.regex;
  const tsLanguage = javascript(hljs);
  const IDENT_RE$12 = IDENT_RE;
  const TYPES2 = [
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
  ];
  const NAMESPACE = {
    begin: [
      /namespace/,
      /\s+/,
      hljs.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  };
  const INTERFACE = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: true,
    keywords: {
      keyword: "interface extends",
      built_in: TYPES2
    },
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const USE_STRICT = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TS_SPECIFIC_KEYWORDS = [
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
  ];
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
    literal: LITERALS,
    built_in: BUILT_INS.concat(TYPES2),
    "variable.language": BUILT_IN_VARIABLES
  };
  const DECORATOR = {
    className: "meta",
    begin: "@" + IDENT_RE$12
  };
  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex((m2) => m2.label === label);
    if (indx === -1) {
      throw new Error("can not find mode to replace");
    }
    mode.contains.splice(indx, 1, replacement);
  };
  Object.assign(tsLanguage.keywords, KEYWORDS$12);
  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c2) => c2.scope === "attr");
  const OPTIONAL_KEY_OR_ARGUMENT = Object.assign(
    {},
    ATTRIBUTE_HIGHLIGHT,
    { match: regex.concat(IDENT_RE$12, regex.lookahead(/\s*\?:/)) }
  );
  tsLanguage.exports.PARAMS_CONTAINS.push([
    tsLanguage.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    ATTRIBUTE_HIGHLIGHT,
    // highlight the params key
    OPTIONAL_KEY_OR_ARGUMENT
    // Added for optional property assignment highlighting
  ]);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE,
    OPTIONAL_KEY_OR_ARGUMENT
    // Added for optional property assignment highlighting
  ]);
  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
  swapMode(tsLanguage, "use_strict", USE_STRICT);
  const functionDeclaration = tsLanguage.contains.find((m2) => m2.label === "func.def");
  functionDeclaration.relevance = 0;
  Object.assign(tsLanguage, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  });
  return tsLanguage;
}
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
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
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
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
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
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
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
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
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
const ValueIsPhoneNumber = ValueIsTextline;
HighlightJS.registerLanguage("css", css);
HighlightJS.registerLanguage("javascript", javascript$1);
HighlightJS.registerLanguage("java", java);
HighlightJS.registerLanguage("json", json);
HighlightJS.registerLanguage("typescript", typescript);
HighlightJS.registerLanguage("html", xml);
HighlightJS.registerLanguage("xml", xml);
const AssetsBase = "/";
const IconFolder = AssetsBase + "icons/";
const SIM_empty = { Placeholder: "(empty)", disabled: false };
const SIM_noSelection = { Placeholder: "(no Selection)", disabled: true };
const SIM_multipleValues = { Placeholder: "(multiple Values)", disabled: false };
function ValueIsSpecial(Value) {
  return Value === SIM_empty || Value === SIM_noSelection || Value === SIM_multipleValues;
}
function throwError(Message) {
  debugger;
  let Match = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(Message);
  if (Match == null) {
    throw new Error(Message);
  } else {
    let namedError = new Error(Match[2]);
    namedError.name = Match[1];
    throw namedError;
  }
}
function throwReadOnlyError(Name) {
  throwError(
    "ReadOnlyProperty: property " + quoted(Name) + " must not be set"
  );
}
const SIM_NamePattern = /^[-._\p{L}\d](?:[-._ \p{L}\d]*[-._\p{L}\d])?$/u;
function ValueIsName(Value) {
  return ValueIsStringMatching(Value, SIM_NamePattern);
}
const allowName = ValidatorForClassifier(
  ValueIsName,
  acceptNil,
  "SIM name"
), allowedName = allowName;
const expectName = ValidatorForClassifier(
  ValueIsName,
  rejectNil,
  "SIM name"
), expectedName = expectName;
const SIM_PathPattern = /^[-._\p{L}](?:[-._ \p{L}]*[-._\p{L}])?(?:\/[-._\p{L}](?:[-._ \p{L}]*[-._\p{L}])?)*$/u;
function ValueIsPath(Value) {
  return ValueIsStringMatching(Value, SIM_PathPattern);
}
const allowPath = ValidatorForClassifier(
  ValueIsPath,
  acceptNil,
  "SIM name path"
), allowedPath = allowPath;
const expectPath = ValidatorForClassifier(
  ValueIsPath,
  rejectNil,
  "SIM name path"
), expectedPath = expectPath;
function ValueIsLocation(Value) {
  return ValueIsFiniteNumber(Value);
}
const allowLocation = ValidatorForClassifier(
  ValueIsLocation,
  acceptNil,
  "SIM coordinate"
), allowedLocation = allowLocation;
const expectLocation = ValidatorForClassifier(
  ValueIsLocation,
  rejectNil,
  "SIM coordinate"
), expectedLocation = expectLocation;
function ValueIsDimension(Value) {
  return ValueIsFiniteNumber(Value) && Value >= 0;
}
const allowDimension = ValidatorForClassifier(
  ValueIsDimension,
  acceptNil,
  "SIM dimension"
), allowedDimension = allowDimension;
const expectDimension = ValidatorForClassifier(
  ValueIsDimension,
  rejectNil,
  "SIM dimension"
), expectedDimension = expectDimension;
function ValueIsPosition(Value) {
  return ValueIsPlainObject(Value) && (ValueIsLocation(Value.x) && ValueIsLocation(Value.y));
}
const allowPosition = ValidatorForClassifier(
  ValueIsPosition,
  acceptNil,
  "SIM position"
), allowedPosition = allowPosition;
const expectPosition = ValidatorForClassifier(
  ValueIsPosition,
  rejectNil,
  "SIM position"
), expectedPosition = expectPosition;
function ValueIsSize(Value) {
  return ValueIsPlainObject(Value) && (ValueIsDimension(Value.Width) && ValueIsDimension(Value.Height));
}
const allowSize = ValidatorForClassifier(
  ValueIsSize,
  acceptNil,
  "SIM size"
), allowedSize = allowSize;
const expectSize = ValidatorForClassifier(
  ValueIsSize,
  rejectNil,
  "SIM size"
), expectedSize = expectSize;
function ValueIsGeometry(Value) {
  return ValueIsPlainObject(Value) && (ValueIsLocation(Value.x) && ValueIsDimension(Value.Width) && ValueIsLocation(Value.y) && ValueIsDimension(Value.Height));
}
const allowGeometry = ValidatorForClassifier(
  ValueIsGeometry,
  acceptNil,
  "SIM geometry"
), allowedGeometry = allowGeometry;
const expectGeometry = ValidatorForClassifier(
  ValueIsGeometry,
  rejectNil,
  "SIM geometry"
), expectedGeometry = expectGeometry;
const MIMEPattern = /^[a-z0-9]+([._+-][a-z0-9]+)*\/[a-z0-9]+([._+-][a-z0-9]+)*(\s*;\s*[a-z0-9-]+=[a-z0-9.+-]+)*$/i;
function ValueIsMIMEType(Value) {
  return ValueIsStringMatching(Value, MIMEPattern);
}
const SIM_supportedTextFormats = [
  "application/javascript",
  "application/typescript",
  "application/json",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function ValueIsTextFormat(Value) {
  return ValueIsOneOf(Value, SIM_supportedTextFormats);
}
const SIM_supportedHTMLFormats = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/html",
  "text/markdown",
  "text/plain"
];
function ValueIsHTMLFormat(Value) {
  return ValueIsOneOf(Value, SIM_supportedHTMLFormats);
}
const SIM_supportedMarkdownFormats = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/markdown",
  "text/plain"
];
function ValueIsMarkdownFormat(Value) {
  return ValueIsOneOf(Value, SIM_supportedMarkdownFormats);
}
const SIM_supportedImageFormats = [
  "image/apng",
  "image/avif",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
function ValueIsImageFormat(Value) {
  return ValueIsOneOf(Value, SIM_supportedImageFormats);
}
const SIM_IdentifierPattern = /^[a-z$_][a-z$_0-9]*$/i;
function ValueIsIdentifier(Value) {
  return ValueIsStringMatching(Value, SIM_IdentifierPattern);
}
const allowIdentifier = ValidatorForClassifier(
  ValueIsIdentifier,
  acceptNil,
  "SIM identifier"
), allowedIdentifier = allowIdentifier;
const expectIdentifier = ValidatorForClassifier(
  ValueIsIdentifier,
  rejectNil,
  "SIM identifier"
), expectedIdentifier = expectIdentifier;
function ValueIsIndexPath(Value) {
  return ValueIsListSatisfying(Value, ValueIsOrdinal);
}
function parsedPropSet(PropSet, ...ParserList) {
  expectPlainObject("PropSet", PropSet);
  ParserList.forEach((Parser, Index) => {
    if (!ValueIsFunction(Parser)) throwError(
      `InvalidArgument: PropSet parser argument #${Index + 1} is not a function`
    );
  });
  const Result = [];
  const normalizedPropSet = {};
  Array.from(Object.keys(PropSet)).forEach((Key) => {
    let normalizedKey = Key.replace(/[-_]/g, "").trim().toLowerCase();
    normalizedPropSet[normalizedKey] = PropSet[Key];
  });
  const ContentList = normalizedPropSet.children;
  delete normalizedPropSet.children;
  delete normalizedPropSet["aim:rendercount"];
  ParserList.forEach(
    (Parser) => Result.push(Parser(normalizedPropSet))
  );
  Result.push(normalizedPropSet, ContentList);
  return Result;
}
function parsedProp(PropSet, Parser) {
  expectPlainObject("PropSet", PropSet);
  expectFunction("PropSet parser", Parser);
  const normalizedPropSet = {};
  Array.from(Object.keys(PropSet)).forEach((Key) => {
    let normalizedKey = Key.replace(/[-_]/g, "").trim().toLowerCase();
    normalizedPropSet[normalizedKey] = PropSet[Key];
  });
  delete normalizedPropSet.children;
  return Parser(normalizedPropSet);
}
function optionalAttribute(PropSet, PropName, Validator, PropSetName) {
  expectPlainObject("PropSet", PropSet);
  expectFunction("validator function", Validator);
  allowTextline("PropSet name", PropSetName);
  const Value = PropSet[PropName];
  if (Value == null) {
    return void 0;
  }
  if (Validator(Value) == true) {
    delete PropSet[PropName];
    return Value;
  } else {
    throwError(
      (PropSetName == null ? "" : PropSetName + " ") + "attribute " + quoted(PropName) + " is invalid"
    );
  }
}
function mandatoryAttribute(PropSet, PropName, Validator, PropSetName) {
  expectPlainObject("PropSet", PropSet);
  expectFunction("validator function", Validator);
  allowTextline("PropSet name", PropSetName);
  const Value = PropSet[PropName];
  if (Value == null) throwError(
    "attribute " + quoted(PropName) + " is missing"
  );
  if (Validator(Value) == true) {
    delete PropSet[PropName];
    return Value;
  } else {
    throwError(
      (PropSetName == null ? "" : PropSetName + " ") + "attribute " + quoted(PropName) + " is invalid"
    );
  }
}
function optionalValue(PropName, Validator) {
  return (PropSet) => optionalAttribute(PropSet, PropName, Validator);
}
function mandatoryValue(PropName, Validator) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, Validator);
}
function optionalBoolean(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsBoolean);
}
function mandatoryBoolean(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsBoolean);
}
function optionalNumber(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsNumber);
}
function mandatoryNumber(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsNumber);
}
function optionalNumberInRange(PropName, Minimum, Maximum, withMinimum, withMaximum) {
  return (PropSet) => optionalAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsNumberInRange(Value, Minimum, Maximum, withMinimum, withMaximum)
  );
}
function mandatoryNumberInRange(PropName, Minimum, Maximum, withMinimum, withMaximum) {
  return (PropSet) => mandatoryAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsNumberInRange(Value, Minimum, Maximum, withMinimum, withMaximum)
  );
}
function optionalInteger(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsInteger);
}
function mandatoryInteger(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsInteger);
}
function optionalIntegerInRange(PropName, Minimum, Maximum) {
  return (PropSet) => optionalAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsIntegerInRange(Value, Minimum, Maximum)
  );
}
function mandatoryIntegerInRange(PropName, Minimum, Maximum) {
  return (PropSet) => mandatoryAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsIntegerInRange(Value, Minimum, Maximum)
  );
}
function optionalOrdinal(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsOrdinal);
}
function mandatoryOrdinal(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsOrdinal);
}
function optionalCardinal(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsCardinal);
}
function mandatoryCardinal(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsCardinal);
}
function optionalString(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsString);
}
function mandatoryString(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsString);
}
function optionalStringMatching(PropName, Pattern) {
  return (PropSet) => optionalAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsStringMatching(Value, Pattern)
  );
}
function mandatoryStringMatching(PropName, Pattern) {
  return (PropSet) => mandatoryAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsStringMatching(Value, Pattern)
  );
}
function optionalText(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsText);
}
function mandatoryText(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsText);
}
function optionalTextline(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsTextline);
}
function mandatoryTextline(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsTextline);
}
function optionalFunction(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsFunction);
}
function mandatoryFunction(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsFunction);
}
function optionalColor(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsColor);
}
function mandatoryColor(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsColor);
}
function optionalEMailAddress(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsEMailAddress);
}
function mandatoryEMailAddress(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsEMailAddress);
}
function optionalPhoneNumber(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsPhoneNumber);
}
function mandatoryPhoneNumber(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsPhoneNumber);
}
function optionalURL(PropName) {
  return (PropSet) => optionalAttribute(PropSet, PropName, ValueIsURL);
}
function mandatoryURL(PropName) {
  return (PropSet) => mandatoryAttribute(PropSet, PropName, ValueIsURL);
}
function optionalPath(PropName) {
  return (PropSet) => optionalAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsPath(Value)
  );
}
function mandatoryPath(PropName) {
  return (PropSet) => mandatoryAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsPath(Value)
  );
}
function optionalNameOrIndex(PropName) {
  return (PropSet) => optionalAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsName(Value) || ValueIsOrdinal(Value)
  );
}
function mandatoryNameOrIndex(PropName) {
  return (PropSet) => mandatoryAttribute(
    PropSet,
    PropName,
    (Value) => ValueIsName(Value) || ValueIsOrdinal(Value)
  );
}
function useOnlineStatus() {
  const [isOnline, setIsOnline] = y(navigator.onLine);
  _(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}
function useWindowSize() {
  const [Size, setSize] = y({
    Width: window.innerWidth,
    Height: window.innerHeight
  });
  _(() => {
    const handleResize = () => setSize({
      Width: window.innerWidth,
      Height: window.innerHeight
    });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return Size;
}
function useRerenderer() {
  const [State, setState] = y({});
  function rerender() {
    setState({});
  }
  return rerender;
}
function useConfiguration(initialConfiguration = {}) {
  allowPlainObject("initial configuration", initialConfiguration);
  const ConfigurationRef = F();
  if (ConfigurationRef.current == null) {
    ConfigurationRef.current = deepCopyOf(initialConfiguration);
  }
  const configure = b((ChangeSet) => {
    allowPlainObject("configuration change set", ChangeSet);
    if (ChangeSet == null) {
      return;
    }
    for (const [Key, Value] of Object.entries(ChangeSet)) {
      if (Value === void 0) {
        delete ChangeSet[Key];
      } else {
        if (ValueIsPlainObject(Value)) {
          if (ValueIsPlainObject(ConfigurationRef.current[Key])) {
            Object.assign(ConfigurationRef.current[Key], Value);
          } else {
            ConfigurationRef.current[Key] = { ...Value };
          }
        } else {
          throwError(
            "InvalidArgument: configuration[" + quoted(Key) + "] is no plain JavaScript onject"
          );
        }
      }
    }
  }, [initialConfiguration]);
  return [ConfigurationRef.current, configure];
}
function useDragging({
  ViewRef,
  Container,
  onlyFrom,
  neverFrom,
  onDragStart,
  onDragContinuation,
  onDragFinish,
  onDragCancellation
}) {
  expectValue("preact component reference", ViewRef);
  if (Container != null && !ValueIsTextline(Container) && !(Container instanceof HTMLElement) && !ValueIsFunction(Container)) throwError(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  );
  if (onlyFrom != null && !ValueIsTextline(onlyFrom) && !(onlyFrom instanceof HTMLElement)) throwError(
    'InvalidArgument: "onlyFrom" is neither a CSS selector nor an HTML element'
  );
  if (neverFrom != null && !ValueIsTextline(neverFrom) && !(neverFrom instanceof HTMLElement)) throwError(
    'InvalidArgument: "neverFrom" is neither a CSS selector nor an HTML element'
  );
  allowFunction('"onDragStart" callback', onDragStart);
  allowFunction('"onDragContinuation" callback', onDragContinuation);
  allowFunction('"onDragFinish" callback', onDragFinish);
  allowFunction('"onDragCancellation" callback', onDragCancellation);
  const RecognizerMayDrag = onDragStart != null && onDragContinuation != null && onDragFinish != null && onDragCancellation != null;
  let ContainerElement;
  const StartPosition = F();
  const isDragging = F(false);
  const onPointerDown = (Event) => {
    if (ViewRef.current == null || !(Event.target instanceof HTMLElement)) {
      return;
    }
    if (Event.pointerType === "mouse" && Event.buttons !== 1) {
      return;
    }
    if (Event.pointerType === "touch" && !Event.isPrimary) {
      return;
    }
    if (Event.pointerType === "pen" && Event.buttons !== 1) {
      return;
    }
    if (!RecognizerMayDrag) {
      return;
    }
    switch (true) {
      case Container == null:
        ContainerElement = ViewRef.current.parentElement;
        break;
      case ValueIsTextline(Container):
        ContainerElement = ViewRef.current.parentElement.closest(Container);
        break;
      case ValueIsFunction(Container):
        ContainerElement = Container();
        if (!(ContainerElement instanceof HTMLElement)) {
          ContainerElement = void 0;
        }
        break;
      default:
        ContainerElement = Container;
    }
    if (ContainerElement == null) {
      return;
    }
    if (onlyFrom != null && !matchesSelector(Event.target, onlyFrom)) {
      return;
    }
    if (neverFrom != null && matchesSelector(Event.target, neverFrom)) {
      return;
    }
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);
    ViewRef.current.setPointerCapture?.(Event.pointerId);
    const ContainerBox = ContainerElement.getBoundingClientRect();
    const StartX = Event.clientX - ContainerBox.left + ContainerElement.scrollLeft;
    const StartY = Event.clientY - ContainerBox.top + ContainerElement.scrollTop;
    StartPosition.current = { x: StartX, y: StartY };
    isDragging.current = true;
    onDragStart?.(0, 0, StartX, StartY, Event);
  };
  const onPointerMove = (Event) => {
    if (isDragging.current === false) {
      return;
    }
    if (ContainerElement == null) {
      return;
    }
    onDragContinuation?.apply(null, CallbackArguments(ContainerElement, Event));
  };
  const finishDragging = (Event, cancelled) => {
    if (isDragging.current === false) {
      return;
    }
    isDragging.current = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerCancel);
    if (cancelled) {
      onDragContinuation?.(0, 0, StartPosition.current.x, StartPosition.current.y, Event);
      return;
    }
    if (ContainerElement != null && RecognizerMayDrag) {
      onDragFinish?.apply(null, CallbackArguments(ContainerElement, Event));
    }
  };
  const onPointerUp = (Event) => {
    finishDragging(Event, false);
  };
  const onPointerCancel = (Event) => {
    finishDragging(Event, true);
  };
  const CallbackArguments = (Container2, Event) => {
    const ContainerBox = Container2.getBoundingClientRect();
    const x = Event.clientX - ContainerBox.left + Container2.scrollLeft;
    const y2 = Event.clientY - ContainerBox.top + Container2.scrollTop;
    const dx = x - StartPosition.current.x;
    const dy = y2 - StartPosition.current.y;
    return [dx, dy, x, y2, Event];
  };
  function matchesSelector(Element, Selector) {
    switch (true) {
      case Selector == null:
        return true;
      case typeof Selector === "string":
        return Element.matches(Selector);
      default:
        return Element === Selector;
    }
  }
  return onPointerDown;
}
function useClickDragging({
  ViewRef,
  Container,
  onlyFrom,
  neverFrom,
  ClickRadius,
  MultiClickLimit,
  MultiClickTimeSpan,
  onClick,
  onDragStart,
  onDragContinuation,
  onDragFinish,
  onDragCancellation
}) {
  expectValue("preact component reference", ViewRef);
  if (Container != null && !ValueIsTextline(Container) && !(Container instanceof HTMLElement) && !ValueIsFunction(Container)) throwError(
    'InvalidArgument: "Container" is neither a CSS selector nor an HTML element or a function'
  );
  if (onlyFrom != null && !ValueIsTextline(onlyFrom) && !(onlyFrom instanceof HTMLElement)) throwError(
    'InvalidArgument: "onlyFrom" is neither a CSS selector nor an HTML element'
  );
  if (neverFrom != null && !ValueIsTextline(neverFrom) && !(neverFrom instanceof HTMLElement)) throwError(
    'InvalidArgument: "neverFrom" is neither a CSS selector nor an HTML element'
  );
  allowOrdinal("click radius", ClickRadius);
  allowOrdinal("multi-click limit", MultiClickLimit);
  allowOrdinal("multi-click timespan", MultiClickTimeSpan);
  allowFunction('"onClick" callback', onClick);
  allowFunction('"onDragStart" callback', onDragStart);
  allowFunction('"onDragContinuation" callback', onDragContinuation);
  allowFunction('"onDragFinish" callback', onDragFinish);
  allowFunction('"onDragCancellation" callback', onDragCancellation);
  if (ClickRadius == null) {
    ClickRadius = 4;
  }
  if (MultiClickTimeSpan == null) {
    MultiClickTimeSpan = 300;
  }
  if (MultiClickLimit == null) {
    MultiClickLimit = onClick == null ? 0 : 1;
  }
  const RecognizerMayClick = MultiClickLimit > 0 && onClick != null;
  const RecognizerMayDrag = onDragStart != null && onDragContinuation != null && onDragFinish != null;
  let ContainerElement;
  const StartPosition = F();
  const isDragging = F(false);
  const lastClick = F({ Count: 0, Time: 0 });
  const onPointerDown = (Event) => {
    if (ViewRef.current == null || !(Event.target instanceof HTMLElement)) {
      return;
    }
    if (!RecognizerMayClick && !RecognizerMayDrag) {
      return;
    }
    switch (true) {
      case Container == null:
        ContainerElement = ViewRef.current.parentElement;
        break;
      case ValueIsTextline(Container):
        ContainerElement = ViewRef.current.parentElement.closest(Container);
        break;
      case ValueIsFunction(Container):
        ContainerElement = Container();
        if (!(ContainerElement instanceof HTMLElement)) {
          ContainerElement = void 0;
        }
        break;
      default:
        ContainerElement = Container;
    }
    if (ContainerElement == null) {
      return;
    }
    if (onlyFrom != null && !matchesSelector(Event.target, onlyFrom)) {
      return;
    }
    if (neverFrom != null && matchesSelector(Event.target, neverFrom)) {
      return;
    }
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerCancel);
    ViewRef.current.setPointerCapture?.(Event.pointerId);
    const ContainerBox = ContainerElement.getBoundingClientRect();
    const StartX = Event.clientX - ContainerBox.left + ContainerElement.scrollLeft;
    const StartY = Event.clientY - ContainerBox.top + ContainerElement.scrollTop;
    StartPosition.current = { x: StartX, y: StartY };
    if (RecognizerMayClick) {
      isDragging.current = false;
    } else {
      isDragging.current = RecognizerMayDrag;
      if (RecognizerMayDrag && ClickRadius === 0) {
        onDragStart?.(0, 0, StartX, StartY, Event);
      }
    }
  };
  const onPointerMove = (Event) => {
    if (!RecognizerMayDrag) {
      return;
    }
    if (ContainerElement == null) {
      return;
    }
    const [dx, dy, x, y2] = CallbackArguments(ContainerElement, Event);
    if (isDragging.current === false) {
      if (dx * dx + dy * dy < ClickRadius * ClickRadius) {
        return;
      } else {
        isDragging.current = true;
        onDragStart?.(dx, dy, x, y2, Event);
      }
    }
    onDragContinuation?.apply(null, [dx, dy, x, y2, Event]);
  };
  const finishDragging = (Event, cancelled) => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerCancel);
    if (isDragging.current) {
      isDragging.current = false;
      if (RecognizerMayDrag && cancelled) {
        onDragContinuation?.(0, 0, StartPosition.current.x, StartPosition.current.y, Event);
        return;
      }
      if (ContainerElement != null && RecognizerMayDrag) {
        onDragFinish?.apply(null, CallbackArguments(ContainerElement, Event));
      }
    }
  };
  const onPointerUp = (Event) => {
    if (isDragging.current === false) {
      if (RecognizerMayClick) {
        let { ClickCount, Time } = lastClick.current;
        const now = Date.now();
        ClickCount = now - Time > MultiClickTimeSpan ? 1 : Math.min(ClickCount + 1, MultiClickLimit);
        lastClick.current = { ClickCount, Time: now };
        if (ContainerElement != null) {
          const [dx, dy, x, y2] = CallbackArguments(ContainerElement, Event);
          onClick?.apply(null, [ClickCount, dx, dy, x, y2, Event]);
        }
      }
    }
    finishDragging(Event, false);
  };
  const onPointerCancel = (Event) => {
    if (isDragging.current === true) {
      finishDragging(Event, true);
    }
  };
  const CallbackArguments = (Container2, Event) => {
    const ContainerBox = Container2.getBoundingClientRect();
    const x = Event.clientX - ContainerBox.left + Container2.scrollLeft;
    const y2 = Event.clientY - ContainerBox.top + Container2.scrollTop;
    const dx = x - StartPosition.current.x;
    const dy = y2 - StartPosition.current.y;
    return [dx, dy, x, y2, Event];
  };
  function matchesSelector(Element, Selector) {
    switch (true) {
      case Selector == null:
        return true;
      case typeof Selector === "string":
        return Element.matches(Selector);
      default:
        return Element === Selector;
    }
  }
  return onPointerDown;
}
function OperationWasConfirmed(Message) {
  let ConfirmationCode = Math.round(Math.random() * 1e4).toString();
  ConfirmationCode += "0000".slice(ConfirmationCode.length);
  Message = (Message || "This operation can not be undone.") + "\n\nPlease, enter the following number if you want to proceed:\n\n   " + ConfirmationCode + "\n\nOtherwise, the operation will be cancelled";
  let UserInput = window.prompt(Message, "");
  if (UserInput === ConfirmationCode) {
    return true;
  } else {
    window.alert("Operation will be cancelled");
    return false;
  }
}
function normalizedName(Name) {
  expectName("name", Name);
  return _normalizedName(Name);
}
function _normalizedName(Name) {
  return Name.trim().replace(/\s+/g, " ").replace(/[.]+/g, ".").replace(/[-]+/g, "-").replace(/[_]+/g, "_").toLowerCase();
}
function normalizedPath(Path) {
  expectPath("path", Path);
  return _normalizedPath(Path);
}
function _normalizedPath(Path) {
  return Path.trim().replace(/\s*(\/+\s*)+/g, "/").replace(/\s+/g, " ").replace(/[.]+/g, ".").replace(/[-]+/g, "-").replace(/[_]+/g, "_").toLowerCase();
}
let StyleElement = document.getElementById("SIM-Components-Stylesheet");
if (StyleElement == null) {
  StyleElement = document.createElement("style");
  StyleElement.id = "SIM-Components-Stylesheet";
  StyleElement.textContent = `
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


    `.trim();
  document.head.prepend(StyleElement);
}
function installStylesheetFor(Name, Stylesheet, overwrite = false) {
  expectPath("stylesheet name", Name);
  expectText("stylesheet", Stylesheet);
  expectBoolean("mode flag", overwrite);
  const StylesheetId = "Stylesheet-for-" + _normalizedName(Name);
  let StyleElement2 = document.head.querySelector('style[id="' + StylesheetId + '"]');
  if (StyleElement2 == null) {
    StyleElement2 = document.createElement("style");
    StyleElement2.id = StylesheetId;
    StyleElement2.textContent = Stylesheet;
    document.head.append(StyleElement2);
  } else {
    if (overwrite) {
      StyleElement2.textContent = Stylesheet;
    } else {
      console.warn('multiple definitions for stylesheet "' + Name + '"');
    }
  }
}
function uninstallStylesheetFor(Name) {
  expectPath("stylesheet name", Name);
  const StylesheetId = "Stylesheet-for-" + _normalizedName(Name);
  let StyleElement2 = document.head.querySelector('style[id="' + StylesheetId + '"]');
  if (StyleElement2 != null) {
    StyleElement2.remove();
  }
}
function SIM_ErrorIndicator(PropSet) {
  return safelyRendered(() => {
    let [ErrorToShow] = parsedPropSet(
      PropSet,
      optionalValue("error", (Value) => Value instanceof Error)
    );
    const onClick = () => {
      console.warn(ErrorToShow);
      window.alert(ErrorMessageFor(ErrorToShow));
    };
    return m$1`<div class="sim-error-indicator" onClick=${onClick}/>`;
  });
}
installStylesheetFor("sim-error-indicator", `
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
function ErrorMessageFor(ErrorToShow) {
  let ErrorName = ErrorToShow.name ?? "";
  let ErrorMessage = ErrorToShow.message;
  let StackTrace = ErrorToShow.stack ?? "";
  const Title2 = ErrorName.replace(/([a-z])([A-Z])/g, "$1 $2");
  const Message = ErrorMessage[0].toUpperCase() + ErrorMessage.slice(1);
  if (StackTrace === "") {
    return `${Title2}

${Message}`;
  } else {
    return `${Title2}

${Message}

${StackTrace}`;
  }
}
function safelyRendered(Renderer) {
  expectFunction("rendering function", Renderer);
  try {
    return Renderer();
  } catch (Signal) {
    const ComponentName = Renderer.name ?? "";
    if (ComponentName.trim() === "") {
      console.warn("error while rendering a preact component: " + Signal);
    } else {
      console.warn(
        "error while rendering component " + quoted(ComponentName) + ": " + Signal
      );
    }
    return m$1`<${SIM_ErrorIndicator} error=${Signal}/>`;
  }
}
function fullsized(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component fullsized ${Classes ?? ""}" ...${RestProps}>
        ${ContentList}
      </>`;
  });
}
installStylesheetFor("sim-component.fullsized", `
    .sim-component.fullsized > * {
      display:block; position:relative;
      left:0px; top:0px; width:100%; height:100%;
    }
  `);
function centered(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component centered ${Classes ?? ""}" ...${RestProps}>
        ${ContentList}
      </>`;
  });
}
installStylesheetFor("sim-component.centered", `
    .sim-component.centered {
      display:flex ! important; flex-flow:column nowrap; align-items:center; justify-content:center;
      left:0px; top:0px; width:100% !important; height:100% !important;
    }
    .sim-component.centered > * {
      position:relative;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function horizontal(PropSet) {
  return safelyRendered(() => {
    let [Classes, Style, Gap, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalOrdinal("gap")
    );
    Gap = Gap ?? 0;
    return m$1`<div class="sim-component horizontal ${Classes ?? ""}"
        style="gap:${Gap}px; ${Style ?? ""}" ...${RestProps}
      >${ContentList}</>`;
  });
}
installStylesheetFor("sim-component.horizontal", `
    .sim-component.horizontal {
      display:flex ! important; flex-flow:row nowrap; align-items:center;
      position:relative; left:0px; top:0px; width:100% !important; height:auto;
    }
    .sim-component.horizontal > * {
      position:relative; flex:0 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function vertical(PropSet) {
  return safelyRendered(() => {
    let [Classes, Style, Gap, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalOrdinal("gap")
    );
    Gap = Gap ?? 0;
    return m$1`<div class="sim-component vertical ${Classes ?? ""}"
        style="gap:${Gap}px; ${Style ?? ""}" ...${RestProps}
      >${ContentList}</>`;
  });
}
installStylesheetFor("sim-component.vertical", `
    .sim-component.vertical {
      display:flex ! important; flex-flow:column nowrap; align-items:start;
      position:relative; left:0px; top:0px; width:auto; height:100% !important;
    }
    .sim-component.vertical > * {
      position:relative; flex:0 0 auto;
      left:0px; top:0px; right:auto; bottom:auto; width:auto; height:auto;
    }
  `);
function tabular(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Columns,
      RowGap,
      ColGap,
      ColClasses,
      RestProps,
      ContentList
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalCardinal("columns"),
      optionalOrdinal("rowgap"),
      optionalOrdinal("colgap"),
      optionalTextline("columnclasses")
      // space-separated
    );
    Columns = Columns ?? 2;
    RowGap = RowGap ?? 0;
    ColGap = ColGap ?? 0;
    ColClasses = ColClasses ?? "";
    function ColSpanOfCell(TableCell) {
      if (typeof TableCell === "string") {
        return 1;
      } else {
        let ColSpan = TableCell.props["colspan"];
        return ValueIsOrdinal(ColSpan) ? ColSpan : 1;
      }
    }
    ContentList = toChildArray(ContentList).filter(
      (Cell) => Cell.type != null || Cell.trim() !== ""
    );
    const ContentCount = ContentList.length;
    const RowList = [[]];
    let RowIndex = 0, CellIndex = 0;
    ContentList.forEach((Cell, Index) => {
      RowList[RowIndex].push(Cell);
      CellIndex += ColSpanOfCell(Cell);
      if (CellIndex >= Columns && Index < ContentCount - 1) {
        RowList.push([]);
        RowIndex++;
        CellIndex = 0;
      }
    });
    const ColGroup = ColClasses.trim() === "" ? "" : m$1`<colgroup>${ColClasses.split(" ").map((Class) => m$1`<col class="${Class}"/>`)}</>`;
    return m$1`<table class="sim-component tabular ${Classes ?? ""}" style="
        ${Style ?? ""};
        border-spacing:${ColGap}px ${RowGap}px;
        margin:-${RowGap}px -${ColGap}px -${RowGap}px -${ColGap}px
      " ...${RestProps}
      >${ColGroup}<tbody>
        ${ContentCount > 0 && RowList.map((Row, i2) => m$1`<tr>
          ${Row.map(
      (Cell) => m$1`<td colspan=${ColSpanOfCell(Cell)}>${Cell}</>`
    )}
        </tr>`)}
      </tbody></table>`;
  });
}
installStylesheetFor("sim-component.tabular", `
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
function selective(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      activeIndex,
      RestProps,
      ContentList
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalOrdinal("activeindex")
    );
    ContentList = toChildArray(ContentList).filter(
      (Content) => typeof Content !== "string" || Content.trim() !== ""
    );
    const ContentCount = ContentList.length;
    activeIndex = ContentCount === 0 ? 0 : Math.max(0, Math.min(activeIndex ?? 0, ContentCount - 1));
    return m$1`<div class="sim-component selective ${Classes ?? ""}"
        ...${RestProps}>${ContentList[activeIndex]}</>`;
  });
}
installStylesheetFor("sim-component.selective", `
    .sim-component.selective {
      display:block; position:relative;
      left:0px; top:0px; width:100% ! important; height:100% ! important;
    }

    .sim-component.selective > * {
      display:block; position:relative;
      left:0px; top:0px; width:100%; height:100%;
    }
  `);
function stacked(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component stacked ${Classes ?? ""}" ...${RestProps}>
        ${ContentList}
      </>`;
  });
}
installStylesheetFor("sim-component.stacked", `
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
function Dummy(PropSet) {
  return safelyRendered(() => {
    let [Classes, Value, visiblePattern, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("value"),
      optionalBoolean("visiblepattern")
    );
    return m$1`<div
        class="sim-component dummy ${visiblePattern ? "visible-pattern" : ""} ${Classes ?? ""}"
        ...${RestProps} dangerouslySetInnerHTML=${{ __html: Value ?? "" }}
      />`;
  });
}
installStylesheetFor("sim-component.dummy", `
    .sim-component.dummy.visible-pattern {
      background-image:repeating-linear-gradient(-45deg,
        rgba(222,222,222, 1) 0px, rgba(222,222,222, 1) 4px,
        rgba(0,0,0, 0) 4px, rgba(0,0,0, 0) 8px
      ); background-size:11.31px 11.31px;
    }
  `);
function Outline(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component outline ${Classes ?? ""}" ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.outline", `
    .sim-component.outline {
      outline:dotted 1px blue;
      outline-offset:2px;
    }
  `);
function Spacer(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component spacer ${Classes ?? ""}" ...${RestProps}/>`;
  });
}
function expandingSpacer(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component expanding-spacer ${Classes ?? ""}" ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.expanding-spacer", `
    .sim-component.expanding-spacer {
      flex:1 0 auto ! important;
    }
  `);
function horizontalSeparator(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component horizontal-separator ${Classes ?? ""}" ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.horizontal-separator", `
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
function verticalSeparator(PropSet) {
  return safelyRendered(() => {
    let [Classes, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class")
    );
    return m$1`<div class="sim-component vertical-separator ${Classes ?? ""}" ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.vertical-separator", `
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
function plainTextlineView(PropSet) {
  return safelyRendered(() => {
    let [Classes, Value, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("value")
    );
    return m$1`<div class=${Classes ?? ""} ...${RestProps}>
        ${Value ?? ContentList}
      </>`;
  });
}
function Title(PropSet) {
  PropSet = { ...PropSet, "class": `sim-component title ${PropSet.class ?? ""}` };
  return plainTextlineView(PropSet);
}
installStylesheetFor("sim-component.title", `
    .sim-component.title {
      font-size:22px; font-weight:bold; line-height:32px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Subtitle(PropSet) {
  PropSet = { ...PropSet, "class": `sim-component subtitle ${PropSet.class ?? ""}` };
  return plainTextlineView(PropSet);
}
installStylesheetFor("sim-component.subtitle", `
    .sim-component.subtitle {
      font-size:18px; font-weight:bold; line-height:27px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Label(PropSet) {
  PropSet = { ...PropSet, "class": `sim-component label ${PropSet.class ?? ""}` };
  return plainTextlineView(PropSet);
}
installStylesheetFor("sim-component.label", `
    .sim-component.label {
      height:30px;
      font-size:14px; font-weight:bold; line-height:30px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Description(PropSet) {
  PropSet = { ...PropSet, "class": `sim-component description ${PropSet.class ?? ""}` };
  return plainTextlineView(PropSet);
}
installStylesheetFor("sim-component.description", `
    .sim-component.description {
      font-size:14px; font-weight:normal; line-height:21px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function Fineprint(PropSet) {
  PropSet = { ...PropSet, "class": `sim-component fineprint ${PropSet.class ?? ""}` };
  return plainTextlineView(PropSet);
}
installStylesheetFor("sim-component.fineprint", `
    .sim-component.fineprint {
      font-size:12px; font-weight:normal; line-height:18px;
      overflow:hidden; text-overflow:ellipsis;
    }
  `);
function TextView(PropSet) {
  return safelyRendered(() => {
    let [Classes, Value, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("value")
    );
    return m$1`<div class="sim-component textview ${Classes ?? ""}" ...${RestProps}>${Value ?? ""}</>`;
  });
}
installStylesheetFor("sim-component.textview", `
    .sim-component.textview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
function HTMLView(PropSet) {
  return safelyRendered(() => {
    let [Classes, Value, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("value")
    );
    return m$1`<div class="sim-component htmlview ${Classes ?? ""}" ...${RestProps}
        dangerouslySetInnerHTML=${{ __html: Value ?? "" }}
      />`;
  });
}
installStylesheetFor("sim-component.htmlview", `
    .sim-component.htmlview {
      overflow:auto;
      font-size:14px; font-weight:normal; line-height:21px;
    }
  `);
const MarkdownRenderer = new Marked();
MarkdownRenderer.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false,
  smartypants: false
});
MarkdownRenderer.use(markedKatex({
  throwOnError: false
  /*nonStandard:true,*/
}));
MarkdownRenderer.use(markedHighlight({
  emptyLangClass: "hljs",
  langPrefix: "hljs language-",
  // CSS class prefix
  highlight(Code, Language, Info) {
    Language = HighlightJS.getLanguage(Language) ? Language : "plaintext";
    return HighlightJS.highlight(Code, { language: Language }).value;
  }
}));
function MarkdownView(PropSet) {
  return safelyRendered(() => {
    let [Classes, Value, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("value")
    );
    const HTMLContents = q(
      () => MarkdownRenderer.paime(Value ?? ""),
      [Value]
    );
    return m$1`<div class="sim-component markdownview ${Classes ?? ""}" ...${RestProps}
        dangerouslySetInnerHTML=${{ __html: HTMLContents }}
      />`;
  });
}
installStylesheetFor("sim-component.markdownview", `
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
const SIM_ImageScalings = ["none", "stretch", "cover", "contain"];
const SIM_ImageAlignments = [
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
function ValueIsImageScaling(Value) {
  return ValueIsOneOf(Value, SIM_ImageScalings);
}
function ValueIsImageAlignment(Value) {
  return ValueIsOneOf(Value, SIM_ImageAlignments);
}
function ImageView(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      ImageScaling,
      ImageAlignment,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalURL("value"),
      optionalValue("scaling", ValueIsImageScaling),
      optionalValue("alignment", ValueIsImageAlignment)
    );
    return m$1`<img class="sim-component imageview ${Classes ?? ""}" src=${Value ?? ""} style="
        object-fit:${ImageScaling ?? "contain"};
        object-position:${ImageAlignment ?? "center center"}; ${Style}
      " ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.imageview", `
    .sim-component.imageview {
      object-fit:contain; object-position:center;
    }
  `);
function SVGView(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      ImageScaling,
      ImageAlignment,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalURL("value"),
      optionalValue("scaling", ValueIsImageScaling),
      optionalValue("alignment", ValueIsImageAlignment)
    );
    const DataURL = q(() => "image/svg+xml;base64," + btoa(Value ?? ""));
    return m$1`<img class="sim-component svgview ${Classes ?? ""}" src=${DataURL} style="
        object-fit:${ImageScaling ?? "contain"};
        object-position:${ImageAlignment ?? "center center"}; ${Style}
      " ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.svgview", `
    .sim-component.svgview {
      object-fit:contain; object-position:center;
    }
  `);
const SIM_DefaultSandboxPermissions = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-same-origin allow-scripts";
const SIM_ReferrerPolicies = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "origin-when-cross-origin",
  "same-origin",
  "strict-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
];
function ValueIsReferrerPolicy(Value) {
  return ValueIsOneOf(Value, SIM_ReferrerPolicies);
}
function WebView(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      Permissions,
      allowsFullScreen,
      SandboxPermissions,
      ReferrerPolicy,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalURL("value"),
      optionalTextline("allow"),
      optionalBoolean("allowfullscreen"),
      optionalTextline("sandbox"),
      optionalValue("referrerpolicy", ValueIsReferrerPolicy)
    );
    return m$1`<iframe class="sim-component webview ${Classes ?? ""}" src=${Value ?? ""}
        allow=${Permissions} allowfullscreen=${allowsFullScreen}
        sandbox=${SandboxPermissions} referrerpolicy=${ReferrerPolicy}
        ...${RestProps}
      />`;
  });
}
installStylesheetFor("sim-component.webview", `
    .sim-component.webview {
      overflow:auto;
    }
  `);
function Icon(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      Color,
      active,
      disabled,
      onClick,
      RestProps,
      ContentList
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalURL("value"),
      optionalColor("color"),
      optionalBoolean("active"),
      optionalBoolean("disabled"),
      optionalFunction("onclick")
    );
    Value = Value ?? `${IconFolder}/circle-information.png`;
    Color = Color ?? "black";
    const _onClick = b((Event) => {
      if (disabled) {
        return consumingEvent(Event);
      }
      executeCallback('Icon callback "onClick"', onClick, Event);
    }, [disabled, onClick]);
    const Cursor = disabled ? "not-allowed" : onClick == null ? "auto" : "pointer";
    return m$1`<div
        class="sim-component icon ${disabled ? "disabled" : ""} ${active ? "active" : ""} ${Classes ?? ""}"
        onClick=${_onClick} ...${RestProps}
      >
        <div style="
          -webkit-mask-image:url(${Value}); mask-image:url(${Value});
          background-color:${Color};
          cursor:${Cursor};
        "/>
      </>`;
  });
}
installStylesheetFor("sim-component.icon", `
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
const SIM_FAIconNames = [
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
function FAIcon(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      Color,
      active,
      disabled,
      onClick,
      RestProps,
      ContentList
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsOneOf(Value2, SIM_FAIconNames)),
      optionalColor("color"),
      optionalBoolean("active"),
      optionalBoolean("disabled"),
      optionalFunction("onclick")
    );
    Value = Value ?? "fa-question-circle-o";
    Color = Color ?? "black";
    const _onClick = b((Event) => {
      if (disabled) {
        return consumingEvent(Event);
      }
      executeCallback('Icon callback "onClick"', onClick, Event);
    }, [disabled, onClick]);
    const Cursor = disabled ? "not-allowed" : onClick == null ? "auto" : "pointer";
    return m$1`<div class="sim-component fa-icon fa ${Value} ${disabled ? "disabled" : ""} ${active ? "active" : ""} ${Classes ?? ""}" style="
        color:${Color};
        cursor:${Cursor};
      " onClick=${_onClick} ...${RestProps}/>`;
  });
}
installStylesheetFor("sim-component.fa-icon", `
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
function Button(PropSet) {
  return safelyRendered(() => {
    let [Classes, Value, RestProps, ContentList] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("value")
    );
    if (Value == null) {
      return m$1`<button class="sim-component button ${Classes ?? ""}" ...${RestProps}>
          ${ContentList}
        </>`;
    } else {
      return m$1`<button class="sim-component button ${Classes ?? ""}" ...${RestProps}
          dangerouslySetInnerHTML=${{ __html: Value }}
        />`;
    }
  });
}
installStylesheetFor("sim-component.button", `
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
function Checkbox(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      disabled,
      onValueInput,
      onClick,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalValue("value", (Value2) => ValueIsBoolean(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("onclick")
    );
    const [actualValue, actualDisabling] = ValueIsSpecial(Value) ? [void 0, disabled || Value.disabled] : [Value, disabled];
    const checked = actualValue == true;
    const indeterminate = actualValue == null;
    const _onClick = b((Event) => {
      consumeEvent(Event, actualDisabling);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('Checkbox callback "onClick"', onClick, Event);
      const Value2 = Event.target.checked;
      executeCallback(
        'Checkbox callback "onValueInput"',
        onValueInput,
        Value2,
        Event
      );
    }, [actualDisabling, onClick, onValueInput]);
    return m$1`<div class="sim-component checkbox ${actualDisabling ? "disabled" : ""} ${Classes ?? ""}"
        style=${Style}
      >
        <input type="checkbox"
          checked=${checked} indeterminate=${indeterminate}
          onClick=${_onClick} ...${RestProps}
        />
      </>`;
  });
}
installStylesheetFor("sim-component.checkbox", `
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
function Radiobutton(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      disabled,
      onValueInput,
      onClick,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalValue("value", (Value2) => ValueIsBoolean(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("onclick")
    );
    Value = Value ?? SIM_empty;
    const [actualValue, actualDisabling] = ValueIsSpecial(Value) ? [void 0, disabled || Value.disabled] : [Value, disabled];
    const checked = actualValue == true;
    const _onClick = b((Event) => {
      consumeEvent(Event, actualDisabling);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('Radiobutton callback "onClick"', onClick, Event);
      const Value2 = Event.target.checked;
      executeCallback(
        'Checkbox callback "onValueInput"',
        onValueInput,
        Value2,
        Event
      );
    }, [actualDisabling, onClick, onValueInput]);
    return m$1`<div class="sim-component radiobutton ${actualDisabling ? "disabled" : ""} ${Classes ?? ""}"
        style=${Style}
      >
        <input type="radio" checked=${checked} onClick=${_onClick} ...${RestProps}/>
      </>`;
  });
}
installStylesheetFor("sim-component.radiobutton", `
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
function Gauge(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      Minimum,
      lowerBound,
      Optimum,
      upperBound,
      Maximum,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalNumber("value"),
      optionalNumber("min"),
      optionalNumber("low"),
      optionalNumber("opt"),
      optionalNumber("high"),
      optionalNumber("max")
    );
    return m$1`<div class="sim-component gauge ${Classes ?? ""}" style=${Style}>
        <meter
          value=${Value} min=${Minimum} low=${lowerBound} opt=${Optimum}
          high=${upperBound} max=${Maximum} ...${RestProps}
        />
      </>`;
  });
}
installStylesheetFor("sim-component.gauge", `
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
function Progressbar(PropSet) {
  return safelyRendered(() => {
    let [Classes, Style, Value, Maximum, RestProps] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalNumber("value"),
      optionalNumber("max")
    );
    return m$1`<div class="sim-component progressbar ${Classes ?? ""}" style=${Style}>
        <progress value=${Value} max=${Maximum} ...${RestProps}/>
      </>`;
  });
}
installStylesheetFor("sim-component.progressbar", `
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
function Slider(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      Minimum,
      Stepping,
      Maximum,
      Hashmarks,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalValue("value", (Value2) => ValueIsNumber(Value2) || ValueIsSpecial(Value2)),
      optionalNumber("min"),
      optionalValue("step", (Value2) => ValueIsNumberInRange(Value2, 0, Infinity, false, false)),
      optionalNumber("max"),
      optionalValue("hashmarks", (Value2) => ValueIsListSatisfying(Value2, ValueIsTextline)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null || isNaN(Value) ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, disabled || ValueToShow.disabled] : [ValueToShow, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('Slider callback "onInput"', onInput, Event);
      let Value2 = shownValue.current = parseFloat(Event.target.value);
      executeCallback(
        'Slider callback "onValueInput"',
        onValueInput,
        Value2,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('slider callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let HashmarkList = "", HashmarkId;
    if (Hashmarks != null && Hashmarks.length > 0) {
      HashmarkId = internalId + "-Hashmarks";
      HashmarkList = m$1`\n<datalist id=${HashmarkId}>
          ${Hashmarks.map((Item) => {
        const Value2 = Item.replace(/:.*$/, "").trim();
        const Label2 = Item.replace(/^[^:]+:/, "").trim();
        return m$1`<option value=${Value2}>${Label2}</option>`;
      })}
        </datalist>`;
    }
    return m$1`<div class="sim-component slider ${Classes ?? ""}" style=${Style}>
        <input type="range" ref=${ViewRef} disabled=${actualDisabling}
          value=${actualValue} min=${Minimum} max=${Maximum} step=${Stepping}
          list=${HashmarkId}
          onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
        />${HashmarkList}
      </>`;
  });
}
installStylesheetFor("sim-component.slider", `
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
function TextlineInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      Pattern,
      SpellChecking,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsTextline(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalTextline("pattern"),
      optionalBoolean("spellcheck"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsTextline)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('TextlineInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'TextlineInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('TextlineInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="text" class="sim-component textline-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        readOnly=${readonly} placeholder=${actualPlaceholder}
        pattern=${Pattern} spellcheck=${SpellChecking}
        disabled=${actualDisabling} list=${SuggestionId}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.textline-input", `
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
function PasswordInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      Pattern,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsTextline(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalTextline("pattern"),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('PasswordInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'PasswordInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('PasswordInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const rerender = useRerenderer();
    return m$1`<input type="password" class="sim-component password-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        readOnly=${readonly} placeholder=${actualPlaceholder}
        pattern=${Pattern} disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />`;
  });
}
installStylesheetFor("sim-component.password-input", `
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
function NumberInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      invalid,
      Placeholder,
      readonly,
      Minimum,
      Stepping,
      Maximum,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsNumber(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalNumber("min"),
      optionalValue("step", (Value2) => ValueIsNumberInRange(Value2, 0, Infinity, false, false)),
      optionalNumber("max"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsNumber)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = ValueIsSpecial(Value) || Value != null && !isNaN(Value) ? Value : SIM_empty;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('NumberInput callback "onInput"', onInput, Event);
      const enteredValue = parseFloat(Event.target.value);
      shownValue.current = isNaN(enteredValue) ? void 0 : enteredValue;
      executeCallback(
        'NumberInput callback "onValueInput"',
        onValueInput,
        shownValue.current,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('NumberInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="number" ref=${ViewRef}
        class="sim-component number-input ${Classes ?? ""} ${invalid ? "invalid" : ""}"
        value=${actualValue} min=${Minimum} max=${Maximum} step=${Stepping}
        readOnly=${readonly} placeholder=${actualPlaceholder}
        disabled=${actualDisabling} list=${SuggestionId}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.number-input", `
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
function EMailAddressInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      multiple,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      Pattern,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsEMailAddress(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("multiple"),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalTextline("pattern"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsEMailAddress)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('EMailAddressInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'EMailAddressInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('EMailAddressInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="email" class="sim-component emailaddress-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        multiple=${multiple} readOnly=${readonly} placeholder=${actualPlaceholder}
        pattern=${Pattern} disabled=${actualDisabling} list=${SuggestionId}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.emailaddress-input", `
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
function PhoneNumberInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      Pattern,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsPhoneNumber(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalTextline("pattern"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsPhoneNumber)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('PhoneNumberInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'PhoneNumberInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('PhoneNumberInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="tel" class="sim-component phonenumber-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        readOnly=${readonly} placeholder=${actualPlaceholder} pattern=${Pattern}
        disabled=${actualDisabling} list=${SuggestionId}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.phonenumber-input", `
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
function URLInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      Pattern,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsURL(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalTextline("pattern"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsURL)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('URLInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'URLInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('URLInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="url" class="sim-component url-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        readOnly=${readonly} placeholder=${actualPlaceholder} pattern=${Pattern}
        disabled=${actualDisabling} list=${SuggestionId}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.url-input", `
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
const SIM_TimePattern = "\\d{2}:\\d{2}";
const SIM_TimeRegExp = /\d{2}:\d{2}/;
function ValueIsTime(Value) {
  return ValueIsStringMatching(Value, SIM_TimeRegExp);
}
function TimeInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      readonly,
      withSeconds,
      Minimum,
      Maximum,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsTime(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("readonly"),
      optionalBoolean("withseconds"),
      optionalValue("min", ValueIsTime),
      optionalValue("max", ValueIsTime),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsTime)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, disabled || ValueToShow.disabled] : [ValueToShow, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('TimeInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'TimeInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('TimeInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="time" class="sim-component time-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} min=${Minimum} max=${Maximum} step=${withSeconds ? 1 : 60}
        readOnly=${readonly} pattern=${SIM_TimePattern}
        disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.time-input", `
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
const SIM_DateTimePattern = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}";
const SIM_DateTimeRegExp = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function ValueIsDateTime(Value) {
  return ValueIsStringMatching(Value, SIM_DateTimeRegExp);
}
function DateTimeInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      readonly,
      withSeconds,
      Minimum,
      Maximum,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsDateTime(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("readonly"),
      optionalBoolean("withseconds"),
      optionalValue("min", ValueIsDateTime),
      optionalValue("max", ValueIsDateTime),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsDateTime)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, disabled || ValueToShow.disabled] : [ValueToShow, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('DateTimeInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'DateTimeInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('DateTimeInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="datetime-local" class="sim-component datetime-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} min=${Minimum} max=${Maximum} step=${withSeconds ? 1 : 60}
        readOnly=${readonly} pattern=${SIM_TimePattern}
        disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.datetime-input", `
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
const SIM_DatePattern = "\\d{4}-\\d{2}-\\d{2}";
const SIM_DateRegExp = /\d{4}-\d{2}-\d{2}/;
function ValueIsDate(Value) {
  return ValueIsStringMatching(Value, SIM_DateRegExp);
}
function DateInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      readonly,
      Minimum,
      Maximum,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsDate(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("readonly"),
      optionalValue("min", ValueIsDate),
      optionalValue("max", ValueIsDate),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsDate)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, disabled || ValueToShow.disabled] : [ValueToShow, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('DateInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'DateInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('DateInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="date" class="sim-component date-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} min=${Minimum} max=${Maximum}
        readOnly=${readonly} pattern=${SIM_TimePattern}
        disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.date-input", `
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
const SIM_WeekPattern = "\\d{4}-W\\d{2}";
const SIM_WeekRegExp = /\d{4}-W\d{2}/;
function ValueIsWeek(Value) {
  return ValueIsStringMatching(Value, SIM_WeekRegExp);
}
function WeekInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      readonly,
      Minimum,
      Maximum,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsWeek(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("readonly"),
      optionalValue("min", ValueIsWeek),
      optionalValue("max", ValueIsWeek),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsWeek)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, disabled || ValueToShow.disabled] : [ValueToShow, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('WeekInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'WeekInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('WeekInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="week" class="sim-component week-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} min=${Minimum} max=${Maximum}
        readOnly=${readonly} pattern=${SIM_TimePattern}
        disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.week-input", `
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
const SIM_MonthPattern = "\\d{4}-\\d{2}";
const SIM_MonthRegExp = /\d{4}-\d{2}/;
function ValueIsMonth(Value) {
  return ValueIsStringMatching(Value, SIM_MonthRegExp);
}
function MonthInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      readonly,
      Minimum,
      Maximum,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsMonth(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("readonly"),
      optionalValue("min", ValueIsMonth),
      optionalValue("max", ValueIsMonth),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsMonth)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, disabled || ValueToShow.disabled] : [ValueToShow, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('MonthInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'MonthInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('MonthInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="month" class="sim-component month-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} min=${Minimum} max=${Maximum}
        readOnly=${readonly} pattern=${SIM_TimePattern}
        disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.month-input", `
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
function SearchInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      Pattern,
      SpellChecking,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsTextline(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalTextline("pattern"),
      optionalBoolean("spellcheck"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsTextline)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('SearchInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'SearchInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('SearchInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const internalId = P();
    const rerender = useRerenderer();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="search" class="sim-component search-input ${Classes ?? ""}" ref=${ViewRef}
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        readOnly=${readonly} placeholder=${actualPlaceholder}
        pattern=${Pattern} spellcheck=${SpellChecking}
        disabled=${actualDisabling} list=${SuggestionId}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.search-input", `
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
function FileInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      Placeholder,
      multiple,
      FileTypes,
      disabled,
      onValueInput,
      onInput,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsTextline(Value2) || ValueIsSpecial(Value2)),
      optionalTextline("placeholder"),
      optionalBoolean("multiple"),
      optionalTextline("accept"),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput")
    );
    disabled = disabled ?? false;
    let ValueToShow = Value == null ? SIM_empty : Value;
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('FileInput callback "onInput"', onInput, Event);
      let ValueList = Array.from(Event.target.files);
      executeCallback(
        'FileInput callback "onValueInput"',
        onValueInput,
        ValueList,
        Event
      );
      Event.target.value = "";
    }, [actualDisabling, onInput, onValueInput]);
    return m$1`<label class="sim-component file-input ${Classes ?? ""}">
        ${actualValue == null ? m$1`<span>${actualPlaceholder ?? ""}</span>` : m$1`<span>${actualValue}</span>`}
        <input type="file" style="display:none"
          multiple=${multiple} accept=${FileTypes}
          disabled=${actualDisabling} onInput=${_onInput} ...${RestProps}
        />
      </label>`;
  });
}
installStylesheetFor("sim-component.file-input", `
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
function PseudoFileInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      IconURL,
      Color,
      multiple,
      FileTypes,
      disabled,
      onValueInput,
      onInput,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      mandatoryURL("icon"),
      optionalColor("color"),
      optionalBoolean("multiple"),
      optionalTextline("accept"),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput")
    );
    disabled = disabled ?? false;
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (disabled == true) {
        return;
      }
      executeCallback('PseudoFileInput callback "onInput"', onInput, Event);
      let ValueList = Array.from(Event.target.files);
      executeCallback(
        'PseudoFileInput callback "onValueInput"',
        onValueInput,
        ValueList,
        Event
      );
      Event.target.value = "";
    }, [disabled, onInput, onValueInput]);
    return m$1`<label
        class="sim-component pseudo-file-input ${disabled ? "disabled" : ""} ${Classes ?? ""}"
      >
        <div style="${Style ?? ""};
          -webkit-mask-image:url(${IconURL}); mask-image:url(${IconURL});
          background-color:${Color ?? "black"};
        "/>
        <input type="file" style="display:none"
          multiple=${multiple} accept=${FileTypes}
          disabled=${disabled} onInput=${_onInput} ...${RestProps}
        />
      </label>`;
  });
}
installStylesheetFor("sim-component.pseudo-file-input", `
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
function ColorInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      readonly,
      Suggestions,
      disabled,
      onValueInput,
      onInput,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalValue("value", (Value2) => ValueIsColor(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("readonly"),
      optionalValue("suggestions", (Value2) => ValueIsListSatisfying(Value2, ValueIsColor)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput")
    );
    disabled = disabled ?? false;
    const [actualValue, actualDisabling] = ValueIsSpecial(Value) ? [void 0, disabled || Value.disabled] : [Value, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('ColorInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      executeCallback(
        'ColorInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    let minWidth = 40;
    const internalId = P();
    let SuggestionList = "", SuggestionId;
    if (Suggestions != null && Suggestions.length > 0) {
      SuggestionId = internalId + "-Suggestions";
      minWidth += 20;
      SuggestionList = m$1`<datalist id=${SuggestionId}>
          ${Suggestions.map((Value2) => m$1`<option value=${Value2}></option>`)}
        </datalist>`;
    }
    return m$1`<input type="color" class="sim-component color-input ${Classes ?? ""}"
        style="min-width:${minWidth}px; ${Style}"
        value=${actualValue} readOnly=${Value} list=${SuggestionId}
        disabled=${actualDisabling} onInput=${_onInput} ...${RestProps}
      />${SuggestionList}`;
  });
}
installStylesheetFor("sim-component.color-input", `
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
function DropDown(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Value,
      Options,
      disabled,
      onValueInput,
      onInput,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalValue("value", (Value2) => ValueIsTextline(Value2) || ValueIsSpecial(Value2)),
      mandatoryValue("options", (Value2) => ValueIsListSatisfying(Value2, ValueIsTextline)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput")
    );
    disabled = disabled ?? false;
    Options = Options ?? [];
    const [actualValue, actualDisabling] = ValueIsSpecial(Value) ? [void 0, disabled || Value.disabled] : [Value, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('DropDown callback "onInput"', onInput, Event);
      let Value2 = Event.target.value;
      executeCallback(
        'DropDown callback "onValueInput"',
        onValueInput,
        Value2,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    return m$1`<select class="sim-component dropdown ${Classes ?? ""}"
        disabled=${actualDisabling} onInput=${_onInput} ...${RestProps}
      >${Options.map(
      (Option) => {
        let OptionValue = Option.replace(/:.*$/, "").trim();
        let OptionLabel = Option.replace(/^[^:]*:/, "").trim();
        const disabled2 = OptionLabel[0] === "-";
        if (/^[-]+$/.test(OptionLabel)) {
          return m$1`<hr/>`;
        } else {
          if (OptionValue === Option) {
            OptionValue = OptionValue.replace(/^-/, "");
          }
          if (disabled2) {
            OptionLabel = OptionLabel.replace(/^-/, "");
          }
          return m$1`<option value=${OptionValue}
              selected=${OptionValue === actualValue} disabled=${disabled2}
            >${OptionLabel}</option>`;
        }
      }
    )}</select>`;
  });
}
installStylesheetFor("sim-component.dropdown", `
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
function PseudoDropDown(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      IconURL,
      Color,
      Options,
      disabled,
      onValueInput,
      onInput,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalValue("value", (Value2) => ValueIsTextline(Value2) || ValueIsSpecial(Value2)),
      mandatoryURL("icon"),
      optionalColor("color"),
      mandatoryValue("options", (Value2) => ValueIsListSatisfying(Value2, ValueIsTextline)),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput")
    );
    disabled = disabled ?? false;
    const [actualValue, actualDisabling] = ValueIsSpecial(Value) ? [void 0, disabled || Value.disabled] : [Value, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('PseudoDropDown callback "onInput"', onInput, Event);
      let Value2 = Event.target.value;
      executeCallback(
        'PseudoDropDown callback "onValueInput"',
        onValueInput,
        Value2,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    return m$1`<label
        class="sim-component pseudo-dropdown ${disabled ? "disabled" : ""} ${Classes ?? ""}"
      >
        <div style="${Style ?? ""};
          -webkit-mask-image:url(${IconURL}); mask-image:url(${IconURL});
          background-color:${Color ?? "black"};
        "/>
        <select
          disabled=${actualDisabling} onInput=${_onInput} ...${RestProps}
        >${Options.map(
      (Option) => {
        let OptionValue = Option.replace(/:.*$/, "").trim();
        let OptionLabel = Option.replace(/^[^:]*:/, "").trim();
        const disabled2 = OptionLabel[0] === "-";
        if (/^[-]+$/.test(OptionLabel)) {
          return m$1`<hr/>`;
        } else {
          if (OptionValue === Option) {
            OptionValue = OptionValue.replace(/^-/, "");
          }
          if (disabled2) {
            OptionLabel = OptionLabel.replace(/^-/, "");
          }
          return m$1`<option value=${OptionValue}
                selected=${OptionValue === actualValue} disabled=${disabled2}
              >${OptionLabel}</option>`;
        }
      }
    )}</select>
      </label>`;
  });
}
installStylesheetFor("sim-component.pseudo-dropdown", `
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
function TextInput(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Style,
      Value,
      invalid,
      Placeholder,
      readonly,
      minLength,
      maxLength,
      LineWrapping,
      Resizability,
      SpellChecking,
      disabled,
      onValueInput,
      onInput,
      onBlur,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalText("style"),
      optionalValue("value", (Value2) => ValueIsText(Value2) || ValueIsSpecial(Value2)),
      optionalBoolean("invalid"),
      optionalTextline("placeholder"),
      optionalBoolean("readonly"),
      optionalOrdinal("minlength"),
      optionalOrdinal("maxlength"),
      optionalBoolean("wrap"),
      optionalValue("resizability", (Value2) => ValueIsOneOf(Value2, ["none", "horizontal", "vertical", "both"])),
      optionalBoolean("spellcheck"),
      optionalBoolean("disabled"),
      optionalFunction("onvalueinput"),
      optionalFunction("oninput"),
      optionalFunction("onblur")
    );
    disabled = disabled ?? false;
    const ViewRef = F();
    const shownValue = F();
    let ValueToShow = Value == null ? SIM_empty : Value;
    if (ViewRef.current != null && document.activeElement === ViewRef.current) {
      ValueToShow = shownValue.current;
    } else {
      shownValue.current = ValueToShow;
    }
    const [actualValue, actualPlaceholder, actualDisabling] = ValueIsSpecial(ValueToShow) ? [void 0, ValueToShow === SIM_empty ? Placeholder ?? ValueToShow.Placeholder : ValueToShow.Placeholder, disabled || ValueToShow.disabled] : [ValueToShow, Placeholder, disabled];
    const _onInput = b((Event) => {
      consumeEvent(Event);
      if (actualDisabling == true) {
        return;
      }
      executeCallback('TextInput callback "onInput"', onInput, Event);
      const enteredValue = Event.target.value;
      shownValue.current = enteredValue === "" ? SIM_empty : enteredValue;
      executeCallback(
        'TextInput callback "onValueInput"',
        onValueInput,
        enteredValue,
        Event
      );
    }, [actualDisabling, onInput, onValueInput]);
    const _onBlur = b((Event) => {
      rerender();
      executeCallback('TextInput callback "onBlur"', onBlur, Event);
    }, [onBlur]);
    const rerender = useRerenderer();
    const uniqueId = P();
    return m$1`<textarea class="sim-component text-input ${Classes ?? ""}"
        key=${uniqueId} ref=${ViewRef}
        style="${LineWrapping == true ? "overflow-wrap:break-word; hyphens:auto;" : "white-space:pre;"} resize:${Resizability ?? "none"}; ${Style}"
        value=${actualValue} minlength=${minLength} maxlength=${maxLength}
        readOnly=${readonly} placeholder=${actualPlaceholder}
        spellcheck=${SpellChecking} disabled=${actualDisabling}
        onInput=${_onInput} onBlur=${_onBlur} ...${RestProps}
      />`;
  });
}
installStylesheetFor("sim-component.text-input", `
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
function TabStrip(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      activeIndex,
      GapIndex,
      disabled,
      onActivationChange,
      RestProps,
      ContentList
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      optionalOrdinal("activeindex"),
      optionalOrdinal("gapindex"),
      optionalBoolean("disabled"),
      optionalFunction("onactivationchange")
    );
    const externalActiveIndex = F(activeIndex ?? 0);
    const internalActiveIndex = F(activeIndex ?? 0);
    if (activeIndex != null && activeIndex !== externalActiveIndex.current) {
      internalActiveIndex.current = activeIndex;
    } else {
      activeIndex = internalActiveIndex.current;
    }
    const onClick = b((Index, Event) => {
      if (disabled) {
        return consumingEvent(Event);
      }
      internalActiveIndex.current = activeIndex = Index;
      rerender();
      executeCallback('TabStrip callback "onActivationChange"', onActivationChange, Index);
    }, [disabled, onActivationChange]);
    const rerender = useRerenderer();
    const TabList = toChildArray(ContentList).filter(
      (Tab) => Tab.type != null || Tab.trim() !== ""
    );
    return m$1`<div class="sim-component tabstrip ${Classes ?? ""}" ...${RestProps}>
        ${TabList.map((Tab, i2) => {
      const Gap = i2 === GapIndex ? m$1`<div class="gap"/>` : "";
      if (i2 === activeIndex) {
        return m$1`${Gap}<div class="active tab">${Tab}</>`;
      } else {
        return m$1`${Gap}<div class="${disabled ? "disabled" : ""} tab"
            onClick=${(Event) => onClick(i2, Event)}>${Tab}</>`;
      }
    })}
      </>`;
  });
}
installStylesheetFor("sim-component.tabstrip", `
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
function AccordionFold(PropSet) {
  return safelyRendered(() => {
    let [
      Classes,
      Header,
      expanded,
      disabled,
      onExpansionChange,
      RestProps,
      ContentList
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      mandatoryTextline("header"),
      optionalBoolean("expanded"),
      optionalBoolean("disabled"),
      optionalFunction("onexpansionchange")
    );
    disabled = disabled ?? false;
    const externalExpansion = F(expanded ?? false);
    const internalExpansion = F(expanded ?? false);
    if (expanded != null && expanded !== externalExpansion.current) {
      internalExpansion.current = expanded;
    } else {
      expanded = internalExpansion.current;
    }
    const _onClick = b((Event) => {
      consumeEvent(Event);
      if (disabled != true) {
        internalExpansion.current = expanded = !expanded;
        rerender();
        executeCallback('Fold callback "onExpansionChange"', onExpansionChange, expanded);
      }
    }, [disabled, onExpansionChange]);
    const rerender = useRerenderer();
    return m$1`<div class="sim-component accordion-fold ${Classes ?? ""}">
        <div class="header">
          <div class="expander ${expanded ? "expanded" : "collapsed"}" onClick=${_onClick}/>
          <div class="title">${Header}</>
        </>${expanded ? m$1`<div class="content">${ContentList}</>` : ""}
      </>`;
  });
}
installStylesheetFor("sim-component.accordion-fold", `
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
      background:url(${IconFolder}/caret-down.png);
      background-repeat:no-repeat;
      background-size:contain; background-position:center;
    }
    .sim-component.accordion-fold > .header > .expander.collapsed {
      background:url(${IconFolder}/caret-right.png);
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
let KeyCounter = 0;
const KeyMap = /* @__PURE__ */ new WeakMap();
function Default_KeyOfFlatListItem(Item, List, Index) {
  if (KeyMap.has(Item)) {
    return "" + KeyMap.get(Item);
  } else {
    KeyCounter++;
    KeyMap.set(Item, KeyCounter);
    return "" + KeyCounter;
  }
}
function Default_FlatListItemRenderer(Item, List, Index, isSelected = false, InsertionDirection = "") {
  if (typeof Item.toHTML === "function") {
    return m$1`<div class="default" dangerouslySetInnerHTML=${{ __html: Item.toHTML() }}/>`;
  } else {
    return m$1`<div class="default">${"" + Item}</>`;
  }
}
function FlatListView(PropSet) {
  return safelyRendered(() => {
    const [animatedElement] = useAutoAnimate();
    let [
      Classes,
      List,
      Placeholder,
      KeyOfListItem,
      ListItemRenderer,
      onListItemClick,
      selectedItems,
      SelectionLimit,
      onSelectionChange,
      onListItemMove,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      mandatoryValue("list", (Value) => ValueIsListSatisfying(Value, ValueIsPlainObject)),
      optionalTextline("placeholder"),
      optionalFunction("keyoflistitem"),
      optionalFunction("listitemrenderer"),
      optionalFunction("onlistitemclick"),
      optionalValue("selecteditems", (Value) => ValueIsListSatisfying(Value, ValueIsPlainObject)),
      optionalOrdinal("selectionlimit"),
      optionalFunction("onselectionchange"),
      optionalFunction("onlistitemmove")
    );
    const ListIsSelectable = onSelectionChange != null;
    const ListIsSortable = ListIsSelectable && onListItemMove != null;
    const ListItemSet = /* @__PURE__ */ new Set();
    List.forEach((Item) => {
      if (ListItemSet.has(Item)) throwError(
        'InvalidArguments: the given "List" contains double entries'
      );
      ListItemSet.add(Item);
    });
    KeyOfListItem = KeyOfListItem ?? Default_KeyOfFlatListItem;
    ListItemRenderer = ListItemRenderer ?? Default_FlatListItemRenderer;
    const SelectionSet = /* @__PURE__ */ new Set();
    if (ListIsSelectable) {
      if (selectedItems == null) {
        selectedItems = [];
      } else {
        selectedItems = selectedItems.filter((Item) => {
          if (SelectionSet.has(Item)) {
            return false;
          } else {
            SelectionSet.add(Item);
            return true;
          }
        });
      }
      if (selectedItems.length > SelectionLimit) {
        selectedItems.slice(SelectionLimit).forEach(
          (Item) => SelectionSet.delete(Item)
        );
        selectedItems.length = SelectionLimit;
      }
    }
    const [State, setState] = y({
      dragging: false,
      DropTargetIndex: void 0,
      DropMode: void 0
    });
    function changeState(StateChanges) {
      setState((oldState) => ({ ...oldState, ...StateChanges }));
    }
    const onClick = (Event) => {
      Event.stopImmediatePropagation();
      const Item = Event.target.Item;
      const Index = Event.target.Index;
      executeCallback(
        'FlatListView callback "onListItemClick"',
        onListItemClick,
        Item,
        List,
        Index,
        Event
      );
      if (ListIsSelectable) {
        const additively = Event.pointerType !== "mouse" || Event.ctrlKey || Event.metaKey;
        changeSelection(Item, List, Index, additively);
      }
    };
    const changeSelection = (Item, List2, Index, additively) => {
      if (SelectionLimit === 0) {
        return;
      }
      let newSelection = selectedItems;
      if (additively) {
        if (SelectionSet.has(Item)) {
          newSelection = selectedItems.filter(
            (selectedItem) => selectedItem !== Item
          );
        } else {
          if (selectedItems.length === SelectionLimit) {
            return;
          } else {
            newSelection = [...selectedItems, Item];
          }
        }
      } else {
        newSelection = [Item];
      }
      executeCallback(
        'FlatListView callback "onSelectionChange"',
        onSelectionChange,
        newSelection,
        List2
      );
    };
    const onDragStart = b((Event) => {
      const Item = Event.target.Item;
      const Index = Event.target.Index;
      if (!SelectionSet.has(Item)) {
        const additively = (
          /* (Event.pointerType !== 'mouse') ||*/
          Event.ctrlKey || Event.metaKey
        );
        changeSelection(Item, List, Index, additively);
      }
      Event.dataTransfer.effectAllowed = "move";
      changeState({ dragging: true });
    }, [List, SelectionSet, changeSelection]);
    const onDragOver = (Event) => {
      const Item = Event.target.Item;
      const Index = Event.target.Index;
      const hoveredElement = Event.target;
      const Limit = hoveredElement.getBoundingClientRect().top + hoveredElement.offsetHeight / 2;
      const DropMode = Event.clientY < Limit ? "before" : "after";
      if (SelectionSet.has(Item)) {
        if (State.DropTargetItem != null) {
          changeState({ DropTargetItem: void 0, DropMode: void 0 });
        }
      } else {
        Event.preventDefault();
        if (State.DropTargetItem !== Item || State.DropMode !== DropMode) {
          changeState({ DropTargetItem: Item, DropMode });
        }
      }
    };
    const onDragEnd = (Event) => {
      changeState({ dragging: false, DropTargetItem: void 0 });
    };
    const onDrop = (Event) => {
      let { DropTargetItem, DropMode } = State;
      if (DropTargetItem != null) {
        const SelectionCount = selectedItems.length;
        const ItemsToMove = List.filter(
          // in original order!
          (Item) => SelectionSet.has(Item)
        );
        const ItemsToRemain = List.filter(
          (Item) => !SelectionSet.has(Item)
        );
        const TargetIndex = ItemsToRemain.indexOf(DropTargetItem) + (DropMode === "before" ? 0 : 1);
        ItemsToRemain.splice(TargetIndex, 0, ...ItemsToMove);
        List = ItemsToRemain;
        executeCallback(
          'FlatListView callback "onListItemMove"',
          onListItemMove,
          List,
          ItemsToMove,
          DropTargetItem,
          DropMode
        );
      }
    };
    if (List.length === 0) {
      return m$1`<div class="sim-component flatlistview placeholder ${Classes ?? ""}" ...${RestProps}>
          <div dangerouslySetInnerHTML=${{ __html: Placeholder ?? "(empty)" }}/>
        </>`;
    } else {
      const { dragging, DropTargetItem, DropMode } = State;
      return m$1`<div class="sim-component flatlistview ${dragging ? "dragging" : ""} ${Classes ?? ""}"
              onClick=${onClick}
          onDragStart=${ListIsSortable && onDragStart}
           onDragOver=${ListIsSortable && onDragOver}
            onDragEnd=${ListIsSortable && onDragEnd}
               onDrop=${ListIsSortable && onDrop}
          ref=${animatedElement} ...${RestProps}
        >
          ${List.map((Item, Index) => {
        const DOMRef = F();
        _(() => {
          DOMRef.current.Item = Item;
          DOMRef.current.Index = Index;
        }, []);
        const Key = executedCallback(
          'FlatListView callback "KeyOfListItem"',
          KeyOfListItem,
          Item,
          List,
          Index
        );
        const ItemIsSelected = SelectionSet.has(Item);
        const InsertionMode = Item === DropTargetItem ? DropMode : "";
        return m$1`<div class=${"itemview" + (ItemIsSelected ? " selected" : "") + (Item === DropTargetItem ? ` DropTarget ${DropMode}` : "")} key=${Key} ref=${DOMRef} draggable=${ListIsSortable}>
              ${executedCallback(
          'FlatListView callback "ListItemRenderer"',
          ListItemRenderer,
          Item,
          List,
          Index,
          ItemIsSelected,
          InsertionMode
        )}
            </>`;
      })}
        </>`;
    }
  });
}
installStylesheetFor("sim-component.flatlistview", `
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
function Default_KeyOfNestedListItem(Item) {
  if (KeyMap.has(Item)) {
    return "" + KeyMap.get(Item);
  } else {
    KeyCounter++;
    KeyMap.set(Item, KeyCounter);
    return "" + KeyCounter;
  }
}
function Default_NestedListItemRenderer(Item, isSelected = false, isPlain = false, isExpanded = false, InsertionDirection = "") {
  if (typeof Item.toHTML === "function") {
    return m$1`<div class="default" dangerouslySetInnerHTML=${{ __html: Item.toHTML() }}/>`;
  } else {
    return m$1`<div class="default">${"" + Item}</>`;
  }
}
function NestedListView(PropSet) {
  return safelyRendered(() => {
    const [animatedElement] = useAutoAnimate();
    let [
      Classes,
      List,
      Placeholder,
      KeyOfListItem,
      ListItemRenderer,
      ContentOfListItem,
      ContainerOfListItem,
      onListItemClick,
      ListItemMayBeSelected,
      selectedItems,
      SelectionLimit,
      onSelectionChange,
      ListItemMayBeExpanded,
      expandedItems,
      onExpansionChange,
      ListItemMayAccept,
      onListItemMove,
      RestProps
    ] = parsedPropSet(
      PropSet,
      optionalTextline("class"),
      mandatoryValue("list", (Value) => ValueIsListSatisfying(Value, ValueIsPlainObject)),
      optionalTextline("placeholder"),
      optionalFunction("keyoflistitem"),
      optionalFunction("listitemrenderer"),
      optionalFunction("contentoflistitem"),
      optionalFunction("containeroflistitem"),
      optionalFunction("onlistitemclick"),
      optionalFunction("itemmaybeselected"),
      optionalValue("selecteditems", (Value) => ValueIsListSatisfying(Value, ValueIsPlainObject)),
      optionalOrdinal("selectionlimit"),
      optionalFunction("onselectionchange"),
      optionalFunction("itemmaybeexpanded"),
      optionalValue("expandeditems", (Value) => ValueIsListSatisfying(Value, ValueIsPlainObject)),
      optionalFunction("onexpansionchange"),
      optionalFunction("listitemmayaccept"),
      optionalFunction("onlistitemmove")
    );
    const ListIsSelectable = onSelectionChange != null;
    const ListIsSortable = ListIsSelectable && onListItemMove != null;
    const ListItemSet = /* @__PURE__ */ new Set();
    function scanList(List2) {
      List2.forEach((Item) => {
        if (ListItemSet.has(Item)) throwError(
          'InvalidArguments: the given "List" contains double entries'
        );
        ListItemSet.add(Item);
        const innerList = executedCallback(
          'NestedListView callback "ContentOfListItem"',
          ContentOfListItem,
          Item
        );
        if (innerList != null) {
          scanList(innerList);
        }
      });
    }
    scanList(List);
    const emptyList = F([]);
    const yeasayer = F(() => true);
    KeyOfListItem = KeyOfListItem ?? Default_KeyOfNestedListItem;
    ListItemRenderer = ListItemRenderer ?? Default_NestedListItemRenderer;
    ListItemMayBeSelected = ListItemMayBeSelected ?? yeasayer.current;
    ListItemMayBeExpanded = ListItemMayBeExpanded ?? yeasayer.current;
    expandedItems = expandedItems ?? emptyList.current;
    ListItemMayAccept = ListItemMayAccept ?? yeasayer.current;
    function ItemContainsItem(ItemA, ItemB) {
      let Container = executedCallback(
        'NestedListView callback "ContainerOfListItem"',
        ContainerOfListItem,
        ItemB
      );
      switch (Container) {
        case null:
        case void 0:
          return false;
        case ItemA:
          return true;
        default:
          return ItemContainsItem(ItemA, Container);
      }
    }
    const SelectionSet = /* @__PURE__ */ new Set();
    if (ListIsSelectable) {
      if (selectedItems == null) {
        selectedItems = [];
      } else {
        selectedItems = selectedItems.filter((Item) => {
          if (SelectionSet.has(Item)) {
            return false;
          } else {
            SelectionSet.add(Item);
            return true;
          }
        });
        for (let i2 = selectedItems.length - 1; i2 >= 0; i2--) {
          const thisItem = selectedItems[i2];
          if (selectedItems.some((otherItem, j) => {
            return j !== i2 && ItemContainsItem(otherItem, thisItem);
          })) {
            selectedItems.splice(i2, 1);
            SelectionSet.delete(thisItem);
          }
        }
      }
      if (selectedItems.length > SelectionLimit) {
        selectedItems.slice(SelectionLimit).forEach(
          (Item) => SelectionSet.delete(Item)
        );
        selectedItems.length = SelectionLimit;
      }
    }
    function anyOuterItemIsSelected(Item) {
      return selectedItems.some(
        (selectedItem) => ItemContainsItem(selectedItem, Item)
      );
    }
    function deselectAllInnerItemsOf(Item) {
      for (let i2 = selectedItems.length - 1; i2 >= 0; i2--) {
        const otherItem = selectedItems[i2];
        if (ItemContainsItem(Item, otherItem)) {
          selectedItems.splice(i2, 1);
          SelectionSet.delete(otherItem);
        }
      }
    }
    function changeSelection(Item, additively) {
      if (SelectionLimit === 0) {
        return;
      }
      let newSelection = selectedItems;
      if (additively) {
        if (SelectionSet.has(Item)) {
          newSelection = selectedItems.filter(
            (selectedItem) => selectedItem !== Item
          );
        } else {
          if (selectedItems.length === SelectionLimit) {
            return;
          }
          newSelection = [...selectedItems.filter(
            (selectedItem) => !ItemContainsItem(Item, selectedItem)
          ), Item];
        }
      } else {
        newSelection = [Item];
      }
      executeCallback(
        'NestedListView callback "onSelectionChange"',
        onSelectionChange,
        newSelection
      );
    }
    const ExpansionMap = q(() => {
      const ExpansionMap2 = /* @__PURE__ */ new Map();
      if (expandedItems == null) {
        expandedItems = [];
      } else {
        expandedItems = expandedItems.filter((Item) => {
          if (ExpansionMap2.has(Item)) {
            return false;
          } else {
            ExpansionMap2.set(Item, "explicit");
            return true;
          }
        });
      }
      return ExpansionMap2;
    }, [expandedItems]);
    function toggleExpansionOf(Item) {
      if (ExpansionMap.has(Item)) {
        collapseItem(Item);
      } else {
        expandItem(Item);
      }
    }
    function expandItem(Item) {
      ExpansionMap.set(Item, "explicit");
      let newExpansion = [...expandedItems, Item];
      let Container = executedCallback(
        'NestedListView callback "ContainerOfListItem"',
        ContainerOfListItem,
        Item
      );
      while (Container != null) {
        if (!ExpansionMap.has(Container)) {
          ExpansionMap.set(Container, "explicit");
          newExpansion.push(Container);
        }
        Container = executedCallback(
          'NestedListView callback "ContainerOfListItem"',
          ContainerOfListItem,
          Container
        );
      }
      executeCallback(
        'NestedListView callback "onExpansionChange"',
        onExpansionChange,
        newExpansion
      );
    }
    function collapseItem(Item) {
      ExpansionMap.delete(Item);
      const newExpansion = expandedItems.filter(
        (expandedItem) => expandedItem !== Item
      );
      executeCallback(
        'NestedListView callback "onExpansionChange"',
        onExpansionChange,
        newExpansion
      );
    }
    function autoExpandItem(Item) {
      if (!ExpansionMap.has(Item)) {
        ExpansionMap.set(Item, "automatic");
      }
      let Container = executedCallback(
        'NestedListView callback "ContainerOfListItem"',
        ContainerOfListItem,
        Item
      );
      while (Container != null) {
        if (!ExpansionMap.has(Container)) {
          ExpansionMap.set(Container, "automatic");
        }
        Container = executedCallback(
          'NestedListView callback "ContainerOfListItem"',
          ContainerOfListItem,
          Container
        );
      }
    }
    function autoCollapseItem(Item) {
      if (ExpansionMap.get(Item) === "automatic") {
        ExpansionMap.delete(Item);
      }
      let Container = executedCallback(
        'NestedListView callback "ContainerOfListItem"',
        ContainerOfListItem,
        Item
      );
      while (Container != null) {
        if (ExpansionMap.get(Container) === "automatic") {
          ExpansionMap.delete(Container);
        }
        Container = executedCallback(
          'NestedListView callback "ContainerOfListItem"',
          ContainerOfListItem,
          Container
        );
      }
    }
    const ListItemWithKey = F(new Object(null));
    const DragAndDropState = F({
      dragging: false,
      DropTargetItem: void 0,
      DropMode: void 0,
      DropTargetTimer: void 0
    });
    function onDragStart(Event) {
      const ComponentKey = Event.target.getAttribute("data-key");
      const Item = ListItemWithKey.current[ComponentKey];
      if (Item == null) {
        return;
      }
      if (!SelectionSet.has(Item)) {
        changeSelection(Item, Event.shiftKey || Event.metaKey);
      }
      Event.dataTransfer.effectAllowed = "move";
      ListContext.State.dragging = true;
      ListContext.State.DropTargetItem = void 0;
      ListContext.State.DropTargetTimer = void 0;
      rerender();
    }
    function onDragEnter(Event) {
      const ComponentKey = Event.target.getAttribute("data-key");
      const Item = ListItemWithKey.current[ComponentKey];
      const { DropTargetItem } = ListContext.State;
      if (DropTargetItem === Item) {
        Event.preventDefault();
        handleDragOver(Event, Item);
      } else {
        if (DropTargetItem != null) {
          handleDragLeave(Event);
        }
        if (Item == null) {
          return;
        }
        if (!SelectionSet.has(Item) && !anyOuterItemIsSelected(Item)) {
          if (executedCallback(
            'NestedListView callback "ListItemMayAccept"',
            ListContext.ListItemMayAccept,
            Item,
            selectedItems
          ) != true) {
            return;
          }
          Event.preventDefault();
          handleDragEnter(Event, Item);
        }
      }
    }
    const onDragOver = onDragEnter;
    function onDragLeave(Event) {
      const ComponentKey = Event.target.getAttribute("data-key");
      const Item = ListItemWithKey.current[ComponentKey];
      const { DropTargetItem } = ListContext.State;
      if (DropTargetItem === Item || Item == null) {
        handleDragLeave(Event);
      }
    }
    function onDragEnd(Event) {
      onDragLeave(Event);
      ListContext.State.dragging = false;
      ListContext.State.DropMode = void 0;
      rerender();
    }
    function handleDragEnter(Event, Item) {
      const { DropTargetTimer } = ListContext.State;
      if (DropTargetTimer != null) {
        clearTimeout(DropTargetTimer);
        ListContext.State.DropTargetTimer = void 0;
      }
      ListContext.State.DropTargetItem = Item;
      ListContext.State.DropTargetTimer = setTimeout(() => {
        ListContext.State.DropTargetTimer = void 0;
        if (ListContext.State.DropMode === "after") {
          autoExpandItem(Item);
          rerender();
        }
      }, 2e3);
      let Container = executedCallback(
        'NestedListView callback "ContainerOfListItem"',
        ContainerOfListItem,
        Item
      );
      if (Container != null) {
        autoExpandItem(Container);
        rerender();
      }
      handleDragOver(Event, Item);
    }
    function handleDragOver(Event, Item) {
      const Limit = Event.target.getBoundingClientRect().top + Event.target.offsetHeight / 2;
      const DropMode = Event.clientY < Limit ? "before" : "after";
      if (ListContext.State.DropMode !== DropMode) {
        if (DropMode === "after" && ListContext.State.DropTargetTimer == null) {
          ListContext.State.DropTargetTimer = setTimeout(() => {
            ListContext.State.DropTargetTimer = void 0;
            if (ListContext.State.DropMode === "after") {
              autoExpandItem(Item);
              rerender();
            }
          }, 2e3);
        }
        ListContext.State.DropMode = DropMode;
        rerender();
      }
    }
    function handleDragLeave(Event) {
      const { DropTargetItem, DropTargetTimer } = ListContext.State;
      if (DropTargetTimer != null) {
        clearTimeout(DropTargetTimer);
        ListContext.State.DropTargetTimer = void 0;
      }
      if (DropTargetItem != null) {
        autoCollapseItem(DropTargetItem);
        ListContext.State.DropTargetItem = void 0;
      }
      setTimeout(rerender, 500);
    }
    function onDrop(Event) {
      let { DropTargetItem, DropMode } = ListContext.State;
      if (DropTargetItem != null) {
        executeCallback(
          'NestedListView callback "onListItemMove"',
          onListItemMove,
          selectedItems,
          DropTargetItem,
          DropMode
        );
        ListContext.State.dragging = false;
        ListContext.State.DropTargetItem = void 0;
        ListContext.State.DropMode = void 0;
      }
    }
    const [State, setState] = y({ Rendering: 0 });
    function rerender() {
      setState((oldState) => ({ Rendering: oldState.Rendering + 1 }));
    }
    const ListContext = {
      List,
      ListIsSortable,
      KeyOfListItem,
      ListItemRenderer,
      ContentOfListItem,
      ListIsSelectable,
      ListItemMayBeSelected,
      onListItemClick,
      SelectionSet,
      anyOuterItemIsSelected,
      changeSelection,
      ExpansionMap,
      ListItemMayBeExpanded,
      toggleExpansionOf,
      ListItemWithKey: ListItemWithKey.current,
      ListItemMayAccept,
      State: DragAndDropState.current,
      rerender
    };
    if (List.length === 0) {
      return m$1`<div class="sim-component nestedlistview placeholder ${Classes ?? ""}" ...${RestProps}>
          <div dangerouslySetInnerHTML=${{ __html: Placeholder ?? "(empty)" }}/>
        </>`;
    } else {
      const { dragging } = ListContext.State;
      return m$1`<div class="sim-component nestedlistview ${dragging ? "dragging" : ""}"
          onDragStart=${onDragStart} onDragEnter=${onDragEnter} onDragOver=${onDragOver}
          onDragLeave=${onDragLeave} onDragEnd=${onDragEnd} onDrop=${onDrop}
          ref=${animatedElement} ...${RestProps}
        >
          <${NLV_ListView} List=${List}
            ListContext=${ListContext} Rendering=${State.Rendering}
          />
        </>`;
    }
  });
}
installStylesheetFor("sim-component.nestedlistview", `
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
function NLV_ListView(PropSet) {
  const [animatedElement] = useAutoAnimate();
  const { List, ListContext, Rendering } = PropSet;
  if (List == null) {
    debugger;
  }
  return m$1`<div class="listview" ref=${animatedElement}>${List.map((ListItem) => m$1`<${NLV_ListItemView}
        ListItem=${ListItem} ListContext=${ListContext} Rendering=${Rendering}
      />`)}</>`;
}
function NLV_ListItemView(PropSet) {
  const [animatedElement] = useAutoAnimate();
  const { ListItem, ListContext, Rendering } = PropSet;
  const { KeyOfListItem, ContentOfListItem } = ListContext;
  const innerList = executedCallback(
    'NestedListView callback "ContentOfListItem"',
    ListContext.ContentOfListItem,
    ListItem
  );
  const ListItemIsPlain = innerList == null;
  const ListItemIsExpanded = ListContext.ExpansionMap.has(ListItem);
  const ListItemIsSelected = ListContext.SelectionSet.has(ListItem);
  const ListItemKey = executedCallback(
    'NestedListView callback "KeyOfListItem"',
    KeyOfListItem,
    ListItem
  );
  _(() => {
    ListContext.ListItemWithKey[ListItemKey] = ListItem;
  }, []);
  const onClick = (Event) => {
    Event.stopPropagation();
    executeCallback(
      'NestedListView callback "onListItemClick"',
      ListContext.onListItemClick,
      ListItem,
      Event
    );
    if (ListContext.anyOuterItemIsSelected(ListItem)) {
      return;
    }
    if (ListContext.ListIsSelectable) {
      if (executedCallback(
        'NestedListView callback "ListItemMayBeSelected"',
        ListContext.ListItemMayBeSelected,
        ListItem
      ) != true) {
        return;
      }
      const additively = Event.pointerType !== "mouse" || Event.ctrlKey || Event.metaKey;
      ListContext.changeSelection(ListItem, additively);
    }
  };
  const onExpansionClick = (Event) => {
    Event.stopPropagation();
    const innerList2 = executedCallback(
      'NestedListView callback "ContentOfListItem"',
      ContentOfListItem,
      ListItem
    );
    if (innerList2 == null) {
      return;
    }
    ListContext.toggleExpansionOf(ListItem);
    ListContext.rerender();
  };
  let ExpansionIcon = ListItemIsPlain ? "plain" : ListItemIsExpanded ? "expanded" : "collapsed";
  let mayBeExpanded = executedCallback(
    'NestedListView callback "ListItemMayBeExpanded"',
    ListContext.ListItemMayBeExpanded,
    ListItem
  );
  const ExpansionMarker = m$1`<div
      class="expansion-marker ${ExpansionIcon} ${mayBeExpanded ? "" : "disabled"}"
      onClick=${mayBeExpanded && onExpansionClick}
    />`;
  const Contents = !ListItemIsPlain && ListItemIsExpanded && !(ListContext.State.dragging && ListItemIsSelected) ? m$1`<${NLV_ListView} List=${innerList}
          ListContext=${ListContext} Rendering=${Rendering}
        />` : "";
  const { DropTargetItem, DropMode } = ListContext.State;
  const ListItemIsDropTarget = ListItem === DropTargetItem;
  const ListIsSortable = ListContext.ListIsSortable;
  return m$1`<div class=${"listitemview" + (ListItemIsSelected ? " selected" : "") + (ListItemIsDropTarget ? ` DropTarget ${DropMode}` : "")} ref=${animatedElement} key=${ListItemKey} data-key=${ListItemKey}
        draggable=${ListIsSortable} onClick=${onClick}
    > <div class="labelline">
        ${ExpansionMarker}
        <div class="labelview">${ListContext.ListItemRenderer(
    ListItem,
    ListItemIsSelected,
    ListItemIsPlain,
    ListItemIsExpanded,
    ListItemIsDropTarget ? DropMode : ""
  )}</>
      </>
      ${Contents}
    </>`;
}
function consumeEvent(Event, completely = false) {
  Event.stopPropagation();
  if (completely == true) {
    Event.preventDefault();
  }
}
const consumingEvent = consumeEvent;
function executeCallback(Description2, Callback, ...ArgList) {
  expectTextline("callback description", Description2);
  allowFunction("callback", Callback);
  if (Callback != null) {
    try {
      return Callback(...ArgList);
    } catch (Signal) {
      throwError(`CallbackFailure: ${Description2} failed with ${"" + Signal}`);
    }
  }
}
const executedCallback = executeCallback;
function deepCopyOf(Value) {
  if (Value === null || typeof Value !== "object") {
    return Value;
  }
  if (Array.isArray(Value)) {
    return Value.map(deepCopyOf);
  }
  const Copy = {};
  for (const Key in Value) {
    if (Value.hasOwnProperty(Key)) {
      Copy[Key] = deepCopyOf(Value[Key]);
    }
  }
  return Copy;
}
export {
  AccordionFold,
  Button,
  Checkbox,
  ColorInput,
  DateInput,
  DateTimeInput,
  Description,
  DropDown,
  Dummy,
  EMailAddressInput,
  FAIcon,
  FileInput,
  Fineprint,
  FlatListView,
  Gauge,
  HTMLView,
  Icon,
  ImageView,
  Label,
  MarkdownRenderer,
  MarkdownView,
  Marked2 as Marked,
  MonthInput,
  NestedListView,
  NumberInput,
  OperationWasConfirmed,
  Outline,
  PasswordInput,
  PhoneNumberInput,
  Progressbar,
  PseudoDropDown,
  PseudoFileInput,
  Radiobutton,
  SIM_DatePattern,
  SIM_DateRegExp,
  SIM_DateTimePattern,
  SIM_DateTimeRegExp,
  SIM_DefaultSandboxPermissions,
  SIM_ErrorIndicator,
  SIM_FAIconNames,
  SIM_ImageAlignments,
  SIM_ImageScalings,
  SIM_MonthPattern,
  SIM_MonthRegExp,
  SIM_ReferrerPolicies,
  SIM_TimePattern,
  SIM_TimeRegExp,
  SIM_WeekPattern,
  SIM_WeekRegExp,
  SIM_empty,
  SIM_multipleValues,
  SIM_noSelection,
  SIM_supportedHTMLFormats,
  SIM_supportedImageFormats,
  SIM_supportedMarkdownFormats,
  SIM_supportedTextFormats,
  SVGView,
  SearchInput,
  Slider,
  Spacer,
  Subtitle,
  TabStrip,
  TextInput,
  TextView,
  TextlineInput,
  TimeInput,
  Title,
  URLInput,
  ValueIsDate,
  ValueIsDateTime,
  ValueIsDimension,
  ValueIsGeometry,
  ValueIsHTMLFormat,
  ValueIsIdentifier,
  ValueIsImageFormat,
  ValueIsIndexPath,
  ValueIsLocation,
  ValueIsMIMEType,
  ValueIsMarkdownFormat,
  ValueIsMonth,
  ValueIsName,
  ValueIsPath,
  ValueIsPosition,
  ValueIsSize,
  ValueIsSpecial,
  ValueIsTextFormat,
  ValueIsTime,
  ValueIsWeek,
  WebView,
  WeekInput,
  _normalizedName,
  _normalizedPath,
  allowDimension,
  allowGeometry,
  allowIdentifier,
  allowLocation,
  allowName,
  allowPath,
  allowPosition,
  allowSize,
  allowedDimension,
  allowedGeometry,
  allowedIdentifier,
  allowedLocation,
  allowedName,
  allowedPath,
  allowedPosition,
  allowedSize,
  centered,
  consumeEvent,
  consumingEvent,
  deepCopyOf,
  executeCallback,
  executedCallback,
  expandingSpacer,
  expectDimension,
  expectGeometry,
  expectIdentifier,
  expectLocation,
  expectName,
  expectPath,
  expectPosition,
  expectSize,
  expectedDimension,
  expectedGeometry,
  expectedIdentifier,
  expectedLocation,
  expectedName,
  expectedPath,
  expectedPosition,
  expectedSize,
  fullsized,
  horizontal,
  horizontalSeparator,
  installStylesheetFor,
  mandatoryAttribute,
  mandatoryBoolean,
  mandatoryCardinal,
  mandatoryColor,
  mandatoryEMailAddress,
  mandatoryFunction,
  mandatoryInteger,
  mandatoryIntegerInRange,
  mandatoryNameOrIndex,
  mandatoryNumber,
  mandatoryNumberInRange,
  mandatoryOrdinal,
  mandatoryPath,
  mandatoryPhoneNumber,
  mandatoryString,
  mandatoryStringMatching,
  mandatoryText,
  mandatoryTextline,
  mandatoryURL,
  mandatoryValue,
  normalizedName,
  normalizedPath,
  optionalAttribute,
  optionalBoolean,
  optionalCardinal,
  optionalColor,
  optionalEMailAddress,
  optionalFunction,
  optionalInteger,
  optionalIntegerInRange,
  optionalNameOrIndex,
  optionalNumber,
  optionalNumberInRange,
  optionalOrdinal,
  optionalPath,
  optionalPhoneNumber,
  optionalString,
  optionalStringMatching,
  optionalText,
  optionalTextline,
  optionalURL,
  optionalValue,
  parsedProp,
  parsedPropSet,
  safelyRendered,
  selective,
  stacked,
  tabular,
  throwError,
  throwReadOnlyError,
  uninstallStylesheetFor,
  useClickDragging,
  useConfiguration,
  useDragging,
  useOnlineStatus,
  useRerenderer,
  useWindowSize,
  vertical,
  verticalSeparator
};
