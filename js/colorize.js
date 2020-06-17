'use strict';

(function () {
  window.colorize = function (element, colors, field) {
    element.addEventListener('click', function () {
      var color = window.util.generateRandomData(colors);

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }

      field.value = color;
    });
  };
})();
