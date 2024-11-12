const hexColorElement = document.querySelector(".hexColor");
const hexColorH1Element = document.querySelector("#hexColorValue");
const hexColorBtn = document.querySelector("#hexColorBtn");
const CopyColorValueBtn = document.querySelector("#CopyColorValue");
const rgbColorCopyBtn = document.querySelector("#rgbColorCopyBtn");

hexColorBtn.addEventListener("click", hexColorGenerate);

function hexColorGenerate() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    let colorGanaret = (color += letters[randomNumber]);
    hexColorH1Element.innerText = colorGanaret;
    hexColorElement.style.backgroundColor = colorGanaret;
    // hexColorBtn.style.color = colorGanaret;
  }
}
hexColorGenerate();

//* RGB Color Generater
const rgbColorValueH1Element = document.querySelector("#rgbColorValue");
const rgbColorElement = document.querySelector(".rgbColor");
const redValue = document.querySelector("#red");
const greenValue = document.querySelector("#green");
const blueValue = document.querySelector("#blue");
// const rbgColorBtn = document.querySelector("#rbgColorBtn");

function rgbColorGenarater() {
  let rbgColorGenarater = `rgb( ${parseInt(redValue.value)}, ${parseInt(
    greenValue.value
  )}, ${parseInt(blueValue.value)})`;
  rgbColorElement.style.backgroundColor = rbgColorGenarater;
  rgbColorValueH1Element.innerHTML = rbgColorGenarater;
}
rgbColorGenarater();
redValue.addEventListener("change", rgbColorGenarater);
greenValue.addEventListener("change", rgbColorGenarater);
blueValue.addEventListener("change", rgbColorGenarater);
// rbgColorBtn.addEventListener("click", rgbColorGenarater);

//* Hex Color Copy Btn
CopyColorValueBtn.addEventListener("click", () => {
  copyClipBoardFunction(hexColorH1Element.innerText);
});
//* Rgb Color Copy btn
rgbColorCopyBtn.addEventListener("click", () => {
  copyClipBoardFunction(rgbColorValueH1Element.innerText);
});
//* clipboardcopy Function
function copyClipBoardFunction(elementText) {
  let copyText = elementText;
  navigator.clipboard.writeText(copyText);
  alert(`Copied the Color :  ${copyText}`);
}
