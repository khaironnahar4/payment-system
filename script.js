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

// cash out functionality
document.getElementById("cash-out-submit-button")
.addEventListener("click", function(e){
    e.preventDefault();
    const amount = inputFieldValueById("cash-out-amount");
    const pin = inputFieldValueById("cash-out-pin");
    if(pin === 1234){
        const totalAmount = textFieldValueById("total-balance") ;
        if(totalAmount>=amount){
            document.getElementById("total-balance").innerText = totalAmount - amount;
        }else{
            alert("You don't have sufficient amount!");
        }
    }else{
        alert("Wrond pin number")
    }
})

// money transfer functionality
document.getElementById("money-transfer-submit-button")
.addEventListener("click", function(e){
    e.preventDefault();
    const amount = inputFieldValueById("money-transfer-amount");
    const pin = inputFieldValueById("money-transfer-pin");
    if(pin === 1234){
        const totalAmount = textFieldValueById("total-balance") ;
        if(totalAmount>=amount){
            document.getElementById("total-balance").innerText = totalAmount - amount;
            const number =  inputFieldValueById("money-transfer-number");
            document.getElementById("money-transfer-confirmation").innerText = `${amount}Tk has been transfered to ${number}. `
        }else{
            alert("You don't have sufficient amount!");
        }
    }else{
        alert("Wrond pin number")
    }
})

let totalCoupun = 2;
// add bonus functionality
document.getElementById("add-bonus-submit-button")
.addEventListener("click", function(e){
    e.preventDefault();
    const coupun = inputFieldValueById("coupun");
    
    if(coupun===1234){
        if(totalCoupun){
            const totalAmount = textFieldValueById("total-balance") + 10;
            document.getElementById("total-balance").innerText = totalAmount;
            totalCoupun--;
            document.getElementById("available-bonus").innerText = totalCoupun;
        }else{
            alert("You don't have any coupun!")
        }
    }else{
        alert("Wrong coupun number");
    }
    
})
