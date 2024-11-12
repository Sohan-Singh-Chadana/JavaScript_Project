const hexBtn = document.querySelector(".hexBtn");
const hexColorValue = document.querySelector(".hex_color_value");
const hexColorContainer = document.querySelector(".hex_color_container");
const hexCopyBtn = document.querySelector(".hexCopyColor");

//? create Random Hex color

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; i++) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color is Copied to Clipboard");
}
hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

// RGB color generator
const rgbBtn = document.querySelector(".rgb_btn");
const rgbColorValue = document.querySelector(".rgb_color_value");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb_color_container");
const rgbCopyBtn = document.querySelector(".rgbCopyColor");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = +getRedInputRange.value;
  let extractGreenValue = +getGreenInputRange.value;
  let extractBlueValue = +getBlueInputRange.value;

  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
});

function copyRgbColorToClipBoard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color is Copied to Clipboard");
}
rgbCopyBtn.addEventListener("click", copyRgbColorToClipBoard);
