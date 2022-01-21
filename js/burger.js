// burger.js
console.log("burger.js is connected");

let header = document.getElementById("course-bar__body");
let burgerBtn = document.getElementById("burger-btn");
let navList = document.getElementById("course-bar__list");
let navLink = navList.querySelectorAll("li.course-bar__item");
let burgerCondition = "closed";

// показ бургера
function burgerVisibility() {
  header.classList.toggle("burger-visible");
  if (header.className === "") {
    navList.classList.add("display-none")
  } else {
    navList.classList.remove("display-none")
  }
}
// вызов показа бургера при нажатии
burgerBtn.onclick = function () {
  burgerVisibility()
}
// проверка разрешения с дальнейшим показом или скрытием кнопки бургера
function checkResolution() {
  if (window.matchMedia("(min-width: 1100px)").matches) {
    burgerBtn.classList.add("display-none");
  } else {
    burgerBtn.classList.remove("display-none")
  }
}
checkResolution()


// Защита от ломания страницы из-за переворота экрана или смены масштаба
window.addEventListener("resize", function () {
  console.log("Resolution was changed");
  checkResolution();
});

