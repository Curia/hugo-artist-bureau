const $preload = document.querySelector('.preload');
const $preloadTitle = $preload.querySelector('.preload__title');

function splitTitle(title){
    const text = title.textContent;
    title.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
}

document.addEventListener("DOMContentLoaded", function() {
    splitTitle($preloadTitle)
});
