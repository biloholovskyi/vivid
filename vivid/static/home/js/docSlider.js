const reportsSliderNext = () => {
  let sliderItem = $(".reports__slider__item");
  let slider = $(".reports__slider");
  let countFactor = slider.attr("data-count");
  const width = sliderItem.eq(0).css('width').split('px')[0];
  const margin = sliderItem.eq(0).css('margin-right').split('px')[0];
  const realWidth = +width + +margin;
  let translate = -realWidth * +countFactor;


  if(sliderItem.length > +countFactor) {
    slider.attr("data-count", +countFactor + 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".reports__buttons .prev").removeClass("disabled");

    if(+countFactor + 3 === sliderItem.length) {
      $(".reports__buttons .next").addClass("disabled");
    }
  }
};
const reportsSliderPrev = () => {
  let sliderItem = $(".reports__slider__item");
  let slider = $(".reports__slider");
  let countFactor = slider.attr("data-count");
  const width = sliderItem.eq(0).css('width').split('px')[0];
  const margin = sliderItem.eq(0).css('margin-right').split('px')[0];
  const realWidth = +width + +margin;
  let translate = -realWidth * (+countFactor - 2);
  if(+countFactor > 1) {
    slider.attr("data-count", +countFactor - 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".reports__buttons .next").removeClass("disabled");
  }

  if(slider.attr("data-count") === "1") {
    $(".reports__buttons .prev").addClass("disabled");
  }
};

export {reportsSliderNext, reportsSliderPrev}