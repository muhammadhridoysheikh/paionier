const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function(){
   const loginArea = document.getElementById('login-area').style.display = "none";
   const transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display = "block";
})




// deposit button click handler
const depositBtn = document.getElementById('deposit');

depositBtn.addEventListener("click", function(){
    const depositAdd = document.getElementById("depositAdd").value;
    const depositNumber = parseFloat(depositAdd);
   
    updatespantext('currentDeposit', depositNumber)

    
    updatespantext("totalBlance", depositNumber)
})

//withdraw 
const withdrawButton = document.getElementById("withdraw");
withdrawButton.addEventListener("click", function(){
    
   const withdrawNumber = getInputNumber("addwithdraw") 
   updatespantext('currentWithdraw', withdrawNumber);
   updatespantext("totalBlance", -1*withdrawNumber)
   document.getElementById("addwithdraw").value = ""
})

function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    console.log(withdrawAmount);
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
   
}



function updatespantext(id, depositNumber){
    const current = document.getElementById(id).innerText;
      const currentnumber = parseFloat(current);
      var totalBlanceDeposit = depositNumber + currentnumber;
      document.getElementById(id).innerText = totalBlanceDeposit;
}
