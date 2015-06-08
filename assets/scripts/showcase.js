//showcase.js

var numCover = $("#home-showcasebox > .showcase").length;

for(i=0;i<numCover;i++) {
  // .showcase -> .coverimg
  var elm = $("#home-showcasebox .showcase").eq(i).find(".coverimg > img");
  var bgurl = elm.attr("src");
  $("#home-showcasebox .showcase").eq(i).find(".coverimg").css({"backgroundImage":"url("+bgurl+")", "backgroundPositionX":"center"});
  elm.remove();
}