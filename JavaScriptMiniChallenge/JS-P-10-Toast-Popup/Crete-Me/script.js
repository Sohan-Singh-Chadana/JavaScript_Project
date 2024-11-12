const messageInput = document.querySelector("#message");
const showToastBtn = document.querySelector("#show-toast");
const type = document.querySelector("#type");
const selectSuccessType = document.querySelector(".success");
const selectErrorType = document.querySelector(".error");
const tcRightBottom = document.querySelector(".tc-right-bottom");
const toastContainer = document.querySelector(".toast-container");
const toastContainerOutput = document.querySelector(".toastConten");
const symbole = document.querySelector(".symbole");

messageInput.addEventListener("input", () => {
    toastContainerOutput.innerText = messageInput.value;

    if (messageInput.value) {
        showToastBtn.disabled = false
    } else {
        showToastBtn.disabled = true
    }
})

if (messageInput.value) {
    showToastBtn.disabled = false
} else {
    showToastBtn.disabled = true
}

function toastContainerclone() {
    let clone = toastContainer.cloneNode(true);
    tcRightBottom.append(clone)
}

showToastBtn.addEventListener("click", () => {
    tcRightBottom.classList.add("active")
    toastContainerclone()

    setTimeout(() => {
        if (tcRightBottom.children.length) {
            let firstChild = tcRightBottom.children[0]
            tcRightBottom.removeChild(firstChild)
        }
    }, 5000);


    tcRightBottom.addEventListener("click", (e) => {
        if (e.target.classList.contains("close")) {
            e.target.parentElement.remove();
        }
    })

})

type.addEventListener("click", (e) => {
    if (e.target.value === 'error') {
        symbole.innerText = "❌"
        toastContainer.style.backgroundColor = '#f35e5e'
    }
    if (e.target.value === 'success') {
        symbole.innerText = "✔"
        toastContainer.style.backgroundColor = 'green'
    }
    if (e.target.value === 'warning') {
        symbole.innerText = "⚠"
        toastContainer.style.backgroundColor = 'orange'
    }
    if (e.target.value === 'info') {
        symbole.innerText = "ℹ"
        toastContainer.style.backgroundColor = '#d4c8b9'
    }
});