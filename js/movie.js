'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {
    var api_key      = 'ae72c71ddb7cb4d98464e3d2b33c101b'
    var firstSection = document.querySelector('main section:first-of-type')

    function displayGenres() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                const moviesGenres = data.genres
                console.log(moviesGenres)

            })
    }
    displayGenres()

})