import {Observable, Subject} from 'rxjs';

const interval$ = new Observable<number>(subscriber => {
    const interval = setInterval(
        () => subscriber.next(Math.random()), 3000
    );
    return () => {
        clearInterval(interval);
    }
});

const subject$ = new Subject();
interval$.subscribe(subject$);

subject$.subscribe(rnd => console.log('S1: ', rnd));
subject$.subscribe(rnd => console.log('S2: ', rnd));
