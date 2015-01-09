$(function() {
	$(window).on('scroll', function(){
		if  ( $(window).scrollTop() > 60 ) {
			$('#headerhide').hide();
			$('#headericon').show();
			$("#mid").css("padding-top", "200px");
		} 
		else {
			$('#headerhide').show();
			$('#headericon').hide();
			$("#mid").css("padding-top", "10px");
		}
	});
});


jQuery(document).ready(function ($) {
  
	var slideCount = $('#ScrollPhotos ul li').length;
	var slideWidth = $('#ScrollPhotos ul li').width();
	var slideHeight = $('#ScrollPhotos ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#ScrollPhotos ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#ScrollPhotos ul li:last-child').prependTo('#ScrollPhotos ul');

    function moveLeft() {
        $('#ScrollPhotos ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#ScrollPhotos ul li:last-child').prependTo('#ScrollPhotos ul');
			$('#ScrollPhotos ul').css('left', '');
        });
    };

    function moveRight() {
        $('#ScrollPhotos ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#ScrollPhotos ul li:first-child').appendTo('#ScrollPhotos ul');
            $('#ScrollPhotos ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });
	
	$('#reviewsarrow').click(function () {
        $('.people').toggle();
    });
	$('#desarrow').click(function () {
        $('#description p').toggle();
    });
});  
 