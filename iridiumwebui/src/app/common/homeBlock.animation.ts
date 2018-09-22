import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeBlockAnimation = trigger('homeBlockAnimation', [
  transition(':enter', [
    query('.titleRotated', style({ transform: 'translateX(25px)', opacity: 0 })),
    query('.dataContent__col', style({ transform: 'translateY(-25px)', opacity: 0 })),
    
    query('.titleRotated', stagger(300, [
        style({ transform: 'translateX(-25px)', opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0px)', opacity: 1})),
      ])),
    query('.dataContent__col', stagger(300, [
      style({ opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
     
  ]),
  transition(':leave', [
    query('.titleRotated', stagger(300, [
        style({ transform: 'translateX(0px)', opacity: 1 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(-25px)', opacity: 0})),
      ])),
    query('.dataContent__col', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(25px)', opacity: 0})),
    ])), 
  ])
]);