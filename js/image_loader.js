/**
 * image loader module
 */
var imageLoader = function (my) {
  my = my || {};
  my.url = my.element ? my.element.attr('data-url') : null;

  if (jQuery(window).width() <= 768) {
    my.url = my.url.split('.')[0] + '_sm.jpg';
  }

  my.voidFunction = function () {};

  /*
   * Public
   */
  var showBackgroundImage;
  var showImage;
  var loadBackgroundPhoto;
  var loadPhoto;
  var setElement;

  /*
   * that
   */
  var that = {};

  /*****************************************************************************
   *                             PUBLIC METHODS
   ****************************************************************************/
  /**
   * Display the loaded background image
   */
  showBackgroundImage = function () {
    if (!my.element) {
      return;
    }

    var imageContainer = my.imageContainer || '<div></div>';
    jQuery(imageContainer)
      .addClass('image')
      .css('background-image', 'url(' + my.url + ')')
      .appendTo(my.element);

    my.element.find('.image').fadeIn(function () {
      if (typeof my.onLoad === 'function') {
        return my.onLoad();
        my.onLoad = my.voidFunction;
      }
    });
  };

  /**
   * Display the loaded image
   */
  showImage = function () {
    if (!my.element) {
      return;
    }

    var $image = my.element.find('img');

    my.element.css({
      'background-image':'none',
      'height': $image.innerHeight()
    });

    $image.fadeIn(function () {
      if (typeof my.onLoad === 'function') {
        return my.onLoad();
        my.onLoad = my.voidFunction;
      }
    });
  };

  /**
   * Load the actual background image file
   */
  loadBackgroundPhoto = function (url) {
    my.url = my.url || url;

    var image = new Image();
    image.onload = function() {
      if (my.element) {
        showBackgroundImage();
      } else if (typeof my.onLoad === 'function') {
        my.onLoad(that);
        my.onLoad = my.voidFunction;
      }
    };
    image.src = my.url;
  };

  /**
   * Load the actual image file
   */
  loadPhoto = function () {
    my.element.find('img').load(function() {
      showImage();
    });
  };

  /**
   * Set element
   */
  setElement = function (element) {
    my.element = element;
  };

  that.showBackgroundImage = showBackgroundImage;
  that.showImage = showImage;
  that.loadBackgroundPhoto = loadBackgroundPhoto;
  that.loadPhoto = loadPhoto;
  that.setElement = setElement;

  return that;
};
