'use strict';

(function () {

  var getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomIndex = function (arr) {
    var result;

    for (var i = 0; i < arr.length; i++) {
      result = arr[getRandomNumber(0, arr.length - 1)];
    }
    return result;
  };

  window.functionsRandom = {
    getRandomNumber: getRandomNumber,
    getRandomIndex: getRandomIndex
  };

})();
