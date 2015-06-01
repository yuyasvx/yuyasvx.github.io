//navigation.js

var isTopPage = true;

var navHeight = $("#fixedmenu").height();
var logobtnHeight = $(".svxlogobox").eq(0).height();
console.log("logobtnHeight" + logobtnHeight);

$("#fixedmenu").css("height", navHeight + "px");

var NV_minimize = function(){
  $("#fixedmenu ul").css("display", "none");
  $("#fixedmenu").css("overflow", "hidden");
  $("#fixedmenu").animate({height: "100px"},{duration: 100});
  $("#fixedmenu #LOGOTYPE").animate({opacity: "0"},{duration: 100});
  $("#fixedmenu svg").animate({top: "-15px"},{duration: 100});
  
  isTopPage = false;
};

var NV_expand = function(){
};

function adjustNav(){
  
  var v_crdt = $(window).scrollTop();
  if (v_crdt >= logobtnHeight){
    NV_minimize();
  }
}


// スクロール判定
$(window).on("load scroll", adjustNav);