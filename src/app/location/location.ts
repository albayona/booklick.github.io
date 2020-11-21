/**
 * Class that represents a neighborhood Location.
 */
export class Location {
  //===================================================
  // Attributes
  //===================================================
  /**
   * The id of the location.
   */
  public id: number;

  /**
   * The name of the location.
   */
  public name: string;

  /**
   * The address of the location.
   */
  public address: string;

  /**
   * The open time of the location.
   */
  public openTime: string;

  /**
   * The close time of the location.
   */
  public closeTime: string;

  /**
   * The latitude of the location.
   */
  public latitude: number;

  /**
   * The longitude of the location.
   */
  public longitude: number;

  //===================================================
  // Constructor
  //===================================================

  constructor(
    name: string,
    address: string,
    openTime: string,
    closeTime: string,
    latitude: number,
    longitude: number
  ) {
    this.name = name;
    this.address = address;
    this.openTime = openTime;
    this.closeTime = closeTime;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
