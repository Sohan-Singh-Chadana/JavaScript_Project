const generateBtn = document.querySelector(".generateBtn")
const memeTitle = document.querySelector(".meme-title")
const authorOutput = document.querySelector(".author span")
const memeImage = document.querySelector(".meme-image")


// function getMeme() {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//         .then((res) => res.json())
//         .then((data) => {
//             const { title, author, url } = data

//             memeTitle.innerText = `${title}`
//             authorOutput.innerText = `Meme by : ${author}`
//             memeImage.src = url
//         })
// }
// getMeme();


// To convert your getMeme function into an asynchronous function using async/await syntax,

async function getMeme() {
    try {
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();

        const { title, author, url } = data

        memeTitle.innerText = `${title}`
        authorOutput.innerText = `Meme by : ${author}`
        memeImage.src = url
    } catch (error) {
        console.log("Error fetching meme:", error)
        memeTitle.innerHTML = `Error fetching Meme <img src="close.png" class="error
            ">`;
    }
}
getMeme();

generateBtn.addEventListener("click", getMeme)