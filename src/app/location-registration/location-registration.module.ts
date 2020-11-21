import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRegistrationComponent } from './location-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from '../neighborhoodLayout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'newLocation',
    component: LocationRegistrationComponent,
    children: [{ path: '', component: LocationRegistrationComponent }],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NeighborhoodModule,
    ReactiveFormsModule,
  ],
  declarations: [LocationRegistrationComponent],
})
export class LocationRegistrationModule {}
