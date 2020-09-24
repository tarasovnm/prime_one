function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();

var menu = document.querySelector('.main-nav');
var menuToggle = document.querySelector(".burger");
var pageBody = document.querySelector('body');

menuToggle.addEventListener('click', function (evt) {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  pageBody.classList.toggle('lock');
});