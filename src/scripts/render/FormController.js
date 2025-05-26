/*
  TODO:
  - Validate form input before submitting
*/

import { pubSub } from "../PubSub.js";

const container = document.querySelector("#finance-container");
const form = container.querySelector("#finance-form");
const nameInput = form.querySelector("#name");
const valueInput = form.querySelector("#value");
const typeInput = form.querySelector("#type");
const dueDateInput = form.querySelector("#due-date");

form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  // validateForm();
  const name = nameInput.value;
  const value = valueInput.value;
  const type = typeInput.value;
  const dueDate = dueDateInput.value;

  resetForm();

  pubSub.emit("submitted", name, value, type, dueDate);
}

function resetForm() {
  nameInput.value = "";
  valueInput.value = "";
  dueDateInput.value = "";
}
