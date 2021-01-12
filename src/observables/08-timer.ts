import {timer} from 'rxjs';

const observer = {
    next: value => {
        console.log(value)
    },
    complete: () => {
        console.log('Completed')
    }
};

const timerObservable$ = timer(2000);
const timerObservableInterval$ = timer(0, 1000);

let nowPlus5Seconds = new Date();
nowPlus5Seconds.setSeconds(nowPlus5Seconds.getSeconds() + 5);

const timerWithDate$ = timer(nowPlus5Seconds);

// timerObservable$.subscribe(observer);
// timerObservableInterval$.subscribe(observer);
timerWithDate$.subscribe(observer);
