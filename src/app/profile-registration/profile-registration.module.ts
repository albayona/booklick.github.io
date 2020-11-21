import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRegistrationComponent } from './profile-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'neighborhoods/:id/:log/newProfile',
    component: ProfileRegistrationComponent,
    children: [
      { path: '', component: ProfileRegistrationComponent }
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
  declarations: [ProfileRegistrationComponent],
  exports:[ProfileRegistrationComponent]
})
export class ProfileRegistrationModule { }
