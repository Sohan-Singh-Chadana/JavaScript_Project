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
const getpin = document.querySelector("#pin")
const displayMessageElement = document.querySelector('.displayMessage')
const setPinForm = document.querySelector('.setPinForm')
const enterPinForm = document.querySelector('.enterPinForm')
const inputCheckbox = document.querySelector('#inputCheckbox')
let setPin = document.querySelector("#setPin")


let isAuthenticated = false
let balance = 100;
let sh = '';

const correctPin = ['1234']

// Click Open Popup Menu
loginBtn.onclick = function() {
    // const setPin = prompt("Set Your Pin")
    overlay.classList.add("show")
}

// Function To SetPassword
setPinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let setPinValue = setPin.value

    // check pin and push pin correctPin
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

                sh = `Login successful ! ✔`
                displayLoginMessage.innerText = sh
                displayLoginMessage.style.color = 'green'
            }
        }

        // else {
        //     isAuthenticated = false
        //     sh = "Invalid PIN. Please try again."
        //     console.log(sh)
        // }
    }
    setPin.value = ''
});

// Function To showPassword
function showPassword() {
    if (setPin.type === 'password') {
        setPin.type = "text"
    } else {
        setPin.type = "password"
    }
}
inputCheckbox.addEventListener("click", showPassword)


// Function closeovery menu
function closeOverlay() {
    overlay.classList.remove("show")
    displayLoginMessage.innerText = ''
    setPin.value = ''
}
closePopup.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("show")) {
        closeOverlay()
    }
})


// Check if  exists PIN is correc
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
        displayMessage(sh)
        displayMessageElement.style.color = 'green'
    } else {
        isAuthenticated = false
        sh = "Invalid PIN ! Please try again This PIN is not Existing!"
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

// Function to check balance
function checkBalace() {
    if (!isAuthenticated) {
        console.log("please login first.")
    } else {
        displayMessageElement.style.color = 'green'
        displayMessage(`Your Account balance is $${balance}`)
    }
}

// Function to logout menu
logoutBtn.addEventListener("click", () => {
    if (correctPin.length > 0) {
        isAuthenticated = false
        sh = "Logged out Successfully  User " + correctPin.pop() + "."
        displayMessageElement.style.color = 'green'
        displayMessage(sh)
    } else if (correctPin.length < 1) {
        logoutBtn.disabled = true
        sh = "Please First Login  Your Account!"
        displayMessageElement.style.color = 'red'
        displayMessage(sh)
        checkBalaceBtn.disabled = true
        depositBtn.disabled = true
        withdrawBtn.disabled = true
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

// Function to deposit money
depositBtn.addEventListener("click", () => {
    if (!isAuthenticated) {
        displayMessage("please login first.")
    } else {
        const amount = parseFloat(prompt("enter the amount to deposit"))
        if (!isNaN(amount) && amount >= 0) {
            balance += amount
            displayMessage(`Deposited $${amount}. Your new Balance is $${balance}`)
            displayMessageElement.style.color = 'green'
        } else {
            displayMessage('Invalid amount. Please try again.')
            displayMessageElement.style.color = 'red'
        }
    }
})

// Function to withdraw money
withdrawBtn.addEventListener("click", () => {
    const amount = parseFloat(prompt("enter the amount to withdraw:"))
    if (!isNaN(amount) && amount >= 0) {
        balance -= amount
        displayMessageElement.style.color = 'green'
        displayMessage(`Withdrawn $${amount}. Your new balance is $${balance}`)
    } else {
        displayMessageElement.style.color = 'red'
        displayMessage('Invalid amount or insufficient balance. Please try again.')
    }
})


// Function to displayMessage
function displayMessage(message) {
    displayMessageElement.innerText = message
}


// const getpinformArry = correctPin.map((pin, i) => {
//     return pin.Pin
// })


// if (getpinformArry.includes(getPinValue)) {}



function geMisingIntegers(n, array) {
    let sumN = (n * (n + 1)) / 2


    const actualSum = array.reduce((sum, num) => {
        return sum + num
    }, 0)

    return sumN - actualSum
}
const arr = [3, 2, 1, 5]
const aarr1 = [1]


// console.log(geMisingIntegers(5, arr))
// console.log(geMisingIntegers(2, aarr1))