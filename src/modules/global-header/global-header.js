import anime from 'animejs'

const $menuOpen = document.querySelector('.header__nav-mobile__open');
const $menuClose = document.querySelector('.header__nav-mobile__close');
const $nav = document.querySelector('.header__nav')

function addClickListeners() {
    $menuOpen.addEventListener("touchstart", openMenu);
    $menuOpen.addEventListener("mousedown", openMenu);

    $menuClose.addEventListener("touchstart", closeMenu);
    $menuClose.addEventListener("mousedown", closeMenu);
};

function openMenu(e) {
    $nav.classList.add('active')
}

function closeMenu(e) {
    $nav.classList.remove('active')
}

(function init() {
    addClickListeners();
})();