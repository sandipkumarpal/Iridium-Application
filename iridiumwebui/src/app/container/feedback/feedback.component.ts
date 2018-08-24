import { Component } from '@angular/core';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})

export class FeedbackComponent {
    titlemessage : string = "Feedback";
    bannerImage : string = "../../assets/banner1.jpg"; 
}
