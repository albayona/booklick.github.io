import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { MainLayoutComponent } from '../neighborhoodLayout/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'neighborhoods/:id/residents',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ResidentListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }
