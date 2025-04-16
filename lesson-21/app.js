
const popupWrapper = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");

popupWrapper.addEventListener("click", (e) => {
  console.log(e.target.classList[0]);
  if (e.target.classList[0] === "popup-wrapper") {
    popupWrapper.style.display = "none";
  }
});

popupClose.addEventListener("click", (e) => {
  e.stopPropagation();
  popupWrapper.style.display = "none";
  // console.log(popupWrapper, e.target)
});
