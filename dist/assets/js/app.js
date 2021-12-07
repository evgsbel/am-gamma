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
      });
      var target = event.target;
      elem.classList.add('is-active');
    });
  });
};

openSubMenu(); // case slider

var sliderParent = document.getElementsByClassName("case");

for (var i = 0; i < sliderParent.length; i++) {
  var el = sliderParent[i];
  var swiper = el.getElementsByClassName("js-case-swiper")[0];
  var nx = el.getElementsByClassName("slider-navigation_next")[0];
  var pr = el.getElementsByClassName("slider-navigation_prev")[0];
  new Swiper(swiper, {
    speed: 1000,
    spaceBetween: 75,
    loop: true,
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.slider-pagination',
      clickable: true
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    },
    on: {
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        $('.case__left').removeClass('animate animate__fadeInLeft');
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        $('.case__left').addClass('animate animate__fadeInLeft');
      }
    }
  });
}