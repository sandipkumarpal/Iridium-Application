import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// const emailjs = require('./../../node_modules/emailjs/email');

@Injectable({
  providedIn: 'root'
})
export class EmailsendService {

  constructor(private http: Http) { }

  addEmail( emailData ) {

    const header = new Headers();

    header.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:3333/address', emailData, {headers: header}).subscribe((data) => {
      if(data.json().success) {
        console.log('Add Email');
      }
    });
   console.log(emailData);
  }
}
