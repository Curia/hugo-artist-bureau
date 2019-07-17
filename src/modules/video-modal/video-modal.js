import tingle from 'tingle.js';
import YouTubePlayer from 'youtube-player';

const setEvents = () => {
    const slideBackground = document.getElementsByClassName('artist-slide__background');

    for (let i = 0; i < slideBackground.length; i++) {
        const slide = slideBackground[i];
        const button = slide.getElementsByClassName('slide-background__play')[0];
        const youtubeId = button.getAttribute('data-youtube');

        button.addEventListener('click', () => {
            const vModal = new tingle.modal({
                footer: false,
                closeMethods: ['overlay', 'button', 'escape'],
                onClose: () => {
                    vModal.destroy();
                },
                onOpen: () => {
                    loadVideos(youtubeId);
                }
            });
            vModal.setContent('<div class="modal__wrapper"><div id="modal__video" class="modal__video"></div></div>');
            vModal.open();
        })
    }
}

const loadVideos = (id) => {
    let player = YouTubePlayer('modal__video');
    player.loadVideoById(id);
}

if(document.getElementsByClassName('slide-background__play').length) {
    setEvents();
}