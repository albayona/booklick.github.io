import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from "../post-list/post-list.component";
import {PostDetailComponent} from "./post-detail.component";



const routes: Routes = [
  {
    path: 'neighborhood',
    children: [
      {
        path: ':id',

        children: [

          {
            path: 'posts',

            children: [

              {
                path: ':id',
                component: PostDetailComponent
              }

            ]
          }]

      }

    ]

  }


]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailRoutingModule { }
