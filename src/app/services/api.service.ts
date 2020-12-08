import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //protected base_path  = 'http://localhost/wad-backed/mobileapi/kolektor/';
  base_path = 'https://kspwahyuartasejahtera.co.id/mobileapi/kolektor';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json; charset=utf-8'
    })
  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ada error : ', error.error.message);
    }else{
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }

  createtoken(item): Observable<Login> {
    return this.http
    .post<Login>(this.base_path + '/create_token', item.username, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }


  prosesLogin(item): Observable<Login> {
    return this.http
    .post<Login>(this.base_path + '/ceklogin', item, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  detailuser(id): Observable<User>{
    return this.http
    .get<User>(this.base_path + '/detailuser/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
