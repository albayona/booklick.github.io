import { Component, OnInit } from '@angular/core';
import {NeighborhoodService} from "../../neighborhood/neighborhood.service";
import {ActivatedRoute} from "@angular/router";
import {Neighborhood} from "../../neighborhood/neighborhood";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private neighborhoodService: NeighborhoodService,
    private route: ActivatedRoute
  ) {}

  neighborhood: Neighborhood;
  name: string;
  neighId: number;
  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    console.log(+this.route.snapshot.paramMap.get('id'));
    this.getNeighborhood(this.neighId);
  }

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((neighborhood) => {
        this.neighborhood = neighborhood;
        this.name = neighborhood.name;
      });
    return this.neighborhood;
  }
}
