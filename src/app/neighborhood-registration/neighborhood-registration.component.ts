import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { Observable } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-neighborhood-registration',
  templateUrl: './neighborhood-registration.component.html',
  styleUrls: ['./neighborhood-registration.component.css'],
})
export class NeighborhoodRegistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private router: Router
  ) {}


  // list of localities acceptable
  localities: Array<string> = [
    'Antonio Narinño',
    'Barrios Unidos',
    'Bosa',
    'Chapinero',
    'Ciudad Bolívar',
    'Engativá',
    'Fontibón',
    'Kennedy',
    'La Candelaria',
    'Los Mártires',
    'Puente Aranda',
    'Rafael Uribe Uribe',
    'San Cristóbal',
    'Santa Fe',
    'Suba',
    'Sumapaz',
    'Teusaquillo',
    'Tunjuelito',
    'Usaquén',
    'Usme',
  ];

  neighborhoodForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    numberOfResidents: new FormControl('', [Validators.required]),
    locality: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log(
      'Name:' +
        this.neighborhoodForm.get('name').value +
        '\n' +
        'Locality:' +
        this.neighborhoodForm.get('locality').value +
        '\n' +
        'Capacity:' +
        this.neighborhoodForm.get('numberOfResidents').value
    );

    this.addNeighborhood();


  }

  addNeighborhood(): void {
    var name: string = this.neighborhoodForm.value.name;
    var numberOfResidents: number = this.neighborhoodForm.value
      .numberOfResidents;
    var locality: string = this.neighborhoodForm.value.locality;
    var neigh = new Neighborhood(3000, name, locality, numberOfResidents);

    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var neighName = this.neighborhoodForm.value.name;
    var observable = this.neighborhoodService
      .addNeighborhood(neigh)
      .subscribe(() => {
        this.neighborhoodForm.reset();
        this.neighborhoodForm.controls.locality.setValue('Choose...');
        this.toastr.success(
          'The neighborhood ' + neighName + " was added.",
          'Success',toastrConfig
        );
        setTimeout(() => {
          this.router.navigateByUrl('/');
      }, 2300);
      });
  }

  ngOnInit() {}
}
