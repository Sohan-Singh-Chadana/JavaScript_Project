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

function billValidate() {
  let amountInputValue = parseInt(amountInput.value);
  if (amountInputValue) {
    tipBtn.forEach((btn) => {
      btn.disabled = false;
      btn.classList.add("true");
      customTipInput.disabled = false;
      personInput.disabled = false;

      function setCustomTipInput() {
        customTipInputValue = customTipInput.value;
        if (customTipInput.value) {
          btn.classList.remove("active");
        } else {
          customTipInput.value = "";
        }
        activeBillFunction(personInputValue);
      }
      customTipInput.addEventListener("input", setCustomTipInput);

      function setPersonInput() {
        personInputValue = personInput.value;
        activeBillFunction(personInputValue);
      }
      personInput.addEventListener("input", setPersonInput);
    });
  } else {
    tipBtn.forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove("true");
      customTipInput.disabled = true;
      personInput.disabled = true;
      generateBillBtn.classList.remove("active");
    });
  }
  getbillAmount = parseFloat(amountInput.value);
}
amountInput.addEventListener("input", billValidate);

tipBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");

    if (customTipInput.value || btn.classList.contains("active")) {
      customTipInput.value = "";
      activeBillFunction(personInputValue);
    } else {
      generateBillBtn.classList.remove("active");
      generateBillBtn.disabled = true;
    }
    tipAmount = parseFloat(btn.innerText);

    if (tipAmount > 0) {
      getpercentage = tipAmount;
    }
  });
  activeBillFunction(personInputValue);
});

function activeBillFunction(personInputValue) {
  if (personInputValue) {
    generateBillBtn.classList.add("active");
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.classList.remove("active");
    generateBillBtn.disabled = true;
  }
}

function calculateTipFun(billAmount, tipPercentage) {
  tipAmount = (billAmount * tipPercentage) / 100;
  totalBillAmount = billAmount + tipAmount;
  return { tipAmount, totalBillAmount };
}

function claculateEachPersonBillAmount(totalAmount, numPeople) {
  billPerPerson = totalAmount / numPeople;
  return billPerPerson;
}

function displayBillMessageFunction(tipAmount, totalAmount, perPeson) {
  tipValue.innerText = `₹${tipAmount.toFixed(2)}`;
  totalValue.innerText = `₹${totalAmount.toFixed(2)}`;
  billValue.innerText = `₹${perPeson.toFixed(2)}`;
}

generateBillBtn.addEventListener("click", () => {
  let getNOfPeople = parseFloat(personInput.value);

  if (customTipInput.value) {
    calculateTipFun(getbillAmount, parseInt(customTipInput.value));
  } else {
    calculateTipFun(getbillAmount, getpercentage);
  }
  claculateEachPersonBillAmount(totalBillAmount, getNOfPeople);

  if (tipAmount > 0 && totalBillAmount > 0 && billPerPerson > 0) {
    displayBillMessageFunction(tipAmount, totalBillAmount, billPerPerson);
    resetBtn.classList.add("active");
    resetBtn.disabled = false;
  } else {
    tipValue.innerText = "";
    totalValue.innerText = "";
    billValue.innerText = "";
    resetBtn.classList.remove("active");
    resetBtn.disabled = true;
  }
});

resetBtn.addEventListener("click", () => {
  tipValue.innerText = "";
  totalValue.innerText = "";
  billValue.innerText = "";
  customTipInput.disabled = true;
  personInput.disabled = true;
  generateBillBtn.disabled = true;
  generateBillBtn.classList.remove("active");
  personInput.value = "";
  amountInput.value = "";
  customTipInput.value = "";
  tipBtn.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("true");
    btn.classList.remove("active");
  });
  totalBillAmount = 0;
  tipAmount = 0;
  billPerPerson = 0;
  resetBtn.classList.remove("active");
  resetBtn.disabled = true;
  customTipInputValue = 0;
  personInputValue = 0 ;
  getpercentage = 0 ;
  getbillAmount = 0 ;
});
