// Add this as a javascript bookmarklet in order to allow this functionality 
(function() {
  var replaceAdCallback = function(e) { 
    var adspot = $(e.target);
    var adUnitUrl = prompt('Enter ad unit URL');  
    createOverlayAd(adUnitUrl, adspot.offset().left, adspot.offset().top, adspot.css('width'), adspot.css('height'));

    $('body').unbind('click', replaceAdCallback);
    e.preventDefault();
  };

  var createOverlayAd = function(adunitUrl, offsetLeft, offsetTop, width, height) {
    $('body').append('<iframe src="' + adunitUrl + '" style="position:absolute;top:' + offsetTop + 'px;left:' + offsetLeft + 'px;width:' + width +';height:' + height +'; z-index:1000; border:0" scrolling="no" ></iframe>');
  };

  var overlayIframes = function() {
    var iframes = document.body.getElementsByTagName('iframe');
    for(var i = 0; i < iframes.length; i++) {
      iframe = iframes[i];
      console.log(iframe);

      var elem = document.createElement('div');

      elem.style.position = 'absolute';
      elem.style.left = findPos(iframe)[0] + 'px';
      elem.style.top = findPos(iframe)[1] + 'px';
      elem.style.width = iframe.offsetWidth + 'px';
      elem.style.height = iframe.offsetHeight + 'px';
    
      document.body.appendChild(elem);
    }
  };

  var findPos = function(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
      curleft = obj.offsetLeft;
      curtop = obj.offsetTop;
      while (obj = obj.offsetParent) {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      }
    }
    return [curleft,curtop];
  };

  overlayIframes();
  $('body').click(replaceAdCallback);
  alert("Click on the ad placement you'd like to replace");
})();


