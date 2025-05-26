import { pubSub } from "../PubSub.js";

const tableBody = document.querySelector("#finance-table > tbody");
const expenseTemplate = document.querySelector("#expense-template");

pubSub.on("init", init);

function init() {
  pubSub.on("listUpdated", renderList);
}

function renderList(array) {
  reset();
  array.forEach((item) => {
    const tableElement = makeTableElement(item);
    tableBody.appendChild(tableElement);
  });
}

function makeTableElement(item) {
  const template = expenseTemplate.content.cloneNode(true);
  const tr = template.querySelector("tr");;

  setPaidButton(item, tr.querySelector("input"));
  tr.querySelector(".expense-name").innerText = item.name;
  tr.querySelector(".expense-value").innerText = item.value;
  tr.querySelector(".expense-type").innerText = item.type;

  tr.classList.add(item.paid ? "paid" : "not-paid");
  tr.dataset.id = item.id;

  return tr;
}

function setPaidButton(expense, checkbox) {
  checkbox.checked = expense.paid;
  checkbox.addEventListener("change", (e) => {
    pubSub.emit("paidStatusChanged", expense.id);
  });
}

function  reset() {
  tableBody.innerHTML = "";
}
