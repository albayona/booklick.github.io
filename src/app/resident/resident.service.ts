import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resident } from './resident';
import { ResidentDetail } from './resident-detail';

const API_URL = environment.apiUrl;
const residents = '/residents';
const neighborhoods = 'neighborhoods';

@Injectable({
  providedIn: 'root',
})
export class ResidentService {
  constructor(private http: HttpClient) {}

  getresidents(neighborhood): Observable<ResidentDetail[]> {
    return this.http.get<ResidentDetail[]>(
      API_URL + neighborhoods + '/' + neighborhood + residents + '/'
    );
  }

  addResident(neighId: number, resident: Resident): Observable<Resident> {
    var a = `${API_URL+neighborhoods}/${neighId + residents}/`;
    return this.http.post<Resident>(
      `${API_URL+neighborhoods}/${neighId + residents}/`,
      resident
    );
  }
}
