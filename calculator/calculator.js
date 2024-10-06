// get eleemnts----
const numberInputs = document.querySelectorAll("input[type='number']");
operationBtns = document.querySelectorAll("button");
calcResult = document.getElementById("calculation-result");

operationBtns.forEach((btn) => {
  // declare numbers array--
  let numbers = [];
  btn.addEventListener("click", (_) => {
    // get numberInputs values-----
    numberInputs.forEach((input) => {
      numbers.push(parseFloat(input.value));

      // clear inputs---
      input.value = "";
    });

    // send values to the function----
    arithmeticOperations(numbers, btn.id);

    // clear the numbers value---
    numbers = [];
  });
});

function arithmeticOperations(numbers, operation) {
  let result = 0;

  switch (operation) {
    case "add":
      result = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });

      calcResult.textContent = result;
      break;

    case "subtract":
      result = numbers.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;
      });

      calcResult.textContent = result;
      break;

    case "multiply":
      result = numbers.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
      });

      calcResult.textContent = result;
      break;

    case "divide":
      result = numbers.reduce((accumulator, currentValue) => {
        return accumulator / currentValue;
      });

      calcResult.textContent = result;
      break;

    default:
      calcResult.textContent = result;
      break;
  }
}
