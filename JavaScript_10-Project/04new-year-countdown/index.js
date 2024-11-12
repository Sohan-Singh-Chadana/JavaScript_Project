const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const YearEl = document.querySelector(".year");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

const getNewYearFull = new Date("Jan 1, 2025 00:00:00").getFullYear();

updateCountDown();

function updateCountDown() {
  const now = new Date().getTime();
  const timeGap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(timeGap / day);
  const h = Math.floor((timeGap % day) / hour);
  const m = Math.floor((timeGap % hour) / minute);
  const s = Math.floor((timeGap % minute) / second);

  YearEl.innerText = getNewYearFull;
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountDown, 1000);
}
