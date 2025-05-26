import { pubSub } from "../PubSub.js";

const container = document.querySelector("#filter-buttons");

const allButton = document.querySelector(".all-months-button");
allButton.addEventListener("click", (e) => {
  currentMonth = -1;
  pubSub.emit("sendExpensesList")}
);

let currentMonth = -1;
let months = [];

function resetMonths() {
  container.innerHTML = "";
  months = [];
}

function makeMonthButton(date) {
  const monthNumber = date.getMonth();

  if (months.includes(monthNumber)) return;
  months.push(monthNumber);

  const button = document.createElement("button");
  const monthName = getMonthName(date);
  button.textContent = monthName;
  button.addEventListener("click", (e) => {
    filterByMonth(monthNumber);
  });

  container.appendChild(button);
}

function getMonthName(date) {
  const options = { month: "long" };
  const month = new Intl.DateTimeFormat("pt-BR", options).format(date);
  return month;
}

function filterByMonth(month) {
  currentMonth = month;
  pubSub.emit("sendExpensesList");
}

export { makeMonthButton, resetMonths, currentMonth };
