import {Neighborhood} from "../neighborhood/neighborhood";
import {Resident} from "../home/resident";

export class Group {
  /**
   * Represents the date group was created
   */

  public dateCreated: string;

  /**
   * Represents the name of this group
   */
  public name: string;

  /**
   * Represents a description of this group
   */
  public description: string;


  public neighborhood: Neighborhood;

  public id: number;

  public muralPicture: string;


}
