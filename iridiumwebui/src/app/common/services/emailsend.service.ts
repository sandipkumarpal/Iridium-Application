import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmailsendService {
  constructor(
    public http: Http,
    public httpClient: HttpClient
  ) { }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  addEmail( data ): Observable<any>{
    console.log(`${environment.dataURL}feedback`, data.customeremail);
    const dataGiven = {
      customername: data.customername,
      customeremail: data.customeremail,
      customermessage: data.customermessage
    }
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(`${environment.dataURL}feedback`, dataGiven, {headers: headers})
    .pipe(
      catchError((err: any, caught: Observable<any>) => this.handleError(err))
    );
  }

}
