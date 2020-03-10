$(document).ready(function(){
  $(".reports__buttons .next").on("click", reportsSliderNext);
  $(".reports__buttons .prev").on("click", reportsSliderPrev);
});

$(window).resize(function () {

});

const reportsSliderNext = () => {
  let sliderItem = $(".reports__slider__item");
  let slider = $(".reports__slider");
  let countFactor = slider.attr("data-count");
  let translate = -432 * +countFactor;

  if(sliderItem.length < +countFactor + 4) {
    if(slider.attr("data-last") === "0") {
      slider.attr("data-last", "1");
      slider.attr("data-count", +countFactor + 1);
      sliderItem.css("transform", "translateX(" + translate + "px)");
    } else {
      slider.attr("data-count", +countFactor);
    }
  } else {
    slider.attr("data-count", +countFactor + 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
  }
};

const reportsSliderPrev = () => {
  let sliderItem = $(".reports__slider__item");
  let slider = $(".reports__slider");
  let countFactor = slider.attr("data-count");
  if(+countFactor === 1) {
    let translate = 0;
    sliderItem.css("transform", "translateX(" + translate + "px)");
  } else {
    let translate = -432 * (+countFactor - 2);
    slider.attr("data-last", "0");
    sliderItem.css("transform", "translateX(" + translate + "px)");
    slider.attr("data-count", +countFactor - 1);
  }
};