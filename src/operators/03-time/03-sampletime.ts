import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

fromEvent<MouseEvent>(document, 'click').pipe(
    map(({x, y}) => ({x, y})),
    sampleTime(1000)
).subscribe(console.log);