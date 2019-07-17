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
        controlsText: ["",""]
    });
}

const fullPageInstance = new fullpage('.fullpage', {
    verticalCentered: false,
    css3: true,
    paddingTop: pageMargin(),
    autoScrolling: false,
    scrollOverflow: true,
    autoScrolling: false,
    afterLoad: function(origin, destination, direction){
        //setSliderHeight();
        buildSlider();
    },
    afterResize: function(width, height){
        fullpage_api.reBuild();
    }
});