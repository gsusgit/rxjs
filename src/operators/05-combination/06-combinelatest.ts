import { combineLatest, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const email = document.createElement('input');
const password = document.createElement('input');

email.placeholder = 'jesusfer80@gmail.com';
password.placeholder = '********';
email.type = 'email';
password.type = 'password';

document.querySelector('body').append(email, password);

const inputStream = (el: HTMLElement) => fromEvent<KeyboardEvent>(el, 'keyup')
.pipe(pluck<KeyboardEvent, string>('target', 'value'));

combineLatest(
    inputStream(email),
    inputStream(password)
).subscribe(console.log);