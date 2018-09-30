import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const headerAnimation = trigger('headerAnimation', [
  transition(':enter', [
    query('.header-logo', style({ opacity: 0 })),
    query('.navigation', style({ opacity: 0 })),
    
    query('.navigation', stagger(100, [
      style({ opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({opacity: 1})),
    ])),
      query('.header-logo', stagger(100, [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
      ])),
  ]),
  transition(':leave', [
    query('.navigation', stagger(100, [
      style({ opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({opacity: 0})),
    ])),
    query('.header-logo', stagger(100, [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(0)', opacity: 0})),
    ])),
           
  ])
]);