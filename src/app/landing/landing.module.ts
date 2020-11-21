import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterOnlyLayoutComponent } from '../home-layout/footer-only-layout/footer-only-layout.component';

const routes: Routes = [
  {
    path: 'main',
    component: FooterOnlyLayoutComponent,
    children: [{ path: '', component: LandingComponent }],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule],
  declarations: [LandingComponent],
  exports: [LandingComponent],
})
export class LandingModule {}
