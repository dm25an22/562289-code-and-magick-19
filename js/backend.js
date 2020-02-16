'use strict';

(function () {

  var error = function (status) {

    var mistake;

    switch (status) {

      case 301:
        mistake = 'перемещено навсегда';
        break;

      case 302:
        mistake = 'перемещено временно';
        break;

      case 307:
        mistake = 'временное перенаправление';
        break;

      case 400:
        mistake = 'Неверный запрос';
        break;

      case 401:
        mistake = 'Пользователь не авторизован';
        break;

      case 404:
        mistake = 'Ничего не найдено';
        break;

      case 410:
        mistake = 'удалён';
        break;

      case 500:
        mistake = 'внутренняя ошибка сервера';
        break;

      case 503:
        mistake = 'сервис недоступен';
        break;

      case 521:
        error = 'веб-сервер не работает';
        break;

      default:
        mistake = 'Cтатус ответа: ' + status;

    }

    return mistake;
  };


  var getError = function (message) {
    var node = document.createElement('div');

    node.style.minWidth = '300px';
    node.style.height = '30px';
    node.style.lineHeight = '30px';
    node.style.background = 'red';
    node.style.position = 'fixed';
    node.style.zIndex = '100';
    node.style.textAlign = 'left';
    node.style.padding = '0 10px';
    node.style.color = 'fff';
    node.style.fontSize = '16px';
    node.textContent = 'Данные о похожих волшебниках : ' + message;

    document.body.insertAdjacentElement('afterbegin', node);
  };


  var load = function (url, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    var StatusCodeOK = 200;
    var TIMEOUT_IN_MS = 10000;

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      if (xhr.status === StatusCodeOK) {
        onLoad(xhr.response);
      } else {
        onError(error(xhr.status));
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;


    xhr.open('GET', url);
    xhr.send();

  };


  var save = function (url, data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    var StatusCodeOK = 200;

    xhr.addEventListener('load', function () {

      if (xhr.status === StatusCodeOK) {
        onLoad(xhr.response);
      } else {
        onError(error(xhr.status));
      }

    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open('POST', url);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save,
    getError: getError
  };

})();
