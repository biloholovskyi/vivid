const recipesSliderNext = () => {
  let sliderItem = $(".recipes__slider .item");
  let slider = $(".recipes__slider");
  let countFactor = slider.attr("data-count");
  const width = sliderItem.css('width').split('px')[0];
  let translate = -(+width) * +countFactor;

  if(sliderItem.length > countFactor) {
    slider.attr("data-count", +countFactor + 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".recipes__slider .prev").removeClass("disabled");

    if(+countFactor + 2 > sliderItem.length) {
      $(".recipes__slider .next").addClass("disabled");
    }
  }
};
const recipesSliderPrev = () => {
  let sliderItem = $(".recipes__slider .item");
  let slider = $(".recipes__slider");
  let countFactor = slider.attr("data-count");
  let translate = -432 * (+countFactor - 2);
  if(+countFactor > 1) {
    slider.attr("data-count", +countFactor - 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".recipes__slider .next").removeClass("disabled");
  }

  if(slider.attr("data-count") === "1") {
    $(".recipes__slider .prev").addClass("disabled");
  }
};

export {recipesSliderNext, recipesSliderPrev}