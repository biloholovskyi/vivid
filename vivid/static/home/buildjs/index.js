!function(e){var a={};function t(i){if(a[i])return a[i].exports;var s=a[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)t.d(i,s,function(a){return e[a]}.bind(null,s));return i},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a);var i=function(){$("body").css("overflow","hidden")},s=function(){$("body").css("overflow","visible")},n=function(){$(".vac-modal__desc").css("display","flex"),setTimeout((function(){$(".vac-modal__desc").css("opacity","1"),i()}),300)},r=function(){$(".vac-profile").css("display","flex"),setTimeout((function(){$(".vac-profile").css("opacity","1"),i()}),300)},l=function(){$(".vac-modal__desc").css("opacity","0"),s(),setTimeout((function(){$(".vac-modal__desc").css("display","none")}),300)},d=function(){$(".vac-profile").css("opacity","0"),s(),setTimeout((function(){$(".vac-profile").css("display","none")}),300)},o=function(){$(".main-modal").css("display","flex"),setTimeout((function(){$(".main-modal").css("opacity","1"),i()}),300)},c=function(){$(".main-modal").css("opacity","0"),s(),setTimeout((function(){$(".main-modal").css("display","none")}),300)},m=function(){var e=$(".menu");e.hasClass("menu--show")?(s(),e.removeClass("menu--show"),$("body").css("overflow","auto"),setTimeout((function(){e.css("display","none")}),100)):(e.css("display","block"),setTimeout((function(){e.addClass("menu--show"),$("body").css("overflow","hidden"),i()}),100))},v=function(){var e=$(".main-section__slider .slider-body .item"),a=$(".main-section__slider .slider-body"),t=a.attr("data-count"),i=a.width()/5*+t;e.length-+t>4&&(e.css("transform","translateX(-"+i+"px"),a.attr("data-count",+t+1),$(".container--main-slider .slider-nav .prev").removeClass("disabled"),e.length-(+t+1)>4||$(".container--main-slider .slider-nav .next").addClass("disabled"))},_=function(){var e=$(".main-section__slider .slider-body .item"),a=$(".main-section__slider .slider-body"),t=a.attr("data-count"),i=a.width()/5*(+t-2);t>1&&(e.css("transform","translateX(-"+i+"px"),a.attr("data-count",+t-1),$(".container--main-slider .slider-nav .next").removeClass("disabled")),"1"===a.attr("data-count")&&$(".container--main-slider .slider-nav .prev").addClass("disabled")};function p(){var e=$(this).attr("id");$(".news-cat .item").removeClass("item--active"),$(this).addClass("item--active"),$(".vacancy__list").removeClass("show"),$(".news-"+e).addClass("show")}function u(e){if($(window).width()>1350){if(!$(e.target).hasClass("close")){var a=$(this).children(".shadow").outerHeight(),t=$(this).children(".item__modal"),i=a+17;f(),$(".production-main__wrapper .item--main").css("filter","blur(16px)"),$(".production-main__wrapper .item--main .unactive").removeClass("unactive"),$(this).children("picture.item").css("transform","translateY(-27px)"),t.css({bottom:i+"px",height:"calc(100% - 17px - 3% - "+a+"px)"}),$(this).css({"z-index":"25",filter:"none"}),t.addClass("item__modal--show")}}else console.log($(e.target).parent(".item--main"))}var f=function(){$(".production-main__wrapper .item--main .item__modal").removeClass("item__modal--show").removeAttr("style"),$(".production-main__wrapper .item--main").removeAttr("style"),$(".production-main__wrapper .item--main picture.item").addClass("unactive").removeAttr("style")};function h(){var e=$(this).attr("data-pk"),a=vacList.findIndex((function(a){return a.pk===parseInt(e)})),t=vacList[a],i=t.fields.desc,s=t.fields.name,n=t.fields.price,r=t.fields.type,l=t.fields.atr;$(".vac-modal__body .body").html(i),$(".vac-modal__body .vac-modal__head .name").html(s),$(".vac-modal__body .vac-modal__head .desc").html("".concat(n," ∙ ").concat(r," ∙ ").concat(l))}var g=function(){var e=$("#scroll-bottle"),a=$(".production-main").offset().top,t=pageYOffset/8,i=$(window).width(),s=i<768?320:350,n=48+$(".main-info-oil__wrapper").innerHeight()+36,r=i<768?n:96,l=i<768?a-n-e.innerHeight()- -1*+e.attr("data-mt")-s:a-96-e.innerHeight()- -1*+e.attr("data-mt")-s;if(e.attr("data-mt",t),pageYOffset>+l)e.css({position:"absolute",bottom:"".concat(r,"px"),top:"auto","margin-top":"0"});else{var d=e.attr("data-mt");e.css({position:"fixed",bottom:"auto",top:"".concat(s,"px"),"margin-top":"-".concat(d,"px")})}},b=function(){var e=$(".reports__slider__item"),a=$(".reports__slider"),t=a.attr("data-count"),i=-(+e.eq(0).css("width").split("px")[0]+ +e.eq(0).css("margin-right").split("px")[0])*+t;e.length>+t&&(a.attr("data-count",+t+1),e.css("transform","translateX("+i+"px)"),$(".reports__buttons .prev").removeClass("disabled"),+t+3===e.length&&$(".reports__buttons .next").addClass("disabled"))},C=function(){var e=$(".reports__slider__item"),a=$(".reports__slider"),t=a.attr("data-count"),i=-(+e.eq(0).css("width").split("px")[0]+ +e.eq(0).css("margin-right").split("px")[0])*(+t-2);+t>1&&(a.attr("data-count",+t-1),e.css("transform","translateX("+i+"px)"),$(".reports__buttons .next").removeClass("disabled")),"1"===a.attr("data-count")&&$(".reports__buttons .prev").addClass("disabled")};$(document).ready((function(){setTimeout((function(){$(".main-info-oil__bottle").length>0&&g()}),500),$(".reports__buttons .next").on("click",b),$(".reports__buttons .prev").on("click",C),$(".retail-slider .slider-nav .next").on("click",x),$(".retail-slider .slider-nav .prev").on("click",w),$(".recipes__slider .prev").on("click",k),$(".recipes__slider .next").on("click",y),$(".awards__nav .prev").on("click",O),$(".awards__nav .next").on("click",T),$(".geo-list .item").on("click",q),$(".vac-modal .close").on("click",l),$(".vacancy__list .item").on("click",n),$(".profile-show").on("click",r),$(".vac-profile .body .close").on("click",d),$(".main-modal-show").on("click",o),$(".main-modal__body .close").on("click",c),$(".adv-slider__nav .slider-nav .prev").on("click",H),$(".adv-slider__nav .slider-nav .next").on("click",j),$(".materials__nav .slider-nav .next").on("click",P),$(".materials__nav .slider-nav .prev").on("click",S),$(".container--main-slider .slider-nav .next").on("click",v),$(".container--main-slider .slider-nav .prev").on("click",_),$(".news-cat .item").on("click",p),$(".production-main__wrapper .item--main").on("click",u),$(".production-main__wrapper .item--main .item__modal .close").on("click",f),$(".vacancy__list-wrapper .vacancy__list .item").on("click",h),$(".awards").length>0&&X(),$(".header__menu, .menu__close").on("click",m)})),$(window).resize((function(){})),$(window).on("scroll",(function(){var e;g(),$(".block-on-header-style").length&&(e=$(".block-on-header-style").outerHeight(),pageYOffset>e?$(".header").removeClass("header--page"):$(".header").addClass("header--page"))}));var x=function(){var e=$(".retail-slider__list .item"),a=$(".retail-slider__list"),t=a.attr("data-count"),i=-348*+t;e.length-+t>2&&(a.attr("data-count",+t+1),e.css("transform","translateX("+i+"px)"),$(".retail-slider .prev").removeClass("disabled"),+t+3===e.length&&$(".retail-slider .next").addClass("disabled"))},w=function(){var e=$(".retail-slider__list .item"),a=$(".retail-slider__list"),t=a.attr("data-count"),i=-348*(+t-2);+t>1&&(a.attr("data-count",+t-1),e.css("transform","translateX("+i+"px)"),$(".retail-slider .next").removeClass("disabled")),"1"===a.attr("data-count")&&$(".retail-slider .prev").addClass("disabled")},y=function(){var e=$(".recipes__slider .item"),a=$(".recipes__slider"),t=a.attr("data-count"),i=-432*+t;e.length-+t>2&&(a.attr("data-count",+t+1),e.css("transform","translateX("+i+"px)"),$(".recipes__slider .prev").removeClass("disabled"),+t+3===e.length&&$(".recipes__slider .next").addClass("disabled"))},k=function(){var e=$(".recipes__slider .item"),a=$(".recipes__slider"),t=a.attr("data-count"),i=-432*(+t-2);+t>1&&(a.attr("data-count",+t-1),e.css("transform","translateX("+i+"px)"),$(".recipes__slider .next").removeClass("disabled")),"1"===a.attr("data-count")&&$(".recipes__slider .prev").addClass("disabled")},T=function(){var e=$(".awards__slider .item"),a=$(".awards__slider"),t=a.attr("data-count"),i=-350*+t,s=$(".awards__nav .timeline .item--active").next(".item");e.length-+t>3&&(a.attr("data-count",+t+1),e.css("transform","translateX("+i+"px)"),$(".awards__nav .prev").removeClass("disabled"),$(".awards__nav .timeline .item").removeClass("item--active"),s.addClass("item--active"),+t+4===e.length&&$(".awards__nav .next").addClass("disabled"))},O=function(){var e=$(".awards__slider .item"),a=$(".awards__slider"),t=a.attr("data-count"),i=-350*(+t-2),s=$(".awards__nav .timeline .item--active").prev(".item");+t>1&&(a.attr("data-count",+t-1),e.css("transform","translateX("+i+"px)"),$(".awards__nav .next").removeClass("disabled"),$(".awards__nav .timeline .item").removeClass("item--active"),s.addClass("item--active")),"1"===a.attr("data-count")&&$(".awards__nav .prev").addClass("disabled")},X=function(){var e=$(".awards__nav .timeline"),a=$(".awards__slider .item").length;e.html("");for(var t=3;t<a;t++)e.append("<div class='item'></div>");e.children(".item:first-child").addClass("item--active")},j=function(){var e=$(".adv-slider__nav .timeline .item--active"),a=e.next(".item"),t=$(".advantages-slider .main-title--active"),i=t.next(".main-title"),s=$(".advantages-slider__img--active"),n=s.next(".advantages-slider__img");a.length&&(e.removeClass("item--active"),a.addClass("item--active"),t.removeClass("main-title--active"),i.addClass("main-title--active"),s.removeClass("advantages-slider__img--active"),n.addClass("advantages-slider__img--active"),$(".adv-slider__nav .slider-nav .prev").removeClass("disabled"),a.next(".item").length||$(".adv-slider__nav .slider-nav .next").addClass("disabled"))},H=function(){var e=$(".adv-slider__nav .timeline .item--active"),a=e.prev(".item"),t=$(".advantages-slider .main-title--active"),i=t.prev(".main-title"),s=$(".advantages-slider__img--active"),n=s.prev(".advantages-slider__img");a.length&&(e.removeClass("item--active"),a.addClass("item--active"),t.removeClass("main-title--active"),i.addClass("main-title--active"),s.removeClass("advantages-slider__img--active"),n.addClass("advantages-slider__img--active"),$(".adv-slider__nav .slider-nav .next").removeClass("disabled"),a.prev(".item").length||$(".adv-slider__nav .slider-nav .prev").addClass("disabled"))},P=function(){var e=$(".materials__nav .timeline .item--active"),a=e.next(".item"),t=$(".materials__text .main-title--active"),i=t.next(".main-title"),s=$(".materials__text .desc--active"),n=s.next(".desc"),r=$(".materials__nav .count-wrapper .count"),l=+r.html()+1;l=l<10?"0"+l:l,a.length&&(e.removeClass("item--active"),a.addClass("item--active"),t.removeClass("main-title--active"),i.addClass("main-title--active"),s.removeClass("desc--active"),n.addClass("desc--active"),r.html(l),$(".materials__nav .slider-nav .prev").removeClass("disabled"),a.next(".item").length||$(".materials__nav .slider-nav .next").addClass("disabled"))},S=function(){var e=$(".materials__nav .timeline .item--active"),a=e.prev(".item"),t=$(".materials__text .main-title--active"),i=t.prev(".main-title"),s=$(".materials__text .desc--active"),n=s.prev(".desc"),r=$(".materials__nav .count-wrapper .count"),l=+r.html()-1;l=l<10?"0"+l:l,a.length&&(e.removeClass("item--active"),a.addClass("item--active"),t.removeClass("main-title--active"),i.addClass("main-title--active"),s.removeClass("desc--active"),n.addClass("desc--active"),r.html(l),$(".materials__nav .slider-nav .next").removeClass("disabled"),a.prev(".item").length||$(".materials__nav .slider-nav .prev").addClass("disabled"))};function q(){var e=$(this).attr("data-map");$(".geo-list .item").removeClass("item--active"),$(this).addClass("item--active"),$(".map-partners").removeClass("map-partners--show"),$("#"+e).addClass("map-partners--show"),$(".geo-map").css("background-image","url(/static/home/media/image/map-"+e+".png)")}$("body").on("click",(function(e){$(".vacancy__list .item, .vacancy__list .item .name, .vacancy__list .item .detail").is(e.target)||$(e.target).closest(".vac-modal__body").length||(l(),s()),$(".profile-show").is(e.target)||$(e.target).closest(".vac-profile .body").length||d(),$(".main-modal-show").is(e.target)||$(e.target).closest(".main-modal .main-modal__body").length||c();var a=$(".production-main__wrapper .item--main");a.is(e.target&&$(e.target).closest(a))||f()}))}]);