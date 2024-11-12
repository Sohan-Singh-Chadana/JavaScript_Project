const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

const progressEl = document.querySelector(".progress-bar-front");

const stepEls = document.querySelectorAll(".step");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepEls.length) {
    currentChecked = stepEls.length;
  }
  updateStepProgress();
});
prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepEls.forEach((stepEl, index) => {
    if (index < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
        <i class="fa-solid fa-check"></i>
        <small>${
          index === 0
            ? "Start"
            : index === stepEls.length - 1
            ? "Final"
            : "Step" + index
        }</small>
      `;
      //   progressEl.style.width = `${25 * index}%`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
       <i class="fa-solid fa-xmark"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepEls.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepEls.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}
