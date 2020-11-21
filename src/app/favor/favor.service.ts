import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { Favor } from './favor';
import { FavorDetail } from './favorDetail';


const API_URL = environment.apiUrl;
const favors = "/favors";
const neighborhoods = "neighborhoods";

@Injectable({
  providedIn: 'root'
})
export class FavorService {

constructor(private http:HttpClient) { }

  getFavors(neigh_id: number):Observable<FavorDetail[]>{
    return this.http.get<FavorDetail[]>(
      API_URL + neighborhoods + "/" + neigh_id + favors
  );
  }

}
