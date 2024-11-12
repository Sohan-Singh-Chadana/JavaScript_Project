const resultbox = document.querySelector(".resultbox");
const inputBox = document.querySelector("#InputBox");

// inputBox.onkeyup = function() {
//     let result = [];
//     let input = inputBox.value
//     result = indianCities.filter((keyword) => {
//         return keyword.toLowerCase().includes(input.toLowerCase())
//     });
//     // console.log(result)
//     display(result)
//     if (!result.length) {
//         resultbox.innerHTML = '';
//     }
// }

inputBox.addEventListener("input", () => {
    let result = [];
    let input = inputBox.value
    result = indianCities.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase())
    });
    // console.log(result)
    display(result)
    if (!result.length) {
        resultbox.innerHTML = '';
    }

    if (inputBox.value === '') {
        resultbox.innerHTML = '';
    }
})


function display(result) {
    const content = result.map((item) => {
        return `<li onclick='selectInput(this)' >${item}</li>`
    });
    // console.log(content)
    resultbox.innerHTML = `<ul>${content.join("")}</ul>`
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultbox.innerHTML = '';
}