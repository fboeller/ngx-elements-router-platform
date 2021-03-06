import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterEvent } from './router-event.type';
/**
 * Enables the routing feature on a custom element.
 * It passes the activated route into the custom element and listens to route changes of the custom element.
 * The custom element needs to define an input `route` and an output `routeChange`.
 *
 * ```
 * @Component({
 *   selector: 'my-custom-element-host',
 *   template: `
 *     <my-custom-element aerRouting></lx-custom-element>
 *   `
 * })
 * export class MyCustomElementHostComponent {}
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export declare class RoutingDirective implements OnInit, OnDestroy {
    private element;
    private router;
    private route;
    private destroyed$;
    constructor(element: ElementRef, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleRouteChange(event: {
        detail?: RouterEvent;
    }): void;
    navigateToUrl(event: RouterEvent | undefined): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<RoutingDirective, "[aerRouting]", never, {}, {}, never>;
}

//# sourceMappingURL=routing.directive.d.ts.map