import { Component, OnInit } from '@angular/core';
import {ResidentService} from "../../resident/resident.service";
import {ActivatedRoute} from "@angular/router";
import {Resident} from "../../resident/resident";
import {GroupService} from "../group.service";
import {Group} from "../group";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  constructor(
    private service: GroupService,
    private route: ActivatedRoute
  ) {}

  neighId: number;
  colors: Array<string> = [
    '#FF99F0',
    '#481d52',
    '#315298',
    '#37C9F4',
    '#f22727',
    '#102b57',
    '#2eba17',
    '#006c7d',
    '#f5da44',
    '#f45b18',
    '#e50f55',
    '#f26744',
    '#f05bb4',
    '#779ce7',
    '#2c2d42',
    '#816aec',
    '#00512d',
    '#d63f44',
    '#a580ce',
    '#ffa3ae'
  ];

  public groups: Group[];

  getGroups() {
    this.service.getgroups(this.neighId).subscribe((groups) => {
      this.groups = groups;
    });
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getGroups();
  }
}
