import { fromEvent } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

fromEvent<MouseEvent>(document, 'click').pipe(
    map(({x, y}) => ({x, y})),
    auditTime(2000)
).subscribe(console.log);