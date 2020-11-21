import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

import {delay} from "rxjs/operators";
import {Booklist} from "../Booklist";
import {ContentService} from "../../post/content.service";
import {Content} from "../../post/content";
import {PostCommentCreateComponent} from "../../post/post-comment-create/post-comment-create.component";
import {PostListComponent} from "../../post/post-list/post-list.component";


@Component({
  selector: 'app-simple-favor-list',
  templateUrl: './simple-favor-list.component.html',
  styleUrls: ['./simple-favor-list.component.css']
})
export class SimpleFavorListComponent implements OnInit {
  private selected: Content[];

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private service: ContentService
  ) {

    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }


  boocklists: Booklist[];
  @Input() type: string;
  @Input() emptyMessage: string;

  navigationSubscription;

  @ViewChild(PostListComponent, {static: true}) listComponent: PostListComponent;


  updateSpacers(id) {
    delay(100);
    document.getElementById(id + 'f' + this.type).remove();
  }


  ngOnInit() {


    console.log("Booklists init")

    this.getBooklsists();

    console.log(this.boocklists)
    if (this.type == 'color1') {


      var items: any = document.getElementsByClassName('color1');
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.background = '#ff0065';
      }


    } else if (this.type == 'color2') {

      var items: any = document.getElementsByClassName('color2');
      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        element.style.background = '#23f761';
      }
    }

    this.service
      .getBooklists()
      .subscribe((obj) => {
        this.boocklists = obj.message;
        console.log(this.boocklists);
      });

  }

  private getBooklsists() {
    this.service
      .getBooklists()
      .subscribe((obj) => {
        this.boocklists = obj.message;
        console.log("dasdas");
        console.log(obj);
        console.log(this.boocklists);

        this.selected = []
        if (this.boocklists != undefined) {

          this.selected = this.boocklists[0].contents
        }

      });
  }

  onSelected(name) {
    this.selected = [];
    for (let i = 0; i < this.boocklists.length ; i++) {

      let booklist = this.boocklists[i];
      if (booklist.name == name){
        this.selected = booklist.contents
        this.listComponent.updatePosts(this.selected)
      }
    }
  }
}
