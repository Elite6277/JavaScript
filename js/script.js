"use strict";

// Действия с элементами на странице

const box = document.getElementById('box'),
   btns = document.getElementsByTagName('button'),
   circles = document.getElementsByClassName('circle'),
   wrapper = document.querySelector('.wrapper'),
   hearts = wrapper.querySelectorAll('.heart'),
   oneHeart = wrapper.querySelector('.heart');




// Создаём inline стили  
// Приоритетность inline стилей самая важная не важно что написано в css inline стили всегда перебивают все остальные

box.style.backgroundColor = 'blue'; //сюда мы можем прописать и в формате hex и в формате rgb
// когда  при помощи JavaScript назначаются опеределенные стили они должны быть прописаны точно также как и в css

box.style.width = '500px'; //Даже число мы передаем в ввиде строки

box.style.cssText = 'background-color: blue; width: 500px';

const num = 100;

// Как назначить сразу несколько inline стилей cssText
box.style.cssText = `background-color: blue; width: ${num}px`

btns[1].style.borderRadius = '100%';

//circles.style.backgroundColor = 'red'; //работать не будет потому что мы обращаемся не к какому то конкретному элементу а к псевдомассиву а он не знает об объекте style
circles[0].style.backgroundColor = 'red'; // чтобы изменить ей стили нужно обратится конкретно к какому то элементу


//Если необходимо над несколькими элементами произвести одни и те же дейсвия
//Здесь мы може использовать самый простой цикл for, перебирающую конструкцию for of или метод forEach который существует только если мы ипользуем метод  querySelectorAll()

//! Заметьте когда мы будем перебирать какие то элементы в массивах  мы чаще всего let i = 0 будем назначать 0 потому что в массивах элементы идут по порядку и они начинаются с нулевого индекса

//Но циклы мы почти что не будем использовать
//for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
//}

//Для этого у нас есть уже специальные перебирающие методы 

// В методе forEach первый аргумент озночает каждый элемент, второй аргумент озночает номер по порядку  а третий иммеет сслочку на тот массив который мы перебираем
hearts.forEach(item => {
   item.style.backgroundColor = 'blue';
});


// Основные методы для работы с элементами на странице

// Очень часто части сайта генерируются при помощи JavaScripta на таких принципах построен react там вся верстка состоит из скриптов элементы созданные при помощи скрипта

//Метод document.createElement

//!Такая команда сохраняется только внутри  javascript файла на странице он не появится
//const div = document.createElement('div');

//! Таким же образм мы можем создавать и текстовые узлы это элементы без оболочки тега
//Внутр мы помещаем тот текст который мы помещаем в эту ноду тоесть в узел
// ! Привыкайте что вы будете слышать не элементы на странице а ноды
//! Но этот метод испоьзуется очень редко
//const text = document.createTextNode("Тут был я");

//! Если мы хотим поменять элемент полностью координальным образом то чаще всего мы не прописываем целую кучу каких то stylов или даже не исползуем cssText()

//!Мы модифицируем css классы элементам можем их доавить можем удалить и в реальных проектах мы не будем устонавливать inline стили а будем работать с css классами


//class list где через точку мы можем писать действия с нашим классом это удаление добавление переключение проверка на содержание определение количества примененных классов к элементу

//div.classList.add('black'); //мы можем добавить определенный класс
// здесь мы воспользуемся деревом дом
// Любой элемент можно вставить в конец вставить после определенного элемента удалить или заменить но только по отношению к другому элементу

// Современные методы для работы со страницей

//Добавляем div в конец страницы
//document.body.append(div) //добавляем в конец страницы div c классом black

//wrapper.append(div) //Можно добавлять и так

//wrapper.prepend(div);
//Добавляет в начало родителя какой то элемент

//hearts[0].before(div);  Ставим элемент до какого то элемента
//hearts[0].after(div); Ставим элемент после какого то элемента

//Удаляем какой тоэлемент со страницы с помошью remove();
//circles[0].remove();

//Заменяем один элемент другим с помошью replaceWith()

//hearts[0].replaceWith(circles[0]);


// Конструкции котрые устарели но могут встретится

//wrapper.appendChild(div) //добавляем в конец страницы div c классом black
//старая версия append

//wrapper.insertBefore(div, hearts[0]) // Вставляем элемент перед каким то другим элементом
//старая версия before

//wrapper.removeChild(hearts[1]);
//старая версия remove


//старая версия remove
//wrapper.replaceChild(circles[0], hearts[0]);


const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div)
//!Не забывай про безопасность и разницу в этих методах
//div.innerHTML = '<h1>Hello World!</h1>';// !innerHTML Можно ставить теги когда мы работаем с какой то структурой тогда мы испоьзуем innerHTML

//div.textContent = 'Hello';//textContent Он работает только с текстом html структура сюда не подойдет
//!Когда мы четко знаем что хотим получить от пользователя либо записать на страницу только текст мы ипользуем content

// Последнее из практических методов это комбинация
// Чтобы вставить кусочек HTML кода перед или после определенных тегов

// Сначала прописываем элемент над которым мы будем производиьб махинации

//Это метод у нас принимает два аргумента первый это специальное слово, второе это тот html который нужно вставить
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');

// Первые аргументы
// 1 beforebegin вставляем html прямо перед элементом
// 2 afterbegin вставляем html в начало элемента
// 3 beforeend  вставляем html в перед конец элемента
// 3 aftereend  вставляем html в после элемента