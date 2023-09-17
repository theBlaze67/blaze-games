let menuBar = document.querySelector('.ri-menu-line');
let navMenu = document.querySelector('.nav-right');
menuBar.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
})