/*=============== SHOW MENU - показать меню ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Проверьте, существует ли константа открыть меню */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN - скрыть меню =====*/
/* Проверьте, существует ли константа */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}


/*=============== REMOVE MENU MOBILE - закрытие окна с меню при нажатии на элемент списка ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //Когда мы нажимаем на каждую навигационную ссылку, мы удаляем класс show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== CHANGE BACKGROUND HEADER - появление тени под header при прокрутке ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  //Если высота прокрутки превышает 80 дюймов, добавьте класс заголовка прокрутки в тег заголовка
  if(this.scrollY >= 80) header.classList.add('scroll-header'); 
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

