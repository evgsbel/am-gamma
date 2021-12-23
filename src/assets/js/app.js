//back to top

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.js-to-top').fadeIn();
    $('.burger ').addClass('is-fixed');
  } else {
    $('.js-to-top').fadeOut();
    $('.burger ').removeClass('is-fixed');
  }
});
$(document).ready(function () {
  $(".js-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow");
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

// hero slider



const heroSwiper = new Swiper('.hero__swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 75,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
});

// case slider

let sliderCaseParent = document.getElementsByClassName("case");

for (let i = 0; i < sliderCaseParent.length; i++) {

  let el = sliderCaseParent[i];

  let swiper = el.getElementsByClassName("js-case-swiper")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];

  new Swiper(swiper, {
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
  const overlay = document.querySelector('.overlay')
  const item = document.querySelectorAll('.js-open-item')
  item.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      elem.nextElementSibling.classList.add('is-active');
      overlay.classList.add('is-active')
    })
  });

  const closeItem = document.querySelectorAll('.why__close')
  closeItem.forEach((cl) => {
    cl.addEventListener('click', (event) => {
      cl.parentElement.classList.remove('is-active')
      overlay.classList.remove('is-active')
    })
  });
};

openItem();

// swipers news

let sliderNewsParent = document.getElementsByClassName("news");

for (let i = 0; i < sliderNewsParent.length; i++) {

  let el = sliderNewsParent[i];

  let swiperNewsLeft = el.getElementsByClassName("js-news-slider-left")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];
  let pg = el.getElementsByClassName("slider-pagination")[0];

  new Swiper(swiperNewsLeft, {
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
    },
    breakpoints: {
      320: {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 20
      },
      960: {
        direction: "horizontal",
        slidesPerView: 2,
        spaceBetween: 20
      },
      1025: {
        direction: "vertical",
      }
    }
  });
}

for (let i = 0; i < sliderNewsParent.length; i++) {

  let el = sliderNewsParent[i];

  let swiperNewsRight = el.getElementsByClassName("js-news-slider-right")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];
  let pg = el.getElementsByClassName("slider-pagination")[0];

  new Swiper(swiperNewsRight, {
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

let sliderControlParent = document.getElementsByClassName("control");

for (let i = 0; i < sliderControlParent.length; i++) {

  let el = sliderControlParent[i];

  let sliderControlTop = el.getElementsByClassName("js-control-slider--top")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];

  new Swiper(sliderControlTop, {
    speed: 300,
    effect: 'coverflow', // sets the effect to coverflow
    grabCursor: true, // sets grab cursor as the hover cursor over the slides
    centeredSlides: true, // used to center the active slide
    spaceBetween: 0,// distance between slides in px
    initialSlide: 2,
    // number of slides per view
    loop: false, // sets the slides on a continuous loop// allows for pagination bullets to be dynamic and clickable
    coverflowEffect: {
      rotate: 0, // slide rotation degree
      stretch: 150, // stretches the space between the slides in px
      depth: 200, // offsets the depth of neighboring slides
      modifier: 1, // effect multiplier
      slideShadows: false, // disables the shadow around the slide container
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}

for (let i = 0; i < sliderControlParent.length; i++) {

  let el = sliderControlParent[i];

  let sliderControlBottom = el.getElementsByClassName("js-control-slider--bottom")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];

  new Swiper(sliderControlBottom, {
    speed: 300,
    effect: 'coverflow', // sets the effect to coverflow
    grabCursor: true, // sets grab cursor as the hover cursor over the slides
    centeredSlides: true, // used to center the active slide
    spaceBetween: 0,// distance between slides in px
    initialSlide: 2,
    // number of slides per view
    loop: false, // sets the slides on a continuous loop// allows for pagination bullets to be dynamic and clickable
    coverflowEffect: {
      rotate: 0, // slide rotation degree
      stretch: 150, // stretches the space between the slides in px
      depth: 200, // offsets the depth of neighboring slides
      modifier: 1, // effect multiplier
      slideShadows: false, // disables the shadow around the slide container
    },
    navigation: {
      nextEl: nx,
      prevEl: pr
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}

$(() => {
  function checkWidth() {
    let windowWidth = $('body').innerWidth()

    if (windowWidth < 600) {
      let sliderControlParent = document.getElementsByClassName("control");

      for (let i = 0; i < sliderControlParent.length; i++) {

        let el = sliderControlParent[i];

        let sliderControlTop = el.getElementsByClassName("js-control-slider--top")[0];
        let nx = el.getElementsByClassName("slider-navigation_next")[0];
        let pr = el.getElementsByClassName("slider-navigation_prev")[0];

        new Swiper(sliderControlTop, {
          speed: 300,
          effect: 'coverflow', // sets the effect to coverflow
          grabCursor: true, // sets grab cursor as the hover cursor over the slides
          centeredSlides: true, // used to center the active slide
          spaceBetween: 0,// distance between slides in px
          initialSlide: 2,
          // number of slides per view
          loop: false, // sets the slides on a continuous loop// allows for pagination bullets to be dynamic and clickable
          coverflowEffect: {
            rotate: 0, // slide rotation degree
            stretch: 150, // stretches the space between the slides in px
            depth: 200, // offsets the depth of neighboring slides
            modifier: 1, // effect multiplier
            slideShadows: false, // disables the shadow around the slide container
          },
          navigation: {
            nextEl: nx,
            prevEl: pr
          },
          breakpoints: {
            320: {
              slidesPerView: 1.5,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            }
          }
        });
      }
    }
// control sliders slider


    else {
      console.log('asldaslkdjasd')
    }
  }
  checkWidth();
  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
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

// maps

ymaps.ready(function () {
  var myMapNsk = new ymaps.Map('map1', {
      center: [55.059394, 82.910054],
      zoom: 17
    }),

    myMapMsk = new ymaps.Map('map2', {
      center: [55.734851, 37.665138],
      zoom: 17
    }),

    myMapSpb = new ymaps.Map('map3', {
      center: [59.920163, 30.346132],
      zoom: 17
    }),

    myMapNn = new ymaps.Map('map4', {
      center: [56.308415, 44.031436],
      zoom: 17
    }),

    myPlacemarkNsk = new ymaps.Placemark(myMapNsk.getCenter(), {}, {

      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/map-dot.png',
      // Размеры метки.
      iconImageSize: [46, 46],
    }),

    myPlacemarkMsk = new ymaps.Placemark(myMapMsk.getCenter(), {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/map-dot.png',
      // Размеры метки.
      iconImageSize: [46, 46],
    }),

    myPlacemarkSpb = new ymaps.Placemark(myMapSpb.getCenter(), {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/map-dot.png',
      // Размеры метки.
      iconImageSize: [46, 46],
    }),

    myPlacemarkNn = new ymaps.Placemark(myMapNn.getCenter(), {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'assets/img/map-dot.png',
      // Размеры метки.
      iconImageSize: [46, 46],
    });


  myMapNsk.balloon.open(
    myMapNsk.getCenter(), {
      contentBody: '<div class="map__caption">Красный проспект, 157/1</div>', },
    {
      closeButton: false,
      offset: [100, 65],
      minWidth: 180
    }
  )

  myMapMsk.balloon.open(
    myMapMsk.getCenter(), {
      contentBody: '<div class="map__caption">Марксистская улица, 34к8</div>', },
    {
      closeButton: false,
      offset: [100, 65],
      minWidth: 180
    }
  )

  myMapSpb.balloon.open(
    myMapSpb.getCenter(), {
      contentBody: '<div class="map__caption">Социалистическая улица, 21</div>', },
    {
      closeButton: false,
      offset: [100, 65],
      minWidth: 180
    }
  )

  myMapNn.balloon.open(
    myMapNn.getCenter(), {
      contentBody: '<div class="map__caption">Гаражная улица, 4</div>', },
    {
      closeButton: false,
      offset: [100, 65],
      minWidth: 180
    }
  )

  myMapNsk.geoObjects.add(myPlacemarkNsk)
  myMapMsk.geoObjects.add(myPlacemarkMsk)
  myMapSpb.geoObjects.add(myPlacemarkSpb)
  myMapNn.geoObjects.add(myPlacemarkNn)

});



