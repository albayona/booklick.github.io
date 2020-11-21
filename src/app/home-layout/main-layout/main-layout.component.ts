import {Component, ContentChild, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {PostListComponent} from "../../post/post-list/post-list.component";
import {MethodInvocationService} from "../../shared/method-invocation.service";
import {ActivatedRoute, Router, UrlTree} from "@angular/router";
import {ResidentService} from "../../home/resident.service";
import {PostCommentComponent} from "../../post/post-comment/post-comment.component";
import {HomeComponent} from "../../home/home.component";
import {Sidebar} from "primeng/primeng";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";
import {Test} from "../../home/test";
import {ContentService} from "../../post/content.service";
import {LoginService} from "../../login/login.service";


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnChanges {

  searchModel: string;
  searchType: string;
  neigh_id: number;
  resident_id: number;
  private tree: UrlTree;

  authUser: Test;
  @ContentChild(PostListComponent, {static: true}) posts: PostListComponent;
  @ViewChild(HomeComponent, {static: true}) home: HomeComponent;

  update(): void {
  }

  constructor(private toastrService: ToastrService,
              private invocationService: MethodInvocationService,
              private route: ActivatedRoute,
              private service: ResidentService,
              private router: Router,
              private authService: SimpleAuthService,
              private logService: LoginService,
              private content: ContentService,
              private toast: ToastrService
  ) {
    console.log('Main layout constructor called');
  }

  ngOnInit() {
    console.log(this.route.root.snapshot.url);
    this.searchModel = "";
    this.authUser = new Test()
    // this.getAuthUser();
    // this.tree = this.router.parseUrl(this.router.url);
    // this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    // this.resident_id = +this.tree.root.children['primary'].segments[3].path;

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  clickMe() {
    this.invocationService.sendClickEvent();
  }


  setType(t) {
    this.searchType = t;
  }

  test() {
    this.toastrService.success(this.searchModel);
    this.toastrService.success(this.searchType);
  }

  getAuthUser() {
    this.authUser = new Test();

    // this.authService.getAuthUser().subscribe(value => {
    //   this.authUser = value
    // });


  }

  logOut() {


    this.logService.logout().subscribe(value => {
      localStorage.clear()
      this.toast.info("Session closed successfully")
    });;
  }
}
