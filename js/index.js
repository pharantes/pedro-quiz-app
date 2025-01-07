let buttons = document.querySelectorAll(".show-answer-btn");
let bookmarks = document.querySelectorAll(".bookmark");

buttons.forEach((button) => {
  button.addEventListener("click", buttonPicked);
});
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", bookmarkPicked);
});

function buttonPicked(evt) {
  let parentofSelected = evt.target.parentNode;
  let children = parentofSelected.childNodes;
  for (let i = 0; i < children.length; i++) {
    if (children[i]?.classList?.contains("quiz-answer")) {
      children[i].classList.toggle("hide-answer");
    }
    updateShowButtonText(evt.target);
  }
}
function bookmarkPicked(evt) {
  let bookmarked = evt.target.getAttribute("src");
  let src =
    bookmarked == "./assets/notbookmark.svg"
      ? "./assets/bookmark.svg"
      : "./assets/notbookmark.svg";

  evt.target.setAttribute("src", src);
}

const updateShowButtonText = (btn) => {
  btn.innerHTML =
    btn.innerHTML == "show answer" ? "hide answer" : "show answer";
};

// DARK MODE FUNCTIONALITY BELOW

//determines if the user has a set theme
//   const detectColorScheme = () => {
//     var theme = "light"; //default to light
//     console.log(localStorage.getItem("theme"));

//     //local storage is used to override OS theme settings
//     if (localStorage.getItem("theme")) {
//       console.log(localStorage.getItem("theme"));
//       if (localStorage.getItem("theme") == "dark") {
//         var theme = "dark";
//       }
//     } else if (!window.matchMedia) {
//       //matchMedia method not supported
//       return false;
//     } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       //OS theme setting detected as dark
//       var theme = "dark";
//     }

//     //dark theme preferred, set document with a `data-theme` attribute
//     if (theme == "dark") {
//       document.documentElement.setAttribute("data-theme", "dark");
//     }
//   };

//   const switchTheme = (checkbox) => {
//     if (checkbox.checked) {
//       localStorage.setItem("theme", "dark");
//       document.documentElement.setAttribute("data-theme", "dark");
//       checkbox.checked = true;
//     } else {
//       localStorage.setItem("theme", "light");
//       document.documentElement.setAttribute("data-theme", "light");
//       checkbox.checked = false;
//     }
//   };

//   // Toggle darkmode
//   if (evt.target.classList.contains("toggle-dark-mode-input")) {
//     if (document.documentElement.getAttribute("data-theme") == "dark") {
//       evt.target.checked = true;
//       console.log(evt.target.checked);
//     }
//     detectColorScheme();
//     switchTheme(evt.target);
//   }
