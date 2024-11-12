// function toPascalCase(str) {
//     return str
//         .replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr) {
//             return chr.toUpperCase();
//         })
//         .replace(/^[a-z]/, function(match) {
//             return match.toUpperCase();
//         });
// }

// // Example usage:
// let inputString = "hello world-example"; // Example input string
// let pascalCaseString = toPascalCase(inputString);
// console.log(pascalCaseString); // Output: HelloWorldExample

// function toPascalCase(str) {
//     return str.toLowerCase().replace(/(?:^|\s|-|_|\/)+(\w)/g, (match, chr) => chr.toUpperCase());
// }

// console.log(toPascalCase("hello world")); // Output: HelloWorld
// console.log(toPascalCase("foo-bar")); // Output: FooBar
// console.log(toPascalCase("some_snake_case")); // Output: SomeSnakeCase


const str = 'this is a normal sentence to transform'


// console.log(str.replace(/\s/g, '-'))
// 'this-is-a-normal-sentence-to-transform'

// console.log(str.replace(/\s/g, '_'))
// 'this_is_a_normal_sentence_to_transform'

// console.log(str.toLowerCase().replace(/(?:^|\s|-|_|\/)+(\w)/g, (match, chr) => chr.toUpperCase()))
// 'ThisIsANormalSentenceToTransform'

// console.log(str.toLowerCase().replace(/ (.)/g, (match, ch) => ch.toUpperCase()))
// 'thisIsANormalSentenceToTransform'

// console.log(str.toLowerCase())
// 'this is a normal sentence to transform'

// console.log(str.toUpperCase())
// 'THIS IS A NORMAL SENTENCE TO TRANSFORM'

// console.log(str.split(' ').join(''))
// 'thisisanormalsentencetotransform'

const inputField = document.querySelector("#inputField");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");

inputField.addEventListener("input", (e) => {
    p1.innerText = lowerCase(e.target.value)
    p2.innerText = upperCase(e.target.value)
    p3.innerText = camelCase(e.target.value)


    // localStorage.setItem("str", e.target.value)
})

function lowerCase(str) {
    return str.toLowerCase()
}

function upperCase(str) {
    return str.toUpperCase()
}

function camelCase(str) {
    return str.toLowerCase().replace(/ (.)/g, (match, ch) => ch.toUpperCase())
}

document.addEventListener("DOMContentLoaded", () => {
    const stringDate = localStorage.getItem("str")
        // if (stringDate) {
        //     p1.innerText = lowerCase(stringDate)
        //     p2.innerText = upperCase(stringDate)
        //     p3.innerText = camelCase(stringDate)
        // }
})

document.querySelectorAll("p").forEach((p) => {
    p.addEventListener("click", (e) => {
        window.navigator.clipboard.writeText(p.innerText)
        console.log(p.innerText)
    })
})