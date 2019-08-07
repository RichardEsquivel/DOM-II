//****Nav Bar***

//This action will prevent the nav bar from reloading the page as is its default property

const navBarPrevent = document.querySelectorAll('.nav .nav-link');

navBarPrevent.forEach((reloadNo) => {
	reloadNo.addEventListener('click', (event) => {
		event.preventDefault(event);
	});
});
//This will cause the background of the body of the page to turn dark red once left button is clicked
const darkStyle = document.querySelector('body');

darkStyle.addEventListener('contextmenu', (event) => {
	darkStyle.style.backgroundColor = '  #990000';
	darkStyle.style.transitionDuration = '2s';
});

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

//Text that will flash and eventually disappear next to photo
const scaryText = document.querySelector('.text-content');

scaryText.addEventListener('mouseleave', (event) => {
	TweenMax.to(event.target, 2, {
		opacity: 0,
		ease: RoughEase.ease.config({ strength: 3, points: 20, randomize: true }),
		repeat: -1,
		yoyo: true
	});
});

//SpookyPhoto that flashes and pulses when you click on it and then when you mouse out in changes to another image
const spookyPhoto = document.querySelector('.scaryImage');

spookyPhoto.addEventListener('click', (event) => {
	TweenMax.to(event.target, 2, {
		opacity: 0.5,
		ease: RoughEase.ease.config({ strength: 3, points: 1, randomize: false }),
		repeat: -1,
		yoyo: true
	});
});
// SpookyPhoto changing to another image with mouseout
spookyPhoto.addEventListener('mouseout', (event) => {
	spookyPhoto.src = 'img/spooky-woods.jpg';
});

//This event listener causes the image to pulse and shake on load of the window and when you double click it changes
const spookyCyclePhoto = document.querySelector('.spookyCycle');

spookyCyclePhoto.addEventListener('load', (event) => {
	TweenMax.to(event.target, 0.01, { x: '+=5', yoyo: true, repeat: -1 });
	TweenMax.to(event.target, 0.01, { x: '-=5', yoyo: true, repeat: -1 });
	spookyCyclePhoto.style.borderMargin = '30px';
});

spookyCyclePhoto.addEventListener('dblclick', (event) => {
	spookyCyclePhoto.src = 'img/still-clown.jpg';
});

//This banner photo at the bottom changes when you try and drag it to a picture of a road to nowhere
const noChoicePhoto = document.querySelector('.noChoiceImg');

noChoicePhoto.addEventListener('drag', (event) => {
	noChoicePhoto.src = 'img/nowhere-road.jpg';
});

//*** Near the Footer Sign Up Buttons

//Sign Me Up Buttons Near Footer to Choose Destinations that wiggle up and down using greensock Tween max then change background to black
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

//**Stopping propogation on a button
signMeUpBtn.forEach((SignUp) => {
	SignUp.addEventListener('contextmenu', (event) => {
		SignUp.style.backgroundColor = 'black';
		SignUp.style.transitionDuration = '.5s';
		event.stopPropagation(event);
	});
});
