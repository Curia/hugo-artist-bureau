import fullpage from 'fullpage.js';
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

const pageMargin = () => (`${document.getElementById('header').clientHeight}px`);

const buildSlider = () => {
    var slider = tns({
        container: '.photo-slider',
        items: 1,
        center: true,
        loop: true,
        autoHeight: true,
        nav: false,
        //controls: false
    });
}

const isPortrait = (img) => {
    var w = img.naturalWidth || img.width,
        h = img.naturalHeight || img.height;
    return (h > w);
}

const setSliderHeight = () => {
    const imgArr = document.querySelectorAll('.tns-lazy-img');
    const slideBody = document.querySelector('.artist-slide__body').clientHeight;
    const slideTitle = document.querySelector('.artist-slide__heading').clientHeight;

    for (let i = 0; i < imgArr.length; i++) {
        const img = imgArr[i];

        isPortrait(img) ? (
            //img.style.height = `${slideBody - slideTitle - 30}px`
            img.style.height = 'auto',
            img.style.width = '100%'
        ) : (
            img.style.height = 'auto',
            img.style.width = '100%'
        )
    }
    buildSlider();
}

const fullPageInstance = new fullpage('.fullpage', {
    verticalCentered: false,
    css3: true,
    paddingTop: pageMargin(),
    autoScrolling: false,
    scrollOverflow: true,
    autoScrolling: false,
    afterLoad: function(origin, destination, direction){
        setSliderHeight();
    },
    afterResize: function(width, height){
        fullpage_api.reBuild();
    }
});