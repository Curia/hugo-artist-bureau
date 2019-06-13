import fullpage from 'fullpage.js';

const offsetContent = () => {
    const $header = document.getElementById('header').clientHeight;
    const $contentBody =  document.getElementById('body');
    $contentBody.style.paddingTop = `${$header}px`;
}

const pageMargin = () => (`${document.getElementById('header').clientHeight}px`);

const fullPageInstance = new fullpage('.fullpage', {
    navigation: true,
    verticalCentered: false,
    css3: true,
    paddingTop: pageMargin(),
    afterResize: function(width, height){
        fullpage_api.reBuild();
    }
});