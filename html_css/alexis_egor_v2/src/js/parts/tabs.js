var navItem = document.querySelectorAll('.team__boxes .box');
var tabItem = document.querySelectorAll('.team__tabs .tab');
showContent(0);
document.querySelector('.team__boxes').onclick = function (e) {
  var target = e.target;
  hideContent();
  console.log('target => ' + target);

  for (i = 0; i < navItem.length; i++) {

    if (target === navItem[i]) {
      console.log('target => ' + target);
      console.log('navItem[i] => ' + navItem[i]);
      showContent(i);
      //console.log(i);
    }
  }
};

function showContent(index) {
 tabItem[index].classList.add('show')
}
function hideContent() {
  for (i = 0; i < navItem.length; i++) {
    tabItem[i].classList.remove('show')
  }
}


// console.log(navItem);
// console.log(tabItem);
