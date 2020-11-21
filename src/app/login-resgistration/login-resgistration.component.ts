import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Login } from '../login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-resgistration',
  templateUrl: './login-resgistration.component.html',
  styleUrls: ['./login-resgistration.component.css'],
})
export class LoginResgistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private loginService: LoginService,
    private router: Router
  ) {}

  neighborhoods: Array<Neighborhood>;
  chosenNeighborhood: Neighborhood;
  createdLoginId: number;

  persistedLogin: Login;

  residentLoginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
    confirmPass: new FormControl(null),
    govId: new FormControl(null),
    neighborhood: new FormControl(null),
  });

  onSubmit(): void {
    console.log(
      'Username:' +
        this.residentLoginForm.get('username').value +
        '\n' +
        'Password:' +
        this.residentLoginForm.get('password').value +
        'Conf Password:' +
        this.residentLoginForm.get('confirmPass').value +
        '\n' +
        'GovId:' +
        this.residentLoginForm.get('govId').value +
        '\n' +
        'Neighborhood:' +
        this.residentLoginForm.get('neighborhood').value
    );

    if (
      this.residentLoginForm.get('password').value !==
      this.residentLoginForm.get('confirmPass').value
    ) {
      this.toastr.error("Passwords don't match!");
      this.residentLoginForm.reset();
    } else if (this.residentLoginForm.get('neighborhood').value === null) {
      this.residentLoginForm.reset();
      this.toastr.warning('Please select a neighborhood.', 'Warning');
    } else {
      this.addResidentLogin();
      this.residentLoginForm.reset();
      this.residentLoginForm.controls.neighborhood.setValue('Choose...');
    }
  }

  getNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe((neighborhoods) => {
      // this.neighborhoods = neighborhoods.slice(0,4);
      this.neighborhoods = neighborhoods;
    });
  }

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((chosenNeighborhood) => {
        // this.neighborhoods = neighborhoods.slice(0,4);
        this.chosenNeighborhood = chosenNeighborhood;
      });
    return this.chosenNeighborhood;
  }

  addResidentLogin(): void {
    var username: string = this.residentLoginForm.value.username;
    var password: string = this.residentLoginForm.value.password;
    var govId: number = this.residentLoginForm.value.govId;
    var neighborhood: number = this.residentLoginForm.value.neighborhood;

    var login: Login = new Login(username, password);

    console.log(login);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var loginName = this.residentLoginForm.value.username;

    this.loginService.addLogin(neighborhood, login).subscribe(
      (persistedLogin) => {
        this.persistedLogin = persistedLogin;
        this.residentLoginForm.reset();
        this.residentLoginForm.controls.neighborhood.setValue('Choose...');
        // this.toastr.success(
        //   'The username ' + this.persistedLogin.userName + ' was added with id '
        //   'Success',
        //   toastrConfig
        // );
        setTimeout(() => {
          this.router.navigateByUrl(`/neighborhoods/${neighborhood}/${this.persistedLogin}/newProfile`);
        }, 2300);
      },
      () => {
        this.residentLoginForm.reset();
      }
    );


  }






  ngOnInit() {
    this.getNeighborhoods();


  }
}
