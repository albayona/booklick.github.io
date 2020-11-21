import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FilePickerComponent} from "../../shared/file-picker/file-picker.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";
import {ResidentService} from "../../home/resident.service";
import {ImageService} from "../../shared/file-picker/image.service";
import {ToastrService} from "ngx-toastr";
import {GroupService} from "../group.service";

@Component({
  selector: 'app-group-gallery',
  templateUrl: './group-gallery.component.html',
  styleUrls: ['./group-gallery.component.css']
})
export class GroupGalleryComponent implements OnInit {

  @ViewChild(FilePickerComponent, {static: true}) picker: FilePickerComponent;
  album: string[];
  @Input() emptyMessage: string;
  navigationSubscription;
  images: File[];
  selectedImages: File[];
  form: FormGroup;
  albumU: string[];

  neigh_id: number;
  group_id: number;
  private tree: UrlTree;

  constructor(private service: GroupService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private imageService: ImageService,
              private  toastrService: ToastrService
  ) {

    //This is added so we can refresh the view when one of the bikes in
    //the "Other bikes" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }

  ngOnInit() {
    this.album = [];
    this.images = [];
    this.selectedImages = [];
    this.form = this.fb.group({
      demo: ''
    })

    this.tree = this.router.parseUrl(this.router.url);
    this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    this.group_id = +this.tree.root.children['primary'].segments[3].path;
    this.getAlbum();
    this.emptyMessage = "There are still no pictures to show here. But it is as easy to use the attach button to upload any picture you want"


  }

  addImage() {
    this.images.push(this.picker.file);
    this.form.get('demo').patchValue(this.images);

  }


  selectAll() {
    this.form.get('demo').patchValue(this.images);
  }

  addPictures() {

    for (var i = 0; i < this.images.length; i++) {
      let item = this.images[i];
      let infoObject = {
        title: "title",
        description: "desc"
      }
      this.imageService.uploadImage(item, infoObject).subscribe(value => {

        this.service.addPicture(this.neigh_id, this.group_id, value['data'].link).subscribe();
        this.toastrService.success('1 image added');
        this.getAlbum();

      }, err => {
        this.toastrService.error(err, 'Error');
      });
    }
    this.form.get('demo').patchValue([]);

  }

  getAlbum() {
    this.service.getgroup(this.neigh_id, this.group_id)
      .subscribe(val => {
        this.album = val.album;
      });
  }


}
