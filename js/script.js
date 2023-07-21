
//1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
//новый фильм добавляется в список. Страница не должна перезагружаться.
//Новый фильм должен добавляться в movieDB.movies.
//Для получения доступа к значению input - обращаемся к нему как input.value;
//P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

//2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

//3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

//4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
//"Добавляем любимый фильм"

//5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
//Чтобы четко сказать коду чтобы он ждал загрузки Дом дерева 
document.addEventListener('DOMContentLoaded', () => {
   //иногда вместо document можно встретить window но разницы никакой не будет
   //код который расположен нижк сработает только тогда когда DOM структура будет загружена
   const movieDB = {
      movies: [
         "Логан",
         "Лига справедливости",
         "Ла-ла лэнд",
         "Одержимость",
         "Скотт Пилигрим против..."
      ]
   };

   const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      btnSend = addForm.querySelector('button'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

   addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      let newFilm = addInput.value; //внутри этого value будет содержаться то что ввел пользователь
      const favorite = checkbox.checked;

      if (newFilm) {
         //2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
         if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`
         }
         //4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
         //"Добавляем любимый фильм"
         if (favorite) {
            console.log('"Добавляем любимый фильм"')
         }
         movieDB.movies.push(newFilm);
         //5) Фильмы должны быть отсортированы по алфавиту */
         sortArr(movieDB.movies);

         createMovieList(movieDB.movies, movieList);

      }

      event.target.reset();//
   });




   const deleteAdv = (arr) => {
      arr.forEach(item => {
         item.remove();
      })
   }



   const makeChanges = () => {
      genre.textContent = 'драма';

      poster.style.backgroundImage = "url('img/bg.jpg')";
   }



   const sortArr = (arr) => {
      arr.sort()
   }



   //1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
   //новый фильм добавляется в список. Страница не должна перезагружаться.
   //Новый фильм должен добавляться в movieDB.movies.
   //Для получения доступа к значению input - обращаемся к нему как input.value;
   //P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
   function createMovieList(films, parent) {

      parent.innerHTML = "";
      sortArr(films);

      films.forEach((film, i) => {
         parent.innerHTML += `
         <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
         </li>
         `;
      });

      document.querySelectorAll('.delete').forEach((btn, i) => {
         btn.addEventListener('click', () => {
            //При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);

         });
      });
   }


   // Это тоже самое но с Обычнай функцией но предпочтительней со стрелочной функцией
   //adv.forEach(function (item) {
   //   item.remove();
   //}) 

   //Все созданные функции лучше объявлять в конце по очередности 
   //FunctionExpression вызывается после того как они были созданы и мы не можем расположить их выше 
   deleteAdv(adv);
   makeChanges();
   createMovieList(movieDB.movies, movieList);
});

