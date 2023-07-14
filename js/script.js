"use strict";
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания


let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели')

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
}



function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      //Один из полезных методов у строк  метод trim() который удаяляет пробелы с начала и конца строки
      const lastSeenFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
      const filmsRaiting = prompt('На сколько оцените его?');
      if (lastSeenFilm != null && filmsRaiting != null && lastSeenFilm != '' && filmsRaiting != '' && lastSeenFilm.length < 50 && filmsRaiting.length <= 3) {
         personalMovieDB.movies[lastSeenFilm] = filmsRaiting;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}
rememberMyFilms();


function detectPersonalLevel() {
   if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);


//function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//      personalMovieDB.genres[i - 1] = genre;//делаем так чтобы i  начинался с нуля потому что в масииве все начинается с нуля 
//   }
//}

//Более оптимизированный вариант
function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);//делаем так чтобы i  начинался с нуля потому что в масииве все начинается с нуля 
   }
}

writeYourGenres();

// В каждую функцию можно передавать то с чем она будет работать