/*
  TODO:
  - Make expense objects properties private.
*/

const financeTypes = [
  "fixo",
  "variavel",
  "extra",
  "adicional",
];

function expenseFactory(name, value, type) {
  if (!financeTypes.includes(type)) {
    console.log(`${type} is not a valid expense type`);
    return;
  }

  if (name.length == 0 || value.length == 0) {
    console.log(`Invalid input: ${[name, value, type]}`);
    return;
  }

  const valueParsed = parsevalue(value);
  
  if (typeof valueParsed != "number") {
    console.log(`${value} is an invalid value input`);
    return;
  }
  
  let paid = false;
  const id = crypto.randomUUID();
  
  return { id, name, value: valueParsed, type, paid };
}

// Represent the monetary value of a expense as an integer variable. 
// The value is represented in cents, for example, if the variable holds the value 1, that would be $ 0.01 or if it holds the value 100, that would be $ 1
function parsevalue(value) {
  let valueString = "";
  for (const char of value) {
    if (char == "," || char == ".") {
      continue;
    }

    valueString += char;
  }

  const valueInteger = parseInt(valueString);
  
  if (typeof valueInteger != "number") {
    return;
  }

  return valueInteger;
}

export { expenseFactory };
