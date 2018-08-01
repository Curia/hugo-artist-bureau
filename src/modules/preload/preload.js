import anime from 'animejs'

const $preload = document.querySelector('.preload');
const $preloadTitle = $preload.querySelector('.preload__title');

const splitTitle = (title) => {
    const text = title.textContent;
    title.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<div class='preload__title-letter' style='position:relative;display:inline-block;'><div style='position:relative;display:inline-block;'>$&</div></div>");
    animateIn();
}

const animateIn = () => {
    anime({
        targets: '.preload__title-letter div',
        //translateX: -100,
        opacity: 0,
        duration: 500,
        easing: 'easeInQuad',
        delay: function(el, i) {
            return 100 + 30 * i;
        },
        complete:() => {
            anime({
                targets: '.preload__block-background',
                height: 0,
                duration: 500,
                easing: 'easeInQuad'
            });
        }
    });
}

document.onreadystatechange = function () {
    splitTitle($preloadTitle)
}