/*var str = 'Привіт',
  num = 123,
  flag = true,
  txt = 'true';

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));
*/
var a1 = 5 + 3;
var a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' -3;
let a10 = 75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

let height = 23;
let width = 10;
let s = height * width;
console.log(s + 'см');

 let heightC = '10м';
 let dC = '4м';
 heightC = parseInt(heightC);
 dC = parseInt(dC);
 let v = (Math.PI * dC ** 2 / 4) * heightC;
 console.log(v.toFixed(3) + ' м куб');

let n = 3;
let m = 4;
let k = (n ** 2 + m ** 2) ** 0.5;
console.log(k.toFixed(3));

var subEl = 0;
var el = 1;
document.write(el + ' ');
for (i = 1; i <= 200 ; i++) {
  var temp = el;
  el +=subEl;
  subEl = temp;
  document.write(el + ' ');
}
