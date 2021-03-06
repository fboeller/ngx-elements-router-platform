(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/operators'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-elements-router', ['exports', '@angular/core', '@angular/router', 'rxjs/operators', 'rxjs', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-elements-router'] = {}, global.ng.core, global.ng.router, global.rxjs.operators, global.rxjs, global.ng.common));
}(this, (function (exports, i0, i1, operators, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function load(url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = url;
            script.onload = function () { return resolve(); };
            script.onerror = function () { return reject({
                error: "Bundle " + url + " could not be loaded",
            }); };
            document.body.appendChild(script);
        });
    }
    /**
     * This service loads bundles and keeps track of which bundles have been already loaded.
     * This way, it prevents errors that would occur if a bundle is loaded a second time.
     */
    var BundleRegistryService = /** @class */ (function () {
        function BundleRegistryService() {
            this.loadingStates = {};
        }
        /**
         * Loads the given bundle if not already loaded, registering its custom elements in the browser.
         *
         * @param bundleUrl The url of the bundle, can be absolute or relative to the domain + base href.
         */
        BundleRegistryService.prototype.loadBundle = function (bundleUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var isSuccess;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (['LOADING', 'LOADED'].includes(this.getLoadingState(bundleUrl))) {
                                return [2 /*return*/, true];
                            }
                            this.loadingStates[bundleUrl] = 'LOADING';
                            return [4 /*yield*/, load(bundleUrl)
                                    .then(function () { return true; })
                                    .catch(function () { return false; })];
                        case 1:
                            isSuccess = _a.sent();
                            this.loadingStates[bundleUrl] = isSuccess ? 'LOADED' : 'FAILED';
                            return [2 /*return*/, isSuccess];
                    }
                });
            });
        };
        /**
         * Returns the loading state of the bundle.
         *
         * @param bundleUrl The url of the bundle.
         */
        BundleRegistryService.prototype.getLoadingState = function (bundleUrl) {
            return this.loadingStates[bundleUrl] || 'UNKNOWN';
        };
        /**
         * Returns if the bundle has already been loaded successfully.
         *
         * @param bundleUrl The url of the bundle.
         */
        BundleRegistryService.prototype.isBundleLoaded = function (bundleUrl) {
            return this.getLoadingState(bundleUrl) === 'LOADED';
        };
        return BundleRegistryService;
    }());
    BundleRegistryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BundleRegistryService_Factory() { return new BundleRegistryService(); }, token: BundleRegistryService, providedIn: "root" });
    BundleRegistryService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    function isRedirect(event) {
        return event.url !== event.urlAfterRedirects;
    }
    /**
     * Registers the routing feature on the entry component of a micro frontend.
     *
     * ```
     * export class ExampleComponent implements OnChanges, OnDestroy {
     *   @Input() route?: string;
     *   @Output() routeChange = new EventEmitter<string>();
     *   route$ = new Subject<string | undefined>;
     *   private destroyed$ = new Subject<void>();
     *   constructor(private entryRoutingService: EntryRoutingService) {
     *     this.entryRoutingService.registerRouting(this.routeChange, this.route$, this.destroyed$);
     *   }
     *   ngOnDestroy() {
     *     this.destroyed$.next();
     *   }
     *   ngOnChanges() {
     *     this.route$.next(this.route);
     *   }
     * ```
     */
    var EntryRoutingService = /** @class */ (function () {
        function EntryRoutingService(router) {
            this.router = router;
        }
        EntryRoutingService.prototype.registerRouting = function (outgoingRoute$, incomingRoute$) {
            var inSubscription = this.registerIncomingRouting(incomingRoute$);
            var outSubscription = this.registerOutgoingRouting(outgoingRoute$);
            return inSubscription.add(outSubscription);
        };
        EntryRoutingService.prototype.registerIncomingRouting = function (incomingRoute$) {
            var _this = this;
            return incomingRoute$.pipe(operators.distinctUntilChanged()).subscribe(function (route) {
                if (route) {
                    _this.router.navigateByUrl(route, { state: { fromPlatform: true } });
                }
            });
        };
        EntryRoutingService.prototype.registerOutgoingRouting = function (outgoingRoute$) {
            var _this = this;
            return this.router.events.subscribe(function (event) {
                if (event instanceof i1.RoutesRecognized &&
                    (!_this.isFromPlatform() || isRedirect(event))) {
                    outgoingRoute$.next({
                        url: event.urlAfterRedirects,
                        replaceUrl: isRedirect(event),
                    });
                }
            });
        };
        EntryRoutingService.prototype.isFromPlatform = function () {
            var _a, _b;
            return (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state) === null || _b === void 0 ? void 0 : _b.fromPlatform;
        };
        return EntryRoutingService;
    }());
    EntryRoutingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EntryRoutingService_Factory() { return new EntryRoutingService(i0.ɵɵinject(i1.Router)); }, token: EntryRoutingService, providedIn: "root" });
    EntryRoutingService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    EntryRoutingService.ctorParameters = function () { return [
        { type: i1.Router }
    ]; };

    /**
     * Registers the zone feature on the entry component of a micro frontend.
     * It is intended to be used with the ZoneDirective on the custom element.
     * Together, they ensure that the change detection cycles of the Angular application of a micro frontend are executed.
     * This happens, whenever the `window.Zone` object indicates the necessity of a change detection cycle.
     *
     * ```
     * export class ExampleComponent implements OnChanges, OnDestroy {
     *   @Input() microtaskEmpty$?: Observable<void>;
     *   microtaskEmpty$$ = new Subject<Observable<void>>();
     *   constructor(private entryZoneService: EntryZoneService) {
     *     this.subscription = this.entryZoneService.registerZone(this.microtaskEmpty$$);
     *   }
     *   ngOnDestroy() {
     *     this.subscription.unsubscribe();
     *   }
     *   ngOnChanges() {
     *     this.microtaskEmpty$$.next(this.microtaskEmpty$);
     *   }
     * ```
     */
    var EntryZoneService = /** @class */ (function () {
        function EntryZoneService(zone, applicationRef) {
            this.zone = zone;
            this.applicationRef = applicationRef;
        }
        EntryZoneService.prototype.registerZone = function (microtaskEmpty$$) {
            var _this = this;
            return microtaskEmpty$$
                .pipe(operators.switchMap(function (microtaskEmpty$) { return microtaskEmpty$ !== null && microtaskEmpty$ !== void 0 ? microtaskEmpty$ : rxjs.EMPTY; }))
                .subscribe(function () {
                _this.zone.run(function () {
                    _this.applicationRef.tick();
                });
            });
        };
        return EntryZoneService;
    }());
    EntryZoneService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EntryZoneService_Factory() { return new EntryZoneService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.ApplicationRef)); }, token: EntryZoneService, providedIn: "root" });
    EntryZoneService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    EntryZoneService.ctorParameters = function () { return [
        { type: i0.NgZone },
        { type: i0.ApplicationRef }
    ]; };

    /**
     * Acts as a noop location strategy that does not modify the browser url.
     * Should be used for a RouterModule in a micro frontend.
     * That way, the RouterModule of the platform is in charge of modifying the browser url.
     *
     * ```
     * imports: [
     *   RouterModule.forRoot([
     *     { path: 'my-route', component: SomeComponent },
     *     { path: '**', component: NoComponent }
     *   ])
     * ],
     * providers: [
     *   { provide: LocationStrategy, useClass: NoopLocationStrategy },
     * ]
     * ```
     */
    var NoopLocationStrategy = /** @class */ (function (_super) {
        __extends(NoopLocationStrategy, _super);
        function NoopLocationStrategy(platformLocation, baseHref) {
            var _this = _super.call(this) || this;
            _this.platformLocation = platformLocation;
            _this.baseHref = baseHref || _this.platformLocation.getBaseHrefFromDOM();
            if (!_this.baseHref) {
                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            }
            return _this;
        }
        NoopLocationStrategy.prototype.onPopState = function (_fn) { };
        NoopLocationStrategy.prototype.getBaseHref = function () {
            return this.baseHref;
        };
        NoopLocationStrategy.prototype.path = function (_includeHash) {
            if (_includeHash === void 0) { _includeHash = false; }
            return '';
        };
        NoopLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            if (this.baseHref.endsWith('/') && internal.startsWith('/')) {
                return this.baseHref.substring(0, this.baseHref.length - 1) + internal;
            }
            else if (this.baseHref.endsWith('/') || internal.startsWith('/')) {
                return this.baseHref + internal;
            }
            else {
                return this.baseHref + "/" + internal;
            }
        };
        NoopLocationStrategy.prototype.pushState = function (_state, _title, _path, _queryParams) { };
        NoopLocationStrategy.prototype.replaceState = function (_state, _title, _path, _queryParams) { };
        NoopLocationStrategy.prototype.forward = function () { };
        NoopLocationStrategy.prototype.back = function () { };
        return NoopLocationStrategy;
    }(common.LocationStrategy));
    NoopLocationStrategy.decorators = [
        { type: i0.Injectable }
    ];
    NoopLocationStrategy.ctorParameters = function () { return [
        { type: common.PlatformLocation },
        { type: String, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [common.APP_BASE_HREF,] }] }
    ]; };

    /**
     * This component can be used for routes that shall never be resolved by the web component itself.
     * Instead, the host embedding the web component can resolve these routes.
     */
    var NoComponent = /** @class */ (function () {
        function NoComponent() {
        }
        return NoComponent;
    }());
    NoComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'aer-no-component',
                    template: ''
                },] }
    ];

    /**
     * Ensures that a bundle is loaded before activating the route.
     *
     * ```
     * {
     *   path: 'my-micro-frontend',
     *   canActivate: [LoadBundleGuard],
     *   data: {
     *     bundleUrl: 'http://localhost:4200/main.js'
     *   },
     *   loadChildren: () => import('./my-micro-frontend/my-micro-frontend-host.module').then((m) => m.MyMicroFrontendHostModule)
     * }
     * ```
     */
    var LoadBundleGuard = /** @class */ (function () {
        function LoadBundleGuard(bundleRegistryService) {
            this.bundleRegistryService = bundleRegistryService;
        }
        LoadBundleGuard.prototype.canActivate = function (route) {
            var bundleUrl = route.data.bundleUrl;
            if (!(typeof bundleUrl === 'string')) {
                console.error("\n        The LoadBundleGuard is missing information on which bundle to load.\n        Did you forget to provide a bundleUrl: string as data to the route?\n      ");
                return Promise.resolve(false);
            }
            return this.bundleRegistryService.loadBundle(bundleUrl);
        };
        return LoadBundleGuard;
    }());
    LoadBundleGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadBundleGuard_Factory() { return new LoadBundleGuard(i0.ɵɵinject(BundleRegistryService)); }, token: LoadBundleGuard, providedIn: "root" });
    LoadBundleGuard.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    LoadBundleGuard.ctorParameters = function () { return [
        { type: BundleRegistryService }
    ]; };

    /**
     * Enables the routing feature on a custom element.
     * It passes the activated route into the custom element and listens to route changes of the custom element.
     * The custom element needs to define an input `route` and an output `routeChange`.
     *
     * ```
     * @Component({
     *   selector: 'my-custom-element-host',
     *   template: `
     *     <my-custom-element aerRouting></lx-custom-element>
     *   `
     * })
     * export class MyCustomElementHostComponent {}
     * ```
     */
    var RoutingDirective = /** @class */ (function () {
        function RoutingDirective(element, router, route) {
            this.element = element;
            this.router = router;
            this.route = route;
            this.destroyed$ = new rxjs.Subject();
        }
        RoutingDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.route.url
                .pipe(operators.map(function () { return _this.router.url; }), operators.takeUntil(this.destroyed$))
                .subscribe(function (url) { return (_this.element.nativeElement.route = url); });
        };
        RoutingDirective.prototype.ngOnDestroy = function () {
            this.destroyed$.next();
        };
        RoutingDirective.prototype.handleRouteChange = function (event) {
            this.navigateToUrl(event === null || event === void 0 ? void 0 : event.detail);
        };
        RoutingDirective.prototype.navigateToUrl = function (event) {
            if ((event === null || event === void 0 ? void 0 : event.url) && event.url.startsWith('/')) {
                this.router.navigateByUrl(event.url, {
                    replaceUrl: event.replaceUrl || false,
                });
            }
            else {
                console.warn("The aerRouting directive received an invalid router event.", event);
            }
        };
        return RoutingDirective;
    }());
    RoutingDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[aerRouting]',
                },] }
    ];
    RoutingDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i1.Router },
        { type: i1.ActivatedRoute }
    ]; };
    RoutingDirective.propDecorators = {
        handleRouteChange: [{ type: i0.HostListener, args: ['routeChange', ['$event'],] }]
    };

    /**
     * Enables the zone feature on a custom element.
     * It passes an observable of all events where the global `window.Zone` object reported that the microtask queue is empty.
     * Such an event indicates to Angular that a change detection cycle needs to be run.
     *
     * ```
     * @Component({
     *   selector: 'my-custom-element-host',
     *   template: `
     *     <my-custom-element aerZone></lx-custom-element>
     *   `
     * })
     * export class MyCustomElementHostComponent {}
     * ```
     */
    var ZoneDirective = /** @class */ (function () {
        function ZoneDirective(element, zone) {
            this.element = element;
            this.zone = zone;
        }
        ZoneDirective.prototype.ngOnInit = function () {
            this.element.nativeElement.microtaskEmpty$ = this.zone.onMicrotaskEmpty;
        };
        return ZoneDirective;
    }());
    ZoneDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[aerZone]',
                },] }
    ];
    ZoneDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.NgZone }
    ]; };

    var ElementsRouterModule = /** @class */ (function () {
        function ElementsRouterModule() {
        }
        return ElementsRouterModule;
    }());
    ElementsRouterModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ZoneDirective, RoutingDirective, NoComponent],
                    imports: [],
                    exports: [ZoneDirective, RoutingDirective, NoComponent],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BundleRegistryService = BundleRegistryService;
    exports.ElementsRouterModule = ElementsRouterModule;
    exports.EntryRoutingService = EntryRoutingService;
    exports.EntryZoneService = EntryZoneService;
    exports.LoadBundleGuard = LoadBundleGuard;
    exports.NoComponent = NoComponent;
    exports.NoopLocationStrategy = NoopLocationStrategy;
    exports.RoutingDirective = RoutingDirective;
    exports.ZoneDirective = ZoneDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-elements-router.umd.js.map
