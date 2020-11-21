import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeighborhoodRegistrationComponent } from './neighborhood-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'newNeighborhood',
    component: NeighborhoodRegistrationComponent,
    children: [
      { path: '', component: NeighborhoodRegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [NeighborhoodRegistrationComponent],
  exports: [NeighborhoodRegistrationComponent,FormsModule,ReactiveFormsModule]
})
export class NeighborhoodRegistrationModule { }
