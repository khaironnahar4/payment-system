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
    if(isNaN(amount)) return alert("Please enter a valid amount");
    if(pin===1234){
        const totalAmount = textFieldValueById("total-balance") + amount;
        document.getElementById("total-balance").innerText = totalAmount;

        // transaction created
        const div = document.createElement("div");
        div.classList.add("card", "border", "m-4", "shadow-lg");

        // date
        const d = new Date();
        div.innerHTML = `
            <div class="p-4">
              <h3 class="card-title text-lg">Add Money</h3>
              <p>${amount}tk added. New balance ${totalAmount+amount}.</p>
              <p class="text-sm">${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</p>
            </div>
            `
        
        const transactionDiv = document.getElementById("transaction-container");
        transactionDiv.insertBefore(div, transactionDiv.children[0]);

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
        if(isNaN(amount)){
            alert("Please enter a valid amount");
        }else{
            const totalAmount = textFieldValueById("total-balance") ;
            if(totalAmount>=amount){
                document.getElementById("total-balance").innerText = totalAmount - amount;
            }else{
                alert("You don't have sufficient amount!");
            }

        // transaction created
        const div = document.createElement("div");
        div.classList.add("card", "border", "m-4", "shadow-lg");

        // date
        const d = new Date();
        div.innerHTML = `
            <div class="p-4">
              <h3 class="card-title text-lg">Cash Out</h3>
              <p>${amount}tk withdraw. New balance ${totalAmount-amount}.</p>
              <p class="text-sm">${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</p>
            </div>
            `
        
        const transactionDiv = document.getElementById("transaction-container");
        transactionDiv.insertBefore(div, transactionDiv.children[0]);
        }
    }else{
        alert("Wrong pin number")
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
        if(isNaN(amount)){
            alert("Please enter a valid amount")
        }else{
            if(totalAmount>=amount){
                document.getElementById("total-balance").innerText = totalAmount - amount;
                const number =  inputFieldValueById("money-transfer-number");
                document.getElementById("money-transfer-confirmation").innerText = `${amount}Tk has been transfered to ${number}. `

                // transaction created
                const div = document.createElement("div");
                div.classList.add("card", "border", "m-4", "shadow-lg");

                // date
                const d = new Date();
                div.innerHTML = `
                    <div class="p-4">
                    <h3 class="card-title text-lg">Money Transfered</h3>
                    <p>${amount}tk transfered. New balance ${totalAmount-amount}.</p>
                    <p class="text-sm">${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</p>
                    </div>
                    `
                
                const transactionDiv = document.getElementById("transaction-container");
                transactionDiv.insertBefore(div, transactionDiv.children[0]);
            }else{
                alert("You don't have sufficient amount!");
            }
        }
    }else{
        alert("Wrong pin number")
    }
})


// add bonus functionality
let totalCoupun = 2;
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

             // transaction created
            const div = document.createElement("div");
            div.classList.add("card", "border", "m-4", "shadow-lg");

            // date
            const d = new Date();
            div.innerHTML = `
                <div class="p-4">
                <h3 class="card-title text-lg">Bonus added</h3>
                <p>Bonus 20tk added. New balance ${totalAmount}.</p>
                <p class="text-sm">${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</p>
                </div>
                `
            
            const transactionDiv = document.getElementById("transaction-container");
            transactionDiv.insertBefore(div, transactionDiv.children[0]);
        }else{
            alert("You don't have any coupun!")
        }
    }else{
        alert("Wrong coupun number");
    }
    
})

// pay bill functionality
document.getElementById("pay-bill-submit-button")
.addEventListener("click", function(e){
    e.preventDefault();
    const amount = inputFieldValueById("pay-bill-amount");
    const pin = inputFieldValueById("pay-bill-pin");
    if(pin === 1234){
        const totalAmount = textFieldValueById("total-balance") ;
        
        if(isNaN(amount)){
            return alert("Please put valid amount");
        }else{
            if(totalAmount>=amount){
            document.getElementById("total-balance").innerText = totalAmount - amount;

            // transaction created
            const div = document.createElement("div");
            div.classList.add("card", "border", "m-4", "shadow-lg");

            // date
            const d = new Date();
            div.innerHTML = `
                <div class="p-4">
                <h3 class="card-title text-lg">Bill payed.</h3>
                <p>${amount}tk transfered. New balance ${totalAmount-amount}.</p>
                <p class="text-sm">${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</p>
                </div>
                `
            
            const transactionDiv = document.getElementById("transaction-container");
            transactionDiv.insertBefore(div, transactionDiv.children[0]);
            }else{
                alert("You don't have sufficient amount!");
            }
        }
    }else{
        alert("Wrong pin number")
    }
})