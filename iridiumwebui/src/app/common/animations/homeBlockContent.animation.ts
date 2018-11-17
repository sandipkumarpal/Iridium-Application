import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const homeBlockContentAnimation = trigger('homeBlockContentAnimation', [
  transition(':enter', [
    query('.home-content-page', style({ opacity: 0 })),
    query('.back_btn', style({ transform: 'translateX(-25px)', opacity: 0 })),
    query('.home-content__header', style({ transform: 'translateY(-25px)', opacity: 0 })),
    query('.home-content__figure', style({ transform: 'translateX(-25px)', opacity: 0 })),
    query('.home-content__text', style({ transform: 'translateX(-25px)', opacity: 0 })),
    query('.home-content-page', stagger(500, [
        style({ opacity: 0 }),
        animate('0.5s linear', style({ opacity: 1})),
    ])),
    query('.home-content-round', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.home-content-round1', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.home-content-round2', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.home-content-round3', [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(1)', opacity: 1})),
    ]),
    query('.back_btn', stagger(300, [
      style({ opacity: 0 }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
    ])),
    query('.home-content__header', stagger(300, [
      style({ transform: 'translateY(-25px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0)', opacity: 1})),
    ])),
    query('.homeBlockAnimation', [
      style({ transform: 'translateY(-25px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    query('.homeBlockAnimation2', [
      style({ transform: 'translateY(-25px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0)', opacity: 1})),
    ]),
    query('.home-content__figure', stagger(300, [
      style({ transform: 'translateX(-25px)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0)', opacity: 1})),
    ])),
    query('.home-content__text', stagger(300, [
      style({ transform: 'translateX(-25px)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0)', opacity: 1})),
    ])),
    query('.blocking-wrap figure', stagger(300, [
      style({ transform: 'scale(0)', opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'scale(1)', opacity: 1})),
    ])),
    query('.blocking-wrap h4', stagger(300, [
      style({ opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ opacity: 1})),
    ])),
    query('.home-content__Subblockingtext', stagger(300, [
      style({ opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ opacity: 1})),
    ])),
    query('.home-content__Subblockingfigure', stagger(300, [
      style({ opacity: 0 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.home-content__header', stagger(300, [
      style({ transform: 'translateY(0)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(-25px)', opacity: 0})),
    ])),
    query('.back_btn', stagger(300, [
      style({ transform: 'translateX(0px)', opacity: 1 }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(-25px)', opacity: 0})),
    ])),
    query('.container-page-article', stagger(500, [
      style({ opacity: 1 }),
      animate('0.5s linear', style({opacity: 0})),
    ])),
    query('.home-content-round', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(0)', opacity: 0})),
    ]),
    query('.home-content-round1', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(0)', opacity: 0})),
    ]),
    query('.home-content-round2', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(0)', opacity: 0})),
    ]),
    query('.home-content-round3', [
      style({ transform: 'scale(1)', opacity: 1 }),
      animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'scale(0)', opacity: 0})),
    ]),
    query('.home-content-page', stagger(500, [
      style({ opacity: 1 }),
      animate('0.5s linear', style({opacity: 0})),
    ])),

  ])
]);
