$('body').click(function(e) { 
  var computedLeft = $(e.target).offset().left;
  var computedTop = $(e.target).offset().top;
  var computedWidth = $(e.target).css('width');
  var computedHeight = $(e.target).css('height');
  var adUnitURL = prompt('Enter ad unit URL');  
  $('body').append('<iframe src="' + adUnitURL + '" style="position:absolute;top:' + computedTop + 'px;left:' + computedLeft + 'px;width:' + computedWidth +';height:' + computedHeight +'; z-index:1000; border:0" scrolling="no" ></iframe>');
  e.preventDefault();
});
