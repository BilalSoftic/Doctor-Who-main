import doctorsJson from "./doctors.json" assert { type: "json" };
const info = [...doctorsJson.aboutDoctors];

// ===variables===
const bars = document.querySelector(".bars-icon");
const navbar = document.querySelector(".nav");
const bttBtn = document.querySelector(".btt-btn");
const aboutContainer = document.querySelector(".about-container");
// ===display article elements===
window.addEventListener("DOMContentLoaded", function () {
  dropdownMenu();
  displayAboutArticles(info);
  dropdownText();
});

// ===fixed navbar===
// if navbar height changes the condition also changes
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 143) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
// ===dropdown menu===
function dropdownMenu() {
  bars.addEventListener("click", function () {
    navbar.classList.toggle("show-list");
  });
}
// ===dropdown text===
function dropdownText() {
  const artBtns = document.querySelectorAll(".art-btn");
  artBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const artContainer = e.currentTarget.parentElement.parentElement;
      artContainer.classList.toggle("show-text");
      console.log(btn);
    });
  });
}
// back to top
bttBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
// ===display about articles===
function displayAboutArticles(arr) {
  const displayItems = arr
    .map(function (item) {
      return `<div class="about-article">
      <div class="about-article-img" id=${item.id}>
        <img
          src=${item.img}
          alt="about-img"
        />
      </div>
      <h1 class="about-article-title">${item.header}</h1>
      <p>
      ${item.text}
    </div>`;
    })
    .join("");
  aboutContainer.innerHTML = displayItems;
}
