import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeBlockContentAnimation } from '../../common/animations/homeBlockContent.animation'; 
const homeContent = [
    {
        id: 1,
        color: '#e64a19',
        title: 'About Iridium',
        image: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.',
        blocks: [
            {
                title: 'Title',
                thumb: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg'
            },
            {
                title: 'Title',
                thumb: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg'
            },
            {
                title: 'Title',
                thumb: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg'
            },
            {
                title: 'Title',
                thumb: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg'
            }
        ],
        subImage: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg',
        subContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam',
    },
    {   
        id: 2,
        color: '#03a9f4',
        title: 'Atomic details',
        image: 'http://universesofttechnologies.in/amru_new/images/atomic-details.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi earum provident tenetur aperiam necessitatibus cumque nemo mollitia voluptas et aliquid veritatis reiciendis veniam ab odio repellat accusamus modi, quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nemo vel voluptas quod adipisci dolorum iusto nihil, repellat eum perspiciatis sunt vitae, eveniet eos, quaerat tempore mollitia dolores id odit.'    
    },
    {   
        id: 3,
        color: '#388e3c',
        title: 'Daily life usage',
        image: 'http://universesofttechnologies.in/amru_new/images/daily-life-usage.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 4,
        color: '#ffeb3b',
        title: 'Medical value',
        image: 'http://universesofttechnologies.in/amru_new/images/medical-value.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 5,
        color: '#546e7a',
        title: 'About Iridium',
        image: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {   
        id: 6,
        color: '#e53935',
        title: 'Atomic details',
        image: 'http://universesofttechnologies.in/amru_new/images/atomic-details.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi earum provident tenetur aperiam necessitatibus cumque nemo mollitia voluptas et aliquid veritatis reiciendis veniam ab odio repellat accusamus modi, quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nemo vel voluptas quod adipisci dolorum iusto nihil, repellat eum perspiciatis sunt vitae, eveniet eos, quaerat tempore mollitia dolores id odit.'    
    },
    {   
        id: 7,
        color: '#8bc34a',
        title: 'Daily life usage',
        image: 'http://universesofttechnologies.in/amru_new/images/daily-life-usage.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 8,
        color: '#00796b',
        title: 'Medical value',
        image: 'http://universesofttechnologies.in/amru_new/images/medical-value.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    }
];

@Component({
    selector: 'app-homeBlockContent',
    templateUrl: './homeBlockContent.component.html',
    styleUrls: ['./homeBlockContent.component.scss'],
    animations: [ homeBlockContentAnimation ],
    host: {
        '[@homeBlockContentAnimation]': ''
    }
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
