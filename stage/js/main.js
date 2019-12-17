$(function(){
  'use strict'
  // Show & Hide Slide Bar
  $('.toggle-sidebar').on('click',function(){
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  // Toggle Sub Menu
  $('.toggle-submenu').on('click',function(){
    $(this).find(".fa-angle-right").toggleClass('down');
    $(this).next(".child-link").slideToggle();
  });
  // Toggle Full Screen
  $('.full-screen').on('click',function(){
    $(this).toggleClass("f-screen");
    if($(this).hasClass('f-screen')){
      openFullscreen();
    }else{
      closeFullscreen();
    }
  });
  // Show & Hide settings
  $('.toggle-settings').on('click',function(){
    $(this).parent().toggleClass('hide-settings');
  });
  //  Switch Color Theme
  var themeClasses = [];
  $(".c-options li").each(function(){
    themeClasses.push($(this).data("theme"));
  });
  $('.c-options li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('body').removeClass(themeClasses.join(" "))
    .addClass($(this).data("theme"));
  });
});

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}