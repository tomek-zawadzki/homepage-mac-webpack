import '../scss/modules/style.scss';

console.log("Hello Tomcio");

const coachText = document.querySelector(".coach__carleto--text-js");
console.log(coachText);

coachText.innerHTML = "Włoski trener i piłkarz z wieloma sukcesami na koncie";
/*
const visitor = prompt("Jak masz na imię przyjacielu?");

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
        console.log('okkk')
}

const button = document.querySelector('.button__tap-js');



button.addEventListener('click', () => {
  button.innerHTML = 'udało Ci się byku'
})
