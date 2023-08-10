"use strict"

window.addEventListener('DOMContentLoaded', () => {
   // Объединяем все файлы заимпортировав их в главный
   // Порядок подключения абсолютно не важен
   const tabs = require('./modules/tabs'),
      modal = require('./modules/modal'),
      timer = require('./modules/timer'),
      cards = require('./modules/cards'),
      calc = require('./modules/calc'),
      forms = require('./modules/forms'),
      slider = require('./modules/slider');

   // раз это функции нам их необходимо вызвать
   tabs();
   modal();
   timer();
   cards();
   calc();
   forms();
   slider();
});


