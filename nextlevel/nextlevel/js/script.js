// <![CDATA[
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:960,height:320,opacity:1});

  // Radius Box
  $('.content .mainbar img.fl, .content p.pages span, .content p.pages a, .content .sidebar .gadget').css({"border-radius":"6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
  //$('.fbg_resize').css({"border-radius":"10px", "-moz-border-radius":"10px", "-webkit-border-radius":"10px"});
  //$('.content p.pages span, .content p.pages a').css({"border-radius":"16px", "-moz-border-radius":"16px", "-webkit-border-radius":"16px"});
  //$('.menu_nav ul').css({"border-top-left-radius":"10px", "border-top-right-radius":"10px", "-moz-border-radius-topleft":"10px", "-moz-border-radius-topright":"10px", "-webkit-border-top-left-radius":"10px", "-webkit-border-top-right-radius":"10px"});
  $('.menu_nav ul').css({"border-bottom-left-radius":"16px", "border-bottom-right-radius":"16px", "-moz-border-radius-bottomleft":"16px", "-moz-border-radius-bottomright":"16px", "-webkit-border-bottom-left-radius":"16px", "-webkit-border-bottom-right-radius":"16px"});

});	

// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6, .content .mainbar a.com, .menu_nav ul li a', { hover: true });
//Cufon.replace('h1', { color: '-linear-gradient(#fff, #ffaf02)'});
//Cufon.replace('h1 small', { color: '#8a98a5'});

// ]]>