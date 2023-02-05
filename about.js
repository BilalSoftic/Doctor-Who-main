const info = [
  {
    id: 1,
    img: "./image/about-images/img-1.jpg",
    header: "who is the doctor?",
    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies.Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.",
  },
  {
    id: 2,
    img: "./image/about-images/img-2.jpg",
    header: "t.a.r.d.i.s.",
    text: "Ho bilge water holystone haul wind jib fluke topgallant cutlass coffer sutler. Grog strike colors black jack tender yawl bowsprit Admiral of the Black gibbet case shot wench. Poop deck salmagundi line prow hearties pillage starboard jury mast schooner ahoy. Lugger blow the man down scurvy hornswaggle spirits chantey spyglass chase guns cog schooner. Sutler yard American Main keel scurvy knave heave to gunwalls coffer scuttle. Rum measured fer yer chains gun clap of thunder tackle blow the man down interloper main sheet belaying pin lee. Square-rigged sheet aye hardtack knave furl Gold Road broadside line long boat. Six pounders scallywag quarterdeck shrouds keel careen no prey, no pay bilge bowsprit take a caulk. Corsair bounty clap of thunder log smartly bowsprit rum Arr belaying pin yard. Jack American Main skysail fore weigh anchor scurvy loaded to the gunwalls scuttle Blimey Corsair. Brigantine draught barkadeer cable six pounders hail-shot aye port dance the hempen jig belay. Come about walk the plank rope's end piracy snow rigging American Main handsomely topgallant Privateer. Holystone nipperkin brigantine main sheet gabion swing the lead bowsprit Buccaneer hearties execution dock. Buccaneer cutlass no prey, no pay grog blossom loot matey hornswaggle Shiver me timbers gangplank tackle. Long clothes lateen sail spike bilge me hail-shot brigantine hearties draft fore.",
  },
  {
    id: 3,
    img: "./image/about-images/img-3.jpg",
    header: "doctors companions",
    text: "I love cheese, especially the big cheese swiss. Cheese and biscuits the big cheese camembert de normandie croque monsieur pepper jack mozzarella fondue cheese and wine. Cheese triangles cheese and wine macaroni cheese rubber cheese red leicester cheesy feet cut the cheese smelly cheese. Emmental rubber cheese cheeseburger roquefort cheese and wine melted cheese pepper jack cheesecake. Red leicester fromage mozzarella swiss pecorino goat fromage frais macaroni cheese. Fondue lancashire stilton cheese triangles blue castello parmesan cheese and biscuits hard cheese. Queso pecorino mascarpone cut the cheese emmental fromage camembert de normandie cheese on toast. Bocconcin",
  },
  {
    id: 4,
    img: "./image/about-images/img-4.jpg",
    header: "friends of the doctor",
    text: "Dragée sweet tiramisu danish lollipop chocolate cotton candy. Jujubes tart jelly beans brownie bear claw. Topping dragée pudding apple pie donut marshmallow chocolate ice cream cheesecake. Gummies dragée cake chocolate tart biscuit marshmallow pudding chocolate cake. Soufflé icing tart jelly beans cake macaroon caramels sweet roll cheesecake. Soufflé bonbon cake gummi bears danish tart icing sesame snaps. Gummies donut icing chocolate muffin marshmallow macaroon pudding jelly-o. Soufflé sweet roll chupa chups chocolate donut. Cake sesame snaps brownie toffee sesame snaps chocolate gummi bears jelly-o sesame snaps. Soufflé biscuit cheesecake cake chocolate cake halvah oat cake lollipop. Soufflé chupa chups chocolate cake chocolate bar jelly sweet pudding. Chupa chups toffee cookie fruitcake brownie jelly beans.",
  },
  {
    id: 5,
    img: "./image/about-images/img-5.jpg",
    header: "Torchwood",
    text: " Roll back strategy the right info at the right time to the right people, or we need to build it so that it scales pulling teeth strategic fit, and parallel path. Zoom meeting at 2:30 today workflow ecosystem what about scaling components to a global audience?, for market-facing minimize backwards overflow, nor i am dead inside. What the we need to crystallize a plan, gain traction. It just needs more cowbell moving the goalposts I just wanted to give you a heads-up. Work flows we are running out of runway, for good optics, and marketing computer development html roi feedback team website, usabiltiy, for we need to get all stakeholders up to speed and in the right place i'm sorry i replied to your emails after only three weeks, but can the site go live tomorrow anyway?. We need to future-proof this sea change. We need to get the vernacular right peel the onion take five, punch the tree, and come back in here with a clear head, and products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved, and viral engagement. Synergestic actionables drop-dead date, so deliverables, so cannibalize, drill down.",
  },
  {
    id: 6,
    img: "./image/about-images/img-6.jpg",
    header: "u.n.i.t.",
    text: "Intelligent beings Vangelis realm of the galaxies a very small stage in a vast cosmic arena hydrogen atoms trillion. Two ghostly white figures in coveralls and helmets are softly dancing not a sunrise but a galaxyrise extraordinary claims require extraordinary evidence circumnavigated Jean-François Champollion descended from astronomers. Hundreds of thousands two ghostly white figures in coveralls and helmets are softly dancing something incredible is waiting to be known invent the universe are creatures of the cosmos courage of our questions?Euclid something incredible is waiting to be known Hypatia network of wormholes extraplanetary Orion's sword. Rings of Uranus a still more glorious dawn awaits the only home we've ever known courage of our questions Sea of Tranquility rich in mystery.",
  },
];

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
