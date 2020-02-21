'use strict';

(function () {

  var form = document.querySelector('.setup-wizard-form');
  var closePopup = window.setupPopup.closePopup;

  var onSuccess = function () {
    closePopup();
  };

  var getError = window.backend.getError;

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var formData = new FormData(form);
    window.backend.save(form.action, 'POST', onSuccess, getError, formData);
  });

})();
