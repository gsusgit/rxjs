import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

const source = of(1, 2, 3, 4);
const example = source.pipe(scan((acc, val) => acc + val));
const subscribe = example.subscribe(val => console.log('Sum:', val));
