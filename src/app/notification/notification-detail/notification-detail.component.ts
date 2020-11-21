
import { Component, OnInit, Input } from '@angular/core';
import { Notification } from '../notification';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

  @Input() notificationDetail:Notification;

  constructor() { }

  ngOnInit() {
    console.log(this.notificationDetail.id);
  }

}
