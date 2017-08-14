"use strict";
$("#courses").on("click", function(event) {
  $(".courses").toggleClass("hidden")
  $(".info").addClass("hidden");
});

$("#info").on("click", function(event) {
  $(".info").toggleClass("hidden")
  $(".courses").addClass("hidden");
});
