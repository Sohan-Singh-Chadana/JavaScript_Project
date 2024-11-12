// ? Step 1: Define Quiz Data

const quizData = [{
        question: "What does HTML Stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "HyperLink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question: "Which Css Property is used control the spacing between element?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question: "What is the JavaScript function used to select an HTML element by its id?",
        options: [
            "documetn.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to creat an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },
];

// ? Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const scoreElm = document.querySelector("#score");
const answerElm = document.querySelectorAll(".answer");
const [questinoElm, option_1, option_2, option_3, option_4] =
document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// ? Step 3 : Load Quiz Function

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];

    questinoElm.innerText = `${currentQuiz + 1}. ${question}`;
    // options.forEach((curOption, index) => (option_1.innerText = curOption));
    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};

loadQuiz();

// ? Step 4: Get selected Answer Function on Button click

const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index;
    //     }
    // })
    // return ans_index;
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((cuElem) => cuElem.checked);

}

// deselectedAnswers

const deselectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false)
}

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        // score += 1
        score = score + 1;
    }

    currentQuiz++;

    scoreElm.innerText = ` Score = ${score} /${quizData.length}`

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <div class="resulte">
        <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers </h2>
        <p>Congratulations on comleting the quiz! 🎉</p>
        <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>
        </div>
        `
    }
})