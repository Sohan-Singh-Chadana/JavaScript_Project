let availableKeywords = [
    "HTML",
    "CSS",
    'EASY Tutorials',
    'Web design tutorial',
    'Web Devlopment tutorial',
    'JavaScript',
    'Where to learn coding online',
    'Where to learn Web Devlopment',
    'Where to learn Web Design',
    'How to create a website',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        // console.log(result);
    }
    display(result)
    if (!result.length) {
        resultBox.innerHTML = '';
    }
}


function display(result) {
    const content = result.map((list) => {
        return `<li onclick="selectInput(this)">${list}</li>`
    })
    resultBox.innerHTML = ` <ul>${content.join('')}</ul> `
}

function selectInput(list) {
    inputBox.value = list.innerHTML
    resultBox.innerHTML = '';
}


// inputBox.addEventListener("keyup", function() {
//     let result = [];
//     let input = inputBox.value;
//     if (input.length) {
//         result = availableKeywords.filter((keyword) => {
//             return keyword.toLowerCase().includes(input.toLowerCase())
//         });
//         console.log(result)
//     }
// });
// console.log(availableKeywords.length)