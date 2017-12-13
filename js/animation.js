$(document).ready(function() {

  $('.frame_two').hide();
  $('.frame_three').hide();
  $('.frame_four').hide();

$('.frame-one').hide().delay(4000).fadeIn(2200);
$('.frame-one').hide().delay(3000).fadeOut(1200);
$('.frame_two').hide().delay(12000).fadeIn(2200);
$('.frame_two').hide().delay(3000).fadeOut(1200);
$('.frame_three').delay(20000).fadeIn(2200);
$('.frame_four').delay(20000).fadeIn(2200);


});
