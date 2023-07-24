"use strict"

// Скрипты и время их выполнения.setTimeout setInterval

// Для того чтобы запустить наш код через определенный промежуток времени нам нужна конструкция которая называется setTimeout

//setTimeout() у этой функции такой синтаксис что сначала она принимает ту функцию которая должна будет запуститься через определенный промежуток времени
// Она принимает либо объявление функции либо ее название она не выполняется здесь и сейчас

//Синтаксис который позволяет запустить любую операцию с течением времени
//Помимо этого данная  конструкция может принимать следующие аргументы  которые будет уже аргументами для функции внутри
//const timerId = setTimeout(function () {
//   console.log('hello');
//}, 2000);

//const timerId = setTimeout(function (text) {
//   console.log(text);
//}, 2000, 'Hello');// аргументов может быть бесконечное кол-во
// время в таких Timeout устанавливается в милисекунде


//Первым аргументом вместо того чтобы здесь описывать какую то функцию просто передаем уже готовую функцию
//! Заметье что мы его здесь не вызываем() мы просто ставим название функции
//const timerId = setTimeout(logger, 2000); //пройдет две секунды и потом у нас сработает функция logger
//Мы можем передавать уже готовую функцию
//function logger() {
//   console.log('text');
//}

//SetTimout работает и самостоятельно ее не обязательно присваивать переменной
//setTimeout(logger, 2000); //пройдет две секунды и потом у нас сработает функция logger
//Мы можем передавать уже готовую функцию
//function logger() {
//   console.log('text');
//}

// setTimeout присваивается в переменную для того чтобы мы могли определять различные setTimeoutы потому что таких ассинхронных функций у нас может быть очень много, А определять нам их нужно чтобы в будущем нам их как-то останавливать 
//const timerId = setTimeout(logger, 2000); //пройдет две секунды и потом у нас сработает функция logger
//Мы можем передавать уже готовую функцию

//function logger() {
//   console.log('text');
//}
//const timerId = setTimeout(logger, 2000);

////Для того чтобы сбросить timeout используется clearInterval()
//clearInterval(timerId);



//function logger() {
//   console.log('text');
//}

const btn = document.querySelector('.btn');
let timerId,
   i = 0;

// делаем анимацию для кубика
function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   const id = setInterval(frame, 10);
   function frame() {
      if (pos == 300) {
         clearInterval(id);
      } else {
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';
      }
   }
}

btn.addEventListener('click', myAnimation);

//btn.addEventListener('click', () => {
   //const timerId = setTimeout(logger, 2000);
   //Чтобы код работал постоянно каждые две секунды используем setInterval
//   timerId = setInterval(logger, 2000);

//});

//clearInterval(timerId);

//function logger() {
//   if (i == 3) {
//      clearInterval(timerId);
//   }
//   console.log('text');
//   i++;
//}

//Для избежания ошибок пишут рекурсивный метод setTimeOut();

//let id = setTimeout(function log() {
//   console.log('hello');
//   id = setTimeout(log, 500)
//}, 500); // Эта обертка будет ждат пока внутренний код полностью выполнится потом только начнет действовать