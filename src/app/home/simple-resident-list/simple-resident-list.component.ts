import {Component, Input, OnInit} from '@angular/core';
import {Resident} from "../resident";

@Component({
  selector: 'app-simple-resident-list',
  templateUrl: './simple-resident-list.component.html',
  styleUrls: ['./simple-resident-list.component.css']
})
export class SimpleResidentListComponent implements OnInit {

  searchModel: string;
  @Input() residents: Resident[];
  @Input() neighborhood_id: number

  constructor() {
  }

  ngOnInit() {
  }

}
