import anime from 'animejs'

// Set up Canvas
const c = document.getElementById("menuc");
const ctx = c.getContext("2d");
const $menuOpen = document.querySelector('.header__nav-mobile__open');

const resizeCanvas = () => {
    let cW = window.innerWidth;
    let cH = window.innerHeight;
    c.width = cW * devicePixelRatio;
    c.height = cH * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
};


const starterCircle = () => {
    
    var centerX = $menuOpen.getBoundingClientRect().left + $menuOpen.getBoundingClientRect().width / 2;
    var centerY = $menuOpen.getBoundingClientRect().top + $menuOpen.getBoundingClientRect().height / 2;
    var radius = 10;
    
    console.log(centerX, centerY);
	// define the arc path
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'rgba(125,0,0,1)';
    ctx.fill();
    ctx.save();
    console.log('circle drawn')
}

(global => {
    resizeCanvas();
    starterCircle();
})(window)