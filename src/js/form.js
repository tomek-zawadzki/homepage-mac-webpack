import "../scss/form.scss";
import moment from "moment";

const hamburger = document.querySelector(".top-button--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".hamburger--js");
  nav.classList.toggle("hamburger--open");
});

console.log(moment());

const date = document.querySelector(".date--js");
date.innerHTML = moment().format("LLLL");

let isDark = false;
const button = document.querySelector(".switch__button--js");

button.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "rgb(7, 7, 122)");
    document.documentElement.style.setProperty("--header-color", "black");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--text-color", "rgb(7, 7, 122)");
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--header-color", "white");

    isDark = true;
  }
});
