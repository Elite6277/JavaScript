"use strict";

//Ключевое слово return


const usdCurr = 28;
const discount = 0.9;
function convert(amount, curr) {
   return curr * amount; // Это функция возвращает какой то результат
}

function promotion(result) {
   console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);

//Когда пишете фугкцию вы должны представлять что она будет делать и как использовать. 


//return можно использвать без значения
function test() {
   for (let i = 1; i < 5; i++) {
      console.log(i);
      if (i === 3) return //Тут возвращает undefined
   }
   console.log('Done'); //До этого сообщения код не дошел
}

test();