import fullpage from 'fullpage.js';
import YouTubePlayer from 'youtube-player';

const setEvents = () => {
    const slideBackground = document.getElementsByClassName('artist-slide__background');

    for (let i = 0; i < slideBackground.length; i++) {
        const slide = slideBackground[i];
        const button = slide.getElementsByClassName('slide-background__play')[0];
        const video = slide.getElementsByClassName('slide-background__video')[0];
        const youtubeId = button.getAttribute('data-youtube');

        button.addEventListener('click', () =>{
            button.classList.add('active');
            loadVideos(youtubeId, video);
        })
    }
}

const loadVideos = (id, target) => {
    let player = YouTubePlayer(target);
    
    target.classList.add('active');
    player.loadVideoById(id);
}

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

setEvents();