const daysContainer = document.querySelector(".days"),
    nextBtn = document.querySelector(".next-btn"),
    prevBtn = document.querySelector(".prev-btn"),
    month = document.querySelector(".month"),
    todayBtn = document.querySelector(".today-btn")

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get current date
const date = new Date();

// get current month
let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();


// function to render days
function renderCalendar() {
    // get prev month current month and next month days
    date.setDate(1)
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0)
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1

    // Update current Year and month in header
    month.innerHTML = `${months[currentMonth]} ${currentYear}`

    // update days html
    let days = '';

    //prev days html
    for (let i = firstDay.getDay(); i > 0; i--) {
        days += `<div class="day prev">${prevLastDayDate - i + 1}</div>`
    }

    // current month days
    for (let i = 1; i <= lastDayDate; i++) {
        // Check if its today then add today class
        if (
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            // if date month year matches add today
            days += `<div class="day today">${i}</div>`
        } else {
            // else dont add today
            days += `<div class="day">${i}</div>`
        }
    }

    // next Month days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next">${j}</div>`
    }
    // run this function with every calendar render
    hideTodayBtn()
    daysContainer.innerHTML = days
}
renderCalendar();

nextBtn.addEventListener("click", () => {
    // increase current month by one
    currentMonth++;
    if (currentMonth > 11) {
        // if month gets greater that 11 make it 0 and increase year by one
        currentMonth = 0;
        currentYear++;
    }
    // rerender calendra
    renderCalendar();
})

// prev month btn
prevBtn.addEventListener("click", () => {
    // increase by one
    currentMonth--;
    // check if let than 0 than make it 11 and deacrease year
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
})

// go to today
todayBtn.addEventListener("click", () => {
    // set month and year to current
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    // rerender calendar
    renderCalendar();
})

//  lets hide today btn if its already currennt month and vice versa

function hideTodayBtn() {
    if (
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
    ) {
        todayBtn.style.display = "none";
    } else {
        todayBtn.style.display = "flex";
    }
}