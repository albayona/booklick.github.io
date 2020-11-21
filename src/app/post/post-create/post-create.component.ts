import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PostService} from "../post.service";
import {ToastrService} from "ngx-toastr";
import {Content} from "../content";
import {CommentP} from "../commentP";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {ContentDetail} from "../content-detail";
import {Test} from "../../home/test";
import {ImageService} from "../../shared/file-picker/image.service";
import {FilePickerComponent} from "../../shared/file-picker/file-picker.component";
import {DatePipe, formatDate} from "@angular/common";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private datepipe: DatePipe,
              private postService: PostService,
              private toastrService: ToastrService,
              private imageService: ImageService,
              private fb: FormBuilder,
              private authService: SimpleAuthService
  ) {
  }


  @ViewChild(FilePickerComponent, {static: true}) picker: FilePickerComponent;
  @Input() post: ContentDetail;
  @Input() residen_id: number;
  @Input() neigh_id: number;
  @Input() residents: Test[];
  @Input() group: number;
  selected: Test[];
  postID: number;
  images: File[];
  selectedImages: File[];
  form: FormGroup;
  album: string[];


  @Output() updatePost = new EventEmitter();


  addPost(reviewForm: NgForm): ContentDetail {
    this.post.album = this.album;

    this.postService.createpost(this.neigh_id, this.post, this.residen_id)
      .subscribe(post => {
        reviewForm.resetForm();
        this.toastrService.success("Content was successfully created", 'Content added');

        this.postID = post.id;



          this.postService.addViewers(this.neigh_id, this.postID, this.selected).subscribe(() => {

            this.toastrService.success(this.selected.length + " viewers were successfully added", 'Viewers added');

            for (var i = 0; i < this.images.length; i++) {
              let item = this.images[i];
              let infoObject = {
                title: "title",
                description: "desc"
              }
              this.imageService.uploadImage(item, infoObject).subscribe(value => {

                this.postService.addPicture(this.neigh_id, this.postID, value['data'].link).subscribe();


                this.updatePost.emit();

              }, err => {
                this.toastrService.error(err, 'Error');
              });
            }

          }, err => {
            this.toastrService.error(err, 'Error');
          });



        if (this.group) {
          this.postService.addGroup(this.neigh_id, this.postID, this.group).subscribe(value => {
            this.updatePost.emit();
          })
        }

      }, err => {
        this.toastrService.error(err, 'Error');
      });


    return this.post;
  }


  ngOnInit() {

    this.getAuth();
    this.post = new ContentDetail();
    this.post.album = [];
    this.album = [];
    this.selected = [];
    this.images = [];
    this.selectedImages = [];
    this.form = this.fb.group({
      demo: ''
    })
  }


  addImage() {
    this.images.push(this.picker.file);
    this.form.get('demo').patchValue(this.images);
  }


  selectAll() {
    this.form.get('demo').patchValue(this.images);
  }


  getAuth() {
    this.authService.getAuthId().subscribe(value => this.residen_id = value);
  }
}
