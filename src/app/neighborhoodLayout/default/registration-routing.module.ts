import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'neighborhoods/:id',
    component: MainLayoutComponent,
    children: [
      { path: '', component: RegistrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
