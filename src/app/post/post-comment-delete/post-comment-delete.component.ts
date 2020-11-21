import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-comment-delete',
  templateUrl: './post-comment-delete.component.html',
  styleUrls: ['./post-comment-delete.component.css']
})
export class PostCommentDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()  post_id: number;

  @Input() comment_id: number;

}
