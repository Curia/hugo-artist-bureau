'use strict';

console.log("Find me in src/js/scripts.js");

var $preload = document.querySelector('.preload');
var $preloadTitle = $preload.querySelector('.preload__title');

function splitTitle(title) {
    var text = title.textContent;
    title.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<div style='position:relative;display:inline-block;'><div style='position:relative;display:inline-block;'>$&</div></div>");
}

document.onreadystatechange = function () {
    splitTitle($preloadTitle);
};
//# sourceMappingURL=scripts.js.map
