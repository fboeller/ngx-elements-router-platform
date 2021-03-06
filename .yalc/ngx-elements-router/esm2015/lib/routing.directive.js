import { Directive, ElementRef, HostListener, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
export class RoutingDirective {
    constructor(element, router, route) {
        this.element = element;
        this.router = router;
        this.route = route;
        this.destroyed$ = new Subject();
    }
    ngOnInit() {
        this.route.url
            .pipe(map(() => this.router.url), takeUntil(this.destroyed$))
            .subscribe((url) => (this.element.nativeElement.route = url));
    }
    ngOnDestroy() {
        this.destroyed$.next();
    }
    handleRouteChange(event) {
        this.navigateToUrl(event === null || event === void 0 ? void 0 : event.detail);
    }
    navigateToUrl(event) {
        if ((event === null || event === void 0 ? void 0 : event.url) && event.url.startsWith('/')) {
            this.router.navigateByUrl(event.url, {
                replaceUrl: event.replaceUrl || false,
            });
        }
        else {
            console.warn(`The aerRouting directive received an invalid router event.`, event);
        }
    }
}
RoutingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aerRouting]',
            },] }
];
RoutingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Router },
    { type: ActivatedRoute }
];
RoutingDirective.propDecorators = {
    handleRouteChange: [{ type: HostListener, args: ['routeChange', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWxlbWVudHMtcm91dGVyL3NyYy9saWIvcm91dGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBSUgsTUFBTSxPQUFPLGdCQUFnQjtJQUczQixZQUNVLE9BQW1CLEVBQ25CLE1BQWMsRUFDZCxLQUFxQjtRQUZyQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUx2QixlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQU10QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzthQUNYLElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDM0I7YUFDQSxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxpQkFBaUIsQ0FBQyxLQUErQjtRQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQThCO1FBQzFDLElBQUksQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsR0FBRyxLQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ25DLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUs7YUFDdEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNERBQTRELEVBQzVELEtBQUssQ0FDTixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7WUEzQkMsVUFBVTtZQUthLE1BQU07WUFBdEIsY0FBYzs7O2dDQTZDcEIsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGVyRXZlbnQgfSBmcm9tICcuL3JvdXRlci1ldmVudC50eXBlJztcblxuLyoqXG4gKiBFbmFibGVzIHRoZSByb3V0aW5nIGZlYXR1cmUgb24gYSBjdXN0b20gZWxlbWVudC5cbiAqIEl0IHBhc3NlcyB0aGUgYWN0aXZhdGVkIHJvdXRlIGludG8gdGhlIGN1c3RvbSBlbGVtZW50IGFuZCBsaXN0ZW5zIHRvIHJvdXRlIGNoYW5nZXMgb2YgdGhlIGN1c3RvbSBlbGVtZW50LlxuICogVGhlIGN1c3RvbSBlbGVtZW50IG5lZWRzIHRvIGRlZmluZSBhbiBpbnB1dCBgcm91dGVgIGFuZCBhbiBvdXRwdXQgYHJvdXRlQ2hhbmdlYC5cbiAqXG4gKiBgYGBcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWN1c3RvbS1lbGVtZW50LWhvc3QnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxteS1jdXN0b20tZWxlbWVudCBhZXJSb3V0aW5nPjwvbHgtY3VzdG9tLWVsZW1lbnQ+XG4gKiAgIGBcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTXlDdXN0b21FbGVtZW50SG9zdENvbXBvbmVudCB7fVxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thZXJSb3V0aW5nXScsXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGUudXJsXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMucm91dGVyLnVybCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh1cmwpID0+ICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yb3V0ZSA9IHVybCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3JvdXRlQ2hhbmdlJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlUm91dGVDaGFuZ2UoZXZlbnQ6IHsgZGV0YWlsPzogUm91dGVyRXZlbnQgfSk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGVUb1VybChldmVudD8uZGV0YWlsKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG9VcmwoZXZlbnQ6IFJvdXRlckV2ZW50IHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50Py51cmwgJiYgZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChldmVudC51cmwsIHtcbiAgICAgICAgcmVwbGFjZVVybDogZXZlbnQucmVwbGFjZVVybCB8fCBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUaGUgYWVyUm91dGluZyBkaXJlY3RpdmUgcmVjZWl2ZWQgYW4gaW52YWxpZCByb3V0ZXIgZXZlbnQuYCxcbiAgICAgICAgZXZlbnRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=