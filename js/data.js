'use strict';

(function () {

  var FIRST_NAME = ['Иван Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var getRandomIndex = window.functionsRandom.getRandomIndex;

  var renderSimilarCharacters = function (quantity) {
    var alikeCharacters = [];

    for (var i = 0; i < quantity; i++) {
      alikeCharacters.push(
          {
            name: getRandomIndex(FIRST_NAME) + ' ' + getRandomIndex(LAST_NAME),
            coatColor: getRandomIndex(COLORS_COAT),
            eyesColor: getRandomIndex(COLORS_EYES),
          }
      );
    }
    return alikeCharacters;
  };

  var similarCharacters = renderSimilarCharacters(4);

  window.data = {
    COLORS_COAT: COLORS_COAT,
    COLORS_EYES: COLORS_EYES,
    similarCharacters: similarCharacters
  };

})();
