import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get(
    // URL
    url,
    // Headers
    {
        'Content-Type': 'application/json',
        'token': '123ABC'
    }
).subscribe(console.log);


ajax.post(
    // URL
    url,
    // BODY
    {
        id: 1,
        name: 'John'
    },
    // HEADERS
    {
        'Content-Type': 'application/json',
        'token': '123ABC'
    }
).subscribe(console.log);

ajax.put(
    // URL
    url,
    // BODY
    {
        id: 1,
        name: 'John'
    },
    // HEADERS
    {
        'Content-Type': 'application/json',
        'token': '123ABC'
    }
).subscribe(console.log);

ajax.delete(
    // URL
    url,
    // BODY
    {
        id: 1,
        name: 'John'
    }
).subscribe(console.log);


// jQuery Ajax like...?
ajax({
    url: url,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'token': '123ABC'
    },
    body: {
        id: 1,
        name: 'John'
    }
}).subscribe(console.log);
