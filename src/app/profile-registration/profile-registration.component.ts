import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NeighborhoodService} from '../neighborhood/neighborhood.service';
import {Neighborhood} from '../neighborhood/neighborhood';
import {FormGroup, FormControl} from '@angular/forms';
import {ResidentService} from '../resident/resident.service';
import {ToastrService, IndividualConfig} from 'ngx-toastr';
import {Resident} from '../resident/resident';
import {Login} from '../login/login';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-profile-registration',
  templateUrl: './profile-registration.component.html',
  styleUrls: ['./profile-registration.component.css'],
})
export class ProfileRegistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private residentService: ResidentService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  neighborhood: Neighborhood;
  neighId: number;
  loginId: number;
  resident: Resident;

  login: Login;

  residentProfileForm = new FormGroup({
    name: new FormControl(null),
    nickname: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    address: new FormControl(null),
    livingSince: new FormControl(null),
  });

  getNeighborhood(id: number): Neighborhood {
    this.neighborhoodService
      .getNeighborhoodById(id)
      .subscribe((neighborhood) => {
        this.neighborhood = neighborhood;
      });
    return this.neighborhood;
  }

  addResidentProfile(): void {
    var name: string = this.residentProfileForm.value.name;
    var nickname: string = this.residentProfileForm.value.nickname;
    var email: string = this.residentProfileForm.value.email;
    var phone: string = this.residentProfileForm.value.phone;
    var address: string = this.residentProfileForm.value.address;
    var login: Login = this.login;
    var livingSince: string = this.residentProfileForm.value.livingSince;

    var resident: Resident = new Resident(
      address,
      email,
      name,
      nickname,
      phone,
      login
    );

    resident.livingSince = livingSince;
    // @ts-ignore
    resident.joinDate = new Date();
    resident.muralPicture = "https://i.imgur.com/mxLwSae.jpg"
    resident.profilePicture = "https://i.imgur.com/ZZNx5mb.png";
    console.log(resident);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };

    var observable = this.residentService
      .addResident(this.neighId, resident)
      .subscribe(
        (resident) => {
          this.resident = resident;

          localStorage.setItem('rol', 'user');
          localStorage.setItem('userId', resident.id + "");
          localStorage.setItem('neighId', resident.neighborhood.id + "");

          this.residentProfileForm.reset();
          this.toastr.success(
            'The resident ' + name + ' was added.',
            'Success',
            toastrConfig
          );
          setTimeout(() => {
            this.router.navigateByUrl(
              `/neighborhoods/${this.neighId}/residents/${this.resident.id}`
            );

          }, 2300);
        },
        () => {
          this.residentProfileForm.reset();
        }
      );
  }

  onSubmit(): void {
    this.addResidentProfile();
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.loginId = +this.route.snapshot.paramMap.get('log');
    this.loginService
      .getLoginById(this.neighId, this.loginId)
      .subscribe((login) => {
        this.login = login;
      });
  }
}
