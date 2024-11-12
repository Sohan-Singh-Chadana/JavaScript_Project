const amountInput = document.querySelector("#amount");
const customTipInput = document.querySelector("#customTip");
const personInput = document.querySelector("#person");
const generateBillBtn = document.querySelector("#generate-bill");
const resetBtn = document.querySelector("#reset");
const tipBtn = document.querySelectorAll(".btn");
const tipValue = document.querySelector(".tipValue");
const totalValue = document.querySelector(".totalValue");
const billValue = document.querySelector(".bill");

let totalBillAmount = 0;
let tipAmount = 0;
let billPerPerson = 0;

let customTipInputValue;
let personInputValue;
let getpercentage;
let getbillAmount;

function validateInput() {
    if (totalBillAmount > 0 && tipAmount > 0 && billPerPerson > 0) {
        generateBillBtn.classList.add('active')
        generateBillBtn.disabled = false;
        return true
    } else {
        generateBillBtn.classList.remove("active");
        generateBillBtn.disabled = false;
        return false
    }
}

function validateBill() {
    totalBillAmount = parseInt(amountInput.value)
    tipBtn.forEach((btn) => {
        if (totalBillAmount > 0) {
            btn.classList.add("true");
            btn.disabled = false;
            customTipInput.disabled = false;
            personInput.disabled = false;
        } else {
            btn.disabled = true;
            btn.classList.remove("true");
            customTipInput.disabled = true;
            personInput.disabled = true;
        }
    });

    validateInput();
}

function selectTip(e) {
    tipBtn.forEach((btn) => {
        btn.classList.remove("active");
        if (e && e.target.innerHTML === btn.innerHTML) {
            btn.classList.add("active");
            tipAmount = parseFloat(btn.innerHTML) / 100
        }
    });
    customTipInput.value = ''
    validateInput();
}

function tipCustomValue() {
    if (customTipInput.value !== 0) {
        tipAmount = parseFloat(customTipInput.value / 100)
        tipBtn.forEach((btn) => {
            btn.classList.remove("active")
        })
    }

    validateInput()
}


function setPeopleValue() {
    billPerPerson = parseFloat(personInput.value)
    validateInput()
}

function calculate() {
    if (billPerPerson >= 1) {
        let tipAmountAdd = totalBillAmount * tipAmount
        let totalAmountAdd = totalBillAmount + tipAmountAdd
        let divideBill = totalAmountAdd / billPerPerson

        tipValue.innerHTML = "&#8377;" + tipAmountAdd.toFixed(2);
        totalValue.innerHTML = "&#8377;" + totalAmountAdd.toFixed(2);
        billValue.innerHTML = '&#8377;' + divideBill.toFixed(2);
        resetBtn.classList.add("active");
        resetBtn.disabled = false
    }
}

function handleReset() {
    amountInput.value = '';
    validateBill();
    tipBtn.forEach((btn) => {
        btn.classList.remove("true")
        btn.disabled = true
    })
    tipAmount = '';
    customTipInput.value = '';
    selectTip();
    personInput.value = '';
    setPeopleValue();
    validateInput();
    tipValue.innerHTML = '';
    totalValue.innerHTML = '';
    billValue.innerHTML = '';
    resetBtn.classList.remove('active')
    resetBtn.disabled = true;
}


amountInput.addEventListener("input", validateBill)
customTipInput.addEventListener("input", tipCustomValue)
personInput.addEventListener("input", setPeopleValue)
generateBillBtn.addEventListener("click", calculate)
resetBtn.addEventListener("click", handleReset)
tipBtn.forEach((btn) => {
    btn.addEventListener("click", selectTip)
});