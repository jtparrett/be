BE.modules.split = function(){
  var options = {};
  function init(){
    options.handle = byBehaviour('handle');
    
  }

  return {
    init: init
  }
}();