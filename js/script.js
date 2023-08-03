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

   //Этот метод подходит когда мы работаем с шаблонизатором 

   //getResource('http://localhost:3000/menu')
   //   .then(data => {
   //      data.forEach(({ img, altimg, title, descr, price }) => {
   //Деструктуризация объекта это когда мы из объекта вытаскиваем отдельное свойство в качестве отдельной переменнной 
   //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
   //      });
   //   });



   axios.get('http://localhost:3000/menu')
      .then(data => {
         data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
         });
      });
   //А этот метода подходит когда нам нужно что то один раз построить оба метода очень популярны
   // Делаем запрос к серверу 
   //getResource('http://localhost:3000/menu')
   //   .then(data => createCard(data));

   //function createCard(data) {
   //   data.forEach(({ img, altimg, title, descr, price }) => {
   //      const element = document.createElement('div');
   //      price = price * 27;
   //      element.classList.add('menu__item')
   //      element.innerHTML = `
   //            <img src=${img} alt=${altimg}>
   //            <h3 class="menu__item-subtitle">${title}</h3>
   //            <div class="menu__item-descr">${descr}</div>
   //            <div class="menu__item-divider"></div>
   //            <div class="menu__item-price">
   //               <div class="menu__item-cost">Цена:</div>
   //               <div class="menu__item-total"><span>${price}</span> грн/день</div>
   //            </div>
   //      `;

   //      document.querySelector('.menu .container').append(element);

   //   });
   //}

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
      bindPostData(item);
   });

   //Самое главное это взять все наши формы и под кажду из них подвязать postData подвязать 

   //Сейчас на каждую форму будет подвязана функция postData который будет обработчиком события при отправке
   //Cоздаем функцию function Expression 

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
   }

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

         postData('http://localhost:3000/requests', json)
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
   // Fetch API 
   // API Aplication Programming Interface тоесть интерфейс какого то программного обеспечения либо приложения
   // API это набор данных и возможностей которое предостовляет нам какое то готовое решение 
   // Самый бональный API который мы встречали это DOM API и по факту это различные методы которые позволяют нам работать с элементами на странице 
   // Например мы обращяемся к document и у него есть метод query selector эта возможность уже встроена в браузер и получается нам предоставляют эти возможности для того чтобы мы их могли использовать 
   // Мы точно также можем использовать googleMaps API соответственнно google предоставляет нам возможность работать с их картами как то их модифицировать добавлять какое то поведение и тому подобное тоже самое есть и у яндекс карт и у других каких то библиотек 
   //! И самое главное что API это такое обобщяющее понятие которое нам говорит что нам предоставляют готовые какие то методы  и свойства которые мы с вами можем использовать если затрагивать более широкие понятия  то например представьте мобильный телефон у него в операционной системе есть тоже какой то API например доступ к вибрации вашего телефона и доступ к каим то функциям вашей камеры и все это наз-ся тоже API это интерфейс с которым вы можете работать 

   //Разбираем технологию Fetch API она уже встроена в браузер и это современнная и крайне удобная технология которая позволяет общаться с сервером и она построена на промисах Promise

   // Пишем так чтобы использовать fetch()
   // В нашем примере мы делаем запрос к todo и при этом мы получаем только первую todo которая у нас там будет на сервере 
   //Чтобы использовать fetch внутри fetch помещяем тот url на который мы будем посылать запрос если больше нечего не указывать никаких параметров то это у нас уже будет классический  get запрос который просто получит данные из этого url но самое главное находится внутри fetch ипользует промисы 

   // И вот из этой кострукции у нас возрвращаеися именно promise 
   // Когда нам возвращается promise из какой то функции или из какой то переменной в которую обернута функция мы его можем обработать при помощи Цепочки then 
   // Чтобы делать другие виды запросов Post либо put мы после url ставим запятую и открываем объект  с настройками которые мы будем добавлтять
   //fetch('https://jsonplaceholder.typicode.com/posts', {// Все настройки которые нам нужны идут просто объектом 
   //   method: 'POST',
   //   body: JSON.stringify({ name: 'Alex' }),
   //   headers: {
   //      'Content-type': 'application/json',
   //   }

   //})
   //здесь мы получаем какой то ответ и этот ответ мы получаем в формате JSON 
   // чтобы использовать дальше этот  JSON объект  прямо у себя на клиенте мы хотим  его взять и транформировать в обычный самый объект для этого мы использовали команду JSON parse  но у fetсh уже есть встроенные возможности которые позволяют быстро это сделать эта конструкция ниже 
   //.then(response => response.json())
   //.then(json => console.log(json));

   // Итог сегодня мы познакомились с очень полезной и приятной фичой в JS оно наз-ся fetch оно появилось нетак давно и уже стала замен XMLHTTPRequest объекта при помощи которого мы раньше делали ajax  запросы
   //Самое главное что нужно понимать что fetch работает на промисах promise тоесть мы дальше можем делать цепочку вызовов которые являются по факту callbackaми  дальше по курсу мы еще не раз будем использовать promise  
});

