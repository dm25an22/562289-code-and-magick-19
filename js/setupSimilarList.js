'use strict';

(function () {

  var coatColor;
  var eyesColor;
  var wizards = [];

  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var MAX_WIZARDS = 4;

  var createSimilarItem = function (wizard) {
    var setupSimilarItem = similarWizardTemplate.querySelector('.setup-similar-item').cloneNode(true);

    var setupSimilarLabel = setupSimilarItem.querySelector('.setup-similar-label');
    setupSimilarLabel.textContent = wizard.name;

    var wizardCoat = setupSimilarItem.querySelector('.wizard-coat');
    wizardCoat.style.fill = wizard.colorCoat;

    var wizardEyes = setupSimilarItem.querySelector('.wizard-eyes');
    wizardEyes.style.fill = wizard.colorEyes;

    return setupSimilarItem;
  };

  var render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber;

    takeNumber = data.length > MAX_WIZARDS ? MAX_WIZARDS : data.length;
    setupSimilarList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      fragment.append(createSimilarItem(data[i]));
    }

    setupSimilarList.append(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    render(wizards.slice().sort(function (left, right) {
      return getRank(right) - getRank(left);
    }));
  };

  var onSuccess = function (data) {
    wizards = data;
    updateWizards();
  };

  var getError = window.backend.getError;

  window.backend.load('https://js.dump.academy/code-and-magick/data', 'GET', onSuccess, getError);

})();
