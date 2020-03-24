import {vacModalClose, vacModalOpen, vacProfileOpen, vacProfileClose, mainModalOpen, mainModalClose, menu, scrollOn} from './modal';
import {mainSliderNext, mainSliderPrev} from "./slider";
import {switchNews} from "./swich";
import {switchHeader} from "./switchHeader";
import {prodModalOpen, prodModalClose} from "./productionModal";
import {vac} from "./vac";
import {scrollBottle} from "./mainBottle";
import {reportsSliderNext, reportsSliderPrev} from './docSlider';
import {fixer} from './fixer.js';
import {retailSliderNext, retailSliderPrev} from "./retailSlider";
import {awardsSliderPrev, awardsSliderNext, createTimeLineAward} from "./advSlider";
import {recipesSliderNext, recipesSliderPrev} from "./recipesSlider";

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

  $('.email-send').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      url: '/static/home/php/main-email.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function( data ) {
        $('.modal-alert').fadeIn('slow').css('display', 'flex');
        $('input[type="text"], input[type="password"], input[type="tel"], input[type="email"], input[type="file"], textarea').val('');
        setTimeout(function () {
          $('.modal-alert').fadeOut('slow');
        }, 2000)
      }
    });
  });
});

$(function() {
  document.getElementById('vac-profile-form').addEventListener('submit', function(evt) {
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "/static/home/php/career-email.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        $('.modal-alert').fadeIn('slow').css('display', 'flex');
        $('input[type="text"], input[type="password"], input[type="tel"], input[type="email"], input[type="file"], textarea').val('');
        setTimeout(function () {
          $('.modal-alert').fadeOut('slow');
        }, 2000)
      }
    };
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    };
    http.send(new FormData(f));
  }, false);

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