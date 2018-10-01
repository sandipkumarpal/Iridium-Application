import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeBlockAnimation = trigger('homeBlockAnimation', [
  transition(':enter', [
    query('.titleRotated', style({ transform: 'translateX(25px)', opacity: 0 })),
    query('.dataContent__col', style({ transform: 'translateY(-25px)', opacity: 0 })),
    query('.header-logo', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.navigation', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    query('.roundTexture', [
        style({ transform: 'translate(-50%, -25px)', opacity: 0 }),
        animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translate(-50%, 0)', opacity: 1})),
    ]),
    query('.roundTexture__bottom', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.titleRotated', [
      style({ transform: 'translateX(-25px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0px)', opacity: 1})),
    ]),
    query('.dataContent__col', stagger(400, [
      style({ opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
     
  ]),
  transition(':leave', [
    query('.header-logo', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(0)', opacity: 0})),
    ]),
    query('.titleRotated', [
        style({ transform: 'translateX(0px)', opacity: 1 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(-25px)', opacity: 0})),
    ]),
    query('.homeBlockContentWrap', [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(25px)', opacity: 0})),
    ]), 
  ])
]);