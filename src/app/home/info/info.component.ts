import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {humanized_time_span} from "../../post/post-detail/post-detail.component";
import {UserDetail} from "../user-detail";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {


  constructor( private toastrService: ToastrService) {
  }

  ngOnInit() {

    this.toggle1 = true;
    this.toggle2 = false;

    this.init.emit();
    this.toastrService.success("Course: initiated on demand");

  }

  @Output() init = new EventEmitter();
  @Input() resident: UserDetail;
  toggle1: boolean;
  toggle2: boolean;

  toggle11(){
    this.toggle1 = ! this.toggle1;
  }

  toggle12(){
    this.toggle2 = ! this.toggle2;
  }


  getDate(date: string): string {

    var custom_date_formats = {
      past: [
        {ceiling: 60, text: "$seconds seconds ago"},
        {ceiling: 3600, text: "$minutes minutes ago"},
        {ceiling: 86400, text: "$hours hours ago"},
        {ceiling: 2629744, text: "$days days ago"},
        {ceiling: 31556926, text: "$months months ago"},
        {ceiling: null, text: "$years years ago"}
      ],
      future: [
        {ceiling: 60, text: "in $seconds seconds"},
        {ceiling: 3600, text: "in $minutes minutes"},
        {ceiling: 86400, text: "in $hours hours"},
        {ceiling: 2629744, text: "in $days days"},
        {ceiling: 31556926, text: "in $months months"},
        {ceiling: null, text: "in $years years"}
      ]
    }


    return humanized_time_span(date.replace("[UTC]", ""), new Date().toLocaleDateString(), custom_date_formats, null);
  }

}
