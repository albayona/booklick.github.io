/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Resident} from './resident';
import {Post} from "../post/post";
import {CommentP} from "../post/commentP";
import {Favor} from "../favor/favor";

/**
 *This class represents a resident made by a resident
 */
export class ResidentDetail extends Resident {


  /**
   * Posts shared with this resident.
   */
  public postsToView: Post[];


  /**
   * Represents posts made by this resident
   */
  public posts: Post[];

  public favorsRequested: Favor[];

  /**
   * Represents comments posted by this resident
   */
  public comments: CommentP[];


  public album: string[];


}


