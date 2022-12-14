"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5733], {
        36968: function(e, t, r) {
            var s = r(94184),
                a = r.n(s),
                n = r(67294),
                i = r(76792),
                o = r(85893);
            const u = n.forwardRef((({
                bsPrefix: e,
                variant: t,
                animation: r,
                size: s,
                as: n = "div",
                className: u,
                ...l
            }, c) => {
                const d = `${e=(0,i.vE)(e,"spinner")}-${r}`;
                return (0, o.jsx)(n, {
                    ref: c,
                    ...l,
                    className: a()(u, d, s && `${d}-${s}`, t && `text-${t}`)
                })
            }));
            u.displayName = "Spinner", t.Z = u
        },
        87536: function(e, t, r) {
            r.d(t, {
                Qr: function() {
                    return W
                },
                cI: function() {
                    return Se
                }
            });
            var s = r(67294),
                a = e => "checkbox" === e.type,
                n = e => e instanceof Date,
                i = e => null == e;
            const o = e => "object" === typeof e;
            var u = e => !i(e) && !Array.isArray(e) && o(e) && !n(e),
                l = e => u(e) && e.target ? a(e.target) ? e.target.checked : e.target.value : e,
                c = (e, t) => [...e].some((e => (e => e.substring(0, e.search(/.\d/)) || e)(t) === e)),
                d = e => (e || []).filter(Boolean),
                f = e => void 0 === e,
                m = (e, t, r) => {
                    if (u(e) && t) {
                        const s = d(t.split(/[,[\].]+?/)).reduce(((e, t) => i(e) ? e : e[t]), e);
                        return f(s) || s === e ? f(e[t]) ? r : e[t] : s
                    }
                };
            const g = "blur",
                y = "change",
                b = "onBlur",
                h = "onChange",
                v = "onSubmit",
                p = "onTouched",
                _ = "all",
                V = "max",
                j = "min",
                O = "maxLength",
                w = "minLength",
                F = "pattern",
                A = "required",
                x = "validate";
            var S = (e, t) => {
                const r = Object.assign({}, e);
                return delete r[t], r
            };
            const k = s.createContext(null),
                D = () => s.useContext(k);
            var C = (e, t, r, s = !0) => {
                    function a(a) {
                        return () => {
                            if (a in e) return t[a] !== _ && (t[a] = !s || _), r && (r[a] = !0), e[a]
                        }
                    }
                    const n = {};
                    for (const i in e) Object.defineProperty(n, i, {
                        get: a(i)
                    });
                    return n
                },
                E = e => u(e) && !Object.keys(e).length,
                N = (e, t, r) => {
                    const s = S(e, "name");
                    return E(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((e => t[e] === (!r || _)))
                },
                U = e => Array.isArray(e) ? e : [e],
                T = (e, t, r) => r && t ? e === t : !e || !t || e === t || U(e).some((e => e && (e.startsWith(t) || t.startsWith(e))));

            function B(e) {
                const t = s.useRef(e);
                t.current = e, s.useEffect((() => {
                    const r = !e.disabled && t.current.subject.subscribe({
                        next: t.current.callback
                    });
                    return () => (e => {
                        e && e.unsubscribe()
                    })(r)
                }), [e.disabled])
            }
            var L = e => "string" === typeof e,
                M = (e, t, r, s) => {
                    const a = Array.isArray(e);
                    return L(e) ? (s && t.watch.add(e), m(r, e)) : a ? e.map((e => (s && t.watch.add(e), m(r, e)))) : (s && (t.watchAll = !0), r)
                },
                R = e => "function" === typeof e,
                $ = e => {
                    for (const t in e)
                        if (R(e[t])) return !0;
                    return !1
                };

            function q(e) {
                const t = D(),
                    {
                        name: r,
                        control: a = t.control,
                        shouldUnregister: n
                    } = e,
                    i = c(a._names.array, r),
                    o = function(e) {
                        const t = D(),
                            {
                                control: r = t.control,
                                name: a,
                                defaultValue: n,
                                disabled: i,
                                exact: o
                            } = e || {},
                            l = s.useRef(a);
                        l.current = a, B({
                            disabled: i,
                            subject: r._subjects.watch,
                            callback: e => {
                                if (T(l.current, e.name, o)) {
                                    const t = M(l.current, r._names, e.values || r._formValues);
                                    d(f(l.current) || u(t) && !$(t) ? Object.assign({}, t) : Array.isArray(t) ? [...t] : f(t) ? n : t)
                                }
                            }
                        });
                        const [c, d] = s.useState(f(n) ? r._getWatch(a) : n);
                        return s.useEffect((() => {
                            r._removeUnmounted()
                        })), c
                    }({
                        control: a,
                        name: r,
                        defaultValue: m(a._formValues, r, m(a._defaultValues, r, e.defaultValue)),
                        exact: !i
                    }),
                    d = function(e) {
                        const t = D(),
                            {
                                control: r = t.control,
                                disabled: a,
                                name: n,
                                exact: i
                            } = e || {},
                            [o, u] = s.useState(r._formState),
                            l = s.useRef({
                                isDirty: !1,
                                dirtyFields: !1,
                                touchedFields: !1,
                                isValidating: !1,
                                isValid: !1,
                                errors: !1
                            }),
                            c = s.useRef(n);
                        return c.current = n, B({
                            disabled: a,
                            callback: e => T(c.current, e.name, i) && N(e, l.current) && u(Object.assign(Object.assign({}, r._formState), e)),
                            subject: r._subjects.state
                        }), C(o, r._proxyFormState, l.current, !1)
                    }({
                        control: a,
                        name: r
                    });
                s.useRef(r).current = r;
                const b = a.register(r, Object.assign(Object.assign({}, e.rules), {
                    value: o
                }));
                return s.useEffect((() => {
                    const e = (e, t) => {
                        const r = m(a._fields, e);
                        r && (r._f.mount = t)
                    };
                    return e(r, !0), () => {
                        const t = a._options.shouldUnregister || n;
                        i ? t && a._stateFlags.action : t ? a.unregister(r) : e(r, !1)
                    }
                }), [r, a, i, n]), {
                    field: {
                        onChange: e => {
                            b.onChange({
                                target: {
                                    value: l(e),
                                    name: r
                                },
                                type: y
                            })
                        },
                        onBlur: () => {
                            b.onBlur({
                                target: {
                                    value: m(a._formValues, r),
                                    name: r
                                },
                                type: g
                            })
                        },
                        name: r,
                        value: o,
                        ref: e => {
                            const t = m(a._fields, r);
                            e && t && e.focus && (t._f.ref = {
                                focus: () => e.focus(),
                                setCustomValidity: t => e.setCustomValidity(t),
                                reportValidity: () => e.reportValidity()
                            })
                        }
                    },
                    formState: d,
                    fieldState: {
                        invalid: !!m(d.errors, r),
                        isDirty: !!m(d.dirtyFields, r),
                        isTouched: !!m(d.touchedFields, r),
                        error: m(d.errors, r)
                    }
                }
            }
            const W = e => e.render(q(e));
            var I = (e, t, r, s, a) => t ? Object.assign(Object.assign({}, r[e]), {
                    types: Object.assign(Object.assign({}, r[e] && r[e].types ? r[e].types : {}), {
                        [s]: a || !0
                    })
                }) : {},
                P = e => /^\w*$/.test(e),
                H = e => d(e.replace(/["|']|\]/g, "").split(/\.|\[/));

            function z(e, t, r) {
                let s = -1;
                const a = P(t) ? [t] : H(t),
                    n = a.length,
                    i = n - 1;
                for (; ++s < n;) {
                    const t = a[s];
                    let n = r;
                    if (s !== i) {
                        const r = e[t];
                        n = u(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : []
                    }
                    e[t] = n, e = e[t]
                }
                return e
            }
            const Q = (e, t, r) => {
                for (const s of r || Object.keys(e)) {
                    const r = m(e, s);
                    if (r) {
                        const e = r._f,
                            s = S(r, "_f");
                        if (e && t(e.name)) {
                            if (e.ref.focus && f(e.ref.focus())) break;
                            if (e.refs) {
                                e.refs[0].focus();
                                break
                            }
                        } else u(s) && Q(s, t)
                    }
                }
            };
            var Z = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))));

            function G(e) {
                let t;
                const r = Array.isArray(e);
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else {
                    if (!r && !u(e)) return e;
                    t = r ? [] : {};
                    for (const r in e) {
                        if (R(e[r])) {
                            t = e;
                            break
                        }
                        t[r] = G(e[r])
                    }
                }
                return t
            }

            function J() {
                let e = [];
                return {
                    get observers() {
                        return e
                    },
                    next: t => {
                        for (const r of e) r.next(t)
                    },
                    subscribe: t => (e.push(t), {
                        unsubscribe: () => {
                            e = e.filter((e => e !== t))
                        }
                    }),
                    unsubscribe: () => {
                        e = []
                    }
                }
            }
            var K = e => i(e) || !o(e);

            function X(e, t) {
                if (K(e) || K(t)) return e === t;
                if (n(e) && n(t)) return e.getTime() === t.getTime();
                const r = Object.keys(e),
                    s = Object.keys(t);
                if (r.length !== s.length) return !1;
                for (const a of r) {
                    const r = e[a];
                    if (!s.includes(a)) return !1;
                    if ("ref" !== a) {
                        const e = t[a];
                        if (n(r) && n(e) || u(r) && u(e) || Array.isArray(r) && Array.isArray(e) ? !X(r, e) : r !== e) return !1
                    }
                }
                return !0
            }
            var Y = e => ({
                    isOnSubmit: !e || e === v,
                    isOnBlur: e === b,
                    isOnChange: e === h,
                    isOnAll: e === _,
                    isOnTouch: e === p
                }),
                ee = e => "boolean" === typeof e,
                te = e => "file" === e.type,
                re = e => e instanceof HTMLElement,
                se = e => "select-multiple" === e.type,
                ae = e => "radio" === e.type,
                ne = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document,
                ie = e => re(e) && document.contains(e);

            function oe(e, t) {
                const r = P(t) ? [t] : H(t),
                    s = 1 == r.length ? e : function(e, t) {
                        const r = t.slice(0, -1).length;
                        let s = 0;
                        for (; s < r;) e = f(e) ? s++ : e[t[s++]];
                        return e
                    }(e, r),
                    a = r[r.length - 1];
                let n;
                s && delete s[a];
                for (let i = 0; i < r.slice(0, -1).length; i++) {
                    let t, s = -1;
                    const a = r.slice(0, -(i + 1)),
                        o = a.length - 1;
                    for (i > 0 && (n = e); ++s < a.length;) {
                        const r = a[s];
                        t = t ? t[r] : e[r], o === s && (u(t) && E(t) || Array.isArray(t) && !t.filter((e => u(e) && !E(e) || ee(e))).length) && (n ? delete n[r] : delete e[r]), n = t
                    }
                }
                return e
            }

            function ue(e, t = {}) {
                const r = Array.isArray(e);
                if (u(e) || r)
                    for (const s in e) Array.isArray(e[s]) || u(e[s]) && !$(e[s]) ? (t[s] = Array.isArray(e[s]) ? [] : {}, ue(e[s], t[s])) : i(e[s]) || (t[s] = !0);
                return t
            }

            function le(e, t, r) {
                const s = Array.isArray(e);
                if (u(e) || s)
                    for (const a in e) Array.isArray(e[a]) || u(e[a]) && !$(e[a]) ? f(t) || K(r[a]) ? r[a] = Array.isArray(e[a]) ? ue(e[a], []) : Object.assign({}, ue(e[a])) : le(e[a], i(t) ? {} : t[a], r[a]) : r[a] = !X(e[a], t[a]);
                return r
            }
            var ce = (e, t) => le(e, t, ue(t));
            const de = {
                    value: !1,
                    isValid: !1
                },
                fe = {
                    value: !0,
                    isValid: !0
                };
            var me = e => {
                    if (Array.isArray(e)) {
                        if (e.length > 1) {
                            const t = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                            return {
                                value: t,
                                isValid: !!t.length
                            }
                        }
                        return e[0].checked && !e[0].disabled ? e[0].attributes && !f(e[0].attributes.value) ? f(e[0].value) || "" === e[0].value ? fe : {
                            value: e[0].value,
                            isValid: !0
                        } : fe : de
                    }
                    return de
                },
                ge = (e, {
                    valueAsNumber: t,
                    valueAsDate: r,
                    setValueAs: s
                }) => f(e) ? e : t ? "" === e ? NaN : +e : r && L(e) ? new Date(e) : s ? s(e) : e;
            const ye = {
                isValid: !1,
                value: null
            };
            var be = e => Array.isArray(e) ? e.reduce(((e, t) => t && t.checked && !t.disabled ? {
                isValid: !0,
                value: t.value
            } : e), ye) : ye;

            function he(e) {
                const t = e.ref;
                if (!(e.refs ? e.refs.every((e => e.disabled)) : t.disabled)) return te(t) ? t.files : ae(t) ? be(e.refs).value : se(t) ? [...t.selectedOptions].map((({
                    value: e
                }) => e)) : a(t) ? me(e.refs).value : ge(f(t.value) ? e.ref.value : t.value, e)
            }
            var ve = e => e instanceof RegExp,
                pe = e => f(e) ? void 0 : ve(e) ? e.source : u(e) ? ve(e.value) ? e.value.source : e.value : e;

            function _e(e, t, r) {
                const s = m(e, r);
                if (s || P(r)) return {
                    error: s,
                    name: r
                };
                const a = r.split(".");
                for (; a.length;) {
                    const s = a.join("."),
                        n = m(t, s),
                        i = m(e, s);
                    if (n && !Array.isArray(n) && r !== s) return {
                        name: r
                    };
                    if (i && i.type) return {
                        name: s,
                        error: i
                    };
                    a.pop()
                }
                return {
                    name: r
                }
            }
            var Ve = (e, t) => !d(m(e, t)).length && oe(e, t),
                je = e => L(e) || s.isValidElement(e);

            function Oe(e, t, r = "validate") {
                if (je(e) || Array.isArray(e) && e.every(je) || ee(e) && !e) return {
                    type: r,
                    message: je(e) ? e : "",
                    ref: t
                }
            }
            var we = e => u(e) && !ve(e) ? e : {
                    value: e,
                    message: ""
                },
                Fe = async (e, t, r, s) => {
                    const {
                        ref: n,
                        refs: o,
                        required: l,
                        maxLength: c,
                        minLength: d,
                        min: f,
                        max: m,
                        pattern: g,
                        validate: y,
                        name: b,
                        valueAsNumber: h,
                        mount: v,
                        disabled: p
                    } = e._f;
                    if (!v || p) return {};
                    const _ = o ? o[0] : n,
                        S = e => {
                            s && _.reportValidity && (_.setCustomValidity(ee(e) ? "" : e || " "), _.reportValidity())
                        },
                        k = {},
                        D = ae(n),
                        C = a(n),
                        N = D || C,
                        U = (h || te(n)) && !n.value || "" === t || Array.isArray(t) && !t.length,
                        T = I.bind(null, b, r, k),
                        B = (e, t, r, s = O, a = w) => {
                            const i = e ? t : r;
                            k[b] = Object.assign({
                                type: e ? s : a,
                                message: i,
                                ref: n
                            }, T(e ? s : a, i))
                        };
                    if (l && (!N && (U || i(t)) || ee(t) && !t || C && !me(o).isValid || D && !be(o).isValid)) {
                        const {
                            value: e,
                            message: t
                        } = je(l) ? {
                            value: !!l,
                            message: l
                        } : we(l);
                        if (e && (k[b] = Object.assign({
                                type: A,
                                message: t,
                                ref: _
                            }, T(A, t)), !r)) return S(t), k
                    }
                    if (!U && (!i(f) || !i(m))) {
                        let e, s;
                        const a = we(m),
                            o = we(f);
                        if (isNaN(t)) {
                            const r = n.valueAsDate || new Date(t);
                            L(a.value) && (e = r > new Date(a.value)), L(o.value) && (s = r < new Date(o.value))
                        } else {
                            const r = n.valueAsNumber || parseFloat(t);
                            i(a.value) || (e = r > a.value), i(o.value) || (s = r < o.value)
                        }
                        if ((e || s) && (B(!!e, a.message, o.message, V, j), !r)) return S(k[b].message), k
                    }
                    if ((c || d) && !U && L(t)) {
                        const e = we(c),
                            s = we(d),
                            a = !i(e.value) && t.length > e.value,
                            n = !i(s.value) && t.length < s.value;
                        if ((a || n) && (B(a, e.message, s.message), !r)) return S(k[b].message), k
                    }
                    if (g && !U && L(t)) {
                        const {
                            value: e,
                            message: s
                        } = we(g);
                        if (ve(e) && !t.match(e) && (k[b] = Object.assign({
                                type: F,
                                message: s,
                                ref: n
                            }, T(F, s)), !r)) return S(s), k
                    }
                    if (y)
                        if (R(y)) {
                            const e = Oe(await y(t), _);
                            if (e && (k[b] = Object.assign(Object.assign({}, e), T(x, e.message)), !r)) return S(e.message), k
                        } else if (u(y)) {
                        let e = {};
                        for (const s in y) {
                            if (!E(e) && !r) break;
                            const a = Oe(await y[s](t), _, s);
                            a && (e = Object.assign(Object.assign({}, a), T(s, a.message)), S(a.message), r && (k[b] = e))
                        }
                        if (!E(e) && (k[b] = Object.assign({
                                ref: _
                            }, e), !r)) return k
                    }
                    return S(!0), k
                };
            const Ae = {
                mode: v,
                reValidateMode: h,
                shouldFocusError: !0
            };

            function xe(e = {}) {
                let t, r = Object.assign(Object.assign({}, Ae), e),
                    s = {
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    },
                    o = {},
                    u = r.defaultValues || {},
                    y = r.shouldUnregister ? {} : G(u),
                    b = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    h = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    v = 0,
                    p = {};
                const V = {
                        isDirty: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    j = {
                        watch: J(),
                        array: J(),
                        state: J()
                    },
                    O = Y(r.mode),
                    w = Y(r.reValidateMode),
                    F = r.criteriaMode === _,
                    A = async e => {
                        let t = !1;
                        return V.isValid && (t = r.resolver ? E((await N()).errors) : await T(o, !0), e || t === s.isValid || (s.isValid = t, j.state.next({
                            isValid: t
                        }))), t
                    },
                    x = (e, t) => (z(s.errors, e, t), j.state.next({
                        errors: s.errors
                    })),
                    k = (e, t, r) => {
                        const s = m(o, e);
                        if (s) {
                            const a = m(y, e, m(u, e));
                            f(a) || r && r.defaultChecked || t ? z(y, e, t ? a : he(s._f)) : q(e, a)
                        }
                        b.mount && A()
                    },
                    D = (e, t, r, a = !0) => {
                        let n = !1;
                        const i = {
                                name: e
                            },
                            o = m(s.touchedFields, e);
                        if (V.isDirty) {
                            const e = s.isDirty;
                            s.isDirty = i.isDirty = B(), n = e !== i.isDirty
                        }
                        if (V.dirtyFields && !r) {
                            const r = m(s.dirtyFields, e);
                            X(m(u, e), t) ? oe(s.dirtyFields, e) : z(s.dirtyFields, e, !0), i.dirtyFields = s.dirtyFields, n = n || r !== m(s.dirtyFields, e)
                        }
                        return r && !o && (z(s.touchedFields, e, r), i.touchedFields = s.touchedFields, n = n || V.touchedFields && o !== r), n && a && j.state.next(i), n ? i : {}
                    },
                    C = async (r, a, n, i, o) => {
                        const u = m(s.errors, a),
                            l = V.isValid && s.isValid !== n;
                        var c, d;
                        if (e.delayError && i ? (t = t || (c = x, d = e.delayError, (...e) => {
                                clearTimeout(v), v = window.setTimeout((() => c(...e)), d)
                            }), t(a, i)) : (clearTimeout(v), i ? z(s.errors, a, i) : oe(s.errors, a)), ((i ? !X(u, i) : u) || !E(o) || l) && !r) {
                            const e = Object.assign(Object.assign(Object.assign({}, o), l ? {
                                isValid: n
                            } : {}), {
                                errors: s.errors,
                                name: a
                            });
                            s = Object.assign(Object.assign({}, s), e), j.state.next(e)
                        }
                        p[a]--, V.isValidating && !p[a] && (j.state.next({
                            isValidating: !1
                        }), p = {})
                    },
                    N = async e => r.resolver ? await r.resolver(Object.assign({}, y), r.context, ((e, t, r, s) => {
                        const a = {};
                        for (const n of e) {
                            const e = m(t, n);
                            e && z(a, n, e._f)
                        }
                        return {
                            criteriaMode: r,
                            names: [...e],
                            fields: a,
                            shouldUseNativeValidation: s
                        }
                    })(e || h.mount, o, r.criteriaMode, r.shouldUseNativeValidation)) : {},
                    T = async (e, t, a = {
                        valid: !0
                    }) => {
                        for (const n in e) {
                            const i = e[n];
                            if (i) {
                                const e = i._f,
                                    n = S(i, "_f");
                                if (e) {
                                    const n = await Fe(i, m(y, e.name), F, r.shouldUseNativeValidation);
                                    if (n[e.name] && (a.valid = !1, t)) break;
                                    t || (n[e.name] ? z(s.errors, e.name, n[e.name]) : oe(s.errors, e.name))
                                }
                                n && await T(n, t, a)
                            }
                        }
                        return a.valid
                    },
                    B = (e, t) => (e && t && z(y, e, t), !X(ue(), u)),
                    $ = (e, t, r) => {
                        const s = Object.assign({}, b.mount ? y : f(t) ? u : L(e) ? {
                            [e]: t
                        } : t);
                        return M(e, h, s, r)
                    },
                    q = (e, t, r = {}) => {
                        const s = m(o, e);
                        let n = t;
                        if (s) {
                            const r = s._f;
                            r && (!r.disabled && z(y, e, ge(t, r)), n = ne && re(r.ref) && i(t) ? "" : t, se(r.ref) ? [...r.ref.options].forEach((e => e.selected = n.includes(e.value))) : r.refs ? a(r.ref) ? r.refs.length > 1 ? r.refs.forEach((e => e.checked = Array.isArray(n) ? !!n.find((t => t === e.value)) : n === e.value)) : r.refs[0].checked = !!n : r.refs.forEach((e => e.checked = e.value === n)) : te(r.ref) || (r.ref.value = n, r.ref.type || j.watch.next({
                                name: e
                            })))
                        }(r.shouldDirty || r.shouldTouch) && D(e, n, r.shouldTouch), r.shouldValidate && H(e)
                    },
                    W = (e, t, r) => {
                        for (const s in t) {
                            const a = t[s],
                                i = `${e}.${s}`,
                                u = m(o, i);
                            !h.array.has(e) && K(a) && (!u || u._f) || n(a) ? q(i, a, r) : W(i, a, r)
                        }
                    },
                    I = (e, t, r = {}) => {
                        const a = m(o, e),
                            n = h.array.has(e);
                        z(y, e, t), n ? (j.array.next({
                            name: e,
                            values: y
                        }), (V.isDirty || V.dirtyFields) && r.shouldDirty && (s.dirtyFields = ce(u, y), j.state.next({
                            name: e,
                            dirtyFields: s.dirtyFields,
                            isDirty: B(e, t)
                        }))) : !a || a._f || i(t) ? q(e, t, r) : W(e, t, r), Z(e, h) && j.state.next({}), j.watch.next({
                            name: e
                        })
                    },
                    P = async e => {
                        const t = e.target;
                        let a = t.name;
                        const n = m(o, a);
                        if (n) {
                            let u, c;
                            const d = t.type ? he(n._f) : l(e),
                                f = e.type === g,
                                b = !((i = n._f).mount && (i.required || i.min || i.max || i.maxLength || i.minLength || i.pattern || i.validate)) && !r.resolver && !m(s.errors, a) && !n._f.deps || ((e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e))(f, m(s.touchedFields, a), s.isSubmitted, w, O),
                                v = Z(a, h, f);
                            f ? n._f.onBlur && n._f.onBlur(e) : n._f.onChange && n._f.onChange(e), z(y, a, d);
                            const _ = D(a, d, f, !1),
                                x = !E(_) || v;
                            if (!f && j.watch.next({
                                    name: a,
                                    type: e.type
                                }), b) return x && j.state.next(Object.assign({
                                name: a
                            }, v ? {} : _));
                            if (!f && v && j.state.next({}), p[a] = (p[a], 1), V.isValidating && j.state.next({
                                    isValidating: !0
                                }), r.resolver) {
                                const {
                                    errors: e
                                } = await N([a]), t = _e(s.errors, o, a), r = _e(e, o, t.name || a);
                                u = r.error, a = r.name, c = E(e)
                            } else u = (await Fe(n, m(y, a), F, r.shouldUseNativeValidation))[a], c = await A(!0);
                            n._f.deps && H(n._f.deps), C(!1, a, c, u, _)
                        }
                        var i
                    },
                    H = async (e, t = {}) => {
                        let a, n;
                        const i = U(e);
                        if (j.state.next({
                                isValidating: !0
                            }), r.resolver) {
                            const t = await (async e => {
                                const {
                                    errors: t
                                } = await N();
                                if (e)
                                    for (const r of e) {
                                        const e = m(t, r);
                                        e ? z(s.errors, r, e) : oe(s.errors, r)
                                    } else s.errors = t;
                                return t
                            })(f(e) ? e : i);
                            a = E(t), n = e ? !i.some((e => m(t, e))) : a
                        } else e ? (n = (await Promise.all(i.map((async e => {
                            const t = m(o, e);
                            return await T(t && t._f ? {
                                [e]: t
                            } : t)
                        })))).every(Boolean), (n || s.isValid) && A()) : n = a = await T(o);
                        return j.state.next(Object.assign(Object.assign(Object.assign({}, !L(e) || V.isValid && a !== s.isValid ? {} : {
                            name: e
                        }), r.resolver ? {
                            isValid: a
                        } : {}), {
                            errors: s.errors,
                            isValidating: !1
                        })), t.shouldFocus && !n && Q(o, (e => m(s.errors, e)), e ? i : h.mount), n
                    },
                    ue = e => {
                        const t = Object.assign(Object.assign({}, u), b.mount ? y : {});
                        return f(e) ? t : L(e) ? m(t, e) : e.map((e => m(t, e)))
                    },
                    le = (e, t = {}) => {
                        for (const a of e ? U(e) : h.mount) h.mount.delete(a), h.array.delete(a), m(o, a) && (t.keepValue || (oe(o, a), oe(y, a)), !t.keepError && oe(s.errors, a), !t.keepDirty && oe(s.dirtyFields, a), !t.keepTouched && oe(s.touchedFields, a), !r.shouldUnregister && !t.keepDefaultValue && oe(u, a));
                        j.watch.next({}), j.state.next(Object.assign(Object.assign({}, s), t.keepDirty ? {
                            isDirty: B()
                        } : {})), !t.keepIsValid && A()
                    },
                    de = (e, t = {}) => {
                        let s = m(o, e);
                        return z(o, e, {
                            _f: Object.assign(Object.assign(Object.assign({}, s && s._f ? s._f : {
                                ref: {
                                    name: e
                                }
                            }), {
                                name: e,
                                mount: !0
                            }), t)
                        }), h.mount.add(e), !f(t.value) && !t.disabled && z(y, e, m(y, e, t.value)), s ? ee(t.disabled) && z(y, e, t.disabled ? void 0 : m(y, e, he(s._f))) : k(e, !0), Object.assign(Object.assign(Object.assign({}, ee(t.disabled) ? {
                            disabled: t.disabled
                        } : {}), r.shouldUseNativeValidation ? {
                            required: !!t.required,
                            min: pe(t.min),
                            max: pe(t.max),
                            minLength: pe(t.minLength),
                            maxLength: pe(t.maxLength),
                            pattern: pe(t.pattern)
                        } : {}), {
                            name: e,
                            onChange: P,
                            onBlur: P,
                            ref: n => {
                                if (n) {
                                    de(e, t), s = m(o, e);
                                    const r = f(n.value) && n.querySelectorAll && n.querySelectorAll("input,select,textarea")[0] || n,
                                        i = (e => ae(e) || a(e))(r);
                                    if (r === s._f.ref || i && d(s._f.refs).find((e => e === r))) return;
                                    z(o, e, {
                                        _f: i ? Object.assign(Object.assign({}, s._f), {
                                            refs: [...d(s._f.refs).filter(ie), r],
                                            ref: {
                                                type: r.type,
                                                name: e
                                            }
                                        }) : Object.assign(Object.assign({}, s._f), {
                                            ref: r
                                        })
                                    }), k(e, !1, r)
                                } else s = m(o, e, {}), s._f && (s._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!c(h.array, e) || !b.action) && h.unMount.add(e)
                            }
                        })
                    };
                return {
                    control: {
                        register: de,
                        unregister: le,
                        _executeSchema: N,
                        _getWatch: $,
                        _getDirty: B,
                        _updateValid: A,
                        _removeUnmounted: () => {
                            for (const e of h.unMount) {
                                const t = m(o, e);
                                t && (t._f.refs ? t._f.refs.every((e => !ie(e))) : !ie(t._f.ref)) && le(e)
                            }
                            h.unMount = new Set
                        },
                        _updateFieldArray: (e, t, r, a = [], n = !0, i = !0, l = !0) => {
                            if (b.action = !0, i && m(o, e)) {
                                const s = t(m(o, e), r.argA, r.argB);
                                n && z(o, e, s)
                            }
                            if (l && Array.isArray(m(s.errors, e))) {
                                const a = t(m(s.errors, e), r.argA, r.argB);
                                n && z(s.errors, e, a), Ve(s.errors, e)
                            }
                            if (V.touchedFields && m(s.touchedFields, e)) {
                                const a = t(m(s.touchedFields, e), r.argA, r.argB);
                                n && z(s.touchedFields, e, a), Ve(s.touchedFields, e)
                            }(V.dirtyFields || V.isDirty) && (s.dirtyFields = ce(u, y)), j.state.next({
                                isDirty: B(e, a),
                                dirtyFields: s.dirtyFields,
                                errors: s.errors,
                                isValid: s.isValid
                            })
                        },
                        _getFieldArray: t => d(m(b.mount ? y : u, t, e.shouldUnregister ? m(u, t, []) : [])),
                        _subjects: j,
                        _proxyFormState: V,
                        get _fields() {
                            return o
                        },
                        set _fields(e) {
                            o = e
                        },
                        get _formValues() {
                            return y
                        },
                        set _formValues(e) {
                            y = e
                        },
                        get _stateFlags() {
                            return b
                        },
                        set _stateFlags(e) {
                            b = e
                        },
                        get _defaultValues() {
                            return u
                        },
                        set _defaultValues(e) {
                            u = e
                        },
                        get _names() {
                            return h
                        },
                        set _names(e) {
                            h = e
                        },
                        get _formState() {
                            return s
                        },
                        set _formState(e) {
                            s = e
                        },
                        get _options() {
                            return r
                        },
                        set _options(e) {
                            r = Object.assign(Object.assign({}, r), e)
                        }
                    },
                    trigger: H,
                    register: de,
                    handleSubmit: (e, t) => async a => {
                        a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
                        let n = !0,
                            i = r.shouldUnregister ? G(y) : Object.assign({}, y);
                        j.state.next({
                            isSubmitting: !0
                        });
                        try {
                            if (r.resolver) {
                                const {
                                    errors: e,
                                    values: t
                                } = await N();
                                s.errors = e, i = t
                            } else await T(o);
                            E(s.errors) && Object.keys(s.errors).every((e => m(i, e))) ? (j.state.next({
                                errors: {},
                                isSubmitting: !0
                            }), await e(i, a)) : (t && await t(s.errors, a), r.shouldFocusError && Q(o, (e => m(s.errors, e)), h.mount))
                        } catch (u) {
                            throw n = !1, u
                        } finally {
                            s.isSubmitted = !0, j.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: E(s.errors) && n,
                                submitCount: s.submitCount + 1,
                                errors: s.errors
                            })
                        }
                    },
                    watch: (e, t) => R(e) ? j.watch.subscribe({
                        next: r => e($(void 0, t), r)
                    }) : $(e, t, !0),
                    setValue: I,
                    getValues: ue,
                    reset: (t, r = {}) => {
                        const a = t || u,
                            n = G(a),
                            i = t && !E(t) ? n : u;
                        if (r.keepDefaultValues || (u = a), !r.keepValues) {
                            if (ne && f(t))
                                for (const e of h.mount) {
                                    const t = m(o, e);
                                    if (t && t._f) {
                                        const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                        try {
                                            re(e) && e.closest("form").reset();
                                            break
                                        } catch (l) {}
                                    }
                                }
                            y = e.shouldUnregister ? r.keepDefaultValues ? G(u) : {} : n, o = {}, j.array.next({
                                values: i
                            }), j.watch.next({
                                values: i
                            })
                        }
                        h = {
                            mount: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, b.mount = !V.isValid || !!r.keepIsValid, b.watch = !!e.shouldUnregister, j.state.next({
                            submitCount: r.keepSubmitCount ? s.submitCount : 0,
                            isDirty: r.keepDirty ? s.isDirty : !!r.keepDefaultValues && !X(t, u),
                            isSubmitted: !!r.keepIsSubmitted && s.isSubmitted,
                            dirtyFields: r.keepDirty ? s.dirtyFields : r.keepDefaultValues && t ? Object.entries(t).reduce(((e, [t, r]) => Object.assign(Object.assign({}, e), {
                                [t]: r !== m(u, t)
                            })), {}) : {},
                            touchedFields: r.keepTouched ? s.touchedFields : {},
                            errors: r.keepErrors ? s.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    },
                    resetField: (e, t = {}) => {
                        f(t.defaultValue) ? I(e, m(u, e)) : (I(e, t.defaultValue), z(u, e, t.defaultValue)), t.keepTouched || oe(s.touchedFields, e), t.keepDirty || (oe(s.dirtyFields, e), s.isDirty = t.defaultValue ? B(e, m(u, e)) : B()), t.keepError || (oe(s.errors, e), V.isValid && A()), j.state.next(Object.assign({}, s))
                    },
                    clearErrors: e => {
                        e ? U(e).forEach((e => oe(s.errors, e))) : s.errors = {}, j.state.next({
                            errors: s.errors,
                            isValid: !0
                        })
                    },
                    unregister: le,
                    setError: (e, t, r) => {
                        const a = (m(o, e, {
                            _f: {}
                        })._f || {}).ref;
                        z(s.errors, e, Object.assign(Object.assign({}, t), {
                            ref: a
                        })), j.state.next({
                            name: e,
                            errors: s.errors,
                            isValid: !1
                        }), r && r.shouldFocus && a && a.focus && a.focus()
                    },
                    setFocus: e => {
                        const t = m(o, e)._f;
                        (t.ref.focus ? t.ref : t.refs[0]).focus()
                    }
                }
            }

            function Se(e = {}) {
                const t = s.useRef(),
                    [r, a] = s.useState({
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    });
                t.current ? t.current.control._options = e : t.current = Object.assign(Object.assign({}, xe(e)), {
                    formState: r
                });
                const n = t.current.control;
                return B({
                    subject: n._subjects.state,
                    callback: e => {
                        N(e, n._proxyFormState, !0) && (n._formState = Object.assign(Object.assign({}, n._formState), e), a(Object.assign({}, n._formState)))
                    }
                }), s.useEffect((() => {
                    n._stateFlags.mount || (n._proxyFormState.isValid && n._updateValid(), n._stateFlags.mount = !0), n._stateFlags.watch && (n._stateFlags.watch = !1, n._subjects.state.next({})), n._removeUnmounted()
                })), t.current.formState = C(r, n._proxyFormState), t.current
            }
        }
    }
]);