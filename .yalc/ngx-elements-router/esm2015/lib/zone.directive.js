import { Directive, ElementRef, NgZone } from '@angular/core';
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
export class ZoneDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
    }
    ngOnInit() {
        this.element.nativeElement.microtaskEmpty$ = this.zone.onMicrotaskEmpty;
    }
}
ZoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aerZone]',
            },] }
];
ZoneDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWxlbWVudHMtcm91dGVyL3NyYy9saWIvem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXRFOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBSUgsTUFBTSxPQUFPLGFBQWE7SUFDeEIsWUFBb0IsT0FBbUIsRUFBVSxJQUFZO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUVqRSxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDMUUsQ0FBQzs7O1lBUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7WUFuQm1CLFVBQVU7WUFBRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEVuYWJsZXMgdGhlIHpvbmUgZmVhdHVyZSBvbiBhIGN1c3RvbSBlbGVtZW50LlxuICogSXQgcGFzc2VzIGFuIG9ic2VydmFibGUgb2YgYWxsIGV2ZW50cyB3aGVyZSB0aGUgZ2xvYmFsIGB3aW5kb3cuWm9uZWAgb2JqZWN0IHJlcG9ydGVkIHRoYXQgdGhlIG1pY3JvdGFzayBxdWV1ZSBpcyBlbXB0eS5cbiAqIFN1Y2ggYW4gZXZlbnQgaW5kaWNhdGVzIHRvIEFuZ3VsYXIgdGhhdCBhIGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgbmVlZHMgdG8gYmUgcnVuLlxuICpcbiAqIGBgYFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktY3VzdG9tLWVsZW1lbnQtaG9zdCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPG15LWN1c3RvbS1lbGVtZW50IGFlclpvbmU+PC9seC1jdXN0b20tZWxlbWVudD5cbiAqICAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeUN1c3RvbUVsZW1lbnRIb3N0Q29tcG9uZW50IHt9XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FlclpvbmVdJyxcbn0pXG5leHBvcnQgY2xhc3MgWm9uZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQubWljcm90YXNrRW1wdHkkID0gdGhpcy56b25lLm9uTWljcm90YXNrRW1wdHk7XG4gIH1cbn1cbiJdfQ==