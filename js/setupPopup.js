'use strict';

(function () {

  var ESC_KEY = window.keysCode.ESC_KEY;
  var ENTER_KEY = window.keysCode.ENTER_KEY;
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var nameInput = setup.querySelector('.setup-user-name');


  var onPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  };

  var onOpenEnterPress = function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  };

  var onCloseEnterPress = function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var resetPosition = function () {
    setup.style.left = '';
    setup.style.top = '';
  };


  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    resetPosition();
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', onOpenEnterPress);

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', onCloseEnterPress);

  nameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  nameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  window.setupPopup = {
    closePopup: closePopup
  }

})();
