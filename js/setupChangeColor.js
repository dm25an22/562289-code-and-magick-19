'use strict';

(function () {

  var COLORS_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomIndex = window.functionsRandom.getRandomIndex;
  var COLORS_COAT = window.data.COLORS_COAT;
  var COLORS_EYES = window.data.COLORS_EYES;

  var setup = document.querySelector('.setup');


  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name=coat-color]');

  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name=eyes-color]');

  var fireball = setup.querySelector('.setup-fireball-wrap');
  var firebalInput = setup.querySelector('input[name=fireball-color]');


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

  fireball.addEventListener('click', function () {
    var color = getRandomIndex(COLORS_FIREBALL);
    fireball.style.background = color;
    firebalInput.value = color;
  });

})();
