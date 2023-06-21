"use strict";


//if (1 == 2) {
//   console.log('Ok');
//} else {
//   console.log('error')
//}

const num = 50;

//Тернарные операторы
//(num === 50) ? console.log('Ok') : console.log('error');

switch (num) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 51:
      console.log('Правильно');
      break;
   default:
      console.log('Не в этот раз');
      break;
}

const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger === 3 && cola === 1 && fries) {
   console.log('Все сыты');
} else {
   console.log('Мы уходим')
}