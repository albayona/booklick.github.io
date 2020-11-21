import {Component, ContentChild, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {PostListComponent} from "../../post/post-list/post-list.component";
import {MethodInvocationService} from "../../shared/method-invocation.service";
import {HomeComponent} from "../../home/home.component";
import {ActivatedRoute, Router, UrlTree} from "@angular/router";
import {ResidentService} from "../../home/resident.service";
import {Resident} from "../../home/resident";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";
import {Login} from "../../login/login";
import {LoginService} from "../../login/login.service";


@Component({
  selector: 'app-main-layout2',
  templateUrl: './main-layout.component2.html',
  styleUrls: ['./main-layout.component2.css']
})
export class MainLayoutComponent2 implements OnInit, OnChanges {

  searchModel: string;
  searchType: string;
  neigh_id: number;
  group_id: number;
  authUser: Resident;

  @ContentChild(PostListComponent, {static: true}) posts: PostListComponent;
    @ViewChild(HomeComponent, {static: true}) home: HomeComponent;
  private tree: UrlTree;

  update(): void {
  }

  constructor(private toastrService: ToastrService,
              private invocationService: MethodInvocationService,
              private route: ActivatedRoute,
              private service: ResidentService,
              private router: Router,
              private authService: SimpleAuthService,
              private logService: LoginService,
              private toast: ToastrService
  ) {
  }

  ngOnInit() {
    this.searchModel = "";
    this.getAuthUser();
    this.tree = this.router.parseUrl(this.router.url);
    this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    this.group_id = +this.tree.root.children['primary'].segments[3].path;

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
    this.authUser = new Resident();
  }

  logOut() {
    this.logService.logout().subscribe(value => {
      localStorage.clear()
      this.toast.info("Session closed successfully")
    });;

  }
}
