const inputEl = document.querySelector("#input");
const generateBtn = document.querySelector(".btn");
const alertContainerEl = document.querySelector(".alert-container");
const iconEl = document.querySelector(".fa-copy");

generateBtn.addEventListener("click", () => {
  createPassword();
});

iconEl.addEventListener("click", () => {
  copyPassword();

  if (inputEl.value) {
    alertContainerEl.classList.add("active");

    setTimeout(() => {
      alertContainerEl.classList.remove("active");
    }, 2000);
  }
});

function createPassword() {
  const char =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let passowrd = "";
  let passowrdlength = 14;

  for (let i = 0; i < passowrdlength; i++) {
    const randomeNumber = Math.floor(Math.random() * char.length + 1);
    passowrd += char.substring(randomeNumber, randomeNumber + 1);
  }

  inputEl.value = passowrd;
  alertContainerEl.innerHTML = `<span>${inputEl.value}</span>   Copied`;
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 999);
  navigator.clipboard.writeText(inputEl.value);
}

let arr = [1, 2, 3, 4, 5, 6];

function suffleFun(arr) {
  let randomNum = Math.floor(Math.random("") * arr.length + 1);

  return randomNum;
}

// console.log(suffleFun(arr));
