//navigation.js

var isTopPage = true;
var isNavDisplayed = true;

var navHeight = $("#fixedmenu").height();
var logobtnHeight = $(".svxlogobox").eq(0).height();
console.log("logobtnHeight" + logobtnHeight);

$("#fixedmenu").css("height", navHeight + "px");

var NV_minimize = function(){
  if(isTopPage) {
    $("#fixedmenu ul").css("display", "none");
    $("#fixedmenu").css("overflow", "hidden");
    $("#fixedmenu").animate({height: "100px"},{duration: 100});
    $("#fixedmenu #LOGOTYPE").animate({opacity: "0"},{duration: 100});
    $("#fixedmenu svg").animate({top: "-28px"},{duration: 100});
    $("#fixedmenu svg ").css("transform", "scale(0.8,0.8)");
    isTopPage = false;
    isNavDisplayed = false;
  }
};

var NV_expand = function(){
  
  if(!isTopPage) {
    $("#fixedmenu #LOGOTYPE").animate({opacity: "1"},{duration: 100});
    $("#fixedmenu svg").animate({top: "0px"},{duration: 100});
    $("#fixedmenu svg ").css("transform", "scale(1,1)");

    var d = new $.Deferred();
    $("#fixedmenu").animate({height: navHeight + "px"},{duration: 100});
    $("#fixedmenu ul").css("display", "block");
    isTopPage = true;
    isNavDisplayed = true;
    d.resolve();

    return d.promise();
  }
};

function adjustNav(){
  
  var v_crdt = $(window).scrollTop();
  if (v_crdt >= logobtnHeight){
    NV_minimize();
  } else if ( v_crdt < logobtnHeight ) {
    NV_expand();
  }
}


// スクロール判定
$(window).on("load scroll", adjustNav);