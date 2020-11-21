import {CommentP} from "./commentP";
import {Interest} from "./interest";
import {Booklist} from "../home/Booklist";


export class Content {
  public id: number
  public pages: number
  public likes: number
  public title: string
  public creator: string
  public description: string
  public language: string
  public year: string
  public imageURL: string
  public documentURL: string
  public interests: Interest[]
  public comments: CommentP[]



}



export class BooklistObject{


  public message: Booklist[]

}


