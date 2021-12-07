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
      let target = event.target;
      elem.classList.add('is-active')

    });
  });
};

openSubMenu();

// case slider

let sliderParent = document.getElementsByClassName("case");

for(let i = 0; i < sliderParent.length; i++) {

  let el = sliderParent[i];

  let swiper = el.getElementsByClassName("js-case-swiper")[0];
  let nx = el.getElementsByClassName("slider-navigation_next")[0];
  let pr = el.getElementsByClassName("slider-navigation_prev")[0];

  new Swiper (swiper, {
    speed: 1000,
    spaceBetween: 75,
    loop: true,
    grabCursor: true,
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



