import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';
import { Location } from '../location';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) {}
  neighId: number;
  colors: Array<string> = [
    '#FF99F0',
    '#481d52',
    '#315298',
    '#37C9F4',
    '#f22727',
    '#102b57',
    '#2eba17',
    '#006c7d',
    '#f5da44',
    '#f45b18',
    '#e50f55',
    '#f26744',
    '#f05bb4',
    '#779ce7',
    '#2c2d42',
    '#816aec',
    '#00512d',
    '#d63f44',
    '#a580ce',
    '#ffa3ae',
  ];
  public locations: Location[];

  getResidents() {
    this.locationService.getLocations(this.neighId).subscribe((locations) => {
      this.locations = locations;
    });
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getResidents();
  }
}
