$(document).ready(function(){ 



 $(".topic").click(function () {
    $header = $(this);
    $content = $header.parent().next();
    $content.slideToggle(500, function () {
    });

});




});