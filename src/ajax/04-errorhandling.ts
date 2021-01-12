import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/XXXusers?per_page=5';
const errorHandler = (error: AjaxError) => {
    console.warn(`ERROR: ${error.message}`);
    return of([]);
};

ajax(url).pipe(
    pluck('response'),
    catchError(errorHandler)
).subscribe(users => console.log(`USERS: ${users}`));