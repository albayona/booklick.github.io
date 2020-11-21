import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import {GroupRoutingModule} from "./group-routing.module";
import { SimpleResidentComponent } from './simple-resident/simple-resident.component';
import { GroupListComponent } from './group-list/group-list.component';
import {GroupDetailRoutingModule} from "./group-detail/group-detail-routing.module";
import {PostModule} from "../post/post.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {HomeModule} from "../home/home.module";
import {NgSelectModule} from "@ng-select/ng-select";
import { GroupGalleryComponent } from './group-gallery/group-gallery.component';



@NgModule({
  declarations: [GroupDetailComponent, SimpleResidentComponent, GroupListComponent, GroupGalleryComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    GroupDetailRoutingModule,
    PostModule,
    FormsModule,
    SharedModule,
    HomeModule,
    NgSelectModule,
    ReactiveFormsModule,

  ]
})
export class GroupModule { }
