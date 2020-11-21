import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Group} from "../group";
import {GroupService} from "../group.service";
import {ResidentDetail} from "../../home/resident-detail";
import {ActivatedRoute} from "@angular/router";
import {GroupDetail} from "../group-detail";
import {SimpleAuthService} from "../../simple-auth-service/simple-auth.service";
import {PostListComponent} from "../../post/post-list/post-list.component";
import {Post} from "../../post/post";
import {Resident} from "../../home/resident";
import {ToastrService} from "ngx-toastr";
import {FilePickerComponent} from "../../shared/file-picker/file-picker.component";
import {ImageService} from "../../shared/file-picker/image.service";
import {HttpClient} from "@angular/common/http";
import {PostDetail} from "../../post/post-detail";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css', './group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {


  constructor(private  service: GroupService,
              private route: ActivatedRoute,
              private authService: SimpleAuthService,
              private toastrService: ToastrService,
              private imageService: ImageService,
              private toastService: ToastrService,
  ) {
  }

  @ViewChild(PostListComponent, {static: false}) postsList: PostListComponent;
  @Input() group: GroupDetail;
  @Input() group_id: number;
  @Input() neigh_id: number;
  posts: Post[];
  toggle1: boolean;
  toggle2: boolean;
  searchModel: string;
  residents: Resident[];
  members: Resident[];
  selected: Resident[];
  @ViewChild('pick22', {static: false}) picker2: FilePickerComponent;
  file: File;
  canEdit: boolean;

  ngOnInit() {
    this.selected = [];
    this.group = new GroupDetail();
    this.neigh_id = +this.route.root.firstChild.firstChild.snapshot.paramMap.get("id");
    this.group_id = +this.route.root.firstChild.firstChild.firstChild.firstChild.snapshot.paramMap.get("id");
    this.getDetail();
    this.getMembers();
    this.toggle1 = true;
    this.toggle2 = false;
  }

  getDetail(): void {

    this.service.getgroup(this.neigh_id, this.group_id)
      .subscribe(o => {
        this.group = o;
      });


  }

  updatePosts() {
    this.service.getPosts(this.neigh_id, this.group_id)
      .subscribe(posts => {

        this.posts = posts;

        console.log(this.posts);

        this.postsList.updatePosts(this.posts);
        this.postsList.updatePosts(this.posts);
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

  addMembers() {

    this.service.addMembers(this.neigh_id, this.group_id, this.members.concat(this.selected)).subscribe(() => {
      this.toastrService.success(this.selected.length + " members were successfully added", 'Members added');
      this.getMembers();

    }, err => {
      this.toastrService.error(err, 'Error');
    });


  }

  getMembers(): void {
    this.service.getmembers(this.neigh_id, this.group_id)
      .subscribe(ms => {
        this.members = ms;

        this.service.getPotentialMembers(this.neigh_id, this.group_id)
          .subscribe(residents => {
            this.residents = residents;

          })
        this.authService.getAuthId().subscribe(value => {
            if (ms.map(value => value.id).indexOf(value) >= 0) this.canEdit = true;
          }
        )
      });
  }

  obtainFile2() {
    this.file = this.picker2.file;
  }

  addMural() {

    let infoObject = {
      title: "title",
      description: "desc"
    }

    this.imageService.uploadImage(this.file, infoObject).subscribe(value => {

      this.group.muralPicture = value['data'].link;
      this.updateGroup();
    }, err => {
      this.toastService.error(err, 'Error');
    });

  }

  updateGroup() {

    this.service.updateGroup(this.neigh_id, this.group_id, this.group)
      .subscribe(value => {

        this.group = value;
      });
  }

  editable() {
    return this.canEdit;
  }


  addMember() {
    this.authService.getAuthId().subscribe(value => {
      this.service.addMember(this.neigh_id, this.group_id, value).subscribe(value1 => {
        this.getMembers();
      })


    })
  }


}

