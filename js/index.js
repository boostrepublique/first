jQuery('document').ready(function () {
  setSizes();

  var images = jQuery('.image-loader');
  for (var i = 0; i < images.length; i++) {
    (function(image) {
      imageLoader({
        element: image,
        onLoad: function () {
          setSize(image);
        }
      }).loadBackgroundPhoto();
    })(images.eq(i));
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

var setSize = function (image) {
  var height = (jQuery('.album').width()) / 1.5;
  image.height(height)
       .find('.image').height(height);
};

var setSizes = function (image) {
  var height = (jQuery('.album').width() - 20) / 1.5;
  jQuery('.image-loader, .image').height(jQuery('.image-loader').eq(0).width() / 1.5);
};
