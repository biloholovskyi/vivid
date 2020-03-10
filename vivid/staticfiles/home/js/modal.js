const scrollOf = () => {
  $('body').css('overflow', 'hidden');
};

const scrollOn = () => {
  $('body').css('overflow', 'visible');
};

// modal vac
const vacModalOpen = () => {
  $(".vac-modal__desc").css("display", "flex");
  setTimeout(() => {
    $(".vac-modal__desc").css("opacity", "1");
    scrollOf();
  }, 300);
};

const vacProfileOpen = () => {
  $(".vac-profile").css("display", "flex");
  setTimeout(() => {
    $(".vac-profile").css("opacity", "1");
    scrollOf();
  }, 300);
};

const vacModalClose = () => {
  $(".vac-modal__desc").css("opacity", "0");
  scrollOn();
  setTimeout(() => {
    $(".vac-modal__desc").css("display", "none");
  }, 300);
};

const vacProfileClose = () => {
  $(".vac-profile").css("opacity", "0");
  scrollOn();
  setTimeout(() => {
    $(".vac-profile").css("display", "none");
  }, 300);
};

//main modal
const mainModalOpen = () => {
  $(".main-modal").css("display", "flex");
  setTimeout(() => {
    $(".main-modal").css("opacity", "1");
    scrollOf();
  }, 300);
};

const mainModalClose = () => {
  $(".main-modal").css("opacity", "0");
  scrollOn();
  setTimeout(() => {
    $(".main-modal").css("display", "none");
  }, 300);
};
//main modal end

// menu
const menu = () => {
  const menuBlock = $(".menu");
  if(menuBlock.hasClass("menu--show")) {
    scrollOn();
    menuBlock.removeClass("menu--show");
    $("body").css("overflow", "auto");
    setTimeout(() => {
      menuBlock.css("display", "none");
    }, 100)
  } else {
    menuBlock.css("display", "block");
    setTimeout(() => {
      menuBlock.addClass("menu--show");
      $("body").css("overflow", "hidden");
      scrollOf();
    }, 100);
  }
};

export {vacModalClose, vacModalOpen, vacProfileOpen, vacProfileClose, mainModalOpen, mainModalClose, menu, scrollOn}