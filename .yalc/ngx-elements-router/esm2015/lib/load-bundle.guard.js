import { Injectable } from '@angular/core';
import { BundleRegistryService } from './bundle-registry.service';
import * as i0 from "@angular/core";
import * as i1 from "./bundle-registry.service";
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
export class LoadBundleGuard {
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
LoadBundleGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadBundleGuard_Factory() { return new LoadBundleGuard(i0.ɵɵinject(i1.BundleRegistryService)); }, token: LoadBundleGuard, providedIn: "root" });
LoadBundleGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
LoadBundleGuard.ctorParameters = () => [
    { type: BundleRegistryService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1idW5kbGUuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWxlbWVudHMtcm91dGVyL3NyYy9saWIvbG9hZC1idW5kbGUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRWxFOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUFHLENBQUM7SUFFcEUsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBb0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsRUFBRTtZQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDOzs7T0FHYixDQUFDLENBQUM7WUFDSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztZQWRGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQWhCekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQnVuZGxlUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi9idW5kbGUtcmVnaXN0cnkuc2VydmljZSc7XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGEgYnVuZGxlIGlzIGxvYWRlZCBiZWZvcmUgYWN0aXZhdGluZyB0aGUgcm91dGUuXG4gKlxuICogYGBgXG4gKiB7XG4gKiAgIHBhdGg6ICdteS1taWNyby1mcm9udGVuZCcsXG4gKiAgIGNhbkFjdGl2YXRlOiBbTG9hZEJ1bmRsZUd1YXJkXSxcbiAqICAgZGF0YToge1xuICogICAgIGJ1bmRsZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9tYWluLmpzJ1xuICogICB9LFxuICogICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9teS1taWNyby1mcm9udGVuZC9teS1taWNyby1mcm9udGVuZC1ob3N0Lm1vZHVsZScpLnRoZW4oKG0pID0+IG0uTXlNaWNyb0Zyb250ZW5kSG9zdE1vZHVsZSlcbiAqIH1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvYWRCdW5kbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidW5kbGVSZWdpc3RyeVNlcnZpY2U6IEJ1bmRsZVJlZ2lzdHJ5U2VydmljZSkge31cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGJ1bmRsZVVybCA9IHJvdXRlLmRhdGEuYnVuZGxlVXJsIGFzIHVua25vd247XG4gICAgaWYgKCEodHlwZW9mIGJ1bmRsZVVybCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcbiAgICAgICAgVGhlIExvYWRCdW5kbGVHdWFyZCBpcyBtaXNzaW5nIGluZm9ybWF0aW9uIG9uIHdoaWNoIGJ1bmRsZSB0byBsb2FkLlxuICAgICAgICBEaWQgeW91IGZvcmdldCB0byBwcm92aWRlIGEgYnVuZGxlVXJsOiBzdHJpbmcgYXMgZGF0YSB0byB0aGUgcm91dGU/XG4gICAgICBgKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5idW5kbGVSZWdpc3RyeVNlcnZpY2UubG9hZEJ1bmRsZShidW5kbGVVcmwpO1xuICB9XG59XG4iXX0=