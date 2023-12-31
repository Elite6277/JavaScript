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

export { postData };
export { getResource };