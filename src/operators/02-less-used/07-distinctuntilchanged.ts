import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

of(1, 1, 2, 3, 3, 4, 1, 1, 5).pipe(distinctUntilChanged()).subscribe(console.log);

interface Person {
    name: string,
    age: number
}

const people: Person[] = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jack',
        age: 40
    },
    {
        name: 'Peter',
        age: 34
    },
];

from(people).pipe(distinctUntilChanged((ant, act) => ant.name === act.name)).subscribe(console.log);