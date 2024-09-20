console.log('add-money.js connected');
// Add-Money-Event Listener
const add_money=document.getElementById('add-money');
const add_money_container= document.getElementById('add-money-container');
const transaction_container=document.getElementById('transaction-container');
add_money.addEventListener('click', function (){


    // const add_money_container= document.getElementById('add-money-container');

    add_money_container.classList.remove('hidden');
    cash_out_container.classList.add('hidden');
    transaction_container.classList.add('hidden');
    
    
});


const add_money_clicker= document.getElementById('add-money-clicker');
add_money_clicker.addEventListener('click', function(event){
    event.preventDefault();
    // alert('add-money-linked clicked');
    let amount = document.getElementById('amount');
    const pin = document.getElementById('pin').value;
     amount = Number(amount.value);
    
    if(amount>0 && pin==='1234' ){
        // alert('ok');
       
        let current_balance= Number(document.getElementById('balance').innerText);
        
        let newBalance = current_balance + amount;


        console.log(newBalance);
        
        const transaction_container=document.getElementById('transaction-container');
      
        const p= document.createElement('p');
        p.innerHTML=`Added ${amount} Tk. Now current balance is ${newBalance} Tk. `;
        p.classList.add('p-2','bg-green-500');
        transaction_container.appendChild(p);
        console.log(transaction_container);
        
        
        console.log(transaction_container);
        document.getElementById('balance').innerText=Number(newBalance);
        add_money_container.classList.add('hidden');

    }
    else{
        alert('Invalid Amount or Pin Number');
    }
})
