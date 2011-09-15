// Add this as a javascript bookmarklet in order to allow this functionality 
(function() {
  var replaceAdCallback = function(e) { 
    var adspot = e.target;
    var adUnitUrl = prompt('Enter ad unit URL');  
    createOverlayAd(adUnitUrl, findPos(adspot)[0], findPos(adspot)[1], getDimensions(adspot)[0], getDimensions(adspot)[1]);

    document.body.removeEventListener('click', replaceAdCallback);
    e.preventDefault();
  };

  var createOverlayAd = function(adunitUrl, offsetLeft, offsetTop, width, height) {
    var overlay = document.createElement('iframe');

    overlay.src = adunitUrl;
    overlay.scrolling = 'no';
    overlay.style.position   = 'absolute';
    overlay.style.left       = offsetLeft + 'px';
    overlay.style.top        = offsetTop + 'px';
    overlay.style.width      = width + 'px';
    overlay.style.height     = height + 'px';
    overlay.style.border     = 0;
    overlay.style.zIndex     = 1000;

    document.body.appendChild(overlay);
  };

  var overlayIframes = function() {
    var iframes = document.body.getElementsByTagName('iframe');
    for(var i = 0; i < iframes.length; i++) {
      iframe = iframes[i];

      var elem = document.createElement('div');

      elem.style.position   = 'absolute';
      elem.style.left       = findPos(iframe)[0] + 'px';
      elem.style.top        = findPos(iframe)[1] + 'px';
      elem.style.width      = getDimensions(iframe)[0] + 'px';
      elem.style.height     = getDimensions(iframe)[1] + 'px';
    
      document.body.appendChild(elem);
    }
  };

  var getDimensions = function(elem) {
    return [elem.offsetWidth, elem.offsetHeight];
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
  document.body.addEventListener('click', replaceAdCallback);
  alert("Click on the ad placement you'd like to replace");
})();


