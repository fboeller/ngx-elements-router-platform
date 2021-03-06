import { __awaiter } from 'tslib';
import { ɵɵdefineInjectable, Injectable, ɵɵinject, NgZone, ApplicationRef, Optional, Inject, Component, Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { RoutesRecognized, Router, ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, switchMap, map, takeUntil } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { LocationStrategy, PlatformLocation, APP_BASE_HREF } from '@angular/common';

function load(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject({
            error: `Bundle ${url} could not be loaded`,
        });
        document.body.appendChild(script);
    });
}
/**
 * This service loads bundles and keeps track of which bundles have been already loaded.
 * This way, it prevents errors that would occur if a bundle is loaded a second time.
 */
class BundleRegistryService {
    constructor() {
        this.loadingStates = {};
    }
    /**
     * Loads the given bundle if not already loaded, registering its custom elements in the browser.
     *
     * @param bundleUrl The url of the bundle, can be absolute or relative to the domain + base href.
     */
    loadBundle(bundleUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (['LOADING', 'LOADED'].includes(this.getLoadingState(bundleUrl))) {
                return true;
            }
            this.loadingStates[bundleUrl] = 'LOADING';
            const isSuccess = yield load(bundleUrl)
                .then(() => true)
                .catch(() => false);
            this.loadingStates[bundleUrl] = isSuccess ? 'LOADED' : 'FAILED';
            return isSuccess;
        });
    }
    /**
     * Returns the loading state of the bundle.
     *
     * @param bundleUrl The url of the bundle.
     */
    getLoadingState(bundleUrl) {
        return this.loadingStates[bundleUrl] || 'UNKNOWN';
    }
    /**
     * Returns if the bundle has already been loaded successfully.
     *
     * @param bundleUrl The url of the bundle.
     */
    isBundleLoaded(bundleUrl) {
        return this.getLoadingState(bundleUrl) === 'LOADED';
    }
}
BundleRegistryService.ɵprov = ɵɵdefineInjectable({ factory: function BundleRegistryService_Factory() { return new BundleRegistryService(); }, token: BundleRegistryService, providedIn: "root" });
BundleRegistryService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
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
class EntryRoutingService {
    constructor(router) {
        this.router = router;
    }
    registerRouting(outgoingRoute$, incomingRoute$) {
        const inSubscription = this.registerIncomingRouting(incomingRoute$);
        const outSubscription = this.registerOutgoingRouting(outgoingRoute$);
        return inSubscription.add(outSubscription);
    }
    registerIncomingRouting(incomingRoute$) {
        return incomingRoute$.pipe(distinctUntilChanged()).subscribe((route) => {
            if (route) {
                this.router.navigateByUrl(route, { state: { fromPlatform: true } });
            }
        });
    }
    registerOutgoingRouting(outgoingRoute$) {
        return this.router.events.subscribe((event) => {
            if (event instanceof RoutesRecognized &&
                (!this.isFromPlatform() || isRedirect(event))) {
                outgoingRoute$.next({
                    url: event.urlAfterRedirects,
                    replaceUrl: isRedirect(event),
                });
            }
        });
    }
    isFromPlatform() {
        var _a, _b;
        return (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state) === null || _b === void 0 ? void 0 : _b.fromPlatform;
    }
}
EntryRoutingService.ɵprov = ɵɵdefineInjectable({ factory: function EntryRoutingService_Factory() { return new EntryRoutingService(ɵɵinject(Router)); }, token: EntryRoutingService, providedIn: "root" });
EntryRoutingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
EntryRoutingService.ctorParameters = () => [
    { type: Router }
];

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
class EntryZoneService {
    constructor(zone, applicationRef) {
        this.zone = zone;
        this.applicationRef = applicationRef;
    }
    registerZone(microtaskEmpty$$) {
        return microtaskEmpty$$
            .pipe(switchMap((microtaskEmpty$) => microtaskEmpty$ !== null && microtaskEmpty$ !== void 0 ? microtaskEmpty$ : EMPTY))
            .subscribe(() => {
            this.zone.run(() => {
                this.applicationRef.tick();
            });
        });
    }
}
EntryZoneService.ɵprov = ɵɵdefineInjectable({ factory: function EntryZoneService_Factory() { return new EntryZoneService(ɵɵinject(NgZone), ɵɵinject(ApplicationRef)); }, token: EntryZoneService, providedIn: "root" });
EntryZoneService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
EntryZoneService.ctorParameters = () => [
    { type: NgZone },
    { type: ApplicationRef }
];

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
class NoopLocationStrategy extends LocationStrategy {
    constructor(platformLocation, baseHref) {
        super();
        this.platformLocation = platformLocation;
        this.baseHref = baseHref || this.platformLocation.getBaseHrefFromDOM();
        if (!this.baseHref) {
            throw new Error(`No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.`);
        }
    }
    onPopState(_fn) { }
    getBaseHref() {
        return this.baseHref;
    }
    path(_includeHash = false) {
        return '';
    }
    prepareExternalUrl(internal) {
        if (this.baseHref.endsWith('/') && internal.startsWith('/')) {
            return this.baseHref.substring(0, this.baseHref.length - 1) + internal;
        }
        else if (this.baseHref.endsWith('/') || internal.startsWith('/')) {
            return this.baseHref + internal;
        }
        else {
            return `${this.baseHref}/${internal}`;
        }
    }
    pushState(_state, _title, _path, _queryParams) { }
    replaceState(_state, _title, _path, _queryParams) { }
    forward() { }
    back() { }
}
NoopLocationStrategy.decorators = [
    { type: Injectable }
];
NoopLocationStrategy.ctorParameters = () => [
    { type: PlatformLocation },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [APP_BASE_HREF,] }] }
];

/**
 * This component can be used for routes that shall never be resolved by the web component itself.
 * Instead, the host embedding the web component can resolve these routes.
 */
class NoComponent {
}
NoComponent.decorators = [
    { type: Component, args: [{
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
class LoadBundleGuard {
    constructor(bundleRegistryService) {
        this.bundleRegistryService = bundleRegistryService;
    }
    canActivate(route) {
        const bundleUrl = route.data.bundleUrl;
        if (!(typeof bundleUrl === 'string')) {
            console.error(`
        The LoadBundleGuard is missing information on which bundle to load.
        Did you forget to provide a bundleUrl: string as data to the route?
      `);
            return Promise.resolve(false);
        }
        return this.bundleRegistryService.loadBundle(bundleUrl);
    }
}
LoadBundleGuard.ɵprov = ɵɵdefineInjectable({ factory: function LoadBundleGuard_Factory() { return new LoadBundleGuard(ɵɵinject(BundleRegistryService)); }, token: LoadBundleGuard, providedIn: "root" });
LoadBundleGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
LoadBundleGuard.ctorParameters = () => [
    { type: BundleRegistryService }
];

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
class RoutingDirective {
    constructor(element, router, route) {
        this.element = element;
        this.router = router;
        this.route = route;
        this.destroyed$ = new Subject();
    }
    ngOnInit() {
        this.route.url
            .pipe(map(() => this.router.url), takeUntil(this.destroyed$))
            .subscribe((url) => (this.element.nativeElement.route = url));
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
    handleRouteChange(event) {
        this.navigateToUrl(event === null || event === void 0 ? void 0 : event.detail);
    }
    navigateToUrl(event) {
        if ((event === null || event === void 0 ? void 0 : event.url) && event.url.startsWith('/')) {
            this.router.navigateByUrl(event.url, {
                replaceUrl: event.replaceUrl || false,
            });
        }
        else {
            console.warn(`The aerRouting directive received an invalid router event.`, event);
        }
    }
}
RoutingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aerRouting]',
            },] }
];
RoutingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Router },
    { type: ActivatedRoute }
];
RoutingDirective.propDecorators = {
    handleRouteChange: [{ type: HostListener, args: ['routeChange', ['$event'],] }]
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
class ZoneDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
    }
    ngOnInit() {
        this.element.nativeElement.microtaskEmpty$ = this.zone.onMicrotaskEmpty;
    }
}
ZoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aerZone]',
            },] }
];
ZoneDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];

class ElementsRouterModule {
}
ElementsRouterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ZoneDirective, RoutingDirective, NoComponent],
                imports: [],
                exports: [ZoneDirective, RoutingDirective, NoComponent],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BundleRegistryService, ElementsRouterModule, EntryRoutingService, EntryZoneService, LoadBundleGuard, NoComponent, NoopLocationStrategy, RoutingDirective, ZoneDirective };
//# sourceMappingURL=ngx-elements-router.js.map
