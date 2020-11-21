import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';
import { BusinessDetail } from '../business-detail';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  constructor( private bussinessService: BusinessService,
    private route: ActivatedRoute) {

  }
  neighId: number;
  selectedBusiness:BusinessDetail;
  selected=false;
  public businesses:Array<Business>;

  getAllBusiness(){
    console.log("In de getAllBusiness");

    this.bussinessService.getbusinesses(this.neighId).subscribe(bs => {
        this.businesses = bs;
      }
    )
  }

  onSelected(c:BusinessDetail):void{
    this.selected = true;
    this.selectedBusiness = c;
  }

  nothingSelected():void{
    this.selected = false;

  }

  ngOnInit() {
      this.neighId = +this.route.snapshot.paramMap.get('id');

      this.getAllBusiness();
  }

}
