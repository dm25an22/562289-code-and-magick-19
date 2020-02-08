'use strict';

(function () {

  var COLORS_FAIREBAL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomIndex = window.functionsRandom.getRandomIndex;
  var COLORS_COAT = window.data.COLORS_COAT;
  var COLORS_EYES = window.data.COLORS_EYES;

  var setup = document.querySelector('.setup');


  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');

  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');

  var firball = setup.querySelector('.setup-fireball-wrap');
  var firbalInput = setup.querySelector('input[name=fireball-color]');


  wizardCoat.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_COAT);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_EYES);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  });

  firball.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_FAIREBAL);
    firball.style.background = color;
    firbalInput.value = color;
  });

})();
