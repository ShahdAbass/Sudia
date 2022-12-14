(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [602], {
        83794: function(e, i, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/respect-ip", function() {
                return n(45968)
            }])
        },
        58178: function(e, i, n) {
            "use strict";
            var t = n(85893),
                s = (n(67294), n(45697)),
                l = n.n(s),
                r = function(e) {
                    var i = e.hint,
                        n = e.description;
                    return (0, t.jsxs)("div", {
                        className: "position-relative hint-description-card",
                        children: [(0, t.jsx)("span", {
                            className: "hint",
                            children: i
                        }), (0, t.jsx)("div", {
                            className: "description-wrapper flex-vertical-center overflowScroll",
                            children: (0, t.jsx)("span", {
                                className: "description regular overflowScroll",
                                children: n
                            })
                        })]
                    })
                };
            r.propTypes = {
                hint: l().string,
                description: l().string
            }, r.defaultProps = {
                hint: "",
                description: ""
            }, i.Z = r
        },
        7280: function(e, i, n) {
            "use strict";
            n.d(i, {
                c: function() {
                    return r
                }
            });
            var t = n(85893),
                s = (n(67294), n(68865)),
                l = n.n(s),
                r = (n(41664), function(e) {
                    var i = e.data,
                        n = void 0 === i ? null : i;
                    e.link;
                    return (0, t.jsxs)("div", {
                        className: "".concat(l()["title-card"]),
                        children: [(0, t.jsx)("h4", {
                            className: "".concat(l()["title-card__title"]),
                            children: null === n || void 0 === n ? void 0 : n.content
                        }), (0, t.jsx)("span", {
                            className: "".concat(l()["title-card__number"]),
                            children: null === n || void 0 === n ? void 0 : n.title
                        })]
                    })
                })
        },
        45968: function(e, i, n) {
            "use strict";
            n.r(i), n.d(i, {
                __N_SSG: function() {
                    return q
                },
                default: function() {
                    return z
                }
            });
            var t = n(85893),
                s = n(67294),
                l = n(10493),
                r = n(11163),
                a = n(27933),
                o = n(34051),
                c = n.n(o),
                d = n(67254),
                u = n(10682),
                m = n(21608),
                v = n(31555),
                h = n(36968),
                x = n(21048),
                p = n(99424),
                j = function(e, i) {
                    return p.Z.get("/api/node/ip_respect?lang=".concat(i), {
                        params: e
                    })
                },
                f = n(25675),
                b = n(16308);

            function g(e, i, n, t, s, l, r) {
                try {
                    var a = e[l](r),
                        o = a.value
                } catch (c) {
                    return void n(c)
                }
                a.done ? i(o) : Promise.resolve(o).then(t, s)
            }
            var N = function(e) {
                    var i = e.services,
                        n = (0, s.useState)(i.items || []),
                        a = n[0],
                        o = n[1],
                        p = (0, s.useState)(),
                        N = p[0],
                        y = p[1],
                        Z = (0, s.useState)(!1),
                        _ = Z[0],
                        k = Z[1],
                        C = (0, s.useState)(!1),
                        w = C[0],
                        P = C[1],
                        I = (0, r.useRouter)().locale,
                        R = (0, l.$G)("common").t,
                        T = (0, x.N)(N, 1e3);
                    (0, s.useEffect)((function() {
                        if (T) {
                            var e = (0, b.t)(N);
                            S(e)
                        }
                    }), [T]);
                    var S = function() {
                        var e, i = (e = c().mark((function e(i) {
                            var n, t, s;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return k(!0), e.prev = 1, e.next = 5, j(i, I);
                                    case 5:
                                        s = e.sent.data, o(null === s || void 0 === s || null === (n = s.data) || void 0 === n || null === (t = n.services) || void 0 === t ? void 0 : t.items), k(!1), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), console.error(e.t0), k(!1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })), function() {
                            var i = this,
                                n = arguments;
                            return new Promise((function(t, s) {
                                var l = e.apply(i, n);

                                function r(e) {
                                    g(l, t, s, r, a, "next", e)
                                }

                                function a(e) {
                                    g(l, t, s, r, a, "throw", e)
                                }
                                r(void 0)
                            }))
                        });
                        return function(e) {
                            return i.apply(this, arguments)
                        }
                    }();
                    return (0, t.jsxs)(u.Z, {
                        children: [(0, t.jsx)(m.Z, {
                            children: (0, t.jsx)(v.Z, {
                                lg: 8,
                                children: (0, t.jsx)(d.Dr, {
                                    onFilterSubmit: function(e) {
                                        y(e)
                                    },
                                    isReseting: w
                                })
                            })
                        }), (0, t.jsx)(m.Z, {
                            children: N && !_ && (0, t.jsxs)(v.Z, {
                                className: "mb-3",
                                children: [(0, t.jsxs)("a", {
                                    className: "d-inline-block cursor-pointer bold ".concat("ar" === I ? "reset-search" : "reset-search-en"),
                                    onClick: function() {
                                        P(!0), setTimeout((function() {
                                            return P(!1)
                                        }))
                                    },
                                    children: [(0, t.jsx)(f.default, {
                                        src: "/images/reset.svg",
                                        width: "18",
                                        height: "16",
                                        className: "action",
                                        alt: "reset-search"
                                    }), " ", R("Reset")]
                                }), (0, t.jsxs)("span", {
                                    className: "secondary-color bold margin-inline-start-1 d-inline-block",
                                    children: [null === a || void 0 === a ? void 0 : a.length, " ", R("Result")]
                                })]
                            })
                        }), (0, t.jsx)(m.Z, {
                            children: _ && (0, t.jsx)("div", {
                                className: "text-center py-5",
                                children: (0, t.jsx)(h.Z, {
                                    animation: "border",
                                    role: "status",
                                    children: (0, t.jsxs)("span", {
                                        className: "visually-hidden",
                                        children: [R("Loading"), "..."]
                                    })
                                })
                            })
                        }), !_ && (null === a || void 0 === a ? void 0 : a.length) > 0 && (0, t.jsx)(m.Z, {
                            children: a.map((function(e, i) {
                                return (0, t.jsx)(v.Z, {
                                    lg: 4,
                                    children: (0, t.jsx)(d.De, {
                                        service: e
                                    })
                                }, i)
                            }))
                        }), !_ && 0 === (null === a || void 0 === a ? void 0 : a.length) && (0, t.jsx)(m.Z, {
                            children: (0, t.jsx)("p", {
                                className: "h3 text-center mb-5",
                                children: R("No results")
                            })
                        })]
                    })
                },
                y = n(93174),
                Z = n(95774),
                _ = n(7344),
                k = n.n(_),
                C = n(51119),
                w = n.n(C),
                P = function(e) {
                    var i = e.visit;
                    return (0, t.jsxs)("div", {
                        className: w()["ip-respect-visit"],
                        children: [(0, t.jsx)("strong", {
                            children: null === i || void 0 === i ? void 0 : i.count
                        }), (0, t.jsx)("h4", {
                            children: null === i || void 0 === i ? void 0 : i.title
                        })]
                    })
                },
                I = n(85177),
                R = n(58178),
                T = function(e) {
                    var i = e.image,
                        n = e.title,
                        s = e.jobTitle;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)("div", {
                            className: "position-relative hint-description-card",
                            children: (0, t.jsx)("div", {
                                className: "description-wrapper flex-vertical-center",
                                children: (0, t.jsx)("div", {
                                    className: "image-wrapper padd flex-vertical-center",
                                    children: (0, t.jsx)(f.default, {
                                        src: (0, I.J)(i),
                                        alt: n,
                                        layout: "fill",
                                        objectFit: "contain"
                                    })
                                })
                            })
                        }), (0, t.jsx)("h5", {
                            className: "mt-2 main-color",
                            children: n
                        }), (0, t.jsx)("span", {
                            className: "main-color",
                            children: s
                        })]
                    })
                },
                S = n(41664),
                K = function(e) {
                    var i, n, s, o, c, h, x, p, j, b, g = e.brief,
                        N = e.basicInfo,
                        _ = (0, l.$G)("common").t,
                        C = (0, r.useRouter)().locale;
                    return (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(y.c, {
                            title: null === N || void 0 === N ? void 0 : N.title,
                            subtitle: null === g || void 0 === g ? void 0 : g.summary,
                            hasVideo: !!(null === g || void 0 === g ? void 0 : g.video),
                            image: null === g || void 0 === g ? void 0 : g.image
                        }), (0, t.jsx)("div", {
                            className: "d-flex justify-content-center d-md-none",
                            style: {
                                marginTop: "-80px",
                                paddingBottom: "60px"
                            },
                            children: (0, t.jsx)("a", {
                                href: (null === g || void 0 === g || null === (i = g.link) || void 0 === i ? void 0 : i.uri) || "https://epatentsso.saip.gov.sa/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, t.jsx)(a.zx, {
                                    title: _("Go home"),
                                    secondary: !0
                                })
                            })
                        }), (null === g || void 0 === g ? void 0 : g.content) && (0, t.jsxs)(u.Z, {
                            className: "mt-5 mb-5",
                            children: [(0, t.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: null === g || void 0 === g ? void 0 : g.Enforcement.title
                            }), (0, t.jsx)("p", {
                                children: null === g || void 0 === g ? void 0 : g.content
                            })]
                        }), (null === g || void 0 === g || null === (n = g.committeeGoals) || void 0 === n ? void 0 : n.length) > 0 && (0, t.jsxs)(u.Z, {
                            className: "mt-5",
                            children: [(0, t.jsxs)("h3", {
                                className: "main-color mb-5",
                                children: [" ", _("Committee goals")]
                            }), (0, t.jsx)(m.Z, {
                                children: null === g || void 0 === g ? void 0 : g.committeeGoals.map((function(e, i) {
                                    return (0, t.jsx)(v.Z, {
                                        md: 6,
                                        lg: 4,
                                        xl: 4,
                                        className: "mb-5",
                                        children: (0, t.jsx)(R.Z, {
                                            hint: e.title,
                                            description: e.content
                                        })
                                    }, i)
                                }))
                            })]
                        }), (null === g || void 0 === g || null === (s = g.committeeMembers) || void 0 === s ? void 0 : s.length) > 0 && (0, t.jsx)(u.Z, {
                            className: "mt-5 mb-5",
                            children: (0, t.jsxs)(m.Z, {
                                children: [(0, t.jsxs)("h4", {
                                    className: "main-color mb-5",
                                    children: [" ", _("Committee Members")]
                                }), null === g || void 0 === g || null === (o = g.committeeMembers) || void 0 === o ? void 0 : o.map((function(e, i) {
                                    return (0, t.jsx)(v.Z, {
                                        xs: 12,
                                        md: 6,
                                        lg: 4,
                                        className: "mb-3 ".concat(k().committeeCard),
                                        children: (0, t.jsx)(T, {
                                            id: e.id,
                                            title: e.title,
                                            jobTitle: e.jobTitle,
                                            image: e.image
                                        })
                                    }, i)
                                }))]
                            })
                        }), (0, t.jsx)(u.Z, {
                            children: (null === g || void 0 === g ? void 0 : g.infographic) && (0, t.jsx)("section", {
                                className: "ip-infograph",
                                style: {
                                    backgroundColor: "var(--theme-ui-colors-bg_overlay)",
                                    height: "500px"
                                },
                                children: (0, t.jsx)(f.default, {
                                    src: (0, I.J)(null === g || void 0 === g ? void 0 : g.infographic),
                                    width: "500",
                                    height: "500",
                                    alt: g.title,
                                    objectFit: "contain"
                                })
                            })
                        }), (0, t.jsxs)(u.Z, {
                            className: "mt-5 mb-5",
                            children: [(0, t.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: _("Statistics")
                            }), (0, t.jsxs)(m.Z, {
                                children: [(0, t.jsx)(v.Z, {
                                    md: 12,
                                    className: "mb-4",
                                    children: (0, t.jsxs)("div", {
                                        className: k().box,
                                        children: [(0, t.jsx)("h5", {
                                            className: "mb-5 ".concat(k().green),
                                            children: null === g || void 0 === g ? void 0 : g.statisctics.issues.title
                                        }), (0, t.jsx)(m.Z, {
                                            children: null === (c = null === g || void 0 === g ? void 0 : g.statisctics.issues) || void 0 === c ? void 0 : c.items.map((function(e, i) {
                                                return (0, t.jsxs)(v.Z, {
                                                    xs: 4,
                                                    sm: 4,
                                                    md: 2,
                                                    lg: 2,
                                                    className: "mb-5",
                                                    children: [(0, t.jsx)(Z.Ip, {
                                                        value: +(null === e || void 0 === e ? void 0 : e.count),
                                                        text: "".concat(+(null === e || void 0 === e ? void 0 : e.count)),
                                                        styles: (0, Z.y3)({
                                                            textColor: "#006E63",
                                                            pathColor: "#00A19B",
                                                            trailColor: "#006E63",
                                                            strokeLinecap: "butt"
                                                        })
                                                    }), (0, t.jsx)("div", {
                                                        className: "text-center mt-3",
                                                        children: null === e || void 0 === e ? void 0 : e.title
                                                    })]
                                                }, i)
                                            }))
                                        })]
                                    })
                                }), (0, t.jsx)(v.Z, {
                                    md: 12,
                                    className: "mb-4",
                                    children: (0, t.jsxs)("div", {
                                        className: k().box,
                                        children: [(0, t.jsx)("h5", {
                                            className: "mb-5 ".concat(k().green),
                                            children: null === g || void 0 === g ? void 0 : g.statisctics.visits.title
                                        }), (0, t.jsx)(m.Z, {
                                            children: null === (h = null === g || void 0 === g ? void 0 : g.statisctics.visits.items) || void 0 === h ? void 0 : h.map((function(e, i) {
                                                return (0, t.jsx)(v.Z, {
                                                    xs: 6,
                                                    sm: 6,
                                                    md: 4,
                                                    children: (0, t.jsx)(P, {
                                                        visit: e
                                                    })
                                                }, i)
                                            }))
                                        })]
                                    })
                                }), (0, t.jsx)(v.Z, {
                                    md: 12,
                                    children: (0, t.jsxs)("div", {
                                        className: k().box,
                                        children: [(0, t.jsx)("h5", {
                                            className: "mb-5 ".concat(k().green),
                                            children: null === g || void 0 === g ? void 0 : g.statisctics.judgments.title
                                        }), (0, t.jsx)(m.Z, {
                                            children: null === (x = null === g || void 0 === g ? void 0 : g.statisctics.judgments.items) || void 0 === x ? void 0 : x.map((function(e, i) {
                                                return (0, t.jsx)(v.Z, {
                                                    xs: 6,
                                                    sm: 6,
                                                    md: 3,
                                                    children: (0, t.jsx)(P, {
                                                        visit: e
                                                    })
                                                }, i)
                                            }))
                                        })]
                                    })
                                }), (0, t.jsx)(v.Z, {
                                    xs: 12,
                                    className: "my-4",
                                    children: (0, t.jsx)("div", {
                                        className: "d-flex justify-content-end",
                                        children: (0, t.jsx)(S.default, {
                                            passHref: !0,
                                            href: "/information-center/",
                                            children: (0, t.jsxs)("a", {
                                                className: "text-decoration-none",
                                                children: [_("More stats"), (0, t.jsx)("i", {
                                                    className: "ar" == C ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })]
                        }), (null === g || void 0 === g || null === (p = g.faqs) || void 0 === p || null === (j = p.items) || void 0 === j ? void 0 : j.length) > 0 && (0, t.jsx)(m.Z, {
                            className: "mt-5 mb-5",
                            children: (0, t.jsx)(d.pB, {
                                title: _("FAQs"),
                                faqs: null === g || void 0 === g || null === (b = g.faqs) || void 0 === b ? void 0 : b.items
                            })
                        })]
                    })
                },
                E = n(54076),
                A = n(17040),
                B = n.n(A),
                O = function(e) {
                    var i = e.faqs,
                        n = (0, l.$G)("common").t;
                    return (0, t.jsxs)(u.Z, {
                        children: [(0, t.jsx)(m.Z, {
                            className: "my-5",
                            children: (0, t.jsx)(v.Z, {
                                className: "p-0",
                                children: (0, t.jsx)(E.Z, {
                                    defaultActiveKey: 0,
                                    className: "mb-3",
                                    children: null === i || void 0 === i ? void 0 : i.map((function(e, i) {
                                        var s, l;
                                        return (0, t.jsxs)(E.Z.Item, {
                                            eventKey: i,
                                            children: [(0, t.jsxs)(E.Z.Header, {
                                                as: "h3",
                                                className: B().mainHeader,
                                                children: [null === e || void 0 === e ? void 0 : e.title, (0, t.jsx)("i", {
                                                    className: "fas fa-chevron-down"
                                                })]
                                            }), (0, t.jsxs)(E.Z.Body, {
                                                className: B().mainBody,
                                                children: [(0, t.jsxs)("div", {
                                                    className: B().section,
                                                    children: [(0, t.jsx)("span", {
                                                        children: n("About campaign")
                                                    }), (0, t.jsx)("p", {
                                                        children: null === e || void 0 === e ? void 0 : e.aboutCampaign
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: B().section,
                                                    children: [(0, t.jsx)("span", {
                                                        children: n("Cooperating agency")
                                                    }), (0, t.jsx)("div", {
                                                        className: B().imagesContainer,
                                                        children: (null === e || void 0 === e || null === (s = e.images) || void 0 === s ? void 0 : s.length) > 0 && (null === e || void 0 === e ? void 0 : e.images.map((function(e, i) {
                                                            return (0, t.jsx)(f.default, {
                                                                src: (0, I.J)(e),
                                                                alt: "cooperating agency ".concat(e, "-").concat(i),
                                                                width: 100,
                                                                height: 100
                                                            }, i)
                                                        })))
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: B().section,
                                                    children: [(0, t.jsx)("span", {
                                                        children: n("Achievements")
                                                    }), (0, t.jsx)("p", {
                                                        children: null === e || void 0 === e ? void 0 : e.achievements
                                                    })]
                                                }), (0, t.jsxs)("div", {
                                                    className: B().section,
                                                    children: [(0, t.jsx)("span", {
                                                        children: n("Photos and videos of campaign")
                                                    }), (0, t.jsx)("div", {
                                                        className: B().imagesContainer,
                                                        children: (null === e || void 0 === e || null === (l = e.media) || void 0 === l ? void 0 : l.length) > 0 && (null === e || void 0 === e ? void 0 : e.media.map((function(e, i) {
                                                            return (0, t.jsx)(f.default, {
                                                                src: (0, I.J)(e),
                                                                alt: "campaign photo ".concat(e, "-").concat(i),
                                                                width: 100,
                                                                height: 100
                                                            }, i)
                                                        })))
                                                    })]
                                                })]
                                            })]
                                        }, (null === e || void 0 === e ? void 0 : e.id) || i)
                                    }))
                                })
                            })
                        }), 0 === (null === i || void 0 === i ? void 0 : i.length) && (0, t.jsx)(m.Z, {
                            children: (0, t.jsx)("p", {
                                className: "h3 text-center mb-5",
                                children: n("No Data found")
                            })
                        })]
                    })
                },
                D = function(e) {
                    var i = e.campaigns,
                        n = (0, l.$G)("common").t;
                    return (0, t.jsx)("div", {
                        children: (0, t.jsx)(u.Z, {
                            children: (0, t.jsx)(O, {
                                showTitle: !0,
                                title: n("FAQs"),
                                faqs: null === i || void 0 === i ? void 0 : i.items
                            })
                        })
                    })
                },
                G = function(e) {
                    var i = e.data,
                        n = (0, l.$G)("common").t;
                    return (0, t.jsxs)(u.Z, {
                        children: [(0, t.jsx)(m.Z, {
                            className: "my-5",
                            children: (0, t.jsx)(v.Z, {
                                className: "p-0",
                                children: (0, t.jsx)(E.Z, {
                                    defaultActiveKey: 0,
                                    className: "mb-3",
                                    children: null === i || void 0 === i ? void 0 : i.map((function(e, i) {
                                        var n;
                                        return (0, t.jsxs)(E.Z.Item, {
                                            eventKey: i,
                                            children: [(0, t.jsxs)(E.Z.Header, {
                                                as: "h3",
                                                className: B().mainHeader,
                                                children: [null === e || void 0 === e ? void 0 : e.mainTitle, (0, t.jsx)("i", {
                                                    className: "fas fa-chevron-down"
                                                })]
                                            }), (0, t.jsx)(E.Z.Body, {
                                                className: B().mainBody,
                                                children: (null === e || void 0 === e || null === (n = e.items) || void 0 === n ? void 0 : n.length) > 0 && (null === e || void 0 === e ? void 0 : e.items.map((function(e, i) {
                                                    return (0, t.jsx)("div", {
                                                        className: B().section,
                                                        children: (0, t.jsxs)("div", {
                                                            className: "px-2",
                                                            children: [(0, t.jsx)("b", {
                                                                className: "main-color",
                                                                children: e.title
                                                            }), (0, t.jsx)("p", {
                                                                children: e.content
                                                            })]
                                                        })
                                                    }, i)
                                                })))
                                            })]
                                        }, (null === e || void 0 === e ? void 0 : e.id) || i)
                                    }))
                                })
                            })
                        }), 0 === (null === i || void 0 === i ? void 0 : i.length) && (0, t.jsx)(m.Z, {
                            children: (0, t.jsx)("p", {
                                className: "h3 text-center mb-5",
                                children: n("No Data found")
                            })
                        })]
                    })
                },
                L = n(7280),
                M = n(29973),
                H = n.n(M),
                W = function(e) {
                    var i = e.ei;
                    return (0, t.jsxs)(u.Z, {
                        children: [(0, t.jsx)("section", {
                            className: "mb-5",
                            children: (0, t.jsx)(m.Z, {
                                children: (0, t.jsxs)(v.Z, {
                                    md: 12,
                                    children: [(0, t.jsx)("div", {
                                        className: "h4 section-subtitle",
                                        children: null === i || void 0 === i ? void 0 : i.inspectionBriefTitle
                                    }), (0, t.jsx)("p", {
                                        className: "mb-5",
                                        children: null === i || void 0 === i ? void 0 : i.inspectionBrief
                                    })]
                                })
                            })
                        }), (0, t.jsxs)("section", {
                            className: "mb-5",
                            children: [(0, t.jsx)("h4", {
                                className: "section-subtitle",
                                children: null === i || void 0 === i ? void 0 : i.eInfringementTitle
                            }), (0, t.jsxs)("p", {
                                className: "mb-5",
                                children: [" ", null === i || void 0 === i ? void 0 : i.electronicInfringement]
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "mb-5",
                            children: [(0, t.jsx)("h4", {
                                className: "section-subtitle",
                                children: "\u0623\u0628\u0631\u0632 \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0643\u0627\u062a \u0628\u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629"
                            }), (0, t.jsx)("p", {
                                className: "mb-5",
                                children: "\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0647\u0648 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0633\u062a\u0628\u062f\u0644 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0645\u0633\u0627\u062d\u0629\u060c \u0644\u0642\u062f \u062a\u0645 \u062a\u0648\u0644\u064a\u062f \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0645\u0648\u0644\u062f \u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u0649\u060c \u062d\u064a\u062b \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0648\u0644\u062f \u0645\u062b\u0644 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0623\u0648 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0623\u062e\u0631\u0649 \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0632\u064a\u0627\u062f\u0629 \u0639\u062f\u062f \u0627\u0644\u062d\u0631\u0648\u0641 \u0627\u0644\u062a\u0649 \u062a\u0648\u0644\u062f\u0647\u0627 \u0627\u0644\u0635\u0641\u062d\u0629 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0647\u0648 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0633\u062a\u0628\u062f\u0644 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0645\u0633\u0627\u062d\u0629\u060c \u0644\u0642\u062f \u062a\u0645 \u062a\u0648\u0644\u064a\u062f \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0645\u0648\u0644\u062f \u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u0649\u060c"
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "mb-5",
                            children: [(0, t.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: null === i || void 0 === i ? void 0 : i.infringementsTitle
                            }), (0, t.jsx)(m.Z, {
                                children: null === i || void 0 === i ? void 0 : i.infringement.map((function(e, i) {
                                    return (0, t.jsx)(v.Z, {
                                        md: 4,
                                        children: (0, t.jsx)(L.c, {
                                            data: e
                                        })
                                    }, i)
                                }))
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "mb-5",
                            children: [(0, t.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: null === i || void 0 === i ? void 0 : i.benefitsDeterringTitle
                            }), (0, t.jsx)(m.Z, {
                                children: null === i || void 0 === i ? void 0 : i.benefits.map((function(e, i) {
                                    return (0, t.jsx)(v.Z, {
                                        md: 4,
                                        children: (0, t.jsx)(L.c, {
                                            data: e
                                        })
                                    }, i)
                                }))
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "mb-5",
                            children: [(0, t.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: null === i || void 0 === i ? void 0 : i.statisticsTitle
                            }), (0, t.jsxs)(m.Z, {
                                children: [(0, t.jsx)(v.Z, {
                                    md: 6,
                                    className: "mb-4",
                                    children: (0, t.jsxs)("div", {
                                        className: H().box,
                                        children: [(0, t.jsx)("h5", {
                                            className: "mb-5",
                                            children: (null === i || void 0 === i ? void 0 : i.statistic1Title) || "\u0639\u0646\u0648\u0627\u0646"
                                        }), (0, t.jsx)(m.Z, {
                                            children: null === i || void 0 === i ? void 0 : i.statistic1.map((function(e, i) {
                                                return (0, t.jsxs)(v.Z, {
                                                    style: 1 === i ? {
                                                        padding: "0 80px"
                                                    } : null,
                                                    children: [(0, t.jsx)(Z.Ip, {
                                                        value: e.count,
                                                        text: "".concat(e.count, "%"),
                                                        styles: (0, Z.y3)({
                                                            textcolor: "var(--theme-ui-colors-main_color)",
                                                            pathColor: "var(--theme-ui-colors-main_color)",
                                                            trailcolor: "var(--theme-ui-colors-main_color)",
                                                            strokeLinecap: "butt"
                                                        })
                                                    }), (0, t.jsx)("div", {
                                                        className: "text-center",
                                                        children: e.title
                                                    })]
                                                }, i)
                                            }))
                                        })]
                                    })
                                }), (0, t.jsx)(v.Z, {
                                    md: 6,
                                    className: "mb-4",
                                    children: (0, t.jsxs)("div", {
                                        className: H().box,
                                        children: [(0, t.jsx)("h5", {
                                            className: "mb-5",
                                            children: (null === i || void 0 === i ? void 0 : i.statistic2Title) || "\u0639\u0646\u0648\u0627\u0646"
                                        }), (0, t.jsx)(m.Z, {
                                            children: null === i || void 0 === i ? void 0 : i.statistic2.map((function(e, i) {
                                                return (0, t.jsx)(v.Z, {
                                                    children: (0, t.jsx)(P, {
                                                        visit: e
                                                    })
                                                }, i)
                                            }))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                },
                $ = n(60489),
                F = n(59946);

            function J(e, i) {
                (null == i || i > e.length) && (i = e.length);
                for (var n = 0, t = new Array(i); n < i; n++) t[n] = e[n];
                return t
            }

            function V(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, i) {
                    if (!e) return;
                    if ("string" === typeof e) return J(e, i);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, i)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var q = !0,
                z = function(e) {
                    var i, n, o, c, d, h, x, p, j, f, b, g, y, Z, _, k, C = e.respect,
                        w = void 0 === C ? {} : C,
                        P = e.headerData,
                        I = e.footerData,
                        R = (0, s.useState)("domain-brief"),
                        T = R[0],
                        S = R[1],
                        E = (0, l.$G)("common").t,
                        A = null === w || void 0 === w ? void 0 : w.breadCrumb,
                        B = (0, s.useState)(A),
                        O = B[0],
                        L = B[1],
                        M = (0, r.useRouter)();
                    return (0, s.useEffect)((function() {
                        var e = M.asPath ? M.asPath.split("#")[1] : null;
                        if (e) {
                            S(e);
                            var i = {
                                title: E(e),
                                type: "slug",
                                href: null
                            };
                            L(V(A).concat([i]))
                        } else L(A), S("domain-brief")
                    }), [A, M.asPath, E]), (0, t.jsx)(a.T3, {
                        title: null === (i = w.basicInfo) || void 0 === i ? void 0 : i.title,
                        headerProps: {
                            headerData: P
                        },
                        footerProps: {
                            footerData: I
                        },
                        breadCrumb: O,
                        children: (0, t.jsxs)($.Z.Container, {
                            defaultActiveKey: T,
                            onSelect: function(e) {
                                return function(e) {
                                    S(e), M.push({
                                        pathname: "/respect-ip"
                                    }, "/respect-ip/#".concat(e), {
                                        shallow: !0
                                    })
                                }(e)
                            },
                            activeKey: T,
                            id: "respectTabs",
                            children: [(0, t.jsx)(u.Z, {
                                children: (0, t.jsxs)(m.Z, {
                                    className: "my-lg-5",
                                    children: [(0, t.jsx)(v.Z, {
                                        lg: "10",
                                        sm: "12",
                                        className: "tabs-container",
                                        children: (0, t.jsxs)(F.Z, {
                                            className: "patents-tabs",
                                            children: [(0, t.jsx)(F.Z.Item, {
                                                children: (0, t.jsx)(F.Z.Link, {
                                                    eventKey: "domain-brief",
                                                    children: E("Brief")
                                                })
                                            }), (0, t.jsx)(F.Z.Item, {
                                                children: (0, t.jsx)(F.Z.Link, {
                                                    eventKey: "services",
                                                    children: E("services")
                                                })
                                            }), (null === w || void 0 === w || null === (n = w.campaigns) || void 0 === n ? void 0 : n.items.length) > 0 && (0, t.jsx)(F.Z.Item, {
                                                children: (0, t.jsx)(F.Z.Link, {
                                                    eventKey: "campaigns",
                                                    children: E("campaigns")
                                                })
                                            }), (null === w || void 0 === w ? void 0 : w.electronicInspection) && (0, t.jsx)(F.Z.Item, {
                                                children: (0, t.jsx)(F.Z.Link, {
                                                    eventKey: "electronic-inspection",
                                                    children: E("electronic-inspection")
                                                })
                                            }), (null === w || void 0 === w || null === (o = w.initiatives) || void 0 === o || null === (c = o.items) || void 0 === c ? void 0 : c.length) > 0 && (0, t.jsx)(F.Z.Item, {
                                                children: (0, t.jsx)(F.Z.Link, {
                                                    eventKey: "initiatives",
                                                    children: E("initiatives")
                                                })
                                            }), (null === w || void 0 === w || null === (d = w.councils) || void 0 === d || null === (h = d.items) || void 0 === h ? void 0 : h.length) > 0 && (0, t.jsx)(F.Z.Item, {
                                                children: (0, t.jsx)(F.Z.Link, {
                                                    eventKey: "councils",
                                                    children: E("councils")
                                                })
                                            })]
                                        })
                                    }), (0, t.jsx)(v.Z, {
                                        lg: "2",
                                        sm: "12",
                                        className: "justify-content-lg-end d-md-flex justify-content-md-start my-2 my-lg-0 d-none",
                                        children: (null === w || void 0 === w || null === (x = w.breif) || void 0 === x || null === (p = x.link) || void 0 === p ? void 0 : p.uri) && (0, t.jsx)("a", {
                                            href: null === w || void 0 === w || null === (j = w.breif) || void 0 === j || null === (f = j.link) || void 0 === f ? void 0 : f.uri,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, t.jsx)(a.zx, {
                                                secondary: !0,
                                                title: E("Go home"),
                                                className: "my-3 my-lg-0"
                                            })
                                        })
                                    })]
                                })
                            }), (0, t.jsxs)($.Z.Content, {
                                children: [(0, t.jsx)($.Z.Pane, {
                                    eventKey: "domain-brief",
                                    children: (0, t.jsx)(K, {
                                        brief: null === w || void 0 === w ? void 0 : w.breif,
                                        basicInfo: null === w || void 0 === w ? void 0 : w.basicInfo
                                    })
                                }), (0, t.jsx)($.Z.Pane, {
                                    eventKey: "services",
                                    children: (0, t.jsx)(N, {
                                        services: null === w || void 0 === w ? void 0 : w.services,
                                        basicInfo: null === w || void 0 === w ? void 0 : w.basicInfo
                                    })
                                }), (0, t.jsx)($.Z.Pane, {
                                    eventKey: "campaigns",
                                    children: (0, t.jsx)(D, {
                                        campaigns: null === w || void 0 === w ? void 0 : w.campaigns
                                    })
                                }), (0, t.jsx)($.Z.Pane, {
                                    eventKey: "electronic-inspection",
                                    children: (null === w || void 0 === w ? void 0 : w.electronicInspection) && (0, t.jsx)(W, {
                                        ei: null === w || void 0 === w ? void 0 : w.electronicInspection
                                    })
                                }), (0, t.jsx)($.Z.Pane, {
                                    eventKey: "initiatives",
                                    children: (0, t.jsxs)(u.Z, {
                                        children: [(0, t.jsx)("h3", {
                                            className: "main-color",
                                            children: null === w || void 0 === w || null === (b = w.initiatives) || void 0 === b ? void 0 : b.title
                                        }), (0, t.jsx)("p", {
                                            children: null === w || void 0 === w || null === (g = w.initiatives) || void 0 === g ? void 0 : g.content
                                        }), (0, t.jsx)(G, {
                                            data: null === w || void 0 === w || null === (y = w.initiatives) || void 0 === y ? void 0 : y.items
                                        })]
                                    })
                                }), (0, t.jsx)($.Z.Pane, {
                                    eventKey: "councils",
                                    children: (0, t.jsxs)(u.Z, {
                                        children: [(0, t.jsx)("h3", {
                                            className: "main-color",
                                            children: null === w || void 0 === w || null === (Z = w.councils) || void 0 === Z ? void 0 : Z.title
                                        }), (0, t.jsx)("p", {
                                            children: null === w || void 0 === w || null === (_ = w.councils) || void 0 === _ ? void 0 : _.content
                                        }), (0, t.jsx)(G, {
                                            data: null === w || void 0 === w || null === (k = w.councils) || void 0 === k ? void 0 : k.items
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        68865: function(e) {
            e.exports = {
                "title-card": "title-card_title-card__Jw9ve",
                "title-card__title": "title-card_title-card__title__VCm90",
                "title-card__number": "title-card_title-card__number__h__Kw"
            }
        },
        7344: function(e) {
            e.exports = {
                box: "brief-ip-respect_box__nQpwO",
                green: "brief-ip-respect_green__l5gQA",
                committeeCard: "brief-ip-respect_committeeCard__erMe6"
            }
        },
        17040: function(e) {
            e.exports = {
                mainHeader: "compaigns_mainHeader__xR8Hh",
                mainBody: "compaigns_mainBody__GamU_",
                section: "compaigns_section__2rpC8",
                imagesContainer: "compaigns_imagesContainer__bJIIY"
            }
        },
        29973: function(e) {
            e.exports = {
                box: "electronic-inspection_box__O79sa"
            }
        },
        51119: function(e) {
            e.exports = {
                "ip-respect-visit": "ip-respect-visit_ip-respect-visit__SaD_u"
            }
        },
        95774: function(e, i, n) {
            "use strict";
            n.d(i, {
                Ip: function() {
                    return o
                },
                y3: function() {
                    return c
                }
            });
            var t = n(67294),
                s = function(e, i) {
                    return s = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, i) {
                        e.__proto__ = i
                    } || function(e, i) {
                        for (var n in i) i.hasOwnProperty(n) && (e[n] = i[n])
                    }, s(e, i)
                };

            function l(e) {
                var i = e.className,
                    n = e.counterClockwise,
                    s = e.dashRatio,
                    l = e.pathRadius,
                    o = e.strokeWidth,
                    c = e.style;
                return (0, t.createElement)("path", {
                    className: i,
                    style: Object.assign({}, c, a({
                        pathRadius: l,
                        dashRatio: s,
                        counterClockwise: n
                    })),
                    d: r({
                        pathRadius: l,
                        counterClockwise: n
                    }),
                    strokeWidth: o,
                    fillOpacity: 0
                })
            }

            function r(e) {
                var i = e.pathRadius,
                    n = e.counterClockwise ? 1 : 0;
                return "\n      M 50,50\n      m 0,-" + i + "\n      a " + i + "," + i + " " + n + " 1 1 0," + 2 * i + "\n      a " + i + "," + i + " " + n + " 1 1 0,-" + 2 * i + "\n    "
            }

            function a(e) {
                var i = e.counterClockwise,
                    n = e.dashRatio,
                    t = e.pathRadius,
                    s = 2 * Math.PI * t,
                    l = (1 - n) * s;
                return {
                    strokeDasharray: s + "px " + s + "px",
                    strokeDashoffset: (i ? -l : l) + "px"
                }
            }
            var o = function(e) {
                function i() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return function(e, i) {
                    function n() {
                        this.constructor = e
                    }
                    s(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
                }(i, e), i.prototype.getBackgroundPadding = function() {
                    return this.props.background ? this.props.backgroundPadding : 0
                }, i.prototype.getPathRadius = function() {
                    return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
                }, i.prototype.getPathRatio = function() {
                    var e = this.props,
                        i = e.value,
                        n = e.minValue,
                        t = e.maxValue;
                    return (Math.min(Math.max(i, n), t) - n) / (t - n)
                }, i.prototype.render = function() {
                    var e = this.props,
                        i = e.circleRatio,
                        n = e.className,
                        s = e.classes,
                        r = e.counterClockwise,
                        a = e.styles,
                        o = e.strokeWidth,
                        c = e.text,
                        d = this.getPathRadius(),
                        u = this.getPathRatio();
                    return (0, t.createElement)("svg", {
                        className: s.root + " " + n,
                        style: a.root,
                        viewBox: "0 0 100 100",
                        "data-test-id": "CircularProgressbar"
                    }, this.props.background ? (0, t.createElement)("circle", {
                        className: s.background,
                        style: a.background,
                        cx: 50,
                        cy: 50,
                        r: 50
                    }) : null, (0, t.createElement)(l, {
                        className: s.trail,
                        counterClockwise: r,
                        dashRatio: i,
                        pathRadius: d,
                        strokeWidth: o,
                        style: a.trail
                    }), (0, t.createElement)(l, {
                        className: s.path,
                        counterClockwise: r,
                        dashRatio: u * i,
                        pathRadius: d,
                        strokeWidth: o,
                        style: a.path
                    }), c ? (0, t.createElement)("text", {
                        className: s.text,
                        style: a.text,
                        x: 50,
                        y: 50
                    }, c) : null)
                }, i.defaultProps = {
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
                }, i
            }(t.Component);

            function c(e) {
                var i = e.rotation,
                    n = e.strokeLinecap,
                    t = e.textColor,
                    s = e.textSize,
                    l = e.pathColor,
                    r = e.pathTransition,
                    a = e.pathTransitionDuration,
                    o = e.trailColor,
                    c = e.backgroundColor,
                    u = null == i ? void 0 : "rotate(" + i + "turn)",
                    m = null == i ? void 0 : "center center";
                return {
                    root: {},
                    path: d({
                        stroke: l,
                        strokeLinecap: n,
                        transform: u,
                        transformOrigin: m,
                        transition: r,
                        transitionDuration: null == a ? void 0 : a + "s"
                    }),
                    trail: d({
                        stroke: o,
                        strokeLinecap: n,
                        transform: u,
                        transformOrigin: m
                    }),
                    text: d({
                        fill: t,
                        fontSize: s
                    }),
                    background: d({
                        fill: c
                    })
                }
            }

            function d(e) {
                return Object.keys(e).forEach((function(i) {
                    null == e[i] && delete e[i]
                })), e
            }
        }
    },
    function(e) {
        e.O(0, [4663, 7631, 9756, 5733, 1113, 1450, 2004, 7933, 6698, 7254, 9774, 2888, 179], (function() {
            return i = 83794, e(e.s = i);
            var i
        }));
        var i = e.O();
        _N_E = i
    }
]);