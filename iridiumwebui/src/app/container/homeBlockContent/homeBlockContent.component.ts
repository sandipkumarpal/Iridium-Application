import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const homeContent = [
    {
        id: 1,
        title: 'About Iridium',
        image: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {   
        id: 2,
        title: 'Atomic details',
        image: 'http://universesofttechnologies.in/amru_new/images/atomic-details.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi earum provident tenetur aperiam necessitatibus cumque nemo mollitia voluptas et aliquid veritatis reiciendis veniam ab odio repellat accusamus modi, quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nemo vel voluptas quod adipisci dolorum iusto nihil, repellat eum perspiciatis sunt vitae, eveniet eos, quaerat tempore mollitia dolores id odit.'    
    },
    {   
        id: 3,
        title: 'Daily life usage',
        image: 'http://universesofttechnologies.in/amru_new/images/daily-life-usage.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 4,
        title: 'Medical value',
        image: 'http://universesofttechnologies.in/amru_new/images/medical-value.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    }
];

@Component({
    selector: 'app-homeBlockContent',
    templateUrl: './homeBlockContent.component.html',
    styleUrls: ['./homeBlockContent.component.scss']
})

export class HomeBlockContentComponent implements OnInit {

    private sub:any;
    private content;
    data = homeContent;
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            let hContent = this.data.filter(element => element.id == id);
            this.content = hContent;
        });
    }
}
