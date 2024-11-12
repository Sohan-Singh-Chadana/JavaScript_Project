const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        let currentNumber = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNumber = currentNumber + increment;
        counterEl.innerText = Math.ceil(currentNumber);

        if (currentNumber <= dataCeil) {
            setTimeout(incrementCounter, 50);
        } else {
            counterEl.innerText = dataCeil;
        }
    }
});