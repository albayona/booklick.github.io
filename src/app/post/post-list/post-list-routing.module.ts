import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "../../home-layout/main-layout/main-layout.component";
import {PostListComponent} from "./post-list.component";


const routes: Routes = [
  {
    path: 'neighborhoods/:id/residents/:id/posts',
    component: MainLayoutComponent,
    children: [
      {path: '', component: PostListComponent},
    ]
  },
  {
      path: 'neighborhoods/:id/posts',
    component: PostListComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostListRoutingModule {
}
