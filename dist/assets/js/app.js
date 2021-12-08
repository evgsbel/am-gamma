"use strict";

//back to top
$(window).scroll(function () {
  var height = $(window).scrollTop();

  if (height > 100) {
    $('.js-to-top').fadeIn();
  } else {
    $('.js-to-top').fadeOut();
  }
});
$(document).ready(function () {
  $(".js-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
}); //openHideMenu

$(function () {
  var body = document.querySelector('body');
  var openElem = document.querySelector('.js-open-hide-menu');
  var hideMenu = document.querySelector('.hide-menu');
  var sidebar = document.querySelector('.sidebar');
  openElem.addEventListener('click', function (event) {
    event.preventDefault();
    openElem.classList.toggle('is-active');
    hideMenu.classList.toggle('is-open');
    sidebar.classList.toggle('opened-menu');
    body.classList.toggle('opened-menu');
  });
}); // sub menu

var openSubMenu = function openSubMenu() {
  var panelHeading = document.querySelectorAll('.hide-menu__sub'),
      panelContent = document.querySelector('.sub-menu');
  panelHeading.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      event.preventDefault();
      panelHeading.forEach(function (panelHeading) {
        panelHeading.classList.remove('is-active');
      }); // let target = event.target;

      elem.classList.add('is-active');
    });
  });
};

openSubMenu(); // case slider

var sliderCaseParent = document.getElementsByClassName("case");

for (var i = 0; i < sliderCaseParent.length; i++) {
  var el = sliderCaseParent[i];
  var _swiper = el.getElementsByClassName("js-case-swiper")[0];
  var nx = el.getElementsByClassName("slider-navigation_next")[0];
  var pr = el.getElementsByClassName("slider-navigation_prev")[0];
  new Swiper(_swiper, {
    speed: 1000,
    spaceBetween: 75,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.slider-pagination',
      clickable: true
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    }
  });
} // open why section item


var openItem = function openItem() {
  var item = document.querySelectorAll('.js-open-item');
  item.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      elem.nextElementSibling.classList.add('is-active');
    });
  });
  var closeItem = document.querySelectorAll('.why__close');
  closeItem.forEach(function (cl) {
    cl.addEventListener('click', function (event) {
      cl.parentElement.classList.remove('is-active');
    });
  });
};

openItem(); // swipers news

var sliderNewsParent = document.getElementsByClassName("news");

for (var _i = 0; _i < sliderNewsParent.length; _i++) {
  var _el = sliderNewsParent[_i];

  var swiperNewsLeft = _el.getElementsByClassName("js-news-slider-left")[0];

  var _nx = _el.getElementsByClassName("slider-navigation_next")[0];

  var _pr = _el.getElementsByClassName("slider-navigation_prev")[0];

  var pg = _el.getElementsByClassName("slider-pagination")[0];

  new Swiper(swiperNewsLeft, {
    direction: "vertical",
    speed: 800,
    loop: true,
    pagination: {
      el: pg,
      clickable: true
    },
    navigation: {
      nextEl: _nx,
      prevEl: _pr
    }
  });
}

for (var _i2 = 0; _i2 < sliderNewsParent.length; _i2++) {
  var _el2 = sliderNewsParent[_i2];

  var swiperNewsRight = _el2.getElementsByClassName("js-news-slider-right")[0];

  var _nx2 = _el2.getElementsByClassName("slider-navigation_next")[0];

  var _pr2 = _el2.getElementsByClassName("slider-navigation_prev")[0];

  var _pg = _el2.getElementsByClassName("slider-pagination")[0];

  new Swiper(swiperNewsRight, {
    direction: "vertical",
    speed: 800,
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: _pg,
      clickable: true
    },
    navigation: {
      nextEl: _nx2,
      prevEl: _pr2
    }
  });
} // control slider


var swiper = new Swiper(".js-control-swiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  initialSlide: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500]
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500]
    }
  }
}); // tabs

document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});