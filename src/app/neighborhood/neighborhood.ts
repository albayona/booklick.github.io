import { Resident } from '../resident/resident';

/**
 * Class that represents a neighborhood.
 */
export class Neighborhood {
  //===================================================
  // Attributes
  //===================================================
  /**
   * The id of the neighborhood.
   */
  public id: number;

  /**
   * The name of the neighborhood.
   */
  public name: string;

  /**
   * The locality of the neighborhood.
   */
  public locality: string;

  /**
   * The max capacity of residents of the neighborhood.
   */
  public numberOfResidents: number;

  /**
   * The people of the neighborhood.
   */
  public people: Array<Resident>;

  //===================================================
  // Constructor
  //===================================================

  /**
   * Constructs a new neighborhood.
   * @param id the id of the new neighborhood
   * @param name the name of the new neighborhood
   * @param locality the locality of the new neighborhood
   * @param numberOfResidents the max capacity of residents of the new neighborhood
   */
  constructor(
    id: number,
    name: string,
    locality: string,
    numberOfResidents: number  ) {
    this.id = id;
    this.name = name;
    this.locality = locality;
    this.numberOfResidents = numberOfResidents;
  }
  //===================================================
  // Getter & Setters
  //===================================================

  /**
   * Returns the id of the neighborhood.
   */
  get Id(): number {
    return this.id;
  }

  /**
   * Returns the name of the neighborhood.
   */
  get Name(): string {
    return this.name;
  }

  /**
   * Returns the locality of the neighborhood.
   */
  get Locality(): string {
    return this.locality;
  }

  get People(): Array<Resident>{
    return this.people;
  }

  /**
   * Returns the max number of residents in the neighborhood.
   */
  get NumberOfResidents(): number {
    return this.numberOfResidents;
  }
}
