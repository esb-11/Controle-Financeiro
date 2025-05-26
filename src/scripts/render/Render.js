import { pubSub } from "../PubSub.js";
import "./FormController.js";
import { renderList } from "./ExpenseRender.js";
import { renderTotal } from "./TotalExpenseRender.js"

let expenseList;

pubSub.on("init", init);

function init() {
  pubSub.on("listUpdated", updateList);
}

function updateList(array) {
  expenseList = array;
  sortByDate(expenseList);
  renderList(expenseList);
  renderTotal(expenseList);
}

function sortByDate(array) {}
