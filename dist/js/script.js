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
};

window.addEventListener('click', function (e){
    if ( e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark-toggle
const darkToggle = document .querySelector('#dark-toggle');
const html = document .querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// posisi toggle untuk dark mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }