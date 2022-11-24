import perfil from './perfilGithub.json';

Promise.all([
    perfil.get('https://api.github.com/users/marcelorm/repos')
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch( err => console.log(err.message))