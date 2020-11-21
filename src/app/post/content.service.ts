import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Content, BooklistObject} from "./content";
import {ContentObject} from "./ContentObject";


const API_URL = environment.apiUrl;
const API_URL2 = environment.apiUrl2;
const posts = "/posts";

const contents = "contents";
const interests = "interests";
const upload = "upload";



@Injectable({
  providedIn: 'root'
})


export class ContentService {
  private c: Observable<ContentObject>;




  constructor(private http: HttpClient) {

  }


  /**
   * Returns an Observable object that contains the list of posts received from the API
   * @returns The list of posts in real time
   */
  getContents(): Observable<ContentObject> {
    console.log("aaaaaservice")

   this.c = this.http.get<ContentObject>(
      "https://booklick.me/contents/"
    );
    console.log(this.c)
    return this.c
  }


  getBooklists(): Observable<BooklistObject> {
    console.log("aaaaaservice")
    return this.http.get<BooklistObject>(
      "https://booklick.me/students/" + localStorage.getItem('user_code') + "/booklists/"
    );
  }



  getGenericContents(url): Observable<Content[]> {
    return this.http.get<Content[]>(
      API_URL + url
    );
  }

  /**
   * Deletes post
   * @param neighborhood
   * @param postId Id from post
   * @returns True if deleted, false otherwise
   */
  deletepost(neighborhood, postId): Observable<Content> {
    return this.http.delete<Content>(
      API_URL  + "/" + neighborhood + posts + "/" + postId
    );
  }



  addPicture(neighborhood, postId, pic: string): Observable<Content[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Content[]>(
      API_URL +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      "/",
      pic, {headers: headers}
    );
  }



}

