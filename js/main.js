const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	speed: 1000,
	autoplay: {
    delay: 5000,
  },

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button--next',
		prevEl: '.slider-button--prev',
	},
})
