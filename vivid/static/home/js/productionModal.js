function prodModalOpen (e) {
  if($(window).width() > 1350) {
    if(!$(e.target).hasClass('close')) {
      const shadow = $(this).children('.shadow').outerHeight();
      const modal = $(this).children('.item__modal');
      const bottom = shadow + 17;
      prodModalClose();
      $('.production-main__wrapper .item--main').css('filter', 'blur(16px)');
      $('.production-main__wrapper .item--main .unactive').removeClass('unactive');
      $(this).children('picture.item').css('transform', 'translateY(-27px)');
      modal.css({
        'bottom' : bottom + 'px',
        'height' : 'calc(100% - 17px - 3% - ' + shadow + 'px)'
      });
      $(this).css({
        'z-index' : '25',
        'filter' : 'none'
      });
      modal.addClass('item__modal--show');
    }
  } else {
    console.log($(e.target).parent('.item--main'));
  }
}

const prodModalClose = () => {
  $('.production-main__wrapper .item--main .item__modal').removeClass('item__modal--show').removeAttr('style');
  $('.production-main__wrapper .item--main').removeAttr('style');
  $('.production-main__wrapper .item--main picture.item').addClass('unactive').removeAttr('style');
};

export {prodModalOpen, prodModalClose};