(() => {
    const userInput = document.querySelector(".user-input")
    const form = document.querySelector("form")
    const result = document.querySelector(".result")
    const guessNumber = document.querySelector(".all-guesses")
    const guessesRamain = document.querySelector(".guessRamin")
    const submitBtn = document.querySelector(".submit-btn")
    const startGameBtn = document.querySelector(".start-game");
    let sound = new Audio()

    let allGuesses = []
    let randomNumber = Math.round(Math.random() * (100 + 1));
    let totalGuesses = 1

    guessesRamain.innerText = `Guesses Remaining :  ${11 - totalGuesses}`

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInputValue = parseInt(userInput.value)
        totalGuesses++
        if (totalGuesses <= 11) {
            if (userInputValue < randomNumber) {
                result.innerText = "Too Low ! 👇🔻"
            } else if (userInputValue > randomNumber) {
                result.innerText = "Too High ! 👆 ⬆ 🔼"
            } else {
                result.innerText = "You got it! Congrats ! 🎉😎 "
                startGameBtn.disabled = false
                submitBtn.disabled = true
                userInput.readOnly = true
                sound = new Audio('./sound/correct.mp3')
                sound.play();
            }
            allGuesses.push(userInputValue)
            guessesRamain.innerText = `Guesses Remaining :  ${11 - totalGuesses}`
            guessNumber.innerText = `Your guesses: ${allGuesses.join(", ")}`;
            form.reset();
        } else {
            result.innerText = `You lost! 😟😢The number was ${randomNumber}`
            startGameBtn.disabled = false
            submitBtn.disabled = true
            totalGuesses = 1
            userInput.readOnly = true
            userInput.value = ''
            sound = new Audio('./sound/failure.mp3')
            sound.play();
        }
    })

    startGameBtn.addEventListener("click", () => {
        result.innerText = ''
        guessNumber.innerText = '';
        startGameBtn.disabled = true
        submitBtn.disabled = false
        submitBtn.classList.remove('disable')
        randomNumber = Math.round(Math.random() * (100 + 1));
        allGuesses = []
        totalGuesses = 1
        guessesRamain.innerText = `Guesses Remaining :  ${11 - totalGuesses}`
        userInput.readOnly = false
        userInput.value = ''
        sound = new Audio('./sound/start.mp3')
        sound.play();
    })
})();