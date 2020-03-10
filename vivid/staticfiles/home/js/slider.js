const mainSliderNext = () => {
  let item = $('.main-section__slider .slider-body .item');
  let slider = $('.main-section__slider .slider-body');
  let count = slider.attr('data-count');
  let sliderWidth = slider.width();
  let translate = (sliderWidth / 5) * +count;

  if((item.length - +count) > 4 ) {
    item.css('transform', 'translateX(-' + translate + 'px');
    slider.attr('data-count', +count + 1);
    $('.container--main-slider .slider-nav .prev').removeClass('disabled');

    if(!(item.length - (+count + 1) > 4)) {
      $('.container--main-slider .slider-nav .next').addClass('disabled');
    }
  }
};

const mainSliderPrev = () => {
  let item = $('.main-section__slider .slider-body .item');
  let slider = $('.main-section__slider .slider-body');
  let count = slider.attr('data-count');
  let sliderWidth = slider.width();
  let translate = (sliderWidth / 5) * (+count - 2);

  if(count > 1) {
    item.css('transform', 'translateX(-' + translate + 'px');
    slider.attr('data-count', +count - 1);
    $('.container--main-slider .slider-nav .next').removeClass('disabled');
  }

  if(slider.attr('data-count') === '1') {
    $('.container--main-slider .slider-nav .prev').addClass('disabled');
  }
};

export {mainSliderNext, mainSliderPrev};