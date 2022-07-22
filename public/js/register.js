'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {

    var email     = document.querySelector('main form input:nth-of-type(3)')
    var password  = document.querySelector('main form input:last-of-type')
    var form  = document.querySelector('main form')
    console.log(email)

    function checkUserInfo() {
        console.log('bobi')
        var data = new FormData();
        data.append('email', email.value);

        fetch('/inscription/check', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                var small = document.querySelector('main form small:first-of-type')
                if (data === '!empty') {
                    small.innerHTML = 'Cet utilisateur existe déjà'
                    small.style.color = '#e32331'
                    email.style.border = '2px solid #e32331'
                } else {
                    small.innerHTML = '<i class="fas fa-check"></i>'
                    small.style.color = '#279b2c'
                    email.style.border = '2px solid #2eab33'
                }

            })
    }


    email.addEventListener('focusout', checkUserInfo)


})
