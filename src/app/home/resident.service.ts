import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

import {UserDetail} from "./user-detail";
import {Content} from "../post/content";
import {ContentDetail} from "../post/content-detail";

const API_URL = environment.apiUrl;
const residents = "/residents";
const posts = "/posts";
const favors = "/favors";
const album = "/album";
const neighborhoods = "neighborhoods";


@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private http: HttpClient) {
  }

  getresidents(neighborhood): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/"
    );
  }

  getresident(neighborhood, resident): Observable<UserDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident);

    return this.http.get<UserDetail>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident
    );

  }


  updateResident(neighborhood, id, resident): Observable<UserDetail> {
    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + id);

    return this.http.put<UserDetail>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + id, resident
    );

  }


  getposts(neighborhood, resident): Observable<ContentDetail[]> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + posts);

    let rr: Observable<ContentDetail[]>;


    rr = this.http.get<ContentDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + posts
    );

    console.log(rr);

    return rr;

  }




  addPicture(neighborhood, residentId, pic: string): Observable<UserDetail[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<UserDetail[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      residents +
      "/" +
      residentId +
      album +
      "/",
      pic, {headers: headers}
    );
  }


}


