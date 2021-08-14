import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild,
    keyframes
 } from '@angular/animations';
import { transform } from 'typescript';
 export const slideInAnimation =
    trigger('routeAnimations', [
          transition('items => *', [
              query(':enter, :leave',
                   style({ position: 'fixed', width: '100%' }),
                   { optional: true }),
              group([
                   query(':enter',[
                       style({ transform: 'translateX(-100%)'}),
                       animate('0.5s ease-in',
                       style({ transform: 'translateX(0%)'})),
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform:   'translateX(0%)'}),
                       animate('0.5s ease-out',
                       style({ transform: 'translateX(100%)' }))
                   ], { optional: true }),
              ])
          ]),
          transition('Home => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
          ]),
          transition('placeorder => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-out', style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-out', style({ transform: 'translateY(-100%)' }))
                ], { optional: true }),
            ])
          ]),
 ]);
