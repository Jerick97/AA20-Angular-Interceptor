import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class PermisosInterceptor implements HttpInterceptor {

  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptado")
    //Cuando utilizamos el request ya no se puede utilizar, por eso se debe clonar antes de ser manipulada
    //Para eso se debe hacer un clone y añadir los headers y parámetros
    const authReq = request.clone({headers: request.headers.set('Token-Usuario', 'ABC1290381902ALKDJ1902')});//el nombre del token no debe llevar espacios o no funcionara
    return next.handle(authReq).pipe(
      catchError(this.manejarError) //Capturamos el error
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError(() => new Error('Error personalizado'));
  }
  constructor() {}
}
