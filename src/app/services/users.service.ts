import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urlBase = 'https://jsonplaceholder.typicode.com/users'; //url de la api
  constructor(private http:HttpClient) { }

  getUsers(){ //método que nos retornara los usuarios
    return this.http.get<any>(this.urlBase);
  }
}
