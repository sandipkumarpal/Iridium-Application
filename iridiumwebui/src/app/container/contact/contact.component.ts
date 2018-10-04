import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FirebaseService } from '../../common/services/firebase.service';
import { ContactAnimation } from '../../common/animations/contact.animation';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [ContactAnimation],
    host: {
        '[@ContactAnimation]': ''
    }
})

export class ContactComponent implements OnInit {
    titlemessage : string = "Contact Us";
    lowerCaseTile: string = "contact";
    address: string;
    contact_designation: string;
    contact_name: string;
    contact_officer_designation: string;
    contact_officer_number: number;
    contact_email: any[];
    contact_number: any[];
    numbers: any;

    constructor(private location: Location, private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.dataGotedFromServer(this.lowerCaseTile);
    }
    cancelContact() {
        this.location.back(); 
    }
    dataGotedFromServer(lowerCaseTile) {
        try {
            this.firebaseService.getData(lowerCaseTile)
                .valueChanges()
                .subscribe(resData => {
                    this.address = resData.address;
                    this.contact_designation= resData.contact_designation;
                    this.contact_name= resData.contact_name;
                    this.contact_officer_designation= resData.contact_officer_designation;
                    this.contact_officer_number= resData.contact_officer_number;
                    this.contact_email= resData.contact_email;
                    this.contact_number= resData.contact_number;
                },
                error => {
                  console.log(error, "error");
                })
          } catch (e) {
            console.log(e);
          }
    }
}
