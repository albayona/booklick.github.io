import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GroupDetailComponent} from "./group-detail.component";
import {MainLayoutComponent2} from "../../group-layout/main-layout/main-layout.component2";


const routes: Routes = [
  {
    path: 'neighborhoods',
    component: MainLayoutComponent2,
    children: [
      {
        path: ':id',
        children: [
          {
            path: 'groups',
            children: [
              {
                path: ':id',
                component: GroupDetailComponent
              }

            ]

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
export class GroupDetailRoutingModule {
}
