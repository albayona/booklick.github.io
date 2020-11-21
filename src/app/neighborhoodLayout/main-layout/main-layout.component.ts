import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";
import {NeighborhoodService} from "../../neighborhood/neighborhood.service";
import {Neighborhood} from "../../neighborhood/neighborhood";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private neighborhoodService: NeighborhoodService,
    private authService: SimpleAuthService,
  ) {}

  neighId: number;
  neighborhood: Neighborhood;
  neighName:string;

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((neighborhood) => {
        this.neighborhood = neighborhood;
        this.neighName = neighborhood.name;
      });
    return this.neighborhood;
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    console.log(+this.route.snapshot.paramMap.get('id'));
    this.getNeighborhood(this.neighId);
  }
}
