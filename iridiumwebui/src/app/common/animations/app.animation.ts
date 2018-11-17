import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const AppAnimation = trigger('AppAnimation', [
  transition(':enter', [
    query('.titleRotated', style({ opacity: 0 })),
    query('.titleRotated', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1})),
    ]),
  ]),
  transition(':leave', [
    query('.titleRotated', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0})),
    ]),
  ])
]);
