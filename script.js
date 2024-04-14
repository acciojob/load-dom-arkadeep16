//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function domOnLoad() {
	const domText = document.createElement("p");
	domText.innerText = "DOM load success";
	document.body.append(domText);
})
