// Handle form submit and add new card to page
const form = document.querySelector('[data-js="form"]');
const newCardDiv = document.querySelector(".new-card-container");
form.addEventListener("submit", (event) => {
  // Prevent page reload
  event.preventDefault();

  // Gather data from the form and log it to the console
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  let cardSection = document.createElement("div");
  let card = document.createElement("div");
  let cardTitle = document.createElement("p");
  let cardQuestion = document.createElement("p");
  let button = document.createElement("button");
  let answer = document.createElement("span");
  let img = document.createElement("img");
  let skillTreeDiv = document.createElement("div");

  cardSection.classList.add("card-section");
  card.classList.add("quiz-card");
  cardTitle.classList.add("card-title");
  cardQuestion.classList.add("card-question");
  button.classList.add("show-answer-btn");
  answer.classList.add("quiz-answer");
  answer.classList.add("hide-answer");
  img.classList.add("bookmark"); // set source later
  skillTreeDiv.classList.add("skill-tree"); // set source later

  // Append elements

  newCardDiv.append(cardSection);
  cardSection.append(card);
  card.append(cardTitle);
  card.append(cardQuestion);
  card.append(button);
  card.append(answer);
  card.append(img);
  card.append(skillTreeDiv);

  // Set values
  cardTitle.innerHTML = "Question";
  cardQuestion.innerHTML = data.question;
  button.innerHTML = "hide answer";
  answer.innerHTML = data.answer;
  img.setAttribute("src", "./assets/notbookmark.svg");
  updateShowButtonText(button);
  // Create tag elements
  let tagArray = data.tag.replace("\n", "").split(" ");
  tagArray.forEach((element) => {
    let tag = document.createElement("span");
    tag.innerHTML = element;
    tag.classList.add("skill-tree-span");
    skillTreeDiv.append(tag);
  });
});

// Setup counter
let inputCounter = document.querySelector(".input-counter");
let maxLength = 160;
document.addEventListener("load", () => {
  inputCounter.innerHTML = maxLength + " characters left";
});
// Count the remaining characters for the input fields

let formInput = document.querySelector(".form-input");
formInput.addEventListener("input", count);
function count(e) {
  inputCounter.innerHTML =
    e.target.getAttribute("maxlength") -
    formInput.value.length +
    " characters left";
}
