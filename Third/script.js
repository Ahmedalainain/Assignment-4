var button = document.querySelector('.button')
var headLine = document.querySelector('.header')

button.onclick = function validateForm() 
    {
        var passwordInput = document.form.password.value;
        var usernameInput = document.form.username.value;

        if(passwordInput !== '12345678') 
        {
            alert('The password is incorrect');
            return false;
        }
        headLine.innerText = 'The information in this form is correct!!';
    }