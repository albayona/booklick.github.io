import {Component, OnInit} from '@angular/core';
import {NeighborhoodService} from '../neighborhood/neighborhood.service';
import {Neighborhood} from '../neighborhood/neighborhood';
import {FormGroup, FormControl} from '@angular/forms';
import {LoginService} from './login.service';
import {Login, Protected} from './login';
import {ToastrService, IndividualConfig} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Resident} from '../resident/resident';
import {Token} from "./token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private neighborhoodService: NeighborhoodService,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  neighborhoods: Array<Neighborhood>;
  login: Login;
  token: Token;
  resident: Resident;
  protected: Protected

  LoginForm = new FormGroup({
    neighborhood: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
  });

  onSubmit(): void {
    var username: string = this.LoginForm.value.username;
    var password: string = this.LoginForm.value.password;
    this.getLogin(password, username);

  }

  getLogin(password, username): void {
    this.loginService
      .login(password, username)
      .subscribe((token) => {
        this.token = token;
        console.log(token);
        localStorage.setItem('access_token', this.token.access_token);
        localStorage.setItem('refresh_token', this.token.refresh_token);

        this.loginService
          .getProtected()
          .subscribe((protec) => {
            this.protected = protec;
            console.log(protec);

            localStorage.setItem('user_code', this.protected.current_identity)
            localStorage.setItem('user_role', this.protected.current_roles)

            console.log(localStorage.getItem('user_code'))
            console.log(localStorage.getItem('user_code'))
            console.log(localStorage.getItem('user_code'))
            console.log(localStorage.getItem('user_code'))

            if (this.protected.current_roles == "admin")
              localStorage.setItem('user_url', "http://127.0.0.1:5000/admins/" + this.protected.current_identity);
            else
              localStorage.setItem('user_url', "http://127.0.0.1:5000/student/" + this.protected.current_identity);
          });



        localStorage.setItem('user_url', this.token.refresh_token);
      });

    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };

    if (this.token != undefined) {
      this.toastr.success(
        `Welcome back \ud83d\udc95`,
        'Authenticated',
        toastrConfig
      );
      setTimeout(() => {

        if (localStorage.getItem('user_role') == "student"){
          this.router.navigateByUrl(
            `/main/home`
          );

        }
        else if (localStorage.getItem('user_role') == "admin"){

          this.router.navigateByUrl(
            `/main/admin`
          );
        }


      }, 2300);
      this.LoginForm.reset();
    } else {
      this.toastr.error(
        `Incorrect password, try again.`,
        'Authentication Failed',
        toastrConfig
      );
      this.LoginForm.reset();
    }
  }

  authenticateLogin(password: string): void {

  }

  ngOnInit() {



  }
}
