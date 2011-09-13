$('body').click(function(e) { 
  var computedLeft = $(e.target).offset().left;
  var computedTop = $(e.target).offset().top;
  var computedWidth = $(e.target).css('width');
  var computedHeight = $(e.target).css('height');
  $('body').append('<iframe src="http://google.com" style="position:absolute;top:' + computedTop + 'px;left:' + computedLeft + 'px;width:' + computedWidth +';height:' + computedHeight +'; z-index:1000" scrolling="no" ></iframe>');
  e.preventDefault();
});
