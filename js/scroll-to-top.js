 $(window).scroll(function() {
    if ($(this).scrollTop() > 1450 ) {
        $('.pa-scroll-to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('.pa-scroll-to-top').stop(true, true).fadeOut();
    }
});
$(function(){$(".pa-scroll-to-top__button").click(function(){$("html,body").animate({scrollTop:$(".pa-scroll-to-top__marker").offset().top},"1000");return false})})