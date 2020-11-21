import { Component, OnInit } from '@angular/core';
import{ Favor } from '../favor';
import { FavorService } from '../favor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favor-list',
  templateUrl: './favor-list.component.html',
  styleUrls: ['./favor-list.component.css']
})
export class FavorListComponent implements OnInit {

  constructor(private favorService:FavorService,
    private route: ActivatedRoute) { }

  public favors:Array<Favor>;
  neighId: number;

  getFavors(){
    this.favorService.getFavors(this.neighId).subscribe(bs=> {
      this.favors = bs;
    })
  }

  selected=false;
  selectedFavor:Favor;

  onSelected(c:Favor):void{
    this.selected=true;
    this.selectedFavor=c;
  }

  nothingSelected():void{
    this.selected=false;
  }

  ngOnInit() {
    this.neighId = +this.route.snapshot.paramMap.get('id');

    this.getFavors();

  }

}
