"use strict";function byBehaviour(a){return $('[data-behaviour="'+a+'"]')}function byElement(a){return $('[data-element="'+a+'"]')}function dataString(a,b){return"[data-"+a+'="'+b+'"]'}var BE=window.BE||{};BE.modules={},BE.modules.split=function(){function a(){b.handle=byBehaviour("handle")}var b={};return{init:a}}(),$(function(){Object.keys(BE.modules).forEach(function(a){BE.modules[a].init()})});
//# sourceMappingURL=application.js.map