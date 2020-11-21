import { Resident } from '../resident/resident';
import { Business } from '../business/business';

export enum Priority {
    LOW,
    MEDIUM,
    HIGH
}

export class Notification {
    private _id: number;

    private _publishDate: Date;

    private _header: String;

    private _description: String;

    private _seen: boolean;

    private _priority: Priority;

    private _author:Resident;

    private _business:Business;

    constructor(id:number, publishDate:Date, header:String, description:String, seen:boolean,
                priority:Priority, author:Resident, business:Business){
                    this._id = id;
                    this._publishDate = publishDate;
                    this._header = header;
                    this._description = description;
                    this._seen = seen;
                    this._priority = priority;
                    this._business = business;
                    this._author = author;
                }

    public get priority(): Priority {
        return this._priority;
    }
    public get publishDate(): Date {
        return this._publishDate;
    }
    public get header(): String {
        return this._header;
    }
    public get description(): String {
        return this._description;
    }
    public get seen(): boolean {
        return this._seen;
    }
    public get id(): number {
        return this._id;
    }
    public get author(): Resident {
        return this._author;
    }
    public get business(): Business {
        return this._business;
    }
}

