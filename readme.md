# Микро документация по chess courses 

## HTML
  .course-bar       - блок, в котором хранятся ссылки для смены lessons-header > task
  .lessons          - блок, в котором хранятся lessons-header b lessons-body
    .lessons-header   - блок с сменяемыми блоками task ((body> .wrapper > main > lessons > lessons-header > task)
    .lessons-body     - блок с сменяемыми блоками lessons__block (body> .wrapper > main > lessons > lessons-body > lessons__block)

	(P.S.: Блок .task__info дублирован и вот их расположение: 
	body > .wrapper > main > .course-bar > .course-bar__header > .course-bar__btn > .task__info 
	а так же в каждом task 
	body> .wrapper > main > lessons > lessons-header > task > tasks__progress > .task__info
	Не создавал их через js или каим либо иным образом из-за невозможности синронизировать функции (было бы сложно предупредить ошибки по вставке appendChild в undefined, когда начнётся выгрузка заданий из JSON)
	)


## SCSS
main.scss       - файл вывода со всеми подключёнными файлами
base/           - папка для глобальных стилей
  fonts           - font-fase шрифта
  reset           - самописный минимальный сброс стилей
  stable          - глобальные стили
blocks/         - папка для хранения стилей блоков
  course-bar      - стили для блока course-bar (body> .wrapper > main > course-bar)
  lessons-header  - стили для блока lessons-header (body> .wrapper > main > lessons > lessons-header)
  lessons-body    - стили для блока lessons-body (body> .wrapper > main > lessons > lessons-body)


## JS
main.js     - отвечает за работоспособность переключения .task и .lesson__block
burger.js   - отвечает за развёртывание меню-бургера, применяя к .course-bar__body класс burger-visible, так же следит за изменением разрешения для лучшей работоспособности.
  #### Подробнее:
    main.js:
      1.	changeCurrent() - главная функция, которая снимает класс с одного элемента внутри родителя и присваевает его выбраному потомку. Принимает в себя элемент на который кликнули(clickedItem), родителя элемента (List), querySelector элемента, который уже активен (Selector), а так же класс, который применяется к clickedItem (Class).
      2.	Использованны 2 цикла для перебора массива со связанными данными (связанными из-за равного количества). Внутри циклов происходит присваивание каждому нажатому блоку по одному блоку вывода, соответсвующему месту в массиве
      3.	Так как не знаю как будет реализован вывод заданий (.lessons-body > .lessons__block) в данный момент внутри .lessons__block дублируются внутри родителя, и комментариями разделены по урокам (только до 4-ого, чтобы не растягивать код до бесконечности). Код в таком состоянии не очень контролируем, но при выводе заданий через объекты или JSON всё будет работать, так как имеется полное соответсвие внитри массива.
    burger.js:
      1.	burgerVisibility() - при наличии у блока-родителя (header) класса (burger-visible) удаляет его, в ином случае - добавляет
		2.	checkResolution()  - если ширина вьюпорта больше указанной (min-width: 1100px) - скрывает кнопку бургера (burgerBtn) иначе - показывает её
		3. Добавлен EventListener на изменение ширины экрана, чтобы при смене масштаба или при смене ориентации устройства не приходилось перезагружать страницу
    4. checkBarHeight() - вычисляет высоту блока course-bar и в зависимости от высоты вьюпорта сворачивает блок course-bar__body
      // написать за Burger.js + перенос блока task__info







