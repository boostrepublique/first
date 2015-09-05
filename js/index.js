jQuery('document').ready(function () {
  setSizes();

  var images = jQuery('.image-loader');
  for (var i = 0; i < images.length; i++) {
    imageLoader({
      element: images.eq(i),
      onLoad: setSizes
    }).loadBackgroundPhoto();
  }

  jQuery(window).on('resize', setSizes);
  jQuery(window).on('orientationchange', setSizes);
});

jQuery(window).load(function () {
  var images = jQuery('.image-loader').not(':visible');

  for (var i = 0; i < images.length; i++) {
    imageLoader({
      element: images.eq(i)
    }).showBackgroundImage();
  }
});

var setSizes = function () {
  var height = jQuery('.image-loader').eq(0).width() / 1.5;

  if (height > window.innerHeight) {
    jQuery('.image-loader, .image').height(window.innerHeight - 20);
    jQuery('.image-loader, .image').width((window.innerHeight - 20) * 1.5);
  } else {
    jQuery('.image-loader, .image').width('100%');
    jQuery('.image-loader, .image').height(jQuery('.image-loader').eq(0).width() / 1.5);
  }
};
