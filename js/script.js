"use strict"

import tabs from './modules/tabs';
import modal, { openModal } from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
   // Объединяем все файлы заимпортировав их в главный
   // Порядок подключения абсолютно не важен
   const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

   // раз это функции нам их необходимо вызвать
   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimerId);
   timer('.timer', '2023-08-20');
   cards();
   calc();
   forms('form', modalTimerId);
   slider({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner',
      slide: '.offer__slide',
   });
});


