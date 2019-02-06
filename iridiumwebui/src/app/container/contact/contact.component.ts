import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../common/services/data.service';
import { ContactAnimation } from '../../common/animations/contact.animation';
import { EmailsendService } from '../../common/services/emailsend.service';
import { ContactsendService } from '../../common/services/contactsend.service';

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
    lowerCaseTitle: string = "contact";
    address: string;
    contact_designation: string;
    contact_name: string;
    contact_officer_designation: string;
    contact_officer_number: number;
    contact_email: any[];
    contact_number: any[];
    numbers: any;
    feedBackSubmitted = false;
    feedBackError= false;
    contactSubmitted = false;
    contactError= false;

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    feedbackForm = this.fb.group({
      customername: ['', Validators.required],
      customeremail: ['', [Validators.required, Validators.email]],
      customermessage: [''],
    });

    contactForm = this.fb.group({
      customer_name: ['', Validators.required],
      customer_email: ['', [Validators.required, Validators.email]],
      product_details: ['', Validators.required],
      product_weight: ['', Validators.required],
      product_function: ['', Validators.required],
      customer_phone: ['', Validators.required],
      customer_city: ['', Validators.required],
      customer_message: [''],
    });

    feedBackSubmit() {
      this.feedBackSubmitted = true;
      if (this.feedbackForm.invalid) {
        this.feedBackError = true;
        return;
      } else {
        this.feedBackError = false;
        console.warn('Data', this.feedbackForm.value);
        this.emailsend.addEmail(this.feedbackForm.value).subscribe(
          data => {
            console.log('Success!', data);
          },
          error => console.log('Error!', error)
        );
        this.feedbackForm.reset();
      }
    }

    contactSubmit() {
      this.contactSubmitted = true;
      if(this.contactForm.invalid) {
        this.contactError = true;
        return;
      } else {
        this.contactError = false;
        console.log('Data', this.contactForm.value);
        this.contactsend.addContactEmail(this.contactForm.value).subscribe(
          data => {
            console.log('Success!', data);
          },
          error => console.log('Error!', error)
        );
        this.contactForm.reset();
      }
    }

    constructor(
      private location: Location,
      private fb: FormBuilder,
      private emailsend: EmailsendService,
      private contactsend: ContactsendService,
      private dataService : DataService) { }

    ngOnInit() {
        this.fetchGalleryData(this.lowerCaseTitle);
        this.feedBackSubmit();
        this.contactSubmit();

        this.myStyle = {
          'position': 'fixed',
          'width': '50%',
          'height': '100%',
          'z-index': 1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

      this.myParams = {
              particles: {
                  number: {
                      value: 200,
                  },
                  color: {
                      value: '#fff'
                  },
                  shape: {
                      type: 'triangle',
                  },
          }
      };
    }
    cancelContact() {
        this.location.back();
    }
    fetchGalleryData(pageTitle) {
      try {
        this.dataService.getDataFromJson(pageTitle).pipe(
          map(res => res[0].contact)
        ).subscribe(resData => {
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
        });
      } catch (e) {
        console.log(e);
      }
    }
}
