import "../scss/form.scss";

const hamburger = document.querySelector(".top-button--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".hamburger--js");
  nav.classList.toggle("hamburger--open");
});
