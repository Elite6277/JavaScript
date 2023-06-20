"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//const numberOfFilmsCount = numberOfFilms;

const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {},
   genres: [],
   privat: false
};

const movieQuestion = prompt('Один из последних просмотренный фильмов?', '');
const raitingQuestion = prompt('На сколько оцените его?', '');
const movieQuestion2 = prompt('Один из последних просмотренный фильмов?', '');
const raitingQuestion2 = prompt('На сколько оцените его?', '');



personalMovieDB.movies[movieQuestion] = raitingQuestion;
personalMovieDB.movies[movieQuestion2] = raitingQuestion2;

console.log(personalMovieDB);