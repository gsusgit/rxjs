import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

interface Grade {
    grade: string
};

const grades: Grade[] = [
    {
        grade: 'A'
    },
    {
        grade: 'A'
    },
    {
        grade: 'B'
    },
    {
        grade: 'F'
    },
    {
        grade: 'C'
    }
];

from(grades).pipe(
    distinctUntilKeyChanged('grade')
).subscribe(console.log);