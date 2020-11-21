import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ContentService} from "../../post/content.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";
import {MethodInvocationService} from "../../shared/method-invocation.service";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";
import {Content} from "../../post/content";
import {Subscription} from "rxjs";
import {Test} from "../../home/test";
import {delay} from "rxjs/operators";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit, OnChanges {


  constructor(private contentService: ContentService,
              private toastrService: ToastrService,
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


  }


contents: Content[];
  navigationSubscription;
  invocationSubscription: Subscription;

  @Input() searchModel: string;
  @Input() url: string;
  tree: UrlTree;
  authUser: Test;

  ngOnInit() {
    this.url = this.router.url;

      this.getContents();

  }

  ngOnChanges() {
    this.ngOnInit();
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


  updateSpacers(id) {
    delay(100);
    document.getElementById(id + 'ss').remove();
  }

}

