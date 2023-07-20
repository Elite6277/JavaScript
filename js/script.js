'use strict';

// Рекурсия прием который используется в программировании в целом
// Внутри функции могут вызываться другие функции
// Если ту же функцию вызывать внутри себя же это назывется рекурсией

// Классический пример это функция возведения в степень
//function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//      result *= x;
//   }

//   return result;
//}

function pow(x, n) {
   if (n === 1) {
      return x;
   } else {
      return x * pow(x, n - 1);// рекурсия это когда функция внутри себя сама себя запускает для каких то действий
   }
}

// Термины котрые могут пригодится
// 1термин база рекурсии это случай котрый приводит сразу к завершению функции
// 2термин шаг рекурсии это запуск вложенной функции но с другим значением
// 3термин глубина рекурсии общее количество вложенных вызовов вместе с самым первым

// Итеративный подход тоесть цикл он эфетивнее рекурсии это связано с внутренним устройством языка 
// Рекурсия делает функции проще  хоть и имеет ограничения по глубине тоесть по количеству внутренних вызовов

//! Большинство программистов склоняются в сторону рекурсии


pow(2, 1)//2
pow(2, 2)//4
pow(2, 3)//8
pow(2, 4)//16

let students = {
   js: [{
      name: 'John',
      progress: 100
   }, {
      name: 'Ivan',
      progress: 60
   }],

   html: {
      basic: [{
         name: 'Peter',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }]
   }
};

// Задача посчитать средний прогресс всех студентов всех курсов
// 1 Понять сколько студентов в общем 
// 2 и общее число в процентах

function getTotalProgressByIteration(data) {
   let total = 0;
   let students = 0;


   // Очень полезный метод для объктов который наз-ся object.values()
   // Этот метод позволяет получить массив значений перечисляемых свойств объекта в том же порядке  что и если бы работал for in цикл

   for (let course of Object.values(data)) {
      if (Array.isArray(course)) {
         students += course.length;

         for (let i = 0; i < course.length; i++) {
            total += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)) {
            students += subCourse.length;
            for (let i = 0; i < subCourse.length; i++) {
               total += subCourse[i].progress;
            }
         }

      }
      //метод Array.isArray() проверяет является ли что то массивом
   }

   return total / students;
}

console.log(getTotalProgressByIteration(students));

// Рекурсия упрощает функцию потому что мы все однотипные дейсвтвия заключем в функцию и она внутри себя ее каждый раз вызывает
// Второй вариант при помощи рекурсии
let students = {
   js: [{
      name: 'John',
      progress: 100
   }, {
      name: 'Ivan',
      progress: 60
   }],

   html: {
      basic: [{
         name: 'Peter',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }]
   }
};
function getTotalProgressByRecursion(data) {
   if (Array.isArray(data)) {
      let total = 0;

      for (let i = 0; i < data.length; i++) {
         total += data[i].progress;
      }
      return [total, data.length];//При помощи return можно венрнуть все что угодно в том числе и массив с данными
      // Базоыве понятия
      // 1термин база рекурсии это случай котрый приводит сразу к завершению функции
      //Базу мы написали
   } else {
      let total = [0, 0];

      for (let subData of Object.values(data)) {
         const subDataArr = getTotalProgressByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }
      return total;
   }
}// 2термин шаг рекурсии это запуск вложенной функции но с другим значением

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);



// 3термин глубина рекурсии общее количество вложенных вызовов вместе с самым первым
