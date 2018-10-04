import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  itemsData:any;
  finalData: any[];
  constructor(public db: AngularFireDatabase) { }

  getData(page) {
    this.itemsData = this.db.object(`/${page || null}`);
    return this.itemsData;
  }
}
