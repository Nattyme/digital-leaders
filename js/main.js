
// Поиск элементов на странице:
// 1. Кнопки
const tabButtons = document.querySelectorAll(".tab__btn");
// 2. Блоки с контентом
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
document.querySelector('.tab__btn').click();
/* tabs */

/*swiper slider-who-it-was*/
const swiperMini = new Swiper('#slider-mini-how-was', {
    // Optional parameters
    spaceBetween: 16,
    slidesPreView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    });

const swiper = new Swiper('#slider-how-was', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 160,
    speed: 1200,
    slidesPreView: 1,
    grabCursor: true,
    hashNavigation: {
        watchState: true,
      },
    // loop: true,
    thumbs: {
        swiper: swiperMini,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-how-was-next',
      prevEl: '#slider-how-was-prev',
    },
  
  });


