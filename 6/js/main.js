const buttonMenuClose = document.querySelector('.main-nav__close');
// const menu = document.querySelector('.main-nav__list');
const menu = document.querySelector('.site-list');

// Если JS подключен меню закрывается
menu.classList.add('main-nav__list');
menu.classList.add('main-nav__list--close');
buttonMenuClose.classList.replace('main-nav__close', 'main-nav__open');

const buttonMenu = document.querySelector('.main-nav__open');

// Переключение мобильного меню
buttonMenu.addEventListener('click', function() {
  menu.classList.toggle('main-nav__list--open');
  buttonMenu.classList.toggle('main-nav__open');
  buttonMenu.classList.toggle('main-nav__close');
});
