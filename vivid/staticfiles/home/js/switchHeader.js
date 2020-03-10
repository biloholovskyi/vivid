const switchHeader = () => {
  const heightBlock = $('.block-on-header-style').outerHeight();
  if(pageYOffset > heightBlock) {
    $('.header').removeClass('header--page');
    $('.header .red-button').removeClass('red-button--transparent');
  } else {
    $('.header').addClass('header--page');
    $('.header .red-button').addClass('red-button--transparent');
  }
};

export {switchHeader};