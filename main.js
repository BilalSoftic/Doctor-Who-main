import doctorsJson from "./doctors.json" assert { type: "json" };

const doctors = [...doctorsJson.mainDoctors];

// ===html elements===
const bars = document.querySelector(".bars-icon"),
  navbar = document.querySelector(".nav"),
  displayContainer = document.querySelector(".container-center"),
  filterBtns = document.querySelectorAll(".filter-btn"),
  bttBtn = document.querySelector(".btt-btn");

// ===display article elements===
window.addEventListener("DOMContentLoaded", function () {
  dropdownMenu();
  displayArticles(doctors);
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
    });
  });
}

// back to top
bttBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
// ===display articles===
function displayArticles(arr) {
  const displayItems = arr
    .map(function (item) {
      return `<div class="art-container" id=${item.id}>
    <img
    src=${item.img}
    alt="doctor-image"
    class="art-image"
    />
    <div class="underline"></div>
    <div class="art-header">
    <h1>${item.header}</h1>
    <button class="art-btn">
    <span class="down-icon"
    ><i class="fa-solid fa-chevron-down"></i
    ></span>
    <span class="up-icon"
    ><i class="fa-solid fa-chevron-up"></i
    ></span>
    </button>
    </div>
    <div class="art-content">
    <h2 class="actor-name">${item.actor}</h2>
    <h2 class="time">${item.years}</h2>
    <h2>no. of seasons: <span id="series-nmbr">${item.seasons}</span></h2>
    <div class="underline"></div>
    <p>
    ${item.text}
    </p>
    </div>
    </div>`;
    })
    .join("");

  displayContainer.innerHTML = displayItems;
}

// filter

filterBtns.forEach(function (btn) {
  // const oldDoctors = doctors.filter(function (item) {
  //   if (item.id <= 7) {
  //     return item;
  //   }
  // });

  // const newDoctors = doctors.filter(function (item) {
  //   if (item.id > 8) {
  //     return item;
  //   }
  // });

  // Arrow functions
  const oldDoctors = doctors.filter((item) => item.id <= 7);
  const newDoctors = doctors.filter((item) => item.id > 8);

  // btn.addEventListener("click", function (e) {
  //   const category = e.currentTarget.classList;
  //   if (category.contains("btn-1")) {
  //     displayArticles(oldDoctors);
  //   } else {
  //     displayArticles(newDoctors);
  //   }
  // });

  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.classList;

    category.contains("btn-1") && displayArticles(oldDoctors);

    // TERNARY OPERATOR
    category.contains("btn-1")
      ? displayArticles(oldDoctors)
      : displayArticles(newDoctors);
  });
});
