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



/*=============== QUESTIONS ACCORDION - кликабильность ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem!== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.questions__content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }
  else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}



/*=============== SCROLL SECTIONS ACTIVE LINK - перемещение по активным ссылкам ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP - кнопка наверх ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  //Если высота прокрутки превышает 400 метров, добавьте класс "показать прокрутку" в тег "а" с классом "сверху прокрутки".
  if(this.scrollY >= 400) scrollUp.classList.add('show-scroll');
  //убрать кнопку наверх в диапозоне 400
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== DARK LIGHT THEME - темная тема ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Ранее выбранная тема (если выбран пользователь)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Мы получаем текущую тему интерфейса, проверяя класс темной темы
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Мы проверяем, выбрал ли пользователь ранее тему
if (selectedTheme) {
  // Если проверка выполнена, мы спрашиваем, в чем была проблема, чтобы узнать, активировали мы или деактивировали темную
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Активируйте/деактивируйте тему вручную с помощью кнопки
themeButton.addEventListener('click', () => {
    // Добавление или удаление темной темы/значка
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Мы сохраняем тему и текущую иконку, которую выбрал пользователь
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})