'use strict';

// Как проверить код ES6+ в старый формат.ES5 Babel, Core.js и полифилы

// Трансплитер по простому это такой инструмент который берет код в новом формате и переводит его в старый формат  уже который понятен более древним браузером  для этоого мы и будем использовать как раз babel это и есть наш трансплитер

//Полифилы это определенные участки кода который эмулирует поведение соверменных стандартов простой например в нашем коде сейчас сущ метод который наз-ся forEach для того чтобы перебрать элементы внутри массива в старом коде в старых браузерах  такого метода не существует для того чтобы его с эмулировать чтобы он тоже правильно работал мы пишем определенный кусочек кода в наш основной код и уже он автоматичский подстраивается под браузер и если нобходимо добавляет свои какие то действия  в ручную мы это делать не будем все будет в автоматическом режиме

// Preset по простому это набор настроек который будет использоваться в нашем пакете

// Когда мы какие то пакеты устанавливаем во внутрь нашего  npm проекта они заносятся в папку node modules   и так как внутри node_modules у нас лежат все скрипты все библиотеки и все что нам нужно  и почему нам просто не брать их оттуда и не импортировать во внутрь наших скриптов

// Заметьте синтаксис
// Если я хочю брать именнно npm пакет а не какой то файл Прописываем просто import '' и название пакета в ковычках

//Чтобы проект  был удобен  как для нашего конечного пользователя так и  так  и для любого разработчика который с ним столкнется нам необходимо соблюдать некоторые правила

// С точки зрения разработки разбивайте ваш проект на мелкие части так будет намного удобнее с ним работать это касается как скриптов так и стилей и прочих вещей

// С точки зрения пользователя мы должны предусматривать в каких условиях он иожет быть, он может сидеть с медленным интернетом он может сидеть с очень старого браузера для всего этого  у нас так же используется различные подходы технологий как относительно верстки так и относительно скриптов

// А если говорить о сборке самого проекта они могут быть абсолютно раззными 