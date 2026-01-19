export const sizesSlider = () => {
	new Swiper(".sizes__slider", {
		sizesPerView: "auto",
		centeredSlides: true,
		loop: true,
		mousewheel: {
			forceToAxis: true,
		},
	});
};
