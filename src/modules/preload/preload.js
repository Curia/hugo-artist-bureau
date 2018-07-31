import anime from 'animejs'

const $preload = document.querySelector('.preload');
const $preloadTitle = $preload.querySelector('.preload__title');

function splitTitle(title) {
    const text = title.textContent;
    title.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<div class='preload__title-letter' style='position:relative;display:inline-block;'>$&</div>");
    animateIn();
}

function animateIn() {
    anime({
        targets: '.preload__title-letter',
        translateY: [0,-100],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 100 + 30 * i;
        }
    });
}


document.onreadystatechange = function () {
    console.log('page loaded')
    splitTitle($preloadTitle)
}