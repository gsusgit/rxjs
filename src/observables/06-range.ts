import {range} from 'rxjs';

const rangeObservable1$ = range(1, 5);
const rangeObservable2$ = range(-5, 10);
const rangeObservable3$ = range(5);//en realidad es el count y no el start(que por defecto es 0)

rangeObservable1$.subscribe(console.log);
console.log('-----');
rangeObservable2$.subscribe(console.log);
console.log('-----');
rangeObservable3$.subscribe(console.log);
