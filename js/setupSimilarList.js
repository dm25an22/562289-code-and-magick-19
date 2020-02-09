'use strict';

(function () {
  var similarCharacters = window.data.similarCharacters;
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var createSimilarItem = function (arr) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
      var setupSimilarItem = similarWizardTemplate.querySelector('.setup-similar-item').cloneNode(true);

      var setupSimilarLabel = setupSimilarItem.querySelector('.setup-similar-label');
      setupSimilarLabel.textContent = arr[i].name;

      var wizardCoat = setupSimilarItem.querySelector('.wizard-coat');
      wizardCoat.style.fill = arr[i].coatColor;

      var wizardEyes = setupSimilarItem.querySelector('.wizard-eyes');
      wizardEyes.style.fill = arr[i].eyesColor;

      fragment.append(setupSimilarItem);
    }
    return fragment;
  };

  var similarItem = createSimilarItem(similarCharacters);
  setupSimilarList.append(similarItem);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

})();
