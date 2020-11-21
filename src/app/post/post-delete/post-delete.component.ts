import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  constructor() { }

  @Input() post_id: number;

  ngOnInit() {
  }

}
