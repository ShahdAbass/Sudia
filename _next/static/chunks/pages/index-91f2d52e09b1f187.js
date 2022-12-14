(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        78581: function(t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(93195)
            }])
        },
        93195: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                __N_SSG: function() {
                    return Ke
                },
                default: function() {
                    return $e
                }
            });
            var n = r(34051),
                o = r.n(n),
                i = r(85893),
                a = r(9008),
                l = r(27933),
                s = r(67294),
                u = r(73196),
                c = r(18733),
                d = r(23765);

            function f(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        f(t, e, r[e])
                    }))
                }
                return t
            }
            var v = (0, s.forwardRef)((function(t, e) {
                var r = t.labels,
                    n = void 0 === r ? [] : r,
                    o = t.labelSx,
                    i = void 0 === o ? {} : o,
                    a = t.duration,
                    l = void 0 === a ? 500 : a,
                    d = t.interval,
                    f = void 0 === d ? 3e3 : d,
                    v = t.onChange,
                    h = t.onMount,
                    m = (0, s.useRef)(),
                    g = (0, s.useState)(0),
                    y = g[0],
                    b = g[1],
                    w = (0, s.useState)(0),
                    x = w[0],
                    S = w[1],
                    Z = (0, u.D9)(x),
                    _ = (0, s.useState)(0),
                    O = _[0],
                    k = _[1],
                    j = (0, s.useMemo)((function() {
                        return n.length
                    }), []);
                (0, s.useEffect)((function() {
                    return setTimeout((function() {
                            if (m.current) {
                                var t, r, n = null === (t = m.current.children[0]) || void 0 === t ? void 0 : t.children[0].offsetWidth,
                                    o = null === (r = m.current.children[0]) || void 0 === r ? void 0 : r.offsetHeight;
                                S(n), k(o), e.current.play = P, h && h(n)
                            }
                        }), 150),
                        function() {
                            var t, r;
                            return (null === (t = e.current) || void 0 === t ? void 0 : t.stop) && (null === (r = e.current) || void 0 === r ? void 0 : r.stop())
                        }
                }), []), (0, s.useEffect)((function() {
                    Z && v && v(x)
                }), [y, x]);
                var q = (0, s.useCallback)((function(t) {
                        var e, r = null === (e = m.current.children[t]) || void 0 === e ? void 0 : e.children[0].offsetWidth;
                        return S(r), r
                    }), []),
                    C = (0, s.useCallback)((function() {
                        b((function(t) {
                            var e = (t + 1) % j;
                            return q(e), e
                        }))
                    }), [O, m.current, j, q]),
                    P = (0, s.useCallback)((function(t) {
                        setTimeout((function() {
                            var t = setInterval(C, [f]);
                            e.current.stop = function() {
                                return clearInterval(t)
                            }
                        }), t)
                    }), [f, e, C]);
                return (0, c.tZ)("div", {
                    sx: {
                        position: "relative",
                        height: O,
                        overflow: "hidden",
                        transform: "translate3d(0,0,0)",
                        transition: "width 0.5s"
                    }
                }, (0, c.tZ)("div", {
                    ref: m,
                    sx: {
                        transform: "translate3d(0,0,0) translateY(-".concat(O * y, "px)"),
                        transition: "transform ".concat(l / 1e3, "s 0.05s")
                    }
                }, n.map((function(t, e) {
                    return (0, c.tZ)("h1", {
                        key: "".concat(t, "_").concat(e),
                        sx: {
                            display: "flex",
                            overflow: "hidden"
                        }
                    }, (0, c.tZ)("span", {
                        className: "subtitle",
                        sx: p({
                            whiteSpace: "nowrap",
                            paddingLeft: ["5px", "10px", "11px", null, "15px"],
                            paddingRight: ["5px", "10px", "10px", null, "15px"],
                            overflow: "hidden"
                        }, i)
                    }, t))
                }))))
            }));

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function m(t) {
                return function(t) {
                    if (Array.isArray(t)) return h(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return h(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(t, e) {
                    var r = e.top,
                        n = e.bottom,
                        o = e.right,
                        i = e.left;
                    if (!t || "object" !== typeof t) throw "first parameter is not of type node";
                    var a = t.getBoundingClientRect(),
                        l = a.top,
                        s = a.bottom,
                        u = a.left,
                        c = a.right;
                    if (n && r) throw "'bottom' and 'top' can not be BOTH passed as parameters, please choose one";
                    if (o && i) throw "'left' and 'right' can not be BOTH passed as parameters, please choose one";
                    var d = 0;
                    (i || o) && (d = i ? parseFloat(i) / 100 * window.innerWidth - u : (1 - parseFloat(o) / 100) * window.innerWidth - c);
                    var f = 0;
                    return (r || n) && (f = r ? parseFloat(r) / 100 * window.innerHeight - l : (1 - parseFloat(n) / 100) * window.innerHeight - s), {
                        x: d,
                        y: f
                    }
                },
                y = function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        r = t.querySelector(".home-section-title"),
                        n = t.querySelector(".title-container"),
                        o = t.querySelector(".section-title-cursor"),
                        i = t.querySelectorAll(".paragraph"),
                        a = u.p8.timeline({
                            paused: e
                        });
                    return a.from(r, {
                        duration: 1,
                        width: 0,
                        ease: "power1.out"
                    }), a.to([n, o].concat(m(i)), {
                        duration: .5,
                        ease: "power1.out",
                        opacity: 1,
                        onStart: function() {
                            return u.p8.set(i, {
                                zIndex: 1e3
                            })
                        },
                        onReverseComplete: function() {
                            return u.p8.set(i, {
                                zIndex: 100
                            })
                        }
                    }, "<0%"), a.to([n].concat(m(i)), {
                        duration: 1,
                        ease: "power1.out",
                        x: "0vw"
                    }, "<0%"), a.from(o, {
                        duration: 1,
                        ease: "power1.out",
                        scale: 1,
                        rotate: 180
                    }, "<0%"), a
                },
                b = function(t) {
                    var e = t.querySelector(".title-container"),
                        r = t.querySelector(".section-title-cursor"),
                        n = t.querySelectorAll(".paragraph");
                    u.p8.set(e, {
                        opacity: 0,
                        x: (0, u.a1)() ? "15vw" : "-15vw"
                    }), u.p8.set(r, {
                        opacity: 0
                    }), u.p8.set(n, {
                        opacity: 0,
                        x: (0, u.a1)() ? "50vw" : "-50vw"
                    })
                },
                w = function(t) {
                    var e = t.querySelector(".saip-logo-color");
                    u.p8.set(e, {
                        opacity: 0
                    })
                },
                x = function(t) {
                    if (!(0, u.Em)()) {
                        var e = t.querySelector(".saip-logo-color"),
                            r = t.querySelector(".saip-logo-white"),
                            n = u.p8.timeline({
                                paused: !0
                            });
                        n.to(e, {
                            opacity: 1,
                            duration: 1
                        }), n.to(r, {
                            opacity: 0,
                            duration: 1
                        }, "<0%"), u.ic.create({
                            trigger: ".slide_2",
                            onEnter: function() {
                                return n.play()
                            },
                            onLeave: function() {
                                return n.reverse()
                            },
                            onLeaveBack: function() {
                                return n.reverse()
                            },
                            onEnterBack: function() {
                                return n.delay(1).restart(!0)
                            }
                        })
                    }
                },
                S = function(t) {
                    var e = t.querySelector("header"),
                        r = e.querySelector(".header_bg"),
                        n = u.p8.timeline({
                            paused: !0,
                            scrollTrigger: {
                                toggleActions: "play none none reverse",
                                trigger: ".slide_6",
                                start: "top bottom"
                            }
                        });
                    return n.to(e, {
                        duration: .5,
                        backdropFilter: "blur(12px)"
                    }, 0), n.to(r, {
                        opacity: 1,
                        duration: .5
                    }, 0), n
                },
                Z = function(t) {
                    var e = t.querySelector("header");
                    return u.p8.to(e, {
                        duration: .5,
                        background: "linear-gradient(to bottom, #000000, #00000000)",
                        scrollTrigger: {
                            toggleActions: "play none none reverse",
                            trigger: ".slide_6",
                            start: "top bottom"
                        }
                    })
                },
                _ = g,
                O = function(t, e) {
                    var r = g(t, e);
                    return {
                        x: (0, u.a1)() ? r.x : -r.x,
                        y: r.y
                    }
                };

            function k(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        k(t, e, r[e])
                    }))
                }
                return t
            }
            var q = function(t) {
                    var e = t.querySelector(".animated_mouse"),
                        r = u.p8.to(e, {
                            y: 50,
                            opacity: 0,
                            duration: 2,
                            repeat: -1,
                            repeatDelay: 1,
                            paused: !0
                        });
                    return u.ic.create({
                        trigger: ".slide_1",
                        onEnter: function() {
                            return r.play()
                        },
                        onEnterBack: function() {
                            r.invalidate(), r.restart()
                        },
                        onLeave: function() {
                            r.kill()
                        }
                    })
                },
                C = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return u.p8.to(t, j({
                        duration: .3,
                        ease: "power1.in"
                    }, e))
                },
                P = function(t) {
                    var e, r = {
                            paused: !0,
                            x: 0,
                            duration: 1,
                            rotate: 90
                        },
                        n = t.querySelector(".saip_cursor");
                    u.ic.matchMedia({
                        "(min-width: 200pt)": function() {
                            var t = Math.max(.6 * window.innerHeight, window.innerWidth),
                                o = (0, u.a1)() ? {
                                    right: 0
                                } : {
                                    left: 0
                                };
                            e = u.p8.to(n, j({}, r, {
                                top: "45%",
                                bottom: "0vh",
                                width: t,
                                height: t
                            }, o))
                        },
                        "(min-width: 700pt) and (orientation: landscape)": function() {
                            var t = (0, u.a1)() ? {
                                right: "-45vw"
                            } : {
                                left: "-45vw"
                            };
                            e = u.p8.to(n, j({}, r, {
                                top: 0,
                                width: "100vw",
                                height: "100vw"
                            }, t))
                        }
                    }), u.ic.create({
                        trigger: ".slide_2",
                        onEnter: function() {
                            e.invalidate(), e.restart()
                        },
                        onLeaveBack: function() {
                            return e.reverse()
                        }
                    })
                },
                E = function(t, e) {
                    var r = e.onCursorMoved,
                        n = u.BS / 1e3,
                        o = t.querySelector(".saip_cursor"),
                        i = t.querySelector(".title"),
                        a = t.querySelector(".subtitle"),
                        l = t.querySelector(".carousel"),
                        s = i.clientWidth,
                        c = u.p8.timeline().delay(n);
                    c.add(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return u.p8.from(t, j({
                            duration: 1,
                            x: function() {
                                return (0, u.a1)() ? _(t, {
                                    right: "100%"
                                }).x - 15 * t.offsetWidth / 2 : _(t, {
                                    left: "100%"
                                }).x + 15 * t.offsetWidth / 2
                            },
                            scale: 16,
                            rotate: 180,
                            ease: "power2.inOut"
                        }, e))
                    }(o)), c.add(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return u.p8.to(t, j({
                            duration: 1.2,
                            ease: "power2.in"
                        }, e))
                    }(o, {
                        onComplete: r,
                        x: function() {
                            return (0, u.a1)() ? -s : s
                        }
                    })), c.add(function() {
                        var t = document.querySelector(".anim_home_header");
                        return u.p8.to(t, {
                            y: 0,
                            duration: 1,
                            ease: "power2.in"
                        })
                    }(), ">-1");
                    var d = u.p8.timeline().delay(1.1 + n);
                    return d.add(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return u.p8.from(t, j({
                            opacity: 0,
                            duration: 1,
                            ease: "power1.in"
                        }, e))
                    }(i)), d.add(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return u.p8.from(t, j({
                            width: 60,
                            duration: 1.2,
                            ease: "power1.in"
                        }, e))
                    }(a), ">-1"), d.add(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return u.p8.from(t, j({
                            width: 0,
                            x: 20,
                            duration: 1.2,
                            ease: "power1.in"
                        }, e))
                    }(l), ">-1.2"), d.add(function(t) {
                        var e = t.querySelectorAll(".mouse");
                        return u.p8.to(e, {
                            y: 0,
                            duration: 1,
                            ease: "power2.in",
                            onComplete: function() {
                                return q(t)
                            }
                        })
                    }(t), ">-1"), {
                        tl1: c,
                        tl2: d
                    }
                },
                N = function() {
                    var t = document.querySelector(".anim_home_header"),
                        e = document.querySelectorAll(".mouse");
                    u.p8.set(t, {
                        y: "-100%"
                    }), u.p8.set(e, {
                        y: function() {
                            return _(e[0], {
                                top: "100%"
                            }).y + 50
                        }
                    })
                },
                T = r(35522),
                D = r(55075),
                z = r(25675),
                R = r(10493);

            function A(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function B(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        A(t, e, r[e])
                    }))
                }
                return t
            }
            var I = function(t) {
                    var e, r = t.data,
                        n = t.onClick,
                        o = (0, R.$G)("home").t,
                        i = (0, s.useRef)({}),
                        a = (0, s.useRef)({}),
                        u = (0, s.useRef)({}),
                        f = (0, s.useState)({}),
                        p = f[0],
                        h = f[1],
                        m = (0, s.useMemo)((function() {
                            var t;
                            return (null === r || void 0 === r || null === (t = r.details) || void 0 === t ? void 0 : t.animatedTexts.sort((function(t, e) {
                                return e.length - t.length
                            }))) || []
                        }), []),
                        g = (0, D.Jr)().isAR;
                    (0, s.useEffect)((function() {
                        N(i.current), setTimeout((function() {
                            if (a.current && i.current) {
                                h({
                                    w: a.current.clientWidth,
                                    h: a.current.clientHeight
                                }), P(i.current);
                                var t = E(i.current, {
                                    onCursorMoved: u.current.play
                                }).tl2;
                                T.i.create({
                                    trigger: ".slide_2",
                                    toggleActions: "none none none none",
                                    onEnter: function() {
                                        u.current.stop(), t.reverse(null, !1)
                                    },
                                    onLeaveBack: function() {
                                        t.play(), t.eventCallback("onComplete", u.current.play)
                                    }
                                })
                            }
                        }), 300)
                    }), []);
                    var y = (0, s.useCallback)((function(t) {
                            if (p.w) {
                                var e = i.current,
                                    r = e.querySelector(".saip_cursor");
                                e.cursorOffset = (null === p || void 0 === p ? void 0 : p.w) + t;
                                var n = g ? -((null === p || void 0 === p ? void 0 : p.w) + t) : (null === p || void 0 === p ? void 0 : p.w) + t;
                                C(r, {
                                    x: n,
                                    onComplete: function() {
                                        return T.p.set(r, {
                                            x: n
                                        })
                                    }
                                })
                            }
                        }), [p, g]),
                        b = (0, s.useCallback)((function(t) {
                            a.current.initWidth = t
                        }), []),
                        w = (0, D.yK)(M);
                    return (0, c.tZ)(l.Mi, {
                        sx: B({}, d.r.layout.section, {
                            overflow: "hidden"
                        }),
                        ref: i
                    }, (0, c.tZ)("div", {
                        className: "title",
                        sx: B({
                            color: "white",
                            position: "absolute",
                            top: ["50%", "45%"],
                            display: "flex",
                            overflow: "hidden"
                        }, w.cursor_start)
                    }, (0, c.tZ)("h1", {
                        className: "subtitle",
                        ref: a,
                        sx: B({
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        }, w.title_font_size)
                    }, (0, c.tZ)("span", {
                        sx: {
                            whiteSpace: "nowrap"
                        }
                    }, null === r || void 0 === r || null === (e = r.details) || void 0 === e ? void 0 : e.title)), (0, c.tZ)("div", {
                        className: "carousel"
                    }, (0, c.tZ)(v, {
                        ref: u,
                        onMount: b,
                        onChange: y,
                        vertical: !0,
                        autoPlay: !0,
                        delay: 2e3,
                        labels: m,
                        labelSx: B({}, w.title_font_size, {
                            fontWeight: "bold"
                        })
                    }))), (0, c.tZ)("div", {
                        className: "saip_cursor",
                        sx: B({
                            width: ["25px", "40px", "46px", "50px", "53px"],
                            height: ["25px", "40px", "46px", "50px", "53px"],
                            "@media (min-width: 570pt) and (orientation: portrait)": {
                                width: "40px",
                                height: "40px"
                            },
                            bg: "white",
                            position: "absolute"
                        }, w.cursor, w.cursor_start)
                    }), (0, c.tZ)("div", {
                        sx: {
                            position: "absolute",
                            width: "100%",
                            height: [70, 200, "auto"],
                            bottom: ["6%", "6%", "6%", "6%", "6%"],
                            textAlign: "center",
                            zIndex: 1,
                            flexDirection: "column",
                            display: "flex"
                        },
                        className: "bold mouse"
                    }, (0, c.tZ)("span", {
                        sx: {
                            color: "white",
                            fontSize: [16, 20],
                            marginBottom: 10
                        }
                    }, o("scroll down")), (0, c.tZ)(z.default, {
                        src: "/assets/zero/dbl_arrow.svg",
                        alt: o("scroll down"),
                        width: 50,
                        height: 50,
                        onClick: n
                    })), (0, c.tZ)("div", {
                        sx: {
                            position: "absolute",
                            width: "100%",
                            height: [70, 200, "auto"],
                            bottom: ["6%", "6%", "6%", "6%", "6%"],
                            textAlign: "center",
                            zIndex: 1,
                            opacity: .7,
                            flexDirection: "column",
                            display: "flex"
                        },
                        className: "mouse animated_mouse"
                    }, (0, c.tZ)("span", {
                        sx: {
                            color: "white",
                            fontSize: [16, 20],
                            marginBottom: 10,
                            opacity: 0
                        }
                    }, o("scroll down")), (0, c.tZ)(z.default, {
                        src: "/assets/zero/dbl_arrow.svg",
                        alt: o("scroll down"),
                        width: 50,
                        height: 50,
                        onClick: n
                    })))
                },
                M = {
                    ar: {
                        cursor_start: {
                            right: ["10%", "24%", "26%", "31%", "28%", "35%"]
                        },
                        cursor: {
                            top: ["49.5%", "45%"]
                        },
                        title_font_size: {
                            fontSize: ["18px", "32px", "40px", "40px", "48px"],
                            "@media (min-width: 570pt) and (orientation: portrait)": {
                                fontSize: "32px"
                            }
                        }
                    },
                    en: {
                        cursor_start: {
                            left: ["6%", "18%", "14%", "17%", "19%", "26%"]
                        },
                        cursor: {
                            top: ["49.3%", "44%", "44.5%"]
                        },
                        title_font_size: {
                            fontSize: ["13.4px", "25.6px", "33.6px", "38.4px", "41.6px"],
                            "@media (min-width: 570pt) and (orientation: portrait)": {
                                fontSize: "25.6px"
                            }
                        }
                    }
                },
                L = r(41664),
                H = function(t) {
                    var e = t.querySelector(".woman"),
                        r = t.querySelector(".man"),
                        n = t.querySelector(".monitor");
                    b(t),
                        function(t) {
                            u.p8.set(t, {
                                x: O(t, {
                                    right: "100%"
                                }).x,
                                yPercent: 10,
                                scale: 1.5,
                                opacity: 0
                            })
                        }(e),
                        function(t) {
                            u.p8.set(t, {
                                x: O(t, {
                                    right: "100%"
                                }).x,
                                opacity: 0,
                                yPercent: 60
                            })
                        }(r),
                        function(t) {
                            u.p8.set(t, {
                                x: O(t, {
                                    right: "100%"
                                }).x,
                                yPercent: -90
                            })
                        }(n)
                },
                W = function(t) {
                    var e = t.querySelector(".woman"),
                        r = t.querySelector(".man"),
                        n = t.querySelector(".monitor"),
                        o = y(t, !1),
                        i = u.p8.timeline({
                            paused: !0
                        });
                    return i.set([e, n, r], {
                        opacity: 1
                    }), i.to([e, r, n], {
                        x: 0,
                        yPercent: 0,
                        opacity: 1,
                        duration: 1,
                        scale: 1,
                        ease: "power4.out"
                    }), i.add(o, "<0%"), i
                };

            function Y(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function K(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        Y(t, e, r[e])
                    }))
                }
                return t
            }
            var $ = function(t) {
                    var e, r, n = t.data,
                        o = (0, R.$G)("common").t,
                        i = (0, s.useRef)();
                    (0, s.useEffect)((function() {
                        var t = i.current;
                        H(t), setTimeout((function() {
                            var e = W(t);
                            u.ic.create({
                                trigger: ".slide_2",
                                end: (0, u.tq)() ? "top top-=20%" : "top top-=30%",
                                onEnter: function() {
                                    return e.play()
                                },
                                onEnterBack: function() {
                                    return e.delay(1).restart(!0)
                                },
                                onLeave: function() {
                                    return e.reverse()
                                },
                                onLeaveBack: function() {
                                    return e.reverse()
                                }
                            })
                        }), 100)
                    }), []);
                    var a = (0, u.yK)(G);
                    return (0, c.tZ)(l.Mi, {
                        sx: {
                            display: "flex"
                        },
                        ref: i
                    }, (0, c.tZ)(l.W2, null, (0, c.tZ)("div", {
                        sx: {
                            flex: [.55, .5],
                            marginTop: ["30px", null]
                        }
                    }, (0, c.tZ)("div", {
                        className: "title-container"
                    }, (0, c.tZ)(l.Dx, {
                        color: "text",
                        label: null === n || void 0 === n || null === (e = n.details) || void 0 === e ? void 0 : e.title,
                        fontSize: ["heading1.xs", "heading1.s", "heading1.md", "heading1.lg"],
                        boxColor: "cursor_primary"
                    })), (0, c.tZ)("div", {
                        className: "paragraph"
                    }, (0, c.tZ)(l.nv, {
                        color: "text",
                        text: null === n || void 0 === n || null === (r = n.details) || void 0 === r ? void 0 : r.summary
                    })), (0, c.tZ)("div", {
                        className: "paragraph",
                        sx: {
                            position: "relative",
                            zIndex: 100
                        }
                    }, (0, c.tZ)(L.default, {
                        passHref: !0,
                        href: "/consulting-clinics/"
                    }, (0, c.tZ)("a", null, (0, c.tZ)(l.zx, {
                        title: o("read more")
                    })))))), (0, c.tZ)("div", {
                        sx: K({
                            position: "absolute",
                            flex: 1,
                            margin: "auto",
                            width: ["80%", "40%"],
                            height: ["40%", "80%"],
                            top: 0,
                            bottom: ["unset", 0, 0, 0],
                            marginTop: ["72px", null]
                        }, a.container)
                    }, (0, c.tZ)("div", {
                        sx: {
                            height: "70%",
                            width: "100%",
                            margin: "auto"
                        }
                    }, (0, c.tZ)("div", {
                        className: "woman illustration gray-scale",
                        sx: K({
                            position: "absolute",
                            top: ["2%", "4%"],
                            width: ["54%", "60%"]
                        }, a.woman)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/one/woman.svg",
                        alt: "woman gesturing towards a monitor",
                        width: 495,
                        height: 514
                    })), (0, c.tZ)("div", {
                        className: "man illustration gray-scale",
                        sx: K({
                            position: "absolute",
                            width: ["40%", "50%"],
                            top: ["32%", "40%"]
                        }, a.man)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/one/man.svg",
                        alt: "man gesturing towards a monitor",
                        width: 357,
                        height: 453
                    })), (0, c.tZ)("div", {
                        className: "monitor illustration gray-scale",
                        sx: K({
                            position: "absolute",
                            width: "15%",
                            top: ["-3%", "0"]
                        }, a.monitor)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/one/monitor.svg",
                        alt: "the monitor",
                        width: 147,
                        height: 694
                    })))))
                },
                G = {
                    ar: {
                        container: {
                            left: "10%"
                        },
                        woman: {
                            right: ["22%", "40%"]
                        },
                        man: {
                            right: ["20%", "35%"]
                        },
                        monitor: {
                            right: ["68%", "92%"]
                        }
                    },
                    en: {
                        container: {
                            right: "10%"
                        },
                        woman: {
                            left: ["22%", "40%"]
                        },
                        man: {
                            left: ["20%", "35%"]
                        },
                        monitor: {
                            left: ["68%", "92%"]
                        }
                    }
                },
                F = 0,
                J = function(t) {
                    var e = t.querySelectorAll(".box"),
                        r = t.querySelector(".stats-more");
                    b(t);
                    var n = _(e[0], {
                        top: "100%"
                    }).y;
                    F = n, u.p8.set(e, {
                        y: n
                    }), u.p8.set(r, {
                        y: _(r, {
                            top: "100%"
                        }).y
                    })
                },
                X = function(t, e) {
                    var r = t.querySelector(".board"),
                        n = y(t);
                    if (function(t, e) {
                            var r = t.querySelectorAll(".box"),
                                n = t.querySelector(".stats-more"),
                                o = u.p8.timeline({
                                    paused: !0
                                });
                            o.to([r[0], r[1], n, r[2]], {
                                y: 0,
                                duration: 1,
                                ease: "power2.out",
                                stagger: .1,
                                onStart: e,
                                immediateRender: !1
                            }), o.addLabel("show", ">"), o.to([r[0], r[1], n, r[2]], {
                                y: F,
                                duration: .7,
                                ease: "power3.in",
                                immediateRender: !1
                            }), o.addLabel("hide", ">"), u.ic.create({
                                trigger: ".slide_4",
                                end: "top top-=20%",
                                onEnter: function() {
                                    return o.tweenTo("show", {
                                        delay: (0, u.Em)() ? .5 : 1
                                    })
                                },
                                onEnterBack: function() {
                                    return o.restart().tweenTo("show")
                                },
                                onLeave: function() {
                                    return o.currentLabel("show").tweenTo("hide", {
                                        delay: .1
                                    })
                                },
                                onLeaveBack: function() {
                                    return o.seek("show").reverse()
                                }
                            })
                        }(t, e), !(0, u.Em)()) {
                        var o = u.p8.timeline({
                            paused: !0
                        });
                        o.to(r, {
                            rotate: 0,
                            duration: 1
                        }), o.to(r, {
                            y: "-15vh",
                            duration: .3
                        }, "<0%"), o.to(r, {
                            y: "10vh",
                            duration: .7
                        }, "<100%"), u.ic.create({
                            trigger: ".slide_4",
                            end: "top top-=20%",
                            onEnter: function() {
                                return o.delay(.7).restart(!0)
                            },
                            onLeaveBack: function() {
                                return o.reverse()
                            }
                        })
                    }
                    return u.ic.create({
                        trigger: ".slide_4",
                        end: "top top-=20%",
                        onEnter: function() {
                            return n.delay(.7).restart(!0)
                        },
                        onLeave: function() {
                            return n.reverse()
                        },
                        onLeaveBack: function() {
                            return n.reverse()
                        },
                        onEnterBack: function() {
                            return n.play()
                        }
                    }), null
                },
                V = function(t) {
                    var e = t.querySelector(".board"),
                        r = u.p8.timeline({
                            ease: "power4.in",
                            scrollTrigger: {
                                trigger: ".slide_4",
                                end: "top top-=100",
                                toggleActions: "none play reverse none"
                            }
                        });
                    return r.fromTo(e, {
                        y: (0, u.Em)() ? 0 : "10vh"
                    }, {
                        ease: "power4.in",
                        y: "140vh",
                        skewY: 10,
                        duration: 1
                    }), r
                };

            function U(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        U(t, e, r[e])
                    }))
                }
                return t
            }

            function tt(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var et = function(t) {
                    var e = t.labels,
                        r = (void 0 === e && u.W_.labels, t.onClick),
                        n = t.current,
                        o = void 0 === n ? 1 : n,
                        i = t.data,
                        a = tt(t, ["labels", "onClick", "current", "data"]),
                        l = null === i || void 0 === i ? void 0 : i.length,
                        s = (0, u.Jr)().isAR,
                        d = (0, u.yK)(rt);
                    return (0, c.tZ)("div", Object.assign({
                        className: "domains_pagination",
                        sx: {
                            bg: "bg_overlay",
                            width: "100%",
                            height: 50,
                            position: "absolute",
                            margin: "auto",
                            left: 0,
                            right: 0,
                            display: ["none", "flex"],
                            bottom: "10vh",
                            fontSize: "0.9rem",
                            zIndex: 1
                        }
                    }, a), null === i || void 0 === i ? void 0 : i.map((function(t, e) {
                        var n = t.title,
                            i = o - 1 === e;
                        return (0, c.tZ)("div", {
                            key: e,
                            sx: {
                                paddingBottom: "".concat(3, "px"),
                                flex: 1,
                                position: "relative",
                                fontSize: [null, "0.9rem", "", ""],
                                "::before": Q({
                                    content: '""',
                                    position: "absolute",
                                    width: "100%",
                                    top: 0,
                                    height: "100%",
                                    bg: "bg_overlay_hover",
                                    transform: "scaleX(".concat(i ? 1 : 0, ")"),
                                    opacity: i ? 1 : 0
                                }, d, {
                                    transition: "transform 0.8s 0.1s ease-out, opacity 0.8s 0.1s ease-out"
                                }),
                                ":hover": {
                                    "::before": {
                                        bg: "bg_overlay_hover",
                                        transform: "scaleX(1)",
                                        opacity: .6,
                                        transition: "transform 0.3s ease-out, opacity 0.2s ease-out"
                                    }
                                }
                            }
                        }, (0, c.tZ)("button", {
                            sx: {
                                bg: "transparent",
                                outline: "none",
                                border: "none",
                                height: "100%",
                                width: "100%",
                                position: "relative",
                                zIndex: "100",
                                color: "text",
                                cursor: "pointer"
                            },
                            onClick: function() {
                                return r(e)
                            }
                        }, (0, c.tZ)("span", {
                            className: i ? "bold" : "light"
                        }, n)))
                    })), (0, c.tZ)("div", {
                        sx: {
                            height: "".concat(3, "px"),
                            width: "".concat(100 / l, "%"),
                            bottom: 0,
                            position: "absolute",
                            bg: "secondary",
                            transform: "translateX(".concat(100 * (s ? -1 : 1) * (o - 1), "%)"),
                            transition: "transform 0.8s ease-out"
                        }
                    }))
                },
                rt = {
                    ar: {
                        right: 0,
                        transformOrigin: "right"
                    },
                    en: {
                        left: 0,
                        transformOrigin: "left"
                    }
                },
                nt = r(11163);

            function ot(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function it(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        ot(t, e, r[e])
                    }))
                }
                return t
            }
            var at = function(t) {
                    var e = t.title,
                        r = t.text,
                        n = t.moreHref,
                        o = void 0 === n ? null : n,
                        i = (0, R.$G)("common").t,
                        a = (0, nt.useRouter)().push,
                        s = (0, D.yK)(lt);
                    return (0, c.tZ)("div", {
                        sx: it({
                            height: ["40%", "80%"],
                            width: ["100%", "55%"],
                            margin: "auto",
                            marginTop: ["13%", null, "section_title_spacing.s", "section_title_spacing.md", "section_title_spacing.lg"]
                        }, s)
                    }, (0, c.tZ)("div", {
                        sx: {
                            position: ["absolute", "static"],
                            top: 0,
                            left: 0,
                            right: 0,
                            display: ["flex", "block"],
                            justifyContent: "center",
                            zIndex: 10
                        },
                        className: "title-container"
                    }, (0, c.tZ)(l.Dx, {
                        label: e,
                        fontSize: ["heading1.xs", "heading1.s", "heading1.md", "heading1.lg"],
                        size: [44, 60]
                    })), (0, c.tZ)("div", {
                        className: "paragraph"
                    }, (0, c.tZ)(l.nv, {
                        text: r,
                        style: {
                            margin: ["15px 0", "20px 0", "25px 0", "40px 0"]
                        }
                    })), (0, c.tZ)("div", {
                        className: "paragraph",
                        sx: {
                            position: "relative",
                            zIndex: 100
                        }
                    }, (0, c.tZ)(l.zx, {
                        onClick: function() {
                            return t = o, console.log("more click", t), void a(t);
                            var t
                        },
                        title: i("read more"),
                        white: !0,
                        className: "domain_btn"
                    })))
                },
                lt = {
                    ar: {
                        right: 0
                    },
                    en: {
                        left: 0
                    }
                },
                st = function(t) {
                    var e = t.children;
                    return (0, c.tZ)("div", {
                        sx: {
                            position: "absolute",
                            bottom: 0,
                            top: 0,
                            marginTop: ["70px", "0px"],
                            display: "flex",
                            flexDirection: ["column-reverse", "row"],
                            alignItems: "center",
                            paddingRight: ["20px", "0px"],
                            paddingLeft: ["20px", "0px"],
                            width: "100%"
                        }
                    }, e)
                };

            function ut(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var ct = function(t) {
                    var e = t.labels,
                        r = (void 0 === e && u.W_.labels, t.onClick, t.current),
                        n = void 0 === r ? 1 : r,
                        o = t.data,
                        i = ut(t, ["labels", "onClick", "current", "data"]);
                    null === o || void 0 === o || o.length, (0, u.Jr)().isAR, (0, u.yK)(dt);
                    return (0, c.tZ)("div", Object.assign({
                        className: "domains_pagination_mobile",
                        sx: {
                            position: "absolute",
                            top: 50,
                            bottom: 0,
                            margin: "auto",
                            display: ["flex", "none"],
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }, i), null === o || void 0 === o ? void 0 : o.map((function(t, e) {
                        t.title;
                        var r = n - 1 === e;
                        return (0, c.tZ)("div", {
                            key: e,
                            sx: {
                                width: 8,
                                height: 8,
                                border: "1px solid white",
                                margin: "0px 4px",
                                backgroundColor: r ? "white" : "transparent"
                            }
                        })
                    })))
                },
                dt = {
                    ar: {},
                    en: {}
                };

            function ft(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function pt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        ft(t, e, r[e])
                    }))
                }
                return t
            }

            function vt(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var ht = function(t) {
                    var e = t.children,
                        r = t.style,
                        n = vt(t, ["children", "style"]),
                        o = (0, D.yK)(mt);
                    return (0, c.tZ)("div", Object.assign({
                        sx: pt({
                            height: ["40%", "80%"],
                            width: ["100%", "45%"],
                            "@media (min-width: 570pt) and (orientation: portrait)": {
                                width: "85%"
                            },
                            margin: "auto",
                            marginBottom: ["0px", "auto"],
                            position: "relative"
                        }, o, r)
                    }, n), e)
                },
                mt = {
                    ar: {
                        left: 0
                    },
                    en: {
                        right: 0
                    }
                },
                gt = r(85177);

            function yt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function bt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        yt(t, e, r[e])
                    }))
                }
                return t
            }
            var wt = (0, s.forwardRef)((function(t, e) {
                    var r = t.suffix,
                        n = t.title,
                        o = (t.number, t.style),
                        i = t.icon;
                    (0, R.$G)("home").t;
                    return (0, c.tZ)("div", {
                        className: "box",
                        sx: bt({
                            width: ["48%", "28%"],
                            bg: "primary",
                            position: "relative",
                            minHeight: ["20vh", "40vh"],
                            display: "flex",
                            flexDirection: "column",
                            zIndex: 100
                        }, o, {
                            "::after": {
                                content: '""',
                                height: [5, 4],
                                width: "55%",
                                bg: "secondary",
                                position: "absolute",
                                bottom: "-4px",
                                left: 0
                            }
                        })
                    }, (0, c.tZ)("div", {
                        sx: {
                            width: ["15vw", "28%"],
                            height: ["8vh", "60px"],
                            bg: "secondary",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex"
                        }
                    }, i && (0, c.tZ)(z.default, {
                        width: 32,
                        height: 32,
                        layout: "fixed",
                        alt: n,
                        src: (0, gt.J)(i)
                    })), (0, c.tZ)("div", {
                        sx: {
                            padding: [15, 30],
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: 1
                        }
                    }, (0, c.tZ)("h1", {
                        sx: {
                            fontSize: ["14px", "2rem"]
                        }
                    }, n), (0, c.tZ)("h1", {
                        ref: e,
                        id: "counter",
                        sx: {
                            fontSize: ["2rem", "4rem"]
                        }
                    }), (0, c.tZ)("p", {
                        className: "light",
                        sx: {
                            marginBottom: 0
                        }
                    }, r)))
                })),
                xt = 220,
                St = function(t) {
                    var e = t.text,
                        r = t.src,
                        n = t.title,
                        o = t.id,
                        i = t.date,
                        a = (0, nt.useRouter)().push,
                        u = (0, s.useCallback)((function() {
                            a("/news/".concat(o))
                        }), [o]),
                        d = (0, R.$G)("common").t;
                    return (0, c.tZ)("div", {
                        sx: {
                            padding: [15, 10, 0]
                        }
                    }, (0, c.tZ)("div", {
                        className: "news-card",
                        sx: {
                            overflow: "hidden",
                            height: [380, 347],
                            bg: "#fff",
                            zIndex: 100,
                            position: "relative",
                            ":hover > .img-container": {
                                transform: "translateY(-".concat(xt, "px)"),
                                "::after": {
                                    opacity: 0
                                }
                            },
                            ":hover > .desc-container": {
                                transform: "translateY(calc(-1 * ".concat(xt, "px))")
                            },
                            ":hover .news-card-title": {
                                transform: "translateY(calc(-1 * ".concat(xt, "px))")
                            },
                            ":hover .card-text": {
                                transform: "translateY(0)"
                            },
                            ":hover .card-btn": {
                                transform: "translateY(0)"
                            }
                        }
                    }, (0, c.tZ)("div", {
                        className: "img-container",
                        sx: {
                            height: xt,
                            position: "relative",
                            bg: "#efefef",
                            transition: "transform 0.4s",
                            "::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: function(t) {
                                    return "linear-gradient(to top, ".concat(t.colors.primary, ", transparent)")
                                },
                                transition: "opacity 0.3s"
                            }
                        }
                    }, (0, c.tZ)(z.default, {
                        className: "news-title gray-scale",
                        src: r,
                        layout: "fill",
                        objectFit: "cover",
                        alt: n
                    })), (0, c.tZ)("div", {
                        className: "regular news-title news-card-title bold",
                        sx: {
                            overflow: "hidden",
                            color: "text",
                            fontSize: "1rem",
                            margin: "1rem",
                            minHeight: [100, 66],
                            maxHeight: [120, 72],
                            lineHeight: "24px",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            webkitLineClamp: 3,
                            transition: "transform 0.4s",
                            position: "relative"
                        }
                    }, n), (0, c.tZ)("small", {
                        sx: {
                            position: "absolute",
                            bottom: "8px",
                            left: "15px",
                            zindex: 100,
                            color: "primary",
                            opacity: .5
                        }
                    }, i), (0, c.tZ)("div", {
                        sx: {
                            position: "absolute",
                            width: 20,
                            height: 20,
                            backgroundColor: "secondary",
                            bottom: 0,
                            right: 0
                        }
                    }), (0, c.tZ)("div", {
                        className: "desc-container",
                        sx: {
                            overflow: "hidden",
                            height: "calc(".concat(270, "px)"),
                            bg: "secondary",
                            padding: 20,
                            transform: "translate(calc(100% - 2px), 32px)",
                            transition: "transform 0.3s",
                            minHeight: xt,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around"
                        }
                    }, (0, c.tZ)("p", {
                        className: "light card-text",
                        sx: {
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
                            display: "-webkit-box",
                            overflow: "hidden",
                            lineHeight: "33px",
                            color: "#fff",
                            transform: "translateY(-200%)",
                            transition: "transform 0.3s"
                        }
                    }, e), (0, c.tZ)(l.zx, {
                        className: "card-btn",
                        title: d("read more"),
                        white: !0,
                        onClick: u
                    }))))
                },
                Zt = r(72873);

            function _t(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var Ot = (0, s.forwardRef)((function(t, e) {
                    var r = t.children,
                        n = _t(t, ["children"]);
                    return (0, c.tZ)(Zt.t, Object.assign({
                        ref: e,
                        spaceBetween: 30,
                        breakpoints: {
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 40
                            },
                            600: {
                                slidesPerView: 2
                            },
                            1100: {
                                slidesPerView: 3
                            },
                            1350: {
                                slidesPerView: 4
                            }
                        }
                    }, n), (null === r || void 0 === r ? void 0 : r.length) ? null === r || void 0 === r ? void 0 : r.map((function(t, e) {
                        return (0, c.tZ)(Zt.o, {
                            key: e
                        }, t)
                    })) : r)
                })),
                kt = function(t) {
                    var e, r = {};
                    u.ic.matchMedia({
                        "(min-width: 200pt)": function() {
                            e = function(t) {
                                return u.p8.timeline({
                                    paused: !0
                                }).to(t, {
                                    duration: 1.2,
                                    ease: "power1.in",
                                    width: 14,
                                    height: 14,
                                    top: function() {
                                        return window.sharedData.offsetCursor
                                    },
                                    x: (0, u.a1)() ? -20 : 144,
                                    rotate: 0,
                                    onComplete: function() {
                                        return u.p8.set(t, {
                                            opacity: 0
                                        })
                                    }
                                })
                            }(t), r = {
                                trigger: ".slide_3",
                                start: "top bottom-=200",
                                onEnter: function() {
                                    return e.delay(.8).restart(!0, !1)
                                },
                                onLeaveBack: function() {
                                    e.reverse(), u.p8.set(t, {
                                        opacity: 1
                                    })
                                }
                            }
                        },
                        "(min-width: 700pt) and (orientation: landscape)": function() {
                            e = function(t) {
                                return u.p8.to(t, {
                                    duration: 1,
                                    paused: !0,
                                    ease: "power1.in",
                                    x: (0, u.a1)() ? "55vw" : "-55vw"
                                })
                            }(t), r = {
                                trigger: ".slide_2",
                                onLeave: function() {
                                    return e.play()
                                },
                                onEnterBack: function() {
                                    return u.p8.delayedCall(1, (function() {
                                        return e.reverse()
                                    }))
                                }
                            }
                        }
                    });
                    var n = u.ic.create(r);
                    return {
                        anim: e,
                        cursor_scroll_trigger: n
                    }
                },
                jt = function(t) {
                    var e = function(t) {
                        var e = Math.max(window.innerWidth, .6 * window.innerHeight);
                        return u.p8.to(t, {
                            paused: !0,
                            x: 0,
                            width: e,
                            height: e,
                            duration: 1.2,
                            rotate: 90,
                            top: "45%",
                            bottom: "0vh",
                            onStart: function() {
                                return u.p8.set(t, {
                                    opacity: 1
                                })
                            },
                            onReverseComplete: function() {
                                return u.p8.set(t, {
                                    opacity: 0
                                })
                            }
                        })
                    }(t);
                    return u.ic.create({
                        trigger: ".slide_3",
                        start: "top bottom-=200",
                        onLeaveBack: function() {
                            return e.play()
                        },
                        onEnter: function() {
                            return u.p8.delayedCall(.8, (function() {
                                return e.reverse()
                            }))
                        }
                    })
                },
                qt = function(t) {
                    var e = u.p8.to(t, {
                        width: "100%",
                        height: "90vh",
                        x: 0,
                        top: "10vh",
                        paused: !0,
                        duration: 1,
                        onStart: function() {
                            return u.p8.set(t, {
                                opacity: 1
                            })
                        }
                    });
                    return u.ic.create({
                        trigger: ".slide_3",
                        toggleActions: "none play reverse none",
                        onLeave: function() {
                            return e.play()
                        },
                        onEnterBack: function() {
                            u.p8.delayedCall(1, (function() {
                                return e.reverse()
                            })), u.p8.to(t, {
                                opacity: 0,
                                duration: 0,
                                delay: 2
                            })
                        }
                    })
                },
                Ct = function(t) {
                    var e = u.p8.to(t, {
                        paused: !0,
                        width: 14,
                        height: 14,
                        ease: "power1.in",
                        top: function() {
                            return window.sharedData.offsetCursor
                        },
                        x: (0, u.a1)() ? -20 : 144,
                        duration: 1
                    });
                    return u.ic.create({
                        trigger: ".slide_3",
                        onEnterBack: function() {
                            e.delay(1).restart(!0), u.p8.delayedCall(2, (function() {
                                return u.p8.set(t, {
                                    opacity: 0
                                })
                            }))
                        },
                        onLeave: function() {
                            u.p8.set(t, {
                                opacity: 1
                            }), e.reverse()
                        }
                    })
                };

            function Pt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Et(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        Pt(t, e, r[e])
                    }))
                }
                return t
            }
            var Nt = ["btn_cursor", 18],
                Tt = function() {
                    return {
                        1: {},
                        2: {
                            end: (0, u.tq)() ? "top top+=100" : "top top+=200"
                        },
                        3: {
                            start: "top bottom-=200"
                        },
                        4: {
                            end: "top top-=100"
                        },
                        5: {
                            trigger: ".slide_4",
                            start: "top top-=100"
                        },
                        6: {
                            start: "top bottom"
                        }
                    }
                },
                Dt = function() {
                    var t = (0, u.yK)(zt),
                        e = (0, u.Jr)().isAR,
                        r = (0, s.useRef)(),
                        n = (0, s.useRef)();
                    (0, s.useEffect)((function() {
                        for (var t = document.querySelectorAll(".section"), e = (0, u.tq)() ? t.length - 1 : t.length - 2, r = 0; r <= e; r++) {
                            var n = r;
                            o(n, e), i(n, e)
                        }
                    }), []);
                    var o = (0, s.useCallback)((function(t, e, n) {
                            var o = 1 / e * t,
                                i = t + 1,
                                a = Et({}, Tt()[i], n),
                                l = u.p8.timeline({
                                    immediateRender: !1,
                                    scrollTrigger: Et({
                                        toggleActions: "play none none reverse",
                                        trigger: ".slide_".concat(i)
                                    }, a)
                                });
                            return l.to(r.current, {
                                duration: 1,
                                scaleY: o
                            }), l.to(r.current, {
                                duration: .6
                            }, 0), l
                        }), []),
                        i = (0, s.useCallback)((function(t, r, o) {
                            var i = window.innerHeight / r * t,
                                a = (e ? -360 : 360) * t,
                                l = n.current.clientWidth,
                                s = t + 1,
                                c = Et({}, Tt()[s], o),
                                d = u.p8.timeline({
                                    immediateRender: !1,
                                    scrollTrigger: Et({
                                        toggleActions: "play none none reverse",
                                        trigger: ".slide_".concat(s)
                                    }, c)
                                });
                            return d.to(n.current, {
                                duration: 1,
                                rotate: a,
                                y: "".concat(i, "px"),
                                top: -l
                            }), d.to(n.current, {
                                duration: .6
                            }, 0), d
                        }), []);
                    return (0, c.tZ)("div", null, (0, c.tZ)("div", {
                        ref: r,
                        sx: Et({
                            position: "fixed",
                            width: 1,
                            backgroundColor: "secondary",
                            height: "100%",
                            overflow: "visible",
                            transform: "scaleY(0)",
                            transformOrigin: "top"
                        }, t.bar, {
                            zIndex: 1e4
                        })
                    }), (0, c.tZ)("div", {
                        ref: n,
                        sx: Et({
                            backgroundColor: "secondary",
                            height: Nt,
                            width: Nt,
                            position: "fixed"
                        }, t.cursor, {
                            zIndex: 1e4
                        })
                    }))
                },
                zt = {
                    ar: {
                        bar: {
                            right: [5, 8]
                        },
                        cursor: {
                            right: 0
                        }
                    },
                    en: {
                        bar: {
                            left: [5, 8]
                        },
                        cursor: {
                            left: 0
                        }
                    }
                },
                Rt = function(t) {
                    var e = t.footerData,
                        r = t.homeData,
                        n = (0, s.useRef)({}),
                        o = (0, s.useMemo)((function() {
                            return document.querySelectorAll(".section")
                        }), []),
                        i = (0, s.useMemo)((function() {
                            return document.querySelector(".slider")
                        }), []),
                        a = (0, s.useState)(0),
                        l = a[0],
                        d = a[1],
                        f = (0, u.Jr)().isAR,
                        p = (0, s.useCallback)((function(t) {
                            document.documentElement.hasAttribute("disablescroll") || d(t)
                        }), []);
                    (0, s.useEffect)((function() {
                        return v(!1), console.log("scrolling to the top"), i.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "instant"
                            }), setTimeout((function() {
                                window.onwheel = (0, u.P2)(m, 1400), h(), window.onkeydown = (0, u.P2)(g, 1200)
                            }), 3e3),
                            function() {
                                v(!0), window.onwheel = null, window.onkeydown = null
                            }
                    }), []);
                    var v = (0, s.useCallback)((function(t) {
                            var e = document.documentElement,
                                r = document.body;
                            t ? (r.style.removeProperty("overflow"), r.style.removeProperty("height"), r.style.removeProperty("position"), e.style.removeProperty("overflow"), e.style.removeProperty("height"), e.className = "") : (r.style.overflow = "hidden", r.style.height = "100%", r.style.position = "relative", e.style.overflow = "hidden", e.style.height = "100%")
                        }), []),
                        h = (0, s.useCallback)((function() {
                            var t;
                            window.addEventListener("touchstart", (0, u.P2)((function(e) {
                                t = e.touches[0].clientY
                            }), 1e3)), window.addEventListener("touchend", (0, u.P2)((function(e) {
                                var r = e.changedTouches[0].clientY;
                                t > r + 70 ? y() : t < r - 70 && b()
                            }), 1e3))
                        }), [y, b]),
                        m = (0, s.useCallback)((function(t) {
                            t.wheelDeltaY;
                            t.deltaY > 0 ? y() : b()
                        }), [y, b]),
                        g = (0, s.useCallback)((function(t) {
                            var e = t.keyCode;
                            38 === e && b(), 40 === e && y()
                        }), [y, b]),
                        y = (0, s.useCallback)((function() {
                            p((function(t) {
                                var e = (0, u.tq)() ? o.length - 1 : o.length - 2,
                                    r = Math.min(t + 1, e);
                                return i.scrollTo({
                                    top: o[r].offsetTop,
                                    left: 0,
                                    behavior: "instant"
                                }), n.current.page = r, r
                            }))
                        }), [o, i]),
                        b = (0, s.useCallback)((function() {
                            p((function(t) {
                                var e = Math.max(t - 1, 0);
                                return i.scrollTo({
                                    top: o[e].offsetTop,
                                    left: 0,
                                    behavior: "instant"
                                }), n.current.page = e, e
                            }))
                        }), [o, i]),
                        w = (0, s.useCallback)((function() {
                            return y()
                        }), [y]);
                    (0, s.useEffect)((function() {
                        n.current.board = n.current.querySelector(".board"), n.current.saip_cursor = n.current.querySelector(".saip_cursor"), n.current.domain_btns = n.current.querySelectorAll(".domain_btn"), n.current.domain_index = 0, n.current.page = 0, window.sharedData = {};
                        var t = kt(n.current.saip_cursor).cursor_scroll_trigger;
                        if (n.current.cursor_scroll_trigger = t, n.current.cursor_anim_type = "hide", (0, u.Em)()) {
                            var e = n.current.domain_btns[0].getBoundingClientRect().bottom;
                            window.sharedData.offsetCursor = e - 14, Z(0), window.addEventListener("fontSizeChange", S)
                        }
                    }), []);
                    var x = (0, s.useCallback)((function(t) {
                            if ((0, u.Em)()) {
                                var e = n.current.domain_btns[t].getBoundingClientRect().bottom;
                                window.sharedData.offsetCursor = e - 14, Z(t), _(t)
                            }
                        }), [Z, _]),
                        S = (0, s.useCallback)((function() {
                            var t = n.current,
                                e = t.domain_index,
                                r = t.domain_btns,
                                o = t.page,
                                i = (t.cursor_anim_type, t.saip_cursor),
                                a = t.board,
                                l = t.board_scroll_trigger,
                                s = r[e].getBoundingClientRect().bottom;
                            if (window.sharedData.offsetCursor = s - 14, o > 2 ? (l && l.kill(), n.current.board_scroll_trigger = Ct(a)) : Z(e), o < 2) {
                                n.current.cursor_scroll_trigger.kill();
                                var u = kt(i).cursor_scroll_trigger;
                                n.current.cursor_scroll_trigger = u
                            } else _(e)
                        }), [l]),
                        Z = (0, s.useCallback)((function(t) {
                            var e = n.current,
                                r = e.board,
                                o = e.board_scroll_trigger;
                            e.page;
                            o && o.kill(), T.p.set(r, {
                                top: window.sharedData.offsetCursor,
                                x: f ? -20 : 144
                            }), n.current.board_scroll_trigger = qt(r), n.current.domain_index = t
                        }), []),
                        _ = (0, s.useCallback)((function(t) {
                            var e = n.current,
                                r = e.saip_cursor,
                                o = e.cursor_scroll_trigger;
                            T.p.set(r, {
                                top: window.sharedData.offsetCursor,
                                opacity: 0
                            }), o.kill(), n.current.cursor_scroll_trigger = jt(r), n.current.cursor_anim_type = "show", n.current.domain_index = t
                        }), []);
                    return (0, c.tZ)("div", {
                        sx: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: function(t) {
                                return t.colors.bg_gradient
                            }
                        },
                        ref: n
                    }, (0, c.tZ)(I, {
                        data: null === r || void 0 === r ? void 0 : r.textSlider,
                        onClick: w
                    }), (0, c.tZ)($, {
                        data: null === r || void 0 === r ? void 0 : r.clinic
                    }), (0, c.tZ)(qe, {
                        data: null === r || void 0 === r ? void 0 : r.domains,
                        onDomainChange: x
                    }), (0, c.tZ)(Wt, {
                        data: null === r || void 0 === r ? void 0 : r.statistics
                    }), (0, c.tZ)(Ne, {
                        data: null === r || void 0 === r ? void 0 : r.news
                    }), (0, c.tZ)(Ae, {
                        footerData: e
                    }), (0, c.tZ)(Dt, null))
                };

            function At(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Bt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        At(t, e, r[e])
                    }))
                }
                return t
            }

            function It(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }
            var Mt = function(t) {
                var e = t.title,
                    r = t.href,
                    n = t.style,
                    o = It(t, ["title", "href", "style"]),
                    i = (0, D.Jr)().isAR;
                return (0, c.tZ)(L.default, Object.assign({
                    href: r
                }, o), (0, c.tZ)("a", {
                    href: r,
                    sx: Bt({
                        color: "#FFF",
                        cursor: "pointer",
                        alignSelf: "flex-end",
                        transition: "color 0.2s",
                        ":hover": {
                            color: "blue"
                        },
                        ":hover .news-more-icom": {
                            transform: "translateX(".concat(i ? "-10px" : "10px", ") scaleX(1.1) rotateY(").concat(i ? 0 : "180deg", ")")
                        }
                    }, n)
                }, e, (0, c.tZ)("i", {
                    sx: {
                        transition: "transform 0.4s",
                        transform: "rotateY(".concat(i ? 0 : "180deg", ")")
                    },
                    className: "news-more-icom fas fa-arrow-left px-1"
                })))
            };

            function Lt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Ht(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        Lt(t, e, r[e])
                    }))
                }
                return t
            }
            var Wt = function(t) {
                    var e, r, n, o, i, a, d, f, p, v, h, m, g, y, b, w, x, S, Z, _, O, k, j, q, C = t.data,
                        P = (0, R.$G)("home").t,
                        E = (0, s.useRef)(),
                        N = (0, u.Jr)().isAR,
                        T = (0, u.yK)(Yt),
                        D = (0, u.$i)({
                            end: null === C || void 0 === C || null === (e = C.details) || void 0 === e || null === (r = e.section_1) || void 0 === r ? void 0 : r.value
                        }),
                        z = D.ref,
                        A = D.start,
                        B = (0, u.$i)({
                            end: null === C || void 0 === C || null === (n = C.details) || void 0 === n || null === (o = n.section_2) || void 0 === o ? void 0 : o.value,
                            delay: .1
                        }),
                        I = B.ref,
                        M = B.start,
                        L = (0, u.$i)({
                            end: null === C || void 0 === C || null === (i = C.details) || void 0 === i || null === (a = i.section_3) || void 0 === a ? void 0 : a.value,
                            delay: .2
                        }),
                        H = L.ref,
                        W = L.start,
                        Y = (0, s.useCallback)((function() {
                            try {
                                A(), M(), W()
                            } catch (t) {
                                console.log(t)
                            }
                        }), []);
                    return (0, s.useEffect)((function() {
                        var t = E.current;
                        setTimeout((function() {
                            J(t), X(t, Y), V(t)
                        }), 100)
                    }), []), (0, c.tZ)(l.Mi, {
                        ref: E
                    }, (0, c.tZ)("div", {
                        className: "board",
                        sx: Ht({
                            transform: ["translateX(".concat(N ? -20 : 184, "px)"), "rotate(".concat(N ? -90 : 90, "deg)")],
                            height: ["14px", "100%"],
                            width: ["14px", "100%"],
                            backgroundColor: "#fff",
                            position: "absolute",
                            opacity: [0, 1]
                        }, T.board, {
                            zIndex: 10
                        })
                    }), (0, c.tZ)(l.W2, null, (0, c.tZ)("div", {
                        sx: {
                            height: "80%",
                            width: "100%",
                            margin: "auto",
                            marginTop: ["15vh", null, "section_title_spacing.s", "section_title_spacing.md", "section_title_spacing.lg"]
                        }
                    }, (0, c.tZ)("div", {
                        className: "title-container",
                        sx: {
                            position: "relative",
                            zIndex: 100
                        }
                    }, (0, c.tZ)(l.Dx, {
                        boxColor: "cursor_primary",
                        color: "text",
                        label: P("statistics"),
                        fontSize: ["heading1.xs", "heading1.x", "heading1.md", "heading1.lg"],
                        size: [44, 60],
                        cursorSpace: !0
                    })), (0, c.tZ)("div", {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            marginTop: ["6%", "6%", "4%", "6%"]
                        }
                    }, (0, c.tZ)(wt, {
                        title: null === C || void 0 === C || null === (d = C.details) || void 0 === d || null === (f = d.section_1) || void 0 === f ? void 0 : f.title,
                        suffix: null === C || void 0 === C || null === (p = C.details) || void 0 === p || null === (v = p.section_1) || void 0 === v ? void 0 : v.suffix,
                        icon: null === C || void 0 === C || null === (h = C.details) || void 0 === h || null === (m = h.section_1) || void 0 === m ? void 0 : m.icon,
                        ref: z
                    }), (0, c.tZ)(wt, {
                        title: null === C || void 0 === C || null === (g = C.details) || void 0 === g || null === (y = g.section_2) || void 0 === y ? void 0 : y.title,
                        suffix: null === C || void 0 === C || null === (b = C.details) || void 0 === b || null === (w = b.section_2) || void 0 === w ? void 0 : w.suffix,
                        icon: null === C || void 0 === C || null === (x = C.details) || void 0 === x || null === (S = x.section_2) || void 0 === S ? void 0 : S.icon,
                        ref: I
                    }), (0, c.tZ)(wt, {
                        title: null === C || void 0 === C || null === (Z = C.details) || void 0 === Z || null === (_ = Z.section_3) || void 0 === _ ? void 0 : _.title,
                        suffix: null === C || void 0 === C || null === (O = C.details) || void 0 === O || null === (k = O.section_3) || void 0 === k ? void 0 : k.suffix,
                        icon: null === C || void 0 === C || null === (j = C.details) || void 0 === j || null === (q = j.section_3) || void 0 === q ? void 0 : q.icon,
                        ref: H,
                        style: {
                            marginTop: ["20px", "0px"]
                        }
                    }), (0, c.tZ)("div", {
                        className: "stats-more",
                        sx: {
                            width: "100%",
                            display: "flex",
                            justifyContent: ["center", "end"],
                            marginTop: ["10vh", "2vh", "5vh"],
                            position: "relative",
                            zIndex: "10"
                        }
                    }, (0, c.tZ)(Mt, {
                        style: {
                            color: "blue"
                        },
                        href: "/information-center",
                        title: P("view more statistics")
                    }))))))
                },
                Yt = {
                    ar: {
                        board: {
                            transformOrigin: ["center", "top right"]
                        }
                    },
                    en: {
                        board: {
                            transformOrigin: ["center", "top left"]
                        }
                    }
                },
                Kt = {
                    show: function(t) {
                        var e = t.querySelector(".atom"),
                            r = t.querySelector(".person"),
                            n = t.querySelector(".book"),
                            o = t.querySelector(".pin"),
                            i = y(t, !1),
                            a = u.p8.timeline({
                                paused: !0
                            });
                        return a.to([e, r, o, n], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), a.add(i, "<0%"), a
                    },
                    set: function(t) {
                        var e = t.querySelector(".atom"),
                            r = t.querySelector(".person"),
                            n = t.querySelector(".book"),
                            o = t.querySelector(".pin");
                        b(t), u.p8.set(e, {
                            x: O(e, {
                                right: "100%"
                            }).x,
                            y: O(e, {
                                bottom: "100%"
                            }).y
                        }), u.p8.set(r, {
                            x: O(r, {
                                right: "100%"
                            }).x,
                            y: O(r, {
                                top: "65%"
                            }).y
                        }), u.p8.set(n, {
                            x: O(n, {
                                left: "70%"
                            }).x,
                            y: O(n, {
                                top: "100%"
                            }).y
                        }), u.p8.set(o, {
                            x: O(o, {
                                left: "50%"
                            }).x,
                            y: O(o, {
                                bottom: "100%"
                            }).y
                        })
                    }
                };

            function $t(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Gt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        $t(t, e, r[e])
                    }))
                }
                return t
            }
            var Ft = (0, s.forwardRef)((function(t, e) {
                    var r = t.data;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            Kt.set(t)
                        }), 100)
                    }), []);
                    var n = (0, D.yK)(Jt);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip"
                    }), (0, c.tZ)(ht, null, (0, c.tZ)("div", {
                        className: "atom illustration gray-scale",
                        sx: Gt({
                            position: "absolute",
                            top: "14%",
                            width: ["10%", "23%"]
                        }, n.atom)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/one/atom.svg",
                        alt: "atom",
                        width: 157,
                        height: 155
                    })), (0, c.tZ)("div", {
                        className: "person illustration gray-scale",
                        sx: Gt({
                            position: "absolute",
                            top: "20%",
                            width: ["45%", "80%"]
                        }, n.person)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/one/person.svg",
                        alt: "person",
                        width: 576,
                        height: 700
                    })), (0, c.tZ)("div", {
                        className: "book illustration gray-scale",
                        sx: Gt({
                            position: "absolute",
                            top: "50%",
                            width: ["25%", "42%"]
                        }, n.book)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/one/book.svg",
                        alt: "book",
                        width: 319,
                        height: 265
                    })), (0, c.tZ)("div", {
                        className: "pin illustration gray-scale",
                        sx: Gt({
                            position: "absolute",
                            top: "7%",
                            width: ["15%", "26%"]
                        }, n.pin)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/one/pin.svg",
                        alt: "pin",
                        width: 178,
                        height: 134
                    })))))
                })),
                Jt = {
                    ar: {
                        atom: {
                            right: ["64%", "78%"]
                        },
                        person: {
                            right: ["30%", "18%"]
                        },
                        book: {
                            right: ["30%", "18%"]
                        },
                        pin: {
                            right: "22%"
                        }
                    },
                    en: {
                        atom: {
                            left: ["64%", "78%"]
                        },
                        person: {
                            left: ["30%", "18%"]
                        },
                        book: {
                            left: ["30%", "18%"]
                        },
                        pin: {
                            left: "22%"
                        }
                    }
                },
                Xt = {
                    show: function(t) {
                        var e = t.querySelector(".women"),
                            r = t.querySelector(".cert"),
                            n = y(t, !1),
                            o = u.p8.timeline({
                                paused: !0
                            });
                        return o.to([e, r], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), o.add(n, "<0%"), o
                    },
                    set: function(t) {
                        var e = t.querySelector(".women"),
                            r = t.querySelector(".cert");
                        b(t), u.p8.set(e, {
                            x: O(e, {
                                right: "120%"
                            }).x,
                            y: O(e, {
                                top: "75%"
                            }).y
                        }), u.p8.set(r, {
                            x: O(r, {
                                right: "40%"
                            }).x,
                            y: O(r, {
                                bottom: "100%"
                            }).y
                        })
                    }
                };

            function Vt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Ut(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        Vt(t, e, r[e])
                    }))
                }
                return t
            }
            var Qt = (0, s.forwardRef)((function(t, e) {
                    var r = t.data;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            Xt.set(t)
                        }), 100)
                    }), []);
                    var n = (0, D.yK)(te);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip-domains/".concat(null === r || void 0 === r ? void 0 : r.id)
                    }), (0, c.tZ)(ht, null, (0, c.tZ)("div", {
                        className: "women illustration gray-scale",
                        sx: Ut({
                            position: "absolute",
                            top: ["6%", "3%"],
                            width: ["35%", "63%"]
                        }, n.women)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/three/women.svg",
                        alt: "women",
                        width: 421,
                        height: 768
                    })), (0, c.tZ)("div", {
                        className: "cert illustration gray-scale",
                        sx: Ut({
                            position: "absolute",
                            top: ["30%", "22%"],
                            width: ["25%", "40%"]
                        }, n.cert)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/three/cert.svg",
                        alt: "cert",
                        width: 262,
                        height: 344
                    })))))
                })),
                te = {
                    ar: {
                        women: {
                            right: ["30%", "35%"]
                        },
                        cert: {
                            right: ["20%", "13%"]
                        }
                    },
                    en: {
                        women: {
                            left: ["30%", "35%"]
                        },
                        cert: {
                            left: ["20%", "13%"]
                        }
                    }
                },
                ee = {
                    show: function(t) {
                        var e = t.querySelector(".tm"),
                            r = t.querySelector(".laptop"),
                            n = t.querySelector(".doc"),
                            o = t.querySelector(".stamp"),
                            i = y(t, !1),
                            a = u.p8.timeline({
                                paused: !0
                            });
                        return a.to([e, r, n, o], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), a.add(i, "<0%"), a
                    },
                    set: function(t) {
                        var e = t.querySelector(".tm"),
                            r = t.querySelector(".laptop"),
                            n = t.querySelector(".doc"),
                            o = t.querySelector(".stamp");
                        b(t), u.p8.set(e, {
                            x: O(e, {
                                right: "108%"
                            }).x,
                            y: O(e, {
                                top: "8%"
                            }).y
                        }), u.p8.set(r, {
                            x: O(r, {
                                right: "42%"
                            }).x,
                            y: O(r, {
                                bottom: "100%"
                            }).y
                        }), u.p8.set(n, {
                            x: O(r, {
                                right: "100%"
                            }).x
                        }), u.p8.set(o, {
                            x: O(o, {
                                right: "40%"
                            }).x,
                            y: O(o, {
                                top: "100%"
                            }).y
                        })
                    }
                };

            function re(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function ne(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        re(t, e, r[e])
                    }))
                }
                return t
            }
            var oe = (0, s.forwardRef)((function(t, e) {
                    var r = t.data,
                        n = (0, R.$G)(["home"]).t;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            ee.set(t)
                        }), 100)
                    }), []);
                    var o = (0, D.yK)(ie);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip-domains/".concat(null === r || void 0 === r ? void 0 : r.id)
                    }), (0, c.tZ)(ht, null, (0, c.tZ)("div", {
                        className: "tm gray-scale",
                        sx: ne({
                            position: "absolute",
                            top: "15%",
                            width: ["18%", "28%"]
                        }, o.tm)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/two/tm.svg",
                        alt: n("trademark"),
                        width: 188,
                        height: 202
                    })), (0, c.tZ)("div", {
                        className: "laptop gray-scale",
                        sx: ne({
                            position: "absolute",
                            top: ["15%", "15%"],
                            width: ["40%", "62%"]
                        }, o.laptop)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/two/laptop.svg",
                        alt: n("laptop"),
                        width: 407,
                        height: 367
                    })), (0, c.tZ)("div", {
                        className: "doc gray-scale",
                        sx: ne({
                            position: "absolute",
                            top: "33%",
                            width: ["30%", "50%"]
                        }, o.doc)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/two/document.svg",
                        alt: n("document"),
                        width: 336,
                        height: 292
                    })), (0, c.tZ)("div", {
                        className: "stamp gray-scale",
                        sx: ne({
                            position: "absolute",
                            top: ["33%", "33%"],
                            width: ["25%", "40%"]
                        }, o.stamp)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/two/stamp.svg",
                        alt: n("stamp"),
                        width: 279,
                        height: 428
                    })))))
                })),
                ie = {
                    ar: {
                        tm: {
                            right: ["65%", "55%"]
                        },
                        laptop: {
                            right: ["20%", "10%"]
                        },
                        doc: {
                            right: "48%"
                        },
                        stamp: {
                            right: ["25%", "15%"]
                        }
                    },
                    en: {
                        tm: {
                            left: ["35%", "35%"]
                        },
                        laptop: {
                            left: ["45%", "40%"]
                        },
                        doc: {
                            left: "27%"
                        },
                        stamp: {
                            left: ["50%", "58%"]
                        }
                    }
                },
                ae = {
                    show: function(t) {
                        var e = t.querySelector(".thumb"),
                            r = t.querySelector(".palm"),
                            n = t.querySelector(".rose"),
                            o = y(t, !1),
                            i = u.p8.timeline({
                                paused: !0
                            });
                        return i.to([e, r, n], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), i.add(o, "<0%"), i
                    },
                    set: function(t) {
                        var e = t.querySelector(".thumb"),
                            r = t.querySelector(".palm"),
                            n = t.querySelector(".rose");
                        b(t), u.p8.set([e, r], {
                            x: O(r, {
                                right: "100%"
                            }).x,
                            y: O(r, {
                                bottom: "5%"
                            }).y
                        }), u.p8.set(n, {
                            x: O(n, {
                                right: "35%"
                            }).x,
                            y: O(n, {
                                bottom: "100%"
                            }).y
                        })
                    }
                };

            function le(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function se(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        le(t, e, r[e])
                    }))
                }
                return t
            }
            var ue = (0, s.forwardRef)((function(t, e) {
                    var r = t.data;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            ae.set(t)
                        }), 100)
                    }), []);
                    var n = (0, D.yK)(ce);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip-domains/".concat(null === r || void 0 === r ? void 0 : r.id)
                    }), (0, c.tZ)(ht, {
                        style: {
                            "@media (min-width: 570pt) and (orientation: portrait)": {
                                width: "75%"
                            }
                        }
                    }, (0, c.tZ)("div", {
                        className: "palm illustration gray-scale",
                        sx: se({
                            position: "absolute",
                            width: ["55%", "80%"],
                            top: "35%"
                        }, n.palm)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/four/palm.svg",
                        alt: "palm",
                        width: 541,
                        height: 401
                    })), (0, c.tZ)("div", {
                        className: "rose illustration gray-scale",
                        sx: se({
                            position: "absolute",
                            top: ["8%", "14%"],
                            width: ["45%", "60%"]
                        }, n.rose)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/four/rose.svg",
                        alt: "atom",
                        width: 412,
                        height: 505
                    })), (0, c.tZ)("div", {
                        className: "thumb illustration gray-scale",
                        sx: se({
                            position: "absolute",
                            bottom: ["11%", "15%", "18%", "14%"],
                            zIndex: 10,
                            width: ["22%", "35%"]
                        }, n.thumb)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/four/thumb.svg",
                        alt: "thumb",
                        width: 227,
                        height: 232
                    })))))
                })),
                ce = {
                    ar: {
                        palm: {
                            right: ["30%", "15%"]
                        },
                        rose: {
                            right: ["22%", "8%"]
                        },
                        thumb: {
                            right: ["45%", "35%"]
                        }
                    },
                    en: {
                        palm: {
                            left: ["30%", "15%"]
                        },
                        rose: {
                            left: ["22%", "8%"]
                        },
                        thumb: {
                            left: ["45%", "35%"]
                        }
                    }
                },
                de = {
                    show: function(t) {
                        var e = t.querySelector(".top"),
                            r = t.querySelector(".bulp"),
                            n = t.querySelector(".bottom"),
                            o = y(t, !1),
                            i = u.p8.timeline({
                                paused: !0
                            });
                        return i.to([e, r, n], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), i.add(o, "<0%"), i
                    },
                    set: function(t) {
                        var e = t.querySelector(".top"),
                            r = t.querySelector(".bulp"),
                            n = t.querySelector(".bottom");
                        b(t), u.p8.set(e, {
                            x: O(e, {
                                right: "100%"
                            }).x,
                            y: O(e, {
                                top: "10%"
                            }).y
                        }), u.p8.set(r, {
                            x: O(r, {
                                right: "50%"
                            }).x,
                            y: O(r, {
                                bottom: "100%"
                            }).y
                        }), u.p8.set(n, {
                            x: O(n, {
                                right: "40%"
                            }).x,
                            y: O(n, {
                                top: "100%"
                            }).y
                        })
                    }
                };

            function fe(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function pe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        fe(t, e, r[e])
                    }))
                }
                return t
            }
            var ve = (0, s.forwardRef)((function(t, e) {
                    var r = t.data;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            de.set(t)
                        }), 100)
                    }), []);
                    var n = (0, D.yK)(he);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip-domains/".concat(null === r || void 0 === r ? void 0 : r.id)
                    }), (0, c.tZ)(ht, null, (0, c.tZ)("div", {
                        className: "bottom illustration gray-scale",
                        sx: pe({
                            position: "absolute",
                            width: ["50%", "60%"],
                            top: ["58%", "37%"]
                        }, n.bottom)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/five/bottom.svg",
                        alt: "bottom",
                        width: 463,
                        height: 360
                    })), (0, c.tZ)("div", {
                        className: "bulp illustration gray-scale",
                        sx: pe({
                            position: "absolute",
                            top: "10%",
                            width: ["70%", "80%"]
                        }, n.bulp)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/five/bulp.svg",
                        alt: "bulp",
                        width: 654,
                        height: 640
                    })), (0, c.tZ)("div", {
                        className: "top illustration gray-scale",
                        sx: pe({
                            position: "absolute",
                            top: "10%",
                            width: ["70%", "80%"]
                        }, n.top)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/five/top.svg",
                        alt: "top",
                        width: 654,
                        height: 640
                    })))))
                })),
                he = {
                    ar: {
                        bottom: {
                            right: ["8%", "25%"]
                        },
                        bulp: {
                            right: ["10%", "28%"]
                        },
                        top: {
                            right: ["15%", "30%"]
                        }
                    },
                    en: {
                        bottom: {
                            left: ["8%", "25%"]
                        },
                        bulp: {
                            left: ["10%", "28%"]
                        },
                        top: {
                            left: ["15%", "30%"]
                        }
                    }
                },
                me = {
                    show: function(t) {
                        var e = t.querySelector(".figure"),
                            r = t.querySelector(".chip"),
                            n = y(t, !1),
                            o = u.p8.timeline({
                                paused: !0
                            });
                        return o.to([e, r], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), o.add(n, "<0%"), o
                    },
                    set: function(t) {
                        var e = t.querySelector(".figure"),
                            r = t.querySelector(".chip");
                        b(t), u.p8.set(e, {
                            x: O(e, {
                                right: "110%"
                            }).x,
                            y: O(e, {
                                top: "10%"
                            }).y
                        }), u.p8.set(r, {
                            x: O(r, {
                                left: "15%"
                            }).x,
                            y: O(r, {
                                top: "100%"
                            }).y
                        })
                    }
                };

            function ge(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function ye(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        ge(t, e, r[e])
                    }))
                }
                return t
            }
            var be = (0, s.forwardRef)((function(t, e) {
                    var r = t.data;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            me.set(t)
                        }), 100)
                    }), []);
                    var n = (0, D.yK)(we);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip-domains/".concat(null === r || void 0 === r ? void 0 : r.id)
                    }), (0, c.tZ)(ht, {
                        style: {
                            "@media (min-width: 570pt) and (orientation: portrait)": {
                                width: "75%"
                            }
                        }
                    }, (0, c.tZ)("div", {
                        className: "figure illustration gray-scale",
                        sx: ye({
                            position: "absolute",
                            top: "10%",
                            width: ["50%", "70%"]
                        }, n.figure)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/six/figure.svg",
                        alt: "figure",
                        width: 528,
                        height: 716
                    })), (0, c.tZ)("div", {
                        className: "chip illustration gray-scale",
                        sx: ye({
                            position: "absolute",
                            top: ["35%", "30%", "29%", "31%"],
                            width: ["23%", "35%"]
                        }, n.chip)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/six/chip.svg",
                        alt: "chip",
                        width: 267,
                        height: 446
                    })))))
                })),
                we = {
                    ar: {
                        figure: {
                            right: "35%"
                        },
                        chip: {
                            right: ["26%", "22%"]
                        }
                    },
                    en: {
                        figure: {
                            left: "35%"
                        },
                        chip: {
                            left: ["26%", "22%"]
                        }
                    }
                },
                xe = {
                    show: function(t) {
                        var e = t.querySelector(".screen"),
                            r = t.querySelector(".painter"),
                            n = y(t, !1),
                            o = u.p8.timeline({
                                paused: !0
                            });
                        return o.to([r, e], {
                            x: "0vw",
                            y: "0vh",
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        }), o.add(n, "<0%"), o
                    },
                    set: function(t) {
                        var e = t.querySelector(".screen"),
                            r = t.querySelector(".painter");
                        b(t), u.p8.set(e, {
                            x: O(e, {
                                right: "30%"
                            }).x,
                            y: O(e, {
                                top: "100%"
                            }).y
                        }), u.p8.set(r, {
                            x: O(r, {
                                right: "100%"
                            }).x,
                            y: O(r, {
                                top: "70%"
                            }).y
                        })
                    }
                };

            function Se(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Ze(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function(e) {
                        Se(t, e, r[e])
                    }))
                }
                return t
            }
            var _e = (0, s.forwardRef)((function(t, e) {
                    var r = t.data;
                    (0, s.useEffect)((function() {
                        var t = e.current;
                        setTimeout((function() {
                            xe.set(t)
                        }), 100)
                    }), []);
                    var n = (0, D.yK)(Oe);
                    return (0, c.tZ)(l.Mi, {
                        ref: e
                    }, (0, c.tZ)(st, null, (0, c.tZ)(at, {
                        title: null === r || void 0 === r ? void 0 : r.title,
                        text: null === r || void 0 === r ? void 0 : r.summary,
                        moreHref: "/ip-domains/".concat(null === r || void 0 === r ? void 0 : r.id)
                    }), (0, c.tZ)(ht, null, (0, c.tZ)("div", {
                        className: "screen illustration gray-scale",
                        sx: Ze({
                            position: "absolute",
                            top: ["24%", "22%"],
                            width: ["50%", "70%"]
                        }, n.screen)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/seven/screen.svg",
                        alt: "screen figure",
                        width: 411,
                        height: 407
                    })), (0, c.tZ)("div", {
                        className: "painter illustration gray-scale",
                        sx: Ze({
                            position: "absolute",
                            top: "10%",
                            width: ["50%", "70%"]
                        }, n.painter)
                    }, (0, c.tZ)(z.default, {
                        src: "/assets/three/seven/painter.svg",
                        alt: "painter figure",
                        width: 518,
                        height: 628
                    })))))
                })),
                Oe = {
                    ar: {
                        screen: {
                            right: ["15%", "10%"]
                        },
                        painter: {
                            right: ["32%", "32%"]
                        }
                    },
                    en: {
                        screen: {
                            left: ["15%", "10%"]
                        },
                        painter: {
                            left: ["32%", "32%"]
                        }
                    }
                },
                ke = function(t) {
                    var e = t.querySelector(".next"),
                        r = t.querySelector(".prev"),
                        n = t.querySelector(".domains_pagination"),
                        o = t.querySelector(".domains_pagination_mobile");
                    u.p8.set(e, {
                        x: _(e, {
                            right: "100%"
                        }).x,
                        y: _(e, {
                            top: "55%"
                        }).y
                    }), u.p8.set(r, {
                        x: _(r, {
                            left: "100%"
                        }).x,
                        y: _(r, {
                            top: "55%"
                        }).y
                    }), u.p8.set(n, {
                        x: "0vw",
                        y: O(n, {
                            top: "100%"
                        }).y
                    }), u.p8.set(o, {
                        opacity: 0
                    })
                },
                je = function(t) {
                    var e = t.querySelector(".next"),
                        r = t.querySelector(".prev"),
                        n = t.querySelector(".domains_pagination"),
                        o = t.querySelector(".domains_pagination_mobile"),
                        i = u.p8.to([e, r, n, o], {
                            paused: !0,
                            x: "0vw",
                            y: "0vh",
                            duration: 1,
                            ease: "power3.out",
                            opacity: 1
                        });
                    return u.ic.create({
                        trigger: ".slide_3",
                        start: "top bottom-=20%",
                        onEnter: function() {
                            return i.delay(1).restart(!0)
                        },
                        onLeave: function() {
                            return i.reverse()
                        },
                        onEnterBack: function() {
                            return i.delay(1).restart(!0)
                        },
                        onLeaveBack: function() {
                            return i.reverse()
                        }
                    })
                },
                qe = function(t) {
                    var e = t.data,
                        r = t.onDomainChange,
                        n = (0, R.$G)("common").t,
                        o = (0, s.useState)(1),
                        i = o[0],
                        a = o[1],
                        d = (0, s.useRef)(),
                        f = (0, s.useRef)(),
                        p = (0, s.useRef)(),
                        v = (0, s.useRef)(),
                        h = (0, s.useRef)(),
                        m = (0, s.useRef)(),
                        g = (0, s.useRef)(),
                        y = (0, s.useRef)(),
                        b = (0, u.Jr)().isAR,
                        w = (0, s.useCallback)((function(t) {
                            a((function(e) {
                                return S(e), x(t + 1), t + 1
                            }))
                        }), []),
                        x = (0, s.useCallback)((function(t) {
                            d.current.click_event = !0, requestAnimationFrame((function() {
                                d.current.triggers[(t - 1) % 7].enable(), d.current.click_event = !1
                            }))
                        }), []),
                        S = (0, s.useCallback)((function(t) {
                            var e = (t - 1) % 7;
                            d.current.triggers[e].disable(), d.current.anims[e] && d.current.anims[e].reverse()
                        }), []),
                        Z = (0, s.useCallback)((function() {
                            a((function(t) {
                                return t < 7 ? (r(Math.min(t, 6)), S(Math.min(t, 7)), x(Math.min(t + 1, 7)), Math.min(t + 1, 7)) : t
                            }))
                        }), []),
                        _ = (0, s.useCallback)((function() {
                            a((function(t) {
                                return t > 1 ? (r(Math.max(t - 2, 0)), S(Math.max(t, 1)), x(Math.max(t - 1, 1)), Math.max(t - 1, 1)) : t
                            }))
                        }), []);
                    (0, s.useEffect)((function() {
                        var t = d.current;
                        return ke(t), je(t), d.current.triggers = [], d.current.anims = [], setTimeout((function() {
                                O(), k(), j(), q(), C(), P(), E(), d.current.triggers[0].enable()
                            }), 120),
                            function() {
                                return T()
                            }
                    }), []);
                    var O = (0, s.useCallback)((function() {
                            var t = f.current;
                            N(Kt, t, 0)
                        }), []),
                        k = (0, s.useCallback)((function() {
                            var t = p.current;
                            N(ee, t, 2)
                        }), []),
                        j = (0, s.useCallback)((function() {
                            var t = v.current;
                            N(Xt, t, 1)
                        }), []),
                        q = (0, s.useCallback)((function() {
                            var t = h.current;
                            N(ae, t, 5)
                        }), []),
                        C = (0, s.useCallback)((function() {
                            var t = m.current;
                            N(de, t, 3)
                        }), []),
                        P = (0, s.useCallback)((function() {
                            var t = g.current;
                            N(me, t, 6)
                        }), []),
                        E = (0, s.useCallback)((function() {
                            var t = y.current;
                            N(xe, t, 4)
                        }), []),
                        N = (0, s.useCallback)((function(t, e, r) {
                            var n = t.show(e);
                            d.current.anims[r] = n, d.current.triggers[r] = u.ic.create({
                                trigger: ".slide_3",
                                start: "top bottom-=30%",
                                onEnter: function() {
                                    var t;
                                    (null === (t = d.current) || void 0 === t ? void 0 : t.click_event) ? n.delay(.5).restart(!0): n.delay(1).restart(!0)
                                },
                                onEnterBack: function() {
                                    var t;
                                    (null === (t = d.current) || void 0 === t ? void 0 : t.click_event) ? n.delay(.5).restart(!0): n.delay(1).restart(!0)
                                },
                                onLeave: function() {
                                    return n.reverse()
                                },
                                onLeaveBack: function() {
                                    return n.reverse()
                                }
                            }), d.current.triggers[r].disable()
                        }), []),
                        T = (0, s.useCallback)((function() {
                            var t;
                            (null === (t = d.current) || void 0 === t ? void 0 : t.triggers) && (console.log("cleaning..."), d.current.triggers.forEach((function(t) {
                                return t.kill()
                            })), d.current.triggers = [])
                        }), []);
                    return (0, c.tZ)(l.Mi, {
                        ref: d
                    }, (0, c.tZ)("button", {
                        className: "next",
                        sx: {
                            position: "absolute",
                            variant: "arrow",
                            transform: "rotate(180deg)",
                            top: 0,
                            bottom: 0,
                            maxHeight: 60,
                            margin: "auto",
                            right: ["90%", "95%"],
                            width: ["45px", null],
                            padding: ["0px 10px", "inherit"],
                            zIndex: 1e4
                        },
                        onClick: b ? Z : _
                    }, (0, c.tZ)(z.default, {
                        src: "/icons/arrow-right.svg",
                        alt: n("arrow right icon"),
                        width: "40",
                        height: "80"
                    })), (0, c.tZ)(l.W2, {
                        className: "domains"
                    }, (0, c.tZ)(Ft, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[0],
                        ref: f
                    }), (0, c.tZ)(Qt, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[1],
                        ref: v
                    }), (0, c.tZ)(oe, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[2],
                        ref: p
                    }), (0, c.tZ)(ve, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[3],
                        ref: m
                    }), (0, c.tZ)(_e, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[4],
                        ref: y
                    }), (0, c.tZ)(ue, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[5],
                        ref: h
                    }), (0, c.tZ)(be, {
                        data: null === e || void 0 === e ? void 0 : e.details.items[6],
                        ref: g
                    }), (0, c.tZ)(et, {
                        data: null === e || void 0 === e ? void 0 : e.details.items,
                        current: i,
                        onClick: w
                    }), (0, c.tZ)(ct, {
                        data: null === e || void 0 === e ? void 0 : e.details.items,
                        current: i
                    })), (0, c.tZ)("button", {
                        className: "prev",
                        sx: {
                            position: "absolute",
                            variant: "arrow",
                            top: 0,
                            bottom: [0, "20px"],
                            maxHeight: 60,
                            margin: "auto",
                            right: ["0%", "2%"],
                            width: ["45px", null],
                            padding: ["0px 10px", "inherit"],
                            zIndex: 1e4
                        },
                        onClick: b ? _ : Z
                    }, (0, c.tZ)(z.default, {
                        src: "/icons/arrow-right.svg",
                        alt: "arrow icon",
                        width: "40",
                        height: "80"
                    })))
                },
                Ce = function(t) {
                    b(t);
                    var e = t.querySelector(".carousal-container"),
                        r = t.querySelector(".next"),
                        n = t.querySelector(".prev");
                    u.p8.set(e, {
                        y: _(e, {
                            bottom: "100%"
                        }).y - 20
                    }), u.p8.set(r, {
                        x: "20vx",
                        scale: 2
                    }), u.p8.set(n, {
                        x: "-20vx",
                        scale: 2
                    })
                },
                Pe = function(t) {
                    var e = y(t, !1),
                        r = t.querySelector(".carousal-container"),
                        n = t.querySelector(".next"),
                        o = t.querySelector(".prev"),
                        i = u.p8.timeline({
                            scrollTrigger: {
                                trigger: ".slide_4",
                                start: "top top-=100",
                                toggleActions: "play none none reverse"
                            }
                        });
                    return i.to([r, n, o], {
                        ease: "power2.in",
                        y: 0,
                        x: 0,
                        scale: 1,
                        duration: 1
                    }), i.add(e, 0), i
                },
                Ee = function(t) {
                    var e = t.querySelector(".title-container"),
                        r = t.querySelector(".carousal-container"),
                        n = u.p8.timeline({
                            immediateRender: !1,
                            ease: "power1.out",
                            scrollTrigger: {
                                toggleActions: "play none none reverse",
                                trigger: ".slide_6",
                                start: "top bottom"
                            }
                        });
                    return n.to(e, {
                        y: function() {
                            return _(e, {
                                bottom: "100%"
                            }).y
                        },
                        duration: 1
                    }), n.set(r, {
                        y: 0
                    }, 0), n.to(r, {
                        y: function() {
                            return _(r, {
                                top: "2%"
                            }).y
                        },
                        duration: 1
                    }, 0), n
                },
                Ne = function(t) {
                    var e, r = t.data,
                        n = (0, R.$G)(["home"]).t,
                        o = (0, s.useRef)(),
                        i = (0, s.useRef)();
                    (0, s.useEffect)((function() {
                        var t = o.current;
                        setTimeout((function() {
                            Ce(t), Pe(t), Ee(t)
                        }), 100)
                    }), []);
                    var a = (0, s.useCallback)((function() {
                            i.current.swiper.slideNext()
                        }), [i]),
                        u = (0, s.useCallback)((function() {
                            i.current.swiper.slidePrev()
                        }), [i]);
                    return (0, c.tZ)(l.Mi, {
                        ref: o
                    }, (0, c.tZ)(l.W2, null, (0, c.tZ)("div", {
                        sx: {
                            height: "80%",
                            width: "100%",
                            margin: "auto",
                            marginTop: ["10vh", "section_title_spacing.xxs", "section_title_spacing.s", "section_title_spacing.md", "section_title_spacing.lg"]
                        }
                    }, (0, c.tZ)("div", {
                        className: "title-container",
                        sx: {
                            display: ["flex", "block"],
                            justifyContent: "center"
                        }
                    }, (0, c.tZ)(l.Dx, {
                        cursorSpace: !0,
                        label: n("latest news"),
                        fontSize: ["heading1.xs", "heading1.x", "heading1.md", "heading1.lg"],
                        size: [44, 53, 60]
                    })), (0, c.tZ)("div", {
                        className: "carousal-container",
                        sx: {
                            position: "relative",
                            zIndex: 100,
                            width: ["90%", "100%"],
                            margin: "auto",
                            marginTop: ["6%", "2%", "3%", "5%"],
                            "@media (max-width: 375px)": {
                                marginTop: 0
                            }
                        }
                    }, (0, c.tZ)("button", {
                        className: "prev",
                        "aria-label": "Prev Slide",
                        sx: {
                            position: "absolute",
                            variant: "arrow",
                            top: 0,
                            bottom: 0,
                            margin: "auto",
                            left: ["-10%", null, null, "-6%"]
                        },
                        onClick: u
                    }, (0, c.tZ)(l.pw, {
                        size: [40, 60]
                    })), (0, c.tZ)(Ot, {
                        ref: i
                    }, null === r || void 0 === r || null === (e = r.details) || void 0 === e ? void 0 : e.map((function(t, e) {
                        return (0, c.tZ)(St, {
                            key: t.id,
                            title: t.title,
                            text: t.summary,
                            id: t.id,
                            date: t.date,
                            src: (0, gt.J)(t.image)
                        })
                    }))), (0, c.tZ)("div", {
                        sx: {
                            display: "flex",
                            justifyContent: ["center", "end"],
                            marginTop: ["3vh", "2vh", "5vh"],
                            "@media (max-width: 375px)": {
                                marginTop: "0px"
                            }
                        }
                    }, (0, c.tZ)(Mt, {
                        href: "/news",
                        title: n("view more news")
                    })), (0, c.tZ)("button", {
                        "aria-label": "Next Slide",
                        className: "next",
                        sx: {
                            position: "absolute",
                            variant: "arrow",
                            top: 0,
                            bottom: 0,
                            maxHeight: 60,
                            margin: "auto",
                            right: ["-9%", null, null, "-5%"]
                        },
                        onClick: a
                    }, (0, c.tZ)(l.Kq, {
                        size: [40, 60]
                    }))))))
                },
                Te = function(t) {
                    var e = t.querySelector(".footer_container"),
                        r = t.querySelector(".footer"),
                        n = t.querySelector(".contact_container"),
                        o = t.querySelector(".contact");
                    _(e, {
                        top: "100%"
                    }).y;
                    u.p8.set(e, {
                        yPercent: 200
                    }), u.p8.set(r, {
                        skewY: 10
                    }), u.p8.set(n, {
                        skewY: -10
                    }), u.p8.set(o, {
                        opacity: 0
                    })
                },
                De = function(t) {
                    var e = t.querySelector(".footer_container"),
                        r = t.querySelector(".footer"),
                        n = t.querySelector(".contact_container"),
                        o = t.querySelector(".contact"),
                        i = u.p8.timeline({
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: ".slide_6",
                                start: "top bottom"
                            }
                        });
                    return i.to(e, {
                        duration: 1,
                        yPercent: 0,
                        skewY: 0
                    }), i.to([n, r], {
                        duration: 1,
                        skewY: 0
                    }, 0), i.to(n, {
                        duration: 1,
                        yPercent: -100
                    }, 0), i.to(o, {
                        ease: "power2.in",
                        duration: 1,
                        opacity: 1
                    }, 0), i
                },
                ze = function(t) {
                    var e = t.querySelector(".footer_container"),
                        r = t.querySelector(".footer"),
                        n = t.querySelector(".contact_container"),
                        o = t.querySelector(".contact"),
                        i = u.p8.timeline({
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: ".slide_6",
                                start: "top bottom",
                                toggleActions: "play none none reverse"
                            }
                        });
                    i.to(n, {
                        duration: 1,
                        y: "-100%",
                        skewY: 0
                    }, 0), i.to(o, {
                        ease: "power2.in",
                        duration: 1,
                        opacity: 1
                    }, 0);
                    var a = u.p8.timeline({
                        ease: "power1.in",
                        scrollTrigger: {
                            trigger: ".slide_7",
                            start: "top bottom",
                            toggleActions: "play none none reverse"
                        }
                    });
                    return a.to(e, {
                        duration: 1,
                        y: "0%",
                        skewY: 0
                    }, 0), a.to(r, {
                        duration: 1,
                        skewY: 0,
                        y: 0
                    }, 0), i
                },
                Re = function(t) {
                    var e = t.querySelector(".footer_container"),
                        r = t.querySelector(".footer"),
                        n = t.querySelector(".contact_container"),
                        o = t.querySelector(".contact");
                    u.p8.set(e, {
                        y: "100%"
                    }), u.p8.set(r, {
                        y: "20%",
                        skewY: 10
                    }), u.p8.set(n, {
                        y: "30%",
                        skewY: -10
                    }), u.p8.set(o, {
                        opacity: 0
                    })
                },
                Ae = function(t) {
                    var e = t.footerData,
                        r = t.style,
                        n = (0, s.useRef)(),
                        o = (0, R.$G)("home").t;
                    return (0, s.useEffect)((function() {
                        (0, u.tq)() ? (Re(n.current), ze(n.current)) : (Te(n.current), De(n.current))
                    }), []), (0, c.tZ)(l.Mi, {
                        style: r,
                        ref: n
                    }, (0, c.tZ)("div", {
                        className: "footer_container",
                        sx: {
                            variant: "layout.footer",
                            background: "white",
                            backgroundImage: "none",
                            position: "absolute",
                            zIndex: 100
                        }
                    }, (0, c.tZ)("div", {
                        className: "contact_container",
                        sx: {
                            height: "20vh",
                            bg: "white",
                            position: ["absolute", "absolute"],
                            top: 0,
                            width: "100%"
                        }
                    }, (0, c.tZ)("div", {
                        className: "contact",
                        sx: {
                            height: "100%"
                        }
                    }, (0, c.tZ)(l.W2, {
                        style: {
                            padding: "0px 20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }
                    }, (0, c.tZ)("div", {
                        className: "bold",
                        sx: {
                            color: "secondary",
                            fontSize: ["heading2.xs", "heading2.x"]
                        }
                    }, o("report violation title")), (0, c.tZ)(l.zx, null, (0, c.tZ)("a", {
                        sx: {
                            color: "inherit",
                            ":hover": {
                                color: "inherit"
                            }
                        },
                        href: "https://complaints.saip.gov.sa/p/External",
                        target: "_blank",
                        rel: "noreferrer"
                    }, o("report violation")))))), (0, c.tZ)(Ie, {
                        footerData: e
                    })))
                },
                Be = function(t) {
                    t.footerData;
                    return (0, c.tZ)(s.Fragment, null, (0, c.tZ)("div", {
                        className: "section slide_6",
                        sx: {
                            variant: "layout.footer",
                            opacity: 0,
                            height: ["100%", "auto"]
                        }
                    }))
                },
                Ie = function(t) {
                    var e = t.footerData;
                    return (0, c.tZ)(l.$_, {
                        className: "footer",
                        footerData: e,
                        sx: {
                            position: "absolute",
                            bottom: 0
                        }
                    })
                },
                Me = r(92369),
                Le = r(88375),
                He = function(t) {
                    var e = t.data,
                        r = (0, nt.useRouter)().locale,
                        n = (0, s.useState)(!0),
                        o = n[0],
                        a = n[1],
                        l = e.surveyExternalLink;
                    return (0, i.jsx)("div", {
                        className: "surveyAlert",
                        style: {
                            left: "en" === r ? "20px" : "100%",
                            right: "ar" === r ? "20px" : "100%"
                        },
                        children: o && (0, i.jsxs)(Le.Z, {
                            variant: "success",
                            className: "alert-body",
                            onClose: function() {
                                return a(!1)
                            },
                            dismissible: !0,
                            children: [(0, i.jsx)("div", {
                                className: "h6 surveyAlert__title",
                                children: e.title
                            }), (0, i.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: e.body
                                }
                            }), (0, i.jsxs)("div", {
                                className: "d-flex justify-content-center",
                                children: [(null === l || void 0 === l ? void 0 : l.uri) && (0, i.jsx)("a", {
                                    href: null === l || void 0 === l ? void 0 : l.uri,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, i.jsx)("button", {
                                        className: "ctaButton",
                                        children: e.ctaText
                                    })
                                }), !(null === l || void 0 === l ? void 0 : l.uri) && (0, i.jsx)(L.default, {
                                    href: "/survey",
                                    passHref: !0,
                                    children: (0, i.jsx)("button", {
                                        className: "ctaButton",
                                        children: e.ctaText
                                    })
                                })]
                            })]
                        })
                    })
                };

            function We(t, e, r, n, o, i, a) {
                try {
                    var l = t[i](a),
                        s = l.value
                } catch (u) {
                    return void r(u)
                }
                l.done ? e(s) : Promise.resolve(s).then(n, o)
            }

            function Ye(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            We(i, n, o, a, l, "next", t)
                        }

                        function l(t) {
                            We(i, n, o, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var Ke = !0;

            function $e(t) {
                var e, r, n = t.headerData,
                    c = t.homeData,
                    f = t.footerData,
                    p = t.bannerData,
                    v = t.surveyData,
                    h = (0, R.$G)("home").t,
                    m = (0, s.useState)(!1),
                    g = m[0],
                    y = m[1],
                    b = (0, s.useState)(!1),
                    _ = b[0],
                    O = b[1],
                    k = (0, s.useRef)(),
                    j = (0, s.useRef)({}),
                    q = (0, Me.B7)().colorMode,
                    C = (0, s.useCallback)(Ye(o().mark((function t() {
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.oU)();
                                case 2:
                                    y(!0);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), []),
                    P = (0, s.useCallback)(Ye(o().mark((function t() {
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, u.z1)();
                                case 2:
                                    O(!0);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), []),
                    E = (0, s.useCallback)((function() {
                        document.documentElement.className = "hide-scroll-bar", window.onresize = (0, u.Ds)((function() {
                            if ((0, u.tq)()) {
                                var t, e, r, n, o = window.innerWidth > window.innerHeight && (null === k || void 0 === k || null === (t = k.current) || void 0 === t ? void 0 : t.window_height) > (null === k || void 0 === k || null === (e = k.current) || void 0 === e ? void 0 : e.window_width),
                                    i = window.innerWidth < window.innerHeight && (null === k || void 0 === k || null === (r = k.current) || void 0 === r ? void 0 : r.window_height) < (null === k || void 0 === k || null === (n = k.current) || void 0 === n ? void 0 : n.window_width);
                                (o || i) && location.reload()
                            } else location.reload()
                        }), 500), window.onbeforeunload = function() {
                            T.i.getAll().forEach((function(t) {
                                return t.kill()
                            })), window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "instant"
                            })
                        }
                    }), []),
                    N = (0, s.useCallback)((function() {
                        console.log("unloading"), document.getElementsByTagName("html")[0].className = "", T.i.getAll().forEach((function(t) {
                            return t.kill()
                        })), window.onresize = null, window.onbeforeunload = null
                    }), []);
                (0, s.useEffect)((function() {
                    return E(), C(), (null === k || void 0 === k ? void 0 : k.current) && (k.current.window_width = window.innerWidth, k.current.window_height = window.innerHeight, w(k.current), x(k.current)), N
                }), []), (0, s.useEffect)((function() {
                    "contrast" !== q ? (D(), j.current.header_shadow_anim = S(k.current)) : (D(), j.current.header_shadow_anim = Z(k.current))
                }), [q]);
                var D = (0, s.useCallback)((function() {
                    var t, e;
                    (null === (t = j.current) || void 0 === t ? void 0 : t.header_shadow_anim) && (j.current.header_shadow_anim.progress(0), null === (e = j.current.header_shadow_anim.scrollTrigger) || void 0 === e || e.kill(), j.current.header_shadow_anim.kill())
                }), []);
                return (0, s.useEffect)((function() {
                    g && !_ && P()
                }), [g, _]), (0, i.jsxs)(l.uT, {
                    ref: k,
                    children: [(0, i.jsxs)(a.default, {
                        children: [(0, i.jsx)("title", {
                            children: h("SAIP")
                        }), (0, i.jsx)("meta", {
                            name: "theme-color",
                            content: d.r.colors.primary
                        })]
                    }), (null === p || void 0 === p ? void 0 : p.id) && (0, i.jsx)(l.jL, {
                        data: p
                    }), (0, i.jsx)(l.h4, {
                        headerData: n
                    }), (null === v || void 0 === v ? void 0 : v.id) && ((null === v || void 0 === v || null === (e = v.webform) || void 0 === e ? void 0 : e.webform_data) || (null === v || void 0 === v || null === (r = v.surveyExternalLink) || void 0 === r ? void 0 : r.uri)) && (0, i.jsx)(He, {
                        data: v
                    }), (0, i.jsx)(l.iR, {
                        number: 5,
                        Append: Be,
                        footerData: f
                    }), g ? (0, i.jsxs)(l.Xz, {
                        children: [(0, i.jsx)(Rt, {
                            homeData: c,
                            footerData: f
                        }), _ ? null : (0, i.jsx)(l.uT, {
                            style: {
                                position: "absolute",
                                top: 0,
                                zIndex: 1e3,
                                background: function(t) {
                                    return t.colors.bg_gradient
                                }
                            }
                        })]
                    }) : null]
                })
            }
        }
    },
    function(t) {
        t.O(0, [4663, 7631, 9756, 2873, 7933, 9774, 2888, 179], (function() {
            return e = 78581, t(t.s = e);
            var e
        }));
        var e = t.O();
        _N_E = e
    }
]);