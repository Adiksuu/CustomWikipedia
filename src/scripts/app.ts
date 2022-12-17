let params = new URLSearchParams(window.location.search)
let paramsWiki: any;
window.setInterval(() => {
	paramsWiki = params.get("wiki");
	if (myElement.classList.contains("dark")) {
		toggler.classList.replace("fa-moon", "fa-sun");
	} else {
		toggler.classList.replace("fa-sun", "fa-moon");
	}
}, 10);
