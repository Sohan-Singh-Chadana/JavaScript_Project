const decrementBtn = document.querySelector(".decrement"),
    incrementBtn = document.querySelector(".increment"),
    valueDisplay = document.querySelector(".value"),
    resetBtn = document.querySelector("#reset"),
    inputElem = document.querySelector("#changeBy")


let counter = 0
let inputValue = parseInt(inputElem.value)

inputElem.addEventListener("change", (e) => {
    inputValue = parseInt(e.target.value)
})

incrementBtn.addEventListener("click", () => {
    counter = counter + inputValue
    valueDisplay.innerText = counter
})

decrementBtn.addEventListener("click", () => {
    counter = counter - inputValue
    valueDisplay.innerText = counter
})

resetBtn.addEventListener("click", () => {
    counter = 0
    valueDisplay.innerText = counter;
})


//? Anurag sir with solve

// incrementBtn.addEventListener("click", () => {
//     const countValue = parseInt(valueDisplay.innerText)
//     const changebyValue = parseInt(inputElem.value)
//     valueDisplay.innerText = countValue + changebyValue
// })

// decrementBtn.addEventListener("click", () => {
//     const countValue = parseInt(valueDisplay.innerText)
//     const changebyValue = parseInt(inputElem.value)
//     valueDisplay.innerText = countValue - changebyValue
// })

// resetBtn.addEventListener("click", () => {
//     valueDisplay.innerText = 0
// })