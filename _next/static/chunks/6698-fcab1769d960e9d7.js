(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6698], {
        94022: function(e, r, n) {
            "use strict";
            var t = n(85893),
                a = (n(67294), n(41113)),
                i = n(87536),
                o = n(10493);

            function s(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function l(e, r, n) {
                return r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n, e
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return s(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, r)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            r.Z = function(e) {
                var r = e.name,
                    n = void 0 === r ? "name" : r,
                    s = e.id,
                    d = void 0 === s ? "id" : s,
                    u = e.label,
                    m = void 0 === u ? "" : u,
                    f = e.placeholder,
                    h = void 0 === f ? "" : f,
                    x = e.defaultValue,
                    b = void 0 === x ? null : x,
                    v = e.options,
                    p = void 0 === v ? [] : v,
                    y = e.control,
                    g = e.isMulti,
                    j = void 0 !== g && g,
                    N = e.onChange,
                    _ = void 0 === N ? function() {} : N,
                    w = (0, o.$G)("common").t;
                return (0, t.jsxs)("div", {
                    className: "form-group",
                    children: [(0, t.jsx)("label", {
                        htmlFor: d,
                        children: m
                    }), (0, t.jsx)(i.Qr, {
                        name: n,
                        control: y,
                        defaultValue: b,
                        render: function(e) {
                            var r = e.field;
                            return (0, t.jsx)(a.ZP, function(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var n = null != arguments[r] ? arguments[r] : {},
                                        t = Object.keys(n);
                                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    })))), t.forEach((function(r) {
                                        l(e, r, n[r])
                                    }))
                                }
                                return e
                            }({}, r, {
                                id: d,
                                isMulti: j,
                                instanceId: d,
                                placeholder: h,
                                className: "select-input",
                                classNamePrefix: "select",
                                isClearable: !0,
                                noOptionsMessage: function() {
                                    return w("No options")
                                },
                                getOptionLabel: function(e) {
                                    return e.label
                                },
                                getOptionValue: function(e) {
                                    return e.value
                                },
                                options: p,
                                onChange: function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    var a;
                                    (a = r).onChange.apply(a, c(n)), _.apply(void 0, c(n))
                                }
                            }))
                        }
                    })]
                })
            }
        },
        42743: function(e, r, n) {
            "use strict";
            n.d(r, {
                o: function() {
                    return f
                }
            });
            var t = n(85893),
                a = n(27933),
                i = (n(67294), n(25675)),
                o = n(10493),
                s = n(78182),
                l = n(21608),
                c = n(31555),
                d = n(76980),
                u = n.n(d),
                m = n(85177),
                f = function(e) {
                    var r = e.publication,
                        n = r.title,
                        d = r.summary,
                        f = r.image,
                        h = r.file,
                        x = r.periodNumber,
                        b = r.hijriDate,
                        v = r.hijriEndDate,
                        p = r.relatedDomains,
                        y = (0, o.$G)("common").t;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(s.Z, {
                            className: "mb-5",
                            children: (0, t.jsxs)(l.Z, {
                                className: "g-0",
                                children: [(0, t.jsx)(c.Z, {
                                    md: 4,
                                    className: "image position-relative p-3 ".concat(u().img_container),
                                    style: {
                                        backgroundImage: "url(".concat((0, m.J)(f), ")"),
                                        maxHeight: "520px",
                                        minHeight: "400px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    },
                                    children: (0, t.jsx)("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: (0, m.J)(h),
                                        children: (0, t.jsxs)(a.zx, {
                                            white: !0,
                                            className: "m-auto w-100 d-none d-md-block",
                                            style: {
                                                bottom: "10px"
                                            },
                                            children: [(0, t.jsx)("i", {
                                                className: "fas fa-external-link-alt"
                                            }), " ", y("View")]
                                        })
                                    })
                                }), (0, t.jsx)(c.Z, {
                                    md: 8,
                                    children: (0, t.jsxs)(s.Z.Body, {
                                        children: [(0, t.jsx)(s.Z.Title, {
                                            children: (0, t.jsx)("a", {
                                                className: "main-color",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: (0, m.J)(h),
                                                children: n
                                            })
                                        }), (0, t.jsxs)("small", {
                                            className: "secondary-color",
                                            children: [y("publication number"), " : ", x]
                                        }), (0, t.jsx)(s.Z.Text, {
                                            className: "".concat(u().summary),
                                            children: d
                                        }), (0, t.jsxs)("div", {
                                            className: "mt-4 d-flex ".concat(u().icons_container),
                                            children: [(0, t.jsxs)("div", {
                                                className: "d-flex ".concat(u().with_icon),
                                                children: [(0, t.jsx)("div", {
                                                    className: "margin-inline-end-1",
                                                    children: (0, t.jsx)(i.default, {
                                                        src: "/images/calendar.svg",
                                                        alt: "calendar start date",
                                                        width: 16,
                                                        height: 16
                                                    })
                                                }), (0, t.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, t.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: y("from date")
                                                    }), (0, t.jsx)("div", {
                                                        className: "font-75",
                                                        children: b
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "d-flex ".concat(u().with_icon),
                                                children: [(0, t.jsxs)("div", {
                                                    className: "margin-inline-end-1",
                                                    children: [(0, t.jsx)(i.default, {
                                                        src: "/images/calendar.svg",
                                                        alt: "calendar end date",
                                                        width: 16,
                                                        height: 16
                                                    }), " "]
                                                }), (0, t.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, t.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: y("to date")
                                                    }), (0, t.jsx)("div", {
                                                        className: "font-75",
                                                        children: v
                                                    })]
                                                })]
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "d-flex",
                                            children: (0, t.jsxs)("div", {
                                                className: "d-flex ".concat(u().with_icon),
                                                children: [(0, t.jsx)("div", {
                                                    className: "margin-inline-end-1",
                                                    style: {
                                                        width: "22px"
                                                    },
                                                    children: (0, t.jsx)(i.default, {
                                                        src: "/images/domain.svg",
                                                        alt: "domain icon",
                                                        width: 16,
                                                        height: 16
                                                    })
                                                }), (0, t.jsxs)("div", {
                                                    className: u().relatedDomains,
                                                    children: [(0, t.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: y("Domain")
                                                    }), (0, t.jsx)("div", {
                                                        children: Array.isArray(p) ? p.map((function(e, r) {
                                                            return (0, t.jsxs)("span", {
                                                                className: "font-75",
                                                                children: [e, " ", "-"]
                                                            }, r)
                                                        })) : (0, t.jsx)("span", {
                                                            className: "font-75",
                                                            children: p
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "d-block d-md-none",
                                            style: {
                                                textAlign: "center",
                                                margin: "2rem 0 1rem"
                                            },
                                            children: (0, t.jsx)("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: (0, m.J)(h),
                                                children: (0, t.jsxs)(a.zx, {
                                                    className: "m-auto w-100",
                                                    children: [(0, t.jsx)("i", {
                                                        className: "fas fa-external-link-alt"
                                                    }), " ", y("View")]
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        21048: function(e, r, n) {
            "use strict";
            n.d(r, {
                N: function() {
                    return a
                }
            });
            var t = n(67294),
                a = function(e, r) {
                    var n = (0, t.useState)(e),
                        a = n[0],
                        i = n[1];
                    return (0, t.useEffect)((function() {
                        var n = setTimeout((function() {
                            i(e)
                        }), r);
                        return function() {
                            clearTimeout(n)
                        }
                    }), [e, r]), a
                }
        },
        16308: function(e, r, n) {
            "use strict";

            function t(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function a(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (t = n.next()).done) && (i.push(t.value), !r || i.length !== r); o = !0);
                        } catch (l) {
                            s = !0, a = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" === typeof e) return t(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(r, {
                t: function() {
                    return i
                }
            });
            var i = function(e) {
                var r = {};
                return Object.entries(e).forEach((function(e) {
                    var n = a(e, 2),
                        t = n[0],
                        i = n[1];
                    i && (r[t] = i)
                })), r
            }
        },
        76980: function(e) {
            e.exports = {
                img_container: "publications_img_container__a5mBV",
                summary: "publications_summary__MBGtu",
                relatedDomains: "publications_relatedDomains__1ZU_h",
                with_icon: "publications_with_icon__34uBs",
                icons_container: "publications_icons_container__XQACQ"
            }
        },
        78182: function(e, r, n) {
            "use strict";
            n.d(r, {
                Z: function() {
                    return Z
                }
            });
            var t = n(94184),
                a = n.n(t),
                i = n(67294),
                o = n(76792),
                s = n(66611),
                l = n(39602),
                c = n(85893);
            const d = i.forwardRef((({
                bsPrefix: e,
                className: r,
                variant: n,
                as: t = "img",
                ...i
            }, s) => {
                const l = (0, o.vE)(e, "card-img");
                return (0, c.jsx)(t, {
                    ref: s,
                    className: a()(n ? `${l}-${n}` : l, r),
                    ...i
                })
            }));
            d.displayName = "CardImg";
            var u = d,
                m = n(49059);
            const f = i.forwardRef((({
                bsPrefix: e,
                className: r,
                as: n = "div",
                ...t
            }, s) => {
                const l = (0, o.vE)(e, "card-header"),
                    d = (0, i.useMemo)((() => ({
                        cardHeaderBsPrefix: l
                    })), [l]);
                return (0, c.jsx)(m.Z.Provider, {
                    value: d,
                    children: (0, c.jsx)(n, {
                        ref: s,
                        ...t,
                        className: a()(r, l)
                    })
                })
            }));
            f.displayName = "CardHeader";
            var h = f;
            const x = (0, l.Z)("h5"),
                b = (0, l.Z)("h6"),
                v = (0, s.Z)("card-body"),
                p = (0, s.Z)("card-title", {
                    Component: x
                }),
                y = (0, s.Z)("card-subtitle", {
                    Component: b
                }),
                g = (0, s.Z)("card-link", {
                    Component: "a"
                }),
                j = (0, s.Z)("card-text", {
                    Component: "p"
                }),
                N = (0, s.Z)("card-footer"),
                _ = (0, s.Z)("card-img-overlay"),
                w = i.forwardRef((({
                    bsPrefix: e,
                    className: r,
                    bg: n,
                    text: t,
                    border: i,
                    body: s,
                    children: l,
                    as: d = "div",
                    ...u
                }, m) => {
                    const f = (0, o.vE)(e, "card");
                    return (0, c.jsx)(d, {
                        ref: m,
                        ...u,
                        className: a()(r, f, n && `bg-${n}`, t && `text-${t}`, i && `border-${i}`),
                        children: s ? (0, c.jsx)(v, {
                            children: l
                        }) : l
                    })
                }));
            w.displayName = "Card", w.defaultProps = {
                body: !1
            };
            var Z = Object.assign(w, {
                Img: u,
                Title: p,
                Subtitle: y,
                Body: v,
                Link: g,
                Text: j,
                Header: h,
                Footer: N,
                ImgOverlay: _
            })
        }
    }
]);