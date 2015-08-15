var titleBarHeight = 60;
var footerHeight = 60;
var windowHeight = 0;

(function($) {
  $.fn.adjustHeight = function() {
    windowHeight = $(window).height();
    if (windowHeight < 600) {
      elmHeight = 600 - titleBarHeight - footerHeight;
    } else {
      elmHeight = windowHeight - titleBarHeight - footerHeight;
    }
    this.css({
      height: elmHeight + "px"
    });
    return this;
  }
})(jQuery);

(function($) {
  $.fn.adjustFeatured = function() {
    boxInnerHeight = $("#toppage-showBox section").innerHeight();
    
    this.css({
      height: (boxInnerHeight / 3) * 2 + "px"
    });
    return this;
  }
})(jQuery);

(function($) {
  $.fn.adjustThumb = function() {
    boxInnerHeight = $("#toppage-showBox section").innerHeight();
    topMargin = $("#toppage-showBox .featured").innerHeight();
    boxWidth = $("#w").innerWidth() / 2;
    this.css({
      width: (boxWidth/3) + "px",
      height: (boxInnerHeight / 3) * 1 + "px",
      top: topMargin + "px"
    });
    return this;
  }
})(jQuery);

function setThumb(){
  $("#toppage-showBox .thumb").adjustThumb();
  x = ($("#w").innerWidth() / 2) / 3;
  
  for(i=0;i<3;i++){
    $("#toppage-showBox .thumb").eq(i).css({
      left: x * i + "px"
    });
  }
}

function initsvx(){
  var df = new $.Deferred();
  
  $("head").append("<link>");
  css = $("head").children(":last");
  css.attr({
    rel: "stylesheet",
    type: "text/css",
    href: "assets/style/toppage.css"
  });
  
  windowHeight = $(window).height();
  $("#toppage-showBox section").adjustHeight();
  $("#toppage-showBox .featured").adjustFeatured();
  setThumb();
  
  df.resolve();
  
  return df.promise();
}

$(window).resize(function() {
  $("#toppage-showBox section").adjustHeight();
  $("#toppage-showBox .featured").adjustFeatured();
  setThumb();
});

$("figure").click(function() {
  pathname = $(this).data("project-name");
  location.href = "projects/" + pathname + "/index.html";
});

/*
function startViewer(){
  var df = new $.Deferred();
  
  // Prepare Process
  
  $("#SVXHikari-closebutton").click(function(e) {
    closeViewer();
  });
  $("#SVXHikari-background").click(function() {
    closeViewer();
  });
  $("#SVXHikari-background > *").click(function(e){
    e.stopPropagation();
  });
  $("#SVXHikari-spinner").addClass("animated");
  
  $.when(startViewerAnimation()).done(function(){
    // Default Process
    $("#SVXHikari-background").css({display: "block", opacity: "1"});
    df.resolve();
  });
  
  return df.promise();
}
*/

/*
function startViewerAnimation(){
  var df = new $.Deferred();
  
  $("#SVXHikari-background").css({display: "block"});
  $("#SVXHikari-spinner").resetCenter();
  
  $("#SVXHikari-background").animate({opacity: "1"}, 200).queue(function(){
    $(this).dequeue();
    df.resolve();
  });

  return df.promise();
}
*/