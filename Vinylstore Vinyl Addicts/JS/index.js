window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function () {

  var showHeaderAt = 150;

  var win = $(window),
      body = $('body');

  // Show the fixed header only on larger screen devices

  if (win.width() > 400) {

      // When we scroll more than 150px down, we set the
      // "fixed" class on the body element.

      win.on('scroll', function (e) {

          if (win.scrollTop() > showHeaderAt) {
              body.addClass('fixed');
          }
          else {
              body.removeClass('fixed');
          }
      });

  }

});