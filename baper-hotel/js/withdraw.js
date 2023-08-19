    // step-1
document.getElementById('withdraw-button').addEventListener('click' , function(){
    // step-2
    const withdrawInput = document.getElementById('input-withdraw');
    const newWithdrawAmountString = withdrawInput.value;
    const newWithdrawTotal = parseFloat(newWithdrawAmountString);
    withdrawInput.value='';

// step-3
    const withdrawTotalElement = document.getElementById('withdrawElement');
    const PreviousWithdrawTotalString = withdrawTotalElement.innerText;
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalString);
    console.log(PreviousWithdrawTotal);

    // step 4
    const currentWithdrawTotal = PreviousWithdrawTotal + newWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5
    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotalElement.innerHTML = newBalanceTotal;

})