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
  pubSub.on("paidStatusChanged", changePaidStatus);
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

function changePaidStatus(id) {
  const expense = findById(id);
  expense.paid = !expense.paid;
}

// TODO
function editExpense(id, attribute, newValue) {
  const expense = findById(id);
  expense[attribute] = newValue;
}

function deleteExpense(id) {
  const index = findIndexById(array, id);
  expenseList.splice(index, 1);
}

function findById(id) {
  return expenseList.find((expense) => {
    return expense.id == id;
  });
}

function findIndexById(id) {
  return expenseList.findIndex((expense) => {
    return expense.id == id;
  });
}

function sortArray() {}
