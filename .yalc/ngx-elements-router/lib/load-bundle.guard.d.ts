import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { BundleRegistryService } from './bundle-registry.service';
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
import * as ɵngcc0 from '@angular/core';
export declare class LoadBundleGuard implements CanActivate {
    private bundleRegistryService;
    constructor(bundleRegistryService: BundleRegistryService);
    canActivate(route: ActivatedRouteSnapshot): Promise<boolean>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoadBundleGuard, never>;
}

//# sourceMappingURL=load-bundle.guard.d.ts.map