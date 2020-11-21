import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {humanized_time_span} from "../../../post/post-detail/post-detail.component";
import {Favor} from "../../../favor/favor";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-simple-event',
  templateUrl: './simple-event.component.html',
  styleUrls: ['./simple-event.component.css']
})
export class SimpleEventComponent implements OnInit {


  constructor( private toastrService: ToastrService) {
  }

  ngOnInit() {

    this.init.emit();
    this.toastrService.success("Course: initiated on demand");

  }

  @Output() init = new EventEmitter();
  @Input() favor: Favor


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
