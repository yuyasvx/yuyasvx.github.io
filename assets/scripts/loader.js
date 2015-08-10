function eraseLoadScreen() {
  $("#loadingscreen").animate({opacity: "0"}, {duration: 200}).queue(function(){
    $(this).dequeue();
    $(this).remove();
  });
}

$(document).ready(function(){
  eraseLoadScreen();
});