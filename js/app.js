// top btn 



const topBtn = document.querySelector('.top-btn')

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset


    if (scrollHeight > 2000) {
        topBtn.classList.add('show-top-btn')
    } else {
        topBtn.classList.remove('show-top-btn')
    }

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            left: 0,
            top: 0
        })
    })
})






//sliding text

var style = document.createElement('style')
var position = 'right'

style.innerHTML = `
@keyframes my-animation{

0%{${position}: -${document.querySelector('.text').offsetWidth + 10}px}
100%{${position}: 100%;}
}`


document.head.append(style)
















// navtoggle 

const navLinks = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')
const bars = document.querySelector('#bars')

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-links')
    bars.classList.toggle('fa-xmark')
})














// swiper 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});









//date 
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()