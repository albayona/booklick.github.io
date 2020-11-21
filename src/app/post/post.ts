/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Resident} from '../home/resident';
import {DatePipe} from "@angular/common";

/**
 *This class represents a post made by a resident
 */
export class Post {

  /**
   * Represents id of the post
   */

  public id: number;

  /**
   * Represents the date post was made
   */
  public publishDate: string;
  /**
   * Represents the title of the post
   */
  public title: string;

  /**
   * Represents the main text body shown in the post
   */
  public description: string;

  /**
   * Represents the number of numberOfLikes of the post
   */
  public numberOfLikes: number;


  /**
   * Represents the author of this post
   */
  author: Resident;


  // /**
  //  * Represents the group this post is shared with
  //  */
  // public group: Group;


  constructor() {
    this.id = -1;
    // @ts-ignore
    this.publishDate = new Date()
      this.title = "";
    this.description = "";
    this.numberOfLikes = 0;
    this.author = new Resident();
  }
}
