import { Component, Input, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';
import { Resident } from '../resident';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css'],
})
export class ResidentListComponent implements OnInit {
  constructor(
    private residentService: ResidentService,
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

  public residents: Resident[];

  getResidents() {
    this.residentService.getresidents(this.neighId).subscribe((residents) => {
      this.residents = residents;
    });
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');
    this.getResidents();
  }
}
