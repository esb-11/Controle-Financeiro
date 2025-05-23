import { pubSub } from "../PubSub.js";

const totalElement = document.querySelector("#total");

pubSub.on("init", init);

function init() {
  pubSub.on("listUpdated", updateTotal);
}

function updateTotal(expenseList) {
  const total = getTotal(expenseList);
  totalElement.innerText = total;
}

function getTotal(expenseList) {
  return expenseList.reduce((total, expense, index, array) => {
    return total + expense.value;
  }, 0);
}
