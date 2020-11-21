import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "../home-layout/main-layout/main-layout.component";
import {HomeAdminComponent} from "./home-admin/home-admin.component";


const routes: Routes = [
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: 'admin',
        component: HomeAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModuleModule { }
