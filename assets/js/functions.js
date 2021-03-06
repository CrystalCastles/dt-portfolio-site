/*global $*/

$(function(){
  setInterval(function(){articleTada()}, 4000);
  mobileNav();
  smoothScroll(300);
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

$(window).scroll(function(){
  projectScroll();
  startArticles();
});


function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

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

$(window).resize(function() {
  if($(window).width() > 640){
    //mentoringWideStart();
  } else {
    //mentoringNarrowStart();
  }

});