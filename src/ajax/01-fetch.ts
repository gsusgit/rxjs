

fetch('https://api.github.com/users?per_page=5')
.then(resp => resp.json())
.then(console.log);