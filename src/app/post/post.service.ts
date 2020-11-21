import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Content} from "./content";
import {CommentP} from "./commentP";
import {environment} from "../../environments/environment";
import {ContentDetail} from "./content-detail";
import {Test} from "../home/test";
import {UserDetail} from "../home/user-detail";

const API_URL = environment.apiUrl;
const API_URL2 = environment.apiUrl2;
const posts = "/posts";

const comments = "/comments";
const neighborhoods = "neighborhoods";
const residents = "/residents";
const viewers = "/viewers";
const album = "/album";
const potential = "/potential";
const groups = "/groups";
const postsToView = "/postsToView";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }


  /**
   * Returns an Observable object that contains the list of posts received from the API
   * @returns The list of posts in real time
   */
  getposts(neighborhood): Observable<ContentDetail[]> {
    return this.http.get<ContentDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + posts
    );
  }

  getpostsV(neighborhood, resident): Observable<Content[]> {
    return this.http.get<Content[]>(
      API_URL + neighborhoods + "/" + neighborhood + residents + "/" + resident + postsToView
    );
  }


  getPostsGeneric(url): Observable<ContentDetail[]> {
    return this.http.get<ContentDetail[]>(
      API_URL2 + url
    );
  }

  /**
   * Returns a detailed Observable object that contains the post received from the API
   * @returns A detailed post in real time
   */
  getpostDetail(neighborhood, postId): Observable<ContentDetail> {
    return this.http.get<ContentDetail>(
      API_URL + neighborhoods + "/" + neighborhood + posts + "/" + postId
    );
  }

  /**
   * Creates new post
   * @param neighborhood
   * @param post New post
   * @param residentId Author of post
   * @returns Content with the new id, false if there is an error
   */
  createpost(neighborhood, post, residentId): Observable<ContentDetail> {

    console.log(post)
    return this.http.post<ContentDetail>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      residents +
      "/" +
      residentId +
      posts,
      post
    );
  }

  /**
   * Deletes post
   * @param neighborhood
   * @param postId Id from post
   * @returns True if deleted, false otherwise
   */
  deletepost(neighborhood, postId): Observable<ContentDetail> {
    return this.http.delete<ContentDetail>(
      API_URL + neighborhoods + "/" + neighborhood + posts + "/" + postId
    );
  }

  /**
   * Updates post
   * @param neighborhood
   * @param post  Updated post
   * @returns Updated post
   */
  updatepost(neighborhood, post): Observable<ContentDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + posts + "/" + post.id);
    return this.http.put<ContentDetail>(
      API_URL + neighborhoods + "/" + neighborhood + posts + "/" + post.id,
      post
    );
  }

  /**
   * G comment
   * @param neighborhood
   * @param postId
   * @param author
   * @param comment Comment to be created
   * @returns True if created, false otherwise
   */
  createcomment(neighborhood, postId, author, comment): Observable<CommentP> {

    console.log(API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      author);

    return this.http.post<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      author,
      comment
    );
  }

  /**
   * Gets all comments
   * @returns  Wanted comment
   * @param neighborhood
   * @param postId
   */
  getcomments(neighborhood, postId): Observable<CommentP[]> {
    return this.http.get<CommentP[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments
    );
  }

  /**
   * Gets comment
   * @param neighborhood
   * @param postId
   * @param commentId Id from comment
   * @returns  Wanted comment
   */
  getcomment(neighborhood, postId, commentId): Observable<CommentP> {
    return this.http.get<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      commentId
    );
  }

  /**
   * Updates comment
   * @param neighborhood
   * @param postId
   * @param comment  Comment to be updated
   * @returns True if updated, false otherwise
   */
  updatecomment(neighborhood, postId, comment): Observable<CommentP> {
    return this.http.put<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      comment.id,
      comment
    );
  }

  /**
   * Deletes comment
   * @param neighborhood
   * @param postId  Id from post
   * @param commentId Comment to be deleted
   * @returns True if deleted, false otherwise
   */
  deletecomment(neighborhood, postId, commentId): Observable<CommentP> {
    return this.http.delete<CommentP>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      comments +
      "/" +
      commentId
    );
  }


  addPicture(neighborhood, postId, pic: string): Observable<ContentDetail[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ContentDetail[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      album +
      "/",
      pic, {headers: headers}
    );
  }


  addViewers(neighborhood, postId, residents): Observable<Test[]> {
    return this.http.put<Test[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      viewers +
      "/",
      residents
    );
  }

  addGroup(neighborhood, postId, group): Observable<ContentDetail[]> {
    console.log(API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      group +
      posts +
      "/" +
      postId);

    return this.http.post<ContentDetail[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      group +
      posts +
      "/" +
      postId, {}
    );
  }


  getViewers(neighborhood, postId): Observable<Test[]> {
    return this.http.get<Test[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      viewers +
      "/"
    );
  }

  getPotentialViewers(neighborhood, postId): Observable<Test[]> {
    return this.http.get<Test[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      posts +
      "/" +
      postId +
      viewers +
      potential
    );
  }


}

