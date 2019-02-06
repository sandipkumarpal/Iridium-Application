import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsendService {

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

  addContactEmail( data ): Observable<any>{
    console.log(`${environment.dataURL}contactus`);
    const dataGiven = {
      customer_name: data.customer_name,
      customer_email: data.customer_email,
      product_details: data.product_details,
      product_weight: data.product_weight,
      product_function: data.product_function,
      customer_phone: data.customer_phone,
      customer_city: data.customer_city,
      customer_message: data.customer_message,
    }
    console.log(dataGiven);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post(`${environment.dataURL}contactus`, dataGiven, {headers: headers})
    .pipe(
      catchError((err: any, caught: Observable<any>) => this.handleError(err))
    );
  }
}
