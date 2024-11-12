const billAmountInput = document.querySelector("#bill-amount");
const numberofPeopleInput = document.querySelector(".number-of-people");
const customTipInput = document.querySelector(".customTip");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const eachPersonBillOutput = document.querySelector(".each-person-bill span");
const totalBillOutput = document.querySelector(".total-amount span");
const tipBillOutput = document.querySelector(".tip-amount span");
const tipsContainer = document.querySelector(".tip-container");
const resetBtn = document.querySelector(".reset-btn")

let tipPercentage = 0


generateBillBtn.addEventListener("click", () => {
    const billAmount = parseInt(billAmountInput.value)
    const numberOfPeople = parseInt(numberofPeopleInput.value)

    const tipAmount = billAmount * (tipPercentage / 100)
    const totalBill = billAmount + tipAmount
    const eachPersonBill = totalBill / numberOfPeople


    tipBillOutput.innerText = `₹${tipAmount.toFixed(2)}`
    totalBillOutput.innerText = `₹${totalBill.toFixed(2)}`
    eachPersonBillOutput.innerText = `₹${eachPersonBill.toFixed(2)}`

    resetBtn.disabled = false
})


tipsContainer.addEventListener("click", (e) => {
    if (tipsContainer.classList.contains("disabled")) return
    if (e.target !== tipsContainer) {
        [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"))
        e.target.classList.add("selected")
        tipPercentage = parseInt(e.target.innerText)
        customTipInput.value = ''

        if (numberofPeopleInput.value && tipPercentage) {
            generateBillBtn.disabled = false
        } else {
            generateBillBtn.disabled = true
        }
    }
})

customTipInput.addEventListener("input", () => {

    tipPercentage = parseInt(customTipInput.value);
    [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"))

    if (numberofPeopleInput.value && tipPercentage) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})

resetBtn.addEventListener("click", () => {
    tipPercentage = 0
    billAmountInput.value = ''
    numberofPeopleInput.value = ''
    customTipInput.value = '';
    [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"))

    tipBillOutput.innerText = ``
    totalBillOutput.innerText = ``
    eachPersonBillOutput.innerText = ``

    resetBtn.disabled = true
    generateBillBtn.disabled = true
    customTipInput.disabled = true
    numberofPeopleInput.disabled = true
    tipsContainer.classList.add("disabled")

})

billAmountInput.addEventListener("input", () => {
    if (billAmountInput.value) {
        customTipInput.disabled = false
        numberofPeopleInput.disabled = false
        tipsContainer.classList.remove("disabled")
    } else {
        customTipInput.disabled = true
        numberofPeopleInput.disabled = true
        tipsContainer.classList.add("disabled")

    }
})

numberofPeopleInput.addEventListener("input", () => {
    if (numberofPeopleInput.value && tipPercentage) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})