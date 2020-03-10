function switchNews () {
  const id = $(this).attr('id');
  $('.news-cat .item').removeClass('item--active');
  $(this).addClass('item--active');
  $('.vacancy__list').removeClass('show');
  $('.news-' + id).addClass('show');
}

export {switchNews};