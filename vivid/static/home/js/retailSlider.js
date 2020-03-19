const retailSliderNext = () => {
  let sliderItem = $(".retail-slider__list .item");
  let slider = $(".retail-slider__list");
  let countFactor = slider.attr("data-count");
  let translate = -348 * +countFactor;

  if(sliderItem.length - +countFactor > 2) {
    slider.attr("data-count", +countFactor + 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".retail-slider .prev").removeClass("disabled");

    if(+countFactor + 3 === sliderItem.length) {
      $(".retail-slider .next").addClass("disabled");
    }
  }
};
const retailSliderPrev = () => {
  let sliderItem = $(".retail-slider__list .item");
  let slider = $(".retail-slider__list");
  let countFactor = slider.attr("data-count");
  let translate = -348 * (+countFactor - 2);
  if(+countFactor > 1) {
    slider.attr("data-count", +countFactor - 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".retail-slider .next").removeClass("disabled");
  }

  if(slider.attr("data-count") === "1") {
    $(".retail-slider .prev").addClass("disabled");
  }
};

export {retailSliderNext, retailSliderPrev}