$(function(){
  var instances = [];
  $.fn.parallax = function(){
    $(this).each(function(){
      instances.push(new parallax($(this)));
    });

    $(window).on('scroll', update);
  };

  function update(){
    var scrollTop = $(window).scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }

  var parallax = function(el){
    this.el = el;
    this.offset = el.offset().top;
  };

  parallax.prototype.update = function(scrollTop){
    if(scrollTop < this.offset){
      return false;
    }

    this.el.css({
      transform: 'translateY(' + scrollTop / 2 + 'px)'
    });
  };
}(jQuery));