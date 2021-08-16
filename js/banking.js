// handel deposite button event

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the deposite input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
       const previousBalanceTotal = parseFloat(balanceTotalText); */
    // balanceTotal.innerText = newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = newBalanceTotal = previousBalanceTotal + amount;
    }

    else {
        balanceTotal.innerText = newBalanceTotal = previousBalanceTotal - amount;
    }

}

document.getElementById('depositeBtn').addEventListener('click', function () {
    // get the amount deposite
    /*  const depositeInput = document.getElementById('deposite-amount');
     const newDepositeAmountText = depositeInput.value;
     const newDepositeAmount = parseFloat(newDepositeAmountText); */



    // update diposite total
    /*     const depositeTotal = document.getElementById('deposite-total');
        const previousDepositeText = depositeTotal.innerText;
        const previousDepositeAmount = parseFloat(previousDepositeText);
    
        const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
        depositeTotal.innerText = newDepositeTotal; */




    // update account balance
    /*     const balanceTotal = document.getElementById('balance-total');
        balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
        balanceTotal.innerText = newBalanceTotal; */

    // clear the deposite input field
    // depositeInput.value = '';

    const newDepositeAmount = getInputValue('deposite-amount');
    if (newDepositeAmount > 0) {
        updateTotalField('deposite-total', newDepositeAmount);
        updateBalance(newDepositeAmount, true);
    }


});


// Hnadel Widthrow button event
document.getElementById('withdraw-button').addEventListener('click', function () {


    const newWithdrawAmountText = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmountText > 0 && newWithdrawAmountText < currentBalance) {
        updateTotalField('withdrow-total', newWithdrawAmountText);
        updateBalance(newWithdrawAmountText, false);
    }

    if (newWithdrawAmountText > currentBalance) {
        console.log('you can not withdrow mony ')
    }


    /*    const withdrawInput = document.getElementById('withdraw-input');
       const withdrawAmountText = withdrawInput.value;
       const newWithdrawAmountText = parseFloat(withdrawAmountText);
    */



    // set withdrow total
    /*     const withdrawTotal = document.getElementById('withdrow-total');
        const previousWithdrowText = withdrawTotal.innerText;
        const previousWithdrowTotal = parseFloat(previousWithdrowText);
        
        const newWithdrawTotal = previousWithdrowTotal + newWithdrawAmountText;
        withdrawTotal.innerText = newWithdrawTotal;
    */

    // withdrow Update Balance
    /*     const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmountText;
    
        balanceTotal.innerText = newBalanceTotal; */

    // // clear the withdrow input field
    // withdrawInput.value = '';

});