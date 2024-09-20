document.getElementById('transaction').addEventListener('click', function (){

    //  alert('clicked');
    let x=document.getElementById('transaction-container');
    x.classList.remove('hidden');
    add_money_container.classList.add('hidden');
    cash_out_container.classList.add('hidden');

})