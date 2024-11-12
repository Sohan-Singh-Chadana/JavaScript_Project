const balanceAmountEl = document.querySelector('#balance-amount')
const descriptionInputEl = document.querySelector("#description")
const amountInputEl = document.querySelector("#amount")
const transactionSelectTypeEl = document.querySelector("#transaction-type")
const addBtn = document.querySelector("#add-button")
const transactionsListEl = document.querySelector("#transactions-list")

let balanceAmount = 0;

function updateBalance() {
    balanceAmountEl.innerText = `$${balanceAmount.toFixed(2)}`
}
addBtn.addEventListener("click", addTransaction)

function addTransaction() {
    let descriptionInputElValue = descriptionInputEl.value;
    let transactionSelectTypeValue = transactionSelectTypeEl.value;
    let amountInputElValue = parseInt(amountInputEl.value);

    if (descriptionInputElValue.trim() && amountInputElValue) {
        createTransaction(descriptionInputElValue, amountInputElValue, transactionSelectTypeValue)
    } else {
        alert('Please enter a valid description and amount.')
    }
    updateBalance();
}

function createTransaction(description, amount, transactionSelectType) {
    balanceAmount += transactionSelectType === "income" ? amount : -amount;
    createTransactionList(description, amount, transactionSelectType)
    descriptionInputEl.value = ''
    amountInputEl.value = ''

    //? mycode
    // if (transactionSelectType === "income") {
    //     balanceAmount += amount
    //     createTransactionList(description, amount, "income")
    // } else if (transactionSelectType === "expense") {
    //     balanceAmount -= amount
    //     createTransactionList(description, amount, "expense")
    // }
}

function createTransactionList(description, amount, classtype) {
    const li = document.createElement("li")
    li.classList.add(classtype)
    li.innerHTML = `<span>${description}</span><span>$${amount.toFixed(2)}</span>`;
    transactionsListEl.append(li)
}
updateBalance();

//? them code

const inputCheckbox = document.querySelector("#switcher-input");
const body = document.body

const isDarkMode = JSON.parse(localStorage.getItem("fullDarkMode"));

if (isDarkMode) {
    inputCheckbox.checked = true
    changeTheme(inputCheckbox, body, "fullDarkMode")
}

inputCheckbox.addEventListener("change", () => {
    changeTheme(inputCheckbox, body, "fullDarkMode")
})

function changeTheme(checkbox, element, localStorageKey) {
    if (checkbox.checked) {
        element.classList.add("darkmode")
        localStorage.setItem(localStorageKey, true)
    } else {
        element.classList.remove("darkmode")
        localStorage.setItem(localStorageKey, false)
    }
}