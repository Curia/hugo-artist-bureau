import anime from 'animejs'

const openMenu = () => {
    const $nav = document.querySelector('.header__nav');
    const $navBackground = document.querySelector('.header__nav-background');
    const $navWrapper = document.querySelector('.header__nav-wrapper');

    if (!$nav.classList.contains('active')) {
        $nav.classList.add('active');
    }

    anime({
        targets: $navBackground,
        opacity: 1,
        height: '200vh',
        width: '200vw',
        duration: 500,
        easing: "easeOutCubic",
        complete: () => {
            anime({
                targets: '.header__nav-item',
                opacity: 1,
                duration: 500,
                easing: "easeOutCubic",
            });
        }
    })
}

const closeMenu = () => {
    const $nav = document.querySelector('.header__nav');
    const $navBackground = document.querySelector('.header__nav-background');
    const $navWrapper = document.querySelector('.header__nav-wrapper');

    if ($nav.classList.contains('active')) {
        $nav.classList.remove('active');
    }
    anime({
        targets: '.header__nav-item',
        opacity: 0,
        duration: 500,
        easing: "easeInCubic",
        complete: () => {
            anime({
                targets: $navBackground,
                opacity: 0,
                height: '0',
                width: '0',
                duration: 500,
                easing: "easeInCubic"
            })
        }
    });
}

document.querySelector('.header__nav-mobile__open').onclick = () => {
    openMenu();
};

document.querySelector('.header__nav-mobile__close').onclick = () => {
    closeMenu();
};