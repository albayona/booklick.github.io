import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../home-layout/main-layout/main-layout.component';
import {DashboardComponent} from './dashboard.component';
import { LoginComponent } from '../login/login.component';



@NgModule({

  exports: [RouterModule]
})
export class DashboardRoutingModule { }
