import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification } from './notification';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


const API_URL = environment.apiUrl;
const notification = "/notifications";
const neighborhoods = "/neighborhoods";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

getNotifications():Observable<Notification[]>{
  return this.http.get<Notification[]>(
    API_URL + neighborhoods + "/" + 200 + notification + "/"
);
}

}
