// ? Step 1: Quiz Data

const quizData = [{
        question: "What is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        correct: 3,
    }, {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
    },
    {
        question: `Who wrote the play "Romeo and Juliet"?`,
        options: [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "F. Scott Fitzgerald",
        ],
        correct: 0,
    },
    {
        question: `Which of the following is the capital of Arunachal Pradesh?`,
        options: [
            "Itanagar",
            "Dispur",
            "Imphal",
            "Panaji",
        ],
        correct: 0,
    },
    {
        question: `What are the major languages spoken in Andhra Pradesh?`,
        options: [
            "Odia and Telugu",
            "Telugu and Urdu",
            "Telugu and Kannada",
            "All of the above languages",
        ],
        correct: 1,
    },
    {
        question: `What is the state flower of Haryana?`,
        options: [
            "Lotus",
            "Golden Shower",
            "Rose",
            "Not Declared",
        ],
        correct: 0,
    },
    {
        question: `Which of the following states is not located in the North?`,
        options: [
            "Jharkhand",
            "Jammu and Kashmir",
            "Himachal Pradesh",
            "Haryana",
        ],
        correct: 1,
    },
    {
        question: `In which of the following state, the main language is Khasi?`,
        options: [
            "Mizoram",
            "Nagaland",
            "Meghalaya",
            "Tripura",
        ],
        correct: 2,
    },
];

// ? Step 2: JavaScript Initialization;

const anwersEle = document.querySelectorAll(".answer");
const [questionEle, option_1, option_2, option_3, option_4] =
document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
);
const submitBtn = document.querySelector("#submit");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");


let currentQuiz = 0;
let score = 0;

// ? step 3: LoadQuiz function

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];

    questionEle.innerText = `${currentQuiz + 1 }. ${question}`;
    options.forEach((curOption, index) => {
        window[`option_${index + 1}`].innerText = curOption;
    })
};

loadQuiz();

// ? Step 4: Get selected Answer Function on Button click

const getSelectedOption = () => {
    let ans_index;
    anwersEle.forEach((curElem, index) => {
        if (curElem.checked) {
            ans_index = index;
        }
    })
    return ans_index;
}

// ^ deselectedAnwser fucntion

const deselectedAnswers = () => {
    anwersEle.forEach((curElem) => {
        curElem.checked = false
    })
}



submitBtn.addEventListener('click', () => {
            const selectedOptionIndex = getSelectedOption();
            console.log(selectedOptionIndex)

            if (selectedOptionIndex === quizData[currentQuiz].correct) {
                score = score + 1
            }
            currentQuiz++;

            if (currentQuiz < quizData.length) {
                loadQuiz();
                deselectedAnswers()
            } else {
                quiz.innerHTML = `
        <div class="result">
        <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
        ${(score === quizData.length) ? `<p>Congratulations on completing the quiz! 🎉</p>` : `<p>Your score is low, please Try again!!</p>`}
        <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>
        </div>
        `
    }

})


prevBtn.addEventListener('click', () => {
    currentQuiz--;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    }
})

nextBtn.addEventListener('click', () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
        deselectedAnswers();
    } else {
        quiz.innerHTML = `
        <div class="result">
            <h1>Quiz Over</h1>
            <button class="reload-button" onclick="location.reload()">Play Again 🔁</button>
        </div>
        `
    }
})