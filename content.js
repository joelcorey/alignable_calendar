let button = document.getElementsByClassName('btn-v2 btn-v2--40 btn-v2--full btn-v2--secondary ')[2]

button.addEventListener('click', function(event) {
    event.preventDefault();
	event.stopPropagation();

	console.log("You clickey clickeyed the button! HURR DURR!");
});
