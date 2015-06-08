//navigation.js

var isTopPage = true;
var isNavDisplayed = true;

var navHeight = $("#fixedmenu").height();
var logobtnHeight = $(".svxlogobox").eq(0).height();

$("#fixedmenu").css("height", navHeight + "px");

var NV_minimize = function(){
  $("#fixedmenu ul").css("display", "none");
  $("#fixedmenu").css("overflow", "hidden");
  $("#fixedmenu").animate({height: "100px"},{duration: 100});
  $("#fixedmenu #LOGOTYPE").animate({opacity: "0"},{duration: 100});
  $("#fixedmenu svg").animate({top: "-28px"},{duration: 100});
  $("#fixedmenu svg ").css("transform", "scale(0.8,0.8)");
  isNavDisplayed = false;
};

var NV_expand = function(){
  
  $("#fixedmenu #LOGOTYPE").animate({opacity: "1"},{duration: 100});
  $("#fixedmenu svg").animate({top: "0px"},{duration: 100});
  $("#fixedmenu svg ").css("transform", "scale(1,1)");

  var d = new $.Deferred();
  $("#fixedmenu").animate({height: navHeight + "px"},{duration: 100});
  $("#fixedmenu ul").css("display", "block");
  isNavDisplayed = true;
  d.resolve();

  return d.promise();
};

function adjustNav(){
  
  var v_crdt = $(window).scrollTop();
  if (v_crdt >= 100){
    if(isTopPage){
      NV_minimize();
      isTopPage = false;
    }
  } else if ( v_crdt < 100 ) {
    if(!isTopPage){
      NV_expand();
      isTopPage = true;
    }
  }
}


// スクロール判定
$(window).on("load scroll", adjustNav);

// マウスオーバー
$("#fixedmenu").hover(
  function () {
    if(!isNavDisplayed && !isTopPage){
      NV_expand();
    }
  },
  function () {
    if(isNavDisplayed && !isTopPage){
      NV_minimize();
    }
  }
);