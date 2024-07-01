document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('./doctors.json');
    const doctorsJson = await response.json();
    const info = [...doctorsJson.aboutDoctors];
    dropdownMenu();
    displayAboutArticles(info);
    dropdownText();
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
});

// DOM elements
const bars = document.querySelector('.bars-icon');
const navbar = document.querySelector('.nav');
const bttBtn = document.querySelector('.btt-btn');
const aboutContainer = document.querySelector('.about-container');

// Fixed navbar on scroll
window.addEventListener('scroll', function () {
  const navbarHeight = 143;
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
      console.log(btn);
    });
  });
}

// Back to top button functionality
bttBtn.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});

// Display about articles
function displayAboutArticles(arr) {
  const displayItems = arr
    .map(function (item) {
      return `<div class="about-article">
            <div class="about-article-img" id=${item.id}>
              <img src=${item.img} alt="about-img" />
            </div>
            <h1 class="about-article-title">${item.header}</h1>
            <p>${item.text}</p>
          </div>`;
    })
    .join('');
  aboutContainer.innerHTML = displayItems;
}
