const starsElemen = document.querySelectorAll(".fa-star");
const emojiImageEl = document.querySelectorAll(".far");
const colors = ["red", "orange", "lightblue", "lightgreen", "green"];
const ratingText = document.querySelector(".star-rating-text h1");

starsElemen.forEach((star, index) => {
    {
        star.addEventListener("click", () => {
            updateRating(index);
        });
    }
});

function updateRating(index) {
    starsElemen.forEach((star, i) => {
        if (i <= index) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });

    emojiImageEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${50 * index}px)`;
        emojiEl.style.color = colors[index];
    });

    ratingText.classList.add("hideText");
}