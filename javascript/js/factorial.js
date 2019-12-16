var testNum = true;
while (testNum) {
  var num = prompt ('Введіть число більше за "0":');
  if (typeof(num) == 'object') {
    alert('На все добре');
    testNum = false;
  }else if (num == '') {
    alert('Забув ввести число...');
  }else {
    num = +num;
    if (isNaN(num)) {
      alert ('Це не число...')
    }else if (num <= 0){
      alert ('Треба більше ніж "0"')
    }else {
      testNum = false;
      var res = 0;
      for (var i = 1; i <= num; i++) {
        res +=i;
      };
      alert ('Відповідь: ' + res);
    } 
  } 
};
