'use strict';

//События на мобильных устройствах 

// Самое главное отличие В мобильных браузерах у нас просто не происхдят события мыши
// В мобильных устройствах есть табы по простому это когда мы прикасаемся к сенсору пальцем и пальцев может быть несколько ведь чаще всего устройства поддерживают multitouch

// Мобильные браузеры сами по себе нормально отрабатывает со всеми сайтами и если в десктоп версии установить  событие клика  оно все равно будет работать на мобилке под копотом javascript запускает серию событий чтобы нечего не пропустить

// События которые существуют на мобильном браузере всего их 6 и все они начинаются со слова touch

// touchstart это событие у нас сробатывает при возникновении касания к этому элементу
// touchmove если у нас палец при касании к элементу начинает двигаться по нему то при каждом смешени пальца будет срабатывать touchmove

// touchend  как только наш палец оторвался от элемента

// Более специфических события

// touchcenter  как только палец вощел на пределы этого элемента

// touchleave это когда палец не оторвался от экрана а продолжил скользить и ушел за пределы этого элемента
// touchcancel оно возникает тогда когда точка прикосновения больше не регистрируется на поверхности

window.addEventListener("DOMContentLoaded", () => {
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (e) => {
      e.preventDefault();

      console.log('Start');
      console.log(e.targetTouches);
   })
   box.addEventListener('touchmove', (e) => {
      e.preventDefault();

      console.log('Move');

   })
   box.addEventListener('touchend', (e) => {
      e.preventDefault();

      console.log('End');
   })

   // Три главных свойства при работе с устройством
   // touches это свойсво выдает нам список всех пальцев которые сейчас взаимодействуют с экраном
   // targetTouches если нас интерисуют все пальцы которые взаимодействуют  именно с конкретным элементом 
   // changedTouches это список пальцев которые учавствуют в текущем событии
});
