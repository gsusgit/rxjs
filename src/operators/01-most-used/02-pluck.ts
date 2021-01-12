import {fromEvent} from 'rxjs';
import {pluck} from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');

keyUp$.pipe(pluck('key')).subscribe(console.log);
