console.log('test finished');

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.textContent = 'Hello, World!';
});
// Вывод в Консоль
console.log ('Hello , from JS!');
// Вводим переменную и её имя.
let userName = 'Ярик';
// передаем значение переменной в консоль.
console.log (userName);
// Новый стандарт ES6

 // let - переменная (могут менять своё значение на протяжении работы программы)

 userName = 'Бог Js'
 console.log(userName);


 // const - константа (не могут менять своё значенние на протяжении работы программы)
// зачастую Работы пишем в const, но когда понимает что переменная изменит своё значение меняем на let

const yearOfBirth = 1990;
// yearOfBirth = 2000; (выдаст ошибку и весь остальной код не будет работать (из-за этой ошибки))


 // Старый стандарт ES5
 // var - переменная

 // лучше использывать новый стандарт

 /* --------------------------------------- */ // пример переменнный (без равно (не даём значение))
 // с const нельзя.
 let name , age ; //показываем что именно такие переменные будут использываться в дальнейшём
 name = 'Yarik';
// const proffesion; сразу выдаст ошибку (отсутствует инициализация при объявлении константы)
//proffesion = footballer; ибо потом (как в примере показано) присвоить ошибку нельзя.
//при объявление константы мы сразу же должны присвоить ей значение (=)


//var - аналог let (может менять своё значение на протяжении всей программы)

// функциональная область видимости var

function  sum () {
   var nameOfSumm = 'сумма' 
   console.log (nameOfSumm) //увидем , потому что переменная внутри функции
}
// переменнную var вне функции  не увидем.(cуществует только в функции)
sum ();// выозов будет с 40 строки
//console.log (nameOfSumm) //не увидем  потому что переменная nameOfSumm существует только в функции.

//область видемости внутри блока кода. выглядит вот так :
{
let = userName1 = 'Komik'
console.log (userName1)
}



// Строка - (текст)(одно слово, фраза, предложение , абзац, хоть целая книга)
// это можно понять по ''"". пример = let userName = 'yarik'; (строка)
// числа -  пишутся без '' "". пример = let age = 30; (число)
// Логическое значение true/false (правда,ложь) используется для проверки каких либо условий (проерка)
//let isMarried = true; 

//Динамическая типезация - когда мы объявляем переменную нам не нужно говорить заранее значение переменной (кокой тип данных она будет содержать)
//пример
let someVariable = 'Some value'; //сейчас переменная someVarible string (строка)
someVariable = 50; // сейчас типа number (число)
someVariable = true // становится типа Boolean (логическое значение)

 // пример плохого нейминга (именование переменной)
 //let u = 'kirill';

 //пример хорошего нейминга
 // let userName = 'kirill' по имени переменной можно понять, её значение.
  
 //значение null
  //null -когда хотим сбросить значение переменной. пример
  let ageWithNull = 32;
  ageWithNull = null;
  console.log (ageWithNull)

  // значение undefined - значение не было присвоено или не определено.( объявили переменнную но не задали значения)
  let userNameUndef; // будет undefined 
  console.log (userNameUndef) // пернеменная объявлена но значение не установлено.
  // если хотим сьросить значение то лучше писать null чем undefined

  //оператор typeof -позволяет определить тип переменной
  userName = 'Yurik'; // изменил значение переменной userName
  console.log (typeof userName); // увидим stritg (строка) 
  userName = 33; //  увидим number
  console.log (typeof userName);
  userName = true  // увидим boolean (логический тип значений)
  console.log (typeof userName);

/*
Операторы сравнеения
> , <, >= , <= - больше, меньше , больше или равно , меньше или равно.
== - нестрогое сравнение
=== - строгое сравнение 
!= нестрогое неравненство
!!== строгое неравенство
*/

console.log (10 > 5) // выведет true 
console.log (20 > 80) // выдаст false
//как это работает? сначала происходит сравнение , после подставляется вместо нашего сравнения в зависимости от исхода
//true или же false 
//console.log (10 > 5); => console.log (true); аналогично с false
let result /* результат */ = 10 > 5
console.log (result); // true

console.log ('5' == 5); //true сравнивает только значение
console.log ('5' === 5) //false сравнивает и значение и типы
//console.log ('5' = 5) одно равно - опирация присвaение.( как переменным вводим параметры)
// при опирации присваивание всегда выхолит true

/*  ------------------------------------
if (условие){
код который будет выведен если условие верно
}

else(условие) {
 код который будет выполнен если условие не верно
}
*/
const time = 20; //записываем время.
if (time <= 12) { // если время меньше или равно 12 то будет доброе уро 
    console.log ('доброе утро');
} else if (time >= 12 && time <18){//если тайм больш или равно 12 && (и) время меьше 18 то будет {
    console.log ('добрый день');
}
else {//если же больше 18 то добрый вечер
    console.log ('добрый вечер');
}  
 /*else { // если условие выполненно не верно, и будет больше 12 , то будет добрый день
    console.log ('Добрый день')
}
*/
//дополнительное условие через else if 


/* -----------------------------------
логические апператоры
 && - условие и, и первое и 2 условие должны быть истинными чтобы блок кода выполнился
|| - логическое или 
!true - логическое НЕ
*/ 
/* ----------------------------- 
Конкатенация строк и шаблонов стрроки 
*/
//console.log ( 'Привет, Марк! Как твои дела?') чтобы получить это нужно 
let gretting = 'Привет, yarik!';
let howAreYou = ' Как твои дела? ';
let sayHi = gretting + howAreYou;
console.log(sayHi) // простое сложение переменных.
userName = 'yarik'
// Пример с интерполяцией ` ${} `
// интерполяция - под переменнную встанет её значение
console.log (`Привет, ${userName} ! Как твои дела?`)

// Функции. называть глаголом
function  sayHiFunction (/*нужны для объявления параметров*/) { //блок кода который будет выполняться когда функция запускается
    console.log (' Привет, дорогой пользователь')
}
sayHiFunction (/* вызываем .запускаем функцию (круглые скобки + имя функции)*/)

// параметры и аргументы для функций

const sayHiFunction1 = function (yourName) {

console.log (`Привет, ${yourName}! Как твои дела? `);
}
sayHiFunction1 (/* любое имя(к параметр\аргументуу your name) которое можно сюда написать */
'yorik')
sayHiFunction1 ('komarik')
sayHiFunction1 ('komarikkokoko')
// ------------------ return чтобы функция возваращала какое либо значение на своё место
const sumInFunction = function (a, b) {
    const resultFunction = a + b;
   // console.log (resultFunction)
   
   return resultFunction; // в консель не высветиться, это не вывод в консоль. можно запустить из консоли. функция работает ( возвращает)
   // после return функция завершает свою работу
}
sumInFunction (20, 43) //только с консоль лог внутри без ретёрна
let res = sumInFunction (10, 5)
console.log (res) 
// функция как аругмент
const sumInFunctionArgument = function (a, b) {
return a + b;
}
console.log(sumInFunctionArgument(31, 22));
const resultFunctionsum = sumInFunctionArgument (sumInFunctionArgument(32,32) ,sumInFunctionArgument (32, 32))
console.log (resultFunctionsum)
const sume = function (funk) {
    let x = 15;
    let y = 29;
    let resultSume = x + y
    console.log(resultSume)
}
sume (sumInFunctionArgument)
/* --------------------------------------- 
стрелочная функция
*/
const arrFunction = (yourName) => {
    console.log(`привет любимая ${yourName} как твои дела?`)
}
arrFunction ('nosik')
 // 3 варианта
 const arrsum = (a, b) => {
    const arrresult = a + b;
    return arrresult 
 }


 arrsum (4, 7)
 const arrsum1 = (a, b) => {
    return a + b
 }

 const arrdif = (a, v) => a - v
 /*
 как пользоваться гитом?
 1 проверям свой ssh ключ 
 ssh -T git@github.com
 если приветствует гит = то всё ок.
 если - нет просит подтверждение - то пишем то что просит.
 если ключа нет пишем
 ssh-keygen -t rsa -b 4096
 дальше ничего не меняем он спрашивает куда сохранить
 просит пароль тоже игнорируем. и 3 раз просто энтер.
 cat .ssh/id_rsa.pub || cat ./.ssh/id_rsa.pub
 после чего вылезет набор символов .
 после заходим на гит хаб, настройки, ключи. нажимаем nev ssh key после даем название (пример (аттестация))
2 все задачи решаем в файле индех js.
в редме правила и чем можем пользоваться.
3 
зеленая кнопка код ssh копируем. 
после чего в терминали пишем git clone  копируем репозиторий
после чего лс, и переходим в папку с помощью cd 
после чего снова лс
cat makefile
npm ci -установка плагинов (в терминале вс)
npm test - проверка тестирование нашего задания
npm lint -покажет где ошибки
npm lint-fix -уберёт ошибки
1 комана - make instal ОБЯЗАТЕЛЬНО
Появилась команда где содержится нод модулс (через лс проверить)
code index.js  открыли файлик 
в самчтобом конце пишем export и туда все названия функций
чтобы запустить файл node index.js 
 -----
 git add -A
 git commit -n "task 1"
 git push
 обновить репозиторий появится коммит таск 1. делать пуш после каждого задания.
 ----
 ..1 что мне дано? (аргументы)
 ..2 что от меня хотят?
 ..3 как мне это сделать
 */
/*пример 1 задания export const getSum = (num1, num2) => (num1 + num2);

 пример 2 задания export const getSmallestNumber = (num1, num2) => (Math.min(num1, num2));
 
 пример 3 задания export const castBoolean = (value) => {
   if (value) {
     return true;
   }
   return false;
 };
пример 4 задания  export const capitalize = (str, charIndex) => {
   if (charIndex < 0 || charIndex > str.length) {
     return str;
   }
   return (
     str.slice(0, charIndex)
   + str.charAt(charIndex).toUpperCase()
   + str.slice(charIndex + 1)
   );
 };
 
 пример 5 заданияexport const countCapitalLetters = (str) => {
   let count = 0;
   for (let i = 0; i < str.length; i += 1) {
     if (str[i] === str[i].toUpperCase() && str[i] !== ' ') {
       count += 1;
     }
   }
   return count;
 };
 */