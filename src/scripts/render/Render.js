import { pubSub } from "../PubSub.js";
import "./FormController.js";
import { makeTableElement, resetExpensesTable } from "./ExpenseRender.js";
import { addTotal, resetTotal } from "./TotalExpenseRender.js";
import { makeMonthButton, resetMonths } from "./MonthFilter.js";

pubSub.on("init", init);

function init() {
  pubSub.on("listUpdated", render);
}

function render(expenseList) {
  reset();
  sortByDate(expenseList);
  for (const expense of expenseList) {
    makeTableElement(expense);
    makeMonthButton(expense.date);
    addTotal(expense);
  }
}

function reset() {
  resetExpensesTable();
  resetMonths();
  resetTotal();
}

function sortByDate(array) {}
