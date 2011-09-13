(function() {
  var replaceAdCallback = function(e) { 
    ensure_jquery();
    var computedLeft = $(e.target).offset().left;
    var computedTop = $(e.target).offset().top;
    var computedWidth = $(e.target).css('width');
    var computedHeight = $(e.target).css('height');
    var adUnitURL = prompt('Enter ad unit URL');  
    $('body').append('<iframe src="' + adUnitURL + '" style="position:absolute;top:' + computedTop + 'px;left:' + computedLeft + 'px;width:' + computedWidth +';height:' + computedHeight +'; z-index:1000; border:0" scrolling="no" ></iframe>');
    e.preventDefault();
    $('body').unbind('click', replaceAdCallback);
  };

  var ensure_jquery = function() {
    typeof(jQuery);
    if (typeof(jQuery) === 'undefined') {
      alert('no jquery: adding it now!');
      document.body.innerHTML += '<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.3.js"></script>';
    }
    else {
      alert('you already have jquery');
    }
  };

  $('body').click(replaceAdCallback);
})();
