import { Resident } from '../home/resident';

export class Favor {

  public id:number;
  public author: Resident;
  public datePosted: string;
  public title: String;
  public description: String;
  public type: String;
  public isHelpWanted: Boolean;
  public candidates: Resident[];


}
