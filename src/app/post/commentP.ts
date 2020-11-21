/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Content} from "./content";
import {Test} from "../home/test";

export class CommentP {

    /**
     * The id of this comment.
     */
    public id: number;


    /**
     * The author of this comment.
     */
    public author: Test;

    /**
     * The post the comment belongs to.
     */
    public post: Content;

    /**
     * Represents the date this comment was posted.
     */
    public date: string;

    /**
     * The text body shown in this post.
     */
    public text: string;
    W

}
