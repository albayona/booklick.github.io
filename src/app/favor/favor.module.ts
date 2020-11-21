
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorListComponent } from './favor-list/favor-list.component';
import { FavorDetailComponent } from './favor-detail/favor-detail.component';
import { FavorRoutingModule } from './favor-routing/favor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FavorRoutingModule
  ],
  declarations: [FavorListComponent, FavorDetailComponent],
  exports:[FavorListComponent]
})
export class FavorModule { }
