/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Business} from './business';
import {Resident} from '../resident/resident';

/**
 *This class represents a business made by a resident
 */
export class BusinessDetail extends Business {

    /**
     * Represents comments received in this business
     */
    comments: Comment[];

    /**
     * Represents the users this business is visible to
     */
    viewers: Resident[];

}

