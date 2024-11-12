const passwordInput = document.querySelector("#password");
const lowerCaseElement = document.querySelector("#lc");
const upperCaseElement = document.querySelector("#uc");
const numCaseElement = document.querySelector("#num");
const symbCaseElement = document.querySelector("#syb");
const charsElem = document.querySelector("#chars");
const progressBar = document.querySelector("#progressBar");
const strength = document.querySelector("#strength");

passwordInput.addEventListener("input", (e) => {
  let userPassword = passwordInput.value;

  let lowerCasePattern = /[a-z]/;
  if (userPassword.match(lowerCasePattern)) {
    lowerCaseElement.classList.add("text-lime-500");
  } else {
    lowerCaseElement.classList.remove("text-lime-500");
  }

  let upperCasePattern = /[A-Z]/g;
  if (userPassword.match(upperCasePattern)) {
    upperCaseElement.classList.add("text-lime-500");
  } else {
    upperCaseElement.classList.remove("text-lime-500");
  }

  let numberPattern = /[0-9]/;
  if (userPassword.match(numberPattern)) {
    numCaseElement.classList.add("text-lime-500");
  } else {
    numCaseElement.classList.remove("text-lime-500");
  }

  let sepecialPattern = /[^A-Za-z0-9]/;
  if (userPassword.match(sepecialPattern)) {
    symbCaseElement.classList.add("text-lime-500");
  } else {
    symbCaseElement.classList.remove("text-lime-500");
  }

  charsElem.innerHTML = userPassword.length;

  if (userPassword.length > 5) {
    progressBar.classList.add("bg-orange-500");
    strength.innerHTML = "Medium";
  } else {
    progressBar.classList.remove("bg-orange-500");
  }

  if (userPassword.length > 8) {
    progressBar.classList.add("bg-lime-500");
    strength.innerHTML = "Strong";
  } else {
    progressBar.classList.remove("bg-lime-500");
  }

  if (userPassword.length < 5) {
    progressBar.classList.add("bg-red-500");
    strength.innerHTML = "Weak";
  } else {
    progressBar.classList.remove("bg-red-500");
  }

  function getPasswordScore(text) {
    let score = 0;
    if (text.length > 3) {
      score = Math.min(6, Math.floor(text.length / 3));
      score +=
        lowerCasePattern.test(text) +
        upperCasePattern.test(text) +
        numberPattern.test(text) +
        sepecialPattern.test(text);
    }
    return score;
  }
  let score = getPasswordScore(userPassword);
  progressBar.style.width = score * 10 + "%";
});
