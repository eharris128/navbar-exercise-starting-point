'use strict';
$(document).ready(function() {
  $('#courses').on('click', function(event) {
    $('.courses').toggleClass('hidden');
    $('.info').addClass('hidden');
  });

  $('#info').on('click', function(event) {
    $('.info').toggleClass('hidden');
    $('.courses').addClass('hidden');
  });

  if ($(window).width() <= 576) {
    $('#nav-bar').addClass('hidden');
  } else {
    $('#nav-bar').removeClass('hidden');
  }

  $('.hamburger').on('click', function(event) {
    console.log('hey');
    $('#nav-bar').toggleClass('hidden');
  });
});