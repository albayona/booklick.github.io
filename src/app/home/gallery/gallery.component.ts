import {Component, Input, OnInit} from '@angular/core';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() album: string[];
  @Input() emptyMessage: string;

  constructor() {
  }

  ngOnInit() {
  }

}
