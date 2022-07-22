'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {
    const api_key = 'ae72c71ddb7cb4d98464e3d2b33c101b'

    function trending() {

        var article = document.querySelector('main section:first-of-type article')

        fetch('https://api.themoviedb.org/3/trending/all/day?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {

                var items = data.results
                console.log(items)

                for (let i = 0; i<items.length; i++) {

                    console.log(items[i].media_type)
                    if (items[i].title != null) {

                        if (items[i].media_type == 'movie') {

                            var a            = document.createElement('a')
                            a.href           = '/detail/movie='+items[i].id

                        } else if (items[i].media_type == 'tv') {
                            var a            = document.createElement('a')
                            a.href           = '/detail/tv='+items[i].id
                        }
                        let img          = document.createElement('img')
                        img.src          = 'https://image.tmdb.org/t/p/w500/'+items[i].poster_path
                        img.alt          = items[i].title
                        let pTitle       = document.createElement('p')
                        pTitle.innerHTML = items[i].title
                        let pNote        = document.createElement('p')
                        pNote.innerHTML  = 'Note: '+items[i].vote_average

                        article.appendChild(a)
                        a.appendChild(img)
                        a.appendChild(pTitle)
                        a.appendChild(pNote)

                    } else {

                        if (items[i].media_type == 'movie') {

                            var a            = document.createElement('a')
                            a.href           = '/detail/movie='+items[i].id

                        } else if (items[i].media_type == 'tv') {
                            var a            = document.createElement('a')
                            a.href           = '/detail/tv='+items[i].id
                        }


                        let img          = document.createElement('img')
                        img.src          = 'https://image.tmdb.org/t/p/w500/'+items[i].poster_path
                        img.alt          = items[i].title
                        let pTitle       = document.createElement('p')
                        pTitle.innerHTML = items[i].original_name
                        let pNote        = document.createElement('p')
                        pNote.innerHTML  = 'Note: '+items[i].vote_average

                        article.appendChild(a)
                        a.appendChild(img)
                        a.appendChild(pTitle)
                        a.appendChild(pNote)
                    }
                }
            })
    }
    trending()

    function popularTv() {
        var article = document.querySelector('main section:nth-of-type(2) article')

        fetch(' https://api.themoviedb.org/3/tv/popular?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                var item = data.results

                for (let i = 0; i<item.length; i++) {
                    let a            = document.createElement('a')
                    a.href           = '/detail/tv='+item[i].id
                    let img          = document.createElement('img')
                    img.src          = 'https://image.tmdb.org/t/p/w500/'+item[i].poster_path
                    img.alt          = item[i].name
                    let pTitle       = document.createElement('p')
                    pTitle.innerHTML = item[i].name
                    let pNote        = document.createElement('p')
                    pNote.innerHTML  = 'Note: '+item[i].vote_average

                    article.appendChild(a)
                    a.appendChild(img)
                    a.appendChild(pTitle)
                    a.appendChild(pNote)
                }
            })
    }
    popularTv()

    function similar(id) {
        var article = document.querySelector('main section:nth-of-type(3) article')
        fetch('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data => {
                var item = data.results

                for (let i = 0; i<item.length; i++) {
                    let a            = document.createElement('a')
                    a.href           = '/detail/movie='+item[i].id
                    let img          = document.createElement('img')
                    img.src          = 'https://image.tmdb.org/t/p/w500/'+item[i].poster_path
                    img.alt          = item[i].title
                    let pTitle       = document.createElement('p')
                    pTitle.innerHTML = item[i].title
                    let pNote        = document.createElement('p')
                    pNote.innerHTML  = 'Note: '+item[i].vote_average

                    article.appendChild(a)
                    a.appendChild(img)
                    a.appendChild(pTitle)
                    a.appendChild(pNote)
                }

            })
    }
    similar(335787)

    function getByGenres(type, id) {
        var article = document.querySelector('main section:nth-of-type(4) article')
        fetch('https://api.themoviedb.org/3/'+type+'/top_rated?api_key='+api_key+'&language=fr-FR')
            .then(response => response.json())
            .then(data     => {
                var item = data.results

                for (let i = 0; i<item.length; i++) {
                    item[i].genre_ids.forEach(element => {
                        if (element == id) {
                            console.log(id)
                            let a            = document.createElement('a')
                            a.href           = '/detail/'+type+'='+item[i].id
                            let img          = document.createElement('img')
                            img.src          = 'https://image.tmdb.org/t/p/w500/'+item[i].poster_path
                            img.alt          = item[i].name
                            let pTitle       = document.createElement('p')
                            pTitle.innerHTML = item[i].name
                            let pNote        = document.createElement('p')
                            pNote.innerHTML  = 'Note: '+item[i].vote_average

                            article.appendChild(a)
                            a.appendChild(img)
                            a.appendChild(pTitle)
                            a.appendChild(pNote)
                        }
                    })
                }
            })
    }
    getByGenres('tv', '16')

    function getGenres(type) {
        fetch(' https://api.themoviedb.org/3/genre/'+type+'/list?api_key='+api_key+'&language=en-US')
            .then(response => response.json())
            .then(data     => {
                console.log(data.genres)
            })
    }
    getGenres('tv')
})
