
document.getElementById('button-login')
    .addEventListener('click', function (event){

    event.preventDefault();

    console.log('login button clicked');

    const phone_number = document.getElementById('phone-number').value;
    console.log('Phone Number:',phone_number);
    const pin = document.getElementById('pin').value;
    console.log('Pin Number:',pin);

})