/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Neighborhood} from '../neighborhood/neighborhood';
import {Login} from '../login/login';

/**
 *This class represents a resident made by a resident
 */
export class Resident {

  /**
   * Represents login of the profile
   */
  public login: Login;

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
  public neighborhood: Neighborhood;

  public profilePicture: string;

  public muralPicture: string;

  public livingSince: string;

  public birthDate: string;

  public joinDate: string;


  constructor(
    address: string,
    email: string,
    name: string,
    nickname: string,
    phonenumber: string,
    login: Login,

  ) {
    this
      .address = address;
    this
      .email = email;
    this
      .name = name;
    this
      .nickname = nickname;
    this
      .phoneNumber = phonenumber;
    this
      .preferences = '';
    this
      .proofOfResidence = '';
    this
      .login = login;
  }

  get Login()
    :
    Login {
    return this.login;
  }
}
