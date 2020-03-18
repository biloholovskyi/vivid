const fixer = () => {
  const fixerBlock = $('.fixer');

  if(fixerBlock.length > 0) {
    fixerBlock.css('min-height', $('.header__wrapper').get(0).getBoundingClientRect().height);
    fixerBlock.css('max-height', $('.header__wrapper').get(0).getBoundingClientRect().height);
  }
};

export {fixer}