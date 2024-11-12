const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
    const icon = accordian.querySelector(".icon");
    const answer = accordian.querySelector(".answer")

    accordian.addEventListener("click", function() {
        if (icon.classList.contains("active")) {
            icon.classList.remove("active");
            answer.style.maxHeight = null;
        } else {
            icon.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    })
})

console.log(8 * null) // 0
console.log(null == undefined) // true
console.log(null == 0) // false
console.log(typeof null) // object
console.log(typeof 8 * null) // NaN