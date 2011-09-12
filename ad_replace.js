$('body').click(function(e) { 
  var computedLeft = $(e.target).offset().left;
  var computedTop = $(e.target).offset().top;
  $('body').append('<iframe src="http://google.com" style="position:absolute;top:' + computedTop + 'px;left:' + computedLeft + 'px; z-index:1000" scrolling="no" ></iframe>');
});
