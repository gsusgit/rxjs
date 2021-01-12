import {from} from 'rxjs';

const fromObservableString$ = from('Hello');
fromObservableString$.subscribe(console.log);

const fromObservableArray$ = from([1, 2, 3, 4, 5]);
fromObservableArray$.subscribe(console.log);

const fromObservableData$ = from(fetch('https://api.github.com/users/gsusgit'));
fromObservableData$.subscribe(console.log);
