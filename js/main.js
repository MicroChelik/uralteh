$(document).ready(function(){

	

	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() >= 300) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},300);
		});
	});

	const menuFive = document.querySelector('.menuFive');
	 function addClassFunFive() {
        this.classList.toggle("clickMenuFive");
    }
	menuFive.addEventListener('click', addClassFunFive);
	
	$('.main-header__slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		swipeToSlide: true,
		vertical: true,
		// responsive: [
		// 	{
		// 		breakpoint: 6000,
		// 		settings: "unslick",
		// 	},
		// 	{
		// 		breakpoint: 960,
		// 		settings: {
		// 			dots: true,
		// 			dotsClass: "my-dots",
		// 			slidesToShow: 1,
		// 			slidesToScroll: 1,
		// 			autoplay: true,
  // 					autoplaySpeed: 5000,
		// 		}
		// 	}
		// ]
	});

	$('.section-equipment__slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		swipeToSlide: true,
	});


});
