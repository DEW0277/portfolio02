let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

let iconTwo = document.querySelector('.icon_two')

let section = document.querySelectorAll('section')
let navLInks = document.querySelectorAll('header nav')


menuIcon.addEventListener('click', () => {
    navbar.classList.add('navbar_see')
    menuIcon.style.display = 'none'
    iconTwo.classList.add('icon2')
})

iconTwo.addEventListener('click', () =>{
    navbar.classList.remove('navbar_see')
    menuIcon.style.display = 'inline-block'
    iconTwo.classList.remove('icon2')
})

