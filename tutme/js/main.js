$(document).ready(function() { /* -- Fullpage-js (begin) -- */    $('#fullpage').fullpage({            scrollingSpeed: 1000,            responsiveHeight: 840,            responsiveWidth: 1000,            slidesNavigation: true,            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage'],            menu: '#mune',            //Animate Number Plugin            afterLoad: function(anchorLink, index){                        var loadedSection = $(this);                          if(index == 8){                              $('#countdown1').animateNumber({ number: 50 },2000);                              $('#countdown2').animateNumber({ number: 30 },2000);                              $('#countdown3').animateNumber({ number: 20 },2000);                              $('#countdown4').animateNumber({ number: 25 },2000);                          }                      }        });$('.tm-anatomy-slide').on( "touchmove", function() {	$.fn.fullpage.setAllowScrolling(false, 'left, right');	setTimeout(function() {	      $.fn.fullpage.setAllowScrolling(true);	  }, 500);});         $('.anchorDown').click(function(e){	e.preventDefault();	$.fn.fullpage.moveSectionDown();});$('#next-slide').click(function(e){	e.preventDefault();	$.fn.fullpage.moveSectionDown();});$('.tm-point').click(function(){	$.fn.fullpage.moveTo(4);}); /* -- Fullpage-js (end) -- */    // SLIDER  $('.tm-clients-slider').bxSlider({    pagerCustom: '.pager',    controls: false,    mode: 'fade'  }); });// RANGE - SLIDER$(function() {  $( "#slider-range-min" ).slider({    range: "min",    value: 2,    min: 1,    max: 3,    animate: true  });  $( "#slider-range-min" ).on( "slidestop", function( event, ui ) {  	var  scrollContent = $( ".ui-slider" ).width();  	 value = $("#slider-range-min").slider( "value" );  			if ( value <= 1)  {  			         $( ".tm-rates-blk:first" ).addClass('active').siblings().removeClass('active');  			       } else if ( value <= 2) {  			       	 $( ".tm-rates-blk:eq(1)" ).addClass('active').siblings().removeClass('active');  			       }  			        else {  			         $( ".tm-rates-blk:last" ).addClass('active').siblings().removeClass('active');  			       }  } );  $( ".tm-rates-blk" ).on( "click", function() {  	 $(this).addClass('active').siblings().removeClass('active');  	 if ($(this).is(':last-child')) {  	 	$("#slider-range-min").slider( "value", 3 );  	 } else if ($(this).is(':first-child')) {  	 	$("#slider-range-min").slider( "value", 1 );  	 } else {  	 	$("#slider-range-min").slider( "value", 2 );  	 }		        });  $( ".tm-point-aug" ).on( "click", function() {   		$( ".tm-rates-blk:first" ).addClass('active').siblings().removeClass('active');  		$("#slider-range-min").slider( "value", 1 );  });  $( ".tm-point-dec" ).on( "click", function() {   		$( ".tm-rates-blk:eq(1)" ).addClass('active').siblings().removeClass('active');  		$("#slider-range-min").slider( "value", 2 );  });  $( ".tm-point-apr" ).on( "click", function() {   		$( ".tm-rates-blk:last" ).addClass('active').siblings().removeClass('active');  		$("#slider-range-min").slider( "value", 3 );  });  //Toggle Button$('#toggle-one').bootstrapToggle();$('.toggle-l').click(function(e){	e.preventDefault();	$('#toggle-one').bootstrapToggle('off').parents('#tm-checkbox_wrp').removeClass('on');	$('.tm-counter-wrp').not('.active').addClass('active').siblings().removeClass('active');});$('.toggle-r').click(function(e){	e.preventDefault();	$('#toggle-one').bootstrapToggle('on').parents('#tm-checkbox_wrp').addClass('on');	$('.tm-counter-wrp').not('.active').addClass('active').siblings().removeClass('active');});$('.toggle').on( "click", function( ) {	$('#tm-checkbox_wrp').toggleClass('on');	$('.tm-counter-wrp').not('.active').addClass('active').siblings().removeClass('active');  });    //Counter 	var clocks = [];	clocks.push($('.tm-counter-1').FlipClock(10,{        clockFace: 'Counter',        autoStart: true,        minimumDigits: 4    }));	clocks.push($('.tm-counter-2').FlipClock({        clockFace: 'Counter',        autoStart: true,        minimumDigits: 4    }));    clocks.push($('.tm-counter-3').FlipClock(40,{        clockFace: 'Counter',        autoStart: true,        minimumDigits: 4    }));    clocks.push($('.tm-counter-4').FlipClock(305,{        clockFace: 'Counter',        autoStart: true,        minimumDigits: 4    }));   //POPUP $('.work-list').magnificPopup({   delegate: 'a', // child items selector, by clicking on it popup will open   type: 'image',   overflowY: 'scroll',   gallery: {   			enabled: true,   			navigateByImgClick: true   		},    callbacks: {   afterClose: function() {   		  $('html').css("overflow","visible");   		 } } });  // Form popup $('.popup-btn').magnificPopup({ type: 'inline', mainClass: 'phone-style', overflowY: 'scroll', callbacks: {   open: function() {   		$('body').css('margin-right', 0);        $('html').css('margin-right', 0);     $('#fullpage').find('.section.active').addClass('blurred');   },   close: function() {    $('#fullpage').find('.blurred').removeClass('blurred');   },   afterClose: function() {     $('html').css("overflow","visible");    } } });  //Before & After Slidervar $black_white = $('.black_white'),		img_width = $('.black_white img').width(),		init_split = Math.round(img_width/2);    $black_white.width(init_split);  		$('.before_after_slider').mousemove(function(e){		var offX  = (e.offsetX || e.clientX - $black_white.offset().left);			$black_white.width(offX);			$('.black_white-wrp').width(offX);			$('.black_white-handle').css('left', offX);		});		$('.before_after_slider').mouseleave(function(e){		$black_white.stop().animate({		width: init_split		},500)		$('.black_white-handle').stop().animate({		left: init_split		},500)		$('.black_white-wrp').stop().animate({		width: init_split		},500)		});  $(window).on('resize load', function(){  	cont_width = $('.before_after_slider').width(),    $('.black_white img, .color img').width(cont_width);    $('.black_white-wrp').width(init_split);    $('.black_white-handle').css('left', init_split);  });//Reviews Slider    $('.tm-reviews-slider').slick({    centerMode: true,    centerPadding: '0px',    slidesToShow: 3,    appendArrows: $('.tm-reviews-control'),    nextArrow: '<span class="slick-next"></span>',    prevArrow: '<span class="slick-prev"></span>',    responsive: [      {        breakpoint: 768,        settings: {          centerMode: true,          centerPadding: '40px',          slidesToShow: 3        }      },      {        breakpoint: 480,        settings: {          centerMode: true,          centerPadding: '40px',          slidesToShow: 1        }      }    ]  });    //Anatomy Slider  $('.tm-anatomy').on( "click", ".fp-controlArrow", function( ) {  		if ($('.tm-anatomy .fp-slide.active').is(':last-child')) {  			$(this).addClass('disable');  			 $(".tm-anatomy .fp-slides").after("<div class='gray-next'></div>");  			$('.tm-anatomy .fp-prev').removeClass('disable');  			  		} else if ($('.tm-anatomy .fp-slide.active').is(':first-child')) {  			$('.tm-anatomy .fp-next').removeClass('disable');  			$(this).addClass('disable');  		} else {  			$('.tm-anatomy .fp-controlArrow').removeClass('disable');  		}  });  $(window).on('load', function(){  	if ($('.tm-anatomy .fp-slide.active').is(':first-child')) {  		$('.tm-anatomy .fp-prev').addClass('disable');  		$(".tm-anatomy .fp-slides").after("<div class='gray-prev'></div>");  	}   	     $(".slick-center").next().addClass('second');var currentP = $('.tm-reviews-slider').slick('slickCurrentSlide');    countB =   $('.review-blk-wrp').not('.slick-cloned').length;	$('.tm-reviews_info span').text(currentP + 1);    $('.tm-reviews_info i').text("/" +countB);  });     $( ".tm-reviews-control" ).on( "click", ".slick-prev, .slick-next", function() {   		$(".slick-slide").siblings().removeClass('second').parent().find('.slick-center').next().addClass('second');   		  var currentP = $('.tm-reviews-slider').slick('slickCurrentSlide');   		  $('.tm-reviews_info span').text(currentP + 1);   });   $('.tm-reviews-slider').on('swipe', function(){     $(".slick-slide").siblings().removeClass('second').parent().find('.slick-center').next().addClass('second');       var currentP = $('.tm-reviews-slider').slick('slickCurrentSlide');       $('.tm-reviews_info span').text(currentP + 1);   });      $("#phone").mask("9999 (99)-999-99-99",{placeholder:"+375 (__)-___-__-__"});   });