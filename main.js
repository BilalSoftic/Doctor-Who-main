const doctors = [
  {
    id: 1,
    img: "./image/doctor-images/first-doctor.jpg",
    header: "the 1st doctor",
    actor: "William Hartnell",
    years: "1963-1966",
    seasons: "4",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 2,
    img: "./image/doctor-images/second-doctor.jpg",
    header: "the 2nd doctor",
    actor: " Patrick Troughton",
    years: "1966-1969",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 3,
    img: "./image/doctor-images/third-doctor.jpg",
    header: "the 3rd doctor",
    actor: "Jon Pertwee",
    years: "1970-1974",
    seasons: "5",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 4,
    img: "./image/doctor-images/fourth-doctor.jpg",
    header: "the 4th doctor",
    actor: "Tom Baker",
    years: "1974-1981",
    seasons: "7",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 5,
    img: "./image/doctor-images/fifth-doctor.jpg",
    header: "the 5th doctor",
    actor: "Peter Davison",
    years: "1982-1984",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 6,
    img: "./image/doctor-images/sixth-doctor.jpg",
    header: "the 6th doctor",
    actor: "Colin Baker",
    years: "1984-1986",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 7,
    img: "./image/doctor-images/seventh-doctor.jpg",
    header: "the 7th doctor",
    actor: "Sylvester McCoy",
    years: "1987-1989",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 8,
    img: "./image/doctor-images/eighth-doctor.jpg",
    header: "the 8th doctor",
    actor: "Paul McGann",
    years: "1966",
    seasons: "0",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 9,
    img: "./image/doctor-images/ninth-doctor.jpg",
    header: "the 9th doctor",
    actor: "Christopher Eccleston",
    years: "2005",
    seasons: "1",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 10,
    img: "./image/doctor-images/tenth-doctor.jpg",
    header: "the 10th doctor",
    actor: "David Tennant",
    years: "2005-2010",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 11,
    img: "./image/doctor-images/eleventh-doctor.jpg",
    header: "the 11th doctor",
    actor: "Matt Smith",
    years: "2010-2013",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 12,
    img: "./image/doctor-images/twelfth-doctor.jpg",
    header: "the 12th doctor",
    actor: "Peter Capaldi",
    years: "2014-2017",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 13,
    img: "./image/doctor-images/thirteenth-doctor.jpg",
    header: "the 13th doctor",
    actor: "Jodie Whittaker",
    years: "2018-2022",
    seasons: "3",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 14,
    img: "./image/doctor-images/fourteenth-doctor.jpg",
    header: "the 14th doctor",
    actor: "David Tennant",
    years: "2023",
    seasons: "1",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
  {
    id: 15,
    img: "./image/doctor-images/fifteenth-doctor.jpg",
    header: "the 15th doctor",
    actor: "Ncuti Gatwa",
    years: "2023-Unknown",
    seasons: "Unknown",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nostrum veniam eaque nobis laborum quisquam, sunt perspiciatis illo sed adipisci aspernatur vero earum dolorem ex voluptas excepturi eligendi corrupti dolorum, sint accusantium. Enim, necessitatibus dignissimos consequatur explicabo quae nobis similique beatae ullam velit earum quaerat unde fugiat, eveniet, tempora quibusdam!",
  },
];

// ===variables===
const bars = document.querySelector(".bars-icon");
const navbar = document.querySelector(".nav");
const displayContainer = document.querySelector(".container-center");
const filterBtns = document.querySelectorAll(".filter-btn");
const bttBtn = document.querySelector(".btt-btn");

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
      console.log(btn);
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
  const oldDoctors = doctors.filter(function (item) {
    if (item.id <= 7) {
      return item;
    }
  });
  const newDoctors = doctors.filter(function (item) {
    if (item.id > 8) {
      return item;
    }
  });
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.classList;
    if (category.contains("btn-1")) {
      displayArticles(oldDoctors);
    } else {
      displayArticles(newDoctors);
    }
  });
});
