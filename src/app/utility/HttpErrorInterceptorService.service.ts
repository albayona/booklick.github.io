import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()

  export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router,
      private toast: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error) => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      //login
                this.router.navigateByUrl("/login");
                this.toast.error("Access denied: need authentication")
                break;
              case 403:     //forbidden
                this.router.navigateByUrl("/login");
                this.toast.error("Access denied: need admin authentication")
                break;
            }
          }
        } else {
          console.error("something else happened");
        }
        return throwError(error);
      })
    )

   }


}


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });

    return next.handle(request);
  }
}
