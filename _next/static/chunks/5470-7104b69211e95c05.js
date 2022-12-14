(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5470], {
        62284: function(e, t, n) {
            "use strict";
            var r = n(85893),
                a = n(9198),
                o = n.n(a),
                i = n(4043),
                l = n(11163);
            t.Z = function(e) {
                var t = e.id,
                    n = void 0 === t ? "id" : t,
                    s = e.label,
                    c = void 0 === s ? "" : s,
                    u = e.startDate,
                    d = e.endDate,
                    m = e.onChange,
                    f = e.placeholderText;
                (0, a.registerLocale)("ar", i.Z);
                var h = (0, l.useRouter)().locale;
                return (0, r.jsxs)("div", {
                    className: "form-group",
                    children: [(0, r.jsx)("label", {
                        htmlFor: n,
                        children: c
                    }), (0, r.jsx)(o(), {
                        id: n,
                        className: "w-100",
                        onChange: m,
                        startDate: u,
                        endDate: d,
                        placeholderText: f,
                        selectsRange: !0,
                        dateFormat: "dd-MM-yyyy",
                        isClearable: !0,
                        locale: h,
                        dropdownMode: "select",
                        showYearDropdown: !0
                    })]
                })
            }
        },
        94022: function(e, t, n) {
            "use strict";
            var r = n(85893),
                a = (n(67294), n(41113)),
                o = n(87536),
                i = n(10493);

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.Z = function(e) {
                var t = e.name,
                    n = void 0 === t ? "name" : t,
                    l = e.id,
                    u = void 0 === l ? "id" : l,
                    d = e.label,
                    m = void 0 === d ? "" : d,
                    f = e.placeholder,
                    h = void 0 === f ? "" : f,
                    g = e.defaultValue,
                    p = void 0 === g ? null : g,
                    y = e.options,
                    v = void 0 === y ? [] : y,
                    b = e.control,
                    j = e.isMulti,
                    x = void 0 !== j && j,
                    w = e.onChange,
                    S = void 0 === w ? function() {} : w,
                    N = (0, i.$G)("common").t;
                return (0, r.jsxs)("div", {
                    className: "form-group",
                    children: [(0, r.jsx)("label", {
                        htmlFor: u,
                        children: m
                    }), (0, r.jsx)(o.Qr, {
                        name: n,
                        control: b,
                        defaultValue: p,
                        render: function(e) {
                            var t = e.field;
                            return (0, r.jsx)(a.ZP, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    })))), r.forEach((function(t) {
                                        s(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, t, {
                                id: u,
                                isMulti: x,
                                instanceId: u,
                                placeholder: h,
                                className: "select-input",
                                classNamePrefix: "select",
                                isClearable: !0,
                                noOptionsMessage: function() {
                                    return N("No options")
                                },
                                getOptionLabel: function(e) {
                                    return e.label
                                },
                                getOptionValue: function(e) {
                                    return e.value
                                },
                                options: v,
                                onChange: function() {
                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    var a;
                                    (a = t).onChange.apply(a, c(n)), S.apply(void 0, c(n))
                                }
                            }))
                        }
                    })]
                })
            }
        },
        85470: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return R
                }
            });
            var r = n(34051),
                a = n.n(r),
                o = n(85893),
                i = n(67294),
                l = n(10493),
                s = n(11163),
                c = (n(9008), n(25675)),
                u = n(21048),
                d = n(99424),
                m = function(e, t) {
                    return d.Z.get("/api/listing/report?lang=".concat(t), {
                        params: e
                    })
                },
                f = n(16308),
                h = n(10682),
                g = n(21608),
                p = n(31555),
                y = n(36968),
                v = n(87536),
                b = n(94022),
                j = n(62284);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        w(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                        } catch (s) {
                            l = !0, a = s
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e) {
                    var t, n = e.onFilterSubmit,
                        r = e.categories,
                        a = e.domains,
                        s = e.isReseting,
                        c = e.setCurrentCount,
                        u = (e.setIsReseting, e.setCurrentPage),
                        d = e.setIsFiltering,
                        m = e.setReports,
                        f = (0, l.$G)("common").t,
                        h = (0, i.useState)(null),
                        y = h[0],
                        x = h[1],
                        w = (0, i.useState)(null),
                        C = w[0],
                        O = w[1],
                        A = (0, v.cI)({
                            defaultValues: {
                                category: null,
                                domain: "",
                                dateFrom: null,
                                dateTo: null,
                                searchKey: ""
                            }
                        }),
                        _ = A.register,
                        Z = A.watch,
                        k = A.getValues,
                        D = A.control,
                        I = A.reset,
                        P = (0, i.useState)(((t = k()).category && (t.category = t.category.value), t)),
                        T = P[0],
                        F = P[1],
                        E = r.map((function(e) {
                            return {
                                label: e.title,
                                value: e.id
                            }
                        })),
                        M = a.map((function(e) {
                            return {
                                label: e.title,
                                value: e.id
                            }
                        }));
                    (0, i.useEffect)((function() {
                        s && (I(), x(null), O(null), F({
                            dateFrom: null,
                            dateTo: null,
                            domain: "",
                            searchKey: "",
                            category: null
                        }), n({}), R(!1, 0, !0), setTimeout((function() {
                            return d(!1)
                        })));
                        var e = Z((function(e) {
                            R(!0, 0, !0), y && C && !s && (e.dateFrom = new Date(y).toLocaleDateString("en-CA"), e.dateTo = new Date(C).toLocaleDateString("en-CA")), F(e), n(e)
                        }));
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [Z, I, k, s]);
                    var R = function(e, t, n) {
                        d(e), c(t), u(0), n && m([])
                    };
                    return (0, o.jsx)("div", {
                        className: "services-filtration mb-4",
                        children: (0, o.jsx)("form", {
                            children: (0, o.jsxs)(g.Z, {
                                children: [(0, o.jsx)(p.Z, {
                                    lg: 3,
                                    children: (0, o.jsx)(b.Z, {
                                        id: "domainSelectorStories",
                                        label: f("Domains"),
                                        isMulti: !0,
                                        name: "domain",
                                        control: D,
                                        options: M,
                                        placeholder: f("Choose")
                                    })
                                }), (0, o.jsx)(p.Z, {
                                    lg: 3,
                                    children: (0, o.jsx)(b.Z, {
                                        id: "categorySelector",
                                        label: f("Category"),
                                        name: "category",
                                        control: D,
                                        options: E,
                                        placeholder: f("Choose")
                                    })
                                }), (0, o.jsx)(p.Z, {
                                    lg: 3,
                                    children: (0, o.jsx)(j.Z, {
                                        id: "dateSelector",
                                        label: f("Date"),
                                        startDate: y,
                                        endDate: C,
                                        placeholderText: f("Select the date"),
                                        onChange: function(e) {
                                            return function(e) {
                                                var t = N(e, 2),
                                                    r = t[0],
                                                    a = t[1];
                                                x(r), O(a), r && a && (n(S({}, T, {
                                                    dateFrom: new Date(r).toLocaleDateString("en-CA"),
                                                    dateTo: new Date(a).toLocaleDateString("en-CA")
                                                })), R(!0, 0, !0)), r || a || (u(0), F(S({}, T, {
                                                    dateFrom: null,
                                                    dateTo: null
                                                })), n(S({}, T)))
                                            }(e)
                                        }
                                    })
                                }), (0, o.jsx)(p.Z, {
                                    lg: 3,
                                    children: (0, o.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, o.jsx)("label", {
                                            htmlFor: "search",
                                            children: f("Search")
                                        }), (0, o.jsx)("input", S({}, _("searchKey", {
                                            required: !1
                                        }), {
                                            id: "searchKey",
                                            name: "searchKey",
                                            type: "search",
                                            className: "form-control",
                                            placeholder: f("Search here"),
                                            maxLength: 100
                                        }))]
                                    })
                                })]
                            })
                        })
                    })
                },
                O = n(27933),
                A = n(78182),
                _ = n(98730),
                Z = n.n(_),
                k = n(85177),
                D = (n(41664), function(e) {
                    var t = e.report,
                        n = (0, l.$G)("common").t,
                        r = (t.id, t.title),
                        a = t.summary,
                        i = t.image,
                        s = t.date,
                        u = t.file,
                        d = t.relatedDomains,
                        m = (t.relatedDomainsID, t.reportCategory);
                    t.reportCategoryID;
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(A.Z, {
                            className: "mb-5",
                            children: (0, o.jsxs)(g.Z, {
                                className: "g-0",
                                children: [(0, o.jsx)(p.Z, {
                                    md: 4,
                                    className: "image position-relative p-3 ".concat(Z().img_container),
                                    style: {
                                        backgroundImage: "url(".concat((0, k.J)(i), ")"),
                                        minHeight: "420px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "contain",
                                        backgroundPosition: "center"
                                    },
                                    children: (0, o.jsx)("a", {
                                        href: (0, k.J)(u),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, o.jsxs)(O.zx, {
                                            white: !0,
                                            className: "m-auto w-100 d-none d-md-block",
                                            children: [n("View"), " ", (0, o.jsx)("i", {
                                                className: "fas fa-external-link-alt"
                                            })]
                                        })
                                    })
                                }), (0, o.jsx)(p.Z, {
                                    md: 8,
                                    children: (0, o.jsxs)(A.Z.Body, {
                                        className: "margin-inline-start-1",
                                        children: [(0, o.jsx)(A.Z.Title, {
                                            children: (0, o.jsx)("a", {
                                                href: (0, k.J)(u),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "main-color",
                                                children: r
                                            })
                                        }), (0, o.jsx)(A.Z.Text, {
                                            className: "".concat(Z().summary),
                                            children: a
                                        }), (0, o.jsxs)("div", {
                                            className: "mt-4 row ".concat(Z().iconsContainer),
                                            children: [(0, o.jsxs)("div", {
                                                className: "col-6 ".concat(Z().with_icon),
                                                children: [(0, o.jsx)("div", {
                                                    className: "mt-1",
                                                    children: (0, o.jsx)(c.default, {
                                                        src: "/images/domain.svg",
                                                        alt: "domain icon",
                                                        width: 15,
                                                        height: 15
                                                    })
                                                }), (0, o.jsxs)("div", {
                                                    className: "w-75",
                                                    children: [(0, o.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: n("Domain")
                                                    }), (0, o.jsx)("div", {
                                                        className: "font-75",
                                                        children: d || n("Undefined")
                                                    })]
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: "col-6 ".concat(Z().with_icon),
                                                children: [(0, o.jsx)("div", {
                                                    className: "mt-1",
                                                    children: (0, o.jsx)(c.default, {
                                                        src: "/images/domain.svg",
                                                        alt: "category icon",
                                                        width: 15,
                                                        height: 15
                                                    })
                                                }), (0, o.jsxs)("div", {
                                                    className: "w-75",
                                                    children: [(0, o.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: n("Category")
                                                    }), (0, o.jsxs)("div", {
                                                        className: "font-75",
                                                        children: [" ", m || n("Undefined")]
                                                    })]
                                                })]
                                            })]
                                        }), (0, o.jsx)("div", {
                                            className: "d-flex mt-3",
                                            children: (0, o.jsxs)("div", {
                                                className: "d-flex ".concat(Z().with_icon),
                                                children: [(0, o.jsx)("div", {
                                                    className: "mt-1",
                                                    children: (0, o.jsx)(c.default, {
                                                        src: "/images/calendar-reports.svg",
                                                        alt: "calendar icon",
                                                        width: 15,
                                                        height: 15
                                                    })
                                                }), (0, o.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, o.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: n("Date of publication")
                                                    }), (0, o.jsx)("div", {
                                                        className: "font-75",
                                                        children: s
                                                    })]
                                                })]
                                            })
                                        }), (0, o.jsx)("div", {
                                            className: "d-block d-md-none",
                                            style: {
                                                textAlign: "center",
                                                margin: "2rem 0 1rem"
                                            },
                                            children: (0, o.jsx)("a", {
                                                href: (0, k.J)(u),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, o.jsxs)(O.zx, {
                                                    className: "m-auto w-100",
                                                    children: [n("View"), " ", (0, o.jsx)("i", {
                                                        className: "fas fa-external-link-alt"
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }),
                I = n(58533);

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        s = l.value
                } catch (c) {
                    return void n(c)
                }
                l.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function F(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        F(e, t, n[t])
                    }))
                }
                return e
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return P(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var R = function(e) {
                var t = e.reports,
                    n = e.categories,
                    r = e.domains,
                    d = (0, l.$G)("common").t,
                    v = (0, s.useRouter)(),
                    b = v.locale,
                    j = (v.asPath, (0, i.useState)((null === t || void 0 === t ? void 0 : t.items) || t || [])),
                    x = j[0],
                    w = j[1],
                    S = (0, i.useState)({}),
                    N = S[0],
                    O = S[1],
                    A = (0, i.useState)(!1),
                    _ = A[0],
                    Z = A[1],
                    k = (0, i.useState)(!1),
                    P = k[0],
                    F = k[1],
                    R = (0, i.useState)(!1),
                    L = R[0],
                    $ = R[1],
                    V = (0, i.useState)(!1),
                    U = V[0],
                    K = V[1],
                    G = (0, i.useState)(!0),
                    J = G[0],
                    z = G[1],
                    B = (0, i.useState)(0),
                    Q = B[0],
                    q = B[1],
                    H = (0, i.useState)(x.length),
                    Y = H[0],
                    W = H[1],
                    X = (0, i.useState)((null === t || void 0 === t ? void 0 : t.totalCount) || t.length),
                    ee = X[0],
                    te = X[1],
                    ne = {
                        page: Q,
                        items_per_page: 12
                    },
                    re = (0, u.N)(N, 1e3);
                (0, i.useEffect)((function() {
                    if (z(ee - Y > 0), L && P && F(!1), Object.keys(re).length > 0) {
                        var e = (0, f.t)(N);
                        e.domain && 0 != e.domain.length && (e.domain = e.domain.map((function(e) {
                            return e.value
                        })).toString()), e.category && (e.category = e.category.value), Z(!0), ae(e)
                    }
                }), [re, L]);
                var ae = function() {
                    var e, t = (e = a().mark((function e(t) {
                        var n, r, o, i, l;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ee !== Y || 0 === ee) {
                                        e.next = 4;
                                        break
                                    }
                                    return z(!1), Z(!1), e.abrupt("return");
                                case 4:
                                    return ee - Y > 0 && !L && !L && !P ? (t = E({}, t, {
                                        page: Q + 1,
                                        items_per_page: 12
                                    }), z(ee - Y > 0)) : (L || P) && (n = (0, f.t)(t), Array.isArray(n.domain) && n.domain.length > 0 && (n.domain = n.domain.map((function(e) {
                                        return e.value
                                    })).toString()), t = E({}, n, {
                                        page: Q,
                                        items_per_page: 12
                                    })), e.prev = 5, e.next = 9, m(t, b);
                                case 9:
                                    i = e.sent.data, l = null === i || void 0 === i || null === (r = i.data) || void 0 === r ? void 0 : r.items, te(null === i || void 0 === i || null === (o = i.data) || void 0 === o ? void 0 : o.totalCount), W((function(e) {
                                        return e + l.length
                                    })), q((function(e) {
                                        return ee - Y > 0 ? e + 1 : e
                                    })), w((function(e) {
                                        return M(e).concat(M(l))
                                    })), Z(!1), e.next = 22;
                                    break;
                                case 18:
                                    e.prev = 18, e.t0 = e.catch(5), console.error(e.t0), Z(!1);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 18]
                        ])
                    })), function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var o = e.apply(t, n);

                            function i(e) {
                                T(o, r, a, i, l, "next", e)
                            }

                            function l(e) {
                                T(o, r, a, i, l, "throw", e)
                            }
                            i(void 0)
                        }))
                    });
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                return (0, o.jsxs)(h.Z, {
                    children: [(0, o.jsxs)(g.Z, {
                        children: [(0, o.jsxs)(p.Z, {
                            xs: 9,
                            sm: 9,
                            md: 9,
                            lg: 12,
                            children: [(0, o.jsx)("h2", {
                                className: "section-title d-md-none d-lg-none",
                                children: d("reports")
                            }), (0, o.jsx)("h2", {
                                className: "section-header d-none d-md-flex d-lg-none",
                                children: d("reports")
                            })]
                        }), (0, o.jsx)(p.Z, {
                            xs: 3,
                            sm: 3,
                            className: "d-flex justify-content-end mb-3 d-lg-none ",
                            children: (0, o.jsx)(c.default, {
                                src: U ? "/images/filterIcon1.svg" : "/images/filterIcon2.svg",
                                width: 35,
                                height: 35,
                                alt: "icon",
                                onClick: function() {
                                    K(!U)
                                }
                            })
                        })]
                    }), (0, o.jsx)(g.Z, {
                        children: (0, o.jsx)(p.Z, {
                            lg: 12,
                            className: "".concat(U ? "d-sm-block" : "d-none", " d-lg-block"),
                            children: (0, o.jsx)(C, {
                                onFilterSubmit: function(e) {
                                    O(e)
                                },
                                categories: n,
                                domains: r,
                                isReseting: P,
                                setCurrentCount: W,
                                setIsReseting: F,
                                setCurrentPage: q,
                                setIsFiltering: $,
                                setReports: w
                            })
                        })
                    }), (0, o.jsx)(g.Z, {
                        children: N && !_ && (0, o.jsxs)(p.Z, {
                            className: "mb-3",
                            children: [(0, o.jsxs)("a", {
                                className: "d-inline-block cursor-pointer bold ".concat("ar" === b ? "reset-search" : "reset-search-en"),
                                onClick: function() {
                                    (L || P) && Object.keys(re).length > 0 && !_ && (F(!0), te(null === t || void 0 === t ? void 0 : t.totalCount))
                                },
                                children: [(0, o.jsx)(c.default, {
                                    src: "/images/reset.svg",
                                    width: "18",
                                    height: "16",
                                    className: "action",
                                    alt: "reset-search"
                                }), " ", d("Reset")]
                            }), (0, o.jsxs)("span", {
                                className: "secondary-color bold margin-inline-start-1 d-inline-block",
                                children: [ee, " ", d("Total count")]
                            })]
                        })
                    }), (0, o.jsx)(g.Z, {
                        children: _ && (0, o.jsx)("div", {
                            className: "text-center py-5",
                            children: (0, o.jsx)(y.Z, {
                                animation: "border",
                                role: "status",
                                children: (0, o.jsx)("span", {
                                    className: "visually-hidden",
                                    children: "Loading..."
                                })
                            })
                        })
                    }), !_ && (null === x || void 0 === x ? void 0 : x.length) > 0 && (0, o.jsx)(I.Z, {
                        dataLength: null === x || void 0 === x ? void 0 : x.length,
                        next: function() {
                            return ae(L ? re : ne)
                        },
                        hasMore: J,
                        loader: (0, o.jsxs)("span", {
                            children: [d("Loading"), "..."]
                        }),
                        endMessage: (0, o.jsx)("div", {
                            style: {
                                textAlign: "center",
                                color: "var(--theme-ui-colors-main_color)",
                                padding: "0.5rem",
                                marginBottom: "1rem"
                            },
                            children: (0, o.jsx)("p", {
                                style: {
                                    marginBottom: "0"
                                },
                                children: d("No more data to show")
                            })
                        }),
                        children: (0, o.jsx)(g.Z, {
                            children: x.map((function(e, t) {
                                return (0, o.jsx)(p.Z, {
                                    xl: 6,
                                    children: (0, o.jsx)(D, {
                                        report: e
                                    })
                                }, t)
                            }))
                        })
                    }), (_ || 0 !== (null === x || void 0 === x ? void 0 : x.length) || L) && (0 !== Y || 0 !== ee || P) ? null : (0, o.jsx)("p", {
                        className: "h3 text-center mb-5",
                        children: d("No results")
                    })]
                })
            }
        },
        21048: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return a
                }
            });
            var r = n(67294),
                a = function(e, t) {
                    var n = (0, r.useState)(e),
                        a = n[0],
                        o = n[1];
                    return (0, r.useEffect)((function() {
                        var n = setTimeout((function() {
                            o(e)
                        }), t);
                        return function() {
                            clearTimeout(n)
                        }
                    }), [e, t]), a
                }
        },
        16308: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                        } catch (s) {
                            l = !0, a = s
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(t, {
                t: function() {
                    return o
                }
            });
            var o = function(e) {
                var t = {};
                return Object.entries(e).forEach((function(e) {
                    var n = a(e, 2),
                        r = n[0],
                        o = n[1];
                    o && (t[r] = o)
                })), t
            }
        },
        98730: function(e) {
            e.exports = {
                img_container: "reports_img_container__Qy2pv",
                summary: "reports_summary__ygs_g",
                iconsContainer: "reports_iconsContainer__I8pcf",
                with_icon: "reports_with_icon__vIjuD"
            }
        }
    }
]);