'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {

    const api_key     = 'ae72c71ddb7cb4d98464e3d2b33c101b'
    var firstSection  = document.querySelector('main section:first-of-type')
    var secondSection = document.querySelector('main section:nth-of-type(2)')
    var secondArticle = document.querySelector('main section:nth-of-type(2)>article')
    var main          = document.querySelector('main')

    var url = window.location.href
    var n = url.lastIndexOf('=')
    var idOfContent = url.substring(n+1)
    console.log(idOfContent)

    if (url.includes('movie')) {
        fetch('https://api.themoviedb.org/3/movie/'+idOfContent+'?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var src = 'https://image.tmdb.org/t/p/original/'+data.backdrop_path
                main.style.backgroundImage = 'url("'+src+'")'

                var h1 = document.createElement('h1')
                h1.innerHTML = data.title
                firstSection.appendChild(h1)

                if (data.tagline) {
                    var h2 = document.createElement('h2')
                    h2.innerHTML = '"'+data.tagline+'"'
                    firstSection.appendChild(h2)
                }

                var genres = data.genres
                var pGenre = document.createElement('p')
                pGenre.innerHTML = 'Genre(s) : '
                for (let i = 0; i<genres.length; i++) {
                    pGenre.innerHTML += genres[i].name + ' | '
                }
                firstSection.appendChild(pGenre)

                var divProductBy = document.createElement('div')
                var pProductBy   = document.createElement('p')
                pProductBy.innerHTML = 'Produit par : '
                var imgProductBy = document.createElement('img')
                for (let i = 0; i<data.production_companies.length; i++) {
                    pProductBy.innerHTML += data.production_companies[i].name + ' | '

                    if (data.production_companies[i].logo_path != null) {
                        imgProductBy.src = 'https://image.tmdb.org/t/p/w500/'+data.production_companies[i].logo_path
                        imgProductBy.alt = data.production_companies[i].name
                    }
                }
                divProductBy.appendChild(pProductBy)
                divProductBy.appendChild(imgProductBy)
                firstSection.appendChild(divProductBy)

                var pLang = document.createElement('p')
                pLang.innerHTML = 'Langues disponibles : '
                for (let i = 0; i<data.spoken_languages.length; i++) {
                        pLang.innerHTML += data.spoken_languages[i].name + ' | '
                }
                firstSection.appendChild(pLang)

                var pDescription = document.createElement('p')
                pDescription.innerHTML = 'Description : ' + data.overview
                firstSection.appendChild(pDescription)
            })

        fetch('https://api.themoviedb.org/3/movie/'+idOfContent+'/similar?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                var item = data.results

                for (let i = 0; i<item.length; i++) {
                    let a            = document.createElement('a')
                    a.href           = 'detailView.php?movie='+item[i].id
                    let img          = document.createElement('img')
                    img.src          = 'https://image.tmdb.org/t/p/w500/'+item[i].poster_path
                    img.alt          = item[i].title

                    secondArticle.appendChild(a)
                    a.appendChild(img)
                }

            })
    }
    if (url.includes('tv')) {
        fetch('https://api.themoviedb.org/3/tv/'+idOfContent+'?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                var src = 'https://image.tmdb.org/t/p/original/'+data.backdrop_path
                main.style.backgroundImage = 'url("'+src+'")'

                var h1 = document.createElement('h1')
                h1.innerHTML = data.name
                firstSection.appendChild(h1)

                if (data.tagline) {
                    var h2 = document.createElement('h2')
                    h2.innerHTML = '"'+data.tagline+'"'
                    firstSection.appendChild(h2)
                }

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
                    pProductBy.innerHTML += data.production_companies[i].name

                    if (data.production_companies[i].logo_path != null) {
                        imgProductBy.src = 'https://image.tmdb.org/t/p/w500/'+data.production_companies[i].logo_path
                        imgProductBy.alt = data.production_companies[i].name
                    }
                }
                divProductBy.appendChild(pProductBy)
                divProductBy.appendChild(imgProductBy)
                firstSection.appendChild(divProductBy)

                var pLang = document.createElement('p')
                pLang.innerHTML = 'Langues disponibles : '
                for (let i = 0; i<data.spoken_languages.length; i++) {
                    pLang.innerHTML += data.spoken_languages[i].name + ' | '
                }
                firstSection.appendChild(pLang)

                var pDescription = document.createElement('p')
                pDescription.innerHTML = 'Description : ' + data.overview
                firstSection.appendChild(pDescription)
            })
        fetch('https://api.themoviedb.org/3/tv/'+idOfContent+'/similar?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                var item = data.results
                console.log(item)

                for (let i = 0; i<item.length; i++) {
                    let a            = document.createElement('a')
                    a.href           = 'detailView.php?tv='+item[i].id
                    let img          = document.createElement('img')
                    img.src          = 'https://image.tmdb.org/t/p/w500/'+item[i].poster_path
                    img.alt          = item[i].title

                    secondArticle.appendChild(a)
                    a.appendChild(img)
                }

            })
    }
})