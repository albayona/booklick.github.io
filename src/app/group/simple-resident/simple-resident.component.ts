import {Component, Input, OnInit} from '@angular/core';
import {Resident} from "../../home/resident";

@Component({
  selector: 'app-simple-resident',
  templateUrl: './simple-resident.component.html',
  styleUrls: ['./simple-resident.component.css']
})
export class SimpleResidentComponent implements OnInit {

  constructor() { }

  @Input() resident: Resident;

  ngOnInit() {
  }

}
