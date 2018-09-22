import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeAnimation = trigger('homeAnimation', [
  transition(':enter', [
    query('.homeBubble', style({ opacity: 0 })),
    query('.homeLoader', style({ opacity: 0 })),
    query('.home__center__Block', style({ opacity: 0 })),
    
    query('.homeLoader', stagger(100, [
      style({ transform: 'translate(-50%, -50%) scale(0)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translate(-50%, -50%) scale(1)', opacity: 1})),
    ])),
    query('.home__center__Block', stagger(100, [
        style({ transform: 'translateY(-50%) scale(0)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-50%) scale(1)', opacity: 1})),
      ])),
      query('.homeBubble', stagger(100, [
        style({ opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ opacity: 1})),
      ])),
  ]),
  transition(':leave', [
    query('.home__center__Block', stagger(100, [
      style({ transform: 'translateY(-50%) scale(1)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-50%) scale(0)', opacity: 0})),
    ])),
    query('.homeLoader', stagger(100, [
      style({ transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translate(-50%, -50%) scale(0)', opacity: 0})),
    ])),
    query('.homeBubble', stagger(100, [
      style({ opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({opacity: 0})),
    ])),
           
  ])
]);