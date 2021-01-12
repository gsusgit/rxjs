
const API_URL = 'https://api.github.com/usersX?per_page=5';

const error = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response;
};

const fetchProm = fetch(API_URL);

fetchProm
.then(error)
.then(resp => resp.json())
.then(console.log)
.catch(err => console.warn('ERROR: ' + err));