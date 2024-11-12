const navbar = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.dir(navbar);
console.log(navbar.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEl.offsetTop - navbar.offsetHeight - 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }

  //   if (window.scrollY > 400) {
  //     navbar.classList.add("active");
  //   } else {
  //     navbar.classList.remove("active");
  //   }
});
