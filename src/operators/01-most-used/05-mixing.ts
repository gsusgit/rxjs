import {fromEvent} from 'rxjs';
import {map, filter} from 'rxjs/operators';

fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.key),
    filter(key => key === 'Enter')
).subscribe(console.log);
