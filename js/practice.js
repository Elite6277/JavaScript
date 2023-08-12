'use strict';

// Web Animations API

// Для создания анимации нам понадобится специальный коснтруктор Animation()
// На данный момент его можно создать двумя способами чуть более сложный это через коснтруктор  тоесть когда мы прописываем new Animation() и передаем туда аргументы

// Второй вариант это использовать метод animate() интерфейса Element это быстрый способ создания Animation

const descr = document.querySelectorAll('.tabcontent__descr');

const phoneAnimation = descr.forEach(item => {

   item.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(100px)' },
      { transform: 'translateY(-100px)' },
      { transform: 'translateY(0)' }
   ], {
      duration: 3000,
      iterations: Infinity
   });
})