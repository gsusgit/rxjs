import {interval} from 'rxjs';

const intervalObservable$ = interval(1000);

const observer = {
    next: value => {
        console.log(value)
    },
    complete: () => {
        console.log('Completed')
    }
};

intervalObservable$.subscribe(observer);
