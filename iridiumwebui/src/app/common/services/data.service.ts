import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment  } from '../../../environments/environment';
import { map } from 'rxjs/operators';

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
    return this.http.get(environment.dataURL + page, httpOptions);
  }
}
