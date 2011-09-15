(function() {
  var replaceAdCallback = function(e) { 
    var adUnitUrl = prompt('Enter ad unit URL');  
    var oldAd = e.target;
    var newAd = createNewAd(adUnitUrl, findPos(oldAd)[0], findPos(oldAd)[1], getDimensions(oldAd)[0], getDimensions(oldAd)[1]);
    document.body.appendChild(newAd);

    document.body.removeEventListener('click', replaceAdCallback);
    e.preventDefault();
  };

  var get_matching_parent = function(elem) {
    if (!elem) {
      return null;
    }
    if (getDimensions(elem)[0] == 300 && getDimensions(elem)[1] == 241) {
      return elem;
    }
    return get_matching_parent(elem.parentNode);
  };


  var createNewAd = function(adunitUrl, offsetLeft, offsetTop, width, height) {
    var overlay = document.createElement('iframe');

    overlay.src = adunitUrl;
    overlay.scrolling = 'no';
    overlay.style.position   = 'absolute';
    overlay.style.left       = offsetLeft + 'px';
    overlay.style.top        = offsetTop + 'px';
    overlay.style.width      = width + 'px';
    overlay.style.height     = height + 'px';
    overlay.style.border     = 0;
    overlay.style.zIndex     = 1000000;
  
    return overlay;
  };

  var overlayIframes = function() {
    var iframes = document.body.getElementsByTagName('iframe');
    var embeds = document.body.getElementsByTagName('embed');
    iframes = Array.prototype.slice.call(iframes);
    embeds = Array.prototype.slice.call(embeds);
    iframes = iframes.concat(embeds);
    for(var i = 0; i < iframes.length; i++) {
      iframe = iframes[i];

      var elem = document.createElement('div');

      elem.style.position   = 'absolute';
      elem.style.left       = iframe.offsetLeft + 'px';
      elem.style.top        = iframe.offsetTop + 'px';
      elem.style.width      = getDimensions(iframe)[0] + 'px';
      elem.style.height     = getDimensions(iframe)[1] + 'px';
      elem.style.zIndex     = 999999;

      iframe.parentNode.appendChild(elem);
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
      obj = obj.offsetParent;
      while (obj) {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
        obj = obj.offsetParent;
      }
    }
    return [curleft,curtop];
  };

  overlayIframes();
  document.body.addEventListener('click', replaceAdCallback);
  alert("Click on the ad placement you'd like to replace");
})();


