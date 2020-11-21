import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "../../home-layout/main-layout/main-layout.component";
import {HomeComponent} from "../home.component";
import {ExtendedGalleryComponent} from "./extended-gallery.component";
import {PostListComponent} from "../../post/post-list/post-list.component";


const routes: Routes = [
  {
    path: 'neighborhoods/:id/residents/:id/gallery',
    component: MainLayoutComponent,
    children: [
      {path: '', component: ExtendedGalleryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtendedGalleryRoutingModule {
}
