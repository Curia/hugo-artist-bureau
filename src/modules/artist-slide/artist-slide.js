import fullpage from 'fullpage.js';

const offsetContent = () => {
    const $header = document.getElementById('header').clientHeight;
    const $contentBody =  document.getElementById('main');
    $contentBody.style.marginTop = `${$header}px`;
}

const fullPageInstance = new fullpage('.fullpage', {
    navigation: true,
    afterResize: function(width, height){
        offsetContent(); 
    },
    afterRender: function(){
        offsetContent(); 
    }
});