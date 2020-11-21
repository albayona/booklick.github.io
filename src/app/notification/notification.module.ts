import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationListComponent, NotificationDetailComponent],
  exports: [NotificationListComponent]
})
export class NotificationModule { }
