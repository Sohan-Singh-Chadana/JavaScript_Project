const messageInput = document.querySelector("#message");
const showToastBtn = document.querySelector("#show-toast");
const toastTypeEl = document.querySelector("#type");
const horizontalPositionEl = document.querySelector("#horizontal");
const verticalPositionEl = document.querySelector("#vertical");
const inputRangeduration = document.querySelector("#duration");
const toastContainer = document.querySelector(".toastContant");

const tcleftTop = document.querySelector(".left-top");
const tcleftBottom = document.querySelector(".left-bottom");
const tcRightTop = document.querySelector(".right-top");
const tcRightBottom = document.querySelector(".right-bottom");

showToastBtn.addEventListener("click", displayToast)

function displayToast() {
    const message = messageInput.value
    const type = toastTypeEl.value
    const horizontalPosition = horizontalPositionEl.value
    const verticalPosition = verticalPositionEl.value
    const duration = inputRangeduration.value * 1000
    showToas(message, type, duration, horizontalPosition, verticalPosition, )
    console.log(message, type, horizontalPosition, verticalPosition, duration)
}

function showToas(message, type, duration, horizontalPosition, verticalPosition) {
    if (horizontalPosition === "left") {
        if (verticalPosition === "top") {
            tcleftTop.prepend(createToast(message, type, duration, horizontalPosition))
        } else {
            tcleftBottom.append(createToast(message, type, duration, horizontalPosition))
        }
    } else {
        if (verticalPosition === "top") {
            tcRightTop.prepend(createToast(message, type, duration, horizontalPosition))
        } else {
            tcRightBottom.append(createToast(message, type, duration, horizontalPosition))
        }
    }
}

function createToast(message, type, duration, horizontalPosition, ) {
    const toast = toastContainer.cloneNode(true);
    toast.querySelector('.message').textContent = message;
    toast.classList.add(type);
    toast.querySelector('.close').addEventListener('click', removeToast);
    const toastEl = toast;

    setTimeout(removeToast, duration);
    async function removeToast() {
        toastContainer.classList.add(horizontalPosition === "left" ? 'appearFromLeft' : 'appearFromRight')
        await new Promise(resolve => {
            setTimeout(resolve, 100)
        });
        toastEl.remove();
    }
    return toast
}