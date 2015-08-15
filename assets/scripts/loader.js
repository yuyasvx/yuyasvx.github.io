function eraseLoadScreen() {
  $("#loadingscreen").animate({opacity: "0"}, {duration: 200}).queue(function(){
    $(this).dequeue();
    $(this).remove();
  });
}

$(document).ready(function(){
  var df = new $.Deferred();
  
  $.when(initsvx()).done(function(){
    eraseLoadScreen();
    df.resolve();
  });
  
  return df.promise();
});