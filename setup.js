/* Carousel */
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

/*Efeito Menu Fixado - Mudança de background*/

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10) {
    $("#containertop").css("background-color", "#141414");
    $("#containertop").css("width", "100%");
    $("#containertop").css("z-index", "2");
    $("#containertop").css("margin-left", "0");
    $("#containertop").css("transition", "0.8s");
  } else {
    $("#containertop").css("background-color", "transparent");
  }
});
