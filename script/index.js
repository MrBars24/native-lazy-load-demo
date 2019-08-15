if ('loading' in HTMLImageElement.prototype) {
	
} else {
	// Dynamically import the LazySizes library
	let script = document.createElement("script");
	script.async = true;
	script.src =
		"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
	document.body.appendChild(script);
}