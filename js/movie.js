'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {
    var api_key      = 'ae72c71ddb7cb4d98464e3d2b33c101b'
    var firstSection = document.querySelector('main section:first-of-type')
    var firstActicle = document.querySelector('main section:first-of-type>article')

    function displayGenres() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                const moviesGenres = data.genres
                // console.log(moviesGenres)

                for (let i = 0; i<moviesGenres.length; i++) {
                    // console.log(moviesGenres[i].name)

                    var button = document.createElement('button')
                    button.innerHTML = moviesGenres[i].name
                    button.id        = moviesGenres[i].id
                    firstActicle.appendChild(button)
                    // console.log(button)
                }
            })
    }
    displayGenres()

    function moviesByGenre(name, id) {
        var secondSection = document.querySelector('main section:nth-of-type(2)')
        var secondArticle = document.querySelector('main section:nth-of-type(2)>article')

        var button = document.querySelectorAll('button')
        console.log(button)

        fetch('https://api.themoviedb.org/3/discover/movie?api_key='+api_key+'&with_genres='+id+'')
            .then(response => response.json())
            .then(data => {

            })
    }
    moviesByGenre()



})