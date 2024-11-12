const contantElement = document.querySelectorAll(".contant");

contantElement.forEach((accoriand) => {
  const icon = accoriand.querySelector("i");
  const para = accoriand.querySelector(".para");
  accoriand.addEventListener("click", () => {
    if (icon.classList.contains("rotate")) {
      icon.classList.remove("rotate");
      para.style.maxHeight = null;
    } else {
      let getAllParaElement = document.querySelectorAll(".para");
      let getAllIconElement = document.querySelectorAll("i");
      getAllParaElement.forEach((currentPara) => {
        currentPara.style.maxHeight = null;
      });
      getAllIconElement.forEach((currentIcon) => {
        currentIcon.classList.remove("rotate");
      });
      icon.classList.add("rotate");
      para.style.maxHeight = para.scrollHeight + "px";
    }
  });
});
