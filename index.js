"use strict";
$("#courses").on("click", function(event) {
  $(".courses").toggleClass("hidden")
  $(".info").addClass("hidden");
});

$("#info").on("click", function(event) {
  $(".info").toggleClass("hidden")
  $(".courses").addClass("hidden");
});

// Look at this.attr() or event.target.attr()

// Add id to the lis: courses / How it works
  // Or 
// Show children based on id of clicked li