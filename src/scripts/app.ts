let params = new URLSearchParams(window.location.search)
let paramsWiki: any;
window.setInterval(() => {
	paramsWiki = params.get("wiki");
}, 10);
