(function () {
	const burger = document.querySelector('.menu__burger');
	const menu = document.querySelector('.menu');
	const body = document.querySelector('body');
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
	
		
	});


}());