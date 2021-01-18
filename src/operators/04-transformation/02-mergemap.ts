import {fromEvent, interval, of} from "rxjs";
import {map, mergeMap, take, takeUntil} from "rxjs/operators";

const chars$ = of('a', 'b', 'c');

chars$.pipe(
    mergeMap((char) => interval(1000).pipe(
        map(i => char + i),
        take(3)
    ))
).subscribe({
    next: value => console.log('Next: ' + value),
    complete: () => console.log('Completed')
});

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseUp$)
    ))
).subscribe(console.log);
