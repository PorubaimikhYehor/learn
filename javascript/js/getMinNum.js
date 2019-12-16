function insertNumber() {
  var testNum = true;
  while (testNum) {
    var num = prompt ('Введіть число');
    if (typeof(num) == 'object') {
      alert('На все добре');
      testNum = false;
    }else if (num == '') {
      alert('Забув ввести число...');
    }else {
      num = +num;
      if (isNaN(num)) {
        alert ('Це не число...')
      }else {
        testNum = false;
        return num;      
      } 
    }
  }
}

function getMinNumbers (a,b) {
  var res = a;
  if (a > b) {
    res = b;
  }
  return res;
}
var firstNum = insertNumber();
if (firstNum != undefined) {
  var secondNum = insertNumber();
  if (secondNum != undefined) {
    var minNum = getMinNumbers(firstNum, secondNum);
    alert ('Найменше число: ' + minNum);
  }
}
