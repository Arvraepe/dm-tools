import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dm-entity-host]',
})
export class DynamicEntityDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
