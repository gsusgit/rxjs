import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck } from 'rxjs/operators';

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value')
)
.subscribe(console.log);