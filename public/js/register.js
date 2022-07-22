'use strict'

document.addEventListener('DOMContentLoaded', function loaded() {

    var email     = document.querySelector('form input:nth-of-type(3)')
    var password  = document.querySelector('form input:last-of-type')
    var form  = document.querySelector('form')

    function checkUserInfo() {

        var data = new FormData();
        data.append('email', email.value);

        fetch('../controller/registerController.php?', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(response => {
                console.log(data);
                // if(response.email == "empty"){
                //     fetch('../controller/registerController.php?register& isUserExist=False', {
                //         method: 'POST',
                //         body: new FormData(form)
                //     })
                //         .then(res => { return res.json()})
                //         .then(res => {
                //             console.log(res)
                //         })
                // }

                var small = document.querySelector('form small:first-of-type')
                if (response.email == 'exist') {
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
