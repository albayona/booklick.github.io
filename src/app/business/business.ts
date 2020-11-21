/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import{Resident} from "../resident/resident";
import { Neighborhood } from '../neighborhood/neighborhood';

/**
 *This class represents a business made by a resident
 */
export class Business {

    /**
     * Represents id of the business
     */

    private _id: number;

    /**
     * The name of the business
     */
    private _name: String;

    /**
     * The address where the business is located.
     */
    private _address: String;

    /**
     * The time at which the business opens.
     */
    private _openingTime: String;

    /**
     * The time at which the business closes.
     */
    private _closingTime: String;

    /**
     * The rating on a scale of 1 to 5 of the business.
     */
    private _rating: number;

    /**
     * The business's latitude.
     */
    private _latitude: number;

    /**
     * The business's longitude.
     */
    private _longitude: number;

    /**
     * The neighborhood of the business
     */
    private _neighborhood: Neighborhood;

    /**
     * The resident the business belongs to.
     */
    private _owner: Resident;

    

    constructor(id: number, name: String, address: String, openingTime: string, closingTime:String, rating:number, 
                latitude:number, longitude:number, owner:Resident, neighborhood:Neighborhood) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._openingTime = openingTime;
        this._closingTime = closingTime;
        this._rating = rating;
        this._latitude = latitude;
        this._longitude = longitude;
        this._owner = owner;
        this._neighborhood = neighborhood;
    }
    public get id(): number {        return this._id;    }
	public get name(): String {        return this._name;    }
    public get address(): String {        return this._address;    }
    public get openingTime(): String {        return this._openingTime;    }
    public get closingTime(): String {        return this._closingTime;    }
    public get rating(): number {        return this._rating;    }
    public get latitude(): number {        return this._latitude;    }
    public get longitude(): number {        return this._longitude;    }
    public get owner(): Resident {        return this._owner;    }
    public get neighborhood(): Neighborhood {        return this._neighborhood;    }

}
