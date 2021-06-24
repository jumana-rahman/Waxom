// Sticky Js
$(window).scroll(function(){
	var scrolling = $(this).scrollTop();

	if(scrolling > 200){
		$('.navbar').addClass('bg');
	}

	else{
		$('.navbar').removeClass('bg');
	}
});
// Sticky Js

// TYPED JS
$(function(){
	$(".typed").typed({
		strings: ["Portfolio PSD Template", "Designer PSD Template", "Developer PSD Template"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

   
});
// TYPED JS
 // venobox
 $(document).ready(function(){
	$('.venobox').venobox(); 
});
// venobox

// MIXITUP JS
$(document).ready(function(){
	var mixer = mixitup('.box-list');
});
// MIXITUP JS

// COUNTER UP JS
$('.counter').counterUp({
	delay: 30,
	time: 3000,
});
// COUNTER UP JS

// SLICK SLIDER
$('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

	responsive: [
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
});


// SLICK SLIDER