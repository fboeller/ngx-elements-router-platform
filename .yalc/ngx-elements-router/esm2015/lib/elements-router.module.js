import { NgModule } from '@angular/core';
import { NoComponent } from './no.component';
import { RoutingDirective } from './routing.directive';
import { ZoneDirective } from './zone.directive';
export class ElementsRouterModule {
}
ElementsRouterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ZoneDirective, RoutingDirective, NoComponent],
                imports: [],
                exports: [ZoneDirective, RoutingDirective, NoComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMtcm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lbGVtZW50cy1yb3V0ZXIvc3JjL2xpYi9lbGVtZW50cy1yb3V0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7Z0JBQzVELE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm9Db21wb25lbnQgfSBmcm9tICcuL25vLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0aW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9yb3V0aW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBab25lRGlyZWN0aXZlIH0gZnJvbSAnLi96b25lLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1pvbmVEaXJlY3RpdmUsIFJvdXRpbmdEaXJlY3RpdmUsIE5vQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtab25lRGlyZWN0aXZlLCBSb3V0aW5nRGlyZWN0aXZlLCBOb0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRzUm91dGVyTW9kdWxlIHt9XG4iXX0=