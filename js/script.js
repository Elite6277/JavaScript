"use strict";

// Передача по ссылке или по значению, Spread оператор(ES6)(ES9)
// Если мы работаем с примитивными типами даннх можем заменять 
// Если мы работаем с объектами к ним относятся массивы функции здесь идет передача не по значению а по ссылке 
let a = 5,
   b = a;

b = b + 5

console.log(b);
console.log(a);

const obj = {
   a: 5,
   b: 1
}

//const copy = obj;// Ссылку

//copy.a = 10;

//console.log(copy);
//console.log(obj);

function copy(mainObj) {
   let objCopy = {};

   let key;//Переменную key можно создавать и вне переберающей конструкции

   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }
   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const newNumbers = copy(numbers); // Поверхностная копия
// Когда мы клонируем объекты есть два понятия это глубокие и поверхностные копии оъектов


newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);


//Мы работаем с поверхностными копиями

// Метод Object.assign

const add = {
   d: 17,
   e: 20
};

const clone = Object.assign({}, add); //Клонируем объект
clone.d = 20;
console.log(clone);

console.log(Object.assign(numbers, add))//мы создали независмую поверхностную копию объекта


//Массивы как создать копию массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();// Это метод который помогает просто скоировать старый массив не меняя oldArray


newArray[1] = 'aSAsS';
console.log(newArray);//Измененная копия oldArray
console.log(oldArray); // old array остался таким каким был


//4 способ создания поверхностной копии это использования оператор разворота  spread operator

const video = ['youtube', 'vimeo', 'rutube'],
   blogs = ['worpress', 'livejournal', 'blogger'],
   internet = [...video, ...blogs, 'vk', 'facebook']; //...<-- spread помогает развернуть массив  

console.log(internet);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b',];

const newAaray = [...array]; //поверхностная копия верхнего массива

newAaray[0] = 'no a';
newAaray.push('c')
console.log(newAaray);

console.log(array);

const q = {
   one: 1,
   two: 2
};
q['three'] = 3;
const newObj = { ...q };



console.log(newObj)