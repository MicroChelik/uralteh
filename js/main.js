$(document).ready(function(){

	$('.newses-sort-view .list').click(function(){
	  $('.newses-list-slider__slide').addClass('list');
	  $('.view img').removeClass('show');
	  $('.view-list .active').addClass('show');
	  $('.view-grid .disable').addClass('show')
	});
	$('.newses-sort-view .grid').click(function(){
	  $('.newses-list-slider__slide').removeClass('list');
	  $('.view img').removeClass('show');
	  $('.view-list .disable').addClass('show');
	  $('.view-grid .active').addClass('show')
	});

	$('.menuFive').click(function(){
		if ($('.menu').hasClass('show')) {
			$('.menu').removeClass('show');
		}
		else{
			$('.menu').addClass('show');
		}
	})
	$('.menuFiveMob').click(function(){
		$('.men').toggleClass('active');
	});
	$('.search input').focus(function(){
		$('.mobile-home-link img').hide();
	});
	$('.search input').blur(function(){
		$('.mobile-home-link img').show();
	});

	$('.company-history__date').click(function(){
		$('.company-history__date').removeClass('active');
		$(this).addClass('active');
		var $name = $(this).attr("data"),
			$blockName = '.block';
		$blockName += $name;
		console.log($blockName);
		$('.block').removeClass('show');
		$($blockName).addClass('show');

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
	const menuFive2 = document.querySelector('.menuFiveMob');
	 function addClassFunFive() {
        this.classList.toggle("clickMenuFive");
    }
	menuFive.addEventListener('click', addClassFunFive);
	menuFive2.addEventListener('click', addClassFunFive);

	$('.redArrow').click(function(){
		$(this).toggleClass('redOpen');
		$(this).parent().parent().toggleClass('liOpen');
		$(this).parent().next().slideToggle('200');
	});
	
	$('.main-header__slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: "header-dots",
		swipeToSlide: true,
		vertical: true,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					vertical: false
				}
			}
		]
	});

	$('.slider-container').each(function(){
		var $this = $(this),
			$blockArrows = $('.controls-arrows', $this),
			$blockDots = $('.blue-dots', $this),
			$slick = $('.slider', $this);
		$slick.slick({
			dots: true,
			arrows: true,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $blockArrows,
			appendDots: $blockDots,
			responsive: [
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 1,
						arrows: false,
						slidesToScroll: 1,
						autoplay: true,
	  					autoplaySpeed: 5000,
					}
				}
			]
		});
	});
	$('.slider-container-4').each(function(){
		var $this = $(this),
			$blockArrows = $('.controls-arrows', $this),
			$blockDots = $('.blue-dots', $this),
			$slick = $('.slider-4', $this);
		$slick.slick({
			dots: true,
			arrows: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			appendArrows: $blockArrows,
			appendDots: $blockDots,
			responsive: [
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 1,
						arrows: false,
						slidesToScroll: 1,
						autoplay: true,
	  					autoplaySpeed: 5000,
					}
				}
			]
		});
	});
	$('.slider-container-1').each(function(){
		var $this = $(this),
			$blockArrows = $('.controls-arrows', $this),
			$blockDots = $('.blue-dots', $this),
			$slick = $('.slider-1', $this);
		$slick.slick({
			dots: true,
			arrows: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendArrows: $blockArrows,
			appendDots: $blockDots,
			
		});
	});

	// $('.section-equipment__slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	// prevArrow: '.prev1',
	// 	// nextArrow: '.next1',
	// 	dotsClass: "blue-dots",
	// 	prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
 //                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
	// 	arrowsClass: 'grey-arrows',
	// 	dots: true,
	// 	swipeToSlide: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 960,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				autoplay: true,
 //  					autoplaySpeed: 5000,
	// 			}
	// 		}
	// 	]
	// });
	// $('.section-solutions__slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dotsClass: "blue-dots",
	// 	dots: true,
	// 	swipeToSlide: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 960,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				autoplay: true,
 //  					autoplaySpeed: 5000,
	// 			}
	// 		}
	// 	]
	// });
	// $('.partners-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dotsClass: "blue-dots",
	// 	dots: true,
	// 	swipeToSlide: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 960,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				autoplay: true,
 //  					autoplaySpeed: 5000,
	// 			}
	// 		}
	// 	]
	// });
	$('.newses-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '.prev1',
		nextArrow: '.next1',
		dots: false,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					dots: true,
					dotsClass: "blue-dots",
				}
			}
		]
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
		responsive: [
			{
				breakpoint: 960,
				settings: {
					dots: true,
					dotsClass: "blue-dots",
				}
			}
		]
	});
	// $('.services-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dotsClass: "blue-dots",
	// 	dots: true,
	// 	swipeToSlide: true,
	// });
	// $('.products-detail-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: true,
	// 	dotsClass: "blue-dots",
	// 	swipeToSlide: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 960,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 				autoplay: true,
 //  					autoplaySpeed: 5000,
	// 			}
	// 		}
	// 	]
	// });
	// $('.products-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: true,
	// 	dotsClass: "blue-dots",
	// 	swipeToSlide: true,
	// });
	// $('.sertificates-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dotsClass: "blue-dots",
	// 	dots: true,
	// 	swipeToSlide: true,
	// });
	// $('.newses-list-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dotsClass: "blue-dots",
	// 	dots: true,
	// 	swipeToSlide: true,
	// });
	// $('.publication-list-slider').slick({
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dotsClass: "blue-dots",
	// 	dots: true,
	// 	swipeToSlide: true,
	// });
	$('.advantages-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 6000,
				settings: "unslick",
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
  					autoplaySpeed: 5000,
				}
			}
		]
	});
	$('.services-slider-mobile').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.products-slider-mobile').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.sertificates-slider-mobile').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.newses-slider-mobile').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});
	$('.publication-slider-mobile').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: "blue-dots",
		dots: true,
		swipeToSlide: true,
	});

});
