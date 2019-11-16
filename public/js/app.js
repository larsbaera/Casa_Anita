document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".scrollspy");
  var options = {
    throttle: 10000,
    scrollOffset: 50
  };
  var instances = M.ScrollSpy.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".materialboxed");
  var options = { inDuration: 500, outDuration: 500 };
  var instances = M.Materialbox.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var options = {
    coverTrigger: false,
    inDuration: 300,
    outDuration: 300
  };
  var instances = M.Sidenav.init(elems, options);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var options = { hover: true, alignment: "right", coverTrigger: false };
  var instances = M.Dropdown.init(elems, options);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var options = {};
  var instances = M.Carousel.init(elems, options);
});
// $(".carousel.carousel-slider")
//   .carousel({
//     indicators: true
//   })
//   .height(700);
