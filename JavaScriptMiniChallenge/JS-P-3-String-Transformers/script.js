const input = document.querySelector("#inputField");
const upperCaseOutput = document.querySelector("#uppercase span")
const lowerCaseOutput = document.querySelector("#lowercase span")
const camelCaseOutput = document.querySelector("#camelcase span")
const pascalCaseOutput = document.querySelector("#pascalcase span")
const snakeCaseOutput = document.querySelector("#snakecase span")
const kebabCaseOutput = document.querySelector("#kebabcase span")
const trimCaseOutput = document.querySelector("#trim span")

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length)
}

function camelCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordArray = lowerCaseString.split(" ")
    const finalArray = wordArray.map((word, i) => {
        if (i === 0) return word
        return capitalizeString(word)
    })
    return finalArray.join("")
}

function pascalCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordArray = lowerCaseString.split(" ")
    const finalArray = wordArray.map((word) => {
        return capitalizeString(word)
    })
    return finalArray.join("")
}

function snakeCase(str) {
    return str.replaceAll(" ", "_");

    // const wordArray = str.split(" ")
    // return wordArray.join("_")
}

function kebabCase(str) {
    return str.replaceAll(" ", "-");

    // const wordArray = str.split(" ")
    // return wordArray.join("-")
}

function trimCase(str) {
    return str.replaceAll(" ", "");
    // const wordArray = str.split(" ")
    // return wordArray.join("")
}

function updateScreen() {
    lowerCaseOutput.innerText = input.value.toLowerCase()
    upperCaseOutput.innerText = input.value.toUpperCase()
    camelCaseOutput.innerText = camelCase(input.value)
    pascalCaseOutput.innerText = pascalCase(input.value)
    snakeCaseOutput.innerText = snakeCase(input.value)
    kebabCaseOutput.innerText = kebabCase(input.value)
    trimCaseOutput.innerText = trimCase(input.value)
}
updateScreen()

input.addEventListener("input", updateScreen)

document.querySelectorAll(".transformed-output").forEach((elem) => {
    elem.setAttribute("title", 'copytext')
    elem.addEventListener("click", () => {
        const span = elem.querySelector("span")
        window.navigator.clipboard.writeText(span.innerText)
        alert(`Copied the text: \n ${span.innerText}`)
    })
})