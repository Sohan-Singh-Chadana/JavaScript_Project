const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const popupEl = document.querySelector(".popup");
const backEl = document.querySelector(".back");
const nextEl = document.querySelector(".next");

const inputHourTime = document.querySelector("#hourTime");
const inputMinuteTime = document.querySelector("#minuteTime");
const inputSecondTime = document.querySelector("#secondTime");
const inputDayTime = document.querySelector("#dayTime");
const startTimerBtn = document.querySelector("#startTimer");
const stopTimerBtn = document.querySelector("#stopTimer");
const restartTimerBtn = document.querySelector("#restartTimer");
const resetTimerBtn = document.querySelector("#resetTimer");
const timeDisplayEl = document.querySelector(".timeDisplay");

// Define timer variables
let coutDownTimer;
let totalSecond;
let remainingSeconds; // Variable to store the remaining seconds when stopped

function checkInputs() {
  // Parse input values as integers or default to 0
  let dayValue = parseInt(inputDayTime.value, 10) || 0;
  let hourValue = parseInt(inputHourTime.value, 10) || 0;
  let minuteValue = parseInt(inputMinuteTime.value, 10) || 0;
  let secondValue = parseInt(inputSecondTime.value, 10) || 0;

  // Check if at least one input is greater than zero
  if (dayValue > 0 || hourValue > 0 || minuteValue > 0 || secondValue > 0) {
    startTimerBtn.disabled = false;
    nextEl.disabled = false; // Enable button if at least one input is filled with a non-zero value
  } else {
    startTimerBtn.disabled = true;
    nextEl.disabled = true; // Disable button if all inputs are empty or zero
  }
}

// Function to start the countdown
function startCounter() {
  // Parse input values or set them to 0 if empty or invalid
  const dayValue = parseInt(inputDayTime.value, 10) || 0; // Default to 0 if input is empty
  const hourValue = parseInt(inputHourTime.value, 10) || 0;
  const minuteValue = parseInt(inputMinuteTime.value, 10) || 0;
  const secondValue = parseInt(inputSecondTime.value, 10) || 0;

  console.log(dayValue);

  totalSecond =
    dayValue * 86400 + hourValue * 3600 + minuteValue * 60 + secondValue;

  if (totalSecond > 0) {
    countdownEndTime();
    popupEl.classList.add("active");

    //  Clear any existing timer if user presses "Start" multiple times
    clearInterval(coutDownTimer);

    // Update timer initially
    updateTimer();

    // Update timer every second
    coutDownTimer = setInterval(updateTimer, 1000);

    inputDayTime.value = "";
    inputHourTime.value = "";
    inputMinuteTime.value = "";
    inputSecondTime.value = "";
  } else {
    alert("enter Valid Time ");
  }
}

// Function to CountdownEnd time display
function countdownEndTime() {
  stopTimerBtn.disabled = false;
  restartTimerBtn.disabled = false;

  const nowTime = new Date().getTime(); // Current time in milliseconds
  const totalSecondInMilliSecond = totalSecond * 1000; // Convert totalSeconds to milliseconds

  // Calculate future time by adding totalSeconds to the current time
  const futureTime = new Date(nowTime + totalSecondInMilliSecond);

  if (inputDayTime.value > 0) {
    timeDisplayEl.innerText = futureTime.toLocaleString();
  } else {
    timeDisplayEl.innerText = futureTime.toLocaleTimeString();
  }
}

// Function to update timer display
function updateTimer() {
  if (totalSecond > 0) {
    let days = Math.floor(totalSecond / 86400);
    let hours = Math.floor((totalSecond % 86400) / 3600);
    let minutes = Math.floor((totalSecond % 3600) / 60);
    let seconds = totalSecond % 60;

    // Update DOM elements with leading zero if necessary
    dayEl.innerText = days < 10 ? `0${days}` : days;
    hourEl.innerText = hours < 10 ? `0${hours}` : hours;
    minuteEl.innerText = minutes < 10 ? `0${minutes}` : minutes;
    secondEl.innerText = seconds < 10 ? `0${seconds}` : seconds;

    nextEl.addEventListener("click", () => {
      popupEl.classList.add("active");
    });

    // Decrease totalSeconds
    totalSecond--;
  } else {
    clearInterval(coutDownTimer); // Stop the timer when it reaches 0

    dayEl.innerText = "00";
    hourEl.innerText = "00";
    minuteEl.innerText = "00";
    secondEl.innerText = "00";
    timeDisplayEl.innerText = "";
    timeDisplayEl.style.padding = "0px";

    stopTimerBtn.disabled = true;
    restartTimerBtn.disabled = true;
    startTimerBtn.disabled = true;
    nextEl.disabled = true;

    alert("Timer End"); // Optionally, notify the user
  }
}

// Function to stop the counter
function stoptCounter() {
  clearInterval(coutDownTimer); // stop the countdown
  remainingSeconds = totalSecond; // Store remaining seconds when stopped
}

// Function to restart the countdown from where it stopped
function restartCountdown() {
  if (remainingSeconds > 0) {
    totalSecond = remainingSeconds; // Set totalSeconds to remaining seconds

    countdownEndTime();

    clearInterval(coutDownTimer); // Clear any previous intervals

    // Update timer initially
    updateTimer();

    // Start updating the timer again
    coutDownTimer = setInterval(updateTimer, 1000);
  }
}

function resetTimer() {
  clearInterval(coutDownTimer);
  totalSecond = 0;
  remainingSeconds = 0;

  inputDayTime.value = "";
  inputHourTime.value = "";
  inputMinuteTime.value = "";
  inputSecondTime.value = "";

  dayEl.innerText = "00";
  hourEl.innerText = "00";
  minuteEl.innerText = "00";
  secondEl.innerText = "00";
  timeDisplayEl.innerText = "";
  timeDisplayEl.style.padding = "0px";

  stopTimerBtn.disabled = true;
  restartTimerBtn.disabled = true;
  startTimerBtn.disabled = true;
  nextEl.disabled = true;

  popupEl.classList.remove("active");
  nextEl.addEventListener("click", () => {
    popupEl.classList.remove("active");
  });
}

// Add event listeners to input fields to trigger the check when the user types or changes input
inputDayTime.addEventListener("input", checkInputs);
inputHourTime.addEventListener("input", checkInputs);
inputMinuteTime.addEventListener("input", checkInputs);
inputSecondTime.addEventListener("input", checkInputs);

// Event listener for start timer button
startTimerBtn.addEventListener("click", startCounter);

// Event lintener for stop timer button
stopTimerBtn.addEventListener("click", stoptCounter);

restartTimerBtn.addEventListener("click", restartCountdown);
backEl.addEventListener("click", () => {
  popupEl.classList.remove("active");
});

resetTimerBtn.addEventListener("click", resetTimer);
