import { ApplicationRef, Injectable, NgZone } from '@angular/core';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
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
export class EntryZoneService {
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
EntryZoneService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EntryZoneService_Factory() { return new EntryZoneService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.ApplicationRef)); }, token: EntryZoneService, providedIn: "root" });
EntryZoneService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
EntryZoneService.ctorParameters = () => [
    { type: NgZone },
    { type: ApplicationRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnktem9uZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVsZW1lbnRzLXJvdXRlci9zcmMvbGliL2VudHJ5LXpvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLElBQVksRUFBVSxjQUE4QjtRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUU1RSxZQUFZLENBQ1YsZ0JBQTBEO1FBRTFELE9BQU8sZ0JBQWdCO2FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLEtBQUssQ0FBQyxDQUFDO2FBQzlELFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7WUFkRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUF6QkcsTUFBTTtZQUFsQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFJlZ2lzdGVycyB0aGUgem9uZSBmZWF0dXJlIG9uIHRoZSBlbnRyeSBjb21wb25lbnQgb2YgYSBtaWNybyBmcm9udGVuZC5cbiAqIEl0IGlzIGludGVuZGVkIHRvIGJlIHVzZWQgd2l0aCB0aGUgWm9uZURpcmVjdGl2ZSBvbiB0aGUgY3VzdG9tIGVsZW1lbnQuXG4gKiBUb2dldGhlciwgdGhleSBlbnN1cmUgdGhhdCB0aGUgY2hhbmdlIGRldGVjdGlvbiBjeWNsZXMgb2YgdGhlIEFuZ3VsYXIgYXBwbGljYXRpb24gb2YgYSBtaWNybyBmcm9udGVuZCBhcmUgZXhlY3V0ZWQuXG4gKiBUaGlzIGhhcHBlbnMsIHdoZW5ldmVyIHRoZSBgd2luZG93LlpvbmVgIG9iamVjdCBpbmRpY2F0ZXMgdGhlIG5lY2Vzc2l0eSBvZiBhIGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUuXG4gKlxuICogYGBgXG4gKiBleHBvcnQgY2xhc3MgRXhhbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAqICAgQElucHV0KCkgbWljcm90YXNrRW1wdHkkPzogT2JzZXJ2YWJsZTx2b2lkPjtcbiAqICAgbWljcm90YXNrRW1wdHkkJCA9IG5ldyBTdWJqZWN0PE9ic2VydmFibGU8dm9pZD4+KCk7XG4gKiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZW50cnlab25lU2VydmljZTogRW50cnlab25lU2VydmljZSkge1xuICogICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5lbnRyeVpvbmVTZXJ2aWNlLnJlZ2lzdGVyWm9uZSh0aGlzLm1pY3JvdGFza0VtcHR5JCQpO1xuICogICB9XG4gKiAgIG5nT25EZXN0cm95KCkge1xuICogICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKiAgIH1cbiAqICAgbmdPbkNoYW5nZXMoKSB7XG4gKiAgICAgdGhpcy5taWNyb3Rhc2tFbXB0eSQkLm5leHQodGhpcy5taWNyb3Rhc2tFbXB0eSQpO1xuICogICB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBFbnRyeVpvbmVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxuXG4gIHJlZ2lzdGVyWm9uZShcbiAgICBtaWNyb3Rhc2tFbXB0eSQkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8dm9pZD4gfCB1bmRlZmluZWQ+XG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1pY3JvdGFza0VtcHR5JCRcbiAgICAgIC5waXBlKHN3aXRjaE1hcCgobWljcm90YXNrRW1wdHkkKSA9PiBtaWNyb3Rhc2tFbXB0eSQgPz8gRU1QVFkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25SZWYudGljaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=