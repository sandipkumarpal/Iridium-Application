import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// const emailjs = require('./../../node_modules/emailjs/email');

@Injectable({
  providedIn: 'root'
})
export class EmailsendService {

  constructor() { }

  addEmail( emailData ) {
    // var server 	= email.server.connect({
    //     user:    "username",
    //     password:"password",
    //     host:    "smtp.your-email.com",
    //     ssl:     true
    // });
    // const header = new Headers();

    // const cards = 'name=' + emailData.feedbackName + '&email=' + emailData.feedbackEmail + '&comment=' + emailData.feedbackComment;
    // header.append('Content-Type', 'application/x-www-form-urlencoded');

    // this.http.post('http://localhost:3333/address', cards, {headers: header}).subscribe((data) => {
    //   if(data.json().success) {
    //     console.log('Add Email');
    //   }
    // });
  //   server.send({
  //     text:    "i hope this works",
  //     from:    "you <username@your-email.com>",
  //     to:      "someone <someone@your-email.com>, another <another@your-email.com>",
  //     cc:      "else <else@your-email.com>",
  //     subject: "testing emailjs"
  //  }, function(err, message) { console.log(err || message); });
  //   console.log(emailData);
  }
}
