document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('./doctors.json');
    const doctorsJson = await response.json();
    const doctors = [...doctorsJson.mainDoctors];
    dropdownMenu();
    displayArticles(doctors);
    dropdownText();
    filter(doctors);
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
});

// HTML elements
const bars = document.querySelector('.bars-icon');
const navbar = document.querySelector('.nav');
const displayContainer = document.querySelector('.container-center');
const filterBtns = document.querySelectorAll('.filter-btn');
const bttBtn = document.querySelector('.btt-btn');

// Fixed navbar on scroll
window.addEventListener('scroll', function () {
  const navbarHeight = 140;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

// Dropdown menu functionality
function dropdownMenu() {
  bars.addEventListener('click', function () {
    navbar.classList.toggle('show-list');
  });
}

// Dropdown text functionality
function dropdownText() {
  const artBtns = document.querySelectorAll('.art-btn');
  artBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const artContainer = e.currentTarget.parentElement.parentElement;
      artContainer.classList.toggle('show-text');
    });
  });
}

// Back to top button functionality
bttBtn.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});

// Display articles based on filter buttons
function displayArticles(arr) {
  const displayItems = arr
    .map(function (item) {
      return `<div class="art-container" id=${item.id}>
        <img src=${item.img} alt="doctor-image" class="art-image" />
        <div class="underline"></div>
        <div class="art-header">
          <h1>${item.header}</h1>
          <button class="art-btn">
            <span class="down-icon"><i class="fa-solid fa-chevron-down"></i></span>
            <span class="up-icon"><i class="fa-solid fa-chevron-up"></i></span>
          </button>
        </div>
        <div class="art-content">
          <h2 class="actor-name">${item.actor}</h2>
          <h2 class="time">${item.years}</h2>
          <h2>no. of seasons: <span id="series-number">${item.seasons}</span></h2>
          <div class="underline"></div>
          <p>${item.text}</p>
        </div>
      </div>`;
    })
    .join('');

  displayContainer.innerHTML = displayItems;
}

// Filter articles based on categories
function filter(arr) {
  const oldDoctors = arr.filter((item) => item.id <= 7);
  const newDoctors = arr.filter((item) => item.id > 8);

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.classList;
      if (category.contains('btn-1')) {
        displayArticles(oldDoctors);
        dropdownText(oldDoctors);
      } else {
        displayArticles(newDoctors);
        dropdownText(newDoctors);
      }
    });
  });
}
