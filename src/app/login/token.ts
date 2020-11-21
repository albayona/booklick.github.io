


export class Token {
  //===================================================
  // Attributes
  //===================================================
  /**
   */
  public access_token: string;

  /**
   * The password of the login.
   */
  public refresh_token: string;



  //===================================================
  // Constructor
  //===================================================

  constructor(access_token:string, refresh_token: string) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;

  }


}

