import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PermisosInterceptor implements HttpInterceptor {

  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptado")
    const authReq = request.clone({headers: request.headers.set('Authorization', 'Bearer my-auth-token')});
    return next.handle(authReq);
  }
  constructor() {}
}
