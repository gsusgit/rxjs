import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.info('Completed')
};

const obs$ = new Observable<string>(subs => {
    subs.next('Hello');
    subs.next('World');
    subs.error('Error');
    subs.complete();
});

obs$.subscribe(observer);

