const amountInputEl = document.querySelector("#amount")
const fromCurrencyEl = document.querySelector("#fromCurrency")
const toCurrencyEl = document.querySelector("#toCurrency")
const convertBtn = document.querySelector(".convertBtn")
const ResetBtn = document.querySelector(".ResetBtn")
const result = document.querySelector(".result")

convertBtn.addEventListener("click", currencyConverter)

function currencyConverter() {
    let amountInputValue = parseInt(amountInputEl.value)
    let fromCurrencyValue = fromCurrencyEl.value
    let toCurrencyValue = toCurrencyEl.value

    if (amountInputValue) {
        getResult(fromCurrencyValue, toCurrencyValue, amountInputValue)
        ResetBtn.disabled = false
    } else {
        alert("Please enter a valid amount.")
    }
}
// * get Data from API
function getResult(fromCurrencyValue, toCurrencyValue, amountInputValue) {
    fetch(`https://v6.exchangerate-api.com/v6/1bcffbe33ceeb157b99f608b/latest/USD`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let fromRate = data.conversion_rates[fromCurrencyValue]
            let toRate = data.conversion_rates[toCurrencyValue]
            result.innerHTML = ((toRate / fromRate) * amountInputValue).toFixed(2)
        })
        .catch((error) => {
            result.innerHTML = error
        })
};
// * daynamacaly add select option

(function getCurrnecyCode() {
    fetch(`https://v6.exchangerate-api.com/v6/1bcffbe33ceeb157b99f608b/latest/USD`)
        .then((res) => res.json())
        .then((data) => {
            for (const key in data.conversion_rates) {
                const optione = document.createElement("option")
                optione.innerText = `${key}`
                fromCurrencyEl.append(optione)
            }
            for (const key in data.conversion_rates) {
                const optione = document.createElement("option")
                optione.innerText = `${key}`
                toCurrencyEl.append(optione)
            }
        }).catch((erro) => {
            result.innerHTML = erro
            fromCurrencyEl.innerHTML = `
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
            `
            toCurrencyEl.innerHTML = `
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            `
        })
})();

ResetBtn.addEventListener("click", () => {
    amountInputEl.value = ''
    result.innerHTML = ''
    ResetBtn.disabled = true
})