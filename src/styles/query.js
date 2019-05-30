import $ from "jquery";

var btn = $('.burger-menu');

btn.on('click', function() {
    console.log("clicked");
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});