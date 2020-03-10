"use strict";

$(document).ready(function () {
  $(".reports__buttons .next").on("click", reportsSliderNext);
  $(".reports__buttons .prev").on("click", reportsSliderPrev);
});
$(window).resize(function () {});

var reportsSliderNext = function reportsSliderNext() {
  var sliderItem = $(".reports__slider__item");
  var slider = $(".reports__slider");
  var countFactor = slider.attr("data-count");
  var translate = -432 * +countFactor;

  if (sliderItem.length < +countFactor + 4) {
    if (slider.attr("data-last") === "0") {
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

var reportsSliderPrev = function reportsSliderPrev() {
  var sliderItem = $(".reports__slider__item");
  var slider = $(".reports__slider");
  var countFactor = slider.attr("data-count");

  if (+countFactor === 1) {
    var translate = 0;
    sliderItem.css("transform", "translateX(" + translate + "px)");
  } else {
    var _translate = -432 * (+countFactor - 2);

    slider.attr("data-last", "0");
    sliderItem.css("transform", "translateX(" + _translate + "px)");
    slider.attr("data-count", +countFactor - 1);
  }
};