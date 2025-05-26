const totalElement = document.querySelector("#total");
const totalPendingElement = document.querySelector("#total-pending");
const totalPaidElement = document.querySelector("#total-paid");

let total = 0;
let totalPending = 0;
let totalPaid = 0;

function addTotal(expense) {
  total += expense.value;
  totalElement.innerText = total;

  totalPaid += expense.paid ? expense.value : 0;
  totalPaidElement.innerText = totalPaid;

  totalPending += expense.paid ? 0 : expense.value;
  totalPendingElement.innerText = totalPending;
}

function resetTotal() {
  total = 0;
  totalPending = 0;
  totalPaid = 0;
}

export { addTotal, resetTotal };
