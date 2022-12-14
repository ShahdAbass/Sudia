(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6134], {
        90743: function(r, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/news", function() {
                return e(72228)
            }])
        },
        94022: function(r, t, e) {
            "use strict";
            var n = e(85893),
                o = (e(67294), e(41113)),
                i = e(87536),
                u = e(10493);

            function a(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
                return n
            }

            function f(r, t, e) {
                return t in r ? Object.defineProperty(r, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[t] = e, r
            }

            function c(r) {
                return function(r) {
                    if (Array.isArray(r)) return a(r)
                }(r) || function(r) {
                    if ("undefined" !== typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r)
                }(r) || function(r, t) {
                    if (!r) return;
                    if ("string" === typeof r) return a(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    "Object" === e && r.constructor && (e = r.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return a(r, t)
                }(r) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.Z = function(r) {
                var t = r.name,
                    e = void 0 === t ? "name" : t,
                    a = r.id,
                    l = void 0 === a ? "id" : a,
                    s = r.label,
                    p = void 0 === s ? "" : s,
                    d = r.placeholder,
                    y = void 0 === d ? "" : d,
                    v = r.defaultValue,
                    h = void 0 === v ? null : v,
                    b = r.options,
                    m = void 0 === b ? [] : b,
                    g = r.control,
                    w = r.isMulti,
                    O = void 0 !== w && w,
                    j = r.onChange,
                    S = void 0 === j ? function() {} : j,
                    A = (0, u.$G)("common").t;
                return (0, n.jsxs)("div", {
                    className: "form-group",
                    children: [(0, n.jsx)("label", {
                        htmlFor: l,
                        children: p
                    }), (0, n.jsx)(i.Qr, {
                        name: e,
                        control: g,
                        defaultValue: h,
                        render: function(r) {
                            var t = r.field;
                            return (0, n.jsx)(o.ZP, function(r) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var e = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(e);
                                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(e).filter((function(r) {
                                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                                    })))), n.forEach((function(t) {
                                        f(r, t, e[t])
                                    }))
                                }
                                return r
                            }({}, t, {
                                id: l,
                                isMulti: O,
                                instanceId: l,
                                placeholder: y,
                                className: "select-input",
                                classNamePrefix: "select",
                                isClearable: !0,
                                noOptionsMessage: function() {
                                    return A("No options")
                                },
                                getOptionLabel: function(r) {
                                    return r.label
                                },
                                getOptionValue: function(r) {
                                    return r.value
                                },
                                options: m,
                                onChange: function() {
                                    for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
                                    var o;
                                    (o = t).onChange.apply(o, c(e)), S.apply(void 0, c(e))
                                }
                            }))
                        }
                    })]
                })
            }
        },
        21048: function(r, t, e) {
            "use strict";
            e.d(t, {
                N: function() {
                    return o
                }
            });
            var n = e(67294),
                o = function(r, t) {
                    var e = (0, n.useState)(r),
                        o = e[0],
                        i = e[1];
                    return (0, n.useEffect)((function() {
                        var e = setTimeout((function() {
                            i(r)
                        }), t);
                        return function() {
                            clearTimeout(e)
                        }
                    }), [r, t]), o
                }
        },
        72228: function(r, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                __N_SSG: function() {
                    return f
                }
            });
            var n = e(85893),
                o = e(27933),
                i = e(9008),
                u = e(53021),
                a = (e(67294), e(10493)),
                f = !0;
            t.default = function(r) {
                var t = r.headerData,
                    e = r.footerData,
                    f = r.news,
                    c = r.domains,
                    l = (0, a.$G)("common").t;
                return (0, n.jsxs)(o.T3, {
                    headerProps: {
                        headerData: t
                    },
                    footerProps: {
                        footerData: e
                    },
                    breadCrumb: null === f || void 0 === f ? void 0 : f.breadCrumb,
                    children: [(0, n.jsx)(i.default, {
                        children: (0, n.jsx)("title", {
                            children: l("News")
                        })
                    }), (0, n.jsx)(u.Z, {
                        news: f,
                        domains: c
                    })]
                })
            }
        },
        16308: function(r, t, e) {
            "use strict";

            function n(r, t) {
                (null == t || t > r.length) && (t = r.length);
                for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
                return n
            }

            function o(r, t) {
                return function(r) {
                    if (Array.isArray(r)) return r
                }(r) || function(r, t) {
                    var e = null == r ? null : "undefined" !== typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                    if (null != e) {
                        var n, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (e = e.call(r); !(u = (n = e.next()).done) && (i.push(n.value), !t || i.length !== t); u = !0);
                        } catch (f) {
                            a = !0, o = f
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(r, t) || function(r, t) {
                    if (!r) return;
                    if ("string" === typeof r) return n(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    "Object" === e && r.constructor && (e = r.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return n(r, t)
                }(r, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            e.d(t, {
                t: function() {
                    return i
                }
            });
            var i = function(r) {
                var t = {};
                return Object.entries(r).forEach((function(r) {
                    var e = o(r, 2),
                        n = e[0],
                        i = e[1];
                    i && (t[n] = i)
                })), t
            }
        },
        69590: function(r) {
            var t = "undefined" !== typeof Element,
                e = "function" === typeof Map,
                n = "function" === typeof Set,
                o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(r, u) {
                if (r === u) return !0;
                if (r && u && "object" == typeof r && "object" == typeof u) {
                    if (r.constructor !== u.constructor) return !1;
                    var a, f, c, l;
                    if (Array.isArray(r)) {
                        if ((a = r.length) != u.length) return !1;
                        for (f = a; 0 !== f--;)
                            if (!i(r[f], u[f])) return !1;
                        return !0
                    }
                    if (e && r instanceof Map && u instanceof Map) {
                        if (r.size !== u.size) return !1;
                        for (l = r.entries(); !(f = l.next()).done;)
                            if (!u.has(f.value[0])) return !1;
                        for (l = r.entries(); !(f = l.next()).done;)
                            if (!i(f.value[1], u.get(f.value[0]))) return !1;
                        return !0
                    }
                    if (n && r instanceof Set && u instanceof Set) {
                        if (r.size !== u.size) return !1;
                        for (l = r.entries(); !(f = l.next()).done;)
                            if (!u.has(f.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(r) && ArrayBuffer.isView(u)) {
                        if ((a = r.length) != u.length) return !1;
                        for (f = a; 0 !== f--;)
                            if (r[f] !== u[f]) return !1;
                        return !0
                    }
                    if (r.constructor === RegExp) return r.source === u.source && r.flags === u.flags;
                    if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === u.valueOf();
                    if (r.toString !== Object.prototype.toString) return r.toString() === u.toString();
                    if ((a = (c = Object.keys(r)).length) !== Object.keys(u).length) return !1;
                    for (f = a; 0 !== f--;)
                        if (!Object.prototype.hasOwnProperty.call(u, c[f])) return !1;
                    if (t && r instanceof Element) return !1;
                    for (f = a; 0 !== f--;)
                        if (("_owner" !== c[f] && "__v" !== c[f] && "__o" !== c[f] || !r.$$typeof) && !i(r[c[f]], u[c[f]])) return !1;
                    return !0
                }
                return r !== r && u !== u
            }
            r.exports = function(r, t) {
                try {
                    return i(r, t)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        }
    },
    function(r) {
        r.O(0, [4663, 7631, 9756, 5733, 1113, 3977, 6641, 7933, 3021, 9774, 2888, 179], (function() {
            return t = 90743, r(r.s = t);
            var t
        }));
        var t = r.O();
        _N_E = t
    }
]);