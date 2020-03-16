'use strict';

(function () {

  var inputFile = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  inputFile.addEventListener('change', function (evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  });

})();
