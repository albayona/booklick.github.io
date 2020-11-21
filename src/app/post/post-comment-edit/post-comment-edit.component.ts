import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-comment-edit',
  templateUrl: './post-comment-edit.component.html',
  styleUrls: ['./post-comment-edit.component.css']
})
export class PostCommentEditComponent implements OnInit {

  @Input()  post_id: number;

  @Input() comment_id: number;

  constructor() { }


  ngOnInit() {
  }

}
