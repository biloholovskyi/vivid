function vac () {
  const pk = $(this).attr('data-pk');
  const index = vacList.findIndex(el => el.pk === parseInt(pk));
  const elem = vacList[index];
  const text = elem.fields.desc;
  const name = elem.fields.name;
  const price = elem.fields.price;
  const type = elem.fields.type;
  const atr = elem.fields.atr;

  $('.vac-modal__body .body').html(text);
  $('.vac-modal__body .vac-modal__head .name').html(name);
  $('.vac-modal__body .vac-modal__head .desc').html(`${price} ∙ ${type} ∙ ${atr}`);
}

export {vac};