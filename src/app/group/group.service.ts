import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ResidentDetail} from "../home/resident-detail";
import {Post} from "../post/post";
import {FavorDetail} from "../favor/favorDetail";
import {Group} from "./group";
import {GroupDetail} from "./group-detail";
import {PostDetail} from "../post/post-detail";
import {Resident} from "../home/resident";

const API_URL = environment.apiUrl;
const groups = "/groups";
const posts = "/posts";
const members = "/members";
const neighborhoods = "neighborhoods";
const potential = "/potential";
const album = "/album";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  getgroups(neighborhood): Observable<Group[]> {
    return this.http.get<Group[]>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/"
    );
  }

  creategroup(neighborhood, group): Observable<GroupDetail> {
    return this.http.post<GroupDetail>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/", group
    );
  }


  getgroup(neighborhood, resident): Observable<GroupDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + groups + "/" + resident);

    return this.http.get<GroupDetail>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/" + resident
    );

  }

  getmembers(neighborhood, group): Observable<ResidentDetail[]> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + groups + "/" + group + members);

    let r: Observable<ResidentDetail[]>;


    r = this.http.get<ResidentDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/" + group + members
    );

    return r;

  }

  getmember(neighborhood, group, member): Observable<ResidentDetail> {

    console.log(API_URL + neighborhoods + "/" + neighborhood + groups + "/" + group + members + "/" + member);

    let r: Observable<ResidentDetail>;

    r = this.http.get<ResidentDetail>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/" + group + members + "/" + member
    );


    return r;

  }


  isMember(neighborhood, group, member): Observable<boolean> {

    let r: boolean;
    r = false;
    this.http.get<ResidentDetail>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/" + group + members + "/" + member
    ).subscribe(value => {
        r = value != undefined
        console.log(r)
        console.log(r)
        console.log(r)

      }
      , error => {
        console.log(error)
      })

    return of(r);

  }


  getPosts(neighborhood, group): Observable<PostDetail[]> {

    let r: Observable<PostDetail[]>;
    r = this.http.get<PostDetail[]>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/" + group + posts
    );


    return r;

  }


  addMembers(neighborhood, groupId, residents): Observable<Resident[]> {

    return this.http.put<Resident[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      groupId +
      members +
      "/",
      residents
    );
  }

  addMember(neighborhood, groupId, residentId): Observable<Resident> {

    console.log(API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      groupId +
      members +
      "/" +
      residentId)

    return this.http.post<Resident>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      groupId +
      members +
      "/" +
      residentId, {}
    );
  }


  getPotentialMembers(neighborhood, groupId): Observable<Resident[]> {
    return this.http.get<Resident[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      groupId +
      members +
      potential
    );
  }

  addPicture(neighborhood, group, pic: string): Observable<GroupDetail[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<GroupDetail[]>(
      API_URL +
      neighborhoods +
      "/" +
      neighborhood +
      groups +
      "/" +
      group +
      album +
      "/",
      pic, {headers: headers}
    );
  }

  updateGroup(neighborhood, id, group): Observable<GroupDetail> {
    console.log(API_URL + neighborhoods + "/" + neighborhood + groups + "/" + id);

    return this.http.put<GroupDetail>(
      API_URL + neighborhoods + "/" + neighborhood + groups + "/" + id, group
    );

  }


}
