import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginResgistrationComponent } from './login-resgistration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'newLogin',
    component: LoginResgistrationComponent,
    children: [
      { path: '', component: LoginResgistrationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NeighborhoodModule,
    ReactiveFormsModule
  ],
  declarations: [LoginResgistrationComponent],
  exports: [LoginResgistrationComponent]

})
export class LoginResgistrationModule { }
