// Add this as a javascript bookmarklet in order to allow this functionality 
(function() {
  var replaceAdCallback = function(e) { 
    load_jquery();
    var computedLeft = $(e.target).offset().left;
    var computedTop = $(e.target).offset().top;
    var computedWidth = $(e.target).css('width');
    var computedHeight = $(e.target).css('height');
    var adUnitURL = prompt('Enter ad unit URL');  
    $('body').append('<iframe src="' + adUnitURL + '" style="position:absolute;top:' + computedTop + 'px;left:' + computedLeft + 'px;width:' + computedWidth +';height:' + computedHeight +'; z-index:1000; border:0" scrolling="no" ></iframe>');
    e.preventDefault();
    $('body').unbind('click', replaceAdCallback);
  };

  var load_jquery = function() {
    if (typeof(jQuery) === 'undefined') {
      document.body.innerHTML += '<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.3.js"></script>';
    }
  };

  $('body').click(replaceAdCallback);
})();
