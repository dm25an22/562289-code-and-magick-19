'use strict';

var setup = document.querySelector('.setup');

var FIRST_NAME = ['Иван Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLORS_FAIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];



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




var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

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

