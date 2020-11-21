import {Group} from "./group";
import {Resident} from "../home/resident";
import {PostDetail} from "../post/post-detail";

export class GroupDetail extends Group {


  public members: Resident[];

  public posts: PostDetail[];

  public album: string[];

}

