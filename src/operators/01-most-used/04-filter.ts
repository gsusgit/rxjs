import {from, range} from 'rxjs';
import {filter} from 'rxjs/operators';

range(1, 10).pipe(
    filter<number>(value => value % 2 === 1)
).subscribe(console.log);

interface Character {
    type: string,
    name: string
}

const characters: Character[] = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Joker'
    }
];

from(characters).pipe(
    filter(
        character => character.type === 'hero'
    )
).subscribe(console.log);
