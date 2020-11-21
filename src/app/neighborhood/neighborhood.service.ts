import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Neighborhood } from './neighborhood';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NeighborhoodService {
  private apiUrl = environment.apiUrl + 'neighborhoods';

  constructor(private http: HttpClient) {}

  getNeighborhoods(): Observable<Neighborhood[]> {
    return this.http.get<Neighborhood[]>(`${this.apiUrl}/`);
  }

  addNeighborhood(neighborhood: Neighborhood): Observable<Neighborhood> {
    return this.http.post<Neighborhood>(`${this.apiUrl}/`, neighborhood);
  }

  getNeighborhoodById(id: number): Observable<Neighborhood> {
    var a: string = `${this.apiUrl}/` + id;
    return this.http.get<Neighborhood>(a);
  }
}
