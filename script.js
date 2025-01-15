let submit = document.querySelector('.submit-form')


submit.addEventListener('click', function(event) {

    const password = document.querySelector('#password').textContent
    const confirmpassword = document.querySelector('#confirm-password').textContent

    if(password!==confirmpassword){
        event.preventDefault()
        alert('Passwords Do not match!')
    }
})
 