/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {CommentP} from './commentP';
import {Content} from './content';
import {Test} from '../home/test';

/**
 *This class represents a post made by a resident
 */
export class ContentDetail extends Content {

  /**
   * Represents comments received in this post
   */
  public comments: CommentP[];

  /**
   * Represents the users this post is visible to
   */
  public viewers: Test[];

  public album: string[];


  constructor() {
    super();
    this.comments = [];
    this.viewers = [];
    this.album = ["https://cdn.booklick.net/public/img/images/top-week-cover.png"];
  }
}

