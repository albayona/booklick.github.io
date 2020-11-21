import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupRegistrationComponent} from './group-registration/group-registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {LoginResgistrationComponent} from "../login-resgistration/login-resgistration.component";
import {GroupRegistrationRoutingModule} from "./group-registration-routing.module";


@NgModule({
  declarations: [GroupRegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GroupRegistrationRoutingModule
  ],

})
export class GroupRegistrationModule {
}
