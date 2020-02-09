'use strict';

(function () {

  var BOX_WIDTH = 420;
  var BOX_HEIGHT = 270;
  var BOX_X = 100;
  var BOX_Y = 10;
  var GAP = 10;
  var SPACE = 50;
  var FONT_GAP = 16;
  var COLUMN_WIDTH = 40;
  var COLUMN_HEIGHT = 150;

  var renderBox = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, BOX_WIDTH, BOX_HEIGHT);
  };

  var renderText = function (ctx, text, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000000'; // цвет по умолчанию
    ctx.fillStyle = color; // Переопределение цвета, если нужно
    ctx.fillText(text, x, y);
  };

  var getMaxTime = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return Math.floor(maxElement);
  };

  var getRandomNumber = function (min, max) {
    return Math.round(min + (max - min) * Math.random());
  };


  window.renderStatistics = function (ctx, names, times) {

    renderBox(ctx, BOX_X + GAP, BOX_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderBox(ctx, BOX_X, BOX_Y, '#FFFFFF');

    renderText(ctx, 'Ура вы победили!', BOX_X + GAP * 2, BOX_Y + GAP * 3);
    renderText(ctx, 'Список результатов:', BOX_X + GAP * 2, BOX_Y + GAP * 3 + FONT_GAP);

    var maxTime = getMaxTime(times);

    for (var i = 0; i < names.length; i++) {

      var coordinateX = BOX_X + SPACE + (COLUMN_WIDTH + SPACE) * i;
      var currentTime = Math.floor(times[i]);
      var currentColumnHeight = COLUMN_HEIGHT * currentTime / maxTime;
      var randomColor = 'hsl(' + 240 + ', ' + getRandomNumber(10, 90) + '%' + ', ' + getRandomNumber(10, 90) + '%' + ')';

      renderText(ctx, currentTime, coordinateX, BOX_HEIGHT - FONT_GAP - (GAP * 2) - currentColumnHeight);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = randomColor;
      }

      ctx.fillRect(coordinateX, BOX_HEIGHT - GAP - FONT_GAP - currentColumnHeight, COLUMN_WIDTH, currentColumnHeight);

      renderText(ctx, names[i], coordinateX, BOX_HEIGHT);
    }
  };

})();
