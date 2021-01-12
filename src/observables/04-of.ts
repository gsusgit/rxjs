import {of} from 'rxjs';

const obs$ = of<number>(1, 2, 3, 4, 5, 6);

obs$.subscribe(
    next => console.log(next),
    null,
    () => console.log('Completed')
);
