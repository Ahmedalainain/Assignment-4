var button = document.querySelector('.button')
var headline = document.querySelector('.header')

button.onclick = function validateForm() 
    {
        var passwordInput = document.form.password.value;
        var usernameInput = document.form.username.value;

        if(passwordInput !== '12345678') 
        {
            alert('The password is incorrect');
            return false;
        }
        headline.innerText = 'The information is correct';
    }