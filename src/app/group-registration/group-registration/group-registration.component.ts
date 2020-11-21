import {Component, OnInit} from '@angular/core';
import {IndividualConfig, ToastrService} from "ngx-toastr";
import {NeighborhoodService} from "../../neighborhood/neighborhood.service";
import {ResidentService} from "../../resident/resident.service";
import {LoginService} from "../../login/login.service";
import {ActivatedRoute, Router, UrlTree} from "@angular/router";
import {Neighborhood} from "../../neighborhood/neighborhood";
import {Resident} from "../../resident/resident";
import {Login} from "../../login/login";
import {FormControl, FormGroup} from "@angular/forms";
import {GroupService} from "../../group/group.service";
import {Group} from "../../group/group";
import {GroupDetail} from "../../group/group-detail";

@Component({
  selector: 'app-group-registration',
  templateUrl: './group-registration.component.html',
  styleUrls: ['./group-registration.component.css']
})
export class GroupRegistrationComponent implements OnInit {
  private tree: UrlTree;

  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private service: GroupService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  neighId: number;
  group: GroupDetail;

  groupForm = new FormGroup({
    name: new FormControl(null),
    desc: new FormControl(null),

  });


  addResidentProfile(): void {
    var name: string = this.groupForm.value.name;
    var desc: string = this.groupForm.value.desc;


    var group: Group = new Group();


    // @ts-ignore
    group.dateCreated = new Date();
    group.name = name;
    group.description = desc;
    group.muralPicture = "https://i.imgur.com/mxLwSae.jpg"

    console.log(group);

    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };

    var observable = this.service
      .creategroup(this.neighId, group)
      .subscribe(
        (val) => {
          this.group = val;
          this.groupForm.reset();
          this.toastr.success(
            'The group ' + name + ' was added.',
            'Success',
            toastrConfig
          );
          setTimeout(() => {
            this.router.navigateByUrl(
              `/neighborhoods/${this.neighId}/groups/${this.group.id}`
            );

          }, 2300);
        },
        () => {
          this.groupForm.reset();
        }
      );
  }

  onSubmit(): void {
    this.addResidentProfile();
  }

  ngOnInit() {
    this.tree = this.router.parseUrl(this.router.url);
    this.neighId = +this.tree.root.children['primary'].segments[1].path;
  }
}
