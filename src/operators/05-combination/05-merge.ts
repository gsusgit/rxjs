import { merge, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const key$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
    key$.pipe(
        pluck('type')
    ),
    click$.pipe(
        pluck('type')
    )
).subscribe(console.log);