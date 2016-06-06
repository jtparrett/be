$(function(){
  var instances = [];
  $.fn.parallax = function(){
    $(this).each(function(){
      instances.push(new parallax($(this)));
    });

    $(window).on('scroll', update);
    $(window).on('resize', reset);
  };

  function update(){
    var scrollTop = $(window).scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }

  function reset(){
    instances.forEach(function(inst){
      inst.reset();
    }); 
  }

  var parallax = function(el){
    this.el = el;
    this.reset();
    this.update($(window).scrollTop());
  };

  parallax.prototype.reset = function(){
    this.offset = this.el.offset().top;
    this.height = this.el.height();
  };

  parallax.prototype.update = function(scrollTop){
    var self = this;
    if(scrollTop + $(window).height() < this.offset || scrollTop > this.offset + this.height){
      return false;
    }

    this.el.css({
      transform: 'translateY(' + (scrollTop - self.offset) / 2 + 'px)'
    });
  };
}(jQuery));