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
