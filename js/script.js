"use strict";

//Логические операторы conditions
//В JavaScript динамическая типизация
//В JavaScript типы данных могут переходить один в другой
const hamburger = true;
const fries = false;

if (hamburger && fries) {
   console.log('Я сыт!');
}

//Результат логических операций это какое то логическое bool значение
console.log((hamburger && fries))

// В JavaScript есть 5 сущностей которые будут всегда false
// Это 0, пустая строка-->'', null, undefined, Nan

// Всё остальное всегда будет true
// 1 в логичкском контексте всегда true

const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries);
// Оператор и возвращает первое ложное значение и запинается,  а если true возвращается последнее правдивое значение
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'ldas;ldkal;sdk');

const hamburger = true;
const fries = false;

if (hamburger === 3 && cola === 1 && fries) {
   console.log('Все сыты');
} else {
   console.log('Мы уходим');
}

// Если есть сомнения  в приорите выполнения  то взгляни в таблицу сравнения операторов


//Как только оператор или || видит правду он перестаёт работать
// Код нижe выолнился до hamburger
const hamburger = 3;
const fries = 0;
const cola = 0;
if (hamburger || cola || fries) {
   console.log('Все довольны');
} else {
   console.log('Мы уходим');
}
// Если в или все неправда то возвращается последнее ложное значение
//Код нижу верне первую правду
let johnReport, alexReport, samReport, mariaReport = 'end';

console.log(johnReport || alexReport || samReport || mariaReport)

// Комбинация условий
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
   console.log('Все довольны');
} else {
   console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)

//Оператор не !

// Сначала он превращает аргумент к которому применен превращает его в логический тип данных
console.log(!0);


console.log(NaN || 2 || undefined); // 2


console.log(NaN && 2 && undefined); // Nan


console.log(1 && 2 && 3); //  3


console.log(!1 && 2 || !3); //  false


console.log(25 || null && !3); // 25


console.log(NaN || null || !3 || undefined || 5); // 5


console.log(NaN || null && !3 && undefined || 5); // 5


console.log(5 === 5 && 3 > 1 || 5); // true


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

//+yes

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
//+yes

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else {
   console.log('adsadas');
}

//-N0
