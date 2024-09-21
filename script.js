// logout functionality
document.getElementById("log-out").addEventListener("click", function(){
    window.location.href = "login.html";
})

// add money functionality
document.getElementById("add-money-submit-button")
.addEventListener("click", function(e){
    e.preventDefault();
    const amount = inputFieldValueById("add-money-amount");
    const pin = inputFieldValueById("add-money-pin-number");
    
    if(pin===1234){
        const totalAmount = textFieldValueById("total-balance") + amount;
        document.getElementById("total-balance").innerText = totalAmount;
    }else{
        alert("Wrong pin number");
    }
    
})

