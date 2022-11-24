console.log(fetch('https://api.github.com/users/mar_celorm'))
.then( response => {
    response.json()
    .then( data => {
        fetch(data.repos_url)
        .then( res => res.json().then( d => console.log(d)))
    })
})

//exemplo de código que ficou inviável no resultado final