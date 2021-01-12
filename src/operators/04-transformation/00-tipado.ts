import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, pluck, map, mergeAll } from 'rxjs/operators';
import { GitHubUser } from '../../interfaces/githubuser.interface';
import { GitHubUsersResponse } from '../../interfaces/githubusersresponse.interface';

const body = document.querySelector('body');
const input = document.createElement('input');
const ordererList = document.createElement('ol');

body.append(input, ordererList);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

const showUsers = (users: GitHubUser[]) => {
    ordererList.innerHTML = '';
    for (const user of users) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = user.html_url;
        link.target = '_blank';
        link.text = 'Open Github';
        const avatar = document.createElement('img');
        avatar.src = user.avatar_url;
        item.append(avatar, user.login + ' ', link);
        ordererList.append(item);
    }
};

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GitHubUsersResponse>>(text => {
        return ajax.getJSON(`https://api.github.com/search/users?q=${text}`);
    }),
    mergeAll<GitHubUsersResponse>(),
    pluck<GitHubUsersResponse, GitHubUser[]>('items')
).subscribe(showUsers);