"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [413], {
        31877: function(t, e, n) {
            var r = n(53328);
            r.kL.register(...r.zX), e.Z = r.kL
        },
        3940: function(t, e, n) {
            n.d(e, {
                $: function() {
                    return a
                },
                A: function() {
                    return ke
                },
                B: function() {
                    return tt
                },
                C: function() {
                    return ye
                },
                D: function() {
                    return v
                },
                E: function() {
                    return on
                },
                F: function() {
                    return Ue
                },
                G: function() {
                    return cn
                },
                H: function() {
                    return N
                },
                I: function() {
                    return o
                },
                J: function() {
                    return sn
                },
                K: function() {
                    return Ve
                },
                L: function() {
                    return H
                },
                M: function() {
                    return q
                },
                N: function() {
                    return p
                },
                O: function() {
                    return m
                },
                P: function() {
                    return j
                },
                Q: function() {
                    return ve
                },
                R: function() {
                    return J
                },
                S: function() {
                    return Jt
                },
                T: function() {
                    return W
                },
                U: function() {
                    return at
                },
                V: function() {
                    return te
                },
                W: function() {
                    return oe
                },
                X: function() {
                    return ce
                },
                Y: function() {
                    return ie
                },
                Z: function() {
                    return xe
                },
                _: function() {
                    return Ce
                },
                a: function() {
                    return me
                },
                a0: function() {
                    return s
                },
                a1: function() {
                    return Zt
                },
                a2: function() {
                    return O
                },
                a3: function() {
                    return I
                },
                a4: function() {
                    return Kt
                },
                a5: function() {
                    return $
                },
                a6: function() {
                    return Re
                },
                a7: function() {
                    return Ie
                },
                a8: function() {
                    return $e
                },
                a9: function() {
                    return T
                },
                aA: function() {
                    return bn
                },
                aB: function() {
                    return u
                },
                aC: function() {
                    return et
                },
                aD: function() {
                    return V
                },
                aE: function() {
                    return X
                },
                aF: function() {
                    return Q
                },
                aG: function() {
                    return K
                },
                aH: function() {
                    return G
                },
                aI: function() {
                    return Gt
                },
                aJ: function() {
                    return Oe
                },
                aK: function() {
                    return we
                },
                aa: function() {
                    return f
                },
                ab: function() {
                    return i
                },
                ac: function() {
                    return an
                },
                ad: function() {
                    return ee
                },
                ae: function() {
                    return E
                },
                af: function() {
                    return _
                },
                ag: function() {
                    return A
                },
                ah: function() {
                    return st
                },
                ai: function() {
                    return ge
                },
                aj: function() {
                    return Qe
                },
                ak: function() {
                    return _n
                },
                al: function() {
                    return vn
                },
                am: function() {
                    return fn
                },
                an: function() {
                    return ln
                },
                ao: function() {
                    return un
                },
                ap: function() {
                    return ae
                },
                aq: function() {
                    return se
                },
                ar: function() {
                    return ne
                },
                as: function() {
                    return fe
                },
                at: function() {
                    return pe
                },
                au: function() {
                    return be
                },
                av: function() {
                    return mn
                },
                aw: function() {
                    return rt
                },
                ax: function() {
                    return gn
                },
                ay: function() {
                    return pn
                },
                az: function() {
                    return c
                },
                b: function() {
                    return h
                },
                c: function() {
                    return Xt
                },
                d: function() {
                    return Ut
                },
                e: function() {
                    return lt
                },
                f: function() {
                    return C
                },
                g: function() {
                    return g
                },
                h: function() {
                    return _e
                },
                i: function() {
                    return d
                },
                j: function() {
                    return R
                },
                k: function() {
                    return l
                },
                l: function() {
                    return Pe
                },
                m: function() {
                    return y
                },
                n: function() {
                    return x
                },
                o: function() {
                    return dn
                },
                p: function() {
                    return ot
                },
                q: function() {
                    return Z
                },
                r: function() {
                    return r
                },
                s: function() {
                    return z
                },
                t: function() {
                    return U
                },
                u: function() {
                    return Se
                },
                v: function() {
                    return b
                },
                w: function() {
                    return it
                },
                x: function() {
                    return Me
                },
                y: function() {
                    return nn
                },
                z: function() {
                    return re
                }
            });
            const r = "undefined" === typeof window ? function(t) {
                return t()
            } : window.requestAnimationFrame;

            function o(t, e, n) {
                const o = n || (t => Array.prototype.slice.call(t));
                let i = !1,
                    a = [];
                return function(...n) {
                    a = o(n), i || (i = !0, r.call(window, (() => {
                        i = !1, t.apply(e, a)
                    })))
                }
            }

            function i(t, e) {
                let n;
                return function(...r) {
                    return e ? (clearTimeout(n), n = setTimeout(t, e, r)) : t.apply(this, r), e
                }
            }
            const a = t => "start" === t ? "left" : "end" === t ? "right" : "center",
                s = (t, e, n) => "start" === t ? e : "end" === t ? n : (e + n) / 2,
                c = (t, e, n, r) => t === (r ? "left" : "right") ? n : "center" === t ? (e + n) / 2 : e;

            function u() {}
            const f = function() {
                let t = 0;
                return function() {
                    return t++
                }
            }();

            function l(t) {
                return null === t || "undefined" === typeof t
            }

            function h(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                const e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
            }

            function d(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }
            const g = t => ("number" === typeof t || t instanceof Number) && isFinite(+t);

            function p(t, e) {
                return g(t) ? t : e
            }

            function b(t, e) {
                return "undefined" === typeof t ? e : t
            }
            const y = (t, e) => "string" === typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e,
                x = (t, e) => "string" === typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

            function m(t, e, n) {
                if (t && "function" === typeof t.call) return t.apply(n, e)
            }

            function v(t, e, n, r) {
                let o, i, a;
                if (h(t))
                    if (i = t.length, r)
                        for (o = i - 1; o >= 0; o--) e.call(n, t[o], o);
                    else
                        for (o = 0; o < i; o++) e.call(n, t[o], o);
                else if (d(t))
                    for (a = Object.keys(t), i = a.length, o = 0; o < i; o++) e.call(n, t[a[o]], a[o])
            }

            function _(t, e) {
                let n, r, o, i;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, r = t.length; n < r; ++n)
                    if (o = t[n], i = e[n], o.datasetIndex !== i.datasetIndex || o.index !== i.index) return !1;
                return !0
            }

            function w(t) {
                if (h(t)) return t.map(w);
                if (d(t)) {
                    const e = Object.create(null),
                        n = Object.keys(t),
                        r = n.length;
                    let o = 0;
                    for (; o < r; ++o) e[n[o]] = w(t[n[o]]);
                    return e
                }
                return t
            }

            function M(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }

            function k(t, e, n, r) {
                if (!M(t)) return;
                const o = e[t],
                    i = n[t];
                d(o) && d(i) ? O(o, i, r) : e[t] = w(i)
            }

            function O(t, e, n) {
                const r = h(e) ? e : [e],
                    o = r.length;
                if (!d(t)) return t;
                const i = (n = n || {}).merger || k;
                for (let a = 0; a < o; ++a) {
                    if (!d(e = r[a])) continue;
                    const o = Object.keys(e);
                    for (let r = 0, a = o.length; r < a; ++r) i(o[r], t, e, n)
                }
                return t
            }

            function T(t, e) {
                return O(t, e, {
                    merger: P
                })
            }

            function P(t, e, n) {
                if (!M(t)) return;
                const r = e[t],
                    o = n[t];
                d(r) && d(o) ? T(r, o) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = w(o))
            }

            function S(t, e) {
                const n = t.indexOf(".", e);
                return -1 === n ? t.length : n
            }

            function C(t, e) {
                if ("" === e) return t;
                let n = 0,
                    r = S(e, n);
                for (; t && r > n;) t = t[e.substr(n, r - n)], n = r + 1, r = S(e, n);
                return t
            }

            function I(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            const R = t => "undefined" !== typeof t,
                $ = t => "function" === typeof t,
                E = (t, e) => {
                    if (t.size !== e.size) return !1;
                    for (const n of t)
                        if (!e.has(n)) return !1;
                    return !0
                };

            function A(t) {
                return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
            }
            const j = Math.PI,
                W = 2 * j,
                B = W + j,
                F = Number.POSITIVE_INFINITY,
                Y = j / 180,
                N = j / 2,
                D = j / 4,
                L = 2 * j / 3,
                H = Math.log10,
                z = Math.sign;

            function X(t) {
                const e = Math.round(t);
                t = K(t, e, t / 1e3) ? e : t;
                const n = Math.pow(10, Math.floor(H(t))),
                    r = t / n;
                return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n
            }

            function q(t) {
                const e = [],
                    n = Math.sqrt(t);
                let r;
                for (r = 1; r < n; r++) t % r === 0 && (e.push(r), e.push(t / r));
                return n === (0 | n) && e.push(n), e.sort(((t, e) => t - e)).pop(), e
            }

            function Z(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function K(t, e, n) {
                return Math.abs(t - e) < n
            }

            function Q(t, e) {
                const n = Math.round(t);
                return n - e <= t && n + e >= t
            }

            function V(t, e, n) {
                let r, o, i;
                for (r = 0, o = t.length; r < o; r++) i = t[r][n], isNaN(i) || (e.min = Math.min(e.min, i), e.max = Math.max(e.max, i))
            }

            function U(t) {
                return t * (j / 180)
            }

            function J(t) {
                return t * (180 / j)
            }

            function G(t) {
                if (!g(t)) return;
                let e = 1,
                    n = 0;
                for (; Math.round(t * e) / e !== t;) e *= 10, n++;
                return n
            }

            function tt(t, e) {
                const n = e.x - t.x,
                    r = e.y - t.y,
                    o = Math.sqrt(n * n + r * r);
                let i = Math.atan2(r, n);
                return i < -.5 * j && (i += W), {
                    angle: i,
                    distance: o
                }
            }

            function et(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }

            function nt(t, e) {
                return (t - e + B) % W - j
            }

            function rt(t) {
                return (t % W + W) % W
            }

            function ot(t, e, n, r) {
                const o = rt(t),
                    i = rt(e),
                    a = rt(n),
                    s = rt(i - o),
                    c = rt(a - o),
                    u = rt(o - i),
                    f = rt(o - a);
                return o === i || o === a || r && i === a || s > c && u < f
            }

            function it(t, e, n) {
                return Math.max(e, Math.min(n, t))
            }

            function at(t) {
                return it(t, -32768, 32767)
            }

            function st(t, e, n, r = 1e-6) {
                return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r
            }
            const ct = t => 0 === t || 1 === t,
                ut = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * W / n),
                ft = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * W / n) + 1,
                lt = {
                    linear: t => t,
                    easeInQuad: t => t * t,
                    easeOutQuad: t => -t * (t - 2),
                    easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
                    easeInCubic: t => t * t * t,
                    easeOutCubic: t => (t -= 1) * t * t + 1,
                    easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
                    easeInQuart: t => t * t * t * t,
                    easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                    easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
                    easeInQuint: t => t * t * t * t * t,
                    easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                    easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
                    easeInSine: t => 1 - Math.cos(t * N),
                    easeOutSine: t => Math.sin(t * N),
                    easeInOutSine: t => -.5 * (Math.cos(j * t) - 1),
                    easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
                    easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
                    easeInOutExpo: t => ct(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                    easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
                    easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                    easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                    easeInElastic: t => ct(t) ? t : ut(t, .075, .3),
                    easeOutElastic: t => ct(t) ? t : ft(t, .075, .3),
                    easeInOutElastic(t) {
                        const e = .1125;
                        return ct(t) ? t : t < .5 ? .5 * ut(2 * t, e, .45) : .5 + .5 * ft(2 * t - 1, e, .45)
                    },
                    easeInBack(t) {
                        const e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    easeOutBack(t) {
                        const e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    easeInOutBack(t) {
                        let e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: t => 1 - lt.easeOutBounce(1 - t),
                    easeOutBounce(t) {
                        const e = 7.5625,
                            n = 2.75;
                        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
                    },
                    easeInOutBounce: t => t < .5 ? .5 * lt.easeInBounce(2 * t) : .5 * lt.easeOutBounce(2 * t - 1) + .5
                },
                ht = {
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
                    A: 10,
                    B: 11,
                    C: 12,
                    D: 13,
                    E: 14,
                    F: 15,
                    a: 10,
                    b: 11,
                    c: 12,
                    d: 13,
                    e: 14,
                    f: 15
                },
                dt = "0123456789ABCDEF",
                gt = t => dt[15 & t],
                pt = t => dt[(240 & t) >> 4] + dt[15 & t],
                bt = t => (240 & t) >> 4 === (15 & t);

            function yt(t) {
                var e = function(t) {
                    return bt(t.r) && bt(t.g) && bt(t.b) && bt(t.a)
                }(t) ? gt : pt;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t
            }

            function xt(t) {
                return t + .5 | 0
            }
            const mt = (t, e, n) => Math.max(Math.min(t, n), e);

            function vt(t) {
                return mt(xt(2.55 * t), 0, 255)
            }

            function _t(t) {
                return mt(xt(255 * t), 0, 255)
            }

            function wt(t) {
                return mt(xt(t / 2.55) / 100, 0, 1)
            }

            function Mt(t) {
                return mt(xt(100 * t), 0, 100)
            }
            const kt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            const Ot = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function Tt(t, e, n) {
                const r = e * Math.min(n, 1 - n),
                    o = (e, o = (e + t / 30) % 12) => n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
                return [o(0), o(8), o(4)]
            }

            function Pt(t, e, n) {
                const r = (r, o = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(o, 4 - o, 1), 0);
                return [r(5), r(3), r(1)]
            }

            function St(t, e, n) {
                const r = Tt(t, 1, .5);
                let o;
                for (e + n > 1 && (o = 1 / (e + n), e *= o, n *= o), o = 0; o < 3; o++) r[o] *= 1 - e - n, r[o] += e;
                return r
            }

            function Ct(t) {
                const e = t.r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    o = Math.max(e, n, r),
                    i = Math.min(e, n, r),
                    a = (o + i) / 2;
                let s, c, u;
                return o !== i && (u = o - i, c = a > .5 ? u / (2 - o - i) : u / (o + i), s = o === e ? (n - r) / u + (n < r ? 6 : 0) : o === n ? (r - e) / u + 2 : (e - n) / u + 4, s = 60 * s + .5), [0 | s, c || 0, a]
            }

            function It(t, e, n, r) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(_t)
            }

            function Rt(t, e, n) {
                return It(Tt, t, e, n)
            }

            function $t(t) {
                return (t % 360 + 360) % 360
            }

            function Et(t) {
                const e = Ot.exec(t);
                let n, r = 255;
                if (!e) return;
                e[5] !== n && (r = e[6] ? vt(+e[5]) : _t(+e[5]));
                const o = $t(+e[2]),
                    i = +e[3] / 100,
                    a = +e[4] / 100;
                return n = "hwb" === e[1] ? function(t, e, n) {
                    return It(St, t, e, n)
                }(o, i, a) : "hsv" === e[1] ? function(t, e, n) {
                    return It(Pt, t, e, n)
                }(o, i, a) : Rt(o, i, a), {
                    r: n[0],
                    g: n[1],
                    b: n[2],
                    a: r
                }
            }
            const At = {
                    x: "dark",
                    Z: "light",
                    Y: "re",
                    X: "blu",
                    W: "gr",
                    V: "medium",
                    U: "slate",
                    A: "ee",
                    T: "ol",
                    S: "or",
                    B: "ra",
                    C: "lateg",
                    D: "ights",
                    R: "in",
                    Q: "turquois",
                    E: "hi",
                    P: "ro",
                    O: "al",
                    N: "le",
                    M: "de",
                    L: "yello",
                    F: "en",
                    K: "ch",
                    G: "arks",
                    H: "ea",
                    I: "ightg",
                    J: "wh"
                },
                jt = {
                    OiceXe: "f0f8ff",
                    antiquewEte: "faebd7",
                    aqua: "ffff",
                    aquamarRe: "7fffd4",
                    azuY: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "0",
                    blanKedOmond: "ffebcd",
                    Xe: "ff",
                    XeviTet: "8a2be2",
                    bPwn: "a52a2a",
                    burlywood: "deb887",
                    caMtXe: "5f9ea0",
                    KartYuse: "7fff00",
                    KocTate: "d2691e",
                    cSO: "ff7f50",
                    cSnflowerXe: "6495ed",
                    cSnsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "ffff",
                    xXe: "8b",
                    xcyan: "8b8b",
                    xgTMnPd: "b8860b",
                    xWay: "a9a9a9",
                    xgYF: "6400",
                    xgYy: "a9a9a9",
                    xkhaki: "bdb76b",
                    xmagFta: "8b008b",
                    xTivegYF: "556b2f",
                    xSange: "ff8c00",
                    xScEd: "9932cc",
                    xYd: "8b0000",
                    xsOmon: "e9967a",
                    xsHgYF: "8fbc8f",
                    xUXe: "483d8b",
                    xUWay: "2f4f4f",
                    xUgYy: "2f4f4f",
                    xQe: "ced1",
                    xviTet: "9400d3",
                    dAppRk: "ff1493",
                    dApskyXe: "bfff",
                    dimWay: "696969",
                    dimgYy: "696969",
                    dodgerXe: "1e90ff",
                    fiYbrick: "b22222",
                    flSOwEte: "fffaf0",
                    foYstWAn: "228b22",
                    fuKsia: "ff00ff",
                    gaRsbSo: "dcdcdc",
                    ghostwEte: "f8f8ff",
                    gTd: "ffd700",
                    gTMnPd: "daa520",
                    Way: "808080",
                    gYF: "8000",
                    gYFLw: "adff2f",
                    gYy: "808080",
                    honeyMw: "f0fff0",
                    hotpRk: "ff69b4",
                    RdianYd: "cd5c5c",
                    Rdigo: "4b0082",
                    ivSy: "fffff0",
                    khaki: "f0e68c",
                    lavFMr: "e6e6fa",
                    lavFMrXsh: "fff0f5",
                    lawngYF: "7cfc00",
                    NmoncEffon: "fffacd",
                    ZXe: "add8e6",
                    ZcSO: "f08080",
                    Zcyan: "e0ffff",
                    ZgTMnPdLw: "fafad2",
                    ZWay: "d3d3d3",
                    ZgYF: "90ee90",
                    ZgYy: "d3d3d3",
                    ZpRk: "ffb6c1",
                    ZsOmon: "ffa07a",
                    ZsHgYF: "20b2aa",
                    ZskyXe: "87cefa",
                    ZUWay: "778899",
                    ZUgYy: "778899",
                    ZstAlXe: "b0c4de",
                    ZLw: "ffffe0",
                    lime: "ff00",
                    limegYF: "32cd32",
                    lRF: "faf0e6",
                    magFta: "ff00ff",
                    maPon: "800000",
                    VaquamarRe: "66cdaa",
                    VXe: "cd",
                    VScEd: "ba55d3",
                    VpurpN: "9370db",
                    VsHgYF: "3cb371",
                    VUXe: "7b68ee",
                    VsprRggYF: "fa9a",
                    VQe: "48d1cc",
                    VviTetYd: "c71585",
                    midnightXe: "191970",
                    mRtcYam: "f5fffa",
                    mistyPse: "ffe4e1",
                    moccasR: "ffe4b5",
                    navajowEte: "ffdead",
                    navy: "80",
                    Tdlace: "fdf5e6",
                    Tive: "808000",
                    TivedBb: "6b8e23",
                    Sange: "ffa500",
                    SangeYd: "ff4500",
                    ScEd: "da70d6",
                    pOegTMnPd: "eee8aa",
                    pOegYF: "98fb98",
                    pOeQe: "afeeee",
                    pOeviTetYd: "db7093",
                    papayawEp: "ffefd5",
                    pHKpuff: "ffdab9",
                    peru: "cd853f",
                    pRk: "ffc0cb",
                    plum: "dda0dd",
                    powMrXe: "b0e0e6",
                    purpN: "800080",
                    YbeccapurpN: "663399",
                    Yd: "ff0000",
                    Psybrown: "bc8f8f",
                    PyOXe: "4169e1",
                    saddNbPwn: "8b4513",
                    sOmon: "fa8072",
                    sandybPwn: "f4a460",
                    sHgYF: "2e8b57",
                    sHshell: "fff5ee",
                    siFna: "a0522d",
                    silver: "c0c0c0",
                    skyXe: "87ceeb",
                    UXe: "6a5acd",
                    UWay: "708090",
                    UgYy: "708090",
                    snow: "fffafa",
                    sprRggYF: "ff7f",
                    stAlXe: "4682b4",
                    tan: "d2b48c",
                    teO: "8080",
                    tEstN: "d8bfd8",
                    tomato: "ff6347",
                    Qe: "40e0d0",
                    viTet: "ee82ee",
                    JHt: "f5deb3",
                    wEte: "ffffff",
                    wEtesmoke: "f5f5f5",
                    Lw: "ffff00",
                    LwgYF: "9acd32"
                };
            let Wt;

            function Bt(t) {
                Wt || (Wt = function() {
                    const t = {},
                        e = Object.keys(jt),
                        n = Object.keys(At);
                    let r, o, i, a, s;
                    for (r = 0; r < e.length; r++) {
                        for (a = s = e[r], o = 0; o < n.length; o++) i = n[o], s = s.replace(i, At[i]);
                        i = parseInt(jt[a], 16), t[s] = [i >> 16 & 255, i >> 8 & 255, 255 & i]
                    }
                    return t
                }(), Wt.transparent = [0, 0, 0, 0]);
                const e = Wt[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                }
            }

            function Ft(t, e, n) {
                if (t) {
                    let r = Ct(t);
                    r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1)), r = Rt(r), t.r = r[0], t.g = r[1], t.b = r[2]
                }
            }

            function Yt(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }

            function Nt(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (e.a = _t(t[3]))) : (e = Yt(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = _t(e.a), e
            }

            function Dt(t) {
                return "r" === t.charAt(0) ? function(t) {
                    const e = kt.exec(t);
                    let n, r, o, i = 255;
                    if (e) {
                        if (e[7] !== n) {
                            const t = +e[7];
                            i = 255 & (e[8] ? vt(t) : 255 * t)
                        }
                        return n = +e[1], r = +e[3], o = +e[5], n = 255 & (e[2] ? vt(n) : n), r = 255 & (e[4] ? vt(r) : r), o = 255 & (e[6] ? vt(o) : o), {
                            r: n,
                            g: r,
                            b: o,
                            a: i
                        }
                    }
                }(t) : Et(t)
            }
            class Lt {
                constructor(t) {
                    if (t instanceof Lt) return t;
                    const e = typeof t;
                    let n;
                    "object" === e ? n = Nt(t) : "string" === e && (n = function(t) {
                        var e, n = t.length;
                        return "#" === t[0] && (4 === n || 5 === n ? e = {
                            r: 255 & 17 * ht[t[1]],
                            g: 255 & 17 * ht[t[2]],
                            b: 255 & 17 * ht[t[3]],
                            a: 5 === n ? 17 * ht[t[4]] : 255
                        } : 7 !== n && 9 !== n || (e = {
                            r: ht[t[1]] << 4 | ht[t[2]],
                            g: ht[t[3]] << 4 | ht[t[4]],
                            b: ht[t[5]] << 4 | ht[t[6]],
                            a: 9 === n ? ht[t[7]] << 4 | ht[t[8]] : 255
                        })), e
                    }(t) || Bt(t) || Dt(t)), this._rgb = n, this._valid = !!n
                }
                get valid() {
                    return this._valid
                }
                get rgb() {
                    var t = Yt(this._rgb);
                    return t && (t.a = wt(t.a)), t
                }
                set rgb(t) {
                    this._rgb = Nt(t)
                }
                rgbString() {
                    return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : this._rgb;
                    var t
                }
                hexString() {
                    return this._valid ? yt(this._rgb) : this._rgb
                }
                hslString() {
                    return this._valid ? function(t) {
                        if (!t) return;
                        const e = Ct(t),
                            n = e[0],
                            r = Mt(e[1]),
                            o = Mt(e[2]);
                        return t.a < 255 ? `hsla(${n}, ${r}%, ${o}%, ${wt(t.a)})` : `hsl(${n}, ${r}%, ${o}%)`
                    }(this._rgb) : this._rgb
                }
                mix(t, e) {
                    const n = this;
                    if (t) {
                        const r = n.rgb,
                            o = t.rgb;
                        let i;
                        const a = e === i ? .5 : e,
                            s = 2 * a - 1,
                            c = r.a - o.a,
                            u = ((s * c === -1 ? s : (s + c) / (1 + s * c)) + 1) / 2;
                        i = 1 - u, r.r = 255 & u * r.r + i * o.r + .5, r.g = 255 & u * r.g + i * o.g + .5, r.b = 255 & u * r.b + i * o.b + .5, r.a = a * r.a + (1 - a) * o.a, n.rgb = r
                    }
                    return n
                }
                clone() {
                    return new Lt(this.rgb)
                }
                alpha(t) {
                    return this._rgb.a = _t(t), this
                }
                clearer(t) {
                    return this._rgb.a *= 1 - t, this
                }
                greyscale() {
                    const t = this._rgb,
                        e = xt(.3 * t.r + .59 * t.g + .11 * t.b);
                    return t.r = t.g = t.b = e, this
                }
                opaquer(t) {
                    return this._rgb.a *= 1 + t, this
                }
                negate() {
                    const t = this._rgb;
                    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
                }
                lighten(t) {
                    return Ft(this._rgb, 2, t), this
                }
                darken(t) {
                    return Ft(this._rgb, 2, -t), this
                }
                saturate(t) {
                    return Ft(this._rgb, 1, t), this
                }
                desaturate(t) {
                    return Ft(this._rgb, 1, -t), this
                }
                rotate(t) {
                    return function(t, e) {
                        var n = Ct(t);
                        n[0] = $t(n[0] + e), n = Rt(n), t.r = n[0], t.g = n[1], t.b = n[2]
                    }(this._rgb, t), this
                }
            }

            function Ht(t) {
                return new Lt(t)
            }
            const zt = t => t instanceof CanvasGradient || t instanceof CanvasPattern;

            function Xt(t) {
                return zt(t) ? t : Ht(t)
            }

            function qt(t) {
                return zt(t) ? t : Ht(t).saturate(.5).darken(.1).hexString()
            }
            const Zt = Object.create(null),
                Kt = Object.create(null);

            function Qt(t, e) {
                if (!e) return t;
                const n = e.split(".");
                for (let r = 0, o = n.length; r < o; ++r) {
                    const e = n[r];
                    t = t[e] || (t[e] = Object.create(null))
                }
                return t
            }

            function Vt(t, e, n) {
                return "string" === typeof e ? O(Qt(t, e), n) : O(Qt(t, ""), e)
            }
            var Ut = new class {
                constructor(t) {
                    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = (t, e) => qt(e.backgroundColor), this.hoverBorderColor = (t, e) => qt(e.borderColor), this.hoverColor = (t, e) => qt(e.color), this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t)
                }
                set(t, e) {
                    return Vt(this, t, e)
                }
                get(t) {
                    return Qt(this, t)
                }
                describe(t, e) {
                    return Vt(Kt, t, e)
                }
                override(t, e) {
                    return Vt(Zt, t, e)
                }
                route(t, e, n, r) {
                    const o = Qt(this, t),
                        i = Qt(this, n),
                        a = "_" + e;
                    Object.defineProperties(o, {
                        [a]: {
                            value: o[e],
                            writable: !0
                        },
                        [e]: {
                            enumerable: !0,
                            get() {
                                const t = this[a],
                                    e = i[r];
                                return d(t) ? Object.assign({}, e, t) : b(t, e)
                            },
                            set(t) {
                                this[a] = t
                            }
                        }
                    })
                }
            }({
                _scriptable: t => !t.startsWith("on"),
                _indexable: t => "events" !== t,
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            });

            function Jt(t, e, n, r, o) {
                let i = e[o];
                return i || (i = e[o] = t.measureText(o).width, n.push(o)), i > r && (r = i), r
            }

            function Gt(t, e, n, r) {
                let o = (r = r || {}).data = r.data || {},
                    i = r.garbageCollect = r.garbageCollect || [];
                r.font !== e && (o = r.data = {}, i = r.garbageCollect = [], r.font = e), t.save(), t.font = e;
                let a = 0;
                const s = n.length;
                let c, u, f, l, d;
                for (c = 0; c < s; c++)
                    if (l = n[c], void 0 !== l && null !== l && !0 !== h(l)) a = Jt(t, o, i, a, l);
                    else if (h(l))
                    for (u = 0, f = l.length; u < f; u++) d = l[u], void 0 === d || null === d || h(d) || (a = Jt(t, o, i, a, d));
                t.restore();
                const g = i.length / 2;
                if (g > n.length) {
                    for (c = 0; c < g; c++) delete o[i[c]];
                    i.splice(0, g)
                }
                return a
            }

            function te(t, e, n) {
                const r = t.currentDevicePixelRatio,
                    o = 0 !== n ? Math.max(n / 2, .5) : 0;
                return Math.round((e - o) * r) / r + o
            }

            function ee(t, e) {
                (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
            }

            function ne(t, e, n, r) {
                let o, i, a, s, c;
                const u = e.pointStyle,
                    f = e.rotation,
                    l = e.radius;
                let h = (f || 0) * Y;
                if (u && "object" === typeof u && (o = u.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(n, r), t.rotate(h), t.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), void t.restore();
                if (!(isNaN(l) || l <= 0)) {
                    switch (t.beginPath(), u) {
                        default: t.arc(n, r, l, 0, W),
                        t.closePath();
                        break;
                        case "triangle":
                                t.moveTo(n + Math.sin(h) * l, r - Math.cos(h) * l),
                            h += L,
                            t.lineTo(n + Math.sin(h) * l, r - Math.cos(h) * l),
                            h += L,
                            t.lineTo(n + Math.sin(h) * l, r - Math.cos(h) * l),
                            t.closePath();
                            break;
                        case "rectRounded":
                                c = .516 * l,
                            s = l - c,
                            i = Math.cos(h + D) * s,
                            a = Math.sin(h + D) * s,
                            t.arc(n - i, r - a, c, h - j, h - N),
                            t.arc(n + a, r - i, c, h - N, h),
                            t.arc(n + i, r + a, c, h, h + N),
                            t.arc(n - a, r + i, c, h + N, h + j),
                            t.closePath();
                            break;
                        case "rect":
                                if (!f) {
                                s = Math.SQRT1_2 * l, t.rect(n - s, r - s, 2 * s, 2 * s);
                                break
                            }h += D;
                        case "rectRot":
                                i = Math.cos(h) * l,
                            a = Math.sin(h) * l,
                            t.moveTo(n - i, r - a),
                            t.lineTo(n + a, r - i),
                            t.lineTo(n + i, r + a),
                            t.lineTo(n - a, r + i),
                            t.closePath();
                            break;
                        case "crossRot":
                                h += D;
                        case "cross":
                                i = Math.cos(h) * l,
                            a = Math.sin(h) * l,
                            t.moveTo(n - i, r - a),
                            t.lineTo(n + i, r + a),
                            t.moveTo(n + a, r - i),
                            t.lineTo(n - a, r + i);
                            break;
                        case "star":
                                i = Math.cos(h) * l,
                            a = Math.sin(h) * l,
                            t.moveTo(n - i, r - a),
                            t.lineTo(n + i, r + a),
                            t.moveTo(n + a, r - i),
                            t.lineTo(n - a, r + i),
                            h += D,
                            i = Math.cos(h) * l,
                            a = Math.sin(h) * l,
                            t.moveTo(n - i, r - a),
                            t.lineTo(n + i, r + a),
                            t.moveTo(n + a, r - i),
                            t.lineTo(n - a, r + i);
                            break;
                        case "line":
                                i = Math.cos(h) * l,
                            a = Math.sin(h) * l,
                            t.moveTo(n - i, r - a),
                            t.lineTo(n + i, r + a);
                            break;
                        case "dash":
                                t.moveTo(n, r),
                            t.lineTo(n + Math.cos(h) * l, r + Math.sin(h) * l)
                    }
                    t.fill(), e.borderWidth > 0 && t.stroke()
                }
            }

            function re(t, e, n) {
                return n = n || .5, !e || t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
            }

            function oe(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            }

            function ie(t) {
                t.restore()
            }

            function ae(t, e, n, r, o) {
                if (!e) return t.lineTo(n.x, n.y);
                if ("middle" === o) {
                    const r = (e.x + n.x) / 2;
                    t.lineTo(r, e.y), t.lineTo(r, n.y)
                } else "after" === o !== !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                t.lineTo(n.x, n.y)
            }

            function se(t, e, n, r) {
                if (!e) return t.lineTo(n.x, n.y);
                t.bezierCurveTo(r ? e.cp1x : e.cp2x, r ? e.cp1y : e.cp2y, r ? n.cp2x : n.cp1x, r ? n.cp2y : n.cp1y, n.x, n.y)
            }

            function ce(t, e, n, r, o, i = {}) {
                const a = h(e) ? e : [e],
                    s = i.strokeWidth > 0 && "" !== i.strokeColor;
                let c, u;
                for (t.save(), t.font = o.string, function(t, e) {
                        e.translation && t.translate(e.translation[0], e.translation[1]);
                        l(e.rotation) || t.rotate(e.rotation);
                        e.color && (t.fillStyle = e.color);
                        e.textAlign && (t.textAlign = e.textAlign);
                        e.textBaseline && (t.textBaseline = e.textBaseline)
                    }(t, i), c = 0; c < a.length; ++c) u = a[c], s && (i.strokeColor && (t.strokeStyle = i.strokeColor), l(i.strokeWidth) || (t.lineWidth = i.strokeWidth), t.strokeText(u, n, r, i.maxWidth)), t.fillText(u, n, r, i.maxWidth), ue(t, n, r, u, i), r += o.lineHeight;
                t.restore()
            }

            function ue(t, e, n, r, o) {
                if (o.strikethrough || o.underline) {
                    const i = t.measureText(r),
                        a = e - i.actualBoundingBoxLeft,
                        s = e + i.actualBoundingBoxRight,
                        c = n - i.actualBoundingBoxAscent,
                        u = n + i.actualBoundingBoxDescent,
                        f = o.strikethrough ? (c + u) / 2 : u;
                    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = o.decorationWidth || 2, t.moveTo(a, f), t.lineTo(s, f), t.stroke()
                }
            }

            function fe(t, e) {
                const {
                    x: n,
                    y: r,
                    w: o,
                    h: i,
                    radius: a
                } = e;
                t.arc(n + a.topLeft, r + a.topLeft, a.topLeft, -N, j, !0), t.lineTo(n, r + i - a.bottomLeft), t.arc(n + a.bottomLeft, r + i - a.bottomLeft, a.bottomLeft, j, N, !0), t.lineTo(n + o - a.bottomRight, r + i), t.arc(n + o - a.bottomRight, r + i - a.bottomRight, a.bottomRight, N, 0, !0), t.lineTo(n + o, r + a.topRight), t.arc(n + o - a.topRight, r + a.topRight, a.topRight, 0, -N, !0), t.lineTo(n + a.topLeft, r)
            }
            const le = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
                he = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

            function de(t, e) {
                const n = ("" + t).match(le);
                if (!n || "normal" === n[1]) return 1.2 * e;
                switch (t = +n[2], n[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            }

            function ge(t, e) {
                const n = {},
                    r = d(e),
                    o = r ? Object.keys(e) : e,
                    i = d(t) ? r ? n => b(t[n], t[e[n]]) : e => t[e] : () => t;
                for (const a of o) n[a] = +i(a) || 0;
                return n
            }

            function pe(t) {
                return ge(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function be(t) {
                return ge(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function ye(t) {
                const e = pe(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
            }

            function xe(t, e) {
                t = t || {}, e = e || Ut.font;
                let n = b(t.size, e.size);
                "string" === typeof n && (n = parseInt(n, 10));
                let r = b(t.style, e.style);
                r && !("" + r).match(he) && (console.warn('Invalid font style specified: "' + r + '"'), r = "");
                const o = {
                    family: b(t.family, e.family),
                    lineHeight: de(b(t.lineHeight, e.lineHeight), n),
                    size: n,
                    style: r,
                    weight: b(t.weight, e.weight),
                    string: ""
                };
                return o.string = function(t) {
                    return !t || l(t.size) || l(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(o), o
            }

            function me(t, e, n, r) {
                let o, i, a, s = !0;
                for (o = 0, i = t.length; o < i; ++o)
                    if (a = t[o], void 0 !== a && (void 0 !== e && "function" === typeof a && (a = a(e), s = !1), void 0 !== n && h(a) && (a = a[n % a.length], s = !1), void 0 !== a)) return r && !s && (r.cacheable = !1), a
            }

            function ve(t, e, n) {
                const {
                    min: r,
                    max: o
                } = t, i = x(e, (o - r) / 2), a = (t, e) => n && 0 === t ? 0 : t + e;
                return {
                    min: a(r, -Math.abs(i)),
                    max: a(o, i)
                }
            }

            function _e(t, e) {
                return Object.assign(Object.create(t), e)
            }

            function we(t, e, n) {
                n = n || (n => t[n] < e);
                let r, o = t.length - 1,
                    i = 0;
                for (; o - i > 1;) r = i + o >> 1, n(r) ? i = r : o = r;
                return {
                    lo: i,
                    hi: o
                }
            }
            const Me = (t, e, n) => we(t, n, (r => t[r][e] < n)),
                ke = (t, e, n) => we(t, n, (r => t[r][e] >= n));

            function Oe(t, e, n) {
                let r = 0,
                    o = t.length;
                for (; r < o && t[r] < e;) r++;
                for (; o > r && t[o - 1] > n;) o--;
                return r > 0 || o < t.length ? t.slice(r, o) : t
            }
            const Te = ["push", "pop", "shift", "splice", "unshift"];

            function Pe(t, e) {
                t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [e]
                    }
                }), Te.forEach((e => {
                    const n = "_onData" + I(e),
                        r = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value(...e) {
                            const o = r.apply(this, e);
                            return t._chartjs.listeners.forEach((t => {
                                "function" === typeof t[n] && t[n](...e)
                            })), o
                        }
                    })
                })))
            }

            function Se(t, e) {
                const n = t._chartjs;
                if (!n) return;
                const r = n.listeners,
                    o = r.indexOf(e); - 1 !== o && r.splice(o, 1), r.length > 0 || (Te.forEach((e => {
                    delete t[e]
                })), delete t._chartjs)
            }

            function Ce(t) {
                const e = new Set;
                let n, r;
                for (n = 0, r = t.length; n < r; ++n) e.add(t[n]);
                return e.size === r ? t : Array.from(e)
            }

            function Ie(t, e = [""], n = t, r, o = (() => t[0])) {
                R(r) || (r = De("_fallback", t));
                const i = {
                    [Symbol.toStringTag]: "Object",
                    _cacheable: !0,
                    _scopes: t,
                    _rootScopes: n,
                    _fallback: r,
                    _getTarget: o,
                    override: o => Ie([o, ...t], e, n, r)
                };
                return new Proxy(i, {
                    deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
                    get: (n, r) => je(n, r, (() => function(t, e, n, r) {
                        let o;
                        for (const i of e)
                            if (o = De(Ee(i, t), n), R(o)) return Ae(t, o) ? Ye(n, r, t, o) : o
                    }(r, e, t, n))),
                    getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                    has: (t, e) => Le(t).includes(e),
                    ownKeys: t => Le(t),
                    set(t, e, n) {
                        const r = t._storage || (t._storage = o());
                        return t[e] = r[e] = n, delete t._keys, !0
                    }
                })
            }

            function Re(t, e, n, r) {
                const o = {
                    _cacheable: !1,
                    _proxy: t,
                    _context: e,
                    _subProxy: n,
                    _stack: new Set,
                    _descriptors: $e(t, r),
                    setContext: e => Re(t, e, n, r),
                    override: o => Re(t.override(o), e, n, r)
                };
                return new Proxy(o, {
                    deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
                    get: (t, e, n) => je(t, e, (() => function(t, e, n) {
                        const {
                            _proxy: r,
                            _context: o,
                            _subProxy: i,
                            _descriptors: a
                        } = t;
                        let s = r[e];
                        $(s) && a.isScriptable(e) && (s = function(t, e, n, r) {
                            const {
                                _proxy: o,
                                _context: i,
                                _subProxy: a,
                                _stack: s
                            } = n;
                            if (s.has(t)) throw new Error("Recursion detected: " + Array.from(s).join("->") + "->" + t);
                            s.add(t), e = e(i, a || r), s.delete(t), Ae(t, e) && (e = Ye(o._scopes, o, t, e));
                            return e
                        }(e, s, t, n));
                        h(s) && s.length && (s = function(t, e, n, r) {
                            const {
                                _proxy: o,
                                _context: i,
                                _subProxy: a,
                                _descriptors: s
                            } = n;
                            if (R(i.index) && r(t)) e = e[i.index % e.length];
                            else if (d(e[0])) {
                                const n = e,
                                    r = o._scopes.filter((t => t !== n));
                                e = [];
                                for (const c of n) {
                                    const n = Ye(r, o, t, c);
                                    e.push(Re(n, i, a && a[t], s))
                                }
                            }
                            return e
                        }(e, s, t, a.isIndexable));
                        Ae(e, s) && (s = Re(s, o, i && i[e], a));
                        return s
                    }(t, e, n))),
                    getOwnPropertyDescriptor: (e, n) => e._descriptors.allKeys ? Reflect.has(t, n) ? {
                        enumerable: !0,
                        configurable: !0
                    } : void 0 : Reflect.getOwnPropertyDescriptor(t, n),
                    getPrototypeOf: () => Reflect.getPrototypeOf(t),
                    has: (e, n) => Reflect.has(t, n),
                    ownKeys: () => Reflect.ownKeys(t),
                    set: (e, n, r) => (t[n] = r, delete e[n], !0)
                })
            }

            function $e(t, e = {
                scriptable: !0,
                indexable: !0
            }) {
                const {
                    _scriptable: n = e.scriptable,
                    _indexable: r = e.indexable,
                    _allKeys: o = e.allKeys
                } = t;
                return {
                    allKeys: o,
                    scriptable: n,
                    indexable: r,
                    isScriptable: $(n) ? n : () => n,
                    isIndexable: $(r) ? r : () => r
                }
            }
            const Ee = (t, e) => t ? t + I(e) : e,
                Ae = (t, e) => d(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);

            function je(t, e, n) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                const r = n();
                return t[e] = r, r
            }

            function We(t, e, n) {
                return $(t) ? t(e, n) : t
            }
            const Be = (t, e) => !0 === t ? e : "string" === typeof t ? C(e, t) : void 0;

            function Fe(t, e, n, r, o) {
                for (const i of e) {
                    const e = Be(n, i);
                    if (e) {
                        t.add(e);
                        const i = We(e._fallback, n, o);
                        if (R(i) && i !== n && i !== r) return i
                    } else if (!1 === e && R(r) && n !== r) return null
                }
                return !1
            }

            function Ye(t, e, n, r) {
                const o = e._rootScopes,
                    i = We(e._fallback, n, r),
                    a = [...t, ...o],
                    s = new Set;
                s.add(r);
                let c = Ne(s, a, n, i || n, r);
                return null !== c && ((!R(i) || i === n || (c = Ne(s, a, i, c, r), null !== c)) && Ie(Array.from(s), [""], o, i, (() => function(t, e, n) {
                    const r = t._getTarget();
                    e in r || (r[e] = {});
                    const o = r[e];
                    if (h(o) && d(n)) return n;
                    return o
                }(e, n, r))))
            }

            function Ne(t, e, n, r, o) {
                for (; n;) n = Fe(t, e, n, r, o);
                return n
            }

            function De(t, e) {
                for (const n of e) {
                    if (!n) continue;
                    const e = n[t];
                    if (R(e)) return e
                }
            }

            function Le(t) {
                let e = t._keys;
                return e || (e = t._keys = function(t) {
                    const e = new Set;
                    for (const n of t)
                        for (const t of Object.keys(n).filter((t => !t.startsWith("_")))) e.add(t);
                    return Array.from(e)
                }(t._scopes)), e
            }
            const He = Number.EPSILON || 1e-14,
                ze = (t, e) => e < t.length && !t[e].skip && t[e],
                Xe = t => "x" === t ? "y" : "x";

            function qe(t, e, n, r) {
                const o = t.skip ? e : t,
                    i = e,
                    a = n.skip ? e : n,
                    s = et(i, o),
                    c = et(a, i);
                let u = s / (s + c),
                    f = c / (s + c);
                u = isNaN(u) ? 0 : u, f = isNaN(f) ? 0 : f;
                const l = r * u,
                    h = r * f;
                return {
                    previous: {
                        x: i.x - l * (a.x - o.x),
                        y: i.y - l * (a.y - o.y)
                    },
                    next: {
                        x: i.x + h * (a.x - o.x),
                        y: i.y + h * (a.y - o.y)
                    }
                }
            }

            function Ze(t, e = "x") {
                const n = Xe(e),
                    r = t.length,
                    o = Array(r).fill(0),
                    i = Array(r);
                let a, s, c, u = ze(t, 0);
                for (a = 0; a < r; ++a)
                    if (s = c, c = u, u = ze(t, a + 1), c) {
                        if (u) {
                            const t = u[e] - c[e];
                            o[a] = 0 !== t ? (u[n] - c[n]) / t : 0
                        }
                        i[a] = s ? u ? z(o[a - 1]) !== z(o[a]) ? 0 : (o[a - 1] + o[a]) / 2 : o[a - 1] : o[a]
                    }! function(t, e, n) {
                    const r = t.length;
                    let o, i, a, s, c, u = ze(t, 0);
                    for (let f = 0; f < r - 1; ++f) c = u, u = ze(t, f + 1), c && u && (K(e[f], 0, He) ? n[f] = n[f + 1] = 0 : (o = n[f] / e[f], i = n[f + 1] / e[f], s = Math.pow(o, 2) + Math.pow(i, 2), s <= 9 || (a = 3 / Math.sqrt(s), n[f] = o * a * e[f], n[f + 1] = i * a * e[f])))
                }(t, o, i),
                function(t, e, n = "x") {
                    const r = Xe(n),
                        o = t.length;
                    let i, a, s, c = ze(t, 0);
                    for (let u = 0; u < o; ++u) {
                        if (a = s, s = c, c = ze(t, u + 1), !s) continue;
                        const o = s[n],
                            f = s[r];
                        a && (i = (o - a[n]) / 3, s[`cp1${n}`] = o - i, s[`cp1${r}`] = f - i * e[u]), c && (i = (c[n] - o) / 3, s[`cp2${n}`] = o + i, s[`cp2${r}`] = f + i * e[u])
                    }
                }(t, i, e)
            }

            function Ke(t, e, n) {
                return Math.max(Math.min(t, n), e)
            }

            function Qe(t, e, n, r, o) {
                let i, a, s, c;
                if (e.spanGaps && (t = t.filter((t => !t.skip))), "monotone" === e.cubicInterpolationMode) Ze(t, o);
                else {
                    let n = r ? t[t.length - 1] : t[0];
                    for (i = 0, a = t.length; i < a; ++i) s = t[i], c = qe(n, s, t[Math.min(i + 1, a - (r ? 0 : 1)) % a], e.tension), s.cp1x = c.previous.x, s.cp1y = c.previous.y, s.cp2x = c.next.x, s.cp2y = c.next.y, n = s
                }
                e.capBezierPoints && function(t, e) {
                    let n, r, o, i, a, s = re(t[0], e);
                    for (n = 0, r = t.length; n < r; ++n) a = i, i = s, s = n < r - 1 && re(t[n + 1], e), i && (o = t[n], a && (o.cp1x = Ke(o.cp1x, e.left, e.right), o.cp1y = Ke(o.cp1y, e.top, e.bottom)), s && (o.cp2x = Ke(o.cp2x, e.left, e.right), o.cp2y = Ke(o.cp2y, e.top, e.bottom)))
                }(t, n)
            }

            function Ve() {
                return "undefined" !== typeof window && "undefined" !== typeof document
            }

            function Ue(t) {
                let e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            }

            function Je(t, e, n) {
                let r;
                return "string" === typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r
            }
            const Ge = t => window.getComputedStyle(t, null);
            const tn = ["top", "right", "bottom", "left"];

            function en(t, e, n) {
                const r = {};
                n = n ? "-" + n : "";
                for (let o = 0; o < 4; o++) {
                    const i = tn[o];
                    r[i] = parseFloat(t[e + "-" + i + n]) || 0
                }
                return r.width = r.left + r.right, r.height = r.top + r.bottom, r
            }

            function nn(t, e) {
                const {
                    canvas: n,
                    currentDevicePixelRatio: r
                } = e, o = Ge(n), i = "border-box" === o.boxSizing, a = en(o, "padding"), s = en(o, "border", "width"), {
                    x: c,
                    y: u,
                    box: f
                } = function(t, e) {
                    const n = t.native || t,
                        r = n.touches,
                        o = r && r.length ? r[0] : n,
                        {
                            offsetX: i,
                            offsetY: a
                        } = o;
                    let s, c, u = !1;
                    if (((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(i, a, n.target)) s = i, c = a;
                    else {
                        const t = e.getBoundingClientRect();
                        s = o.clientX - t.left, c = o.clientY - t.top, u = !0
                    }
                    return {
                        x: s,
                        y: c,
                        box: u
                    }
                }(t, n), l = a.left + (f && s.left), h = a.top + (f && s.top);
                let {
                    width: d,
                    height: g
                } = e;
                return i && (d -= a.width + s.width, g -= a.height + s.height), {
                    x: Math.round((c - l) / d * n.width / r),
                    y: Math.round((u - h) / g * n.height / r)
                }
            }
            const rn = t => Math.round(10 * t) / 10;

            function on(t, e, n, r) {
                const o = Ge(t),
                    i = en(o, "margin"),
                    a = Je(o.maxWidth, t, "clientWidth") || F,
                    s = Je(o.maxHeight, t, "clientHeight") || F,
                    c = function(t, e, n) {
                        let r, o;
                        if (void 0 === e || void 0 === n) {
                            const i = Ue(t);
                            if (i) {
                                const t = i.getBoundingClientRect(),
                                    a = Ge(i),
                                    s = en(a, "border", "width"),
                                    c = en(a, "padding");
                                e = t.width - c.width - s.width, n = t.height - c.height - s.height, r = Je(a.maxWidth, i, "clientWidth"), o = Je(a.maxHeight, i, "clientHeight")
                            } else e = t.clientWidth, n = t.clientHeight
                        }
                        return {
                            width: e,
                            height: n,
                            maxWidth: r || F,
                            maxHeight: o || F
                        }
                    }(t, e, n);
                let {
                    width: u,
                    height: f
                } = c;
                if ("content-box" === o.boxSizing) {
                    const t = en(o, "border", "width"),
                        e = en(o, "padding");
                    u -= e.width + t.width, f -= e.height + t.height
                }
                return u = Math.max(0, u - i.width), f = Math.max(0, r ? Math.floor(u / r) : f - i.height), u = rn(Math.min(u, a, c.maxWidth)), f = rn(Math.min(f, s, c.maxHeight)), u && !f && (f = rn(u / 2)), {
                    width: u,
                    height: f
                }
            }

            function an(t, e, n) {
                const r = e || 1,
                    o = Math.floor(t.height * r),
                    i = Math.floor(t.width * r);
                t.height = o / r, t.width = i / r;
                const a = t.canvas;
                return a.style && (n || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== r || a.height !== o || a.width !== i) && (t.currentDevicePixelRatio = r, a.height = o, a.width = i, t.ctx.setTransform(r, 0, 0, r, 0, 0), !0)
            }
            const sn = function() {
                let t = !1;
                try {
                    const e = {
                        get passive() {
                            return t = !0, !1
                        }
                    };
                    window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                } catch (e) {}
                return t
            }();

            function cn(t, e) {
                const n = function(t, e) {
                        return Ge(t).getPropertyValue(e)
                    }(t, e),
                    r = n && n.match(/^(\d+)(\.\d+)?px$/);
                return r ? +r[1] : void 0
            }

            function un(t, e, n, r) {
                return {
                    x: t.x + n * (e.x - t.x),
                    y: t.y + n * (e.y - t.y)
                }
            }

            function fn(t, e, n, r) {
                return {
                    x: t.x + n * (e.x - t.x),
                    y: "middle" === r ? n < .5 ? t.y : e.y : "after" === r ? n < 1 ? t.y : e.y : n > 0 ? e.y : t.y
                }
            }

            function ln(t, e, n, r) {
                const o = {
                        x: t.cp2x,
                        y: t.cp2y
                    },
                    i = {
                        x: e.cp1x,
                        y: e.cp1y
                    },
                    a = un(t, o, n),
                    s = un(o, i, n),
                    c = un(i, e, n),
                    u = un(a, s, n),
                    f = un(s, c, n);
                return un(u, f, n)
            }
            const hn = new Map;

            function dn(t, e, n) {
                return function(t, e) {
                    e = e || {};
                    const n = t + JSON.stringify(e);
                    let r = hn.get(n);
                    return r || (r = new Intl.NumberFormat(t, e), hn.set(n, r)), r
                }(e, n).format(t)
            }

            function gn(t, e, n) {
                return t ? function(t, e) {
                    return {
                        x: n => t + t + e - n,
                        setWidth(t) {
                            e = t
                        },
                        textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                        xPlus: (t, e) => t - e,
                        leftForLtr: (t, e) => t - e
                    }
                }(e, n) : {
                    x: t => t,
                    setWidth(t) {},
                    textAlign: t => t,
                    xPlus: (t, e) => t + e,
                    leftForLtr: (t, e) => t
                }
            }

            function pn(t, e) {
                let n, r;
                "ltr" !== e && "rtl" !== e || (n = t.canvas.style, r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = r)
            }

            function bn(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
            }

            function yn(t) {
                return "angle" === t ? {
                    between: ot,
                    compare: nt,
                    normalize: rt
                } : {
                    between: st,
                    compare: (t, e) => t - e,
                    normalize: t => t
                }
            }

            function xn({
                start: t,
                end: e,
                count: n,
                loop: r,
                style: o
            }) {
                return {
                    start: t % n,
                    end: e % n,
                    loop: r && (e - t + 1) % n === 0,
                    style: o
                }
            }

            function mn(t, e, n) {
                if (!n) return [t];
                const {
                    property: r,
                    start: o,
                    end: i
                } = n, a = e.length, {
                    compare: s,
                    between: c,
                    normalize: u
                } = yn(r), {
                    start: f,
                    end: l,
                    loop: h,
                    style: d
                } = function(t, e, n) {
                    const {
                        property: r,
                        start: o,
                        end: i
                    } = n, {
                        between: a,
                        normalize: s
                    } = yn(r), c = e.length;
                    let u, f, {
                        start: l,
                        end: h,
                        loop: d
                    } = t;
                    if (d) {
                        for (l += c, h += c, u = 0, f = c; u < f && a(s(e[l % c][r]), o, i); ++u) l--, h--;
                        l %= c, h %= c
                    }
                    return h < l && (h += c), {
                        start: l,
                        end: h,
                        loop: d,
                        style: t.style
                    }
                }(t, e, n), g = [];
                let p, b, y, x = !1,
                    m = null;
                const v = () => x || c(o, y, p) && 0 !== s(o, y),
                    _ = () => !x || 0 === s(i, p) || c(i, y, p);
                for (let w = f, M = f; w <= l; ++w) b = e[w % a], b.skip || (p = u(b[r]), p !== y && (x = c(p, o, i), null === m && v() && (m = 0 === s(p, o) ? w : M), null !== m && _() && (g.push(xn({
                    start: m,
                    end: w,
                    loop: h,
                    count: a,
                    style: d
                })), m = null), M = w, y = p));
                return null !== m && g.push(xn({
                    start: m,
                    end: l,
                    loop: h,
                    count: a,
                    style: d
                })), g
            }

            function vn(t, e) {
                const n = [],
                    r = t.segments;
                for (let o = 0; o < r.length; o++) {
                    const i = mn(r[o], t.points, e);
                    i.length && n.push(...i)
                }
                return n
            }

            function _n(t, e) {
                const n = t.points,
                    r = t.options.spanGaps,
                    o = n.length;
                if (!o) return [];
                const i = !!t._loop,
                    {
                        start: a,
                        end: s
                    } = function(t, e, n, r) {
                        let o = 0,
                            i = e - 1;
                        if (n && !r)
                            for (; o < e && !t[o].skip;) o++;
                        for (; o < e && t[o].skip;) o++;
                        for (o %= e, n && (i += o); i > o && t[i % e].skip;) i--;
                        return i %= e, {
                            start: o,
                            end: i
                        }
                    }(n, o, i, r);
                if (!0 === r) return wn(t, [{
                    start: a,
                    end: s,
                    loop: i
                }], n, e);
                return wn(t, function(t, e, n, r) {
                    const o = t.length,
                        i = [];
                    let a, s = e,
                        c = t[e];
                    for (a = e + 1; a <= n; ++a) {
                        const n = t[a % o];
                        n.skip || n.stop ? c.skip || (r = !1, i.push({
                            start: e % o,
                            end: (a - 1) % o,
                            loop: r
                        }), e = s = n.stop ? a : null) : (s = a, c.skip && (e = a)), c = n
                    }
                    return null !== s && i.push({
                        start: e % o,
                        end: s % o,
                        loop: r
                    }), i
                }(n, a, s < a ? s + o : s, !!t._fullLoop && 0 === a && s === o - 1), n, e)
            }

            function wn(t, e, n, r) {
                return r && r.setContext && n ? function(t, e, n, r) {
                    const o = t._chart.getContext(),
                        i = Mn(t.options),
                        {
                            _datasetIndex: a,
                            options: {
                                spanGaps: s
                            }
                        } = t,
                        c = n.length,
                        u = [];
                    let f = i,
                        l = e[0].start,
                        h = l;

                    function d(t, e, r, o) {
                        const i = s ? -1 : 1;
                        if (t !== e) {
                            for (t += c; n[t % c].skip;) t -= i;
                            for (; n[e % c].skip;) e += i;
                            t % c !== e % c && (u.push({
                                start: t % c,
                                end: e % c,
                                loop: r,
                                style: o
                            }), f = o, l = e % c)
                        }
                    }
                    for (const g of e) {
                        l = s ? l : g.start;
                        let t, e = n[l % c];
                        for (h = l + 1; h <= g.end; h++) {
                            const i = n[h % c];
                            t = Mn(r.setContext(_e(o, {
                                type: "segment",
                                p0: e,
                                p1: i,
                                p0DataIndex: (h - 1) % c,
                                p1DataIndex: h % c,
                                datasetIndex: a
                            }))), kn(t, f) && d(l, h - 1, g.loop, f), e = i, f = t
                        }
                        l < h - 1 && d(l, h - 1, g.loop, f)
                    }
                    return u
                }(t, e, n, r) : e
            }

            function Mn(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                }
            }

            function kn(t, e) {
                return e && JSON.stringify(t) !== JSON.stringify(e)
            }
        },
        28278: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return E
                }
            });
            var r = n(3940),
                o = n(53328),
                i = function() {
                    if ("undefined" !== typeof window) {
                        if (window.devicePixelRatio) return window.devicePixelRatio;
                        var t = window.screen;
                        if (t) return (t.deviceXDPI || 1) / (t.logicalXDPI || 1)
                    }
                    return 1
                }(),
                a = function(t) {
                    var e, n = [];
                    for (t = [].concat(t); t.length;) "string" === typeof(e = t.pop()) ? n.unshift.apply(n, e.split("\n")) : Array.isArray(e) ? t.push.apply(t, e) : (0, r.k)(t) || n.unshift("" + e);
                    return n
                },
                s = function(t, e, n) {
                    var r, o = [].concat(e),
                        i = o.length,
                        a = t.font,
                        s = 0;
                    for (t.font = n.string, r = 0; r < i; ++r) s = Math.max(t.measureText(o[r]).width, s);
                    return t.font = a, {
                        height: i * n.lineHeight,
                        width: s
                    }
                },
                c = function(t, e, n) {
                    return Math.max(t, Math.min(e, n))
                },
                u = function(t, e) {
                    var n, r, o, i, a = t.slice(),
                        s = [];
                    for (n = 0, o = e.length; n < o; ++n) i = e[n], -1 === (r = a.indexOf(i)) ? s.push([i, 1]) : a.splice(r, 1);
                    for (n = 0, o = a.length; n < o; ++n) s.push([a[n], -1]);
                    return s
                };

            function f(t, e) {
                var n = e.x,
                    r = e.y;
                if (null === n) return {
                    x: 0,
                    y: -1
                };
                if (null === r) return {
                    x: 1,
                    y: 0
                };
                var o = t.x - n,
                    i = t.y - r,
                    a = Math.sqrt(o * o + i * i);
                return {
                    x: a ? o / a : 0,
                    y: a ? i / a : -1
                }
            }

            function l(t, e, n) {
                var r = 0;
                return t < n.left ? r |= 1 : t > n.right && (r |= 2), e < n.top ? r |= 8 : e > n.bottom && (r |= 4), r
            }

            function h(t, e) {
                var n, r, o = e.anchor,
                    i = t;
                return e.clamp && (i = function(t, e) {
                        for (var n, r, o, i = t.x0, a = t.y0, s = t.x1, c = t.y1, u = l(i, a, e), f = l(s, c, e); u | f && !(u & f);) 8 & (n = u || f) ? (r = i + (s - i) * (e.top - a) / (c - a), o = e.top) : 4 & n ? (r = i + (s - i) * (e.bottom - a) / (c - a), o = e.bottom) : 2 & n ? (o = a + (c - a) * (e.right - i) / (s - i), r = e.right) : 1 & n && (o = a + (c - a) * (e.left - i) / (s - i), r = e.left), n === u ? u = l(i = r, a = o, e) : f = l(s = r, c = o, e);
                        return {
                            x0: i,
                            x1: s,
                            y0: a,
                            y1: c
                        }
                    }(i, e.area)), "start" === o ? (n = i.x0, r = i.y0) : "end" === o ? (n = i.x1, r = i.y1) : (n = (i.x0 + i.x1) / 2, r = (i.y0 + i.y1) / 2),
                    function(t, e, n, r, o) {
                        switch (o) {
                            case "center":
                                n = r = 0;
                                break;
                            case "bottom":
                                n = 0, r = 1;
                                break;
                            case "right":
                                n = 1, r = 0;
                                break;
                            case "left":
                                n = -1, r = 0;
                                break;
                            case "top":
                                n = 0, r = -1;
                                break;
                            case "start":
                                n = -n, r = -r;
                                break;
                            case "end":
                                break;
                            default:
                                o *= Math.PI / 180, n = Math.cos(o), r = Math.sin(o)
                        }
                        return {
                            x: t,
                            y: e,
                            vx: n,
                            vy: r
                        }
                    }(n, r, t.vx, t.vy, e.align)
            }
            var d = function(t, e) {
                    var n = (t.startAngle + t.endAngle) / 2,
                        r = Math.cos(n),
                        o = Math.sin(n),
                        i = t.innerRadius,
                        a = t.outerRadius;
                    return h({
                        x0: t.x + r * i,
                        y0: t.y + o * i,
                        x1: t.x + r * a,
                        y1: t.y + o * a,
                        vx: r,
                        vy: o
                    }, e)
                },
                g = function(t, e) {
                    var n = f(t, e.origin),
                        r = n.x * t.options.radius,
                        o = n.y * t.options.radius;
                    return h({
                        x0: t.x - r,
                        y0: t.y - o,
                        x1: t.x + r,
                        y1: t.y + o,
                        vx: n.x,
                        vy: n.y
                    }, e)
                },
                p = function(t, e) {
                    var n = f(t, e.origin),
                        r = t.x,
                        o = t.y,
                        i = 0,
                        a = 0;
                    return t.horizontal ? (r = Math.min(t.x, t.base), i = Math.abs(t.base - t.x)) : (o = Math.min(t.y, t.base), a = Math.abs(t.base - t.y)), h({
                        x0: r,
                        y0: o + a,
                        x1: r + i,
                        y1: o,
                        vx: n.x,
                        vy: n.y
                    }, e)
                },
                b = function(t, e) {
                    var n = f(t, e.origin);
                    return h({
                        x0: t.x,
                        y0: t.y,
                        x1: t.x,
                        y1: t.y,
                        vx: n.x,
                        vy: n.y
                    }, e)
                },
                y = function(t) {
                    return Math.round(t * i) / i
                };

            function x(t, e) {
                var n = e.chart.getDatasetMeta(e.datasetIndex).vScale;
                if (!n) return null;
                if (void 0 !== n.xCenter && void 0 !== n.yCenter) return {
                    x: n.xCenter,
                    y: n.yCenter
                };
                var r = n.getBasePixel();
                return t.horizontal ? {
                    x: r,
                    y: null
                } : {
                    x: null,
                    y: r
                }
            }

            function m(t, e, n) {
                var r = n.backgroundColor,
                    o = n.borderColor,
                    i = n.borderWidth;
                (r || o && i) && (t.beginPath(), function(t, e, n, r, o, i) {
                    var a = Math.PI / 2;
                    if (i) {
                        var s = Math.min(i, o / 2, r / 2),
                            c = e + s,
                            u = n + s,
                            f = e + r - s,
                            l = n + o - s;
                        t.moveTo(e, u), c < f && u < l ? (t.arc(c, u, s, -Math.PI, -a), t.arc(f, u, s, -a, 0), t.arc(f, l, s, 0, a), t.arc(c, l, s, a, Math.PI)) : c < f ? (t.moveTo(c, n), t.arc(f, u, s, -a, a), t.arc(c, u, s, a, Math.PI + a)) : u < l ? (t.arc(c, u, s, -Math.PI, 0), t.arc(c, l, s, 0, Math.PI)) : t.arc(c, u, s, -Math.PI, Math.PI), t.closePath(), t.moveTo(e, n)
                    } else t.rect(e, n, r, o)
                }(t, y(e.x) + i / 2, y(e.y) + i / 2, y(e.w) - i, y(e.h) - i, n.borderRadius), t.closePath(), r && (t.fillStyle = r, t.fill()), o && i && (t.strokeStyle = o, t.lineWidth = i, t.lineJoin = "miter", t.stroke()))
            }

            function v(t, e, n) {
                var r = t.shadowBlur,
                    o = n.stroked,
                    i = y(n.x),
                    a = y(n.y),
                    s = y(n.w);
                o && t.strokeText(e, i, a, s), n.filled && (r && o && (t.shadowBlur = 0), t.fillText(e, i, a, s), r && o && (t.shadowBlur = r))
            }
            var _ = function(t, e, n, r) {
                var o = this;
                o._config = t, o._index = r, o._model = null, o._rects = null, o._ctx = e, o._el = n
            };
            (0, r.a2)(_.prototype, {
                _modelize: function(t, e, n, i) {
                    var a, c = this,
                        u = c._index,
                        f = (0, r.Z)((0, r.a)([n.font, {}], i, u)),
                        l = (0, r.a)([n.color, o.ce.color], i, u);
                    return {
                        align: (0, r.a)([n.align, "center"], i, u),
                        anchor: (0, r.a)([n.anchor, "center"], i, u),
                        area: i.chart.chartArea,
                        backgroundColor: (0, r.a)([n.backgroundColor, null], i, u),
                        borderColor: (0, r.a)([n.borderColor, null], i, u),
                        borderRadius: (0, r.a)([n.borderRadius, 0], i, u),
                        borderWidth: (0, r.a)([n.borderWidth, 0], i, u),
                        clamp: (0, r.a)([n.clamp, !1], i, u),
                        clip: (0, r.a)([n.clip, !1], i, u),
                        color: l,
                        display: t,
                        font: f,
                        lines: e,
                        offset: (0, r.a)([n.offset, 0], i, u),
                        opacity: (0, r.a)([n.opacity, 1], i, u),
                        origin: x(c._el, i),
                        padding: (0, r.C)((0, r.a)([n.padding, 0], i, u)),
                        positioner: (a = c._el, a instanceof o.qi ? d : a instanceof o.od ? g : a instanceof o.ZL ? p : b),
                        rotation: (0, r.a)([n.rotation, 0], i, u) * (Math.PI / 180),
                        size: s(c._ctx, e, f),
                        textAlign: (0, r.a)([n.textAlign, "start"], i, u),
                        textShadowBlur: (0, r.a)([n.textShadowBlur, 0], i, u),
                        textShadowColor: (0, r.a)([n.textShadowColor, l], i, u),
                        textStrokeColor: (0, r.a)([n.textStrokeColor, l], i, u),
                        textStrokeWidth: (0, r.a)([n.textStrokeWidth, 0], i, u)
                    }
                },
                update: function(t) {
                    var e, n, o, i = this,
                        s = null,
                        c = null,
                        u = i._index,
                        f = i._config,
                        l = (0, r.a)([f.display, !0], t, u);
                    l && (e = t.dataset.data[u], n = (0, r.v)((0, r.O)(f.formatter, [e, t]), e), (o = (0, r.k)(n) ? [] : a(n)).length && (c = function(t) {
                        var e = t.borderWidth || 0,
                            n = t.padding,
                            r = t.size.height,
                            o = t.size.width,
                            i = -o / 2,
                            a = -r / 2;
                        return {
                            frame: {
                                x: i - n.left - e,
                                y: a - n.top - e,
                                w: o + n.width + 2 * e,
                                h: r + n.height + 2 * e
                            },
                            text: {
                                x: i,
                                y: a,
                                w: o,
                                h: r
                            }
                        }
                    }(s = i._modelize(l, o, f, t)))), i._model = s, i._rects = c
                },
                geometry: function() {
                    return this._rects ? this._rects.frame : {}
                },
                rotation: function() {
                    return this._model ? this._model.rotation : 0
                },
                visible: function() {
                    return this._model && this._model.opacity
                },
                model: function() {
                    return this._model
                },
                draw: function(t, e) {
                    var n, r = t.ctx,
                        o = this._model,
                        i = this._rects;
                    this.visible() && (r.save(), o.clip && (n = o.area, r.beginPath(), r.rect(n.left, n.top, n.right - n.left, n.bottom - n.top), r.clip()), r.globalAlpha = c(0, o.opacity, 1), r.translate(y(e.x), y(e.y)), r.rotate(o.rotation), m(r, i.frame, o), function(t, e, n, r) {
                        var o, i = r.textAlign,
                            a = r.color,
                            s = !!a,
                            c = r.font,
                            u = e.length,
                            f = r.textStrokeColor,
                            l = r.textStrokeWidth,
                            h = f && l;
                        if (u && (s || h))
                            for (n = function(t, e, n) {
                                    var r = n.lineHeight,
                                        o = t.w,
                                        i = t.x;
                                    return "center" === e ? i += o / 2 : "end" !== e && "right" !== e || (i += o), {
                                        h: r,
                                        w: o,
                                        x: i,
                                        y: t.y + r / 2
                                    }
                                }(n, i, c), t.font = c.string, t.textAlign = i, t.textBaseline = "middle", t.shadowBlur = r.textShadowBlur, t.shadowColor = r.textShadowColor, s && (t.fillStyle = a), h && (t.lineJoin = "round", t.lineWidth = l, t.strokeStyle = f), o = 0, u = e.length; o < u; ++o) v(t, e[o], {
                                stroked: h,
                                filled: s,
                                w: n.w,
                                x: n.x,
                                y: n.y + n.h * o
                            })
                    }(r, o.lines, i.text, o), r.restore())
                }
            });
            var w = Number.MIN_SAFE_INTEGER || -9007199254740991,
                M = Number.MAX_SAFE_INTEGER || 9007199254740991;

            function k(t, e, n) {
                var r = Math.cos(n),
                    o = Math.sin(n),
                    i = e.x,
                    a = e.y;
                return {
                    x: i + r * (t.x - i) - o * (t.y - a),
                    y: a + o * (t.x - i) + r * (t.y - a)
                }
            }

            function O(t, e) {
                var n, r, o, i, a, s = M,
                    c = w,
                    u = e.origin;
                for (n = 0; n < t.length; ++n) o = (r = t[n]).x - u.x, i = r.y - u.y, a = e.vx * o + e.vy * i, s = Math.min(s, a), c = Math.max(c, a);
                return {
                    min: s,
                    max: c
                }
            }

            function T(t, e) {
                var n = e.x - t.x,
                    r = e.y - t.y,
                    o = Math.sqrt(n * n + r * r);
                return {
                    vx: (e.x - t.x) / o,
                    vy: (e.y - t.y) / o,
                    origin: t,
                    ln: o
                }
            }
            var P = function() {
                this._rotation = 0, this._rect = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0
                }
            };

            function S(t, e, n) {
                var r = e.positioner(t, e),
                    o = r.vx,
                    i = r.vy;
                if (!o && !i) return {
                    x: r.x,
                    y: r.y
                };
                var a = n.w,
                    s = n.h,
                    c = e.rotation,
                    u = Math.abs(a / 2 * Math.cos(c)) + Math.abs(s / 2 * Math.sin(c)),
                    f = Math.abs(a / 2 * Math.sin(c)) + Math.abs(s / 2 * Math.cos(c)),
                    l = 1 / Math.max(Math.abs(o), Math.abs(i));
                return u *= o * l, f *= i * l, u += e.offset * o, f += e.offset * i, {
                    x: r.x + u,
                    y: r.y + f
                }
            }(0, r.a2)(P.prototype, {
                center: function() {
                    var t = this._rect;
                    return {
                        x: t.x + t.w / 2,
                        y: t.y + t.h / 2
                    }
                },
                update: function(t, e, n) {
                    this._rotation = n, this._rect = {
                        x: e.x + t.x,
                        y: e.y + t.y,
                        w: e.w,
                        h: e.h
                    }
                },
                contains: function(t) {
                    var e = this,
                        n = e._rect;
                    return !((t = k(t, e.center(), -e._rotation)).x < n.x - 1 || t.y < n.y - 1 || t.x > n.x + n.w + 2 || t.y > n.y + n.h + 2)
                },
                intersects: function(t) {
                    var e, n, r, o = this._points(),
                        i = t._points(),
                        a = [T(o[0], o[1]), T(o[0], o[3])];
                    for (this._rotation !== t._rotation && a.push(T(i[0], i[1]), T(i[0], i[3])), e = 0; e < a.length; ++e)
                        if (n = O(o, a[e]), r = O(i, a[e]), n.max < r.min || r.max < n.min) return !1;
                    return !0
                },
                _points: function() {
                    var t = this,
                        e = t._rect,
                        n = t._rotation,
                        r = t.center();
                    return [k({
                        x: e.x,
                        y: e.y
                    }, r, n), k({
                        x: e.x + e.w,
                        y: e.y
                    }, r, n), k({
                        x: e.x + e.w,
                        y: e.y + e.h
                    }, r, n), k({
                        x: e.x,
                        y: e.y + e.h
                    }, r, n)]
                }
            });
            var C = {
                    prepare: function(t) {
                        var e, n, r, o, i, a = [];
                        for (e = 0, r = t.length; e < r; ++e)
                            for (n = 0, o = t[e].length; n < o; ++n) i = t[e][n], a.push(i), i.$layout = {
                                _box: new P,
                                _hidable: !1,
                                _visible: !0,
                                _set: e,
                                _idx: n
                            };
                        return a.sort((function(t, e) {
                            var n = t.$layout,
                                r = e.$layout;
                            return n._idx === r._idx ? r._set - n._set : r._idx - n._idx
                        })), this.update(a), a
                    },
                    update: function(t) {
                        var e, n, r, o, i, a = !1;
                        for (e = 0, n = t.length; e < n; ++e) o = (r = t[e]).model(), (i = r.$layout)._hidable = o && "auto" === o.display, i._visible = r.visible(), a |= i._hidable;
                        a && function(t) {
                            var e, n, r, o, i, a, s;
                            for (e = 0, n = t.length; e < n; ++e)(o = (r = t[e]).$layout)._visible && (s = new Proxy(r._el, {
                                get: (t, e) => t.getProps([e], !0)[e]
                            }), i = r.geometry(), a = S(s, r.model(), i), o._box.update(a, i, r.rotation()));
                            (function(t, e) {
                                var n, r, o, i;
                                for (n = t.length - 1; n >= 0; --n)
                                    for (o = t[n].$layout, r = n - 1; r >= 0 && o._visible; --r)(i = t[r].$layout)._visible && o._box.intersects(i._box) && e(o, i)
                            })(t, (function(t, e) {
                                var n = t._hidable,
                                    r = e._hidable;
                                n && r || r ? e._visible = !1 : n && (t._visible = !1)
                            }))
                        }(t)
                    },
                    lookup: function(t, e) {
                        var n, r;
                        for (n = t.length - 1; n >= 0; --n)
                            if ((r = t[n].$layout) && r._visible && r._box.contains(e)) return t[n];
                        return null
                    },
                    draw: function(t, e) {
                        var n, r, o, i, a, s;
                        for (n = 0, r = e.length; n < r; ++n)(i = (o = e[n]).$layout)._visible && (a = o.geometry(), s = S(o._el, o.model(), a), i._box.update(s, a, o.rotation()), o.draw(t, s))
                    }
                },
                I = "$default";

            function R(t, e, n) {
                if (e) {
                    var o, i = n.$context,
                        a = n.$groups;
                    e[a._set] && (o = e[a._set][a._key]) && !0 === (0, r.O)(o, [i]) && (t.$datalabels._dirty = !0, n.update(i))
                }
            }

            function $(t, e) {
                var n, r, o = t.$datalabels,
                    i = o._listeners;
                if (i.enter || i.leave) {
                    if ("mousemove" === e.type) r = C.lookup(o._labels, e);
                    else if ("mouseout" !== e.type) return;
                    n = o._hovered, o._hovered = r,
                        function(t, e, n, r) {
                            var o, i;
                            (n || r) && (n ? r ? n !== r && (i = o = !0) : i = !0 : o = !0, i && R(t, e.leave, n), o && R(t, e.enter, r))
                        }(t, i, n, r)
                }
            }
            var E = {
                id: "datalabels",
                defaults: {
                    align: "center",
                    anchor: "center",
                    backgroundColor: null,
                    borderColor: null,
                    borderRadius: 0,
                    borderWidth: 0,
                    clamp: !1,
                    clip: !1,
                    color: void 0,
                    display: !0,
                    font: {
                        family: void 0,
                        lineHeight: 1.2,
                        size: void 0,
                        style: void 0,
                        weight: null
                    },
                    formatter: function(t) {
                        if ((0, r.k)(t)) return null;
                        var e, n, o, i = t;
                        if ((0, r.i)(t))
                            if ((0, r.k)(t.label))
                                if ((0, r.k)(t.r))
                                    for (i = "", o = 0, n = (e = Object.keys(t)).length; o < n; ++o) i += (0 !== o ? ", " : "") + e[o] + ": " + t[e[o]];
                                else i = t.r;
                        else i = t.label;
                        return "" + i
                    },
                    labels: void 0,
                    listeners: {},
                    offset: 4,
                    opacity: 1,
                    padding: {
                        top: 4,
                        right: 4,
                        bottom: 4,
                        left: 4
                    },
                    rotation: 0,
                    textAlign: "start",
                    textStrokeColor: void 0,
                    textStrokeWidth: 0,
                    textShadowBlur: 0,
                    textShadowColor: void 0
                },
                beforeInit: function(t) {
                    t.$datalabels = {
                        _actives: []
                    }
                },
                beforeUpdate: function(t) {
                    var e = t.$datalabels;
                    e._listened = !1, e._listeners = {}, e._datasets = [], e._labels = []
                },
                afterDatasetUpdate: function(t, e, n) {
                    var o, i, a, s, c, u, f, l, h = e.index,
                        d = t.$datalabels,
                        g = d._datasets[h] = [],
                        p = t.isDatasetVisible(h),
                        b = t.data.datasets[h],
                        y = function(t, e) {
                            var n, o, i, a = t.datalabels,
                                s = [];
                            return !1 === a ? null : (!0 === a && (a = {}), e = (0, r.a2)({}, [e, a]), o = e.labels || {}, i = Object.keys(o), delete e.labels, i.length ? i.forEach((function(t) {
                                o[t] && s.push((0, r.a2)({}, [e, o[t], {
                                    _key: t
                                }]))
                            })) : s.push(e), n = s.reduce((function(t, e) {
                                return (0, r.D)(e.listeners || {}, (function(n, r) {
                                    t[r] = t[r] || {}, t[r][e._key || I] = n
                                })), delete e.listeners, t
                            }), {}), {
                                labels: s,
                                listeners: n
                            })
                        }(b, n),
                        x = e.meta.data || [],
                        m = t.ctx;
                    for (m.save(), o = 0, a = x.length; o < a; ++o)
                        if ((f = x[o]).$datalabels = [], p && f && t.getDataVisibility(o) && !f.skip)
                            for (i = 0, s = y.labels.length; i < s; ++i) u = (c = y.labels[i])._key, (l = new _(c, m, f, o)).$groups = {
                                _set: h,
                                _key: u || I
                            }, l.$context = {
                                active: !1,
                                chart: t,
                                dataIndex: o,
                                dataset: b,
                                datasetIndex: h
                            }, l.update(l.$context), f.$datalabels.push(l), g.push(l);
                    m.restore(), (0, r.a2)(d._listeners, y.listeners, {
                        merger: function(t, n, r) {
                            n[t] = n[t] || {}, n[t][e.index] = r[t], d._listened = !0
                        }
                    })
                },
                afterUpdate: function(t, e) {
                    t.$datalabels._labels = C.prepare(t.$datalabels._datasets, e)
                },
                afterDatasetsDraw: function(t) {
                    C.draw(t, t.$datalabels._labels)
                },
                beforeEvent: function(t, e) {
                    if (t.$datalabels._listened) {
                        var n = e.event;
                        switch (n.type) {
                            case "mousemove":
                            case "mouseout":
                                $(t, n);
                                break;
                            case "click":
                                ! function(t, e) {
                                    var n = t.$datalabels,
                                        r = n._listeners.click,
                                        o = r && C.lookup(n._labels, e);
                                    o && R(t, r, o)
                                }(t, n)
                        }
                    }
                },
                afterEvent: function(t) {
                    var e, n, r, o, i, a, s, c = t.$datalabels,
                        f = c._actives,
                        l = c._actives = t.getActiveElements(),
                        h = u(f, l);
                    for (e = 0, n = h.length; e < n; ++e)
                        if ((i = h[e])[1])
                            for (r = 0, o = (s = i[0].element.$datalabels || []).length; r < o; ++r)(a = s[r]).$context.active = 1 === i[1], a.update(a.$context);
                    (c._dirty || h.length) && (C.update(c._labels), t.render()), delete c._dirty
                }
            }
        },
        88598: function(t, e, n) {
            n.d(e, {
                x1: function() {
                    return h
                }
            });
            var r = n(67294),
                o = n(53328);

            function i(t, e) {
                "function" === typeof t ? t(e) : t && (t.current = e)
            }

            function a(t, e) {
                t.labels = e
            }

            function s(t, e, n = "label") {
                const r = [];
                t.datasets = e.map((e => {
                    const o = t.datasets.find((t => t[n] === e[n]));
                    return o && e.data && !r.includes(o) ? (r.push(o), Object.assign(o, e), o) : { ...e
                    }
                }))
            }

            function c(t, e = "label") {
                const n = {
                    labels: [],
                    datasets: []
                };
                return a(n, t.labels), s(n, t.datasets, e), n
            }

            function u({
                height: t = 150,
                width: e = 300,
                redraw: n = !1,
                datasetIdKey: u,
                type: f,
                data: l,
                options: h,
                plugins: d = [],
                fallbackContent: g,
                ...p
            }, b) {
                const y = (0, r.useRef)(null),
                    x = (0, r.useRef)(),
                    m = () => {
                        y.current && (x.current = new o.kL(y.current, {
                            type: f,
                            data: c(l, u),
                            options: h,
                            plugins: d
                        }), i(b, x.current))
                    },
                    v = () => {
                        i(b, null), x.current && (x.current.destroy(), x.current = null)
                    };
                return (0, r.useEffect)((() => {
                    var t, e;
                    !n && x.current && h && (t = x.current, e = h, t.options = { ...e
                    })
                }), [n, h]), (0, r.useEffect)((() => {
                    !n && x.current && a(x.current.config.data, l.labels)
                }), [n, l.labels]), (0, r.useEffect)((() => {
                    !n && x.current && l.datasets && s(x.current.config.data, l.datasets, u)
                }), [n, l.datasets]), (0, r.useEffect)((() => {
                    x.current && (n ? (v(), setTimeout(m)) : x.current.update())
                }), [n, h, l.labels, l.datasets]), (0, r.useEffect)((() => (m(), () => v())), []), r.createElement("canvas", Object.assign({
                    ref: y,
                    role: "img",
                    height: t,
                    width: e
                }, p), g)
            }
            const f = (0, r.forwardRef)(u);

            function l(t, e) {
                return o.kL.register(e), (0, r.forwardRef)(((e, n) => r.createElement(f, Object.assign({}, e, {
                    ref: n,
                    type: t
                }))))
            }
            const h = l("line", o.ST)
        }
    }
]);