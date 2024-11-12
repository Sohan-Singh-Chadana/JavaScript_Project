const span = document.querySelector("h1 span")
const span2 = document.querySelector("h2 span")
const speedbtn = document.querySelector(".typingSpeed")



const wordList = ['Devloper.', "Coder.", "Programmer.", "Student."];
const wordList2 = ['YouTuber.', "Comedian.", "GymTraner.", "Student."];


function autoType(wordList, element, duration = 200) {
    let wordIndex = 0
    let characterIndex = 0
    let skipUpdate = 0
    let reverseType = false

    setInterval(() => {
        if (skipUpdate) {
            skipUpdate--
            return
        }
        if (!reverseType) {
            skipUpdate = 1
            element.innerText += wordList[wordIndex][characterIndex]
            characterIndex++
        } else {
            element.innerText = element.innerText.slice(0, element.innerText.length - 1)
            characterIndex--
        }

        if (characterIndex === wordList[wordIndex].length) {
            skipUpdate = 5
            reverseType = true
        }

        if (element.innerText.length === 0 && reverseType) {
            reverseType = false
            wordIndex++
        }


        if (wordIndex === wordList.length) {
            wordIndex = 0
        }
    }, duration)
}

autoType(wordList, span);
autoType(wordList2, span2);