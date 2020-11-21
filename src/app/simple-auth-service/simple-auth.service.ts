import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {NgxRolesService} from "ngx-permissions";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {UserDetail} from "../home/user-detail";
import {ResidentService} from "../home/resident.service";
import {Test} from "../home/test";
import {ToastrService} from "ngx-toastr";
import {PostService} from "../post/post.service";


export function handleRequest() {
  return function <TFunction extends Function>(target: TFunction) {
    for (let prop of Object.getOwnPropertyNames(target.prototype)) {
      if (prop === 'closeSession') continue;
      // Save the original function
      let oldFunc: Function = target.prototype[prop];
      if (oldFunc instanceof Function) {
        target.prototype[prop] = function () {
          this['closeSession'](); // call the extra method
          return oldFunc.apply(this, arguments); // call the original and return any result
        }
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
@handleRequest()
export class SimpleAuthService {

  /**
   * Constructor of the service
   * @param router Angular's Router to redirect the user on login or logout
   * @param http
   * @param groupService
   * @param postService
   * @param residentService
   * @param toast
   */
  constructor(
    private router: Router,
    private http: HttpClient,
    private postService: PostService,
    private residentService: ResidentService,
    private toast: ToastrService
  ) {
  }

  header: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  /**
   * Inicializa los roles y permisos. <br>
   * Por defecto se inicializa como 'Invitado'. <br>
   * De lo contrario, se inicializa como Admin, Comprador o Vendedor.
   */


  /**
   * Cierra la sesión
   */
  logout(): void {


    localStorage.clear();
    this.toast.info("Session closed successfully")
  }

  closeSession() {
    // let tree;
    // tree = this.router.parseUrl(this.router.url);
    // let neigh_id;
    // neigh_id = +tree.root.children['primary'].segments[1].path;

    //
    // if (localStorage.getItem('userId') == undefined) {
    //   // this.router.navigateByUrl('/');
    //   // this.toast.warning("You are not authenticated");
    // }
    //
    // if (neigh_id != Number(localStorage.getItem('neighId'))) {
    //   // this.router.navigateByUrl('/');
    //   // localStorage.clear();
    //   // this.toast.warning("You are not authenticated for this neighborhood");
    // }
  }


  /**
   * Obtiene un comprador mediante una consulta al API
   * @param credenciales Credenciales de inicio de sesión.
   */
  isOwner(id): Observable<boolean> {
    let b: boolean;
    b = false

    if (localStorage.getItem('userId') == id + "") {
      b = true;
    }

    return of(b);
  }


  getAuthId(): Observable<number> {
    return of(Number(localStorage.getItem('userId')));
  }

  getAuthUser(): Observable<Test> {
    // return this.residentService.getresident(Number(localStorage.getItem('neighId')), Number(localStorage.getItem('userId')));
    return new Observable<Test>();
  }

}
