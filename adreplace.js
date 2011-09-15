(function() {
  var replaceAdCallback = function(e) { 
    var adUnitUrl = prompt('Enter ad unit URL');  
    var adUnitWidth = prompt('Enter ad unit width');  
    var adUnitHeight = prompt('Enter ad unit height');  
    var oldAd = e.target;
    var newAd = createNewAd(adUnitUrl, adUnitWidth, adUnitHeight);
    console.log(newAd);

    if (oldAd.className == 'overlay_block') {
      oldAdId = 'replaced_overlay_' + oldAd.id.split('replace_overlay_')[1];
      oldAd = document.getElementById(oldAdId);
    }

    oldAd.parentNode.replaceChild(newAd, oldAd);

    document.body.removeEventListener('click', replaceAdCallback);
    e.preventDefault();
  };

  var createNewAd = function(adunitUrl, width, height) {
    var overlay = document.createElement('iframe');

    overlay.src = adunitUrl;
    overlay.scrolling        = 'no';
    overlay.width            = width + 'px';
    overlay.height           = height + 'px';
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

      elem.id               = 'replace_overlay_' + i;
      elem.className        = 'overlay_block';
      elem.style.position   = 'absolute';
      elem.style.left       = iframe.offsetLeft + 'px';
      elem.style.top        = iframe.offsetTop + 'px';
      elem.style.width      = getDimensions(iframe)[0] + 'px';
      elem.style.height     = getDimensions(iframe)[1] + 'px';
      elem.style.zIndex     = 999999;
      
      iframe.id = 'replaced_overlay_' + i;
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

  var get_matching_parent = function(elem) {
    if (!elem) {
      return null;
    }
    if (getDimensions(elem)[0] == 300 && getDimensions(elem)[1] == 241) {
      return elem;
    }
    return get_matching_parent(elem.parentNode);
  };

  overlayIframes();
  document.body.addEventListener('click', replaceAdCallback);
  alert("Click on the ad placement you'd like to replace");
})();


