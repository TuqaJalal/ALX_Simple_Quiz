// get elements------
const radioInputs = document.querySelectorAll("input[name='quiz']"),
  submitBtn = document.getElementById("submit-answer"),
  feedback = document.getElementById("feedback");

submitBtn.addEventListener("click", (_) => checkAnswer());

function checkAnswer() {
  const correctAnswer = 4;
  let userAnswer = +document.querySelector("input[name='quiz']:checked").value;
  // return feedback---
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
