import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { homeBlockContentAnimation } from '../../common/homeBlockContent.animation'; 
const homeContent = [
    {
        id: 1,
        color: '#ff9900',
        title: 'About Iridium',
        image: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {   
        id: 2,
        color: '#ff1ba7',
        title: 'Atomic details',
        image: 'http://universesofttechnologies.in/amru_new/images/atomic-details.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi earum provident tenetur aperiam necessitatibus cumque nemo mollitia voluptas et aliquid veritatis reiciendis veniam ab odio repellat accusamus modi, quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nemo vel voluptas quod adipisci dolorum iusto nihil, repellat eum perspiciatis sunt vitae, eveniet eos, quaerat tempore mollitia dolores id odit.'    
    },
    {   
        id: 3,
        color: '#ff1b3d',
        title: 'Daily life usage',
        image: 'http://universesofttechnologies.in/amru_new/images/daily-life-usage.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 4,
        color: '#3b1bff',
        title: 'Medical value',
        image: 'http://universesofttechnologies.in/amru_new/images/medical-value.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 5,
        color: '#1bffd2',
        title: 'About Iridium',
        image: 'http://universesofttechnologies.in/amru_new/images/about-iridium.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {   
        id: 6,
        color: '#feff1b',
        title: 'Atomic details',
        image: 'http://universesofttechnologies.in/amru_new/images/atomic-details.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi earum provident tenetur aperiam necessitatibus cumque nemo mollitia voluptas et aliquid veritatis reiciendis veniam ab odio repellat accusamus modi, quasi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nemo vel voluptas quod adipisci dolorum iusto nihil, repellat eum perspiciatis sunt vitae, eveniet eos, quaerat tempore mollitia dolores id odit.'    
    },
    {   
        id: 7,
        color: '#ff771b',
        title: 'Daily life usage',
        image: 'http://universesofttechnologies.in/amru_new/images/daily-life-usage.svg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dolor voluptate dicta laboriosam magni dolorum atque. Blanditiis, sit molestias id nostrum, ad, eligendi, vero eius qui sequi soluta laborum. Aspernatur.'
    },
    {
        id: 8,
        color: '#6ace29',
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
