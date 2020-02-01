'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var firstNames = ['Иван Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


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
          name: getRandomIndex(firstNames) + ' ' + getRandomIndex(lastNames),
          coatColor: getRandomIndex(coatColors),
          eyesColor: getRandomIndex(eyesColors),
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


