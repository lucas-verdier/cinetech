'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {

    const api_key    = 'ae72c71ddb7cb4d98464e3d2b33c101b'
    var firstSection = document.querySelector('main section:first-of-type')
    var main         = document.querySelector('main')

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
        movie = $_GET['movie'],
        tv    = $_GET['tv']

    if (movie) {
        fetch('https://api.themoviedb.org/3/movie/'+movie+'?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var src = 'https://image.tmdb.org/t/p/original/'+data.backdrop_path
                main.style.backgroundImage = 'url("'+src+'")'

                var h1 = document.createElement('h1')
                h1.innerHTML = data.title
                firstSection.appendChild(h1)

                var genres = data.genres
                var pGenre = document.createElement('p')
                pGenre.innerHTML = 'Genre(s) : '
                for (let i = 0; i<genres.length; i++) {
                    pGenre.innerHTML += genres[i].name+ ' | '
                }
                firstSection.appendChild(pGenre)
            })
    }
    if (tv) {
        fetch('https://api.themoviedb.org/3/tv/'+tv+'?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var src = 'https://image.tmdb.org/t/p/original/'+data.backdrop_path
                main.style.backgroundImage = 'url("'+src+'")'

                var h1 = document.createElement('h1')
                h1.innerHTML = data.name
                firstSection.appendChild(h1)

                var genres = data.genres
                var pGenre = document.createElement('p')
                pGenre.innerHTML = 'Genre(s) : '
                for (let i = 0; i<genres.length; i++) {
                    pGenre.innerHTML += genres[i].name+ ' | '
                }
                firstSection.appendChild(pGenre)

                var divProductBy = document.createElement('div')
                var pProductBy   = document.createElement('p')
                pProductBy.innerHTML = 'Produit par : '
                var imgProductBy = document.createElement('img')
                for (let i = 0; i<data.production_companies.length; i++) {
                    console.log(data.production_companies[i])

                    pProductBy.innerHTML += data.production_companies[i].name + ' | '

                    if (data.production_companies[i].logo_path != null) {
                        imgProductBy.src = 'https://image.tmdb.org/t/p/w500/'+data.production_companies[i].logo_path
                    }
                }
                divProductBy.appendChild(pProductBy)
                divProductBy.appendChild(imgProductBy)
                firstSection.appendChild(divProductBy)


            })
    }
})