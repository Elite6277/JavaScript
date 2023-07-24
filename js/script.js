"use strict"

//(WeakMap и WeakSet)

//let user = { name: 'Ivan' };

//let map = new WeakMap();
//map.set(user, 'data');

//user = null;

//console.log(map.has(user));

let cache = new WeakMap();

function cacheUser(user) {
   if (!cache.has(user)) {
      cache.set(user, Date.now());
   }
   return cache.get(user);
}

let lena = { name: 'Elena' };
let alex = { name: 'Alex' };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

// WeakSet
// add, has, delete


let messages = [
   { text: 'Hello', from: 'John' },
   { text: 'World', from: 'Alex' },
   { text: '...', from: 'M' },
];

// Weak Set помогает нам хранить набор каких то данных и легко проверять
//Weak Set Очищается автомотически
let readMessages = new WeakSet();

readMessages.add(messages[0]);
//readMessages.add(messages[1]);


readMessages.add(messages[0]);
messages.shift();

console.log(readMessages.has(messages[0]));

//WeakMap и WeakSet выполняют задачу того что они являются дополнительным хранилищем  управляемых из каких то других мест в коде
// ЗДесь мы работаем с объектами если на них нет ссылок и они содержаться только в этих структурах то они будут удалены из памяти

// Эти структуры данных они контролируют  использование памяти и всегда нужно помнить про ограничения с ними
