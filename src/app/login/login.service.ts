import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login, Message, Protected} from './login';
import {environment} from '../../environments/environment';
import {Token} from "./token";
import {User} from "../home/User";

class AuthService {
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl + 'neighborhoods';

  constructor(private http: HttpClient
  ) {
  }


  // TODO: get all logins
  // TODO: get login by username, by id sucks

  addLogin(neighId: number, login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/${neighId}/logins/`, login);
  }

  getLoginById(neighId: number, id: number): Observable<Login> {
    return this.http.get<Login>(`${this.apiUrl}/${neighId}/logins/${id}`);
  }

  login(pass, user): Observable<Token> {

    console.log(user)
    console.log(pass)
    return this.http.post<Token>("http://127.0.0.1:5000/login/", {username: user, password: pass});

  }


  logout(): Observable<Message> {
    return this.http.post<Message>("http://127.0.0.1:5000/logout/", {});

  }

  getUser(): Observable<User> {
    return this.http.get<User>( localStorage.getItem("user_url"));
  }

  getProtected(): Observable<Protected> {
    return this.http.get<Protected>( "http://127.0.0.1:5000/protected");
  }

}
