'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLORS_FAIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var nameInput = setup.querySelector('.setup-user-name');

var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardCoatInput = setup.querySelector('input[name=coat-color]');

var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name=eyes-color]');

var firball = setup.querySelector('.setup-fireball-wrap');
var firballInput = setup.querySelector('input[name=fireball-color]');

var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getRandomIndex = function (min, arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
}


var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
}

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup()
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

nameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
});

nameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

wizardCoat.addEventListener('click', function () {
  var color = getRandomIndex(0, COLORS_COAT);
  wizardCoat.style.fill = color;
  wizardCoatInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getRandomIndex(0, COLORS_EYES);
  wizardEyes.style.fill = color;
  wizardEyesInput.value = color;
});

firball.addEventListener('click', function () {
  var color = getRandomIndex(0, COLORS_FAIREBALL);
  firball.style.background = color;
  firball.value = color;
});


