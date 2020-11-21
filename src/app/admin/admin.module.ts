import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostModule} from "../post/post.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgSelectModule} from "@ng-select/ng-select";
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {AdminRoutingModuleModule} from "./admin-routing-module.module";
import { ContentListComponent } from './content-list/content-list.component';



@NgModule({
  declarations: [HomeAdminComponent, ContentListComponent],
  imports: [
    CommonModule,
    AdminRoutingModuleModule,
    PostModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
