import "../scss/form.scss";
import moment from "moment";

const hamburger = document.querySelector(".top-button--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".hamburger--js");
  nav.classList.toggle("hamburger--open");
});

console.log(moment())

const date = document.querySelector(".date--js")
date.innerHTML = moment().format('LLLL')