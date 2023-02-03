const doctors = [
  {
    id: 1,
    img: "./image/doctor-images/first-doctor.jpg",
    header: "the 1st doctor",
    actor: "William Hartnell",
    years: "1963-1966",
    series: "4",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 2,
    img: "./image/doctor-images/second-doctor.jpg",
    header: "the 2nd doctor",
    actor: " Patrick Troughton",
    years: "1966-1969",
    series: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
];

// ===variables===
const bars = document.querySelector(".bars-icon");
const navbar = document.querySelector(".nav");
const displayContainer = document.querySelector(".container-center");

// ===display article elements===
window.addEventListener("DOMContentLoaded", function () {
  displayArticles(doctors);
  dropdownMenu();
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
function dropdownMenu() {
  bars.addEventListener("click", function () {
    navbar.classList.toggle("show-list");
  });
  // ===dropdown text===
  const artBtns = document.querySelectorAll(".art-btn");
  artBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const artContainer = e.currentTarget.parentElement.parentElement;
      artContainer.classList.toggle("show-text");
      console.log(btn);
    });
  });
}
// ===display articles===
function displayArticles(arr) {
  const displayItems = arr
    .map(function (item) {
      return `<div class="art-container" id="1">
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
  <h2>no. of series: <span id="series-nmbr">${item.series}</span></h2>
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
