$(function(){
  $.fn.objectFit = function(){
    if(!browserUnsupported()){
      return false;
    }

    $(this).each(function(){
      new objectFit(this);
    });
  };

  var objectFit = function(el){
    var el = $(el);
    this.opts = {
      src: el.attr('src'),
      parent: el.parent()
    };
    
    this.setBackground();
    el.remove();
  };

  objectFit.prototype.setBackground = function(){
    this.opts.parent.css({
      'background-size': 'cover',
      'background-position': 'center',
      'background-image': backgroundUrl(this.opts.src)
    });
  };

  function backgroundUrl(src){
    return 'url(' + src + ')';
  }

  function browserUnsupported() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ') > 0;
    var safari = ua.indexOf('Safari/537.78.2') > 0;

    if(safari){
        $('html').addClass('is-safari');
    }

    return msie || safari || !!navigator.userAgent.match(/Trident.*rv\:11\./);
  }
})