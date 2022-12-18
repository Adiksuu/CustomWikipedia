function save() {
	let Save = {
		toggled: toggled
	};
	localStorage.setItem("Saved", JSON.stringify(Save));
}
function load() {
	var SaveGame = JSON.parse(localStorage.getItem("Saved"));
	if (typeof SaveGame.toggled !== "undefined") toggled = SaveGame.toggled;
}