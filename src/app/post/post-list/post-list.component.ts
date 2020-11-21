import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {Content} from "../content";
import {PostService} from "../post.service";
import {PostFilterPipe} from "../../shared/post-title-filter.pipe";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {PostCommentComponent} from "../post-comment/post-comment.component";
import {SpacerComponent} from "../spacer/spacer.component";
import {delay} from "rxjs/operators";
import {MethodInvocationService} from "../../shared/method-invocation.service";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";
import {ContentDetail} from "../content-detail";
import {Test} from "../../home/test";
import {ContentService} from "../content.service";
import {CommentP} from "../commentP";


declare var $: any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostFilterPipe],

})


export class PostListComponent implements OnInit, OnChanges {


  constructor(private contentService: ContentService,
              private toastrService: ToastrService,
              private filterPipe: PostFilterPipe,
              private router: Router,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private invocationService: MethodInvocationService,
              private authService: SimpleAuthService) {
    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

    this.invocationSubscription = this.invocationService.getClickEvent().subscribe(() => {
      this.filter(this.searchModel);
    });

  }


  @Input() contents: Content[];
  @Input() originals: Content[];
  navigationSubscription;
  invocationSubscription: Subscription;
  @Input() neigh_id: number;
  @Input() notRouted: boolean;
  @Input() contentsByInput: boolean;
  @Input() searchModel: string;
  @Input() url: string;
  tree: UrlTree;
  authUser: Test;

  ngOnInit() {
    this.url = this.router.url;
    this.tree = this.router.parseUrl(this.url);
    this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    this.getUser();

     if (!this.contentsByInput) {
        this.getContents();
      }

  }


  updateContents(p:Content[]): void {
    this.contents = p;
  }


  updatePosts(posts) {
    this.contents = posts
  }

  ngOnChanges() {

    this.filter(this.searchModel);
    this.ngOnInit();
  }

  getGenericPostsByURL() {
    this.contentService.getGenericContents(this.url).subscribe(cs => {

      this.contents = cs;

    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');

    });

  }



  getContents() {
    this.contentService.getContents().subscribe(cs => {
      this.contents = cs.contents;
    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');
    });

  }

  getUser() {
    this.authService.getAuthUser().subscribe(cs => {
      this.authUser = cs;

    }, err => {

      this.toastrService.error(JSON.stringify(err), 'Error');
    });


  }


  sortAsc() {
    this.contents.sort((t1, t2) => {
      const name1 = t1.title;
      const name2 = t2.title;
      if (name1 > name2) {
        return 1;
      }
      if (name1 < name2) {
        return -1;
      }
      return 0;
    });

  }

  sortDesc() {
    this.contents.sort((t1, t2) => {
      const name1 = t1.title;
      const name2 = t2.title;
      if (name1 > name2) {
        return -1;
      }
      if (name1 < name2) {
        return 1;
      }
      return 0;
    });

  }

  sortDescDate() {
    this.contents.sort((t1, t2) => {

      if (t1.year < t2.year) {
        return 1;
      }
      if (t1.year >= t2.year) {
        return -1;
      }
      return 0;
    });

  }


  filter(value: string) {
    this.contents = this.filterPipe.transform(this.originals, value);
  }


  updateSpacers(id) {
    delay(100);
    document.getElementById(id + 's').remove();
  }

  canEdit(author): boolean {
    return this.authUser.id = author.id;
  }

  canView(posts: ContentDetail): boolean {
    let b: boolean
    b = false;

    this.authService.getAuthId().subscribe(value => {
        if (posts.viewers.map(value => value.id).indexOf(value) >= 0) b = true;
      }
    )

    // if (this.authUser.id == posts.author.id) b = true;

    console.log(posts.viewers)
    console.log(b)
    console.log(b)
    return b;
  }

}

