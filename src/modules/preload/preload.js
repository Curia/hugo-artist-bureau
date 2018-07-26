const $preload = document.querySelector('.preload');
const $preloadTitle = $preload.querySelector('.preload__title');

function splitTitle(title){
    const text = title.textContent;
    title.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<div style='position:relative;display:inline-block;'><div style='position:relative;display:inline-block;'>$&</div></div>");
}

document.onreadystatechange = function () {
    splitTitle($preloadTitle)
}