"use strict";
$(document).ready(function() {
$("#courses").on("click", function(event) {
  // if ($("courses").hasClass("hidden")) {
  //   $("body").addClass("border");
  // } 
  $(".courses").toggleClass("hidden")
  $(".info").addClass("hidden");
  
});

$("#info").on("click", function(event) {
  $(".info").toggleClass("hidden")
  $(".courses").addClass("hidden");
  // if ($("body").hasClass("border")) {
  //   // $("body").removeClass("border");
  // } 
});


  if ($(window).width() <= 576) {
    $("#nav-bar").addClass("hidden");
  } else {
    $("#nav-bar").removeClass("hidden")
  }


$(".hamburger").on('click', function(event) {
  console.log('hey')
  $("#nav-bar").toggleClass("hidden");
})
});
