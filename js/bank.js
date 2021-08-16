document.getElementById('login-submit').addEventListener('click', function () {
    // get user emil
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check email and password
    if (userEmail == 'mmmm.rahman77@gmail.com' && userPassword == 'rahman') {
        window.location.href = 'banking.html';
    }
})