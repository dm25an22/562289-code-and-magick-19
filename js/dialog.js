'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var upload = setup.querySelector('.upload');


  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var strartCoord = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: strartCoord.x - moveEvt.clientX,
        y: strartCoord.y - moveEvt.clientY
      };

      strartCoord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          setup.removeEventListener('click', onClickPreventDefault);
        };
        setup.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();

