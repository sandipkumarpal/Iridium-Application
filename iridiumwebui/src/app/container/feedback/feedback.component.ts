import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FeedbackAnimation } from '../../common/animations/feedback.animation';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    animations: [FeedbackAnimation],
    host: {
        '[@FeedbackAnimation]': ''
    }
})

export class FeedbackComponent implements OnInit {
    titlemessage : string = "Feedback";
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    constructor(private location: Location) { } 

    cancelContact() {
        this.location.back(); 
    }
    ngOnInit() {
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
}
