//course-bar
let courseList = document.querySelector(".course-bar__list");
let courseItem = courseList.querySelectorAll(".course-bar__item");
//tasks
let tasksList = document.querySelector(".lessons-header");
let tasksItem = tasksList.querySelectorAll("div.task");
//tasks__list === exercise (для удобства и читебельности)
let exerciseList = document.querySelector(".lessons-header");
let exerciseItem = exerciseList.querySelectorAll("li.tasks__item");
// lessons__body
let lessonsList = document.querySelector(".lessons-body");
let lessonsItem = lessonsList.querySelectorAll(".lessons__block");


//перебор массива для синхронизации Использую один цикл из-за равного кол-ва
for (let Counter = 0; Counter < courseItem.length; Counter++) {
  courseItem[Counter].onclick = function () {
    changeCurrent(courseItem[Counter], courseList, ".course-bar__item.current", "current");
    changeCurrent(tasksItem[Counter], tasksList, ".task.current", "current");
  }
}
//

//перебор массива для синхронизации
for (let Counter = 0; Counter < exerciseItem.length; Counter++) {
  exerciseItem[Counter].onclick = function () {
    let list = this.parentNode;
    changeCurrent(exerciseItem[Counter], list, "li.tasks__item.current", "current");
    changeCurrent(lessonsItem[Counter], lessonsList, ".lessons__block.current", "current");
  }
}


function changeCurrent(clickedItem, List, Selector, Class) {
  let currentItem = List.querySelector(Selector);
  if (currentItem === clickedItem) {
    console.log("This item is current allreadt")
  }else{
    clickedItem.classList.add(Class);
    currentItem.classList.remove(Class);
  }
}



