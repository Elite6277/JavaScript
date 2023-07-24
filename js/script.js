"use strict"

// В программировании много путей решения задач и чаще всего выбирают между более понятным и более простым в работе или по параметру скорости 


//Добавляем табы 

// Назначение глобального обработчика событий DOMContentloaded
window.addEventListener('DOMContentLoaded', () => {

   // У нас есть три задачи
   // первое это функция которая будет скрывать ненужные нам табы
   // Показать нужный таб
   // назначить обработчики событий на меню

   const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   //Если функция вызывается без аргумента  то по уолчанию отработает то что присвоили  i 
   function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
   }


   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         })
      }
   });



});
