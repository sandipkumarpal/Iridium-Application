import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeAnimation = trigger('homeAnimation', [
  transition(':enter', [
    query('.homeBubble', style({ opacity: 0 })),
    query('.homeLoader', style({ opacity: 0 })),
    query('.home__center__Block', style({ opacity: 0 })),
    
    query('.homeLoader', [
      style({ transform: 'translate(-50%, -50%) scale(0)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translate(-50%, -50%) scale(1)', opacity: 1})),
    ]),
    query('.home__center__Block', [
        style({ transform: 'translateY(-50%) scale(0)' }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-50%) scale(1)', opacity: 1})),
    ]),
    query('.homeBubble', [
        style({ opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ opacity: 1})),
    ]),
    query('.header-logo', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.navigation', [
      style({ opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({opacity: 1})),
    ]),
    
  ]),
  transition(':leave', [
    query('.header-logo', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(0)', opacity: 0})),
    ]),
    query('.home__center__Block', [
      style({ transform: 'translateY(-50%) scale(1)', opacity: 1 }),
      animate('0.5s ease-out', style({transform: 'translateY(-50%) scale(0.5)', opacity: 0})),
    ]),
    query('.homeLoader', [
      style({ transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0})),
    ]),      
  ])
]);
