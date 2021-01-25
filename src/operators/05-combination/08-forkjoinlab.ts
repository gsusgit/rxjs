// GLOBALS

import { forkJoin, of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// api utrl github
const GITHUB_API_URL = 'https://api.github.com/users';

// github user
const GITHUB_USER = 'gsusgit';

// ajax combined calls
forkJoin({
    user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
}).pipe(
    catchError(err => of(err.message))
)
.subscribe(console.log);