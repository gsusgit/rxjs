import {fromEvent, range} from 'rxjs';
import {map} from 'rxjs/operators';

range(1, 5).pipe(
    map<number, number>(x => x * 10)
).subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.pipe(
    map(event => event.code)
).subscribe(console.log);
