import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Location } from '../location/location';
import { Router } from '@angular/router';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';
import { LocationService } from '../location/location.service';

@Component({
  selector: 'app-location-registration',
  templateUrl: './location-registration.component.html',
  styleUrls: ['./location-registration.component.css'],
})
export class LocationRegistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private locationService: LocationService,
    private router: Router
  ) {}

  neighborhoods: Array<Neighborhood>;

  locationForm = new FormGroup({
    name: new FormControl(null),
    address: new FormControl(null),
    openTime: new FormControl(null),
    closeTime: new FormControl(null),
    latitude: new FormControl(null),
    longitude: new FormControl(null),
    neighborhood: new FormControl(null),
  });

  getNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      // this.neighborhoods = neighborhoods.slice(0,4);
      this.neighborhoods = neighborhoods;
    });
  }

  onSubmit(): void {
    console.log(
      'Name:' +
        this.locationForm.get('name').value +
        '\n' +
        'Address:' +
        this.locationForm.get('address').value +
        '\n' +
        'Open Time:' +
        this.locationForm.get('openTime').value +
        '\n' +
        'Close Time:' +
        this.locationForm.get('closeTime').value +
        '\n' +
        'Latitude:' +
        this.locationForm.get('latitude').value +
        '\n' +
        'Longitude:' +
        this.locationForm.get('longitude').value +
        '\n' +
        'Neighborhood:' +
        this.locationForm.get('neighborhood').value
    );
    this.addLocation();
  }

  converTimeTo12Hr(time: string): string {
    var hour = +time.split(':')[0];
    var minute = +time.split(':')[1];

    var time: string;
    var end: string;

    if (hour >= 0 && hour <= 11) {
      end = ' AM';
      if (hour === 0) {
        hour += 12;
      }
    } else {
      if (hour > 12) {
        hour -= 12;
      }
      end = ' PM';
    }
    if (minute >= 0 && minute <= 9) {
      time = `${hour}:0${minute + end}`;
    } else {
      time = `${hour}:${minute + end}`;
    }

    console.log(time);
    return time;
  }

  addLocation(): void {
    var name: string = this.locationForm.value.name;
    var address: string = this.locationForm.value.address;
    var openTime: string = this.locationForm.value.openTime;
    var closeTime: string = this.locationForm.value.closeTime;
    var latitude: number = this.locationForm.value.latitude;
    var longitude: number = this.locationForm.value.longitude;
    var neighborhood: number = this.locationForm.value.neighborhood;

    openTime = this.converTimeTo12Hr(openTime);
    closeTime = this.converTimeTo12Hr(closeTime);

    var location: Location = new Location(
      name,
      address,
      openTime,
      closeTime,
      latitude,
      longitude
    );

    console.log(location);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var locationName = this.locationForm.value.name;

    var observable = this.locationService
      .addLocation(neighborhood, location)
      .subscribe(
        () => {
          this.locationForm.reset();
          this.locationForm.controls.neighborhood.setValue('Choose...');
          this.toastr.success(
            `The location "${locationName}" was added to the neighborhood.`,
            'Success',
            toastrConfig
          );
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 2300);
        },
        () => {
          this.locationForm.reset();
        }
      );
  }

  ngOnInit() {
    this.getNeighborhoods();
  }
}
