//$(function(){});

$(window).scroll(function(){
  projectScroll();
});

function projectScroll() {
  var wScroll = $(window).scrollTop();
  
  $('.project-strip').css('background-position','center -'+ wScroll + 'px');
}