import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class EntryRoutingService {
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
EntryRoutingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EntryRoutingService_Factory() { return new EntryRoutingService(i0.ɵɵinject(i1.Router)); }, token: EntryRoutingService, providedIn: "root" });
EntryRoutingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
EntryRoutingService.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktcm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVsZW1lbnRzLXJvdXRlci9zcmMvbGliL2VudHJ5LXJvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3RELFNBQVMsVUFBVSxDQUFDLEtBQXVCO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsaUJBQWlCLENBQUM7QUFDL0MsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsZUFBZSxDQUNiLGNBQW9DLEVBQ3BDLGNBQThDO1FBRTlDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckUsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx1QkFBdUIsQ0FDckIsY0FBOEM7UUFFOUMsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyRSxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3JFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUJBQXVCLENBQUMsY0FBb0M7UUFDMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1QyxJQUNFLEtBQUssWUFBWSxnQkFBZ0I7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzdDO2dCQUNBLGNBQWMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCO29CQUM1QixVQUFVLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDOUIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjOztRQUNaLG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsMENBQUUsTUFBTSxDQUFDLEtBQUssMENBQUUsWUFBWSxDQUFDO0lBQ3hFLENBQUM7Ozs7WUF2Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBN0J6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXNSZWNvZ25pemVkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0ZXJFdmVudCB9IGZyb20gJy4vcm91dGVyLWV2ZW50LnR5cGUnO1xuXG5mdW5jdGlvbiBpc1JlZGlyZWN0KGV2ZW50OiBSb3V0ZXNSZWNvZ25pemVkKTogYm9vbGVhbiB7XG4gIHJldHVybiBldmVudC51cmwgIT09IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyB0aGUgcm91dGluZyBmZWF0dXJlIG9uIHRoZSBlbnRyeSBjb21wb25lbnQgb2YgYSBtaWNybyBmcm9udGVuZC5cbiAqXG4gKiBgYGBcbiAqIGV4cG9ydCBjbGFzcyBFeGFtcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICogICBASW5wdXQoKSByb3V0ZT86IHN0cmluZztcbiAqICAgQE91dHB1dCgpIHJvdXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gKiAgIHJvdXRlJCA9IG5ldyBTdWJqZWN0PHN0cmluZyB8IHVuZGVmaW5lZD47XG4gKiAgIHByaXZhdGUgZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50cnlSb3V0aW5nU2VydmljZTogRW50cnlSb3V0aW5nU2VydmljZSkge1xuICogICAgIHRoaXMuZW50cnlSb3V0aW5nU2VydmljZS5yZWdpc3RlclJvdXRpbmcodGhpcy5yb3V0ZUNoYW5nZSwgdGhpcy5yb3V0ZSQsIHRoaXMuZGVzdHJveWVkJCk7XG4gKiAgIH1cbiAqICAgbmdPbkRlc3Ryb3koKSB7XG4gKiAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAqICAgfVxuICogICBuZ09uQ2hhbmdlcygpIHtcbiAqICAgICB0aGlzLnJvdXRlJC5uZXh0KHRoaXMucm91dGUpO1xuICogICB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBFbnRyeVJvdXRpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICByZWdpc3RlclJvdXRpbmcoXG4gICAgb3V0Z29pbmdSb3V0ZSQ6IFN1YmplY3Q8Um91dGVyRXZlbnQ+LFxuICAgIGluY29taW5nUm91dGUkOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD5cbiAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBpblN1YnNjcmlwdGlvbiA9IHRoaXMucmVnaXN0ZXJJbmNvbWluZ1JvdXRpbmcoaW5jb21pbmdSb3V0ZSQpO1xuICAgIGNvbnN0IG91dFN1YnNjcmlwdGlvbiA9IHRoaXMucmVnaXN0ZXJPdXRnb2luZ1JvdXRpbmcob3V0Z29pbmdSb3V0ZSQpO1xuICAgIHJldHVybiBpblN1YnNjcmlwdGlvbi5hZGQob3V0U3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHJlZ2lzdGVySW5jb21pbmdSb3V0aW5nKFxuICAgIGluY29taW5nUm91dGUkOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD5cbiAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gaW5jb21pbmdSb3V0ZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHJvdXRlKSA9PiB7XG4gICAgICBpZiAocm91dGUpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyb3V0ZSwgeyBzdGF0ZTogeyBmcm9tUGxhdGZvcm06IHRydWUgfSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyT3V0Z29pbmdSb3V0aW5nKG91dGdvaW5nUm91dGUkOiBTdWJqZWN0PFJvdXRlckV2ZW50Pik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50IGluc3RhbmNlb2YgUm91dGVzUmVjb2duaXplZCAmJlxuICAgICAgICAoIXRoaXMuaXNGcm9tUGxhdGZvcm0oKSB8fCBpc1JlZGlyZWN0KGV2ZW50KSlcbiAgICAgICkge1xuICAgICAgICBvdXRnb2luZ1JvdXRlJC5uZXh0KHtcbiAgICAgICAgICB1cmw6IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzLFxuICAgICAgICAgIHJlcGxhY2VVcmw6IGlzUmVkaXJlY3QoZXZlbnQpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzRnJvbVBsYXRmb3JtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5nZXRDdXJyZW50TmF2aWdhdGlvbigpPy5leHRyYXMuc3RhdGU/LmZyb21QbGF0Zm9ybTtcbiAgfVxufVxuIl19