$(document).ready(function(){

	$('.newses-sort-view .list').click(function(){
	  $('.newses-list-slider__slide').addClass('list');
	});
	$('.newses-sort-view .grid').click(function(){
	  $('.newses-list-slider__slide').removeClass('list');
	});

	$('.menuFive').click(function(){
		if ($('.menu').hasClass('show')) {
			$('.menu').removeClass('show');
		}
		else{
			$('.menu').addClass('show');
		}
	})

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
		dotsClass: "header-dots",
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
		// prevArrow: '.prev1',
		// nextArrow: '.next1',
		dotsClass: "blue-dots",
		arrowsClass: 'grey-arrows',
		dots: true,
		swipeToSlide: true,
	});
	$('.section-solutions__slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.partners-slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.newses-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '.prev1',
		nextArrow: '.next1',
		dots: false,
		swipeToSlide: true,
	});
	$('.publication-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '.prev2',
		nextArrow: '.next2',
		arrows: true,
		dots: false,
		swipeToSlide: true,
	});
	$('.services-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.products-detail-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: "blue-dots",
		swipeToSlide: true,
	});
	$('.products-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: "blue-dots",
		swipeToSlide: true,
	});
	$('.sertificates-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.newses-list-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});


});
