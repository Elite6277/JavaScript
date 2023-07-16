"use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели')

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели');
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
         const filmsRaiting = prompt('На сколько оцените его?');
         if (lastSeenFilm != null && filmsRaiting != null && lastSeenFilm != '' && filmsRaiting != '' && lastSeenFilm.length < 50 && filmsRaiting.length <= 3) {
            personalMovieDB.movies[lastSeenFilm] = filmsRaiting;
            console.log('done');
         } else {
            console.log('error');
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
         alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
         alert('Вы классический зритель');
      } else if (personalMovieDB.count > 30) {
         alert('Вы киноман');
      } else {
         alert('Произошла ошибка');
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;

      } else {
         personalMovieDB.privat = true;
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i < 2; i++) {
         //let genre = prompt(`Ваш любимый жанр под номером ${i}`);

         //if (genre === '' || genre === null) {
         //   console.log('Вы ввели некорректные данные или не ввели их вовсе');
         //   i--;
         //} else {
         //   personalMovieDB.genres[i - 1] = genre;
         //}

         let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

         if (genres === '' || genres === null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
         } else {
            personalMovieDB.genres = genres.split(',');
            personalMovieDB.genres.sort();
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   }
};

