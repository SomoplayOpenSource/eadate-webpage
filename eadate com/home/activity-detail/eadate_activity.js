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
        $('#peopleleft').toggle();
		$('#peopleright').toggle();
	});
	
	$('#scearrow').click(function () {
        $('#srec').toggle();
		$('.srec').toggle();
	});
}); 