(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2131], {
        22131: function(e, t, n) {
            "use strict";
            n.d(t, {
                pB: function() {
                    return U
                },
                j8: function() {
                    return H
                },
                fQ: function() {
                    return w
                },
                ne: function() {
                    return g
                },
                mU: function() {
                    return B
                },
                fX: function() {
                    return L
                }
            });
            var s = n(34051),
                i = n.n(s),
                r = n(85893),
                a = n(67294),
                c = n(21048),
                l = n(83587),
                o = n(16308),
                d = n(10682),
                u = n(21608),
                m = n(31555),
                h = n(36968),
                f = n(87536),
                x = n(10493);

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), s.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }
            var p = function(e) {
                    var t = e.onFilterSubmit,
                        n = e.domains,
                        s = (0, x.$G)("common").t,
                        i = (0, f.cI)({
                            defaultValues: {
                                type: "",
                                beneficiaryType: "",
                                domain: null,
                                searchKey: ""
                            }
                        }),
                        c = i.register,
                        l = i.watch,
                        o = i.formValues,
                        d = (i.control, (0, a.useState)(o)),
                        h = d[0],
                        v = d[1];
                    (0, a.useEffect)((function() {
                        var e = l((function(e) {
                            v(e), t(e)
                        }));
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [l, o, t]);
                    n.map((function(e) {
                        return {
                            label: e.title,
                            value: e.id
                        }
                    }));
                    return (0, r.jsx)("div", {
                        className: "services-filtration mb-4",
                        children: (0, r.jsx)("form", {
                            children: (0, r.jsxs)(u.Z, {
                                children: [(0, r.jsx)(m.Z, {
                                    lg: 6,
                                    children: (0, r.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, r.jsx)("label", {
                                            children: s("Target group")
                                        }), (0, r.jsxs)("div", {
                                            className: "btn-group d-flex radio-list",
                                            role: "group",
                                            "aria-label": "Basic example",
                                            children: [(0, r.jsx)("input", j({}, c("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check1",
                                                autoComplete: "off",
                                                checked: "" === (null === h || void 0 === h ? void 0 : h.beneficiaryType),
                                                value: "",
                                                readOnly: !0
                                            })), (0, r.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check1",
                                                children: s("All")
                                            }), (0, r.jsx)("input", j({}, c("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check2",
                                                autoComplete: "off",
                                                checked: "individuals" === (null === h || void 0 === h ? void 0 : h.beneficiaryType),
                                                value: "individuals",
                                                readOnly: !0
                                            })), (0, r.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check2",
                                                children: s("Individuals")
                                            }), (0, r.jsx)("input", j({}, c("beneficiaryType", {
                                                required: !0
                                            }), {
                                                name: "beneficiaryType",
                                                type: "radio",
                                                className: "btn-check",
                                                id: "btn-check3",
                                                autoComplete: "off",
                                                checked: "enterprises" === (null === h || void 0 === h ? void 0 : h.beneficiaryType),
                                                value: "enterprises",
                                                readOnly: !0
                                            })), (0, r.jsx)("label", {
                                                className: "btn",
                                                htmlFor: "btn-check3",
                                                children: s("Enterprises")
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)(m.Z, {
                                    lg: 6,
                                    children: (0, r.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, r.jsx)("label", {
                                            htmlFor: "search",
                                            children: s("Search")
                                        }), (0, r.jsx)("input", j({}, c("searchKey", {
                                            required: !1
                                        }), {
                                            id: "searchKey",
                                            name: "searchKey",
                                            type: "search",
                                            className: "form-control",
                                            placeholder: s("Search here"),
                                            maxLength: 100
                                        }))]
                                    })
                                })]
                            })
                        })
                    })
                },
                b = n(67254);

            function y(e, t, n, s, i, r, a) {
                try {
                    var c = e[r](a),
                        l = c.value
                } catch (o) {
                    return void n(o)
                }
                c.done ? t(l) : Promise.resolve(l).then(s, i)
            }
            var g = function(e) {
                    var t = e.services,
                        n = e.domains,
                        s = (0, x.$G)("common").t,
                        f = (0, a.useState)(t.items || []),
                        v = f[0],
                        j = f[1],
                        g = (0, a.useState)(),
                        N = g[0],
                        _ = g[1],
                        w = (0, a.useState)(!1),
                        Z = w[0],
                        S = w[1],
                        k = (0, c.N)(N, 1e3);
                    (0, a.useEffect)((function() {
                        if (k) {
                            var e = (0, o.t)(N);
                            e.domain && (e.domain = e.domain.value), T(e)
                        }
                    }), [k]);
                    var T = function() {
                        var e, t = (e = i().mark((function e(t) {
                            var n, s, r, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return S(!0), e.prev = 1, e.next = 5, (0, l.z)(t);
                                    case 5:
                                        a = e.sent.data, j(null === a || void 0 === a || null === (n = a.data) || void 0 === n || null === (s = n.sections) || void 0 === s || null === (r = s.services) || void 0 === r ? void 0 : r.items), S(!1), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(1), console.error(e.t0), S(!1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })), function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(s, i) {
                                var r = e.apply(t, n);

                                function a(e) {
                                    y(r, s, i, a, c, "next", e)
                                }

                                function c(e) {
                                    y(r, s, i, a, c, "throw", e)
                                }
                                a(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                    return (0, r.jsx)("section", {
                        className: "services-tab",
                        children: (0, r.jsxs)(d.Z, {
                            children: [(0, r.jsx)(u.Z, {
                                children: (0, r.jsx)(m.Z, {
                                    lg: 8,
                                    children: (0, r.jsx)(p, {
                                        domains: n,
                                        onFilterSubmit: function(e) {
                                            _(e)
                                        }
                                    })
                                })
                            }), (0, r.jsx)(u.Z, {
                                children: Z && (0, r.jsx)("div", {
                                    className: "text-center py-5",
                                    children: (0, r.jsx)(h.Z, {
                                        animation: "border",
                                        role: "status",
                                        children: (0, r.jsx)("span", {
                                            className: "visually-hidden",
                                            children: "Loading..."
                                        })
                                    })
                                })
                            }), !Z && (null === v || void 0 === v ? void 0 : v.length) > 0 && (0, r.jsx)(u.Z, {
                                children: v.map((function(e, t) {
                                    return (0, r.jsx)(m.Z, {
                                        lg: 4,
                                        children: (0, r.jsx)(b.De, {
                                            service: e
                                        })
                                    }, t)
                                }))
                            }), Z || 0 !== (null === v || void 0 === v ? void 0 : v.length) ? null : (0, r.jsx)("p", {
                                className: "h3 text-center mb-5",
                                children: s("No results")
                            })]
                        })
                    })
                },
                N = n(27933),
                _ = n(93174),
                w = function(e) {
                    var t = e.data,
                        n = t.faqs,
                        s = t.snippet,
                        i = t.statistics,
                        a = t.portalLink,
                        c = (0, x.$G)("common").t;
                    return (0, r.jsxs)("section", {
                        className: "brif-tab",
                        children: [(0, r.jsx)(_.c, {
                            title: s.title,
                            subtitle: s.body,
                            videoUrl: s.video,
                            image: s.image,
                            hasVideo: !0
                        }), (0, r.jsx)("div", {
                            className: "d-block d-md-none btn-container",
                            style: {
                                marginTop: "-80px",
                                paddingBottom: "60px"
                            },
                            children: (0, r.jsx)("a", {
                                href: a,
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, r.jsx)(N.zx, {
                                    title: c("Go home"),
                                    secondary: !0
                                })
                            })
                        }), i.length > 0 && (0, r.jsx)(H, {
                            statistics: i
                        }), (null === n || void 0 === n ? void 0 : n.length) > 0 && (0, r.jsx)(U, {
                            faqs: n
                        }), (0, r.jsx)("div", {
                            className: "mb-5"
                        })]
                    })
                },
                Z = n(11163),
                S = n(25675),
                k = n(94022),
                T = n(62284);

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, s = new Array(t); n < t; n++) s[n] = e[n];
                return s
            }

            function O(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        s = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), s.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var s, i, r = [],
                            a = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !t || r.length !== t); a = !0);
                        } catch (l) {
                            c = !0, i = l
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return D(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e) {
                    var t = e.onFilterSubmit,
                        n = e.domains,
                        s = e.isReseting,
                        i = (0, x.$G)("common").t,
                        c = (0, a.useState)(null),
                        l = c[0],
                        o = c[1],
                        d = (0, a.useState)(null),
                        h = d[0],
                        v = d[1],
                        j = (0, f.cI)({
                            defaultValues: {
                                type: "",
                                beneficiaryType: "",
                                domain: [],
                                searchKey: "",
                                dateFrom: "",
                                dateTo: ""
                            }
                        }),
                        p = j.register,
                        b = j.watch,
                        y = j.getValues,
                        g = j.control,
                        N = j.reset,
                        _ = (0, a.useState)(y),
                        w = _[0],
                        Z = _[1];
                    (0, a.useEffect)((function() {
                        s && (N(), o(null), v(null), t(y()));
                        var e = b((function(e) {
                            Z(e), t(e)
                        }));
                        return function() {
                            return e.unsubscribe()
                        }
                    }), [b, t, s, N, y]);
                    var S = n.map((function(e) {
                        return {
                            label: e.title,
                            value: e.id
                        }
                    }));
                    return (0, r.jsx)("div", {
                        className: "services-filtration mb-4",
                        children: (0, r.jsx)("form", {
                            children: (0, r.jsxs)(u.Z, {
                                children: [(0, r.jsx)(m.Z, {
                                    lg: 4,
                                    children: (0, r.jsx)("div", {
                                        className: "form-group",
                                        children: (0, r.jsx)(k.Z, {
                                            id: "domainSelectorStories",
                                            label: i("Domains"),
                                            isMulti: !0,
                                            name: "domain",
                                            control: g,
                                            options: S
                                        })
                                    })
                                }), (0, r.jsx)(m.Z, {
                                    lg: 4,
                                    children: (0, r.jsx)(T.Z, {
                                        id: "dateSelector",
                                        label: i("Date"),
                                        startDate: l,
                                        endDate: h,
                                        placeholderText: i("Select the date"),
                                        onChange: function(e) {
                                            return function(e) {
                                                var n = A(e, 2),
                                                    s = n[0],
                                                    i = n[1];
                                                o(s), v(i), s && i && t(F({}, w, {
                                                    dateFrom: new Date(s).toLocaleDateString("en-CA"),
                                                    dateTo: new Date(i).toLocaleDateString("en-CA")
                                                })), s || i || t(F({}, w, {
                                                    dateFrom: null,
                                                    dateTo: null
                                                }))
                                            }(e)
                                        }
                                    })
                                }), (0, r.jsx)(m.Z, {
                                    lg: 4,
                                    children: (0, r.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, r.jsx)("label", {
                                            htmlFor: "search",
                                            children: i("Search")
                                        }), (0, r.jsx)("input", F({}, p("searchKey", {
                                            required: !1
                                        }), {
                                            id: "searchKey",
                                            name: "searchKey",
                                            type: "search",
                                            className: "form-control",
                                            placeholder: i("Search here"),
                                            maxLength: 100
                                        }))]
                                    })
                                })]
                            })
                        })
                    })
                },
                P = n(78182),
                R = n(71937),
                E = n.n(R),
                I = n(85177),
                K = n(41664),
                q = function(e) {
                    var t = e.successStory,
                        n = (0, x.$G)("common").t,
                        s = ((0, Z.useRouter)().locale, t.id),
                        i = t.title,
                        a = t.summary,
                        c = t.type,
                        l = t.image,
                        o = t.domains,
                        d = t.publishDate;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(P.Z, {
                            className: "mb-5",
                            children: (0, r.jsxs)(u.Z, {
                                className: "g-0",
                                children: [(0, r.jsx)(m.Z, {
                                    md: 4,
                                    className: "image position-relative p-3 m-auto ".concat(E().img_container),
                                    style: {
                                        backgroundImage: "url(".concat((0, I.J)(l), ")"),
                                        height: "350px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    },
                                    children: (0, r.jsx)(K.default, {
                                        href: "/success-stories/[id]",
                                        as: "/success-stories/".concat(s),
                                        passHref: !0,
                                        children: (0, r.jsx)("a", {
                                            children: (0, r.jsx)(N.zx, {
                                                white: !0,
                                                title: n("View story"),
                                                className: "position-absolute m-auto",
                                                style: {
                                                    bottom: "16px",
                                                    width: "calc(100% - 30px)",
                                                    minWidth: "auto"
                                                }
                                            })
                                        })
                                    })
                                }), (0, r.jsx)(m.Z, {
                                    md: 8,
                                    children: (0, r.jsxs)(P.Z.Body, {
                                        children: [(0, r.jsx)(P.Z.Title, {
                                            children: (0, r.jsx)(K.default, {
                                                href: "/success-stories/[id]",
                                                as: "/success-stories/".concat(s),
                                                passHref: !0,
                                                children: (0, r.jsx)("a", {
                                                    className: "main-color",
                                                    children: i
                                                })
                                            })
                                        }), (0, r.jsx)("small", {
                                            children: (0, r.jsx)("a", {
                                                href: "#",
                                                children: c
                                            })
                                        }), (0, r.jsx)(P.Z.Text, {
                                            className: "".concat(E().summary),
                                            children: a
                                        }), (0, r.jsxs)("div", {
                                            className: "mt-2",
                                            children: [(0, r.jsxs)("div", {
                                                className: "d-flex ".concat(E().with_icon),
                                                children: [(0, r.jsxs)("div", {
                                                    className: "margin-inline-end-1",
                                                    children: [(0, r.jsx)(S.default, {
                                                        src: "/images/domain.svg",
                                                        alt: "domain icon",
                                                        width: 16,
                                                        height: 16
                                                    }), " "]
                                                }), (0, r.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "font-87 bold secondary-color",
                                                        children: n("Domain")
                                                    }), o.map((function(e, t) {
                                                        return (0, r.jsx)("span", {
                                                            className: "font-75 pl-1",
                                                            children: e
                                                        }, t)
                                                    }))]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                className: "d-flex ".concat(E().with_icon),
                                                children: [(0, r.jsx)("div", {
                                                    className: "margin-inline-end-1",
                                                    children: (0, r.jsx)(S.default, {
                                                        src: "/images/calendar.svg",
                                                        alt: "calendar icon",
                                                        width: 16,
                                                        height: 16
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, r.jsx)("small", {
                                                        className: "font-87 bold secondary-color",
                                                        children: n("Date of publication")
                                                    }), (0, r.jsx)("div", {
                                                        className: "font-75",
                                                        children: d
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                };

            function G(e, t, n, s, i, r, a) {
                try {
                    var c = e[r](a),
                        l = c.value
                } catch (o) {
                    return void n(o)
                }
                c.done ? t(l) : Promise.resolve(l).then(s, i)
            }
            var L = function(e) {
                    var t = e.successStories,
                        n = e.domains,
                        s = (0, x.$G)("common").t,
                        f = (0, Z.useRouter)().locale,
                        v = (0, a.useState)(t || []),
                        j = v[0],
                        p = v[1],
                        b = (0, a.useState)(),
                        y = b[0],
                        g = b[1],
                        N = (0, a.useState)(!1),
                        _ = N[0],
                        w = N[1],
                        k = (0, a.useState)(!1),
                        T = k[0],
                        D = k[1],
                        O = (0, c.N)(y, 1e3);
                    (0, a.useEffect)((function() {
                        if (O) {
                            var e = (0, o.t)(y);
                            e.domain && 0 != e.domain.length && (e.domain = e.domain.map((function(e) {
                                return e.value
                            })).toString()), F(e)
                        }
                    }), [O]);
                    var F = function() {
                        var e, t = (e = i().mark((function e(t) {
                            var n, s, r;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return w(!0), e.prev = 1, e.next = 5, (0, l.z)(t, f);
                                    case 5:
                                        r = e.sent.data, p(null === r || void 0 === r || null === (n = r.data) || void 0 === n || null === (s = n.sections) || void 0 === s ? void 0 : s.stories), w(!1), e.next = 14;
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
                                n = arguments;
                            return new Promise((function(s, i) {
                                var r = e.apply(t, n);

                                function a(e) {
                                    G(r, s, i, a, c, "next", e)
                                }

                                function c(e) {
                                    G(r, s, i, a, c, "throw", e)
                                }
                                a(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                    return (0, r.jsx)("section", {
                        className: "success-stories-tab",
                        children: (0, r.jsxs)(d.Z, {
                            children: [(0, r.jsx)(u.Z, {
                                children: (0, r.jsx)(m.Z, {
                                    lg: 12,
                                    children: (0, r.jsx)(C, {
                                        onFilterSubmit: function(e) {
                                            g(e)
                                        },
                                        domains: n,
                                        isReseting: T
                                    })
                                })
                            }), (0, r.jsx)(u.Z, {
                                children: y && !_ && (0, r.jsxs)(m.Z, {
                                    className: "mb-3",
                                    children: [(0, r.jsxs)("a", {
                                        className: "d-inline-block cursor-pointer bold ".concat("ar" === f ? "reset-search" : "reset-search-en"),
                                        onClick: function() {
                                            D(!0), setTimeout((function() {
                                                return D(!1)
                                            }))
                                        },
                                        children: [(0, r.jsx)(S.default, {
                                            src: "/images/reset.svg",
                                            width: "18",
                                            height: "16",
                                            className: "action",
                                            alt: "reset-search"
                                        }), " ", s("Reset")]
                                    }), (0, r.jsxs)("span", {
                                        className: "secondary-color bold margin-inline-start-1 d-inline-block",
                                        children: [j.length, " ", s("Result")]
                                    })]
                                })
                            }), (0, r.jsx)(u.Z, {
                                children: _ && (0, r.jsx)("div", {
                                    className: "text-center py-5",
                                    children: (0, r.jsx)(h.Z, {
                                        animation: "border",
                                        role: "status",
                                        children: (0, r.jsx)("span", {
                                            className: "visually-hidden",
                                            children: "Loading..."
                                        })
                                    })
                                })
                            }), !_ && (null === j || void 0 === j ? void 0 : j.length) > 0 && (0, r.jsx)(u.Z, {
                                children: j.map((function(e, t) {
                                    return (0, r.jsx)(m.Z, {
                                        lg: 6,
                                        children: (0, r.jsx)(q, {
                                            successStory: e
                                        })
                                    }, t)
                                }))
                            }), (0, r.jsx)(u.Z, {
                                children: _ || 0 !== (null === j || void 0 === j ? void 0 : j.length) ? null : (0, r.jsx)("p", {
                                    className: "h3 text-center mb-5",
                                    children: s("No results")
                                })
                            })]
                        })
                    })
                },
                $ = n(34318),
                z = n.n($),
                B = function(e) {
                    var t = e.icon,
                        n = void 0 === t ? "" : t,
                        s = e.title,
                        i = void 0 === s ? "\u0645\u062b\u0627\u0644 \u0646\u0635" : s,
                        a = e.count,
                        c = void 0 === a ? 2021 : a,
                        l = e.unit,
                        o = void 0 === l ? "\u0645\u062b\u0627\u0644" : l;
                    return (0, r.jsxs)("div", {
                        className: "".concat(z().statistic),
                        children: [(0, r.jsxs)("div", {
                            className: "".concat(z().statistic__icon),
                            children: [n && (0, r.jsx)(S.default, {
                                className: "img-fluid",
                                src: (0, I.J)(n),
                                alt: i
                            }), (0, r.jsx)("i", {
                                className: "fas fa-briefcase"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "".concat(z().statistic__title, " text-wrap"),
                            children: i
                        }), (0, r.jsx)("div", {
                            className: "".concat(z().statistic__number),
                            children: c
                        }), (0, r.jsx)("div", {
                            className: "".concat(z().statistic__unit),
                            children: o
                        })]
                    })
                },
                M = n(70879),
                V = n.n(M),
                H = function(e) {
                    var t = e.statistics,
                        n = void 0 === t ? {} : t,
                        s = (0, x.$G)("common").t,
                        i = (0, Z.useRouter)().locale;
                    return (0, r.jsx)("section", {
                        className: "".concat(V().statistics),
                        children: (0, r.jsxs)(d.Z, {
                            children: [(0, r.jsx)("h4", {
                                className: "section-subtitle",
                                children: s("statistics")
                            }), (0, r.jsx)(u.Z, {
                                className: "mb-3",
                                children: null === n || void 0 === n ? void 0 : n.map((function(e, t) {
                                    return (0, r.jsx)(m.Z, {
                                        md: 6,
                                        lg: 3,
                                        children: (0, r.jsx)(B, {
                                            icon: e.icon,
                                            title: e.title,
                                            unit: e.unit,
                                            count: e.count
                                        })
                                    }, t)
                                }))
                            }), (0, r.jsx)("div", {
                                className: "d-flex justify-content-end",
                                children: (0, r.jsx)(K.default, {
                                    passHref: !0,
                                    href: "/information-center/",
                                    children: (0, r.jsxs)("a", {
                                        className: "text-decoration-none",
                                        children: [s("More stats"), (0, r.jsx)("i", {
                                            className: "ar" == i ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                Q = n(54076),
                U = (n(29121), function(e) {
                    var t, n = e.faqs,
                        s = e.showTitle,
                        i = void 0 === s || s,
                        a = (0, x.$G)("common").t,
                        c = (0, Z.useRouter)().locale;
                    return (0, r.jsx)("section", {
                        className: "mb-5",
                        children: (0, r.jsxs)(d.Z, {
                            children: [i && (0, r.jsx)("h4", {
                                className: "section-subtitle",
                                children: a("FAQs")
                            }), (0, r.jsx)(Q.Z, {
                                defaultActiveKey: "0",
                                className: "mb-3",
                                children: null === n || void 0 === n || null === (t = n.items) || void 0 === t ? void 0 : t.map((function(e, t) {
                                    return (0, r.jsxs)(Q.Z.Item, {
                                        eventKey: t,
                                        children: [(0, r.jsxs)(Q.Z.Header, {
                                            as: "h3",
                                            children: [(0, r.jsx)("div", {
                                                className: "text-start",
                                                children: e.title
                                            }), (0, r.jsx)("i", {
                                                className: "fas fa-chevron-down"
                                            })]
                                        }), (0, r.jsx)(Q.Z.Body, {
                                            children: (0, r.jsx)("p", {
                                                style: {
                                                    whiteSpace: "pre-wrap"
                                                },
                                                children: e.content
                                            })
                                        })]
                                    }, e.id)
                                }))
                            }), (0, r.jsx)("div", {
                                className: "d-flex justify-content-end",
                                children: (0, r.jsx)(K.default, {
                                    passHref: !0,
                                    href: "/faqs",
                                    children: (0, r.jsxs)("a", {
                                        className: "text-decoration-none",
                                        children: [a("More FAQs"), (0, r.jsx)("i", {
                                            className: "ar" == c ? "fas fa-arrow-left pr-1" : "fas fa-arrow-right pr-1"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
        },
        62284: function(e, t, n) {
            "use strict";
            var s = n(85893),
                i = n(9198),
                r = n.n(i),
                a = n(4043),
                c = n(11163);
            t.Z = function(e) {
                var t = e.id,
                    n = void 0 === t ? "id" : t,
                    l = e.label,
                    o = void 0 === l ? "" : l,
                    d = e.startDate,
                    u = e.endDate,
                    m = e.onChange,
                    h = e.placeholderText;
                (0, i.registerLocale)("ar", a.Z);
                var f = (0, c.useRouter)().locale;
                return (0, s.jsxs)("div", {
                    className: "form-group",
                    children: [(0, s.jsx)("label", {
                        htmlFor: n,
                        children: o
                    }), (0, s.jsx)(r(), {
                        id: n,
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
        83587: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var s = n(99424),
                i = function(e, t) {
                    return s.Z.get("/api/node/ip_clinic?lang=".concat(t), {
                        params: e
                    })
                }
        },
        70879: function(e) {
            e.exports = {
                statistics: "brief-statistics_statistics__ZYXLD"
            }
        },
        34318: function(e) {
            e.exports = {
                statistic: "statistic-item_statistic__Tk_aN",
                statistic__icon: "statistic-item_statistic__icon__seSF7",
                statistic__title: "statistic-item_statistic__title__W61AI",
                statistic__number: "statistic-item_statistic__number__Rf9B0",
                statistic__unit: "statistic-item_statistic__unit__mtzDs"
            }
        },
        71937: function(e) {
            e.exports = {
                img_container: "success-stories_img_container__DBSlZ",
                summary: "success-stories_summary__dWQ8d",
                with_icon: "success-stories_with_icon__6INl9"
            }
        }
    }
]);