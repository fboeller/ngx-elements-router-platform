import { ElementRef, NgZone, OnInit } from '@angular/core';
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
import * as ɵngcc0 from '@angular/core';
export declare class ZoneDirective implements OnInit {
    private element;
    private zone;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ZoneDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ZoneDirective, "[aerZone]", never, {}, {}, never>;
}

//# sourceMappingURL=zone.directive.d.ts.map