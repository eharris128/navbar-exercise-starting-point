"use strict";
$(".courses").on("click", function(event) {
  $(".courses").removeClass("hidden")
});

$(".info").on("click", function(event) {
  $(".info").removeClass("hidden")
});

// Look at this.attr() or event.target.attr()

// Add id to the lis: courses / How it works
  // Or 
// Show children based on id of clicked li