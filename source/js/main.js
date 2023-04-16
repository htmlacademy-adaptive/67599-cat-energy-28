const buttonMenu = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');

// Переключение мобильного меню
buttonMenu.addEventListener('click', function() {
  menu.classList.toggle('main-nav__list--open');
  buttonMenu.classList.toggle('main-nav__toggle');
  buttonMenu.classList.toggle('main-nav__toggle--close');
});




