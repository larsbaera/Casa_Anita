// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".sidenav");
//   var instances = M.Sidenav.init(elems, options);
// });

// $(document).ready(function() {
//   $(".sidenav").sidenav();
// });
$(document).ready(function() {
  $(".scrollspy").scrollSpy();
});
$(document).ready(function() {
  $(".materialboxed").materialbox();
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});
$(document).ready(function() {
  $(".sidenav").sidenav();
});
$(".dropdown-trigger").dropdown();
