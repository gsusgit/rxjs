import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const title = document.createElement('h1');
const form = document.createElement('form');
const email = document.createElement('input');
const pass = document.createElement('input');
const submit = document.createElement('button');

title.innerHTML = 'Log in';

email.type = 'email';
email.placeholder = 'Email';
email.value = 'eve.holt@reqres.in';

pass.type = 'password';
pass.placeholder = 'Password';
pass.value = 'cityslicka';

submit.type = 'submit';
submit.innerHTML = 'Submit';

form.append(email, pass, submit);

document.querySelector('body').append(title, form);

const errorHandler = (error: AjaxError) => {
    console.warn(`ERROR: ${error.message}`);
    return of([]);
};

const httpRequest$ = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    pluck('response', 'token'),
    catchError(errorHandler)
);

const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    // mergeMap(httpRequest$)
    // switchMap(httpRequest$)
    exhaustMap(httpRequest$)
);

submitForm$.subscribe(
    token => console.log(token)
);