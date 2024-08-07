$(document).ready(function () {
	const hotelSlider = new Swiper('.hotel-slider', {
		// Optional parameters
		loop: true,
		speed: 750,
		autoplay: {
			delay: 5000,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.hotel-slider__button--next',
			prevEl: '.hotel-slider__button--prev',
		},
	})

	const reviewsSlider = new Swiper('.reviews-slider', {
		// Optional parameters
		loop: true,
		speed: 1000,

		// Navigation arrows
		navigation: {
			nextEl: '.reviews-slider__button--next',
			prevEl: '.reviews-slider__button--prev',
		},
	})

	// slider

	let menuButton = document.querySelector('.menu-button')

	menuButton.addEventListener('click', function () {
		document
			.querySelector('.navbar-bottom')
			.classList.toggle('navbar-bottom--visible')
	})

	// modal window

	let modalButton = $('[data-toggle=modal]')
	let closeModalButton = $('.modal__close')

	modalButton.on('click', openModal)
	closeModalButton.on('click', closeModal)

	function openModal() {
		let modalOverlay = $('.modal__overlay')
		let modalDialog = $('.modal__dialog')

		modalOverlay.addClass('modal__overlay--visible')
		modalDialog.addClass('modal__dialog--visible')
	}

	function closeModal(event) {
		event.preventDefault()

		let modalOverlay = $('.modal__overlay')
		let modalDialog = $('.modal__dialog')

		modalOverlay.removeClass('modal__overlay--visible')
		modalDialog.removeClass('modal__dialog--visible')
	}
})
