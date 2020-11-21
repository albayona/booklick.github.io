import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) {}

  neighId: number;
  locId: number;
  location: Location;
  name:string;
  openTime: string;
  closeTime:string;

  getLocation() {
    this.locationService.getLocationById(this.neighId,this.locId).subscribe((location) => {
      this.location = location;
      this.name = location.name;
    });
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.locId = +this.route.snapshot.paramMap.get('lid');
    this.getLocation();
  }
}
