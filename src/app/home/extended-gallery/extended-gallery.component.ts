import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ResidentService} from "../resident.service";
import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";
import {ImageService} from "../../shared/file-picker/image.service";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {FilePickerComponent} from "../../shared/file-picker/file-picker.component";
import {PostDetail} from "../../post/post-detail";
import {ToastrService} from "ngx-toastr";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";

@Component({
  selector: 'app-extended-gallery',
  templateUrl: './extended-gallery.component.html',
  styleUrls: ['./extended-gallery.component.css']
})
export class ExtendedGalleryComponent implements OnInit {

  @ViewChild('picker5', {static: false}) picker: FilePickerComponent;
  @Input() album: string[];
  @Input() emptyMessage: string;
  @Input() notRouted: boolean;
  navigationSubscription;
  images: File[];
  selectedImages: File[];
  form: FormGroup;
  albumU: string[];

  neigh_id: number;
  resident_id: number;
  private tree: UrlTree;
  private canEdit: boolean;


  constructor(private service: ResidentService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private imageService: ImageService,
              private  toastrService: ToastrService,
              private authService: SimpleAuthService,
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
    this.resident_id = +this.tree.root.children['primary'].segments[3].path;
    this.service.getresident(this.neigh_id, this.resident_id).subscribe(value => this.album = value.album);
    this.emptyMessage = "There are still no pictures to show here. But it is as easy to use the attach button to upload any picture you want"
    this.authService.isOwner(this.resident_id).subscribe(value => {
      this.canEdit = value;
    });


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

        this.service.addPicture(this.neigh_id, this.resident_id, value['data'].link).subscribe();
        this.toastrService.success('1 image added');
        this.getAlbum();

      }, err => {
        this.toastrService.error(err, 'Error');
      });
    }
    this.form.get('demo').patchValue([]);

  }

  getAlbum() {
    this.service.getresident(this.neigh_id, this.resident_id)
      .subscribe(residentDetail => {
        this.album = residentDetail.album;
      });
  }

  editable(): boolean {
    return this.canEdit;
  }
}
