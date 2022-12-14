(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3672], {
        91424: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/information-center", function() {
                return n(19196)
            }])
        },
        93174: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return _
                }
            });
            var r = n(18733),
                a = n(67294),
                i = n(22004),
                s = n(10682),
                o = n(21608),
                l = n(31555),
                c = n(87930),
                d = n(81569),
                u = n.n(d),
                h = n(10493),
                f = n(11163),
                p = n(25675),
                v = n(85177),
                m = n(27933),
                _ = function(e) {
                    var t = e.title,
                        n = e.subtitle,
                        d = e.hasVideo,
                        _ = void 0 !== d && d,
                        y = e.videoUrl,
                        b = void 0 === y ? "" : y,
                        x = e.image,
                        j = e.hasButton,
                        g = e.buttonUrl,
                        Z = e.buttonTitle,
                        C = (0, h.$G)("common").t,
                        N = (0, f.useRouter)().locale,
                        S = (0, a.useState)(!1),
                        k = S[0],
                        w = S[1];
                    return (0, r.tZ)("div", {
                        className: "".concat(u().hero),
                        sx: {
                            background: function(e) {
                                return e.colors.bg_gradient
                            }
                        }
                    }, (0, r.tZ)(s.Z, null, (0, r.tZ)(o.Z, null, (0, r.tZ)("h1", {
                        className: "".concat(u().hero__title)
                    }, t), x && (0, r.tZ)("div", {
                        className: "d-flex justify-content-center d-md-none"
                    }, (0, r.tZ)(p.default, {
                        src: (0, v.J)(x),
                        width: 250,
                        height: 250,
                        alt: t
                    })), (0, r.tZ)(l.Z, {
                        lg: 8
                    }, (0, r.tZ)("div", {
                        className: "".concat(u().hero__content)
                    }, (0, r.tZ)("div", {
                        className: "my-5 ".concat(u().hero__subtitle),
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    }), j && (0, r.tZ)("div", {
                        className: "mt-5"
                    }, (0, r.tZ)("a", {
                        href: g,
                        target: "_blank",
                        rel: "noreferrer"
                    }, (0, r.tZ)(m.zx, {
                        title: Z,
                        secondary: !0
                    }))))), x && (0, r.tZ)(l.Z, {
                        lg: 4,
                        className: "d-none d-md-flex justify-content-md-center"
                    }, (0, r.tZ)(p.default, {
                        src: (0, v.J)(x),
                        width: 500,
                        height: 500,
                        alt: t
                    })))), _ && b && (0, r.tZ)(a.Fragment, null, (0, r.tZ)("button", {
                        className: "btn ".concat(u()["hero__video-btn"]),
                        onClick: function() {
                            return w(!0)
                        }
                    }, (0, r.tZ)("i", {
                        className: "ar" == N ? "fas fa-caret-right pr-1" : "fas fa-caret-left pr-1"
                    }), (0, r.tZ)("span", {
                        className: "bold"
                    }, C("Explanation video"))), (0, r.tZ)(c.Z, {
                        size: "lg",
                        show: k,
                        onHide: function() {
                            return w(!1)
                        },
                        centered: !0,
                        className: "p-0 border-0"
                    }, (0, r.tZ)(c.Z.Body, {
                        className: "p-0 border-0"
                    }, (0, r.tZ)(i.Z, {
                        className: "w-100",
                        width: "100%",
                        controls: !0,
                        url: (0, v.J)(b)
                    })))))
                }
        },
        19196: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return z
                },
                default: function() {
                    return J
                }
            });
            var r = n(85893),
                a = n(67294),
                i = n(10493),
                s = n(11163),
                o = n(27933),
                l = n(85470),
                c = n(60489),
                d = n(10682),
                u = n(21608),
                h = n(31555),
                f = n(59946),
                p = n(80823),
                v = n.n(p),
                m = n(52327),
                _ = n.n(m),
                y = n(41664),
                b = n(85177),
                x = function(e) {
                    var t, n, a = e.cardData,
                        s = (0, i.$G)("common").t;
                    return (0, r.jsxs)("div", {
                        className: "row g-0 ".concat(v()["ip-card"], " ").concat(_().mainContainer),
                        children: [(0, r.jsx)("div", {
                            className: "col-md-4 col-lg-5 col-xl-4",
                            children: (0, r.jsx)("div", {
                                className: "image ".concat(v()["ip-card__img-container"], " ").concat(_().imageContainer),
                                style: {
                                    backgroundImage: "url(".concat((0, b.J)(null === a || void 0 === a ? void 0 : a.image), ")")
                                },
                                children: (0, r.jsx)(y.default, {
                                    href: null === a || void 0 === a || null === (t = a.link) || void 0 === t ? void 0 : t.uri,
                                    passHref: !0,
                                    children: (0, r.jsx)(o.zx, {
                                        className: v()["ip-card__button"],
                                        white: !0,
                                        title: s("read more")
                                    })
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: "col ".concat(v()["ip-card__content"]),
                            children: [(0, r.jsx)("h4", {
                                className: v()["ip-card__title"],
                                children: null === a || void 0 === a ? void 0 : a.title
                            }), (0, r.jsx)("p", {
                                className: "my-3",
                                children: null === a || void 0 === a ? void 0 : a.summary
                            })]
                        }), (0, r.jsx)("div", {
                            className: "d-xs-block d-md-none",
                            style: {
                                textAlign: "center",
                                marginBottom: "1rem"
                            },
                            children: (0, r.jsx)(y.default, {
                                href: null === a || void 0 === a || null === (n = a.link) || void 0 === n ? void 0 : n.uri,
                                passHref: !0,
                                children: (0, r.jsx)("a", {
                                    children: (0, r.jsx)(o.zx, {
                                        title: s("read more"),
                                        style: {
                                            width: "75%"
                                        }
                                    })
                                })
                            })
                        })]
                    })
                },
                j = function(e) {
                    var t = e.data,
                        n = (0, i.$G)("common").t;
                    return (0, r.jsxs)(d.Z, {
                        children: [(0, r.jsx)(u.Z, {
                            children: (null === t || void 0 === t ? void 0 : t.length) > 0 && (null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                return (0, r.jsx)(h.Z, {
                                    md: 12,
                                    lg: 6,
                                    children: (0, r.jsx)(x, {
                                        cardData: e
                                    })
                                }, e.id)
                            })))
                        }), (0, r.jsx)(u.Z, {
                            children: 0 === (null === t || void 0 === t ? void 0 : t.length) && (0, r.jsx)("p", {
                                className: "h3 text-center mb-5",
                                children: n("No results")
                            })
                        })]
                    })
                },
                g = n(34051),
                Z = n.n(g),
                C = n(36968),
                N = n(87536),
                S = n(93174),
                k = n(94022),
                w = n(31877),
                A = n(60521);
            var I = n(28278);
            w.Z.register(I.Z);
            w.Z.register(I.Z);
            var L = n(96369),
                D = n.n(L),
                P = n(88598);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
                        } catch (l) {
                            o = !0, a = l
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Y = function(e) {
                var t = e.data,
                    n = e.selectedYear,
                    a = t.total_deposits,
                    s = void 0 === a ? "" : a,
                    o = t.protection_certificates,
                    l = void 0 === o ? "" : o,
                    c = t.patent_deposits_chart,
                    d = void 0 === c ? [] : c,
                    f = (0, i.$G)("information-center").t,
                    p = Object.keys(d),
                    v = [],
                    m = [],
                    _ = !0,
                    y = !1,
                    b = void 0;
                try {
                    for (var x, j = Object.entries(d)[Symbol.iterator](); !(_ = (x = j.next()).done); _ = !0) {
                        var g = K(x.value, 2),
                            Z = (g[0], g[1]),
                            C = !0,
                            N = !1,
                            S = void 0;
                        try {
                            for (var k, w = Object.entries(Z)[Symbol.iterator](); !(C = (k = w.next()).done); C = !0) {
                                var A = K(k.value, 2),
                                    I = A[0],
                                    L = A[1];
                                "total_deposits" === I && v.push(L), "protection_certificates" === I && m.push(L)
                            }
                        } catch (Y) {
                            N = !0, S = Y
                        } finally {
                            try {
                                C || null == w.return || w.return()
                            } finally {
                                if (N) throw S
                            }
                        }
                    }
                } catch (Y) {
                    y = !0, b = Y
                } finally {
                    try {
                        _ || null == j.return || j.return()
                    } finally {
                        if (y) throw b
                    }
                }
                var O = {
                    labels: p,
                    datasets: [{
                        label: "Deposits",
                        data: v,
                        fill: !1,
                        borderColor: "#00A19B"
                    }, {
                        label: "Protection Certificates",
                        data: m,
                        fill: !1,
                        borderColor: "#0065A1"
                    }]
                };
                return (0, r.jsxs)(u.Z, {
                    className: "".concat(D().sectionStyle, " ").concat(n ? "border-0" : ""),
                    children: [(0, r.jsxs)(h.Z, {
                        md: n ? 6 : 4,
                        className: D().depositContainer,
                        children: [(0, r.jsxs)("div", {
                            className: D().depositContent,
                            children: [(0, r.jsxs)("div", {
                                className: "h5",
                                children: [f(n ? "total deposits for year " : "total deposits"), n]
                            }), (0, r.jsx)("span", {
                                children: s
                            })]
                        }), (0, r.jsxs)("div", {
                            className: D().depositContent,
                            children: [(0, r.jsxs)("div", {
                                className: "h5",
                                children: [f(n ? "protection certificates for year " : "protection certificates"), n]
                            }), (0, r.jsx)("span", {
                                children: l
                            })]
                        })]
                    }), n ? null : (0, r.jsx)(h.Z, {
                        md: 8,
                        className: "d-flex align-items-center justify-content-center my-4",
                        children: (0, r.jsx)(P.x1, {
                            data: O,
                            options: {
                                layout: {
                                    padding: 20
                                },
                                plugins: {
                                    legend: {
                                        display: !1
                                    },
                                    datalabels: {
                                        display: !0
                                    }
                                },
                                scales: {
                                    y: {
                                        display: !1
                                    }
                                }
                            }
                        })
                    })]
                })
            };
            w.Z.register(I.Z);
            var E = function(e) {
                var t = e.data,
                    n = (e.setChartData, e.countries, e.fieldsLookup, e.selectedYear),
                    a = (t.applicant_country, t.applicant_source, t.applicant_type, t.application_deposit_date, t.application_grant_date, t.fields, t.patent_deposits),
                    i = void 0 === a ? {} : a;
                t._globals;
                return (0, r.jsx)(d.Z, {
                    children: (0, r.jsx)(u.Z, {
                        children: (0, r.jsx)(h.Z, {
                            children: (0, r.jsx)(Y, {
                                data: i,
                                selectedYear: n
                            })
                        })
                    })
                })
            };

            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
                        } catch (l) {
                            o = !0, a = l
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e) {
                    var t = e.data,
                        n = e.selectedYear,
                        a = t.total_deposits,
                        s = void 0 === a ? "" : a,
                        o = t.protection_certificates,
                        l = void 0 === o ? "" : o,
                        c = t.patent_deposits_chart,
                        d = void 0 === c ? [] : c,
                        f = (0, i.$G)("information-center").t,
                        p = Object.keys(d),
                        v = [],
                        m = [],
                        _ = !0,
                        y = !1,
                        b = void 0;
                    try {
                        for (var x, j = Object.entries(d)[Symbol.iterator](); !(_ = (x = j.next()).done); _ = !0) {
                            var g = U(x.value, 2),
                                Z = (g[0], g[1]),
                                C = !0,
                                N = !1,
                                S = void 0;
                            try {
                                for (var k, w = Object.entries(Z)[Symbol.iterator](); !(C = (k = w.next()).done); C = !0) {
                                    var A = U(k.value, 2),
                                        I = A[0],
                                        L = A[1];
                                    "total_deposits" === I && v.push(L), "protection_certificates" === I && m.push(L)
                                }
                            } catch (K) {
                                N = !0, S = K
                            } finally {
                                try {
                                    C || null == w.return || w.return()
                                } finally {
                                    if (N) throw S
                                }
                            }
                        }
                    } catch (K) {
                        y = !0, b = K
                    } finally {
                        try {
                            _ || null == j.return || j.return()
                        } finally {
                            if (y) throw b
                        }
                    }
                    var O = {
                        labels: p,
                        datasets: [{
                            label: "Deposits",
                            data: v,
                            fill: !1,
                            borderColor: "#00A19B"
                        }, {
                            label: "Protection Certificates",
                            data: m,
                            fill: !1,
                            borderColor: "#0065A1"
                        }]
                    };
                    return (0, r.jsxs)(u.Z, {
                        className: "".concat(D().sectionStyle, " ").concat(n ? "border-0" : ""),
                        children: [(0, r.jsxs)(h.Z, {
                            md: n ? 6 : 4,
                            className: D().depositContainer,
                            children: [(0, r.jsxs)("div", {
                                className: D().depositContent,
                                children: [(0, r.jsxs)("div", {
                                    className: "h5",
                                    children: [f(n ? "total deposits for year " : "total deposits"), n]
                                }), (0, r.jsx)("span", {
                                    children: s
                                })]
                            }), (0, r.jsxs)("div", {
                                className: D().depositContent,
                                children: [(0, r.jsxs)("div", {
                                    className: "h5",
                                    children: [f(n ? "protection certificates for year " : "protection certificates"), n]
                                }), (0, r.jsx)("span", {
                                    children: l
                                })]
                            })]
                        }), n ? null : (0, r.jsx)(h.Z, {
                            md: 8,
                            className: "d-flex align-items-center justify-content-center my-4",
                            children: (0, r.jsx)(P.x1, {
                                data: O,
                                options: {
                                    plugins: {
                                        legend: {
                                            display: !1
                                        },
                                        datalabels: {
                                            display: !0
                                        }
                                    },
                                    scales: {
                                        y: {
                                            display: !1
                                        }
                                    }
                                }
                            })
                        })]
                    })
                },
                $ = function(e) {
                    var t = e.data,
                        n = e.selectedYear,
                        a = t.patent_deposits,
                        i = void 0 === a ? {} : a;
                    return (0, r.jsx)(d.Z, {
                        children: (0, r.jsx)(u.Z, {
                            children: (0, r.jsx)(h.Z, {
                                children: (0, r.jsx)(T, {
                                    data: i,
                                    selectedYear: n
                                })
                            })
                        })
                    })
                };
            n(25675);

            function B(e, t, n, r, a, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (c) {
                    return void n(c)
                }
                o.done ? t(l) : Promise.resolve(l).then(r, a)
            }
            var F = function(e) {
                var t, n, l, p, v, m, _ = e.data,
                    y = e.chartsData,
                    b = e.years,
                    x = e.countries,
                    j = e.fields,
                    g = e.industryChartsData,
                    w = e.industryChartYears,
                    I = (e.industryChartCountries, (0, i.$G)(["information-center", "common"]).t),
                    L = (0, a.useState)(y || {}),
                    P = L[0],
                    O = L[1],
                    K = (0, a.useState)(g || {}),
                    Y = K[0],
                    G = K[1],
                    U = (0, a.useState)(!1),
                    T = U[0],
                    F = U[1],
                    H = (0, a.useState)("patent-tab"),
                    M = H[0],
                    z = H[1],
                    J = ((0, s.useRouter)().locale, (0, N.cI)({
                        defaultValues: {
                            years: ""
                        }
                    })),
                    R = J.watch,
                    V = J.control,
                    X = J.getValues,
                    q = J.reset,
                    Q = null === b || void 0 === b ? void 0 : b.data.map((function(e) {
                        return {
                            label: e,
                            value: +e
                        }
                    })),
                    W = null === w || void 0 === w ? void 0 : w.data.map((function(e) {
                        return {
                            label: e,
                            value: +e
                        }
                    }));
                return (0, a.useEffect)((function() {
                    var e = function() {
                            var e, t = (e = Z().mark((function e() {
                                var t, n, r, a, i = arguments;
                                return Z().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = i.length > 0 && void 0 !== i[0] && i[0], F(!0), r = null === (n = X().years) || void 0 === n ? void 0 : n.value, "patent-tab" !== M) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 7, (0, A._)({
                                                url: t ? "/api/patent-info" : "/api/patent-info?year=".concat(r)
                                            });
                                        case 7:
                                            e.t0 = e.sent, e.next = 13;
                                            break;
                                        case 10:
                                            return e.next = 12, (0, A._)({
                                                url: t ? "/api/industrial-design-info" : "/api/industrial-design-info?year=".concat(r)
                                            });
                                        case 12:
                                            e.t0 = e.sent;
                                        case 13:
                                            (null === (a = e.t0) || void 0 === a ? void 0 : a.data) && ("patent-tab" === M ? O(null === a || void 0 === a ? void 0 : a.data) : G(null === a || void 0 === a ? void 0 : a.data), F(!1));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, a) {
                                    var i = e.apply(t, n);

                                    function s(e) {
                                        B(i, r, a, s, o, "next", e)
                                    }

                                    function o(e) {
                                        B(i, r, a, s, o, "throw", e)
                                    }
                                    s(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        t = R((function(t) {
                            var n;
                            (null === (n = t.years) || void 0 === n ? void 0 : n.value) && e(), t.years || e(!0)
                        }));
                    return function() {
                        return t.unsubscribe()
                    }
                }), [R, M]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.Z, {
                        children: (0, r.jsx)(h.Z, {
                            children: (0, r.jsx)(S.c, {
                                title: null === _ || void 0 === _ ? void 0 : _.title,
                                hasVideo: !!(null === _ || void 0 === _ ? void 0 : _.video),
                                videoUrl: null === _ || void 0 === _ ? void 0 : _.video,
                                subtitle: null === _ || void 0 === _ ? void 0 : _.summary,
                                image: null === _ || void 0 === _ ? void 0 : _.image
                            })
                        })
                    }), (0, r.jsx)(d.Z, {
                        children: (0, r.jsx)(u.Z, {
                            className: "my-5",
                            children: (0, r.jsxs)(h.Z, {
                                className: D().mainSection,
                                children: [(0, r.jsx)("h2", {
                                    children: I("information statistics")
                                }), (0, r.jsxs)(c.Z.Container, {
                                    defaultActiveKey: "tab1",
                                    onSelect: function(e) {
                                        return function(e) {
                                            "tab1" === e && (z("patent-tab"), q()), "tab2" === e && (z("industry-tab"), q())
                                        }(e)
                                    },
                                    children: [(0, r.jsxs)(u.Z, {
                                        className: "my-5",
                                        children: [(0, r.jsx)(h.Z, {
                                            md: 8,
                                            children: (0, r.jsxs)(f.Z, {
                                                className: "patents-tabs",
                                                children: [(0, r.jsx)(f.Z.Item, {
                                                    children: (0, r.jsx)(f.Z.Link, {
                                                        eventKey: "tab1",
                                                        children: I("patent info")
                                                    })
                                                }), (0, r.jsx)(f.Z.Item, {
                                                    children: (0, r.jsx)(f.Z.Link, {
                                                        eventKey: "tab2",
                                                        children: I("industry statistics")
                                                    })
                                                })]
                                            })
                                        }), (0, r.jsx)(h.Z, {
                                            md: 4,
                                            children: (0, r.jsx)(k.Z, {
                                                name: "years",
                                                control: V,
                                                options: ("patent-tab" === M ? Q : W) || [],
                                                placeholder: I("All", {
                                                    ns: "common"
                                                })
                                            })
                                        })]
                                    }), (0, r.jsxs)(c.Z.Content, {
                                        children: [(0, r.jsxs)(c.Z.Pane, {
                                            eventKey: "tab1",
                                            children: ["0" !== (null === P || void 0 === P || null === (t = P.patent_deposits) || void 0 === t ? void 0 : t.total_deposits) && (0, r.jsxs)(r.Fragment, {
                                                children: [T ? (0, r.jsx)("div", {
                                                    className: "text-center py-5",
                                                    children: (0, r.jsx)(C.Z, {
                                                        animation: "border",
                                                        role: "status",
                                                        children: (0, r.jsx)("span", {
                                                            className: "visually-hidden",
                                                            children: "Loading..."
                                                        })
                                                    })
                                                }) : (0, r.jsx)(E, {
                                                    data: P,
                                                    setChartData: O,
                                                    countries: x,
                                                    fieldsLookup: j,
                                                    selectedYear: null === (n = X().years) || void 0 === n ? void 0 : n.value
                                                }), 0 === Object.keys(P).length && (0, r.jsx)(u.Z, {
                                                    children: (0, r.jsx)("p", {
                                                        className: "h3 text-center mb-5",
                                                        children: I("No results")
                                                    })
                                                })]
                                            }), "0" === (null === P || void 0 === P || null === (l = P.patent_deposits) || void 0 === l ? void 0 : l.total_deposits) && (0, r.jsx)(o.Mr, {})]
                                        }), (0, r.jsxs)(c.Z.Pane, {
                                            eventKey: "tab2",
                                            children: ["0" !== (null === Y || void 0 === Y || null === (p = Y.patent_deposits) || void 0 === p ? void 0 : p.total_deposits) && (0, r.jsxs)(r.Fragment, {
                                                children: [T ? (0, r.jsx)("div", {
                                                    className: "text-center py-5",
                                                    children: (0, r.jsx)(C.Z, {
                                                        animation: "border",
                                                        role: "status",
                                                        children: (0, r.jsx)("span", {
                                                            className: "visually-hidden",
                                                            children: "Loading..."
                                                        })
                                                    })
                                                }) : (0, r.jsx)($, {
                                                    data: Y,
                                                    selectedYear: null === (v = X().years) || void 0 === v ? void 0 : v.value
                                                }), 0 === Object.keys(g).length && (0, r.jsx)(u.Z, {
                                                    children: (0, r.jsx)("p", {
                                                        className: "h3 text-center mb-5",
                                                        children: I("No results")
                                                    })
                                                })]
                                            }), "0" === (null === Y || void 0 === Y || null === (m = Y.patent_deposits) || void 0 === m ? void 0 : m.total_deposits) && (0, r.jsx)(o.Mr, {})]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            };

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return H(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return H(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var z = !0,
                J = function(e) {
                    var t = e.headerData,
                        n = e.footerData,
                        p = e.reportData,
                        v = e.reportCategories,
                        m = e.reportDomains,
                        _ = e.searchEngineData,
                        y = e.briefData,
                        b = e.chartsData,
                        x = e.chartYears,
                        g = e.chartFields,
                        Z = e.chartCountries,
                        C = e.industryChartsData,
                        N = e.industryChartYears,
                        S = e.industryChartCountries,
                        k = e.breadCrumb,
                        w = (0, a.useState)("ic-brief"),
                        A = w[0],
                        I = w[1],
                        L = (0, i.$G)("common").t,
                        D = (0, a.useState)(k),
                        P = D[0],
                        O = D[1],
                        K = (0, s.useRouter)();
                    return (0, a.useEffect)((function() {
                        var e = K.asPath ? K.asPath.split("#")[1] : null;
                        if (e) {
                            I(e);
                            var t = {
                                title: L(e),
                                type: "slug",
                                href: null
                            };
                            O(M(k).concat([t]))
                        } else O(k), I("ic-brief")
                    }), [k, K.asPath, L]), (0, r.jsx)(o.T3, {
                        headerProps: {
                            headerData: t
                        },
                        footerProps: {
                            footerData: n
                        },
                        breadCrumb: P,
                        title: L("Information Center"),
                        children: (0, r.jsxs)(c.Z.Container, {
                            defaultActiveKey: A,
                            onSelect: function(e) {
                                return function(e) {
                                    I(e), K.push({
                                        pathname: "/information-center"
                                    }, "/information-center/#".concat(e), {
                                        shallow: !0
                                    })
                                }(e)
                            },
                            activeKey: A,
                            id: "icTabs",
                            children: [(0, r.jsx)(d.Z, {
                                children: (0, r.jsx)(u.Z, {
                                    className: "my-5",
                                    children: (0, r.jsx)(h.Z, {
                                        children: (0, r.jsxs)(f.Z, {
                                            className: "patents-tabs",
                                            children: [(0, r.jsx)(f.Z.Item, {
                                                children: (0, r.jsx)(f.Z.Link, {
                                                    eventKey: "ic-brief",
                                                    children: L("Information Center")
                                                })
                                            }), (0, r.jsx)(f.Z.Item, {
                                                children: (0, r.jsx)(f.Z.Link, {
                                                    eventKey: "search-engines",
                                                    children: L("search-engines")
                                                })
                                            }), (0, r.jsx)(f.Z.Item, {
                                                children: (0, r.jsx)(f.Z.Link, {
                                                    eventKey: "reports",
                                                    children: L("reports")
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0, r.jsxs)(c.Z.Content, {
                                children: [(0, r.jsx)(c.Z.Pane, {
                                    eventKey: "ic-brief",
                                    children: (0, r.jsx)(F, {
                                        data: y,
                                        chartsData: b,
                                        years: x,
                                        countries: Z,
                                        fields: g,
                                        industryChartsData: C,
                                        industryChartYears: N,
                                        industryChartCountries: S
                                    })
                                }), (0, r.jsx)(c.Z.Pane, {
                                    eventKey: "search-engines",
                                    children: (0, r.jsx)(j, {
                                        data: _
                                    })
                                }), (0, r.jsx)(c.Z.Pane, {
                                    eventKey: "reports",
                                    children: (0, r.jsx)(l.Z, {
                                        categories: v,
                                        domains: m,
                                        reports: p
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        96369: function(e) {
            e.exports = {
                mainSection: "brief-tab_mainSection__2xm44",
                relatedLinksContainer: "brief-tab_relatedLinksContainer__H9Imc",
                relatedLinks: "brief-tab_relatedLinks__v5guk",
                relatedLinksContent: "brief-tab_relatedLinksContent__LJk48",
                sectionStyle: "brief-tab_sectionStyle__TpB9t",
                depositContainer: "brief-tab_depositContainer__F941l",
                depositContent: "brief-tab_depositContent__PQJzc",
                sectionPieStyle: "brief-tab_sectionPieStyle__IszI5",
                sectionCountryStyle: "brief-tab_sectionCountryStyle__p0PVo",
                sectionFieldStyle: "brief-tab_sectionFieldStyle__UHr6d",
                sectionBarStyle: "brief-tab_sectionBarStyle__LfdfU",
                checkboxContainer: "brief-tab_checkboxContainer__jIq6L",
                mainLabel: "brief-tab_mainLabel__8UgBY"
            }
        },
        52327: function(e) {
            e.exports = {
                mainContainer: "search-engines_mainContainer__Pmpov",
                imageContainer: "search-engines_imageContainer__lGGSU"
            }
        },
        80823: function(e) {
            e.exports = {
                "ip-card": "ip-card_ip-card__UShza",
                "ip-card__img-container": "ip-card_ip-card__img-container__jkMHN",
                "ip-card__content": "ip-card_ip-card__content__bWykg",
                "ip-card__title": "ip-card_ip-card__title__qMlJ0",
                "ip-card__subtitle": "ip-card_ip-card__subtitle__p9cDr",
                "ip-card__button": "ip-card_ip-card__button__Ll1HL"
            }
        },
        81569: function(e) {
            e.exports = {
                hero: "page-hero_hero__GjvDx",
                hero__title: "page-hero_hero__title__tpXkF",
                hero__subtitle: "page-hero_hero__subtitle__Rmwke",
                "hero__video-btn": "page-hero_hero__video-btn__vdoSR"
            }
        }
    },
    function(e) {
        e.O(0, [4663, 7570, 7631, 9756, 5733, 1113, 1450, 2004, 3977, 1182, 413, 7933, 5470, 9774, 2888, 179], (function() {
            return t = 91424, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);