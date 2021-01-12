import { of, fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
    first()
).subscribe(console.log);

// with condition
const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
    tap(console.log),
    first(event => event.clientY >= 150),
    map(({clientX, clientY}) => ({clientX, clientY}))
).subscribe({
    next: val => console.log(val),
    complete: () => console.log('Completed')
});
