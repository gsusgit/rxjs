import { range } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

range(1, 20).pipe(
    takeWhile(x => x <= 10, true) // the parameter true will include the value that broke condition
).subscribe(console.log);
