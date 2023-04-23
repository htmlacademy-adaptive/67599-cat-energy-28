const buttonMenuClose = document.querySelector('.main-nav__close');
const menu = document.querySelector('.main-nav__list');

// Если JS подключен меню закрывается
buttonMenuClose.classList.replace('main-nav__close', 'main-nav__open');
menu.classList.remove('main-nav__list--open');

const buttonMenu = document.querySelector('.main-nav__open');

// Переключение мобильного меню
buttonMenu.addEventListener('click', function() {
  menu.classList.toggle('main-nav__list--open');
  buttonMenu.classList.toggle('main-nav__open');
  buttonMenu.classList.toggle('main-nav__close');
});
