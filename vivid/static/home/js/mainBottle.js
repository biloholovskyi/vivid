const scrollBottle = () => {
  const bottle = $('#scroll-bottle');
  const productionTop = $('.production-main').offset().top;
  // speed additional scroll bottle
  const top = pageYOffset / 8;
  const windowWidth = $(window).width();
  const realTop = windowWidth < 768 ? 320 : 350;
  const wrapperHeight = $('.main-info-oil__wrapper').innerHeight();
  const bottomAdaptive = 48 + wrapperHeight + 36;
  const bottom = windowWidth < 768 ? bottomAdaptive : 96;
  const maxScroll = windowWidth < 768 ? productionTop - bottomAdaptive - bottle.innerHeight() - (+bottle.attr('data-mt') * -1) - realTop : productionTop - 96 - bottle.innerHeight() - (+bottle.attr('data-mt') * -1) - realTop;


  bottle.attr('data-mt', top);

  if(pageYOffset > +maxScroll) {
    bottle.css({
      'position' : 'absolute',
      'bottom' : `${bottom}px`,
      'top' : 'auto',
      'margin-top' : '0'
    });
  } else {
    const mt = bottle.attr('data-mt');
    bottle.css({
      'position' : 'fixed',
      'bottom' : 'auto',
      'top' : `${realTop}px`,
      'margin-top' : `-${mt}px`
    });
  }
};

export {scrollBottle}