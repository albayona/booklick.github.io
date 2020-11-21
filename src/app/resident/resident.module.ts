import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResidentListComponent} from "./resident-list/resident-list.component";
import { ResidentRoutingModule } from './resident-routing.module';



@NgModule({
  declarations: [ResidentListComponent],
  exports: [
    ResidentListComponent
  ],
  imports: [
    CommonModule,
    ResidentRoutingModule

  ]
})
export class ResidentModule { }
