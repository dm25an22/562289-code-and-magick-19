'use strict';

(function () {

  var COLORS_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var getRandomIndex = window.functionsRandom.getRandomIndex;

  var setup = document.querySelector('.setup');


  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');

  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');

  var fireball = setup.querySelector('.setup-fireball-wrap');
  var firebalInput = setup.querySelector('input[name=fireball-color]');

  var coatColor;
  var eyesColor;


  wizardCoat.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_COAT);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
    coatColor = color;
    updateWizards();
  });

  wizardEyes.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_EYES);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
    eyesColor = color;
    updateWizards();
  });

  fireball.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_FIREBALL);
    fireball.style.background = color;
    firebalInput.value = color;
  });


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

  var wizards = [];

  var render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber;

    var takeNumber = data.length > MAX_WIZARDS ? MAX_WIZARDS : data.length;   
    setupSimilarList.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      fragment.append(createSimilarItem(data[i]));
    }
    
    setupSimilarList.append(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var updateWizards = function () {

    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    })

    var sameCoatWizards = wizards.filter(function(it) {
      return it.colorCoat === coatColor;
    });

    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    var filteredWizards = sameCoatAndEyesWizards.concat(sameCoatWizards).concat(sameEyesWizards).concat(wizards);

    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });
    render(uniqueWizards);
  };


  var onSuccess = function (data) {
    wizards = data;
    updateWizards();
  };


  var getError = window.backend.getError;

  window.backend.load('https://js.dump.academy/code-and-magick/data', 'GET', onSuccess, getError);

})();
