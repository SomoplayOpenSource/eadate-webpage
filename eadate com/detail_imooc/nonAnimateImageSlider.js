$(document).ready(function(){ 


$("#left_icon").click(function () {
  $('ul#slider li:first').insertAfter('ul#slider li:last').slideDown("slow");
  
  

});

$("#right_icon").click(function () {
  $('ul#slider li:last').insertBefore('ul#slider li:first').slideDown("slow");

});


});