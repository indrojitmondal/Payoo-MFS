console.log('cash-out.js connected');
const cash_out=document.getElementById('cash-out');
const cash_out_container= document.getElementById('cash-out-container');
// const add_money_container= document.getElementById('add_money-container');
cash_out.addEventListener('click', function (){

    // alert('cash-out clicked');

    // const add_money_container= document.getElementById('add-money-container');

    cash_out_container.classList.remove('hidden');
    add_money_container.classList.add('hidden');
    transaction_container.classList.add('hidden');
    
    
});
const cash_out_clicker= document.getElementById('cash-out-clicker');
cash_out_clicker.addEventListener('click', function(event){
    event.preventDefault();
    //  alert('cash_out_clicker');
    let amount = document.getElementById('cash-out-amount');
    //  alert(amount.value);
    let pin = document.getElementById('cash-pin').value;
     amount = Number(amount.value);
    if(amount>0 && pin==='1234' ){
        // alert('ok');

        let current_balance= Number(document.getElementById('balance').innerText);
        
        let newBalance = current_balance - amount;

        console.log(newBalance);
        
        const transaction_container=document.getElementById('transaction-container');
      
        const p= document.createElement('p');
        p.innerHTML=`Cashed ${amount} Tk. Now current balance is ${newBalance} Tk. `;
        p.classList.add('p-2','bg-yellow-500');
        transaction_container.appendChild(p);

        document.getElementById('balance').innerText=Number(newBalance);
        cash_out_container.classList.add('hidden');


    }
    else{
        alert('Invalid Amount or Pin Number');
    }
})  