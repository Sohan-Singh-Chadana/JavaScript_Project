const canvase = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fill-color"),
  sizeSlider = document.querySelector("#size-slider"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorPicker = document.querySelector("#color-picker"),
  clearCanvasBtn = document.querySelector(".clear-canvas"),
  saveImgBtn = document.querySelector(".save-img");

const ctx = canvase.getContext("2d");

// global varibles  with default value
let prevMouseX,
  prevMouseY,
  snapshot,
  isDrawing = false,
  selectedTool = "brush",
  brushWidth = 5,
  selectedColor = "#000";

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvase.width, canvase.height);
  ctx.fillStyle = selectedColor;
};

window.addEventListener("load", () => {
  // setting canvase width/height... offesetWidth/height returns viewable width/height of an element
  canvase.width = canvase.offsetWidth;
  canvase.height = canvase.offsetHeight;
  setCanvasBackground();
});
const drawRect = (e) => {
  // if fillColor isn't checked draw a react with border elese draw rect with background
  if (!fillColor.checked) {
    // crating circle according to the mouse pointer
    return ctx.strokeRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      prevMouseY - e.offsetY
    );
  }
  return ctx.fillRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
};

const drawCircle = (e) => {
  ctx.beginPath(); // creating new path to draw circle
  //getting radius for circle according to the mouse pointer
  const radius = Math.sqrt(
    Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2)
  );
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI); // creating circle according to the mouse pointer
  fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillcolor is checked fill circle else draw border circle
};

const drawTringle = (e) => {
  ctx.beginPath(); // creating new path to draw circle
  ctx.moveTo(prevMouseX, prevMouseY); // moving tringle to the mouse pointer
  ctx.lineTo(e.offsetX, e.offsetY); // creating first line according to the mouse pointer
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY); // create bottom line of trangle
  ctx.closePath(); // closing path of    a triangle so the third line draw automatically
  fillColor.checked ? ctx.fill() : ctx.stroke(); // if fillcolor is checked fill triangle else draw border triangle
};

const startDraw = (e) => {
  isDrawing = true;

  prevMouseX = e.offsetX; // passing current mouseX position as prevMouseX value
  prevMouseY = e.offsetY; // passing current mouseY position as prevMouseY value

  ctx.beginPath(); // creating new path to draw
  ctx.lineWidth = brushWidth; // passing brushSize as line width
  ctx.strokeStyle = selectedColor; // passing selectedColor as stroke style
  ctx.fillStyle = selectedColor; // passing selectedColor as fill style
  canvase.style.cursor = "crosshair";
  // copying canvas data & passing as snapshot value.. this avoids dragging the image
  snapshot = ctx.getImageData(0, 0, canvase.width, canvase.height);
};

const drawing = (e) => {
  if (!isDrawing) return; // if isDrawing is false return from here
  ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas

  switch (selectedTool) {
    case "brush":
      ctx.lineTo(e.offsetX, e.offsetY); // creating line according to mouse pointer
      ctx.stroke(); // drawing/filling line with color
      break;
    case "rectangle":
      drawRect(e);
      break;
    case "circle":
      drawCircle(e);
      break;
    case "triangle":
      drawTringle(e);
      break;
    case "eraser":
      ctx.lineTo(e.offsetX, e.offsetY); // creating line according to mouse pointer
      ctx.stroke(); // drawing/filling line with color
      ctx.strokeStyle = "#fff";
      break;
    default:
      "";
      break;
  }
};

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
  });
});

saveImgBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvase.toDataURL();
  link.click();
});

clearCanvasBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvase.width, canvase.height); // clearing whole canvas
  setCanvasBackground();
});

colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.backgroundColor = colorPicker.value;
  colorPicker.parentElement.click();
});

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // adding click event to all color button

    // remove selected class from the provious option and adding on current clickd option
    document.querySelector(".options .selected").classList.remove("selected");
    btn.classList.add("selected");

    // passing  selected btn background color as selectedColor value
    selectedColor = window
      .getComputedStyle(btn)
      .getPropertyValue("background-color");
  });
});

sizeSlider.addEventListener("change", () => {
  brushWidth = sizeSlider.value;
}); // passing slider Value as brushSize

canvase.addEventListener("mousedown", startDraw);
canvase.addEventListener("mousemove", drawing);
canvase.addEventListener("mouseup", () => {
  isDrawing = false;
  canvase.style.cursor = "default";
});
