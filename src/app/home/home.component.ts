import {ActivatedRoute, NavigationEnd, Router, UrlTree} from "@angular/router";
import {ResidentService} from "./resident.service";
import {UserDetail} from "./user-detail";
import {ToastrService} from "ngx-toastr";
import {Content} from "../post/content";
import {PostListComponent} from "../post/post-list/post-list.component";
import {SimpleAuthService} from "../simple-auth-service/simple-auth.service";
import {ImageService} from "../shared/file-picker/image.service";
import {Test} from "./test";
import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {FilePickerComponent} from "../shared/file-picker/file-picker.component";
import {ContentDetail} from "../post/content-detail";
import {Booklist} from "./Booklist";
import {ContentService} from "../post/content.service";
import {LoginService} from "../login/login.service";
import {User} from "./User";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  user: User;
  neigh_id: number;
  username: string
  resident_id: number;
  navigationSubscription;
  @Input() resident: UserDetail;
  residents: Test[];
  contents: Content[];
  @ViewChild(PostListComponent, {static: true}) postsList: PostListComponent;
  @ViewChild('pick1', {static: true}) picker: FilePickerComponent;
  @ViewChild('pick2', {static: true}) picker2: FilePickerComponent;
  toggle1: boolean;
  toggle2: boolean;
  file: File;
  private canEdit: boolean;
  private tree: UrlTree;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ResidentService,
              private contentService: ContentService,
              private toastService: ToastrService,
              private authService: SimpleAuthService,
              private imageService: ImageService,
              private logService:  LoginService
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
    this.logService.getProtected().subscribe()

    this.username = "";
    console.log("HomeInit")
    // this.getContents();

    // this.contentService.getContents()
    //   .subscribe(obj => {
    //     this.contents = obj.contents;
    //   });

    console.log(this.contents)
    this.resident = new UserDetail();

    // this.tree = this.router.parseUrl(this.router.url);
    // this.neigh_id = +this.tree.root.children['primary'].segments[1].path;
    // this.resident_id = +this.tree.root.children['primary'].segments[3].path;

    // this.getResident();
    // this.getFavors();

    // this.getResidents();
    this.toggle1 = true;
    this.toggle2 = false;

    this.logService.getUser().
    subscribe(value => {
        this.user = value;
        this.username = this.user.username
      });
  }

  getResident() {

    // this.service.getresident(this.neigh_id, this.resident_id)
    //   .subscribe(residentDetail => {
    //     this.resident = residentDetail;
    //   });

    this.resident = new UserDetail();
  }

  getResidents() {
    // this.service.getresidents(this.neigh_id)
    //   .subscribe(residentDetail => {
    //     this.residents = residentDetail;
    //   });


    this.residents = [new UserDetail(), new UserDetail()]
  }


  updatePosts() {
    // this.service.getposts(this.neigh_id, this.resident_id)
    //   .subscribe(posts => {
    //
    //     this.posts = posts;
    //
    //     console.log(this.posts);
    //
    //     this.postsList.updatePosts(this.posts);
    //     this.postsList.updatePosts(this.posts);
    //   });
    this.contents = []

  }




  // getContents() {
  //   this.contentService.getContents()
  //     .subscribe(obj => {
  //       this.contents = obj.contents;
  //     });
  //
  //   console.log("sadafsdgf")
  //   console.log( this.contents)
  // }

  updateProfile() {

    // this.service.updateResident(this.neigh_id, this.resident_id, this.resident)
    //   .subscribe(value => {
    //
    //     this.resident = value;
    //   });
  }

  addPicture() {

    let infoObject = {
      title: "title",
      description: "desc"
    }

    this.imageService.uploadImage(this.file, infoObject).subscribe(value => {

      this.resident.profilePicture = value['data'].link;
      this.updateProfile();
    }, err => {
      this.toastService.error(err, 'Error');
    });

  }

  addMural() {

    let infoObject = {
      title: "title",
      description: "desc"
    }

    this.imageService.uploadImage(this.file, infoObject).subscribe(value => {

      this.resident.muralPicture = value['data'].link;
      this.updateProfile();
    }, err => {
      this.toastService.error(err, 'Error');
    });

  }



  toggle11() {
    this.toggle1 = !this.toggle1;
  }


  toggle12() {
    this.toggle2 = !this.toggle2;
  }

  isEmpty(atr): boolean {

    let rta: boolean;

    if (atr == undefined) {
      rta = true;
    } else if (atr == null) {
      rta = true;
    } else if (atr.toString() == '') {
      rta = true;
    }
    return rta;
  }

  editable(): boolean {
    // this.authService.isOwner(this.resident.id).subscribe(value => {
    //   this.canEdit = value;
    // });
    return true;
  }

  obtainFile() {
    this.file = this.picker.file;
  }

  obtainFile2() {
    this.file = this.picker2.file;
  }

  canView(posts: ContentDetail): boolean {
    let b: boolean
    b = false;

    // this.authService.getAuthId().subscribe(value => {
    //     if (posts.viewers.map(value => value.id).indexOf(value) >= 0) b = true;
    //     if (value == posts.creator) b = true;
    //   }
    // )

    console.log(posts.viewers)
    console.log(b)
    console.log(b)
    return true;
  }

}
