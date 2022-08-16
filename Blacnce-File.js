document.getElementById('button'), addEventListener('click', function () {
    const inputEmail = document.getElementById('email-file');
    const inputEmailValue = inputEmail.value;


    // console.log(inputEmailValue)


    const inputPassword = document.getElementById('password-file');
    const inputPasswordValue = inputPassword.value;

    if ((inputEmailValue == 'sazzadssd512@gmail.com') && (inputPasswordValue == 'sazzad512')) {
        window.location.href = 'newPage/BlancePage.html';
    }

    // console.log(inputPasswordValue);


})

// clear js program ************

// document.getElementById('button').addEventListener('click', function () {
//     const inputEmail = document.getElementById('email-file');
//     const inputValueClear = inputEmail.value = '';

//     // emai--clear
//     const inputPassword = document.getElementById('password-file');
//     const inputPasswordClear = inputPassword.value = '';
// })

