var titleBarHeight = 60;
var footerHeight = 60;
var windowHeight = 0;

function adjustHeight() {
  windowHeight = $(window).height();
  contentHeight = $("#updateBox").innerHeight();
  
  console.log((windowHeight - titleBarHeight - footerHeight));
  
  if((windowHeight - titleBarHeight - footerHeight) >= contentHeight) {
    $("#contentBox").css({
      height: windowHeight - titleBarHeight - footerHeight - 40 + "px"
    });
  } else {
    $("#contentBox").css({
      height: "auto"
    });
  }
}

function initsvx(){
  var df = new $.Deferred();
  
  windowHeight = $(window).height();
  adjustHeight();
  
  df.resolve();
  
  return df.promise();
}
