// hamburger


const hamburger = document.querySelector ('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// navbar-fixed
window.onscroll = function(){
    const header = document .querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav){
        header.classList.add ('navbar-fix');
    } else {header.classList.remove('navbar-fix');
}
}