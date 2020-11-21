import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavorListComponent } from '../favor-list/favor-list.component';
import {MainLayoutComponent} from "../../neighborhoodLayout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'neighborhoods/:id/favors',
    component: MainLayoutComponent,
    children: [
      { path: '', component: FavorListComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavorRoutingModule { }
