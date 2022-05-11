'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {

    const api_key = 'ae72c71ddb7cb4d98464e3d2b33c101b'
    var main      = document.querySelector('main')

    function $_GET(param) {
        var getValue = {}
        window.location.href.replace(location.hash, '').replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi,
            function( m, key, value ) {
                getValue[key] = value !== undefined ? value : ''
            }
        )
        if(param) {
            return getValue[param] ? getValue[param] : null
        }
        return getValue
    }

    var $_GET = $_GET(),
        movie = $_GET['movie']

    fetch('https://api.themoviedb.org/3/movie/'+movie+'?api_key='+api_key+'&language=fr-FR')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var src = 'https://image.tmdb.org/t/p/original/'+data.backdrop_path
            main.style.backgroundImage = 'url("'+src+'")'

            var h1 = document.createElement('h1')
            h1.innerHTML = data.title
            main.appendChild(h1)
            var genres = data.genres
            // console.log(genres)
            // var pGenre = document.createElement('p')
            // genres.forEach(element => pGenre.innerHTML = element.name)
            // main.appendChild(pGenre)
        })
})