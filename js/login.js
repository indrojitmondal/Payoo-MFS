
document.getElementById('button-login')
    .addEventListener('click', function (event){

    event.preventDefault();

    // console.log('login button clicked');

    const phone_number = document.getElementById('phone-number').value;
    document.getElementById('phone-number').classList.remove('a');
    console.log('Phone Number:',phone_number);
    const pin = document.getElementById('pin').value;
    console.log('Pin Number:',pin);
    if(phone_number==='01577147931' && pin==='1234'){

        window.location.href='./home.html';
        document.getElementById('phone-number').classList.remove('a');

    }
    else{
        alert("Wrong Phone Number or Pin");
    }

})