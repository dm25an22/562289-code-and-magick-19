'use strict';

(function () {

  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var MAX_WIZARDS = 4;

  var createSimilarItem = function (data) {
    var setupSimilarItem = similarWizardTemplate.querySelector('.setup-similar-item').cloneNode(true);

    var setupSimilarLabel = setupSimilarItem.querySelector('.setup-similar-label');
    setupSimilarLabel.textContent = data.name;

    var wizardCoat = setupSimilarItem.querySelector('.wizard-coat');
    wizardCoat.style.fill = data.colorCoat;

    var wizardEyes = setupSimilarItem.querySelector('.wizard-eyes');
    wizardEyes.style.fill = data.colorEyes;

    return setupSimilarItem;
  };

  var onSuccess = function (data) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_WIZARDS; i++) {
      fragment.append(createSimilarItem(data[i]));
    }

    setupSimilarList.append(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };


  var getError = window.backend.getError;

  window.backend.load('https://js.dump.academy/code-and-magick/data', onSuccess, getError);

})();
