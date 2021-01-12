import {fromEvent} from 'rxjs';

const mouseEventObservable$ = fromEvent<MouseEvent>(document, 'click');
const keyboardEventObservable$ = fromEvent<KeyboardEvent>(document, 'keyup');

mouseEventObservable$.subscribe(({x, y}) => {
    console.log(x, y);
});

keyboardEventObservable$.subscribe(keyboardEvent => {
    console.log(keyboardEvent.key);
});
