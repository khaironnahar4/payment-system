document.getElementById("log-in").addEventListener("click",function(event){
   // prevent default page loading after form submition
   event.preventDefault();
   const password = parseFloat(document.getElementById("login-password").value) ;
   
   if(password===1234){
    window.location.href = "index.html";
   }else{
    alert("You have a wrong mobile number or password!")
   } 
    
})