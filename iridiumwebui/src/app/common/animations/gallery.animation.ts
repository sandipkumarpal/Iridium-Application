import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const GalleryAnimation = trigger('GalleryAnimation', [
  transition(':enter', [
    query('.header-logo', style({ opacity: 0 })),
    query('.navigation', style({ opacity: 0 })),
    query('.gallery__title', [
        style({ transform: 'translateY(25px)', opacity: 0 }),
        animate('0.6s ease-in', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    query('.header-logo', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.navigation', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('0.5s ease-in', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    query('.gallery__item', stagger(400, [
        style({ transform: 'translateY(25px)', opacity: 0 }),
        animate('0.5s ease-in', style({transform: 'translateY(0)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.header-logo', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(0)', opacity: 0})),
    ]),
    query('.gallery__title', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('0.5s ease-out', style({transform: 'translateY(25px)', opacity: 0})),
    ]),
    query('.gallery__block', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('0.5s ease-out', style({transform: 'translateY(25px)', opacity: 0})),
    ]),
  ])
]);
