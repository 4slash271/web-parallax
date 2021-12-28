function moveHeader(){
   let scrollTop =document.documentElement.scrollTop;
 
   if(scrollTop > 200) {
    if(!$('.header-wrapper').hasClass('active')) {
        $('.header-wrapper').css('top', '-60px')
        $('.header-wrapper').stop().animate({'top': 0}, 300)
        $('.header-wrapper').addClass('active')
    }
}
else {
    $('.header-wrapper').removeClass('active')
}
}









window.addEventListener('scroll', moveHeader);