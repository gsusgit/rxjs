import {fromEvent} from 'rxjs';
import {mapTo} from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');

keyUp$.pipe(mapTo('Key pressed')).subscribe(console.log);
