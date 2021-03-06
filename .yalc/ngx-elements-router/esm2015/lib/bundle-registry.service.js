import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
export class BundleRegistryService {
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
BundleRegistryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BundleRegistryService_Factory() { return new BundleRegistryService(); }, token: BundleRegistryService, providedIn: "root" });
BundleRegistryService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWxlbWVudHMtcm91dGVyL3NyYy9saWIvYnVuZGxlLXJlZ2lzdHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLFNBQVMsSUFBSSxDQUFDLEdBQVc7SUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FDcEIsTUFBTSxDQUFDO1lBQ0wsS0FBSyxFQUFFLFVBQVUsR0FBRyxzQkFBc0I7U0FDM0MsQ0FBQyxDQUFDO1FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBWUQ7OztHQUdHO0FBRUgsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVVLGtCQUFhLEdBQWlDLEVBQUUsQ0FBQztLQW9DMUQ7SUFsQ0M7Ozs7T0FJRztJQUNHLFVBQVUsQ0FBQyxTQUFpQjs7WUFDaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2dCQUNuRSxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDMUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDO2lCQUNwQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUNoQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2hFLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVEOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsU0FBaUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxTQUFpQjtRQUM5QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxDQUFDO0lBQ3RELENBQUM7Ozs7WUFyQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gbG9hZCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKTtcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3Qoe1xuICAgICAgICBlcnJvcjogYEJ1bmRsZSAke3VybH0gY291bGQgbm90IGJlIGxvYWRlZGAsXG4gICAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRoZSBsb2FkaW5nIHN0YXRlIG9mIGEgYnVuZGxlLlxuICpcbiAqIFVOS05PV04gLT4gSXQgaGFzIG5vdCBiZWVuIHRyaWVkIHRvIGxvYWQgdGhpcyBidW5kbGUuXG4gKiBMT0FESU5HIC0+IFRoZSBsb2FkaW5nIG9mIHRoaXMgYnVuZGxlIGlzIGN1cnJlbnRseSBoYXBwZW5pbmcuXG4gKiBMT0FERUQgLT4gVGhlIGJ1bmRsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkLlxuICogRkFJTEVEIC0+IFRoZSBsb2FkaW5nIG9mIHRoZSBidW5kbGUgZmFpbGVkLlxuICovXG50eXBlIExvYWRpbmdTdGF0ZSA9ICdVTktOT1dOJyB8ICdMT0FESU5HJyB8ICdMT0FERUQnIHwgJ0ZBSUxFRCc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGxvYWRzIGJ1bmRsZXMgYW5kIGtlZXBzIHRyYWNrIG9mIHdoaWNoIGJ1bmRsZXMgaGF2ZSBiZWVuIGFscmVhZHkgbG9hZGVkLlxuICogVGhpcyB3YXksIGl0IHByZXZlbnRzIGVycm9ycyB0aGF0IHdvdWxkIG9jY3VyIGlmIGEgYnVuZGxlIGlzIGxvYWRlZCBhIHNlY29uZCB0aW1lLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEJ1bmRsZVJlZ2lzdHJ5U2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGluZ1N0YXRlczogUmVjb3JkPHN0cmluZywgTG9hZGluZ1N0YXRlPiA9IHt9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgZ2l2ZW4gYnVuZGxlIGlmIG5vdCBhbHJlYWR5IGxvYWRlZCwgcmVnaXN0ZXJpbmcgaXRzIGN1c3RvbSBlbGVtZW50cyBpbiB0aGUgYnJvd3Nlci5cbiAgICpcbiAgICogQHBhcmFtIGJ1bmRsZVVybCBUaGUgdXJsIG9mIHRoZSBidW5kbGUsIGNhbiBiZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSB0byB0aGUgZG9tYWluICsgYmFzZSBocmVmLlxuICAgKi9cbiAgYXN5bmMgbG9hZEJ1bmRsZShidW5kbGVVcmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChbJ0xPQURJTkcnLCAnTE9BREVEJ10uaW5jbHVkZXModGhpcy5nZXRMb2FkaW5nU3RhdGUoYnVuZGxlVXJsKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmdTdGF0ZXNbYnVuZGxlVXJsXSA9ICdMT0FESU5HJztcbiAgICBjb25zdCBpc1N1Y2Nlc3MgPSBhd2FpdCBsb2FkKGJ1bmRsZVVybClcbiAgICAgIC50aGVuKCgpID0+IHRydWUpXG4gICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuICAgIHRoaXMubG9hZGluZ1N0YXRlc1tidW5kbGVVcmxdID0gaXNTdWNjZXNzID8gJ0xPQURFRCcgOiAnRkFJTEVEJztcbiAgICByZXR1cm4gaXNTdWNjZXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGJ1bmRsZS5cbiAgICpcbiAgICogQHBhcmFtIGJ1bmRsZVVybCBUaGUgdXJsIG9mIHRoZSBidW5kbGUuXG4gICAqL1xuICBnZXRMb2FkaW5nU3RhdGUoYnVuZGxlVXJsOiBzdHJpbmcpOiBMb2FkaW5nU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdTdGF0ZXNbYnVuZGxlVXJsXSB8fCAnVU5LTk9XTic7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgYnVuZGxlIGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkIHN1Y2Nlc3NmdWxseS5cbiAgICpcbiAgICogQHBhcmFtIGJ1bmRsZVVybCBUaGUgdXJsIG9mIHRoZSBidW5kbGUuXG4gICAqL1xuICBpc0J1bmRsZUxvYWRlZChidW5kbGVVcmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldExvYWRpbmdTdGF0ZShidW5kbGVVcmwpID09PSAnTE9BREVEJztcbiAgfVxufVxuIl19