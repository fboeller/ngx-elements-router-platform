/**
 * The loading state of a bundle.
 *
 * UNKNOWN -> It has not been tried to load this bundle.
 * LOADING -> The loading of this bundle is currently happening.
 * LOADED -> The bundle has been successfully loaded.
 * FAILED -> The loading of the bundle failed.
 */
import * as ɵngcc0 from '@angular/core';
declare type LoadingState = 'UNKNOWN' | 'LOADING' | 'LOADED' | 'FAILED';
/**
 * This service loads bundles and keeps track of which bundles have been already loaded.
 * This way, it prevents errors that would occur if a bundle is loaded a second time.
 */
export declare class BundleRegistryService {
    private loadingStates;
    /**
     * Loads the given bundle if not already loaded, registering its custom elements in the browser.
     *
     * @param bundleUrl The url of the bundle, can be absolute or relative to the domain + base href.
     */
    loadBundle(bundleUrl: string): Promise<boolean>;
    /**
     * Returns the loading state of the bundle.
     *
     * @param bundleUrl The url of the bundle.
     */
    getLoadingState(bundleUrl: string): LoadingState;
    /**
     * Returns if the bundle has already been loaded successfully.
     *
     * @param bundleUrl The url of the bundle.
     */
    isBundleLoaded(bundleUrl: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BundleRegistryService, never>;
}
export {};

//# sourceMappingURL=bundle-registry.service.d.ts.map