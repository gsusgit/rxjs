import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const click$ = fromEvent(button, 'click');

const timer$ = interval(1000);

timer$.pipe(
    takeUntil(click$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Completed')
});
