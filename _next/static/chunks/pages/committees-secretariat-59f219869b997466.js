(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6904], {
        14538: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/committees-secretariat", function() {
                return i(3663)
            }])
        },
        83547: function(e, t, i) {
            "use strict";
            var s = i(85893),
                r = (i(67294), i(62204)),
                n = i.n(r);
            t.Z = function(e) {
                var t = e.stat;
                return (0, s.jsxs)("div", {
                    className: n()["committees-statistics"],
                    children: [(0, s.jsx)("strong", {
                        children: null === t || void 0 === t ? void 0 : t.count
                    }), (0, s.jsx)("div", {
                        children: null === t || void 0 === t ? void 0 : t.title
                    })]
                })
            }
        },
        3663: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSG: function() {
                    return M
                },
                default: function() {
                    return G
                }
            });
            var s = i(85893),
                r = i(67294),
                n = i(10493),
                a = i(11163),
                c = i(27933),
                o = i(34051),
                l = i.n(o),
                d = i(21048),
                u = i(83587),
                m = i(16308),
                h = i(10682),
                v = i(21608),
                f = i(31555),
                x = i(36968),
                p = i(87536);

            function j(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(i);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    })))), s.forEach((function(t) {
                        j(e, t, i[t])
                    }))
                }
                return e
            }
            var _ = function(e) {
                    var t = e.onFilterSubmit,
                        i = e.domains,
                        a = (0, n.$G)("common").t,
                        c = (0, p.cI)({
                            defaultValues: {
                                type: "",
                                beneficiaryType: "",
                                domain: null,
                                searchKey: ""
                            }
                        }),
                        o = c.register,
                        l = c.watch,
                        d = c.formValues,
                        u = (c.control, (0, r.useState)(d)),
                        m = u[0],
                        h = u[1];
                    (0, r.useEffect)((function() {
                        var e = l((function(e) {
                            h(e), t(e)
                        }));
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [l, d, t]);
                    i.map((function(e) {
                        return {
                            label: e.title,
                            value: e.id
                        }
                    }));
                    return (0, s.jsx)("div", {
                        className: "services-filtration mb-4",
                        children: (0, s.jsx)("form", {
                            children: (0, s.jsxs)(v.Z, {
                                children: [(0, s.jsx)(f.Z, {
                                    lg: 6,
                                    children: (0, s.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, s.jsx)("label", {
                                            children: a("Target group")
                                        }), (0, s.jsxs)("div", {
                                            className: "btn-group d-flex radio-list",
                                            role: "group",
                                            "aria-label": "Basic example",
                                            children: [(0, s.jsx)("input", b({}, o("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check1",
                                                autoComplete: "off",
                                                checked: "" === (null === m || void 0 === m ? void 0 : m.beneficiaryType),
                                                value: "",
                                                readOnly: !0
                                            })), (0, s.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check1",
                                                children: a("All")
                                            }), (0, s.jsx)("input", b({}, o("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check2",
                                                autoComplete: "off",
                                                checked: "individuals" === (null === m || void 0 === m ? void 0 : m.beneficiaryType),
                                                value: "individuals",
                                                readOnly: !0
                                            })), (0, s.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check2",
                                                children: a("Individuals")
                                            }), (0, s.jsx)("input", b({}, o("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check3",
                                                autoComplete: "off",
                                                checked: "enterprises" === (null === m || void 0 === m ? void 0 : m.beneficiaryType),
                                                value: "enterprises",
                                                readOnly: !0
                                            })), (0, s.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check3",
                                                children: a("Enterprises")
                                            })]
                                        })]
                                    })
                                }), (0, s.jsx)(f.Z, {
                                    lg: 6,
                                    children: (0, s.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, s.jsx)("label", {
                                            htmlFor: "search",
                                            children: a("Search")
                                        }), (0, s.jsx)("input", b({}, o("searchKey", {
                                            required: !1
                                        }), {
                                            id: "searchKey",
                                            name: "searchKey",
                                            type: "search",
                                            className: "form-control",
                                            placeholder: a("Search here"),
                                            maxLength: 100
                                        }))]
                                    })
                                })]
                            })
                        })
                    })
                },
                y = i(41664),
                g = function(e) {
                    var t = e.service,
                        i = (0, n.$G)("common").t,
                        r = t.id,
                        a = t.title,
                        o = t.summary,
                        l = t.executionPeriod,
                        d = t.beneficiaryType,
                        u = t.individualFees,
                        m = t.entitiesFees,
                        h = t.executionPeriodUnit;
                    return (0, s.jsxs)("div", {
                        className: "service-item",
                        children: [(0, s.jsxs)("header", {
                            className: "service-item__header",
                            children: [(0, s.jsx)("h4", {
                                className: "service-item__title",
                                children: a
                            }), (0, s.jsx)("p", {
                                className: "service-item__subtitle",
                                children: o
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "service-item__body",
                            children: [(0, s.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, s.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, s.jsx)("i", {
                                        className: "fas fa-phone-alt"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, s.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: i("Execution time")
                                    }), (0, s.jsxs)("p", {
                                        className: "service-item-data__subtitle",
                                        children: [l, " ", h]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, s.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, s.jsx)("i", {
                                        className: "fas fa-phone-alt"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, s.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: i("Target group")
                                    }), (0, s.jsxs)("p", {
                                        className: "service-item-data__subtitle",
                                        children: [d && d.map((function(e, t) {
                                            return (0, s.jsxs)("span", {
                                                children: [e, " "]
                                            }, t)
                                        })), " "]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, s.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, s.jsx)("i", {
                                        className: "fas fa-bullseye"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, s.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: i("Individual Fee")
                                    }), (0, s.jsx)("p", {
                                        className: "service-item-data__subtitle",
                                        children: u || i("Not available")
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, s.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, s.jsx)("i", {
                                        className: "fas fa-map-marker-alt"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, s.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: i("Enterprises Fee")
                                    }), (0, s.jsx)("p", {
                                        className: "service-item-data__subtitle",
                                        children: m || i("Not available")
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "service-item__more",
                                children: (0, s.jsx)(y.default, {
                                    href: "/services/[id]",
                                    as: "/services/".concat(r),
                                    passHref: !0,
                                    children: (0, s.jsx)("a", {
                                        children: (0, s.jsx)(c.zx, {
                                            style: {
                                                width: "100%"
                                            },
                                            title: i("Details")
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                };

            function N(e, t, i, s, r, n, a) {
                try {
                    var c = e[n](a),
                        o = c.value
                } catch (l) {
                    return void i(l)
                }
                c.done ? t(o) : Promise.resolve(o).then(s, r)
            }
            var k = function(e) {
                    var t = e.services,
                        i = e.domains,
                        a = (0, n.$G)("common").t,
                        c = (0, r.useState)(t || []),
                        o = c[0],
                        p = c[1],
                        j = (0, r.useState)(),
                        b = j[0],
                        y = j[1],
                        k = (0, r.useState)(!1),
                        Z = k[0],
                        w = k[1],
                        P = (0, d.N)(b, 1e3);
                    (0, r.useEffect)((function() {
                        if (P) {
                            var e = (0, m.t)(b);
                            e.domain && (e.domain = e.domain.value), C(e)
                        }
                    }), [P]);
                    var C = function() {
                        var e, t = (e = l().mark((function e(t) {
                            var i, s, r, n;
                            return l().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return w(!0), e.prev = 1, e.next = 5, (0, u.z)(t);
                                    case 5:
                                        n = e.sent.data, p(null === n || void 0 === n || null === (i = n.data) || void 0 === i || null === (s = i.sections) || void 0 === s || null === (r = s.services) || void 0 === r ? void 0 : r.items), w(!1), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), console.error(e.t0), w(!1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })), function() {
                            var t = this,
                                i = arguments;
                            return new Promise((function(s, r) {
                                var n = e.apply(t, i);

                                function a(e) {
                                    N(n, s, r, a, c, "next", e)
                                }

                                function c(e) {
                                    N(n, s, r, a, c, "throw", e)
                                }
                                a(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                    return (0, s.jsx)("section", {
                        className: "services-tab",
                        children: (0, s.jsxs)(h.Z, {
                            children: [(0, s.jsx)(v.Z, {
                                children: (0, s.jsx)(f.Z, {
                                    lg: 8,
                                    children: (0, s.jsx)(_, {
                                        domains: i,
                                        onFilterSubmit: function(e) {
                                            y(e)
                                        }
                                    })
                                })
                            }), (0, s.jsx)(v.Z, {
                                children: Z && (0, s.jsx)("div", {
                                    className: "text-center py-5",
                                    children: (0, s.jsx)(x.Z, {
                                        animation: "border",
                                        role: "status",
                                        children: (0, s.jsx)("span", {
                                            className: "visually-hidden",
                                            children: "Loading..."
                                        })
                                    })
                                })
                            }), !Z && (null === o || void 0 === o ? void 0 : o.length) > 0 && (0, s.jsx)(v.Z, {
                                children: o.map((function(e, t) {
                                    return (0, s.jsx)(f.Z, {
                                        lg: 4,
                                        children: (0, s.jsx)(g, {
                                            service: e
                                        })
                                    }, t)
                                }))
                            }), Z || 0 !== (null === o || void 0 === o ? void 0 : o.length) ? null : (0, s.jsx)("p", {
                                className: "h3 text-center mb-5",
                                children: a("No results")
                            })]
                        })
                    })
                },
                Z = i(75147),
                w = i(85177),
                P = i(14266),
                C = i.n(P),
                S = function(e) {
                    var t = e.documents,
                        i = (0, n.$G)("common").t;
                    return (0, s.jsx)("section", {
                        className: "documents-tab",
                        children: (0, s.jsx)(h.Z, {
                            children: (0, s.jsx)(v.Z, {
                                className: "my-5 ".concat(C().documents),
                                children: (null === t || void 0 === t ? void 0 : t.length) > 0 && (0, s.jsx)(f.Z, {
                                    sm: 12,
                                    className: "my-2",
                                    children: (0, s.jsxs)(Z.Z, {
                                        striped: !0,
                                        bordered: !0,
                                        children: [(0, s.jsx)("thead", {
                                            children: (0, s.jsxs)("tr", {
                                                children: [(0, s.jsx)("th", {
                                                    children: (0, s.jsx)("h6", {
                                                        children: i("document")
                                                    })
                                                }), (0, s.jsx)("th", {
                                                    children: (0, s.jsx)("h6", {
                                                        children: i("Show")
                                                    })
                                                })]
                                            })
                                        }), (0, s.jsx)("tbody", {
                                            children: (null === t || void 0 === t ? void 0 : t.length) > 0 && (null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                                return (0, s.jsxs)("tr", {
                                                    children: [(0, s.jsx)("td", {
                                                        children: e.title
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, s.jsx)("a", {
                                                            href: (0, w.J)(e.link),
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: i("show")
                                                        })
                                                    })]
                                                }, t)
                                            })))
                                        })]
                                    })
                                })
                            })
                        })
                    })
                },
                O = i(93174),
                T = i(62600),
                E = i.n(T),
                R = function(e) {
                    var t = e.committee,
                        i = (0, n.$G)("common").t;
                    (0, a.useRouter)();
                    return (0, s.jsxs)("div", {
                        className: "row g-0 ".concat(E()["committee-card"]),
                        children: [(0, s.jsx)("div", {
                            className: "col-md-4 col-lg-5 col-xl-4",
                            children: (0, s.jsx)("div", {
                                className: "".concat(E()["committee-card__img-container"]),
                                style: {
                                    backgroundImage: "url(".concat((0, w.J)(null === t || void 0 === t ? void 0 : t.image), ")"),
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain"
                                },
                                children: (0, s.jsx)(y.default, {
                                    href: "/committees-secretariat/[id]",
                                    as: "/committees-secretariat/".concat(null === t || void 0 === t ? void 0 : t.id),
                                    passHref: !0,
                                    children: (0, s.jsx)("a", {
                                        children: (0, s.jsx)(c.zx, {
                                            className: E()["committee-card__button"],
                                            white: !0,
                                            title: i("More")
                                        })
                                    })
                                })
                            })
                        }), (0, s.jsxs)("div", {
                            className: "col ".concat(E()["committee-card__content"]),
                            children: [(0, s.jsx)("h4", {
                                className: E()["committee-card__title"],
                                children: (0, s.jsx)(y.default, {
                                    href: "/committees-secretariat/[id]",
                                    as: "/committees-secretariat/".concat(null === t || void 0 === t ? void 0 : t.id),
                                    passHref: !0,
                                    children: (0, s.jsx)("a", {
                                        className: "text-reset",
                                        children: null === t || void 0 === t ? void 0 : t.title
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: null === t || void 0 === t ? void 0 : t.body
                                }
                            })]
                        }), (0, s.jsx)("div", {
                            className: "d-xs-block d-md-none",
                            style: {
                                textAlign: "center",
                                marginBottom: "1rem"
                            },
                            children: (0, s.jsx)(y.default, {
                                href: "/committees-secretariat/[id]",
                                as: "/committees-secretariat/".concat(null === t || void 0 === t ? void 0 : t.id),
                                passHref: !0,
                                children: (0, s.jsx)("a", {
                                    children: (0, s.jsx)(c.zx, {
                                        title: i("More"),
                                        style: {
                                            width: "75%"
                                        }
                                    })
                                })
                            })
                        })]
                    })
                },
                K = i(67254),
                I = i(95774),
                A = i(83547),
                F = i(25675),
                D = function(e) {
                    var t, i, r, c, o, l, d = e.brief,
                        u = (0, n.$G)("common").t,
                        m = (0, a.useRouter)().locale;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(O.c, {
                            title: null === d || void 0 === d ? void 0 : d.title,
                            subtitle: null === d || void 0 === d ? void 0 : d.body,
                            hasVideo: !!(null === d || void 0 === d ? void 0 : d.video),
                            videoUrl: null === d || void 0 === d ? void 0 : d.video,
                            image: null === d || void 0 === d ? void 0 : d.image
                        }), (null === d || void 0 === d ? void 0 : d.committees) && (0, s.jsxs)(h.Z, {
                            className: "mt-5 mb-5",
                            children: [(0, s.jsx)("div", {
                                className: "bold section-subtitle",
                                children: u("Committees")
                            }), (0, s.jsx)(v.Z, {
                                children: null === d || void 0 === d || null === (t = d.committees) || void 0 === t ? void 0 : t.map((function(e, t) {
                                    return (0, s.jsx)(f.Z, {
                                        lg: 6,
                                        children: (0, s.jsx)(R, {
                                            committee: e
                                        })
                                    }, t)
                                }))
                            })]
                        }), (0, s.jsx)(h.Z, {
                            children: (null === d || void 0 === d ? void 0 : d.infographic) && (0, s.jsx)("section", {
                                className: "ip-infograph my-auto",
                                style: {
                                    backgroundColor: "var(--theme-ui-colors-bg_overlay)",
                                    height: "500px"
                                },
                                children: (0, s.jsx)(F.default, {
                                    src: (0, w.J)(null === d || void 0 === d ? void 0 : d.infographic),
                                    width: "500",
                                    height: "500",
                                    alt: d.title,
                                    objectFit: "contain"
                                })
                            })
                        }), (0, s.jsxs)(h.Z, {
                            className: "mt-5 mb-5",
                            children: [(0, s.jsx)("div", {
                                className: "bold section-subtitle",
                                children: u("Statistics")
                            }), (0, s.jsxs)(v.Z, {
                                children: [(null === d || void 0 === d || null === (i = d.statistic1) || void 0 === i ? void 0 : i.length) > 0 && (0, s.jsx)(f.Z, {
                                    md: 6,
                                    className: "mb-4",
                                    children: (0, s.jsxs)("div", {
                                        className: C().box,
                                        children: [(0, s.jsx)("div", {
                                            className: "bold mb-5 ".concat(C().green),
                                            children: null === d || void 0 === d ? void 0 : d.statistic1Title
                                        }), (0, s.jsx)(v.Z, {
                                            children: null === d || void 0 === d || null === (r = d.statistic1) || void 0 === r ? void 0 : r.map((function(e, t) {
                                                return (0, s.jsxs)(f.Z, {
                                                    xs: 6,
                                                    sm: 6,
                                                    md: 4,
                                                    lg: 4,
                                                    className: "mb-5",
                                                    children: [(0, s.jsx)(I.Ip, {
                                                        value: +(null === e || void 0 === e ? void 0 : e.count),
                                                        text: "".concat(+(null === e || void 0 === e ? void 0 : e.count)),
                                                        styles: (0, I.y3)({
                                                            textColor: "#006E63",
                                                            pathColor: "#00A19B",
                                                            trailColor: "#006E63",
                                                            strokeLinecap: "butt"
                                                        })
                                                    }), (0, s.jsx)("div", {
                                                        className: "text-center mt-3",
                                                        children: null === e || void 0 === e ? void 0 : e.title
                                                    })]
                                                }, t)
                                            }))
                                        })]
                                    })
                                }), (null === d || void 0 === d || null === (c = d.statistic2) || void 0 === c ? void 0 : c.length) > 0 && (0, s.jsx)(f.Z, {
                                    md: 6,
                                    className: "mb-4",
                                    children: (0, s.jsxs)("div", {
                                        className: C().box,
                                        children: [(0, s.jsx)("div", {
                                            className: "bold mb-5 ".concat(C().green),
                                            children: null === d || void 0 === d ? void 0 : d.statistic2Title
                                        }), (0, s.jsx)(v.Z, {
                                            children: null === d || void 0 === d || null === (o = d.statistic2) || void 0 === o ? void 0 : o.map((function(e, t) {
                                                return (0, s.jsx)(f.Z, {
                                                    xs: 6,
                                                    sm: 6,
                                                    md: 6,
                                                    children: (0, s.jsx)(A.Z, {
                                                        stat: e
                                                    })
                                                }, t)
                                            }))
                                        })]
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "d-flex justify-content-end d-none",
                                children: (0, s.jsx)(y.default, {
                                    passHref: !0,
                                    href: "/information-center/",
                                    children: (0, s.jsxs)("a", {
                                        className: "text-decoration-none",
                                        children: [u("More stats"), (0, s.jsx)("i", {
                                            className: "ar" == m ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                        })]
                                    })
                                })
                            })]
                        }), (null === d || void 0 === d || null === (l = d.faqs) || void 0 === l ? void 0 : l.length) > 0 && (0, s.jsx)(v.Z, {
                            className: "mt-5 mb-5",
                            children: (0, s.jsx)(K.pB, {
                                title: u("FAQs"),
                                faqs: null === d || void 0 === d ? void 0 : d.faqs
                            })
                        })]
                    })
                },
                L = i(60489),
                z = i(59946);

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return B(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return B(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = !0,
                G = function(e) {
                    var t = e.committees,
                        i = e.domains,
                        o = e.headerData,
                        l = e.footerData,
                        d = (0, r.useState)("committees-brief"),
                        u = d[0],
                        m = d[1],
                        x = (0, n.$G)("common").t,
                        p = null === t || void 0 === t ? void 0 : t.breadCrumb,
                        j = (0, r.useState)(p),
                        b = j[0],
                        _ = j[1],
                        y = (0, a.useRouter)();
                    return (0, r.useEffect)((function() {
                        var e = y.asPath ? y.asPath.split("#")[1] : null;
                        if (e) {
                            m(e);
                            var t = {
                                title: x(e),
                                type: "slug",
                                href: null
                            };
                            _(H(p).concat([t]))
                        } else _(p), m("committees-brief")
                    }), [p, y.asPath, x]), (0, s.jsx)(c.T3, {
                        title: t.title,
                        headerProps: {
                            headerData: o
                        },
                        footerProps: {
                            footerData: l
                        },
                        breadCrumb: b,
                        children: (0, s.jsxs)(L.Z.Container, {
                            defaultActiveKey: u,
                            onSelect: function(e) {
                                return function(e) {
                                    m(e), y.push({
                                        pathname: "/committees-secretariat"
                                    }, "/committees-secretariat/#".concat(e), {
                                        shallow: !0
                                    })
                                }(e)
                            },
                            activeKey: u,
                            id: "committeesTabs",
                            children: [(0, s.jsx)(h.Z, {
                                children: (0, s.jsx)(v.Z, {
                                    className: "my-lg-5",
                                    children: (0, s.jsx)(f.Z, {
                                        lg: "12",
                                        sm: "12",
                                        className: "tabs-container",
                                        children: (0, s.jsxs)(z.Z, {
                                            className: "patents-tabs",
                                            children: [(0, s.jsx)(z.Z.Item, {
                                                children: (0, s.jsx)(z.Z.Link, {
                                                    eventKey: "committees-brief",
                                                    children: x("Brief")
                                                })
                                            }), (0, s.jsx)(z.Z.Item, {
                                                children: (0, s.jsx)(z.Z.Link, {
                                                    eventKey: "services",
                                                    children: x("services")
                                                })
                                            }), (null === t || void 0 === t ? void 0 : t.documents) && (0, s.jsx)(z.Z.Item, {
                                                children: (0, s.jsx)(z.Z.Link, {
                                                    eventKey: "documents",
                                                    children: x("documents")
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0, s.jsxs)(L.Z.Content, {
                                children: [(0, s.jsx)(L.Z.Pane, {
                                    eventKey: "committees-brief",
                                    children: (0, s.jsx)(D, {
                                        brief: t
                                    })
                                }), (0, s.jsx)(L.Z.Pane, {
                                    eventKey: "services",
                                    children: (0, s.jsx)(k, {
                                        services: null === t || void 0 === t ? void 0 : t.services,
                                        domains: i
                                    })
                                }), (0, s.jsx)(L.Z.Pane, {
                                    eventKey: "documents",
                                    children: (0, s.jsx)(S, {
                                        documents: null === t || void 0 === t ? void 0 : t.documents
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        83587: function(e, t, i) {
            "use strict";
            i.d(t, {
                z: function() {
                    return r
                }
            });
            var s = i(99424),
                r = function(e, t) {
                    return s.Z.get("/api/node/ip_clinic?lang=".concat(t), {
                        params: e
                    })
                }
        },
        14266: function(e) {
            e.exports = {
                box: "brief-committees-secretariat_box__hswU7",
                green: "brief-committees-secretariat_green__TdEky",
                documents: "brief-committees-secretariat_documents__HnKiK"
            }
        },
        62600: function(e) {
            e.exports = {
                "committee-card": "committees-card_committee-card__yWzhK",
                "committee-card__img-container": "committees-card_committee-card__img-container__dpKgP",
                "committee-card__content": "committees-card_committee-card__content__JQj3P",
                "committee-card__title": "committees-card_committee-card__title__HaQH2",
                "committee-card__subtitle": "committees-card_committee-card__subtitle__CBcnY",
                "committee-card__button": "committees-card_committee-card__button__ffUZ5"
            }
        },
        62204: function(e) {
            e.exports = {
                "committees-statistics": "committees-statistics_committees-statistics__hvQOl"
            }
        },
        95774: function(e, t, i) {
            "use strict";
            i.d(t, {
                Ip: function() {
                    return o
                },
                y3: function() {
                    return l
                }
            });
            var s = i(67294),
                r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    }, r(e, t)
                };

            function n(e) {
                var t = e.className,
                    i = e.counterClockwise,
                    r = e.dashRatio,
                    n = e.pathRadius,
                    o = e.strokeWidth,
                    l = e.style;
                return (0, s.createElement)("path", {
                    className: t,
                    style: Object.assign({}, l, c({
                        pathRadius: n,
                        dashRatio: r,
                        counterClockwise: i
                    })),
                    d: a({
                        pathRadius: n,
                        counterClockwise: i
                    }),
                    strokeWidth: o,
                    fillOpacity: 0
                })
            }

            function a(e) {
                var t = e.pathRadius,
                    i = e.counterClockwise ? 1 : 0;
                return "\n      M 50,50\n      m 0,-" + t + "\n      a " + t + "," + t + " " + i + " 1 1 0," + 2 * t + "\n      a " + t + "," + t + " " + i + " 1 1 0,-" + 2 * t + "\n    "
            }

            function c(e) {
                var t = e.counterClockwise,
                    i = e.dashRatio,
                    s = e.pathRadius,
                    r = 2 * Math.PI * s,
                    n = (1 - i) * r;
                return {
                    strokeDasharray: r + "px " + r + "px",
                    strokeDashoffset: (t ? -n : n) + "px"
                }
            }
            var o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return function(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                }(t, e), t.prototype.getBackgroundPadding = function() {
                    return this.props.background ? this.props.backgroundPadding : 0
                }, t.prototype.getPathRadius = function() {
                    return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
                }, t.prototype.getPathRatio = function() {
                    var e = this.props,
                        t = e.value,
                        i = e.minValue,
                        s = e.maxValue;
                    return (Math.min(Math.max(t, i), s) - i) / (s - i)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.circleRatio,
                        i = e.className,
                        r = e.classes,
                        a = e.counterClockwise,
                        c = e.styles,
                        o = e.strokeWidth,
                        l = e.text,
                        d = this.getPathRadius(),
                        u = this.getPathRatio();
                    return (0, s.createElement)("svg", {
                        className: r.root + " " + i,
                        style: c.root,
                        viewBox: "0 0 100 100",
                        "data-test-id": "CircularProgressbar"
                    }, this.props.background ? (0, s.createElement)("circle", {
                        className: r.background,
                        style: c.background,
                        cx: 50,
                        cy: 50,
                        r: 50
                    }) : null, (0, s.createElement)(n, {
                        className: r.trail,
                        counterClockwise: a,
                        dashRatio: t,
                        pathRadius: d,
                        strokeWidth: o,
                        style: c.trail
                    }), (0, s.createElement)(n, {
                        className: r.path,
                        counterClockwise: a,
                        dashRatio: u * t,
                        pathRadius: d,
                        strokeWidth: o,
                        style: c.path
                    }), l ? (0, s.createElement)("text", {
                        className: r.text,
                        style: c.text,
                        x: 50,
                        y: 50
                    }, l) : null)
                }, t.defaultProps = {
                    background: !1,
                    backgroundPadding: 0,
                    circleRatio: 1,
                    classes: {
                        root: "CircularProgressbar",
                        trail: "CircularProgressbar-trail",
                        path: "CircularProgressbar-path",
                        text: "CircularProgressbar-text",
                        background: "CircularProgressbar-background"
                    },
                    counterClockwise: !1,
                    className: "",
                    maxValue: 100,
                    minValue: 0,
                    strokeWidth: 8,
                    styles: {
                        root: {},
                        trail: {},
                        path: {},
                        text: {},
                        background: {}
                    },
                    text: ""
                }, t
            }(s.Component);

            function l(e) {
                var t = e.rotation,
                    i = e.strokeLinecap,
                    s = e.textColor,
                    r = e.textSize,
                    n = e.pathColor,
                    a = e.pathTransition,
                    c = e.pathTransitionDuration,
                    o = e.trailColor,
                    l = e.backgroundColor,
                    u = null == t ? void 0 : "rotate(" + t + "turn)",
                    m = null == t ? void 0 : "center center";
                return {
                    root: {},
                    path: d({
                        stroke: n,
                        strokeLinecap: i,
                        transform: u,
                        transformOrigin: m,
                        transition: a,
                        transitionDuration: null == c ? void 0 : c + "s"
                    }),
                    trail: d({
                        stroke: o,
                        strokeLinecap: i,
                        transform: u,
                        transformOrigin: m
                    }),
                    text: d({
                        fill: s,
                        fontSize: r
                    }),
                    background: d({
                        fill: l
                    })
                }
            }

            function d(e) {
                return Object.keys(e).forEach((function(t) {
                    null == e[t] && delete e[t]
                })), e
            }
        }
    },
    function(e) {
        e.O(0, [4663, 7631, 9756, 5733, 1113, 1450, 2004, 7933, 6698, 7254, 9774, 2888, 179], (function() {
            return t = 14538, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);