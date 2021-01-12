import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

of(1, 1, 1, 2, 3, 3, 4, 1).pipe(distinct()).subscribe(console.log);

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

from(people).pipe(distinct(person => person.name)).subscribe(console.log);