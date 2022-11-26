var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 110,
    modifier: 1,
    slideShadows: false,
  },
	slidesPerView: 3,
	direction: getDirection(),
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},
  
	on: {
		resize: function () {
			swiper.changeDirection(getDirection());
		},
	},
});

function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

	return direction;
}
