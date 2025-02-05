const navBtn = document.querySelector('.navBtn');
const navbar = document.querySelector('.navbar');
const navClose = document.querySelector('.navClose');

navBtn.addEventListener('click',()=>{
    navbar.classList.add('showNavbar');
});

navClose.addEventListener('click',()=>{
    navbar.classList.remove('showNavbar');
});