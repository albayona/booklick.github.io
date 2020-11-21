import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GroupListComponent} from "./group-list/group-list.component";
import {MainLayoutComponent} from "../neighborhoodLayout/main-layout/main-layout.component";
import {GroupRegistrationComponent} from "../group-registration/group-registration/group-registration.component";


const routes: Routes = [
    {
      path: 'neighborhoods',
      component: MainLayoutComponent,

      children: [
        {
          path: ':id',
          children: [
            {
              path: 'groups',
              component: GroupListComponent,


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
export class GroupRoutingModule {
}
