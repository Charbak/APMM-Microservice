/*
 AngularJS v1.7.4
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(B) {
'use strict';
function oe(a) {
  if (F(a))
    v(a.objectMaxDepth) &&
        (Vb.objectMaxDepth = Wb(a.objectMaxDepth) ? a.objectMaxDepth : NaN),
        v(a.urlErrorParamsEnabled) && Fa(a.urlErrorParamsEnabled) &&
        (Vb.urlErrorParamsEnabled = a.urlErrorParamsEnabled);
  else
    return Vb
}
function Wb(a) {
  return ba(a) && 0 < a
}
function M(a, b) {
  b = b || Error;
  return function() {
    var d = arguments[0], c;
    c = '[' + (a ? a + ':' : '') + d + '] http://errors.angularjs.org/1.7.4/' +
        (a ? a + '/' : '') + d;
    for (d = 1; d < arguments.length; d++) {
      c = c + (1 == d ? '?' : '&') + 'p' + (d - 1) + '=';
      var e = encodeURIComponent, f;
      f = arguments[d];
      f = 'function' == typeof f ? f.toString().replace(/ \{[\s\S]*$/, '') :
                                   'undefined' == typeof f ?
                                   'undefined' :
                                   'string' != typeof f ? JSON.stringify(f) : f;
      c += e(f)
    }
    return new b(c)
  }
}
function xa(a) {
  if (null == a || $a(a)) return !1;
  if (I(a) || A(a) || y && a instanceof y) return !0;
  var b = 'length' in Object(a) && a.length;
  return ba(b) && (0 <= b && b - 1 in a || 'function' === typeof a.item)
}
function r(a, b, d) {
  var c, e;
  if (a)
    if (z(a))
      for (c in a)
        'prototype' !== c && 'length' !== c && 'name' !== c &&
            a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    else if (I(a) || xa(a)) {
      var f = 'object' !== typeof a;
      c = 0;
      for (e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a)
    } else if (a.forEach && a.forEach !== r)
      a.forEach(b, d, a);
    else if (Mc(a))
      for (c in a) b.call(d, a[c], c, a);
    else if ('function' === typeof a.hasOwnProperty)
      for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    else
      for (c in a) sa.call(a, c) && b.call(d, a[c], c, a);
  return a
}
function Nc(a, b, d) {
  for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)
    b.call(d, a[c[e]], c[e]);
  return c
}
function Xb(a) {
  return function(b, d) {
    a(d, b)
  }
}
function pe() {
  return ++pb
}
function Yb(a, b, d) {
  for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
    var g = b[e];
    if (F(g) || z(g))
      for (var k = Object.keys(g), h = 0, l = k.length; h < l; h++) {
        var m = k[h], q = g[m];
        d && F(q) ? ha(q) ? a[m] = new Date(q.valueOf()) :
                            ab(q) ? a[m] = new RegExp(q) :
                                    q.nodeName ?
                                    a[m] = q.cloneNode(!0) :
                                    Zb(q) ? a[m] = q.clone() :
                                            (F(a[m]) || (a[m] = I(q) ? [] : {}),
                                             Yb(a[m], [q], !0)) :
                    a[m] = q
      }
  }
  c ? a.$$hashKey = c : delete a.$$hashKey;
  return a
}
function R(a) {
  return Yb(a, Ga.call(arguments, 1), !1)
}
function qe(a) {
  return Yb(a, Ga.call(arguments, 1), !0)
}
function da(a) {
  return parseInt(a, 10)
}
function $b(a, b) {
  return R(Object.create(a), b)
}
function C() {}
function Ta(a) {
  return a
}
function ia(a) {
  return function() {
    return a
  }
}
function ac(a) {
  return z(a.toString) && a.toString !== ma
}
function x(a) {
  return 'undefined' === typeof a
}
function v(a) {
  return 'undefined' !== typeof a
}
function F(a) {
  return null !== a && 'object' === typeof a
}
function Mc(a) {
  return null !== a && 'object' === typeof a && !Oc(a)
}
function A(a) {
  return 'string' === typeof a
}
function ba(a) {
  return 'number' === typeof a
}
function ha(a) {
  return '[object Date]' === ma.call(a)
}
function I(a) {
  return Array.isArray(a) || a instanceof Array
}
function bc(a) {
  switch (ma.call(a)) {
    case '[object Error]':
      return !0;
    case '[object Exception]':
      return !0;
    case '[object DOMException]':
      return !0;
    default:
      return a instanceof Error
  }
}
function z(a) {
  return 'function' === typeof a
}
function ab(a) {
  return '[object RegExp]' === ma.call(a)
}
function $a(a) {
  return a && a.window === a
}
function bb(a) {
  return a && a.$evalAsync && a.$watch
}
function Fa(a) {
  return 'boolean' === typeof a
}
function re(a) {
  return a && ba(a.length) && se.test(ma.call(a))
}
function Zb(a) {
  return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
}
function te(a) {
  var b = {};
  a = a.split(',');
  var d;
  for (d = 0; d < a.length; d++) b[a[d]] = !0;
  return b
}
function ta(a) {
  return O(a.nodeName || a[0] && a[0].nodeName)
}
function cb(a, b) {
  var d = a.indexOf(b);
  0 <= d && a.splice(d, 1);
  return d
}
function Ha(a, b, d) {
  function c(a, b, c) {
    c--;
    if (0 > c) return '...';
    var d = b.$$hashKey, f;
    if (I(a)) {
      f = 0;
      for (var g = a.length; f < g; f++) b.push(e(a[f], c))
    } else if (Mc(a))
      for (f in a) b[f] = e(a[f], c);
    else if (a && 'function' === typeof a.hasOwnProperty)
      for (f in a) a.hasOwnProperty(f) && (b[f] = e(a[f], c));
    else
      for (f in a) sa.call(a, f) && (b[f] = e(a[f], c));
    d ? b.$$hashKey = d : delete b.$$hashKey;
    return b
  }
  function e(a, b) {
    if (!F(a)) return a;
    var d = g.indexOf(a);
    if (-1 !== d) return k[d];
    if ($a(a) || bb(a)) throw Ia('cpws');
    var d = !1, e = f(a);
    void 0 === e && (e = I(a) ? [] : Object.create(Oc(a)), d = !0);
    g.push(a);
    k.push(e);
    return d ? c(a, e, b) : e
  }
  function f(a) {
    switch (ma.call(a)) {
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object Int32Array]':
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Uint16Array]':
      case '[object Uint32Array]':
        return new a.constructor(e(a.buffer), a.byteOffset, a.length);
      case '[object ArrayBuffer]':
        if (!a.slice) {
          var b = new ArrayBuffer(a.byteLength);
          (new Uint8Array(b)).set(new Uint8Array(a));
          return b
        }
        return a.slice(0);
      case '[object Boolean]':
      case '[object Number]':
      case '[object String]':
      case '[object Date]':
        return new a.constructor(a.valueOf());
      case '[object RegExp]':
        return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]),
               b.lastIndex = a.lastIndex, b;
      case '[object Blob]':
        return new a.constructor([a], {type: a.type})
    }
    if (z(a.cloneNode)) return a.cloneNode(!0)
  }
  var g = [], k = [];
  d = Wb(d) ? d : NaN;
  if (b) {
    if (re(b) || '[object ArrayBuffer]' === ma.call(b)) throw Ia('cpta');
    if (a === b) throw Ia('cpi');
    I(b) ? b.length = 0 : r(b, function(a, c) {
      '$$hashKey' !== c && delete b[c]
    });
    g.push(a);
    k.push(b);
    return c(a, b, d)
  }
  return e(a, d)
}
function cc(a, b) {
  return a === b || a !== a && b !== b
}
function ua(a, b) {
  if (a === b) return !0;
  if (null === a || null === b) return !1;
  if (a !== a && b !== b) return !0;
  var d = typeof a, c;
  if (d === typeof b && 'object' === d)
    if (I(a)) {
      if (!I(b)) return !1;
      if ((d = a.length) === b.length) {
        for (c = 0; c < d; c++)
          if (!ua(a[c], b[c])) return !1;
        return !0
      }
    } else {
      if (ha(a)) return ha(b) ? cc(a.getTime(), b.getTime()) : !1;
      if (ab(a)) return ab(b) ? a.toString() === b.toString() : !1;
      if (bb(a) || bb(b) || $a(a) || $a(b) || I(b) || ha(b) || ab(b)) return !1;
      d = S();
      for (c in a)
        if ('$' !== c.charAt(0) && !z(a[c])) {
          if (!ua(a[c], b[c])) return !1;
          d[c] = !0
        }
      for (c in b)
        if (!(c in d) && '$' !== c.charAt(0) && v(b[c]) && !z(b[c])) return !1;
      return !0
    }
  return !1
}
function db(a, b, d) {
  return a.concat(Ga.call(b, d))
}
function Va(a, b) {
  var d = 2 < arguments.length ? Ga.call(arguments, 2) : [];
  return !z(b) || b instanceof RegExp ? b : d.length ? function() {
    return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d)
  } : function() {
    return arguments.length ? b.apply(a, arguments) : b.call(a)
  }
}
function Pc(a, b) {
  var d = b;
  'string' === typeof a && '$' === a.charAt(0) && '$' === a.charAt(1) ?
      d = void 0 :
      $a(b) ? d = '$WINDOW' :
              b&& B.document === b ? d = '$DOCUMENT' : bb(b) && (d = '$SCOPE');
  return d
}
function eb(a, b) {
  if (!x(a)) return ba(b) || (b = b ? 2 : null), JSON.stringify(a, Pc, b)
}
function Qc(a) {
  return A(a) ? JSON.parse(a) : a
}
function dc(a, b) {
  a = a.replace(ue, '');
  var d = Date.parse('Jan 01, 1970 00:00:00 ' + a) / 6E4;
  return V(d) ? b : d
}
function Rc(a, b) {
  a = new Date(a.getTime());
  a.setMinutes(a.getMinutes() + b);
  return a
}
function ec(a, b, d) {
  d = d ? -1 : 1;
  var c = a.getTimezoneOffset();
  b = dc(b, c);
  return Rc(a, d * (b - c))
}
function ya(a) {
  a = y(a).clone().empty();
  var b = y('<div></div>').append(a).html();
  try {
    return a[0].nodeType === Oa ?
        O(b) :
        b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(a, b) {
          return '<' + O(b)
        })
  } catch (d) {
    return O(b)
  }
}
function Sc(a) {
  try {
    return decodeURIComponent(a)
  } catch (b) {
  }
}
function fc(a) {
  var b = {};
  r((a || '').split('&'), function(a) {
    var c, e, f;
    a &&
        (e = a = a.replace(/\+/g, '%20'), c = a.indexOf('='),
         -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Sc(e),
         v(e) &&
             (f = v(f) ? Sc(f) : !0,
              sa.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [b[e], f] :
                              b[e] = f))
  });
  return b
}
function ve(a) {
  var b = [];
  r(a, function(a, c) {
    I(a) ? r(a, function(a) {
      b.push(ca(c, !0) + (!0 === a ? '' : '=' + ca(a, !0)))
    }) : b.push(ca(c, !0) + (!0 === a ? '' : '=' + ca(a, !0)))
  });
  return b.length ? b.join('&') : ''
}
function gc(a) {
  return ca(a, !0)
      .replace(/%26/gi, '&')
      .replace(/%3D/gi, '=')
      .replace(/%2B/gi, '+')
}
function ca(a, b) {
  return encodeURIComponent(a)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%3B/gi, ';')
      .replace(/%20/g, b ? '%20' : '+')
}
function we(a, b) {
  var d, c, e = Pa.length;
  for (c = 0; c < e; ++c)
    if (d = Pa[c] + b, A(d = a.getAttribute(d))) return d;
  return null
}
function xe(a, b) {
  var d, c, e = {};
  r(Pa, function(b) {
    b += 'app';
    !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
  });
  r(Pa, function(b) {
    b += 'app';
    var e;
    !d && (e = a.querySelector('[' + b.replace(':', '\\:') + ']')) &&
        (d = e, c = e.getAttribute(b))
  });
  if (d)
    if (ye)
      e.strictDi = null !== we(d, 'strict-di'), b(d, c ? [c] : [], e);
    else
      try {
        B.console.error(
            'AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.')
      } catch (f) {
      }
}
function Tc(a, b, d) {
  F(d) || (d = {});
  d = R({strictDi: !1}, d);
  var c = function() {
    a = y(a);
    if (a.injector()) {
      var c = a[0] === B.document ? 'document' : ya(a);
      throw Ia('btstrpd', c.replace(/</, '&lt;').replace(/>/, '&gt;'));
    }
    b = b || [];
    b.unshift([
      '$provide',
      function(b) {
        b.value('$rootElement', a)
      }
    ]);
    d.debugInfoEnabled && b.push([
      '$compileProvider',
      function(a) {
        a.debugInfoEnabled(!0)
      }
    ]);
    b.unshift('ng');
    c = fb(b, d.strictDi);
    c.invoke([
      '$rootScope', '$rootElement', '$compile', '$injector',
      function(a, b, c, d) {
        a.$apply(function() {
          b.data('$injector', d);
          c(b)(a)
        })
      }
    ]);
    return c
  }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
  B && e.test(B.name) &&
      (d.debugInfoEnabled = !0, B.name = B.name.replace(e, ''));
  if (B && !f.test(B.name)) return c();
  B.name = B.name.replace(f, '');
  ea.resumeBootstrap = function(a) {
    r(a, function(a) {
      b.push(a)
    });
    return c()
  };
  z(ea.resumeDeferredBootstrap) && ea.resumeDeferredBootstrap()
}
function ze() {
  B.name = 'NG_ENABLE_DEBUG_INFO!' + B.name;
  B.location.reload()
}
function Ae(a) {
  a = ea.element(a).injector();
  if (!a) throw Ia('test');
  return a.get('$$testability')
}
function Uc(a, b) {
  b = b || '_';
  return a.replace(Be, function(a, c) {
    return (c ? b : '') + a.toLowerCase()
  })
}
function Ce() {
  var a;
  if (!Vc) {
    var b = qb();
    (rb = x(b) ? B.jQuery : b ? B[b] : void 0) && rb.fn.on ?
        (y = rb, R(rb.fn, {
           scope: Wa.scope,
           isolateScope: Wa.isolateScope,
           controller: Wa.controller,
           injector: Wa.injector,
           inheritedData: Wa.inheritedData
         })) :
        y = W;
    a = y.cleanData;
    y.cleanData = function(b) {
      for (var c, e = 0, f; null != (f = b[e]); e++)
        (c = (y._data(f) || {}).events) && c.$destroy &&
            y(f).triggerHandler('$destroy');
      a(b)
    };
    ea.element = y;
    Vc = !0
  }
}
function gb(a, b, d) {
  if (!a) throw Ia('areq', b || '?', d || 'required');
  return a
}
function sb(a, b, d) {
  d && I(a) && (a = a[a.length - 1]);
  gb(z(a), b,
     'not a function, got ' +
         (a && 'object' === typeof a ? a.constructor.name || 'Object' :
                                       typeof a));
  return a
}
function Qa(a, b) {
  if ('hasOwnProperty' === a) throw Ia('badname', b);
}
function De(a, b, d) {
  if (!b) return a;
  b = b.split('.');
  for (var c, e = a, f = b.length, g = 0; g < f; g++)
    c = b[g], a && (a = (e = a)[c]);
  return !d && z(a) ? Va(e, a) : a
}
function tb(a) {
  for (var b = a[0], d = a[a.length - 1], c, e = 1;
       b !== d && (b = b.nextSibling); e++)
    if (c || a[e] !== b) c || (c = y(Ga.call(a, 0, e))), c.push(b);
  return c || a
}
function S() {
  return Object.create(null)
}
function hc(a) {
  if (null == a) return '';
  switch (typeof a) {
    case 'string':
      break;
    case 'number':
      a = '' + a;
      break;
    default:
      a = !ac(a) || I(a) || ha(a) ? eb(a) : a.toString()
  }
  return a
}
function Ee(a) {
  function b(a, b, c) {
    return a[b] || (a[b] = c())
  }
  var d = M('$injector'), c = M('ng');
  a = b(a, 'angular', Object);
  a.$$minErr = a.$$minErr || M;
  return b(a, 'module', function() {
    var a = {};
    return function(f, g, k) {
      var h = {};
      if ('hasOwnProperty' === f) throw c('badname', 'module');
      g && a.hasOwnProperty(f) && (a[f] = null);
      return b(a, f, function() {
        function a(b, c, d, f) {
          f || (f = e);
          return function() {
            f[d || 'push']([b, c, arguments]);
            return u
          }
        }
        function b(a, c, d) {
          d || (d = e);
          return function(b, e) {
            e && z(e) && (e.$$moduleName = f);
            d.push([a, c, arguments]);
            return u
          }
        }
        if (!g) throw d('nomod', f);
        var e = [], n = [], s = [], t = a('$injector', 'invoke', 'push', n),
            u = {
              _invokeQueue: e,
              _configBlocks: n,
              _runBlocks: s,
              info: function(a) {
                if (v(a)) {
                  if (!F(a)) throw c('aobj', 'value');
                  h = a;
                  return this
                }
                return h
              },
              requires: g,
              name: f,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: a('$provide', 'value'),
              constant: a('$provide', 'constant', 'unshift'),
              decorator: b('$provide', 'decorator', n),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              component: b('$compileProvider', 'component'),
              config: t,
              run: function(a) {
                s.push(a);
                return this
              }
            };
        k && t(k);
        return u
      })
    }
  })
}
function oa(a, b) {
  if (I(a)) {
    b = b || [];
    for (var d = 0, c = a.length; d < c; d++) b[d] = a[d]
  } else if (F(a))
    for (d in b = b || {}, a)
      if ('$' !== d.charAt(0) || '$' !== d.charAt(1)) b[d] = a[d];
  return b || a
}
function Fe(a, b) {
  var d = [];
  Wb(b) && (a = ea.copy(a, null, b));
  return JSON.stringify(a, function(a, b) {
    b = Pc(a, b);
    if (F(b)) {
      if (0 <= d.indexOf(b)) return '...';
      d.push(b)
    }
    return b
  })
}
function Ge(a) {
  R(a, {
    errorHandlingConfig: oe,
    bootstrap: Tc,
    copy: Ha,
    extend: R,
    merge: qe,
    equals: ua,
    element: y,
    forEach: r,
    injector: fb,
    noop: C,
    bind: Va,
    toJson: eb,
    fromJson: Qc,
    identity: Ta,
    isUndefined: x,
    isDefined: v,
    isString: A,
    isFunction: z,
    isObject: F,
    isNumber: ba,
    isElement: Zb,
    isArray: I,
    version: He,
    isDate: ha,
    callbacks: {$$counter: 0},
    getTestability: Ae,
    reloadWithDebugInfo: ze,
    $$minErr: M,
    $$csp: pa,
    $$encodeUriSegment: gc,
    $$encodeUriQuery: ca,
    $$lowercase: O,
    $$stringify: hc,
    $$uppercase: ub
  });
  jc = Ee(B);
  jc('ng', ['ngLocale'], [
    '$provide',
    function(a) {
      a.provider({$$sanitizeUri: Ie});
      a.provider('$compile', Wc)
          .directive({
            a: Je,
            input: Xc,
            textarea: Xc,
            form: Ke,
            script: Le,
            select: Me,
            option: Ne,
            ngBind: Oe,
            ngBindHtml: Pe,
            ngBindTemplate: Qe,
            ngClass: Re,
            ngClassEven: Se,
            ngClassOdd: Te,
            ngCloak: Ue,
            ngController: Ve,
            ngForm: We,
            ngHide: Xe,
            ngIf: Ye,
            ngInclude: Ze,
            ngInit: $e,
            ngNonBindable: af,
            ngPluralize: bf,
            ngRef: cf,
            ngRepeat: df,
            ngShow: ef,
            ngStyle: ff,
            ngSwitch: gf,
            ngSwitchWhen: hf,
            ngSwitchDefault: jf,
            ngOptions: kf,
            ngTransclude: lf,
            ngModel: mf,
            ngList: nf,
            ngChange: of,
            pattern: Yc,
            ngPattern: Yc,
            required: Zc,
            ngRequired: Zc,
            minlength: $c,
            ngMinlength: $c,
            maxlength: ad,
            ngMaxlength: ad,
            ngValue: pf,
            ngModelOptions: qf
          })
          .directive({ngInclude: rf})
          .directive(vb)
          .directive(bd);
      a.provider({
        $anchorScroll: sf,
        $animate: tf,
        $animateCss: uf,
        $$animateJs: vf,
        $$animateQueue: wf,
        $$AnimateRunner: xf,
        $$animateAsyncRun: yf,
        $browser: zf,
        $cacheFactory: Af,
        $controller: Bf,
        $document: Cf,
        $$isDocumentHidden: Df,
        $exceptionHandler: Ef,
        $filter: cd,
        $$forceReflow: Ff,
        $interpolate: Gf,
        $interval: Hf,
        $$intervalFactory: If,
        $http: Jf,
        $httpParamSerializer: Kf,
        $httpParamSerializerJQLike: Lf,
        $httpBackend: Mf,
        $xhrFactory: Nf,
        $jsonpCallbacks: Of,
        $location: Pf,
        $log: Qf,
        $parse: Rf,
        $rootScope: Sf,
        $q: Tf,
        $$q: Uf,
        $sce: Vf,
        $sceDelegate: Wf,
        $sniffer: Xf,
        $$taskTrackerFactory: Yf,
        $templateCache: Zf,
        $templateRequest: $f,
        $$testability: ag,
        $timeout: bg,
        $window: cg,
        $$rAF: dg,
        $$jqLite: eg,
        $$Map: fg,
        $$cookieReader: gg
      })
    }
  ]).info({angularVersion: '1.7.4'})
}
function wb(a, b) {
  return b.toUpperCase()
}
function xb(a) {
  return a.replace(hg, wb)
}
function kc(a) {
  a = a.nodeType;
  return 1 === a || !a || 9 === a
}
function dd(a, b) {
  var d, c, e = b.createDocumentFragment(), f = [];
  if (lc.test(a)) {
    d = e.appendChild(b.createElement('div'));
    c = (ig.exec(a) || ['', ''])[1].toLowerCase();
    c = ja[c] || ja._default;
    d.innerHTML = c[1] + a.replace(jg, '<$1></$2>') + c[2];
    for (c = c[0]; c--;) d = d.lastChild;
    f = db(f, d.childNodes);
    d = e.firstChild;
    d.textContent = ''
  } else
    f.push(b.createTextNode(a));
  e.textContent = '';
  e.innerHTML = '';
  r(f, function(a) {
    e.appendChild(a)
  });
  return e
}
function W(a) {
  if (a instanceof W) return a;
  var b;
  A(a) && (a = T(a), b = !0);
  if (!(this instanceof W)) {
    if (b && '<' !== a.charAt(0)) throw mc('nosel');
    return new W(a)
  }
  if (b) {
    b = B.document;
    var d;
    a = (d = kg.exec(a)) ? [b.createElement(d[1])] :
                           (d = dd(a, b)) ? d.childNodes : [];
    nc(this, a)
  } else
    z(a) ? ed(a) : nc(this, a)
}
function oc(a) {
  return a.cloneNode(!0)
}
function yb(a, b) {
  !b && kc(a) && y.cleanData([a]);
  a.querySelectorAll && y.cleanData(a.querySelectorAll('*'))
}
function fd(a) {
  for (var b in a) return !1;
  return !0
}
function gd(a) {
  var b = a.ng339, d = b && Ja[b], c = d && d.events, d = d && d.data;
  d && !fd(d) || c && !fd(c) || (delete Ja[b], a.ng339 = void 0)
}
function hd(a, b, d, c) {
  if (v(c)) throw mc('offargs');
  var e = (c = zb(a)) && c.events, f = c && c.handle;
  if (f) {
    if (b) {
      var g = function(b) {
        var c = e[b];
        v(d) && cb(c || [], d);
        v(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b])
      };
      r(b.split(' '), function(a) {
        g(a);
        Ab[a] && g(Ab[a])
      })
    } else
      for (b in e) '$destroy' !== b && a.removeEventListener(b, f), delete e[b];
    gd(a)
  }
}
function pc(a, b) {
  var d = a.ng339;
  if (d = d && Ja[d]) b ? delete d.data[b] : d.data = {}, gd(a)
}
function zb(a, b) {
  var d = a.ng339, d = d && Ja[d];
  b && !d &&
      (a.ng339 = d = ++lg, d = Ja[d] = {events: {}, data: {}, handle: void 0});
  return d
}
function qc(a, b, d) {
  if (kc(a)) {
    var c, e = v(d), f = !e && b && !F(b), g = !b;
    a = (a = zb(a, !f)) && a.data;
    if (e)
      a[xb(b)] = d;
    else {
      if (g) return a;
      if (f) return a && a[xb(b)];
      for (c in b) a[xb(c)] = b[c]
    }
  }
}
function Bb(a, b) {
  return a.getAttribute ? -1 < (' ' + (a.getAttribute('class') || '') + ' ')
                                   .replace(/[\n\t]/g, ' ')
                                   .indexOf(' ' + b + ' ') :
                          !1
}
function Cb(a, b) {
  if (b && a.setAttribute) {
    var d = (' ' + (a.getAttribute('class') || '') + ' ')
                .replace(/[\n\t]/g, ' '),
        c = d;
    r(b.split(' '), function(a) {
      a = T(a);
      c = c.replace(' ' + a + ' ', ' ')
    });
    c !== d && a.setAttribute('class', T(c))
  }
}
function Db(a, b) {
  if (b && a.setAttribute) {
    var d = (' ' + (a.getAttribute('class') || '') + ' ')
                .replace(/[\n\t]/g, ' '),
        c = d;
    r(b.split(' '), function(a) {
      a = T(a);
      -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ')
    });
    c !== d && a.setAttribute('class', T(c))
  }
}
function nc(a, b) {
  if (b)
    if (b.nodeType)
      a[a.length++] = b;
    else {
      var d = b.length;
      if ('number' === typeof d && b.window !== b) {
        if (d)
          for (var c = 0; c < d; c++) a[a.length++] = b[c]
      } else
        a[a.length++] = b
    }
}
function id(a, b) {
  return Eb(a, '$' + (b || 'ngController') + 'Controller')
}
function Eb(a, b, d) {
  9 === a.nodeType && (a = a.documentElement);
  for (b = I(b) ? b : [b]; a;) {
    for (var c = 0, e = b.length; c < e; c++)
      if (v(d = y.data(a, b[c]))) return d;
    a = a.parentNode || 11 === a.nodeType && a.host
  }
}
function jd(a) {
  for (yb(a, !0); a.firstChild;) a.removeChild(a.firstChild)
}
function Fb(a, b) {
  b || yb(a);
  var d = a.parentNode;
  d && d.removeChild(a)
}
function mg(a, b) {
  b = b || B;
  if ('complete' === b.document.readyState)
    b.setTimeout(a);
  else
    y(b).on('load', a)
}
function ed(a) {
  function b() {
    B.document.removeEventListener('DOMContentLoaded', b);
    B.removeEventListener('load', b);
    a()
  }
  'complete' === B.document.readyState ?
      B.setTimeout(a) :
      (B.document.addEventListener('DOMContentLoaded', b),
       B.addEventListener('load', b))
}
function kd(a, b) {
  var d = Gb[b.toLowerCase()];
  return d && ld[ta(a)] && d
}
function ng(a, b) {
  var d = function(c, d) {
    c.isDefaultPrevented = function() {
      return c.defaultPrevented
    };
    var f = b[d || c.type], g = f ? f.length : 0;
    if (g) {
      if (x(c.immediatePropagationStopped)) {
        var k = c.stopImmediatePropagation;
        c.stopImmediatePropagation = function() {
          c.immediatePropagationStopped = !0;
          c.stopPropagation && c.stopPropagation();
          k && k.call(c)
        }
      }
      c.isImmediatePropagationStopped = function() {
        return !0 === c.immediatePropagationStopped
      };
      var h = f.specialHandlerWrapper || og;
      1 < g && (f = oa(f));
      for (var l = 0; l < g; l++)
        c.isImmediatePropagationStopped() || h(a, c, f[l])
    }
  };
  d.elem = a;
  return d
}
function og(a, b, d) {
  d.call(a, b)
}
function pg(a, b, d) {
  var c = b.relatedTarget;
  c && (c === a || qg.call(a, c)) || d.call(a, b)
}
function eg() {
  this.$get = function() {
    return R(W, {
      hasClass: function(a, b) {
        a.attr && (a = a[0]);
        return Bb(a, b)
      },
      addClass: function(a, b) {
        a.attr && (a = a[0]);
        return Db(a, b)
      },
      removeClass: function(a, b) {
        a.attr && (a = a[0]);
        return Cb(a, b)
      }
    })
  }
}
function Ka(a, b) {
  var d = a && a.$$hashKey;
  if (d) return 'function' === typeof d && (d = a.$$hashKey()), d;
  d = typeof a;
  return d = 'function' === d || 'object' === d && null !== a ?
      a.$$hashKey = d + ':' + (b || pe)() :
      d + ':' + a
}
function md() {
  this._keys = [];
  this._values = [];
  this._lastKey = NaN;
  this._lastIndex = -1
}
function nd(a) {
  a = Function.prototype.toString.call(a).replace(rg, '');
  return a.match(sg) || a.match(tg)
}
function ug(a) {
  return (a = nd(a)) ?
      'function(' + (a[1] || '').replace(/[\s\r\n]+/, ' ') + ')' :
      'fn'
}
function fb(a, b) {
  function d(a) {
    return function(b, c) {
      if (F(b))
        r(b, Xb(a));
      else
        return a(b, c)
    }
  }
  function c(a, b) {
    Qa(a, 'service');
    if (z(b) || I(b)) b = n.instantiate(b);
    if (!b.$get) throw za('pget', a);
    return q[a + 'Provider'] = b
  }
  function e(a, b) {
    return function() {
      var c = u.invoke(b, this);
      if (x(c)) throw za('undef', a);
      return c
    }
  }
  function f(a, b, d) {
    return c(a, {$get: !1 !== d ? e(a, b) : b})
  }
  function g(a) {
    gb(x(a) || I(a), 'modulesToLoad', 'not an array');
    var b = [], c;
    r(a, function(a) {
      function d(a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++) {
          var e = a[b], f = n.get(e[0]);
          f[e[1]].apply(f, e[2])
        }
      }
      if (!m.get(a)) {
        m.set(a, !0);
        try {
          A(a) ? (c = jc(a), u.modules[a] = c,
                  b = b.concat(g(c.requires)).concat(c._runBlocks),
                  d(c._invokeQueue), d(c._configBlocks)) :
                 z(a) ? b.push(n.invoke(a)) :
                        I(a) ? b.push(n.invoke(a)) : sb(a, 'module')
        } catch (e) {
          throw I(a) && (a = a[a.length - 1]),
              e.message && e.stack && -1 === e.stack.indexOf(e.message) &&
              (e = e.message + '\n' + e.stack),
              za('modulerr', a, e.stack || e.message || e);
        }
      }
    });
    return b
  }
  function k(a, c) {
    function d(b, e) {
      if (a.hasOwnProperty(b)) {
        if (a[b] === h) throw za('cdep', b + ' <- ' + l.join(' <- '));
        return a[b]
      }
      try {
        return l.unshift(b), a[b] = h, a[b] = c(b, e), a[b]
      } catch (f) {
        throw a[b] === h && delete a[b], f;
      } finally {
        l.shift()
      }
    }
    function e(a, c, f) {
      var g = [];
      a = fb.$$annotate(a, b, f);
      for (var h = 0, k = a.length; h < k; h++) {
        var l = a[h];
        if ('string' !== typeof l) throw za('itkn', l);
        g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f))
      }
      return g
    }
    return {
      invoke: function(a, b, c, d) {
        'string' === typeof c && (d = c, c = null);
        c = e(a, c, d);
        I(a) && (a = a[a.length - 1]);
        d = a;
        if (Aa || 'function' !== typeof d)
          d = !1;
        else {
          var f = d.$$ngIsClass;
          Fa(f) ||
              (f = d.$$ngIsClass =
                   /^class\b/.test(Function.prototype.toString.call(d)));
          d = f
        }
        return d ?
            (c.unshift(null), new (Function.prototype.bind.apply(a, c))) :
            a.apply(b, c)
      }, instantiate: function(a, b, c) {
        var d = I(a) ? a[a.length - 1] : a;
        a = e(a, b, c);
        a.unshift(null);
        return new (Function.prototype.bind.apply(d, a))
      }, get: d, annotate: fb.$$annotate, has: function(b) {
        return q.hasOwnProperty(b + 'Provider') || a.hasOwnProperty(b)
      }
    }
  }
  b = !0 === b;
  var h = {}, l = [], m = new Hb, q = {
    $provide: {
      provider: d(c),
      factory: d(f),
      service: d(function(a, b) {
        return f(a, [
          '$injector',
          function(a) {
            return a.instantiate(b)
          }
        ])
      }),
      value: d(function(a, b) {
        return f(a, ia(b), !1)
      }),
      constant: d(function(a, b) {
        Qa(a, 'constant');
        q[a] = b;
        s[a] = b
      }),
      decorator: function(a, b) {
        var c = n.get(a + 'Provider'), d = c.$get;
        c.$get = function() {
          var a = u.invoke(d, c);
          return u.invoke(b, null, {$delegate: a})
        }
      }
    }
  },
      n = q.$injector = k(q, function(a, b) {
        ea.isString(b) && l.push(b);
        throw za('unpr', l.join(' <- '));
      }), s = {}, t = k(s, function(a, b) {
                    var c = n.get(a + 'Provider', b);
                    return u.invoke(c.$get, c, void 0, a)
                  }), u = t;
  q.$injectorProvider = {$get: ia(t)};
  u.modules = n.modules = S();
  var D = g(a), u = t.get('$injector');
  u.strictDi = b;
  r(D, function(a) {
    a && u.invoke(a)
  });
  u.loadNewModules = function(a) {
    r(g(a), function(a) {
      a && u.invoke(a)
    })
  };
  return u
}
function sf() {
  var a = !0;
  this.disableAutoScrolling = function() {
    a = !1
  };
  this.$get = [
    '$window', '$location', '$rootScope',
    function(b, d, c) {
      function e(a) {
        var b = null;
        Array.prototype.some.call(a, function(a) {
          if ('a' === ta(a)) return b = a, !0
        });
        return b
      }
      function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;
          c = g.yOffset;
          z(c) ? c = c() :
                 Zb(c) ? (c = c[0],
                          c = 'fixed' !== b.getComputedStyle(c).position ?
                              0 :
                              c.getBoundingClientRect().bottom) :
                         ba(c) || (c = 0);
          c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
        } else
          b.scrollTo(0, 0)
      }
      function g(a) {
        a = A(a) ? a : ba(a) ? a.toString() : d.hash();
        var b;
        a ? (b = k.getElementById(a)) ?
            f(b) :
            (b = e(k.getElementsByName(a))) ? f(b) : 'top' === a && f(null) :
            f(null)
      }
      var k = b.document;
      a &&
          c.$watch(
              function() {
                return d.hash()
              },
              function(a, b) {
                a === b && '' === a || mg(function() {
                  c.$evalAsync(g)
                })
              });
      return g
    }
  ]
}
function hb(a, b) {
  if (!a && !b) return '';
  if (!a) return b;
  if (!b) return a;
  I(a) && (a = a.join(' '));
  I(b) && (b = b.join(' '));
  return a + ' ' + b
}
function vg(a) {
  A(a) && (a = a.split(' '));
  var b = S();
  r(a, function(a) {
    a.length && (b[a] = !0)
  });
  return b
}
function Ba(a) {
  return F(a) ? a : {}
}
function wg(a, b, d, c, e) {
  function f() {
    Z = null;
    k()
  }
  function g() {
    u = E();
    u = x(u) ? null : u;
    ua(u, H) && (u = H);
    D = H = u
  }
  function k() {
    var a = D;
    g();
    if (w !== h.url() || a !== u)
      w = h.url(), D = u, r(G, function(a) {
        a(h.url(), u)
      })
  }
  var h = this, l = a.location, m = a.history, q = a.setTimeout,
      n = a.clearTimeout, s = {}, t = e(d);
  h.isMock = !1;
  h.$$completeOutstandingRequest = t.completeTask;
  h.$$incOutstandingRequestCount = t.incTaskCount;
  h.notifyWhenNoOutstandingRequests = t.notifyWhenNoPendingTasks;
  var u, D, w = l.href, ic = b.find('base'), Z = null,
            E = c.history ? function() {
              try {
                return m.state
              } catch (a) {
              }
            } : C;
  g();
  h.url = function(b, d, e) {
    x(e) && (e = null);
    l !== a.location && (l = a.location);
    m !== a.history && (m = a.history);
    if (b) {
      var f = D === e;
      if (w === b && (!c.history || f)) return h;
      var k = w && qa(w) === qa(b);
      w = b;
      D = e;
      !c.history || k && f ?
          (k || (Z = b),
           d ? l.replace(b) :
               k ? (d = l, e = b.indexOf('#'), e = -1 === e ? '' : b.substr(e),
                    d.hash = e) :
                   l.href = b,
           l.href !== b && (Z = b)) :
          (m[d ? 'replaceState' : 'pushState'](e, '', b), g());
      Z && (Z = b);
      return h
    }
    return (Z || l.href).replace(/#$/, '')
  };
  h.state = function() {
    return u
  };
  var G = [], J = !1, H = null;
  h.onUrlChange = function(b) {
    if (!J) {
      if (c.history) y(a).on('popstate', f);
      y(a).on('hashchange', f);
      J = !0
    }
    G.push(b);
    return b
  };
  h.$$applicationDestroyed = function() {
    y(a).off('hashchange popstate', f)
  };
  h.$$checkUrlChange = k;
  h.baseHref = function() {
    var a = ic.attr('href');
    return a ? a.replace(/^(https?:)?\/\/[^/]*/, '') : ''
  };
  h.defer = function(a, b, c) {
    var d;
    b = b || 0;
    c = c || t.DEFAULT_TASK_TYPE;
    t.incTaskCount(c);
    d = q(function() {
      delete s[d];
      t.completeTask(a, c)
    }, b);
    s[d] = c;
    return d
  };
  h.defer.cancel = function(a) {
    if (s.hasOwnProperty(a)) {
      var b = s[a];
      delete s[a];
      n(a);
      t.completeTask(C, b);
      return !0
    }
    return !1
  }
}
function zf() {
  this.$get = [
    '$window', '$log', '$sniffer', '$document', '$$taskTrackerFactory',
    function(a, b, d, c, e) {
      return new wg(a, c, b, d, e)
    }
  ]
}
function Af() {
  this.$get = function() {
    function a(a, c) {
      function e(a) {
        a !== q &&
            (n ? n === a && (n = a.n) : n = a, f(a.n, a.p), f(a, q), q = a,
             q.n = null)
      }
      function f(a, b) {
        a !== b && (a && (a.p = b), b && (b.n = a))
      }
      if (a in b) throw M('$cacheFactory')('iid', a);
      var g = 0, k = R({}, c, {id: a}), h = S(),
          l = c && c.capacity || Number.MAX_VALUE, m = S(), q = null, n = null;
      return b[a] = {
        put: function(a, b) {
          if (!x(b)) {
            if (l < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = {key: a});
              e(c)
            }
            a in h || g++;
            h[a] = b;
            g > l && this.remove(n.key);
            return b
          }
        },
        get: function(a) {
          if (l < Number.MAX_VALUE) {
            var b = m[a];
            if (!b) return;
            e(b)
          }
          return h[a]
        },
        remove: function(a) {
          if (l < Number.MAX_VALUE) {
            var b = m[a];
            if (!b) return;
            b === q && (q = b.p);
            b === n && (n = b.n);
            f(b.n, b.p);
            delete m[a]
          }
          a in h && (delete h[a], g--)
        },
        removeAll: function() {
          h = S();
          g = 0;
          m = S();
          q = n = null
        },
        destroy: function() {
          m = k = h = null;
          delete b[a]
        },
        info: function() {
          return R({}, k, {size: g})
        }
      }
    }
    var b = {};
    a.info = function() {
      var a = {};
      r(b, function(b, e) {
        a[e] = b.info()
      });
      return a
    };
    a.get = function(a) {
      return b[a]
    };
    return a
  }
}
function Zf() {
  this.$get = [
    '$cacheFactory',
    function(a) {
      return a('templates')
    }
  ]
}
function Wc(a, b) {
  function d(a, b, c) {
    var d = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/, e = S();
    r(a, function(a, f) {
      a = a.trim();
      if (a in q)
        e[f] = q[a];
      else {
        var g = a.match(d);
        if (!g)
          throw aa(
              'iscp', b, f, a,
              c ? 'controller bindings definition' :
                  'isolate scope definition');
        e[f] = {
          mode: g[1][0],
          collection: '*' === g[2],
          optional: '?' === g[3],
          attrName: g[4] || f
        };
        g[4] && (q[a] = e[f])
      }
    });
    return e
  }
  function c(a) {
    var b = a.charAt(0);
    if (!b || b !== O(b)) throw aa('baddir', a);
    if (a !== a.trim()) throw aa('baddir', a);
  }
  function e(a) {
    var b = a.require || a.controller && a.name;
    !I(b) && F(b) && r(b, function(a, c) {
      var d = a.match(l);
      a.substring(d[0].length) || (b[c] = d[0] + c)
    });
    return b
  }
  var f = {}, g = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
      k = /(([\w-]+)(?::([^;]+))?;?)/, h = te('ngSrc,ngSrcset,src,srcset'),
      l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, m = /^(on[a-z]+|formaction)$/, q = S();
  this.directive = function Z(b, d) {
    gb(b, 'name');
    Qa(b, 'directive');
    A(b) ? (c(b), gb(d, 'directiveFactory'),
            f.hasOwnProperty(b) ||
                (f[b] = [],
                 a.factory(
                     b + 'Directive',
                     [
                       '$injector', '$exceptionHandler',
                       function(a, c) {
                         var d = [];
                         r(f[b], function(f, g) {
                           try {
                             var h = a.invoke(f);
                             z(h) ? h = {compile: ia(h)} :
                                    !h.compile && h.link &&
                                     (h.compile = ia(h.link));
                             h.priority = h.priority || 0;
                             h.index = g;
                             h.name = h.name || b;
                             h.require = e(h);
                             var k = h, l = h.restrict;
                             if (l && (!A(l) || !/[EACM]/.test(l)))
                               throw aa('badrestrict', l, b);
                             k.restrict = l || 'EA';
                             h.$$moduleName = f.$$moduleName;
                             d.push(h)
                           } catch (m) {
                             c(m)
                           }
                         });
                         return d
                       }
                     ])),
            f[b].push(d)) :
           r(b, Xb(Z));
    return this
  };
  this.component = function E(a, b) {
    function c(a) {
      function e(b) {
        return z(b) || I(b) ? function(c, d) {
          return a.invoke(b, this, {$element: c, $attrs: d})
        } : b
      }
      var f = b.template || b.templateUrl ? b.template : '', g = {
        controller: d,
        controllerAs: xg(b.controller) || b.controllerAs || '$ctrl',
        template: e(f),
        templateUrl: e(b.templateUrl),
        transclude: b.transclude,
        scope: {},
        bindToController: b.bindings || {},
        restrict: 'E',
        require: b.require
      };
      r(b, function(a, b) {
        '$' === b.charAt(0) && (g[b] = a)
      });
      return g
    }
    if (!A(a)) return r(a, Xb(Va(this, E))), this;
    var d = b.controller || function() {};
    r(b, function(a, b) {
      '$' === b.charAt(0) && (c[b] = a, z(d) && (d[b] = a))
    });
    c.$inject = ['$injector'];
    return this.directive(a, c)
  };
  this.aHrefSanitizationWhitelist = function(a) {
    return v(a) ? (b.aHrefSanitizationWhitelist(a), this) :
                  b.aHrefSanitizationWhitelist()
  };
  this.imgSrcSanitizationWhitelist = function(a) {
    return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) :
                  b.imgSrcSanitizationWhitelist()
  };
  var n = !0;
  this.debugInfoEnabled = function(a) {
    return v(a) ? (n = a, this) : n
  };
  var s = !1;
  this.strictComponentBindingsEnabled = function(a) {
    return v(a) ? (s = a, this) : s
  };
  var t = 10;
  this.onChangesTtl = function(a) {
    return arguments.length ? (t = a, this) : t
  };
  var u = !0;
  this.commentDirectivesEnabled = function(a) {
    return arguments.length ? (u = a, this) : u
  };
  var D = !0;
  this.cssClassDirectivesEnabled = function(a) {
    return arguments.length ? (D = a, this) : D
  };
  var w = S();
  this.addPropertySecurityContext = function(a, b, c) {
    var d = a.toLowerCase() + '|' + b.toLowerCase();
    if (d in w && w[d] !== c) throw aa('ctxoverride', a, b, w[d], c);
    w[d] = c;
    return this
  };
  (function() {
    function a(b, c) {
      r(c, function(a) {
        w[a.toLowerCase()] = b
      })
    }
    a(U.HTML, ['iframe|srcdoc', '*|innerHTML', '*|outerHTML']);
    a(U.CSS, ['*|style']);
    a(U.URL,
      'area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite'
          .split(' '));
    a(U.MEDIA_URL,
      'audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster'
          .split(' '));
    a(U.RESOURCE_URL,
      '*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src'
          .split(' '))
  })();
  this.$get = [
    '$injector', '$interpolate', '$exceptionHandler', '$templateRequest',
    '$parse', '$controller', '$rootScope', '$sce', '$animate',
    function(a, b, c, e, q, K, L, P, Q) {
      function p() {
        try {
          if (!--Ja) throw Ua = void 0, aa('infchng', t);
          L.$apply(function() {
            for (var a = 0, b = Ua.length; a < b; ++a) try {
                Ua[a]()
              } catch (d) {
                c(d)
              }
            Ua = void 0
          })
        } finally {
          Ja++
        }
      }
      function na(a, b) {
        if (!a) return a;
        if (!A(a)) throw aa('srcset', b, a.toString());
        for (var c = '', d = T(a), e = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                 e = /\s/.test(d) ? e : /(,)/, d = d.split(e),
                 e = Math.floor(d.length / 2), f = 0;
             f < e; f++)
          var g = 2 * f, c = c + P.getTrustedMediaUrl(T(d[g])),
              c = c + (' ' + T(d[g + 1]));
        d = T(d[2 * f]).split(/\s/);
        c += P.getTrustedMediaUrl(T(d[0]));
        2 === d.length && (c += ' ' + T(d[1]));
        return c
      }
      function v(a, b) {
        if (b) {
          var c = Object.keys(b), d, e, f;
          d = 0;
          for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
        } else
          this.$attr = {};
        this.$$element = a
      }
      function N(a, b, c) {
        Ea.innerHTML = '<span ' + b + '>';
        b = Ea.firstChild.attributes;
        var d = b[0];
        b.removeNamedItem(d.name);
        d.value = c;
        a.attributes.setNamedItem(d)
      }
      function ra(a, b) {
        try {
          a.addClass(b)
        } catch (c) {
        }
      }
      function fa(a, b, c, d, e) {
        a instanceof y || (a = y(a));
        var f = Xa(a, b, a, c, d, e);
        fa.$$addScopeClass(a);
        var g = null;
        return function(b, c, d) {
          if (!a) throw aa('multilink');
          gb(b, 'scope');
          e && e.needsNewScope && (b = b.$parent.$new());
          d = d || {};
          var h = d.parentBoundTranscludeFn, k = d.transcludeControllers;
          d = d.futureParentElement;
          h && h.$$boundTransclude && (h = h.$$boundTransclude);
          g ||
              (g = (d = d && d[0]) ?
                   'foreignobject' !== ta(d) && ma.call(d).match(/SVG/) ?
                   'svg' :
                   'html' :
                   'html');
          d = 'html' !== g ? y(ja(g, y('<div></div>').append(a).html())) :
                             c ? Wa.clone.call(a) : a;
          if (k)
            for (var l in k) d.data('$' + l + 'Controller', k[l].instance);
          fa.$$addScopeInfo(d, b);
          c && c(d, b);
          f && f(b, d, d, h);
          c || (a = f = null);
          return d
        }
      }
      function Xa(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, q, n, G;
          if (J)
            for (G = Array(c.length), m = 0; m < h.length; m += 3)
              f = h[m], G[f] = c[f];
          else
            G = c;
          m = 0;
          for (q = h.length; m < q;)
            k = G[h[m++]], c = h[m++], f = h[m++],
            c ? (c.scope ? (l = a.$new(), fa.$$addScopeInfo(y(k), l)) : l = a,
                 n = c.transcludeOnThisElement ?
                     ka(a, c.transclude, e) :
                     !c.templateOnThisElement && e ? e :
                                                     !e && b ? ka(a, b) : null,
                 c(f, l, k, d, n)) :
                f && f(a, k.childNodes, void 0, e)
        }
        for (var h = [], k = I(a) || a instanceof y, l, m, q, n, J, G = 0;
             G < a.length; G++) {
          l = new v;
          11 === Aa && ib(a, G, k);
          m = rc(a[G], [], l, 0 === G ? d : void 0, e);
          (f = m.length ? ba(m, a[G], l, b, c, null, [], [], f) : null) &&
              f.scope && fa.$$addScopeClass(l.$$element);
          l = f && f.terminal || !(q = a[G].childNodes) || !q.length ?
              null :
              Xa(q,
                 f ? (f.transcludeOnThisElement || !f.templateOnThisElement) &&
                         f.transclude :
                     b);
          if (f || l) h.push(G, f, l), n = !0, J = J || f;
          f = null
        }
        return n ? g : null
      }
      function ib(a, b, c) {
        var d = a[b], e = d.parentNode, f;
        if (d.nodeType === Oa)
          for (;;) {
            f = e ? d.nextSibling : a[b + 1];
            if (!f || f.nodeType !== Oa) break;
            d.nodeValue += f.nodeValue;
            f.parentNode && f.parentNode.removeChild(f);
            c && f === a[b + 1] && a.splice(b + 1, 1)
          }
      }
      function ka(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);
          return b(e, f, {
            parentBoundTranscludeFn: c,
            transcludeControllers: g,
            futureParentElement: h
          })
        }
        var e = d.$$slots = S(), f;
        for (f in b.$$slots)
          e[f] = b.$$slots[f] ? ka(a, b.$$slots[f], c) : null;
        return d
      }
      function rc(a, b, d, e, f) {
        var g = d.$attr, h;
        switch (a.nodeType) {
          case 1:
            h = ta(a);
            V(b, va(h), 'E', e, f);
            for (var l, m, n, G, u, s = a.attributes, w = 0, E = s && s.length;
                 w < E; w++) {
              var D = !1, r = !1, P = !1, H = !1, t = !1, K;
              l = s[w];
              m = l.name;
              G = l.value;
              n = va(m.toLowerCase());
              (u = n.match(Ra)) ?
                  (P = 'Attr' === u[1], H = 'Prop' === u[1], t = 'On' === u[1],
                   m = m.replace(od, '')
                           .toLowerCase()
                           .substr(4 + u[1].length)
                           .replace(
                               /_(.)/g,
                               function(a, b) {
                                 return b.toUpperCase()
                               })) :
                  (K = n.match(Sa)) && ea(K[1]) &&
                      (D = m, r = m.substr(0, m.length - 5) + 'end',
                       m = m.substr(0, m.length - 6));
              if (H || t)
                d[n] = G, g[n] = l.name,
                H ? Ha(a, b, n, m) : b.push(pd(q, L, c, n, m, !1));
              else {
                n = va(m.toLowerCase());
                g[n] = m;
                if (P || !d.hasOwnProperty(n))
                  d[n] = G, kd(a, n) && (d[n] = !0);
                Ia(a, b, G, n, P);
                V(b, n, 'A', e, f, D, r)
              }
            }
            'input' === h && 'hidden' === a.getAttribute('type') &&
                a.setAttribute('autocomplete', 'off');
            if (!Qa) break;
            g = a.className;
            F(g) && (g = g.animVal);
            if (A(g) && '' !== g)
              for (; a = k.exec(g);)
                n = va(a[2]), V(b, n, 'C', e, f) && (d[n] = T(a[3])),
                g = g.substr(a.index + a[0].length);
            break;
          case Oa:
            oa(b, a.nodeValue);
            break;
          case 8:
            if (!Pa) break;
            M(a, b, d, e, f)
        }
        b.sort(la);
        return b
      }
      function M(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);
          if (f) {
            var h = va(f[1]);
            V(b, h, 'M', d, e) && (c[h] = T(f[2]))
          }
        } catch (k) {
        }
      }
      function U(a, b, c) {
        var d = [], e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw aa('uterdir', b, c);
            1 === a.nodeType &&
                (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling
          } while (0 < e)
        } else
          d.push(a);
        return y(d)
      }
      function W(a, b, c) {
        return function(d, e, f, g, h) {
          e = U(e[0], b, c);
          return a(d, e, f, g, h)
        }
      }
      function Y(a, b, c, d, e, f) {
        var g;
        return a ? fa(b, c, d, e, f) : function() {
          g || (g = fa(b, c, d, e, f), b = c = f = null);
          return g.apply(this, arguments)
        }
      }
      function ba(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = W(a, c, d));
            a.require = t.require;
            a.directiveName = K;
            if (s === t || t.$$isolateScope) a = za(a, {isolateScope: !0});
            h.push(a)
          }
          if (b) {
            c && (b = W(b, c, d));
            b.require = t.require;
            b.directiveName = K;
            if (s === t || t.$$isolateScope) b = za(b, {isolateScope: !0});
            k.push(b)
          }
        }
        function q(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;
            bb(a) || (d = c, c = b, b = a, a = void 0);
            P && (e = D);
            c || (c = P ? K.parent() : K);
            if (d) {
              var f = l.$$slots[d];
              if (f) return f(a, b, e, c, Q);
              if (x(f)) throw aa('noslot', d, ya(K));
            } else
              return l(a, b, e, c, Q)
          }
          var n, t, L, H, E, D, X, K;
          b === f ? (g = d, K = d.$$element) : (K = y(f), g = new v(K, d));
          E = e;
          s ? H = e.$new(!0) : G && (E = e.$parent);
          l && (X = m, X.$$boundTransclude = l, X.isSlotFilled = function(a) {
            return !!l.$$slots[a]
          });
          u && (D = ga(K, g, X, u, H, e, s));
          s &&
              (fa.$$addScopeInfo(
                   K, H, !0, !(w && (w === s || w === s.$$originalDirective))),
               fa.$$addScopeClass(K, !0),
               H.$$isolateBindings = s.$$isolateBindings,
               t = Ca(e, g, H, H.$$isolateBindings, s),
               t.removeWatches && H.$on('$destroy', t.removeWatches));
          for (n in D) {
            t = u[n];
            L = D[n];
            var yg = t.$$bindings.bindToController;
            L.instance = L();
            K.data('$' + t.name + 'Controller', L.instance);
            L.bindingInfo = Ca(E, g, L.instance, yg, t)
          }
          r(u, function(a, b) {
            var c = a.require;
            a.bindToController && !I(c) && F(c) &&
                R(D[b].instance, $(b, c, K, D))
          });
          r(D, function(a) {
            var b = a.instance;
            if (z(b.$onChanges)) try {
                b.$onChanges(a.bindingInfo.initialChanges)
              } catch (d) {
                c(d)
              }
            if (z(b.$onInit)) try {
                b.$onInit()
              } catch (e) {
                c(e)
              }
            z(b.$doCheck) &&
                (E.$watch(function() {
                  b.$doCheck()
                }),
                 b.$doCheck());
            z(b.$onDestroy) && E.$on('$destroy', function() {
              b.$onDestroy()
            })
          });
          n = 0;
          for (t = h.length; n < t; n++)
            L = h[n],
            Ba(L, L.isolateScope ? H : e, K, g,
               L.require && $(L.directiveName, L.require, K, D), X);
          var Q = e;
          s && (s.template || null === s.templateUrl) && (Q = H);
          a && a(Q, f.childNodes, void 0, l);
          for (n = k.length - 1; 0 <= n; n--)
            L = k[n],
            Ba(L, L.isolateScope ? H : e, K, g,
               L.require && $(L.directiveName, L.require, K, D), X);
          r(D, function(a) {
            a = a.instance;
            z(a.$postLink) && a.$postLink()
          })
        }
        l = l || {};
        for (var n = -Number.MAX_VALUE, G = l.newScopeDirective,
                 u = l.controllerDirectives, s = l.newIsolateScopeDirective,
                 w = l.templateDirective, L = l.nonTlbTranscludeDirective,
                 E = !1, D = !1, P = l.hasElementTranscludeDirective,
                 H = d.$$element = y(b), t, K, X, Q = e, p, na = !1, Ib = !1, N,
                 ra = 0, C = a.length;
             ra < C; ra++) {
          t = a[ra];
          var A = t.$$start, ib = t.$$end;
          A && (H = U(b, A, ib));
          X = void 0;
          if (n > t.priority) break;
          if (N = t.scope)
            t.templateUrl ||
                (F(N) ? (ca('new/isolated scope', s || G, t, H), s = t) :
                        ca('new/isolated scope', s, t, H)),
                G = G || t;
          K = t.name;
          if (!na &&
              (t.replace && (t.templateUrl || t.template) ||
               t.transclude && !t.$$tlb)) {
            for (N = ra + 1; na = a[N++];)
              if (na.transclude && !na.$$tlb ||
                  na.replace && (na.templateUrl || na.template)) {
                Ib = !0;
                break
              }
            na = !0
          }
          !t.templateUrl && t.controller &&
              (u = u || S(), ca('\'' + K + '\' controller', u[K], t, H),
               u[K] = t);
          if (N = t.transclude)
            if (E = !0, t.$$tlb || (ca('transclusion', L, t, H), L = t),
                'element' === N)
              P = !0, n = t.priority, X = H,
              H = d.$$element = y(fa.$$createComment(K, d[K])), b = H[0],
              pa(f, Ga.call(X, 0), b),
              Q = Y(Ib, X, e, n, g && g.name, {nonTlbTranscludeDirective: L});
            else {
              var ka = S();
              if (F(N)) {
                X = B.document.createDocumentFragment();
                var Xa = S(), M = S();
                r(N, function(a, b) {
                  var c = '?' === a.charAt(0);
                  a = c ? a.substring(1) : a;
                  Xa[a] = b;
                  ka[b] = null;
                  M[b] = c
                });
                r(H.contents(), function(a) {
                  var b = Xa[va(ta(a))];
                  b ? (M[b] = !0,
                       ka[b] = ka[b] || B.document.createDocumentFragment(),
                       ka[b].appendChild(a)) :
                      X.appendChild(a)
                });
                r(M, function(a, b) {
                  if (!a) throw aa('reqslot', b);
                });
                for (var O in ka)
                  ka[O] && (Q = y(ka[O].childNodes), ka[O] = Y(Ib, Q, e));
                X = y(X.childNodes)
              } else
                X = y(oc(b)).contents();
              H.empty();
              Q =
                  Y(Ib, X, e, void 0, void 0,
                    {needsNewScope: t.$$isolateScope || t.$$newScope});
              Q.$$slots = ka
            }
          if (t.template)
            if (D = !0, ca('template', w, t, H), w = t,
                N = z(t.template) ? t.template(H, d) : t.template, N = Na(N),
                t.replace) {
              g = t;
              X = lc.test(N) ? qd(ja(t.templateNamespace, T(N))) : [];
              b = X[0];
              if (1 !== X.length || 1 !== b.nodeType) throw aa('tplrt', K, '');
              pa(f, H, b);
              C = {$attr: {}};
              N = rc(b, [], C);
              var zg = a.splice(ra + 1, a.length - (ra + 1));
              (s || G) && da(N, s, G);
              a = a.concat(N).concat(zg);
              ha(d, C);
              C = a.length
            } else
              H.html(N);
          if (t.templateUrl)
            D = !0, ca('template', w, t, H), w = t, t.replace && (g = t),
            q = ia(a.splice(ra, a.length - ra), H, d, f, E && Q, h, k, {
              controllerDirectives: u,
              newScopeDirective: G !== t && G,
              newIsolateScopeDirective: s,
              templateDirective: w,
              nonTlbTranscludeDirective: L
            }),
            C = a.length;
          else if (t.compile)
            try {
              p = t.compile(H, d, Q);
              var V = t.$$originalDirective || t;
              z(p) ? m(null, Va(V, p), A, ib) :
                     p && m(Va(V, p.pre), Va(V, p.post), A, ib)
            } catch (ea) {
              c(ea, ya(H))
            }
          t.terminal && (q.terminal = !0, n = Math.max(n, t.priority))
        }
        q.scope = G && !0 === G.scope;
        q.transcludeOnThisElement = E;
        q.templateOnThisElement = D;
        q.transclude = Q;
        l.hasElementTranscludeDirective = P;
        return q
      }
      function $(a, b, c, d) {
        var e;
        if (A(b)) {
          var f = b.match(l);
          b = b.substring(f[0].length);
          var g = f[1] || f[3], f = '?' === f[2];
          '^^' === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
          if (!e) {
            var h = '$' + b + 'Controller';
            e = '^^' === g && c[0] && 9 === c[0].nodeType ?
                null :
                g ? c.inheritedData(h) : c.data(h)
          }
          if (!e && !f) throw aa('ctreq', b, a);
        } else if (I(b))
          for (e = [], g = 0, f = b.length; g < f; g++) e[g] = $(a, b[g], c, d);
        else
          F(b) && (e = {}, r(b, function(b, f) {
                     e[f] = $(a, b, c, d)
                   }));
        return e || null
      }
      function ga(a, b, c, d, e, f, g) {
        var h = S(), k;
        for (k in d) {
          var l = d[k], m = {
            $scope: l === g || l.$$isolateScope ? e : f,
            $element: a,
            $attrs: b,
            $transclude: c
          },
              n = l.controller;
          '@' === n && (n = b[l.name]);
          m = K(n, m, !0, l.controllerAs);
          h[l.name] = m;
          a.data('$' + l.name + 'Controller', m.instance)
        }
        return h
      }
      function da(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++)
          a[d] = $b(a[d], {$$isolateScope: b, $$newScope: c})
      }
      function V(b, c, e, g, h, k, l) {
        if (c === h) return null;
        var m = null;
        if (f.hasOwnProperty(c)) {
          h = a.get(c + 'Directive');
          for (var n = 0, q = h.length; n < q; n++)
            if (c = h[n],
                (x(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
              k && (c = $b(c, {$$start: k, $$end: l}));
              if (!c.$$bindings) {
                var J = m = c, G = c.name,
                    u = {isolateScope: null, bindToController: null};
                F(J.scope) &&
                    (!0 === J.bindToController ?
                         (u.bindToController = d(J.scope, G, !0),
                          u.isolateScope = {}) :
                         u.isolateScope = d(J.scope, G, !1));
                F(J.bindToController) &&
                    (u.bindToController = d(J.bindToController, G, !0));
                if (u.bindToController && !J.controller) throw aa('noctrl', G);
                m = m.$$bindings = u;
                F(m.isolateScope) && (c.$$isolateBindings = m.isolateScope)
              }
              b.push(c);
              m = c
            }
        }
        return m
      }
      function ea(b) {
        if (f.hasOwnProperty(b))
          for (var c = a.get(b + 'Directive'), d = 0, e = c.length; d < e; d++)
            if (b = c[d], b.multiElement) return !0;
        return !1
      }
      function ha(a, b) {
        var c = b.$attr, d = a.$attr;
        r(a, function(d, e) {
          '$' !== e.charAt(0) &&
              (b[e] && b[e] !== d &&
                   (d = d.length ? d + (('style' === e ? ';' : ' ') + b[e]) :
                                   b[e]),
               a.$set(e, d, !0, c[e]))
        });
        r(b, function(b, e) {
          a.hasOwnProperty(e) || '$' === e.charAt(0) ||
              (a[e] = b, 'class' !== e && 'style' !== e && (d[e] = c[e]))
        })
      }
      function ia(a, b, d, f, g, h, k, l) {
        var m = [], n, q, G = b[0], u = a.shift(), t = $b(u, {
                                                     templateUrl: null,
                                                     transclude: null,
                                                     replace: null,
                                                     $$originalDirective: u
                                                   }),
            s = z(u.templateUrl) ? u.templateUrl(b, d) : u.templateUrl,
            L = u.templateNamespace;
        b.empty();
        e(s).then(function(c) {
              var e, J;
              c = Na(c);
              if (u.replace) {
                c = lc.test(c) ? qd(ja(L, T(c))) : [];
                e = c[0];
                if (1 !== c.length || 1 !== e.nodeType)
                  throw aa('tplrt', u.name, s);
                c = {$attr: {}};
                pa(f, b, e);
                var w = rc(e, [], c);
                F(u.scope) && da(w, !0);
                a = w.concat(a);
                ha(d, c)
              } else
                e = G, b.html(c);
              a.unshift(t);
              n = ba(a, e, d, g, b, u, h, k, l);
              r(f, function(a, c) {
                a === e && (f[c] = b[0])
              });
              for (q = Xa(b[0].childNodes, g); m.length;) {
                c = m.shift();
                J = m.shift();
                var H = m.shift(), D = m.shift(), w = b[0];
                if (!c.$$destroyed) {
                  if (J !== G) {
                    var E = J.className;
                    l.hasElementTranscludeDirective && u.replace || (w = oc(e));
                    pa(H, y(J), w);
                    ra(y(w), E)
                  }
                  J = n.transcludeOnThisElement ? ka(c, n.transclude, D) : D;
                  n(q, c, w, f, J)
                }
              }
              m = null
            })
            .catch(function(a) {
              bc(a) && c(a)
            });
        return function(a, b, c, d, e) {
          a = e;
          b.$$destroyed ||
              (m ? m.push(b, c, d, a) :
                   (n.transcludeOnThisElement && (a = ka(b, n.transclude, e)),
                    n(q, b, c, d, a)))
        }
      }
      function la(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ?
            c :
            a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }
      function ca(a, b, c, d) {
        function e(a) {
          return a ? ' (module: ' + a + ')' : ''
        }
        if (b)
          throw aa(
              'multidir', b.name, e(b.$$moduleName), c.name, e(c.$$moduleName),
              a, ya(d));
      }
      function oa(a, c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0,
          compile: function(a) {
            a = a.parent();
            var b = !!a.length;
            b && fa.$$addBindingClass(a);
            return function(a, c) {
              var e = c.parent();
              b || fa.$$addBindingClass(e);
              fa.$$addBindingInfo(e, d.expressions);
              a.$watch(d, function(a) {
                c[0].nodeValue = a
              })
            }
          }
        })
      }
      function ja(a, b) {
        a = O(a || 'html');
        switch (a) {
          case 'svg':
          case 'math':
            var c = B.document.createElement('div');
            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
            return c.childNodes[0].childNodes;
          default:
            return b
        }
      }
      function wa(a, b) {
        if ('srcdoc' === b) return P.HTML;
        if ('src' === b || 'ngSrc' === b)
          return -1 ===
                  ['img', 'video', 'audio', 'source', 'track'].indexOf(a) ?
              P.RESOURCE_URL :
              P.MEDIA_URL;
        if ('xlinkHref' === b)
          return 'image' === a ? P.MEDIA_URL :
                                 'a' === a ? P.URL : P.RESOURCE_URL;
        if ('form' === a && 'action' === b || 'base' === a && 'href' === b ||
            'link' === a && 'href' === b)
          return P.RESOURCE_URL;
        if ('a' === a && ('href' === b || 'ngHref' === b)) return P.URL
      }
      function xa(a, b) {
        var c = b.toLowerCase();
        return w[a + '|' + c] || w['*|' + c]
      }
      function Da(a) {
        return na(P.valueOf(a), 'ng-prop-srcset')
      }
      function Ha(a, b, c, d) {
        if (m.test(d)) throw aa('nodomevents');
        a = ta(a);
        var e = xa(a, d), f = Ta;
        'srcset' !== d || 'img' !== a && 'source' !== a ?
            e && (f = P.getTrusted.bind(P, e)) :
            f = Da;
        b.push({
          priority: 100,
          compile: function(a, b) {
            var e = q(b[c]), g = q(b[c], function(a) {
                               return P.valueOf(a)
                             });
            return {
              pre: function(a, b) {
                function c() {
                  var g = e(a);
                  b.prop(d, f(g))
                }
                c();
                a.$watch(g, c)
              }
            }
          }
        })
      }
      function Ia(a, c, d, e, f) {
        var g = ta(a), k = wa(g, e), l = h[e] || f, n = b(d, !f, k, l);
        if (n) {
          if ('multiple' === e && 'select' === g) throw aa('selmulti', ya(a));
          if (m.test(e)) throw aa('nodomevents');
          c.push({
            priority: 100,
            compile: function() {
              return {
                pre: function(a, c, f) {
                  c = f.$$observers || (f.$$observers = S());
                  var g = f[e];
                  g !== d && (n = g && b(g, !0, k, l), d = g);
                  n &&
                      (f[e] = n(a), (c[e] || (c[e] = [])).$$inter = !0,
                       (f.$$observers && f.$$observers[e].$$scope ||
                        a).$watch(n, function(a, b) {
                         'class' === e && a !== b ? f.$updateClass(a, b) :
                                                    f.$set(e, a)
                       }))
                }
              }
            }
          })
        }
      }
      function pa(a, b, c) {
        var d = b[0], e = b.length, f = d.parentNode, g, h;
        if (a)
          for (g = 0, h = a.length; g < h; g++)
            if (a[g] === d) {
              a[g++] = c;
              h = g + e - 1;
              for (var k = a.length; g < k; g++, h++)
                h < k ? a[g] = a[h] : delete a[g];
              a.length -= e - 1;
              a.context === d && (a.context = c);
              break
            }
        f && f.replaceChild(c, d);
        a = B.document.createDocumentFragment();
        for (g = 0; g < e; g++) a.appendChild(b[g]);
        y.hasData(d) && (y.data(c, y.data(d)), y(d).off('$destroy'));
        y.cleanData(a.querySelectorAll('*'));
        for (g = 1; g < e; g++) delete b[g];
        b[0] = c;
        b.length = 1
      }
      function za(a, b) {
        return R(function() {
          return a.apply(null, arguments)
        }, a, b)
      }
      function Ba(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g)
        } catch (h) {
          c(h, ya(d))
        }
      }
      function qa(a, b) {
        if (s) throw aa('missingattr', a, b);
      }
      function Ca(a, c, d, e, f) {
        function g(b, c, e) {
          z(d.$onChanges) && !cc(c, e) &&
              (Ua || (a.$$postDigest(p), Ua = []), m || (m = {}, Ua.push(h)),
               m[b] && (e = m[b].previousValue), m[b] = new Jb(e, c))
        }
        function h() {
          d.$onChanges(m);
          m = void 0
        }
        var k = [], l = {}, m;
        r(e, function(e, h) {
          var m = e.attrName, n = e.optional, J, u, t, s;
          switch (e.mode) {
            case '@':
              n || sa.call(c, m) || (qa(m, f.name), d[h] = c[m] = void 0);
              n = c.$observe(m, function(a) {
                if (A(a) || Fa(a)) g(h, a, d[h]), d[h] = a
              });
              c.$$observers[m].$$scope = a;
              J = c[m];
              A(J) ? d[h] = b(J)(a) : Fa(J) && (d[h] = J);
              l[h] = new Jb(sc, d[h]);
              k.push(n);
              break;
            case '=':
              if (!sa.call(c, m)) {
                if (n) break;
                qa(m, f.name);
                c[m] = void 0
              }
              if (n && !c[m]) break;
              u = q(c[m]);
              s = u.literal ? ua : cc;
              t = u.assign || function() {
                J = d[h] = u(a);
                throw aa('nonassign', c[m], m, f.name);
              };
              J = d[h] = u(a);
              n = function(b) {
                s(b, d[h]) || (s(b, J) ? t(a, b = d[h]) : d[h] = b);
                return J = b
              };
              n.$stateful = !0;
              n = e.collection ? a.$watchCollection(c[m], n) :
                                 a.$watch(q(c[m], n), null, u.literal);
              k.push(n);
              break;
            case '<':
              if (!sa.call(c, m)) {
                if (n) break;
                qa(m, f.name);
                c[m] = void 0
              }
              if (n && !c[m]) break;
              u = q(c[m]);
              var L = u.literal, w = d[h] = u(a);
              l[h] = new Jb(sc, d[h]);
              n = a[e.collection ? '$watchCollection' : '$watch'](
                  u, function(a, b) {
                    if (b === a) {
                      if (b === w || L && ua(b, w)) return;
                      b = w
                    }
                    g(h, a, b);
                    d[h] = a
                  });
              k.push(n);
              break;
            case '&':
              n || sa.call(c, m) || qa(m, f.name);
              u = c.hasOwnProperty(m) ? q(c[m]) : C;
              if (u === C && n) break;
              d[h] = function(b) {
                return u(a, b)
              }
          }
        });
        return {
          initialChanges: l, removeWatches: k.length && function() {
            for (var a = 0, b = k.length; a < b; ++a) k[a]()
          }
        }
      }
      var Ma = /^\w/, Ea = B.document.createElement('div'), Pa = u, Qa = D,
          Ja = t, Ua;
      v.prototype = {
        $normalize: va,
        $addClass: function(a) {
          a && 0 < a.length && Q.addClass(this.$$element, a)
        },
        $removeClass: function(a) {
          a && 0 < a.length && Q.removeClass(this.$$element, a)
        },
        $updateClass: function(a, b) {
          var c = rd(a, b);
          c && c.length && Q.addClass(this.$$element, c);
          (c = rd(b, a)) && c.length && Q.removeClass(this.$$element, c)
        },
        $set: function(a, b, d, e) {
          var f = kd(this.$$element[0], a), g = sd[a], h = a;
          f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
          this[a] = b;
          e ? this.$attr[a] = e :
              (e = this.$attr[a]) || (this.$attr[a] = e = Uc(a, '-'));
          'img' === ta(this.$$element) && 'srcset' === a &&
              (this[a] = b = na(b, '$set(\'srcset\', value)'));
          !1 !== d &&
              (null === b || x(b) ? this.$$element.removeAttr(e) :
                                    Ma.test(e) ? this.$$element.attr(e, b) :
                                                 N(this.$$element[0], e, b));
          (a = this.$$observers) && r(a[h], function(a) {
            try {
              a(b)
            } catch (d) {
              c(d)
            }
          })
        },
        $observe: function(a, b) {
          var c = this, d = c.$$observers || (c.$$observers = S()),
              e = d[a] || (d[a] = []);
          e.push(b);
          L.$evalAsync(function() {
            e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a])
          });
          return function() {
            cb(e, b)
          }
        }
      };
      var Ka = b.startSymbol(), La = b.endSymbol(),
          Na = '{{' === Ka && '}}' === La ? Ta : function(a) {
            return a.replace(/\{\{/g, Ka).replace(/}}/g, La)
          }, Ra = /^ng(Attr|Prop|On)([A-Z].*)$/, Sa = /^(.+)Start$/;
      fa.$$addBindingInfo = n ? function(a, b) {
        var c = a.data('$binding') || [];
        I(b) ? c = c.concat(b) : c.push(b);
        a.data('$binding', c)
      } : C;
      fa.$$addBindingClass = n ? function(a) {
        ra(a, 'ng-binding')
      } : C;
      fa.$$addScopeInfo = n ? function(a, b, c, d) {
        a.data(
            c ? d ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', b)
      } : C;
      fa.$$addScopeClass = n ? function(a, b) {
        ra(a, b ? 'ng-isolate-scope' : 'ng-scope')
      } : C;
      fa.$$createComment = function(a, b) {
        var c = '';
        n && (c = ' ' + (a || '') + ': ', b && (c += b + ' '));
        return B.document.createComment(c)
      };
      return fa
    }
  ]
}
function Jb(a, b) {
  this.previousValue = a;
  this.currentValue = b
}
function va(a) {
  return a.replace(od, '').replace(Ag, function(a, d, c) {
    return c ? d.toUpperCase() : d
  })
}
function rd(a, b) {
  var d = '', c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
  a: for (; f < c.length; f++) {
    for (var g = c[f], k = 0; k < e.length; k++)
      if (g === e[k]) continue a;
    d += (0 < d.length ? ' ' : '') + g
  }
  return d
}
function qd(a) {
  a = y(a);
  var b = a.length;
  if (1 >= b) return a;
  for (; b--;) {
    var d = a[b];
    (8 === d.nodeType || d.nodeType === Oa && '' === d.nodeValue.trim()) &&
        Bg.call(a, b, 1)
  }
  return a
}
function xg(a, b) {
  if (b && A(b)) return b;
  if (A(a)) {
    var d = td.exec(a);
    if (d) return d[3]
  }
}
function Bf() {
  var a = {};
  this.has = function(b) {
    return a.hasOwnProperty(b)
  };
  this.register = function(b, d) {
    Qa(b, 'controller');
    F(b) ? R(a, b) : a[b] = d
  };
  this.$get = [
    '$injector',
    function(b) {
      function d(a, b, d, g) {
        if (!a || !F(a.$scope)) throw M('$controller')('noscp', g, b);
        a.$scope[b] = d
      }
      return function(c, e, f, g) {
        var k, h, l;
        f = !0 === f;
        g && A(g) && (l = g);
        if (A(c)) {
          g = c.match(td);
          if (!g) throw ud('ctrlfmt', c);
          h = g[1];
          l = l || g[3];
          c = a.hasOwnProperty(h) ? a[h] : De(e.$scope, h, !0);
          if (!c) throw ud('ctrlreg', h);
          sb(c, h, !0)
        }
        if (f)
          return f = (I(c) ? c[c.length - 1] : c).prototype,
                 k = Object.create(f || null), l && d(e, l, k, h || c.name),
                 R(function() {
                   var a = b.invoke(c, k, e, h);
                   a !== k && (F(a) || z(a)) &&
                       (k = a, l && d(e, l, k, h || c.name));
                   return k
                 }, {instance: k, identifier: l});
        k = b.instantiate(c, e, h);
        l && d(e, l, k, h || c.name);
        return k
      }
    }
  ]
}
function Cf() {
  this.$get = [
    '$window',
    function(a) {
      return y(a.document)
    }
  ]
}
function Df() {
  this.$get = [
    '$document', '$rootScope',
    function(a, b) {
      function d() {
        e = c.hidden
      }
      var c = a[0], e = c && c.hidden;
      a.on('visibilitychange', d);
      b.$on('$destroy', function() {
        a.off('visibilitychange', d)
      });
      return function() {
        return e
      }
    }
  ]
}
function Ef() {
  this.$get = [
    '$log',
    function(a) {
      return function(b, d) {
        a.error.apply(a, arguments)
      }
    }
  ]
}
function tc(a) {
  return F(a) ? ha(a) ? a.toISOString() : eb(a) : a
}
function Kf() {
  this.$get = function() {
    return function(a) {
      if (!a) return '';
      var b = [];
      Nc(a, function(a, c) {
        null === a || x(a) || z(a) || (I(a) ? r(a, function(a) {
          b.push(ca(c) + '=' + ca(tc(a)))
        }) : b.push(ca(c) + '=' + ca(tc(a))))
      });
      return b.join('&')
    }
  }
}
function Lf() {
  this.$get = function() {
    return function(a) {
      function b(a, e, f) {
        I(a) ? r(a,
                 function(a, c) {
                   b(a, e + '[' + (F(a) ? c : '') + ']')
                 }) :
               F(a) && !ha(a) ?
               Nc(a,
                  function(a, c) {
                    b(a, e + (f ? '' : '[') + c + (f ? '' : ']'))
                  }) :
               (z(a) && (a = a()),
                d.push(ca(e) + '=' + (null == a ? '' : ca(tc(a)))))
      }
      if (!a) return '';
      var d = [];
      b(a, '', !0);
      return d.join('&')
    }
  }
}
function uc(a, b) {
  if (A(a)) {
    var d = a.replace(Cg, '').trim();
    if (d) {
      var c = b('Content-Type'), c = c && 0 === c.indexOf(vd), e;
      (e = c) || (e = (e = d.match(Dg)) && Eg[e[0]].test(d));
      if (e) try {
          a = Qc(d)
        } catch (f) {
          if (!c) return a;
          throw Kb('baddata', a, f);
        }
    }
  }
  return a
}
function wd(a) {
  var b = S(), d;
  A(a) ? r(a.split('\n'), function(a) {
    d = a.indexOf(':');
    var e = O(T(a.substr(0, d)));
    a = T(a.substr(d + 1));
    e && (b[e] = b[e] ? b[e] + ', ' + a : a)
  }) : F(a) && r(a, function(a, d) {
         var f = O(d), g = T(a);
         f && (b[f] = b[f] ? b[f] + ', ' + g : g)
       });
  return b
}
function xd(a) {
  var b;
  return function(d) {
    b || (b = wd(a));
    return d ? (d = b[O(d)], void 0 === d && (d = null), d) : b
  }
}
function yd(a, b, d, c) {
  if (z(c)) return c(a, b, d);
  r(c, function(c) {
    a = c(a, b, d)
  });
  return a
}
function Jf() {
  var a = this.defaults = {
    transformResponse: [uc],
    transformRequest: [function(a) {
      return F(a) && '[object File]' !== ma.call(a) &&
              '[object Blob]' !== ma.call(a) &&
              '[object FormData]' !== ma.call(a) ?
          eb(a) :
          a
    }],
    headers: {
      common: {Accept: 'application/json, text/plain, */*'},
      post: oa(vc),
      put: oa(vc),
      patch: oa(vc)
    },
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    paramSerializer: '$httpParamSerializer',
    jsonpCallbackParam: 'callback'
  },
      b = !1;
  this.useApplyAsync = function(a) {
    return v(a) ? (b = !!a, this) : b
  };
  var d = this.interceptors = [], c = this.xsrfWhitelistedOrigins = [];
  this.$get = [
    '$browser', '$httpBackend', '$$cookieReader', '$cacheFactory', '$rootScope',
    '$q', '$injector', '$sce',
    function(e, f, g, k, h, l, m, q) {
      function n(b) {
        function c(a, b) {
          for (var d = 0, e = b.length; d < e;) {
            var f = b[d++], g = b[d++];
            a = a.then(f, g)
          }
          b.length = 0;
          return a
        }
        function d(a, b) {
          var c, e = {};
          r(a, function(a, d) {
            z(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a
          });
          return e
        }
        function f(a) {
          var b = R({}, a);
          b.data = yd(a.data, a.headers, a.status, g.transformResponse);
          a = a.status;
          return 200 <= a && 300 > a ? b : l.reject(b)
        }
        if (!F(b)) throw M('$http')('badreq', b);
        if (!A(q.valueOf(b.url))) throw M('$http')('badreq', b.url);
        var g =
            R({
              method: 'get',
              transformRequest: a.transformRequest,
              transformResponse: a.transformResponse,
              paramSerializer: a.paramSerializer,
              jsonpCallbackParam: a.jsonpCallbackParam
            },
              b);
        g.headers = function(b) {
          var c = a.headers, e = R({}, b.headers), f, g, h,
              c = R({}, c.common, c[O(b.method)]);
          a: for (f in c) {
            g = O(f);
            for (h in e)
              if (O(h) === g) continue a;
            e[f] = c[f]
          }
          return d(e, oa(b))
        }(b);
        g.method = ub(g.method);
        g.paramSerializer =
            A(g.paramSerializer) ? m.get(g.paramSerializer) : g.paramSerializer;
        e.$$incOutstandingRequestCount('$http');
        var h = [], k = [];
        b = l.resolve(g);
        r(w, function(a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);
          (a.response || a.responseError) && k.push(a.response, a.responseError)
        });
        b = c(b, h);
        b = b.then(function(b) {
          var c = b.headers, d = yd(b.data, xd(c), void 0, b.transformRequest);
          x(d) && r(c, function(a, b) {
            'content-type' === O(b) && delete c[b]
          });
          x(b.withCredentials) && !x(a.withCredentials) &&
              (b.withCredentials = a.withCredentials);
          return s(b, d).then(f, f)
        });
        b = c(b, k);
        return b = b.finally(function() {
          e.$$completeOutstandingRequest(C, '$http')
        })
      }
      function s(c, d) {
        function e(a) {
          if (a) {
            var c = {};
            r(a, function(a, d) {
              c[d] = function(c) {
                function d() {
                  a(c)
                }
                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d)
              }
            });
            return c
          }
        }
        function k(a, c, d, e, f) {
          function g() {
            m(c, a, d, e, f)
          }
          Q &&
              (200 <= a && 300 > a ? Q.put(N, [a, c, wd(d), e, f]) :
                                     Q.remove(N));
          b ? h.$applyAsync(g) : (g(), h.$$phase || h.$apply())
        }
        function m(a, b, d, e, f) {
          b = -1 <= b ? b : 0;
          (200 <= b && 300 > b ? L.resolve : L.reject)({
            data: a,
            status: b,
            headers: xd(d),
            config: c,
            statusText: e,
            xhrStatus: f
          })
        }
        function s(a) {
          m(a.data, a.status, oa(a.headers()), a.statusText, a.xhrStatus)
        }
        function w() {
          var a = n.pendingRequests.indexOf(c);
          -1 !== a && n.pendingRequests.splice(a, 1)
        }
        var L = l.defer(), P = L.promise, Q, p, na = c.headers,
            y = 'jsonp' === O(c.method), N = c.url;
        y ? N = q.getTrustedResourceUrl(N) : A(N) || (N = q.valueOf(N));
        N = t(N, c.paramSerializer(c.params));
        y && (N = u(N, c.jsonpCallbackParam));
        n.pendingRequests.push(c);
        P.then(w, w);
        !c.cache && !a.cache || !1 === c.cache ||
            'GET' !== c.method && 'JSONP' !== c.method ||
            (Q = F(c.cache) ? c.cache : F(a.cache) ? a.cache : D);
        Q &&
            (p = Q.get(N),
             v(p) ? p && z(p.then) ?
                    p.then(s, s) :
                    I(p) ? m(p[1], p[0], oa(p[2]), p[3], p[4]) :
                           m(p, 200, {}, 'OK', 'complete') :
                    Q.put(N, P));
        x(p) &&
            ((p = ic(c.url) ? g()[c.xsrfCookieName || a.xsrfCookieName] :
                              void 0) &&
                 (na[c.xsrfHeaderName || a.xsrfHeaderName] = p),
             f(c.method, N, d, k, na, c.timeout, c.withCredentials,
               c.responseType, e(c.eventHandlers), e(c.uploadEventHandlers)));
        return P
      }
      function t(a, b) {
        0 < b.length && (a += (-1 === a.indexOf('?') ? '?' : '&') + b);
        return a
      }
      function u(a, b) {
        var c = a.split('?');
        if (2 < c.length) throw Kb('badjsonp', a);
        c = fc(c[1]);
        r(c, function(c, d) {
          if ('JSON_CALLBACK' === c) throw Kb('badjsonp', a);
          if (d === b) throw Kb('badjsonp', b, a);
        });
        return a += (-1 === a.indexOf('?') ? '?' : '&') + b + '=JSON_CALLBACK'
      }
      var D = k('$http');
      a.paramSerializer =
          A(a.paramSerializer) ? m.get(a.paramSerializer) : a.paramSerializer;
      var w = [];
      r(d, function(a) {
        w.unshift(A(a) ? m.get(a) : m.invoke(a))
      });
      var ic = Fg(c);
      n.pendingRequests = [];
      (function(a) {
        r(arguments, function(a) {
          n[a] = function(b, c) {
            return n(R({}, c || {}, {method: a, url: b}))
          }
        })
      })('get', 'delete', 'head', 'jsonp');
      (function(a) {
        r(arguments, function(a) {
          n[a] = function(b, c, d) {
            return n(R({}, d || {}, {method: a, url: b, data: c}))
          }
        })
      })('post', 'put', 'patch');
      n.defaults = a;
      return n
    }
  ]
}
function Nf() {
  this.$get = function() {
    return function() {
      return new B.XMLHttpRequest
    }
  }
}
function Mf() {
  this.$get = [
    '$browser', '$jsonpCallbacks', '$document', '$xhrFactory',
    function(a, b, d, c) {
      return Gg(a, c, a.defer, b, d[0])
    }
  ]
}
function Gg(a, b, d, c, e) {
  function f(a, b, d) {
    a = a.replace('JSON_CALLBACK', b);
    var f = e.createElement('script'), m = null;
    f.type = 'text/javascript';
    f.src = a;
    f.async = !0;
    m = function(a) {
      f.removeEventListener('load', m);
      f.removeEventListener('error', m);
      e.body.removeChild(f);
      f = null;
      var g = -1, s = 'unknown';
      a &&
          ('load' !== a.type || c.wasCalled(b) || (a = {type: 'error'}),
           s = a.type, g = 'error' === a.type ? 404 : 200);
      d && d(g, s)
    };
    f.addEventListener('load', m);
    f.addEventListener('error', m);
    e.body.appendChild(f);
    return m
  }
  return function(e, k, h, l, m, q, n, s, t, u) {
    function D(a) {
      G = 'timeout' === a;
      Z && Z();
      E && E.abort()
    }
    function w(a, b, c, e, f, g) {
      v(H) && d.cancel(H);
      Z = E = null;
      a(b, c, e, f, g)
    }
    k = k || a.url();
    if ('jsonp' === O(e))
      var p = c.createCallback(k), Z = f(k, p, function(a, b) {
                                     var d = 200 === a && c.getResponse(p);
                                     w(l, a, d, '', b, 'complete');
                                     c.removeCallback(p)
                                   });
    else {
      var E = b(e, k), G = !1;
      E.open(e, k, !0);
      r(m, function(a, b) {
        v(a) && E.setRequestHeader(b, a)
      });
      E.onload = function() {
        var a = E.statusText || '',
            b = 'response' in E ? E.response : E.responseText,
            c = 1223 === E.status ? 204 : E.status;
        0 === c && (c = b ? 200 : 'file' === la(k).protocol ? 404 : 0);
        w(l, c, b, E.getAllResponseHeaders(), a, 'complete')
      };
      E.onerror = function() {
        w(l, -1, null, null, '', 'error')
      };
      E.ontimeout = function() {
        w(l, -1, null, null, '', 'timeout')
      };
      E.onabort = function() {
        w(l, -1, null, null, '', G ? 'timeout' : 'abort')
      };
      r(t, function(a, b) {
        E.addEventListener(b, a)
      });
      r(u, function(a, b) {
        E.upload.addEventListener(b, a)
      });
      n && (E.withCredentials = !0);
      if (s) try {
          E.responseType = s
        } catch (J) {
          if ('json' !== s) throw J;
        }
      E.send(x(h) ? null : h)
    }
    if (0 < q)
      var H = d(function() {
        D('timeout')
      }, q);
    else
      q && z(q.then) && q.then(function() {
        D(v(q.$$timeoutId) ? 'timeout' : 'abort')
      })
  }
}
function Gf() {
  var a = '{{', b = '}}';
  this.startSymbol = function(b) {
    return b ? (a = b, this) : a
  };
  this.endSymbol = function(a) {
    return a ? (b = a, this) : b
  };
  this.$get = [
    '$parse', '$exceptionHandler', '$sce',
    function(d, c, e) {
      function f(a) {
        return '\\\\\\' + a
      }
      function g(c) {
        return c.replace(q, a).replace(n, b)
      }
      function k(a, b, c, d) {
        var e = a.$watch(function(a) {
          e();
          return d(a)
        }, b, c);
        return e
      }
      function h(f, h, n, q) {
        function w(a) {
          try {
            return a = n && !r ? e.getTrusted(n, a) : e.valueOf(a),
                   q && !v(a) ? a : hc(a)
          } catch (b) {
            c(Ca.interr(f, b))
          }
        }
        var r = n === e.URL || n === e.MEDIA_URL;
        if (!f.length || -1 === f.indexOf(a)) {
          if (h && !r) return;
          h = g(f);
          r && (h = e.getTrusted(n, h));
          h = ia(h);
          h.exp = f;
          h.expressions = [];
          h.$$watchDelegate = k;
          return h
        }
        q = !!q;
        for (var p, E, G = 0, J = [], H, X = f.length, K = [], L = [], P;
             G < X;)
          if (-1 !== (p = f.indexOf(a, G)) && -1 !== (E = f.indexOf(b, p + l)))
            G !== p && K.push(g(f.substring(G, p))),
                G = f.substring(p + l, E), J.push(G), G = E + m,
                L.push(K.length), K.push('');
          else {
            G !== X && K.push(g(f.substring(G)));
            break
          }
        P = 1 === K.length && 1 === L.length;
        var Q = r && P ? void 0 : w;
        H = J.map(function(a) {
          return d(a, Q)
        });
        if (!h || J.length) {
          var y = function(a) {
            for (var b = 0, c = J.length; b < c; b++) {
              if (q && x(a[b])) return;
              K[L[b]] = a[b]
            }
            if (r) return e.getTrusted(n, P ? K[0] : K.join(''));
            n && 1 < K.length && Ca.throwNoconcat(f);
            return K.join('')
          };
          return R(function(a) {
            var b = 0, d = J.length, e = Array(d);
            try {
              for (; b < d; b++) e[b] = H[b](a);
              return y(e)
            } catch (g) {
              c(Ca.interr(f, g))
            }
          }, {
            exp: f,
            expressions: J,
            $$watchDelegate: function(a, b) {
              var c;
              return a.$watchGroup(H, function(d, e) {
                var f = y(d);
                b.call(this, f, d !== e ? c : f, a);
                c = f
              })
            }
          })
        }
      }
      var l = a.length, m = b.length, q = new RegExp(a.replace(/./g, f), 'g'),
          n = new RegExp(b.replace(/./g, f), 'g');
      h.startSymbol = function() {
        return a
      };
      h.endSymbol = function() {
        return b
      };
      return h
    }
  ]
}
function Hf() {
  this.$get = [
    '$$intervalFactory', '$window',
    function(a, b) {
      var d = {}, c = function(a) {
        b.clearInterval(a);
        delete d[a]
      }, e = a(function(a, c, e) {
           a = b.setInterval(a, c);
           d[a] = e;
           return a
         }, c);
      e.cancel = function(a) {
        if (!a) return !1;
        if (!a.hasOwnProperty('$$intervalId')) throw Hg('badprom');
        if (!d.hasOwnProperty(a.$$intervalId)) return !1;
        a = a.$$intervalId;
        var b = d[a];
        b.promise.$$state.pur = !0;
        b.reject('canceled');
        c(a);
        return !0
      };
      return e
    }
  ]
}
function If() {
  this.$get = [
    '$browser', '$q', '$$q', '$rootScope',
    function(a, b, d, c) {
      return function(e, f) {
        return function(g, k, h, l) {
          function m() {
            q ? g.apply(null, n) : g(s)
          }
          var q = 4 < arguments.length, n = q ? Ga.call(arguments, 4) : [],
              s = 0, t = v(l) && !l, u = (t ? d : b).defer(), D = u.promise;
          h = v(h) ? h : 0;
          D.$$intervalId = e(function() {
            t ? a.defer(m) : c.$evalAsync(m);
            u.notify(s++);
            0 < h && s >= h && (u.resolve(s), f(D.$$intervalId));
            t || c.$apply()
          }, k, u, t);
          return D
        }
      }
    }
  ]
}
function zd(a, b) {
  var d = la(a);
  b.$$protocol = d.protocol;
  b.$$host = d.hostname;
  b.$$port = da(d.port) || Ig[d.protocol] || null
}
function Ad(a, b, d) {
  if (Jg.test(a)) throw jb('badpath', a);
  var c = '/' !== a.charAt(0);
  c && (a = '/' + a);
  a = la(a);
  for (var c = (c && '/' === a.pathname.charAt(0) ? a.pathname.substring(1) :
                                                    a.pathname)
                   .split('/'),
           e = c.length;
       e--;)
    c[e] = decodeURIComponent(c[e]), d && (c[e] = c[e].replace(/\//g, '%2F'));
  d = c.join('/');
  b.$$path = d;
  b.$$search = fc(a.search);
  b.$$hash = decodeURIComponent(a.hash);
  b.$$path && '/' !== b.$$path.charAt(0) && (b.$$path = '/' + b.$$path)
}
function wc(a, b) {
  return a.slice(0, b.length) === b
}
function wa(a, b) {
  if (wc(b, a)) return b.substr(a.length)
}
function qa(a) {
  var b = a.indexOf('#');
  return -1 === b ? a : a.substr(0, b)
}
function xc(a, b, d) {
  this.$$html5 = !0;
  d = d || '';
  zd(a, this);
  this.$$parse = function(a) {
    var d = wa(b, a);
    if (!A(d)) throw jb('ipthprfx', a, b);
    Ad(d, this, !0);
    this.$$path || (this.$$path = '/');
    this.$$compose()
  };
  this.$$normalizeUrl = function(a) {
    return b + a.substr(1)
  };
  this.$$parseLinkUrl = function(c, e) {
    if (e && '#' === e[0]) return this.hash(e.slice(1)), !0;
    var f, g;
    v(f = wa(a, c)) ?
        (g = f, g = d && v(f = wa(d, f)) ? b + (wa('/', f) || f) : a + g) :
        v(f = wa(b, c)) ? g = b + f : b === c + '/' && (g = b);
    g && this.$$parse(g);
    return !!g
  }
}
function yc(a, b, d) {
  zd(a, this);
  this.$$parse = function(c) {
    var e = wa(a, c) || wa(b, c), f;
    x(e) || '#' !== e.charAt(0) ?
        this.$$html5 ? f = e : (f = '', x(e) && (a = c, this.replace())) :
        (f = wa(d, e), x(f) && (f = e));
    Ad(f, this, !1);
    c = this.$$path;
    var e = a, g = /^\/[A-Z]:(\/.*)/;
    wc(f, e) && (f = f.replace(e, ''));
    g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
    this.$$path = c;
    this.$$compose()
  };
  this.$$normalizeUrl = function(b) {
    return a + (b ? d + b : '')
  };
  this.$$parseLinkUrl = function(b, d) {
    return qa(a) === qa(b) ? (this.$$parse(b), !0) : !1
  }
}
function Bd(a, b, d) {
  this.$$html5 = !0;
  yc.apply(this, arguments);
  this.$$parseLinkUrl = function(c, e) {
    if (e && '#' === e[0]) return this.hash(e.slice(1)), !0;
    var f, g;
    a === qa(c) ? f = c :
                  (g = wa(b, c)) ? f = a + d + g : b === c + '/' && (f = b);
    f && this.$$parse(f);
    return !!f
  };
  this.$$normalizeUrl = function(b) {
    return a + d + b
  }
}
function Lb(a) {
  return function() {
    return this[a]
  }
}
function Cd(a, b) {
  return function(d) {
    if (x(d)) return this[a];
    this[a] = b(d);
    this.$$compose();
    return this
  }
}
function Pf() {
  var a = '!', b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
  this.hashPrefix = function(b) {
    return v(b) ? (a = b, this) : a
  };
  this.html5Mode = function(a) {
    if (Fa(a)) return b.enabled = a, this;
    if (F(a)) {
      Fa(a.enabled) && (b.enabled = a.enabled);
      Fa(a.requireBase) && (b.requireBase = a.requireBase);
      if (Fa(a.rewriteLinks) || A(a.rewriteLinks))
        b.rewriteLinks = a.rewriteLinks;
      return this
    }
    return b
  };
  this.$get = [
    '$rootScope', '$browser', '$sniffer', '$rootElement', '$window',
    function(d, c, e, f, g) {
      function k(a, b) {
        return a === b || la(a).href === la(b).href
      }
      function h(a, b, d) {
        var e = m.url(), f = m.$$state;
        try {
          c.url(a, b, d), m.$$state = c.state()
        } catch (g) {
          throw m.url(e), m.$$state = f, g;
        }
      }
      function l(a, b) {
        d.$broadcast('$locationChangeSuccess', m.absUrl(), a, m.$$state, b)
      }
      var m, q;
      q = c.baseHref();
      var n = c.url(), s;
      if (b.enabled) {
        if (!q && b.requireBase) throw jb('nobase');
        s = n.substring(0, n.indexOf('/', n.indexOf('//') + 2)) + (q || '/');
        q = e.history ? xc : Bd
      } else
        s = qa(n), q = yc;
      var t = s.substr(0, qa(s).lastIndexOf('/') + 1);
      m = new q(s, t, '#' + a);
      m.$$parseLinkUrl(n, n);
      m.$$state = c.state();
      var u = /^\s*(javascript|mailto):/i;
      f.on('click', function(a) {
        var e = b.rewriteLinks;
        if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which &&
            2 !== a.button) {
          for (var g = y(a.target); 'a' !== ta(g[0]);)
            if (g[0] === f[0] || !(g = g.parent())[0]) return;
          if (!A(e) || !x(g.attr(e))) {
            var e = g.prop('href'), h = g.attr('href') || g.attr('xlink:href');
            F(e) && '[object SVGAnimatedString]' === e.toString() &&
                (e = la(e.animVal).href);
            u.test(e) || !e || g.attr('target') || a.isDefaultPrevented() ||
                !m.$$parseLinkUrl(e, h) ||
                (a.preventDefault(), m.absUrl() !== c.url() && d.$apply())
          }
        }
      });
      m.absUrl() !== n && c.url(m.absUrl(), !0);
      var D = !0;
      c.onUrlChange(function(a, b) {
        wc(a, t) ? (d.$evalAsync(function() {
          var c = m.absUrl(), e = m.$$state, f;
          m.$$parse(a);
          m.$$state = b;
          f = d.$broadcast('$locationChangeStart', a, c, b, e).defaultPrevented;
          m.absUrl() === a &&
              (f ? (m.$$parse(c), m.$$state = e, h(c, !1, e)) :
                   (D = !1, l(c, e)))
        }),
                    d.$$phase || d.$digest()) :
                   g.location.href = a
      });
      d.$watch(function() {
        if (D || m.$$urlUpdatedByLocation) {
          m.$$urlUpdatedByLocation = !1;
          var a = c.url(), b = m.absUrl(), f = c.state(), g = m.$$replace,
              n = !k(a, b) || m.$$html5 && e.history && f !== m.$$state;
          if (D || n)
            D = !1, d.$evalAsync(function() {
              var b = m.absUrl(),
                  c = d.$broadcast('$locationChangeStart', b, a, m.$$state, f)
                          .defaultPrevented;
              m.absUrl() === b &&
                  (c ? (m.$$parse(a), m.$$state = f) :
                       (n && h(b, g, f === m.$$state ? null : m.$$state),
                        l(a, f)))
            })
        }
        m.$$replace = !1
      });
      return m
    }
  ]
}
function Qf() {
  var a = !0, b = this;
  this.debugEnabled = function(b) {
    return v(b) ? (a = b, this) : a
  };
  this.$get = [
    '$window',
    function(d) {
      function c(a) {
        bc(a) &&
            (a.stack&& f ? a = a.message && -1 === a.stack.indexOf(a.message) ?
                           'Error: ' + a.message + '\n' + a.stack :
                           a.stack :
                           a.sourceURL &&
                     (a = a.message + '\n' + a.sourceURL + ':' + a.line));
        return a
      }
      function e(a) {
        var b = d.console || {}, e = b[a] || b.log || C;
        return function() {
          var a = [];
          r(arguments, function(b) {
            a.push(c(b))
          });
          return Function.prototype.apply.call(e, b, a)
        }
      }
      var f = Aa || /\bEdge\//.test(d.navigator && d.navigator.userAgent);
      return {
        log: e('log'), info: e('info'), warn: e('warn'), error: e('error'),
            debug: function() {
              var c = e('debug');
              return function() {
                a && c.apply(b, arguments)
              }
            }()
      }
    }
  ]
}
function Kg(a) {
  return a + ''
}
function Lg(a, b) {
  return 'undefined' !== typeof a ? a : b
}
function Dd(a, b) {
  return 'undefined' === typeof a ? b : 'undefined' === typeof b ? a : a + b
}
function Mg(a, b) {
  switch (a.type) {
    case p.MemberExpression:
      if (a.computed) return !1;
      break;
    case p.UnaryExpression:
      return 1;
    case p.BinaryExpression:
      return '+' !== a.operator ? 1 : !1;
    case p.CallExpression:
      return !1
  }
  return void 0 === b ? Ed : b
}
function Y(a, b, d) {
  var c, e, f = a.isPure = Mg(a, d);
  switch (a.type) {
    case p.Program:
      c = !0;
      r(a.body, function(a) {
        Y(a.expression, b, f);
        c = c && a.expression.constant
      });
      a.constant = c;
      break;
    case p.Literal:
      a.constant = !0;
      a.toWatch = [];
      break;
    case p.UnaryExpression:
      Y(a.argument, b, f);
      a.constant = a.argument.constant;
      a.toWatch = a.argument.toWatch;
      break;
    case p.BinaryExpression:
      Y(a.left, b, f);
      Y(a.right, b, f);
      a.constant = a.left.constant && a.right.constant;
      a.toWatch = a.left.toWatch.concat(a.right.toWatch);
      break;
    case p.LogicalExpression:
      Y(a.left, b, f);
      Y(a.right, b, f);
      a.constant = a.left.constant && a.right.constant;
      a.toWatch = a.constant ? [] : [a];
      break;
    case p.ConditionalExpression:
      Y(a.test, b, f);
      Y(a.alternate, b, f);
      Y(a.consequent, b, f);
      a.constant =
          a.test.constant && a.alternate.constant && a.consequent.constant;
      a.toWatch = a.constant ? [] : [a];
      break;
    case p.Identifier:
      a.constant = !1;
      a.toWatch = [a];
      break;
    case p.MemberExpression:
      Y(a.object, b, f);
      a.computed && Y(a.property, b, f);
      a.constant = a.object.constant && (!a.computed || a.property.constant);
      a.toWatch = a.constant ? [] : [a];
      break;
    case p.CallExpression:
      c = d = a.filter ? !b(a.callee.name).$stateful : !1;
      e = [];
      r(a.arguments, function(a) {
        Y(a, b, f);
        c = c && a.constant;
        e.push.apply(e, a.toWatch)
      });
      a.constant = c;
      a.toWatch = d ? e : [a];
      break;
    case p.AssignmentExpression:
      Y(a.left, b, f);
      Y(a.right, b, f);
      a.constant = a.left.constant && a.right.constant;
      a.toWatch = [a];
      break;
    case p.ArrayExpression:
      c = !0;
      e = [];
      r(a.elements, function(a) {
        Y(a, b, f);
        c = c && a.constant;
        e.push.apply(e, a.toWatch)
      });
      a.constant = c;
      a.toWatch = e;
      break;
    case p.ObjectExpression:
      c = !0;
      e = [];
      r(a.properties, function(a) {
        Y(a.value, b, f);
        c = c && a.value.constant;
        e.push.apply(e, a.value.toWatch);
        a.computed &&
            (Y(a.key, b, !1), c = c && a.key.constant,
             e.push.apply(e, a.key.toWatch))
      });
      a.constant = c;
      a.toWatch = e;
      break;
    case p.ThisExpression:
      a.constant = !1;
      a.toWatch = [];
      break;
    case p.LocalsExpression:
      a.constant = !1, a.toWatch = []
  }
}
function Fd(a) {
  if (1 === a.length) {
    a = a[0].expression;
    var b = a.toWatch;
    return 1 !== b.length ? b : b[0] !== a ? b : void 0
  }
}
function Gd(a) {
  return a.type === p.Identifier || a.type === p.MemberExpression
}
function Hd(a) {
  if (1 === a.body.length && Gd(a.body[0].expression)) return {
      type: p.AssignmentExpression, left: a.body[0].expression,
          right: {type: p.NGValueParameter}, operator: '='
    }
}
function Id(a) {
  this.$filter = a
}
function Jd(a) {
  this.$filter = a
}
function Mb(a, b, d) {
  this.ast = new p(a, d);
  this.astCompiler = d.csp ? new Jd(b) : new Id(b)
}
function zc(a) {
  return z(a.valueOf) ? a.valueOf() : Ng.call(a)
}
function Rf() {
  var a = S(), b = {'true': !0, 'false': !1, 'null': null, undefined: void 0},
      d, c;
  this.addLiteral = function(a, c) {
    b[a] = c
  };
  this.setIdentifierFns = function(a, b) {
    d = a;
    c = b;
    return this
  };
  this.$get = [
    '$filter',
    function(e) {
      function f(b, c) {
        var d, f;
        switch (typeof b) {
          case 'string':
            return f = b = b.trim(), d = a[f],
                   d ||
                       (d = new Nb(t), d = (new Mb(d, e, t)).parse(b),
                        a[f] = q(d)),
                   s(d, c);
          case 'function':
            return s(b, c);
          default:
            return s(C, c)
        }
      }
      function g(a, b, c) {
        return null == a || null == b ?
            a === b :
            'object' !== typeof a || (a = zc(a), 'object' !== typeof a || c) ?
            a === b || a !== a && b !== b :
            !1
      }
      function k(a, b, c, d, e) {
        var f = d.inputs, h;
        if (1 === f.length) {
          var k = g, f = f[0];
          return a.$watch(function(a) {
            var b = f(a);
            g(b, k, f.isPure) ||
                (h = d(a, void 0, void 0, [b]), k = b && zc(b));
            return h
          }, b, c, e)
        }
        for (var l = [], m = [], n = 0, q = f.length; n < q; n++)
          l[n] = g, m[n] = null;
        return a.$watch(function(a) {
          for (var b = !1, c = 0, e = f.length; c < e; c++) {
            var k = f[c](a);
            if (b || (b = !g(k, l[c], f[c].isPure))) m[c] = k, l[c] = k && zc(k)
          }
          b && (h = d(a, void 0, void 0, m));
          return h
        }, b, c, e)
      }
      function h(a, b, c, d, e) {
        function f() {
          h(m) && k()
        }
        function g(a, b, c, d) {
          m = s && d ? d[0] : n(a, b, c, d);
          h(m) && a.$$postDigest(f);
          return t(m)
        }
        var h = d.literal ? l : v, k, m, n = d.$$intercepted || d,
            t = d.$$interceptor || Ta, s = d.inputs && !n.inputs;
        g.literal = d.literal;
        g.constant = d.constant;
        g.inputs = d.inputs;
        q(g);
        return k = a.$watch(g, b, c, e)
      }
      function l(a) {
        var b = !0;
        r(a, function(a) {
          v(a) || (b = !1)
        });
        return b
      }
      function m(a, b, c, d) {
        var e = a.$watch(function(a) {
          e();
          return d(a)
        }, b, c);
        return e
      }
      function q(a) {
        a.constant ? a.$$watchDelegate = m :
                     a.oneTime ? a.$$watchDelegate = h :
                                 a.inputs && (a.$$watchDelegate = k);
        return a
      }
      function n(a, b) {
        function c(d) {
          return b(a(d))
        }
        c.$stateful = a.$stateful || b.$stateful;
        c.$$pure = a.$$pure && b.$$pure;
        return c
      }
      function s(a, b) {
        if (!b) return a;
        a.$$interceptor && (b = n(a.$$interceptor, b), a = a.$$intercepted);
        var c = !1, d = function(d, e, f, g) {
          d = c && g ? g[0] : a(d, e, f, g);
          return b(d)
        };
        d.$$intercepted = a;
        d.$$interceptor = b;
        d.literal = a.literal;
        d.oneTime = a.oneTime;
        d.constant = a.constant;
        b.$stateful ||
            (c = !a.inputs, d.inputs = a.inputs ? a.inputs : [a],
             b.$$pure || (d.inputs = d.inputs.map(function(a) {
               return a.isPure === Ed ? function(b) {
                 return a(b)
               } : a
             })));
        return q(d)
      }
      var t = {
        csp: pa().noUnsafeEval,
        literals: Ha(b),
        isIdentifierStart: z(d) && d,
        isIdentifierContinue: z(c) && c
      };
      f.$$getAst = function(a) {
        var b = new Nb(t);
        return (new Mb(b, e, t)).getAst(a).ast
      };
      return f
    }
  ]
}
function Tf() {
  var a = !0;
  this.$get = [
    '$rootScope', '$exceptionHandler',
    function(b, d) {
      return Kd(function(a) {
        b.$evalAsync(a)
      }, d, a)
    }
  ];
  this.errorOnUnhandledRejections = function(b) {
    return v(b) ? (a = b, this) : a
  }
}
function Uf() {
  var a = !0;
  this.$get = [
    '$browser', '$exceptionHandler',
    function(b, d) {
      return Kd(function(a) {
        b.defer(a)
      }, d, a)
    }
  ];
  this.errorOnUnhandledRejections = function(b) {
    return v(b) ? (a = b, this) : a
  }
}
function Kd(a, b, d) {
  function c() {
    return new e
  }
  function e() {
    var a = this.promise = new f;
    this.resolve = function(b) {
      h(a, b)
    };
    this.reject = function(b) {
      m(a, b)
    };
    this.notify = function(b) {
      n(a, b)
    }
  }
  function f() {
    this.$$state = { status: 0 }
  }
  function g() {
    for (; !v && Z.length;) {
      var a = Z.shift();
      if (!a.pur) {
        a.pur = !0;
        var c = a.value,
            c = 'Possibly unhandled rejection: ' +
            ('function' === typeof c ?
                 c.toString().replace(/ \{[\s\S]*$/, '') :
                 x(c) ? 'undefined' :
                        'string' !== typeof c ? Fe(c, void 0) : c);
        bc(a.value) ? b(a.value, c) : b(c)
      }
    }
  }
  function k(c) {
    !d || c.pending || 2 !== c.status || c.pur ||
        (0 === v && 0 === Z.length && a(g), Z.push(c));
    !c.processScheduled && c.pending &&
        (c.processScheduled = !0, ++v, a(function() {
           var e, f, k;
           k = c.pending;
           c.processScheduled = !1;
           c.pending = void 0;
           try {
             for (var l = 0, n = k.length; l < n; ++l) {
               c.pur = !0;
               f = k[l][0];
               e = k[l][c.status];
               try {
                 z(e) ? h(f, e(c.value)) :
                        1 === c.status ? h(f, c.value) : m(f, c.value)
               } catch (q) {
                 m(f, q), q && !0 === q.$$passToExceptionHandler && b(q)
               }
             }
           } finally {
             --v, d && 0 === v && a(g)
           }
         }))
  }
  function h(a, b) {
    a.$$state.status || (b === a ? q(a, w('qcycle', b)) : l(a, b))
  }
  function l(a, b) {
    function c(b) {
      g || (g = !0, l(a, b))
    }
    function d(b) {
      g || (g = !0, q(a, b))
    }
    function e(b) {
      n(a, b)
    }
    var f, g = !1;
    try {
      if (F(b) || z(b)) f = b.then;
      z(f) ? (a.$$state.status = -1, f.call(b, c, d, e)) :
             (a.$$state.value = b, a.$$state.status = 1, k(a.$$state))
    } catch (h) {
      d(h)
    }
  }
  function m(a, b) {
    a.$$state.status || q(a, b)
  }
  function q(a, b) {
    a.$$state.value = b;
    a.$$state.status = 2;
    k(a.$$state)
  }
  function n(c, d) {
    var e = c.$$state.pending;
    0 >= c.$$state.status && e && e.length && a(function() {
      for (var a, c, f = 0, g = e.length; f < g; f++) {
        c = e[f][0];
        a = e[f][3];
        try {
          n(c, z(a) ? a(d) : d)
        } catch (h) {
          b(h)
        }
      }
    })
  }
  function s(a) {
    var b = new f;
    m(b, a);
    return b
  }
  function t(a, b, c) {
    var d = null;
    try {
      z(c) && (d = c())
    } catch (e) {
      return s(e)
    }
    return d && z(d.then) ? d.then(function() {
      return b(a)
    }, s) : b(a)
  }
  function u(a, b, c, d) {
    var e = new f;
    h(e, a);
    return e.then(b, c, d)
  }
  function p(a) {
    if (!z(a)) throw w('norslvr', a);
    var b = new f;
    a(
        function(a) {
          h(b, a)
        },
        function(a) {
          m(b, a)
        });
    return b
  }
  var w = M('$q', TypeError), v = 0, Z = [];
  R(f.prototype, {
    then: function(a, b, c) {
      if (x(a) && x(b) && x(c)) return this;
      var d = new f;
      this.$$state.pending = this.$$state.pending || [];
      this.$$state.pending.push([d, a, b, c]);
      0 < this.$$state.status && k(this.$$state);
      return d
    },
    'catch': function(a) {
      return this.then(null, a)
    },
    'finally': function(a, b) {
      return this.then(
          function(b) {
            return t(b, E, a)
          },
          function(b) {
            return t(b, s, a)
          },
          b)
    }
  });
  var E = u;
  p.prototype = f.prototype;
  p.defer = c;
  p.reject = s;
  p.when = u;
  p.resolve = E;
  p.all = function(a) {
    var b = new f, c = 0, d = I(a) ? [] : {};
    r(a, function(a, e) {
      c++;
      u(a).then(
          function(a) {
            d[e] = a;
            --c || h(b, d)
          },
          function(a) {
            m(b, a)
          })
    });
    0 === c && h(b, d);
    return b
  };
  p.race = function(a) {
    var b = c();
    r(a, function(a) {
      u(a).then(b.resolve, b.reject)
    });
    return b.promise
  };
  return p
}
function dg() {
  this.$get = [
    '$window', '$timeout',
    function(a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame ||
          a.webkitCancelRequestAnimationFrame,
          e = !!d, f = e ? function(a) {
            var b = d(a);
            return function() {
              c(b)
            }
          } : function(a) {
            var c = b(a, 16.66, !1);
            return function() {
              b.cancel(c)
            }
          };
      f.supported = e;
      return f
    }
  ]
}
function Sf() {
  function a(a) {
    function b() {
      this.$$watchers = this.$$nextSibling = this.$$childHead =
          this.$$childTail = null;
      this.$$listeners = {};
      this.$$listenerCount = {};
      this.$$watchersCount = 0;
      this.$id = ++pb;
      this.$$ChildScope = null;
      this.$$suspended = !1
    }
    b.prototype = a;
    return b
  }
  var b = 10, d = M('$rootScope'), c = null, e = null;
  this.digestTtl = function(a) {
    arguments.length && (b = a);
    return b
  };
  this.$get = [
    '$exceptionHandler', '$parse', '$browser',
    function(f, g, k) {
      function h(a) {
        a.currentScope.$$destroyed = !0
      }
      function l(a) {
        9 === Aa &&
            (a.$$childHead && l(a.$$childHead),
             a.$$nextSibling && l(a.$$nextSibling));
        a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead =
            a.$$childTail = a.$root = a.$$watchers = null
      }
      function m() {
        this.$id = ++pb;
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling =
            this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this.$root = this;
        this.$$suspended = this.$$destroyed = !1;
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$watchersCount = 0;
        this.$$isolateBindings = null
      }
      function q(a) {
        if (w.$$phase) throw d('inprog', w.$$phase);
        w.$$phase = a
      }
      function n(a, b) {
        do
          a.$$watchersCount += b;
        while (a = a.$parent) }
      function s(a, b, c) {
        do
          a.$$listenerCount[c] -= b,
              0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        while (a = a.$parent) }
      function t() {}
      function u() {
        for (; E.length;) try {
            E.shift()()
          } catch (a) {
            f(a)
          }
        e = null
      }
      function p() {
        null === e && (e = k.defer(function() {
          w.$apply(u)
        }, null, '$applyAsync'))
      }
      m.prototype = {
        constructor: m,
        $new: function(b, c) {
          var d;
          c = c || this;
          b ? (d = new m, d.$root = this.$root) :
              (this.$$ChildScope || (this.$$ChildScope = a(this)),
               d = new this.$$ChildScope);
          d.$parent = c;
          d.$$prevSibling = c.$$childTail;
          c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) :
                          c.$$childHead = c.$$childTail = d;
          (b || c !== this) && d.$on('$destroy', h);
          return d
        },
        $watch: function(a, b, d, e) {
          var f = g(a);
          b = z(b) ? b : C;
          if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
          var h = this, k = h.$$watchers,
              l = {fn: b, last: t, get: f, exp: e || a, eq: !!d};
          c = null;
          k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
          k.unshift(l);
          k.$$digestWatchIndex++;
          n(this, 1);
          return function() {
            var a = cb(k, l);
            0 <= a &&
                (n(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
            c = null
          }
        },
        $watchGroup: function(a, b) {
          function c() {
            h = !1;
            try {
              k ? (k = !1, b(e, e, g)) : b(e, d, g)
            } finally {
              for (var f = 0; f < a.length; f++) d[f] = e[f]
            }
          }
          var d = Array(a.length), e = Array(a.length), f = [], g = this,
              h = !1, k = !0;
          if (!a.length) {
            var l = !0;
            g.$evalAsync(function() {
              l && b(e, e, g)
            });
            return function() {
              l = !1
            }
          }
          if (1 === a.length)
            return this.$watch(a[0], function(a, c, f) {
              e[0] = a;
              d[0] = c;
              b(e, a === c ? e : d, f)
            });
          r(a, function(a, b) {
            var d = g.$watch(a, function(a) {
              e[b] = a;
              h || (h = !0, g.$evalAsync(c))
            });
            f.push(d)
          });
          return function() {
            for (; f.length;) f.shift()()
          }
        },
        $watchCollection: function(a, b) {
          function c(a) {
            e = a;
            var b, d, g, h;
            if (!x(e)) {
              if (F(e))
                if (xa(e))
                  for (f !== n && (f = n, s = f.length = 0, l++),
                       a = e.length, s !== a && (l++, f.length = s = a), b = 0;
                       b < a; b++)
                    h = f[b], g = e[b], d = h !== h && g !== g,
                    d || h === g || (l++, f[b] = g);
                else {
                  f !== q && (f = q = {}, s = 0, l++);
                  a = 0;
                  for (b in e)
                    sa.call(e, b) &&
                        (a++, g = e[b], h = f[b],
                         b in f ? (d = h !== h && g !== g,
                                   d || h === g || (l++, f[b] = g)) :
                                  (s++, f[b] = g, l++));
                  if (s > a)
                    for (b in l++, f) sa.call(e, b) || (s--, delete f[b])
                }
              else
                f !== e && (f = e, l++);
              return l
            }
          }
          c.$$pure = g(a).literal;
          c.$stateful = !c.$$pure;
          var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), n = [],
              q = {}, t = !0, s = 0;
          return this.$watch(m, function() {
            t ? (t = !1, b(e, e, d)) : b(e, h, d);
            if (k)
              if (F(e))
                if (xa(e)) {
                  h = Array(e.length);
                  for (var a = 0; a < e.length; a++) h[a] = e[a]
                } else
                  for (a in h = {}, e) sa.call(e, a) && (h[a] = e[a]);
              else
                h = e
          })
        },
        $digest: function() {
          var a, g, h, l, m, n, s, r = b, p, D = v.length ? w : this, E = [], x,
                                   y;
          q('$digest');
          k.$$checkUrlChange();
          this === w && null !== e && (k.defer.cancel(e), u());
          c = null;
          do {
            s = !1;
            p = D;
            for (n = 0; n < v.length; n++) {
              try {
                y = v[n], l = y.fn, l(y.scope, y.locals)
              } catch (C) {
                f(C)
              }
              c = null
            }
            v.length = 0;
            a: do {
              if (n = !p.$$suspended && p.$$watchers)
                for (n.$$digestWatchIndex = n.length; n.$$digestWatchIndex--;)
                  try {
                    if (a = n[n.$$digestWatchIndex])
                      if (m = a.get,
                          (g = m(p)) !== (h = a.last) &&
                              !(a.eq ? ua(g, h) : V(g) && V(h)))
                        s = !0, c = a, a.last = a.eq ? Ha(g, null) : g,
                        l = a.fn, l(g, h === t ? g : h, p),
                        5 > r && (x = 4 - r, E[x] || (E[x] = []), E[x].push({
                          msg: z(a.exp) ?
                              'fn: ' + (a.exp.name || a.exp.toString()) :
                              a.exp,
                          newVal: g,
                          oldVal: h
                        }));
                      else if (a === c) {
                        s = !1;
                        break a
                      }
                  } catch (B) {
                    f(B)
                  }
              if (!(n = !p.$$suspended && p.$$watchersCount && p.$$childHead ||
                        p !== D && p.$$nextSibling))
                for (; p !== D && !(n = p.$$nextSibling);) p = p.$parent
            }
            while (p = n)
              ;
            if ((s || v.length) && !r--)
              throw w.$$phase = null, d('infdig', b, E);
          } while (s || v.length);
          for (w.$$phase = null; G < Z.length;) try {
              Z[G++]()
            } catch (A) {
              f(A)
            }
          Z.length = G = 0;
          k.$$checkUrlChange()
        },
        $suspend: function() {
          this.$$suspended = !0
        },
        $isSuspended: function() {
          return this.$$suspended
        },
        $resume: function() {
          this.$$suspended = !1
        },
        $destroy: function() {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast('$destroy');
            this.$$destroyed = !0;
            this === w && k.$$applicationDestroyed();
            n(this, -this.$$watchersCount);
            for (var b in this.$$listenerCount)
              s(this, this.$$listenerCount[b], b);
            a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
            a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
            this.$$prevSibling &&
                (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
            this.$$nextSibling &&
                (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
            this.$destroy = this.$digest = this.$apply = this.$evalAsync =
                this.$applyAsync = C;
            this.$on = this.$watch = this.$watchGroup = function() {
              return C
            };
            this.$$listeners = {};
            this.$$nextSibling = null;
            l(this)
          }
        },
        $eval: function(a, b) {
          return g(a)(this, b)
        },
        $evalAsync: function(a, b) {
          w.$$phase || v.length || k.defer(function() {
            v.length && w.$digest()
          }, null, '$evalAsync');
          v.push({scope: this, fn: g(a), locals: b})
        },
        $$postDigest: function(a) {
          Z.push(a)
        },
        $apply: function(a) {
          try {
            q('$apply');
            try {
              return this.$eval(a)
            } finally {
              w.$$phase = null
            }
          } catch (b) {
            f(b)
          } finally {
            try {
              w.$digest()
            } catch (c) {
              throw f(c), c;
            }
          }
        },
        $applyAsync: function(a) {
          function b() {
            c.$eval(a)
          }
          var c = this;
          a && E.push(b);
          a = g(a);
          p()
        },
        $on: function(a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []);
          c.push(b);
          var d = this;
          do
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0),
                d.$$listenerCount[a]++;
          while (d = d.$parent);
          var e = this;
          return function() {
            var d = c.indexOf(b);
            -1 !== d && (delete c[d], s(e, 1, a))
          }
        },
        $emit: function(a, b) {
          var c = [], d, e = this, g = !1, h = {
            name: a,
            targetScope: e,
            stopPropagation: function() {
              g = !0
            },
            preventDefault: function() {
              h.defaultPrevented = !0
            },
            defaultPrevented: !1
          },
              k = db([h], arguments, 1), l, m;
          do {
            d = e.$$listeners[a] || c;
            h.currentScope = e;
            l = 0;
            for (m = d.length; l < m; l++)
              if (d[l]) try {
                  d[l].apply(null, k)
                } catch (n) {
                  f(n)
                }
              else
                d.splice(l, 1), l--, m--;
            if (g) break;
            e = e.$parent
          } while (e);
          h.currentScope = null;
          return h
        },
        $broadcast: function(a, b) {
          var c = this, d = this, e = {
            name: a,
            targetScope: this,
            preventDefault: function() {
              e.defaultPrevented = !0
            },
            defaultPrevented: !1
          };
          if (!this.$$listenerCount[a]) return e;
          for (var g = db([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;
            d = c.$$listeners[a] || [];
            h = 0;
            for (k = d.length; h < k; h++)
              if (d[h]) try {
                  d[h].apply(null, g)
                } catch (l) {
                  f(l)
                }
              else
                d.splice(h, 1), h--, k--;
            if (!(d = c.$$listenerCount[a] && c.$$childHead ||
                      c !== this && c.$$nextSibling))
              for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
          }
          e.currentScope = null;
          return e
        }
      };
      var w = new m, v = w.$$asyncQueue = [], Z = w.$$postDigestQueue = [],
          E = w.$$applyAsyncQueue = [], G = 0;
      return w
    }
  ]
}
function Ie() {
  var a = /^\s*(https?|s?ftp|mailto|tel|file):/,
      b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
  this.aHrefSanitizationWhitelist = function(b) {
    return v(b) ? (a = b, this) : a
  };
  this.imgSrcSanitizationWhitelist = function(a) {
    return v(a) ? (b = a, this) : b
  };
  this.$get = function() {
    return function(d, c) {
      var e = c ? b : a, f = la(d && d.trim()).href;
      return '' === f || f.match(e) ? d : 'unsafe:' + f
    }
  }
}
function Og(a) {
  if ('self' === a) return a;
  if (A(a)) {
    if (-1 < a.indexOf('***')) throw Da('iwcard', a);
    a = Ld(a).replace(/\\\*\\\*/g, '.*').replace(/\\\*/g, '[^:/.?&;]*');
    return new RegExp('^' + a + '$')
  }
  if (ab(a)) return new RegExp('^' + a.source + '$');
  throw Da('imatcher');
}
function Md(a) {
  var b = [];
  v(a) && r(a, function(a) {
    b.push(Og(a))
  });
  return b
}
function Wf() {
  this.SCE_CONTEXTS = U;
  var a = ['self'], b = [];
  this.resourceUrlWhitelist = function(b) {
    arguments.length && (a = Md(b));
    return a
  };
  this.resourceUrlBlacklist = function(a) {
    arguments.length && (b = Md(a));
    return b
  };
  this.$get = [
    '$injector', '$$sanitizeUri',
    function(d, c) {
      function e(a, b) {
        var c;
        'self' === a ? (c = Ac(b, Nd)) ||
                (B.document.baseURI ?
                     c = B.document.baseURI :
                     (La ||
                          (La = B.document.createElement('a'), La.href = '.',
                           La = La.cloneNode(!1)),
                      c = La.href),
                 c = Ac(b, c)) :
                       c = !!a.exec(b.href);
        return c
      }
      function f(a) {
        var b = function(a) {
          this.$$unwrapTrustedValue = function() {
            return a
          }
        };
        a && (b.prototype = new a);
        b.prototype.valueOf = function() {
          return this.$$unwrapTrustedValue()
        };
        b.prototype.toString = function() {
          return this.$$unwrapTrustedValue().toString()
        };
        return b
      }
      var g = function(a) {
        throw Da('unsafe');
      };
      d.has('$sanitize') && (g = d.get('$sanitize'));
      var k = f(), h = {};
      h[U.HTML] = f(k);
      h[U.CSS] = f(k);
      h[U.MEDIA_URL] = f(k);
      h[U.URL] = f(h[U.MEDIA_URL]);
      h[U.JS] = f(k);
      h[U.RESOURCE_URL] = f(h[U.URL]);
      return {
        trustAs: function(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;
          if (!c) throw Da('icontext', a, b);
          if (null === b || x(b) || '' === b) return b;
          if ('string' !== typeof b) throw Da('itype', a);
          return new c(b)
        }, getTrusted: function(d, f) {
          if (null === f || x(f) || '' === f) return f;
          var k = h.hasOwnProperty(d) ? h[d] : null;
          if (k && f instanceof k) return f.$$unwrapTrustedValue();
          z(f.$$unwrapTrustedValue) && (f = f.$$unwrapTrustedValue());
          if (d === U.MEDIA_URL || d === U.URL)
            return c(f.toString(), d === U.MEDIA_URL);
          if (d === U.RESOURCE_URL) {
            var k = la(f.toString()), n, s, t = !1;
            n = 0;
            for (s = a.length; n < s; n++)
              if (e(a[n], k)) {
                t = !0;
                break
              }
            if (t)
              for (n = 0, s = b.length; n < s; n++)
                if (e(b[n], k)) {
                  t = !1;
                  break
                }
            if (t) return f;
            throw Da('insecurl', f.toString());
          }
          if (d === U.HTML) return g(f);
          throw Da('unsafe');
        }, valueOf: function(a) {
          return a instanceof k ? a.$$unwrapTrustedValue() : a
        }
      }
    }
  ]
}
function Vf() {
  var a = !0;
  this.enabled = function(b) {
    arguments.length && (a = !!b);
    return a
  };
  this.$get = [
    '$parse', '$sceDelegate',
    function(b, d) {
      if (a && 8 > Aa) throw Da('iequirks');
      var c = oa(U);
      c.isEnabled = function() {
        return a
      };
      c.trustAs = d.trustAs;
      c.getTrusted = d.getTrusted;
      c.valueOf = d.valueOf;
      a || (c.trustAs = c.getTrusted = function(a, b) {
        return b
      }, c.valueOf = Ta);
      c.parseAs = function(a, d) {
        var e = b(d);
        return e.literal && e.constant ? e : b(d, function(b) {
          return c.getTrusted(a, b)
        })
      };
      var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
      r(U, function(a, b) {
        var d = O(b);
        c[('parse_as_' + d).replace(Bc, wb)] = function(b) {
          return e(a, b)
        };
        c[('get_trusted_' + d).replace(Bc, wb)] = function(b) {
          return f(a, b)
        };
        c[('trust_as_' + d).replace(Bc, wb)] = function(b) {
          return g(a, b)
        }
      });
      return c
    }
  ]
}
function Xf() {
  this.$get = [
    '$window', '$document',
    function(a, b) {
      var d = {},
          c = !((!a.nw || !a.nw.process) && a.chrome &&
                (a.chrome.app && a.chrome.app.runtime ||
                 !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) &&
          a.history && a.history.pushState,
          e = da((
              /android (\d+)/.exec(O((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {},
          k = g.body && g.body.style, h = !1, l = !1;
      k &&
          (h = !!('transition' in k || 'webkitTransition' in k),
           l = !!('animation' in k || 'webkitAnimation' in k));
      return {
        history: !(!c || 4 > e || f), hasEvent: function(a) {
          if ('input' === a && Aa) return !1;
          if (x(d[a])) {
            var b = g.createElement('div');
            d[a] = 'on' + a in b
          }
          return d[a]
        }, csp: pa(), transitions: h, animations: l, android: e
      }
    }
  ]
}
function Yf() {
  this.$get = ia(function(a) {
    return new Pg(a)
  })
}
function Pg(a) {
  function b() {
    var a = e.pop();
    return a && a.cb
  }
  function d(a) {
    for (var b = e.length - 1; 0 <= b; --b) {
      var c = e[b];
      if (c.type === a) return e.splice(b, 1), c.cb
    }
  }
  var c = {}, e = [], f = this.ALL_TASKS_TYPE = '$$all$$',
      g = this.DEFAULT_TASK_TYPE = '$$default$$';
  this.completeTask = function(e, h) {
    h = h || g;
    try {
      e()
    } finally {
      var l;
      l = h || g;
      c[l] && (c[l]--, c[f]--);
      l = c[h];
      var m = c[f];
      if (!m || !l)
        for (l = m ? d : b; m = l(h);) try {
            m()
          } catch (q) {
            a.error(q)
          }
    }
  };
  this.incTaskCount = function(a) {
    a = a || g;
    c[a] = (c[a] || 0) + 1;
    c[f] = (c[f] || 0) + 1
  };
  this.notifyWhenNoPendingTasks = function(a, b) {
    b = b || f;
    c[b] ? e.push({type: b, cb: a}) : a()
  }
}
function $f() {
  var a;
  this.httpOptions = function(b) {
    return b ? (a = b, this) : a
  };
  this.$get = [
    '$exceptionHandler', '$templateCache', '$http', '$q', '$sce',
    function(b, d, c, e, f) {
      function g(k, h) {
        g.totalPendingRequests++;
        if (!A(k) || x(d.get(k))) k = f.getTrustedResourceUrl(k);
        var l = c.defaults && c.defaults.transformResponse;
        I(l) ? l = l.filter(function(a) {
          return a !== uc
        }) :
               l === uc && (l = null);
        return c.get(k, R({cache: d, transformResponse: l}, a))
            .finally(function() {
              g.totalPendingRequests--
            })
            .then(
                function(a) {
                  return d.put(k, a.data)
                },
                function(a) {
                  h || (a = Qg('tpload', k, a.status, a.statusText), b(a));
                  return e.reject(a)
                })
      }
      g.totalPendingRequests = 0;
      return g
    }
  ]
}
function ag() {
  this.$get = [
    '$rootScope', '$browser', '$location',
    function(a, b, d) {
      return {
        findBindings: function(a, b, d) {
          a = a.getElementsByClassName('ng-binding');
          var g = [];
          r(a, function(a) {
            var c = ea.element(a).data('$binding');
            c && r(c, function(c) {
              d ? (new RegExp('(^|\\s)' + Ld(b) + '(\\s|\\||$)')).test(c) &&
                      g.push(a) :
                  -1 !== c.indexOf(b) && g.push(a)
            })
          });
          return g
        }, findModels: function(a, b, d) {
          for (var g = ['ng-', 'data-ng-', 'ng\\:'], k = 0; k < g.length; ++k) {
            var h = a.querySelectorAll(
                '[' + g[k] + 'model' + (d ? '=' : '*=') + '"' + b + '"]');
            if (h.length) return h
          }
        }, getLocation: function() {
          return d.url()
        }, setLocation: function(b) {
          b !== d.url() && (d.url(b), a.$digest())
        }, whenStable: function(a) {
          b.notifyWhenNoOutstandingRequests(a)
        }
      }
    }
  ]
}
function bg() {
  this.$get = [
    '$rootScope', '$browser', '$q', '$$q', '$exceptionHandler',
    function(a, b, d, c, e) {
      function f(f, h, l) {
        z(f) || (l = h, h = f, f = C);
        var m = Ga.call(arguments, 3), q = v(l) && !l, n = (q ? c : d).defer(),
            s = n.promise, t;
        t = b.defer(function() {
          try {
            n.resolve(f.apply(null, m))
          } catch (b) {
            n.reject(b), e(b)
          } finally {
            delete g[s.$$timeoutId]
          }
          q || a.$apply()
        }, h, '$timeout');
        s.$$timeoutId = t;
        g[t] = n;
        return s
      }
      var g = {};
      f.cancel = function(a) {
        if (!a) return !1;
        if (!a.hasOwnProperty('$$timeoutId')) throw Rg('badprom');
        if (!g.hasOwnProperty(a.$$timeoutId)) return !1;
        a = a.$$timeoutId;
        var c = g[a];
        c.promise.$$state.pur = !0;
        c.reject('canceled');
        delete g[a];
        return b.defer.cancel(a)
      };
      return f
    }
  ]
}
function la(a) {
  if (!A(a)) return a;
  Aa && ($.setAttribute('href', a), a = $.href);
  $.setAttribute('href', a);
  return {
    href: $.href, protocol: $.protocol ? $.protocol.replace(/:$/, '') : '',
        host: $.host, search: $.search ? $.search.replace(/^\?/, '') : '',
        hash: $.hash ? $.hash.replace(/^#/, '') : '', hostname: $.hostname,
        port: $.port,
        pathname: '/' === $.pathname.charAt(0) ? $.pathname : '/' + $.pathname
  }
}
function Fg(a) {
  var b = [Nd].concat(a.map(la));
  return function(a) {
    a = la(a);
    return b.some(Ac.bind(null, a))
  }
}
function Ac(a, b) {
  a = la(a);
  b = la(b);
  return a.protocol === b.protocol && a.host === b.host
}
function cg() {
  this.$get = ia(B)
}
function Od(a) {
  function b(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {
      return a
    }
  }
  var d = a[0] || {}, c = {}, e = '';
  return function() {
    var a, g, k, h, l;
    try {
      a = d.cookie || ''
    } catch (m) {
      a = ''
    }
    if (a !== e)
      for (e = a, a = e.split('; '), c = {}, k = 0; k < a.length; k++)
        g = a[k], h = g.indexOf('='),
        0 < h &&
            (l = b(g.substring(0, h)),
             x(c[l]) && (c[l] = b(g.substring(h + 1))));
    return c
  }
}
function gg() {
  this.$get = Od
}
function cd(a) {
  function b(d, c) {
    if (F(d)) {
      var e = {};
      r(d, function(a, c) {
        e[c] = b(c, a)
      });
      return e
    }
    return a.factory(d + 'Filter', c)
  }
  this.register = b;
  this.$get = [
    '$injector',
    function(a) {
      return function(b) {
        return a.get(b + 'Filter')
      }
    }
  ];
  b('currency', Pd);
  b('date', Qd);
  b('filter', Sg);
  b('json', Tg);
  b('limitTo', Ug);
  b('lowercase', Vg);
  b('number', Rd);
  b('orderBy', Sd);
  b('uppercase', Wg)
}
function Sg() {
  return function(a, b, d, c) {
    if (!xa(a)) {
      if (null == a) return a;
      throw M('filter')('notarray', a);
    }
    c = c || '$';
    var e;
    switch (Cc(b)) {
      case 'function':
        break;
      case 'boolean':
      case 'null':
      case 'number':
      case 'string':
        e = !0;
      case 'object':
        b = Xg(b, d, c, e);
        break;
      default:
        return a
    }
    return Array.prototype.filter.call(a, b)
  }
}
function Xg(a, b, d, c) {
  var e = F(a) && d in a;
  !0 === b ? b = ua : z(b) || (b = function(a, b) {
                        if (x(a)) return !1;
                        if (null === a || null === b) return a === b;
                        if (F(b) || F(a) && !ac(a)) return !1;
                        a = O('' + a);
                        b = O('' + b);
                        return -1 !== a.indexOf(b)
                      });
  return function(f) {
    return e && !F(f) ? Ma(f, a[d], b, d, !1) : Ma(f, a, b, d, c)
  }
}
function Ma(a, b, d, c, e, f) {
  var g = Cc(a), k = Cc(b);
  if ('string' === k && '!' === b.charAt(0))
    return !Ma(a, b.substring(1), d, c, e);
  if (I(a))
    return a.some(function(a) {
      return Ma(a, b, d, c, e)
    });
  switch (g) {
    case 'object':
      var h;
      if (e) {
        for (h in a)
          if (h.charAt && '$' !== h.charAt(0) && Ma(a[h], b, d, c, !0))
            return !0;
        return f ? !1 : Ma(a, b, d, c, !1)
      }
      if ('object' === k) {
        for (h in b)
          if (f = b[h],
              !z(f) && !x(f) && (g = h === c, !Ma(g ? a : a[h], f, d, c, g, g)))
            return !1;
        return !0
      }
      return d(a, b);
    case 'function':
      return !1;
    default:
      return d(a, b)
  }
}
function Cc(a) {
  return null === a ? 'null' : typeof a
}
function Pd(a) {
  var b = a.NUMBER_FORMATS;
  return function(a, c, e) {
    x(c) && (c = b.CURRENCY_SYM);
    x(e) && (e = b.PATTERNS[1].maxFrac);
    var f = c ? /\u00A4/g : /\s*\u00A4\s*/g;
    return null == a ?
        a :
        Td(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(f, c)
  }
}
function Rd(a) {
  var b = a.NUMBER_FORMATS;
  return function(a, c) {
    return null == a ? a : Td(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
  }
}
function Yg(a) {
  var b = 0, d, c, e, f, g;
  -1 < (c = a.indexOf(Ud)) && (a = a.replace(Ud, ''));
  0 < (e = a.search(/e/i)) ?
      (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) :
      0 > c && (c = a.length);
  for (e = 0; a.charAt(e) === Dc; e++)
    ;
  if (e === (g = a.length))
    d = [0], c = 1;
  else {
    for (g--; a.charAt(g) === Dc;) g--;
    c -= e;
    d = [];
    for (f = 0; e <= g; e++, f++) d[f] = +a.charAt(e)
  }
  c > Vd && (d = d.splice(0, Vd - 1), b = c - 1, c = 1);
  return {
    d: d, e: b, i: c
  }
}
function Zg(a, b, d, c) {
  var e = a.d, f = e.length - a.i;
  b = x(b) ? Math.min(Math.max(d, f), c) : +b;
  d = b + a.i;
  c = e[d];
  if (0 < d) {
    e.splice(Math.max(a.i, d));
    for (var g = d; g < e.length; g++) e[g] = 0
  } else
    for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1),
        e[0] = 0, g = 1;
         g < d; g++)
      e[g] = 0;
  if (5 <= c)
    if (0 > d - 1) {
      for (c = 0; c > d; c--) e.unshift(0), a.i++;
      e.unshift(1);
      a.i++
    } else
      e[d - 1]++;
  for (; f < Math.max(0, b); f++) e.push(0);
  if (b = e.reduceRight(function(a, b, c, d) {
        b += a;
        d[c] = b % 10;
        return Math.floor(b / 10)
      }, 0))
    e.unshift(b), a.i++
}
function Td(a, b, d, c, e) {
  if (!A(a) && !ba(a) || isNaN(a)) return '';
  var f = !isFinite(a), g = !1, k = Math.abs(a) + '', h = '';
  if (f)
    h = '\u221e';
  else {
    g = Yg(k);
    Zg(g, e, b.minFrac, b.maxFrac);
    h = g.d;
    k = g.i;
    e = g.e;
    f = [];
    for (g = h.reduce(function(a, b) {
           return a && !b
         }, !0); 0 > k;)
      h.unshift(0), k++;
    0 < k ? f = h.splice(k, h.length) : (f = h, h = [0]);
    k = [];
    for (h.length >= b.lgSize &&
             k.unshift(h.splice(-b.lgSize, h.length).join(''));
         h.length > b.gSize;)
      k.unshift(h.splice(-b.gSize, h.length).join(''));
    h.length && k.unshift(h.join(''));
    h = k.join(d);
    f.length && (h += c + f.join(''));
    e && (h += 'e+' + e)
  }
  return 0 > a && !g ? b.negPre + h + b.negSuf : b.posPre + h + b.posSuf
}
function Ob(a, b, d, c) {
  var e = '';
  if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = '-');
  for (a = '' + a; a.length < b;) a = Dc + a;
  d && (a = a.substr(a.length - b));
  return e + a
}
function ga(a, b, d, c, e) {
  d = d || 0;
  return function(f) {
    f = f['get' + a]();
    if (0 < d || f > -d) f += d;
    0 === f && -12 === d && (f = 12);
    return Ob(f, b, c, e)
  }
}
function kb(a, b, d) {
  return function(c, e) {
    var f = c['get' + a](),
        g = ub((d ? 'STANDALONE' : '') + (b ? 'SHORT' : '') + a);
    return e[g][f]
  }
}
function Wd(a) {
  var b = (new Date(a, 0, 1)).getDay();
  return new Date(a, 0, (4 >= b ? 5 : 12) - b)
}
function Xd(a) {
  return function(b) {
    var d = Wd(b.getFullYear());
    b = +new Date(
            b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) -
        +d;
    b = 1 + Math.round(b / 6048E5);
    return Ob(b, a)
  }
}
function Ec(a, b) {
  return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
}
function Qd(a) {
  function b(a) {
    var b;
    if (b = a.match(d)) {
      a = new Date(0);
      var f = 0, g = 0, k = b[8] ? a.setUTCFullYear : a.setFullYear,
          h = b[8] ? a.setUTCHours : a.setHours;
      b[9] && (f = da(b[9] + b[10]), g = da(b[9] + b[11]));
      k.call(a, da(b[1]), da(b[2]) - 1, da(b[3]));
      f = da(b[4] || 0) - f;
      g = da(b[5] || 0) - g;
      k = da(b[6] || 0);
      b = Math.round(1E3 * parseFloat('0.' + (b[7] || 0)));
      h.call(a, f, g, k, b)
    }
    return a
  }
  var d =
      /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
  return function(c, d, f) {
    var g = '', k = [], h, l;
    d = d || 'mediumDate';
    d = a.DATETIME_FORMATS[d] || d;
    A(c) && (c = $g.test(c) ? da(c) : b(c));
    ba(c) && (c = new Date(c));
    if (!ha(c) || !isFinite(c.getTime())) return c;
    for (; d;)
      (l = ah.exec(d)) ? (k = db(k, l, 1), d = k.pop()) : (k.push(d), d = null);
    var m = c.getTimezoneOffset();
    f && (m = dc(f, m), c = ec(c, f, !0));
    r(k, function(b) {
      h = bh[b];
      g += h ?
          h(c, a.DATETIME_FORMATS, m) :
          '\'\'' === b ? '\'' : b.replace(/(^'|'$)/g, '').replace(/''/g, '\'')
    });
    return g
  }
}
function Tg() {
  return function(a, b) {
    x(b) && (b = 2);
    return eb(a, b)
  }
}
function Ug() {
  return function(a, b, d) {
    b = Infinity === Math.abs(Number(b)) ? Number(b) : da(b);
    if (V(b)) return a;
    ba(a) && (a = a.toString());
    if (!xa(a)) return a;
    d = !d || isNaN(d) ? 0 : da(d);
    d = 0 > d ? Math.max(0, a.length + d) : d;
    return 0 <= b ? Fc(a, d, d + b) :
                    0 === d ? Fc(a, b, a.length) : Fc(a, Math.max(0, d + b), d)
  }
}
function Fc(a, b, d) {
  return A(a) ? a.slice(b, d) : Ga.call(a, b, d)
}
function Sd(a) {
  function b(b) {
    return b.map(function(b) {
      var c = 1, d = Ta;
      if (z(b))
        d = b;
      else if (A(b)) {
        if ('+' === b.charAt(0) || '-' === b.charAt(0))
          c = '-' === b.charAt(0) ? -1 : 1, b = b.substring(1);
        if ('' !== b && (d = a(b), d.constant))
          var e = d(), d = function(a) {
            return a[e]
          }
      }
      return {
        get: d, descending: c
      }
    })
  }
  function d(a) {
    switch (typeof a) {
      case 'number':
      case 'boolean':
      case 'string':
        return !0;
      default:
        return !1
    }
  }
  function c(a, b) {
    var c = 0, d = a.type, h = b.type;
    if (d === h) {
      var h = a.value, l = b.value;
      'string' === d ?
          (h = h.toLowerCase(), l = l.toLowerCase()) :
          'object' === d && (F(h) && (h = a.index), F(l) && (l = b.index));
      h !== l && (c = h < l ? -1 : 1)
    } else
      c = 'undefined' === d ?
          1 :
          'undefined' === h ?
          -1 :
          'null' === d ? 1 : 'null' === h ? -1 : d < h ? -1 : 1;
    return c
  }
  return function(a, f, g, k) {
    if (null == a) return a;
    if (!xa(a)) throw M('orderBy')('notarray', a);
    I(f) || (f = [f]);
    0 === f.length && (f = ['+']);
    var h = b(f), l = g ? -1 : 1, m = z(k) ? k : c;
    a = Array.prototype.map.call(a, function(a, b) {
      return {
        value: a, tieBreaker: {value: b, type: 'number', index: b},
            predicateValues: h.map(function(c) {
              var e = c.get(a);
              c = typeof e;
              if (null === e)
                c = 'null';
              else if ('object' === c)
                a: {if (z(e.valueOf) && (e = e.valueOf(), d(e))) break a;
                    ac(e) && (e = e.toString(), d(e))} return {
                  value: e, type: c, index: b
                }
            })
      }
    });
    a.sort(function(a, b) {
      for (var d = 0, e = h.length; d < e; d++) {
        var f = m(a.predicateValues[d], b.predicateValues[d]);
        if (f) return f * h[d].descending * l
      }
      return (m(a.tieBreaker, b.tieBreaker) || c(a.tieBreaker, b.tieBreaker)) *
          l
    });
    return a = a.map(function(a) {
      return a.value
    })
  }
}
function Na(a) {
  z(a) && (a = {link: a});
  a.restrict = a.restrict || 'AC';
  return ia(a)
}
function Pb(a, b, d, c, e) {
  this.$$controls = [];
  this.$error = {};
  this.$$success = {};
  this.$pending = void 0;
  this.$name = e(b.name || b.ngForm || '')(d);
  this.$dirty = !1;
  this.$valid = this.$pristine = !0;
  this.$submitted = this.$invalid = !1;
  this.$$parentForm = lb;
  this.$$element = a;
  this.$$animate = c;
  Yd(this)
}
function Yd(a) {
  a.$$classCache = {};
  a.$$classCache[Zd] = !(a.$$classCache[mb] = a.$$element.hasClass(mb))
}
function $d(a) {
  function b(a, b, c) {
    c && !a.$$classCache[b] ?
        (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) :
        !c && a.$$classCache[b] &&
            (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1)
  }
  function d(a, c, d) {
    c = c ? '-' + Uc(c, '-') : '';
    b(a, mb + c, !0 === d);
    b(a, Zd + c, !1 === d)
  }
  var c = a.set, e = a.unset;
  a.clazz.prototype.$setValidity = function(a, g, k) {
    x(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, k)) :
           (this.$pending && e(this.$pending, a, k),
            ae(this.$pending) && (this.$pending = void 0));
    Fa(g) ? g ? (e(this.$error, a, k), c(this.$$success, a, k)) :
                (c(this.$error, a, k), e(this.$$success, a, k)) :
            (e(this.$error, a, k), e(this.$$success, a, k));
    this.$pending ? (b(this, 'ng-pending', !0),
                     this.$valid = this.$invalid = void 0, d(this, '', null)) :
                    (b(this, 'ng-pending', !1), this.$valid = ae(this.$error),
                     this.$invalid = !this.$valid, d(this, '', this.$valid));
    g = this.$pending && this.$pending[a] ?
        void 0 :
        this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
    d(this, a, g);
    this.$$parentForm.$setValidity(a, g, this)
  }
}
function ae(a) {
  if (a)
    for (var b in a)
      if (a.hasOwnProperty(b)) return !1;
  return !0
}
function Gc(a) {
  a.$formatters.push(function(b) {
    return a.$isEmpty(b) ? b : b.toString()
  })
}
function Ra(a, b, d, c, e, f) {
  var g = O(b[0].type);
  if (!e.android) {
    var k = !1;
    b.on('compositionstart', function() {
      k = !0
    });
    b.on('compositionupdate', function(a) {
      if (x(a.data) || '' === a.data) k = !1
    });
    b.on('compositionend', function() {
      k = !1;
      l()
    })
  }
  var h, l = function(a) {
    h && (f.defer.cancel(h), h = null);
    if (!k) {
      var e = b.val();
      a = a && a.type;
      'password' === g || d.ngTrim && 'false' === d.ngTrim || (e = T(e));
      (c.$viewValue !== e || '' === e && c.$$hasNativeValidators) &&
          c.$setViewValue(e, a)
    }
  };
  if (e.hasEvent('input'))
    b.on('input', l);
  else {
    var m = function(a, b, c) {
      h || (h = f.defer(function() {
        h = null;
        b && b.value === c || l(a)
      }))
    };
    b.on('keydown', function(a) {
      var b = a.keyCode;
      91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b ||
          m(a, this, this.value)
    });
    if (e.hasEvent('paste')) b.on('paste cut drop', m)
  }
  b.on('change', l);
  if (be[g] && c.$$hasNativeValidators && g === d.type)
    b.on('keydown wheel mousedown', function(a) {
      if (!h) {
        var b = this.validity, c = b.badInput, d = b.typeMismatch;
        h = f.defer(function() {
          h = null;
          b.badInput === c && b.typeMismatch === d || l(a)
        })
      }
    });
  c.$render = function() {
    var a = c.$isEmpty(c.$viewValue) ? '' : c.$viewValue;
    b.val() !== a && b.val(a)
  }
}
function Qb(a, b) {
  return function(d, c) {
    var e, f;
    if (ha(d)) return d;
    if (A(d)) {
      '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) &&
          (d = d.substring(1, d.length - 1));
      if (ch.test(d)) return new Date(d);
      a.lastIndex = 0;
      if (e = a.exec(d))
        return e.shift(),
               f = c ? {
                 yyyy: c.getFullYear(),
                 MM: c.getMonth() + 1,
                 dd: c.getDate(),
                 HH: c.getHours(),
                 mm: c.getMinutes(),
                 ss: c.getSeconds(),
                 sss: c.getMilliseconds() / 1E3
               } :
                       {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0},
               r(e,
                 function(a, c) {
                   c < b.length && (f[b[c]] = +a)
                 }),
               e = new Date(
                   f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0,
                   1E3 * f.sss || 0),
               100 > f.yyyy && e.setFullYear(f.yyyy), e
    }
    return NaN
  }
}
function nb(a, b, d, c) {
  return function(e, f, g, k, h, l, m) {
    function q(a) {
      return a && !(a.getTime && a.getTime() !== a.getTime())
    }
    function n(a) {
      return v(a) && !ha(a) ? s(a) || void 0 : a
    }
    function s(a, b) {
      var c = k.$options.getOption('timezone');
      p && p !== c && (b = Rc(b, dc(p)));
      var e = d(a, b);
      !isNaN(e) && c && (e = ec(e, c));
      return e
    }
    Hc(e, f, g, k, a);
    Ra(e, f, g, k, h, l);
    var t = 'time' === a || 'datetimelocal' === a, u, p;
    k.$parsers.push(function(c) {
      if (k.$isEmpty(c)) return null;
      if (b.test(c)) return s(c, u);
      k.$$parserName = a
    });
    k.$formatters.push(function(a) {
      if (a && !ha(a)) throw ob('datefmt', a);
      if (q(a)) {
        u = a;
        var b = k.$options.getOption('timezone');
        b && (p = b, u = ec(u, b, !0));
        var d = c;
        t && A(k.$options.getOption('timeSecondsFormat')) &&
            (d = c.replace('ss.sss', k.$options.getOption('timeSecondsFormat'))
                     .replace(/:$/, ''));
        a = m('date')(a, d, b);
        t && k.$options.getOption('timeStripZeroSeconds') &&
            (a = a.replace(/(?::00)?(?:\.000)?$/, ''));
        return a
      }
      p = u = null;
      return ''
    });
    if (v(g.min) || g.ngMin) {
      var r;
      k.$validators.min = function(a) {
        return !q(a) || x(r) || d(a) >= r
      };
      g.$observe('min', function(a) {
        r = n(a);
        k.$validate()
      })
    }
    if (v(g.max) || g.ngMax) {
      var y;
      k.$validators.max = function(a) {
        return !q(a) || x(y) || d(a) <= y
      };
      g.$observe('max', function(a) {
        y = n(a);
        k.$validate()
      })
    }
  }
}
function Hc(a, b, d, c, e) {
  (c.$$hasNativeValidators = F(b[0].validity)) && c.$parsers.push(function(a) {
    var d = b.prop('validity') || {};
    if (d.badInput || d.typeMismatch)
      c.$$parserName = e;
    else
      return a
  })
}
function ce(a) {
  a.$parsers.push(function(b) {
    if (a.$isEmpty(b)) return null;
    if (dh.test(b)) return parseFloat(b);
    a.$$parserName = 'number'
  });
  a.$formatters.push(function(b) {
    if (!a.$isEmpty(b)) {
      if (!ba(b)) throw ob('numfmt', b);
      b = b.toString()
    }
    return b
  })
}
function Sa(a) {
  v(a) && !ba(a) && (a = parseFloat(a));
  return V(a) ? void 0 : a
}
function Ic(a) {
  var b = a.toString(), d = b.indexOf('.');
  return -1 === d ?
      -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 :
      b.length - d - 1
}
function de(a, b, d) {
  a = Number(a);
  var c = (a | 0) !== a, e = (b | 0) !== b, f = (d | 0) !== d;
  if (c || e || f) {
    var g = c ? Ic(a) : 0, k = e ? Ic(b) : 0, h = f ? Ic(d) : 0,
        g = Math.max(g, k, h), g = Math.pow(10, g);
    a *= g;
    b *= g;
    d *= g;
    c && (a = Math.round(a));
    e && (b = Math.round(b));
    f && (d = Math.round(d))
  }
  return 0 === (a - b) % d
}
function ee(a, b, d, c, e) {
  if (v(c)) {
    a = a(c);
    if (!a.constant) throw ob('constexpr', d, c);
    return a(b)
  }
  return e
}
function Jc(a, b) {
  function d(a, b) {
    if (!a || !a.length) return [];
    if (!b || !b.length) return a;
    var c = [], d = 0;
    a: for (; d < a.length; d++) {
      for (var e = a[d], m = 0; m < b.length; m++)
        if (e === b[m]) continue a;
      c.push(e)
    }
    return c
  }
  function c(a) {
    var b = a;
    I(a) ? b = a.map(c).join(' ') :
           F(a) &&
            (b = Object.keys(a)
                     .filter(function(b) {
                       return a[b]
                     })
                     .join(' '));
    return b
  }
  a = 'ngClass' + a;
  var e;
  return [
    '$parse',
    function(f) {
      return {
        restrict: 'AC', link: function(g, k, h) {
          function l(a, b) {
            var c = [];
            r(a, function(a) {
              if (0 < b || q[a])
                q[a] = (q[a] || 0) + b, q[a] === +(0 < b) && c.push(a)
            });
            return c.join(' ')
          }
          function m(a) {
            if (a === b) {
              var c = s, c = l(c && c.split(' '), 1);
              h.$addClass(c)
            } else
              c = s, c = l(c && c.split(' '), -1), h.$removeClass(c);
            n = a
          }
          var q = k.data('$classCounts'), n = !0, s;
          q || (q = S(), k.data('$classCounts', q));
          'ngClass' !== a && (e || (e = f('$index', function(a) {
                                      return a & 1
                                    })), g.$watch(e, m));
          g.$watch(f(h[a], c), function(a) {
            if (n === b) {
              var c = s && s.split(' '), e = a && a.split(' '), f = d(c, e),
                  c = d(e, c), f = l(f, -1), c = l(c, 1);
              h.$addClass(c);
              h.$removeClass(f)
            }
            s = a
          })
        }
      }
    }
  ]
}
function pd(a, b, d, c, e, f) {
  return {
    restrict: 'A', compile: function(g, k) {
      var h = a(k[c]);
      return function(a, c) {
        c.on(e, function(c) {
          var e = function() {
            h(a, {$event: c})
          };
          if (b.$$phase)
            if (f)
              a.$evalAsync(e);
            else
              try {
                e()
              } catch (g) {
                d(g)
              }
          else
            a.$apply(e)
        })
      }
    }
  }
}
function Rb(a, b, d, c, e, f, g, k, h) {
  this.$modelValue = this.$viewValue = Number.NaN;
  this.$$rawModelValue = void 0;
  this.$validators = {};
  this.$asyncValidators = {};
  this.$parsers = [];
  this.$formatters = [];
  this.$viewChangeListeners = [];
  this.$untouched = !0;
  this.$touched = !1;
  this.$pristine = !0;
  this.$dirty = !1;
  this.$valid = !0;
  this.$invalid = !1;
  this.$error = {};
  this.$$success = {};
  this.$pending = void 0;
  this.$name = h(d.name || '', !1)(a);
  this.$$parentForm = lb;
  this.$options = Sb;
  this.$$updateEvents = '';
  this.$$updateEventHandler = this.$$updateEventHandler.bind(this);
  this.$$parsedNgModel = e(d.ngModel);
  this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
  this.$$ngModelGet = this.$$parsedNgModel;
  this.$$ngModelSet = this.$$parsedNgModelAssign;
  this.$$pendingDebounce = null;
  this.$$parserValid = void 0;
  this.$$parserName = 'parse';
  this.$$currentValidationRunId = 0;
  this.$$scope = a;
  this.$$rootScope = a.$root;
  this.$$attr = d;
  this.$$element = c;
  this.$$animate = f;
  this.$$timeout = g;
  this.$$parse = e;
  this.$$q = k;
  this.$$exceptionHandler = b;
  Yd(this);
  eh(this)
}
function eh(a) {
  a.$$scope.$watch(function(b) {
    b = a.$$ngModelGet(b);
    b === a.$modelValue || a.$modelValue !== a.$modelValue && b !== b ||
        a.$$setModelValue(b);
    return b
  })
}
function Kc(a) {
  this.$$options = a
}
function fe(a, b) {
  r(b, function(b, c) {
    v(a[c]) || (a[c] = b)
  })
}
function Ea(a, b) {
  a.prop('selected', b);
  a.attr('selected', b)
}
var Vb = {objectMaxDepth: 5, urlErrorParamsEnabled: !0},
    fh = /^\/(.+)\/([a-z]*)$/, sa = Object.prototype.hasOwnProperty,
    O =
        function(a) {
      return A(a) ? a.toLowerCase() : a
    },
    ub =
        function(a) {
      return A(a) ? a.toUpperCase() : a
    },
    Aa, y, rb, Ga = [].slice, Bg = [].splice, gh = [].push,
    ma = Object.prototype.toString, Oc = Object.getPrototypeOf, Ia = M('ng'),
    ea = B.angular || (B.angular = {}), jc, pb = 0;
Aa = B.document.documentMode;
var V = Number.isNaN || function(a) {
  return a !== a
};
C.$inject = [];
Ta.$inject = [];
var se =
        /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
    T = function(a) {
      return A(a) ? a.trim() : a
    }, Ld = function(a) {
      return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, '\\$1')
          .replace(/\x08/g, '\\x08')
    }, pa = function() {
      if (!v(pa.rules)) {
        var a = B.document.querySelector('[ng-csp]') ||
            B.document.querySelector('[data-ng-csp]');
        if (a) {
          var b = a.getAttribute('ng-csp') || a.getAttribute('data-ng-csp');
          pa.rules = {
            noUnsafeEval: !b || -1 !== b.indexOf('no-unsafe-eval'),
            noInlineStyle: !b || -1 !== b.indexOf('no-inline-style')
          }
        } else {
          a = pa;
          try {
            new Function(''), b = !1
          } catch (d) {
            b = !0
          }
          a.rules = {noUnsafeEval: b, noInlineStyle: !1}
        }
      }
      return pa.rules
    }, qb = function() {
      if (v(qb.name_)) return qb.name_;
      var a, b, d = Pa.length, c, e;
      for (b = 0; b < d; ++b)
        if (c = Pa[b],
            a = B.document.querySelector('[' + c.replace(':', '\\:') + 'jq]')) {
          e = a.getAttribute(c + 'jq');
          break
        }
      return qb.name_ = e
    }, ue = /:/g, Pa = ['ng-', 'data-ng-', 'ng:', 'x-ng-'], ye = function(a) {
      var b = a.currentScript;
      if (!b) return !0;
      if (!(b instanceof B.HTMLScriptElement ||
            b instanceof B.SVGScriptElement))
        return !1;
      b = b.attributes;
      return [
        b.getNamedItem('src'), b.getNamedItem('href'),
        b.getNamedItem('xlink:href')
      ].every(function(b) {
        if (!b) return !0;
        if (!b.value) return !1;
        var c = a.createElement('a');
        c.href = b.value;
        if (a.location.origin === c.origin) return !0;
        switch (c.protocol) {
          case 'http:':
          case 'https:':
          case 'ftp:':
          case 'blob:':
          case 'file:':
          case 'data:':
            return !0;
          default:
            return !1
        }
      })
    }(B.document), Be = /[A-Z]/g, Vc = !1, Oa = 3, He = {
      full: '1.7.4',
      major: 1,
      minor: 7,
      dot: 4,
      codeName: 'interstellar-exploration'
    };
W.expando = 'ng339';
var Ja = W.cache = {}, lg = 1;
W._data = function(a) {
  return this.cache[a[this.expando]] || {}
};
var hg = /-([a-z])/g, hh = /^-ms-/,
    Ab = {mouseleave: 'mouseout', mouseenter: 'mouseover'}, mc = M('jqLite'),
    kg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, lc = /<|&#?\w+;/, ig = /<([\w:-]+)/,
    jg =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ja = {
      option: [1, '<select multiple="multiple">', '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    };
ja.optgroup = ja.option;
ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;
ja.th = ja.td;
var qg = B.Node.prototype.contains ||
    function(a) {
      return !!(this.compareDocumentPosition(a) & 16)
    },
    Wa = W.prototype = {
      ready: ed,
      toString: function() {
        var a = [];
        r(this, function(b) {
          a.push('' + b)
        });
        return '[' + a.join(', ') + ']'
      },
      eq: function(a) {
        return 0 <= a ? y(this[a]) : y(this[this.length + a])
      },
      length: 0,
      push: gh,
      sort: [].sort,
      splice: [].splice
    },
    Gb = {};
r('multiple selected checked disabled readOnly required open'.split(' '),
  function(a) {
    Gb[O(a)] = a
  });
var ld = {};
r('input select option textarea button form details'.split(' '), function(a) {
  ld[a] = !0
});
var sd = {
  ngMinlength: 'minlength',
  ngMaxlength: 'maxlength',
  ngMin: 'min',
  ngMax: 'max',
  ngPattern: 'pattern',
  ngStep: 'step'
};
r({
  data: qc,
  removeData: pc,
  hasData: function(a) {
    for (var b in Ja[a.ng339]) return !0;
    return !1
  },
  cleanData: function(a) {
    for (var b = 0, d = a.length; b < d; b++) pc(a[b]), hd(a[b])
  }
},
  function(a, b) {
    W[b] = a
  });
r({
  data: qc,
  inheritedData: Eb,
  scope: function(a) {
    return y.data(a, '$scope') ||
        Eb(a.parentNode || a, ['$isolateScope', '$scope'])
  },
  isolateScope: function(a) {
    return y.data(a, '$isolateScope') || y.data(a, '$isolateScopeNoTemplate')
  },
  controller: id,
  injector: function(a) {
    return Eb(a, '$injector')
  },
  removeAttr: function(a, b) {
    a.removeAttribute(b)
  },
  hasClass: Bb,
  css: function(a, b, d) {
    b = xb(b.replace(hh, 'ms-'));
    if (v(d))
      a.style[b] = d;
    else
      return a.style[b]
  },
  attr: function(a, b, d) {
    var c = a.nodeType;
    if (c !== Oa && 2 !== c && 8 !== c && a.getAttribute) {
      var c = O(b), e = Gb[c];
      if (v(d))
        null === d || !1 === d && e ? a.removeAttribute(b) :
                                      a.setAttribute(b, e ? c : d);
      else
        return a = a.getAttribute(b), e && null !== a && (a = c),
               null === a ? void 0 : a
    }
  },
  prop: function(a, b, d) {
    if (v(d))
      a[b] = d;
    else
      return a[b]
  },
  text: function() {
    function a(a, d) {
      if (x(d)) {
        var c = a.nodeType;
        return 1 === c || c === Oa ? a.textContent : ''
      }
      a.textContent = d
    }
    a.$dv = '';
    return a
  }(),
  val: function(a, b) {
    if (x(b)) {
      if (a.multiple && 'select' === ta(a)) {
        var d = [];
        r(a.options, function(a) {
          a.selected && d.push(a.value || a.text)
        });
        return d
      }
      return a.value
    }
    a.value = b
  },
  html: function(a, b) {
    if (x(b)) return a.innerHTML;
    yb(a, !0);
    a.innerHTML = b
  },
  empty: jd
},
  function(a, b) {
    W.prototype[b] = function(b, c) {
      var e, f, g = this.length;
      if (a !== jd && x(2 === a.length && a !== Bb && a !== id ? b : c)) {
        if (F(b)) {
          for (e = 0; e < g; e++)
            if (a === qc)
              a(this[e], b);
            else
              for (f in b) a(this[e], f, b[f]);
          return this
        }
        e = a.$dv;
        g = x(e) ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var k = a(this[f], b, c);
          e = e ? e + k : k
        }
        return e
      }
      for (e = 0; e < g; e++) a(this[e], b, c);
      return this
    }
  });
r({
  removeData: pc,
  on: function(a, b, d, c) {
    if (v(c)) throw mc('onargs');
    if (kc(a)) {
      c = zb(a, !0);
      var e = c.events, f = c.handle;
      f || (f = c.handle = ng(a, e));
      c = 0 <= b.indexOf(' ') ? b.split(' ') : [b];
      for (var g = c.length, k = function(b, c, g) {
             var k = e[b];
             k ||
                 (k = e[b] = [], k.specialHandlerWrapper = c,
                  '$destroy' === b || g || a.addEventListener(b, f));
             k.push(d)
           }; g--;)
        b = c[g], Ab[b] ? (k(Ab[b], pg), k(b, void 0, !0)) : k(b)
    }
  },
  off: hd,
  one: function(a, b, d) {
    a = y(a);
    a.on(b, function e() {
      a.off(b, d);
      a.off(b, e)
    });
    a.on(b, d)
  },
  replaceWith: function(a, b) {
    var d, c = a.parentNode;
    yb(a);
    r(new W(b), function(b) {
      d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
      d = b
    })
  },
  children: function(a) {
    var b = [];
    r(a.childNodes, function(a) {
      1 === a.nodeType && b.push(a)
    });
    return b
  },
  contents: function(a) {
    return a.contentDocument || a.childNodes || []
  },
  append: function(a, b) {
    var d = a.nodeType;
    if (1 === d || 11 === d) {
      b = new W(b);
      for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d])
    }
  },
  prepend: function(a, b) {
    if (1 === a.nodeType) {
      var d = a.firstChild;
      r(new W(b), function(b) {
        a.insertBefore(b, d)
      })
    }
  },
  wrap: function(a, b) {
    var d = y(b).eq(0).clone()[0], c = a.parentNode;
    c && c.replaceChild(d, a);
    d.appendChild(a)
  },
  remove: Fb,
  detach: function(a) {
    Fb(a, !0)
  },
  after: function(a, b) {
    var d = a, c = a.parentNode;
    if (c) {
      b = new W(b);
      for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];
        c.insertBefore(g, d.nextSibling);
        d = g
      }
    }
  },
  addClass: Db,
  removeClass: Cb,
  toggleClass: function(a, b, d) {
    b && r(b.split(' '), function(b) {
      var e = d;
      x(e) && (e = !Bb(a, b));
      (e ? Db : Cb)(a, b)
    })
  },
  parent: function(a) {
    return (a = a.parentNode) && 11 !== a.nodeType ? a : null
  },
  next: function(a) {
    return a.nextElementSibling
  },
  find: function(a, b) {
    return a.getElementsByTagName ? a.getElementsByTagName(b) : []
  },
  clone: oc,
  triggerHandler: function(a, b, d) {
    var c, e, f = b.type || b, g = zb(a);
    if (g = (g = g && g.events) && g[f])
      c = {
        preventDefault: function() {
          this.defaultPrevented = !0
        },
        isDefaultPrevented: function() {
          return !0 === this.defaultPrevented
        },
        stopImmediatePropagation: function() {
          this.immediatePropagationStopped = !0
        },
        isImmediatePropagationStopped: function() {
          return !0 === this.immediatePropagationStopped
        },
        stopPropagation: C,
        type: f,
        target: a
      },
      b.type && (c = R(c, b)), b = oa(g), e = d ? [c].concat(d) : [c],
      r(b, function(b) {
        c.isImmediatePropagationStopped() || b.apply(a, e)
      })
  }
},
  function(a, b) {
    W.prototype[b] = function(b, c, e) {
      for (var f, g = 0, k = this.length; g < k; g++)
        x(f) ? (f = a(this[g], b, c, e), v(f) && (f = y(f))) :
               nc(f, a(this[g], b, c, e));
      return v(f) ? f : this
    }
  });
W.prototype.bind = W.prototype.on;
W.prototype.unbind = W.prototype.off;
var ih = Object.create(null);
md.prototype = {
  _idx: function(a) {
    a !== this._lastKey &&
        (this._lastKey = a, this._lastIndex = this._keys.indexOf(a));
    return this._lastIndex
  },
  _transformKey: function(a) {
    return V(a) ? ih : a
  },
  get: function(a) {
    a = this._transformKey(a);
    a = this._idx(a);
    if (-1 !== a) return this._values[a]
  },
  has: function(a) {
    a = this._transformKey(a);
    return -1 !== this._idx(a)
  },
  set: function(a, b) {
    a = this._transformKey(a);
    var d = this._idx(a);
    -1 === d && (d = this._lastIndex = this._keys.length);
    this._keys[d] = a;
    this._values[d] = b
  },
  delete: function(a) {
    a = this._transformKey(a);
    a = this._idx(a);
    if (-1 === a) return !1;
    this._keys.splice(a, 1);
    this._values.splice(a, 1);
    this._lastKey = NaN;
    this._lastIndex = -1;
    return !0
  }
};
var Hb = md, fg = [function() {
               this.$get = [function() {
                 return Hb
               }]
             }],
    sg = /^([^(]+?)=>/, tg = /^[^(]*\(\s*([^)]*)\)/m, jh = /,/,
    kh = /^\s*(_?)(\S+?)\1\s*$/, rg = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
    za = M('$injector');
fb.$$annotate = function(a, b, d) {
  var c;
  if ('function' === typeof a) {
    if (!(c = a.$inject)) {
      c = [];
      if (a.length) {
        if (b) throw A(d) && d || (d = a.name || ug(a)), za('strictdi', d);
        b = nd(a);
        r(b[1].split(jh), function(a) {
          a.replace(kh, function(a, b, d) {
            c.push(d)
          })
        })
      }
      a.$inject = c
    }
  } else
    I(a) ? (b = a.length - 1, sb(a[b], 'fn'), c = a.slice(0, b)) :
           sb(a, 'fn', !0);
  return c
};
var ge = M('$animate'),
    vf =
        function() {
      this.$get = C
    },
    wf =
        function() {
      var a = new Hb, b = [];
      this.$get = [
        '$$AnimateRunner', '$rootScope',
        function(d, c) {
          function e(a, b, c) {
            var d = !1;
            b && (b = A(b) ? b.split(' ') : I(b) ? b : [], r(b, function(b) {
                    b && (d = !0, a[b] = c)
                  }));
            return d
          }
          function f() {
            r(b, function(b) {
              var c = a.get(b);
              if (c) {
                var d = vg(b.attr('class')), e = '', f = '';
                r(c, function(a, b) {
                  a !== !!d[b] &&
                      (a ? e += (e.length ? ' ' : '') + b :
                           f += (f.length ? ' ' : '') + b)
                });
                r(b, function(a) {
                  e && Db(a, e);
                  f && Cb(a, f)
                });
                a.delete(b)
              }
            });
            b.length = 0
          }
          return {
            enabled: C, on: C, off: C, pin: C, push: function(g, k, h, l) {
              l && l();
              h = h || {};
              h.from && g.css(h.from);
              h.to && g.css(h.to);
              if (h.addClass || h.removeClass)
                if (k = h.addClass, l = h.removeClass, h = a.get(g) || {},
                    k = e(h, k, !0), l = e(h, l, !1), k || l)
                  a.set(g, h), b.push(g), 1 === b.length && c.$$postDigest(f);
              g = new d;
              g.complete();
              return g
            }
          }
        }
      ]
    },
    tf =
        [
          '$provide',
          function(a) {
            var b = this, d = null, c = null;
            this.$$registeredAnimations = Object.create(null);
            this.register = function(c, d) {
              if (c && '.' !== c.charAt(0)) throw ge('notcsel', c);
              var g = c + '-animation';
              b.$$registeredAnimations[c.substr(1)] = g;
              a.factory(g, d)
            };
            this.customFilter = function(a) {
              1 === arguments.length && (c = z(a) ? a : null);
              return c
            };
            this.classNameFilter = function(a) {
              if (1 === arguments.length &&
                  (d = a instanceof RegExp ? a : null) &&
                  /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))
                throw d = null, ge('nongcls', 'ng-animate');
              return d
            };
            this.$get = [
              '$$animateQueue',
              function(a) {
                function b(a, c, d) {
                  if (d) {
                    var e;
                    a: {
                      for (e = 0; e < d.length; e++) {
                        var f = d[e];
                        if (1 === f.nodeType) {
                          e = f;
                          break a
                        }
                      } e = void 0
                    }!e ||
                        e.parentNode || e.previousElementSibling || (d = null)
                  }
                  d ? d.after(a) : c.prepend(a)
                }
                return {
                  on: a.on, off: a.off, pin: a.pin, enabled: a.enabled,
                      cancel: function(a) {
                        a.cancel && a.cancel()
                      }, enter: function(c, d, h, l) {
                        d = d && y(d);
                        h = h && y(h);
                        d = d || h.parent();
                        b(c, d, h);
                        return a.push(c, 'enter', Ba(l))
                      }, move: function(c, d, h, l) {
                        d = d && y(d);
                        h = h && y(h);
                        d = d || h.parent();
                        b(c, d, h);
                        return a.push(c, 'move', Ba(l))
                      }, leave: function(b, c) {
                        return a.push(b, 'leave', Ba(c), function() {
                          b.remove()
                        })
                      }, addClass: function(b, c, d) {
                        d = Ba(d);
                        d.addClass = hb(d.addclass, c);
                        return a.push(b, 'addClass', d)
                      }, removeClass: function(b, c, d) {
                        d = Ba(d);
                        d.removeClass = hb(d.removeClass, c);
                        return a.push(b, 'removeClass', d)
                      }, setClass: function(b, c, d, f) {
                        f = Ba(f);
                        f.addClass = hb(f.addClass, c);
                        f.removeClass = hb(f.removeClass, d);
                        return a.push(b, 'setClass', f)
                      }, animate: function(b, c, d, f, m) {
                        m = Ba(m);
                        m.from = m.from ? R(m.from, c) : c;
                        m.to = m.to ? R(m.to, d) : d;
                        m.tempClasses =
                            hb(m.tempClasses, f || 'ng-inline-animate');
                        return a.push(b, 'animate', m)
                      }
                }
              }
            ]
          }
        ],
    yf = function() {
      this.$get = [
        '$$rAF',
        function(a) {
          function b(b) {
            d.push(b);
            1 < d.length || a(function() {
              for (var a = 0; a < d.length; a++) d[a]();
              d = []
            })
          }
          var d = [];
          return function() {
            var a = !1;
            b(function() {
              a = !0
            });
            return function(d) {
              a ? d() : b(d)
            }
          }
        }
      ]
    }, xf = function() {
      this.$get = [
        '$q', '$sniffer', '$$animateAsyncRun', '$$isDocumentHidden', '$timeout',
        function(a, b, d, c, e) {
          function f(a) {
            this.setHost(a);
            var b = d();
            this._doneCallbacks = [];
            this._tick = function(a) {
              c() ? e(a, 0, !1) : b(a)
            };
            this._state = 0
          }
          f.chain = function(a, b) {
            function c() {
              if (d === a.length)
                b(!0);
              else
                a[d](function(a) {
                  !1 === a ? b(!1) : (d++, c())
                })
            }
            var d = 0;
            c()
          };
          f.all = function(a, b) {
            function c(f) {
              e = e && f;
              ++d === a.length && b(e)
            }
            var d = 0, e = !0;
            r(a, function(a) {
              a.done(c)
            })
          };
          f.prototype = {
            setHost: function(a) {
              this.host = a || {}
            },
            done: function(a) {
              2 === this._state ? a() : this._doneCallbacks.push(a)
            },
            progress: C,
            getPromise: function() {
              if (!this.promise) {
                var b = this;
                this.promise = a(function(a, c) {
                  b.done(function(b) {
                    !1 === b ? c() : a()
                  })
                })
              }
              return this.promise
            },
            then: function(a, b) {
              return this.getPromise().then(a, b)
            },
            'catch': function(a) {
              return this.getPromise()['catch'](a)
            },
            'finally': function(a) {
              return this.getPromise()['finally'](a)
            },
            pause: function() {
              this.host.pause && this.host.pause()
            },
            resume: function() {
              this.host.resume && this.host.resume()
            },
            end: function() {
              this.host.end && this.host.end();
              this._resolve(!0)
            },
            cancel: function() {
              this.host.cancel && this.host.cancel();
              this._resolve(!1)
            },
            complete: function(a) {
              var b = this;
              0 === b._state && (b._state = 1, b._tick(function() {
                b._resolve(a)
              }))
            },
            _resolve: function(a) {
              2 !== this._state &&
                  (r(this._doneCallbacks, function(b) {
                     b(a)
                   }), this._doneCallbacks.length = 0, this._state = 2)
            }
          };
          return f
        }
      ]
    }, uf = function() {
      this.$get = [
        '$$rAF', '$q', '$$AnimateRunner',
        function(a, b, d) {
          return function(b, e) {
            function f() {
              a(function() {
                g.addClass && (b.addClass(g.addClass), g.addClass = null);
                g.removeClass &&
                    (b.removeClass(g.removeClass), g.removeClass = null);
                g.to && (b.css(g.to), g.to = null);
                k || h.complete();
                k = !0
              });
              return h
            }
            var g = e || {};
            g.$$prepared || (g = Ha(g));
            g.cleanupStyles && (g.from = g.to = null);
            g.from && (b.css(g.from), g.from = null);
            var k, h = new d;
            return {
              start: f, end: f
            }
          }
        }
      ]
    }, aa = M('$compile'), sc = new function() {};
Wc.$inject = ['$provide', '$$sanitizeUriProvider'];
Jb.prototype.isFirstChange = function() {
  return this.previousValue === sc
};
var od = /^((?:x|data)[:\-_])/i, Ag = /[:\-_]+(.)/g, ud = M('$controller'),
    td = /^(\S+)(\s+as\s+([\w$]+))?$/,
    Ff =
        function() {
      this.$get = [
        '$document',
        function(a) {
          return function(b) {
            b ? !b.nodeType && b instanceof y && (b = b[0]) : b = a[0].body;
            return b.offsetWidth + 1
          }
        }
      ]
    },
    vd = 'application/json', vc = {'Content-Type': vd + ';charset=utf-8'},
    Dg = /^\[|^\{(?!\{)/, Eg = {'[': /]$/, '{': /}$/}, Cg = /^\)]\}',?\n/,
    Kb = M('$http'), Ca = ea.$interpolateMinErr = M('$interpolate');
Ca.throwNoconcat = function(a) {
  throw Ca('noconcat', a);
};
Ca.interr = function(a, b) {
  return Ca('interr', a, b.toString())
};
var Hg = M('$interval'),
    Of =
        function() {
      this.$get = function() {
        function a(a) {
          var b = function(a) {
            b.data = a;
            b.called = !0
          };
          b.id = a;
          return b
        }
        var b = ea.callbacks, d = {};
        return {
          createCallback: function(c) {
            c = '_' + (b.$$counter++).toString(36);
            var e = 'angular.callbacks.' + c, f = a(c);
            d[e] = b[c] = f;
            return e
          }, wasCalled: function(a) {
            return d[a].called
          }, getResponse: function(a) {
            return d[a].data
          }, removeCallback: function(a) {
            delete b[d[a].id];
            delete d[a]
          }
        }
      }
    },
    lh = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, Ig = {http: 80, https: 443, ftp: 21},
    jb = M('$location'), Jg = /^\s*[\\/]{2,}/, mh = {
      $$absUrl: '',
      $$html5: !1,
      $$replace: !1,
      $$compose: function() {
        for (var a = this.$$path, b = this.$$hash, d = ve(this.$$search),
                 b = b ? '#' + gc(b) : '', a = a.split('/'), c = a.length;
             c--;)
          a[c] = gc(a[c].replace(/%2F/g, '/'));
        this.$$url = a.join('/') + (d ? '?' + d : '') + b;
        this.$$absUrl = this.$$normalizeUrl(this.$$url);
        this.$$urlUpdatedByLocation = !0
      },
      absUrl: Lb('$$absUrl'),
      url: function(a) {
        if (x(a)) return this.$$url;
        var b = lh.exec(a);
        (b[1] || '' === a) && this.path(decodeURIComponent(b[1]));
        (b[2] || b[1] || '' === a) && this.search(b[3] || '');
        this.hash(b[5] || '');
        return this
      },
      protocol: Lb('$$protocol'),
      host: Lb('$$host'),
      port: Lb('$$port'),
      path:
          Cd('$$path',
             function(a) {
               a = null !== a ? a.toString() : '';
               return '/' === a.charAt(0) ? a : '/' + a
             }),
      search: function(a, b) {
        switch (arguments.length) {
          case 0:
            return this.$$search;
          case 1:
            if (A(a) || ba(a))
              a = a.toString(), this.$$search = fc(a);
            else if (F(a))
              a = Ha(a, {}), r(a, function(b, c) {
                null == b && delete a[c]
              }), this.$$search = a;
            else
              throw jb('isrcharg');
            break;
          default:
            x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
        }
        this.$$compose();
        return this
      },
      hash:
          Cd('$$hash',
             function(a) {
               return null !== a ? a.toString() : ''
             }),
      replace: function() {
        this.$$replace = !0;
        return this
      }
    };
r([Bd, yc, xc], function(a) {
  a.prototype = Object.create(mh);
  a.prototype.state = function(b) {
    if (!arguments.length) return this.$$state;
    if (a !== xc || !this.$$html5) throw jb('nostate');
    this.$$state = x(b) ? null : b;
    this.$$urlUpdatedByLocation = !0;
    return this
  }
});
var Ya = M('$parse'), Ng = {}.constructor.prototype.valueOf, Tb = S();
r('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function(a) {
  Tb[a] = !0
});
var nh = {n: '\n', f: '\f', r: '\r', t: '\t', v: '\v', '\'': '\'', '"': '"'},
    Nb = function(a) {
      this.options = a
    };
Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||'\''===a)this.readString(a);else if(this.isNumber(a)||'.'===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,'(){}[].,;:?'))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Tb[b],e=Tb[d];Tb[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError('Unexpected next character ',this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return'0'<=a&&'9'>=a&&'string'===typeof a},isWhitespace:function(a){return' '===a||'\r'===a||'\t'===a||'\n'===a||'\v'===a||'\u00a0'===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return'a'<=a&&'z'>=a||'A'<=a&&'Z'>=a||'_'===a||'$'===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return'-'===a||'+'===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?'s '+b+'-'+this.index+' ['+this.text.substring(b,d)+']':' '+d;throw Ya('lexerr',a,b,this.text);},readNumber:function(){for(var a='',b=this.index;this.index<
this.text.length;){var d=O(this.text.charAt(this.index));if('.'===d||this.isNumber(d))a+=d;else{var c=this.peek();if('e'===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&'e'===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||'e'!==a.charAt(a.length-1))break;else this.throwError('Invalid exponent')}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d='',c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)'u'===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError('Invalid unicode escape [\\u'+e+']'),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=nh[f]||f,e=!1;else if('\\'===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError('Unterminated quote',b)}};
var p = function(a, b) {
  this.lexer = a;
  this.options = b
};
p.Program = 'Program';
p.ExpressionStatement = 'ExpressionStatement';
p.AssignmentExpression = 'AssignmentExpression';
p.ConditionalExpression = 'ConditionalExpression';
p.LogicalExpression = 'LogicalExpression';
p.BinaryExpression = 'BinaryExpression';
p.UnaryExpression = 'UnaryExpression';
p.CallExpression = 'CallExpression';
p.MemberExpression = 'MemberExpression';
p.Identifier = 'Identifier';
p.Literal = 'Literal';
p.ArrayExpression = 'ArrayExpression';
p.Property = 'Property';
p.ObjectExpression = 'ObjectExpression';
p.ThisExpression = 'ThisExpression';
p.LocalsExpression = 'LocalsExpression';
p.NGValueParameter = 'NGValueParameter';
p.prototype = {
  ast: function(a) {
    this.text = a;
    this.tokens = this.lexer.lex(a);
    a = this.program();
    0 !== this.tokens.length &&
        this.throwError('is an unexpected token', this.tokens[0]);
    return a
  },
  program: function() {
    for (var a = [];;)
      if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') &&
              a.push(this.expressionStatement()),
          !this.expect(';'))
        return {
          type: p.Program, body: a
        }
  },
  expressionStatement: function() {
    return {
      type: p.ExpressionStatement, expression: this.filterChain()
    }
  },
  filterChain: function() {
    for (var a = this.expression(); this.expect('|');) a = this.filter(a);
    return a
  },
  expression: function() {
    return this.assignment()
  },
  assignment: function() {
    var a = this.ternary();
    if (this.expect('=')) {
      if (!Gd(a)) throw Ya('lval');
      a = {
        type: p.AssignmentExpression,
        left: a,
        right: this.assignment(),
        operator: '='
      }
    }
    return a
  },
  ternary: function() {
    var a = this.logicalOR(), b, d;
    return this.expect('?') && (b = this.expression(), this.consume(':')) ?
        (d = this.expression(), {
          type: p.ConditionalExpression,
          test: a,
          alternate: b,
          consequent: d
        }) :
        a
  },
  logicalOR: function() {
    for (var a = this.logicalAND(); this.expect('||');)
      a = {
        type: p.LogicalExpression,
        operator: '||',
        left: a,
        right: this.logicalAND()
      };
    return a
  },
  logicalAND: function() {
    for (var a = this.equality(); this.expect('&&');)
      a = {
        type: p.LogicalExpression,
        operator: '&&',
        left: a,
        right: this.equality()
      };
    return a
  },
  equality: function() {
    for (var a = this.relational(), b;
         b = this.expect('==', '!=', '===', '!==');)
      a = {
        type: p.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.relational()
      };
    return a
  },
  relational: function() {
    for (var a = this.additive(), b; b = this.expect('<', '>', '<=', '>=');)
      a = {
        type: p.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.additive()
      };
    return a
  },
  additive: function() {
    for (var a = this.multiplicative(), b; b = this.expect('+', '-');)
      a = {
        type: p.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.multiplicative()
      };
    return a
  },
  multiplicative: function() {
    for (var a = this.unary(), b; b = this.expect('*', '/', '%');)
      a = {
        type: p.BinaryExpression,
        operator: b.text,
        left: a,
        right: this.unary()
      };
    return a
  },
  unary: function() {
    var a;
    return (a = this.expect('+', '-', '!')) ? {
      type: p.UnaryExpression,
      operator: a.text,
      prefix: !0,
      argument: this.unary()
    } :
                                              this.primary()
  },
  primary: function() {
    var a;
    this.expect('(') ? (a = this.filterChain(), this.consume(')')) :
                       this.expect('[') ?
                       a = this.arrayDeclaration() :
                       this.expect('{') ?
                       a = this.object() :
                       this.selfReferential.hasOwnProperty(this.peek().text) ?
                       a = Ha(this.selfReferential[this.consume().text]) :
                       this.options.literals.hasOwnProperty(this.peek().text) ?
                       a = {
                         type: p.Literal,
                         value: this.options.literals[this.consume().text]
                       } :
                       this.peek().identifier ?
                       a = this.identifier() :
                       this.peek().constant ?
                       a = this.constant() :
                       this.throwError('not a primary expression', this.peek());
    for (var b; b = this.expect('(', '[', '.');)
      '(' === b.text ?
          (a = {
            type: p.CallExpression,
            callee: a,
            arguments: this.parseArguments()
          },
           this.consume(')')) :
          '[' === b.text ? (a = {
            type: p.MemberExpression,
            object: a,
            property: this.expression(),
            computed: !0
          },
                            this.consume(']')) :
                           '.' === b.text ? a = {
                             type: p.MemberExpression,
                             object: a,
                             property: this.identifier(),
                             computed: !1
                           } :
                                            this.throwError('IMPOSSIBLE');
    return a
  },
  filter: function(a) {
    a = [a];
    for (var b = {
           type: p.CallExpression,
           callee: this.identifier(),
           arguments: a,
           filter: !0
         };
         this.expect(':');)
      a.push(this.expression());
    return b
  },
  parseArguments: function() {
    var a = [];
    if (')' !== this.peekToken().text) {
      do
        a.push(this.filterChain());
      while (this.expect(',')) }
    return a
  },
  identifier: function() {
    var a = this.consume();
    a.identifier || this.throwError('is not a valid identifier', a);
    return {
      type: p.Identifier, name: a.text
    }
  },
  constant: function() {
    return {
      type: p.Literal, value: this.consume().value
    }
  },
  arrayDeclaration: function() {
    var a = [];
    if (']' !== this.peekToken().text) {
      do {
        if (this.peek(']')) break;
        a.push(this.expression())
      } while (this.expect(','))
    }
    this.consume(']');
    return {
      type: p.ArrayExpression, elements: a
    }
  },
  object: function() {
    var a = [], b;
    if ('}' !== this.peekToken().text) {
      do {
        if (this.peek('}')) break;
        b = {type: p.Property, kind: 'init'};
        this.peek().constant ?
            (b.key = this.constant(), b.computed = !1, this.consume(':'),
             b.value = this.expression()) :
            this.peek().identifier ?
            (b.key = this.identifier(), b.computed = !1,
             this.peek(':') ? (this.consume(':'), b.value = this.expression()) :
                              b.value = b.key) :
            this.peek('[') ?
            (this.consume('['), b.key = this.expression(), this.consume(']'),
             b.computed = !0, this.consume(':'), b.value = this.expression()) :
            this.throwError('invalid key', this.peek());
        a.push(b)
      } while (this.expect(','))
    }
    this.consume('}');
    return {
      type: p.ObjectExpression, properties: a
    }
  },
  throwError: function(a, b) {
    throw Ya(
        'syntax', b.text, a, b.index + 1, this.text,
        this.text.substring(b.index));
  },
  consume: function(a) {
    if (0 === this.tokens.length) throw Ya('ueoe', this.text);
    var b = this.expect(a);
    b || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    return b
  },
  peekToken: function() {
    if (0 === this.tokens.length) throw Ya('ueoe', this.text);
    return this.tokens[0]
  },
  peek: function(a, b, d, c) {
    return this.peekAhead(0, a, b, d, c)
  },
  peekAhead: function(a, b, d, c, e) {
    if (this.tokens.length > a) {
      a = this.tokens[a];
      var f = a.text;
      if (f === b || f === d || f === c || f === e || !(b || d || c || e))
        return a
    }
    return !1
  },
  expect: function(a, b, d, c) {
    return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
  },
  selfReferential:
      {'this': {type: p.ThisExpression}, $locals: {type: p.LocalsExpression}}
};
var Ed = 2;
Id.prototype = {
  compile: function(a) {
    var b = this;
    this.state = {
      nextId: 0,
      filters: {},
      fn: {vars: [], body: [], own: {}},
      assign: {vars: [], body: [], own: {}},
      inputs: []
    };
    Y(a, b.$filter);
    var d = '', c;
    this.stage = 'assign';
    if (c = Hd(a))
      this.state.computing = 'assign', d = this.nextId(), this.recurse(c, d),
      this.return_(d),
      d = 'fn.assign=' + this.generateFunction('assign', 's,v,l');
    c = Fd(a.body);
    b.stage = 'inputs';
    r(c, function(a, c) {
      var d = 'fn' + c;
      b.state[d] = {vars: [], body: [], own: {}};
      b.state.computing = d;
      var k = b.nextId();
      b.recurse(a, k);
      b.return_(k);
      b.state.inputs.push({name: d, isPure: a.isPure});
      a.watchId = c
    });
    this.state.computing = 'fn';
    this.stage = 'main';
    this.recurse(a);
    a = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() +
        'var fn=' + this.generateFunction('fn', 's,l,a,i') + d +
        this.watchFns() + 'return fn;';
    a = (new Function('$filter', 'getStringValue', 'ifDefined', 'plus', a))(
        this.$filter, Kg, Lg, Dd);
    this.state = this.stage = void 0;
    return a
  },
  USE: 'use',
  STRICT: 'strict',
  watchFns: function() {
    var a = [], b = this.state.inputs, d = this;
    r(b, function(b) {
      a.push('var ' + b.name + '=' + d.generateFunction(b.name, 's'));
      b.isPure && a.push(b.name, '.isPure=' + JSON.stringify(b.isPure) + ';')
    });
    b.length &&
        a.push(
            'fn.inputs=[' + b.map(function(a) {
                               return a.name
                             }).join(',') +
            '];');
    return a.join('')
  },
  generateFunction: function(a, b) {
    return 'function(' + b + '){' + this.varsPrefix(a) + this.body(a) + '};'
  },
  filterPrefix: function() {
    var a = [], b = this;
    r(this.state.filters, function(d, c) {
      a.push(d + '=$filter(' + b.escape(c) + ')')
    });
    return a.length ? 'var ' + a.join(',') + ';' : ''
  },
  varsPrefix: function(a) {
    return this.state[a].vars.length ?
        'var ' + this.state[a].vars.join(',') + ';' :
        ''
  },
  body: function(a) {
    return this.state[a].body.join('')
  },
  recurse: function(a, b, d, c, e, f) {
    var g, k, h = this, l, m, q;
    c = c || C;
    if (!f && v(a.watchId))
      b = b || this.nextId(),
      this.if_(
          'i', this.lazyAssign(b, this.computedMember('i', a.watchId)),
          this.lazyRecurse(a, b, d, c, e, !0));
    else
      switch (a.type) {
        case p.Program:
          r(a.body, function(b, c) {
            h.recurse(b.expression, void 0, void 0, function(a) {
              k = a
            });
            c !== a.body.length - 1 ? h.current().body.push(k, ';') :
                                      h.return_(k)
          });
          break;
        case p.Literal:
          m = this.escape(a.value);
          this.assign(b, m);
          c(b || m);
          break;
        case p.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function(a) {
            k = a
          });
          m = a.operator + '(' + this.ifDefined(k, 0) + ')';
          this.assign(b, m);
          c(m);
          break;
        case p.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function(a) {
            g = a
          });
          this.recurse(a.right, void 0, void 0, function(a) {
            k = a
          });
          m = '+' === a.operator ?
              this.plus(g, k) :
              '-' === a.operator ?
              this.ifDefined(g, 0) + a.operator + this.ifDefined(k, 0) :
              '(' + g + ')' + a.operator + '(' + k + ')';
          this.assign(b, m);
          c(m);
          break;
        case p.LogicalExpression:
          b = b || this.nextId();
          h.recurse(a.left, b);
          h.if_('&&' === a.operator ? b : h.not(b), h.lazyRecurse(a.right, b));
          c(b);
          break;
        case p.ConditionalExpression:
          b = b || this.nextId();
          h.recurse(a.test, b);
          h.if_(
              b, h.lazyRecurse(a.alternate, b), h.lazyRecurse(a.consequent, b));
          c(b);
          break;
        case p.Identifier:
          b = b || this.nextId();
          d &&
              (d.context = 'inputs' === h.stage ?
                   's' :
                   this.assign(
                       this.nextId(),
                       this.getHasOwnProperty('l', a.name) + '?l:s'),
               d.computed = !1, d.name = a.name);
          h.if_(
              'inputs' === h.stage || h.not(h.getHasOwnProperty('l', a.name)),
              function() {
                h.if_('inputs' === h.stage || 's', function() {
                  e && 1 !== e &&
                      h.if_(
                          h.isNull(h.nonComputedMember('s', a.name)),
                          h.lazyAssign(h.nonComputedMember('s', a.name), '{}'));
                  h.assign(b, h.nonComputedMember('s', a.name))
                })
              },
              b && h.lazyAssign(b, h.nonComputedMember('l', a.name)));
          c(b);
          break;
        case p.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();
          b = b || this.nextId();
          h.recurse(a.object, g, void 0, function() {
            h.if_(
                h.notNull(g),
                function() {
                  a.computed ?
                      (k = h.nextId(), h.recurse(a.property, k),
                       h.getStringValue(k),
                       e && 1 !== e &&
                           h.if_(
                               h.not(h.computedMember(g, k)),
                               h.lazyAssign(h.computedMember(g, k), '{}')),
                       m = h.computedMember(g, k), h.assign(b, m),
                       d && (d.computed = !0, d.name = k)) :
                      (e && 1 !== e &&
                           h.if_(
                               h.isNull(
                                   h.nonComputedMember(g, a.property.name)),
                               h.lazyAssign(
                                   h.nonComputedMember(g, a.property.name),
                                   '{}')),
                       m = h.nonComputedMember(g, a.property.name),
                       h.assign(b, m),
                       d && (d.computed = !1, d.name = a.property.name))
                },
                function() {
                  h.assign(b, 'undefined')
                });
            c(b)
          }, !!e);
          break;
        case p.CallExpression:
          b = b || this.nextId();
          a.filter ? (k = h.filter(a.callee.name), l = [],
                      r(a.arguments,
                        function(a) {
                          var b = h.nextId();
                          h.recurse(a, b);
                          l.push(b)
                        }),
                      m = k + '(' + l.join(',') + ')', h.assign(b, m), c(b)) :
                     (k = h.nextId(), g = {}, l = [],
                      h.recurse(a.callee, k, g, function() {
                        h.if_(
                            h.notNull(k),
                            function() {
                              r(a.arguments, function(b) {
                                h.recurse(
                                    b, a.constant ? void 0 : h.nextId(), void 0,
                                    function(a) {
                                      l.push(a)
                                    })
                              });
                              m = g.name ?
                                  h.member(g.context, g.name, g.computed) +
                                      '(' + l.join(',') + ')' :
                                  k + '(' + l.join(',') + ')';
                              h.assign(b, m)
                            },
                            function() {
                              h.assign(b, 'undefined')
                            });
                        c(b)
                      }));
          break;
        case p.AssignmentExpression:
          k = this.nextId();
          g = {};
          this.recurse(a.left, void 0, g, function() {
            h.if_(h.notNull(g.context), function() {
              h.recurse(a.right, k);
              m = h.member(g.context, g.name, g.computed) + a.operator + k;
              h.assign(b, m);
              c(b || m)
            })
          }, 1);
          break;
        case p.ArrayExpression:
          l = [];
          r(a.elements, function(b) {
            h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function(a) {
              l.push(a)
            })
          });
          m = '[' + l.join(',') + ']';
          this.assign(b, m);
          c(b || m);
          break;
        case p.ObjectExpression:
          l = [];
          q = !1;
          r(a.properties, function(a) {
            a.computed && (q = !0)
          });
          q ? (b = b || this.nextId(), this.assign(b, '{}'),
               r(a.properties,
                 function(a) {
                   a.computed ?
                       (g = h.nextId(), h.recurse(a.key, g)) :
                       g = a.key.type === p.Identifier ? a.key.name :
                                                         '' + a.key.value;
                   k = h.nextId();
                   h.recurse(a.value, k);
                   h.assign(h.member(b, g, a.computed), k)
                 })) :
              (r(a.properties, function(b) {
                 h.recurse(
                     b.value, a.constant ? void 0 : h.nextId(), void 0,
                     function(a) {
                       l.push(
                           h.escape(
                               b.key.type === p.Identifier ? b.key.name :
                                                             '' + b.key.value) +
                           ':' + a)
                     })
               }), m = '{' + l.join(',') + '}', this.assign(b, m));
          c(b || m);
          break;
        case p.ThisExpression:
          this.assign(b, 's');
          c(b || 's');
          break;
        case p.LocalsExpression:
          this.assign(b, 'l');
          c(b || 'l');
          break;
        case p.NGValueParameter:
          this.assign(b, 'v'), c(b || 'v')
      }
  },
  getHasOwnProperty: function(a, b) {
    var d = a + '.' + b, c = this.current().own;
    c.hasOwnProperty(d) ||
        (c[d] = this.nextId(!1, a + '&&(' + this.escape(b) + ' in ' + a + ')'));
    return c[d]
  },
  assign: function(a, b) {
    if (a) return this.current().body.push(a, '=', b, ';'), a
  },
  filter: function(a) {
    this.state.filters.hasOwnProperty(a) ||
        (this.state.filters[a] = this.nextId(!0));
    return this.state.filters[a]
  },
  ifDefined: function(a, b) {
    return 'ifDefined(' + a + ',' + this.escape(b) + ')'
  },
  plus: function(a, b) {
    return 'plus(' + a + ',' + b + ')'
  },
  return_: function(a) {
    this.current().body.push('return ', a, ';')
  },
  if_: function(a, b, d) {
    if (!0 === a)
      b();
    else {
      var c = this.current().body;
      c.push('if(', a, '){');
      b();
      c.push('}');
      d && (c.push('else{'), d(), c.push('}'))
    }
  },
  not: function(a) {
    return '!(' + a + ')'
  },
  isNull: function(a) {
    return a + '==null'
  },
  notNull: function(a) {
    return a + '!=null'
  },
  nonComputedMember: function(a, b) {
    var d = /[^$_a-zA-Z0-9]/g;
    return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ?
        a + '.' + b :
        a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
  },
  computedMember: function(a, b) {
    return a + '[' + b + ']'
  },
  member: function(a, b, d) {
    return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
  },
  getStringValue: function(a) {
    this.assign(a, 'getStringValue(' + a + ')')
  },
  lazyRecurse: function(a, b, d, c, e, f) {
    var g = this;
    return function() {
      g.recurse(a, b, d, c, e, f)
    }
  },
  lazyAssign: function(a, b) {
    var d = this;
    return function() {
      d.assign(a, b)
    }
  },
  stringEscapeRegex: /[^ a-zA-Z0-9]/g,
  stringEscapeFn: function(a) {
    return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4)
  },
  escape: function(a) {
    if (A(a))
      return '\'' + a.replace(this.stringEscapeRegex, this.stringEscapeFn) +
          '\'';
    if (ba(a)) return a.toString();
    if (!0 === a) return 'true';
    if (!1 === a) return 'false';
    if (null === a) return 'null';
    if ('undefined' === typeof a) return 'undefined';
    throw Ya('esc');
  },
  nextId: function(a, b) {
    var d = 'v' + this.state.nextId++;
    a || this.current().vars.push(d + (b ? '=' + b : ''));
    return d
  },
  current: function() {
    return this.state[this.state.computing]
  }
};
Jd.prototype = {
  compile: function(a) {
    var b = this;
    Y(a, b.$filter);
    var d, c;
    if (d = Hd(a)) c = this.recurse(d);
    d = Fd(a.body);
    var e;
    d && (e = [], r(d, function(a, c) {
            var d = b.recurse(a);
            d.isPure = a.isPure;
            a.input = d;
            e.push(d);
            a.watchId = c
          }));
    var f = [];
    r(a.body, function(a) {
      f.push(b.recurse(a.expression))
    });
    a = 0 === a.body.length ? C : 1 === a.body.length ? f[0] : function(a, b) {
      var c;
      r(f, function(d) {
        c = d(a, b)
      });
      return c
    };
    c && (a.assign = function(a, b, d) {
      return c(a, d, b)
    });
    e && (a.inputs = e);
    return a
  },
  recurse: function(a, b, d) {
    var c, e, f = this, g;
    if (a.input) return this.inputs(a.input, a.watchId);
    switch (a.type) {
      case p.Literal:
        return this.value(a.value, b);
      case p.UnaryExpression:
        return e = this.recurse(a.argument), this['unary' + a.operator](e, b);
      case p.BinaryExpression:
        return c = this.recurse(a.left), e = this.recurse(a.right),
               this['binary' + a.operator](c, e, b);
      case p.LogicalExpression:
        return c = this.recurse(a.left), e = this.recurse(a.right),
               this['binary' + a.operator](c, e, b);
      case p.ConditionalExpression:
        return this['ternary?:'](
            this.recurse(a.test), this.recurse(a.alternate),
            this.recurse(a.consequent), b);
      case p.Identifier:
        return f.identifier(a.name, b, d);
      case p.MemberExpression:
        return c = this.recurse(a.object, !1, !!d),
               a.computed || (e = a.property.name),
               a.computed && (e = this.recurse(a.property)),
               a.computed ? this.computedMember(c, e, b, d) :
                            this.nonComputedMember(c, e, b, d);
      case p.CallExpression:
        return g = [],
               r(a.arguments,
                 function(a) {
                   g.push(f.recurse(a))
                 }),
               a.filter && (e = this.$filter(a.callee.name)),
               a.filter || (e = this.recurse(a.callee, !0)),
               a.filter ? function(a, c, d, f) {
                 for (var q = [], n = 0; n < g.length; ++n)
                   q.push(g[n](a, c, d, f));
                 a = e.apply(void 0, q, f);
                 return b ? {context: void 0, name: void 0, value: a} : a
               } : function(a, c, d, f) {
                 var q = e(a, c, d, f), n;
                 if (null != q.value) {
                   n = [];
                   for (var s = 0; s < g.length; ++s) n.push(g[s](a, c, d, f));
                   n = q.value.apply(q.context, n)
                 }
                 return b ? {value: n} : n
               };
      case p.AssignmentExpression:
        return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right),
               function(a, d, f, g) {
                 var q = c(a, d, f, g);
                 a = e(a, d, f, g);
                 q.context[q.name] = a;
                 return b ? {value: a} : a
               };
      case p.ArrayExpression:
        return g = [], r(a.elements, function(a) {
                 g.push(f.recurse(a))
               }), function(a, c, d, e) {
          for (var f = [], n = 0; n < g.length; ++n) f.push(g[n](a, c, d, e));
          return b ? {value: f} : f
        };
      case p.ObjectExpression:
        return g = [], r(a.properties, function(a) {
                 a.computed ?
                     g.push({
                       key: f.recurse(a.key),
                       computed: !0,
                       value: f.recurse(a.value)
                     }) :
                     g.push({
                       key: a.key.type === p.Identifier ? a.key.name :
                                                          '' + a.key.value,
                       computed: !1,
                       value: f.recurse(a.value)
                     })
               }), function(a, c, d, e) {
          for (var f = {}, n = 0; n < g.length; ++n)
            g[n].computed ? f[g[n].key(a, c, d, e)] = g[n].value(a, c, d, e) :
                            f[g[n].key] = g[n].value(a, c, d, e);
          return b ? {value: f} : f
        };
      case p.ThisExpression:
        return function(a) {
          return b ? {value: a} : a
        };
      case p.LocalsExpression:
        return function(a, c) {
          return b ? {value: c} : c
        };
      case p.NGValueParameter:
        return function(a, c, d) {
          return b ? {value: d} : d
        }
    }
  },
  'unary+': function(a, b) {
    return function(d, c, e, f) {
      d = a(d, c, e, f);
      d = v(d) ? +d : 0;
      return b ? {value: d} : d
    }
  },
  'unary-': function(a, b) {
    return function(d, c, e, f) {
      d = a(d, c, e, f);
      d = v(d) ? -d : -0;
      return b ? {value: d} : d
    }
  },
  'unary!': function(a, b) {
    return function(d, c, e, f) {
      d = !a(d, c, e, f);
      return b ? {value: d} : d
    }
  },
  'binary+': function(a, b, d) {
    return function(c, e, f, g) {
      var k = a(c, e, f, g);
      c = b(c, e, f, g);
      k = Dd(k, c);
      return d ? {value: k} : k
    }
  },
  'binary-': function(a, b, d) {
    return function(c, e, f, g) {
      var k = a(c, e, f, g);
      c = b(c, e, f, g);
      k = (v(k) ? k : 0) - (v(c) ? c : 0);
      return d ? {value: k} : k
    }
  },
  'binary*': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) * b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary/': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) / b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary%': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) % b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary===': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) === b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary!==': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) !== b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary==': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) == b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary!=': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) != b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary<': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) < b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary>': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) > b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary<=': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) <= b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary>=': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) >= b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary&&': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) && b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'binary||': function(a, b, d) {
    return function(c, e, f, g) {
      c = a(c, e, f, g) || b(c, e, f, g);
      return d ? {value: c} : c
    }
  },
  'ternary?:': function(a, b, d, c) {
    return function(e, f, g, k) {
      e = a(e, f, g, k) ? b(e, f, g, k) : d(e, f, g, k);
      return c ? {value: e} : e
    }
  },
  value: function(a, b) {
    return function() {
      return b ? {context: void 0, name: void 0, value: a} : a
    }
  },
  identifier: function(a, b, d) {
    return function(c, e, f, g) {
      c = e && a in e ? e : c;
      d && 1 !== d && c && null == c[a] && (c[a] = {});
      e = c ? c[a] : void 0;
      return b ? {context: c, name: a, value: e} : e
    }
  },
  computedMember: function(a, b, d, c) {
    return function(e, f, g, k) {
      var h = a(e, f, g, k), l, m;
      null != h &&
          (l = b(e, f, g, k), l += '',
           c && 1 !== c && h && !h[l] && (h[l] = {}), m = h[l]);
      return d ? {context: h, name: l, value: m} : m
    }
  },
  nonComputedMember: function(a, b, d, c) {
    return function(e, f, g, k) {
      e = a(e, f, g, k);
      c && 1 !== c && e && null == e[b] && (e[b] = {});
      f = null != e ? e[b] : void 0;
      return d ? {context: e, name: b, value: f} : f
    }
  },
  inputs: function(a, b) {
    return function(d, c, e, f) {
      return f ? f[b] : a(d, c, e)
    }
  }
};
Mb.prototype = {
  constructor: Mb,
  parse: function(a) {
    a = this.getAst(a);
    var b = this.astCompiler.compile(a.ast), d = a.ast;
    b.literal = 0 === d.body.length ||
        1 === d.body.length &&
            (d.body[0].expression.type === p.Literal ||
             d.body[0].expression.type === p.ArrayExpression ||
             d.body[0].expression.type === p.ObjectExpression);
    b.constant = a.ast.constant;
    b.oneTime = a.oneTime;
    return b
  },
  getAst: function(a) {
    var b = !1;
    a = a.trim();
    ':' === a.charAt(0) && ':' === a.charAt(1) && (b = !0, a = a.substring(2));
    return {
      ast: this.ast.ast(a), oneTime: b
    }
  }
};
var Da = M('$sce'), U = {
  HTML: 'html',
  CSS: 'css',
  MEDIA_URL: 'mediaUrl',
  URL: 'url',
  RESOURCE_URL: 'resourceUrl',
  JS: 'js'
},
    Bc = /_([a-z])/g, Qg = M('$templateRequest'), Rg = M('$timeout'),
    $ = B.document.createElement('a'), Nd = la(B.location.href), La;
Od.$inject = ['$document'];
cd.$inject = ['$provide'];
var Vd = 22, Ud = '.', Dc = '0';
Pd.$inject = ['$locale'];
Rd.$inject = ['$locale'];
var bh = {
  yyyy: ga('FullYear', 4, 0, !1, !0),
  yy: ga('FullYear', 2, 0, !0, !0),
  y: ga('FullYear', 1, 0, !1, !0),
  MMMM: kb('Month'),
  MMM: kb('Month', !0),
  MM: ga('Month', 2, 1),
  M: ga('Month', 1, 1),
  LLLL: kb('Month', !1, !0),
  dd: ga('Date', 2),
  d: ga('Date', 1),
  HH: ga('Hours', 2),
  H: ga('Hours', 1),
  hh: ga('Hours', 2, -12),
  h: ga('Hours', 1, -12),
  mm: ga('Minutes', 2),
  m: ga('Minutes', 1),
  ss: ga('Seconds', 2),
  s: ga('Seconds', 1),
  sss: ga('Milliseconds', 3),
  EEEE: kb('Day'),
  EEE: kb('Day', !0),
  a: function(a, b) {
    return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
  },
  Z: function(a, b, d) {
    a = -1 * d;
    return a = (0 <= a ? '+' : '') +
        (Ob(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) +
         Ob(Math.abs(a % 60), 2))
  },
  ww: Xd(2),
  w: Xd(1),
  G: Ec,
  GG: Ec,
  GGG: Ec,
  GGGG: function(a, b) {
    return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
  }
},
    ah =
        /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
    $g = /^-?\d+$/;
Qd.$inject = ['$locale'];
var Vg = ia(O), Wg = ia(ub);
Sd.$inject = ['$parse'];
var Je = ia({
  restrict: 'E',
  compile: function(a, b) {
    if (!b.href && !b.xlinkHref)
      return function(a, b) {
        if ('a' === b[0].nodeName.toLowerCase()) {
          var e = '[object SVGAnimatedString]' === ma.call(b.prop('href')) ?
              'xlink:href' :
              'href';
          b.on('click', function(a) {
            b.attr(e) || a.preventDefault()
          })
        }
      }
  }
}),
    vb = {};
r(Gb, function(a, b) {
  function d(a, d, e) {
    a.$watch(e[c], function(a) {
      e.$set(b, !!a)
    })
  }
  if ('multiple' !== a) {
    var c = va('ng-' + b), e = d;
    'checked' === a && (e = function(a, b, e) {
      e.ngModel !== e[c] && d(a, b, e)
    });
    vb[c] = function() {
      return {
        restrict: 'A', priority: 100, link: e
      }
    }
  }
});
r(sd, function(a, b) {
  vb[b] = function() {
    return {
      priority: 100, link: function(a, c, e) {
        if ('ngPattern' === b && '/' === e.ngPattern.charAt(0) &&
            (c = e.ngPattern.match(fh))) {
          e.$set('ngPattern', new RegExp(c[1], c[2]));
          return
        }
        a.$watch(e[b], function(a) {
          e.$set(b, a)
        })
      }
    }
  }
});
r(['src', 'srcset', 'href'], function(a) {
  var b = va('ng-' + a);
  vb[b] = function() {
    return {
      priority: 99, link: function(d, c, e) {
        var f = a, g = a;
        'href' === a &&
            '[object SVGAnimatedString]' === ma.call(c.prop('href')) &&
            (g = 'xlinkHref', e.$attr[g] = 'xlink:href', f = null);
        e.$observe(b, function(b) {
          b ? (e.$set(g, b), Aa && f && c.prop(f, e[g])) :
              'href' === a && e.$set(g, null)
        })
      }
    }
  }
});
var lb = {
  $addControl: C,
  $getControls: ia([]),
  $$renameControl: function(a, b) {
    a.$name = b
  },
  $removeControl: C,
  $setValidity: C,
  $setDirty: C,
  $setPristine: C,
  $setSubmitted: C,
  $$setSubmitted: C
};
Pb.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate'];
Pb.prototype = {
  $rollbackViewValue: function() {
    r(this.$$controls, function(a) {
      a.$rollbackViewValue()
    })
  },
  $commitViewValue: function() {
    r(this.$$controls, function(a) {
      a.$commitViewValue()
    })
  },
  $addControl: function(a) {
    Qa(a.$name, 'input');
    this.$$controls.push(a);
    a.$name && (this[a.$name] = a);
    a.$$parentForm = this
  },
  $getControls: function() {
    return oa(this.$$controls)
  },
  $$renameControl: function(a, b) {
    var d = a.$name;
    this[d] === a && delete this[d];
    this[b] = a;
    a.$name = b
  },
  $removeControl: function(a) {
    a.$name && this[a.$name] === a && delete this[a.$name];
    r(this.$pending, function(b, d) {
      this.$setValidity(d, null, a)
    }, this);
    r(this.$error, function(b, d) {
      this.$setValidity(d, null, a)
    }, this);
    r(this.$$success, function(b, d) {
      this.$setValidity(d, null, a)
    }, this);
    cb(this.$$controls, a);
    a.$$parentForm = lb
  },
  $setDirty: function() {
    this.$$animate.removeClass(this.$$element, Za);
    this.$$animate.addClass(this.$$element, Ub);
    this.$dirty = !0;
    this.$pristine = !1;
    this.$$parentForm.$setDirty()
  },
  $setPristine: function() {
    this.$$animate.setClass(this.$$element, Za, Ub + ' ng-submitted');
    this.$dirty = !1;
    this.$pristine = !0;
    this.$submitted = !1;
    r(this.$$controls, function(a) {
      a.$setPristine()
    })
  },
  $setUntouched: function() {
    r(this.$$controls, function(a) {
      a.$setUntouched()
    })
  },
  $setSubmitted: function() {
    for (var a = this; a.$$parentForm && a.$$parentForm !== lb;)
      a = a.$$parentForm;
    a.$$setSubmitted()
  },
  $$setSubmitted: function() {
    this.$$animate.addClass(this.$$element, 'ng-submitted');
    this.$submitted = !0;
    r(this.$$controls, function(a) {
      a.$$setSubmitted && a.$$setSubmitted()
    })
  }
};
$d({
  clazz: Pb,
  set: function(a, b, d) {
    var c = a[b];
    c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d]
  },
  unset: function(a, b, d) {
    var c = a[b];
    c && (cb(c, d), 0 === c.length && delete a[b])
  }
});
var he =
        function(a) {
  return [
    '$timeout', '$parse',
    function(b, d) {
      function c(a) {
        return '' === a ? d('this[""]').assign : d(a).assign || C
      }
      return {
        name: 'form', restrict: a ? 'EAC' : 'E', require: ['form', '^^?form'],
            controller: Pb, compile: function(d, f) {
              d.addClass(Za).addClass(mb);
              var g = f.name ? 'name' : a && f.ngForm ? 'ngForm' : !1;
              return {
                pre: function(a, d, e, f) {
                  var q = f[0];
                  if (!('action' in e)) {
                    var n = function(b) {
                      a.$apply(function() {
                        q.$commitViewValue();
                        q.$setSubmitted()
                      });
                      b.preventDefault()
                    };
                    d[0].addEventListener('submit', n);
                    d.on('$destroy', function() {
                      b(function() {
                        d[0].removeEventListener('submit', n)
                      }, 0, !1)
                    })
                  }
                  (f[1] || q.$$parentForm).$addControl(q);
                  var s = g ? c(q.$name) : C;
                  g && (s(a, q), e.$observe(g, function(b) {
                    q.$name !== b &&
                        (s(a, void 0), q.$$parentForm.$$renameControl(q, b),
                         s = c(q.$name), s(a, q))
                  }));
                  d.on('$destroy', function() {
                    q.$$parentForm.$removeControl(q);
                    s(a, void 0);
                    R(q, lb)
                  })
                }
              }
            }
      }
    }
  ]
},
    Ke = he(), We = he(!0),
    ch =
        /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
    oh =
        /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
    ph =
        /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
    dh = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
    ie = /^(\d{4,})-(\d{2})-(\d{2})$/,
    je = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Lc = /^(\d{4,})-W(\d\d)$/, ke = /^(\d{4,})-(\d\d)$/,
    le = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, be = S();
r(['date', 'datetime-local', 'month', 'time', 'week'], function(a) {
  be[a] = !0
});
var me = {
  text: function(a, b, d, c, e, f) {
    Ra(a, b, d, c, e, f);
    Gc(c)
  },
  date: nb('date', ie, Qb(ie, ['yyyy', 'MM', 'dd']), 'yyyy-MM-dd'),
  'datetime-local':
      nb('datetimelocal', je, Qb(je, 'yyyy MM dd HH mm ss sss'.split(' ')),
         'yyyy-MM-ddTHH:mm:ss.sss'),
  time: nb('time', le, Qb(le, ['HH', 'mm', 'ss', 'sss']), 'HH:mm:ss.sss'),
  week:
      nb('week', Lc,
         function(a, b) {
           if (ha(a)) return a;
           if (A(a)) {
             Lc.lastIndex = 0;
             var d = Lc.exec(a);
             if (d) {
               var c = +d[1], e = +d[2], f = d = 0, g = 0, k = 0, h = Wd(c),
                   e = 7 * (e - 1);
               b &&
                   (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(),
                    k = b.getMilliseconds());
               return new Date(c, 0, h.getDate() + e, d, f, g, k)
             }
           }
           return NaN
         },
         'yyyy-Www'),
  month: nb('month', ke, Qb(ke, ['yyyy', 'MM']), 'yyyy-MM'),
  number: function(a, b, d, c, e, f) {
    Hc(a, b, d, c, 'number');
    ce(c);
    Ra(a, b, d, c, e, f);
    var g, k;
    if (v(d.min) || d.ngMin)
      c.$validators.min = function(a, b) {
        return c.$isEmpty(b) || x(g) || b >= g
      }, d.$observe('min', function(a) {
        g = Sa(a);
        c.$validate()
      });
    if (v(d.max) || d.ngMax)
      c.$validators.max = function(a, b) {
        return c.$isEmpty(b) || x(k) || b <= k
      }, d.$observe('max', function(a) {
        k = Sa(a);
        c.$validate()
      });
    if (v(d.step) || d.ngStep) {
      var h;
      c.$validators.step = function(a, b) {
        return c.$isEmpty(b) || x(h) || de(b, g || 0, h)
      };
      d.$observe('step', function(a) {
        h = Sa(a);
        c.$validate()
      })
    }
  },
  url: function(a, b, d, c, e, f) {
    Ra(a, b, d, c, e, f);
    Gc(c);
    c.$validators.url = function(a, b) {
      var d = a || b;
      return c.$isEmpty(d) || oh.test(d)
    }
  },
  email: function(a, b, d, c, e, f) {
    Ra(a, b, d, c, e, f);
    Gc(c);
    c.$validators.email = function(a, b) {
      var d = a || b;
      return c.$isEmpty(d) || ph.test(d)
    }
  },
  radio: function(a, b, d, c) {
    var e = !d.ngTrim || 'false' !== T(d.ngTrim);
    x(d.name) && b.attr('name', ++pb);
    b.on('change', function(a) {
      var g;
      b[0].checked &&
          (g = d.value, e && (g = T(g)), c.$setViewValue(g, a && a.type))
    });
    c.$render = function() {
      var a = d.value;
      e && (a = T(a));
      b[0].checked = a === c.$viewValue
    };
    d.$observe('value', c.$render)
  },
  range: function(a, b, d, c, e, f) {
    function g(a, c) {
      b.attr(a, d[a]);
      d.$observe(a, c)
    }
    function k(a) {
      q = Sa(a);
      V(c.$modelValue) ||
          (m ? (a = b.val(), q > a && (a = q, b.val(a)), c.$setViewValue(a)) :
               c.$validate())
    }
    function h(a) {
      n = Sa(a);
      V(c.$modelValue) ||
          (m ? (a = b.val(), n < a && (b.val(n), a = n < q ? q : n),
                c.$setViewValue(a)) :
               c.$validate())
    }
    function l(a) {
      s = Sa(a);
      V(c.$modelValue) ||
          (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) :
                                           c.$validate())
    }
    Hc(a, b, d, c, 'range');
    ce(c);
    Ra(a, b, d, c, e, f);
    var m = c.$$hasNativeValidators && 'range' === b[0].type,
        q = m ? 0 : void 0, n = m ? 100 : void 0, s = m ? 1 : void 0,
        p = b[0].validity;
    a = v(d.min);
    e = v(d.max);
    f = v(d.step);
    var r = c.$render;
    c.$render = m && v(p.rangeUnderflow) && v(p.rangeOverflow) ? function() {
      r();
      c.$setViewValue(b.val())
    } : r;
    a && (c.$validators.min = m ? function() {
      return !0
    } : function(a, b) {
      return c.$isEmpty(b) || x(q) || b >= q
    }, g('min', k));
    e && (c.$validators.max = m ? function() {
      return !0
    } : function(a, b) {
      return c.$isEmpty(b) || x(n) || b <= n
    }, g('max', h));
    f && (c.$validators.step = m ? function() {
      return !p.stepMismatch
    } : function(a, b) {
      return c.$isEmpty(b) || x(s) || de(b, q || 0, s)
    }, g('step', l))
  },
  checkbox: function(a, b, d, c, e, f, g, k) {
    var h = ee(k, a, 'ngTrueValue', d.ngTrueValue, !0),
        l = ee(k, a, 'ngFalseValue', d.ngFalseValue, !1);
    b.on('change', function(a) {
      c.$setViewValue(b[0].checked, a && a.type)
    });
    c.$render = function() {
      b[0].checked = c.$viewValue
    };
    c.$isEmpty = function(a) {
      return !1 === a
    };
    c.$formatters.push(function(a) {
      return ua(a, h)
    });
    c.$parsers.push(function(a) {
      return a ? h : l
    })
  },
  hidden: C,
  button: C,
  submit: C,
  reset: C,
  file: C
},
    Xc =
        [
          '$browser', '$sniffer', '$filter', '$parse',
          function(a, b, d, c) {
            return {
              restrict: 'E', require: ['?ngModel'], link: {
                pre:
                    function(e, f, g, k) {
                      k[0] &&
                          (me[O(g.type)] || me.text)(e, f, g, k[0], b, a, d, c)
                    }
              }
            }
          }
        ],
    qh = /^(true|false|\d+)$/,
    pf =
        function() {
      function a(a, d, c) {
        var e = v(c) ? c : 9 === Aa ? '' : null;
        a.prop('value', e);
        d.$set('value', c)
      }
      return {
        restrict: 'A', priority: 100, compile: function(b, d) {
          return qh.test(d.ngValue) ? function(b, d, f) {
            b = b.$eval(f.ngValue);
            a(d, f, b)
          } : function(b, d, f) {
            b.$watch(f.ngValue, function(b) {
              a(d, f, b)
            })
          }
        }
      }
    },
    Oe =
        [
          '$compile',
          function(a) {
            return {
              restrict: 'AC', compile: function(b) {
                a.$$addBindingClass(b);
                return function(b, c, e) {
                  a.$$addBindingInfo(c, e.ngBind);
                  c = c[0];
                  b.$watch(e.ngBind, function(a) {
                    c.textContent = hc(a)
                  })
                }
              }
            }
          }
        ],
    Qe =
        [
          '$interpolate', '$compile',
          function(a, b) {
            return {
              compile: function(d) {
                b.$$addBindingClass(d);
                return function(c, d, f) {
                  c = a(d.attr(f.$attr.ngBindTemplate));
                  b.$$addBindingInfo(d, c.expressions);
                  d = d[0];
                  f.$observe('ngBindTemplate', function(a) {
                    d.textContent = x(a) ? '' : a
                  })
                }
              }
            }
          }
        ],
    Pe =
        [
          '$sce', '$parse', '$compile',
          function(a, b, d) {
            return {
              restrict: 'A', compile: function(c, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function(b) {
                                           return a.valueOf(b)
                                         });
                d.$$addBindingClass(c);
                return function(b, c, e) {
                  d.$$addBindingInfo(c, e.ngBindHtml);
                  b.$watch(g, function() {
                    var d = f(b);
                    c.html(a.getTrustedHtml(d) || '')
                  })
                }
              }
            }
          }
        ],
    of = ia({
      restrict: 'A',
      require: 'ngModel',
      link: function(a, b, d, c) {
        c.$viewChangeListeners.push(function() {
          a.$eval(d.ngChange)
        })
      }
    }),
    Re = Jc('', !0), Te = Jc('Odd', 0), Se = Jc('Even', 1),
    Ue = Na({
      compile: function(a, b) {
        b.$set('ngCloak', void 0);
        a.removeClass('ng-cloak')
      }
    }),
    Ve = [function() {
      return {
        restrict: 'A', scope: !0, controller: '@', priority: 500
      }
    }],
    bd = {}, rh = {blur: !0, focus: !0};
r('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'
      .split(' '),
  function(a) {
    var b = va('ng-' + a);
    bd[b] = [
      '$parse', '$rootScope', '$exceptionHandler',
      function(d, c, e) {
        return pd(d, c, e, b, a, rh[a])
      }
    ]
  });
var Ye =
        [
          '$animate', '$compile',
          function(a, b) {
            return {
              multiElement: !0, transclude: 'element', priority: 600,
                  terminal: !0, restrict: 'A', $$tlb: !0,
                  link: function(d, c, e, f, g) {
                    var k, h, l;
                    d.$watch(e.ngIf, function(d) {
                      d ? h || g(function(d, f) {
                            h = f;
                            d[d.length++] =
                                b.$$createComment('end ngIf', e.ngIf);
                            k = {clone: d};
                            a.enter(d, c.parent(), c)
                          }) :
                          (l && (l.remove(), l = null),
                           h && (h.$destroy(), h = null),
                           k &&
                               (l = tb(k.clone), a.leave(l).done(function(a) {
                                 !1 !== a && (l = null)
                               }),
                                k = null))
                    })
                  }
            }
          }
        ],
    Ze =
        [
          '$templateRequest', '$anchorScroll', '$animate',
          function(a, b, d) {
            return {
              restrict: 'ECA', priority: 400, terminal: !0,
                  transclude: 'element', controller: ea.noop,
                  compile: function(c, e) {
                    var f = e.ngInclude || e.src, g = e.onload || '',
                        k = e.autoscroll;
                    return function(c, e, m, q, n) {
                      var s = 0, p, r, D, w = function() {
                        r && (r.remove(), r = null);
                        p && (p.$destroy(), p = null);
                        D &&
                            (d.leave(D).done(function(a) {
                              !1 !== a && (r = null)
                            }),
                             r = D, D = null)
                      };
                      c.$watch(f, function(f) {
                        var m = function(a) {
                          !1 === a || !v(k) || k && !c.$eval(k) || b()
                        }, r = ++s;
                        f ? (a(f, !0).then(
                                 function(a) {
                                   if (!c.$$destroyed && r === s) {
                                     var b = c.$new();
                                     q.template = a;
                                     a = n(b, function(a) {
                                       w();
                                       d.enter(a, null, e).done(m)
                                     });
                                     p = b;
                                     D = a;
                                     p.$emit('$includeContentLoaded', f);
                                     c.$eval(g)
                                   }
                                 },
                                 function() {
                                   c.$$destroyed || r !== s ||
                                       (w(), c.$emit('$includeContentError', f))
                                 }),
                             c.$emit('$includeContentRequested', f)) :
                            (w(), q.template = null)
                      })
                    }
                  }
            }
          }
        ],
    rf =
        [
          '$compile',
          function(a) {
            return {
              restrict: 'ECA', priority: -400, require: 'ngInclude',
                  link: function(b, d, c, e) {
                    ma.call(d[0]).match(/SVG/) ?
                        (d.empty(),
                         a(dd(e.template, B.document).childNodes)(
                             b,
                             function(a) {
                               d.append(a)
                             },
                             {futureParentElement: d})) :
                        (d.html(e.template), a(d.contents())(b))
                  }
            }
          }
        ],
    $e = Na({
      priority: 450,
      compile: function() {
        return {
          pre: function(a, b, d) {
            a.$eval(d.ngInit)
          }
        }
      }
    }),
    nf =
        function() {
      return {
        restrict: 'A', priority: 100, require: 'ngModel',
            link: function(a, b, d, c) {
              var e = d.ngList || ', ', f = 'false' !== d.ngTrim,
                  g = f ? T(e) : e;
              c.$parsers.push(function(a) {
                if (!x(a)) {
                  var b = [];
                  a && r(a.split(g), function(a) {
                    a && b.push(f ? T(a) : a)
                  });
                  return b
                }
              });
              c.$formatters.push(function(a) {
                if (I(a)) return a.join(e)
              });
              c.$isEmpty = function(a) {
                return !a || !a.length
              }
            }
      }
    },
    mb = 'ng-valid', Zd = 'ng-invalid', Za = 'ng-pristine', Ub = 'ng-dirty',
    ob = M('ngModel');
Rb.$inject =
    '$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate'
        .split(' ');
Rb.prototype = {
  $$initGetterSetters: function() {
    if (this.$options.getOption('getterSetter')) {
      var a = this.$$parse(this.$$attr.ngModel + '()'),
          b = this.$$parse(this.$$attr.ngModel + '($$$p)');
      this.$$ngModelGet = function(b) {
        var c = this.$$parsedNgModel(b);
        z(c) && (c = a(b));
        return c
      };
      this.$$ngModelSet = function(a, c) {
        z(this.$$parsedNgModel(a)) ? b(a, {$$$p: c}) :
                                     this.$$parsedNgModelAssign(a, c)
      }
    } else if (!this.$$parsedNgModel.assign)
      throw ob('nonassign', this.$$attr.ngModel, ya(this.$$element));
  },
  $render: C,
  $isEmpty: function(a) {
    return x(a) || '' === a || null === a || a !== a
  },
  $$updateEmptyClasses: function(a) {
    this.$isEmpty(a) ?
        (this.$$animate.removeClass(this.$$element, 'ng-not-empty'),
         this.$$animate.addClass(this.$$element, 'ng-empty')) :
        (this.$$animate.removeClass(this.$$element, 'ng-empty'),
         this.$$animate.addClass(this.$$element, 'ng-not-empty'))
  },
  $setPristine: function() {
    this.$dirty = !1;
    this.$pristine = !0;
    this.$$animate.removeClass(this.$$element, Ub);
    this.$$animate.addClass(this.$$element, Za)
  },
  $setDirty: function() {
    this.$dirty = !0;
    this.$pristine = !1;
    this.$$animate.removeClass(this.$$element, Za);
    this.$$animate.addClass(this.$$element, Ub);
    this.$$parentForm.$setDirty()
  },
  $setUntouched: function() {
    this.$touched = !1;
    this.$untouched = !0;
    this.$$animate.setClass(this.$$element, 'ng-untouched', 'ng-touched')
  },
  $setTouched: function() {
    this.$touched = !0;
    this.$untouched = !1;
    this.$$animate.setClass(this.$$element, 'ng-touched', 'ng-untouched')
  },
  $rollbackViewValue: function() {
    this.$$timeout.cancel(this.$$pendingDebounce);
    this.$viewValue = this.$$lastCommittedViewValue;
    this.$render()
  },
  $validate: function() {
    if (!V(this.$modelValue)) {
      var a = this.$$lastCommittedViewValue, b = this.$$rawModelValue,
          d = this.$valid, c = this.$modelValue,
          e = this.$options.getOption('allowInvalid'), f = this;
      this.$$runValidators(b, a, function(a) {
        e || d === a ||
            (f.$modelValue = a ? b : void 0,
             f.$modelValue !== c && f.$$writeModelToScope())
      })
    }
  },
  $$runValidators: function(a, b, d) {
    function c() {
      var c = !0;
      r(h.$validators, function(d, e) {
        var g = Boolean(d(a, b));
        c = c && g;
        f(e, g)
      });
      return c ? !0 : (r(h.$asyncValidators, function(a, b) {
                         f(b, null)
                       }), !1)
    }
    function e() {
      var c = [], d = !0;
      r(h.$asyncValidators, function(e, g) {
        var h = e(a, b);
        if (!h || !z(h.then)) throw ob('nopromise', h);
        f(g, void 0);
        c.push(h.then(
            function() {
              f(g, !0)
            },
            function() {
              d = !1;
              f(g, !1)
            }))
      });
      c.length ? h.$$q.all(c).then(function() {
        g(d)
      }, C) : g(!0)
    }
    function f(a, b) {
      k === h.$$currentValidationRunId && h.$setValidity(a, b)
    }
    function g(a) {
      k === h.$$currentValidationRunId && d(a)
    }
    this.$$currentValidationRunId++;
    var k = this.$$currentValidationRunId, h = this;
    (function() {
      var a = h.$$parserName;
      if (x(h.$$parserValid))
        f(a, null);
      else
        return h.$$parserValid || (r(h.$validators, function(a, b) {
                                     f(b, null)
                                   }), r(h.$asyncValidators, function(a, b) {
                                     f(b, null)
                                   })), f(a, h.$$parserValid), h.$$parserValid;
      return !0
    })() ?
        c() ? e() : g(!1) :
        g(!1)
  },
  $commitViewValue: function() {
    var a = this.$viewValue;
    this.$$timeout.cancel(this.$$pendingDebounce);
    if (this.$$lastCommittedViewValue !== a ||
        '' === a && this.$$hasNativeValidators)
      this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a,
                                    this.$pristine && this.$setDirty(),
                                    this.$$parseAndValidate()
  },
  $$parseAndValidate: function() {
    var a = this.$$lastCommittedViewValue, b = this;
    this.$$parserValid = x(a) ? void 0 : !0;
    this.$setValidity(this.$$parserName, null);
    this.$$parserName = 'parse';
    if (this.$$parserValid)
      for (var d = 0; d < this.$parsers.length; d++)
        if (a = this.$parsers[d](a), x(a)) {
          this.$$parserValid = !1;
          break
        }
    V(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
    var c = this.$modelValue, e = this.$options.getOption('allowInvalid');
    this.$$rawModelValue = a;
    e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
    this.$$runValidators(a, this.$$lastCommittedViewValue, function(d) {
      e ||
          (b.$modelValue = d ? a : void 0,
           b.$modelValue !== c && b.$$writeModelToScope())
    })
  },
  $$writeModelToScope: function() {
    this.$$ngModelSet(this.$$scope, this.$modelValue);
    r(this.$viewChangeListeners, function(a) {
      try {
        a()
      } catch (b) {
        this.$$exceptionHandler(b)
      }
    }, this)
  },
  $setViewValue: function(a, b) {
    this.$viewValue = a;
    this.$options.getOption('updateOnDefault') &&
        this.$$debounceViewValueCommit(b)
  },
  $$debounceViewValueCommit: function(a) {
    var b = this.$options.getOption('debounce');
    ba(b[a]) ? b = b[a] :
               ba(b['default']) &&
                -1 === this.$options.getOption('updateOn').indexOf(a) ?
               b = b['default'] :
               ba(b['*']) && (b = b['*']);
    this.$$timeout.cancel(this.$$pendingDebounce);
    var d = this;
    0 < b ? this.$$pendingDebounce = this.$$timeout(
                function() {
                  d.$commitViewValue()
                },
                b) :
            this.$$rootScope.$$phase ? this.$commitViewValue() :
                                       this.$$scope.$apply(function() {
                                         d.$commitViewValue()
                                       })
  },
  $overrideModelOptions: function(a) {
    this.$options = this.$options.createChild(a);
    this.$$setUpdateOnEvents()
  },
  $processModelValue: function() {
    var a = this.$$format();
    this.$viewValue !== a &&
        (this.$$updateEmptyClasses(a),
         this.$viewValue = this.$$lastCommittedViewValue = a, this.$render(),
         this.$$runValidators(this.$modelValue, this.$viewValue, C))
  },
  $$format: function() {
    for (var a = this.$formatters, b = a.length, d = this.$modelValue; b--;)
      d = a[b](d);
    return d
  },
  $$setModelValue: function(a) {
    this.$modelValue = this.$$rawModelValue = a;
    this.$$parserValid = void 0;
    this.$processModelValue()
  },
  $$setUpdateOnEvents: function() {
    this.$$updateEvents &&
        this.$$element.off(this.$$updateEvents, this.$$updateEventHandler);
    if (this.$$updateEvents = this.$options.getOption('updateOn'))
      this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
  },
  $$updateEventHandler: function(a) {
    this.$$debounceViewValueCommit(a && a.type)
  }
};
$d({
  clazz: Rb,
  set: function(a, b) {
    a[b] = !0
  },
  unset: function(a, b) {
    delete a[b]
  }
});
var mf =
        [
          '$rootScope',
          function(a) {
            return {
              restrict: 'A', require: ['ngModel', '^?form', '^?ngModelOptions'],
                  controller: Rb, priority: 1, compile: function(b) {
                    b.addClass(Za).addClass('ng-untouched').addClass(mb);
                    return {
                      pre: function(a, b, e, f) {
                        var g = f[0];
                        b = f[1] || g.$$parentForm;
                        if (f = f[2]) g.$options = f.$options;
                        g.$$initGetterSetters();
                        b.$addControl(g);
                        e.$observe('name', function(a) {
                          g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                        });
                        a.$on('$destroy', function() {
                          g.$$parentForm.$removeControl(g)
                        })
                      }, post: function(b, c, e, f) {
                        function g() {
                          k.$setTouched()
                        }
                        var k = f[0];
                        k.$$setUpdateOnEvents();
                        c.on('blur', function() {
                          k.$touched ||
                              (a.$$phase ? b.$evalAsync(g) : b.$apply(g))
                        })
                      }
                    }
                  }
            }
          }
        ],
    Sb, sh = /(\s+|^)default(\s+|$)/;
Kc.prototype = {
  getOption: function(a) {
    return this.$$options[a]
  },
  createChild: function(a) {
    var b = !1;
    a = R({}, a);
    r(a, function(d, c) {
      '$inherit' === d ?
          '*' === c ?
          b = !0 :
          (a[c] = this.$$options[c],
           'updateOn' === c &&
               (a.updateOnDefault = this.$$options.updateOnDefault)) :
          'updateOn' === c &&
              (a.updateOnDefault = !1, a[c] = T(d.replace(sh, function() {
                                         a.updateOnDefault = !0;
                                         return ' '
                                       })))
    }, this);
    b && (delete a['*'], fe(a, this.$$options));
    fe(a, Sb.$$options);
    return new Kc(a)
  }
};
Sb = new Kc({
  updateOn: '',
  updateOnDefault: !0,
  debounce: 0,
  getterSetter: !1,
  allowInvalid: !1,
  timezone: null
});
var qf =
        function() {
  function a(a, d) {
    this.$$attrs = a;
    this.$$scope = d
  }
  a.$inject = ['$attrs', '$scope'];
  a.prototype = {
    $onInit: function() {
      var a = this.parentCtrl ? this.parentCtrl.$options : Sb,
          d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
      this.$options = a.createChild(d)
    }
  };
  return {
    restrict: 'A', priority: 10, require: {parentCtrl: '?^^ngModelOptions'},
        bindToController: !0, controller: a
  }
},
    af = Na({terminal: !0, priority: 1E3}), th = M('ngOptions'),
    uh =
        /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
    kf =
        [
          '$compile', '$document', '$parse',
          function(a, b, d) {
            function c(a, b, c) {
              function e(a, b, c, d, f) {
                this.selectValue = a;
                this.viewValue = b;
                this.label = c;
                this.group = d;
                this.disabled = f
              }
              function f(a) {
                var b;
                if (!p && xa(a))
                  b = a;
                else {
                  b = [];
                  for (var c in a)
                    a.hasOwnProperty(c) && '$' !== c.charAt(0) && b.push(c)
                }
                return b
              }
              var q = a.match(uh);
              if (!q) throw th('iexp', a, ya(b));
              var n = q[5] || q[7], p = q[6];
              a = / as /.test(q[0]) && q[1];
              var r = q[9];
              b = d(q[2] ? q[1] : n);
              var u = a && d(a) || b, v = r && d(r),
                  w = r ?
                  function(a, b) {
                    return v(c, b)
                  } :
                  function(a) {
                    return Ka(a)
                  },
                  y =
                      function(a, b) {
                    return w(a, C(a, b))
                  },
                  x = d(q[2] || q[1]), E = d(q[3] || ''), G = d(q[4] || ''),
                  J = d(q[8]), z = {}, C = p ? function(a, b) {
                    z[p] = b;
                    z[n] = a;
                    return z
                  } : function(a) {
                    z[n] = a;
                    return z
                  };
              return {
                trackBy: r, getTrackByValue: y,
                    getWatchables: d(J, function(a) {
                      var b = [];
                      a = a || [];
                      for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                        var k = a === d ? g : d[g], l = a[k], k = C(l, k),
                            l = w(l, k);
                        b.push(l);
                        if (q[2] || q[1]) l = x(c, k), b.push(l);
                        q[4] && (k = G(c, k), b.push(k))
                      }
                      return b
                    }), getOptions: function() {
                      for (var a = [], b = {}, d = J(c) || [], g = f(d),
                               k = g.length, n = 0;
                           n < k; n++) {
                        var q = d === g ? n : g[n], p = C(d[q], q), s = u(c, p),
                            q = w(s, p), v = x(c, p), D = E(c, p), p = G(c, p),
                            s = new e(q, s, v, D, p);
                        a.push(s);
                        b[q] = s
                      }
                      return {
                        items: a, selectValueMap: b,
                            getOptionFromViewValue: function(a) {
                              return b[y(a)]
                            }, getViewValueFromOption: function(a) {
                              return r ? Ha(a.viewValue) : a.viewValue
                            }
                      }
                    }
              }
            }
            var e = B.document.createElement('option'),
                f = B.document.createElement('optgroup');
            return {
              restrict: 'A', terminal: !0, require: ['select', 'ngModel'],
                  link: {
                    pre:
                        function(a, b, c, d) {
                          d[0].registerOption = C
                        },
                    post:
                        function(d, k, h, l) {
                          function m(a) {
                            var b =
                                (a = w.getOptionFromViewValue(a)) && a.element;
                            b && !b.selected && (b.selected = !0);
                            return a
                          }
                          function q(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label &&
                                (b.label = a.label, b.textContent = a.label);
                            b.value = a.selectValue
                          }
                          var n = l[0], p = l[1], t = h.multiple;
                          l = 0;
                          for (var u = k.children(), D = u.length; l < D; l++)
                            if ('' === u[l].value) {
                              n.hasEmptyOption = !0;
                              n.emptyOption = u.eq(l);
                              break
                            }
                          k.empty();
                          l = !!n.emptyOption;
                          y(e.cloneNode(!1)).val('?');
                          var w, x = c(h.ngOptions, k, d),
                                 z = b[0].createDocumentFragment();
                          n.generateUnknownOptionValue = function(a) {
                            return '?'
                          };
                          t ? (n.writeValue =
                                   function(a) {
                                     if (w) {
                                       var b = a && a.map(m) || [];
                                       w.items.forEach(function(a) {
                                         a.element.selected &&
                                             -1 ===
                                                 Array.prototype.indexOf.call(
                                                     b, a) &&
                                             (a.element.selected = !1)
                                       })
                                     }
                                   },
                               n.readValue =
                                   function() {
                                     var a = k.val() || [], b = [];
                                     r(a, function(a) {
                                       (a = w.selectValueMap[a]) &&
                                           !a.disabled &&
                                           b.push(w.getViewValueFromOption(a))
                                     });
                                     return b
                                   },
                               x.trackBy &&
                                   d.$watchCollection(
                                       function() {
                                         if (I(p.$viewValue))
                                           return p.$viewValue.map(function(a) {
                                             return x.getTrackByValue(a)
                                           })
                                       },
                                       function() {
                                         p.$render()
                                       })) :
                              (n.writeValue =
                                   function(a) {
                                     if (w) {
                                       var b = k[0].options[k[0].selectedIndex],
                                           c = w.getOptionFromViewValue(a);
                                       b && b.removeAttribute('selected');
                                       c ? (k[0].value !== c.selectValue &&
                                                (n.removeUnknownOption(),
                                                 k[0].value = c.selectValue,
                                                 c.element.selected = !0),
                                            c.element.setAttribute(
                                                'selected', 'selected')) :
                                           n.selectUnknownOrEmptyOption(a)
                                     }
                                   },
                               n.readValue =
                                   function() {
                                     var a = w.selectValueMap[k.val()];
                                     return a && !a.disabled ?
                                         (n.unselectEmptyOption(),
                                          n.removeUnknownOption(),
                                          w.getViewValueFromOption(a)) :
                                         null
                                   },
                               x.trackBy &&
                                   d.$watch(
                                       function() {
                                         return x.getTrackByValue(p.$viewValue)
                                       },
                                       function() {
                                         p.$render()
                                       }));
                          l &&
                              (a(n.emptyOption)(d), k.prepend(n.emptyOption),
                               8 === n.emptyOption[0].nodeType ?
                                   (n.hasEmptyOption = !1,
                                    n.registerOption =
                                        function(a, b) {
                                          '' === b.val() &&
                                              (n.hasEmptyOption = !0,
                                               n.emptyOption = b,
                                               n.emptyOption.removeClass(
                                                   'ng-scope'),
                                               p.$render(),
                                               b.on('$destroy', function() {
                                                 var a =
                                                     n.$isEmptyOptionSelected();
                                                 n.hasEmptyOption = !1;
                                                 n.emptyOption = void 0;
                                                 a && p.$render()
                                               }))
                                        }) :
                                   n.emptyOption.removeClass('ng-scope'));
                          d.$watchCollection(x.getWatchables, function() {
                            var a = w && n.readValue();
                            if (w)
                              for (var b = w.items.length - 1; 0 <= b; b--) {
                                var c = w.items[b];
                                v(c.group) ? Fb(c.element.parentNode) :
                                             Fb(c.element)
                              }
                            w = x.getOptions();
                            var d = {};
                            w.items.forEach(function(a) {
                              var b;
                              if (v(a.group)) {
                                b = d[a.group];
                                b ||
                                    (b = f.cloneNode(!1), z.appendChild(b),
                                     b.label =
                                         null === a.group ? 'null' : a.group,
                                     d[a.group] = b);
                                var c = e.cloneNode(!1);
                                b.appendChild(c);
                                q(a, c)
                              } else
                                b = e.cloneNode(!1), z.appendChild(b), q(a, b)
                            });
                            k[0].appendChild(z);
                            p.$render();
                            p.$isEmpty(a) ||
                                (b = n.readValue(),
                                 (x.trackBy || t ? ua(a, b) : a === b) ||
                                     (p.$setViewValue(b), p.$render()))
                          })
                        }
                  }
            }
          }
        ],
    bf =
        [
          '$locale', '$interpolate', '$log',
          function(a, b, d) {
            var c = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
              link: function(f, g, k) {
                function h(a) {
                  g.text(a || '')
                }
                var l = k.count, m = k.$attr.when && g.attr(k.$attr.when),
                    q = k.offset || 0, n = f.$eval(m) || {}, p = {},
                    t = b.startSymbol(), u = b.endSymbol(),
                    v = t + l + '-' + q + u, w = ea.noop, y;
                r(k, function(a, b) {
                  var c = e.exec(b);
                  c &&
                      (c = (c[1] ? '-' : '') + O(c[2]),
                       n[c] = g.attr(k.$attr[b]))
                });
                r(n, function(a, d) {
                  p[d] = b(a.replace(c, v))
                });
                f.$watch(l, function(b) {
                  var c = parseFloat(b), e = V(c);
                  e || c in n || (c = a.pluralCat(c - q));
                  c === y || e && V(y) ||
                      (w(), e = p[c],
                       x(e) ? (null != b &&
                                   d.debug(
                                       'ngPluralize: no rule defined for \'' +
                                       c + '\' in ' + m),
                               w = C, h()) :
                              w = f.$watch(e, h),
                       y = c)
                })
              }
            }
          }
        ],
    ne = M('ngRef'),
    cf =
        [
          '$parse',
          function(a) {
            return {
              priority: -1, restrict: 'A', compile: function(b, d) {
                var c = va(ta(b)), e = a(d.ngRef), f = e.assign || function() {
                  throw ne('nonassign', d.ngRef);
                };
                return function(a, b, h) {
                  var l;
                  if (h.hasOwnProperty('ngRefRead'))
                    if ('$element' === h.ngRefRead)
                      l = b;
                    else {
                      if (l = b.data('$' + h.ngRefRead + 'Controller'), !l)
                        throw ne('noctrl', h.ngRefRead, d.ngRef);
                    }
                  else
                    l = b.data('$' + c + 'Controller');
                  l = l || b;
                  f(a, l);
                  b.on('$destroy', function() {
                    e(a) === l && f(a, null)
                  })
                }
              }
            }
          }
        ],
    df =
        [
          '$parse', '$animate', '$compile',
          function(a, b, d) {
            var c = M('ngRepeat'), e = function(a, b, c, d, e, m, q) {
              a[c] = d;
              e && (a[e] = m);
              a.$index = b;
              a.$first = 0 === b;
              a.$last = b === q - 1;
              a.$middle = !(a.$first || a.$last);
              a.$odd = !(a.$even = 0 === (b & 1))
            };
            return {
              restrict: 'A', multiElement: !0, transclude: 'element',
                  priority: 1E3, terminal: !0, $$tlb: !0,
                  compile: function(f, g) {
                    var k = g.ngRepeat,
                        h = d.$$createComment('end ngRepeat', k),
                        l = k.match(
                            /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l) throw c('iexp', k);
                    var m = l[1], q = l[2], n = l[3], p = l[4],
                        l = m.match(
                            /^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
                    if (!l) throw c('iidexp', m);
                    var t = l[3] || l[1], u = l[2];
                    if (n &&
                        (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n) ||
                         /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/
                             .test(n)))
                      throw c('badident', n);
                    var v, w, x, y, z = {$id: Ka};
                    p ? v = a(p) :
                        (x =
                             function(a, b) {
                               return Ka(b)
                             },
                         y =
                             function(a) {
                               return a
                             });
                    return function(a, d, f, g, l) {
                      v && (w = function(b, c, d) {
                        u && (z[u] = b);
                        z[t] = c;
                        z.$index = d;
                        return v(a, z)
                      });
                      var m = S();
                      a.$watchCollection(q, function(f) {
                        var g, q, p = d[0], s, v = S(), D, z, C, B, E, A, F;
                        n && (a[n] = f);
                        if (xa(f))
                          E = f, q = w || x;
                        else
                          for (F in q = w || y, E = [], f)
                            sa.call(f, F) && '$' !== F.charAt(0) && E.push(F);
                        D = E.length;
                        F = Array(D);
                        for (g = 0; g < D; g++)
                          if (z = f === E ? g : E[g], C = f[z], B = q(z, C, g),
                              m[B])
                            A = m[B], delete m[B], v[B] = A, F[g] = A;
                          else {
                            if (v[B])
                              throw r(F, function(a) {
                                a && a.scope && (m[a.id] = a)
                              }), c('dupes', k, B, C);
                            F[g] = {id: B, scope: void 0, clone: void 0};
                            v[B] = !0
                          }
                        for (s in m) {
                          A = m[s];
                          B = tb(A.clone);
                          b.leave(B);
                          if (B[0].parentNode)
                            for (g = 0, q = B.length; g < q; g++)
                              B[g].$$NG_REMOVED = !0;
                          A.scope.$destroy()
                        }
                        for (g = 0; g < D; g++)
                          if (z = f === E ? g : E[g], C = f[z], A = F[g],
                              A.scope) {
                            s = p;
                            do
                              s = s.nextSibling;
                            while (s && s.$$NG_REMOVED);
                            A.clone[0] !== s && b.move(tb(A.clone), null, p);
                            p = A.clone[A.clone.length - 1];
                            e(A.scope, g, t, C, u, z, D)
                          } else
                            l(function(a, c) {
                              A.scope = c;
                              var d = h.cloneNode(!1);
                              a[a.length++] = d;
                              b.enter(a, null, p);
                              p = d;
                              A.clone = a;
                              v[A.id] = A;
                              e(A.scope, g, t, C, u, z, D)
                            });
                        m = v
                      })
                    }
                  }
            }
          }
        ],
    ef =
        [
          '$animate',
          function(a) {
            return {
              restrict: 'A', multiElement: !0, link: function(b, d, c) {
                b.$watch(c.ngShow, function(b) {
                  a[b ? 'removeClass' : 'addClass'](
                      d, 'ng-hide', {tempClasses: 'ng-hide-animate'})
                })
              }
            }
          }
        ],
    Xe =
        [
          '$animate',
          function(a) {
            return {
              restrict: 'A', multiElement: !0, link: function(b, d, c) {
                b.$watch(c.ngHide, function(b) {
                  a[b ? 'addClass' : 'removeClass'](
                      d, 'ng-hide', {tempClasses: 'ng-hide-animate'})
                })
              }
            }
          }
        ],
    ff = Na(function(a, b, d) {
      a.$watchCollection(d.ngStyle, function(a, d) {
        d && a !== d && r(d, function(a, c) {
          b.css(c, '')
        });
        a && b.css(a)
      })
    }),
    gf =
        [
          '$animate', '$compile',
          function(a, b) {
            return {
              require: 'ngSwitch',
                  controller:
                      [
                        '$scope',
                        function() {
                          this.cases = {}
                        }
                      ],
                  link: function(d, c, e, f) {
                    var g = [], k = [], h = [], l = [], m = function(a, b) {
                      return function(c) {
                        !1 !== c && a.splice(b, 1)
                      }
                    };
                    d.$watch(e.ngSwitch || e.on, function(c) {
                      for (var d, e; h.length;) a.cancel(h.pop());
                      d = 0;
                      for (e = l.length; d < e; ++d) {
                        var p = tb(k[d].clone);
                        l[d].$destroy();
                        (h[d] = a.leave(p)).done(m(h, d))
                      }
                      k.length = 0;
                      l.length = 0;
                      (g = f.cases['!' + c] || f.cases['?']) &&
                          r(g, function(c) {
                            c.transclude(function(d, e) {
                              l.push(e);
                              var f = c.element;
                              d[d.length++] =
                                  b.$$createComment('end ngSwitchWhen');
                              k.push({clone: d});
                              a.enter(d, f.parent(), f)
                            })
                          })
                    })
                  }
            }
          }
        ],
    hf = Na({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function(a, b, d, c, e) {
        a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator)
                .sort()
                .filter(function(a, b, c) {
                  return c[b - 1] !== a
                });
        r(a, function(a) {
          c.cases['!' + a] = c.cases['!' + a] || [];
          c.cases['!' + a].push({transclude: e, element: b})
        })
      }
    }),
    jf = Na({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function(a, b, d, c, e) {
        c.cases['?'] = c.cases['?'] || [];
        c.cases['?'].push({transclude: e, element: b})
      }
    }),
    vh = M('ngTransclude'),
    lf =
        [
          '$compile',
          function(a) {
            return {
              restrict: 'EAC', compile: function(b) {
                var d = a(b.contents());
                b.empty();
                return function(a, b, f, g, k) {
                  function h() {
                    d(a, function(a) {
                      b.append(a)
                    })
                  }
                  if (!k) throw vh('orphan', ya(b));
                  f.ngTransclude === f.$attr.ngTransclude &&
                      (f.ngTransclude = '');
                  f = f.ngTransclude || f.ngTranscludeSlot;
                  k(function(a, c) {
                    var d;
                    if (d = a.length)
                      a: {
                        d = 0; for (var f = a.length; d < f; d++) {
                          var g = a[d];
                          if (g.nodeType !== Oa || g.nodeValue.trim()) {
                            d = !0;
                            break a
                          }
                        } d = void 0
                      } d ?
                          b.append(a) :
                          (h(), c.$destroy())
                  }, null, f);
                  f && !k.isSlotFilled(f) && h()
                }
              }
            }
          }
        ],
    Le =
        [
          '$templateCache',
          function(a) {
            return {
              restrict: 'E', terminal: !0, compile: function(b, d) {
                'text/ng-template' === d.type && a.put(d.id, b[0].text)
              }
            }
          }
        ],
    wh = {$setViewValue: C, $render: C},
    xh =
        [
          '$element', '$scope',
          function(a, b) {
            function d() {
              g || (g = !0, b.$$postDigest(function() {
                g = !1;
                e.ngModelCtrl.$render()
              }))
            }
            function c(a) {
              k || (k = !0, b.$$postDigest(function() {
                b.$$destroyed ||
                    (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()),
                     a && e.ngModelCtrl.$render())
              }))
            }
            var e = this, f = new Hb;
            e.selectValueMap = {};
            e.ngModelCtrl = wh;
            e.multiple = !1;
            e.unknownOption = y(B.document.createElement('option'));
            e.hasEmptyOption = !1;
            e.emptyOption = void 0;
            e.renderUnknownOption = function(b) {
              b = e.generateUnknownOptionValue(b);
              e.unknownOption.val(b);
              a.prepend(e.unknownOption);
              Ea(e.unknownOption, !0);
              a.val(b)
            };
            e.updateUnknownOption = function(b) {
              b = e.generateUnknownOptionValue(b);
              e.unknownOption.val(b);
              Ea(e.unknownOption, !0);
              a.val(b)
            };
            e.generateUnknownOptionValue = function(a) {
              return '? ' + Ka(a) + ' ?'
            };
            e.removeUnknownOption = function() {
              e.unknownOption.parent() && e.unknownOption.remove()
            };
            e.selectEmptyOption = function() {
              e.emptyOption && (a.val(''), Ea(e.emptyOption, !0))
            };
            e.unselectEmptyOption = function() {
              e.hasEmptyOption && Ea(e.emptyOption, !1)
            };
            b.$on('$destroy', function() {
              e.renderUnknownOption = C
            });
            e.readValue = function() {
              var b = a.val(),
                  b = b in e.selectValueMap ? e.selectValueMap[b] : b;
              return e.hasOption(b) ? b : null
            };
            e.writeValue = function(b) {
              var c = a[0].options[a[0].selectedIndex];
              c && Ea(y(c), !1);
              e.hasOption(b) ? (e.removeUnknownOption(), c = Ka(b),
                                a.val(c in e.selectValueMap ? c : b),
                                Ea(y(a[0].options[a[0].selectedIndex]), !0)) :
                               e.selectUnknownOrEmptyOption(b)
            };
            e.addOption = function(a, b) {
              if (8 !== b[0].nodeType) {
                Qa(a, '"option value"');
                '' === a && (e.hasEmptyOption = !0, e.emptyOption = b);
                var c = f.get(a) || 0;
                f.set(a, c + 1);
                d()
              }
            };
            e.removeOption = function(a) {
              var b = f.get(a);
              b &&
                  (1 === b ?
                       (f.delete(a),
                        '' === a &&
                            (e.hasEmptyOption = !1, e.emptyOption = void 0)) :
                       f.set(a, b - 1))
            };
            e.hasOption = function(a) {
              return !!f.get(a)
            };
            e.$hasEmptyOption = function() {
              return e.hasEmptyOption
            };
            e.$isUnknownOptionSelected = function() {
              return a[0].options[0] === e.unknownOption[0]
            };
            e.$isEmptyOptionSelected = function() {
              return e.hasEmptyOption &&
                  a[0].options[a[0].selectedIndex] === e.emptyOption[0]
            };
            e.selectUnknownOrEmptyOption = function(a) {
              null == a && e.emptyOption ?
                  (e.removeUnknownOption(), e.selectEmptyOption()) :
                  e.unknownOption.parent().length ? e.updateUnknownOption(a) :
                                                    e.renderUnknownOption(a)
            };
            var g = !1, k = !1;
            e.registerOption = function(a, b, f, g, k) {
              if (f.$attr.ngValue) {
                var p, r;
                f.$observe('value', function(a) {
                  var d, f = b.prop('selected');
                  v(r) &&
                      (e.removeOption(p), delete e.selectValueMap[r], d = !0);
                  r = Ka(a);
                  p = a;
                  e.selectValueMap[r] = a;
                  e.addOption(a, b);
                  b.attr('value', r);
                  d && f && c()
                })
              } else
                g ? f.$observe('value', function(a) {
                  e.readValue();
                  var d, f = b.prop('selected');
                  v(p) && (e.removeOption(p), d = !0);
                  p = a;
                  e.addOption(a, b);
                  d && f && c()
                }) : k ? a.$watch(k, function(a, d) {
                  f.$set('value', a);
                  var g = b.prop('selected');
                  d !== a && e.removeOption(d);
                  e.addOption(a, b);
                  d && g && c()
                }) : e.addOption(f.value, b);
              f.$observe('disabled', function(a) {
                if ('true' === a || a && b.prop('selected'))
                  e.multiple ? c(!0) :
                               (e.ngModelCtrl.$setViewValue(null),
                                e.ngModelCtrl.$render())
              });
              b.on('$destroy', function() {
                var a = e.readValue(), b = f.value;
                e.removeOption(b);
                d();
                (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0)
              })
            }
          }
        ],
    Me =
        function() {
      return {
        restrict: 'E', require: ['select', '?ngModel'], controller: xh,
            priority: 1, link: {
              pre:
                  function(a, b, d, c) {
                    var e = c[0], f = c[1];
                    if (f) {
                      if (e.ngModelCtrl = f, b.on('change', function() {
                            e.removeUnknownOption();
                            a.$apply(function() {
                              f.$setViewValue(e.readValue())
                            })
                          }), d.multiple) {
                        e.multiple = !0;
                        e.readValue = function() {
                          var a = [];
                          r(b.find('option'), function(b) {
                            b.selected && !b.disabled &&
                                (b = b.value,
                                 a.push(
                                     b in e.selectValueMap ?
                                         e.selectValueMap[b] :
                                         b))
                          });
                          return a
                        };
                        e.writeValue = function(a) {
                          r(b.find('option'), function(b) {
                            var c = !!a &&
                                (-1 !==
                                     Array.prototype.indexOf.call(a, b.value) ||
                                 -1 !==
                                     Array.prototype.indexOf.call(
                                         a, e.selectValueMap[b.value]));
                            c !== b.selected && Ea(y(b), c)
                          })
                        };
                        var g, k = NaN;
                        a.$watch(function() {
                          k !== f.$viewValue || ua(g, f.$viewValue) ||
                              (g = oa(f.$viewValue), f.$render());
                          k = f.$viewValue
                        });
                        f.$isEmpty = function(a) {
                          return !a || 0 === a.length
                        }
                      }
                    } else
                      e.registerOption = C
                  },
              post:
                  function(a, b, d, c) {
                    var e = c[1];
                    if (e) {
                      var f = c[0];
                      e.$render = function() {
                        f.writeValue(e.$viewValue)
                      }
                    }
                  }
            }
      }
    },
    Ne =
        [
          '$interpolate',
          function(a) {
            return {
              restrict: 'E', priority: 100, compile: function(b, d) {
                var c, e;
                v(d.ngValue) ||
                    (v(d.value) ?
                         c = a(d.value, !0) :
                         (e = a(b.text(), !0)) || d.$set('value', b.text()));
                return function(a, b, d) {
                  var h = b.parent();
                  (h = h.data('$selectController') ||
                       h.parent().data('$selectController')) &&
                      h.registerOption(a, b, d, c, e)
                }
              }
            }
          }
        ],
    Zc = function() {
      return {
        restrict: 'A', require: '?ngModel', link: function(a, b, d, c) {
          c && (d.required = !0, c.$validators.required = function(a, b) {
            return !d.required || !c.$isEmpty(b)
          }, d.$observe('required', function() {
            c.$validate()
          }))
        }
      }
    }, Yc = function() {
      return {
        restrict: 'A', require: '?ngModel', link: function(a, b, d, c) {
          if (c) {
            var e, f = d.ngPattern || d.pattern;
            d.$observe('pattern', function(a) {
              A(a) && 0 < a.length && (a = new RegExp('^' + a + '$'));
              if (a && !a.test) throw M('ngPattern')('noregexp', f, a, ya(b));
              e = a || void 0;
              c.$validate()
            });
            c.$validators.pattern = function(a, b) {
              return c.$isEmpty(b) || x(e) || e.test(b)
            }
          }
        }
      }
    }, ad = function() {
      return {
        restrict: 'A', require: '?ngModel', link: function(a, b, d, c) {
          if (c) {
            var e = -1;
            d.$observe('maxlength', function(a) {
              a = da(a);
              e = V(a) ? -1 : a;
              c.$validate()
            });
            c.$validators.maxlength = function(a, b) {
              return 0 > e || c.$isEmpty(b) || b.length <= e
            }
          }
        }
      }
    }, $c = function() {
      return {
        restrict: 'A', require: '?ngModel', link: function(a, b, d, c) {
          if (c) {
            var e = 0;
            d.$observe('minlength', function(a) {
              e = da(a) || 0;
              c.$validate()
            });
            c.$validators.minlength = function(a, b) {
              return c.$isEmpty(b) || b.length >= e
            }
          }
        }
      }
    };
B.angular.bootstrap ?
    B.console &&
        console.log('WARNING: Tried to load AngularJS more than once.') :
    (Ce(), Ge(ea),
     ea.module(
         'ngLocale', [],
         [
           '$provide',
           function(a) {
             function b(a) {
               a += '';
               var b = a.indexOf('.');
               return -1 == b ? 0 : a.length - b - 1
             }
             a.value('$locale', {
               DATETIME_FORMATS: {
                 AMPMS: ['AM', 'PM'],
                 DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'
                          .split(' '),
                 ERANAMES: ['Before Christ', 'Anno Domini'],
                 ERAS: ['BC', 'AD'],
                 FIRSTDAYOFWEEK: 6,
                 MONTH:
                     'January February March April May June July August September October November December'
                         .split(' '),
                 SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
                 SHORTMONTH:
                     'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(
                         ' '),
                 STANDALONEMONTH:
                     'January February March April May June July August September October November December'
                         .split(' '),
                 WEEKENDRANGE: [5, 6],
                 fullDate: 'EEEE, MMMM d, y',
                 longDate: 'MMMM d, y',
                 medium: 'MMM d, y h:mm:ss a',
                 mediumDate: 'MMM d, y',
                 mediumTime: 'h:mm:ss a',
                 'short': 'M/d/yy h:mm a',
                 shortDate: 'M/d/yy',
                 shortTime: 'h:mm a'
               },
               NUMBER_FORMATS: {
                 CURRENCY_SYM: '$',
                 DECIMAL_SEP: '.',
                 GROUP_SEP: ',',
                 PATTERNS: [
                   {
                     gSize: 3,
                     lgSize: 3,
                     maxFrac: 3,
                     minFrac: 0,
                     minInt: 1,
                     negPre: '-',
                     negSuf: '',
                     posPre: '',
                     posSuf: ''
                   },
                   {
                     gSize: 3,
                     lgSize: 3,
                     maxFrac: 2,
                     minFrac: 2,
                     minInt: 1,
                     negPre: '-\u00a4',
                     negSuf: '',
                     posPre: '\u00a4',
                     posSuf: ''
                   }
                 ]
               },
               id: 'en-us',
               localeID: 'en_US',
               pluralCat: function(a, c) {
                 var e = a | 0, f = c;
                 void 0 === f && (f = Math.min(b(a), 3));
                 Math.pow(10, f);
                 return 1 == e && 0 == f ? 'one' : 'other'
               }
             })
           }
         ]),
     y(function() {
       xe(B.document, Tc)
     }))
})(window);
!window.angular.$$csp().noInlineStyle &&
    window.angular.element(document.head)
        .prepend(
            '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

;function Expand(node) {
	// Change the image (if there is an image)
	if (node.children.length > 0) {
		if (node.children.item(0).tagName == "IMG") {
			node.children.item(0).src = "minus.gif";
		}
	}

	node.nextSibling.style.display = '';
}

function Collapse(node) {
	// Change the image (if there is an image)
	if (node.children.length > 0) {
		if (node.children.item(0).tagName == "IMG") {
			node.children.item(0).src = "plus.gif";
		}
	}

	node.nextSibling.style.display = 'none';
}

function Toggle(node) {
	// Unfold the branch if it isn't visible
	if (node.nextSibling.style.display == 'none') {
		Expand(node);
	}
	// Collapse the branch if it IS visible
	else {
		Collapse(node);
	}

}

//Warning message when check for all container on booking is clicked.
function allOnBill() {
	bookingNumber = document.getElementById('bookingNumber').value;
	if (document.getElementById('saveBill').checked == true) {
		alert('WARNING: Using this function for multiple containers will OVERWRITE all status and notes that might exist already for the other containers on booking ' + bookingNumber + ' !');
	}
}

//Function to check on load conditions for Billing Details JSP
function checkOnLoad(status) {

	var billingTypeDmr = document
	.getElementById('selectedDemurrageBillingStatus').value;

	// Checking billing Type.

	if (billingTypeDmr == '0-No Billing') {

		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
	} else if (billingTypeDmr == '1-Partly Billing') {
		document.getElementById('demurrageBillingAmount').disabled = false;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		if(document.getElementById('saveBill')!= null){
			document.getElementById('saveBill').checked=false;
			document.getElementById('saveBill').disabled=true;
		}
	} else if (billingTypeDmr == '2-Full Billing') {
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
	}

	var billingTypeDts = document
	.getElementById('selectedDetentionBillingStatus').value;

	if (billingTypeDts == '0-No Billing') {
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
	} else if (billingTypeDts == '1-Partly Billing') {
		document.getElementById('detentionBillingAmount').disabled = false;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		if(document.getElementById('saveBill')!= null){
				document.getElementById('saveBill').checked=false;
				document.getElementById('saveBill').disabled=true;
			}
			} else if (billingTypeDts == '2-Full Billing') {
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
	}

	// Checking if calculated amount is zero.
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dtsTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('dtsTotalAmount').value) <= 0) {
		document.getElementById('selectedDetentionBillingStatus').disabled = true;
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
	}
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dmrTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('DmrTotalAmount').value) <= 0) {
		document.getElementById('selectedDemurrageBillingStatus').disabled = true;
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
	}

	// checking Action Status.
	if (status == '0') {
		document.getElementById('finalizeBill').disabled = true;
	} else if (status == '2') {
		document.getElementById('saveBl').disabled = true;
		document.getElementById('selectedDemurrageBillingStatus').disabled = true;
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
		document.getElementById('selectedDetentionBillingStatus').disabled = true;
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
		document.getElementById('remarks').disabled = true;
	} 
	//changes by jyotsana/nitu
	else if (status == '3')
	{
		document.getElementById('saveBl').disabled = false;
		document.getElementById('selectedDemurrageBillingStatus').disabled = false;
		document.getElementById('demurrageBillingAmount').disabled = false;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		document.getElementById('selectedDetentionBillingStatus').disabled = false;
		document.getElementById('detentionBillingAmount').disabled = false;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		document.getElementById('remarks').disabled = false;
	}
	//
	document.getElementById('canFinalize').value = 'YES';
}

//function to call on change of dmr billing amount.
function onChangeDmrBilling() {
	document.getElementById('canFinalize').value = 'NO';
	var totalAmount = document.getElementById('DmrTotalAmount').value;
	var billingType = document.getElementById('selectedDemurrageBillingStatus').value;
	var billingTypeOther = document.getElementById('selectedDetentionBillingStatus').value;
	if (billingType == '0-No Billing') {

		document.getElementById('demurrageBillingAmount').value = '0.00';
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
		
	} else if (billingType == '1-Partly Billing') {
		document.getElementById('demurrageBillingAmount').value = totalAmount;
		document.getElementById('demurrageBillingAmount').disabled = false;
		document.getElementById('selectedDemerageDisputeReason').disabled = false;
		  if(document.getElementById('saveBill')!= null){
				document.getElementById('saveBill').checked=false;
				document.getElementById('saveBill').disabled=true;
			}
			} else if (billingType == '2-Full Billing') {
				var blankString="      ";
		makeTooltipdmr(blankString);
		document.getElementById('demurrageBillingAmount').value = totalAmount;
		document.getElementById('demurrageBillingAmount').disabled = true;
		document.getElementById('selectedDemerageDisputeReason').value='      ';
		document.getElementById('selectedDemerageDisputeReason').disabled = true;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
	}

}

//function to call on change of dts billing amount.
function onChangeDtsBilling() {
	document.getElementById('canFinalize').value = 'NO';
	var totalAmount1 = document.getElementById('dtsTotalAmount').value;
	var billingType = document.getElementById('selectedDetentionBillingStatus').value;
	var billingTypeOther = document.getElementById('selectedDemurrageBillingStatus').value;
	
	if (billingType == '0-No Billing') {
		document.getElementById('detentionBillingAmount').value = '0.00';
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
	} else if (billingType == '1-Partly Billing') {
		document.getElementById('detentionBillingAmount').value = totalAmount1;
		document.getElementById('detentionBillingAmount').disabled = false;
		document.getElementById('selectedDetentionDisputeReason').disabled = false;
		 if(document.getElementById('saveBill')!= null){
				document.getElementById('saveBill').checked=false;
				document.getElementById('saveBill').disabled=true;
			}
	} else if (billingType == '2-Full Billing') {
		var blankString="      ";
		makeTooltipdts(blankString);
		document.getElementById('detentionBillingAmount').value = totalAmount1;
		document.getElementById('detentionBillingAmount').disabled = true;
		document.getElementById('selectedDetentionDisputeReason').value='      ';
		document.getElementById('selectedDetentionDisputeReason').disabled = true;
		
		if(billingTypeOther != '1-Partly Billing' ){
			document.getElementById('saveBill').disabled=false;
		}
		
	}
}

//function to call on clicking save button.
function onSave(click) {
	var dtsBillingType = document
	.getElementById('selectedDetentionBillingStatus').value;
	var dmrBillingType = document
	.getElementById('selectedDemurrageBillingStatus').value;
	document.getElementById('click').value = click;
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dtsTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('dtsTotalAmount').value) > 0) {
		if (dtsBillingType == '0-No Billing'
			|| dtsBillingType == '1-Partly Billing') {
			if (document.getElementById('selectedDetentionDisputeReason').value == '      ') {
				alert('Please select some dispute reason');
				return false;
			} else if (document
					.getElementById('selectedDetentionDisputeReason').value.toUpperCase() == 'OTHER REASON(SEE REMARKS)') {
				if (document.getElementById('remarks').value == '') {
					alert('Please add remarks');
					return false;
				}
			}

		}
	}
	//changed on 07-Dec-2012 (to resolve bug(disabled billing status) when dmrTotalAmount lies between 0 and 1)
	if (Number(document.getElementById('DmrTotalAmount').value) > 0) {
		if (dmrBillingType == '0-No Billing'
			|| dmrBillingType == '1-Partly Billing') {
			if (document.getElementById('selectedDemerageDisputeReason').value == '      ') {
				alert('Please select some dispute reason');
				return false;
			} else if (document.getElementById('selectedDemerageDisputeReason').value.toUpperCase() == 'OTHER REASON(SEE REMARKS)') {
				if (document.getElementById('remarks').value == '') {
					alert('Please add remarks');
					return false;
				}
			}

		}
}
	document.getElementById('selectedDemurrageBillingStatus').disabled = false;
	document.getElementById('demurrageBillingAmount').disabled = false;
	document.getElementById('selectedDemerageDisputeReason').disabled = false;
	document.getElementById('selectedDetentionBillingStatus').disabled = false;
	document.getElementById('detentionBillingAmount').disabled = false;
	document.getElementById('selectedDetentionDisputeReason').disabled = false;
	document.getElementById('remarks').disabled = false;
	return true;
}

//function to call on clicking finalize button.
function onFinalize(click) {
	document.getElementById('click').value = click;
	var canFinalize = document.getElementById('canFinalize').value;
	if (canFinalize == 'NO') {
		alert('Please Save Bill before Finalizing');
		return false;
	} else {
		return true;
	}

}

//function to call on clicking resume button.
function onResume(click) {
	document.getElementById('click').value = click;
	return true;
}

//function to call on clicking Send Draft button.
function onSendDraft(click) {

	//to validate email id
	var emailID=document.frmMain.bookedByPartyEmail;
	
	if ((emailID.value==null)||(emailID.value=="")){
		alert("Please provide the Email Id of the notification receiver in Email Id field to send the notification");
		emailID.focus();
		return false;
	}
	if (echeck(emailID.value)==false){
//		emailID.value="";
		emailID.focus();
		return false;
	}
	
	document.getElementById('click').value = click;
	return true;
}

//function to validate email id
function echeck(str) {

	var at="@";
	var dot=".";
	var lat=str.indexOf(at);
	var lstr=str.length;
	var ldot=str.indexOf(dot);
	if (lstr >= 100){
		alert("Email address should be less than 100 characters");
		return false;
	}

	if (str.indexOf(at)==-1){
	   alert("Please enter a valid E-mail ID");
	   return false;
	}

	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
	   alert("Please enter a valid E-mail ID");
	   return false;
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
	    alert("Please enter a valid E-mail ID");
	    return false;
	}

	 if (str.indexOf(at,(lat+1))!=-1){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }

	 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }

	 if (str.indexOf(dot,(lat+2))==-1){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }
	
	 if (str.indexOf(" ")!=-1){
	    alert("Please enter a valid E-mail ID");
	    return false;
	 }

	 return true;			
}

//function to call on editing remarks.
function editRemarks() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on editing save Bill Check Box.
function editSaveBill() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on editing dispute reason.
function editDisputeReason() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on editing billing amount.
function editBillingAmount() {
	document.getElementById('canFinalize').value = 'NO';
}

//function to call on clicking close dialog button.
function win_close() {

	window.opener.frmMain.submit();
	self.close();
}

//function to call on clicking close window button.
function win_unload() {

	window.opener.frmMain.submit();
}

//Javascript methods for vessel Report JSP

function exportVesselReport() {
	document.exportReport.bookingOfficeFilter.value = document.vesselReport.bookingOfficeFilter.value;
	document.exportReport.bookingTeamFilter.value = document.vesselReport.bookingTeamFilter.value;
	document.exportReport.containerSizeFilter.value = document.vesselReport.containerSizeFilter.value;
	document.exportReport.receiptModeFilter.value = document.vesselReport.receiptModeFilter.value;
	document.exportReport.tariffTypeFilter.value = document.vesselReport.tariffTypeFilter.value;
	document.exportReport.submit();
}
function myHref() {
	alert('before submit');
	document.vesselReport.submit();
	alert('after submit');
}

function FlagBookingOffice() {
	if (document.getElementById('BookingOffice1').innerHTML == 'Fold') {
		document.vesselReport.bookingOfficeFold.value = '1';
	} else {
		document.vesselReport.bookingOfficeFold.value = '0';
	}
}

function FlagBookingTeam() {
	if (document.getElementById('BookingTeam1').innerHTML == 'Fold') {
		document.vesselReport.bookingTeamFold.value = '1';
	} else {
		document.vesselReport.bookingTeamFold.value = '0';
	}
}

function FlagCustomerName() {
	if (document.getElementById('CustomerName1').innerHTML == 'Fold') {
		document.vesselReport.customerNameFold.value = '1';
	} else {
		document.vesselReport.customerNameFold.value = '0';
	}
}

function FlagServiceContractNumber() {
	if (document.getElementById('ServiceContractNumber1').innerHTML == 'Fold') {
		document.vesselReport.serviceContractNumberFold.value = '1';
	} else {
		document.vesselReport.serviceContractNumberFold.value = '0';
	}
}

function FlagBookingNumber() {
	if (document.getElementById('BookingNumber1').innerHTML == 'Fold') {
		document.vesselReport.bookingNumberFold.value = '1';
	} else {
		document.vesselReport.bookingNumberFold.value = '0';
	}
}

function href() {
	document.vesselReport.submit();
}
function makeTooltipdts(selectedVal) {
	t = document.getElementById('tooltipdts');
		if (selectedVal=="Rolled by carrier") {
		t.style['visibility'] = 'visible';
		t.innerHTML = "Rolled by carrier";}
		else if (selectedVal =="Carriers transport") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Carriers transport";

		} else if (selectedVal =="Incorrect Invoicing") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Incorrect Invoicing";

		} else if (selectedVal =="Commercial Decision-Gain Additional Business") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Gain Additional Business";
		}
		else if (selectedVal =="Commercial Decision-Compensate For Previous Service Failure") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Compensate For Previous Service Failure";
		}
		else if(selectedVal =="      ") {
			t.style['visibility'] = 'hidden';
			t.innerHTML = "      ";
		}
		//moveIt(document.getElementById('tooltip'), 'event.x', 'event.y');
		//setTimeout("tooltipTimeout()", 1500);
	}
function makeTooltipdmr(selectedVal) {
	t = document.getElementById('tooltipdmr');
		if (selectedVal=="Rolled by carrier") {
		t.style['visibility'] = 'visible';
		t.innerHTML = "Rolled by carrier";}
		else if (selectedVal =="Carriers transport") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Carriers transport";

		} else if (selectedVal =="Incorrect Invoicing") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Incorrect Invoicing";

		} else if (selectedVal =="Commercial Decision-Compensate For Previous Service Failure"){
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Compensate For Previous Service Failure";
		}
		else if (selectedVal =="Commercial Decision-Gain Additional Business") {
			t.style['visibility'] = 'visible';
			t.innerHTML = "Commercial Decision-Gain Additional Business";
		}
		else if(selectedVal =="      ") {
			t.style['visibility'] = 'hidden';
			t.innerHTML = "      ";
		}
		
}

function mouseXY(){var X = event.clientX+200;var Y = event.clientY;
document.getElementById("tooltipdmr").style.top=X;
document.getElementById("tooltipdmr").style.left=Y;}





;
 // Array of max days in month in a year and in a leap year
monthMaxDays	= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
monthMaxDaysLeap= [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
hideSelectTags = [];

function getRealYear(dateObj)
{
	return (dateObj.getYear() % 100) + (((dateObj.getYear() % 100) < 39) ? 2000 : 1900);
}

function getDaysPerMonth(month, year)
{
	/* 
	Check for leap year. These are some conditions to check year is leap year or not...
	1.Years evenly divisible by four are normally leap years, except for... 
	2.Years also evenly divisible by 100 are not leap years, except for... 
	3.Years also evenly divisible by 400 are leap years. 
	*/
	if ((year % 4) == 0)
	{
		if ((year % 100) == 0 && (year % 400) != 0)
			return monthMaxDays[month];
	
		return monthMaxDaysLeap[month];
	}
	else
		return monthMaxDays[month];
}

function createCalender(year, month, day)
{
	 // current Date
	var curDate = new Date();
	var curDay = curDate.getDate();
	var curMonth = curDate.getMonth();
	var curYear = getRealYear(curDate)

	 // if a date already exists, we calculate some values here
	if (!year)
	{
		var year = curYear;
		var month = curMonth;
	}

	var yearFound = 0;
	for (var i=0; i<document.getElementById('selectYear').options.length; i++)
	{
		if (document.getElementById('selectYear').options[i].value == year)
		{
			document.getElementById('selectYear').selectedIndex = i;
			yearFound = true;
			break;
		}
	}
	if (!yearFound)
	{
		document.getElementById('selectYear').selectedIndex = 0;
		year = document.getElementById('selectYear').options[0].value;		
	}
	document.getElementById('selectMonth').selectedIndex = month;

	 // first day of the month.
	var fristDayOfMonthObj = new Date(year, month, 1);
	var firstDayOfMonth = fristDayOfMonthObj.getDay();

	continu		= true;
	firstRow	= true;
	var x	= 0;
	var d	= 0;
	var trs = []
	var ti = 0;
	while (d <= getDaysPerMonth(month, year))
	{
		if (firstRow)
		{
			trs[ti] = document.createElement("TR");
			if (firstDayOfMonth > 0)
			{
				while (x < firstDayOfMonth)
				{
					trs[ti].appendChild(document.createElement("TD"));
					x++;
				}
			}
			firstRow = false;
			var d = 1;
		}
		if (x % 7 == 0)
		{
			ti++;
			trs[ti] = document.createElement("TR");
		}
		if (day && d == day)
		{
			var setID = 'calenderChoosenDay';
			var styleClass = 'choosenDay';
			var setTitle = 'this day is currently selected';
		}
		else if (d == curDay && month == curMonth && year == curYear)
		{
			var setID = 'calenderToDay';
			var styleClass = 'toDay';
			var setTitle = 'this day today';
		}
		else
		{
			var setID = false;
			var styleClass = 'normalDay';
			var setTitle = false;
		}
		var td = document.createElement("TD");
		td.className = styleClass;
		if (setID)
		{
			td.id = setID;
		}
		if (setTitle)
		{
			td.title = setTitle;
		}
		td.onmouseover = new Function('highLiteDay(this)');
		td.onmouseout = new Function('deHighLiteDay(this)');
		if (targetEl)
			td.onclick = new Function('pickDate('+year+', '+month+', '+d+')');
		else
			td.style.cursor = 'default';
		td.appendChild(document.createTextNode(d));
		trs[ti].appendChild(td);
		x++;
		d++;
	}
	return trs;
}

function showCalender(elPos, tgtEl)
{
	targetEl = false;

	if (document.getElementById(tgtEl))
	{
		targetEl = document.getElementById(tgtEl);
	}
	else
	{
		if (document.forms[0].elements[tgtEl])
		{
			targetEl = document.forms[0].elements[tgtEl];
		}
	}
	var calTable = document.getElementById('calenderTable');
	var targetElement = document.getElementById(tgtEl);
	var targetElementWidth=targetElement.offsetWidth;

	var positions = [0,0];
	var positions = getParentOffset(document.getElementById(tgtEl), positions);	
	var calWidth=window.screen.availWidth*19/100;
	var tmp=positions[0]+calWidth+10;
	if(tmp >window.screen.availWidth){
		calTable.style.left = (positions[0]-calWidth+targetElementWidth)+ 'px' ;
	}else{
		calTable.style.left = (positions[0])+ 'px' ;
	}
	 
	calTable.style.top = (positions[1]+25)+ 'px' ;
	calTable.style.display='block';
	var matchDate = new RegExp('^([0-9]{2})-([0-9]{2})-([0-9]{4})$');
	var m = matchDate.exec(targetEl.value);
	if (m == null)
	{
		trs = createCalender(false, false, false);
		showCalenderBody(trs);
	}
	else
	{
		if (m[1].substr(0, 1) == 0)
			m[1] = m[1].substr(1, 1);
		if (m[2].substr(0, 1) == 0)
			m[2] = m[2].substr(1, 1);
		m[2] = m[2] - 1;
		trs = createCalender(m[3], m[2], m[1]);
		showCalenderBody(trs);
	}

	hideSelect(document.body, 1);
}

function showCalenderBody(trs)
{
	var calTBody = document.getElementById('calender');
	while (calTBody.childNodes[0])
	{
		calTBody.removeChild(calTBody.childNodes[0]);
	}
	for (var i in trs)
	{
		calTBody.appendChild(trs[i]);
	}
}
function setYears(sy, ey)
{
	 // current Date
	var curDate = new Date();
	var curYear = getRealYear(curDate);
	if (sy)
		startYear = curYear;
	if (ey)
		endYear = curYear;
	document.getElementById('selectYear').options.length = 0;
	var j = 0;
	for (y=ey; y>=sy; y--)
	{
		document.getElementById('selectYear')[j++] = new Option(y, y);
	}
}
function hideSelect(el, superTotal)
{
	if (superTotal >= 100)
	{
		return;
	}

	var totalChilds = el.childNodes.length;
	for (var c=0; c<totalChilds; c++)
	{
		var thisTag = el.childNodes[c];
		if (thisTag.tagName == 'SELECT')
		{
			if (thisTag.id != 'selectMonth' && thisTag.id != 'selectYear')
			{
				var calenderEl = document.getElementById('calenderTable');
				var positions = [0,0];
				var positions = getParentOffset(thisTag, positions);	// nieuw
				var thisLeft	= positions[0];
				var thisRight	= positions[0] + thisTag.offsetWidth;
				var thisTop	= positions[1];
				var thisBottom	= positions[1] + thisTag.offsetHeight;
				var calLeft	= calenderEl.offsetLeft;
				var calRight	= calenderEl.offsetLeft + calenderEl.offsetWidth;
				var calTop	= calenderEl.offsetTop;
				var calBottom	= calenderEl.offsetTop + calenderEl.offsetHeight;

				if (
					(
						/* check if it overlaps horizontally */
						(thisLeft >= calLeft && thisLeft <= calRight)
							||
						(thisRight <= calRight && thisRight >= calLeft)
							||
						(thisLeft <= calLeft && thisRight >= calRight)
					)
						&&
					(
						/* check if it overlaps vertically */
						(thisTop >= calTop && thisTop <= calBottom)
							||
						(thisBottom <= calBottom && thisBottom >= calTop)
							||
						(thisTop <= calTop && thisBottom >= calBottom)
					)
				)
				{
					hideSelectTags[hideSelectTags.length] = thisTag;
					thisTag.style.display = 'none';
				}
			}

		}
		else if(thisTag.childNodes.length > 0)
		{
			hideSelect(thisTag, (superTotal+1));
		}
	}
}
function closeCalender()
{
	for (var i=0; i<hideSelectTags.length; i++)
	{
		hideSelectTags[i].style.display = 'block';
	}
	hideSelectTags.length = 0;
	document.getElementById('calenderTable').style.display='none';
}
function highLiteDay(el)
{
	el.className = 'hlDay';
}
function deHighLiteDay(el)
{
	if (el.id == 'calenderToDay')
		el.className = 'toDay';
	else if (el.id == 'calenderChoosenDay')
		el.className = 'choosenDay';
	else
		el.className = 'normalDay';
}
function pickDate(year, month, day)
{
	month++;
	day	= day < 10 ? '0'+day : day;
	month	= month < 10 ? '0'+month : month;
	//Condition for Query Builder (date comparision)
	if(targetEl != null)
	{
		if(targetEl.id=="DFm" || targetEl.id=="DTo" || targetEl.id=="BFm" || targetEl.id=="BTo"||targetEl.id=="SFm" || targetEl.id=="STo" || targetEl.id=="FFm" || targetEl.id=="FTo")
		{
			if(targetEl.value!=day+"-"+month+"-"+year)
			{
				targetEl.value= day+'-'+month+'-'+year;
				compareDates(targetEl.id);
			}
		}
	}
	//Condition for Query Builder (date comparision)
	if (!targetEl)
	{
		alert('target for date is not set yet');
	}
	else
	{
		targetEl.value= day+'-'+month+'-'+year;
		closeCalender();
	}
}
function getParentOffset(el, positions)
{
	positions[0] += el.offsetLeft;
	positions[1] += el.offsetTop;
	if (el.offsetParent)
		positions = getParentOffset(el.offsetParent, positions);
	return positions;
}
;function prompt_confirm() {

	var bool = confirm("Are You sure you want to make update details");

	return bool;

}

function win_close() {
	
	self.close();

}
;function checkall(bool) {
	

	var elements = document.getElementsByName('days');

	if (elements && elements.length > 0) {

		

		for ( var i = 0; i < elements.length; i++) {
			var elem = document.getElementById(elements[i].id);
			elem.disabled = bool;
			if (bool == true) {
				elem.checked = false;
			}
		}
	}
}
function radioCheck(radioObj) {

	var elements = document.getElementsByName("typeDays");
	var elementsCheck = document.getElementsByName("days");
	if (elements && elements.length > 0) {

		
		var elem = document.getElementById(elements[0].id);
		if (elem.checked)

			checkall(true);

		else
			checkall(false);

	}

}
;/** To check configuration exists on changing the country drop down value
 * 
 */
function checkCountryConfig()
{
	var countryValue = document.getElementById("country").value;
	
	$.ajax({
		
		url : 'fetchDDConfigurationCountryData.action',				
		data : {"countryVal":countryValue},
		type : 'post',
		success : function(data) {
			var countryData = data.dDConfigData;
			
			if(countryData=="true")
			{
				alert("Detention & Demurrage Configuration Already Exists for the selected country");	
			}
			else
			{
				return false;
			}
		},
		error:function(xhr, ajaxOptions,thrownError){
			alert("Unable to reach server Reason:- "+xhr.status);
			alert("Error thrown:- "+thrownError);
		}
	});
}
 /**
  * Prompt the confirmation before creating the records 
  * 
  */
 function prompt_create_confirm(){
 	
	 var chargeTypeValue = document.getElementById("chargeType").value;
	 var status = true;
	 var countryValue = document.getElementById("country").value;
	 
	 if(countryValue=="-1")
	 {
		 alert("Please Select the country");
		 status = false;
		 return status;
	 }
	 if(chargeTypeValue=="DETENTION ONLY")
	 {
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
				&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention Only");
			status =  false;
			return status;
		 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
		 {
			 alert("Please select the option Include Start Event Date value for Detention Only");
			 status = false;
			 return status;
		 }
		 
		 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			 alert("Please select the option Exclude Shipper Owned Containers for Detention Only");
			 status = false;
			 return status; 
		 }
	 }
	 
	 if(chargeTypeValue=="DEMURRAGE ONLY")
	 {
		 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage Only");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Demurrage Only");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Demurrage Only");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="COMBINED DETENTION")
	 {
		 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false
					&& document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Combined Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Combined Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Combined Detention");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="DETENTION AND DEMURRAGE")
	 {
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false
					&& document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention and Demurrage");
				status =  false;
				return status;
			 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Detention");
				 status = false;
				 return status; 
			 }
			
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
						&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage");
					status =  false;
					return status;
				 }
				 
				 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
				 {
					 alert("Please select the option Include Start Event Date value for Demurrage");
					 status = false;
					 return status;
				 }
				 
				 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					 alert("Please select the option Exclude Shipper Owned Containers for Demurrage");
					 status = false;
					 return status; 
				 }
	 }
	 
	 return status;
 		
 }
 
 
function showDetDemDivs()
{
	
	var chargeTypeVal = document.getElementById("chargeType").value;
	
	if(chargeTypeVal=="DETENTION ONLY")
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div3").style.display='none';
		
		document.Frm.detStartEvenDate[0].checked=false;
		document.Frm.detStartEvenDate[1].checked=false;
		document.Frm.detExShip[0].checked=false;
	    document.Frm.detExShip[1].checked=false;
	    document.getElementById("detEndEventDate").value='Gate-In EXP FULL';
	    document.getElementById("detServiceMode").value='None';
	}
	else if(chargeTypeVal=="DEMURRAGE ONLY")
	{
		document.getElementById("div2").style.display='block';
		document.getElementById("div1").style.display='none';
		document.getElementById("div3").style.display='none';
		
		document.Frm.demStartEvenDate[0].checked=false;
		document.Frm.demStartEvenDate[1].checked=false;
	    document.Frm.demExShip[0].checked=false;
	    document.Frm.demExShip[1].checked=false;
		
	    document.getElementById("demEndEventDate").value='RKEM LOAD DATE';
	    document.getElementById("demServiceMode").value='None';
	}
	else if(chargeTypeVal=="COMBINED DETENTION")
	{
		document.getElementById("div3").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div1").style.display='none';
		
		document.Frm.comDetStartEventDate[0].checked=false;
		document.Frm.comDetStartEventDate[1].checked=false;
	    document.Frm.comDetExShip[0].checked=false;
	    document.Frm.comDetExShip[1].checked=false;
	
	    document.getElementById("comDetEndEventDate").value='RKEM LOAD DATE';
	    document.getElementById("comDetServiceMode").value='None';
	    
	}
	else
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='block';
		document.getElementById("div3").style.display='none';
		
		document.Frm.detStartEvenDate[0].checked=false;
		document.Frm.detStartEvenDate[1].checked=false;
		document.Frm.detExShip[0].checked=false;
	    document.Frm.detExShip[1].checked=false;
	    
	    document.Frm.demStartEvenDate[0].checked=false;
		document.Frm.demStartEvenDate[1].checked=false;
	    document.Frm.demExShip[0].checked=false;
	    document.Frm.demExShip[1].checked=false;
		
	    document.getElementById("detEndEventDate").value='Gate-In EXP FULL';
	    document.getElementById("demEndEventDate").value='RKEM LOAD DATE';
	    document.getElementById("detServiceMode").value='None';
	    document.getElementById("demServiceMode").value='None';
	}
}

/*function uncheckedDetStartEvent(){
	
	var detStartEvenDateY = document.Frm.detStartEvenDate[0].checked;
	var detStartEvenDateN = document.Frm.detStartEvenDate[1].checked;
	
		if(detStartEvenDateY==true){
			document.Frm.detStartEvenDate[0].checked = false;
		}
		if(detStartEvenDateN==true){
			document.Frm.detStartEvenDate[1].checked = false;
		}
}*/

/**
 * Prompt the confirmation before updating the records 
 * 
 */
function prompt_update_confirm(){
	
	var chargeTypeValue = document.getElementById("chargeType").value;
	 var status = true;
	 
	 if(chargeTypeValue=="DETENTION ONLY")
	 {
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
				&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention Only");
			status =  false;
			return status;
		 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
		 {
			 alert("Please select the option Include Start Event Date value for Detention Only");
			 status = false;
			 return status;
		 }
		 
		 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
		 {
			 alert("Please select the option Exclude Shipper Owned Containers for Detention Only");
			 status = false;
			 return status; 
		 }
	 }
	 
	 if(chargeTypeValue=="DEMURRAGE ONLY")
	 {
		 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage Only");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Demurrage Only");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Demurrage Only");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="COMBINED DETENTION")
	 {
		 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false
					&& document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Combined Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.comDetStartEventDate[0].checked==false && document.Frm.comDetStartEventDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Combined Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.comDetExShip[0].checked==false && document.Frm.comDetExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Combined Detention");
				 status = false;
				 return status; 
			 }
	 }
	 
	 if(chargeTypeValue=="DETENTION AND DEMURRAGE")
	 {
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false
					&& document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
					&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention and Demurrage");
				status =  false;
				return status;
			 }
		 
		 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false
					&& document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Detention");
				status =  false;
				return status;
			 }
			 
			 if(document.Frm.detStartEvenDate[0].checked==false && document.Frm.detStartEvenDate[1].checked==false)
			 {
				 alert("Please select the option Include Start Event Date value for Detention");
				 status = false;
				 return status;
			 }
			 
			 if(document.Frm.detExShip[0].checked==false && document.Frm.detExShip[1].checked==false)
			 {
				 alert("Please select the option Exclude Shipper Owned Containers for Detention");
				 status = false;
				 return status; 
			 }
			
			 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false
						&& document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					alert("Please select the option Include Start Event Date and Exclude Shipper Owned Containers for Demurrage");
					status =  false;
					return status;
				 }
				 
				 if(document.Frm.demStartEvenDate[0].checked==false && document.Frm.demStartEvenDate[1].checked==false)
				 {
					 alert("Please select the option Include Start Event Date value for Demurrage");
					 status = false;
					 return status;
				 }
				 
				 if(document.Frm.demExShip[0].checked==false && document.Frm.demExShip[1].checked==false)
				 {
					 alert("Please select the option Exclude Shipper Owned Containers for Demurrage");
					 status = false;
					 return status; 
				 }
	 }
	 
	 //return status;
	   if(status==true)
	   {
		   var bool = confirm("Are You sure to make update details");
		   return bool;
	   }
	   else
		   return false;
		
}

function loadPortList(){
		document.myForm.action = 'populateLoadPort';
		document.myForm.submit();
}


/**
 * Close the child window and refresh the parent window as well
 * 
 */
function win_close(){
	window.opener.frmMain.submit();
	self.close();
}

/**
 * Open the new action and passed the parameter as request to it.
 * @param url
 * @param countryCode
 * @param chargeType
 * @return
 */
function doEdit(url,countryCode,chargeType){
	
	w = window.screen.availWidth* 95/ 100;
    h = window.screen.availHeight * 77 / 100;
    var t=(window.screen.height-window.screen.availHeight);
	url = url + "?countryCode=" + countryCode + "&chargeType=" + chargeType;
	mywindow = window.open(url,"mywindow","toolbar=no,directories=no,location=no, status=no,menubar=no,width="+w+",height="+h);
	mywindow.moveTo(0,t/3);
}


/**
 * Populate the screen with the value from database
 * 
 */
function populate_update(){
    
	var chargeTypeValue = document.getElementById("selectedChargeTypeValue").value;

	if(chargeTypeValue=="DETENTION ONLY")
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div3").style.display='none';
	}
	
	 if(chargeTypeValue=="DEMURRAGE ONLY")
	{
		document.getElementById("div2").style.display='block';
		document.getElementById("div1").style.display='none';
		document.getElementById("div3").style.display='none';
	}
		
	if(chargeTypeValue=="COMBINED DETENTION")
	{
		document.getElementById("div3").style.display='block';
		document.getElementById("div2").style.display='none';
		document.getElementById("div1").style.display='none';
	}
	
	if(chargeTypeValue=="DETENTION AND DEMURRAGE")
	{
		document.getElementById("div1").style.display='block';
		document.getElementById("div2").style.display='block';
		document.getElementById("div3").style.display='none';
	}
}



;function doNavigate(pstrWhere, pintTot) {
	var strTmp;
	var intPg;
	strTmp = document.frmMain.txtCurr.value;
	intPg = parseInt(strTmp);
	if (isNaN(intPg)) {
		intPg = 1;
	}
	if ((pstrWhere == "F" || pstrWhere == "P") && intPg == 1) {
		alert("You are already viewing first page!");
		return;
	} else {
		if ((pstrWhere == "N" || pstrWhere == "L") && intPg == pintTot) {
			alert("You are already viewing last page!");
			return;
		}
	}
	if (pstrWhere == "F") {
		intPg = 1;
	} else {
		if (pstrWhere == "P") {
			intPg = intPg - 1;
		} else {
			if (pstrWhere == "N") {
				intPg = intPg + 1;
			} else {
				if (pstrWhere == "L") {
					intPg = pintTot;
				}
			}
		}
	}
	if (intPg < 1) {
		intPg = 1;
	}
	if (intPg > pintTot) {
		intPg = pintTot;
	}
	//check applied specifically for job admin screen to make pagination work after being returned from Re-calculation screen
	if(document.getElementById("editJobBookingStatus")!=null && document.getElementById("editJobDemDetCalcStatus")!=null)
	{
		document.frmMain.editJobBookingStatus.value="";
		document.frmMain.editJobDemDetCalcStatus.value="";
		document.frmMain.action="VesselJobAdministration";
	}
	document.frmMain.txtCurr.value = intPg;
	document.frmMain.submit();
}

function applyFilter(){
	document.getElementById('txtCurr').value='1';
	document.frmMain.editJobBookingStatus.value="";
	document.frmMain.editJobDemDetCalcStatus.value="";
	document.frmMain.action="VesselJobAdministration";
	document.frmMain.submit();
}

function onFilterChange(){
	document.getElementById('txtCurr').value='1';
	document.frmMain.submit();
}

function goBack(){
	document.frmBack.userIdFilter.value = document.frmMain.userIdFilter.value;
	document.frmBack.vesselVoyageFilter.value = document.frmMain.vesselVoyageFilter.value;
	document.frmBack.loadPortFilter.value = document.frmMain.loadPortFilter.value;
	document.frmBack.gcssStatusFilter.value = document.frmMain.gcssStatusFilter.value;
	document.frmBack.dndStatusFilter.value = document.frmMain.dndStatusFilter.value;
	document.frmBack.startDateFilter.value = document.frmMain.startDateFilter.value;
	document.frmBack.action="VesselJobAdministration";
	document.frmBack.submit();
}

function doSort(pstrFld, pstrOrd) {

	document.frmMain.txtSortCol.value = pstrFld;
	document.frmMain.txtSortAsc.value = pstrOrd;
	document.frmMain.submit();
}
function viewLog(JobId, UserId, JobType) {
	document.frmViewBookingLog.jobId.value = JobId;
	document.frmViewBookingLog.userId.value = UserId;
	document.frmViewBookingLog.jobType.value = JobType;
	document.frmViewBookingLog.submit();
}
function viewGeoLog(batchId, extractTime) {
	document.frmViewGeoMessageLog.batchId.value = batchId;
	document.frmViewGeoMessageLog.extractTime.value = extractTime;
	document.frmViewGeoMessageLog.submit();
}
function updateIgnoreBatch(batchId,ignoreBatch) {
	if(ignoreBatch=="N"){
		var r=confirm("Confirm batch sequence to be ignored for Batch Id:- "+batchId); 
		if (r==true) 
		{ 
			document.frmUpdateBatchSeq.batchId.value = batchId;
			document.frmUpdateBatchSeq.numBatchFilter.value=document.frmMain.numBatchFilter.value;
			document.frmUpdateBatchSeq.numDaysFilter.value=document.frmMain.numDaysFilter.value;
			document.frmUpdateBatchSeq.processStateListFilter.value=document.frmMain.processStateListFilter.value;
			document.frmUpdateBatchSeq.submit();	
		}
	} else{
		alert('Batch Id:- '+batchId+' already ignored.');
	}
}
	// function for persisting the state of view geo monitor screen while returning from viewgeo log screen////
function returntoGeoMonitor()
{
		document.formBack.numDaysFilter.value = document.frmMain.numDaysFilter.value;
		document.formBack.processStateListFilter.value = document.frmMain.processStateListFilter.value;
		document.formBack.numBatchFilter.value = document.frmMain.numBatchFilter.value;
		document.formBack.textCurr.value = document.frmMain.textCurr.value;
		document.formBack.submit();
		
}
function showDivResponseMessage() {
	value = document.getElementById('messageButton').value;
	if (value == "Hide Response Message") {
		document.getElementById('responseMessageDiv').style.display = 'none';
		document.getElementById('messageButton').value = "View Response Message";
	} else {
		document.getElementById('responseText').style.width=window.screen.availWidth*94/100 + "px";
		document.getElementById('responseMessageDiv').style.display = 'block';
		document.getElementById('messageButton').value = "Hide Response Message";
		
	}
}

function doEdit(jobId,bookingStatus,demDetCalcStatus,dueBillReady,restartStatus){
	document.frmMain.editJobId.value=jobId;
	document.frmMain.editJobBookingStatus.value=bookingStatus;
	document.frmMain.editJobDemDetCalcStatus.value=demDetCalcStatus;
	document.frmMain.editJobDueBillReady.value=dueBillReady;
	document.frmMain.editJobRestartStatus.value=restartStatus;
	document.frmMain.submit();
}

function openBill(container,bookingNumber,currency,loadPortCode,vesselCode,voyageNumber,imageUrl)
{
	//RQ-9617
	//Author: TCS
	//Dated: 11th May,2011
	//In the above function param <imageUrl> is a new addition.
	//Description: Changes with respect to Action Button on Query Builder Report Screen
	//Different conditional check applied for different action images,
	//and therefore redirected to further screen accordingly.
	// Added change to remove scroll bar from billing screen - RQ10255 - TCS
	var w = 1100, h = 550, t=0; // default sizes
	var t=(window.screen.height-window.screen.availHeight);
    if (window.screen) {
        w = window.screen.availWidth* 98/ 100;
        h = window.screen.availHeight * 97 / 100;
       
    }
    
	if(imageUrl!="images/Act3.gif" && imageUrl!="images/Act4.gif")
	{
		url="populateBillingDetail.action?CON="+container+"&BON="+bookingNumber+"&CUR="+currency+"&LOP="+loadPortCode+"&VOC="+vesselCode+"&VON="+voyageNumber;
	BillWindow=window.open(url,"mywindow","toolbar=no,scrollbars=yes,directories=no,location=no ,status=no,menubar=no,width="+w+",height="+h);
	BillWindow.moveTo(0,t/3);
	}
	
}

function exportVesselDetail(){
	document.exportVesselDetails.txtSortCol.value=document.frmMain.txtSortCol.value;
	document.exportVesselDetails.txtSortAsc.value=document.frmMain.txtSortAsc.value;
	document.exportVesselDetails.billingStatusFilter.value=document.frmMain.billingStatusFilter.value;
	document.exportVesselDetails.contrsizeFilter.value=document.frmMain.contrsizeFilter.value;
	document.exportVesselDetails.officeFilter.value=document.frmMain.officeFilter.value;
	document.exportVesselDetails.teamFilter.value=document.frmMain.teamFilter.value;
	document.exportVesselDetails.recmodeFilter.value=document.frmMain.recmodeFilter.value;
	document.exportVesselDetails.tariffFilter.value=document.frmMain.tariffFilter.value;
	document.exportVesselDetails.contractualcustomerFilter.value=document.frmMain.contractualcustomerFilter.value;
	document.exportVesselDetails.dueTypeFilter.value=document.frmMain.dueTypeFilter.value;
	document.exportVesselDetails.submit();
}
// function for persisting the state of vessel summary screen when returning from vessel deatil screen////
function returntovesselsummary(){
	document.returntovesselsum.completionStatusFilter.value = document.frmMain.completionStatusFilter.value;
	document.returntovesselsum.loadPortFilter.value = document.frmMain.loadPortFilter.value;
	document.returntovesselsum.vslVygFltr.value = document.frmMain.vslVygFltr.value;
	document.returntovesselsum.bookingOfficeFilter.value = document.frmMain.bookingOfficeFilter.value;
	document.returntovesselsum.bookingTeamFilter.value = document.frmMain.bookingTeamFilter.value;
	document.returntovesselsum.departureStatusFilter.value = document.frmMain.departureStatusFilter.value;
	document.returntovesselsum.textCurr.value = document.frmMain.textCurr.value;
	document.returntovesselsum.submit();
}
function callExportQueryBuilderDetails()
{
	document.exportQueryBuilderDetailsForm.action="exportQueryBuilderDetails";
	document.exportQueryBuilderDetailsForm.submit();
}

function returnToQueryBuilder()
{
	document.exportQueryBuilderDetailsForm.action="populateQueryBuilder";
	document.exportQueryBuilderDetailsForm.submit();
}

function disableControls(){ 
	document.getElementById('revisedLoadDate').childNodes[1].disable='true'; 
	document.getElementById('revisedLoadDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('revisedLoadDate').childNodes[1].disable=''; 
	} 

function disableKeys(){ 
    var keyCode=(document.all)?event.keyCode:e.which; 
    if(keyCode==9){ 
            window.event.returnValue=true; //for allowing TAB 
    }else{ 
            window.event.returnValue=false; 
    } 
} 

function disableControlsAddNewDet(){ 
	document.getElementById('detEndEventDate').childNodes[1].disable='true'; 
	document.getElementById('detEndEventDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('detEndEventDate').childNodes[1].disable=''; 
	}

function disableControlsAddNewDem(){ 
	document.getElementById('endDemEventDate').childNodes[1].disable='true'; 
	document.getElementById('endDemEventDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('endDemEventDate').childNodes[1].disable=''; 
	}

function disableControlsRecalcDet(){ 
	document.getElementById('revDetEndEvntDate').childNodes[1].disable='true'; 
	document.getElementById('revDetEndEvntDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('revDetEndEvntDate').childNodes[1].disable=''; 
	}

function disableControlsRecalcDem(){ 
	document.getElementById('revDemEndEvntDate').childNodes[1].disable='true'; 
	document.getElementById('revDemEndEvntDate').childNodes[1].readOnly='readonly'; 
	document.getElementById('revDemEndEvntDate').childNodes[1].disable=''; 
	}

function resetForm()
{
	document.addNewVesselForm.action="AddJob!clear.action";
	document.addNewVesselForm.submit();
}

function  openBillDetails() {
	//alert('fooo');
	var w = 1100, h = 550, t=0; // default sizes
	var t=(window.screen.height-window.screen.availHeight);
    if (window.screen) {
        w = window.screen.availWidth* 98/ 100;
        h = window.screen.availHeight * 97 / 100;
       
    }
    window.open('/bill-details',"mywindow","toolbar=no,scrollbars=yes,directories=no,location=no ,status=no,menubar=no,width="+w+",height="+h);
  }

;/*
Created By: Chris Campbell
Website: http://particletree.com
Date: 2/1/2006

Inspired by the lightbox implementation found at http://www.huddletogether.com/projects/lightbox/
*/

/*-------------------------------GLOBAL VARIABLES------------------------------------*/

var detect = navigator.userAgent.toLowerCase();
var OS,browser,version,total,thestring;

/*-----------------------------------------------------------------------------------------------*/

//Browser detect script origionally created by Peter Paul Koch at http://www.quirksmode.org/

function getBrowserInfo() {
	if (checkIt('konqueror')) {
		browser = "Konqueror";
		OS = "Linux";
	}
	else if (checkIt('safari')) browser 	= "Safari"
	else if (checkIt('omniweb')) browser 	= "OmniWeb"
	else if (checkIt('opera')) browser 		= "Opera"
	else if (checkIt('webtv')) browser 		= "WebTV";
	else if (checkIt('icab')) browser 		= "iCab"
	else if (checkIt('msie')) browser 		= "Internet Explorer"
	else if (!checkIt('compatible')) {
		browser = "Netscape Navigator"
		version = detect.charAt(8);
	}
	else browser = "An unknown browser";

	if (!version) version = detect.charAt(place + thestring.length);

	if (!OS) {
		if (checkIt('linux')) OS 		= "Linux";
		else if (checkIt('x11')) OS 	= "Unix";
		else if (checkIt('mac')) OS 	= "Mac"
		else if (checkIt('win')) OS 	= "Windows"
		else OS 								= "an unknown operating system";
	}
}

function checkIt(string) {
	place = detect.indexOf(string) + 1;
	thestring = string;
	return place;
}

/*-----------------------------------------------------------------------------------------------*/

Event.observe(window, 'load', initialize, false);
Event.observe(window, 'load', getBrowserInfo, false);
Event.observe(window, 'unload', Event.unloadCache, false);

var lightbox = Class.create();

lightbox.prototype = {

	yPos : 0,
	xPos : 0,

	initialize: function(ctrl) {
		this.content = ctrl.href;
		Event.observe(ctrl, 'click', this.activate.bindAsEventListener(this), false);
		ctrl.onclick = function(){return false;};
	},
	
	// Turn everything on - mainly the IE fixes
	activate: function(){
		if (browser == 'Internet Explorer'){
			this.getScroll();
			this.prepareIE('100%', 'hidden');
			this.setScroll(0,0);
			this.hideSelects('hidden');
		}
		this.displayLightbox("block");
	},
	
	// Ie requires height to 100% and overflow hidden or else you can scroll down past the lightbox
	prepareIE: function(height, overflow){
		bod = document.getElementsByTagName('body')[0];
		bod.style.height = height;
		bod.style.overflow = overflow;
  
		htm = document.getElementsByTagName('html')[0];
		htm.style.height = height;
		htm.style.overflow = overflow; 
	},
	
	// In IE, select elements hover on top of the lightbox
	hideSelects: function(visibility){
		selects = document.getElementsByTagName('select');
		for(i = 0; i < selects.length; i++) {
			selects[i].style.visibility = visibility;
		}
	},
	
	// Taken from lightbox implementation found at http://www.huddletogether.com/projects/lightbox/
	getScroll: function(){
		if (self.pageYOffset) {
			this.yPos = self.pageYOffset;
		} else if (document.documentElement && document.documentElement.scrollTop){
			this.yPos = document.documentElement.scrollTop; 
		} else if (document.body) {
			this.yPos = document.body.scrollTop;
		}
	},
	
	setScroll: function(x, y){
		window.scrollTo(x, y); 
	},
	
	displayLightbox: function(display){
		$('overlay').style.display = display;
		$('lightbox').style.display = display;
		if(display != 'none') this.loadInfo();
	},
	
	// Begin Ajax request based off of the href of the clicked linked
	loadInfo: function() {
		var myAjax = new Ajax.Request(
        this.content,
        {method: 'post', parameters: "", onComplete: this.processInfo.bindAsEventListener(this)}
		);
		
	},
	
	// Display Ajax response
	processInfo: function(response){
		info = "<div id='lbContent'>" + response.responseText + "</div>";
		new Insertion.Before($('lbLoadMessage'), info)
		$('lightbox').className = "done";	
		this.actions();			
	},
	
	// Search through new links within the lightbox, and attach click event
	actions: function(){
		lbActions = document.getElementsByClassName('lbAction');

		for(i = 0; i < lbActions.length; i++) {
			Event.observe(lbActions[i], 'click', this[lbActions[i].rel].bindAsEventListener(this), false);
			lbActions[i].onclick = function(){return false;};
		}

	},
	
	// Example of creating your own functionality once lightbox is initiated
	insert: function(e){
	   link = Event.element(e).parentNode;
	   Element.remove($('lbContent'));
	 
	   var myAjax = new Ajax.Request(
			  link.href,
			  {method: 'post', parameters: "", onComplete: this.processInfo.bindAsEventListener(this)}
	   );
	 
	},
	
	// Example of creating your own functionality once lightbox is initiated
	deactivate: function(){
		Element.remove($('lbContent'));
		
		if (browser == "Internet Explorer"){
			this.setScroll(0,this.yPos);
			this.prepareIE("auto", "auto");
			this.hideSelects("visible");
		}
		
		this.displayLightbox("none");
	}
}

/*-----------------------------------------------------------------------------------------------*/

// Onload, make all links that need to trigger a lightbox active
function initialize(){
	addLightboxMarkup();
	lbox = document.getElementsByClassName('lbOn');
	for(i = 0; i < lbox.length; i++) {
		valid = new lightbox(lbox[i]);
	}
}

// Add in markup necessary to make this work. Basically two divs:
// Overlay holds the shadow
// Lightbox is the centered square that the content is put into.
function addLightboxMarkup() {
	bod 				= document.getElementsByTagName('body')[0];
	overlay 			= document.createElement('div');
	overlay.id		= 'overlay';
	lb					= document.createElement('div');
	lb.id				= 'lightbox';
	lb.className 	= 'loading';
	lb.innerHTML	= '<div id="lbLoadMessage">' +
						  '<img src="./images/loading.gif" alt="Loding..." />' +
						  '</div>';
	bod.appendChild(overlay);
	bod.appendChild(lb);
}
;
//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;
menus=new Array();
_d=document;

function addmenu(){menunum++;menus[menunum]=menu;}

function dumpmenus(){mt="<script language=javascript>";
for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.


////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
        effect = "Fade(duration=0.2);Alpha(style=0,opacity=88);Shadow(color='#777777', Direction=135, Strength=5)"
}
else
{
        effect = "Shadow(color='#777777', Direction=135, Strength=5)" // Stop IE5.5 bug when using more than one filter
}


timegap=500                     // The time delay for menus to remain visible
followspeed=3                   // Follow Scrolling speed
followrate=40                   // Follow Scrolling Rate
suboffset_top=0;               // Sub menu offset Top position
suboffset_left=0;              // Sub menu offset Left position

style1=[          // style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"#FFFFFF",                   // Mouse Off Font Color
"#4CBCD0",                   // Mouse Off Background Color
"#000066",                   // Mouse On Font Color
"#4CBCD0",                   // Mouse On Background Color
"#4CBCD0",                   // Menu Border Color
12,                          // Font Size in pixels
"normal",                    // Font Style (italic or normal)
"bold",                      // Font Weight (bold or normal)
"Verdana",                // Font Name
4,                           // Menu Item Padding
,                       // Sub Menu Image (Leave this blank if not needed)
,                            // 3D Border & Separator bar
"66ffff",                    // 3D High Color
"009999",                    // 3D Low Color
,                          // Current Page Item Font Color (leave this blank to disable)
,                       // Current Page Item Background Color (leave this blank to disable)
,            // Top Bar image (Leave this blank to disable)
"ffffff",                 // Menu Header Font Color (Leave blank if headers are not needed)
"000099",            // Menu Header Background Color (Leave blank if headers are not needed)
"navy",                        // Menu Item Separator Color
]



addmenu(menu=[       // This is the array that contains your menu properties and details
"mainmenu",          // Menu Name - This is needed in order for the menu to be called
84,                  // Menu Top - The Top position of the menu in pixels
24,                  // Menu Left - The Left position of the menu in pixels
240,                 // Menu Width - Menus width in pixels
1,                   // Menu Border Width
,        // Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,        // Properties Array - this is set higher up, as above
1,            // Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",      // Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,      // Filter - Text variable for setting transitional effects on menu activation - see above for more info
0,            // Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1,          // Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,          // Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,   // Position of TOP sub image left:center:right
,  // Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
, // Right To Left - Used in Hebrew for example. (1=on/0=off)
,   // Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,   // ID of the div you want to hide on MouseOver (useful for hiding form elements)
,            // Reserved for future use
,            // Reserved for future use
,            // Reserved for future use


,"&nbsp;&nbsp;&nbsp;Vessels","show-menu=vessels",,"Vessels",1
,"Tariff","show-menu=tariff",,"Opens the tariff",1
,"Tables","show-menu=tables",,"System tables",1
])
        addmenu(menu=["vessels",
          ,,250,1,,style1,0,"left",effect,0,,,,,,,,,,,
                ,"Show vessel summary", "VslSummary",,,0
                ,"Show Booking Info", "BookingInfoImport",,,0
                   // Author - TCS support TEAM     
		//Purpose - To Hide Cross-country summary Menu
		//Date - 11/09/2009
		//PR ID -(PBI000000001819)
		//INC ID: INC000000862657
		//Release Title - Release_EDDI_PBI000000001815+PBI000000001818+PBI000000001819 
		//Commented code starts here
               // ,"Cross-country summary", "VslSummary.asp?Mode=X",,,0
               //Commented code ends here  
             
                ,"Query Builder", "QueryBuilder",,,0
        ])        
        addmenu(menu=["tariff",
          ,,250,1,"",style1,,"left",effect,,,,,,,,,,,,
                ,"Demurrage tariff", "Tariff?Mode=DMR",,,0
                ,"Detention tariff", "Tariff?Mode=DTS",,,0
        ])
        addmenu(menu=["tables",
          ,,250,1,"",style1,,"left",effect,,,,,,,,,,,,
                ,"User access table", "Tables?Mode=Users",,,0
                ,"Country table","show-menu=tab",,"a",1
        ])
          addmenu(menu=["tab",
          ,,250,1,"",style1,,"left",effect,,,,,,,,,,,,
                ,"Demurrage tariff", "Tariff?Mode=DMR",,,0
                ,"Detention tariff", "Tariff?Mode=DTS",,,0 
                 ])       
dumpmenus()

;Mtimer=setTimeout("sis()",9999);
_d=document;
smc=-1;
MLoaded=0;

ns4=(_d.layers)?true:false

ns6=(navigator.userAgent.indexOf("Gecko")!=-1)?true:false

mac=(navigator.appVersion.indexOf("Mac")!=-1)?true:false
mac45=(navigator.appVersion.indexOf("MSIE 4.5")!=-1)?true:false

if(ns6||ns4)mac=false
opera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false
ns61=(parseInt(navigator.productSub)>=20010726)?true:false
ie4=(!_d.getElementById&&_d.all)?true:false;
konq=(navigator.userAgent.indexOf("Konqueror")!=-1)?true:false
mp=(ns6)?"pointer":"hand";oatop=0;aleft=0;oaleft=1;osy=0;oww=-1;owh=-1;frs=0;fre=0;nsmatch=0;

var a,am,oa,im,om,flta;hlarr=new Array();
hlcnt=0;
hll=0;

Mname=new Array();
parr=new Array();

gmi=20;ns6hif=0;timo=0;el=0;nshl=0;var omv=0;df=1;im=0;ofrac=0;omnu=0;ac=22;m=1;sy=1;ShM=0;ww=0;wh=0;var imar=new Array();mr=",";
while(eval("window.menu"+m)){mr+="menu"+m+",";tmenu=eval("menu"+m);Mname[m]=tmenu[0].toLowerCase();m++}
mr=mr+" ";mr=mr.split("\,");menus=mr.length-1;bgt="";if(!opera)bgt="Color";var cgm=0;
function gmobj(mtxt){if(_d.getElementById){m=_d.getElementById(mtxt)}else if(_d.all){m=_d.all[mtxt]}else if(_d.layers){m=_d.layers[mtxt]}return m;}
function gmstyle(mtxt){m=gmobj(mtxt);if(!ns4){if(m)m=m.style;}return m;}
function spos(gm,t_,l_,h_,w_){px="px";if(ns4){px="";gms=gm;if(w_!=null)gms.clip.width=w_;if(h_!=null)gms.clip.height=h_;}else if(opera){px="";gms=gm.style;if(w_!=null)gms.pixelWidth=w_;if(h_!=null)gms.pixelHeight=h_}else{gms=gm.style;if(w_!=null)gms.width=w_+px;if(h_!=null)gms.height=h_+px;}if(t_!=null)gms.top=t_+px;if(l_!=null)gms.left=l_+px}
function gpos(gm){if(ns4){t_=gm.top;l_=gm.left;h_=gm.clip.height;w_=gm.clip.width;}else if(opera){t_=gm.style.pixelTop;l_=gm.style.pixelLeft;h_=gm.style.pixelHeight;w_=gm.style.pixelWidth;}else if(ns6){t_=gm.offsetTop;l_=gm.offsetLeft;h_=gm.offsetHeight;w_=gm.offsetWidth}else{if(mac){topM=gm.offsetParent.topMargin;if(!topM)topM=0;leftM=gm.offsetParent.leftMargin;if(!leftM)leftM=0;t_=parseInt(topM)+gm.offsetTop;l_=parseInt(leftM)+gm.offsetLeft;}else{t_=gm.offsetTop;l_=gm.offsetLeft;}h_=gm.offsetHeight;w_=gm.offsetWidth;}if(konq){w_=parseInt(gm.style.width);h_=parseInt(gm.style.height);}var gpa=new Array();gpa[0]=t_;gpa[1]=l_;gpa[2]=h_;gpa[3]=w_;return(gpa)}
function getMouseXY(e){if(ns4||ns6){MouseX=e.pageX;MouseY=e.pageY;}else{MouseX=event.clientX;MouseY=event.clientY}if(!opera&&_d.all){MouseX=MouseX+_d.body.scrollLeft;MouseY=MouseY+_d.body.scrollTop;if(_d.compatMode=="CSS1Compat")MouseY=MouseY+sy}return true}
function parseLink(txt,what){txt=txt+";";lt="";if(what=="link"){if(txt.indexOf("&quot;")>0){lt=txt}else{sp=txt.indexOf(" ");lt=txt.substr(0,sp);}}else{sp=txt.indexOf(what)+what.length+1;if(sp>what.length+1){lt=txt.substr(sp,999);lt=lt.substr(0,lt.indexOf(";"))}}return lt}
function cHexColor(_c){if(_c.length==6){_c=_c.toUpperCase();x=0;while(x<6){hsh="#";if(_c.charCodeAt(x)>70){hsh="";x=6}x++}_c=hsh+_c}return _c}
function stch(ms){window.status=ms;return true}
function SDiv(nm,sh){if(ns4&&nm.indexOf(".")>0)tD=eval(nm); else tD=gmstyle(nm);if(tD)if(sh)tD.visibility="visible";else tD.visibility="hidden"}
function close_el(){for(xa=hlarr.length-1;xa>=0;xa--){ti=hlarr[xa].split("_");tmenu=eval(ti[0]);if(ns4){shl(ti[0],ti[1],'hide');}else{arg=gmobj("el"+ti[1]);arg.style.backgroundColor=ti[2];if(opera)arg.style.background=ti[2];arg.style.color=""+ti[3];}if(ti[0]==hll){if(ns4)shl(ti[0],hel,'show');return}}hlcnt=0;hlarr=new Array()}
function closeallmenus(){ShM=0;om="";hll="";close_el();if(ns4){omv.visibility="hide"}for(a=1;a<menus;a++){menu=eval("menu"+a);if(menu[17]&&MLoaded){SDiv(menu[17],1)}if (menu[7]!=1){SDiv("menu"+a,0)}else{am=""}}}
function rep_img(){if(timo){timo.src=o_img};}
function popdn(){arg=popdn.arguments;if(arg[0]){if(arg[3].substr(0,5)!="show-"){if(ns4){shl(arg[2],arg[1],"hide")}else{arg[0].style.backgroundColor=arg[4];if(opera)arg[0].style.background=arg[4];arg[0].style.color=arg[5]}}else{if(ns4)omv=0;hlarr[hlcnt]=arg[2]+"_"+arg[1]+"_"+arg[4]+"_"+arg[5];hlcnt++;}menu=eval(arg[2]);if(!menu[12]){Mtimer=setTimeout("closeallmenus()",timegap);}}else{Mtimer=setTimeout("closeallmenus()",timegap);}}
function dc(){if(nshl.indexOf("show-menu=")>-1)return;tr=ltarg.split("=");if(tr[1])parent.frames[tr[1]].location.href=nshl;else location.href=nshl;}
function getMenuByName(mn){mn=mn.toLowerCase();for(a=1;a<menus;a++){if(mn==Mname[a])mn=a}return mn;}
function getMenuItem(mn,item){for(a=1;a<mn;a++){menu=eval("menu"+a);item=item+((menu.length-ac)/5)}item--;return item}
function sis(){for(a=1;a<imar.length;a++){tim=imar[a].split("_");if(tim[4]){tim[3]=tim[3]+"_"+tim[4]}menu=eval(window.tim[3]);if(ns4){im=_d.layers[tim[3]].document.layers.eval("el"+tim[2]);imp=gpos(im);eln="";for(x=0;x<2;x++){imo=_d.layers[tim[3]].document.layers.eval(eln+"el"+tim[2]).document.layers[imar[a]];imop=gpos(imo);imL=imp[3]-(imop[3]);imT=(imp[2]/2)-(imop[2]/2);if(menu[13]=="left")imL=1;if(menu[13]=="center")imL=(imp[3]/2);eln="m";spos(imo,imT,imL,null,null);}}else{imo=gmobj(imar[a]);imop=gpos(imo);im=gmobj("el"+tim[2]);imp=gpos(im);if(menu[11]){imco=gpos(gmobj("hel"+tim[2]));imc=imco[1];}else {imc=0}imT=imp[0]+(imp[2]/2)-(imop[2]/2);imL=imc+imp[3]-(imop[3]);if(menu[13]=="left")imL=imc;if(menu[13]=="center")imL=imc+(imp[3]/2);if(ns6&&!ns61){nsC=gpos(gmobj(tim[3]));imT=imT-nsC[0];imL=imL-nsC[1]}spos(imo,imT,imL,null,null);}}}
function fixb(mnu){menu=eval(mnu);ic=(menu.length-ac)/5;menu[21][2]=1;m42=menu[4]*2;mn=gmobj(mnu);if(ns4){if(menu[14]>-1){spos(gmobj("menuback"+mnu),null,null,mn.clip.height+(menu[14]*2),null)}if(menu[11]){mn.clip.width=mn.clip.width+menu[4]}return}mp=gpos(mn);el=menu[21][1];if(ns4){ml=_d.layers[mnu].document.layers.eval("el"+(el-1))}else{ml=gmobj("el"+(el-1))}mlp=gpos(ml);tw=null;th=null;if(menu[11]){lf=0;tc=0;for(y=el-ic;y<el;y++){tc++;ty=gmobj("el"+y);typ=gpos(ty);thy=gmobj("hel"+y);thyp=gpos(thy);if(mac&&!menu[3]){thy.style.width=1+"px";ty.style.width=thy.offsetWidth+menu[6][9]+"px";typ[3]=thy.offsetWidth}if(opera){ty.style.top=menu[4];if(lf==0)lf=menu[4];typ[2]=typ[2]+(m42);if(menu[3])spos(ty,null,0,null,typ[3]);}spos(thy,0,lf,typ[2],typ[3]);lfL=0;if(menu[ac-1+(tc*5)]>0)lfL=menu[ac-1+(tc*5)];lf=lf+typ[3]+lfL;}tw=lf-lfL;th=typ[2];if(_d.compatMode=="CSS1Compat"){}else{if(mac){if(!_d.doctype){th=th+(m42);tw=tw+m42}}else if(_d.all&&!opera){tw=tw+(m42);th=th+(m42)}}if(opera)tw=tw+(menu[4])}else{if(ns6)tw=mp[3]-(menu[4]*4);if(opera)tw=mp[3]+(menu[6][9]*2)-(m42);}spos(mn,null,null,th,tw);if(ns6)th=th+m42;if(menu[14]>-1){spos(gmobj("menuback"+mnu),null,null,th+(menu[14]*2),null)}}
function sm(v1){menu=eval(v1);if(opera||ns6||menu[11])if(!menu[7]&&!menu[21][2])fixb(v1);ap=gmobj(v1);if(flta)if(ap.filters[0])ap.filters[0].Apply();gmi++;if(!ns4)aps=ap.style; else aps=ap;aps.zIndex=gmi;aps.visibility='visible';if(flta)if(ap.filters[0])ap.filters[0].Play();if(menu[17])SDiv(menu[17],0)}
function popup(mn,mpos){if(isNaN(mn)){for(a=1;a<menus;a++){if(mn==Mname[a])mn=a}}setpos();omv.visibility='hide';clearTimeout(Mtimer);closeallmenus();mtxt='menu'+mn;mi=gmstyle(mtxt);if(mpos){if(ns4)_d.captureEvents(Event.MOUSEMOVE);_d.onmousemove=getMouseXY;mn=gmobj(mtxt);ttop=MouseY+2;gp=gpos(mn);if((ttop+gp[2])>wh+sy)ttop=wh-gp[2]+sy;spos(mn,ttop,MouseX+2,null,null);}flta=0;if((_d.all&&_d.getElementById)&&!mac){ap=gmobj(mtxt);getflta(ap);}sm(mtxt);am=mn}
function shl(lyr,el,s){clearTimeout(Mtimer);mt=_d.layers[lyr].document.layers.eval("el"+el);omv.visibility="hide";menu=eval(lyr);mt.visibility=s;omv=mt}
function popi(v1,lyr,el)
{
        subfound=0;
        nv1=v1
        for(a=1;a<menus;a++)
        {
                if(v1.substring(10,99)==Mname[a])
                {
                        v1="show-menu"+a;
                        subfound=1;
                        a=999
                }
        }
        sel="smenu="+el+"#";
        if(!om)om=lyr;
        clearTimeout(Mtimer);
        if(ns4){timo=_d.layers[lyr].document.layers.eval("el"+el).document.images[0]}else{timo=gmobj("im"+el)}
        o_img="";

        if (timo)
        {
                o_img=timo.src;
                ima=o_img.split(".");
                enD=ima.length;
                if(ima[enD-2].indexOf("_over")==-1)ima[enD-2]=ima[enD-2]+"_over";
                nsrc="";
                for(eD=0;eD<enD;eD++){nsrc=nsrc+ima[eD]+"."}
                nsrc=nsrc.substring(0,nsrc.length-1);
                ta=om.split(",");
                NI1=new Image();
                NI1.src=nsrc;
                if(mac45){}else if(_d.all||ns6){if(NI1.complete)timo.src=nsrc}else{if(NI1.width>0)timo.src=nsrc};
        }

        container=eval(lyr);
        if(subfound)
        {
                v1=v1.substring(5,99);
                menu=eval(v1);
                omnu=v1;
                mi=gmobj(v1);
                gp=gpos(gmobj(lyr));
                h3="";
                if(container[11])h3="h";
                if(ns4){tel=gpos(_d.layers[lyr].document.layers.eval("el"+el))}else{tel=gpos(gmobj(h3+"el"+el))}
                np=gpos(mi);
                if(container[11])
                {
                        if(!container[5])container[5]="";
                        if(!opera&&_d.all&&!mac)gp[1]=gp[1]+container[4];
                        if(ns6)
                        {
                                if(ns61)
                                {
                                        gp[1]=gp[1]+container[4];
                                }
                                else
                                {
                                        gp[1]=-1;gp[0]=gp[0]-container[4]
                                }
                        }
                        if(mac)gp[0]=gp[0]-container[4];
                        if(container[5].indexOf("bottom")>=0)
                        {
                                tvar=container[1]
                                if(!tvar)tvar=0;
                                gp[0]=gp[0]-np[2]-tel[2]
                        }
                        if(tel[1]+gp[1]+np[3]>ww+sx){gp[1]=ww-np[3]-tel[1]+sx;}
                        mtop=gp[0]+gp[2]-1;
                        mleft=tel[1]+gp[1];
                        if(container[15])mleft=mleft-np[3]+tel[3]+(container[4]*2)
                        m1=menu[1];
                        if(m1)
                        {
                                m1=m1+"";
                                if(m1.indexOf("offset=")==0)
                                {
                                        os=m1.substr(7,99);
                                        mtop=(parseInt(os)+mtop);
                                }
                                else
                                {
                                                if(m1)mtop=parseInt(m1);
                                }
                        }
                        m2=menu[2];
                        if(m2){m2=m2+"";
                        if(m2.indexOf("offset=")==0)
                        {
                                os=menu[2].substr(7,99);
                                mleft=(parseInt(os)+mleft);
                        }
                        else
                        {
                                if(m2)mleft=m2;
                        }
                }
                spos(mi,mtop,mleft-1,null,null);
                }
                else
                {
                        if(!ns61&&ns6)tel[0]=tel[0]-gp[0];
                        nt=tel[0]+gp[0]+suboffset_top;
                        nl=gp[1]+tel[3]-suboffset_left;
                        if((gp[1]+gp[3]+np[3])>=ww){nl=gp[1]-np[3]+suboffset_left}
                        if(nt+np[2]>wh+sy){nt=wh-np[2]+sy;}
                        if(menu[1]>=0)nt=menu[1]
                        if(menu[2]>=0)nl=menu[2]

                        spos(mi,nt,nl,null,null);
                }
                om+=","+v1;
                if(ShM==1)
                {
                        sm(v1);
                        if(!ns4)mi.style.visibility="visible";
                }
        }
        else
        {
                frt=v1.indexOf(" ")
                if(frt>0&&v1.indexOf("show-menu=")>-1)
                {
                        lt=parseLink(v1, "target");
                        if(lt)
                        {
                                v1=v1.substring(10,frt);
                                pf=parent[lt];
                                pf.mn=pf.gmobj("menu"+pf.getMenuByName(v1));
                                menu=eval(lyr);
                                gp=gpos(gmobj(lyr));
                                h3="";
                                if(container[11])h3="h";
                                if(ns4){mp=gpos(_d.layers[lyr].document.layers.eval("el"+el))}else{mp=gpos(gmobj(h3+"el"+el))}
                                if(menu[11])
                                {
                                        fTop=pf.sy;
                                        fLeft=gp[1]+mp[1]+Frames_Top_Offset;
                                }
                                else
                                {
                                        fTop=pf.sy+gp[0]+mp[0];
                                        fLeft=100
                                }
                                pf.spos(pf.mn,fTop,fLeft-100,null,null);
                                pf.popup(v1);
                                closeallmenus();
                        }
                }
                else if(frt>0)
                {
                        lt=parseLink(v1, "target");
                        if(lt)
                        {
                                v1=v1.substring(10,frt);
                                close_el(v1)
                                pf=parent[lt];
                                if(pf)pf.closeallmenus();
                        }
                }

        }
        ta=om.split(",")
        strt=0;
        for(a=0;a<ta.length;a++)
        {
                if (ta[a]==v1)strt=0;
                if (strt)
                {
                        if(ta[a])
                        {
                                hll=lyr;
                                hel=el;
                                close_el(el);
                                tmnu=eval(ta[a])
                                if(tmnu[17]&&!menu[17])SDiv(tmnu[17],1)
                                SDiv(ta[a],0)
                        }
                ta[a]=""
                }
                if(ta[a]==lyr)strt=1;
        }
        mmenu=eval(lyr)
        if(mmenu[7]&&lyr!=ta[0])
        {
                closeallmenus();
                if(v1==ta[ta.length-1])
                {
                        if(ns4)shl(lyr,el,'show');
                        tmnu=eval(v1)
                        if(tmnu[17])SDiv(tmnu[17],0)
                        SDiv(v1,1)
                }
                if(nv1.indexOf("target=")>0)
                {
                }
                else
                {
                        popi(nv1,lyr,el);
                        return
                }
        }
        om=""
        mdisp=0
        for(a=0;a<ta.length;a++)
        {
                if(ta[a]==lyr)frs=a
                if(ta[a]==v1)fre=a
                if (mdisp||(a>frs&&a<fre))
                {
                        if (ta[a]&&ta[a]!=v1)
                        {
                                SDiv(ta[a],0)
                                close_el(el);
                                if(ns4)shl(lyr,el,'hide');
                        }
                }
                else
                {
                        if(ta[a])om+=ta[a]+",";
                }
                if (v1==ta[a])mdisp=1
        }
}


function hl()
{
        arg=hl.arguments;
        hlnk=arg[1];
        am=" "+a;am=am.length-1;subimg="";arg[0]+=""
        if(ns6){dwd=arg[2][9]*2}else{dwd=0}
        if(ns4){if(el==0){st="<style type=\"text/css\">A.m{text-decoration:none;}</style>";_d.write(st);oatop=atop;}else{mtl=_d.layers[omnu].document.layers.eval("el"+(el-1));
        if(oatop==atop){atop+=mtl.clip.height}else{atop=menu[4];}oatop=atop}if(menu[11]){atop=menu[4];if(oaleft==aleft){aleft+=mtl.clip.width+arg[8]}else{aleft=menu[4];oaleft=aleft}oaleft=aleft}else{aleft=menu[4];}}
        if(hlnk.substring(0,5)=="show-"){arg[1]=arg[1].toLowerCase();if(arg[7]==hlnk) if(arg[6])arg[7]=arg[6];else arg[7]="";hlnk="#";if (arg[6]+" "!="undefined ")hlnk=arg[6];}
        pI="popi('"+arg[1]+"','"+arg[5]+"',"+el+");"
        if(arg[1].substring(0,5)=="show-"&&(!menu[11]||menu[6][16])&&(menu[11]||menu[6][10])){im++;ims="im"+im+"_"+a+"_"+el+"_"+arg[5];ti=arg[2][10];if(menu[6][16]&&menu[11])ti=menu[6][16];if(ns4){sti="<img border=0 src="+ti+">";subimg="<layer id="+ims+">"+sti+"</layer>";}else{subimg="<img id="+ims+" style=\"position:absolute;\" onmouseover=\"gmobj('el"+el+"').onmouseover();\" onmouseout=\"gmobj('el"+el+"').onmouseout();\" border=0 src="+ti+">"};imar[im]=ims;}omp=mp;ofc=arg[2][0];ofb=arg[2][1];onc=arg[2][2];onb=arg[2][3];ltarg=" ";lOnfunc="";lOffunc="";ltype="";lalign=menu[8];if(!lalign)lalign="left"
        if(hlnk.indexOf(" ")>0)
        {
                _al=parseLink(hlnk,"align");if(_al)lalign=_al;
                ltarg=parseLink(hlnk,"target");
                if(ltarg)ltarg=" target="+ltarg
                lOnfunc=parseLink(hlnk,"onfunction")+";";
                lOffunc=parseLink(hlnk,"offfunction")+";";
                ltype=parseLink(hlnk,"type");
                tofc=parseLink(hlnk,"offfontcolor");if(tofc)(ofc=cHexColor(tofc))
                tofb=parseLink(hlnk,"offbackcolor");if(tofb)(ofb=cHexColor(tofb))
                tonc=parseLink(hlnk,"onfontcolor");if(tonc)(onc=cHexColor(tonc))
                tonb=parseLink(hlnk,"onbackcolor");if(tonb)(onb=cHexColor(tonb))
                hlnk=parseLink(hlnk,"link");
        }

        if(!ofb&&(mac||opera))ofb="transparent"

        if(arg[7]+""=="undefined"){arg[7]=hlnk}
        if(ltype=="form"){onc=ofc;onb=ofb;mp="default"}
        if(ltype=="header"&&arg[2][17]){ofc=arg[2][17];ofb=arg[2][18];onc=arg[2][17];onb=arg[2][18];mp="default"}
        smO="ShM=1;";smC="";
        if(menu[16]==1){smO="";hlnk="javascript:ShM=1;"+pI}
        if(hlp[14])if(location.href.indexOf(hlnk)>=0&&(hlnk.substr(-1,1)!="/")){smc=el}
        if(hlnk!="#"&&smc==el&&arg[2][14]){ofc=arg[2][14];ofb=arg[2][15];}
        if(ltype=="form"||hlnk=="#"||ltype=="header"){mp="default";if(ns4){hlnk="<a ";}else{hlnk=" "}}else{if(ns4){hlnk="<a href=\""+hlnk+"\" "+ltarg}else{hlnk="<a href=\""+hlnk+"\" "+ltarg + " style='text-decoration:none;'>"}}
        pd="popdn(this," + el + ", '" + arg[5] + "', '"+arg[1]+"', '"+ofb+"', '"+ofc+"');"
        if(arg[0].indexOf("<img")>=0)
        {
                if(menu[11]&&ns6)ns6hif=1
                ipos=arg[0].indexOf("<img");
                arg[0]=arg[0].substr(0,ipos+4)+" onclick=\"gmobj('el"+el+"').click()\" id=im"+el+" "+ arg[0].substr(ipos+5,900);
        }
        if(!isNaN(arg[2][5]))arg[2][5]+="px"
        if(ns4){
                rsp=""

                tdwd=" width="+menu[3]
                if(lalign=="left")tdwd=""
                if (lalign=="right") rsp="<td height=-1></td>"
                ls="<table border=0 cellpadding="+arg[2][9]+" cellspacing=0><tr><td height=-1 align="+lalign+tdwd+">"+hlnk+" style='color:"
                le=";text-decoration:none;font-size:"+arg[2][5]+";font-weight:"+arg[2][7]+";font-family:"+arg[2][8]+"' onmouseover=\"status='"+arg[7]+"';\">"+arg[0]+"</a>"+subimg+"</td>"+rsp+"</tr></table></layer>"
                if(menu[11])nswid=menu[3]; else nswid=(menu[3]-(menu[4]*2))
                lv=" left="+aleft+" width="+nswid+" top="+atop
                nsofb="";if(ofb)nsofb=" BGColor="+ofb
                nsonb="";if(onb)nsonb=" BGColor="+onb
                mt="<layer id=mel"+el+lv+" "+nsofb+" onmouseover=\""+smO+"shl('"+arg[5]+"',"+el+",'show');"+pI+" "+lOnfunc+";return stch('"+arg[7]+"');\">"+ls+ofc+le
                mt+="<layer id=el"+el+lv+" "+nsonb+" onmouseover=\"clearTimeout(Mtimer);"+pI+"ltarg='"+ltarg+"'; nshl='"+arg[1]+"'; this.captureEvents(Event.CLICK); this.onClick=dc;\" onmouseout=\""+pd+"; "+lOffunc+"; return stch('');\" visibility=hidden >"+ls+onc+le
        }else{
                mt="";
                if(menu[11]){bgc=hlp[4];if(hlp[11])bgc=hlp[12];
                mt+="<div id=hel"+el+" style=\"background-color:'"+ofb+"';width:"+(menu[3]-menu[4])+"px;position:absolute;top:0;left:"+dlft+";\">";dlft=dlft+menu[3]-(menu[4]*2)+menu[4]}
                rsp=0;if (lalign=="right") rsp=7;
                mt+=hlnk
                dw=(menu[3]-(2*menu[4]+dwd))
                if(dw+" "=="NaN "){dw=""}else{dw="width:"+dw+"px"}
                if(!menu[3]&&ie4)dw="width:1px";
                if(menu[11]&&opera){dw="position:absolute;"}
                if(isNaN(arg[2][9]))
                {
                        padd=arg[2][9]
                }
                else
                {
                        psp=arg[2][9]+"px "
                        padd=psp+psp+psp+psp
                }
                if(menu[11]&&menu[3]>0)dw="position:absolute;width:"+menu[3]+"px"
                mt+="<div valign=top align="+lalign+" id=el"+el+" style=\""+dw+";padding:"+padd+";font-weight:"+arg[2][7]+";font-style:"+arg[2][6]+";font-family:"+arg[2][8]+";font-size:"+arg[2][5]+";color:"+ofc+";background-color:"+ofb+";\""
                mt+=" onMouseOver=\"this.style.background"+bgt+"='"+onb+"';style.color='"+onc+"';this.style.cursor='"+mp+"';"+smO+"; "+pI+";"+lOnfunc+";return stch('"+arg[7]+"');\""
                mt+=" onMouseOut=\"rep_img(); "+pd+";"+lOffunc+"; return stch('');\">"
                mt+=arg[0]+"</div>";
                mt+="</a>";if (menu[11]){mt+="</div>"}
                mt+=subimg
        }
        mp=omp
        _d.write(mt);el++;
}


function dmenu(mnu){
        menu=eval(mnu);
        menu[21]=new Array()
        if(menu[7]){parr[parr.length]=mnu.substr(4,3);}
        atop=menu[4];
        if(!atop)atop=0;
        hlp=menu[6];
        if(!menu[4])menu[4]=0;
        if(ns4)eq="="; else eq=":"
        for(z=0;z<19;z++)
        {
                if(z==5)z=12;
                if(z==16)z++;
                if(hlp[z]&&hlp[z].charAt(0)!="#")hlp[z]=cHexColor(hlp[z]);
        }
        if(menu[14]>-1){if(_d.layers)_d.write("<layer id=menuback"+mnu+" top="+(menu[1]-menu[14])+" height=21 width=100% left=0 bgcolor="+hlp[1]+"></layer>");else        _d.write("<div id=menuback"+mnu+" style=\"position:absolute;top:"+(menu[1]-menu[14])+"px;width:100%;height:2px;background-color:"+hlp[1]+"\">&nbsp;</div>")}
        if(el)ns6c=3;else ns6c=2;ns6w=0;if(menu[8]=="right"&&ns6)ns6w=7;
        if (menu[3]<1)menu[3]="undefined"
        if(ns4)
        {
                thw=menu[3]
                if(menu[11])
                {
                        ic=(menu.length-ac)/5;
                        thw=(menu[3]*ic)-(menu[4]*ic)+menu[4]
                }
                bgc="";
                if(hlp[4])bgc="bgColor="+hlp[4]
                if (hlp[11])
                {
                        bgc="bgColor="+hlp[13]
                }
                mt="<layer z-index=19 visibility=hidden "+bgc+" id="+mnu+" top="+menu[1]+" left="+menu[2]+" width="+thw+">"

                if (hlp[11])
                {
                        mt+="<layer bgcolor="+hlp[12]+" top=0 left=0 height=2 width=100%></layer>"
                }
                mt+="<layer id="+mnu+"3d bgcolor="+hlp[12]+" top=0 left=0 height=0 width=2></layer>"
        }
        else
        {
                iedf="";if(!opera&&!mac&&_d.all&&menu[9])
                {
                iedf=" filter:";flt=menu[9].split("\;");for(fx=0;fx<flt.length;fx++){iedf+=" progid:DXImageTransform.Microsoft."+flt[fx]}}
                if(!hlp[4]&&(mac||opera))hlp[4]="transparent"
                if (hlp[11]){brd = "border:solid "+menu[4]+"px; border-left-color:"+hlp[12]+";border-top-color:"+hlp[12]+";border-bottom-color:"+hlp[13]+";border-right-color:"+hlp[13]+";"}else{brd = "border:solid "+menu[4]+"px; border-left-color:"+hlp[4]+";border-top-color:"+hlp[4]+";border-bottom-color:"+hlp[4]+";border-right-color:"+hlp[4]+";"}
                mt="<div id="+mnu+" style=\""+iedf+";z-index:19;visibility:hidden;"+brd+"position:absolute;background-Color:"+hlp[4]+";width:"+(menu[3]+ns6w)+"px;left:"+menu[2]+"px;top:"+menu[1]+"px;\">"
        }

        _d.write(mt)
        x=0;
        dlft=0
        aleft=0;
        for(b=ac;b<menu.length;b++)
        {
                b=b+4
                if(menu[b-3]==""){menu[b-3]="#"}
                menu[b-3]=menu[b-3].replace(/\"/gi, "&quot;")
                if(menu[b-2])menu[b-2]=menu[b-2].replace(/\"/gi, "&quot;")
                hl(menu[b-4], menu[b-3],hlp,100,100,mnu,menu[b-2],menu[b-1],menu[b-5])
                txt="";

                sbgc=parseLink(menu[b-3],"separatorcolor");
                if(!sbgc)sbgc=parseLink(menu[b-2],"separatorcolor");

                if(ns4)
                {
                        if (!menu[11])
                        {
                                if (menu[b]&&b<menu.length-1)
                                {
                                        mt=_d.layers[mnu].document.layers.eval("el"+(el-1))
                                        x=atop+mt.clip.height
                                        //sbgc=parseLink(menu[b-3],"separatorcolor");
                                        if(sbgc)bgc="bgcolor="+sbgc;
                                        if(!hlp[11])x++
                                        txt="<layer top="+(x-2)+" left="+menu[4]+" height="+menu[b]+" "+bgc+" width="+mt.clip.width+" onmouseover=\"clearTimeout(Mtimer)\" ></layer>"
                                        if(hlp[11]){txt+="<layer top="+(x-1)+" left="+menu[4]+" height=1 bgcolor="+hlp[12]+" width="+mt.clip.width+"></layer>"
                                        }
                                }
                        }
                }
                else
                {
                        mbw=menu[b];bc=hlp[4];bl="";oc="";if(opera){bl="left:0;";oc="_d.getElementById('el"+el+"').style.background='"+hlp[1]+"';_d.getElementById('el"+el+"').style.color='"+hlp[0]+"'";if(opera&&mbw==0){mbw=1;bc=hlp[1];bl+="width:"+menu[3]-menu[4]+"px"}else{if(menu[4]==1)ocv=4;bl+="width:"+(menu[3]+(menu[6][9]*2)-menu[4])+"px"}}
                        if(b+1==menu.length)mbw=0;
                        if(mbw>0)
                        {
                                if (!menu[11])
                                {
                                        dwid=(menu[3]-(menu[4]*2))
                                        if((_d.all&&_d.compatMode=="CSS1Compat")||(mac&&_d.doctype))dwid=menu[3]+(menu[6][9]*2)-(menu[4]*2)
                                        if (hlp[11]&&mbw==1)
                                        {
                                                txt="<div onmouseout=\""+oc+"\" onmouseover=\"clearTimeout(Mtimer)\" style=\"position:relative\">"
                                                txt+="<div style=\"border-top:1px solid "+hlp[13]+"; background-color:"+hlp[12]+"; width:"+dwid+"px;position:absolute;clip:rect(0 100% 2px 0);height:1px;"+bl+"\">"
                                                txt+="</div>\n</div>"
                                        }
                                        else
                                        {
                                                //sbgc=parseLink(menu[b-3],"separatorcolor");
                                                //sbgc=parseLink(menu[b-3],"separatorcolor");
                                                if(!sbgc)sbgc=bc;
                                                txt="<div style=\"position:relative;\">";
                                                txt+="<div onmouseout=\"popdn();"+oc+"\" onmouseover=\"clearTimeout(Mtimer)\" style=\"background-color:"+sbgc+";width:"+dwid+"px;position:absolute;"
                                                txt+="clip:rect(0 100% "+mbw+"px 0);height:"+mbw+"px;"+bl+"\">"
                                                txt+="</div>"
                                                txt+="</div>"
                                        }
                                }
                        }

                }
                _d.write(txt);
                omnu=mnu;
                mt=""
        }
        oatop=-1;
        if (ns4){mt="</layer>"}else{mt+="</div>\n</div>"}
        _d.write(mt)
        if (ns4)
        {
                ml=gmobj(mnu)
                ml.clip.height += menu[4]
                ml3d=_d.layers[mnu].document.layers.eval(mnu+"3d")
                if (hlp[11])ml3d.clip.height=ml.clip.height
        }
        menu[21][1]=el
}
function checs(e){stopchec=1;for(a=1;a<menus;a++){menu=eval("menu"+a);if(menu[10]>0){stopchec=0;if (df!=0||osy!=sy){mi=gmobj("menu"+a);tm=gpos(mi);mit=tm[0];if(isNaN(menu[1]))menu[1]=0;df=parseInt(menu[1])+sy-mit;nt=df/followspeed;of1=nt.toString();ofr=of1.split("\.");if(ofr[1]+" "=="undefined ")ofr[1]=0;ofrac=ofrac+parseInt(ofr[1]);if(mac&&parseInt(nt)==0){clearTimeout(pu);return;}if(ofrac>10){ofrac=ofrac-10;if(df>=0){nt++}else{nt--}}spos(mi,mit+nt,null,null,null)}else{clearTimeout(pu);return;}osy=sy}}if(stopchec){osy=sy;return}pu=setTimeout('checs()',followrate);}
function PlaceMenu(mn){if(ns4||ns6)pos="relative";else pos="absolute";mnt="<div id=\""+mn+"DIV\" style=\"width:1;height:1;position:"+pos+"\"></div>";menu=eval("menu"+getMenuByName(mn));menu[21][0]=mn+"DIV";_d.write(mnt)}
function setpos(){for(a=1;a<menus;a++){menu=eval("menu"+a);if(menu[21][0]){gm=gmobj(menu[21][0]);if(ns4){ntp=gm.pageY;nlp=gm.pageX}else{gp=gpos(gm);ntp=gp[0];nlp=gp[1]}mn=gmobj("menu"+a);mnp=gpos(mn);if(ntp==0)ntp=null;if(nlp==0)nlp=null;spos(mn,ntp,nlp,null,null);}else{if(!menu[5])menu[5]="";if (menu[5].indexOf("left")!=-1||menu[5].indexOf("center")!=-1||menu[5].indexOf("right")!=-1){mn=gmobj("menu"+a);mnp=gpos(mn);mnw=mnp[3];nlp=((ww-mnw)/2);if(menu[5].indexOf("right")!=-1)nlp=ww-mnw;if(menu[5].indexOf("left")!=-1)nlp=1;ts=menu[2]+"";if(ts.indexOf("offset=")==0){os=ts.substr(7,99);nlp=nlp+parseInt(os)}spos(mn,null,nlp,null,null)}if(menu[5].indexOf("top")!=-1||menu[5].indexOf("bottom")!=-1||menu[5].indexOf("middle")!=-1){mn=gmobj("menu"+a);mnp=gpos(mn);mnh=mnp[2];if(opera)mnh=mn.style.pixelHeight;nlp=wh-mnh;if(menu[5].indexOf("middle")!=-1)nlp=((wh-mnh)/2);if(menu[5].indexOf("top")!=-1)nlp=1;ts=menu[1]+"";if(ts.indexOf("offset=")==0){os=ts.substr(7,99);mnp=gpos(mn);nlp=nlp+parseInt(os)}if(menu[10]){menu[1]=nlp;nlp=nlp+sy}spos(mn,nlp,null,null,null)}}}}
function MScan(){sy=self.pageYOffset;sx=self.pageXOffset;if(opera){ww=window.innerWidth;wh=window.innerHeight}else if(_d.all){sy=_d.body.scrollTop;sx=_d.body.scrollLeft;if(sy==0&&!ie4&&!mac)sy=_d.documentElement.scrollTop;if(_d.compatMode=="CSS1Compat"){ww=document.documentElement.clientWidth;wh=document.documentElement.clientHeight}else{ww=_d.body.clientWidth;wh=_d.body.clientHeight}}else{if(ns4){ww=self.innerWidth-16;wh=self.innerHeight-17}else{ww=_d.body.offsetWidth;if(!ww)ww=self.innerWidth-15;ww--;wh=self.innerHeight;}}if(MLoaded>1&&oww>0&&(ns4||opera)&&(owh!=wh||oww!=ww)){if(nsmatch)location.reload()}if(MLoaded==1&&owh==wh&&oww==ww)nsmatch=1;if(opera)nsmatch=1;if(sy!=osy)checs();if(MLoaded==1||(owh!=wh||oww!=ww)){setpos();sis();MLoaded=2;}if(MLoaded){oww=ww;owh=wh;}mspu=setTimeout('MScan()',250)}
function Minit(){
        el=0;df=-1;
        if ((_d.all&&_d.getElementById)&&!mac) document.write("<script>function getflta(ap){try{if(ap.filters){flta=1}}catch(e){}}</script>");
        for(x=0;x<parr.length;x++){popup(parr[x]);fixb("menu"+parr[x])}
        MScan();
        if(ns4)_d.captureEvents(Event.MOUSEMOVE);_d.onmousemove=getMouseXY;
}
for(a=1;a<menus;a++){dmenu("menu"+a)}
if(mac45)Oload=window.onLoad; else Oload=window.onload;
function mOL(){if(!ns61&&ns6||ns6hif){Minit()}MLoaded=1;if(Oload)Oload();MScan()}
if(!ns61&&ns6||ns6hif){window.onload=mOL;}else{Minit();window.onload=mOL;}


;function prompt_confirm(){
	
	 var bool = confirm("Are You sure you want to make update details");
	 
		 return bool; 
	}
	
		function win_close(){
			
			if(window.opener.frmMain){
				window.opener.frmMain.submit();
			}
				 self.close();
			
		}
		

function checkFloat(val){
	
	if (isNaN(val)) {
		
		
		return false;
	}
	else{
		
		var num = val.replace(/,/gi, "")*1;
		val=num.toFixed(2);
		return val;
	}
}
function checkall(toggle){
    
    var checkedPort = document.Frm.selectedPortTerminal[0].checked;
    var checkedSite = document.Frm.selectedPortTerminal[1].checked;
    
    if(checkedPort==true)
    var elements = document.getElementsByName('cityList');
    else
    var elements = document.getElementsByName('loadPort');	
    
	var tog = document.getElementById(toggle);

	if (elements && elements.length > 0) { 

		for(var i=0;i<elements.length; i++){
			var elem = document.getElementById(elements[i].id);
			elem.checked =tog.checked ;

		}
	}
}


function disableControls(dateId){ 		
	document.getElementById(dateId).childNodes[1].disable='true'; 
	document.getElementById(dateId).childNodes[1].readOnly='readonly'; 
	document.getElementById(dateId).childNodes[1].disable=''; 
} 


function disableKeys(){ 
	var keyCode=(document.all)?event.keyCode:e.which; 
	if(keyCode==9){ 
		window.event.returnValue=true; //for allowing TAB 
	}else{ 
		window.event.returnValue=false; 
	} 
} 
function addCheckRow(tableID){
	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var idx = rowCount - 1;

	var bool1 = check(idx,table);
	

	if(bool1== true){
		var bool2 = checkVal(idx,table);
		if(bool2 == true){
			var bool3 = checkTo(idx,table);
			if(bool3){
				alert("Enter value in To Days less than 999 to add new slab");
			}
			else{
				if(idx == 6){
					alert("Maximum slabs can be 6");
				}
				else{
					for( i = 0;i<idx ; i=i+1){

						packagesfrom   = "PackagesAction_packages_" + i + "_from";
						packagesto = "PackagesAction_packages_" + i + "_to";
						packagescurrency = "PackagesAction_packages_" + i + "_currency";

						document.getElementById(packagesto).readOnly="readonly";

					}
					addRow(tableID);
				}
			}
		}
	}
}
function checkTo(idx,table){
	var row = table.rows[idx];  	
	var txt3 = row.cells[1].childNodes[0].value;
	
	if(txt3 >= 999){
		
		return true;
	}
	
	else
	{
		
		return false;
	}
}
function addRow(tableID) {
	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var idx = rowCount - 1;


	var row = table.insertRow(rowCount);
	var cell1 = row.insertCell(0);
	var fromElemnt = document.createElement("input");
	fromElemnt.type = "text";
	fromElemnt.size="4";
	fromElemnt.name = "packagesfrom"+idx;
	fromElemnt.id = "PackagesAction_packages_" + idx + "_from";
	fromElemnt.readOnly = true;
	fromElemnt.readOnly="readonly";
	fromElemnt.setAttribute("readOnly", "true");

	var txt2 = setVal(idx,table);

	fromElemnt.value =txt2;
	// adding ngModel
	fromElemnt.setAttribute("ngModel", "");
	cell1.appendChild(fromElemnt);

	var cell2 = row.insertCell(1);
	var daysElement = document.createElement("input");
	daysElement.type = "text";
	daysElement.size="4";
	daysElement.name = "packagesto"+idx;
	daysElement.id = "PackagesAction_packages_" + idx + "_to";
	// adding ngModel
	daysElement.setAttribute("ngModel", "");
	//daysElement.onchange=function(){testing(this);};


	cell2.appendChild(daysElement);

	var cell3 = row.insertCell(2);
	var currencyElement = document.createElement("input");
	currencyElement.type = "text";
	currencyElement.size="6";
	currencyElement.name = "packagescurrency"+idx;
	currencyElement.id = "PackagesAction_packages_" + idx + "_currency";
	// adding ngModel
	currencyElement.setAttribute("ngModel", "");
	cell3.appendChild(currencyElement);
	document.getElementById("PackagesAction_packages_" + idx + "_currency").maxLength=10;
	var obj =document.getElementById("rowcount");
	obj.value=rowCount;


}



function deleteRow(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		if(rowCount > 2) {

			rowCount = rowCount - 1;

			table.deleteRow(rowCount);
			rowCount = rowCount - 1;
			row = rowCount -1;

			packagesto = "PackagesAction_packages_" + row + "_to";

			document.getElementById(packagesto).readOnly=false;
			var obj =document.getElementById("rowcount");

			obj.value=rowCount;

		}else{
			alert("Row can't be Deleted");
		}


	}catch(e) {
		alert(e);
	}
}
function deleteMulRow(tableID) {
	try {

		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		if(rowCount > 2) {

			for(;rowCount>2;){

				rowCount = rowCount - 1;

				table.deleteRow(rowCount);
			}

			rowCount = rowCount - 1;
			row = rowCount -1;

			packagesto = "PackagesAction_packages_" + row + "_to";

			document.getElementById(packagesto).readOnly=false;
			var obj =document.getElementById("rowcount");

			obj.value=rowCount;

		}




	}catch(e) {
		alert(e);
	}
}

function checkNum(x)
{


	if (!(/^\d+$/.test(x.value)))
	{
		alert("Only Numeric Values Allowed");
		x.focus();
		return false;
	}
	else{
		return true;
	}
}
function checkVal(idx,table){
	var row =  table.rows[idx];
	txt1 = parseInt(row.cells[0].childNodes[0].value);
	txt2 = parseInt(row.cells[1].childNodes[0].value);

	if(txt1<txt2){
		return true;
	}else {
		alert("To days should be greater than From Days");
		return false;
	}

}
function setVal(idx,table){

	var row =  table.rows[idx];
	txt2 = parseInt(row.cells[1].childNodes[0].value);
	txt2=txt2+1;
	return txt2;
}

function checkLastRow(table){

	var table = document.getElementById(tableID);

	var rowCount = table.rows.length;
	var idx = rowCount - 1;
	bool = checkVal(idx,table);
	return bool;
}

function check(idx,table){

	var row = table.rows[idx];  

	var txt1 = row.cells[0].childNodes[0].value;
	var txt2 = row.cells[1].childNodes[0].value;
	var txt3 = row.cells[2].childNodes[0].value; 

	if(txt1 =="" || txt2 =="" || txt3 =="" ){
		alert("Please enter the value before adding a new row ");
		return false;
	}
	else {
		if(txt1 <0 || txt2 <=0 || txt3 <=0 ){
			alert("Please enter values greater than 0  before adding a new row ");
			return false;
		}
		else{
			if(!(checkNum(row.cells[0].childNodes[0]) && checkNum(row.cells[1].childNodes[0] ) )){

				return false;
			}
			else{
				if(isNaN(row.cells[2].childNodes[0].value)){
					alert("Enter Numeric Data " );
					return false;
				}else{
					var num = txt3.replace(/,/gi, "")*1;
					txt3=num.toFixed(2);
					row.cells[2].childNodes[0].value = txt3;
					return true;
				}
			}
		}
	}
}










;/**
 * Angularjs file to load and process json data
 */
var app = angular.module('createTariffApp', []);

app.controller('loadCountry', function($scope, $http) {
  $http.get('data/port_data.json')
       .then(function(res){
          $scope.port_data = res.data;
          $scope.portselected = $scope.port_data[0];
        });
  //$scope.portselected = $scope.port_data[0];
});

;
var Prototype = {
  Version: '1.4.0',
  ScriptFragment: '(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)',

  emptyFunction: function() {},
  K: function(x) {return x}
}

var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}

var Abstract = new Object();

Object.extend = function(destination, source) {
  for (property in source) {
    destination[property] = source[property];
  }
  return destination;
}

Object.inspect = function(object) {
  try {
    if (object == undefined) return 'undefined';
    if (object == null) return 'null';
    return object.inspect ? object.inspect() : object.toString();
  } catch (e) {
    if (e instanceof RangeError) return '...';
    throw e;
  }
}

Function.prototype.bind = function() {
  var __method = this, args = $A(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($A(arguments)));
  }
}

Function.prototype.bindAsEventListener = function(object) {
  var __method = this;
  return function(event) {
    return __method.call(object, event || window.event);
  }
}

Object.extend(Number.prototype, {
  toColorPart: function() {
    var digits = this.toString(16);
    if (this < 16) return '0' + digits;
    return digits;
  },

  succ: function() {
    return this + 1;
  },

  times: function(iterator) {
    $R(0, this, true).each(iterator);
    return this;
  }
});

var Try = {
  these: function() {
    var returnValue;

    for (var i = 0; i < arguments.length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) {}
    }

    return returnValue;
  }
}

/*--------------------------------------------------------------------------*/

var PeriodicalExecuter = Class.create();
PeriodicalExecuter.prototype = {
  initialize: function(callback, frequency) {
    this.callback = callback;
    this.frequency = frequency;
    this.currentlyExecuting = false;

    this.registerCallback();
  },

  registerCallback: function() {
    setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  onTimerEvent: function() {
    if (!this.currentlyExecuting) {
      try {
        this.currentlyExecuting = true;
        this.callback();
      } finally {
        this.currentlyExecuting = false;
      }
    }
  }
}

/*--------------------------------------------------------------------------*/

function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}
Object.extend(String.prototype, {
  stripTags: function() {
    return this.replace(/<\/?[^>]+>/gi, '');
  },

  stripScripts: function() {
    return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
  },

  extractScripts: function() {
    var matchAll = new RegExp(Prototype.ScriptFragment, 'img');
    var matchOne = new RegExp(Prototype.ScriptFragment, 'im');
    return (this.match(matchAll) || []).map(function(scriptTag) {
      return (scriptTag.match(matchOne) || ['', ''])[1];
    });
  },

  evalScripts: function() {
    return this.extractScripts().map(eval);
  },

  escapeHTML: function() {
    var div = document.createElement('div');
    var text = document.createTextNode(this);
    div.appendChild(text);
    return div.innerHTML;
  },

  unescapeHTML: function() {
    var div = document.createElement('div');
    div.innerHTML = this.stripTags();
    return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
  },

  toQueryParams: function() {
    var pairs = this.match(/^\??(.*)$/)[1].split('&');
    return pairs.inject({}, function(params, pairString) {
      var pair = pairString.split('=');
      params[pair[0]] = pair[1];
      return params;
    });
  },

  toArray: function() {
    return this.split('');
  },

  camelize: function() {
    var oStringList = this.split('-');
    if (oStringList.length == 1) return oStringList[0];

    var camelizedString = this.indexOf('-') == 0
      ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1)
      : oStringList[0];

    for (var i = 1, len = oStringList.length; i < len; i++) {
      var s = oStringList[i];
      camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
    }

    return camelizedString;
  },

  inspect: function() {
    return "'" + this.replace('\\', '\\\\').replace("'", '\\\'') + "'";
  }
});

String.prototype.parseQuery = String.prototype.toQueryParams;

var $break    = new Object();
var $continue = new Object();

var Enumerable = {
  each: function(iterator) {
    var index = 0;
    try {
      this._each(function(value) {
        try {
          iterator(value, index++);
        } catch (e) {
          if (e != $continue) throw e;
        }
      });
    } catch (e) {
      if (e != $break) throw e;
    }
  },

  all: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      result = result && !!(iterator || Prototype.K)(value, index);
      if (!result) throw $break;
    });
    return result;
  },

  any: function(iterator) {
    var result = true;
    this.each(function(value, index) {
      if (result = !!(iterator || Prototype.K)(value, index))
        throw $break;
    });
    return result;
  },

  collect: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      results.push(iterator(value, index));
    });
    return results;
  },

  detect: function (iterator) {
    var result;
    this.each(function(value, index) {
      if (iterator(value, index)) {
        result = value;
        throw $break;
      }
    });
    return result;
  },

  findAll: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (iterator(value, index))
        results.push(value);
    });
    return results;
  },

  grep: function(pattern, iterator) {
    var results = [];
    this.each(function(value, index) {
      var stringValue = value.toString();
      if (stringValue.match(pattern))
        results.push((iterator || Prototype.K)(value, index));
    })
    return results;
  },

  include: function(object) {
    var found = false;
    this.each(function(value) {
      if (value == object) {
        found = true;
        throw $break;
      }
    });
    return found;
  },

  inject: function(memo, iterator) {
    this.each(function(value, index) {
      memo = iterator(memo, value, index);
    });
    return memo;
  },

  invoke: function(method) {
    var args = $A(arguments).slice(1);
    return this.collect(function(value) {
      return value[method].apply(value, args);
    });
  },

  max: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (value >= (result || value))
        result = value;
    });
    return result;
  },

  min: function(iterator) {
    var result;
    this.each(function(value, index) {
      value = (iterator || Prototype.K)(value, index);
      if (value <= (result || value))
        result = value;
    });
    return result;
  },

  partition: function(iterator) {
    var trues = [], falses = [];
    this.each(function(value, index) {
      ((iterator || Prototype.K)(value, index) ?
        trues : falses).push(value);
    });
    return [trues, falses];
  },

  pluck: function(property) {
    var results = [];
    this.each(function(value, index) {
      results.push(value[property]);
    });
    return results;
  },

  reject: function(iterator) {
    var results = [];
    this.each(function(value, index) {
      if (!iterator(value, index))
        results.push(value);
    });
    return results;
  },

  sortBy: function(iterator) {
    return this.collect(function(value, index) {
      return {value: value, criteria: iterator(value, index)};
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }).pluck('value');
  },

  toArray: function() {
    return this.collect(Prototype.K);
  },

  zip: function() {
    var iterator = Prototype.K, args = $A(arguments);
    if (typeof args.last() == 'function')
      iterator = args.pop();

    var collections = [this].concat(args).map($A);
    return this.map(function(value, index) {
      iterator(value = collections.pluck(index));
      return value;
    });
  },

  inspect: function() {
    return '#<Enumerable:' + this.toArray().inspect() + '>';
  }
}

Object.extend(Enumerable, {
  map:     Enumerable.collect,
  find:    Enumerable.detect,
  select:  Enumerable.findAll,
  member:  Enumerable.include,
  entries: Enumerable.toArray
});
var $A = Array.from = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0; i < iterable.length; i++)
      results.push(iterable[i]);
    return results;
  }
}

Object.extend(Array.prototype, Enumerable);

Array.prototype._reverse = Array.prototype.reverse;

Object.extend(Array.prototype, {
  _each: function(iterator) {
    for (var i = 0; i < this.length; i++)
      iterator(this[i]);
  },

  clear: function() {
    this.length = 0;
    return this;
  },

  first: function() {
    return this[0];
  },

  last: function() {
    return this[this.length - 1];
  },

  compact: function() {
    return this.select(function(value) {
      return value != undefined || value != null;
    });
  },

  flatten: function() {
    return this.inject([], function(array, value) {
      return array.concat(value.constructor == Array ?
        value.flatten() : [value]);
    });
  },

  without: function() {
    var values = $A(arguments);
    return this.select(function(value) {
      return !values.include(value);
    });
  },

  indexOf: function(object) {
    for (var i = 0; i < this.length; i++)
      if (this[i] == object) return i;
    return -1;
  },

  reverse: function(inline) {
    return (inline !== false ? this : this.toArray())._reverse();
  },

  shift: function() {
    var result = this[0];
    for (var i = 0; i < this.length - 1; i++)
      this[i] = this[i + 1];
    this.length--;
    return result;
  },

  inspect: function() {
    return '[' + this.map(Object.inspect).join(', ') + ']';
  }
});
var Hash = {
  _each: function(iterator) {
    for (key in this) {
      var value = this[key];
      if (typeof value == 'function') continue;

      var pair = [key, value];
      pair.key = key;
      pair.value = value;
      iterator(pair);
    }
  },

  keys: function() {
    return this.pluck('key');
  },

  values: function() {
    return this.pluck('value');
  },

  merge: function(hash) {
    return $H(hash).inject($H(this), function(mergedHash, pair) {
      mergedHash[pair.key] = pair.value;
      return mergedHash;
    });
  },

  toQueryString: function() {
    return this.map(function(pair) {
      return pair.map(encodeURIComponent).join('=');
    }).join('&');
  },

  inspect: function() {
    return '#<Hash:{' + this.map(function(pair) {
      return pair.map(Object.inspect).join(': ');
    }).join(', ') + '}>';
  }
}

function $H(object) {
  var hash = Object.extend({}, object || {});
  Object.extend(hash, Enumerable);
  Object.extend(hash, Hash);
  return hash;
}
ObjectRange = Class.create();
Object.extend(ObjectRange.prototype, Enumerable);
Object.extend(ObjectRange.prototype, {
  initialize: function(start, end, exclusive) {
    this.start = start;
    this.end = end;
    this.exclusive = exclusive;
  },

  _each: function(iterator) {
    var value = this.start;
    do {
      iterator(value);
      value = value.succ();
    } while (this.include(value));
  },

  include: function(value) {
    if (value < this.start)
      return false;
    if (this.exclusive)
      return value < this.end;
    return value <= this.end;
  }
});

var $R = function(start, end, exclusive) {
  return new ObjectRange(start, end, exclusive);
}

var Ajax = {
  getTransport: function() {
    return Try.these(
      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
      function() {return new ActiveXObject('Microsoft.XMLHTTP')},
      function() {return new XMLHttpRequest()}
    ) || false;
  },

  activeRequestCount: 0
}

Ajax.Responders = {
  responders: [],

  _each: function(iterator) {
    this.responders._each(iterator);
  },

  register: function(responderToAdd) {
    if (!this.include(responderToAdd))
      this.responders.push(responderToAdd);
  },

  unregister: function(responderToRemove) {
    this.responders = this.responders.without(responderToRemove);
  },

  dispatch: function(callback, request, transport, json) {
    this.each(function(responder) {
      if (responder[callback] && typeof responder[callback] == 'function') {
        try {
          responder[callback].apply(responder, [request, transport, json]);
        } catch (e) {}
      }
    });
  }
};

Object.extend(Ajax.Responders, Enumerable);

Ajax.Responders.register({
  onCreate: function() {
    Ajax.activeRequestCount++;
  },

  onComplete: function() {
    Ajax.activeRequestCount--;
  }
});

Ajax.Base = function() {};
Ajax.Base.prototype = {
  setOptions: function(options) {
    this.options = {
      method:       'post',
      asynchronous: true,
      parameters:   ''
    }
    Object.extend(this.options, options || {});
  },

  responseIsSuccess: function() {
    return this.transport.status == undefined
        || this.transport.status == 0
        || (this.transport.status >= 200 && this.transport.status < 300);
  },

  responseIsFailure: function() {
    return !this.responseIsSuccess();
  }
}

Ajax.Request = Class.create();
Ajax.Request.Events =
  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];

Ajax.Request.prototype = Object.extend(new Ajax.Base(), {
  initialize: function(url, options) {
    this.transport = Ajax.getTransport();
    this.setOptions(options);
    this.request(url);
  },

  request: function(url) {
    var parameters = this.options.parameters || '';
    if (parameters.length > 0) parameters += '&_=';

    try {
      this.url = url;
      if (this.options.method == 'get' && parameters.length > 0)
        this.url += (this.url.match(/\?/) ? '&' : '?') + parameters;

      Ajax.Responders.dispatch('onCreate', this, this.transport);

      this.transport.open(this.options.method, this.url,
        this.options.asynchronous);

      if (this.options.asynchronous) {
        this.transport.onreadystatechange = this.onStateChange.bind(this);
        setTimeout((function() {this.respondToReadyState(1)}).bind(this), 10);
      }

      this.setRequestHeaders();

      var body = this.options.postBody ? this.options.postBody : parameters;
      this.transport.send(this.options.method == 'post' ? body : null);

    } catch (e) {
      this.dispatchException(e);
    }
  },

  setRequestHeaders: function() {
    var requestHeaders =
      ['X-Requested-With', 'XMLHttpRequest',
       'X-Prototype-Version', Prototype.Version];

    if (this.options.method == 'post') {
      requestHeaders.push('Content-type',
        'application/x-www-form-urlencoded');

      /* Force "Connection: close" for Mozilla browsers to work around
       * a bug where XMLHttpReqeuest sends an incorrect Content-length
       * header. See Mozilla Bugzilla #246651.
       */
      if (this.transport.overrideMimeType)
        requestHeaders.push('Connection', 'close');
    }

    if (this.options.requestHeaders)
      requestHeaders.push.apply(requestHeaders, this.options.requestHeaders);

    for (var i = 0; i < requestHeaders.length; i += 2)
      this.transport.setRequestHeader(requestHeaders[i], requestHeaders[i+1]);
  },

  onStateChange: function() {
    var readyState = this.transport.readyState;
    if (readyState != 1)
      this.respondToReadyState(this.transport.readyState);
  },

  header: function(name) {
    try {
      return this.transport.getResponseHeader(name);
    } catch (e) {}
  },

  evalJSON: function() {
    try {
      return eval(this.header('X-JSON'));
    } catch (e) {}
  },

  evalResponse: function() {
    try {
      return eval(this.transport.responseText);
    } catch (e) {
      this.dispatchException(e);
    }
  },

  respondToReadyState: function(readyState) {
    var event = Ajax.Request.Events[readyState];
    var transport = this.transport, json = this.evalJSON();

    if (event == 'Complete') {
      try {
        (this.options['on' + this.transport.status]
         || this.options['on' + (this.responseIsSuccess() ? 'Success' : 'Failure')]
         || Prototype.emptyFunction)(transport, json);
      } catch (e) {
        this.dispatchException(e);
      }

      if ((this.header('Content-type') || '').match(/^text\/javascript/i))
        this.evalResponse();
    }

    try {
      (this.options['on' + event] || Prototype.emptyFunction)(transport, json);
      Ajax.Responders.dispatch('on' + event, this, transport, json);
    } catch (e) {
      this.dispatchException(e);
    }

    /* Avoid memory leak in MSIE: clean up the oncomplete event handler */
    if (event == 'Complete')
      this.transport.onreadystatechange = Prototype.emptyFunction;
  },

  dispatchException: function(exception) {
    (this.options.onException || Prototype.emptyFunction)(this, exception);
    Ajax.Responders.dispatch('onException', this, exception);
  }
});

Ajax.Updater = Class.create();

Object.extend(Object.extend(Ajax.Updater.prototype, Ajax.Request.prototype), {
  initialize: function(container, url, options) {
    this.containers = {
      success: container.success ? $(container.success) : $(container),
      failure: container.failure ? $(container.failure) :
        (container.success ? null : $(container))
    }

    this.transport = Ajax.getTransport();
    this.setOptions(options);

    var onComplete = this.options.onComplete || Prototype.emptyFunction;
    this.options.onComplete = (function(transport, object) {
      this.updateContent();
      onComplete(transport, object);
    }).bind(this);

    this.request(url);
  },

  updateContent: function() {
    var receiver = this.responseIsSuccess() ?
      this.containers.success : this.containers.failure;
    var response = this.transport.responseText;

    if (!this.options.evalScripts)
      response = response.stripScripts();

    if (receiver) {
      if (this.options.insertion) {
        new this.options.insertion(receiver, response);
      } else {
        Element.update(receiver, response);
      }
    }

    if (this.responseIsSuccess()) {
      if (this.onComplete)
        setTimeout(this.onComplete.bind(this), 10);
    }
  }
});

Ajax.PeriodicalUpdater = Class.create();
Ajax.PeriodicalUpdater.prototype = Object.extend(new Ajax.Base(), {
  initialize: function(container, url, options) {
    this.setOptions(options);
    this.onComplete = this.options.onComplete;

    this.frequency = (this.options.frequency || 2);
    this.decay = (this.options.decay || 1);

    this.updater = {};
    this.container = container;
    this.url = url;

    this.start();
  },

  start: function() {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },

  stop: function() {
    this.updater.onComplete = undefined;
    clearTimeout(this.timer);
    (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
  },

  updateComplete: function(request) {
    if (this.options.decay) {
      this.decay = (request.responseText == this.lastText ?
        this.decay * this.options.decay : 1);

      this.lastText = request.responseText;
    }
    this.timer = setTimeout(this.onTimerEvent.bind(this),
      this.decay * this.frequency * 1000);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  }
});
document.getElementsByClassName = function(className, parentElement) {
  var children = ($(parentElement) || document.body).getElementsByTagName('*');
  return $A(children).inject([], function(elements, child) {
    if (child.className.match(new RegExp("(^|\\s)" + className + "(\\s|$)")))
      elements.push(child);
    return elements;
  });
}

/*--------------------------------------------------------------------------*/

if (!window.Element) {
  var Element = new Object();
}

Object.extend(Element, {
  visible: function(element) {
    return $(element).style.display != 'none';
  },

  toggle: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      Element[Element.visible(element) ? 'hide' : 'show'](element);
    }
  },

  hide: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = 'none';
    }
  },

  show: function() {
    for (var i = 0; i < arguments.length; i++) {
      var element = $(arguments[i]);
      element.style.display = '';
    }
  },

  remove: function(element) {
    element = $(element);
    element.parentNode.removeChild(element);
  },

  update: function(element, html) {
    $(element).innerHTML = html.stripScripts();
    setTimeout(function() {html.evalScripts()}, 10);
  },

  getHeight: function(element) {
    element = $(element);
    return element.offsetHeight;
  },

  classNames: function(element) {
    return new Element.ClassNames(element);
  },

  hasClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).include(className);
  },

  addClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).add(className);
  },

  removeClassName: function(element, className) {
    if (!(element = $(element))) return;
    return Element.classNames(element).remove(className);
  },

  // removes whitespace-only text node children
  cleanWhitespace: function(element) {
    element = $(element);
    for (var i = 0; i < element.childNodes.length; i++) {
      var node = element.childNodes[i];
      if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
        Element.remove(node);
    }
  },

  empty: function(element) {
    return $(element).innerHTML.match(/^\s*$/);
  },

  scrollTo: function(element) {
    element = $(element);
    var x = element.x ? element.x : element.offsetLeft,
        y = element.y ? element.y : element.offsetTop;
    window.scrollTo(x, y);
  },

  getStyle: function(element, style) {
    element = $(element);
    var value = element.style[style.camelize()];
    if (!value) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        var css = document.defaultView.getComputedStyle(element, null);
        value = css ? css.getPropertyValue(style) : null;
      } else if (element.currentStyle) {
        value = element.currentStyle[style.camelize()];
      }
    }

    if (window.opera && ['left', 'top', 'right', 'bottom'].include(style))
      if (Element.getStyle(element, 'position') == 'static') value = 'auto';

    return value == 'auto' ? null : value;
  },

  setStyle: function(element, style) {
    element = $(element);
    for (name in style)
      element.style[name.camelize()] = style[name];
  },

  getDimensions: function(element) {
    element = $(element);
    if (Element.getStyle(element, 'display') != 'none')
      return {width: element.offsetWidth, height: element.offsetHeight};

    // All *Width and *Height properties give 0 on elements with display none,
    // so enable the element temporarily
    var els = element.style;
    var originalVisibility = els.visibility;
    var originalPosition = els.position;
    els.visibility = 'hidden';
    els.position = 'absolute';
    els.display = '';
    var originalWidth = element.clientWidth;
    var originalHeight = element.clientHeight;
    els.display = 'none';
    els.position = originalPosition;
    els.visibility = originalVisibility;
    return {width: originalWidth, height: originalHeight};
  },

  makePositioned: function(element) {
    element = $(element);
    var pos = Element.getStyle(element, 'position');
    if (pos == 'static' || !pos) {
      element._madePositioned = true;
      element.style.position = 'relative';
      // Opera returns the offset relative to the positioning context, when an
      // element is position relative but top and left have not been defined
      if (window.opera) {
        element.style.top = 0;
        element.style.left = 0;
      }
    }
  },

  undoPositioned: function(element) {
    element = $(element);
    if (element._madePositioned) {
      element._madePositioned = undefined;
      element.style.position =
        element.style.top =
        element.style.left =
        element.style.bottom =
        element.style.right = '';
    }
  },

  makeClipping: function(element) {
    element = $(element);
    if (element._overflow) return;
    element._overflow = element.style.overflow;
    if ((Element.getStyle(element, 'overflow') || 'visible') != 'hidden')
      element.style.overflow = 'hidden';
  },

  undoClipping: function(element) {
    element = $(element);
    if (element._overflow) return;
    element.style.overflow = element._overflow;
    element._overflow = undefined;
  }
});

var Toggle = new Object();
Toggle.display = Element.toggle;

/*--------------------------------------------------------------------------*/

Abstract.Insertion = function(adjacency) {
  this.adjacency = adjacency;
}

Abstract.Insertion.prototype = {
  initialize: function(element, content) {
    this.element = $(element);
    this.content = content.stripScripts();

    if (this.adjacency && this.element.insertAdjacentHTML) {
      try {
        this.element.insertAdjacentHTML(this.adjacency, this.content);
      } catch (e) {
        if (this.element.tagName.toLowerCase() == 'tbody' || this.element.tagName.toLowerCase() == 'tr') {
          this.insertContent(this.contentFromAnonymousTable());
        } else {
          throw e;
        }
      }
    } else {
      this.range = this.element.ownerDocument.createRange();
      if (this.initializeRange) this.initializeRange();
      this.insertContent([this.range.createContextualFragment(this.content)]);
    }

    setTimeout(function() {content.evalScripts()}, 10);
  },

  contentFromAnonymousTable: function() {
    var div = document.createElement('div');
    div.innerHTML = '<table><tbody>' + this.content + '</tbody></table>';
    return $A(div.childNodes[0].childNodes[0].childNodes);
  }
}

var Insertion = new Object();

Insertion.Before = Class.create();
Insertion.Before.prototype = Object.extend(new Abstract.Insertion('beforeBegin'), {
  initializeRange: function() {
    this.range.setStartBefore(this.element);
  },

  insertContent: function(fragments) {
    fragments.each((function(fragment) {
      this.element.parentNode.insertBefore(fragment, this.element);
    }).bind(this));
  }
});

Insertion.Top = Class.create();
Insertion.Top.prototype = Object.extend(new Abstract.Insertion('afterBegin'), {
  initializeRange: function() {
    this.range.selectNodeContents(this.element);
    this.range.collapse(true);
  },

  insertContent: function(fragments) {
    fragments.reverse(false).each((function(fragment) {
      this.element.insertBefore(fragment, this.element.firstChild);
    }).bind(this));
  }
});

Insertion.Bottom = Class.create();
Insertion.Bottom.prototype = Object.extend(new Abstract.Insertion('beforeEnd'), {
  initializeRange: function() {
    this.range.selectNodeContents(this.element);
    this.range.collapse(this.element);
  },

  insertContent: function(fragments) {
    fragments.each((function(fragment) {
      this.element.appendChild(fragment);
    }).bind(this));
  }
});

Insertion.After = Class.create();
Insertion.After.prototype = Object.extend(new Abstract.Insertion('afterEnd'), {
  initializeRange: function() {
    this.range.setStartAfter(this.element);
  },

  insertContent: function(fragments) {
    fragments.each((function(fragment) {
      this.element.parentNode.insertBefore(fragment,
        this.element.nextSibling);
    }).bind(this));
  }
});

/*--------------------------------------------------------------------------*/

Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function(element) {
    this.element = $(element);
  },

  _each: function(iterator) {
    this.element.className.split(/\s+/).select(function(name) {
      return name.length > 0;
    })._each(iterator);
  },

  set: function(className) {
    this.element.className = className;
  },

  add: function(classNameToAdd) {
    if (this.include(classNameToAdd)) return;
    this.set(this.toArray().concat(classNameToAdd).join(' '));
  },

  remove: function(classNameToRemove) {
    if (!this.include(classNameToRemove)) return;
    this.set(this.select(function(className) {
      return className != classNameToRemove;
    }).join(' '));
  },

  toString: function() {
    return this.toArray().join(' ');
  }
}

Object.extend(Element.ClassNames.prototype, Enumerable);
var Field = {
  clear: function() {
    for (var i = 0; i < arguments.length; i++)
      $(arguments[i]).value = '';
  },

  focus: function(element) {
    $(element).focus();
  },

  present: function() {
    for (var i = 0; i < arguments.length; i++)
      if ($(arguments[i]).value == '') return false;
    return true;
  },

  select: function(element) {
    $(element).select();
  },

  activate: function(element) {
    element = $(element);
    element.focus();
    if (element.select)
      element.select();
  }
}

/*--------------------------------------------------------------------------*/

var Form = {
  serialize: function(form) {
    var elements = Form.getElements($(form));
    var queryComponents = new Array();

    for (var i = 0; i < elements.length; i++) {
      var queryComponent = Form.Element.serialize(elements[i]);
      if (queryComponent)
        queryComponents.push(queryComponent);
    }

    return queryComponents.join('&');
  },

  getElements: function(form) {
    form = $(form);
    var elements = new Array();

    for (tagName in Form.Element.Serializers) {
      var tagElements = form.getElementsByTagName(tagName);
      for (var j = 0; j < tagElements.length; j++)
        elements.push(tagElements[j]);
    }
    return elements;
  },

  getInputs: function(form, typeName, name) {
    form = $(form);
    var inputs = form.getElementsByTagName('input');

    if (!typeName && !name)
      return inputs;

    var matchingInputs = new Array();
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if ((typeName && input.type != typeName) ||
          (name && input.name != name))
        continue;
      matchingInputs.push(input);
    }

    return matchingInputs;
  },

  disable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.blur();
      element.disabled = 'true';
    }
  },

  enable: function(form) {
    var elements = Form.getElements(form);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.disabled = '';
    }
  },

  findFirstElement: function(form) {
    return Form.getElements(form).find(function(element) {
      return element.type != 'hidden' && !element.disabled &&
        ['input', 'select', 'textarea'].include(element.tagName.toLowerCase());
    });
  },

  focusFirstElement: function(form) {
    Field.activate(Form.findFirstElement(form));
  },

  reset: function(form) {
    $(form).reset();
  }
}

Form.Element = {
  serialize: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter) {
      var key = encodeURIComponent(parameter[0]);
      if (key.length == 0) return;

      if (parameter[1].constructor != Array)
        parameter[1] = [parameter[1]];

      return parameter[1].map(function(value) {
        return key + '=' + encodeURIComponent(value);
      }).join('&');
    }
  },

  getValue: function(element) {
    element = $(element);
    var method = element.tagName.toLowerCase();
    var parameter = Form.Element.Serializers[method](element);

    if (parameter)
      return parameter[1];
  }
}

Form.Element.Serializers = {
  input: function(element) {
    switch (element.type.toLowerCase()) {
      case 'submit':
      case 'hidden':
      case 'password':
      case 'text':
        return Form.Element.Serializers.textarea(element);
      case 'checkbox':
      case 'radio':
        return Form.Element.Serializers.inputSelector(element);
    }
    return false;
  },

  inputSelector: function(element) {
    if (element.checked)
      return [element.name, element.value];
  },

  textarea: function(element) {
    return [element.name, element.value];
  },

  select: function(element) {
    return Form.Element.Serializers[element.type == 'select-one' ?
      'selectOne' : 'selectMany'](element);
  },

  selectOne: function(element) {
    var value = '', opt, index = element.selectedIndex;
    if (index >= 0) {
      opt = element.options[index];
      value = opt.value;
      if (!value && !('value' in opt))
        value = opt.text;
    }
    return [element.name, value];
  },

  selectMany: function(element) {
    var value = new Array();
    for (var i = 0; i < element.length; i++) {
      var opt = element.options[i];
      if (opt.selected) {
        var optValue = opt.value;
        if (!optValue && !('value' in opt))
          optValue = opt.text;
        value.push(optValue);
      }
    }
    return [element.name, value];
  }
}

/*--------------------------------------------------------------------------*/

var $F = Form.Element.getValue;

/*--------------------------------------------------------------------------*/

Abstract.TimedObserver = function() {}
Abstract.TimedObserver.prototype = {
  initialize: function(element, frequency, callback) {
    this.frequency = frequency;
    this.element   = $(element);
    this.callback  = callback;

    this.lastValue = this.getValue();
    this.registerCallback();
  },

  registerCallback: function() {
    setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
  },

  onTimerEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  }
}

Form.Element.Observer = Class.create();
Form.Element.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.Observer = Class.create();
Form.Observer.prototype = Object.extend(new Abstract.TimedObserver(), {
  getValue: function() {
    return Form.serialize(this.element);
  }
});

/*--------------------------------------------------------------------------*/

Abstract.EventObserver = function() {}
Abstract.EventObserver.prototype = {
  initialize: function(element, callback) {
    this.element  = $(element);
    this.callback = callback;

    this.lastValue = this.getValue();
    if (this.element.tagName.toLowerCase() == 'form')
      this.registerFormCallbacks();
    else
      this.registerCallback(this.element);
  },

  onElementEvent: function() {
    var value = this.getValue();
    if (this.lastValue != value) {
      this.callback(this.element, value);
      this.lastValue = value;
    }
  },

  registerFormCallbacks: function() {
    var elements = Form.getElements(this.element);
    for (var i = 0; i < elements.length; i++)
      this.registerCallback(elements[i]);
  },

  registerCallback: function(element) {
    if (element.type) {
      switch (element.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
          Event.observe(element, 'click', this.onElementEvent.bind(this));
          break;
        case 'password':
        case 'text':
        case 'textarea':
        case 'select-one':
        case 'select-multiple':
          Event.observe(element, 'change', this.onElementEvent.bind(this));
          break;
      }
    }
  }
}

Form.Element.EventObserver = Class.create();
Form.Element.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
  getValue: function() {
    return Form.Element.getValue(this.element);
  }
});

Form.EventObserver = Class.create();
Form.EventObserver.prototype = Object.extend(new Abstract.EventObserver(), {
  getValue: function() {
    return Form.serialize(this.element);
  }
});
if (!window.Event) {
  var Event = new Object();
}

Object.extend(Event, {
  KEY_BACKSPACE: 8,
  KEY_TAB:       9,
  KEY_RETURN:   13,
  KEY_ESC:      27,
  KEY_LEFT:     37,
  KEY_UP:       38,
  KEY_RIGHT:    39,
  KEY_DOWN:     40,
  KEY_DELETE:   46,

  element: function(event) {
    return event.target || event.srcElement;
  },

  isLeftClick: function(event) {
    return (((event.which) && (event.which == 1)) ||
            ((event.button) && (event.button == 1)));
  },

  pointerX: function(event) {
    return event.pageX || (event.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft));
  },

  pointerY: function(event) {
    return event.pageY || (event.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop));
  },

  stop: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.returnValue = false;
      event.cancelBubble = true;
    }
  },

  // find the first node with the given tagName, starting from the
  // node the event was triggered on; traverses the DOM upwards
  findElement: function(event, tagName) {
    var element = Event.element(event);
    while (element.parentNode && (!element.tagName ||
        (element.tagName.toUpperCase() != tagName.toUpperCase())))
      element = element.parentNode;
    return element;
  },

  observers: false,

  _observeAndCache: function(element, name, observer, useCapture) {
    if (!this.observers) this.observers = [];
    if (element.addEventListener) {
      this.observers.push([element, name, observer, useCapture]);
      element.addEventListener(name, observer, useCapture);
    } else if (element.attachEvent) {
      this.observers.push([element, name, observer, useCapture]);
      element.attachEvent('on' + name, observer);
    }
  },

  unloadCache: function() {
    if (!Event.observers) return;
    for (var i = 0; i < Event.observers.length; i++) {
      Event.stopObserving.apply(this, Event.observers[i]);
      Event.observers[i][0] = null;
    }
    Event.observers = false;
  },

  observe: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.attachEvent))
      name = 'keydown';

    this._observeAndCache(element, name, observer, useCapture);
  },

  stopObserving: function(element, name, observer, useCapture) {
    var element = $(element);
    useCapture = useCapture || false;

    if (name == 'keypress' &&
        (navigator.appVersion.match(/Konqueror|Safari|KHTML/)
        || element.detachEvent))
      name = 'keydown';

    if (element.removeEventListener) {
      element.removeEventListener(name, observer, useCapture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + name, observer);
    }
  }
});

/* prevent memory leaks in IE */
Event.observe(window, 'unload', Event.unloadCache, false);
var Position = {
  // set to true if needed, warning: firefox performance problems
  // NOT neeeded for page scrolling, only if draggable contained in
  // scrollable elements
  includeScrollOffsets: false,

  // must be called before calling withinIncludingScrolloffset, every time the
  // page is scrolled
  prepare: function() {
    this.deltaX =  window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft
                || 0;
    this.deltaY =  window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
  },

  realOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.scrollTop  || 0;
      valueL += element.scrollLeft || 0;
      element = element.parentNode;
    } while (element);
    return [valueL, valueT];
  },

  cumulativeOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  },

  positionedOffset: function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        p = Element.getStyle(element, 'position');
        if (p == 'relative' || p == 'absolute') break;
      }
    } while (element);
    return [valueL, valueT];
  },

  offsetParent: function(element) {
    if (element.offsetParent) return element.offsetParent;
    if (element == document.body) return element;

    while ((element = element.parentNode) && element != document.body)
      if (Element.getStyle(element, 'position') != 'static')
        return element;

    return document.body;
  },

  // caches x/y coordinate pair to use with overlap
  within: function(element, x, y) {
    if (this.includeScrollOffsets)
      return this.withinIncludingScrolloffsets(element, x, y);
    this.xcomp = x;
    this.ycomp = y;
    this.offset = this.cumulativeOffset(element);

    return (y >= this.offset[1] &&
            y <  this.offset[1] + element.offsetHeight &&
            x >= this.offset[0] &&
            x <  this.offset[0] + element.offsetWidth);
  },

  withinIncludingScrolloffsets: function(element, x, y) {
    var offsetcache = this.realOffset(element);

    this.xcomp = x + offsetcache[0] - this.deltaX;
    this.ycomp = y + offsetcache[1] - this.deltaY;
    this.offset = this.cumulativeOffset(element);

    return (this.ycomp >= this.offset[1] &&
            this.ycomp <  this.offset[1] + element.offsetHeight &&
            this.xcomp >= this.offset[0] &&
            this.xcomp <  this.offset[0] + element.offsetWidth);
  },

  // within must be called directly before
  overlap: function(mode, element) {
    if (!mode) return 0;
    if (mode == 'vertical')
      return ((this.offset[1] + element.offsetHeight) - this.ycomp) /
        element.offsetHeight;
    if (mode == 'horizontal')
      return ((this.offset[0] + element.offsetWidth) - this.xcomp) /
        element.offsetWidth;
  },

  clone: function(source, target) {
    source = $(source);
    target = $(target);
    target.style.position = 'absolute';
    var offsets = this.cumulativeOffset(source);
    target.style.top    = offsets[1] + 'px';
    target.style.left   = offsets[0] + 'px';
    target.style.width  = source.offsetWidth + 'px';
    target.style.height = source.offsetHeight + 'px';
  },

  page: function(forElement) {
    var valueT = 0, valueL = 0;

    var element = forElement;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;

      // Safari fix
      if (element.offsetParent==document.body)
        if (Element.getStyle(element,'position')=='absolute') break;

    } while (element = element.offsetParent);

    element = forElement;
    do {
      valueT -= element.scrollTop  || 0;
      valueL -= element.scrollLeft || 0;
    } while (element = element.parentNode);

    return [valueL, valueT];
  },

  clone: function(source, target) {
    var options = Object.extend({
      setLeft:    true,
      setTop:     true,
      setWidth:   true,
      setHeight:  true,
      offsetTop:  0,
      offsetLeft: 0
    }, arguments[2] || {})

    // find page position of source
    source = $(source);
    var p = Position.page(source);

    // find coordinate system to use
    target = $(target);
    var delta = [0, 0];
    var parent = null;
    // delta [0,0] will do fine with position: fixed elements,
    // position:absolute needs offsetParent deltas
    if (Element.getStyle(target,'position') == 'absolute') {
      parent = Position.offsetParent(target);
      delta = Position.page(parent);
    }

    // correct by body offsets (fixes Safari)
    if (parent == document.body) {
      delta[0] -= document.body.offsetLeft;
      delta[1] -= document.body.offsetTop;
    }

    // set position
    if(options.setLeft)   target.style.left  = (p[0] - delta[0] + options.offsetLeft) + 'px';
    if(options.setTop)    target.style.top   = (p[1] - delta[1] + options.offsetTop) + 'px';
    if(options.setWidth)  target.style.width = source.offsetWidth + 'px';
    if(options.setHeight) target.style.height = source.offsetHeight + 'px';
  },

  absolutize: function(element) {
    element = $(element);
    if (element.style.position == 'absolute') return;
    Position.prepare();

    var offsets = Position.positionedOffset(element);
    var top     = offsets[1];
    var left    = offsets[0];
    var width   = element.clientWidth;
    var height  = element.clientHeight;

    element._originalLeft   = left - parseFloat(element.style.left  || 0);
    element._originalTop    = top  - parseFloat(element.style.top || 0);
    element._originalWidth  = element.style.width;
    element._originalHeight = element.style.height;

    element.style.position = 'absolute';
    element.style.top    = top + 'px';;
    element.style.left   = left + 'px';;
    element.style.width  = width + 'px';;
    element.style.height = height + 'px';;
  },

  relativize: function(element) {
    element = $(element);
    if (element.style.position == 'relative') return;
    Position.prepare();

    element.style.position = 'relative';
    var top  = parseFloat(element.style.top  || 0) - (element._originalTop || 0);
    var left = parseFloat(element.style.left || 0) - (element._originalLeft || 0);

    element.style.top    = top + 'px';
    element.style.left   = left + 'px';
    element.style.height = element._originalHeight;
    element.style.width  = element._originalWidth;
  }
}

// Safari returns margins on body which is incorrect if the child is absolutely
// positioned.  For performance reasons, redefine Position.cumulativeOffset for
// KHTML/WebKit only.
if (/Konqueror|Safari|KHTML/.test(navigator.userAgent)) {
  Position.cumulativeOffset = function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      if (element.offsetParent == document.body)
        if (Element.getStyle(element, 'position') == 'absolute') break;

      element = element.offsetParent;
    } while (element);

    return [valueL, valueT];
  }
}
;//Confirmation prompt
function prompt_confirm() {
	var selValue = document.forms[0].elements["status"].value;
	if (selValue == "INACTIVE") {

		var bool = confirm("Are You sure you want to make user INACTIVE");

	} else {

		var bool = confirm("Are you sure you want to update user details ");
	}

	return bool;
}
//Close Window
function win_close() {
	self.close();
}


;
//# sourceMappingURL=scripts.js.map