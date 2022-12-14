(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7933], {
        54177: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return s
                }
            });
            var r = n(18733);

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function i(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var s = function(e) {
                var t = e.title,
                    n = void 0 === t ? "" : t,
                    a = e.secondary,
                    s = void 0 !== a && a,
                    c = e.white,
                    l = void 0 !== c && c,
                    u = e.style,
                    d = void 0 === u ? {} : u,
                    m = e.children,
                    f = void 0 === m ? null : m,
                    p = e.className,
                    h = void 0 === p ? "" : p,
                    g = e.no_hover,
                    v = void 0 !== g && g,
                    b = i(e, ["title", "secondary", "white", "style", "children", "className", "no_hover"]),
                    y = s ? "blue" : "transparent",
                    x = s || l ? "blue" : "white",
                    w = s || l ? "white" : "blue",
                    j = l ? "white" : "blue";
                return (0, r.tZ)("button", Object.assign({
                    className: h
                }, b, {
                    sx: o({
                        minWidth: 160,
                        padding: "10px",
                        minHeight: "48px",
                        outline: "none",
                        backgroundColor: y,
                        borderColor: j,
                        borderStyle: "solid",
                        borderWidth: 2,
                        color: w,
                        zIndex: 100,
                        position: "relative",
                        cursor: "pointer",
                        boxSizing: "border-box",
                        transition: "color 0.3s",
                        "::before": {
                            content: '""',
                            width: "btn_cursor",
                            height: "btn_cursor",
                            backgroundColor: w,
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transition: "width 0.3s, height 0.3s",
                            zIndex: -1
                        },
                        ":hover": {
                            color: v ? "" : x,
                            borderColor: v ? "" : w
                        },
                        ":hover::before": {
                            width: v ? "" : "100%",
                            height: v ? "" : "100%"
                        }
                    }, d)
                }), n, f)
            }
        },
        27933: function(e, t, n) {
            "use strict";
            n.d(t, {
                jL: function() {
                    return Ye
                },
                uT: function() {
                    return l
                },
                zx: function() {
                    return Fe.z
                },
                Xz: function() {
                    return te
                },
                W2: function() {
                    return U
                },
                Z0: function() {
                    return Ke
                },
                $_: function() {
                    return Ie
                },
                h4: function() {
                    return X
                },
                pw: function() {
                    return ve
                },
                Kq: function() {
                    return ge
                },
                T3: function() {
                    return Ae
                },
                nv: function() {
                    return ue
                },
                Gp: function() {
                    return $e
                },
                Mi: function() {
                    return oe
                },
                iR: function() {
                    return se
                },
                Mr: function() {
                    return Ve
                },
                Dx: function() {
                    return Q
                }
            });
            var r = n(18733),
                a = n(67294),
                o = n(92369),
                i = n(55075);

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e) {
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
            }
            var l = (0, a.forwardRef)((function(e, t) {
                    var n = e.children,
                        a = e.style,
                        s = (0, o.B7)().colorMode,
                        l = u[s] || {},
                        d = (0, i.yK)(u);
                    return (0, r.tZ)("div", {
                        ref: t,
                        sx: c({
                            variant: "main"
                        }, a, l, d)
                    }, n)
                })),
                u = {
                    contrast: {
                        ".gray-scale": {
                            filter: "grayscale(1)"
                        }
                    },
                    en: {
                        " .illustration": {
                            transform: "rotateY(180deg)"
                        }
                    },
                    ar: {}
                },
                d = n(11163),
                m = n(25675),
                f = n(41664),
                p = n(36222),
                h = n(85893),
                g = n(45697),
                v = n.n(g),
                b = n(73190),
                y = function(e) {
                    var t = e.isOpen,
                        n = e.right,
                        r = e.width,
                        a = e.itemListElement,
                        o = e.showBurgerIcon,
                        i = e.showCloseIcon,
                        s = e.burgerButtonClassName,
                        c = e.burgerBarClassName,
                        l = e.crossButtonClassName,
                        u = e.crossClassName,
                        d = e.menuClassName,
                        m = e.morphShapeClassName,
                        f = e.itemListClassName,
                        p = e.overlayClassName,
                        g = e.content;
                    return (0, h.jsx)(b.slide, {
                        right: n,
                        isOpen: t,
                        width: r,
                        itemListElement: a,
                        customBurgerIcon: o,
                        customCrossIcon: i,
                        burgerButtonClassName: s,
                        burgerBarClassName: c,
                        crossButtonClassName: l,
                        crossClassName: u,
                        menuClassName: d,
                        morphShapeClassName: m,
                        itemListClassName: f,
                        overlayClassName: p,
                        children: g
                    })
                };
            y.propTypes = {
                itemListElement: v().string,
                burgerButtonClassName: v().string,
                burgerBarClassName: v().string,
                crossButtonClassName: v().string,
                crossClassName: v().string,
                menuClassName: v().string,
                morphShapeClassName: v().string,
                itemListClassName: v().string,
                overlayClassName: v().string,
                width: v().oneOfType([v().string, v().number]),
                right: v().bool,
                isOpen: v().bool,
                showCloseIcon: v().bool,
                showBurgerIcon: v().bool,
                content: v().node
            }, y.defaultProps = {
                itemListElement: "div",
                width: "100%",
                right: !0,
                isOpen: !1,
                showCloseIcon: !1,
                showBurgerIcon: !1,
                render: (0, h.jsx)("div", {})
            };
            var x = y,
                w = n(52113),
                j = (n(49352), n(27948)),
                O = n(26411),
                N = n(94184),
                Z = n.n(N),
                _ = n(10493),
                k = n(44014);

            function P(e) {
                var t = e.isDark,
                    n = e.isSearchVisible,
                    r = (0, _.$G)("common").t,
                    o = (0, a.useRef)(null),
                    i = (0, a.useState)(t ? "/images/green-search.svg" : "/images/white-search.svg"),
                    s = i[0],
                    c = i[1],
                    l = (0, a.useState)(""),
                    u = l[0],
                    f = l[1],
                    p = function(e) {
                        d.default.push({
                            pathname: "/search",
                            query: {
                                p: u
                            }
                        })
                    },
                    g = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "normal";
                        setTimeout((function() {
                            return c("/images/".concat(e, "-search.svg"))
                        }), 100)
                    };
                return (0, h.jsxs)("div", {
                    className: "motion-menu-wrapper",
                    children: [(0, h.jsx)("div", {
                        className: "search-menu-options ".concat(n ? "visible" : ""),
                        onMouseOver: g.bind(k.qH, "green"),
                        onMouseLeave: g.bind(k.qH, t ? "green" : "white"),
                        onFocus: g.bind(k.qH, "green"),
                        children: (0, h.jsx)("input", {
                            placeholder: r("typeHereToSearch"),
                            tabIndex: "0",
                            ref: o,
                            value: u,
                            onChange: function(e) {
                                f(o.current.value)
                            },
                            onKeyDown: function(e) {
                                "Enter" === e.key && p(e)
                            },
                            maxLength: 100,
                            "aria-label": r("Search"),
                            name: "search"
                        })
                    }), n ? (0, h.jsx)("div", {
                        className: "search-icon-wrapper",
                        children: (0, h.jsx)(m.default, {
                            onClick: p,
                            src: "/images/white-search.svg",
                            alt: "search logo",
                            width: 25,
                            height: 25,
                            className: "search-icon"
                        })
                    }) : (0, h.jsx)("div", {
                        className: "header-menu menu-head search-menu-head",
                        onMouseOver: g.bind(k.qH, "green"),
                        onMouseLeave: g.bind(k.qH, t ? "green" : "white"),
                        onFocus: g.bind(k.qH, "green"),
                        children: (0, h.jsx)(m.default, {
                            onClick: p,
                            src: s,
                            alt: r("Search"),
                            width: 30,
                            height: 30,
                            className: "search-icon"
                        })
                    })]
                })
            }
            P.propTypes = {
                isSearchVisible: v().bool
            }, P.defaultProps = {
                isSearchVisible: !1
            };
            var C = P;

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }
            var E = {
                    0: {
                        activeItemIndex: null,
                        children: []
                    },
                    1: {
                        activeItemIndex: null,
                        children: []
                    },
                    2: {
                        activeItemIndex: null,
                        children: []
                    }
                },
                T = function(e) {
                    var t, n, r, o, i, s, c = e.isOpened,
                        l = e.menuData,
                        u = e.setIsMenuOpend,
                        d = e.colored,
                        m = l.filter((function(e) {
                            return 1 == e.displayInMenu
                        })),
                        g = d,
                        v = (0, a.useState)(E),
                        b = v[0],
                        y = v[1],
                        x = (0, O.Z)("(max-width: 768px)");
                    (0, a.useEffect)((function() {
                        c ? (document.getElementsByTagName("body")[0].style.overflowY = "hidden", document.documentElement.setAttribute("disablescroll", "")) : (y(E), document.getElementsByTagName("body")[0].style.overflowY = "unset", document.documentElement.removeAttribute("disablescroll"))
                    }), [c]);
                    var N = function(e, t, n) {
                            if (e.displayInMenu) {
                                var r = "/" + e.route !== "/#",
                                    a = e.children.length > 0,
                                    o = {
                                        className: "pointer nav-item",
                                        onClick: function() {
                                            return _(e, a, t, n)
                                        }
                                    };
                                return b[n].activeItemIndex === t && (o.className = o.className.concat(" active")), r && !a ? (0, h.jsx)(f.default, {
                                    href: "/".concat(e.route),
                                    passHref: !0,
                                    children: (0, h.jsx)("a", I({}, o, {
                                        title: e.title,
                                        onClick: function() {
                                            return u(!1)
                                        },
                                        children: e.title
                                    }))
                                }, e.id) : (0, h.jsx)("a", I({}, o, {
                                    href: "#",
                                    title: e.title,
                                    children: e.title
                                }), e.id)
                            }
                        },
                        _ = function(e, t, n, r) {
                            var a = 0 === r,
                                o = 1 === r,
                                i = b[1].children.length > 0,
                                s = S({}, r, {
                                    activeItemIndex: n,
                                    children: t ? e.children : []
                                });
                            if (a && i) s[1] = E[1];
                            else if (a && !i || o) {
                                s[r + 1] = {
                                    activeItemIndex: null,
                                    children: []
                                }, b[r].activeItemIndex === n && (s[r] = E[r])
                            }
                            y((function(e) {
                                return I({}, e, s)
                            }))
                        },
                        k = (0, a.useCallback)((function(e) {
                            return b[e - 1].children.length > 0
                        }), [b]),
                        P = (0, a.useCallback)((function(e) {
                            return b[e - 1].children
                        }), [b]);
                    return (0, h.jsxs)(j.Z, {
                        maxWidth: p.TK.containerMaxWidth,
                        className: "main-burger-slides-container",
                        children: [x && (0, h.jsx)(C, {
                            isDark: !g,
                            isSearchVisible: !0
                        }), (0, h.jsx)(w.sJ, {
                            closed: !1,
                            className: Z()("dropdown-slidedown", {
                                active: null === (t = P(1)) || void 0 === t ? void 0 : t.length
                            }),
                            children: null === m || void 0 === m ? void 0 : m.map((function(e, t) {
                                return N(e, t, 0)
                            }))
                        }), (0, h.jsx)(w.sJ, {
                            closed: !k(1),
                            className: Z()("dropdown-slidedown", {
                                animating: null === (n = P(1)) || void 0 === n ? void 0 : n.length
                            }, {
                                active: null === (r = P(2)) || void 0 === r ? void 0 : r.length
                            }),
                            children: null === (o = P(1)) || void 0 === o ? void 0 : o.map((function(e, t) {
                                return N(e, t, 1)
                            }))
                        }), (0, h.jsx)(w.sJ, {
                            closed: !k(2),
                            className: Z()("dropdown-slidedown", {
                                animating: null === (i = P(2)) || void 0 === i ? void 0 : i.length
                            }),
                            children: null === (s = P(2)) || void 0 === s ? void 0 : s.map((function(e, t) {
                                return N(e, t, 2)
                            }))
                        })]
                    })
                };
            T.propTypes = {
                menuData: v().array
            }, T.defaultProps = {
                menuData: []
            };
            var M = T,
                D = function() {
                    var e = (0, _.$G)(["home"]).t,
                        t = (0, d.useRouter)(),
                        n = t.locale,
                        o = t.locales,
                        i = t.defaultLocale,
                        s = t.pathname,
                        c = t.query,
                        l = t.asPath;
                    return (0, r.tZ)(a.Fragment, null, (0, r.tZ)("div", {
                        className: "motion-menu-wrapper"
                    }, (0, r.tZ)("ul", {
                        className: "lang-menu-options"
                    }, o.filter((function(e) {
                        return e != n
                    })).map((function(t, n) {
                        return (0, r.tZ)("li", {
                            key: n,
                            className: "single-option"
                        }, (0, r.tZ)(f.default, {
                            href: {
                                pathname: s,
                                query: c
                            },
                            as: l,
                            locale: t
                        }, (0, r.tZ)("a", {
                            sx: {
                                color: "text"
                            },
                            href: "#",
                            title: e("change language to ".concat(t.toUpperCase()))
                        }, t.toUpperCase())))
                    }))), (0, r.tZ)("div", {
                        className: "header-menu menu-head lang-menu",
                        sx: {
                            ":hover": {
                                color: "text"
                            },
                            marginLeft: "8px"
                        }
                    }, n.toUpperCase() || i.toUpperCase())))
                },
                z = n(34051),
                L = n.n(z),
                B = n(87930),
                H = n(21608),
                q = n(31555),
                A = n(73196),
                R = n(52515);

            function F(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (l) {
                    return void n(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }
            var J = function(e) {
                var t = e.show,
                    n = e.handleClose,
                    r = (0, _.$G)("common").t,
                    o = (0, d.useRouter)(),
                    i = o.locale,
                    s = (0, a.useState)(""),
                    c = s[0],
                    l = s[1],
                    u = (0, a.useState)(),
                    f = (u[0], u[1]),
                    p = (0, a.useState)({}),
                    g = p[0],
                    v = p[1],
                    b = [{
                        command: ["*"],
                        callback: function(e) {
                            return l(e)
                        }
                    }],
                    y = (0, R.x6)({
                        commands: b
                    }),
                    x = y.transcript,
                    w = y.interimTranscript,
                    j = y.finalTranscript,
                    O = y.resetTranscript,
                    N = y.listening;
                if ((0, a.useEffect)((function() {
                        f("");
                        var e = function() {
                            var e, t = (e = L().mark((function e() {
                                var t;
                                return L().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, A.$g)();
                                        case 2:
                                            t = e.sent, v(t.voiceCommands);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, a) {
                                    var o = e.apply(t, n);

                                    function i(e) {
                                        F(o, r, a, i, s, "next", e)
                                    }

                                    function s(e) {
                                        F(o, r, a, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        e().catch(console.error);
                        var t = g.commands,
                            a = g.pages;
                        c && a[i] && (a[i].includes(c) ? (o.push(t[i][c]), n()) : (f((0, h.jsx)("p", {
                            children: r("This page is not available")
                        })), R.ZP.startListening({
                            language: i
                        })))
                    }), [w, j, c]), !R.ZP.browserSupportsSpeechRecognition()) return console.log("Your browser does not support speech recognition software! Try Chrome desktop, maybe?"), null;
                var Z = function(e) {
                    e ? (O(), R.ZP.stopListening()) : R.ZP.startListening({
                        language: i
                    })
                };
                return (0, h.jsxs)(B.Z, {
                    show: t,
                    onShow: function() {
                        return R.ZP.startListening({
                            language: i
                        })
                    },
                    onHide: n,
                    size: "lg",
                    "aria-labelledby": "contained-modal-title-vcenter",
                    centered: !0,
                    animation: !1,
                    dialogClassName: "paths-modal",
                    children: [(0, h.jsx)(B.Z.Header, {
                        className: "modal-header",
                        closeButton: !0
                    }), (0, h.jsx)(B.Z.Body, {
                        className: "p-0",
                        children: (0, h.jsx)(H.Z, {
                            className: "m-0",
                            children: (0, h.jsxs)(q.Z, {
                                sm: 12,
                                className: "h-full py-5 px-4",
                                children: [g.description && (0, h.jsx)("div", {
                                    className: "description",
                                    dangerouslySetInnerHTML: {
                                        __html: g.description[i]
                                    }
                                }), (0, h.jsxs)("div", {
                                    className: "text-center m-3",
                                    children: [(0, h.jsx)(m.default, {
                                        onClick: function() {
                                            return Z(N)
                                        },
                                        role: "button",
                                        src: N ? "/images/mic-icon.svg" : "/images/mic-icon-off.svg",
                                        alt: "voice-over",
                                        width: 80,
                                        height: 80,
                                        className: "control-image"
                                    }), (0, h.jsx)("p", {
                                        id: "transcript",
                                        children: x
                                    })]
                                })]
                            })
                        })
                    })]
                })
            };

            function W(e) {
                var t = e.isDark,
                    n = (0, _.$G)("common").t,
                    i = (0, a.useRef)({}),
                    s = (0, o.B7)("default"),
                    c = s.colorMode,
                    l = s.setColorMode,
                    u = (0, a.useState)(t ? "/images/green-gear.svg" : "/images/white-gear.svg"),
                    d = u[0],
                    f = u[1],
                    p = (0, a.useState)(1),
                    h = p[0],
                    g = p[1],
                    v = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "normal";
                        setTimeout((function() {
                            return f("/images/".concat(e, "-gear.svg"))
                        }), 100)
                    },
                    b = (0, a.useState)(!1),
                    y = b[0],
                    x = b[1];
                (0, a.useEffect)((function() {
                    parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("font-size")) > 16 && (document.documentElement.style.fontSize = null, window.dispatchEvent(new CustomEvent("fontSizeChange", {
                        detail: {
                            scale: 1
                        }
                    })))
                }), []), (0, a.useEffect)((function() {
                    i.current.orginial_font_size = window.getComputedStyle(document.documentElement).getPropertyValue("font-size")
                }), []), (0, a.useEffect)((function() {
                    1 !== h ? i.current.orginial_font_size && (document.documentElement.style.fontSize = "".concat(parseFloat(i.current.orginial_font_size) * h, "px"), window.dispatchEvent(new CustomEvent("fontSizeChange", {
                        detail: {
                            scale: h
                        }
                    }))) : (document.documentElement.style.fontSize = null, window.dispatchEvent(new CustomEvent("fontSizeChange", {
                        detail: {
                            scale: 1
                        }
                    })));
                    var e = function(e) {
                        e.preventDefault(), alert("dfsdf"), l("default")
                    };
                    return window.addEventListener("beforeunload", e),
                        function() {
                            window.removeEventListener("beforeunload", e)
                        }
                }), [h]);
                return (0, r.tZ)("div", {
                    className: "motion-menu-wrapper"
                }, (0, r.tZ)("div", {
                    onMouseOver: v.bind(k.qH, "green"),
                    onMouseLeave: v.bind(k.qH, t ? "green" : "white"),
                    className: "accessability-menu-options",
                    onFocus: v.bind(k.qH, "green"),
                    sx: {
                        "*": {
                            color: "text"
                        }
                    }
                }, (0, r.tZ)("div", {
                    className: "font-controls"
                }, (0, r.tZ)("div", {
                    style: {
                        opacity: 1.2 === h ? .4 : 1
                    },
                    className: "box",
                    onClick: function() {
                        1.2 !== h && g((function(e) {
                            return parseFloat((e + .1).toFixed(2))
                        }))
                    }
                }, "+A"), (0, r.tZ)("div", {
                    className: "box",
                    onClick: function() {
                        g(1)
                    }
                }, "A"), (0, r.tZ)("div", {
                    style: {
                        opacity: .8 === h ? .4 : 1
                    },
                    className: "box",
                    onClick: function() {
                        .8 !== h && g((function(e) {
                            return parseFloat((e - .1).toFixed(2))
                        }))
                    }
                }, "A-")), (0, r.tZ)("div", {
                    className: "other-control",
                    onClick: function() {
                        return l("contrast" !== c ? "contrast" : "default")
                    }
                }, (0, r.tZ)(m.default, {
                    src: "/images/high-contrast.svg",
                    alt: "high-contrast-logo",
                    width: 30,
                    height: 30,
                    className: "control-image"
                }), (0, r.tZ)("span", {
                    className: "description"
                }, n("highContrast"))), (0, r.tZ)("div", {
                    className: "other-control",
                    onClick: function() {
                        return x(!0)
                    }
                }, (0, r.tZ)(m.default, {
                    src: "/images/microphone.svg",
                    alt: "voice-over",
                    width: 30,
                    height: 30,
                    className: "control-image"
                }), (0, r.tZ)("span", {
                    className: "description"
                }, n("voiceCommands")))), (0, r.tZ)("div", {
                    onMouseOver: v.bind(k.qH, "green"),
                    onMouseLeave: v.bind(k.qH, t ? "green" : "white"),
                    className: "header-menu menu-head accessability-menu-head",
                    onFocus: v.bind(k.qH, "green")
                }, (0, r.tZ)(m.default, {
                    src: d,
                    alt: n("accessability menu"),
                    width: 30,
                    height: 30
                })), (0, r.tZ)(J, {
                    handleClose: function() {
                        return x(!1)
                    },
                    show: y
                }))
            }
            W.propTypes = {}, W.defaultProps = {};
            var $ = W;

            function G(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        G(e, t, n[t])
                    }))
                }
                return e
            }

            function V(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var U = function(e) {
                    var t = e.children,
                        n = e.style,
                        a = V(e, ["children", "style"]);
                    return (0, r.tZ)("div", Object.assign({
                        sx: K({
                            maxWidth: ["content_max_width.xxs", "content_max_width.xs", "content_max_width.s", "content_max_width.md", "content_max_width.lg"],
                            height: "100%",
                            margin: "auto",
                            display: "flex",
                            flexDirection: ["column-reverse", "row"],
                            alignItems: "center",
                            position: "relative",
                            paddingRight: ["20px", "0px"],
                            paddingLeft: ["20px", "0px"]
                        }, n)
                    }, a), t)
                },
                Y = n(23765),
                X = function(e) {
                    var t = e.colored,
                        n = void 0 !== t && t,
                        i = e.headerData,
                        s = (0, d.useRouter)().locale,
                        c = (0, _.$G)(["home"]).t,
                        l = n,
                        u = (0, a.useState)(!1),
                        p = u[0],
                        h = u[1],
                        g = (0, o.B7)().colorMode,
                        v = function() {
                            return h((function(e) {
                                return !e
                            }))
                        },
                        b = (0, a.useMemo)((function() {
                            return (0, r.tZ)("button", {
                                tabIndex: "0",
                                "aria-label": c("Main Menu"),
                                onClick: v,
                                className: "burger-menu header-menu ".concat(p ? "active" : "")
                            }, p ? (0, r.tZ)(m.default, {
                                src: "/images/close.svg",
                                alt: c("close menu"),
                                width: 20,
                                height: 20
                            }) : (0, r.tZ)(a.Fragment, null, (0, r.tZ)("div", {
                                className: "burger-first burger-border"
                            }), (0, r.tZ)("div", {
                                className: "burger-second burger-border"
                            }), (0, r.tZ)("div", {
                                className: "burger-last burger-border"
                            })))
                        }), [p]);
                    return (0, r.tZ)(a.Fragment, null, (0, r.tZ)(x, {
                        right: !0,
                        isOpen: p,
                        menuClassName: "main-burger-menu ".concat("contrast" === g ? "contrast" : ""),
                        itemListClassName: "main-burger-menu-content-wrapper",
                        content: (0, r.tZ)(M, {
                            menuData: i || [],
                            isOpened: p,
                            setIsMenuOpend: h
                        })
                    }), (0, r.tZ)("header", {
                        sx: {
                            variant: "layout.header",
                            filter: "contrast" === g ? "grayscale(1)" : "grayscale(0)",
                            "@-moz-document url-prefix()": {
                                ".header_bg": {
                                    backgroundColor: "".concat(Y.r.colors.primary, "dd")
                                }
                            }
                        },
                        className: "anim_home_header ".concat(l ? "light" : "dark")
                    }, (0, r.tZ)("div", {
                        sx: {
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            backgroundColor: "".concat(Y.r.colors.primary, "aa"),
                            opacity: 0,
                            top: 0
                        },
                        className: "header_bg"
                    }), (0, r.tZ)(U, null, (0, r.tZ)("div", {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            margin: "auto",
                            width: "100%"
                        }
                    }, (0, r.tZ)("div", {
                        sx: {
                            flex: 1,
                            position: "relative",
                            maxWidth: "40%"
                        }
                    }, (0, r.tZ)("div", {
                        className: "saip-logo-color gray-scale"
                    }, (0, r.tZ)(f.default, {
                        href: "/#",
                        passHref: !0
                    }, (0, r.tZ)("a", null, (0, r.tZ)(m.default, {
                        src: "/images/saip-logo-".concat(s, ".svg"),
                        alt: c("logo"),
                        width: 210,
                        height: 50
                    })))), (0, r.tZ)("div", {
                        className: "saip-logo-white",
                        sx: {
                            position: "absolute",
                            top: 0
                        }
                    }, l ? null : (0, r.tZ)(f.default, {
                        href: "/#",
                        passHref: !0
                    }, (0, r.tZ)("a", null, (0, r.tZ)(m.default, {
                        src: "/images/saip-logo-white-".concat(s, ".svg"),
                        alt: c("logo white"),
                        width: 210,
                        height: 50
                    }))))), (0, r.tZ)("div", {
                        sx: {
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }
                    }, (0, r.tZ)(D, null), (0, r.tZ)($, {
                        isDark: l
                    }), (0, r.tZ)("div", {
                        sx: {
                            display: "none",
                            "@media (min-width: 500pt)": {
                                display: "block"
                            }
                        }
                    }, (0, r.tZ)(C, {
                        isDark: l
                    })), b)))))
                },
                Q = function(e) {
                    var t = e.label,
                        n = e.size,
                        a = void 0 === n ? 53 : n,
                        o = e.fontSize,
                        i = e.boxColor,
                        s = void 0 === i ? "white" : i,
                        c = e.color,
                        l = e.cursorSpace,
                        u = void 0 !== l && l;
                    return (0, r.tZ)("div", {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            overflow: "visible",
                            color: "white"
                        }
                    }, (0, r.tZ)("h1", {
                        className: "home-section-title",
                        sx: {
                            paddingTop: "5px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            fontSize: o,
                            color: c
                        }
                    }, t), u ? (0, r.tZ)("div", {
                        className: "section-title-cursor",
                        sx: {
                            width: a,
                            height: a,
                            bg: s,
                            transform: "scale(0.65)"
                        }
                    }) : (0, r.tZ)("div", {
                        sx: {
                            width: a,
                            height: a,
                            margin: "0 15px",
                            overflow: "visible"
                        }
                    }, (0, r.tZ)("div", {
                        className: "section-title-cursor",
                        sx: {
                            width: a,
                            height: a,
                            bg: s,
                            transform: "scale(0.65)"
                        }
                    })))
                };

            function ee(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var te = function(e) {
                var t = e.children,
                    n = e.className,
                    a = ee(e, ["children", "className"]);
                return (0, r.tZ)("div", Object.assign({
                    className: "canvas ".concat(n || ""),
                    sx: {
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        height: "100vh",
                        width: "100vw"
                    }
                }, a), t)
            };

            function ne(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        ne(e, t, n[t])
                    }))
                }
                return e
            }

            function ae(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var oe = a.forwardRef((function(e, t) {
                var n = e.children,
                    a = e.className,
                    o = e.style,
                    i = ae(e, ["children", "className", "style"]);
                return (0, r.tZ)("div", Object.assign({
                    className: "slide ".concat(a || ""),
                    sx: re({
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        "h1, h2, h3, h4, h5, h6": {
                            marginBottom: 0
                        }
                    }, o)
                }, i, {
                    ref: t
                }), n)
            }));

            function ie(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var se = function(e) {
                var t = e.number,
                    n = (e.className, e.Append),
                    o = e.footerData,
                    i = (ie(e, ["number", "className", "Append", "footerData"]), (0, a.useMemo)((function() {
                        return Array(t).fill("")
                    }), [t]));
                return (0, r.tZ)("div", {
                    className: "slider",
                    sx: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        overflow: "hidden"
                    }
                }, i.length ? i.map((function(e, t) {
                    return (0, r.tZ)("section", {
                        className: "section slide_".concat(t + 1),
                        key: t,
                        sx: {
                            height: "100%",
                            width: "100%"
                        }
                    })
                })) : null, (0, r.tZ)(n, {
                    footerData: o
                }), (0, r.tZ)("section", {
                    className: "section slide_7",
                    sx: {
                        height: "100%",
                        width: "100%"
                    }
                }))
            };

            function ce(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        ce(e, t, n[t])
                    }))
                }
                return e
            }
            var ue = function(e) {
                    var t = e.text,
                        n = e.color,
                        a = void 0 === n ? "white" : n,
                        o = e.style;
                    return (0, r.tZ)("p", {
                        className: "regular",
                        sx: le({
                            color: a,
                            lineHeight: 2,
                            fontSize: ["paragraph.xs", "paragraph.s", "paragraph.md", "paragraph.lg"],
                            margin: ["25px 0", "20px 0", "40px 0"]
                        }, o)
                    }, t)
                },
                de = n(79068),
                me = n.n(de);

            function fe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        fe(e, t, n[t])
                    }))
                }
                return e
            }
            var he = function(e) {
                    var t = e.name,
                        n = e.style,
                        a = void 0 === n ? {} : n,
                        o = e.size,
                        i = e.className,
                        s = void 0 === i ? "" : i;
                    return (0, r.tZ)("i", {
                        className: "".concat(me().icomoon, " ").concat(me()["icon-".concat(t)], " ").concat(s),
                        sx: pe({
                            color: "primary",
                            display: "inline-block",
                            fontSize: o
                        }, a)
                    })
                },
                ge = function(e) {
                    return (0, r.tZ)(he, Object.assign({
                        name: "arrow"
                    }, e))
                },
                ve = function(e) {
                    return (0, r.tZ)(he, Object.assign({
                        name: "arrow",
                        style: {
                            transform: "rotateY(180deg)"
                        }
                    }, e))
                },
                be = n(84023);
            var ye = function(e) {
                    var t = e.data || {},
                        n = t.title,
                        r = t.details,
                        a = (0, d.useRouter)().locale;
                    return (0, h.jsxs)(be.xJ, {
                        lg: 4,
                        xl: 4,
                        className: "contact-us px-3",
                        spacing: 1,
                        children: [(0, h.jsx)("div", {
                            className: "section-title-footer",
                            children: n
                        }), (0, h.jsxs)("div", {
                            className: "contacts-wrapper",
                            children: [(0, h.jsxs)("a", {
                                tabIndex: "0",
                                href: "tel:".concat(null === r || void 0 === r ? void 0 : r.phone),
                                className: "single-contact telephone",
                                rel: "noopener",
                                children: [(0, h.jsx)(m.default, {
                                    src: "ar" === a ? "/images/phone.svg" : "/images/phone-en.svg",
                                    alt: "phone-placeholder",
                                    width: 20,
                                    height: 20
                                }), (0, h.jsx)("span", {
                                    className: "single-contact-value",
                                    children: (null === r || void 0 === r ? void 0 : r.phone) || "\u063a\u064a\u0631 \u0645\u062a\u0627\u062d \u062d\u0627\u0644\u064a\u0627"
                                })]
                            }), (0, h.jsxs)("a", {
                                tabIndex: "0",
                                href: "mailto:saip@saip.gov.sa",
                                className: "single-contact mail",
                                rel: "noopener",
                                children: [(0, h.jsx)(m.default, {
                                    src: "/images/mail.svg",
                                    alt: "mail-placeholder",
                                    width: 20,
                                    height: 20
                                }), (0, h.jsx)("span", {
                                    className: "single-contact-value",
                                    children: (null === r || void 0 === r ? void 0 : r.email) || "\u063a\u064a\u0631 \u0645\u062a\u0627\u062d \u062d\u0627\u0644\u064a\u0627"
                                })]
                            }), (0, h.jsxs)("a", {
                                href: "https://goo.gl/maps/Cz8kGet1Bcfd9yDY6",
                                rel: "noopener noreferrer",
                                className: "single-contact location",
                                target: "_blank",
                                children: [(0, h.jsx)(m.default, {
                                    src: "/images/location.svg",
                                    alt: "location-placeholder",
                                    width: 30,
                                    height: 30
                                }), (0, h.jsx)("span", {
                                    className: "single-contact-value",
                                    children: (null === r || void 0 === r ? void 0 : r.address) || "\u063a\u064a\u0631 \u0645\u062a\u0627\u062d \u062d\u0627\u0644\u064a\u0627"
                                })]
                            }), (0, h.jsx)("div", {
                                className: "mb-2",
                                children: (0, h.jsx)("a", {
                                    href: "https://www.vision2030.gov.sa/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, h.jsx)(m.default, {
                                        width: 100,
                                        height: 67,
                                        src: "/images/vision-w.svg",
                                        alt: "vision 2030"
                                    })
                                })
                            })]
                        })]
                    })
                },
                xe = n(10682);
            var we = function(e) {
                var t, n = e.data,
                    r = n.copyRights,
                    a = n.menu;
                return (0, h.jsx)(xe.Z, {
                    className: "px-3",
                    children: (0, h.jsxs)(H.Z, {
                        className: "copyrights-container",
                        children: [(0, h.jsx)(q.Z, {
                            lg: 5,
                            className: "order-2 order-lg-1 mt-2 mb-3",
                            children: (0, h.jsx)("div", {
                                className: "copywrite",
                                children: null === r || void 0 === r ? void 0 : r.title
                            })
                        }), (0, h.jsx)(q.Z, {
                            lg: 7,
                            className: "links order-1 order-lg-2 mb-3",
                            children: (0, h.jsx)(H.Z, {
                                style: {
                                    gap: "9px"
                                },
                                children: null === a || void 0 === a || null === (t = a.details) || void 0 === t ? void 0 : t.map((function(e) {
                                    return (0, h.jsx)(q.Z, {
                                        xl: 2,
                                        lg: 2,
                                        md: 3,
                                        xs: 3,
                                        sm: 4,
                                        className: "link-container",
                                        style: {
                                            margin: "9px",
                                            padding: "0",
                                            textAlign: "center"
                                        },
                                        children: (0, h.jsx)(f.default, {
                                            passHref: !0,
                                            href: "/".concat(null === e || void 0 === e ? void 0 : e.route),
                                            children: (0, h.jsxs)("a", {
                                                className: "single-contact text-nowrap",
                                                children: [null === e || void 0 === e ? void 0 : e.title, " "]
                                            })
                                        })
                                    }, e.id)
                                }))
                            })
                        })]
                    })
                })
            };
            var je = function(e) {
                    var t = e.data || {},
                        n = t.title,
                        r = t.details;
                    return (0, h.jsxs)(be.xJ, {
                        md: 4,
                        lg: 4,
                        xl: 4,
                        className: "inner-links px-3",
                        spacing: 1,
                        children: [(0, h.jsxs)("div", {
                            className: "section-title-footer",
                            children: [n, " "]
                        }), (0, h.jsx)("div", {
                            className: "contacts-wrapper",
                            children: null === r || void 0 === r ? void 0 : r.map((function(e) {
                                return (0, h.jsx)(f.default, {
                                    href: "/".concat(e.route || "/"),
                                    children: (0, h.jsx)("a", {
                                        className: "single-contact",
                                        children: e.title
                                    })
                                }, e.id)
                            }))
                        })]
                    })
                },
                Oe = n(85177);

            function Ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ze(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function _e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        Ze(e, t, n[t])
                    }))
                }
                return e
            }

            function ke(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
                        } catch (c) {
                            s = !0, a = c
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Ne(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Pe = function(e) {
                var t = e.data,
                    n = (t || {
                        title: "",
                        details: {}
                    }).title,
                    r = (0, a.useMemo)((function() {
                        var e = [];
                        return (null === t || void 0 === t ? void 0 : t.details) && Object.entries(t.details).map((function(t) {
                            var n = ke(t, 2),
                                r = n[0],
                                a = n[1];
                            switch (r) {
                                case "facebook":
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/facebook.svg"
                                    }));
                                    break;
                                case "Instgram":
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/instgram.svg"
                                    }));
                                    break;
                                case "linkedin":
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/linkedin.svg"
                                    }));
                                    break;
                                case "twitter":
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/twitter.svg"
                                    }));
                                    break;
                                case "youtube":
                                default:
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/youtube.svg"
                                    }));
                                    break;
                                case "whatsapp":
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/whatsapp.svg"
                                    }));
                                    break;
                                case "snapchat":
                                    e.push(_e({}, a, {
                                        image: (0, Oe.J)(a.whiteImage) || "/images/snapchat.svg"
                                    }))
                            }
                        })), e
                    }), [t]);
                return (0, h.jsxs)(be.xJ, {
                    lg: 4,
                    xl: 4,
                    className: "social-links px-3 ",
                    spacing: 1,
                    children: [(0, h.jsx)("div", {
                        variant: "h6",
                        className: "section-title-footer",
                        children: n
                    }), (0, h.jsx)("div", {
                        className: "contacts-wrapper",
                        children: r.map((function(e, t) {
                            return (0, h.jsx)("a", {
                                href: e.route,
                                target: "_blank",
                                tabIndex: "0",
                                className: "single-contact",
                                rel: "noopener noreferrer",
                                children: (0, h.jsx)(m.default, {
                                    src: e.image,
                                    alt: e.title,
                                    width: 35,
                                    height: 35
                                })
                            }, e.id)
                        }))
                    })]
                })
            };

            function Ce(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        Ce(e, t, n[t])
                    }))
                }
                return e
            }
            var Ie = function(e) {
                    var t = e.style,
                        n = e.footerData,
                        a = void 0 === n ? {} : n;
                    return (0, r.tZ)("footer", {
                        id: "footer",
                        className: "footer",
                        sx: Se({
                            variant: "layout.footer"
                        }, t)
                    }, (0, r.tZ)(be.lt, {
                        className: "pt-3"
                    }, (0, r.tZ)(ye, {
                        data: a.contactUs
                    }), (0, r.tZ)(je, {
                        data: a.interestedLinks
                    }), (0, r.tZ)(Pe, {
                        data: a.socialLinks
                    }), (0, r.tZ)("hr", {
                        className: "divider"
                    }), (0, r.tZ)(we, {
                        data: {
                            copyRights: a.copyRights,
                            menu: a.SecondaryMenu
                        }
                    })))
                },
                Ee = n(26699);

            function Te(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var Me = function(e) {
                e.omitIndexList;
                var t, n = e.darkMode,
                    r = e.data,
                    a = (e.pageTitle, (0, d.useRouter)().locale, Te(t = {
                        about: "/about",
                        academy_program: "/academy",
                        advisory_board: "/about/advisory-board",
                        board_directors: "/about/board-directors",
                        board_of_directors: "/about/board-directors",
                        agent: "/agents",
                        article: "/articles",
                        campaign: "/respect-ip",
                        education_project: "/academy",
                        electronic_inspection: "/respect-ip",
                        event: "/events",
                        faqs: "/faqs",
                        ip_clinic: "/consulting-clinics",
                        ip_domain: "/ip",
                        ip_domain_path_stage: "/ip-paths",
                        ip_respect: "/respect-ip",
                        legislation_and_policy: "/privacy-legislation",
                        news: "/news",
                        news_paper: "/newspaper",
                        public_consultation: "/public-visuals",
                        publication: "/publications",
                        recruitment: "/recruitment",
                        report: "/reports",
                        research_study: "/research-studies",
                        sector_product: "/ip-paths",
                        service: "/services",
                        success_story: "/consulting-clinics",
                        support_center: "/tisc",
                        tisc: "/tisc",
                        translation: "/translations",
                        version: "/versions",
                        page: "/page",
                        academy: "/academy",
                        search_engine: "/information-center/#search_engines",
                        pct: "/pct",
                        ip_information_center: "/information-center",
                        ip: "/ip",
                        usage_policies: "/privacy-policy",
                        contact_us: "/contact-us",
                        national_strategy: "/national-strategy",
                        litigation_path: "/litigation-paths"
                    }, "academy_program", "/academy#training-programs"), Te(t, "education_project", "/academy#education-projects"), Te(t, "dictionary", "/dictionary"), Te(t, "entity_partner", "/entities-partners"), Te(t, "committees_main_page_details", "/committees-secretariat"), Te(t, "committees_main_page", "/committees-secretariat"), Te(t, "committee_members", "/committees-secretariat"), t),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return "ip_domain_details" === e ? "/ip-domains/".concat(t) : a[e] ? a[e] : "/"
                    };
                return (0, h.jsx)(xe.Z, {
                    fluid: p.TK.containerMaxWidth,
                    children: (0, h.jsx)(H.Z, {
                        children: (0, h.jsx)(q.Z, {
                            children: (0, h.jsx)(Ee.Z, {
                                className: "breadcrumb-wrapper ".concat(n ? "dark" : "light"),
                                children: r.length > 0 && r.map((function(e, t) {
                                    return function(e) {
                                        return e + 1 == r.length
                                    }(t) || "#" === e.href ? (0, h.jsx)(Ee.Z.Item, {
                                        active: !0,
                                        className: "disabled-breadcrumb",
                                        children: e.title
                                    }, e.type + t + "-item") : (0, h.jsx)(f.default, {
                                        href: o(e.type ? e.type : "/", e.id),
                                        passHref: !0,
                                        children: (0, h.jsx)(Ee.Z.Item, {
                                            className: "light active-breadcrumb pointer",
                                            children: e.title
                                        })
                                    }, e.type + t + "-item")
                                }))
                            })
                        })
                    })
                })
            };
            Me.propTypes = {
                omitIndexList: v().array
            }, Me.defaultProps = {
                omitIndexList: []
            };
            var De = Me,
                ze = function(e) {
                    var t = e.colored,
                        n = void 0 !== t && t,
                        i = e.headerData,
                        s = (0, d.useRouter)().locale,
                        c = (0, _.$G)(["home"]).t,
                        l = (0, O.Z)("(max-width: 768px)"),
                        u = (0, o.B7)().colorMode,
                        h = n,
                        g = (0, a.useState)(!1),
                        v = g[0],
                        b = g[1],
                        y = function() {
                            return b((function(e) {
                                return !e
                            }))
                        },
                        w = (0, a.useMemo)((function() {
                            return (0, r.tZ)("button", {
                                tabIndex: "0",
                                "aria-label": c("Main Menu"),
                                onClick: y,
                                className: "burger-menu header-menu ".concat(v ? "active" : "")
                            }, v ? (0, r.tZ)(m.default, {
                                src: "/images/close.svg",
                                alt: c("close menu"),
                                width: 20,
                                height: 20
                            }) : (0, r.tZ)(a.Fragment, null, (0, r.tZ)("div", {
                                className: "burger-first burger-border"
                            }), (0, r.tZ)("div", {
                                className: "burger-second burger-border"
                            }), (0, r.tZ)("div", {
                                className: "burger-last burger-border"
                            })))
                        }), [v]);
                    return (0, r.tZ)(a.Fragment, null, (0, r.tZ)(x, {
                        colored: n,
                        right: !0,
                        isOpen: v,
                        menuClassName: "main-burger-menu ".concat("contrast" === u ? "contrast" : ""),
                        itemListClassName: "main-burger-menu-content-wrapper",
                        content: (0, r.tZ)(M, {
                            menuData: i || [],
                            isOpened: v,
                            setIsMenuOpend: b
                        })
                    }), (0, r.tZ)("header", {
                        sx: {
                            variant: "layout.header"
                        },
                        className: h ? "dark" : "light"
                    }, (0, r.tZ)(xe.Z, {
                        fluid: p.TK.containerMaxWidth
                    }, (0, r.tZ)("div", {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            margin: "auto"
                        }
                    }, (0, r.tZ)("div", {
                        sx: {
                            flex: 1,
                            position: "relative"
                        }
                    }, (0, r.tZ)("div", {
                        className: "saip-logo-color"
                    }, (0, r.tZ)(f.default, {
                        href: "/#",
                        passHref: !0
                    }, (0, r.tZ)("a", null, (0, r.tZ)(m.default, {
                        src: "/images/saip-logo-".concat(s, ".svg"),
                        alt: c("logo"),
                        width: 210,
                        height: 50
                    })))), (0, r.tZ)("div", {
                        className: "saip-logo-white",
                        sx: {
                            position: "absolute",
                            top: 0
                        }
                    }, h ? (0, r.tZ)(f.default, {
                        href: "/#",
                        passHref: !0
                    }, (0, r.tZ)("a", null, (0, r.tZ)(m.default, {
                        src: "/images/saip-logo-white-".concat(s, ".svg"),
                        alt: c("logo white"),
                        width: 210,
                        height: 50
                    }))) : null)), (0, r.tZ)("div", {
                        sx: {
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }
                    }, (0, r.tZ)("div", {
                        sx: {
                            mx: 5
                        }
                    }), (0, r.tZ)(D, null), (0, r.tZ)($, {
                        isDark: !h
                    }), (0, r.tZ)("div", {
                        sx: {
                            mx: 3
                        }
                    }), !l && (0, r.tZ)(a.Fragment, null, (0, r.tZ)(C, {
                        isDark: !h
                    }), (0, r.tZ)("div", {
                        sx: {
                            mx: 4
                        }
                    })), w)))))
                },
                Le = n(9008);

            function Be(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function He(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        Be(e, t, n[t])
                    }))
                }
                return e
            }

            function qe(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
            var Ae = function(e) {
                    var t = e.children,
                        n = e.title,
                        i = void 0 === n ? "" : n,
                        s = e.darkMode,
                        c = void 0 !== s && s,
                        l = e.style,
                        u = void 0 === l ? "" : l,
                        m = e.headerProps,
                        f = e.footerProps,
                        p = e.breadCrumb,
                        h = void 0 === p ? [] : p,
                        g = qe(e, ["children", "title", "darkMode", "style", "headerProps", "footerProps", "breadCrumb"]),
                        v = (0, d.useRouter)().asPath,
                        b = (0, a.useMemo)((function() {
                            return "/" === v
                        }), [v]),
                        y = (0, o.B7)().colorMode,
                        x = Re[y] || {};
                    return (0, r.tZ)(a.Fragment, null, (0, r.tZ)(Le.default, null, (0, r.tZ)("title", null, i)), (0, r.tZ)("div", Object.assign({
                        sx: He({}, u, x)
                    }, g), (0, r.tZ)(ze, Object.assign({
                        colored: c
                    }, m)), (0, r.tZ)("div", {
                        className: "root-app",
                        style: {
                            paddingTop: "120px"
                        }
                    }, !b && (0, r.tZ)(De, {
                        darkMode: c,
                        data: h,
                        pageTitle: i
                    }), t), (0, r.tZ)(Ie, Object.assign({}, f))))
                },
                Re = {
                    contrast: {
                        img: {
                            filter: "grayscale(1)"
                        },
                        svg: {
                            filter: "grayscale(1)"
                        },
                        canvas: {
                            filter: "grayscale(1)"
                        },
                        ".image": {
                            filter: "grayscale(1)"
                        },
                        ".select-input .select__control": {
                            backgroundColor: "#f0f0f0"
                        },
                        ".services-filtration input": {
                            backgroundColor: "#f0f0f0"
                        },
                        ".select-input .select__multi-value": {
                            backgroundColor: "#dcdcdc"
                        },
                        ".motion-menu-wrapper .accessability-menu-options": {
                            backgroundColor: "#f0f0f0"
                        }
                    }
                },
                Fe = n(54177),
                Je = n(88545),
                We = n(21818),
                $e = function(e) {
                    var t = e.title,
                        n = (e.body, (0, d.useRouter)()),
                        r = {
                            display: "inline",
                            width: "auto",
                            padding: "0",
                            marginInlineEnd: "5px",
                            marginInlineStart: "5px",
                            marginBottom: "5px"
                        },
                        o = (0, a.useState)(""),
                        i = o[0],
                        s = o[1];
                    return (0, a.useEffect)((function() {
                        var e = window.location.host,
                            t = "https://".concat(e);
                        s("".concat(t).concat(n.asPath))
                    }), [n.asPath]), (0, h.jsx)(h.Fragment, {
                        children: (0, h.jsxs)(Je.Z, {
                            navbar: "true",
                            children: [(0, h.jsx)(Je.Z.Toggle, {
                                variant: "success",
                                id: "share-it",
                                style: {
                                    minWidth: "50px",
                                    marginInlineStart: "10px",
                                    padding: "10px",
                                    outline: "none",
                                    backgroundColor: "transparent",
                                    borderColor: "var(--theme-ui-colors-blue)",
                                    borderStyle: "solid",
                                    borderWidth: "2px",
                                    color: "var(--theme-ui-colors-blue)",
                                    zIndex: "100",
                                    position: "relative",
                                    cursor: "pointer",
                                    transition: "color 0.3s",
                                    borderRadius: "0"
                                },
                                children: (0, h.jsx)(m.default, {
                                    src: "/images/share.svg",
                                    alt: "share",
                                    width: 16,
                                    height: 16
                                })
                            }), (0, h.jsxs)(Je.Z.Menu, {
                                style: {
                                    minWidth: "170px"
                                },
                                children: [(0, h.jsx)(Je.Z.Item, {
                                    style: r,
                                    children: (0, h.jsx)(We.Dk, {
                                        url: i,
                                        quote: t,
                                        children: (0, h.jsx)(We.Vq, {
                                            size: 32
                                        })
                                    })
                                }), (0, h.jsx)(Je.Z.Item, {
                                    style: r,
                                    children: (0, h.jsx)(We.B, {
                                        url: i,
                                        title: t,
                                        children: (0, h.jsx)(We.Zm, {
                                            size: 32
                                        })
                                    })
                                }), (0, h.jsx)(Je.Z.Item, {
                                    style: r,
                                    children: (0, h.jsx)(We.r2, {
                                        url: i,
                                        children: (0, h.jsx)(We.pA, {
                                            size: 32
                                        })
                                    })
                                }), (0, h.jsx)(Je.Z.Item, {
                                    style: r,
                                    children: (0, h.jsx)(We.cG, {
                                        url: i,
                                        subject: t,
                                        children: (0, h.jsx)(We.LQ, {
                                            size: 32
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                Ge = n(54076),
                Ke = function(e) {
                    var t = e.faqs,
                        n = e.showTitle,
                        r = void 0 === n || n,
                        a = e.title,
                        o = void 0 === a ? "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629" : a,
                        i = (0, _.$G)("common").t,
                        s = (0, d.useRouter)().locale;
                    return (0, h.jsx)("section", {
                        className: "mb-5",
                        children: (0, h.jsxs)(xe.Z, {
                            children: [r && (0, h.jsx)("h4", {
                                className: "section-subtitle",
                                children: o
                            }), (0, h.jsx)(Ge.Z, {
                                defaultActiveKey: "0",
                                className: "mb-3",
                                children: null === t || void 0 === t ? void 0 : t.map((function(e, t) {
                                    return (0, h.jsxs)(Ge.Z.Item, {
                                        eventKey: t,
                                        children: [(0, h.jsxs)(Ge.Z.Header, {
                                            as: "h3",
                                            children: [e.title, (0, h.jsx)("i", {
                                                className: "fas fa-chevron-down"
                                            })]
                                        }), (0, h.jsx)(Ge.Z.Body, {
                                            children: e.content
                                        })]
                                    }, e.id)
                                }))
                            }), (0, h.jsx)("div", {
                                className: "d-flex justify-content-end",
                                children: (0, h.jsx)(f.default, {
                                    passHref: !0,
                                    href: "/faqs/",
                                    children: (0, h.jsxs)("a", {
                                        className: "text-decoration-none",
                                        children: [i("More FAQs"), (0, h.jsx)("i", {
                                            className: "ar" == s ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                Ve = (n(7995), function() {
                    var e = (0, _.$G)("common").t;
                    return (0, h.jsxs)("div", {
                        className: "image",
                        style: {
                            backgroundImage: "url('/images/404.svg')",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "100% 170px",
                            minHeight: "400px",
                            padding: "100px 40px 0px 40px",
                            backgroundColor: "var(--theme-ui-colors-bg_overlay_hover)",
                            backgroundOrigin: "border-box"
                        },
                        children: [(0, h.jsx)("h3", {
                            className: "main-color",
                            children: e("soon")
                        }), (0, h.jsx)("p", {
                            className: "main-color",
                            children: e("soon_text")
                        })]
                    })
                }),
                Ue = n(88375),
                Ye = function(e) {
                    var t = e.data,
                        n = (0, _.$G)(["home"]).t,
                        r = (0, a.useState)(!0),
                        o = r[0],
                        i = r[1];
                    return (0, h.jsx)("div", {
                        className: "banner",
                        children: o && (0, h.jsx)(Ue.Z, {
                            variant: "success",
                            className: "text-white text-center",
                            onClose: function() {
                                return i(!1)
                            },
                            dismissible: !0,
                            closeLabel: n("Close banner"),
                            children: (0, h.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: t.body
                                }
                            })
                        })
                    })
                }
        },
        7995: function(e, t, n) {
            "use strict";
            var r = n(34051),
                a = n.n(r),
                o = n(85893),
                i = (n(67294), n(45697)),
                s = n.n(i),
                c = n(10493),
                l = n(21519),
                u = n(35005),
                d = n(10682),
                m = n(36222),
                f = n(75755);

            function p(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (l) {
                    return void n(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }
            var h = function(e) {
                var t = e.question,
                    n = e.data,
                    r = void 0 === n ? {} : n,
                    i = e.className,
                    s = e.showAlert,
                    h = (0, c.$G)("common").t,
                    g = r.date,
                    v = r.id,
                    b = function() {
                        var e, t = (e = a().mark((function e(t) {
                            var n, r;
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            id: v,
                                            flag: t
                                        }, e.next = 3, (0, f.C)({
                                            url: "/api/helpfulness",
                                            body: n
                                        });
                                    case 3:
                                        (r = e.sent).error ? console.log("error", r.error) : s(!0);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, a) {
                                var o = e.apply(t, n);

                                function i(e) {
                                    p(o, r, a, i, s, "next", e)
                                }

                                function s(e) {
                                    p(o, r, a, i, s, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, o.jsx)("div", {
                    className: "page-inquiry ".concat(i),
                    children: (0, o.jsxs)(d.Z, {
                        className: "container ".concat(t ? "" : "justify-content-end"),
                        fluid: m.TK.containerMaxWidth,
                        children: [t && (0, o.jsxs)("div", {
                            className: "faqs-accordion-action flex-horizontal-start",
                            children: [(0, o.jsx)("div", {
                                className: "question",
                                style: {
                                    fontSize: "0.65rem"
                                },
                                children: h("pageInquiry")
                            }), (0, o.jsxs)("div", {
                                className: "accordion-actions-wrapper flex-horizontal-start",
                                children: [(0, o.jsx)(u.Z, {
                                    size: "small",
                                    variant: "text",
                                    className: "action",
                                    onClick: function() {
                                        return b("like")
                                    },
                                    children: h("Yes")
                                }), (0, o.jsx)(l.Z, {
                                    orientation: "vertical",
                                    className: "divider"
                                }), (0, o.jsx)(u.Z, {
                                    size: "small",
                                    variant: "text",
                                    className: "action",
                                    onClick: function() {
                                        return b("dislike")
                                    },
                                    children: h("No")
                                })]
                            })]
                        }), (0, o.jsxs)("span", {
                            className: "time",
                            "aria-label": "last-update-date",
                            style: {
                                fontSize: "0.75rem"
                            },
                            children: [h("lastUpdate"), ": ", g]
                        })]
                    })
                })
            };
            h.propTypes = {
                onClick: s().func
            }, h.defaultProps = {
                onClick: function() {}
            }
        },
        64212: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return r
                }
            });
            var r = "https://externalportal-backend-production.saip.gov.sa",
                a = "".concat(r, "/api"),
                o = "".concat(r, "/api/lookup"),
                i = "".concat(r, "/api/taxonomy");
            "".concat(o, "/"), "".concat(a, "/"), "".concat(i, "/")
        },
        36222: function(e, t, n) {
            "use strict";
            n.d(t, {
                TK: function() {
                    return r
                }
            });
            var r = {
                ltrClassName: "ltr-theme",
                containerMaxWidth: "xl"
            };
            n(64212)
        },
        84023: function(e, t, n) {
            "use strict";
            n.d(t, {
                xJ: function() {
                    return b
                },
                lt: function() {
                    return h
                }
            });
            var r = n(85893),
                a = n(67294),
                o = n(45697),
                i = n.n(o),
                s = n(94184),
                c = n.n(s),
                l = n(10682),
                u = n(21608),
                d = n(25675),
                m = function(e) {
                    var t = e.text,
                        n = e.isTextVisible;
                    return (0, r.jsxs)("div", {
                        className: "loader-layout",
                        children: [(0, r.jsx)(d.default, {
                            src: "/images/loader.svg",
                            width: "60",
                            height: "60",
                            alt: "loader-icon"
                        }), n && (0, r.jsx)("p", {
                            className: "loading-text",
                            children: t || "\u062a\u062d\u0645\u064a\u0644"
                        })]
                    })
                };
            m.propTypes = {
                text: i().string,
                isTextVisible: i().bool
            }, m.defaultProps = {
                text: "",
                isTextVisible: !0
            };
            var f = m,
                p = n(36222),
                h = function(e) {
                    var t = e.className,
                        n = e.children,
                        o = e.elementType,
                        i = e.rowClassName,
                        s = e.onSubmit,
                        d = e.loading,
                        m = e.loaderMessage,
                        p = e.id,
                        h = e.fluid,
                        g = e.wrapperClassName,
                        v = (0, a.useMemo)((function() {
                            return (0, r.jsxs)(l.Z, {
                                id: p,
                                fluid: h,
                                className: "general-form-wrapper position-relative ".concat(t),
                                children: [d && (0, r.jsx)("div", {
                                    className: "attached-loader",
                                    children: (0, r.jsx)(f, {
                                        text: m || "\u062a\u062d\u0645\u064a\u0644"
                                    })
                                }), (0, r.jsx)(u.Z, {
                                    className: "general-form-wrapper-row formInnerGrid ".concat(i),
                                    children: n
                                })]
                            })
                        }), [n]),
                        b = {
                            className: c()("form", g),
                            onSubmit: function(e) {
                                e.preventDefault(), s()
                            },
                            onKeyDown: function(e) {
                                return "Enter" !== e.key || s()
                            }
                        };
                    return (0, a.createElement)(o, b, v)
                };
            h.propTypes = {
                fluid: i().string,
                wrapperClassName: i().string,
                className: i().string,
                rowClassName: i().string,
                elementType: i().string,
                loading: i().bool,
                children: i().any,
                onSubmit: i().func
            }, h.defaultProps = {
                loading: !1,
                className: "",
                wrapperClassName: "",
                fluid: p.TK.containerMaxWidth,
                rowClassName: "",
                elementType: "form",
                onSubmit: function() {}
            };
            var g = n(31555);

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e) {
                var t = e.xs,
                    n = e.sm,
                    a = e.md,
                    o = e.lg,
                    i = e.xl,
                    s = e.id,
                    c = e.style,
                    l = e.spacing,
                    u = e.children,
                    d = e.className,
                    m = e.fullWidth,
                    f = e.gutterBottom;
                return (0, r.jsx)(g.Z, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            v(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    id: s,
                    style: c
                }, function() {
                    var e = {
                        xs: t,
                        sm: n,
                        md: a,
                        lg: o,
                        xl: i
                    };
                    return m && (e.xs = 12, e.sm = 12, e.md = 12, e.lg = 12, e.xl = 12), e
                }(), {
                    className: "p-".concat(l, " mb-").concat(f, " ").concat(d),
                    children: u
                }))
            }
            b.propTypes = {
                children: i().any,
                style: i().object,
                xs: i().number,
                sm: i().number,
                md: i().number,
                lg: i().number,
                xl: i().number,
                spacing: i().number,
                gutterBottom: i().number,
                id: i().string,
                className: i().string,
                fullWidth: i().bool
            }, b.defaultProps = {
                fullWidth: !1,
                style: {},
                xs: 12,
                sm: 12,
                md: 6,
                lg: 4,
                xl: 3,
                spacing: 3,
                gutterBottom: 2,
                id: "",
                className: ""
            };
            var y = function(e) {
                var t = e.className;
                return (0, r.jsx)(b, {
                    className: "formBreak ".concat(t),
                    fullWidth: !0
                })
            };
            y.propTypes = {
                className: i().string
            }, y.defaultProps = {
                className: ""
            }
        },
        44014: function(e, t, n) {
            "use strict";
            n.d(t, {
                qH: function() {
                    return r
                }
            });
            n(41609), n(1469), n(64212);
            var r = Object.create(null)
        },
        99424: function(e, t, n) {
            "use strict";
            var r = n(9669),
                a = n.n(r),
                o = n(83454);

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var s = a().create({
                baseURL: "https://externalportal-backend-production.saip.gov.sa"
            });
            s.defaults.headers.common["Access-Control-Allow-Origin"] = "*", s.interceptors.request.use((function(e) {
                return null !== o && void 0 !== o && (e.headers = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, e.headers, {
                    "Accept-Language": "ar"
                })), e
            }), (function(e) {
                return Promise.reject(e)
            })), t.Z = s
        },
        60521: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return s
                }
            });
            var r = n(34051),
                a = n.n(r),
                o = n(99424);

            function i(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (l) {
                    return void n(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }
            var s = function() {
                var e, t = (e = a().mark((function e(t) {
                    var n, r, i, s, c, l, u, d;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.url, r = t.token, i = void 0 === r ? null : r, s = t.lang, c = void 0 === s ? "ar" : s, l = t.params, u = void 0 === l ? {} : l, e.prev = 1, e.next = 4, o.Z.get(n, {
                                    headers: {
                                        Authorization: i ? "Bearer ".concat(i) : "",
                                        "Accept-Language": c
                                    },
                                    params: u
                                });
                            case 4:
                                return d = e.sent, e.abrupt("return", d.data);
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(1), e.t0;
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })), function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function s(e) {
                            i(o, r, a, s, c, "next", e)
                        }

                        function c(e) {
                            i(o, r, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                });
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        },
        85177: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r
                }
            });
            var r = function(e) {
                return e ? "".concat("https://externalportal-backend-production.saip.gov.sa").concat(e) : "".concat("https://externalportal-backend-production.saip.gov.sa")
            }
        },
        35522: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return o
                },
                p: function() {
                    return i
                }
            });
            var r = n(26038),
                a = n(56546);
            a.ScrollTrigger.config({
                limitCallbacks: !0
            }), a.ScrollTrigger.defaults({
                preventOverlaps: !1,
                toggleActions: "play reverse play reverse",
                scroller: ".slider",
                start: "top bottom-=30%",
                end: "top top-=30%"
            }), r.p8.registerPlugin(a.ScrollTrigger);
            var o = a.ScrollTrigger,
                i = r.p8
        },
        55075: function(e, t, n) {
            "use strict";
            n.d(t, {
                D9: function() {
                    return l
                },
                $i: function() {
                    return u
                },
                Jr: function() {
                    return d
                },
                yK: function() {
                    return m
                }
            });
            var r = n(11163),
                a = n(67294),
                o = n(17857);

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, s.apply(this, arguments)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }
            var l = function(e) {
                    var t = (0, a.useRef)();
                    return (0, a.useEffect)((function() {
                        t.current = e
                    })), t.current
                },
                u = function(e) {
                    var t = s({}, e),
                        n = (0, a.useRef)(null),
                        r = (0, o.$i)(c({
                            ref: n,
                            start: 0,
                            duration: 2,
                            end: 100
                        }, t));
                    return {
                        ref: n,
                        start: r.start,
                        pauseResume: r.pauseResume,
                        reset: r.reset,
                        update: r.update
                    }
                },
                d = function() {
                    var e = (0, r.useRouter)(),
                        t = (0, a.useMemo)((function() {
                            return "ar" === e.locale
                        }), [e]),
                        n = (0, a.useMemo)((function() {
                            return "en" === e.locale
                        }), [e]);
                    return {
                        isAR: t,
                        locale: e.locale,
                        isEN: n
                    }
                },
                m = function(e) {
                    return e[d().locale]
                }
        },
        73196: function(e, t, n) {
            "use strict";
            n.d(t, {
                BS: function() {
                    return d
                },
                ic: function() {
                    return i.i
                },
                Ds: function() {
                    return h
                },
                W_: function() {
                    return s
                },
                p8: function() {
                    return i.p
                },
                a1: function() {
                    return v
                },
                tq: function() {
                    return b
                },
                Em: function() {
                    return y
                },
                z1: function() {
                    return f
                },
                oU: function() {
                    return m
                },
                P2: function() {
                    return g
                },
                $i: function() {
                    return c.$i
                },
                Jr: function() {
                    return c.Jr
                },
                D9: function() {
                    return c.D9
                },
                yK: function() {
                    return c.yK
                },
                $g: function() {
                    return p
                }
            });
            var r = n(34051),
                a = n.n(r),
                o = n(60521),
                i = n(35522),
                s = {
                    labels: ["\u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629", "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629", "\u0628\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0639", "\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a \u0627\u0644\u0646\u0628\u0627\u062a\u064a\u0629", "\u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0624\u0644\u0641", "\u0627\u0644\u062f\u0648\u0627\u0626\u0631 \u0627\u0644\u0645\u062a\u0643\u0627\u0645\u0644\u0629", "\u0627\u0644\u062a\u0635\u0627\u0645\u064a\u0645 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629", "\u0627\u062d\u062a\u0631\u0627\u0645 \u0627\u0644\u0645\u0644\u0643\u064a\u0629"],
                    clinics: {
                        title: "\u0627\u0644\u0639\u064a\u0627\u062f\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a\u0629",
                        desc: "\u062a\u0639\u062f \u0627\u0644\u0639\u064a\u0627\u062f\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a\u0629 \u0644\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0627\u0654\u062d\u062f \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0647\u064a\u064a\u0654\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0644\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0648\u0627\u0644\u062a\u064a \u062a\u0642\u062f\u0645 \u0627\u0644\u0625\u0631\u0634\u0627\u062f \u0648\u0627\u0644\u0645\u0634\u0648\u0631\u0629 \u0644\u0644\u0634\u0631\u0643\u0627\u062a \u0648\u0644\u0644\u0645\u0646\u0634\u064a\u0654\u0627\u062a \u0627\u0644\u0635\u063a\u064a\u0631\u0629 \u0648\u0627\u0644\u0645\u062a\u0648\u0633\u0637\u0629 \u0648\u0631\u0648\u0627\u062f \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0648\u0627\u0644\u0623\u0641\u0631\u0627\u062f \u0627\u0644\u0631\u0627\u063a\u0628\u064a\u0646 \u0628\u0627\u0655\u0646\u0634\u0627\u0621 \u0645\u0634\u0627\u0631\u064a\u0639 \u0642\u0627\u064a\u0654\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0627\u0628\u062a\u0643\u0627\u0631 \u0644\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064a \u062a\u0633\u062c\u064a\u0644 \u062d\u0642\u0648\u0642 \u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629 \u0648\u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0648\u0627\u0644\u0627\u0646\u062a\u0641\u0627\u0639 \u0628\u0647\u0627."
                    },
                    intellectual: {
                        title: "\u0627\u0644\u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u0641\u0643\u0631\u064a\u0629",
                        desc: "\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0647\u0648 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0633\u062a\u0628\u062f\u0644 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0645\u0633\u0627\u062d\u0629\u060c \u0644\u0642\u062f \u062a\u0645 \u062a\u0648\u0644\u064a\u062f \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0645\u0648\u0644\u062f \u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u0649\u060c \u062d\u064a\u062b \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0648\u0644\u062f \u0645\u062b\u0644 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0623\u0648 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0623\u062e\u0631\u0649 \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0632\u064a\u0627\u062f\u0629 \u0639\u062f\u062f \u0627\u0644\u062d\u0631\u0648\u0641 \u0627\u0644\u062a\u0649 \u062a\u0648\u0644\u062f\u0647\u0627 \u0627\u0644\u0635\u0641\u062d\u0629"
                    },
                    trade_marks: {
                        title: "\u0627\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629",
                        desc: "\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0647\u0648 \u0645\u062b\u0627\u0644 \u0644\u0646\u0635 \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0633\u062a\u0628\u062f\u0644 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0645\u0633\u0627\u062d\u0629\u060c \u0644\u0642\u062f \u062a\u0645 \u062a\u0648\u0644\u064a\u062f \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0645\u0646 \u0645\u0648\u0644\u062f \u0627\u0644\u0646\u0635 \u0627\u0644\u0639\u0631\u0628\u0649\u060c \u062d\u064a\u062b \u064a\u0645\u0643\u0646\u0643 \u0623\u0646 \u062a\u0648\u0644\u062f \u0645\u062b\u0644 \u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0623\u0648 \u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0623\u062e\u0631\u0649 \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0632\u064a\u0627\u062f\u0629 \u0639\u062f\u062f \u0627\u0644\u062d\u0631\u0648\u0641 \u0627\u0644\u062a\u0649 \u062a\u0648\u0644\u062f\u0647\u0627 \u0627\u0644\u0635\u0641\u062d\u0629"
                    },
                    patents: {
                        title: "\u0628\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0627\u062e\u062a\u0631\u0627\u0639",
                        desc: "\u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u062d\u0642 \u0627\u0633\u062a\u0626\u062b\u0627\u0631\u064a \u064a\u0645\u0646\u062d \u0646\u0638\u064a\u0631 \u0627\u062e\u062a\u0631\u0627\u0639. \u0648\u0628\u0634\u0643\u0644 \u0639\u0627\u0645\u060c \u062a\u0643\u0641\u0644 \u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u0644\u0645\u0627\u0644\u0643\u0647\u0627 \u062d\u0642 \u0627\u0644\u0628\u062a\u0651 \u0641\u064a \u0637\u0631\u064a\u0642\u0629 \u2013 \u0623\u0648 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u2013 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u063a\u064a\u0631 \u0644\u0644\u0627\u062e\u062a\u0631\u0627\u0639"
                    },
                    plants: {
                        title: "\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a \u0627\u0644\u0646\u0628\u0627\u062a\u064a\u0629",
                        desc: "\u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u062d\u0642 \u0627\u0633\u062a\u0626\u062b\u0627\u0631\u064a \u064a\u0645\u0646\u062d \u0646\u0638\u064a\u0631 \u0627\u062e\u062a\u0631\u0627\u0639. \u0648\u0628\u0634\u0643\u0644 \u0639\u0627\u0645\u060c \u062a\u0643\u0641\u0644 \u0627\u0644\u0628\u0631\u0627\u0621\u0629 \u0644\u0645\u0627\u0644\u0643\u0647\u0627 \u062d\u0642 \u0627\u0644\u0628\u062a\u0651 \u0641\u064a \u0637\u0631\u064a\u0642\u0629 \u2013 \u0623\u0648 \u0625\u0645\u0643\u0627\u0646\u064a\u0629 \u2013 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u063a\u064a\u0631 \u0644\u0644\u0627\u062e\u062a\u0631\u0627\u0639"
                    },
                    stats: {
                        title: "\u0627\u0644\u0647\u064a\u0626\u0629 \u0641\u064a \u0623\u0631\u0642\u0627\u0645"
                    },
                    news: {
                        title: "\u0622\u062e\u0631 \u0627\u0644\u0623\u062e\u0628\u0627\u0631"
                    }
                },
                c = n(55075);
            n(99424);

            function l(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (l) {
                    return void n(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            l(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            l(o, r, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var d = 500,
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
                    return new Promise((function(t) {
                        setTimeout(t, e)
                    }))
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
                    return new Promise((function(t) {
                        setTimeout(t, e)
                    }))
                },
                p = (function() {
                    var e = u(a().mark((function e() {
                        var t, n, r, i, s, c, l, u = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = u.length > 0 && void 0 !== u[0] ? u[0] : "ar", e.next = 3, (0, o._)({
                                        url: "/api/taxonomy/main_menu?lang=".concat(t, "&type=menu")
                                    });
                                case 3:
                                    return n = e.sent, r = n.data, e.next = 7, (0, o._)({
                                        url: "/api/taxonomy/main_menu?lang=".concat(t, "&type=sitemap")
                                    });
                                case 7:
                                    return i = e.sent, s = i.data, e.next = 11, (0, o._)({
                                        url: "/api/get-footer?lang=".concat(t)
                                    });
                                case 11:
                                    return c = e.sent, l = c.data, e.abrupt("return", {
                                        headerData: r,
                                        footerData: l,
                                        sitemapData: s
                                    });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = u(a().mark((function e() {
                        var t, n;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o._)({
                                        url: "/api/node/voice_commands"
                                    });
                                case 2:
                                    return t = e.sent, n = t.data, e.abrupt("return", {
                                        voiceCommands: n
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }());

            function h(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
                    r = this;
                return function() {
                    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                    var s = r;
                    clearTimeout(t), t = setTimeout((function() {
                        e.apply(s, o)
                    }), n)
                }
            }
            var g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                        n = !1;
                    return function() {
                        var r = arguments;
                        n || (n = !0, e.apply(this, r), setTimeout((function() {
                            return n = !1
                        }), t))
                    }
                },
                v = function() {
                    return window.location.href.includes("/ar") || !window.location.href.includes("/en")
                },
                b = function() {
                    return !window.matchMedia("(min-width: 500pt)").matches
                },
                y = function() {
                    return window.matchMedia("(orientation: portrait)").matches
                }
        },
        75755: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return s
                }
            });
            var r = n(34051),
                a = n.n(r),
                o = n(99424);

            function i(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (l) {
                    return void n(l)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }
            var s = function() {
                var e, t = (e = a().mark((function e(t) {
                    var n, r, i, s, c, l;
                    return a().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.url, r = t.body, i = void 0 === r ? {} : r, s = t.token, c = void 0 === s ? null : s, e.prev = 1, e.next = 4, o.Z.post(n, i, {
                                    headers: {
                                        Authorization: c ? "Bearer ".concat(c) : ""
                                    }
                                });
                            case 4:
                                return l = e.sent, e.abrupt("return", l.data);
                            case 8:
                                return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", {
                                    error: e.t0
                                });
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 8]
                    ])
                })), function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function s(e) {
                            i(o, r, a, s, c, "next", e)
                        }

                        function c(e) {
                            i(o, r, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                });
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        },
        79068: function(e) {
            e.exports = {
                icomoon: "_icomoon_icomoon__kSP5e",
                "icon-arrow": "_icomoon_icon-arrow__TxeLE",
                "icon-suitcase": "_icomoon_icon-suitcase__tf2nY",
                "icon-youtube": "_icomoon_icon-youtube__EtDev",
                "icon-linkedin": "_icomoon_icon-linkedin__JopH2",
                "icon-twitter": "_icomoon_icon-twitter__F23Ho",
                "icon-insta": "_icomoon_icon-insta__dliPZ",
                "icon-facebook": "_icomoon_icon-facebook__H9_Cl",
                "icon-pin": "_icomoon_icon-pin__O4r6r",
                "icon-phone": "_icomoon_icon-phone__nwXEH",
                "icon-bell": "_icomoon_icon-bell__jW_Za",
                "icon-mail": "_icomoon_icon-mail__G47JI",
                "icon-chat": "_icomoon_icon-chat__yJ_84",
                "icon-search": "_icomoon_icon-search___NAvZ",
                "icon-gear": "_icomoon_icon-gear__FX_te"
            }
        }
    }
]);