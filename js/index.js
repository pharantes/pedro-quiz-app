// Set up a click event on the document, so any click will trigger the callback
document.addEventListener("click", userPicked);

function userPicked(evt) {
  // Check to see if the actual object clicked is one of the buttons
  if (evt.target.classList.contains("show-answer-btn")) {
    // Return the value of the clicked button
    let parentofSelected = evt.target.parentNode; // gives the parent DIV
    let children = parentofSelected.childNodes;
    // Toggle class to hide and show answer
    for (let i = 0; i < children.length; i++) {
      if (
        children[i].classList &&
        children[i].classList.contains("quiz-answer")
      ) {
        children[i].classList.toggle("hide-answer");
      }
      updateShowButtonText(evt.target);
    }
  }
  // Check to see if the actual object clicked is one of the bookmark icons
  if (evt.target.classList.contains("bookmark")) {
    // Return the value of the clicked button
    let bookmarked = evt.target.getAttribute("src");
    if (bookmarked == "./assets/notbookmark.svg") {
      evt.target.setAttribute("src", "./assets/bookmark.svg");
    } else {
      evt.target.setAttribute("src", "./assets/notbookmark.svg");
    }
  }

  // Toggle darkmode
  if (evt.target.classList.contains("toggle-dark-mode-input")) {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      evt.target.checked = true;
      console.log(evt.target.checked);
    }
    detectColorScheme();
    switchTheme(evt.target);
  }
}

// Update button text (show/hide answer) function
const updateShowButtonText = (btn) => {
  if (btn.innerHTML == "show answer") return (btn.innerHTML = "hide answer");
  if (btn.innerHTML == "hide answer") return (btn.innerHTML = "show answer");
};

//determines if the user has a set theme
const detectColorScheme = () => {
  var theme = "light"; //default to light
  console.log(localStorage.getItem("theme"));

  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
    }
  } else if (!window.matchMedia) {
    //matchMedia method not supported
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    var theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

const switchTheme = (checkbox) => {
  if (checkbox.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    checkbox.checked = true;
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    checkbox.checked = false;
  }
};

// Handle form submit and add new card to page
const form = document.querySelector('[data-js="form"]');
const newCardDiv = document.querySelector(".new-card-container");
form.addEventListener("submit", (event) => {
  // Prevent page reload
  event.preventDefault();

  // Gather data from the form and log it to the console
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
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
