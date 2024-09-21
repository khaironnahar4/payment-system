
// to show the sections
function showSection(id){
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-money-form").classList.add("hidden");
    document.getElementById("bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("transaction-form").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}

