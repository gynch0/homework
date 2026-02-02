// $(document).ready(function () {
// 	$(".header__menu ").on("click", function () {
// 		$(".header__menu header__menu-list").toggleClass("header__menu");
// 	});
// });

$(document).ready(function () {
	$(".header__burger").on("click", function () {
		// переключаем класс на кнопке для иконок
		$(this).toggleClass("burger--open");
		$("#header__menu").toggleClass("header__menu--open");

		// обновляем aria-expanded
		const expanded = $(this).hasClass("burger--open");
		$(this).attr("aria-expanded", expanded);
	});
});
