(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3021], {
        62284: function(e, n, t) {
            "use strict";
            var r = t(85893),
                a = t(9198),
                i = t.n(a),
                s = t(4043),
                o = t(11163);
            n.Z = function(e) {
                var n = e.id,
                    t = void 0 === n ? "id" : n,
                    l = e.label,
                    c = void 0 === l ? "" : l,
                    d = e.startDate,
                    u = e.endDate,
                    m = e.onChange,
                    h = e.placeholderText;
                (0, a.registerLocale)("ar", s.Z);
                var f = (0, o.useRouter)().locale;
                return (0, r.jsxs)("div", {
                    className: "form-group",
                    children: [(0, r.jsx)("label", {
                        htmlFor: t,
                        children: c
                    }), (0, r.jsx)(i(), {
                        id: t,
                        className: "w-100",
                        onChange: m,
                        startDate: d,
                        endDate: u,
                        placeholderText: h,
                        selectsRange: !0,
                        dateFormat: "dd-MM-yyyy",
                        isClearable: !0,
                        locale: f,
                        dropdownMode: "select",
                        showYearDropdown: !0
                    })]
                })
            }
        },
        53096: function(e, n, t) {
            "use strict";
            var r = t(85893),
                a = t(67294),
                i = t(41664),
                s = t(10493),
                o = t(27933),
                l = t(80842),
                c = t.n(l),
                d = t(85177),
                u = t(25675),
                m = t(73978),
                h = t(43489);

            function f(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            n.Z = function(e) {
                var n, t, l = e.data,
                    v = (0, s.$G)("common").t,
                    g = (0, a.useState)(!1),
                    x = g[0],
                    j = g[1],
                    p = (0, a.useRef)(null),
                    y = (null === l || void 0 === l || null === (n = l.summary) || void 0 === n ? void 0 : n.length) > 225 ? (null === l || void 0 === l || null === (t = l.summary) || void 0 === t ? void 0 : t.substring(0, 160)) + "<span>[...]</span>" : null === l || void 0 === l ? void 0 : l.summary;
                return (0, r.jsxs)("div", {
                    className: "row g-0 ".concat(c()["news-card"]),
                    children: [(0, r.jsx)("div", {
                        className: "",
                        children: (0, r.jsx)("div", {
                            className: "image ".concat(c()["news-card__img-container"]),
                            style: {
                                backgroundSize: "cover",
                                backgroundPosition: "top",
                                backgroundRepeat: "no-repeat",
                                minHeight: "250px",
                                backgroundImage: "url(".concat((0, d.J)(null === l || void 0 === l ? void 0 : l.image), ")")
                            }
                        })
                    }), (0, r.jsxs)("div", {
                        className: "col ".concat(c()["news-card__content"]),
                        children: [(0, r.jsx)("h4", {
                            className: c()["news-card__title"],
                            children: (0, r.jsx)(i.default, {
                                href: "/news/[id]",
                                as: "/news/".concat(null === l || void 0 === l ? void 0 : l.id),
                                passHref: !0,
                                children: (0, r.jsx)("a", {
                                    children: null === l || void 0 === l ? void 0 : l.title
                                })
                            })
                        }), (0, r.jsx)("p", {
                            className: c()["news-card__subtitle"],
                            children: null === l || void 0 === l ? void 0 : l.type
                        }), (0, r.jsx)("div", {
                            className: c()["news-card__summary"],
                            dangerouslySetInnerHTML: {
                                __html: y
                            }
                        }), (0, r.jsxs)("div", {
                            className: "row mt-3",
                            children: [Array.isArray(null === l || void 0 === l ? void 0 : l.relatedDomains) && l.relatedDomains.length > 0 && (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)("div", {
                                    className: "col-md-6 mb-4",
                                    children: (0, r.jsxs)("div", {
                                        className: c()["news-card__info"],
                                        children: [(0, r.jsx)("div", {
                                            className: "",
                                            children: (0, r.jsx)(u.default, {
                                                src: "/images/domain.svg",
                                                alt: "domain icon",
                                                width: 16,
                                                height: 16,
                                                layout: "fixed"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: c()["news-card__info-content"],
                                            children: [(0, r.jsx)("strong", {
                                                children: v("Domain")
                                            }), (0, r.jsxs)("div", {
                                                children: [Array.isArray(null === l || void 0 === l ? void 0 : l.relatedDomains) && (null === l || void 0 === l ? void 0 : l.relatedDomains.length) > 1 ? (0, r.jsx)("a", {
                                                    className: "p-0 font-75",
                                                    ref: p,
                                                    onMouseEnter: function() {
                                                        return j(!0)
                                                    },
                                                    onMouseLeave: function() {
                                                        return j(!1)
                                                    },
                                                    children: v("multi-domain")
                                                }) : (0, r.jsx)("span", {
                                                    children: null === l || void 0 === l ? void 0 : l.relatedDomains
                                                }), (0, r.jsx)(m.Z, {
                                                    target: p.current,
                                                    show: x,
                                                    placement: "right",
                                                    children: function(e) {
                                                        return (0, r.jsx)(h.Z, function(e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                                })))), r.forEach((function(n) {
                                                                    f(e, n, t[n])
                                                                }))
                                                            }
                                                            return e
                                                        }({
                                                            id: "overlay-domain"
                                                        }, e, {
                                                            children: (null === l || void 0 === l ? void 0 : l.relatedDomains.length) > 1 && (null === l || void 0 === l ? void 0 : l.relatedDomains.map((function(e, n) {
                                                                return (0, r.jsx)("div", {
                                                                    className: "font-75 margin-inline-end-1",
                                                                    children: e
                                                                }, n)
                                                            })))
                                                        }))
                                                    }
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            }), Array.isArray(null === l || void 0 === l ? void 0 : l.tags) && l.tags.length > 0 && (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)("div", {
                                    className: "col-md-6 mb-4",
                                    children: (0, r.jsxs)("div", {
                                        className: c()["news-card__info"],
                                        children: [(0, r.jsx)("div", {
                                            className: "",
                                            children: (0, r.jsx)(u.default, {
                                                src: "/images/domain.svg",
                                                alt: "domain icon",
                                                width: 16,
                                                height: 16,
                                                layout: "fixed"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: c()["news-card__info-content"],
                                            children: [(0, r.jsx)("strong", {
                                                children: v("Tags")
                                            }), (0, r.jsx)("div", {
                                                className: "w-100",
                                                children: null === l || void 0 === l ? void 0 : l.tags.map((function(e, n) {
                                                    return (0, r.jsx)("span", {
                                                        className: "margin-inline-end-1",
                                                        children: e
                                                    }, n)
                                                }))
                                            })]
                                        })]
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: c()["news-card__info"],
                                    children: [(0, r.jsx)("div", {
                                        children: (0, r.jsx)(u.default, {
                                            src: "/images/calendar.svg",
                                            alt: "calendar icon",
                                            width: 16,
                                            height: 16,
                                            layout: "fixed"
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: c()["news-card__info-content"],
                                        children: [(0, r.jsx)("strong", {
                                            children: v("Date of publication")
                                        }), (0, r.jsx)("span", {
                                            children: (null === l || void 0 === l ? void 0 : l.date) || v("Undefined")
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "d-xs-block",
                                style: {
                                    textAlign: "center",
                                    margin: "1rem 0 0 0"
                                },
                                children: (0, r.jsx)(i.default, {
                                    href: "/news/[id]",
                                    as: "/news/".concat(null === l || void 0 === l ? void 0 : l.id),
                                    passHref: !0,
                                    children: (0, r.jsx)("a", {
                                        className: "w-100",
                                        children: (0, r.jsx)(o.zx, {
                                            className: "w-100",
                                            title: v("read more")
                                        })
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        53021: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return F
                }
            });
            var r = t(34051),
                a = t.n(r),
                i = t(85893),
                s = t(67294),
                o = t(25675),
                l = t(10493),
                c = t(11163),
                d = t(21048),
                u = t(99424),
                m = function(e, n) {
                    return u.Z.get("/api/listing/news?lang=".concat(n), {
                        params: e
                    })
                },
                h = function(e, n) {
                    return u.Z.get("/api/node/academy?lang=".concat(n), {
                        params: e
                    })
                },
                f = t(16308),
                v = t(10682),
                g = t(21608),
                x = t(31555),
                j = t(36968),
                p = t(53096),
                y = t(87536),
                _ = t(94022),
                w = t(62284);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function N(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function S(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }

            function D(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); s = !0);
                        } catch (l) {
                            o = !0, a = l
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                    var n = e.onFilterSubmit,
                        t = e.isReseting,
                        r = e.domains,
                        a = e.setCurrentCount,
                        o = (e.setIsReseting, e.setCurrentPage),
                        d = e.setIsFiltering,
                        u = e.setNews,
                        m = (0, l.$G)("common").t,
                        h = (0, s.useState)(null),
                        f = h[0],
                        v = h[1],
                        j = (0, s.useState)(null),
                        p = j[0],
                        b = j[1],
                        N = (0, c.useRouter)().asPath.includes("academy"),
                        O = (0, y.cI)({
                            defaultValues: {
                                domain: "",
                                dateFrom: null,
                                dateTo: null,
                                searchKey: ""
                            }
                        }),
                        Z = O.register,
                        k = O.watch,
                        A = O.getValues,
                        C = O.control,
                        P = O.reset,
                        I = (0, s.useState)(A()),
                        F = I[0],
                        T = I[1],
                        L = r.map((function(e) {
                            return {
                                label: e.title,
                                value: e.id
                            }
                        }));
                    (0, s.useEffect)((function() {
                        t && (P(), v(null), b(null), T({
                            dateFrom: null,
                            dateTo: null,
                            domain: "",
                            searchKey: ""
                        }), n({}), E(!1, 0, !0), setTimeout((function() {
                            return d(!1)
                        })));
                        var e = k((function(e) {
                            E(!0, 0, !0), f && p && (e.dateFrom = new Date(f).toLocaleDateString("en-CA"), e.dateTo = new Date(p).toLocaleDateString("en-CA")), T(e), n(e)
                        }));
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [k, P, A, t, f, p]);
                    var E = function(e, n, t) {
                        d(e), a(n), o(0), t && u([])
                    };
                    return (0, i.jsx)("div", {
                        className: "services-filtration mb-4",
                        children: (0, i.jsx)("form", {
                            id: "news-filtration-form",
                            children: (0, i.jsxs)(g.Z, {
                                children: [N ? null : (0, i.jsx)(x.Z, {
                                    lg: 4,
                                    children: (0, i.jsx)(_.Z, {
                                        id: "domainSelectorEvents",
                                        label: m("Domains"),
                                        isMulti: !0,
                                        name: "domain",
                                        control: C,
                                        options: L
                                    })
                                }), (0, i.jsx)(x.Z, {
                                    lg: 4,
                                    children: (0, i.jsx)(w.Z, {
                                        id: "dateSelector",
                                        label: m("Date"),
                                        startDate: f,
                                        endDate: p,
                                        placeholderText: m("Select the date"),
                                        onChange: function(e) {
                                            return function(e) {
                                                var t = D(e, 2),
                                                    r = t[0],
                                                    a = t[1];
                                                v(r), b(a), r && a && (n(S({}, F, {
                                                    dateFrom: new Date(r).toLocaleDateString("en-CA"),
                                                    dateTo: new Date(a).toLocaleDateString("en-CA")
                                                })), E(!0, 0, !0)), r || a || (T(S({}, F, {
                                                    dateFrom: null,
                                                    dateTo: null
                                                })), n({}))
                                            }(e)
                                        }
                                    })
                                }), (0, i.jsx)(x.Z, {
                                    lg: 4,
                                    children: (0, i.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, i.jsx)("label", {
                                            htmlFor: "searchKey",
                                            children: m("Search")
                                        }), (0, i.jsx)("input", S({}, Z("searchKey", {
                                            required: !1
                                        }), {
                                            id: "searchKey",
                                            name: "searchKey",
                                            type: "search",
                                            className: "form-control",
                                            placeholder: m("Search here"),
                                            maxLength: 100
                                        }))]
                                    })
                                })]
                            })
                        })
                    })
                },
                Z = t(58533);

            function k(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function A(e, n, t, r, a, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (c) {
                    return void t(c)
                }
                o.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function C(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        C(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e) {
                return function(e) {
                    if (Array.isArray(e)) return k(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return k(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = function(e) {
                var n = e.news,
                    t = e.domains,
                    r = (0, l.$G)("common").t,
                    u = (0, c.useRouter)(),
                    y = u.locale,
                    _ = u.pathname,
                    w = (0, s.useState)((null === n || void 0 === n ? void 0 : n.items) || n || []),
                    b = w[0],
                    N = w[1],
                    S = (0, s.useState)({}),
                    D = S[0],
                    k = S[1],
                    C = (0, s.useState)(!1),
                    F = C[0],
                    T = C[1],
                    L = (0, s.useState)(!1),
                    E = L[0],
                    M = L[1],
                    R = (0, s.useState)(!1),
                    K = R[0],
                    q = R[1],
                    $ = (0, s.useState)(!1),
                    G = $[0],
                    H = $[1],
                    B = (0, s.useState)(!1),
                    J = B[0],
                    U = B[1],
                    V = (0, s.useState)(0),
                    z = V[0],
                    W = V[1],
                    X = (0, s.useState)(b.length),
                    Y = X[0],
                    Q = X[1],
                    ee = (0, s.useState)((null === n || void 0 === n ? void 0 : n.totalCount) || n.length),
                    ne = ee[0],
                    te = ee[1],
                    re = {
                        page: z,
                        items_per_page: 12
                    },
                    ae = (0, d.N)(D, 1e3);
                (0, s.useEffect)((function() {
                    if (U(ne - Y > 0), K && E && M(!1), Object.keys(ae).length > 0) {
                        var e = (0, f.t)(D);
                        e.domain && 0 != e.domain.length && (e.domain = e.domain.map((function(e) {
                            return e.value
                        })).toString()), T(!0), 0 === (null === n || void 0 === n ? void 0 : n.length) && T(!1), ie(e)
                    }
                }), [ae, K]);
                var ie = function() {
                    var e, n = (e = a().mark((function e(n) {
                        var t, r, i, s, o, l, c, d;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ne !== Y || 0 === ne) {
                                        e.next = 4;
                                        break
                                    }
                                    return U(!1), T(!1), e.abrupt("return");
                                case 4:
                                    if (ne - Y > 0 && !K && !K && !E ? (n = P({}, n, {
                                            page: z + 1,
                                            items_per_page: 12
                                        }), U(ne - Y > 0)) : (K || E) && (t = (0, f.t)(n), Array.isArray(t.domain) && t.domain.length > 0 && (t.domain = t.domain.map((function(e) {
                                            return e.value
                                        })).toString()), n = P({}, t, {
                                            page: z,
                                            items_per_page: 12
                                        })), e.prev = 5, !_.includes("academy")) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 12, h(n, y);
                                case 12:
                                    o = e.sent.data, r = null === o || void 0 === o || null === (s = o.data) || void 0 === s ? void 0 : s.news, e.next = 22;
                                    break;
                                case 16:
                                    return e.next = 19, m(n, y);
                                case 19:
                                    d = e.sent.data, r = null === d || void 0 === d || null === (l = d.data) || void 0 === l ? void 0 : l.items, i = null === d || void 0 === d || null === (c = d.data) || void 0 === c ? void 0 : c.totalCount;
                                case 22:
                                    te(i), Q((function(e) {
                                        return e + r.length
                                    })), W((function(e) {
                                        return ne - Y > 0 ? e + 1 : e
                                    })), N((function(e) {
                                        return I(e).concat(I(r))
                                    })), T(!1), e.next = 33;
                                    break;
                                case 29:
                                    e.prev = 29, e.t0 = e.catch(5), console.error(e.t0), T(!1);
                                case 33:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [5, 29]
                        ])
                    })), function() {
                        var n = this,
                            t = arguments;
                        return new Promise((function(r, a) {
                            var i = e.apply(n, t);

                            function s(e) {
                                A(i, r, a, s, o, "next", e)
                            }

                            function o(e) {
                                A(i, r, a, s, o, "throw", e)
                            }
                            s(void 0)
                        }))
                    });
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }();
                return (0, i.jsxs)(v.Z, {
                    children: [(0, i.jsx)("h2", {
                        className: "section-header d-none d-lg-flex",
                        children: r("News")
                    }), (0, i.jsxs)(g.Z, {
                        children: [(0, i.jsxs)(x.Z, {
                            xs: 9,
                            sm: 9,
                            md: 9,
                            lg: 12,
                            children: [(0, i.jsx)("h2", {
                                className: "section-title d-md-none d-lg-none",
                                children: r("News")
                            }), (0, i.jsx)("h2", {
                                className: "section-header d-none d-md-flex d-lg-none",
                                children: r("News")
                            })]
                        }), (0, i.jsx)(x.Z, {
                            xs: 3,
                            sm: 3,
                            className: "d-flex justify-content-end mb-3 d-lg-none ",
                            children: (0, i.jsx)(o.default, {
                                src: G ? "/images/filterIcon1.svg" : "/images/filterIcon2.svg",
                                width: 35,
                                height: 35,
                                alt: "icon",
                                onClick: function() {
                                    H(!G)
                                }
                            })
                        })]
                    }), (0, i.jsx)(g.Z, {
                        children: (0, i.jsx)(x.Z, {
                            lg: 12,
                            className: "".concat(G ? "d-sm-block" : "d-none", " d-lg-block"),
                            children: (0, i.jsx)(O, {
                                onFilterSubmit: function(e) {
                                    k(e)
                                },
                                domains: t,
                                isReseting: E,
                                setCurrentCount: Q,
                                setIsReseting: M,
                                setCurrentPage: W,
                                setIsFiltering: q,
                                setNews: N
                            })
                        })
                    }), (0, i.jsx)(g.Z, {
                        children: D && !F && (0, i.jsxs)(x.Z, {
                            className: "mb-3",
                            children: [(0, i.jsxs)("a", {
                                className: "d-inline-block cursor-pointer bold ".concat("ar" === y ? "reset-search" : "reset-search-en"),
                                onClick: function() {
                                    (K || E) && Object.keys(ae).length > 0 && !F && (M(!0), te((null === n || void 0 === n ? void 0 : n.totalCount) || n.length))
                                },
                                children: [(0, i.jsx)(o.default, {
                                    src: "/images/reset.svg",
                                    width: "18",
                                    height: "16",
                                    className: "action",
                                    alt: "reset-search"
                                }), " ", r("Reset")]
                            }), (0, i.jsxs)("span", {
                                className: "secondary-color bold margin-inline-start-1 d-inline-block",
                                children: [ne, " ", r("Total count")]
                            })]
                        })
                    }), (0, i.jsx)(g.Z, {
                        children: F && (0, i.jsx)("div", {
                            className: "text-center py-5",
                            children: (0, i.jsx)(j.Z, {
                                animation: "border",
                                role: "status",
                                children: (0, i.jsx)("span", {
                                    className: "visually-hidden",
                                    children: "Loading..."
                                })
                            })
                        })
                    }), !F && (null === b || void 0 === b ? void 0 : b.length) > 0 && (0, i.jsx)(Z.Z, {
                        dataLength: null === b || void 0 === b ? void 0 : b.length,
                        next: function() {
                            return ie(K ? ae : re)
                        },
                        hasMore: J,
                        loader: (0, i.jsxs)("span", {
                            children: [r("Loading"), "..."]
                        }),
                        endMessage: (0, i.jsx)("div", {
                            style: {
                                textAlign: "center",
                                color: "var(--theme-ui-colors-main_color)",
                                padding: "0.5rem",
                                marginBottom: "1rem"
                            },
                            children: (0, i.jsx)("p", {
                                style: {
                                    marginBottom: "0"
                                },
                                children: r("No more data to show")
                            })
                        }),
                        children: (0, i.jsx)(g.Z, {
                            children: null === b || void 0 === b ? void 0 : b.map((function(e, n) {
                                return (0, i.jsx)(x.Z, {
                                    sm: 12,
                                    md: 12,
                                    lg: 12,
                                    xl: 4,
                                    children: (0, i.jsx)(p.Z, {
                                        data: e
                                    })
                                }, n)
                            }))
                        })
                    }), (0, i.jsx)(g.Z, {
                        children: (F || 0 !== (null === b || void 0 === b ? void 0 : b.length) || K) && (0 !== Y || 0 !== ne || E) ? null : (0, i.jsx)("p", {
                            className: "h3 text-center mb-5",
                            children: r("No results")
                        })
                    })]
                })
            }
        },
        80842: function(e) {
            e.exports = {
                "news-card": "news-card_news-card__K3hpN",
                "news-card__img-container": "news-card_news-card__img-container__XtZAm",
                "news-card__content": "news-card_news-card__content__q9qVN",
                "news-card__title": "news-card_news-card__title__kvCnq",
                "news-card__subtitle": "news-card_news-card__subtitle__Bq1l8",
                "news-card__button": "news-card_news-card__button__JdS3J",
                "news-card__info": "news-card_news-card__info__Dtrlm",
                clock: "news-card_clock__71WnL",
                "news-card__info-content": "news-card_news-card__info-content__dmtjK",
                "news-card__summary": "news-card_news-card__summary__xsv3G",
                "news-card__info-body": "news-card_news-card__info-body__oWxNL"
            }
        }
    }
]);