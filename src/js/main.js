import "../scss/main.scss";

console.log("Hello Tomcio");

const coachText = document.querySelector(".coach__carleto--text-js");
console.log(coachText);

coachText.innerHTML = "Włoski trener i piłkarz z wieloma sukcesami na koncie";
/*
const visitor = prompt("Jak masz na imię przyjacielu?");ś

alert(`Witaj ${visitor} poglądaj sobie troszeczkę`);
*/

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
/*
createContent(`.special-js`, `${visitor}`);
*/

const ageTom = 31;
const agePat = 26;

if (ageTom < agePat) {
  console.log("pat jest starszy");
} else if (ageTom == agePat) {
  console.log("są w tym samym wieku");
} else {
  console.log("tom jest starszy");
}

const myNumber = 102;

switch (myNumber) {
  case 51:
    console.log("ok");
    break;
  case 102:
    console.log("okk");
    break;
  default:
    console.log("okkk");
}

const button = document.querySelector(".button__tap-js");

button.addEventListener("click", () => {
  button.innerHTML = "udało Ci się byku";
});

const hamburger = document.querySelector(".top-button--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".hamburger--js");
  nav.classList.toggle("hamburger--open");
});

fetch(
  "https://api.github.com/users/tomek-zawadzki/repos?sort=created&direction=asc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      console.log(`${name} ${html_url}`);
      const repositoryList = document.querySelector(".repos--js");
      const myTemplate = `<li> ${name} <a href="${html_url}" title="link do repozytorium na GitHubie">link do GitHuba</a></li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log(error);
  });
