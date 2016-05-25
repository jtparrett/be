BE.modules.split = function(){
  var options = {};
  function init(){
    byBehaviour('split').on('click', toggle);
  }

  function toggle(){
    $('.split__item--shut').removeClass('split__item--shut');
    $(this).addClass('split__item--open').siblings().removeClass('split__item--open');
  }

  return {
    init: init
  }
}();