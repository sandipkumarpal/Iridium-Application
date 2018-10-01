import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%', height: '100vh' })),
    query(':enter', style({ transform: 'translateY(20px)', opacity: 0 })),
    sequence([
      query(':leave', animateChild()), 
      group([
        query(':leave', [
          style({ transform: 'translateY(0%)', opacity: 1 }),
          animate('1500ms cubic-bezier(.25,-0.20,.26,1.52)', 
            style({ transform: 'translateY(-20px)', opacity: 0 }))
        ]),
        query(':enter', [
          style({ transform: 'translateY(20px)', opacity: 0 }),
          animate('1500ms cubic-bezier(.25,-0.20,.26,1.52)', 
            style({ transform: 'translateY(0%)', opacity: 1 })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);
