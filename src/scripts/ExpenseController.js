/*
  TODO:
  - Implement editExpense function
  - Implement deleteExpense function
  - Implement sortArray function to expenseList
  - Implement findIndexById function for expenseList
*/


import { expenseFactory } from "./ExpenseFactory.js";
import { pubSub } from "./PubSub.js";

const expenseList = [];

pubSub.on("init", init);

function init() {
  pubSub.on("submitted", addExpense);
}

function addExpense(name, value, type) {
  const expense = expenseFactory(name, value, type);

  if (!expense) {
    return;
  }

  expenseList.push(expense);
  sortArray(expenseList);
  pubSub.emit("listUpdated", expenseList);
}

// TODO
function editExpense(id, attribute, newValue) {
  const index = findIndexById(id);
  expenseList[index][attribute] = newValue;
}

function deleteExpense(id) {
  const index = findIndexById(array, id);
  expenseList.splice(index, 1);
}

function findIndexById(id) {}

function sortArray() {}
