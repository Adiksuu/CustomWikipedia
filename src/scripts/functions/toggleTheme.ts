let toggled: boolean = false;

function toggleMode() {
	if (toggled == false) {
		toggled = true;
	} else {
		toggled = false;
	}
	save();
}
// window.setInterval(() => {
// 	if (myElement.classList.contains("dark")) {
// 		toggled = true;
// 	} else {
// 		toggled = false;
// 	}
// }, 10)

window.setInterval(() => {
	if (toggled == false) {
		toggler.classList.replace("fa-sun", "fa-moon");
		myElement.classList.remove('dark');
	} else {
		toggler.classList.replace("fa-moon", "fa-sun");
		myElement.classList.add("dark");
	}
}, 10)