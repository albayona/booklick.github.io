import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../home-layout/main-layout/main-layout.component';
import {UsersComponent} from './users.component';

const routes: Routes = [
  {
    path: 'users',
    component: MainLayoutComponent,
    children: [
      { path: ':id', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
