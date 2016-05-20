'use strict';

var BE = window.BE || {};
BE.modules = {};

function byBehaviour(selector) {
  return $('[data-behaviour="' + selector + '"]');
}

function byElement(selector) {
  return $('[data-element="' + selector + '"]');
}

function dataString(attribute, selector) {
  return '[data-' + attribute + '="' + selector + '"]';
}