const awardsSliderNext = () => {
  let sliderItem = $(".awards__slider .item");
  let slider = $(".awards__slider");
  let countFactor = slider.attr("data-count");
  const width = sliderItem.eq(0).css('width').split('px')[0];
  let translate = -(+width) * +countFactor;
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
  const width = sliderItem.eq(0).css('width').split('px')[0];
  let translate = -(+width) * (+countFactor - 2);
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

export {awardsSliderNext, awardsSliderPrev, createTimeLineAward}