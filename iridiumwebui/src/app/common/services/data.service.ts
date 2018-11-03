import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { dataURL } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsData:any;
  constructor(private http: HttpClient){ }

  getDataFromJson(page){
    // console.log('http://universesofttechnologies.in/usmetal/index.php/contents/homeelments');
    return this.http.get(dataURL + 'homeelments', httpOptions);
  }

  getData() {
      console.log('Hello, I am a Service.');
  }
  // getData(page) {
  //   this.itemsData = this.db.object(`/${page || null}`);
  //   return this.itemsData;
  // }
}
