import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){ }

  getDataFromJson(){
    return this.http.get('https://api.github.com/users');
  }

  getData() {
      console.log('Hello, I am a Service.');
  }
}
