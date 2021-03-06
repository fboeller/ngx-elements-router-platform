import { ApplicationRef, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
import * as ɵngcc0 from '@angular/core';
export declare class EntryZoneService {
    private zone;
    private applicationRef;
    constructor(zone: NgZone, applicationRef: ApplicationRef);
    registerZone(microtaskEmpty$$: Observable<Observable<void> | undefined>): Subscription;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EntryZoneService, never>;
}

//# sourceMappingURL=entry-zone.service.d.ts.map