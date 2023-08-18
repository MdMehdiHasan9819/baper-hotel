document.getElementById('deposit-button').addEventListener('click' , function(){
    // step number 2
    const depositEvent = document.getElementById('input-deposit');
    const newDepositAmountString = depositEvent.value;
    const newDepositAmount =parseFloat(newDepositAmountString);
    // step Number 3
    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalAmountString = depositTotalElement.innerText;
    const preDepositTotalAmount = parseFloat(preDepositTotalAmountString);
    // step Number 4
    currentDepositTotal = preDepositTotalAmount + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

        // step number 5
        const balanceTotalElement = document.getElementById('Balance-event');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

        // step number 6
        const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
        balanceTotalElement.innerText= currentBalanceTotal;
    // step number 7
    depositEvent.value = '';
})
