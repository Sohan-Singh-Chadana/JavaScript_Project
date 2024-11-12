let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult")
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p")

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validdateGuess(guess);
        // console.log(guess)
    })
}


function validdateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a number more than 1")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is Tooo low")
    } else if (guess > randomNumber) {
        displayMessage("Number is Too High");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", '');
    p.classList.add("button")
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        lowOrHi.innerHTML = ``;
        playGame = true;
    })
}

const clock = document.querySelector('.colock');


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);


let date = new Date();
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getTime())
console.log(date.getTimezoneOffset())
console.log(date.getUTCDay())
console.log(date.getUTCDate())
console.log(date.getUTCFullYear())
console.log(date.getUTCHours())
console.log(date.getUTCMonth())
console.log(date.getUTCMinutes())
console.log(date.getUTCSeconds())
console.log(date.getUTCMilliseconds())
console.log(` ** ** ** ** ** ** ** ** ** ** `)
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toUTCString())
console.log(date.toJSON())
console.log(date.toTimeString())
console.log(date.toString())