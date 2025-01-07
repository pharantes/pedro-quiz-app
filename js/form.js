const form = document.querySelector(".form");
const newCardDiv = document.querySelector(".new-card-container");
const questionCounter = document.querySelector(".question-counter");
const answerCounter = document.querySelector(".answer-counter");
const questionInput = document.querySelector(".question-input");
const answerInput = document.querySelector(".answer-input");
const maxLength = 140;

form.addEventListener("submit", (event) => {
  event.preventDefault();

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
  button.addEventListener("click", buttonPicked);
  answer.classList.add("quiz-answer");
  answer.classList.add("hide-answer");
  img.classList.add("bookmark");
  img.addEventListener("click", bookmarkPicked);

  skillTreeDiv.classList.add("skill-tree");

  newCardDiv.append(cardSection);
  cardSection.append(card);
  card.append(cardTitle);
  card.append(cardQuestion);
  card.append(button);
  card.append(answer);
  card.append(img);
  card.append(skillTreeDiv);

  cardTitle.innerHTML = "Question";
  cardQuestion.innerHTML = data.question;
  button.innerHTML = "hide answer";
  answer.innerHTML = data.answer;
  img.setAttribute("src", "./assets/notbookmark.svg");
  updateShowButtonText(button);

  let tagArray = data.tag.replace("\n", "").split(" ");
  tagArray.forEach((element) => {
    let tag = document.createElement("span");
    tag.innerHTML = element;
    tag.classList.add("skill-tree-span");
    skillTreeDiv.append(tag);
  });
});

questionInput.setAttribute("maxlength", maxLength);
answerInput.setAttribute("maxlength", maxLength);

questionCounter.innerHTML = maxLength + " characters left";
answerCounter.innerHTML = maxLength + " characters left";

questionInput.addEventListener("input", count);
answerInput.addEventListener("input", count);

function count(e) {
  if (e.target.value.length > maxLength) {
    alert("You reached the max character limit");
    return false;
  }
  if (e.target.name == "answer") {
    answerCounter.innerHTML =
      maxLength - e.target.value.length + " characters left";
  }
  if (e.target.name == "question") {
    questionCounter.innerHTML =
      maxLength - e.target.value.length + " characters left";
  }
}
