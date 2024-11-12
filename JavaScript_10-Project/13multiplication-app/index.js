const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const alertContainerEl = document.querySelector(".alert-container");

let randomNumber;
let randomNumber2;

let score = JSON.parse(localStorage.getItem("score")) || 0;

scoreUpdate();
loadQuetion();

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  checkAnswer();
});

function alertElUpdate(text, color) {
  alertContainerEl.classList.add("active");
  alertContainerEl.innerText = text;
  alertContainerEl.style.backgroundColor = color;
}

function scoreUpdate() {
  scoreEl.style.color = score < 0 ? "red" : "green";
  scoreEl.innerText = `Score: ${score}`;
}

function loadQuetion() {
  randomNumber = Math.floor(Math.random() * 10 + 1);
  randomNumber2 = Math.floor(Math.random() * 10 + 1);

  questionEl.innerText = `What is ${randomNumber} multiply by ${randomNumber2}?`;
}

function checkAnswer() {
  let correctAnswer = randomNumber * randomNumber2;
  let userAnswer = +inputEl.value;

  if (!isNaN(userAnswer) && userAnswer !== 0) {
    if (correctAnswer === userAnswer) {
      score++;
      alertElUpdate("answer is correct.", "lightgreen");
    } else {
      score--;
      let text = `answer is Wrong. ${correctAnswer} is correct`;
      alertElUpdate(text, "rgb(238, 144, 144)");
    }
    updateLocalStorage();
    scoreUpdate();
    loadQuetion();
  } else {
    let text = "Please Enter a Valid Number.";
    alertElUpdate(text, "rgb(238, 144, 144)");
  }
  setTimeout(() => {
    alertContainerEl.classList.remove("active");
  }, 2000);

  inputEl.value = "";
  input.focus();
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
