if (document.querySelector(".intro-overlay")) {
	const overlay = document.querySelector(".intro-overlay");
	const refUrl = document.referrer;
	console.log(refUrl);
	if (refUrl.includes(window.location.hostname)){
		overlay.classList.add("disable");
	}
  overlay.addEventListener(
    "click",
    function(event) {
      event.preventDefault();

      overlay.classList.remove("active");
    },
    false
  );
}
