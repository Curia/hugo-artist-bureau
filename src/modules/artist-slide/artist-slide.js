import fullpage from 'fullpage.js';

const pageMargin = () => (`${document.getElementById('header').clientHeight}px`);

const fullPageInstance = new fullpage('.fullpage', {
    verticalCentered: false,
    css3: true,
    paddingTop: pageMargin(),
    autoScrolling: false,
    afterResize: function(width, height){
        fullpage_api.reBuild();
    }
});