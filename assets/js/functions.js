/*global $*/

$(function(){
  setInterval(function(){articleTada()}, 4000);
});


$(window).scroll(function(){
  projectScroll();
  startArticles();
});

function projectScroll() {
  var wScroll = $(window).scrollTop();
  
  $('.project-strip').css('background-position','center -'+ wScroll + 'px');
}

function startArticles(){
  var wScroll = $(window).scrollTop();

  if($('section.experience').offset().top - $(window).height()/1.2 < wScroll) {
    $('.article-thumb').each(function(i){
      setTimeout(function(){
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 100 * i);
    });
  }
}

function articleTada(){
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1
  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}