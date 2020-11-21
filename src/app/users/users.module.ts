import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SimpleFavorListComponent } from './simple-favor-list/simple-favor-list.component';
import { SimpleEventListComponent } from './simple-event-list/simple-event-list.component';
import {PostModule} from "../post/post.module";
import { SimpleFavorComponent } from './simple-favor-list/simple-favor/simple-favor.component';
import { SimpleEventComponent } from './simple-event-list/simple-event/simple-event.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    PostModule
  ],
  declarations: [UsersComponent, SimpleFavorListComponent, SimpleEventListComponent, SimpleFavorComponent, SimpleEventComponent]
})
export class UsersModule { }
