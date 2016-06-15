// --------------------------------------------------------------------------
// application.js
// --------------------------------------------------------------------------
// This file imports and initialises modules.
//
// Add module names to the modules array for automatic initialisation.
//
// No specific javascript should be placed in this file.
// --------------------------------------------------------------------------

$(function() {

  'use strict';

  Object.keys(BE.modules).forEach(function(key){
    BE.modules[key].init();
  });

  byBehaviour('form').parsley({
    errorsMessagesDisabled: true
  });

  setTimeout(function(){
    byBehaviour('parallax').parallax();
  }, 500);

  $('.banner__image, .section__image').objectFit();

  if(navigator.userAgent.indexOf('Safari') > -1){
    $('html').addClass('is-webkit');
  }
});