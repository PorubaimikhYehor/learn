/*console.log('hello');
alert('adfsdfsdf');
document.write('dosldkfa;ldkfjskldfn');
var test = 23;
document.write(test);
console.log(test);
var massage = prompt('yes?');
if (massage == 'yes') {
    console.log('true');
} else {
    alert ('no.');
}*/


/*var a = 20;
var b = typeof(a);
console.log(a,b);
console.log(b == 'number');
console.log(a == 20);
console.log(a ==30);
if ( b == 'number' && a == 20 || a ==30) {
    console.log('true');
} else {
    console.log('false');
}*/


/*var userName = prompt('How are you?');
if (userName == 'admin') {
    var adminPass = prompt ('Pasword');
    if (adminPass == 'qwerty'){
        alert('Wellcome admin');
    }else if (adminPass == null){
        alert('вход отменен');
    }else {
        alert ('пароль не верный')
    }
}else if( userName == null) {
    alert('вход отменен')
}else if (userName == 'user'){
    var userPass = prompt ('user password');
    if (userPass == 'asdfg'){
        alert('Wellcome user');
    }else if (userPass == null){
        alert('вход отменен');
    }else {
        alert ('пароль не верный')
    }
}else if( userName == null) {
    alert('вход отменен')
}else{ 
    alert('я тебя не знаю')
}*/

/*var counter = 0;
while (counter < 10){
    document.write(counter + '<br>');
    counter++;
}

for (var i=1; i<=10; i++) {
  if (i % 2 == 0) {
    console.log(i);}}
   
console.log(' ');
i = 0;
while (i < 3){
  console.log(i);
  i++;
}

var a = 2;
function test(a){
  console.log('hellp function' + ' ' + a);

}


test('1');
test(2);
test(3);

console.log(' ');
function summ(a, b) {
  var res = a + b;
  return res;
}
var summN = summ(2,2);
console.log (summ(2,2));
console.log(summN);



//спред опреторы
var name1 = 'name1';
var name2 = 'name2';
function name(name1,name2, ...rest){
  console.log(name1 + name2 + rest)
}
name('Name1','Name2','Name3','Name4')

//стрелочные функции
let sum = (a, b)=> a + b;

alert(sum(5,5));
*/
/*var age = prompt('Enter age');

function checkAge(age) {
    if (age > 18) {
        return true;
    }else {
        return confirm ('asdfsdfsdfsdf');
    }
}


if (checkAge(+age)) {
    alert ('sdfsdfsdf')
}else {
    alert('sdfs sf fsd sfs df sdf')
}*/


/*var globalVar = 'test';

var anom_func = functiion () {
    var secretVar = 'testSecretVar';
    alert('Hey' + globalVar);
}*/
/*
setTimeout(function(){
    console.log("123")
},3000);


var name = 'Egor';
var letterCount = name.length;
console.log(letterCount);

var n = 'строка';
console.log(n[1] + n[3] + n[5]);
*/
/*
var massage = prompt('Enter you word');
function firstUpperCase(str) {
    var res = str[0].toUpperCase() + str.slice(1);
    return res;
}
document.write(firstUpperCase(massage));
*/


/*var arrayList = ['test1', 'test2', 'test3','test4','test5'];
/*
for (var i = 0; i<arrayList.length; i++) {
    if (arrayList[i] == 2) {
        arrayList.push('new elem');
        console.log('sdfsdfsdf')
    }else if(arrayList[i] != 3) {
        arrayList.pop();
    }
    console.log(" ",arrayList[i]);
}
console.log(arrayList);

var massage = prompt ("user");
var arrayUser = [];
if (massage == 'admin') {
    arrayUser.push(massage);
}

for (var i = 0; i<arrayUser.length; i++) {
    console.log(" ",arrayUser[i]);
}

arrayUser.unshift('test1');
console.log(arrayUser);
arrayUser.shift();
console.log(arrayUser);

console.log(arrayList);
function test(arr) {
    arr.pop();
}
console.log( test(arrayList) );

*/


/*var str = 'test1, test2, test3';

var res = str.split(',');
console.log(res);

var arrayList2 = ['1','2','3','4'];
/*
console.log(arrayList2.join(''));

console.log(arrayList.splice(1,0,'New test1','New test2','New test4','New test5',));
console.log(arrayList);
*/
/*
var result = res.concat(2,3);
console.log(result);
var res1 = res * 2;
*/

/*var massage = prompt("some text");
var arrList = ['test','admin','user'];
if (arrList.indexOf(massage) < 0) {
    arrList.push(massage);
}else {
    alert('cool');
}
console.log(arrList);

var users = ['admin', 2];
users.forEach(function (item, i, users) {
    console.log(`${i} ${item} витягнув з масиву  ${users}`);
})
var users = [2, 1, 4, 5, 10,4,74,-25];

var result = users.filter(function(item, id, users){
  //console.log('item', item , 'id', id);
  return item > 3;
});
console.log(result);


var result = users.filter(item => item > 4);
console.log(result);

var a = ('12');
var b = (1);
var result = a.concat(b);

result.push (23, '23', 'test');

var numbers = [];
while (true) {
    var value = prompt ('Enter number');
    console.log(value);
    if (value == null || value == '' || isNaN(value)) break;
    numbers.push(+value);
}
console.log(numbers);

var result = 0;

for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
}

numbers.forEach(item => result += item);

alert(result);


//task 2==================================
var arr = undefined;

//var value = prompt('value');

var find = function (arr, str) {
    return arr ? arr.indexOf (str) : 'не пашет'
}
console.log(find (arr, 'a'));


//-===============================================================
var arr = ['aaa','dog','room','ar'];
var result = arr.filter(item => item.length === 3);
console.log(result);
//-===============================================================


var a  = ['1','2'];
var b = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
];
b[1].push('new element');
b[1][1] = 'str';

arr = ['test1','test2'];
arr.push('new element');
arr.splice(-2,1,'banan');
alert (arr.shift());
//-===============================================================



var arr =  [1,1,1,1,5,6,7,];
var a = 0;
arr.filter((item, id) => {
    if (id % 2 && item % 2) {
        a++
    }
})
console.log(a);
*/

/*=================================================*/
/*
function name() {
    console.log("name", this);
}

var test = {
    q1: 'value',
    q2: 234,
    q3: [1,2,3,4,5],
    color: 'red',
    getName: function() {
        console.log('321',this.color)
    }
};
var test2 = {
    title: 'value',
    q2: 234,
    q3: [1,2,3,4,5],
    colors: ['red','blue','white'],
    showList: function() {
       this.colors.forEach(
            colors => console.log(this.title + ' ' + colors)
        );
    }
};
console.log(test);
for (var key in test) {
    console.log(`key => ${key} value: ${test[key]}`)
}
console.log(Object.keys(test));
console.log(Object.keys(test).length);

var link = test;
link.q1 = '123';
console.log(link);
console.log(test);
test.getName();
test2.showList();
*/

/*=================================================*/

/*
document.write('screen.width => ' + screen.width + '<br/>');
document.write(`screen.height => ${screen.height} <br/>`);
document.write(`navigator.userAgent => ${navigator.userAgent}<br/>`);
document.write(`navigator.platform => ${navigator.platform}<br/>`);
document.write(`location.href => ${location.href} <br/>`);
document.write(`location.hostname => ${location.hostname} <br/>`);
document.write(`location.pathname => ${location.pathname} <br/>`);
document.write(`location.protocol => ${location.protocol}<br/>`);


document.body.style.background = 'green';
*/

/*=================================================*/
/*
var users = {
  'vasya': 100,
  'petya': 200,
  'petya2': 200,
}
var sum = 0;
for (var name in users) {
  sum += users[name];
};
console.log(sum);
*/

/*=================================================*/

/*
var users = {
  'vasya': 100,
  'petya': 200,
  'petya2': 200,
}

var max = -Infinity;
var maxKey;

for (var name in users) {
  //console.log(users[name] + ' ' + max)
  if(max < users[name]) {
    max = users[name]
    maxKey = name;
  }
}
console.log(`самое большое число => ${max} у ${maxKey}`);
*/

/*=================================================*/
/*
var users = {
  'vasya': 100,
  'petya': 200,
  'petya2': 'sfs',
}

var arr = [];
var i = 0;

for (var key in users) {  
  if (+users[key]) {
    arr [i] = users[key] * 2;
    i++;
  }
}

console.log(arr);
*/
/*
var users = {
  'vasya': 100,
  'petya': 200,
  'petya2': 'sfs',
}
var sum = [];

function isSum(obj) {
  for (var key in obj) {
    if (typeof (obj[key]) === 'number') {
      obj[key] *= 2;
      sum.push(obj[key]);
    }
  }
}
console.log(users);
isSum(users);
console.log(users);
*/
//===================================================================
/*
var arr = [
  {key: 'test', value: 'value1'},
  {key: 'test2', value: 'value2'},
  {key: 'test2', value: 'value3'},
];
var values = [];

function isResult(arr, search) {
  arr.forEach((value,elem) => {
    //console.log(arr[elem].key + '=>' + arr[elem].value);
    if (arr[elem].key === search) {
      values.push(value.value);
      //console.log(value.key + '=>' + value.value);
    }
  });
}


isResult(arr, 'test2');
console.log(values);
*/
//===================================================================
/*
var btn = document.querySelector('.btn');
console.dir(btn);
*/

//===================================================================


/* =======do not work==========

var info1 = {
    name:"sdfsdfsdf",
    type: 'sdfsdfsdf',
    something: 'sdfsdfsdfsf',
}
var info = JSON.stringify(info1);
console.log(info1);
console.log(info);


var result = JSON.parse(info);
console.log(result);
var res = [];
let test = fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => getPosts(json.slice(0,10)))

  console.log('test => ' + test);

  getPosts = data => {
      data.map(item => {
          console.log(item);
          var div = document.createElement('div');
          div.innerHTML(item);
      })
  }

  */


// var navItem = document.querySelectorAll('.head a');
// var tabItem = document.querySelectorAll('.tab');
// showContent(0);
// document.querySelector('.head').onclick = function(e) {
//   var target = e.target;
//   hideContent();
//   for (var i = 0; i < navItem.length; i++){
//     if (target === navItem[i]) {
//       showContent(i)
//   }
//   console.log(target);
// }
// }
// function hideContent() {
//   for (var i = 0; i < tabItem.length; i++){
//     tabItem[i].classList.remove('show');
//   }
  
// }

// function showContent(index) {
//   tabItem[index].classList.add('show');
//     //console.log(index)
// }


var  [test1, test2] = ['123', '321'];

function qqq ({user}) {
  const {
    name,
    age,
  } = user;
  console.log(name);
}

