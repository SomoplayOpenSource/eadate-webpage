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
			$("#mid").css("padding-top", "20px");
		}
	});
});
jQuery(document).ready(function ($) {
 
	$('#peoarrow').click(function () {
        $('#peocontainer').toggle();
	});
	 
	$('#basarrow').click(function () {
        $('#bascontainer').toggle();
	});
	$('#perrow').click(function () {
        $('.ppart').toggle();
	});
	$('#strrow').click(function () {
        $('.spart').toggle();
	});
	$('#lparrow').click(function () {
        $('.lppart').toggle();
	});
	$('#lmarrow').click(function () {
        $('.lmpart').toggle();
	});
}); 