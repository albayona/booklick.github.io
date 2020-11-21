import {AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {startWith, tap} from "rxjs/operators";


@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.css']
})
/**
 * @author albayona
 */
export class SpacerComponent implements OnInit, AfterContentChecked {

 @Input() public spacersNumber: number;

  collection: Array<number>;
  constructor(private ref: ChangeDetectorRef) {
  }

  isCollapsed: boolean;


  ngOnInit() {
    this.isCollapsed = true;
    this.collection = Array(this.spacersNumber);
  }


  update(n){
      this.spacersNumber = n;
      this.isCollapsed = true;
      this.collection = Array(this.spacersNumber);
  }

  ngAfterContentChecked(): void {
    this.ngOnInit()

  }


}
