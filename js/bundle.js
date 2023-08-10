/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
   // Calc

   const result = document.querySelector('.calculating__result span');

   let sex, height, weight, age, ratio;

   if (localStorage.getItem('sex')) {
      sex = localStorage.getItem('sex');
   } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
   }

   if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
   } else {
      ratio = 1.375;
      localStorage.setItem('ratio', 1.375);
   }

   function initialLocalSettings(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.classList.remove(activeClass);
         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
            elem.classList.add(activeClass);
         }
         if (elem.getAttribute('data-ratio') == localStorage.getItem('ratio')) {
            elem.classList.add(activeClass);
         }
      });
   }

   initialLocalSettings('#gender div', 'calculating__choose-item_active');
   initialLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

   function calcTotal() {
      if (!sex || !height || !weight || !age || !ratio) {
         result.textContent = '____';
         return;
      }
      if (sex === 'female') {
         // Эта формул а расчитывает суточную норму калорий для женщин
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
         // Эта формула расчитывает суточную норму калорий для мужчин
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }
   }

   calcTotal();

   function getStaticInformation(selector, activeClass) {
      const elements = document.querySelectorAll(selector)


      elements.forEach(elem => {
         elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
               ratio = +e.target.getAttribute('data-ratio');
               localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
               sex = e.target.getAttribute('id');
               localStorage.setItem('sex', e.target.getAttribute('id'));
            }

            elements.forEach(elem => {
               elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
         });
      });
   }
   getStaticInformation('#gender div', 'calculating__choose-item_active');
   getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

   function getDynamicInformation(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {

         if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
         } else {
            input.style.border = 'none';
         }

         switch (input.getAttribute('id')) {
            case 'height':
               height = +input.value;
               break;
            case 'weight':
               weight = +input.value;
               break;
            case 'age':
               age = +input.value;
               break;
         }

         calcTotal();
      });
   }

   getDynamicInformation('#height');
   getDynamicInformation('#weight');
   getDynamicInformation('#age');
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
   class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector) {
         this.src = src;
         this.alt = alt;
         this.title = title;
         this.descr = descr;
         this.price = price;
         this.parent = document.querySelector(parentSelector);
         this.transfer = 27;
         this.changeToUAH();
      }

      changeToUAH() {
         this.price = this.price * this.transfer;
      }

      render() {
         const element = document.createElement('div');
         element.innerHTML = `
         <div class="menu__item">
               <img src=${this.src} alt=${this.alt}>
               <h3 class="menu__item-subtitle">${this.title}</h3>
               <div class="menu__item-descr">${this.descr}</div>
               <div class="menu__item-divider"></div>
               <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
               </div>
            </div>
         `;
         this.parent.append(element);
      }
   }
   // Для того чтобы использовать метод и объект на месте мы просто прописываем new MenuCard без присваивание к какойто переменнной
   //   Мы создаем здесь объект сразу же на нем  вызываем метод render он что то сделает что то нам отработает со страницей и он исчезнет потому что больше на него не будет ссылок мы нигде не сохраняем этот объект, это удобно когда нам только один раз нужно его использовать



   //Этот метод подходит когда мы работаем с шаблонизатором 

   (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
      .then(data => {
         data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
      });



   //axios.get('http://localhost:3000/menu')
   //   .then(data => {
   //      data.data.forEach(({ img, altimg, title, descr, price }) => {
   //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
   //      });
   //   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function forms(formSelector, modalTimerId) {
   // Forms
   // Реализация скрипта отправки данных на сервер


   // Получаем все формы по тегу форм
   const forms = document.querySelectorAll(formSelector);
   // Этот объект будет содержать список всех фраз которые я буду показывать в различных ситуациях 
   const message = {
      //Чтобы использовать изображение из проекта необходимо лишь использовать пути к этим картинкам
      loading: 'img/form/spinner.svg',
      success: 'Спасибо скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...',
   }

   //! Важный момент когда работаем на локальном сервере скорее всего после изменений каких то сбрасывать кэш, делается это для того чтобы изменения применились на странице потому что сервер запоминает старые изменения  чтобы каждый раз не подгружать и это наз-ся кэшом чтобы сбросит кэш Shift f5  

   //Самое главное это взять все наши формы и под кажду из них подвязать postData подвязать 

   forms.forEach(item => {
      //Сейчас на каждую форму будет подвязана функция postData который будет обработчиком события при отправке
      bindPostData(item);
   });


   // Функция которая будет отвечать за постинг даных
   function bindPostData(form) {// эта функция будет принимать в себя какую то форму 
      // Используем аргумент форм потому что нам удобно бцдет навесить обработчик события
      form.addEventListener('submit', (e) => { // и будем мы использовать событие submit оно срабатывает каждый раз когда мы пытаемся отправить какую то форму
         //Чтобы отменить стандартное поведение браузера мы используем e.preventDefault
         // Именно эта команда должна идти в самом начале чтобы не было проблем
         e.preventDefault();

         // Очень частый прием это создание нового блока на странице и туда мы выводим сообщение картинку не важно что самое главное что динамически будет появлятся какой то блок и чаще всего он добавляется к форме 

         //создаем div
         const statusMessage = document.createElement('img');

         //Добавляем классы в div 
         statusMessage.src = message.loading;
         // Берем элемент и во внутрь помещаем то сообщение которое мы хотим показать 

         // Как только мы отправляем запрос  как только у нас произошел submit у нас самое главное сообщение это загрузка мы скажем пользователю что произошла загрузка  если у него медленный интернет он увидет это сообщение
         statusMessage.style.cssText = `
            display:block;
            margin: 0 auto;
         `;
         // Главное не забыть отправить наш statusMessage куда то на страницу ведь  пока что он сущ лишь в JavaScripte 
         // form.append(statusMessage);

         // Этот метод позволяет нам помещать наши элементы в разные места нашей верстки 
         form.insertAdjacentElement('afterend', statusMessage)
         // Вместо XMLHttpReques работаем с fetch 

         //После этого Работаем с методом XMLHttpRequest() 
         //const request = new XMLHttpRequest();
         // После этого  унас всегда вызывается метод open() чтобы настроить этот запрос
         //request.open('POST', 'server.php');
         // Следующая самая главная самая важная задача сделать так чтобы все данные которые заполнил пользователь в форме мы получили в JavaScripte и уже могли отправить на сервер
         // Самый простой способ подготовить такие данные сформы это использовать объект который наз-ся formData 
         //нам не всегда нужно передавать в формате JSON
         // Есть два формата первый это FormData второй это когда мы передаем JSON

         // formData это специальный объект который позволяет с определенной формой быстро сформировать  все данные которые заполнил пользователь 
         //во внутрь мы помещаем форму из которой нам нужно собрать данные

         //!Очень важный момент на котором можно запнуться и потерять много часов времени это касается того как сверстаны формы и как прописаны input если мы предпологаем что данные должны идти на сервер то в вертске внутри input всегда нужен атрибут "name" и главное чтобы знаения name они не повторялись и наче formData не сможет найти этот input не сможеть  взять из него данные value чтобы сформировать из него правтльный ответ
         //! Всегда проверяйте name  у ваших form

         //Настраиваем заголовки которые должны будут говорить серверу что именно приходит 
         // Чтобы правильно работать с FormData  во втром аргументе нам нужно указать multipart/form-data
         //!Когда мы используем  свзяку XMLHttpRequest + form-data нам заголовок устанавливать не нужно  он утстанваливается автомотически  именно иза этой проблемы на сервере мы не получим данные
         //request.setRequestHeader('Content-type', 'multipart/form-data');

         //С каким форматом  мы будем общаться  JSON или form-data  зависит от бэкенда  
         //request.setRequestHeader('Content-type', 'application/json');

         //Задача у нас есть объект FormData которую на необходимо превратить в формат JSON
         const formData = new FormData(form);

         //FormData это довольно специфический объект и мы просто так его не можем прогнать в другой формат 
         // Для этого нам понадобиться прием который частенько используется
         // Берем нашу formData которая собрала все данные с формы   ее сначала превращяеи в массив массивов после этого мы превращяем ее в классический объект а после этого мы этот классический объект превращяем в JSON 
         const json = JSON.stringify(Object.fromEntries(formData.entries())); // Метод entries возвращяет массив собственных перечисляемых свойтств у указанного объекта  массив массивов
         // Теперь когда мы получили обычный объект а не FormData() мы на нем уже можем использовать конвертацию в JSON 
         //для этого создаем промежуточную переменнную используем JSON.stringify(внутрь помещаем object)которая превращает обычный объект в JSON  
         //теперь все что надо сделать это взять JSON и поместить его в request.send(dvctnj formData json)
         //const json = JSON.stringify(object);

         // Отправляем данные используем метод send()
         //request.send(json);//здесь уже есть body потому что мы что то отправляем
         // Если внутри fetch promise попадает на ошибку котрая связана с http протоколом типо 404 502 тоесть мы сделали ошибку в названии url и тд он не выкинет reject это для него не считается ошибкой он нормально выполнит при этом reslolve самое главное для fetch  это то что он вообще смог сделать этот запрос и соответсвенно у нас reject будет возникать при сбое сети или если что то там помешало запросу  вообще выполнится у этого механизма есть свои плюсы мы еще разберем как обходить эту проблему и как выкидывать reject  даже если вдруг у нас что то пошло нет так 

         (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => {
               console.log(data);//Data это просто те данные которые нам возврашяются из promise те которые нам вернул сервер  1 просто выведем в консоль то что нам вернул сервер 
               showThanksModal(message.success);//2  Запускаем функцию showThanksModal 
               form.reset(); // Мы сейчас поработаем и переместим ее кое куда в другое место 
               statusMessage.remove(); // Мы наш спиннер просто берем и удаляем, по факту это все действия которые нам сейчас нужны ,но если нам в будущем понадобиться в будущем еще расширить цепочку мы опять пропишем then  и выполним какую то операцию которая должна будет следовать строго за верхними командами 

            }).catch(() => {// Его желательно всегда прописывать в реальных проектах потому что нам все таки ошибки нужно обрабатывать
               //Выполняем операцию которая соответсвует ошибке 
               // Если в результате моего запроса моего fetch возникнет какая то критическая ошибка например не туда послал запрос и тому подобное то у меня в методе catch выведется функция showThanksModal(message.failure); что то пошло не так и пожалуйста повторите немножко позже  
               showThanksModal(message.failure);
            }).finally(() => {//Используем его потому что у нас есть действие которое должно выполнится всегда у нас это очистка формы 

            })
         // Когда данные уйдут на сервер нам с ними нужно будет что то сделать
         // Отслеживаем конечную загрузку запроса
         //request.addEventListener('load', () => {
         // Если все правильно произошло 
         //   if (request.status === 200) {
         //эта команда чтобы четко увидеть что все правильно произошло
         //      console.log(request.response);
         //Когда все успешно пришло выводим success тоесть у нас загрузка поменяется на success
         //      showThanksModal(message.success);
         //Очищаем нашу форму после успешной отправки 
         //      form.reset();
         //      statusMessage.remove();
         //   } else {
         //      showThanksModal(message.failure);
         //   }
         //});
      });
   }
   // Красивое оповещение пользователя
   // функция которая тоже относиться к отправке формы
   function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

      const thanksModal = document.createElement('div');

      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
         <div class="modal__content">
               <div class="modal__close" data-close>×</div>
               <div class="modal__title">${message}</div>
         </div>
      `;

      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
      }, 4000);

   }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector) {
   const modal = document.querySelector(modalSelector);

   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
   const modal = document.querySelector(modalSelector);

   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';

   if (modalTimerId) {
      clearInterval(modalTimerId);
   }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
   // Modal

   const modalTrigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);

   modalTrigger.forEach(btn => {
      btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
   });

   modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == "") {
         closeModal(modalSelector);
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('show')) {
         closeModal(modalSelector);
      }
   });


   // Изменил значение, чтобы не отвлекало

   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModal(modalSelector, modalTimerId);
         window.removeEventListener('scroll', showModalByScroll);
      }
   }
   window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
   // Slider simple variant

   //Берем класс который определяет каждый отдельный слайд
   const slides = document.querySelectorAll(slide),
      //Получаем слайдер 
      slider = document.querySelector(container),
      // Стрелочка prev 
      prev = document.querySelector(prevArrow),
      // Стрелочка next 
      next = document.querySelector(nextArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrapper).width;


   // Индекс которая будет определять текущее положение в слайдере 
   let slideIndex = 1;
   let offset = 0;

   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
   } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
   }

   // Устанавливаем этому блоку ширину 
   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.5s all';

   slidesWrapper.style.overflow = 'hidden';


   slides.forEach(slide => {
      slide.style.width = width;
   });

   slider.style.position = 'relative'

   //  Создаем большую обертку для наших точек  как то их стилизуем 
   const indicators = document.createElement('ol'),
      dots = [];

   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
   `;
   slider.append(indicators);

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
      `;

      if (i == 0) {
         dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);
   }

   function deleteNotDigits(str) {
      return +str.replace(/\D/g, '');
   }

   // Обработчик события для того чтобы передвигать наш слайдер 
   next.addEventListener('click', () => {
      if (offset == deleteNotDigits(width) * (slides.length - 1)) { //'500px'
         offset = 0;
      } else {
         offset += deleteNotDigits(width);
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
         slideIndex = 1;
      } else {
         slideIndex++
      }

      if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
   });

   //Обработчик события для того чтобы передвигать наш слайдер назад
   prev.addEventListener('click', () => {
      if (offset == 0) { //'500px'
         offset = deleteNotDigits(width) * (slides.length - 1)
      } else {
         offset -= deleteNotDigits(width);
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
         slideIndex = slides.length;
      } else {
         slideIndex--;
      }

      if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
      } else {
         current.textContent = slideIndex;
      }
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
   });

   dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         slideIndex = slideTo;
         offset = deleteNotDigits(width) * (slideTo - 1);

         slidesField.style.transform = `translateX(-${offset}px)`;

         if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
         } else {
            current.textContent = slideIndex;
         }
         dots.forEach(dot => dot.style.opacity = '.5');
         dots[slideIndex - 1].style.opacity = 1;
      });
   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
   const tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector);

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove(activeClass);
      });
   }

   //Если функция вызывается без аргумента  то по уолчанию отработает то что присвоили  i 
   function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add(activeClass);
   }


   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains(tabsSelector.slice(1))) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Timer
function timer(id, deadline) {

   // задачаа нашей функции это получить разницу между датами
   function getTimeRemaining(endtime) {
      let days, hours, minutes, seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());
      if (t <= 0) {
         days = 0;
         hours = 0;
         minutes = 0;
         seconds = 0;
      } else {
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
      }

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds,
      };

   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }


   // Функция которая будет устонавливать timer на страничку
   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);



      updateClock();

      // Функция которая будет обновлять наш Timer Каждую секунду
      function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
            clearInterval(timeInterval);
         }
      }
   }

   setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
// Наша функция postData занимается тем что она настраивает наш запрос она fetchit тоесть посылает наш запрос на сервер получает какой то ответ от сервера что например запостили успешно и после этого транформирует этот ответ в Json
const postData = async (url, data) => {
   // создаем переменнную result  во внутрь нее мы  с вами будем помешать промис который возврашается от fetch 
   //когда мы делаем запрос мы сразу можем обработать те данные которые пришли 

   //она fetchit
   const res = await fetch(url, {// это асинхронный код и он не ждет другой код  и Нам нужен механизм который превращяет ассинхронный код в синхронный для решения этой проблемы  появились такие операторы как Assync Await  
      //await значит что неоьходимо дождаться результата этого запроса какой результат нас не волнует самое главное что мы должны его дождаться и толкьо после того как у нас будет результат await пропустит нас дальше 
      method: 'POST', //каким образом  
      headers: {
         'Content-type': 'application/json'
      },
      // и что имеено
      body: data
   });
   //транформирует этот ответ в Json
   return await res.json(); // Пишем здесь return чтобы могли дальше по цепочке обработать и тут  мы должны дождатся результата этого промиса прежде чем его returnit
};

const getResource = async (url) => {
   const res = await fetch(url);

   if (!res.ok) {

      //объект ошибки во внутрь мы помещяем текст ошибки который необходимо выдать 
      //Чтобы выкинуть эту ошибку нам понадобиться throw   = бросать  чтобы она выпала из нашей функции 
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
   }

   //транформирует этот ответ в Json
   return await res.json(); // Пишем здесь return чтобы могли дальше по цепочке обработать и тут  мы должны дождатся результата этого промиса прежде чем его returnit
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");


;







window.addEventListener('DOMContentLoaded', () => {
   // Объединяем все файлы заимпортировав их в главный
   // Порядок подключения абсолютно не важен
   const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 300000);

   // раз это функции нам их необходимо вызвать
   (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
   (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2023-08-20');
   (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
   (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
   (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
   (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
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



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map