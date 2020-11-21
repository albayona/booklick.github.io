import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Pipe,
  ViewChild
} from '@angular/core';
import {PostService} from "../post.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Content} from "../content";
import {PostCommentComponent} from "../post-comment/post-comment.component";
import {PostCommentCreateComponent} from "../post-comment-create/post-comment-create.component";
import {ContentDetail} from "../content-detail";
import {Observable} from "rxjs";
import {CommentP} from "../commentP";
import {Test} from "../../home/test";
import {ResidentService} from "../../home/resident.service";
import {UserDetail} from "../../home/user-detail";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy, AfterContentChecked {
  private canEdit: boolean;


  constructor(private  postService: PostService,
              private residentService: ResidentService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private cdRef: ChangeDetectorRef,
              private authService: SimpleAuthService,
  ) {
    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  navigationSubscription;
  @Input() content: ContentDetail;
  @Output() init = new EventEmitter();
  viewers: Test[];
  numViewers: number
  searchModel: string;
  selected: Test[];
  residents: Test[];

  album: string[]

  @ViewChild(PostCommentComponent, {static: true}) commentComponent: PostCommentComponent;
  @ViewChild(PostCommentCreateComponent, {static: true}) commentCreateComponent: PostCommentCreateComponent;


  toggleComments(): void {
    if (this.commentCreateComponent.isCollapsed == false) {
      this.commentCreateComponent.isCollapsed = true;
    }
    this.commentComponent.isCollapsed = !this.commentComponent.isCollapsed;
  }

  toggleCreateComments(): void {
    if (this.commentComponent.isCollapsed == false) {
      this.commentComponent.isCollapsed = true;
    }
    this.commentCreateComponent.isCollapsed = !this.commentCreateComponent.isCollapsed;
  }

  updateComments(): void {
    this.getPostDetail();

    this.commentComponent.updateComments(this.content.comments);
    this.commentComponent.isCollapsed = false;
    this.commentCreateComponent.isCollapsed = true;
  }

  addLike(): void {

    // this.postService.getpostDetail(this.neighborhood_id, this.post_id)
    //   .subscribe(postDetail => {
    //     postDetail.numberOfLikes++;
    //     this.postService.updatepost(this.neighborhood_id, postDetail).subscribe();
    //   });

    this.getPostDetail();

  }


  getPostDetail(): void {

    // this.postService.getpostDetail(this.neighborhood_id, this.post_id)
    //   .subscribe(postDetail => {
    //     this.postDetail = postDetail;
    //   });

    this.content = new ContentDetail();

  }


  getOtherPosts(): void {
    // this.postService.getposts(this.neighborhood_id)
    //   .subscribe(posts => {
    //     this.others = posts;
    //     this.others = this.others.filter(posts => posts.id !== this.post_id);
    //   });
  }

  getViewers(): void {
    // this.postService.getViewers(this.neighborhood_id, this.post_id)
    //   .subscribe(viewers => {
    //     this.viewers = viewers;
    //     this.numViewers = this.viewers.length;
    //
    //     this.postService.getPotentialViewers(this.neighborhood_id, this.post_id)
    //       .subscribe(residents => {
    //         this.residents = residents;
    //       });
    //
    //   });
  }

  ngOnInit() {
    this.init.emit();
    console.log("Initiated: on demand")
    this.toastrService.success('Content initiated: on demand');

    this.album =   ["https://cdn.booklick.net/public/img/images/top-week-cover.png"]

  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
      this.navigationSubscription.unsubscribe();
    }
  }

  getEditable() {
    //
    // return this.authService.isOwner(this.postDetail.author.id).subscribe(value => {
    //   this.canEdit = value;
    //
    // });
    this.canEdit = true;
  }

  editable(): boolean {
    // this.authService.isOwner(this.postDetail.author.id).subscribe(value => {
    //   this.canEdit = value;
    // });
    // return this.canEdit;
    return true
  }

  addViewers() {

    //
    // this.postService.addViewers(this.content.author.id, this.content.id, this.viewers.concat(this.selected)).subscribe(() => {
    //   this.toastrService.success(this.selected.length + " viewers were successfully added", 'Viewers added');
    //   this.getViewers();
    //   this.numViewers = this.viewers.length;
    //
    // }, err => {
    //   this.toastrService.error(err, 'Error');
    // });
    //

  }


  getDate(date: string): string {


    return humanized_time_span(new Date(date.toString().replace("[UTC]", "")).toDateString(), new Date().toLocaleDateString(), "custom_date_formats", null);
  }


  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }


}


export function humanized_time_span(date, ref_date, date_formats, time_units) {

  return date;
}
