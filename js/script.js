"use strict"

//Используем классы в реальной работе 

// В программировании много путей решения задач и чаще всего выбирают между более понятным и более простым в работе или по параметру скорости 


//Добавляем табы 

// Назначение глобального обработчика событий DOMContentloaded
window.addEventListener('DOMContentLoaded', () => {

   // У нас есть три задачи
   // первое это функция которая будет скрывать ненужные нам табы
   // Показать нужный таб
   // назначить обработчики событий на меню


   // Tabs
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

   // Timer

   const deadline = '2023-08.2';

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

   setClock('.timer', deadline);

   // Modal
   const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal');
   //modalContent = document.querySelector('.modal__content'),


   //Вариант Ивана Петреченко
   function openModal() {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      clearInterval(modalTimerId);

   }
   modalTrigger.forEach(btn => {
      btn.addEventListener('click', openModal);
   });

   function closeModal() {
      modal.classList.add('hide');
      modal.classList.remove('show');
      document.body.style.overflow = '';
   }



   modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
         closeModal();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
         closeModal();
      }
   });



   const modalTimerId = setTimeout(openModal, 50000);

   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
         openModal();
         window.removeEventListener('scroll', showModalByScroll);
      }
   }

   window.addEventListener('scroll', showModalByScroll);

   //Используем классы для карточек

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
   new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container'
   ).render();


   new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      'Меню “Премиум”',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      14,
      '.menu .container'
   ).render();

   new MenuCard(
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие    продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество  белков за счет тофу и импортных вегетарианских стейков.',
      21,
      '.menu .container'
   ).render();

   //Работаем на локальном сервере потому что мы используем пост запросы
   // Задача это взять все формы обратной связи которые у нас есть в нашей верстке  которые есть в нашей верстке собрать данные из них и отправить на сервер

   // Forms
   // Реализация скрипта отправки данных на сервер


   // Получаем все формы по тегу форм
   const forms = document.querySelectorAll('form');
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
      postData(item);
   });

   // Функция которая будет отвечать за постинг даных
   function postData(form) {// эта функция будет принимать в себя какую то форму 
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
         //Главное не забыть отправить наш statusMessage куда то на страницу ведь  пока что он сущ лишь в JavaScripte 
         //form.append(statusMessage);

         //Этот метод позволяет нам помещать наши элементы в разные места нашей верстки 
         form.insertAdjacentElement('afterend', statusMessage)

         //После этого Работаем с методом XMLHttpRequest() 
         const request = new XMLHttpRequest();
         // После этого  унас всегда вызывается метод open() чтобы настроить этот запрос
         request.open('POST', 'server.php');
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
         request.setRequestHeader('Content-type', 'application/json');

         //Задача у нас есть объект FormData которую на необходимо превратить в формат JSON
         const formData = new FormData(form);

         //FormData это довольно специфический объект и мы просто так его не можем прогнать в другой формат 
         // Для этого нам понадобиться прием который частенько используется

         //Создаем новый объект 
         const object = {};
         //теперь переберем все что есть внутри formData и мы все эти данные пометим в object
         formData.forEach(function (value, key) {
            //Обращаемся к нашему пустому объекту 
            // На основании тех данных которые были в formdata мы сформируем object с помошью обычного перебора
            object[key] = value;
         });
         // Теперь когда мы получили обычный объект а не FormData() мы на нем уже можем использовать конвертацию в JSON 
         //для этого создаем промежуточную переменнную используем JSON.stringify(внутрь помещаем object)которая превращает обычный объект в JSON  
         //теперь все что надо сделать это взять JSON и поместить его в request.send(dvctnj formData json)
         const json = JSON.stringify(object);

         // Отправляем данные используем метод send()
         request.send(json);//здесь уже есть body потому что мы что то отправляем

         // Когда данные уйдут на сервер нам с ними нужно будет что то сделать
         // Отслеживаем конечную загрузку запроса
         request.addEventListener('load', () => {
            // Если все правильно произошло 
            if (request.status === 200) {
               //эта команда чтобы четко увидеть что все правильно произошло
               console.log(request.response);
               //Когда все успешно пришло выводим success тоесть у нас загрузка поменяется на success
               showThanksModal(message.success);
               //Очищаем нашу форму после успешной отправки 
               form.reset();
               statusMessage.remove();
            } else {
               showThanksModal(message.failure);
            }
         });
      });
   }
   // Красивое оповещение пользователя
   // функция которая тоже относиться к отправке формы
   function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      openModal();

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
         closeModal();
      }, 4000);
   }
});

