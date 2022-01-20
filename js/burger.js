// burger.js
console.log("burger.js is connected");

let header = document.getElementById("course-bar__body");
let burgerBtn = document.getElementById("burger-btn");
let navList = document.getElementById("course-bar__list");
console.log(navList);
let navLink = navList.querySelectorAll("li.course-bar__item");
let burgerCondition = "closed";


function burgerVisibility() {
  header.classList.toggle("burger-visible");
  if (header.className === "") {
    navList.classList.add("display-none")
    navList.classList.remove("nav__list")
    navList.classList.add("nav__list")
  } else {
    navList.classList.remove("display-none")
  }
}

burgerBtn.onclick = function () {
  burgerVisibility()
}

function checkResolution() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    burgerBtn.classList.add("display-none");
    navList.classList.remove("display-none")
  } else {
    burgerBtn.classList.remove("display-none")
    navList.classList.add("display-none")
  }
}
checkResolution()



window.addEventListener("resize", function () {
  console.log("Resolution was changed");
  checkResolution();
});

