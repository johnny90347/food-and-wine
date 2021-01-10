import { trigger, style, transition, animate, animation, state } from '@angular/animations';

export const headerSlideAnimation = trigger('headerSlideAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-50px)' }),
    animate('.2s ease-in',
      style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0)' }),
    animate('.5s ease-out',
      style({ opacity: 0, transform: 'translateY(-50px)' }))
  ])
]
);
