import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const ContactAnimation = trigger('ContactAnimation', [
  transition(':enter', [
    query('.header-logo', style({ opacity: 0 })),
    query('.navigation', style({ opacity: 0 })),
    query('.container-contact__map', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1})),
    ]),
    query('.contact-title', [
        style({ opacity: 0 }),
        animate('0.6s ease-in', style({ opacity: 1})),
    ]),
    query('.feedback-title', [
      style({ opacity: 0 }),
      animate('0.6s ease-in', style({ opacity: 1})),
  ]),
    query('.back_btn', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.container-contact__block form', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('0.5s ease-in', style({ transform: 'translateY(0px)', opacity: 1})),
    ]),
    query('.container-feedback__block', [
      style({ transform: 'translateY(-20px)', opacity: 0 }),
      animate('0.5s ease-in', style({ transform: 'translateY(0px)', opacity: 1})),
  ]),
    query('.address__area address', stagger(400, [
        style({ transform: 'translateX(-20px)', opacity: 0 }),
        animate('0.5s ease-in', style({ transform: 'translateX(0px)', opacity: 1})),
    ])),

  ]),
  transition(':leave', [
    query('.back_btn', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(0)', opacity: 0})),
    ]),
    query('.contact-title', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0})),
    ]),
    query('.feedback-title', [
      style({ opacity: 1 }),
      animate('0.5s ease-out', style({ opacity: 0})),
  ]),
  ])
]);
