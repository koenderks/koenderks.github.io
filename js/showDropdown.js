function showDropdown() {
	const dr = document.getElementById("dropdown-toggle");
	const di = document.getElementById("dropdown-icon");
	dr.classList.toggle("show");
	if (dr.classList.contains("show")) {
		di.classList.add("rotate-forward");
		di.classList.remove("rotate-backward");
	} else {
		di.classList.add("rotate-backward");
		di.classList.remove("rotate-forward");
	}
}