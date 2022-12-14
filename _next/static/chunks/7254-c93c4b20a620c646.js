(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7254], {
        29121: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return H
                }
            });
            var i = s(34051),
                n = s.n(i),
                a = s(85893),
                r = s(67294),
                c = s(94184),
                l = s.n(c),
                o = s(76792);
            const d = {
                    "top-start": "top-0 start-0",
                    "top-center": "top-0 start-50 translate-middle-x",
                    "top-end": "top-0 end-0",
                    "middle-start": "top-50 start-0 translate-middle-y",
                    "middle-center": "top-50 start-50 translate-middle",
                    "middle-end": "top-50 end-0 translate-middle-y",
                    "bottom-start": "bottom-0 start-0",
                    "bottom-center": "bottom-0 start-50 translate-middle-x",
                    "bottom-end": "bottom-0 end-0"
                },
                u = r.forwardRef((({
                    bsPrefix: e,
                    position: t,
                    className: s,
                    as: i = "div",
                    ...n
                }, r) => (e = (0, o.vE)(e, "toast-container"), (0, a.jsx)(i, {
                    ref: r,
                    ...n,
                    className: l()(e, t && `position-absolute ${d[t]}`, s)
                }))));
            u.displayName = "ToastContainer";
            var m = u,
                h = s(6454),
                f = s(76852),
                v = Math.pow(2, 31) - 1;

            function x(e, t, s) {
                var i = s - Date.now();
                e.current = i <= v ? setTimeout(t, i) : setTimeout((function() {
                    return x(e, t, s)
                }), v)
            }

            function p() {
                var e = (0, h.Z)(),
                    t = (0, r.useRef)();
                return (0, f.Z)((function() {
                    return clearTimeout(t.current)
                })), (0, r.useMemo)((function() {
                    var s = function() {
                        return clearTimeout(t.current)
                    };
                    return {
                        set: function(i, n) {
                            void 0 === n && (n = 0), e() && (s(), n <= v ? t.current = setTimeout(i, n) : x(t, i, Date.now() + n))
                        },
                        clear: s
                    }
                }), [])
            }
            var j = s(98885),
                b = s(41068);
            const _ = {
                    [j.d0]: "showing",
                    [j.Ix]: "showing show"
                },
                y = r.forwardRef(((e, t) => (0, a.jsx)(b.Z, { ...e,
                    ref: t,
                    transitionClasses: _
                })));
            y.displayName = "ToastFade";
            var N = y,
                g = s(78146),
                Z = s(41485);
            var w = r.createContext({
                onClose() {}
            });
            const k = r.forwardRef((({
                bsPrefix: e,
                closeLabel: t,
                closeVariant: s,
                closeButton: i,
                className: n,
                children: c,
                ...d
            }, u) => {
                e = (0, o.vE)(e, "toast-header");
                const m = (0, r.useContext)(w),
                    h = (0, g.Z)((e => {
                        null == m || null == m.onClose || m.onClose(e)
                    }));
                return (0, a.jsxs)("div", {
                    ref: u,
                    ...d,
                    className: l()(e, n),
                    children: [c, i && (0, a.jsx)(Z.Z, {
                        "aria-label": t,
                        variant: s,
                        onClick: h,
                        "data-dismiss": "toast"
                    })]
                })
            }));
            k.displayName = "ToastHeader", k.defaultProps = {
                closeLabel: "Close",
                closeButton: !0
            };
            var T = k,
                S = (0, s(66611).Z)("toast-body");
            const q = r.forwardRef((({
                bsPrefix: e,
                className: t,
                transition: s = N,
                show: i = !0,
                animation: n = !0,
                delay: c = 5e3,
                autohide: d = !1,
                onClose: u,
                bg: m,
                ...h
            }, f) => {
                e = (0, o.vE)(e, "toast");
                const v = (0, r.useRef)(c),
                    x = (0, r.useRef)(u);
                (0, r.useEffect)((() => {
                    v.current = c, x.current = u
                }), [c, u]);
                const j = p(),
                    b = !(!d || !i),
                    _ = (0, r.useCallback)((() => {
                        b && (null == x.current || x.current())
                    }), [b]);
                (0, r.useEffect)((() => {
                    j.set(_, v.current)
                }), [j, _]);
                const y = (0, r.useMemo)((() => ({
                        onClose: u
                    })), [u]),
                    g = !(!s || !n),
                    Z = (0, a.jsx)("div", { ...h,
                        ref: f,
                        className: l()(e, t, m && `bg-${m}`, !g && (i ? "show" : "hide")),
                        role: "alert",
                        "aria-live": "assertive",
                        "aria-atomic": "true"
                    });
                return (0, a.jsx)(w.Provider, {
                    value: y,
                    children: g && s ? (0, a.jsx)(s, { in: i,
                        unmountOnExit: !0,
                        children: Z
                    }) : Z
                })
            }));
            q.displayName = "Toast";
            var C = Object.assign(q, {
                    Body: S,
                    Header: T
                }),
                A = s(10493),
                R = s(11163),
                $ = s(63457),
                P = s.n($),
                E = s(75755);

            function F(e, t, s, i, n, a, r) {
                try {
                    var c = e[a](r),
                        l = c.value
                } catch (o) {
                    return void s(o)
                }
                c.done ? t(l) : Promise.resolve(l).then(i, n)
            }
            var H = function(e) {
                var t = e.faq,
                    s = (0, A.$G)("common").t,
                    i = (0, R.useRouter)().locale,
                    c = t.id,
                    l = (0, r.useState)(!1),
                    o = l[0],
                    d = l[1],
                    u = (0, r.useState)(!1),
                    h = u[0],
                    f = u[1],
                    v = function() {
                        var e, t = (e = n().mark((function e(t) {
                            var s, i;
                            return n().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = {
                                            id: c,
                                            flag: t
                                        }, e.next = 3, (0, E.C)({
                                            url: "/api/helpfulness",
                                            body: s
                                        });
                                    case 3:
                                        (i = e.sent).error ? console.log("error", i.error) : (d(!0), f(!0));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                s = arguments;
                            return new Promise((function(i, n) {
                                var a = e.apply(t, s);

                                function r(e) {
                                    F(a, i, n, r, c, "next", e)
                                }

                                function c(e) {
                                    F(a, i, n, r, c, "throw", e)
                                }
                                r(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, a.jsxs)(a.Fragment, {
                    children: [o && (0, a.jsx)(m, {
                        className: "p-3 border-0",
                        style: {
                            position: "fixed",
                            bottom: "0px",
                            zIndex: "99",
                            left: "0"
                        },
                        children: (0, a.jsx)(C, {
                            className: "border-0",
                            bg: "primary",
                            show: o,
                            onClose: function() {
                                return d(!1)
                            },
                            delay: 3e3,
                            autohide: !0,
                            children: (0, a.jsx)(C.Body, {
                                className: "success text-white border-0",
                                children: s("Your Answer is submitted successfully", {
                                    ns: "common"
                                })
                            })
                        })
                    }), h ? null : (0, a.jsxs)("div", {
                        className: "mt-3 d-lg-flex main-color justify-content-between ".concat(P().benefitQ),
                        children: [(0, a.jsxs)("div", {
                            children: [s("Did you get benefit"), (0, a.jsxs)("span", {
                                className: "margin-inline-start-2",
                                children: [(0, a.jsx)("button", {
                                    onClick: function() {
                                        return v("like")
                                    },
                                    children: s("Yes")
                                }), (0, a.jsx)("button", {
                                    onClick: function() {
                                        return v("dislike")
                                    },
                                    children: s("No")
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            style: {
                                textAlign: "en" === i ? "right" : "left"
                            },
                            children: [s("Last update"), ": ", t.lastUpdate]
                        })]
                    })]
                })
            }
        },
        93174: function(e, t, s) {
            "use strict";
            s.d(t, {
                c: function() {
                    return p
                }
            });
            var i = s(18733),
                n = s(67294),
                a = s(22004),
                r = s(10682),
                c = s(21608),
                l = s(31555),
                o = s(87930),
                d = s(81569),
                u = s.n(d),
                m = s(10493),
                h = s(11163),
                f = s(25675),
                v = s(85177),
                x = s(27933),
                p = function(e) {
                    var t = e.title,
                        s = e.subtitle,
                        d = e.hasVideo,
                        p = void 0 !== d && d,
                        j = e.videoUrl,
                        b = void 0 === j ? "" : j,
                        _ = e.image,
                        y = e.hasButton,
                        N = e.buttonUrl,
                        g = e.buttonTitle,
                        Z = (0, m.$G)("common").t,
                        w = (0, h.useRouter)().locale,
                        k = (0, n.useState)(!1),
                        T = k[0],
                        S = k[1];
                    return (0, i.tZ)("div", {
                        className: "".concat(u().hero),
                        sx: {
                            background: function(e) {
                                return e.colors.bg_gradient
                            }
                        }
                    }, (0, i.tZ)(r.Z, null, (0, i.tZ)(c.Z, null, (0, i.tZ)("h1", {
                        className: "".concat(u().hero__title)
                    }, t), _ && (0, i.tZ)("div", {
                        className: "d-flex justify-content-center d-md-none"
                    }, (0, i.tZ)(f.default, {
                        src: (0, v.J)(_),
                        width: 250,
                        height: 250,
                        alt: t
                    })), (0, i.tZ)(l.Z, {
                        lg: 8
                    }, (0, i.tZ)("div", {
                        className: "".concat(u().hero__content)
                    }, (0, i.tZ)("div", {
                        className: "my-5 ".concat(u().hero__subtitle),
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    }), y && (0, i.tZ)("div", {
                        className: "mt-5"
                    }, (0, i.tZ)("a", {
                        href: N,
                        target: "_blank",
                        rel: "noreferrer"
                    }, (0, i.tZ)(x.zx, {
                        title: g,
                        secondary: !0
                    }))))), _ && (0, i.tZ)(l.Z, {
                        lg: 4,
                        className: "d-none d-md-flex justify-content-md-center"
                    }, (0, i.tZ)(f.default, {
                        src: (0, v.J)(_),
                        width: 500,
                        height: 500,
                        alt: t
                    })))), p && b && (0, i.tZ)(n.Fragment, null, (0, i.tZ)("button", {
                        className: "btn ".concat(u()["hero__video-btn"]),
                        onClick: function() {
                            return S(!0)
                        }
                    }, (0, i.tZ)("i", {
                        className: "ar" == w ? "fas fa-caret-right pr-1" : "fas fa-caret-left pr-1"
                    }), (0, i.tZ)("span", {
                        className: "bold"
                    }, Z("Explanation video"))), (0, i.tZ)(o.Z, {
                        size: "lg",
                        show: T,
                        onHide: function() {
                            return S(!1)
                        },
                        centered: !0,
                        className: "p-0 border-0"
                    }, (0, i.tZ)(o.Z.Body, {
                        className: "p-0 border-0"
                    }, (0, i.tZ)(a.Z, {
                        className: "w-100",
                        width: "100%",
                        controls: !0,
                        url: (0, v.J)(b)
                    })))))
                }
        },
        67254: function(e, t, s) {
            "use strict";
            s.d(t, {
                pB: function() {
                    return G
                },
                j8: function() {
                    return L
                },
                fQ: function() {
                    return E
                },
                wY: function() {
                    return g
                },
                hp: function() {
                    return l
                },
                dK: function() {
                    return Z
                },
                z6: function() {
                    return z
                },
                So: function() {
                    return M
                },
                De: function() {
                    return S
                },
                Dr: function() {
                    return v
                },
                ne: function() {
                    return $
                }
            });
            var i = s(85893),
                n = s(67294),
                a = s(75147),
                r = s(21151),
                c = s.n(r),
                l = function(e) {
                    var t = e.tableData,
                        s = (0, n.useState)(""),
                        r = s[0],
                        l = s[1],
                        o = (0, n.useState)([]),
                        d = o[0],
                        u = o[1];
                    return (0, n.useEffect)((function() {
                        if (t) {
                            l(null === t || void 0 === t ? void 0 : t.title);
                            var e = t.table.filter((function(e, t) {
                                if (t > 0) return e
                            }));
                            u(e)
                        }
                    }), [t]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("h3", {
                            className: "my-4 ".concat(c()["section-title"]),
                            children: r
                        }), (0, i.jsxs)(a.Z, {
                            striped: !0,
                            bordered: !0,
                            hover: !0,
                            responsive: !0,
                            size: "sm",
                            className: "".concat(c()["fees-table"], " mb-5"),
                            children: [(0, i.jsx)("thead", {
                                children: (0, i.jsx)("tr", {
                                    children: t.table[0].map((function(e, t) {
                                        return (0, i.jsx)("th", {
                                            className: "".concat(0 === t ? c()["fees-table__title"] : "", " text-nowrap"),
                                            children: e
                                        }, t)
                                    }))
                                })
                            }), (0, i.jsx)("tbody", {
                                children: d.map((function(e, t) {
                                    return (0, i.jsx)("tr", {
                                        children: e.map((function(e, t) {
                                            return (0, i.jsx)("td", {
                                                className: 0 === t ? c()["fees-table__title"] : "",
                                                children: e
                                            }, t)
                                        }))
                                    }, t)
                                }))
                            })]
                        })]
                    })
                },
                o = s(21608),
                d = s(31555),
                u = s(87536),
                m = s(10493);

            function h(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), i.forEach((function(t) {
                        h(e, t, s[t])
                    }))
                }
                return e
            }
            var v = function(e) {
                    var t = e.onFilterSubmit,
                        s = e.isReseting,
                        a = e.domain,
                        r = (0, m.$G)("common").t,
                        c = (0, u.cI)({
                            defaultValues: {
                                beneficiaryType: "",
                                searchKey: ""
                            }
                        }),
                        l = c.register,
                        h = c.watch,
                        v = c.reset,
                        x = c.getValues,
                        p = (0, n.useState)(x()),
                        j = p[0],
                        b = p[1];
                    return (0, n.useEffect)((function() {
                        s && (v(), b({
                            beneficiaryType: ""
                        }), t(x())), !j.beneficiaryType && !j.searchKey || s || (v(), b({
                            beneficiaryType: "",
                            searchKey: ""
                        }), t({}));
                        var e = h((function(e) {
                            b(e), t(e)
                        }));
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [h, v, s, x, a]), (0, i.jsx)("div", {
                        className: "services-filtration mb-4",
                        children: (0, i.jsx)("form", {
                            children: (0, i.jsxs)(o.Z, {
                                children: [(0, i.jsx)(d.Z, {
                                    lg: 6,
                                    children: (0, i.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, i.jsx)("label", {
                                            children: r("Target group")
                                        }), (0, i.jsxs)("div", {
                                            className: "btn-group d-flex radio-list",
                                            role: "group",
                                            "aria-label": "Basic example",
                                            children: [(0, i.jsx)("input", f({}, l("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check1",
                                                autoComplete: "off",
                                                checked: "" === j.beneficiaryType,
                                                value: "",
                                                readOnly: !0
                                            })), (0, i.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check1",
                                                children: r("All")
                                            }), (0, i.jsx)("input", f({}, l("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check2",
                                                autoComplete: "off",
                                                checked: "individuals" === j.beneficiaryType,
                                                value: "individuals",
                                                readOnly: !0
                                            })), (0, i.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check2",
                                                children: r("Individuals")
                                            }), (0, i.jsx)("input", f({}, l("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check3",
                                                autoComplete: "off",
                                                checked: "enterprises" === j.beneficiaryType,
                                                value: "enterprises",
                                                readOnly: !0
                                            })), (0, i.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check3",
                                                children: r("Enterprises")
                                            })]
                                        })]
                                    })
                                }), (0, i.jsx)(d.Z, {
                                    lg: 6,
                                    children: (0, i.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, i.jsx)("label", {
                                            htmlFor: "search",
                                            children: r("Search")
                                        }), (0, i.jsx)("input", f({}, l("searchKey", {
                                            required: !1
                                        }), {
                                            id: "search",
                                            name: "searchKey",
                                            type: "search",
                                            className: "form-control",
                                            placeholder: r("Search here"),
                                            maxLength: 100,
                                            onKeyPress: function(e) {
                                                "Enter" === e.key && e.preventDefault()
                                            }
                                        }))]
                                    })
                                })]
                            })
                        })
                    })
                },
                x = s(34051),
                p = s.n(x),
                j = s(11163),
                b = s(21048),
                _ = (s(12125), s(25675));
            s(94022);
            var y = s(10682),
                N = s(85177),
                g = function(e) {
                    var t = e.fees,
                        s = e.feesImage,
                        n = e.feesDescription,
                        a = e.feesLabel;
                    return (0, i.jsx)("section", {
                        className: "fees-tab",
                        children: (0, i.jsxs)(y.Z, {
                            children: [s && (0, i.jsx)("div", {
                                className: "my-auto text-center",
                                children: (0, i.jsx)("img", {
                                    className: "img-fluid",
                                    src: (0, N.J)(s),
                                    alt: a
                                })
                            }), n && (0, i.jsx)("div", {
                                className: "news-body my-5 p-3",
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            }), (null === t || void 0 === t ? void 0 : t.length) > 0 && (null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                return (0, i.jsx)(l, {
                                    tableData: e
                                }, t)
                            })))]
                        })
                    })
                },
                Z = function(e) {
                    var t = e.generalTabTitle,
                        s = e.generalTabDescription,
                        n = e.generalTabImages;
                    return (0, i.jsx)("section", {
                        className: "fees-tab",
                        children: (0, i.jsxs)(y.Z, {
                            children: [(null === n || void 0 === n ? void 0 : n.length) > 0 && (null === n || void 0 === n ? void 0 : n.map((function(e, s) {
                                return (0, i.jsx)("div", {
                                    className: "my-auto text-center",
                                    children: (0, i.jsx)("img", {
                                        className: "img-fluid",
                                        src: (0, N.J)(e),
                                        alt: t
                                    })
                                }, s)
                            }))), s && (0, i.jsx)("div", {
                                className: "news-body my-5 p-3",
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            })]
                        })
                    })
                },
                w = s(36968),
                k = s(27933),
                T = s(41664),
                S = function(e) {
                    var t = e.service,
                        s = (0, m.$G)("common").t,
                        n = t.id,
                        a = t.title,
                        r = t.summary,
                        c = t.executionPeriod,
                        l = t.executionPeriodUnit,
                        o = t.beneficiaryType,
                        d = t.individualFees,
                        u = t.entitiesFees,
                        h = t.classification;
                    return (0, i.jsxs)("div", {
                        className: "service-item",
                        children: [(0, i.jsxs)("header", {
                            className: "service-item__header",
                            children: [(0, i.jsx)("h4", {
                                className: "service-item__title",
                                children: a
                            }), (0, i.jsxs)("p", {
                                className: "service-item__subtitle",
                                children: [(0, i.jsx)("small", {
                                    className: "mb-2 d-block",
                                    children: h
                                }), r]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "service-item__body",
                            children: [(0, i.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, i.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, i.jsx)(_.default, {
                                        src: "/images/clock.svg",
                                        width: 16,
                                        height: 16,
                                        layout: "fixed",
                                        alt: "Execution time"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, i.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: s("Execution time")
                                    }), (0, i.jsxs)("p", {
                                        className: "service-item-data__subtitle",
                                        children: [c, " ", l]
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, i.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, i.jsx)(_.default, {
                                        src: "/images/target-group.svg",
                                        width: 16,
                                        height: 16,
                                        layout: "fixed",
                                        alt: "Target group"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, i.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: s("Target group")
                                    }), (0, i.jsx)("p", {
                                        className: "service-item-data__subtitle",
                                        children: Array.isArray(o) ? o.map((function(e, t) {
                                            return (0, i.jsxs)("span", {
                                                children: [e, " "]
                                            }, t)
                                        })) : (0, i.jsx)("span", {
                                            children: o
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, i.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, i.jsx)(_.default, {
                                        src: "/images/individual-fee.svg",
                                        width: 16,
                                        height: 16,
                                        layout: "fixed",
                                        alt: "Individual Fee"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, i.jsx)("div", {
                                        className: "service-item-data__title",
                                        children: s("Individual Fee")
                                    }), (0, i.jsx)("p", {
                                        className: "service-item-data__subtitle",
                                        children: (0, i.jsx)("span", {
                                            children: d || s("Not available")
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "service-item-data",
                                children: [(0, i.jsx)("div", {
                                    className: "service-item-data__icon",
                                    children: (0, i.jsx)(_.default, {
                                        src: "/images/enterprises-fee.svg",
                                        width: 16,
                                        height: 16,
                                        layout: "fixed",
                                        alt: "Enterprises Fee"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "service-item-data__content",
                                    children: [(0, i.jsx)("div", {
                                        className: "service-item-data__title",
                                        style: {
                                            fontSize: "0.85rem"
                                        },
                                        children: s("Enterprises Fee")
                                    }), (0, i.jsx)("p", {
                                        className: "service-item-data__subtitle",
                                        children: (0, i.jsx)("span", {
                                            children: u || s("Not available")
                                        })
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: "service-item__more",
                                children: (0, i.jsx)(T.default, {
                                    href: "/services/[id]",
                                    as: "/services/".concat(n),
                                    passHref: !0,
                                    children: (0, i.jsx)("a", {
                                        children: (0, i.jsx)(k.zx, {
                                            style: {
                                                width: "100%"
                                            },
                                            title: s("Details")
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                },
                q = s(16308),
                C = s(99424),
                A = function(e, t, s) {
                    return C.Z.get("/api/node/".concat(s, "?lang=").concat(t), {
                        params: e
                    })
                };

            function R(e, t, s, i, n, a, r) {
                try {
                    var c = e[a](r),
                        l = c.value
                } catch (o) {
                    return void s(o)
                }
                c.done ? t(l) : Promise.resolve(l).then(i, n)
            }
            var $ = function(e) {
                    var t = e.services,
                        s = (0, m.$G)("common").t,
                        a = (0, n.useState)(t || []),
                        r = a[0],
                        c = a[1],
                        l = (0, n.useState)({}),
                        u = l[0],
                        h = l[1],
                        f = (0, n.useState)(!1),
                        x = f[0],
                        N = f[1],
                        g = (0, n.useState)(!1),
                        Z = g[0],
                        k = g[1],
                        T = (0, j.useRouter)(),
                        C = T.locale,
                        $ = T.query.domain,
                        P = (0, b.N)(u, 1e3);
                    (0, n.useEffect)((function() {
                        if (Object.keys(P).length > 0) {
                            var e = (0, q.t)(u);
                            E(e)
                        }
                    }), [P]), (0, n.useEffect)((function() {
                        c(t)
                    }), [$]);
                    var E = function() {
                        var e, t = (e = p().mark((function e(t) {
                            var s, i, n;
                            return p().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return N(!0), e.prev = 1, e.next = 5, A(t, C, $);
                                    case 5:
                                        n = e.sent.data, c(null === n || void 0 === n || null === (s = n.data) || void 0 === s || null === (i = s.sections) || void 0 === i ? void 0 : i.services), N(!1), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), console.error(e.t0), N(!1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })), function() {
                            var t = this,
                                s = arguments;
                            return new Promise((function(i, n) {
                                var a = e.apply(t, s);

                                function r(e) {
                                    R(a, i, n, r, c, "next", e)
                                }

                                function c(e) {
                                    R(a, i, n, r, c, "throw", e)
                                }
                                r(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                    return (0, i.jsx)("section", {
                        className: "services-tab",
                        children: (0, i.jsxs)(y.Z, {
                            children: [(0, i.jsx)(o.Z, {
                                children: (0, i.jsx)(d.Z, {
                                    lg: 8,
                                    children: (0, i.jsx)(v, {
                                        onFilterSubmit: function(e) {
                                            h(e)
                                        },
                                        isReseting: Z,
                                        domain: $
                                    })
                                })
                            }), (0, i.jsx)(o.Z, {
                                children: u && !x && (0, i.jsxs)(d.Z, {
                                    className: "mb-3",
                                    children: [(0, i.jsxs)("a", {
                                        className: "d-inline-block cursor-pointer bold ".concat("ar" === C ? "reset-search" : "reset-search-en"),
                                        onClick: function() {
                                            k(!0), setTimeout((function() {
                                                return k(!1)
                                            }))
                                        },
                                        children: [(0, i.jsx)(_.default, {
                                            src: "/images/reset.svg",
                                            width: "18",
                                            height: "16",
                                            className: "action",
                                            alt: "reset-search"
                                        }), " ", s("Reset")]
                                    }), (0, i.jsxs)("span", {
                                        className: "secondary-color bold margin-inline-start-1 d-inline-block",
                                        children: [null === r || void 0 === r ? void 0 : r.length, " ", s("Result")]
                                    })]
                                })
                            }), (0, i.jsx)(o.Z, {
                                children: x && (0, i.jsx)("div", {
                                    className: "text-center py-5",
                                    children: (0, i.jsx)(w.Z, {
                                        animation: "border",
                                        role: "status",
                                        children: (0, i.jsxs)("span", {
                                            className: "visually-hidden",
                                            children: [s("Loading"), "..."]
                                        })
                                    })
                                })
                            }), !x && (null === r || void 0 === r ? void 0 : r.length) > 0 && (0, i.jsx)(o.Z, {
                                children: null === r || void 0 === r ? void 0 : r.map((function(e, t) {
                                    return (0, i.jsx)(d.Z, {
                                        lg: 4,
                                        children: (0, i.jsx)(S, {
                                            service: e
                                        })
                                    }, t)
                                }))
                            }), (0, i.jsx)(o.Z, {
                                children: x || 0 !== (null === r || void 0 === r ? void 0 : r.length) ? null : (0, i.jsx)("p", {
                                    className: "h3 text-center mb-5",
                                    children: s("No results")
                                })
                            })]
                        })
                    })
                },
                P = s(93174),
                E = function(e) {
                    var t, s, n, a, r = e.data,
                        c = (0, m.$G)("common").t,
                        l = (0, j.useRouter)().asPath.split("/")[2].split("#")[0],
                        u = null === r || void 0 === r ? void 0 : r.sections.Brief;
                    return (0, i.jsxs)("section", {
                        className: "brif-tab",
                        children: [(0, i.jsx)(P.c, {
                            title: null === u || void 0 === u ? void 0 : u.snippet.title,
                            subtitle: null === u || void 0 === u || null === (t = u.snippet) || void 0 === t ? void 0 : t.body,
                            hasVideo: !0,
                            image: null === u || void 0 === u || null === (s = u.snippet) || void 0 === s ? void 0 : s.image
                        }), (0, i.jsx)("div", {
                            className: "d-block d-md-none",
                            style: {
                                marginTop: "-70px",
                                paddingBottom: "60px"
                            },
                            children: (0, i.jsx)(z, {
                                portalLink: null === r || void 0 === r || null === (n = r.basicInfo) || void 0 === n ? void 0 : n.portalLink
                            })
                        }), (null === u || void 0 === u ? void 0 : u.statistics) && (null === u || void 0 === u ? void 0 : u.statistics.length) > 0 && (0, i.jsx)(L, {
                            statistics: null === u || void 0 === u ? void 0 : u.statistics
                        }), "239" === l || "5" === l ? (0, i.jsx)(y.Z, {
                            children: (0, i.jsxs)(o.Z, {
                                className: "my-5 quickAccessSection",
                                children: [(0, i.jsxs)("h6", {
                                    children: [c("Quick access"), " :"]
                                }), (0, i.jsxs)(d.Z, {
                                    children: [(0, i.jsx)(T.default, {
                                        href: "/patent-short-path",
                                        passHref: !0,
                                        className: "p-5",
                                        children: c("Patent Short Path")
                                    }), (0, i.jsx)(T.default, {
                                        href: "/pct",
                                        passHref: !0,
                                        children: c("Pct")
                                    })]
                                })]
                            })
                        }) : null, (null === u || void 0 === u ? void 0 : u.faqs) && (0, i.jsx)("div", {
                            className: "mt-5",
                            children: (null === u || void 0 === u || null === (a = u.faqs) || void 0 === a ? void 0 : a.length) > 0 && (0, i.jsx)(G, {
                                title: c("FAQs"),
                                faqs: null === u || void 0 === u ? void 0 : u.faqs
                            })
                        })]
                    })
                },
                F = s(46429),
                H = s.n(F),
                B = function(e) {
                    e.icon;
                    var t = e.title,
                        s = void 0 === t ? "\u0645\u062b\u0627\u0644 \u0646\u0635" : t,
                        n = e.count,
                        a = void 0 === n ? 2021 : n,
                        r = e.unit,
                        c = void 0 === r ? "\u0645\u062b\u0627\u0644" : r;
                    return (0, i.jsxs)("div", {
                        className: "".concat(H().statistic),
                        children: [(0, i.jsx)("div", {
                            className: "".concat(H().statistic__icon),
                            children: (0, i.jsx)(_.default, {
                                className: "image",
                                src: "/images/briefcase-academy.svg",
                                alt: s,
                                width: 60,
                                height: 60
                            })
                        }), (0, i.jsx)("div", {
                            className: "".concat(H().statistic__title),
                            children: s
                        }), (0, i.jsx)("div", {
                            className: "".concat(H().statistic__number),
                            children: a
                        }), (0, i.jsx)("div", {
                            className: "".concat(H().statistic__unit),
                            children: c
                        })]
                    })
                },
                D = s(36350),
                I = s.n(D),
                L = function(e) {
                    var t = e.statistics,
                        s = (0, m.$G)("common").t,
                        n = (0, j.useRouter)().locale;
                    return (0, i.jsx)("section", {
                        className: "".concat(I().statistics),
                        children: (0, i.jsxs)(y.Z, {
                            children: [(0, i.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: s("Statistics")
                            }), (0, i.jsx)(o.Z, {
                                className: "mb-3",
                                children: null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                    return (0, i.jsx)(d.Z, {
                                        md: 4,
                                        lg: 3,
                                        sm: 6,
                                        xs: 6,
                                        className: "mb-3",
                                        children: (0, i.jsx)(B, {
                                            icon: e.icon,
                                            title: e.title,
                                            unit: e.unit,
                                            count: e.count
                                        })
                                    }, t)
                                }))
                            }), (0, i.jsx)("div", {
                                className: "d-flex justify-content-end",
                                children: (0, i.jsx)(T.default, {
                                    passHref: !0,
                                    href: "/information-center/",
                                    children: (0, i.jsxs)("a", {
                                        className: "text-decoration-none",
                                        children: [s("More stats"), (0, i.jsx)("i", {
                                            className: "ar" == n ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                O = s(54076),
                G = (s(29121), function(e) {
                    var t = e.faqs,
                        s = e.showTitle,
                        n = void 0 === s || s,
                        a = e.title,
                        r = void 0 === a ? "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629" : a,
                        c = (0, m.$G)("common").t,
                        l = (0, j.useRouter)().locale;
                    return (0, i.jsx)("section", {
                        className: "mb-5",
                        children: (0, i.jsxs)(y.Z, {
                            children: [n && (0, i.jsx)("div", {
                                className: "h4 section-subtitle",
                                children: r
                            }), (0, i.jsx)(O.Z, {
                                defaultActiveKey: "0",
                                className: "mb-3",
                                children: null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                    return (0, i.jsxs)(O.Z.Item, {
                                        eventKey: t,
                                        children: [(0, i.jsxs)(O.Z.Header, {
                                            as: "h3",
                                            children: [(0, i.jsx)("div", {
                                                className: "text-start",
                                                children: e.title
                                            }), (0, i.jsx)("i", {
                                                className: "fas fa-chevron-down"
                                            })]
                                        }), (0, i.jsx)(O.Z.Body, {
                                            children: (0, i.jsx)("span", {
                                                style: {
                                                    whiteSpace: "pre-wrap"
                                                },
                                                children: e.content
                                            })
                                        })]
                                    }, e.id)
                                }))
                            }), (0, i.jsx)("div", {
                                className: "d-flex justify-content-end",
                                children: (0, i.jsx)(T.default, {
                                    passHref: !0,
                                    href: "/faqs/",
                                    children: (0, i.jsxs)("a", {
                                        className: "text-decoration-none",
                                        children: [c("More FAQs"), (0, i.jsx)("i", {
                                            className: "ar" == l ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                }),
                z = function(e) {
                    var t = e.portalLink,
                        s = e.searchLink,
                        n = (0, m.$G)("common").t;
                    return (0, i.jsxs)(o.Z, {
                        children: [s && (0, i.jsx)(d.Z, {
                            xs: 6,
                            style: {
                                textAlign: "center"
                            },
                            children: (0, i.jsx)(T.default, {
                                href: s,
                                passHref: !0,
                                children: (0, i.jsx)("a", {
                                    children: (0, i.jsx)(k.zx, {
                                        style: {
                                            width: "90%"
                                        },
                                        title: n("Search Platform")
                                    })
                                })
                            })
                        }), (0, i.jsx)(d.Z, {
                            xs: 6,
                            style: {
                                textAlign: "center"
                            },
                            children: (0, i.jsx)("a", {
                                href: t || "",
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, i.jsx)(k.zx, {
                                    secondary: !0,
                                    title: n("Go home"),
                                    style: {
                                        width: "90%"
                                    }
                                })
                            })
                        })]
                    })
                },
                K = s(42743),
                M = function(e) {
                    var t = e.publications,
                        s = (0, m.$G)("common").t;
                    return (0, i.jsxs)(y.Z, {
                        children: [(null === t || void 0 === t ? void 0 : t.length) > 0 && (0, i.jsx)(o.Z, {
                            className: "my-4",
                            children: t.map((function(e, t) {
                                return (0, i.jsx)(d.Z, {
                                    sm: 12,
                                    md: 12,
                                    lg: 12,
                                    xl: 6,
                                    children: (0, i.jsx)(K.o, {
                                        publication: e
                                    })
                                }, t)
                            }))
                        }), 0 === (null === t || void 0 === t ? void 0 : t.length) ? (0, i.jsx)("p", {
                            className: "h3 text-center mb-5",
                            children: s("No results")
                        }) : null]
                    })
                }
        },
        12125: function(e, t, s) {
            "use strict";
            s.d(t, {
                j: function() {
                    return n
                }
            });
            var i = s(99424),
                n = function(e, t) {
                    return i.Z.get("/api/listing/agent?lang=".concat(t), {
                        params: e
                    })
                }
        },
        63457: function(e) {
            e.exports = {
                generalAccordionHeader: "faq_generalAccordionHeader__A6iKM",
                generalAccordionBody: "faq_generalAccordionBody__wRq72",
                domainAccordionBody: "faq_domainAccordionBody__xyfiH",
                answerContainer: "faq_answerContainer__ZFIeq",
                benefitQ: "faq_benefitQ__3k7v7",
                domainTitle: "faq_domainTitle__rRBV8",
                domainAccordionHeader: "faq_domainAccordionHeader__ixd5Y",
                subDomainAccordionHeader: "faq_subDomainAccordionHeader__gx_rz",
                subDomainAccordionBody: "faq_subDomainAccordionBody__3i2Yj"
            }
        },
        81569: function(e) {
            e.exports = {
                hero: "page-hero_hero__GjvDx",
                hero__title: "page-hero_hero__title__tpXkF",
                hero__subtitle: "page-hero_hero__subtitle__Rmwke",
                "hero__video-btn": "page-hero_hero__video-btn__vdoSR"
            }
        },
        36350: function(e) {
            e.exports = {
                statistics: "brief-statistics_statistics__XBopX"
            }
        },
        46429: function(e) {
            e.exports = {
                statistic: "statistic-item_statistic__57oTq",
                statistic__icon: "statistic-item_statistic__icon__c_kT9",
                statistic__title: "statistic-item_statistic__title___rhub",
                statistic__number: "statistic-item_statistic__number__Ry47O",
                statistic__unit: "statistic-item_statistic__unit__IR_Gj"
            }
        },
        21151: function(e) {
            e.exports = {
                "section-title": "fees-table_section-title___pGor",
                "fees-table": "fees-table_fees-table__r5DLx",
                "fees-table__title": "fees-table_fees-table__title__SLede"
            }
        },
        75147: function(e, t, s) {
            "use strict";
            var i = s(94184),
                n = s.n(i),
                a = s(67294),
                r = s(76792),
                c = s(85893);
            const l = a.forwardRef((({
                bsPrefix: e,
                className: t,
                striped: s,
                bordered: i,
                borderless: a,
                hover: l,
                size: o,
                variant: d,
                responsive: u,
                ...m
            }, h) => {
                const f = (0, r.vE)(e, "table"),
                    v = n()(t, f, d && `${f}-${d}`, o && `${f}-${o}`, s && `${f}-striped`, i && `${f}-bordered`, a && `${f}-borderless`, l && `${f}-hover`),
                    x = (0, c.jsx)("table", { ...m,
                        className: v,
                        ref: h
                    });
                if (u) {
                    let e = `${f}-responsive`;
                    return "string" === typeof u && (e = `${e}-${u}`), (0, c.jsx)("div", {
                        className: e,
                        children: x
                    })
                }
                return x
            }));
            t.Z = l
        }
    }
]);