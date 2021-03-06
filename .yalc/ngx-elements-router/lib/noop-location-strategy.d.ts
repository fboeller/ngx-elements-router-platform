import { LocationChangeListener, LocationStrategy, PlatformLocation } from '@angular/common';
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
import * as ɵngcc0 from '@angular/core';
export declare class NoopLocationStrategy extends LocationStrategy {
    private platformLocation;
    private readonly baseHref;
    constructor(platformLocation: PlatformLocation, baseHref?: string);
    onPopState(_fn: LocationChangeListener): void;
    getBaseHref(): string;
    path(_includeHash?: boolean): string;
    prepareExternalUrl(internal: string): string;
    pushState(_state: any, _title: string, _path: string, _queryParams: string): void;
    replaceState(_state: any, _title: string, _path: string, _queryParams: string): void;
    forward(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NoopLocationStrategy, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NoopLocationStrategy>;
}

//# sourceMappingURL=noop-location-strategy.d.ts.map