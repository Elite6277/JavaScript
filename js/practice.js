"use strict"

// Подробно про npm проекты. JSON сервер
// Пакетный менеджер npm, npm пакеты это кусочки какого то кода  которые лежат на отдельных серверах и которые мы можем себе устанавливать в проект

//Сначала нужно нашей системе сказать что сейчас  файл котоый открыт в редакторе кода будет содержать npm пакеты тоесть он превращяется в npm проект  сделать это нужно чтобы наша система четко знала  что в этом проете есть какие пакеты он использует  какая версия  и прочая полезная инфа поэтому всегда перед тем как устонавливать какие то npm зависимости  в наш проет необходимо создать наш npm project
// 1 открываем терминал пишем путь к нашему проету  заходим в проект
// 2 чтобы инициализировать наш проет пишем npm init
// 3 после этого у нас идет ряд вопросов на которые мне необходимо дать ответы сначала это package name-название нашего проекта   можно пропустить
// 4 версия нашего проета можно пропустить
// 5 description описание нашего проекта  можно пропустить
// 6 entry piont это главный наш файл можно пропустить
// 7  test command можно пропустить
// 8 git repository можем указать сразу url для нашего репозитория можно пропустить
// 9 различные ключевые слова  которые  мы описываем наш проект  можно пропустить
// 10 автор можно пропустить
// 11 Лицензия можно пропустить
// 12  Нажимаем ок и мы видим те проеты которые будут применены к нашем проекту

// У нас теперь в проекте появился файлик package.json

// Наш файл packaje.json будет содержать всю информацию о проекте  и кроме всего этого  будет содержать информацию о тех пакетах  которые мы поместим внутри это пакета след задача это установка любого npm пакета котрую мы будем использовать внутри нашего проекта

// Чтобы кстановить пакет прописываем npm команду install или npm i  следующим идет название пакета дальше идут дополнительные параметры которые мы используем при установке пакетов

// Дело в том что пакеты могут различться на две большие категории Мы их можем устанавливать локально а можем устанавливать глобально
// Если мы пакет устновим глобально то это значит что он будет работать вообще в люой части нашей системы тоесть неважно в каком проекте в какой паке мы его запускаем это полезно для каких то проверяющих утилит которым в принципе не важно привязка к определенному проекту но чаще всего мы будем устанавливать именно локальные наши пакеты, почему во первых таким образом  мы с вами запишем что именно этот проект использует именно этот пакет  причем именно вот такую вот версию во вторых так каждый пользователь который будет пользоваться нашим проетом  знать какие пакеты ему необходимо установить в наш проект вне зависимости какие там глобально были установлены  у автора

// Для того чтобы установить глобально синтаксис -g
// Если локально то мы нечего не указываем

// Когда мы с вами определились будем устанавливать мы локально или глобально след этапом нам необходимо так же указать флаг который значит как этот пакет вообще влияет на наш проект, тоесть используется он только при разработке либо импользуется он при работе нашего проекта и делается это двумя разными командами

//Например наш json-server будет работать только при разработке это такая тестовая фича которая позволит нам как и json placeholder обращятся с таким фейковым backendom и тестировать весь наш функционал поэтому для такого функционала мы прописываем --save-dev

//Соответственно бывает и обратная ситуация кода вещи библиотеки  какие то пакеты которые мы включаем во внутрь нашего проекта они используются не для разработки а именно для работы проекта внутри, классичесий пример это библиотеки jquery react и другие тоесть те которые составляет костяк вашего приложения или веб сайта, и вот для этого чтобы сказать четко что такие зависимости используются внутри нашего проекта мы прописываем просто ключик --save

//папку node_modules вообще никогда не трогайте это npm пакеты которые работают с node js именно оттуда мы будем брать библиотеки которые мы установили в наш проект кроме того данная папка занимает довольно много места она может занимать 200 300 400 мб

// Интерейсная особенность наш файл может весить максимум  там несолкько мегабайт со всеми картинкам оптимизированными  при это у нас есть огромная пака которая весит 500мб что же с ней делать первая особенность относится к git когда вы начинаете пушить такой проект на гитхаб то нам всегда необходимо иметь файл gitignore в это файле игнора написаны все файлы и папки которые мы не должны пушить  в том числе самая главная это папка node_modules. Поэтому файл gitignore обязательно должен быть в таких проектах где лежит  node.js

//Если мы устновили проект а там нет node_modules мы просто записвывем npm i если есть package.json в котором установлены эти пакеты то все сразу установиться

//package.lock.json по фатку здесь просто записаны мини зависимости которые в больших пакетах которую мы устнавливаем

//JSON-server это простой сервер по работе как нестранно с JSON файлами когды мы их можем использовать как маленькую базу данных причем здесь будут работать многоие методы в том числе и post пока что с настоящим бэкендом мы не можем работать но с эмулируем его при помощи вот такого способа \
//Чтобы запустить json-server пишем эту команду npx json-server --watch db.json