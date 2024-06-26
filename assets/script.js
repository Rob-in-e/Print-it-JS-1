const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let counter = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll('.dot');
const bannertagLine = document.querySelector('.tagLines')
updateDots(counter);

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[index].classList.add('dot_selected');
}

function next() {
    counter = (counter + 1) % slides.length;
    updateBanner();
}

function previous() {
    counter = (counter - 1 + slides.length) % slides.length;
    updateBanner();
}

function updateBanner() {
    const image = document.querySelector(".banner-img");
	const tagLine = slides[counter].tagLine;
    image.setAttribute("src", "./assets/images/slideshow/" + slides[counter].image);
	bannertagLine.innerHTML = slides[counter].tagLine;
    updateDots(counter);
}

arrowLeft.addEventListener('click', previous);
arrowRight.addEventListener('click', next);
