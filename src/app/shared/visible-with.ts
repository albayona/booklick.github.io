import {Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Inject} from '@angular/core';
import {take, filter} from 'rxjs/operators';
import {VisibilityService} from "./visibility-service.service";
import {DOCUMENT} from "@angular/common";


@Directive({selector: '[visibleWith]'})
export class VisibleWith {

  constructor(
    @Inject(DOCUMENT) document: any,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private visibilityService: VisibilityService) {
  }


  @Input()
  set visibleWith(elementID) {

    if (document.getElementById(elementID) != null) {
      this.visibilityService
        .elementInSight(new ElementRef(document.getElementById(elementID)))
        .pipe(filter(visible => visible), take(1))
        .subscribe(() => {
          this.viewContainer.createEmbeddedView(this.templateRef);
        });
    }


  }

}
