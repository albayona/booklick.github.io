import {Component, Input, OnInit} from '@angular/core';
import {CommentP} from "../commentP";
import {humanized_time_span} from "../post-detail/post-detail.component";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  constructor() { }

  @Input() comments: CommentP[];


  public isCollapsed = true;

  currentComment: CommentP;

  updateComments(comments:CommentP[]): void {
    this.comments = comments;
  }



  getDate(date: string): string {
    return humanized_time_span(new Date(date.toString().replace("[UTC]", "")).toDateString(), new Date().toLocaleDateString(), "custom_date_formats", null);
  }


  ngOnInit(){
    this.currentComment = new CommentP();
    this.isCollapsed = true;
  }
}
