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

  var form = document.querySelector('.setup-wizard-form');
  var closePopup = window.setupPopup.closePopup;

  var onSuccess = function () {
    closePopup();
  };

  var getError = window.backend.getError;

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var formData = new FormData(form);
    window.backend.save(form.action, formData, onSuccess, getError);
  });

})();
