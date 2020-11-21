import {Component, Input, OnInit} from '@angular/core';
import {Test} from "../test";

@Component({
  selector: 'app-simple-resident-list',
  templateUrl: './simple-resident-list.component.html',
  styleUrls: ['./simple-resident-list.component.css']
})
export class SimpleUserListComponent implements OnInit {

  searchModel: string;
  @Input() residents: Test[];
  @Input() neighborhood_id: number

  constructor() {
  }

  ngOnInit() {
  }

}
