import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from '../business-list/business-list.component';
import { MainLayoutComponent } from 'src/app/neighborhoodLayout/main-layout/main-layout.component';
import { BusinessDetailComponent } from '../business-detail/business-detail.component';

const routes: Routes = [
  {
    path: 'neighborhoods/:id/businesses',
    component: MainLayoutComponent,
    children: [ { path: '', component: BusinessListComponent } ]
  },
  {
    path: 'neighborhoods/:id/businesses/:lid',
    component: MainLayoutComponent,
    children: [ { path: '', component: BusinessDetailComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BusinessRoutingModule { }
