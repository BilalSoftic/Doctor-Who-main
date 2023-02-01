const doctors = [
  {
    id: 1,
    img: "./image/doctor-images/first-doctor",
    header: "the 1st doctor",
    actor: "William Hartnell",
    years: "1963-1966",
    series: "4",
  },
  {
    id: 2,
    img: "./image/doctor-images/second-doctor",
    header: "the 2nd doctor",
    actor: " Patrick Troughton",
    years: "1966-1969",
    series: "3",
  },
];

// ===variables===
const artBtns = document.querySelectorAll(".art-btn");
const bars = document.querySelector(".bars-icon");
const navbar = document.querySelector(".nav");
// ===dropdown text===
artBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const artContainer = e.currentTarget.parentElement.parentElement;
    artContainer.classList.toggle("show-text");
    console.log(btn);
  });
});

// ===fixed navbar===
// if navbar height changes the condition also changes
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  // const offset = navbar.offsetTop;
  // console.log(offset);
  if (window.scrollY > 143) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// ===dropdown menu===

bars.addEventListener("click", function () {
  navbar.classList.toggle("show-list");
});

// ===display article elements===
window.addEventListener("DOMContentLoaded", function () {});
