const imageContainer = document.querySelector(".image-container");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let x = 0;
let timer;

nextBtn.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallary();
});

prevBtn.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallary();
});

function updateGallary() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(() => {
        x = x - 45;
        updateGallary();
    }, 3000);
}

updateGallary();