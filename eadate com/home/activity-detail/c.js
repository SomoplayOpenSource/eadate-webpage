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
 
	$('#parrow').click(function () {
        $('#photo ul').toggle();
    });
	$('#barrow').click(function () {
        $('.bpart').toggle();
    });
	$('#strrow').click(function () {
        $('.spart').toggle();
    });
	$('#perrow').click(function () {
        $('.ppart').toggle();
    });
}); 