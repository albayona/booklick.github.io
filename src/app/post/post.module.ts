import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostCommentComponent} from './post-comment/post-comment.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PostCommentCreateComponent} from './post-comment-create/post-comment-create.component';
import {PostCommentEditComponent} from './post-comment-edit/post-comment-edit.component';
import {PostCommentDeleteComponent} from './post-comment-delete/post-comment-delete.component';
import {PostDeleteComponent} from './post-delete/post-delete.component';
import {SpacerComponent} from "./spacer/spacer.component";
import {VisibleWith} from "../shared/visible-with";
import {PostListRoutingModule} from "./post-list/post-list-routing.module";
import {PostCreateComponent} from './post-create/post-create.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    NgbModule,
    PostListRoutingModule,
    NgSelectModule,
    BrowserModule,
    ReactiveFormsModule,

  ],
  declarations: [VisibleWith, SpacerComponent, PostListComponent, PostDetailComponent, PostCommentComponent, PostCommentCreateComponent, PostCommentEditComponent, PostCommentDeleteComponent, PostDeleteComponent, PostCreateComponent],
  exports: [PostListComponent, SpacerComponent, VisibleWith, PostCreateComponent, PostDetailComponent]
})
export class PostModule {
}
