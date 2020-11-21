import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SimpleFavorListComponent } from './simple-favor-list/simple-favor-list.component';

import {PostModule} from "../post/post.module";
import { SimpleFavorComponent } from './simple-favor-list/simple-favor/simple-favor.component';

import { InfoComponent } from './info/info.component';
import { SimpleUserListComponent } from './simple-resident-list/simple-user-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    SimpleFavorListComponent,

    SimpleUserListComponent

  ],
  declarations: [HomeComponent, SimpleFavorListComponent, SimpleFavorComponent, InfoComponent, SimpleUserListComponent]
})
export class HomeModule { }
