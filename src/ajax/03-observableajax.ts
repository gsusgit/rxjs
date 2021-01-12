import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

ajax(url).pipe(
    pluck('response')
).subscribe(console.log);