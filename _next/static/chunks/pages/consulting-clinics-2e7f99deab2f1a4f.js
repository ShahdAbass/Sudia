(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8893], {
        18915: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/consulting-clinics", function() {
                return t(35014)
            }])
        },
        35014: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSG: function() {
                    return b
                },
                default: function() {
                    return x
                }
            });
            var r = t(85893),
                s = t(67294),
                i = t(10493),
                a = t(11163),
                c = t(9008),
                o = t(27933),
                l = t(60489),
                u = t(10682),
                d = t(21608),
                f = t(31555),
                m = t(59946),
                h = t(22131),
                v = function(e) {
                    var n = e.consultingClinics,
                        t = e.domains,
                        s = e.activeTab,
                        a = e.onSelectTab,
                        c = n.sections,
                        v = (n.basicInfo, c.Brief),
                        y = c.services,
                        j = c.stories,
                        b = (0, i.$G)("common").t;
                    return (0, r.jsxs)(l.Z.Container, {
                        defaultActiveKey: s,
                        onSelect: function(e) {
                            return a(e)
                        },
                        activeKey: s,
                        id: "clinicsTab1",
                        children: [(0, r.jsx)(u.Z, {
                            children: (0, r.jsxs)(d.Z, {
                                className: "my-lg-5",
                                children: [(0, r.jsx)(f.Z, {
                                    className: "tabs-container",
                                    lg: 6,
                                    children: (0, r.jsxs)(m.Z, {
                                        className: "patents-tabs",
                                        children: [(0, r.jsx)(m.Z.Item, {
                                            children: (0, r.jsx)(m.Z.Link, {
                                                eventKey: "domain-brief",
                                                children: b("Brief")
                                            })
                                        }), (0, r.jsx)(m.Z.Item, {
                                            children: (0, r.jsxs)(m.Z.Link, {
                                                eventKey: "services",
                                                children: [" ", b("services")]
                                            })
                                        }), j.length > 0 && (0, r.jsx)(m.Z.Item, {
                                            children: (0, r.jsx)(m.Z.Link, {
                                                eventKey: "success-stories",
                                                children: b("success-stories")
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)(f.Z, {
                                    className: "justify-content-lg-end d-md-flex justify-content-md-start my-2 my-lg-0 d-none",
                                    md: 6,
                                    children: (0, r.jsx)("a", {
                                        href: v.portalLink,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, r.jsx)(o.zx, {
                                            secondary: !0,
                                            title: b("Go home"),
                                            className: "my-3 my-lg-0"
                                        })
                                    })
                                })]
                            })
                        }), (0, r.jsxs)(l.Z.Content, {
                            children: [(0, r.jsx)(l.Z.Pane, {
                                eventKey: "domain-brief",
                                children: (0, r.jsx)(h.fQ, {
                                    data: v
                                })
                            }), (0, r.jsx)(l.Z.Pane, {
                                eventKey: "services",
                                children: (0, r.jsx)(h.ne, {
                                    services: y,
                                    domains: t
                                })
                            }), (0, r.jsx)(l.Z.Pane, {
                                eventKey: "success-stories",
                                children: (0, r.jsx)(h.fX, {
                                    successStories: j,
                                    domains: t
                                })
                            })]
                        })]
                    })
                };

            function y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function j(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return y(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = !0,
                x = function(e) {
                    var n, t = e.footerData,
                        l = e.headerData,
                        u = e.data,
                        d = e.domains,
                        f = (0, s.useState)("domain-brief"),
                        m = f[0],
                        h = f[1],
                        y = (0, i.$G)("common").t,
                        b = null === u || void 0 === u ? void 0 : u.breadCrumb,
                        x = (0, s.useState)(b),
                        p = x[0],
                        g = x[1],
                        Z = (0, a.useRouter)();
                    return (0, s.useEffect)((function() {
                        var e = Z.asPath ? Z.asPath.split("#")[1] : null;
                        if (e) {
                            h(e);
                            var n = {
                                title: y(e),
                                type: "slug",
                                href: null
                            };
                            g(j(b).concat([n]))
                        } else g(b), h("domain-brief")
                    }), [b, Z.asPath, y]), (0, r.jsxs)(o.T3, {
                        headerProps: {
                            headerData: l
                        },
                        footerProps: {
                            footerData: t
                        },
                        breadCrumb: p,
                        children: [(0, r.jsx)(c.default, {
                            children: (0, r.jsx)("title", {
                                children: null === u || void 0 === u || null === (n = u.basicInfo) || void 0 === n ? void 0 : n.title
                            })
                        }), (0, r.jsx)(v, {
                            consultingClinics: u,
                            domains: d,
                            activeTab: m,
                            onSelectTab: function(e) {
                                h(e), Z.push({
                                    pathname: "/consulting-clinics"
                                }, "/consulting-clinics/#".concat(e), {
                                    shallow: !0
                                })
                            }
                        })]
                    })
                }
        }
    },
    function(e) {
        e.O(0, [4663, 7631, 9756, 5733, 1113, 1450, 2004, 3977, 7933, 6698, 7254, 2131, 9774, 2888, 179], (function() {
            return n = 18915, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);