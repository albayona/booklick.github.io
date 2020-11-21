import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  public notifications:Array<Notification>;

  constructor(private notificationService: NotificationService) { }

  getAllNotifications(){
    this.notificationService.getNotifications().subscribe(bs => {
        this.notifications = bs;
      }
    )
  }

  selected = false;
  selectedNotification:Notification;

  onSelected(b:Notification):void{
    this.selected = true;
    this.selectedNotification = b;
  }


  ngOnInit() {
    this.getAllNotifications();
  }

}
