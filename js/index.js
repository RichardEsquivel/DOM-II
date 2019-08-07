//****Nav Bar***

// Logo-Heading animation to increase font size with mouseover event listener and then revert
//back to normal state with mouse leave
const buttonFunBus = document.querySelector('.logo-heading');

buttonFunBus.addEventListener('mouseover', (event) => {
	buttonFunBus.style.color = 'red';
	buttonFunBus.style.fontSize = '7.5rem';
	buttonFunBus.style.fontFamily = 'Candara';
	buttonFunBus.style.transitionDuration = '.1s';
});

buttonFunBus.addEventListener('mouseleave', (event) => {
	buttonFunBus.style.color = 'black';
	buttonFunBus.style.fontSize = '3rem';
	buttonFunBus.style.fontFamily = 'Indie Flower';
	buttonFunBus.style.transitionDuration = '.5s';
});

//****Header****

// Create funBusHeader to have blur animation appear and disapper on fun bus in the sand image on click and dbl click with
//event listener and utilizing Greensock
const funBusHeader = document.querySelector('.funBusHeader');
funBusHeader.addEventListener('mouseenter', (event) => {
	TweenMax.to(event.target, 1, {
		scale: 0.8,
		filter: 'none',
		ease: Elastic.easeOut.config(1, 0.55)
	});
});
funBusHeader.addEventListener('mouseout', (event) => {
	TweenMax.to(event.target, 0.5, {
		scale: 1,
		filter: 'grayscale(1) blur(.01px)',
		ease: Power1.easeIn
	});
});

//***Body***

const scaryText = document.querySelector('.text-content');

scaryText.addEventListener('mouseleave', (event) => {
	TweenMax.to(event.target, 2, {
		opacity: 0,
		ease: RoughEase.ease.config({ strength: 3, points: 20, randomize: true }),
		repeat: -1,
		yoyo: true
	});
});

const spookyPhoto = document.querySelector('.scaryImage');

spookyPhoto.addEventListener('click', (event) => {
	TweenMax.to(event.target, 2, {
		opacity: 0.5,
		ease: RoughEase.ease.config({ strength: 3, points: 1, randomize: false }),
		repeat: -1,
		yoyo: true
	});
});

spookyPhoto.addEventListener('mouseout', (event) => {
	spookyPhoto.src = 'img/spooky-woods.jpg';
});

//Sign Me Up Buttons Near Footer to Choose Destinations
const signMeUpBtn = document.querySelectorAll('.content-pick .btn');

signMeUpBtn.forEach((SignUp) => {
	SignUp.addEventListener('click', (event) => {
		TweenMax.to(event.target, 0.5, {
			ease: SteppedEase.config(20),
			y: -10
		});
	});
});

signMeUpBtn.forEach((SignUp) => {
	SignUp.addEventListener('mouseout', (event) => {
		TweenMax.to(event.target, 2.5, {
			ease: RoughEase.ease.config({
				template: Power0.easeNone,
				strength: 1,
				points: 20,
				taper: 'none',
				randomize: true,
				clamp: false
			}),
			y: 10
		});
	});
});
