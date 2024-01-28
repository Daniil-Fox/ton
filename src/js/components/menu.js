const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuWindow = document.querySelector('.mobile-menu__window')
const burger = document.querySelector('.header__burger')
const close = document.querySelector('.mobile-menu__close')
console.log('asdasd');

burger.addEventListener('click', e => {
  e.preventDefault()

  mobileMenu.classList.toggle('active')
})

mobileMenu.addEventListener('click', e => {
  e.stopPropagation()
  mobileMenu.classList.remove('active')
})
close.addEventListener('click', e => {
  e.stopPropagation()
  mobileMenu.classList.remove('active')
})

mobileMenuWindow.addEventListener('click', e => {
  e.stopPropagation()
})
