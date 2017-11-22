(function () {
	// body...
	console.log('Bookmarklet starting');
	let paragraph = document.getElementsByTagName('p');
	for (let i = 0; i < paragraph.length; i++) {
		paragraph[i].innerHTML = 'kitten';
	}
})();

// (function() {let script = document.createElement('script');script.src = 'bookmarklet.js';document.body.appendChild(script);})();
