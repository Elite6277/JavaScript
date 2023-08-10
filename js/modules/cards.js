import { getResource } from "../services/services";

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

   getResource('http://localhost:3000/menu')
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

export default cards;