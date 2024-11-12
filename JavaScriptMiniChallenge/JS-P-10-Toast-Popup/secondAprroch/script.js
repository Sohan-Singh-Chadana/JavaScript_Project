const messageInput = document.querySelector("#message");
const showToastBtn = document.querySelector("#show-toast");
const type = document.querySelector("#type");
const horizontalPosition = document.querySelector("#horizontal");
const verticalPosition = document.querySelector("#vertical");
const toastContainer = document.querySelector(".toastContant");
const message = document.querySelector(".message");
const inputRangeduration = document.querySelector("#duration");
const tcleftTop = document.querySelector(".left-top");
const tcleftBottom = document.querySelector(".left-bottom");
const tcRightTop = document.querySelector(".right-top");
const tcRightBottom = document.querySelector(".right-bottom");
const animatationContant = document.querySelector(".contant");

message.innerText = `✔ ${messageInput.value}`
if (messageInput.value) {
    showToastBtn.disabled = false
} else {
    showToastBtn.disabled = true
}
let horiValues
let vertValues

messageInput.addEventListener("input", function() {
    message.innerText = `✔ ${messageInput.value}`
    if (messageInput.value) {
        showToastBtn.disabled = false
    } else {
        showToastBtn.disabled = true
    }
})

function horizontalvalidatePosition(e) {
    horiValues = e.target.value
}

function verticalvalidatePosition(e) {
    vertValues = e.target.value
}

horizontalPosition.addEventListener("click", horizontalvalidatePosition)
verticalPosition.addEventListener("click", verticalvalidatePosition)

function displayMessage() {
    let clone = toastContainer.cloneNode(true);

    const div = document.createElement("div")
    div.classList.add("appearFromLeft")
    div.append(clone)

    if (horizontalPosition.value && verticalPosition.value) {
        tcleftTop.prepend(div)
    }

    if (horiValues === 'left' && vertValues === 'top') {
        tcleftTop.prepend(div)
        div.classList.add("appearFromLeft")
        div.classList.remove("appearFromRight")
    }

    if (horiValues === 'left' && vertValues === 'bottom') {
        tcleftBottom.append(div)
        tcleftBottom.classList.add("active")
        div.classList.add("appearFromLeft")
        div.classList.remove("appearFromRight")
    }

    if (horiValues === 'right' && vertValues === 'bottom') {
        tcRightBottom.append(div)
        tcRightBottom.classList.add("active")
        div.classList.add("appearFromRight")
        div.classList.remove("appearFromLeft")
    }
    if (horiValues === 'right' && vertValues === 'top') {
        tcRightTop.prepend(div)
        tcRightTop.classList.add("active")
        div.classList.add("appearFromRight")
        div.classList.remove("appearFromLeft")
    }
}

function showToastPoput() {
    const duration = inputRangeduration.value * 1000
    displayMessage()
    tcleftTop.classList.add("active")
    setTimeout(() => {
        if (tcleftTop.children.length) {
            tcleftTop.firstChild.remove()

            if (tcleftTop.children.length - 1 === 0) {
                tcleftTop.classList.remove("active")
            }
        }
        if (tcleftBottom.children.length) {
            tcleftBottom.firstChild.remove()
            if (tcleftBottom.children.length - 1 === 0) {
                tcleftBottom.classList.remove("active")
            }
        }
        if (tcRightTop.children.length) {
            tcRightTop.firstChild.remove()
            if (tcRightTop.children.length - 1 === 0) {
                tcRightTop.classList.remove("active")
            }
        }
        if (tcRightBottom.children.length) {
            tcRightBottom.firstChild.remove()
            if (tcRightBottom.children.length - 1 === 0) {
                tcRightBottom.classList.remove("active")
            }
        }

    }, duration);
}
showToastBtn.addEventListener("click", showToastPoput)

function typeFunction(e) {
    if (e.target.value === 'error') {
        message.innerText = `❌ ${messageInput.value}`
        toastContainer.style.backgroundColor = '#f87b72'
    } else if (e.target.value === 'success') {
        message.innerText = `✔ ${messageInput.value}`
        toastContainer.style.backgroundColor = '#96f496'
    } else if (e.target.value === 'warning') {
        message.innerText = `⚠ ${messageInput.value}`
        toastContainer.style.backgroundColor = '#f0b256'
    } else if (e.target.value === 'info') {
        message.innerText = `ℹ  ${messageInput.value}`
        toastContainer.style.backgroundColor = 'wheat'
    }
}
type.addEventListener("change", typeFunction)

tcleftTop.addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
        tcleftTop.firstChild.remove();
    }
    if (tcleftTop.children.length - 1 === 0) {
        tcleftTop.classList.remove("active")
    }
})
tcleftBottom.addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
        tcleftBottom.firstChild.remove();
    }
    if (tcleftBottom.children.length - 1 === 0) {
        tcleftBottom.classList.remove("active")
    }
})
tcRightTop.addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
        tcRightTop.firstChild.remove();
    }
    if (tcRightTop.children.length - 1 === 0) {
        tcRightTop.classList.remove("active")
    }
})
tcRightBottom.addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
        tcRightBottom.firstChild.remove();
    }
    if (tcRightBottom.children.length - 1 === 0) {
        tcRightBottom.classList.remove("active")
    }
})