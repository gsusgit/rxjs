import {asyncScheduler} from 'rxjs';

const greetings = () => console.log('Hello');
asyncScheduler.schedule(greetings, 2000);

const greetingsTo = (name) => console.log(`Hello ${name}`);
asyncScheduler.schedule(greetingsTo, 4000, 'John');

const greetingsToObject = ({name, surname}) => console.log(`Hello ${name} ${surname}`);
asyncScheduler.schedule(greetingsToObject, 6000, {name: 'John', surname: 'Doe'});

const asyncSchedulerSubscription = asyncScheduler.schedule(
    function(state) {
        console.log(state);
        this.schedule(state + 1, 1000);
    }, 8000, 0
);

asyncScheduler.schedule(() => asyncSchedulerSubscription.unsubscribe(), 10000);
