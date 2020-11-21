/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *This class represents a resident made by a resident
 */
export class Test {

  /**
   * Represents id of the resident
   */

  public id: number;

  /**
   * Represents phone number of this resident
   */
  public phoneNumber: string;

  /**
   * Represents email of this resident
   */
  public email: string;

  /**
   * Represents the name of this resident
   */
  public name: string;

  /**
   * Represents nickname of this resident
   */
  public nickname: string;

  /**
   * The resident's address.
   */
  public address: string;

  /**
   * Represents preferences of this resident
   */
  public preferences: string;

  /**
   * Represents a link to a proof of residence file of this resident
   */
  public proofOfResidence: string;
  /**
   * Represents the neighborhood of this resident
   */

  public profilePicture: string;

  public muralPicture: string;

  public livingSince: string;

  public birthDate: string;

  public joinDate: string;


  constructor() {
    this.id = -1;
    this.phoneNumber = "NA";
    this.email = "NA";
    this.name = "NA";
    this.nickname = "NA";
    this.address = "NA";
    this.preferences = "NA";
    this.proofOfResidence = "NA";
    this.profilePicture = "NA";
    this.muralPicture = "NA";
    this.livingSince = "NA";
    this.birthDate = "NA";
    this.joinDate = "NA";
  }
}
