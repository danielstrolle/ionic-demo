const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    console.log('works');
   const enteredReason = reasonInput.value;
   const enteredAmount = amountInput.value;

   //Check that inputs are Valid
   if (enteredReason.trim().length <= 0 ||
       enteredAmount <= 0 ||
       enteredAmount.trim().length <= 0)
   {
       alertCtrl.create({
           message: 'Please enter a valid reason and amount',
           header: 'Invalid Inputs!',
           buttons: ['Okay']
       }).then(alertElement => {
           alertElement.present();
       });
       return;
   }
   //Create new list item
   const newItem = document.createElement('ion-item');
   newItem.textContent = enteredReason + ": $" + enteredAmount;

   //Add to expenses list
   expensesList.appendChild(newItem);

   totalExpenses += +enteredAmount;
   totalExpensesOutput.textContent = totalExpenses;
   clear();
});

cancelBtn.addEventListener('click', clear);
