'use strict';

// JS анимации, requestAnimationFrame

// Их существует два вида первый способ мы с вами разбирали когда изучали временые функции setInterval и SetTimeout 

// Для создания более сложных анимаций сущ requestanimationframe 
//RequestAnimationFrame позволяет нам запускать какие то функции в качестве анимаций  эта функция запускается так что она берет вашу анимацию и подстравивает ее под частоту обновления вашего браузера  таким образом ваша анимация будет просиходить  в тот момент когда у вас идет обновление странички и соотвественно вы точно также будете плавно видетть анимацию но при этом нагрузка на ваш браузер очпень сильно снижается
let pos = 0;

function myAnimation() {
   pos++;
   elem.style.top = pos + 'px';
   elem.style.left = pos + 'px';

   if (pos < 300) {
      requestAnimationFrame(myAnimation);
   }
}

btn.addEventListener('click', myAnimation);