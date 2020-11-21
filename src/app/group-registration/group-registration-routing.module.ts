import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "../neighborhoodLayout/main-layout/main-layout.component";
import {GroupListComponent} from "../group/group-list/group-list.component";
import {GroupRegistrationComponent} from "./group-registration/group-registration.component";


const routes: Routes = [
    {
      path: 'neighborhoods',
      component: GroupRegistrationComponent,
      children: [
        {
          path: ':id',
          children: [
            {
              path: 'newGroup',
              component: GroupRegistrationComponent,


            }

          ]
        }
      ]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
  export class GroupRegistrationRoutingModule {
}
