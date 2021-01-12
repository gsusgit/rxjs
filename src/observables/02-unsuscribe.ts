import {Observable} from 'rxjs';

const interval$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('Completed');
    }
});

const subscription = interval$.subscribe(second => console.log(second));

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);
