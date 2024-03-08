document.addEventListener("DOMContentLoaded", function () {
const tabButtons = document.querySelectorAll(".tab__btn");
const tabBlocks = document.querySelectorAll(".tab-block");

// Обходим коллекцию кнопок через forEach
tabButtons.forEach(function (item) {
	// Для каждой кнопки запускаем прослушку события клик
	item.addEventListener('click', function () {
		const currentButton = item; // Кнопка по которой мы кликнули
		const blockIdSelector = currentButton.getAttribute("data-tab");
		const currentBlock = document.querySelector(blockIdSelector);

		// Снимаем активный класс со всех кнопок
		tabButtons.forEach(function (item) {
			item.classList.remove("tab__btn--active");
		});

		// Снимаем активный класс со всех блоков
		tabBlocks.forEach(function (item) {
			item.classList.remove("tab-block--active");
		})

		// Добавляем активный класс к кнопке по которой кликнули
		currentButton.classList.add("tab__btn--active");

		// Добавляем активный класс к блоку который нужно показать
		currentBlock.classList.add("tab-block--active");
	});
})

// Делаем "фейковый" клик по первой кнопке
if (document.querySelectorAll('.tab__btn').length > 0 ) {
    document.querySelector('.tab__btn').click();
}

/* swiper sliders*/
if (document.querySelectorAll('.swiper').length > 0) {
    const swiperMiniHowWas = new Swiper('#slider-mini-how-was', {
        // Optional parameters
        spaceBetween: 16,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        });

    const swiperHowWas = new Swiper('#slider-how-was', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 160,
        speed: 1200,
        slidesPerView: 1,
        grabCursor: true,
        hashNavigation: {
            watchState: true,
        },
        // loop: true,
        thumbs: {
            swiper: swiperMiniHowWas,
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '#slider-how-was-next',
        prevEl: '#slider-how-was-prev',
        },
    
    });

    const swiperReviews = new Swiper('#slider-reviews', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 32,
        speed: 2500,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grabCursor: true,
    
        // Navigation arrows
        navigation: {
        nextEl: '#slider-reviews-next',
        prevEl: '#slider-reviews-prev',
        },

        pagination: {
            el: '.slider-reviews__pagination',
            // type: 'bullets',
            clickable: true,
        },
    
    });

    const swiperPressAbout = new Swiper('#slider-press-about', {
        // Optional parameters
        direction: 'horizontal',
        spaceBetween: 32,
        speed: 2500,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grabCursor: true,
    
        // Navigation arrows
        navigation: {
        nextEl: '#slider-press-about-next',
        prevEl: '#slider-press-about-prev',
        },

        pagination: {
            el: '.slider-press-about__pagination',
            // type: 'bullets',
            clickable: true,
        },
    
    });

    const swiperPlace = new Swiper('#slider-place', {
        // Optional parameters
        direction: 'horizontal',
        speed: 2000,
        slidesPerView: 1,
        grabCursor: true,
    
        // Navigation arrows
        navigation: {
        nextEl: '#slider-place-next',
        prevEl: '#slider-place-prev',
        },

        pagination: {
            el: '#slider-place__pagination',
            // type: 'bullets',
            type: "fraction",
        },
    
    });

    const swiperSpeakers = new Swiper('#slider-speakers', {
        // Optional parameters
        direction: 'horizontal',
        speed: 1800,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 72,
        grabCursor: true,
    
        // Navigation arrows
        navigation: {
        nextEl: '#slider-speakers-next',
        prevEl: '#slider-speakers-prev',
        },

        pagination: {
            el: '.slider-speakers__pagination',
            // type: 'bullets',
            clickable: true,
        },
    });
}
/* swiper sliders */

// phone mask
// if (document.querySelectorAll('#phone').length > 0) {
//     const input = document.querySelector('#phone');
//     const mask = new Inputmask('+7 (999) 999-99-99');
//     mask.mask(input);
// }

});
