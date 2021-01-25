import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Loading...';

const body = document.querySelector('body');

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true)
).subscribe(
    resp => {
        if(resp === true) {
            body.append(loading);
        } else {
            loading.innerHTML = JSON.stringify(resp);
        }
    }
);