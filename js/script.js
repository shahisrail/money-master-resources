function calculateExpense() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const foodExpense = parseFloat(document.getElementById('food').value) || 0;
    const rentExpense = parseFloat(document.getElementById('rent').value) || 0;
    const clothesExpense = parseFloat(document.getElementById('clothes').value) || 0;

    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const balance = income - totalExpense;

    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function calculateSavings() {
    const savePercentage = parseFloat(document.getElementById('save').value) || 0;
    const income = parseFloat(document.getElementById('income').value) || 0;

    if (savePercentage < 0) {
        alert('Savings percentage cannot be negative.');
        return;
    }
    const savingAmount = (income * savePercentage) / 100;
    const balance = document.getElementById("balance").innerText;
    const remainingBalance = balance - savingAmount;

    if (savingAmount > balance) {
        alert("SavingAmount is greater than balance");
    } else
    document.getElementById('saving-amount').textContent = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').textContent = remainingBalance.toFixed(2);
}

document.getElementById('calculate-btn').addEventListener('click', calculateExpense);
document.getElementById('save-btn').addEventListener('click', calculateSavings);
