const showToastBtn = document.querySelector(".show-toast");
const horizontalPosition = document.querySelector("#horizontal-position");
const verticalPosition = document.querySelector("#vertical-position");
const toastType = document.querySelector("#toast-type");
const toastMessage = document.querySelector("#toast-message");
const toastContainer = document.querySelector(".toasts-container");
const durationInput = document.querySelector("#duration")

showToastBtn.addEventListener("click", () => {
    if (horizontalPosition.value === 'right') {
        toastContainer.classList.add('right')
    } else {
        toastContainer.classList.remove("right")
    }
    if (verticalPosition.value === 'bottom') {
        toastContainer.classList.add('bottom')
    } else {
        toastContainer.classList.remove("bottom")
    }
    const newToast = document.createElement("div")
    newToast.classList.add('toast')
    newToast.classList.add(toastType.value);
    newToast.innerHTML = ` ${toastMessage.value} `

    const closeIcon = document.createElement('span')
    closeIcon.innerHTML = ' &#x2715;'
    newToast.append(closeIcon)
    toastContainer.append(newToast)

    function removeToast() {
        if (toastContainer.classList.contains("right")) {
            newToast.classList.add("go-right");
        } else {
            newToast.classList.add("goleft");
        }
        setTimeout(() => {
            newToast.remove()
        }, 100)
    }
    closeIcon.addEventListener("click", removeToast)
    setTimeout(removeToast, (parseInt(durationInput.value) * 1000))
})