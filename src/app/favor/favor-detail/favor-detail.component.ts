import { Component, OnInit, Input } from '@angular/core';
import { Favor } from '../favor';

@Component({
  selector: 'app-favor-detail',
  templateUrl: './favor-detail.component.html',
  styleUrls: ['./favor-detail.component.css']
})
export class FavorDetailComponent implements OnInit {

  @Input() favorDetail:Favor;

  constructor() { }

  ngOnInit() {
    console.log(this.favorDetail.id);
  }

}
