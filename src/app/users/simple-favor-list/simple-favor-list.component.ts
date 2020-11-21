import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

import {Favor} from "../../favor/favor";
import {FavorService} from "../../favor/favor.service";
import {delay} from "rxjs/operators";



@Component({
  selector: 'app-simple-favor-list',
  templateUrl: './simple-favor-list.component.html',
  styleUrls: ['./simple-favor-list.component.css']
})
export class SimpleFavorListComponent implements OnInit {

  constructor(private  favorService: FavorService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
  ) {

    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }


  favors: Array<Favor>;
  @Input()
  neighborhood_id: number;

  navigationSubscription;


  updateSpacers(id) {
    delay(100);
    document.getElementById(id + 'f').remove();
  }


  getFavors()
    :
    void {
    this.favorService.getFavors(this.neighborhood_id)
      .subscribe(posts => {
        this.favors = posts;
      });
  }


  ngOnInit() {

    this.neighborhood_id = +this.route.root.firstChild.firstChild.snapshot.paramMap.get("id");
    this.toastrService.success("Simple list on");

    this.getFavors();


  }


}
