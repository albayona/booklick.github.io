/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {CommentP} from './commentP';
import {Post} from './post';
import {Resident} from '../home/resident';

/**
 *This class represents a post made by a resident
 */
export class PostDetail extends Post {

    /**
     * Represents comments received in this post
     */
    public comments: CommentP[];

    /**
     * Represents the users this post is visible to
     */
    public viewers: Resident[];

    public album: string[];


    constructor() {
        super();
        this.comments = [];
        this.viewers = [];
        this.album = [];
    }
}

