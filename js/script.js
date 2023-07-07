"use strict";

//Условя  превращает любой тип данных в boolean
if (1) {
   console.log('Ok!');
} else {
   console.log('Error');
}

const num = 50;

if (num < 49) {
   console.log('Error');
} else if (num > 100) {
   console.log('Слишком много');
} else {
   console.log('ok!');
}

//Тернарные операторы 
//Он называется тернарным потому что в его работе участвуют три аргумета
//Это единственынный тернарный аргумент который используется в JavaScript 
(num === 50) ? console.group('Ok!') : console.log('Error')

//Сущесвует еще Бинарный аргумент 4+4  <--  и Унарный аргумент +4  <--

//Чтобы избежать больших отвевлений используется оператор switch
//Конструкция switch всегда идет на строгое сравнение
const number = '50';

switch (number) {
   case '49':
      console.log('Неверно');
      break;// Если код правильный то прерывает на это  месте
   case '100':
      console.log('Неверно');
      break;
   case '50':
      console.log('В точку!');
      break;
   default: //значение по умоолчанию
      console.log('Не в этот раз');
      break;
}