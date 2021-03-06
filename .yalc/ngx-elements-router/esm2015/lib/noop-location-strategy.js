import { APP_BASE_HREF, LocationStrategy, PlatformLocation, } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
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
export class NoopLocationStrategy extends LocationStrategy {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1sb2NhdGlvbi1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lbGVtZW50cy1yb3V0ZXIvc3JjL2xpYi9ub29wLWxvY2F0aW9uLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxhQUFhLEVBRWIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUVILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFHeEQsWUFDVSxnQkFBa0MsRUFDUCxRQUFpQjtRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUhBLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFJMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FDYiw2R0FBNkcsQ0FDOUcsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUEyQixJQUFTLENBQUM7SUFFaEQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxDQUFDLGVBQXdCLEtBQUs7UUFDaEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBZ0I7UUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN4RTthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxTQUFTLENBQ1AsTUFBVyxFQUNYLE1BQWMsRUFDZCxLQUFhLEVBQ2IsWUFBb0IsSUFDYixDQUFDO0lBRVYsWUFBWSxDQUNWLE1BQVcsRUFDWCxNQUFjLEVBQ2QsS0FBYSxFQUNiLFlBQW9CLElBQ2IsQ0FBQztJQUVWLE9BQU8sS0FBVSxDQUFDO0lBRWxCLElBQUksS0FBVSxDQUFDOzs7WUFyRGhCLFVBQVU7OztZQXJCVCxnQkFBZ0I7eUNBMkJiLFFBQVEsWUFBSSxNQUFNLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9CQVNFX0hSRUYsXG4gIExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIsXG4gIExvY2F0aW9uU3RyYXRlZ3ksXG4gIFBsYXRmb3JtTG9jYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQWN0cyBhcyBhIG5vb3AgbG9jYXRpb24gc3RyYXRlZ3kgdGhhdCBkb2VzIG5vdCBtb2RpZnkgdGhlIGJyb3dzZXIgdXJsLlxuICogU2hvdWxkIGJlIHVzZWQgZm9yIGEgUm91dGVyTW9kdWxlIGluIGEgbWljcm8gZnJvbnRlbmQuXG4gKiBUaGF0IHdheSwgdGhlIFJvdXRlck1vZHVsZSBvZiB0aGUgcGxhdGZvcm0gaXMgaW4gY2hhcmdlIG9mIG1vZGlmeWluZyB0aGUgYnJvd3NlciB1cmwuXG4gKlxuICogYGBgXG4gKiBpbXBvcnRzOiBbXG4gKiAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtcbiAqICAgICB7IHBhdGg6ICdteS1yb3V0ZScsIGNvbXBvbmVudDogU29tZUNvbXBvbmVudCB9LFxuICogICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBOb0NvbXBvbmVudCB9XG4gKiAgIF0pXG4gKiBdLFxuICogcHJvdmlkZXJzOiBbXG4gKiAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IE5vb3BMb2NhdGlvblN0cmF0ZWd5IH0sXG4gKiBdXG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vb3BMb2NhdGlvblN0cmF0ZWd5IGV4dGVuZHMgTG9jYXRpb25TdHJhdGVneSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgYmFzZUhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBUFBfQkFTRV9IUkVGKSBiYXNlSHJlZj86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFzZUhyZWYgPSBiYXNlSHJlZiB8fCB0aGlzLnBsYXRmb3JtTG9jYXRpb24uZ2V0QmFzZUhyZWZGcm9tRE9NKCk7XG4gICAgaWYgKCF0aGlzLmJhc2VIcmVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBObyBiYXNlIGhyZWYgc2V0LiBQbGVhc2UgcHJvdmlkZSBhIHZhbHVlIGZvciB0aGUgQVBQX0JBU0VfSFJFRiB0b2tlbiBvciBhZGQgYSBiYXNlIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZShfZm46IExvY2F0aW9uQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHt9XG5cbiAgZ2V0QmFzZUhyZWYoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlSHJlZjtcbiAgfVxuXG4gIHBhdGgoX2luY2x1ZGVIYXNoOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByZXBhcmVFeHRlcm5hbFVybChpbnRlcm5hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5iYXNlSHJlZi5lbmRzV2l0aCgnLycpICYmIGludGVybmFsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYmFzZUhyZWYuc3Vic3RyaW5nKDAsIHRoaXMuYmFzZUhyZWYubGVuZ3RoIC0gMSkgKyBpbnRlcm5hbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmFzZUhyZWYuZW5kc1dpdGgoJy8nKSB8fCBpbnRlcm5hbC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmJhc2VIcmVmICsgaW50ZXJuYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmJhc2VIcmVmfS8ke2ludGVybmFsfWA7XG4gICAgfVxuICB9XG5cbiAgcHVzaFN0YXRlKFxuICAgIF9zdGF0ZTogYW55LFxuICAgIF90aXRsZTogc3RyaW5nLFxuICAgIF9wYXRoOiBzdHJpbmcsXG4gICAgX3F1ZXJ5UGFyYW1zOiBzdHJpbmdcbiAgKTogdm9pZCB7fVxuXG4gIHJlcGxhY2VTdGF0ZShcbiAgICBfc3RhdGU6IGFueSxcbiAgICBfdGl0bGU6IHN0cmluZyxcbiAgICBfcGF0aDogc3RyaW5nLFxuICAgIF9xdWVyeVBhcmFtczogc3RyaW5nXG4gICk6IHZvaWQge31cblxuICBmb3J3YXJkKCk6IHZvaWQge31cblxuICBiYWNrKCk6IHZvaWQge31cbn1cbiJdfQ==