/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Test} from './test';
import {Content} from "../post/content";
import {CommentP} from "../post/commentP";


/**
 *This class represents a resident made by a resident
 */
export class UserDetail extends Test {


  /**
   * Posts shared with this resident.
   */
  public postsToView: Content[];


  /**
   * Represents posts made by this resident
   */
  public posts: Content[];


  /**
   * Represents comments posted by this resident
   */
  public comments: CommentP[];


  public album: string[];


}


