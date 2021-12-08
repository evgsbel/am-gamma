//back to top

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.js-to-top').fadeIn();
  } else {
    $('.js-to-top').fadeOut();
  }
});
$(document).ready(function() {
  $(".js-to-top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});

//openHideMenu
$(() => {
  let body = document.querySelector('body')
  let openElem = document.querySelector('.js-open-hide-menu')
  let hideMenu = document.querySelector('.hide-menu')
  let sidebar = document.querySelector('.sidebar')
  openElem.addEventListener('click', (event) => {
    event.preventDefault()
    openElem.classList.toggle('is-active')
    hideMenu.classList.toggle('is-open')
    sidebar.classList.toggle('opened-menu')
    body.classList.toggle('opened-menu')
  })
})

// sub menu

const openSubMenu = () => {

  const panelHeading = document.querySelectorAll('.hide-menu__sub'),
    panelContent = document.querySelector('.sub-menu');

  panelHeading.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      panelHeading.forEach(panelHeading => {
        panelHeading.classList.remove('is-active')
      })
      // let target = event.target;
      elem.classList.add('is-active')

    });
  });
};

openSubMenu();

// case slider

let sliderCaseParent = document.getElementsByClassName("case");

for(let i = 0; i < sliderCaseParent.length; i++) {

  let el = sliderCaseParent[i];

  let swiper = el.getElementsByClassName("js-case-swiper")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];

  new Swiper (swiper, {
    speed: 1000,
    spaceBetween: 75,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    }
  });
}


// open why section item

const openItem = () => {

  const item = document.querySelectorAll('.js-open-item')
    item.forEach((elem) => {
    elem.addEventListener('click', (event) => {
     elem.nextElementSibling.classList.add('is-active')
      })
    });

  const closeItem = document.querySelectorAll('.why__close')
  closeItem.forEach((cl) => {
    cl.addEventListener('click', (event) => {
      cl.parentElement.classList.remove('is-active')
    })
  });
};

openItem();

// swipers news

let sliderNewsParent = document.getElementsByClassName("news");

for(let i = 0; i < sliderNewsParent.length; i++) {

  let el = sliderNewsParent[i];

  let swiperNewsLeft = el.getElementsByClassName("js-news-slider-left")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];
  let pg = el.getElementsByClassName("slider-pagination")[0];

  new Swiper (swiperNewsLeft, {
    direction: "vertical",
    speed: 800,
    loop: true,
    pagination: {
      el: pg,
      clickable: true,
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    }
  });
}

for(let i = 0; i < sliderNewsParent.length; i++) {

  let el = sliderNewsParent[i];

  let swiperNewsRight = el.getElementsByClassName("js-news-slider-right")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];
  let pg = el.getElementsByClassName("slider-pagination")[0];

  new Swiper (swiperNewsRight, {
    direction: "vertical",
    speed: 800,
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: pg,
      clickable: true,
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    }
  });
}


// control slider

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
});

// tabs

document.addEventListener('DOMContentLoaded', function () {
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });

      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');

    });
  });
});






