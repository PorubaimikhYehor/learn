// alert('Hello? World!');
// var name = 'Vasilij';
// var admin = name;
// console.log(admin);

// var ourPlanetName = 'Земля';
// var userName = 'Петя';

// function isInteger(num) {
//   console.log(num);
//   return ~~num === num ? true :false;
// };

// ===========================================
// console.log(isInteger(123));
// var userName = prompt('Your name?');
// alert(userName);
// ===========================================================
// var nameJS = prompt('Яка "офіційна" назва JavaScript');
// if (nameJS === 'EcmaScript') {
//   alert('Вірно')
// }else {
//   alert('Не знаєте? "EcmaScript"!')
// };
// =============================================================
// var num = prompt('Enter num');
// if (num > 0) {
//   alert('1')
// }else if (num == 0) {
//   alert('0');
// }else {
//   alert('-1');
// }

// ========================================================


// var userLogin = prompt('Login');
// console.log(userLogin);
// if (userLogin === null) {
//   alert('Вхід отменен');
// }else if (userLogin === 'Админ') {
//   var userPass = prompt('password');
//   if (userPass === null) {
//     alert('Вхід отменен');
//   }else if (userPass === 'Чорний Володар') {
//     alert('Лавскаво прошу')
//   }else {
//     alert('пароль не вірний')
//   }
// }else {
//   alert ('я вас не знаю')
// }

// ========================================================

// var a = b = 3;
// var result = (a + b < 4) ? 'Мало' : 'Много';
// console.log(result);

// // ========================================================
// var login = 'іва';
// var massage = (login == 'Вася') ? 'привет' :
// (login == 'Директор') ? 'Здраствуйте':
// (login == '') ? 'Немає логіна' : '';
// console.log(massage);
//  ========================================================
// while (true) {
//   var age = prompt ('age');
//   if (age === null) break;
//   if ((14 <= age) && (age <= 90)) {
//     alert('входить')
//   }else {
//     alert ('не входить')
//   }
// }
//  ========================================================
// while (true) {
//   var age = prompt();
//   if (age === null) break;
//   if ((age > 14) && (age <90)) {
//     alert('не входить')
//   }else {
//     alert('входить')
//   }
// }



// "" + 1 + 0      '10'
// "" - 1 + 0      -1
// true + false    1
// 6 / "3"         2
// "2" * "3"       6
// 4 + 5 + "px"    '9px'/////////////
// "$" + 4 + 5     '$45'

// "4" - 2         2

// "4px" - 2       NaN

// 7 / 0           +Infinity

// "  -9\n" + 5    "  -9\n5"  ////////////////////////
// "  -9\n" - 5    -14 ///////////////////////////
// 5 && 2          2 /////////////////////

// 2 && 5          5 /////////////////////

// 5 || 0          5 //////////////////////

// 0 || 5          5 //////////////////
// null + 1        1
// undefined + 1     NaN ///////////////////////
// null == "\n0\n"   false
// +null == +"\n0\n" true


// 1 2 3 4
// 0 1 2 3 
// for  (var i = 2; i<=10; i += 2) {
//   console.log(i);
// }

// for (var i=0; i < 3; i++){
//   console.log('number' + i + '!');
// };

// var i = 0;
// while (i < 3){
//   console.log('number' + i + '!');
//   ++i;
// }
// var num = 0;
// while (num <= 100 && num != null) {
//   var num = prompt();
// };
// console.log(num);


// do {
//   var num = prompt();
// }while(num < 100 && num != null);
// console.log(num);
// =====================================================
// for (var i = 2; i < 10; i++){
//   var count = 0;
//   for (var j = 2; j <= i; j++) {
//     if (i % j == 0){
//       count++;
//     }
//   }
//   (count == 1) && console.log(i);
// }
// =========================================================
// nextNum:
// for (var i = 2; i < 100; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) continue nextNum;
//   }
//   console.log(i);
// }
// ========================================================

// var browser = 'Chrome';

// if (browser === 'IE') {
//   alert('У Вас IE')
// }else if (browser === 'Chrome' || browser === 'Firefox') {
//   alert('asdfadfasdfasfdas')
// }else alert ('надія')


// var a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert (0);
//     break;
//   case 1 :
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3')
//     break;
// }

//===========================================

// function checkAge(age) {
//   return (age >= 18) || confirm('батьки дозволили?');
// }

// var age = 10;
// console.log (checkAge(age));

// function min(a,b) {
//   return (a < b) ? a : b;
// }
// function pow(x,n) {
//   var res = x;
//   for (var i = 1; i < n; i++) {
//     res *=x;
//   }
//   return res;
// }

function pow(x,n) {
  if (n!=1) {
    return x*pow(x,n-1);
  }else {
    return x;
  }
}

function sumTo(n) {
  if (n != 1) {
    return n+sumTo(n-1);
  }else return n;
}

function factorial(n) {
  return (n == 1) ? 1 : n * factorial(n-1);
}

function fib(n) {
  return (n <= 1) ? n : fib(n-1) + fib(n-2);
}

function fibFast(n) {
  var a = b = 1;
  if (n == 1 || n == 2) {
    b = 1;
  }else {
    for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
    }    
  }
  return b;
}

// ===============================================
// function isNum(num) {
//     return isFinite(num) && !isNaN(parseFloat(num)) ? true : false; 
//   }

// while (true){
//   var firstNum = prompt('перше число?');
//   if (firstNum === null)  break;
//   var secondNum = prompt('друге число?');
//   if (secondNum === null)  break;
//   var res = (isNum(firstNum) && isNum(secondNum)) ?
//     alert (+firstNum + +secondNum) :
//     alert ('It is not numeric');
// }
// ============NUMBER===================

// function getDecimal(num) {
//   return num - ~~num;
// }
// console.log(getDecimal(12.345));
// console.log(getDecimal(1.2));
// console.log(getDecimal(-1.2));
// console.log(0.2 + 0.1);

// function getRandom(max) {
//   return (Math.random() * max)^0
// };

// function getRandomDiapasone(min,max) {
//   return Math.round ((Math.random() * (max - min) + min))
// }
//============STRING===============================================================
// var massage = prompt ('word?');
// var arraySymbolCode = [];
// var key = prompt ('key?');
// var binarykey = key.charCodeAt(0).toString(2);
// console.log(binarykey);
// for (var i = 0; i < massage.length; i++) {
//   arraySymbolCode.push(massage[i].charCodeAt(0).toString(2)^binarykey);
// }
// console.log(arraySymbolCode);
// var result = '';
// str = '';
// for (var i = 0; i < arraySymbolCode.length; i++) {
//   result += str.fromCharCode((arraySymbolCode[i].toString(2)^binarykey));
// }
// console.log(result);
// ==========================================================
// function ucFirst(str) {
//   if (!str) return str;
//   return (str[0].toUpperCase() + str.slice(1));
// }

// function checkSpam(str) {
//   return !!(~str.toLowerCase().indexOf('viagra') || ~str.toLowerCase().indexOf('xxx'));
// }

// function truncate(str, num) {
//   if (str.length > num) {
//     return str.slice(0,19) + '...';
//   }else return str;
// };

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// ==========================================================
// var user = {};
// console.log(user);
// user.name = 'Вася';
// console.log(user);
// user.surname = 'Петров';
// console.log(user);
// user.name = 'Сергей';
// console.log(user);
// delete(user.name);
// console.log(user);

// var user2 = {};

// function isEmpty (obj) {
//   for (key in obj) {
//     return false;
//   }
//   return  true;
// }

var salaries = {
  'Вася' : 100,
  "Петя" : 300,
  "Даша" : 250,
};


//   var result = 0;
//   for (var key in salaries) {
//     result += salaries[key];
//   };
// console.log(result)

// var maxSalaries = -Infinity;
// var maxName = 'нікого немає';
// for (var key in salaries) {
//   if (salaries[key] > maxSalaries) {
//     maxName = key;
//     maxSalaries = salaries[key]
//   }
// }
// console.log (maxName);


function multiplyNumeric (obj){
  for (var key in obj) {
    if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key])) {
      obj[key] *= 2;
    }
  }
}

var menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// var styles = ['Джаз', "Блюз"];
// console.log(styles);
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length - 2] = "Класика";
// console.log(styles);
// alert(styles.shift());
// console.log(styles);
// styles.unshift('Реп','Реггі');
// console.log(styles);

// var arr = [ "Яблоко",
//             "Апельсин",
//             "Груша",
//             "Лимон"];

// function getRandomMax(max) {
//   return ((Math.random() * max) ^ 0 );  
// };
// console.log(arr[getRandomMax(arr.length)]);


// var arr = [];
// function isNum(num) {
//   return (isFinite(num) && !isNaN(parseFloat(num))) ?
//     true : false;
// };

// do {
//   var num = prompt ('num?');
//   if (isNum(num)) {
//     arr.push(+num);
//   } else break;
// } while (true);

// var sum = 0;
// if (arr) {
//   for (var i = 0; i < arr.length; i++){
//     sum += arr[i];
    
//   }
//   alert('сума: ' + sum);
// }else alert('чисел не було');

// function find(arr, str) {
//   console.log (arr.indexOf(str));
// }

// var arr = ["test", 2, 1.5, false];
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, 0); // -1


// function filterRange (arr, a, b) {

//   var result = [];
//   for (var i = 0; i < arr.length; i++ ) {
    
//     if (arr[i] >=a && arr[i] <= b) {
//       console.log(arr[i]);
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
//   return result;
// }

// var arr = [5, 4, 3, 8, 0];

// var filterArr = filterRange(arr, 3, 5);

// console.log(filterArr);


// function addClass(obj, cls) {
//   //var str = obj.className;
//   var arr = obj.className.split (' ');


//   if (arr.length == 0){
//     obj.className = cls;
//   }else if (arr.indexOf(cls) == -1) {
//     obj.className += ' ' + cls;
//   }
// }

// var obj = {
//   className: 'open menu'
// }
// console.log(obj.className);
// addClass(obj, 'new');
// console.log(obj.className);
// addClass(obj, 'open');
// console.log(obj.className);
// addClass(obj, 'me');


// console.log(obj.className);

// function camelize(str) {
//   var arr = str.split('-');
//   for (var i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     console.log(arr[i]);
//   }
//   return arr.join('')
// }

// var arr = [5, 12, 1, -10, 8];
// arr.sort((a, b) => (a > b));
// console.log(arr);



// var arr = ["HTML", "JavaScript", "CSS"];
// var arrSorted = arr.slice().sort();

// console.log(arr);
// console.log(arrSorted);

// var arr = [1, 2, 3, 4, 5];
// console.log (arr.sort((a, b) => (Math.random() - 0.5)))




// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];


// console.log(people);
// people.sort((a, b) => (a.age - b.age));
// console.log(people);

// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = arr.map((word) => (word.length));
// console.log(arrLength);

// var arr = [ 1, 2, 3, 4, 5 ];


// function sum(a) {
//   return function (b) {
//     return (a + b);
//   }
// }

// console.log(sum (5)(5));

// function makeBuffer () {
//   var text = [];
//   function buffer(piece) {
//     if (arguments.length == 0) {
//      return text.join(' ');
//     }
//     text.push(piece);    
//   }

//   buffer.clear = function () {
//     text = [];
//   }
//   return buffer;
// }
// var buffer  = makeBuffer();
// var buffer2  = makeBuffer();

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// users.sort(byField('name'));
// console.log (users);

// users.forEach(function(user) {
//   console.log ( user.name );
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//   console.log( user.name );
// }); // Маша, Вася, Петя

// function byField(field) {
//   return function (a,b) {
//     return a[field] > b[field] ? 1 : -1;
//   }
// }


// var arr = [1, 2, 3, 4, 5, 6, 7];

// function filter (arr, func) {
//   var result = [];
//   for (var i = 1; i < arr.length; i++) {
//     if (func(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   }
// }

// function inArray (arr) {
//   return function (x) {
//     return arr.indexOf(x) !=-1;
//   };
// }

// function makeArmy() {

//   var shooters = [];

//   for (let i = 0; i < 10; i++) {
//     var shooter = function() { // функция-стрелок
//       alert( i ); // выводит свой номер
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// var army = makeArmy();

// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...
// // .. все стрелки выводят 10 вместо 0,1,2...9


// var calculator = {
//   read: function () {
//     this.firstNum = +prompt ('First num');
//     this.secondNum = +prompt ('Second num');
//   },
//   sum: function () {
//     return this.firstNum + this.secondNum;
//   },
//   mul: function () {
//     return this.firstNum * this.secondNum;
//   }
// };

// calculator.read();
// alert( calculator.sum());
// alert (calculator.mul());

// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// new Date(0) - 0
// new Array(1)[0] + ""
// ({})[0]
// [1] + 1         11
// [1,2] + [3,4]   1234
// [] + null + 1
// [[0]][0][0]
// ({} + {})

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// function sum (a) {
//   return function () {

//   }
// }

