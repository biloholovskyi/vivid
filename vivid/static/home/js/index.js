import {vacModalClose, vacModalOpen, vacProfileOpen, vacProfileClose, mainModalOpen, mainModalClose, menu, scrollOn} from './modal';
import {mainSliderNext, mainSliderPrev} from "./slider";
import {switchNews} from "./swich";
import {switchHeader} from "./switchHeader";
import {prodModalOpen, prodModalClose} from "./productionModal";
import {vac} from "./vac";
import {scrollBottle} from "./mainBottle";
import {reportsSliderNext, reportsSliderPrev} from './docSlider';
import {fixer} from './fixer.js';

$(document).ready(function() {
  setTimeout(() => {
    if($('.main-info-oil__bottle').length > 0) {
      scrollBottle();
    }
  }, 500);
  fixer();
  $(".reports__buttons .next").on("click", reportsSliderNext);
  $(".reports__buttons .prev").on("click", reportsSliderPrev);
  $(".retail-slider .slider-nav .next").on("click", retailSliderNext);
  $(".retail-slider .slider-nav .prev").on("click", retailSliderPrev);
  $(".recipes__slider .prev").on("click", recipesSliderPrev);
  $(".recipes__slider .next").on("click", recipesSliderNext);
  $(".awards__nav .prev").on("click", awardsSliderPrev);
  $(".awards__nav .next").on("click", awardsSliderNext);
  $(".geo-list .item").on("click", geo);
  // modal
  $(".vac-modal .close").on("click", vacModalClose);
  $(".vacancy__list .item").on("click", vacModalOpen);
  $(".profile-show").on("click", vacProfileOpen);
  $(".vac-profile .body .close").on("click", vacProfileClose);
  $(".main-modal-show").on("click", mainModalOpen);
  $(".main-modal__body .close").on("click", mainModalClose);
  // modal end
  $(".adv-slider__nav .slider-nav .prev").on("click", advSliderPrev);
  $(".adv-slider__nav .slider-nav .next").on("click", advSliderNext);
  $(".materials__nav .slider-nav .next").on("click", materialSliderNext);
  $(".materials__nav .slider-nav .prev").on("click", materialSliderPrev);

  $('.container--main-slider .slider-nav .next').on('click', mainSliderNext);
  $('.container--main-slider .slider-nav .prev').on('click', mainSliderPrev);

  $('.news-cat .item').on('click', switchNews);

  $('.production-main__wrapper .item--main').on('click', prodModalOpen);
  $('.production-main__wrapper .item--main .item__modal .close').on('click', prodModalClose);

  $('.vacancy__list-wrapper .vacancy__list .item').on('click', vac);

  if($(".awards").length > 0) {
    createTimeLineAward();
  }

  $(".header__menu, .menu__close").on("click", menu);
});

$(window).resize(function () {
  fixer();
});

$(window).on('scroll', function () {
  scrollBottle();
  if($('.block-on-header-style').length) {
    switchHeader();
  }
});

// sliders
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
const recipesSliderNext = () => {
  let sliderItem = $(".recipes__slider .item");
  let slider = $(".recipes__slider");
  let countFactor = slider.attr("data-count");
  let translate = -432 * +countFactor;

  if(sliderItem.length - +countFactor > 2) {
    slider.attr("data-count", +countFactor + 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".recipes__slider .prev").removeClass("disabled");

    if(+countFactor + 3 === sliderItem.length) {
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
const awardsSliderNext = () => {
  let sliderItem = $(".awards__slider .item");
  let slider = $(".awards__slider");
  let countFactor = slider.attr("data-count");
  let translate = -350 * +countFactor;
  let timeCurr = $(".awards__nav .timeline .item--active");
  let timeNext = timeCurr.next(".item");

  if(sliderItem.length - +countFactor > 3) {
    slider.attr("data-count", +countFactor + 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".awards__nav .prev").removeClass("disabled");
    $(".awards__nav .timeline .item").removeClass("item--active");
    timeNext.addClass("item--active");

    if(+countFactor + 4 === sliderItem.length) {
      $(".awards__nav .next").addClass("disabled");
    }
  }
};
const awardsSliderPrev = () => {
  let sliderItem = $(".awards__slider .item");
  let slider = $(".awards__slider");
  let countFactor = slider.attr("data-count");
  let translate = -350 * (+countFactor - 2);
  let timeCurr = $(".awards__nav .timeline .item--active");
  let timeNext = timeCurr.prev(".item");
  if(+countFactor > 1) {
    slider.attr("data-count", +countFactor - 1);
    sliderItem.css("transform", "translateX(" + translate + "px)");
    $(".awards__nav .next").removeClass("disabled");
    $(".awards__nav .timeline .item").removeClass("item--active");
    timeNext.addClass("item--active");
  }

  if(slider.attr("data-count") === "1") {
    $(".awards__nav .prev").addClass("disabled");
  }
};
const createTimeLineAward = () => {
  let timeline = $(".awards__nav .timeline");
  let count = $(".awards__slider .item").length;
  timeline.html("");
  for(let i = 3; i < count; i++) {
    timeline.append("<div class='item'></div>")
  }

  timeline.children(".item:first-child").addClass("item--active");
};

const advSliderNext = () => {
  let timeCurr = $(".adv-slider__nav .timeline .item--active");
  let timeNext = timeCurr.next(".item");
  let text = $(".advantages-slider .main-title--active");
  let textNext = text.next(".main-title");
  let photo = $(".advantages-slider__img--active");
  let photoNext = photo.next(".advantages-slider__img");

  if(timeNext.length) {
    timeCurr.removeClass("item--active");
    timeNext.addClass("item--active");
    text.removeClass("main-title--active");
    textNext.addClass("main-title--active");
    photo.removeClass("advantages-slider__img--active");
    photoNext.addClass("advantages-slider__img--active");
    $(".adv-slider__nav .slider-nav .prev").removeClass("disabled");

    if(!timeNext.next(".item").length) {
      $(".adv-slider__nav .slider-nav .next").addClass("disabled");
    }
  }
};
const advSliderPrev = () => {
  let timeCurr = $(".adv-slider__nav .timeline .item--active");
  let timeNext = timeCurr.prev(".item");
  let text = $(".advantages-slider .main-title--active");
  let textNext = text.prev(".main-title");
  let photo = $(".advantages-slider__img--active");
  let photoNext = photo.prev(".advantages-slider__img");

  if(timeNext.length) {
    timeCurr.removeClass("item--active");
    timeNext.addClass("item--active");
    text.removeClass("main-title--active");
    textNext.addClass("main-title--active");
    photo.removeClass("advantages-slider__img--active");
    photoNext.addClass("advantages-slider__img--active");
    $(".adv-slider__nav .slider-nav .next").removeClass("disabled");

    if(!timeNext.prev(".item").length) {
      $(".adv-slider__nav .slider-nav .prev").addClass("disabled");
    }
  }
};

const materialSliderNext = () => {
  let timeCurr = $(".materials__nav .timeline .item--active");
  let timeNext = timeCurr.next(".item");
  let title = $(".materials__text .main-title--active");
  let titleNext = title.next(".main-title");
  let text = $(".materials__text .desc--active");
  let textNext = text.next(".desc");
  let count = $(".materials__nav .count-wrapper .count");
  let newCount = +count.html() + 1;
  newCount = newCount < 10 ? "0" + newCount : newCount;

  if(timeNext.length) {
    timeCurr.removeClass("item--active");
    timeNext.addClass("item--active");
    title.removeClass("main-title--active");
    titleNext.addClass("main-title--active");
    text.removeClass("desc--active");
    textNext.addClass("desc--active");
    count.html(newCount);
    $(".materials__nav .slider-nav .prev").removeClass("disabled");

    if(!timeNext.next(".item").length) {
      $(".materials__nav .slider-nav .next").addClass("disabled");
    }
  }
};
const materialSliderPrev = () => {
  let timeCurr = $(".materials__nav .timeline .item--active");
  let timeNext = timeCurr.prev(".item");
  let title = $(".materials__text .main-title--active");
  let titleNext = title.prev(".main-title");
  let text = $(".materials__text .desc--active");
  let textNext = text.prev(".desc");
  let count = $(".materials__nav .count-wrapper .count");
  let newCount = +count.html() - 1;
  newCount = newCount < 10 ? "0" + newCount : newCount;

  if(timeNext.length) {
    timeCurr.removeClass("item--active");
    timeNext.addClass("item--active");
    title.removeClass("main-title--active");
    titleNext.addClass("main-title--active");
    text.removeClass("desc--active");
    textNext.addClass("desc--active");
    count.html(newCount);
    $(".materials__nav .slider-nav .next").removeClass("disabled");

    if(!timeNext.prev(".item").length) {
      $(".materials__nav .slider-nav .prev").addClass("disabled");
    }
  }
};
// sliders end

// geo
function geo () {
  let country =  $(this).attr("data-map");
  $(".geo-list .item").removeClass("item--active");
  $(this).addClass("item--active");
  $(".map-partners").removeClass("map-partners--show");
  $("#" + country).addClass("map-partners--show");
  $(".geo-map").css("background-image", "url(/static/home/media/image/map-" + country + ".png)");
}

$("body").on("click", function (e) {
  const click = $(".vacancy__list .item, .vacancy__list .item .name, .vacancy__list .item .detail");
  if (!click.is(e.target) && !$(e.target).closest(".vac-modal__body").length) {
    vacModalClose();
    scrollOn();
  }

  const click2 = $(".profile-show");
  if (!click2.is(e.target) && !$(e.target).closest(".vac-profile .body").length) {
    vacProfileClose();
  }

  const mainModalClick = $(".main-modal-show");
  if (!mainModalClick.is(e.target) && !$(e.target).closest(".main-modal .main-modal__body").length) {
    mainModalClose();
  }

  const prod = $('.production-main__wrapper .item--main');
  if (!prod.is(e.target && $(e.target).closest(prod))) {
    prodModalClose();
  }
});