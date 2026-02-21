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
