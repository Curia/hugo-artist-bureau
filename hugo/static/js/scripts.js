'use strict';

console.log("Find me in src/js/scripts.js");

var $preload = document.querySelector('.preload');
var $preloadTitle = $preload.querySelector('.preload__title');

function splitTitle(title) {
    var text = title.textContent;
    title.innerHTML = text.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
}

document.addEventListener("DOMContentLoaded", function () {
    splitTitle($preloadTitle);
});
//# sourceMappingURL=scripts.js.map
