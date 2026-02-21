(function () {
	const burger = document.querySelector(".header__burger");
	const menu = document.querySelector("#header__menu");

	if (!burger || !menu) {
		console.error("Burger menu elements not found!");
		return;
	}

	burger.addEventListener("click", e => {
		e.preventDefault();
		e.stopPropagation();
		burger.classList.toggle("is-active");
		menu.classList.toggle("is-open");
	});

	// Закрытие меню при клике на пункт
	document.querySelectorAll(".header__menu-item").forEach(item => {
		item.addEventListener("click", () => {
			burger.classList.remove("is-active");
			menu.classList.remove("is-open");
		});
	});

	// Закрытие меню при клике вне меню (только если меню открыто)
	document.addEventListener("click", e => {
		if (menu.classList.contains("is-open")) {
			if (!burger.contains(e.target) && !menu.contains(e.target)) {
				burger.classList.remove("is-active");
				menu.classList.remove("is-open");
			}
		}
	});
})();

// слайдер
document.addEventListener("DOMContentLoaded", function () {
	new Swiper(".product-swiper", {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".product-swiper .swiper-button-next",
			prevEl: ".product-swiper .swiper-button-prev",
		},
		pagination: {
			el: ".product-swiper .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: { slidesPerView: 1 },
			480: { slidesPerView: 2 },
			780: { slidesPerView: 3 },
			1024: { slidesPerView: 4 },
		},
	});

	const specialLinksContainer = document.querySelector(".special-offer__links");
	const specialToggleButton = document.querySelector(".special-offer__button");

	if (specialLinksContainer && specialToggleButton) {
		let specialsExpanded = false;

		specialToggleButton.addEventListener("click", event => {
			event.preventDefault();

			if (!specialsExpanded) {
				const extraLink1 = document.createElement("a");
				extraLink1.href = "#";
				extraLink1.className = "special-offer__link special-offer__link-extra";
				extraLink1.textContent = "dyson фен для окрашенных волос";

				const extraLink2 = document.createElement("a");
				extraLink2.href = "#";
				extraLink2.className = "special-offer__link special-offer__link-extra";
				extraLink2.textContent = "dyson фен дорожный компактный";

				specialLinksContainer.insertBefore(extraLink1, specialToggleButton);
				specialLinksContainer.insertBefore(extraLink2, specialToggleButton);

				specialsExpanded = true;
			} else {
				const extraLinks = specialLinksContainer.querySelectorAll(
					".special-offer__link-extra",
				);

				extraLinks.forEach(link => link.remove());

				specialsExpanded = false;
			}
		});
	}
});
document.addEventListener("DOMContentLoaded", function () {
	new Swiper(".product-swiper", {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: ".product-card .container .swiper-button-next",
			prevEl: ".product-card .container .swiper-button-prev",
		},
		pagination: {
			el: ".product-swiper .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			320: { slidesPerView: 1 },
			480: { slidesPerView: 2 },
			780: { slidesPerView: 3 },
			1024: { slidesPerView: 4 },
		},
	});
});
document.addEventListener("DOMContentLoaded", function () {
	const minusButtons = document.querySelectorAll(".info-block__basket-minus");
	const plusButtons = document.querySelectorAll(".info-block__basket-plus");

	plusButtons.forEach(plusBtn => {
		plusBtn.addEventListener("click", function () {
			const counter = this.closest(".info-block__basket-counter").querySelector(
				".info-block__basket-counter-page",
			);

			let value = parseInt(counter.textContent);
			counter.textContent = value + 1;
		});
	});

	minusButtons.forEach(minusBtn => {
		minusBtn.addEventListener("click", function () {
			const counter = this.closest(".info-block__basket-counter").querySelector(
				".info-block__basket-counter-page",
			);

			let value = parseInt(counter.textContent);

			if (value > 1) {
				counter.textContent = value - 1;
			}
		});
	});
});
// Коментарии
document.addEventListener("DOMContentLoaded", function () {
	const reviewLinks = document.querySelectorAll(".reviews__scores-info-link");

	reviewLinks.forEach(link => {
		let expanded = false;

		link.addEventListener("click", function (e) {
			e.preventDefault();

			const reviewBlock = this.closest(".reviews__scores-info");
			const imageContainer = reviewBlock.querySelector(
				".reviews__scores-flex-img",
			);

			if (!imageContainer) return;

			if (!expanded) {
				// создаём 2 дополнительные картинки
				const img1 = document.createElement("img");
				img1.src = "./images/reviews/reviews__scores-info-img.jpg";
				img1.width = 95;
				img1.height = 95;
				img1.alt = "";
				img1.className =
					"reviews__scores-info-img reviews__scores-info-img-extra";

				const img2 = document.createElement("img");
				img2.src = "./images/reviews/reviews__scores-info-img.jpg";
				img2.width = 95;
				img2.height = 95;
				img2.alt = "";
				img2.className =
					"reviews__scores-info-img reviews__scores-info-img-extra";

				imageContainer.appendChild(img1);
				imageContainer.appendChild(img2);

				this.textContent = "Скрыть фото";
				expanded = true;
			} else {
				// удаляем дополнительные фото
				const extraImages = imageContainer.querySelectorAll(
					".reviews__scores-info-img-extra",
				);

				extraImages.forEach(img => img.remove());

				this.textContent = "Смотреть все фото";
				expanded = false;
			}
		});
	});
});

// кнопка показать еще
document.addEventListener("DOMContentLoaded", function () {
	const reviewsButton = document.querySelector(".reviews__scores-button");
	const reviewsWrapper = document.querySelector(".reviews__wrapper-info");
	const buttonContainer = document.querySelector(".button-flex");

	if (!reviewsButton || !reviewsWrapper || !buttonContainer) return;

	let reviewsAdded = false;
	let addedReviews = [];

	reviewsButton.addEventListener("click", function (e) {
		e.preventDefault();

		if (!reviewsAdded) {
			for (let i = 0; i < 2; i++) {
				const newReview = document.createElement("div");
				newReview.className = "reviews__stars reviews__stars-extra";

				newReview.innerHTML = `
					<div class="reviews__stars-icon">
						<p class="reviews__scores-name reviews__scores-name-top">
							Новый пользователь
						</p>

						<div style="display:flex; gap:4px;">
								<svg
										class="star-svg"
										width="25"
										height="24"
										viewBox="0 0 25 24"
										preserveAspectRatio="xMidYMid meet"
									>
										<use href="./icons/sprite.svg#grey-star"></use>
									</svg>
										<svg
										class="star-svg"
										width="25"
										height="24"
										viewBox="0 0 25 24"
										preserveAspectRatio="xMidYMid meet"
									>
										<use href="./icons/sprite.svg#grey-star"></use>
									</svg>
										<svg
										class="star-svg"
										width="25"
										height="24"
										viewBox="0 0 25 24"
										preserveAspectRatio="xMidYMid meet"
									>
										<use href="./icons/sprite.svg#grey-star"></use>
									</svg>
										<svg
										class="star-svg"
										width="25"
										height="24"
										viewBox="0 0 25 24"
										preserveAspectRatio="xMidYMid meet"
									>
										<use href="./icons/sprite.svg#grey-star"></use>
									</svg>
										<svg
										class="star-svg"
										width="25"
										height="24"
										viewBox="0 0 25 24"
										preserveAspectRatio="xMidYMid meet"
									>
										<use href="./icons/sprite.svg#grey-star"></use>
									</svg>
						</div>
					</div>

					<div class="reviews__scores-info">
						<h3 class="reviews__scores-info-title">Отличный товар</h3>
						<p class="reviews__scores-info-text">
							Очень понравилось качество и дизайн. Рекомендую!
						</p>
					</div>
				`;

				reviewsWrapper.insertBefore(newReview, buttonContainer);
				addedReviews.push(newReview);
			}

			reviewsAdded = true;
			reviewsButton.textContent = "Скрыть отзывы";
		} else {
			addedReviews.forEach(review => review.remove());
			addedReviews = [];
			reviewsAdded = false;
			reviewsButton.textContent = "Показать еще";
		}
	});
});
document.addEventListener("DOMContentLoaded", function () {
	// Кнопка "Показать ещё" в секции новостей
	const newsButton = document.querySelector(".news__button");
	const newsSection = document.querySelector(".news");

	if (newsButton && newsSection) {
		let newsExpanded = false;

		// Шаблон второго ряда новостей
		const extraNewsHTML = `
		<div class="news__wrapper news__wrapper-extra">
			<div class="news__wrapper-info">
				<img class="news__wrapper-info-img" src="./images/news-img.jpg" alt="" />
				<a href="" class="news__wrapper-info-date">15 января 2023</a>
				<h3 class="news__wrapper-info-title">Как правильно сушить волосы феном</h3>
				<p class="news__wrapper-info-text">
					Узнайте главные правила сушки волос, которые помогут сохранить
					здоровье и блеск вашей шевелюры надолго.
				</p>
				<button class="news__wrapper-info-button">Читать далее</button>
			</div>
			<div class="news__wrapper-info">
				<img class="news__wrapper-info-img" src="./images/news-img.jpg" alt="" />
				<a href="" class="news__wrapper-info-date">3 февраля 2023</a>
				<h3 class="news__wrapper-info-title">Топ-5 насадок для укладки волос</h3>
				<p class="news__wrapper-info-text">
					Сравниваем самые популярные насадки и рассказываем, какая из них
					подойдёт именно вам в зависимости от типа волос.
				</p>
				<button class="news__wrapper-info-button">Читать далее</button>
			</div>
			<div class="news__wrapper-info news__wrapper-info-none">
				<img class="news__wrapper-info-img" src="./images/news-img.jpg" alt="" />
				<a href="" class="news__wrapper-info-date">20 февраля 2023</a>
				<h3 class="news__wrapper-info-title">Уход за феном: советы экспертов</h3>
				<p class="news__wrapper-info-text">
					Простые рекомендации по уходу за прибором, которые продлят срок
					его службы и сохранят мощность на максимальном уровне.
				</p>
				<button class="news__wrapper-info-button">Читать далее</button>
			</div>
		</div>`;

		// Контейнер с кнопкой
		const buttonFlex = newsSection.querySelector(".button-flex");

		newsButton.addEventListener("click", function (e) {
			e.preventDefault();

			if (!newsExpanded) {
				// Вставляем новый wrapper перед кнопкой
				buttonFlex.insertAdjacentHTML("beforebegin", extraNewsHTML);
				newsButton.textContent = "Скрыть";
				newsExpanded = true;
			} else {
				const extraWrapper = newsSection.querySelector(".news__wrapper-extra");
				if (extraWrapper) extraWrapper.remove();
				newsButton.textContent = "Показать еще";
				newsExpanded = false;
			}
		});
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const minusButtons = document.querySelectorAll(".info-block__basket-minus");
	const plusButtons = document.querySelectorAll(".info-block__basket-plus");

	plusButtons.forEach(plusBtn => {
		plusBtn.addEventListener("click", function () {
			const counter = this.closest(".info-block__basket-counter").querySelector(
				".info-block__basket-counter-page",
			);

			let value = parseInt(counter.textContent);
			counter.textContent = value + 1;
		});
	});

	minusButtons.forEach(minusBtn => {
		minusBtn.addEventListener("click", function () {
			const counter = this.closest(".info-block__basket-counter").querySelector(
				".info-block__basket-counter-page",
			);

			let value = parseInt(counter.textContent);

			if (value > 1) {
				counter.textContent = value - 1;
			}
		});
	});
});
