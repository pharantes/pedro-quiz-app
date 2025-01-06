const form = document.querySelector('data-js="form"');
const newCardDiv = document.querySelector(".new-card-container");
form.addEventListener("submit", (event) => {
  // Prevent page reload
  event.preventDefault();

  // Gather data from the form and log it to the console
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  let card = document.createElement("div");
  let cardTitle = document.createElement("p");
  let cardQuestion = document.createElement("p");
  let button = document.createElement("button");
  let answer = document.createElement("span");
  let img = document.createElement("img");
  let skillTreeDiv = document.createElement("div");

  card.classList.add("quiz-card");
  cardTitle.classList.add("card-title");
  cardQuestion.classList.add("card-question");
  button.classList.add("show-answer-btn");
  answer.classList.add("quiz-answer hide-answer");
  img.classList.add("bookmark"); // set source later
  skillTreeDiv.classList.add("skill-tree"); // set source later

  // Set values
  cardTitle.innerHTML = "Question";
  cardQuestion.innerHTML = "Question";
  cardTitle.innerHTML = data.question;
  button.innerHTML = "show answer";
  answer.innerHTML = data.answer;
  img.setAttribute("src", "./assets/notbookmark.svg");

  // Append elements

  newCardDiv.append(card);
  card.append(cardTitle);
  card.append(cardQuestion);
  card.append(button);
  card.append(answer);
  card.append(img);
  card.append(skillTreeDiv);

  // Create tag elements

  let tagArray = data.tags.split(" ");
  console.log(tagArray);
});

/* 
  <div class="quiz-card">
  <p class="card-title">Question</p>
       
<p class="card-question">How can you center an element horizontally in CSS?</p>
<button data-js="show-answer"  class="show-answer-btn">show answer</button>
<span class="quiz-answer hide-answer" data-js="quiz-answer">By setting its margin property to auto.</span>
<img src="./assets/notbookmark.svg" class="bookmark"></img>
<div class="skill-tree">
  <span>html</span><span>css</span><span>flexbox</span>
</div>
</div> */
