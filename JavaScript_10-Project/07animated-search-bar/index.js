const magnifierBtn = document.querySelector(".magnifier");
const searchBarEl = document.querySelector(".search-bar-container");

magnifierBtn.addEventListener("click", () => {
  //! second example
  searchBarEl.classList.toggle("active");

  // ! first example
  //   if (searchBarEl.classList.contains("active")) {
  //     searchBarEl.classList.remove("active");
  //   } else {
  //     searchBarEl.classList.add("active");
  //   }
});
