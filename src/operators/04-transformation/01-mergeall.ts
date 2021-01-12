import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, pluck, map, mergeAll } from 'rxjs/operators';

const body = document.querySelector('body');
const input = document.createElement('input');

body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map(text => {
        return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
    }),
    mergeAll(),
    pluck('items')
).subscribe(console.log);