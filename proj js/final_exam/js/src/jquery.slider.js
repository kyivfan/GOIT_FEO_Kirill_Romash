(function($) {

  $.fn.slider = function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 256;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('.carousel-element').length;
    var elementsCount = elementsList.find('.carousel-element1').length;
    var elementsCount = elementsList.find('.carousel-element2').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
            currentLeftValue += 256;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
          currentLeftValue -= 256;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
  });

  return this;
}
})(jQuery);
