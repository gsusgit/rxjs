import { range } from 'rxjs';
import { skip } from 'rxjs/operators';

range(1, 10).pipe(
    skip(5)
).subscribe(console.log);