const fullDarkModeCheckbox = document.querySelector("#full-dark-mode");
const containedDarkModeCheckbox = document.querySelector("#contained-dark-mode");
const container = document.querySelector(".container");

const isFullDarkMode = JSON.parse(localStorage.getItem("fullDarkModeCheckbox"));
const iscontainedDarkMode = JSON.parse(localStorage.getItem("containedDarkModeCheckbox"))

if (isFullDarkMode) {
    fullDarkModeCheckbox.checked = true
}

if (iscontainedDarkMode) {
    containedDarkModeCheckbox.checked = true
}

changeFullDarkMode();
changeContainedDarkMode();

fullDarkModeCheckbox.addEventListener("change", () => {
    changeFullDarkMode()
    changeContainedDarkMode()
})

function changeFullDarkMode() {
    // containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked
    changeTheme(fullDarkModeCheckbox, document.body, "fullDarkModeCheckbox")
}

function changeContainedDarkMode() {
    changeTheme(containedDarkModeCheckbox, container, 'containedDarkModeCheckbox')
}


function changeTheme(checkbox, element, localStorageKey) {
    if (checkbox.checked) {
        element.classList.add("dark")
        localStorage.setItem(localStorageKey, true)

    } else {
        element.classList.remove("dark")
        localStorage.setItem(localStorageKey, false)
    }
}

containedDarkModeCheckbox.addEventListener("change", changeContainedDarkMode)


//************************************************************************************ */

const loginBtn = document.querySelector('#loginBtn')
const submitBtn = document.querySelector('#submitBtn')
const checkBalaceBtn = document.querySelector('#checkBalaceBTn')
const logoutBtn = document.querySelector('#logoutBtn')
const depositBtn = document.querySelector('#depositBtn')
const withdrawBtn = document.querySelector('#withdrawBtn')
const overlay = document.querySelector('.overlay')
const closePopup = document.querySelector('.popup span')
const setPinBtn = document.querySelector('#setPinBtn')
const displayLoginMessage = document.querySelector('.displayLoginMessage')
let setPin = document.querySelector("#setPin")
const getpin = document.querySelector("#pin")
const displayMessageElement = document.querySelector('.displayMessage')
const setPinForm = document.querySelector('.setPinForm')
const enterPinForm = document.querySelector('.enterPinForm')
const inputCheckbox = document.querySelector('#inputCheckbox')


let isAuthenticated = false
let balance = 100;
let sh = '';

const correctPin = ['1234']
console.log(correctPin)

loginBtn.onclick = function() {
    // const setPin = prompt("Set Your Pin")
    overlay.classList.add("show")
}

setPinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let setPinValue = setPin.value

    if (correctPin.length === 0 || correctPin.length === 1 || correctPin.length > 1) {
        if (setPinValue === '') {
            correctPin[0]
            sh = `Please Set PIN try again ! ❌`
            displayLoginMessage.innerText = sh
            displayLoginMessage.style.color = 'red'
        } else {
            correctPin.push(setPinValue)
            if (correctPin.includes(setPinValue)) {
                isAuthenticated = true
                logoutBtn.disabled = false

                sh = `Login successful. ✔`
                displayLoginMessage.innerText = sh
                displayLoginMessage.style.color = 'green'
                setInterval(() => {
                    displayLoginMessage.innerText = ''
                }, 3000)
                console.log(sh, setPinValue)
            }
        }

        // else {
        //     isAuthenticated = false
        //     sh = "Invalid PIN. Please try again."
        //     console.log(sh)
        // }
    }
    setPin.value = ''
    setInterval(() => {
        overlay.classList.remove("show")
    }, 5000)
})

function showPassword() {
    if (setPin.type === 'password') {
        setPin.type = "text"
    } else {
        setPin.type = "password"
    }
}
inputCheckbox.addEventListener("click", showPassword)


closePopup.addEventListener("click", () => {
    overlay.classList.remove("show")
    displayLoginMessage.innerText = ''
    setPin.value = ''
})

enterPinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const getpin = prompt("Enter Your PIN")

    let getPinValue = getpin.value

    if (correctPin.includes(getPinValue)) {
        isAuthenticated = true
        sh = 'Valid PIN Login successful.'
        checkBalaceBtn.disabled = false
        depositBtn.disabled = false
        withdrawBtn.disabled = false
        console.log(sh)
        displayMessage(sh)
        displayMessageElement.style.color = 'green'
    } else {
        isAuthenticated = false
        sh = "Invalid PIN ! Please try again This PIN is not Existing!"
        console.log(sh)
        displayMessage(sh)
        displayMessageElement.style.color = "red"
    }

    getpin.value = ''

    // if (isAuthenticated) {
    //     console.log("please login first.")
    // } else {
    //     const getpin = prompt("enter your pin")

    //     if (correctPin.includes(getpin)) {
    //         isAuthenticated = true
    //         sh = 'Login successful.'
    //         console.log(sh)
    //     } else {
    //         isAuthenticated = false
    //         sh = "Invalid PIN. Please try again."
    //         console.log(sh)
    //     }
    // }


    // sh = correctPin.map((pin) => {
    //     if (pin.includes(getpin)) {
    //         if (getpin === pin) {
    //             isAuthenticated = true
    //             return 'Login successful.'
    //         } else {
    //             isAuthenticated = false
    //         }
    //     } else {
    //         return "Invalid PIN. Please try again."
    //     }
    // })

})

checkBalaceBtn.addEventListener("click", checkBalace)

function checkBalace() {
    if (!isAuthenticated) {
        console.log("please login first.")
    } else {
        console.log(`Your Account balance is $${balance}`)
        displayMessageElement.style.color = 'green'
        displayMessage(`Your Account balance is $${balance}`)
    }
}

logoutBtn.addEventListener("click", () => {
    if (correctPin.length > 0) {
        isAuthenticated = false
        sh = "Logged out Successfully  User " + correctPin.length + "."
        console.log(sh)
        displayMessageElement.style.color = 'green'
        displayMessage(sh)
    } else if (correctPin.length < 1) {
        logoutBtn.disabled = true
        sh = "Please First Login  Your Account!"
        console.log(sh)
        displayMessageElement.style.color = 'red'
        displayMessage(sh)
    }

    // if (correctPin.length > 0) {
    //     isAuthenticated = false
    //     sh = "Logged out Successfully this PIN " + correctPin.pop() + "."
    //     console.log(sh)
    // } else {
    //     sh = "please login first."
    //     console.log(sh)
    // }
})

depositBtn.addEventListener("click", () => {
    if (!isAuthenticated) {
        console.log("please login first.")
        displayMessage("please login first.")
    } else {
        const amount = parseFloat(prompt("enter the amount to deposit"))
        if (!isNaN(amount) && amount >= 0) {
            balance += amount
            console.log(`Deposited $${amount}. Your new Balance is $${balance}`)
            displayMessage(`Deposited $${amount}. Your new Balance is $${balance}`)
            displayMessageElement.style.color = 'green'
        } else {
            console.log('Invalid amount. Please try again.')
            displayMessage('Invalid amount. Please try again.')
            displayMessageElement.style.color = 'red'
        }
    }

})

withdrawBtn.addEventListener("click", () => {
    const amount = parseFloat(prompt("enter the amount to withdraw:"))
    if (!isNaN(amount) && amount >= 0) {
        balance -= amount
        console.log(`Withdrawn $${amount}. Your new balance is $${balance}`)
        displayMessageElement.style.color = 'green'
        displayMessage(`Withdrawn $${amount}. Your new balance is $${balance}`)
    } else {
        console.log('Invalid amount or insufficient balance. Please try again.')
        displayMessageElement.style.color = 'red'
        displayMessage('Invalid amount or insufficient balance. Please try again.')
    }
})

function displayMessage(message) {
    displayMessageElement.innerText = message
}