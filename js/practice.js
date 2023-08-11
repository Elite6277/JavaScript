'use strict';

// (Д) Создание своих ошибок 

const data = [
   {
      id: 'box',
      tag: 'div',
   },
   {
      id: '',
      tag: 'nav'
   },
   {
      id: 'circle',
      tag: '',
   }
]


// Для создания своих ошибок есть оператор который генерирует ошибку это оператор throw и мы  как ошибку можем выбросить все что угодно  строку число  или какой то собственнный объект но оюычно этим никто не занимается потому что есть встроенный класс под названием Error

try {
   data.forEach((blockObj, i) => {
      const block = document.createElement(blockObj.tag);

      if (blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);

      block.setAttribute('id', blockObj.id);
      document.body.append(block);
   })
} catch (e) {
   if (e.name === 'SyntaxError') {
      console.log(e.message);
   } else throw e;
}

const err = new SyntaxError('dsadasdadas');
console.log(err.name, err.message, err.stack);
