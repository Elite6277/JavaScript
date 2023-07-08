"use strict";

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
//Изуение любого языка програмирования начинается с написания консольного приложения
//Рефакторинг это переписывать код под новые условия и требования



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели')



const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
}


//const lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
//const filmsRaiting = prompt('На сколько оцените его?');

//Решение с помощью  for

//for (let i = 0; i < 2; i++) {
//   const lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
//   const filmsRaiting = prompt('На сколько оцените его?');
//   if (lastSeenFilm != null && filmsRaiting != null && lastSeenFilm != '' && filmsRaiting != '' && lastSeenFilm.length < 50 && filmsRaiting.length <= 3) {
//      personalMovieDB.movies[lastSeenFilm] = filmsRaiting;
//      console.log('done');
//   } else {
//      console.log('error');
//      i--;
//   }
//}

//Решение с помошью while
//let i = 0;
//while (i < 2) {
//   i++;
//   const lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
//   const filmsRaiting = prompt('На сколько оцените его?');
//   if (lastSeenFilm != null && filmsRaiting != null && lastSeenFilm != '' && filmsRaiting != '' && lastSeenFilm.length < 50 && filmsRaiting.length <= 3) {
//      personalMovieDB.movies[lastSeenFilm] = filmsRaiting;
//      console.log('done');
//   } else {
//      console.log('error');
//      i--;
//   }
//}

//Решение с помошью do while
let i = 0;
do {
   i++;
   const lastSeenFilm = prompt('Один из последних просмотренных фильмов?');
   const filmsRaiting = prompt('На сколько оцените его?');
   if (lastSeenFilm != null && filmsRaiting != null && lastSeenFilm != '' && filmsRaiting != '' && lastSeenFilm.length < 50 && filmsRaiting.length <= 3) {
      personalMovieDB.movies[lastSeenFilm] = filmsRaiting;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
} while (i < 2);

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
   alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
   alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
   alert('Вы киноман');
} else {
   alert('Произошла ошибка');
}


console.log(personalMovieDB);