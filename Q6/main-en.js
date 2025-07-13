var menuIn = document.getElementById("menuin");
var openMenu = document.getElementById("openmenu");
var topMenu = document.querySelector(".topmenu");

var menu = [
  ["Eeny, meeny, miny, moe", "ampempaplom"],
  ["Notes", "notes"],
  ["Rule of Three", "method_of_three"],
  ["Percentage Calculator", "percentage"],
  ["Average Calculator", "average"],
  ["Protractor", "protractor"],
  ["Measuring Tape", "meter"],
  ["Dice", "dice"],
  ["Simple Memes Maker", "memes"],
  ["Counter", "counter"],
  ["Hourglass", "hourglass"],
  ["Browser & screen dimensions", "window_size"],
  ["Repeated notification", "repeated_notification"],
  ["CSS transform shapes", "css_shape"],
  ["CSS polygon shapes", "css_shape2"],
  ["Coin Flipping", "korona_grammata"],
  ["Random Colors", "color_combination"],
  ["Abacus", "arithmitiri"],
  ["Mathematical formulas", "math-formulas"],
  ["Body mass index", "bmi"],
  ["Simple cryptography", "crypto"],
  ["Simple paint", "paint"],
  ["Table lamp", "lamp"],
  ["Eco black fullscreen", "black_screen"],
  ["Aphrodite's shot", "aphrodite"],
  ["Lucky letter", "lucky-can-letter"],
  ["Rock Paper Scissors", "petrapsalidi"],
  ["Slot Machine", "froutakia"],
  ["Number Games", "number_games"],
  ["Where is the King?", "papas"],
  ["Triara", "triara"],
  ["9 to 9", "intime"],
  ["Speed Ninja", "ninjaspeed"],
  ["Starring Stars", "countstars"],
  ["Glass of Water", "glass"],
  ["Eye Ruler", "alfadi"],
  ["NumbersMemory", "numemory"],
  ["Lil Horse", "horse"],
  ["Achilles and the tortoise", "zeno"],
];

var menuHtml = "<ul>";

for (var i = 0, max = menu.length; i < max; i++) {
  menuHtml += "<li";
  if (window.location.pathname.slice(6, -14) == menu[i][1]) {
    menuHtml += ' class="actop"';
  }
  menuHtml +=
    '><a href="../' +
    menu[i][1] +
    '/index-en.html" title="Go to ' +
    menu[i][0] +
    ' App">' +
    menu[i][0] +
    "</a></li>";
}

menuHtml += "</ul>";

menuIn.innerHTML = menuHtml;

openMenu.addEventListener("click", function () {
  topMenu.classList.toggle("opened");
});

var more = document.querySelector(".more");

more.addEventListener("click", function (e) {
  document.querySelector(".info").classList.toggle("showmore");
  this.classList.toggle("clicked");
  e.preventDefault();
});

/*
var container = document.querySelector('.container');

var buyHTML = '<div class="buy">';
buyHTML += '<a class="limg" target="_blank" href="https://www.etsy.com/listing/1659204158/leo-the-unicorn"><img src="../unicorn-buy.jpg" alt="Unicorn Painting"></a>';
buyHTML += '<a class="ltxt" target="_blank" href="https://www.etsy.com/listing/1659204158/leo-the-unicorn">Buy a signed printed copy of<br>Alex Tade &quot;Unicorn&quot; painting</a>';
buyHTML += '</div>';

container.insertAdjacentHTML('afterend', buyHTML);
*/

var extras =
  '<div class="extras"><a href="index.html" class="lang">EL</a><a target="_blank" href="https://www.instagram.com/alex_tade/" class="insta"></a></div>';

var topmenu = document.querySelector(".topmenu");
topmenu.insertAdjacentHTML("afterbegin", extras);
