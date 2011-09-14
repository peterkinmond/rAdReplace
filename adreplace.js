// Add this as a javascript bookmarklet in order to allow this functionality 
(function() {
  var replaceAdCallback = function(e) { 
    load_jquery();
    var adspot = $(e.target);
    var adUnitUrl = prompt('Enter ad unit URL');  
    createOverlayAd(adUnitUrl, adspot.offset().left, adspot.offset().top, adspot.css('width'), adspot.css('height'));

    $('body').unbind('click', replaceAdCallback);
    e.preventDefault();
  };

  var load_jquery = function() {
    if (typeof(jQuery) === 'undefined') {
      document.body.innerHTML += '<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.3.js"></script>';
    }
  };

  var createOverlayAd = function(adunitUrl, offsetLeft, offsetTop, width, height) {
    $('body').append('<iframe src="' + adunitUrl + '" style="position:absolute;top:' + offsetTop + 'px;left:' + offsetLeft + 'px;width:' + width +';height:' + height +'; z-index:1000; border:0" scrolling="no" ></iframe>');
  };

  $('body').click(replaceAdCallback);
})();
