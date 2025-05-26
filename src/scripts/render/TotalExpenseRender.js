import { pubSub } from "../PubSub.js";

const totalElement = document.querySelector("#total");
const totalPendingElement = document.querySelector("#total-pending");
const totalPaidElement = document.querySelector("#total-paid");

pubSub.on("init", init);

function init() {
  pubSub.on("listUpdated", updateTotal);
}

function updateTotal(expenseList) {
  const total = getTotal(expenseList);
  totalElement.innerText = total;

  const totalPending = getTotalPending(expenseList);
  totalPendingElement.innerText = totalPending;

  const totalPaid = getTotalPaid(expenseList);
  totalPaidElement.innerText = totalPaid;
}

function getTotal(expenseList) {
  return expenseList.reduce((total, expense, index, array) => {
    return total + expense.value;
  }, 0);
}

function getTotalPending(expenseList) {
  return expenseList.reduce((total, expense, index, array) => {
    return total + (expense.paid ? 0 : expense.value);
  }, 0);
}

function getTotalPaid(expenseList) {
  return expenseList.reduce((total, expense, index, array) => {
    return total + (expense.paid ? expense.value : 0);
  }, 0);
}
