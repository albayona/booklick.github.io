import { Resident } from '../resident/resident';

/**
 * Class that represents a Resident Login.
 */
export class Login {
  //===================================================
  // Attributes
  //===================================================
  /**
   */
  public username: string;

  /**
   * The password of the login.
   */
  public password: string;



  //===================================================
  // Constructor
  // Constructor
  // Constructor
  //===================================================

  constructor(username:string, password: string) {
   this.username = username;
   this.password = password;

  }



}

export class Protected{

public  current_identity: string
public  current_roles: string
}

export class Message{

  public  message: string

}
