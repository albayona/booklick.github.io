import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {humanized_time_span} from "../../../post/post-detail/post-detail.component";
import {ToastrService} from "ngx-toastr";
import {$} from "protractor";
import {delay} from "rxjs/operators";
import {Booklist} from "../../Booklist";
import {PostCommentComponent} from "../../../post/post-comment/post-comment.component";
import {PostListComponent} from "../../../post/post-list/post-list.component";
import {Content} from "../../../post/content";

@Component({
  selector: 'app-simple-favor',
  templateUrl: './simple-favor.component.html',
  styleUrls: ['./simple-favor.component.css']
})
export class SimpleFavorComponent implements OnInit {


  constructor(private toastrService: ToastrService) {
  }

  @Input() type: string;

  ngOnInit() {

    this.toggle1 = true;
    this.toggle2 = false;

    this.init.emit();
    this.toastrService.success("Course: initiated on demand");

  }

  @Output() init = new EventEmitter();
  @Input() booklist: Booklist
  toggle1: boolean;
  toggle2: boolean;

  toggle11() {
    this.toggle1 = !this.toggle1;
  }

  toggle12() {
    this.toggle2 = !this.toggle2;
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

